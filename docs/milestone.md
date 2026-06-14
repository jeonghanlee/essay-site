# Essay Site Work Register

## Scope

This document tracks repository-local milestones, carry-forward items, and external gates for the essay site.

**Out of scope:** detailed essay text review, social account operation, credentials, analytics, comments, and engagement workflows.

Next session entry point: commit the staged owning-the-essay removal, then decide the `six-months-on` `heroImage` in `src/content/essays/`. After that, review the uncommitted Codex social drafts under `social/linkedin/` and configure the repository remote. Preserve the EN default home page, the separate KO archive, and the passing build.

## Work Register

| Topic | Work unit | Type | Status | Evidence or next action |
| :--- | :--- | :--- | :--- | :--- |
| Site foundation | Astro static site scaffold | Milestone | Complete | `npm run build` generates the static site, RSS feeds, and sitemap. |
| Site foundation | EN default home page with KO selection | Milestone | Complete | `/` renders the EN home page; `/ko/` remains the KO archive. |
| Content archive | Import current essays | Milestone | Complete | Current source essays are present under `src/content/essays/en/` and `src/content/essays/ko/`. |
| Content archive | Link the user-authored final essay and Claude essay | Milestone | Complete | `six-months-on` and `the-writer-you-can-recall` are related through frontmatter metadata. |
| Content archive | Frontmatter consistency | Milestone | Complete | Stripped trailing whitespace from essay frontmatter `tags:` / `related:` lines (commit 51b34b4). |
| Content archive | owning-the-essay / leaving-social-feeds pair | Milestone | Complete | (Retired) Removed as a byproduct with its three social drafts on 2026-06-14; recoverable from commit 51b34b4. |
| Content archive | six-months-on heroImage (borrowed cover) | Carry-forward | Open | Both languages reuse `the-writer-you-can-recall.png` (affects OG card). Keep / use `essay-desk.png` / supply `six-months-on.png`. |
| Typography | KO font baseline | Milestone | Complete | `Noto Sans KR` is loaded and KO pages use KO-specific font variables. |
| Repository docs | README handoff | Milestone | Complete | `README.md` documents architecture, content model, development, Pages deployment, and the work register. |
| Repository docs | Canonical work register | Milestone | Complete | `docs/milestone.md` is the repository-local source for future milestones. |
| Content operations | Authoring guide | Milestone | Not started | Create `docs/content.md` with frontmatter rules, publish checklist, related essay conventions, and draft handling. |
| Content operations | Social announcement guide | Milestone | Not started | Create `docs/social.md` or expand `social/README.md` with per-channel draft rules and canonical URL handling. |
| Content operations | Social draft cleanup decision | Carry-forward | Open | leaving-social-feeds drafts removed with the owning-the-essay pair (2026-06-14); new Codex drafts under `social/linkedin/` (door, writer x2) are uncommitted and pending review. |
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

- Baseline committed on `master` (commit 51b34b4, 2026-06-14); the owning-the-essay removal is staged and not yet committed.
- No remote repository is configured.
- The deployment workflow now targets `master`, matching the local branch (aligned 2026-06-14).
- This register is shared by Codex and Claude. Codex authored it (2026-06-14); Claude committed the baseline, removed the owning-the-essay byproduct, and aligned the deploy branch the same day.
- Future milestone updates should be made here, not in agent memory.
