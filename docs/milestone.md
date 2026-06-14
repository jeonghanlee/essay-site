# Essay Site Work Register

## Scope

This document tracks repository-local milestones, carry-forward items, and external gates for the essay site.

**Out of scope:** detailed essay text review, social account operation, credentials, analytics, comments, and engagement workflows.

Next session entry point: resolve the open `heroImage` decision on `six-months-on` in `src/content/essays/`, then make the first git commit on `master`. After that, start Content Operations in `docs/content.md`. Preserve the EN default home page, the separate KO archive, and the passing build.

## Work Register

| Topic | Work unit | Type | Status | Evidence or next action |
| :--- | :--- | :--- | :--- | :--- |
| Site foundation | Astro static site scaffold | Milestone | Complete | `npm run build` generates the static site, RSS feeds, and sitemap. |
| Site foundation | EN default home page with KO selection | Milestone | Complete | `/` renders the EN home page; `/ko/` remains the KO archive. |
| Content archive | Import current essays | Milestone | Complete | Current source essays are present under `src/content/essays/en/` and `src/content/essays/ko/`. |
| Content archive | Link the user-authored final essay and Claude essay | Milestone | Complete | `six-months-on` and `the-writer-you-can-recall` are related through frontmatter metadata. |
| Content archive | Frontmatter consistency (feature, sortOrder) | Milestone | Complete | ko `feature` aligned to `false`; `sortOrder: 50` added to the owning-the-essay pair; `npm run build` verified (2026-06-14). |
| Content archive | Author byline for the owning-the-essay pair | Carry-forward | Complete | Set to `Claude Opus 4.8 with Jeong Han Lee`, matching the three series essays (2026-06-14). |
| Content archive | six-months-on heroImage (borrowed cover) | Carry-forward | Open | Both languages reuse `the-writer-you-can-recall.png` (affects OG card). Keep / use `essay-desk.png` / supply `six-months-on.png`. |
| Typography | KO font baseline | Milestone | Complete | `Noto Sans KR` is loaded and KO pages use KO-specific font variables. |
| Repository docs | README handoff | Milestone | Complete | `README.md` documents architecture, content model, development, Pages deployment, and the work register. |
| Repository docs | Canonical work register | Milestone | Complete | `docs/milestone.md` is the repository-local source for future milestones. |
| Content operations | Authoring guide | Milestone | Not started | Create `docs/content.md` with frontmatter rules, publish checklist, related essay conventions, and draft handling. |
| Content operations | Social announcement guide | Milestone | Not started | Create `docs/social.md` or expand `social/README.md` with per-channel draft rules and canonical URL handling. |
| Content operations | Social draft cleanup decision | Carry-forward | Open | Decide whether scaffold announcement drafts stay as examples or are removed after real drafts are complete. |
| Publishing | Deploy workflow branch alignment | Milestone | Complete | `deploy.yml` push trigger changed `main` → `master` to match the local branch (2026-06-14). |
| Publishing | Repository remote creation | External gate | Blocked | Choose GitHub or GitLab and create the remote repository; no remote is configured yet. |
| Publishing | Pages deployment verification | External gate | Blocked | After the remote exists, push the default branch and verify the published URL, RSS feeds, and sitemap. |
| Publishing | Production URL metadata | External gate | Blocked | Set `SITE_URL` and `BASE_PATH` repository variables if the default project Pages URL is not the target URL. |
| Quality | Link and RSS verification | Milestone | Not started | Add a repeatable check for internal links, alternate links, RSS XML, and sitemap output. |
| Quality | Responsive visual pass | Milestone | Not started | Check desktop and mobile layouts for the home page, archives, and essay detail pages. |
| Content archive | Tag taxonomy | Carry-forward | Open | Decide whether tags stay as stable English identifiers or gain display labels per archive. |
| Typography | Self-host KO font decision | Carry-forward | Conditional | Consider self-hosting only if external Google Fonts loading is undesirable for the final hosting policy. |

Tally: Complete 10 · Not started 4 · Open 3 · Blocked 3 · Conditional 1

## Status Notes

- The repository is initialized locally and has no commits yet.
- No remote repository is configured.
- The deployment workflow now targets `master`, matching the local branch (aligned 2026-06-14).
- This register is shared by Codex and Claude. Codex authored it (2026-06-14); Claude recorded branch alignment, frontmatter consistency, and author bylines the same day.
- Future milestone updates should be made here, not in agent memory.
