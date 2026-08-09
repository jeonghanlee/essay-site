# Korean Essay Style Reference

## Scope

Word choice, register, and vocabulary rules for Korean essay sources under
`src/content/essays/ko/`.

**Read `essay-style.md` first.** It holds the rules that govern both languages —
order of writing, length, structure, sources, facts, review, provenance, and the
series-wide checklist. This file holds only what is specific to Korean. The two
together are meant to be sufficient: if a convention had to be inferred from a
published essay, that is a gap in these files, not a lesson from the essays.

**Out of scope:** frontmatter schema and publish workflow. See `README.md` for
the content model.

## Core rule

The Korean essay is a counterpart, not a translation. It is written in its
own voice, from the same material as the English one. A sentence that is
correct Korean but reads as English word order, or that names a concept with
a word invented for the translation, fails this rule even when the meaning
is exact.

Test for every noun and verb: **would a Korean engineer with thirty years in
the field use this word in a meeting?** If not, replace it.

## Before writing

The Korean is written first — see `essay-style.md`, *Order of writing*, for why
the damage runs one way only.

Read the Korean essays first — all of them, not a sample. This includes a
Korean essay written by the owner, such as `six-months-on`, even when it is not
numbered as one of the agent-written series essays. An owner-written counterpart
can be the source material from which a later series essay was written, so
omitting it removes part of the series' voice and provenance. The English drafts
are not the source: they are the other half of the same material, and reading
only those produces a translation no matter how carefully the words are chosen.
Every convention below is visible in the existing files and in none of the
English ones.

Then write the Korean **without the English draft open.** The tell that it was
open is a Korean sentence carrying an English clause structure: `…로 취급되지
않는다` (*is not treated as*), `그 없음을 …로 바꾸고` (*turns the absence into*),
`실행 자체의 합계` (*the run's own tally*). Each is correct Korean and each
reads as English, which is why the trap survives proofreading.

## Compose by speaking, not by rendering

The order-of-writing rule says to keep the English draft closed. 2026-08-09
showed the draft can be closed and still be open — in the head. An essay
whose skeleton was composed in internal English and then rendered into
hangul carries the same translation damage with no English file to blame:
em-dash insertions (`— 이 한 줄이 —`), rule statements dropped without a
frame, conclusions before events. The tell appeared while the same agent's
*conversation* stayed alive (숨을 넣다, 눌린 문장) — the living Korean was
already there, but only in the speaking register.

So the method is: speak each paragraph to a listener, then transcribe. When
a passage stiffens, do not patch words — say the events aloud in Korean and
write down what was said. And the length ceiling is not the cause of
stiffness: a draft at about 1,750 of 2,700 characters was still clotted. Density
is a habit; the room is there to let sentences breathe.

## The listener pass (2인칭)

After the author pass and before the third-person read, listen to the essay
as the hearer — as if someone were reading it aloud to you. The ear catches
what the eye passes (owner's method, proven 2026-08-09):

- a repeated morpheme the eye forgives: 옮- four times in one sentence,
  나오다 three times in two, the same verb opening adjacent sentences;
- a referent that has not been introduced: "그 병" before anything was
  called a 병; "두 집" as an unexplained image;
- one word carrying two referents in one sentence: 읽는 쪽 / 다른 쪽;
- a missing beat the ear needs: 몇 시간 **동안**.

## Office words do not belong in an essay

Words that are correct in a register, a report, or a commit message read as
장부 언어 on an essay page. Found and replaced 2026-08-09:

| Office word | Essay word |
| :--- | :--- |
| 현행(이다) | 지금 것이다 · 서로 자기가 맞다고 |
| 지목하다 | 고르다 · 골라서 싣다 |
| 삭제 네 건 | 지우겠다는 표시만 된 파일 네 개 |
| 작업본 전체 상태 | 지금 일하는 자리 전체 |
| 통계 (커밋 출력) | 무엇을 어떻게 실었는지 나오는 줄 |
| 이력이 남는 | 자취가 남는 |
| 기준서 | 도면이 어떻게 생겨야 하는지 적어 둔 문서 |

Two more from the same day, for the collocation table's spirit: a digest is
내용의 지문을 뜨다 (재다 and 대 보다 do not carry it); a book is 묶는 것이지
세우는 것이 아니다 (책 한 권으로 묶다, 책을 다 묶었다). Counters: documents
are 네 개, not 네 편 and not the bare 넷 — 편 belongs to 글·시·영화, and a
bare numeral after the noun reads as a ledger. A foreign city whose hangul
form collides with a Korean word carries its country on first mention:
오스트리아 빈 — bare 빈 종합병원 reads as an empty hospital.

## The owner's words carry the essay

Every essay quotes him in the spoken original, and those quotes are what the
page turns on — *넌 왜 존재하니?*, *이건 1.1.0 전체를 흔든다*, *기다려. 멈춰.*
A draft with no quoted speech has lost the material it was made from, however
accurate its account. Take the quotes from the session that produced the essay,
in the form they were said, without honorific rewriting.

## Closing conventions

Two shapes recur in the final section. Neither is mandatory; both earn their
place often enough to check for.

- **Recite the chain.** Before adding its own line, the closing section lists
  what each prior essay answered, in order: 첫 글은 … 둘째 글은 … 셋째 글은 ….
  The new answer is then written as 그 밑에 금을 하나 더 긋는다.
- **The refrain.** 우리, 여기 와 본 적 있다. — followed by what was different
  this time.

## Length

Ceiling 2,700 characters of body text, whitespace excluded; the measuring command
and the paired English ceiling are in `essay-style.md`, *Length*. Measure the
Korean first: if it will not fit, the English will not either.

## Register

| Element | Form |
| :--- | :--- |
| `summary:` frontmatter | One sentence, 합쇼체 (`…입니다` / `…습니다`), clause-chained with `…며,` / `…기에,` |
| Body prose | 해라체 (`…다` / `…었다`) |
| Closing pull quote | Imperative 해라체 (`…보라` / `…말라`) |
| `related[].note:` frontmatter | 합쇼체, like `summary:` — unanimous across the series |
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
| 손 | the hand that writes, keeps, or signs — not a synonym for 에이전트, see below | `the-writer-you-can-recall` |
| 금을 긋다 | to draw one more line beneath a prior answer | `the-hand-that-signs` |
| 땅 | territory, as against the map | `the-knot-you-tied-yourself` |
| 관문 | the release gate | `the-price-of-reading` |
| 시험 | a test, a test suite — never 테스트 | `the-flash-of-remembering` |
| 건너뛰기 | a skipped step — never the nominalized 건너뜀 | `the-door-you-left-closed` |
| 값 | what a failure cost, in time or in assurance | `the-price-of-reading` |
| 빈자리 | the gap a thing leaves by not being there | `the-door-you-left-closed` |

The table was incomplete once, and a draft went wrong in exactly the places it
did not name — 관문 became 게이트, 시험 became 테스트, 건너뛰기 became 건너뜀.
When a term recurs across essays and this table does not hold it, the omission
is a defect in the table, not a licence.

## 손 and 에이전트

손 is the series' word for the hand that writes, keeps, or signs. It is not a
synonym for the agent. Where a sentence points at an agent directly - the model
that wrote this draft, the one that wrote the last, a sub-agent called in for a
single check - write 에이전트. A Korean reader following 손 through a paragraph
has to resolve the referent every time, and readability drops sharply.

Keep 손 for:

- the owner: 서명하는 손, 잃을 것이 있는 손, 간직하는 사람의 손;
- ordinary Korean where 손 belongs to the verb or the idiom: 손대다, 손을 뻗다,
  손 가는 대로, 우리 손으로, 손에 쥔, 손에서 손으로;
- whoever comes next, when it could be a person: 다음 손이 지도를 그리기 전에;
- a simile about working carefully: 신중한 손처럼 보였으니까;
- a phrase that deliberately covers both, where the next sentence says so:
  여러 손이 각자 옳은 조각을 더해도 ... 그 손들 중 일부가 에이전트라는 것.

Never rewrite 손 inside a phrase quoted from an earlier essay, and never inside
the refrain 빨간 신호에 손을 뻗을 때 ... 이 글이 그 손보다 먼저 닿기를.

Applied to the published Korean essays on 2026-08-02: six occurrences across
`the-hand-that-signs` and `the-knot-you-tied-yourself`, recorded in each essay's
closing provenance line.

## Negation

**Write negation out.** Korean prose takes `-지 않다`, not the clipped `안` +
verb, which belongs to speech. This was the owner's correction on 2026-08-02:
*한글의 부정은 주로 풀어써.*

| Rejected | Use |
| :--- | :--- |
| 안 돈 검사 | 돌지 않은 검사 |
| 안 도는 검사 | 돌지 않는 검사 |
| 안 잰 것 | 재지 않은 것 |
| 안 남긴다 | 남기지 않는다 |
| 안 걸린다 | 걸리지 않는다 |
| 안 물었다 | 묻지 않았다 |

The attributive forms are the worst of them — `안 돈 검사` makes the reader stop
on a two-syllable verb standing where a modifier belongs.

**`못` is exempt.** 못 means *could not*, a different word: 못 찾고, 못 가린다,
못 넘겼다, 사흘을 못 본 문장. Leave them. `못 나른다 / 못 치른다 / 못 담는다`
inside the chain recitation are quotations from earlier essays and are never
rewritten.

Check before publishing — this should print nothing:

    grep -o '안 [가-힣]*' <file>

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

## Write what happened, not what it amounted to

English carries an abstraction on its syntax; a reader picks up *what moved was
not the count* and waits for the noun. Korean does not extend that credit. A
sentence that gives the conclusion first, or a figure before the thing it stands
for, loses the reader at the moment it is read — and the draft looks fine to its
author, who already knows the event.

State the event. Let the conclusion follow it, or leave it out where the event
says it.

| Conclusion or figure, written first | What happened |
| :--- | :--- |
| 실행마다 재는 도구가 달랐다 | 같은 방법으로 검증해야 하는데, 매번 방법을 새로 짜서 검증하고 있었다 |
| 조용히 움직인 건 숫자가 아니었다. 그 아래 분모였다 | 82 중 82. 그런데 그 82가 왜 82인지는 아무도 안 봤다 |
| 제 몫보다 많이 말했다 | 확인한 것보다 많은 걸 말했다 |

The middle row is the one to study. `움직였다` is a figure, and at that point in the
page nothing has moved yet — the reader has no referent for it and cannot ask for
one. The repair was not a better word. It was putting the number on the page and
letting the figure go.

The owner's own sentences are the model here, because he states the event and
stops: *같은 방법으로 검증해야 하는데, 매번 방법을 새로 짜서 검증하고 있었다.* No
figure, no conclusion, and the conclusion is unmistakable.

## The dictionary gives the word, not the collocation

The most persistent failure in this series is not a wrong word. It is a right
word placed where Korean does not put it. *Earn* maps to 벌다 and 초록을 벌다 is
not Korean; *live* maps to 살다 and 저장소에 살다 is English dev speech wearing
hangul. Both survive a dictionary check and both fail a reader.

Test the pair, not the word: does Korean actually put this verb next to this
noun? If the phrase cannot be found outside your own draft, it was minted.

| Minted from the dictionary | Korean |
| :--- | :--- |
| 정직하게 번 초록 (*a green that was earned*) | 제대로 나온 초록 |
| 저장소에 산 적이 없다 (*never lived in the repository*) | 저장소에 들어간 적이 없다 |
| 판정을 찍다 (*prints a verdict*) | 판정을 남기다 · 판정을 내다 |
| 한 파일에 박다 | 한 파일에 모으다 — 박다 is banned outright |

## English quantifiers and negations

English builds a quantifier into the noun phrase; Korean rebuilds the sentence.

| Reads as English | Korean |
| :--- | :--- |
| 어느 두 실행도 같은 도구로 잰 적이 없다 (*no two runs*) | 실행마다 재는 도구가 달랐다 |
| 필요한 건 눈 하나 더가 아니라 (*not another pair of eyes*) | 눈을 하나 더 붙여서 될 일이 아니라 |
| 그 아무것도 없음을 (*that absence*) | 남은 게 없는 자리를 |

## One Korean word per concept per file

The Loanwords section already requires one spelling per loanword. The same holds
for Korean nouns: 물건 and 도구 must not both stand for the verifying instrument
inside one essay. Establish the full form once — 검증하는 도구 — and let the bare
noun carry it afterwards; repeating the full form is the Repetition trap in a
different coat.

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
  only when the essay explains what they are. The same holds for an internal
  identifier — a milestone number, a check label. Explain it or generalize it.
- **Script.** A loanword the essay hangul-izes stays hangul throughout, and a
  term kept in Latin stays Latin throughout. A file that writes 게이트, 시나리오,
  스크립트 in hangul and then `driver`, `principal` in Latin has no rule, only a
  history of which page each word came from.
- **Numerals.** Hangul throughout — 마흔여덟 중 하나, 열두 판. Arabic only where
  the figure is the subject and its exactness is the point, and then never the
  same number twice in two forms.

## Names

- Korean prose refers to the owner as **정한**, declined naturally in Korean
  (정한이가, 정한이의) where the sentence wants it. English prose uses **Han**.
- The **provenance line is the exception**: it carries the full form, never 정한.
  `Claude Opus 5가 Jeong Han Lee, Dr.rer.nat.와 함께 씀 — 2026-07-27, 원격
  세션에서.` Two hands are joined with 가 … 초안을, … 다듬어.
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

0. Every Korean essay in the series has been read, and the English draft was
   closed before the Korean was written.
1. `summary:` is one sentence in 합쇼체.
2. No term from **Series vocabulary** has been replaced by a synonym.
3. No nominalized native verb is used as a technical noun.
3a. No paragraph opens with a conclusion or a figure whose referent has not yet
   appeared on the page.
3b. The listener pass has been run, and what the ear caught — repeated
   morphemes, unintroduced referents, a missing beat — is fixed.
4. Each loanword has one spelling throughout the file.
5. Count 손 and any other series term the English draft repeats; ordinary
   actions do not borrow the metaphor.
6. Section headings that correspond match in meaning, not in word class. The
   Korean may carry a section the English does not: the Core rule makes it a
   counterpart, so its structure is its own. What it may not do is take the
   English section order as a template.
7. `heroImage` exists under `public/images/essay-covers/`.
8. At least one quotation from the owner, in the spoken original.
9. The provenance line carries the full name, not 정한.
10. The closing pull quote is imperative 해라체.
