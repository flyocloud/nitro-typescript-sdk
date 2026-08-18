# Upgrading from v1.6 to v1.7

v1.7 regenerates the SDK against **OpenAPI document 2.30** (was 2.28.1). No
endpoint, parameter, or method signature changed. One model was removed and the
`routes` property was retyped on two models — see below.

## The `Routes` model is gone

`routes` used to be a `$ref` to a named `Routes` schema; 2.30 inlines it as a
free-form object. The generator therefore no longer emits `src/models/Routes.ts`,
and these exports **no longer exist**:

- `Routes` (the type)
- `RoutesFromJSON`, `RoutesFromJSONTyped`
- `RoutesToJSON`, `RoutesToJSONTyped`
- `instanceOfRoutes`

⚠️ **Fix this:** any `import { Routes } from '@flyo/nitro-typescript'` — or a
`Routes` type annotation — stops compiling. The value it described is unchanged,
so replace the annotation with the inline type:

```ts
// before
import type { Routes } from '@flyo/nitro-typescript';
function firstRoute(routes: Routes) { … }

// after
function firstRoute(routes: { [key: string]: any }) { … }
```

Deserialization is effectively unchanged: `RoutesFromJSON()` spread the raw map
through untouched, and `routes` is now assigned directly instead. The single
observable difference is an explicit `"_empty": null` from the API — v1.6 coerced
it to `undefined` (dropping the key), v1.7 preserves the `null`. Use
`routes._empty == null` if you need to treat both alike.

## `routes` is now `{ [key: string]: any }`

On both `EntityInterface` and `EntityinterfaceInner`:

| Model | v1.6 | v1.7 |
| --- | --- | --- |
| `EntityInterface.routes` | `{ [key: string]: string }` | `{ [key: string]: any }` |
| `EntityinterfaceInner.routes` | `Routes` | `{ [key: string]: any }` |

`EntityInterface.routes` was previously typed as a map of **strings**, which was
wrong: the map always carried a boolean `_empty` key alongside the URL paths, so
`routes._empty` was declared `string` while `false` arrived at runtime. The
values are now `any`, which describes the mixed map honestly.

- ✅ Reading a path (`routes.detail`) still type-checks and still returns a
  string.
- ✅ `EntityInterface.routes._empty` is now assignable to `boolean` without a
  cast. (`EntityinterfaceInner.routes` already declared `_empty?: boolean` via
  `Routes`.)
- ⚠️ You lose `string` inference on the values. Code that relied on it — passing
  `routes.detail` straight into a `string` parameter under `noImplicitAny` — keeps
  working, but a narrowing guard is worth adding where the key is dynamic:

```ts
const path = routes[key];
if (typeof path !== 'string') return undefined;
```

## Everything else

No endpoint was added, removed, or changed. Every API method keeps its
signature, and every other model is identical apart from the OpenAPI version
string in its header comment.

# Upgrading from v1.5 to v1.6

v1.6 regenerates the SDK with **openapi-generator 7.24.0** (was 7.14.0). The
OpenAPI document is unchanged apart from its version string (2.28 → 2.28.1) —
no endpoint, parameter, or model shape changed.

Most consumers need no code change, but read
[What could break](#what-could-break) first: a value that previously never
arrived (`meta_json.image === false`) now does.

## The fix: `meta_json.image` survives deserialization

`meta_json.image` is declared in the spec as a `oneOf` of two **primitives** — a
URL string when a meta image is set, `false` when it is not. openapi-generator
7.14.0 had no code path for a `oneOf` of primitives and fell through to its
composed-object fallback, so `MetaImageFromJSON()` returned `{}` for every input:

```js
// v1.5.0
MetaImageFromJSON('https://storage.flyo.cloud/1_Abc123_og-image.jpg')  // → {}
MetaImageFromJSON(false)                                               // → {}
```

Every meta image URL was destroyed, and pages shipped no `og:image` or
`twitter:image`. Nothing failed loudly: the declared type
(`MetaImage = boolean | string`) was correct, so TypeScript promised a primitive
while the runtime handed over an object.

7.24.0 generates the missing `typeof json === 'string' | 'boolean'` branches.
Covered by regression tests in
[`tests/deserialization.test.js`](tests/deserialization.test.js) — 10 of those 15
tests fail against a v1.5 bundle.

| Version | `meta_json.image` | Note |
| --- | --- | --- |
| ≤ 1.4.0 | ✅ works | spec declared `image` as a plain `string` |
| **1.5.0** | ❌ **always `{}`** | primitive `oneOf` + generator 7.14.0 |
| 1.6.0 | ✅ works | generator 7.24.0 |

Only 1.5.0 is affected — but a `^1.4.0` range **resolves to 1.5.0**, so a
dependency pinned that loosely is affected too.

## What could break

### 1. `meta_json.image` can now actually be `false`

In v1.5 the value was *always* `{}`, so code never saw a boolean. Now the real
value arrives, and "no meta image set" is `false`:

- ✅ `typeof image === 'string'` guards — dropped the image in v1.5, now pass a
  real URL through. No change needed.
- ✅ Truthiness checks (`if (image)`) — `false` is falsy where `{}` was truthy,
  so these stop emitting a broken `[object Object]?w=1200` URL.
- ⚠️ **Fix this:** code that assumes a string without checking — `image.length`,
  `image.includes('?')`, `` `${image}?w=1200` ``. These now hit `false` and
  either throw or serialize as `"false?w=1200"`.

Guard on the type, not on truthiness — an empty string is not a usable URL
either:

```ts
if (typeof image !== 'string' || !image) return undefined;
```

### 2. `PagePropertyValue.value` preserves an explicit `null`

A JSON `null` used to be coerced to `undefined`, so "explicitly null" and "not
sent" were indistinguishable. They are now distinct.

- ✅ `value ?? fallback` and `if (!value)` behave identically.
- ⚠️ `value === undefined` is now `false` for an explicitly-null property — use
  `value == null` if you mean "either".
- ⚠️ `'value' in prop` / `Object.keys()` / `JSON.stringify()` now include a
  `value: null` entry that used to be omitted.

### 3. Nothing else

No endpoint or parameter changed, no model property was added, removed, or
retyped, and every existing method keeps its signature. `ContainerPage.type`
shows a changed `@type` **JSDoc comment** only — `ContainerPageTypeEnum` already
existed in v1.5 and the runtime is identical.

## What else changed

- **New `…RequestOpts()` on every API method** (`configRequestOpts()`, …) —
  returns the resolved path, query, and headers without issuing the request.
  Purely additive; `config()` and `configRaw()` are unchanged.
- **`instanceof` now works on `ResponseError`, `FetchError`, `RequiredError`.**
  Each constructor restores its prototype chain, so `catch (e) { if (e instanceof
  ResponseError) … }` is reliable regardless of compilation target.
- `multipart/form-data` is matched by prefix, so a `; boundary=…` suffix is
  recognised. New `anyToJSON()` export, unused by this API's models.
- **Repo-side:** 7.24.0 emits a `docs/` tree and `tsconfig.esm.json` that this
  repo does not use (docs live in `README.md`, the bundle is built by vite).
  Both are listed in `.openapi-generator-ignore` to keep regeneration a clean
  diff.

## For client library maintainers

For `nitro-next`, `nitro-vue3`, and any project consuming this SDK directly:

1. **Bump the dependency to `^1.6.0`.** Raising the floor *is* the fix — nothing
   in your own code needs to change for meta images to start working.
2. **Audit every read of `page.meta_json.image`** against §1 above. Guard with
   `typeof image === 'string'`, never truthiness alone.
3. **Audit reads of `PagePropertyValue.value`** for `=== undefined` comparisons
   (§2).
4. **`nitro-nuxt` and `nitro-astro` are not affected** — they fetch the API as
   raw JSON and never run values through `PageFromJSON()`, so their meta images
   were always correct. Only consumers of `@flyo/nitro-typescript` saw the bug.
5. **`entity.entity_image` was never affected** — a plain `string` in the spec,
   so entity metadata worked throughout.
