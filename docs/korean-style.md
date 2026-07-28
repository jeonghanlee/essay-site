# Korean Essay Style Reference

## Scope

Word choice, register, and vocabulary rules for Korean essay sources under
`src/content/essays/ko/`.

**Out of scope:** frontmatter schema, publish workflow, and English essay
conventions. See `README.md` for the content model.

## Core rule

The Korean essay is a counterpart, not a translation. It is written in its
own voice, from the same material as the English one. A sentence that is
correct Korean but reads as English word order, or that names a concept with
a word invented for the translation, fails this rule even when the meaning
is exact.

Test for every noun and verb: **would a Korean engineer with thirty years in
the field use this word in a meeting?** If not, replace it.

## Register

| Element | Form |
| :--- | :--- |
| `summary:` frontmatter | One sentence, 합쇼체 (`…입니다` / `…습니다`), clause-chained with `…며,` / `…기에,` |
| Body prose | 해라체 (`…다` / `…었다`) |
| Closing pull quote | Imperative 해라체 (`…보라` / `…말라`) |
| Quoted speech from the owner | Verbatim spoken form, no honorific rewriting |

Never mix the two endings inside one frontmatter summary.

## Series vocabulary

These terms are fixed across the series. Reuse them; do not coin a synonym
for a concept that already has a word here.

| Term | Meaning | First established |
| :--- | :--- | :--- |
| 탈 | fault, defect | `the-flash-of-remembering` |
| 이음매 | the seam between two solutions | `the-flash-of-remembering` |
| 운명 | fate — the outcome assigned to a finding | `the-flash-of-remembering` |
| 틀린 서랍 | the wrong drawer | `the-door-you-left-closed` |
| 거두어짐 | a model being retired | `the-writer-you-can-recall` |
| 지어낸 초록 / 정직한 빨강 | fabricated green / honest red | `the-honest-red` |
| 잣대 | a measure that can be trusted | `the-honest-red` |
| 씨앗 | a seed test or seed rule | `the-hand-that-signs` |
| 손 | the hand — the writing or signing agent | `the-writer-you-can-recall` |
| 금을 긋다 | to draw one more line beneath a prior answer | `the-hand-that-signs` |
| 땅 | territory, as against the map | `the-knot-you-tied-yourself` |

## Coinage

Do not nominalize a native verb into a technical noun. Korean tolerates this
far less than English tolerates gerunds.

| Rejected | Use |
| :--- | :--- |
| 걸림, 얽힘 | 순서, 앞뒤, 이음매 |
| 지어냄 (as a countable noun) | 지어낸 것 |

Do not introduce a Sino-Korean abstraction where the essay already uses a
plain word: prefer 순서 over 선후관계, 앞뒤 over 의존관계, 진짜 over 실재하는.

## Repetition

English tolerates a keyword recurring through a page; the recurrence reads as
motif. Korean does not — the same density reads as a thin vocabulary. Carrying
the English draft's word frequency into the Korean is itself a
literal-translation trap, and the least visible one, because every single
sentence is correct.

손 is the term to watch. It is series vocabulary and stays wherever it names
the agent — 쓰는 손, 앞의 손과 뒤의 손, 다음 손, 반대편 손, 낯선 손. Everywhere
else the ordinary word is the right one.

| Metaphor borrowed for an ordinary action | Korean |
| :--- | :--- |
| 손 쪽에 붙어 다니다 | 에이전트 쪽에 붙어 다니다 |
| 손대다 | 고치다 |
| 손을 놓다 | 쥐었던 것을 놓다 |

Rule of thumb: three occurrences inside one paragraph is a clump regardless of
the total for the file.

## Literal-translation traps

Each pair below is a construction that survives translation and still reads
as English.

| Reads as English | Korean |
| :--- | :--- |
| 되받아친다 (*pushes back*) | 어기면 탈이 난다 |
| 이름을 주었다 (*gave it its name*) | 이름을 붙였다 |
| 여러 부분으로 나뉜다 (*divides into parts*) | 몇 갈래로 나뉜다 |
| 손에서 떨어졌다 (*fell from my hand*) | 손을 놓았다 |
| 그것 하나는 참이었다 (*that one thing was true*) | 그건 맞는 말이었다 |
| 뜻이 있다 (*is meaningful*) | 의미가 있다 |
| 그가 겨눈 것은 넓다 (*what he aimed at is broad*) | 그가 겨눈 자리는 그보다 넓다 |
| 사람이 늘 지어 온 그것이다 (*is the one people have always tied*) | 사람이 예부터 늘 지어 온 것이다 |
| 거울상이다 (*is its mirror*) | 그 반대다 |
| 논증이 아니라 (*not by an argument*) | 긴 설명이 아니라 |

Em-dash chains and stacked relative clauses carry over from the English
draft. Break them into separate sentences unless the pause is the point.

## Loanwords

Keep the loanword when the field uses it and there is no plain Korean
equivalent in daily speech: 커밋, 브랜치, 푸시, 릴리스, 트리, 세션, 토큰.

Rules:

- One spelling per concept per essay. 푸시 and 밀어 올리다 must not both
  appear for `git push`.
- Do not transliterate an English word that already has a plain Korean form
  (자동 시험 묶음 → 자동 시험).
- Internal tooling names (스킬, 등록부) are jargon to the reader. Use them
  only when the essay explains what they are.

## Names

- Korean prose refers to the owner as **정한**. English prose uses **Han**.
- 선배님 is conversational address only. It must never appear in an essay.
- Model names stay in Latin script: Opus 5, Fable, Claude.

## Quotations

A quotation with a settled Korean rendering keeps that rendering, even when
a plainer word exists — the recognizability is the point.

- Ockham: 필요 없이 여럿을 두어서는 안 된다.

**Series vocabulary** overrides a settled rendering where the two disagree.
Korzybski's line is rendered 지도는 땅이 아니다, not 영토.

Footnotes carry the original Latin or English alongside the Korean.

## Pre-publish checklist

1. `summary:` is one sentence in 합쇼체.
2. No term from **Series vocabulary** has been replaced by a synonym.
3. No nominalized native verb is used as a technical noun.
4. Each loanword has one spelling throughout the file.
5. Count 손 and any other series term the English draft repeats; ordinary
   actions do not borrow the metaphor.
6. Section headings match the English counterpart in meaning, not in word
   class.
7. `heroImage` exists under `public/images/essay-covers/`.
