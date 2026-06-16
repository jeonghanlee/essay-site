# Essay Site Work Register

## Scope

This document tracks repository-local milestones, carry-forward items, and external gates for the essay site.

**Out of scope:** detailed essay text review, social account operation, credentials, analytics, comments, and engagement workflows.

Next session entry point: M1.3 is complete. Ready to start now (owner to set priority): M6.1 authoring guide in `docs/content.md`; M8.1 link and RSS verification; M8.2 responsive visual pass. Preserve the live deploy and the passing build. Do not start carry-forward decisions (D1-D4) unless the owner reorders them.

## Register model

Two-level work tree. Tracking IDs are three kinds: **M** work tasks (`M<group>` workstream, `M<group>.<task>` unit), **G** external gates, **D** decision records. `Status` is the controlled vocabulary (`Complete` / `In progress` / `Not started` / `Blocked`), rendered ✅ 🔄 ⬜ 🔒. `Ready` (▶) is derived, not a status: a task is ready when every `← M` dependency is `Complete` and no `← G` gate or `← D` decision is open.

## Now / next band

- **In progress (🔄):** none.
- **Next (▶ ready now):** M6.1 authoring guide · M8.1 link and RSS verification · M8.2 responsive visual pass.
- **External-wait / decision-pending:** G1 production URL (conditional, custom domain only); D1 heroImage, D2 tag taxonomy, D4 social draft cleanup awaiting owner decision (D3 decided). M6.2 social announcement guide waits on D4.

## Level 1 — workstreams

| ID | Workstream | Done/Total | Status | Ready |
| :--- | :--- | :---: | :---: | :--- |
| M1 | Site foundation | 3/3 | ✅ | — |
| M2 | Content archive | 4/4 | ✅ | — |
| M3 | Sharing | 1/1 | ✅ | — |
| M4 | Typography | 1/1 | ✅ | — |
| M5 | Repository docs | 2/2 | ✅ | — |
| M6 | Content operations | 0/2 | ⬜ | ▶ M6.1 |
| M7 | Publishing | 3/3 | ✅ | — |
| M8 | Quality | 0/2 | ⬜ | ▶ M8.1, M8.2 |

## Level 2 — work units

| ID | Work unit | Status | Ready | Depends | Evidence or next action |
| :--- | :--- | :---: | :---: | :--- | :--- |
| M1.1 | Astro static site scaffold | ✅ | | | `npm run build` generates the static site, RSS feeds, and sitemap. |
| M1.2 | EN default home with KO selection | ✅ | | | `/` renders the EN home page; `/ko/` remains the KO archive. |
| M1.3 | Previous/next essay navigation | ✅ | | | Chronological prev/next (pubDate ascending, `sortOrder` tiebreak) via `getAdjacentEssays` in `src/lib/site.ts` and shared `EssayNavigation.astro`, wired into both `[slug].astro` pages; series ends hide the missing side. Verified in build. |
| M2.1 | Import current essays | ✅ | | | Current source essays are present under `src/content/essays/en/` and `src/content/essays/ko/`. |
| M2.2 | Link the user-authored final essay and Claude essay | ✅ | | | `six-months-on` and `the-writer-you-can-recall` are related through frontmatter metadata. |
| M2.3 | Frontmatter consistency | ✅ | | | Stripped trailing whitespace from essay frontmatter `tags:` / `related:` lines (commit 51b34b4). |
| M2.4 | owning-the-essay / leaving-social-feeds pair (retired) | ✅ | | | Removed as a byproduct with its three social drafts on 2026-06-14; recoverable from commit 51b34b4. |
| M3.1 | Social share links (X, Facebook, LinkedIn) | ✅ | | | `ShareLinks.astro` on essay detail pages; link-share only, loaded per language (commit 8c8e11b). Instagram excluded (no web share endpoint). |
| M4.1 | KO font baseline | ✅ | | | KO content uses `Noto Serif KR` (명조), loaded on KO pages only; UI chrome keeps `Noto Sans KR` (commit 8c8e11b). |
| M5.1 | README handoff | ✅ | | | `README.md` documents architecture, content model, development, Pages deployment, and the work register. |
| M5.2 | Canonical work register | ✅ | | | `docs/milestone.md` is the repository-local source for future milestones. |
| M6.1 | Authoring guide | ⬜ | ▶ | — | Create `docs/content.md` with frontmatter rules, publish checklist, related essay conventions, and draft handling. |
| M6.2 | Social announcement guide | ⬜ | | ← D4 | Create `docs/social.md` or expand `social/README.md` with per-channel draft rules and canonical URL handling. |
| M7.1 | Deploy workflow branch alignment | ✅ | | | `deploy.yml` push trigger changed `main` → `master` to match the local branch (2026-06-14). |
| M7.2 | Repository remote creation | ✅ | | | `origin` = `git@github.com:jeonghanlee/essay-site.git`; `master` pushed and tracking `origin/master`. |
| M7.3 | Pages deployment verification | ✅ | | | Live at `https://jeonghanlee.github.io/essay-site/`; deploy workflow succeeds on push to `master`. |
| M8.1 | Link and RSS verification | ⬜ | ▶ | — | Add a repeatable check for internal links, alternate links, RSS XML, and sitemap output. |
| M8.2 | Responsive visual pass | ⬜ | ▶ | — | Check desktop and mobile layouts for the home page, archives, and essay detail pages. |

## Gates and decisions

| ID | Item | State | Detail |
| :--- | :--- | :--- | :--- |
| G1 | Production URL metadata | ⚠️ Conditional | Using the default project Pages URL; set `SITE_URL` / `BASE_PATH` variables only for a custom domain. |
| D1 | six-months-on heroImage | Open | Both languages reuse `the-writer-you-can-recall.png` (affects OG card). Keep / use `essay-desk.png` / supply `six-months-on.png`. |
| D2 | Tag taxonomy | Open | Decide whether tags stay as stable English identifiers or gain display labels per archive. |
| D3 | Self-host KO font | Decided | Use Google Fonts (Noto Serif KR) rather than self-host; revisit only if external font loading becomes undesirable. |
| D4 | Social draft cleanup | Open | leaving-social-feeds drafts removed with the owning-the-essay pair; new Codex drafts under `social/linkedin/` (door, writer x2) are uncommitted and pending review. |

Tally: M-tasks ✅ 14 / ⬜ 4 (18 total) · gates 1 · decisions 4 (open 3, decided 1) — 23 work units.

## Migration map (flat register → M-tree)

Previous flat register identified rows by Topic / Work unit; this maps them to the new tracking IDs so existing references stay resolvable.

| Old Topic / Work unit | New ID |
| :--- | :--- |
| Site foundation / Astro static site scaffold | M1.1 |
| Site foundation / EN default home with KO selection | M1.2 |
| Site foundation / Previous/next essay navigation | M1.3 |
| Content archive / Import current essays | M2.1 |
| Content archive / Link final essay and Claude essay | M2.2 |
| Content archive / Frontmatter consistency | M2.3 |
| Content archive / owning-the-essay pair (retired) | M2.4 |
| Content archive / six-months-on heroImage | D1 |
| Content archive / Tag taxonomy | D2 |
| Sharing / Social share links | M3.1 |
| Typography / KO font baseline | M4.1 |
| Typography / Self-host KO font decision | D3 |
| Repository docs / README handoff | M5.1 |
| Repository docs / Canonical work register | M5.2 |
| Content operations / Authoring guide | M6.1 |
| Content operations / Social announcement guide | M6.2 |
| Content operations / Social draft cleanup decision | D4 |
| Publishing / Deploy workflow branch alignment | M7.1 |
| Publishing / Repository remote creation | M7.2 |
| Publishing / Pages deployment verification | M7.3 |
| Publishing / Production URL metadata | G1 |
| Quality / Link and RSS verification | M8.1 |
| Quality / Responsive visual pass | M8.2 |

## Status Notes

- Live on GitHub Pages at `https://jeonghanlee.github.io/essay-site/`; deploys on push to `master`, latest from commit 8c8e11b.
- Remote `origin` = `git@github.com:jeonghanlee/essay-site.git`; `master` tracks `origin/master` and is in sync.
- The deployment workflow targets `master`.
- Codex's social drafts under `social/linkedin/` (door, writer x2) remain uncommitted and untracked.
- This register is shared by Codex and Claude. Codex authored the flat baseline (2026-06-14); Claude committed it, removed the owning-the-essay byproduct, switched KO content to Noto Serif KR, added social share links, rewrote the hero (commits through 8c8e11b, 2026-06-15), and migrated the register to the two-level M-tree.
- Future milestone updates should be made here, not in agent memory.
