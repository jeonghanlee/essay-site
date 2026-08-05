# Essay Style Reference

## Scope

The series-wide rules, covering both languages. Korean word choice, register,
and vocabulary live in `korean-style.md`; everything here applies to the Korean
and the English alike unless a rule names one of them.

This document and `korean-style.md` are meant to be sufficient on their own. If
you find yourself deriving a convention from the published essays instead of
reading it here, that is a gap in these files — write it down before you write
the essay.

## What an essay is

Not a reference. These are written to be re-read, not consulted: reflections on
how we work, each drawn from a real session. Documentation tells you how the
system is built and how to drive it; an essay tells you something we keep
forgetting and keep having to remember.

Each essay is written from one day, and takes its material from what actually
happened in that session — the commands, the numbers, and the owner's own
sentences. Nothing in an essay may be invented for the essay.

## Order of writing

**Write the Korean first, then the English from it.**

The two essays dated 2026-08-01 and 2026-08-02 were drafted in English and
carried across, and the Korean took some forty rounds of line-level correction
before it read. The damage runs one way only: English to Korean forces a coined
noun wherever English had an idiom Korean lacks, while Korean to English never
does, because English already holds a phrase for anything the Korean says. The
material is Korean to begin with — the owner's quoted speech, and the sentence
each essay turns on.

Two consequences:

- **Write the English from the finished Korean, with the Korean open and the
  earlier English closed.** Editing a previous English draft toward the Korean
  preserves the English clause order, which is the thing being escaped.
- **When a correction lands in one language, carry it to the other in the same
  session.** A figure fixed in the Korean and left standing in the English is
  the most common way the pair drifts.

## Where the files live

**`essay-site` is the origin.** Both languages are written here, under
`src/content/essays/ko/` and `src/content/essays/en/`, with frontmatter. The
rules are here too, in this file and `korean-style.md`.

**`dev-env/essays/` holds a copy of the English body** — no frontmatter, a `#
Title` heading instead. It exists because the `conceptual-integrity` skill reads
the essays from there: `shared/skills/conceptual-integrity/SKILL.md` lists them
by path and tells the reviewer to read them in full before a sweep. That copy is
what makes an essay operative rather than only published.

So at publish time, three things happen together:

1. the English body is copied from `en/` into `dev-env/essays/<UPPER_NAME>.md`,
   frontmatter replaced by the `# Title` heading;
2. the essay is added to the provenance table in `dev-env/essays/README.md`;
3. the essay is added to the reading list in the `conceptual-integrity` skill,
   with one sentence saying which part of the sweep it grounds.

Step 3 is the one that gets forgotten. On 2026-08-02 the skill still listed six
essays while nine existed. An essay absent from that list is not read by any
sweep, whatever the site shows.

## Length

**English: 1,200 words of body text. Korean: 2,700 characters, whitespace
excluded.** The epigraph, headings, footnotes, and provenance line sit outside
both counts.

A longer page is not read — by people or by the agents that now have many
documents to get through — so length is a correctness property here, not a
matter of taste. The two ceilings are matched, not converted: at the series'
density 2,700 Korean characters render as roughly 1,200 English words, so an
essay that fits one fits the other. The Korean is written first, so measure it
first — if it will not fit, the English will not either.

Measure; do not estimate.

    # English
    sed '/^\[\^/,$d' <file> | sed '1d;/^>/d;/^---/d;/^#/d;/^\*Written/d' | wc -w

    # Korean
    python3 -c "import re,sys; b=open(sys.argv[1]).read().split('---',2)[2]; \
      b=re.sub(r'\n---\n\n\[\^.*',' ',b,flags=re.S); \
      b='\n'.join(l for l in b.split('\n') if not l.startswith(('#','>','*Claude','---'))); \
      print(len(re.sub(r'\s','',b)))" <file>

Do not move the ceiling to fit an essay. Cut the essay. When the only remaining
cuts are load-bearing, say which passages they are and let the owner choose.

## Structure

An essay opens with the epigraph, then one unheaded paragraph placing it in the
series and stating the thing the essay is about. It closes with the pull quote.
Between them, sections.

**Section headings state what happened, not what it amounted to.** `Nobody
concealed anything` over `Not the fourth essay's disease`; `Opened at three,
closed at seven` over `Three, then seven`. A heading that stops mid-particle in
Korean or mid-phrase in English is not finished.

Two section names recur and carry obligations:

- **`The older name` / `더 오래된 이름`** — this section must name a person and a
  year, with a footnote. Rejecting two candidate names and supplying none leaves
  the section not doing its job. If no real name exists, rename the section
  rather than gesture at one. Never invent a source to fill it.
- **`What the agent had wrong` / `에이전트가 틀렸던 것`** — the agent's own errors
  from that day, stated plainly and without softening. Where a technical
  explanation is needed, keep it in its own paragraph so it does not bury the
  admission.

The Korean may carry a section the English does not. It is a counterpart, not a
translation, so its structure is its own; what it may not do is take the English
section order as a template.

## The chain recitation

The closing section recites what each prior essay answered, in order, then adds
this essay's line beneath them: `이 글은 그 밑에 금을 하나 더 긋는다` / `This
draws one more line beneath them.`

The recitation grows by one clause per essay. To keep it from swallowing the
closing section, compress the older clauses to their bare form as the list
lengthens — `the sixth, the map but not whether it fits the ground` rather than a
full relative clause. The most recent one or two may stay in full.

## Closing conventions

Two shapes recur. Neither is mandatory; both earn their place often enough to
check for.

- **The wish.** *다음의 내가 … 할 때, 이 글이 그 손보다 먼저 닿기를.* The essay
  aimed at the next self.
- **The refrain.** *우리, 여기 와 본 적 있다.* — followed by what was different
  this time.

**Break the convention when the essay's own argument contradicts it, and say so
on the page.** `The Checks That Left No Hole` argues that a true sentence written
down does not survive one busy evening — so it cannot close by hoping this
writing reaches the next self. It closes by naming that hope as the fault. An
essay that repeats the series' closing shape while arguing against it reads as
borrowed.

## The owner's words

Every essay quotes the owner in the spoken original, and those quotes are what
the page turns on. Take them from the session that produced the essay, in the
form they were said, without honorific rewriting.

**If a sentence of his set the essay's direction, quote it — do not describe
it.** A draft that says *it came from one sentence spoken by the man whose day
it was* and never gives the sentence has withheld the thing the essay is made
from. The same applies to a paraphrase earlier in the essay: paraphrase in the
body is fine, but the quote itself must appear somewhere.

A draft with no quoted speech has lost its material, however accurate its
account.

## Sources and footnotes

- The epigraph carries its author, work, and year, with a footnote holding the
  original wording: `> — William Bruce Cameron, *Informal Sociology* (1963)[^1]`.
  Titles are in *italics*, in both languages.
- Every named source gets a footnote with author, title, publication, and year.
  Where a familiar retelling differs from the source, the footnote says so.
- Footnotes are numbered in the order they appear in the body, epigraph first.
- Footnotes and the provenance line sit outside the length count.

### Reference verification gate

Use a reference only after opening the primary text and reading the passage that
supports the essay. A search-result excerpt, abstract, metadata page, or quotation
in a secondary source does not satisfy this gate. Record the exact printed page
or named section that was read. If only the relevant passage was read, say so;
never report that the whole work was read.

For a journal or conference paper, include its DOI when one has been assigned.
During drafting, give the owner a direct reading link, the DOI, and the exact page
or section to check. Give the canonical publisher or DOI link first. Do not use
an Internet copy merely because it can be downloaded: an additional copy is
acceptable only when its public distribution is established by the publisher,
the author, an institutional repository, or an explicit open-access license. If
the agent and owner cannot verify the primary passage through a source they are
authorized to access, do not use the paper in the essay.

Keep access for verification separate from publication. Personal or
non-commercial access to a paper may allow the agent and owner to read and check
the passage; it does not authorize publishing, redistributing, or linking that
copy. A verification link and checked page belong to the drafting conversation,
not automatically to the published footnote. The published essay carries the
bibliographic citation and DOI. Include another full-text link only when its
public distribution is established by one of the sources above.

## Facts

**Check every figure against the essay's own counts.** A draft said the cycle
ended *four times the size it opened at* while stating three and seven four
times on the same page; the error survived into the English because the English
was carried from the same draft. Read the numbers as a stranger would: if the
page gives the reader two numbers, the third must follow from them.

**Two essays written from one day must not disagree about that day.** Where both
name the same tool, the same host, or the same hours, the naming must match. Read
them side by side before publishing.

**Nothing is invented to fill a hole** — not a cause, not a source, not a figure.
An essay whose subject is fabrication cannot afford one.

## Review

A written essay is not a finished essay. Two passes, in this order:

1. **Third-person read.** Read it as someone else's page, against these
   documents, and list findings with the line and the exact quote.
2. **Re-review after the fixes.** This pass is not optional. Every finding in
   the second pass of 2026-08-02 was created by the first pass's repairs —
   a phrase borrowed from a sibling essay, a word repeated twice in one section,
   a collocation that does not exist. **Repairing a passage displaces what was
   already there.** A pass that finds nothing new is the signal to stop.

When a spot has been edited more than twice, re-read the whole paragraph, not
the sentence: repeated local edits are how a series term gets replaced by the
editor's own wording.

## The published essays are not the standard

These documents are. The essays published before 2026-08-02 predate most of the
rules here, and three of them exceed the length ceiling. Do not derive a
convention by reading them; where an older essay and these documents disagree,
these documents are right and the essay is open work.

The exception is quotation: a phrase this series has already established —
`간직하는 사람의 손`, `지분 없는 눈`, `지도는 땅이 아니다` — is cited in the form
the earlier essay used. Never rewrite a quoted phrase to match a newer rule.

## Provenance

Each essay records where it came from: the agent version that wrote it, the
person it was written with, the date, the place, and the host. The record matters
as much as the text — an essay cannot be separated from the conversation that
produced it.

Record the actual host name after checking it on the host; do not infer it from
an earlier essay or another session. Place and host are separate facts. If the
physical place is not established in the current session, do not infer it from
the time zone, repository history, or host name. Record the known facts instead,
for example `from a remote session (top)` / `원격 세션에서 (top)`.

    *Written by Claude Opus 5 with Jeong Han Lee, Dr.rer.nat. — 2026-08-01,
    Berkeley, CA (top). The quotations are his, from the session that produced
    this page.*

    *Claude Opus 5가 Jeong Han Lee, Dr.rer.nat.와 함께 씀 — 2026-08-01, 버클리,
    CA (top). 인용은 이 글을 낳은 세션에서 그가 한 말 그대로다.*

When an essay is revised after publication, the provenance line carries the date
and the reason in one sentence.

## Pre-publish checklist

Run this on the pair, not on one language.

1. The Korean was written first, with the English closed; the English was
   written from the finished Korean.
2. Korean body ≤ 2,700 characters and English body ≤ 1,200 words, both measured
   with the commands above.
3. Every figure follows from the numbers the page itself gives.
4. At least one quotation from the owner, in the spoken original; any sentence
   the essay says set its direction appears as a quote.
5. `The older name` names a person and a year, with a footnote — or the section
   is renamed.
6. The chain recitation is extended by one, and the older clauses are compressed.
7. Every named source has a footnote; the epigraph's footnote carries the
   original wording.
8. A sibling essay from the same day agrees on every shared fact.
9. Section headings state what happened and are complete clauses.
10. Two review passes are done, and the second found nothing new.
11. `heroImage` exists under `public/images/essay-covers/`.
12. `korean-style.md`'s own checklist has been run on the Korean.
13. Every reference was read in the primary text at the cited page or section;
    every paper includes its DOI, and the owner verified the passage through a
    source the owner was authorized to access before it was used. A published
    full-text link appears only when its public distribution is established.
