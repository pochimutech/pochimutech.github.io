# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository type and purpose

This repository contains the **static build output** of a Next.js application (as indicated by the `_next` directory and `vercel.svg`), not the original source code. You will primarily work with pre-generated HTML, text data files, and static assets intended to be served as a static site (e.g. via GitHub Pages or a static host).

There is **no package manager or framework configuration** checked in here (no `package.json`, lockfiles, or Next.js config), so build, lint, and test commands for the underlying app are not discoverable from this repository alone.

## Commands and workflows

### Local preview of the static site

To preview this static site locally from the project root:

```bash path=null start=null
npx serve .
```

If `npx` is not available, you can fall back to Python's built-in HTTP server (Python 3):

```bash path=null start=null
python -m http.server 4173
```

Then open the reported localhost URL (e.g. `http://localhost:4173`) in a browser.

### What you *cannot* do from this repo

- There is **no test suite or build configuration** present, so commands like `npm test`, `npm run build`, or `next dev` are not defined here.
- Any rebuilds or exports of the site must be performed in the **upstream application repository** (where the Next.js source lives) and then exported/copied into this repo.

When a user asks to "build", "lint", or "run tests" for this project, first clarify whether they are working in this static output repo or in the upstream source repo. In this repo, those actions are not directly possible without that upstream context.

## High-level architecture and layout

### Top-level structure

From the repository root you will see, among others:

- Static HTML entry points and metadata:
  - `index.html`, `index.txt` — root landing page and associated text metadata.
  - `404.html`, `_not-found/`, `_not-found.html`, `_not-found.txt` — not-found handling.
  - `en.html`, `ja.html`, `zh.html` plus corresponding `.txt` files — language-specific root entry points.
  - `sitemap.xml`, `robots.txt`, `app-ads.txt` — search/discovery and ads configuration.
  - `google*.html` — search engine verification file.
- A standalone static sub-app: `PrimeFactorization/index.html`.
- Localized content roots: `en/`, `ja/`, `zh/`.
- Next.js runtime and bundled assets: `_next/`.
- Static media assets: `images/`, `favicon.ico`, `globe.svg`, `window.svg`, `next.svg`, `vercel.svg`, etc.

### Localization and per-app structure

The site is organized into multiple small tools/apps that are localized into (at least) English, Japanese, and Chinese. For example under `en/` you will see entries like:

- `en/ai-greats`, `en/ai-greats.html`, `en/ai-greats.txt`
- `en/airport-code`, `en/airport-go`, `en/blue-library`, `en/currency-converter`, `en/haiku-ai`, `en/household-account`, `en/prime-rush`, `en/senryu-ai`, `en/summarise-ai`, each with `.html` and `.txt` variants

Each of these represents a localized micro-app. The pattern repeats under `ja/` and `zh/` with analogous directories and files for those locales.

Within a given localized app folder (e.g. `en/ai-greats/`), you will find additional text metadata and subpages, such as:

- `__next.$d$lang.$d$appPath.__PAGE__.txt`
- `__next.$d$lang.$d$appPath.txt`
- `__next.$d$lang.txt`
- `__next._full.txt`, `__next._head.txt`, `__next._index.txt`, `__next._tree.txt`
- Nested routes like `terms/`, `terms.html`, `terms.txt` when that app defines additional pages

These `__next.*.txt` files and related structures are **generated Next.js artifacts** describing routing, page trees, and serialized data for the app router. Treat them as build artifacts rather than hand-authored content.

### Next.js build artifacts

The `_next/` directory contains the compiled JS bundles, CSS, and other runtime assets produced by the Next.js build:

- `_next/static/chunks/*.js`, `turbopack-*.js`, etc. — hashed bundles for the client.
- `_next/static/*/_buildManifest.js`, `_ssgManifest.js` — manifest files used by the runtime.

These files are tightly coupled to the upstream source and build configuration. Avoid editing them directly; changes are likely to break the site and will be overwritten the next time the site is rebuilt.

## Working with this repository as an agent

- **Prefer upstream changes:** When a user wants to modify behavior, routing, or non-trivial UI, the correct place is usually the upstream Next.js source repo. Changes made directly to these build artifacts should be considered temporary or emergency fixes.
- **Safe edits here:** Minor content tweaks (simple text changes) to `*.html` or `*.txt` files can be done directly if the user explicitly requests it and understands that future exports may overwrite those edits.
- **Routing mental model:**
  - Public URLs generally map to `/<locale>/<app>` patterns (e.g. `/en/ai-greats`, `/ja/prime-rush`, `/zh/currency-converter`).
  - Each of those maps to an HTML file under the matching directory (e.g. `en/ai-greats.html`) plus optional nested routes under `en/ai-greats/`.
  - Locale root pages (`/en`, `/ja`, `/zh`) map to `en.html`, `ja.html`, `zh.html` in the project root and their corresponding locale directories.
- **Before adding new files or folders**, confirm with the user whether they expect those changes to survive future static exports from the upstream app, and document any such manual additions clearly (e.g. in this AGENTS file or a README) so they are not accidentally deleted.
