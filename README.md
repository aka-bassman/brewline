[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/aka-bassman/brewline?quickstart=1)
# brewline

This workspace was created with [Akan.js](https://akanjs.com), a Bun-first full-stack TypeScript framework.

Akan lets you write business code once and connect it across web, server, fetch clients, state, database contracts,
and deployment artifacts with strict conventions.

## Quick Start

Install dependencies:

```bash
bun install
bun install -g @akanjs/cli
```

Start the app:

```bash
akan start brewline --open
```

Build for production:

```bash
akan build brewline
```

## Project Structure

```text
apps/brewline/
|-- akan.config.ts      # app configuration
|-- page/               # route pages
|-- lib/                # app domain modules
|-- ui/                 # app UI components
|-- env/                # runtime environment contracts
`-- public/             # static assets

libs/                   # shared libraries for multiple apps
pkgs/                   # local packages, if your workspace grows into them
```

## Where To Start

- Edit `apps/brewline/page/_index.tsx` to change the first page.
- Edit `apps/brewline/akan.config.ts` when the app needs routes, domains, base paths, or deployment options.
- Add business modules under `apps/brewline/lib/` when your app needs typed domain logic.

## Useful Commands

```bash
akan start brewline
akan build brewline
akan lint brewline
```

## Learn More

- Akan.js docs: https://akanjs.com/docs
- Package: https://www.npmjs.com/package/akanjs
