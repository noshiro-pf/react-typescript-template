# react-typescript-template

<!--
[![codecov](https://codecov.io/gh/noshiro-pf/react-typescript-template/branch/main/graph/badge.svg?token=********)](https://codecov.io/gh/noshiro-pf/react-typescript-template)
 -->

Template Repository for React & TypeScript Applications

## Key Features

- 🛡️ Strict ESLint setup via [eslint-config-typed](https://github.com/noshiro-pf/eslint-config-typed) (`eslintConfigForTypeScript` + `eslintConfigForReact`), with `jiti` enabling a TypeScript `eslint.config.mts`.
- 📝 Built-in spelling and formatting checks with cspell / markdownlint / Prettier.
- 🧪 Vitest (jsdom environment) for unit testing with coverage; workflows included to upload results to [codecov.io](https://about.codecov.io/).
- 🔄 CI runs lint / type-check / test, enforces no post-Prettier diffs, and sends coverage to Codecov.
- 🏗️ `build` generates per-directory `index.mts`, bundles the app with [Vite](https://vite.dev/), and runs type checking.
- 🌐 GitHub Actions builds the app with Vite and auto-deploys it to GitHub Pages on merges to `main`.
- 📦 `pnpm` provides strict dependency management (`pnpm-lock.yaml` included).
- 📦 Dependabot auto-creates PRs for npm dependencies and GitHub Actions updates.
- 🔐 [github-settings-as-code](https://github.com/noshiro-pf/github-settings-as-code) tracks repository settings and rulesets as code, detecting changes via diffs.
- 🔄 `AGENTS.md` is shared via submodule to sync operational rules across repositories.

<!--
## Documentation

- Live demo: <https://noshiro-pf.github.io/react-typescript-template/>
-->

## Local Setup

```sh
git clone https://github.com/{owner}/{repo}.git
pnpm i
```

- Rename the part that says "react-typescript-template" (in `package.json`, `README.md`, `index.html`, etc).
- Update README.md
- Run `pnpm run check-all` and fix errors if exist.

## GitHub Setup

1. Run `pnpm run repo-settings:apply` to update GitHub Repository Settings.
2. Set Actions secrets on the GUI settings page (<https://github.com/{owner}/{repo}/settings/secrets/actions>).
