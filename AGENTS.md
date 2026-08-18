# AGENTS.md

Generated OpenAPI client for `@flyo/nitro-typescript`. `apis/`, `src/`, `runtime.ts` and the
models come out of [generate.sh](generate.sh) (`openapi-generator-cli`, `typescript-fetch`,
config in [config.json](config.json)) against `https://api.flyo.cloud/nitro/v1/openapi`.
The published bundle is built by vite ([vite.config.js](vite.config.js)), not by `tsc`.

Files the generator must **not** clobber are listed in
[.openapi-generator-ignore](.openapi-generator-ignore) — `package.json`, `tsconfig.json`,
`README.md`, plus the 7.24.0 supporting files this repo does not use (`tsconfig.esm.json`,
`docs/**`). Hand-edit those; regenerating everything else is expected.

## Never bump the version in package.json

`package.json` holds a permanent `0.0.1` stub. **Leave it at `0.0.1`.** Do not bump it as
part of a change, a regeneration, or a "release x.y.z" commit, and do not put a version
number in `package-lock.json` either.

Publishing is done by [.github/workflows/release.yml](.github/workflows/release.yml), which
fires on a **published GitHub release** and does:

```sh
npm version ${TAG_NAME#v} --no-git-tag-version --allow-same-version
npm publish --access public
```

The **git tag is the single source of truth** for the version. A version committed into
`package.json` ahead of the release used to make `npm version` abort with
`npm error Version not changed`, and the publish step never ran — that is exactly how
`1.6.1` and `1.7.0` ended up tagged but missing from npm while `1.6.0` stayed the latest
thing installable. `--allow-same-version` now stops that from being fatal, but the stub
stays: nothing in the repo should claim a version.

So: to release, cut a GitHub release with the tag (`1.8.0` or `v1.8.0` — the leading `v` is
stripped). Nothing to commit, no version bump PR. If a release did fail, re-running the job
replays the old workflow definition, so cut a fresh release instead.

Reference a version only in prose where it is genuinely about a released version — the
upgrade note in [README.md](README.md) and [UPGRADE.md](UPGRADE.md) are the legitimate cases.

## Tests

`npm test` (vitest, [tests/](tests/)). [.github/workflows/test.yml](.github/workflows/test.yml)
runs `npm ci && npm test && npm run build` on pushes and PRs to `main`.

Fixtures use **invented** data — no real customer content, no real API tokens. Keep it that
way when adding or refreshing a fixture.
