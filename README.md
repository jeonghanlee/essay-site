# Essay Site

## Scope

This repository contains an Astro static site for long-form essays owned at the source.

**Out of scope:** social network credential storage, automatic social publishing, comments, analytics, and platform-specific engagement workflows.

## Architecture

- `src/pages/index.astro` serves the default EN home page with KO as a separate selection.
- `src/pages/en/` contains EN archive and essay routes.
- `src/pages/ko/` contains KO archive and essay routes.
- `src/content/essays/ko/` stores Korean essay source files.
- `src/content/essays/en/` stores English essay source files.
- `canonicalId` connects related essays across languages without requiring every essay to have a counterpart.
- `src/lib/site.ts` defines site metadata, route helpers, UI copy, language labels, and date formatting.
- `src/styles/global.css` defines the shared visual system and KO font behavior.
- `src/pages/rss.xml.ts` publishes the combined feed.
- `src/pages/rss/ko.xml.ts` and `src/pages/rss/en.xml.ts` publish language-specific feeds.
- `social/` stores announcement drafts only. It is not part of the site build and must not contain tokens.
- `.github/workflows/deploy.yml` builds and deploys the static site to GitHub Pages.

## Content Model

Each essay uses Markdown frontmatter:

```yaml
title: "Essay title"
summary: "One short summary for archive pages and social cards."
language: "ko"
pubDate: 2026-06-13
updatedDate: 2026-06-13
canonicalId: "shared-topic-id"
slug: "stable-url-slug"
tags:
  - publishing
draft: false
feature: false
heroImage: "/images/essay-desk.png"
social:
  status: "drafted"
```

Draft essays remain in the content tree with `draft: true`. They are excluded from archive lists, RSS feeds, and generated essay pages.

## Writing Workflow

1. Add or edit an essay under `src/content/essays/en/` or `src/content/essays/ko/`.
2. Use a stable `slug` and a stable `canonicalId`.
3. Set `draft: true` until the essay is ready to publish.
4. Add `related` entries only when another essay should be explicitly linked.
5. Add or update matching announcement drafts under `social/` when a post should be announced.
6. Run the local build before publishing.

## Development

```bash
npm ci
npm run dev
npm run build
```

Default local path:

```bash
http://127.0.0.1:4321/essay-site/
```

## GitHub Pages

The default workflow targets a project Pages site. It derives:

- `SITE_URL` from `https://<repository-owner>.github.io`
- `BASE_PATH` from `/<repository-name>`

For a user Pages repository or custom domain, set repository variables `SITE_URL` and `BASE_PATH` before publishing.

The workflow currently listens to pushes on `main`. If the repository keeps `master`, update the workflow branch or rename the branch before relying on automatic deployment.

## Work Register

Project status and future work are tracked in `docs/milestone.md`.
