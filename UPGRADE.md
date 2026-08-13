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
MetaImageFromJSON('https://storage.flyo.cloud/…og-image.jpg')  // → {}
MetaImageFromJSON(false)                                       // → {}
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
