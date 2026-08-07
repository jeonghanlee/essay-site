# Work Register

Release line: master
Milestone index: a08d2d2
Canonical path: `docs/milestone-a08d2d2.md`
Canonical branch or ref: master
Git upstream: origin/master
Remote tracker: jeonghanlee/essay-site; no GitHub milestone

Next session entry point: Create `docs/content.md` for M1 authoring guide. Preserve the current `npm run build` result and the live Pages deployment.

Baseline evidence: `npm run build` passed on 2026-08-06 at code state `34e67b1`, generating 27 static pages, including 11 EN and 11 KO essay routes, RSS feeds, and the sitemap. The reset state is carried by `a08d2d2c8a6e8bceceacc312643269e36fbeb2b0`.

Release tally: M1-M4: 3 Not started, 1 Blocked (4 total); G1-G4: 4 Open. Backlog: M5-M8 (4 rows), excluded from the release tally.

## Milestone

### Work

| Group | ID | Work unit | Type | Status | Ready | Deps | Done when / Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Content operations | M1 | Authoring guide | Milestone | Not started | Yes | | Create `docs/content.md` with frontmatter rules, publish checklist, related essay conventions, and draft handling; [detail](#m1---authoring-guide) |
| Quality | M2 | Link and RSS verification | Milestone | Not started | Yes | | Add a repeatable check for internal links, alternate links, RSS XML, and sitemap output; [detail](#m2---link-and-rss-verification) |
| Quality | M3 | Responsive visual pass | Milestone | Not started | Yes | | Check desktop and mobile layouts for the home page, archives, and essay detail pages; [detail](#m3---responsive-visual-pass) |
| Content operations | M4 | Social announcement guide | Milestone | Blocked | No | G4 | Create `docs/social.md` or expand `social/README.md` with per-channel draft rules and canonical URL handling; [detail](#m4---social-announcement-guide) |
| Publishing | G1 | Production URL metadata | External gate | Open | No | | Owner confirms whether a custom domain is required and records the corresponding `SITE_URL` / `BASE_PATH` action; [detail](#g1---production-url-metadata) |
| Content archive | G2 | six-months-on heroImage decision | External gate | Open | No | | Owner decides whether to keep the shared image or supply `six-months-on.png`; [detail](#g2---six-months-on-heroimage-decision) |
| Content archive | G3 | Tag taxonomy decision | External gate | Open | No | | Owner decides whether tags remain stable English identifiers or gain display labels per archive; [detail](#g3---tag-taxonomy-decision) |
| Content operations | G4 | Social draft cleanup decision | External gate | Open | No | | Owner reviews the three untracked LinkedIn drafts and records their handling; [detail](#g4---social-draft-cleanup-decision) |

### Milestone Details

#### M1 - Authoring guide

Origin: a08d2d2 / M1
Identity History: none
GitHub Issue: none
Status: Not started

##### Summary

Document the repository workflow for adding, reviewing, and publishing essays.

##### Scope

Create `docs/content.md` with frontmatter rules, the publish checklist, related essay conventions, and draft handling.

Out of scope: Korean register and word choice rules, which remain in `docs/korean-style.md`.

##### Completion Criteria

- `docs/content.md` exists and covers each scoped authoring rule.

##### Dependencies And Decisions

- None.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. Draft `docs/content.md` from the current README content model and writing workflow.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Documentation | Inspect the published guide against the scoped authoring rules and run `git diff --check`. | Repository working tree | The guide contains all scoped rules and the diff has no whitespace errors. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Repository working tree | Pending | None. |

##### Closure Evidence

- None.

##### GitHub Projection

Title: Add the essay authoring guide
Labels: none
GitHub Milestone: none
Observed State: none
Observed Labels: none
Observed Milestone: none
Last Compared: never

#### M2 - Link and RSS verification

Origin: a08d2d2 / M2
Identity History: none
GitHub Issue: none
Status: Not started

##### Summary

Add a repeatable repository check for generated links and feed artifacts.

##### Scope

Check internal links, alternate links, RSS XML, and sitemap output produced by the site build.

Out of scope: external social platform operation and live deployment verification.

##### Completion Criteria

- A repeatable check exists for every scoped output.
- The check passes against the generated site output.

##### Dependencies And Decisions

- None.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. Define the check at the repository boundary and run it against a real `npm run build` output.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Integration | Run `npm run build` and execute the repeatable output check against `dist/`. | Local repository build | Internal links, alternate links, RSS XML, and sitemap output satisfy the check. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Local repository build | Pending | None. |

##### Closure Evidence

- None.

##### GitHub Projection

Title: Add generated link and feed verification
Labels: none
GitHub Milestone: none
Observed State: none
Observed Labels: none
Observed Milestone: none
Last Compared: never

#### M3 - Responsive visual pass

Origin: a08d2d2 / M3
Identity History: none
GitHub Issue: none
Status: Not started

##### Summary

Review the responsive presentation of the site across its primary page types.

##### Scope

Check desktop and mobile layouts for the home page, archives, and essay detail pages.

Out of scope: essay text review and new visual design changes not required by the pass.

##### Completion Criteria

- Desktop and mobile checks cover the home page, both archives, and essay detail pages.
- Observed results and any required follow-up are recorded in this detail.

##### Dependencies And Decisions

- None.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. Review the generated pages at the selected desktop and mobile viewport sizes and record observed results.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Visual | Inspect the generated home, archive, and essay detail pages at desktop and mobile viewport sizes. | Local static build | The scoped page types remain usable at both viewport classes, with any defect recorded. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Local static build | Pending | None. |

##### Closure Evidence

- None.

##### GitHub Projection

Title: Complete the responsive visual pass
Labels: none
GitHub Milestone: none
Observed State: none
Observed Labels: none
Observed Milestone: none
Last Compared: never

#### M4 - Social announcement guide

Origin: a08d2d2 / M4
Identity History: none
GitHub Issue: none
Status: Blocked

##### Summary

Document the per-channel rules for preparing announcement drafts and canonical URLs.

##### Scope

Create `docs/social.md` or expand `social/README.md` with per-channel draft rules and canonical URL handling.

Out of scope: credentials, automatic publishing, comments, analytics, and engagement workflows.

##### Completion Criteria

- The selected guide documents the scoped per-channel rules and canonical URL handling.

##### Dependencies And Decisions

- G4 is Open; resume as Not started when G4 is Complete.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. After G4 is resolved, choose the canonical guide path and document the social announcement rules.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Documentation | Inspect the guide against the selected channel rules and run `git diff --check`. | Repository working tree | The guide covers the selected channels and contains no whitespace errors. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Repository working tree | Pending | None. |

##### Closure Evidence

- None.

##### GitHub Projection

Title: Document social announcement rules
Labels: none
GitHub Milestone: none
Observed State: none
Observed Labels: none
Observed Milestone: none
Last Compared: never

#### G1 - Production URL metadata

Origin: a08d2d2 / G1
GitHub Issue: none
Status: Open

##### Summary

The site currently uses the default project Pages URL. The owner must decide whether a custom domain is required before custom `SITE_URL` and `BASE_PATH` values are configured.

##### Completion Criteria

- The owner records either that the default project URL remains the accepted deployment target or that a custom domain is required and its metadata is configured and verified.

##### Verification Results

| Observed At | Result | Evidence |
| --- | --- | --- |
| Not run | Pending | Owner decision and, if applicable, live metadata verification. |

##### Closure Evidence

- None.

#### G2 - six-months-on heroImage decision

Origin: a08d2d2 / G2
GitHub Issue: none
Status: Open

##### Summary

Both languages currently reuse `the-writer-you-can-recall.png` for `six-months-on`. The owner must decide whether to keep that image or supply `six-months-on.png`.

##### Completion Criteria

- The owner records the selected image treatment and the source frontmatter matches that decision when a change is required.

##### Verification Results

| Observed At | Result | Evidence |
| --- | --- | --- |
| Not run | Pending | Owner decision and source inspection. |

##### Closure Evidence

- None.

#### G3 - Tag taxonomy decision

Origin: a08d2d2 / G3
GitHub Issue: none
Status: Open

##### Summary

The repository needs an owner decision on whether tags remain stable English identifiers or gain display labels per archive.

##### Completion Criteria

- The owner records the selected tag taxonomy and the content or archive implementation reflects that decision when a change is required.

##### Verification Results

| Observed At | Result | Evidence |
| --- | --- | --- |
| Not run | Pending | Owner decision and source inspection. |

##### Closure Evidence

- None.

#### G4 - Social draft cleanup decision

Origin: a08d2d2 / G4
GitHub Issue: none
Status: Open

##### Summary

Three untracked LinkedIn drafts remain under `social/linkedin/`: one for The Door You Left Closed and two for The Writer You Can Recall. Their handling is pending owner review.

##### Completion Criteria

- The owner reviews the three drafts and records their keep, revision, or removal handling.

##### Verification Results

| Observed At | Result | Evidence |
| --- | --- | --- |
| Not run | Pending | Current untracked-file observation and owner decision. |

##### Closure Evidence

- None.

## Backlog

### Work

| Group | ID | Work unit | Type | Status | Ready | Deps | Done when / Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |

| Discovery | M5 | Full-text search | Milestone | Open | No | | Add static full-text search across EN and KO essay content with language filtering; [detail](#m5---full-text-search) |
| Content archive | M6 | Series index | Milestone | Open | No | | Generate series pages from `canonicalId` and expose related essays by language; [detail](#m6---series-index) |
| Reading experience | M7 | Reading controls | Milestone | Open | No | | Add table of contents, reading progress, dark mode, and font-size controls; [detail](#m7---reading-controls) |
| Navigation | M8 | View transitions | Milestone | Open | No | | Add accessible Astro page transitions for internal navigation; [detail](#m8---view-transitions) |

### Backlog Details

#### M5 - Full-text search

Origin: a08d2d2 / M5
Identity History: none
GitHub Issue: none
Status: Open

##### Summary

Add a static full-text search for essay titles, summaries, and body content in both languages.

##### Scope

Provide a search UI with EN/KO filtering and result links that respect the project Pages base path. A static index may be generated after the Astro build; Pagefind is one candidate because it generates a search bundle from static output ([documentation](https://pagefind.app/docs/)).

Out of scope: search analytics, server-side search, external search services, and automatic content recommendations.

##### Completion Criteria

- A visitor can search published EN and KO essays from the site.
- Results link to valid project Pages URLs and language filtering behaves correctly.
- The search index is generated by the repository build path without a server.

##### Dependencies And Decisions

- Assignment condition: the owner selects this backlog row for current execution.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. Select the static indexing approach and define the search result contract.
2. Add the search UI, language filter, and build integration.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Integration | Run `npm run build`, load the generated search index, and search representative EN and KO terms. | Local repository build | Results contain the expected essays and links remain under the configured base path. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Local repository build | Pending | None. |

##### Closure Evidence

- None.

#### M6 - Series index

Origin: a08d2d2 / M6
Identity History: none
GitHub Issue: none
Status: Open

##### Summary

Expose the essay relationships already represented by `canonicalId` as navigable series pages.

##### Scope

Generate EN and KO series views, show related essays in publication order, and handle a missing language counterpart without a broken link.

Out of scope: changing the tag taxonomy, inventing new relationships, and replacing the existing essay navigation.

##### Completion Criteria

- Every published `canonicalId` group has a valid series view or an intentional single-entry presentation.
- Series links work in both languages and preserve the project Pages base path.
- A missing counterpart is represented without a dead route.

##### Dependencies And Decisions

- Assignment condition: the owner selects this backlog row for current execution.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. Define the series route and ordering contract from `canonicalId`.
2. Generate the series views and add links from essay detail pages.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Integration | Run `npm run build` and inspect every generated series route against the source `canonicalId` groups. | Local repository build | Each group has correct members, language links, order, and fallback behavior. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Local repository build | Pending | None. |

##### Closure Evidence

- None.

#### M7 - Reading controls

Origin: a08d2d2 / M7
Identity History: none
GitHub Issue: none
Status: Open

##### Summary

Improve long-form reading with optional navigation and display controls.

##### Scope

Add a table of contents where headings warrant it, reading progress, dark mode, and font-size controls. Preserve the existing language-specific typography and static delivery model.

Out of scope: user accounts, preference synchronization, analytics, and a full theme redesign.

##### Completion Criteria

- The controls work on essay detail pages at desktop and mobile widths.
- Keyboard users can operate the controls and the content remains readable in each supported state.
- The controls respect reduced-motion preferences where animation is used.

##### Dependencies And Decisions

- Assignment condition: the owner selects this backlog row for current execution.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. Choose the minimum control set and define its accessible states.
2. Implement the controls in the shared essay layout and validate the responsive presentation.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Visual and accessibility | Run the build and inspect essay detail pages at desktop and mobile widths with keyboard navigation and reduced-motion settings. | Local static build | Controls remain usable, content remains readable, and no state is lost during normal navigation. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Local static build | Pending | None. |

##### Closure Evidence

- None.

#### M8 - View transitions

Origin: a08d2d2 / M8
Identity History: none
GitHub Issue: none
Status: Open

##### Summary

Add smooth transitions between internal pages while keeping the site a static multi-page application. Astro provides `ClientRouter` and reduced-motion handling for this feature ([documentation](https://docs.astro.build/en/guides/view-transitions/)).

##### Scope

Apply transitions to internal navigation, preserve browser back and forward behavior, and provide a non-animated fallback.

Out of scope: converting the site into a data-fetching SPA, persistent client state, and decorative animation without a reading benefit.

##### Completion Criteria

- Internal navigation has a useful transition or a correct full-page fallback.
- Back and forward navigation, direct links, and browser refresh remain correct.
- Reduced-motion users receive no forced animation.

##### Dependencies And Decisions

- Assignment condition: the owner selects this backlog row for current execution.

##### Implementation Plan

Plan Status: draft
Plan Acceptance: none
Implementation Authorization: none
Superseded Plan Artifacts: none

1. Add Astro view transitions to the shared layout with the least client-side state.
2. Recheck page scripts, navigation history, accessibility announcements, and fallback behavior.

##### Test Plan

| Label | Layer | Method | Environment | Expected Result |
| --- | --- | --- | --- | --- |
| T1 | Integration and accessibility | Run the build and exercise internal links, back/forward navigation, refresh, unsupported-transition fallback, and reduced-motion settings. | Local static build and supported browser | Navigation remains correct and transitions never override reduced-motion preferences. |

##### Verification Results

| Label | Observed At | Environment | Result | Evidence |
| --- | --- | --- | --- | --- |
| T1 | Not run | Local static build and supported browser | Pending | None. |

##### Closure Evidence

- None.

## History

| Reset Date | Prior State Commit |
| --- | --- |
| 2026-08-06 | a08d2d2c8a6e8bceceacc312643269e36fbeb2b0 |
