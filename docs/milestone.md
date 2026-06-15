# Essay Site Work Register

## Scope

This document tracks repository-local milestones, carry-forward items, and external gates for the essay site.

**Out of scope:** detailed essay text review, social account operation, credentials, analytics, comments, and engagement workflows.

Next session entry point: add previous/next essay navigation to the essay detail pages (`src/pages/en/essays/[slug].astro`, `src/pages/ko/essays/[slug].astro`) with an ordering helper in `src/lib/site.ts`; essays form a series via `sortOrder`, and there is currently no prev/next link. Then handle the `six-months-on` heroImage and review the uncommitted Codex social drafts under `social/linkedin/`. Preserve the live deploy and the passing build.

## Work Register

| Topic | Work unit | Type | Status | Evidence or next action |
| :--- | :--- | :--- | :--- | :--- |
| Site foundation | Astro static site scaffold | Milestone | Complete | `npm run build` generates the static site, RSS feeds, and sitemap. |
| Site foundation | EN default home page with KO selection | Milestone | Complete | `/` renders the EN home page; `/ko/` remains the KO archive. |
| Site foundation | Previous/next essay navigation | Milestone | Not started | No prev/next link between essays today. Add prev/next on essay detail pages (series order via `sortOrder`); handle first/last edge cases. |
| Content archive | Import current essays | Milestone | Complete | Current source essays are present under `src/content/essays/en/` and `src/content/essays/ko/`. |
| Content archive | Link the user-authored final essay and Claude essay | Milestone | Complete | `six-months-on` and `the-writer-you-can-recall` are related through frontmatter metadata. |
| Content archive | Frontmatter consistency | Milestone | Complete | Stripped trailing whitespace from essay frontmatter `tags:` / `related:` lines (commit 51b34b4). |
| Content archive | owning-the-essay / leaving-social-feeds pair | Milestone | Complete | (Retired) Removed as a byproduct with its three social drafts on 2026-06-14; recoverable from commit 51b34b4. |
| Content archive | six-months-on heroImage (borrowed cover) | Carry-forward | Open | Both languages reuse `the-writer-you-can-recall.png` (affects OG card). Keep / use `essay-desk.png` / supply `six-months-on.png`. |
| Sharing | Social share links (X, Facebook, LinkedIn) | Milestone | Complete | `ShareLinks.astro` on essay detail pages; link-share only, loaded per language (commit 8c8e11b). Instagram excluded (no web share endpoint). |
| Typography | KO font baseline | Milestone | Complete | KO content uses `Noto Serif KR` (명조), loaded on KO pages only; UI chrome keeps `Noto Sans KR` (commit 8c8e11b). |
| Typography | Self-host KO font decision | Carry-forward | Conditional | Decided to use Google Fonts (Noto Serif KR) rather than self-host; revisit only if external font loading becomes undesirable. |
| Repository docs | README handoff | Milestone | Complete | `README.md` documents architecture, content model, development, Pages deployment, and the work register. |
| Repository docs | Canonical work register | Milestone | Complete | `docs/milestone.md` is the repository-local source for future milestones. |
| Content operations | Authoring guide | Milestone | Not started | Create `docs/content.md` with frontmatter rules, publish checklist, related essay conventions, and draft handling. |
| Content operations | Social announcement guide | Milestone | Not started | Create `docs/social.md` or expand `social/README.md` with per-channel draft rules and canonical URL handling. |
| Content operations | Social draft cleanup decision | Carry-forward | Open | leaving-social-feeds drafts removed with the owning-the-essay pair; new Codex drafts under `social/linkedin/` (door, writer x2) are uncommitted and pending review. |
| Publishing | Deploy workflow branch alignment | Milestone | Complete | `deploy.yml` push trigger changed `main` → `master` to match the local branch (2026-06-14). |
| Publishing | Repository remote creation | Milestone | Complete | `origin` = `git@github.com:jeonghanlee/essay-site.git`; `master` pushed and tracking `origin/master`. |
| Publishing | Pages deployment verification | Milestone | Complete | Live at `https://jeonghanlee.github.io/essay-site/`; deploy workflow succeeds on push to `master`. |
| Publishing | Production URL metadata | External gate | Conditional | Using the default project Pages URL; set `SITE_URL` / `BASE_PATH` variables only for a custom domain. |
| Quality | Link and RSS verification | Milestone | Not started | Add a repeatable check for internal links, alternate links, RSS XML, and sitemap output. |
| Quality | Responsive visual pass | Milestone | Not started | Check desktop and mobile layouts for the home page, archives, and essay detail pages. |
| Content archive | Tag taxonomy | Carry-forward | Open | Decide whether tags stay as stable English identifiers or gain display labels per archive. |

Tally: Complete 13 · Not started 5 · Open 3 · Conditional 2

## Status Notes

- Live on GitHub Pages at `https://jeonghanlee.github.io/essay-site/`; deploys on push to `master`, latest from commit 8c8e11b.
- Remote `origin` = `git@github.com:jeonghanlee/essay-site.git`; `master` tracks `origin/master` and is in sync.
- The deployment workflow targets `master`.
- Codex's social drafts under `social/linkedin/` (door, writer x2) remain uncommitted and untracked.
- This register is shared by Codex and Claude. Codex authored it (2026-06-14); Claude committed the baseline, removed the owning-the-essay byproduct, switched KO content to Noto Serif KR, added social share links, and rewrote the hero (commits through 8c8e11b, 2026-06-15).
- Future milestone updates should be made here, not in agent memory.
