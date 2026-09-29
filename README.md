# Automatic Starlog

Create a changelog website from the GitHub releases of any repository, based on the [Starlog](https://github.com/doodlemarks/starlog) release notes theme for Astro.

![starlog-gh](https://github.com/doodlemarks/starlog/assets/2244813/9c5c2e46-665a-437e-a971-053db4dbff63)

- Releases of the main package are listed on the home page, while releases of every other package published from the repository are available on their own package pages.
- All release notes can be searched with the full-text search powered by [Pagefind](https://pagefind.app).
- Minor and major releases of the main package display a generated release image.
- Supports both dark and light modes.

Examples built from this template: [Starlight Changelog](https://github.com/trueberryless-org/starlight-changelog) and [Astro Changelog](https://github.com/trueberryless-org/astro-changelog).

## Configuration

1. Configure your project in [`src/consts.ts`](./src/consts.ts): the GitHub repository, the main package, the website and footer links.
2. Set the `site` option in [`astro.config.ts`](./astro.config.ts) to the URL of your deployed changelog.
3. Set the `PACKAGE_NAME` environment variable in [`.github/workflows/check-releases.yaml`](./.github/workflows/check-releases.yaml) to your npm package. The workflow checks for new versions daily and commits them to `data/latest.json`, which triggers a new deployment.
4. Optionally, add an Open Graph image to `public/og.png` and set `OgImage` to `/og.png` in [`src/consts.ts`](./src/consts.ts).

Releases need to be tagged as `package@version` (e.g. `@astrojs/starlight@1.0.0`), which is the default for repositories using [Changesets](https://github.com/changesets/changesets). Tags without a package name (e.g. `v1.0.0`) are attributed to the main package.

## Development

Releases are loaded from the GitHub API at build time. Set a `GITHUB_TOKEN` environment variable to load the complete release history, as unauthenticated requests are limited to the latest 1000 releases of a repository.

```sh
pnpm install
pnpm dev
```

The search index is generated at build time, so search is only available after running `pnpm build` and `pnpm preview`.

## License

Licensed under the MIT License, Copyright © trueberryless.

See [LICENSE](https://github.com/trueberryless-org/automatic-starlog-template/blob/main/LICENSE) for more information.
