# Predictable Chapter Automation Runbook

This file defines the repository-local operating rules for the hourly chapter loop. Repository-level `AGENTS.md` remains authoritative.

## Goal

Advance *Predictable* by no more than one chapter per run and leave a reviewable pull request. Never trade speed for duplicate work, fabricated evidence, or a mixed-chapter diff.

## Single-flight gate

Before researching or writing anything:

1. Search open pull requests in `Svyable/binder`.
2. Treat a PR as a Predictable chapter PR when its title begins `[Predictable] Ch` or its head branch begins `book/predictable-ch`.
3. If any such PR is open, stop. Do not draft the next chapter from `main`, because the README on `main` will not yet contain the unmerged chapter state.
4. If no Predictable chapter PR is open, read `books/predictable/README.md` from `main` and select the first unchecked numbered chapter. Ignore front matter and back matter for chapter selection.
5. If every numbered chapter is checked, stop.

This single-flight rule is deliberate. It keeps every chapter PR based on the latest accepted manuscript and prevents stacked PRs from silently containing earlier unmerged chapters.

## Branch convention and recovery

Use:

`book/predictable-chNN-<chapter-slug>`

Before creating the branch, search for it.

- If it does not exist, create it from current `main`.
- If it exists and there is already an open PR for it, stop under the single-flight rule.
- If it exists without an open PR, compare it with `main` before writing anything.
- If that branch already contains a valid one-chapter change for the selected chapter, resume the interrupted run and open the missing PR.
- If it contains stale, unrelated, or ambiguous work, do not force-push or overwrite it. Create a recovery branch named `book/predictable-chNN-<chapter-slug>-retry-YYYYMMDDHH` from current `main`.

Never reuse another chapter's branch.

## Required reading before drafting

Read, in this order:

1. `AGENTS.md`
2. `.agents/skills/human-prose/SKILL.md`
3. `books/predictable/README.md`
4. `books/predictable/research/README.md`
5. this runbook
6. `books/predictable/research/chapter-briefs.md`
7. the immediately preceding drafted chapter, when one exists

The preceding chapter is for voice, continuity, and avoiding repetition. Do not rewrite it.

## Research standard

Research before prose.

Prefer, in descending order where appropriate:

- company filings, investor materials, and earnings transcripts for corporate claims
- exchange/platform rules and first-party market data for prediction-market claims
- government, regulator, laboratory, and intergovernmental datasets
- original academic papers
- contemporaneous historical records and archival datasets
- high-quality secondary reporting for context or to locate primary material

For current AI, infrastructure, valuation, capex, market, legal, or prediction-market claims, verify that the source is current at the time of the run.

Separate:

- observed data from forecasts
- announced spending from committed spending
- committed capacity from installed capacity
- installed capacity from utilization
- technological adoption from corporate profit
- consumer surplus from security returns
- market-implied probability from objective truth

Never invent a quote, scene, statistic, source, date, contract term, or level of certainty.

## Source ledger

Record every material source actually used in `source-ledger.csv`.

Use a stable source ID of the form `chNN-001`, `chNN-002`, and so on. IDs only need to be sequential within the chapter.

For each source capture:

- chapter number
- access date
- publication year/date when known
- author or institution
- title
- source type
- exact claim or role in the chapter
- canonical URL
- a short note about caveats, vintage, or resolution criteria when relevant

Do not add sources that were merely skimmed and did not materially support the chapter.

## Drafting standard

A chapter file contains one `# Title` heading followed by narrative nonfiction prose. No YAML front matter. No HTML comments. Do not turn the chapter into a slide deck, numbered framework, FAQ, or research memo.

The chapter should:

- begin with a concrete event, market, decision, object, or observed mechanism where the evidence supports it
- widen from the concrete material into the chapter's argument
- distinguish what participants knew at the time from what hindsight later revealed
- include meaningful evidence that could weaken the book's thesis
- preserve uncertainty where the evidence is uncertain
- use a small number of examples deeply rather than a montage of famous names
- avoid canned antithesis, repeated triads, motivational language, and unearned aphorisms
- earn any strong conclusion from evidence already shown

Do not write toward a predetermined AI crash. The book's durable claim is that technological truth and financial return can diverge.

## Allowed files in a chapter PR

A normal chapter PR may change only:

1. the one new chapter file
2. `books/predictable/README.md`, to tick that chapter and update the drafted count
3. `books/predictable/research/source-ledger.csv`, to record sources used by that chapter

If another file must change for correctness, stop rather than expanding the PR casually.

## Pre-PR verification

Before opening the PR:

- compare the branch with `main`
- confirm exactly one chapter file is new
- confirm no other chapter file changed
- confirm the README checks exactly that chapter and increments the drafted count by one
- confirm source-ledger additions belong only to that chapter
- confirm the chapter filename and title match the README entry
- confirm every quotation is traceable to a source
- confirm major numerical claims have a source and a date/vintage
- confirm the prose contains counterevidence rather than only evidence for the thesis
- confirm no unrelated repository files changed

If any check fails, fix it before opening the PR or stop if a safe fix is not possible.

## Pull request convention

Title:

`[Predictable] Ch NN — <Chapter Title>`

Base: `main`

The PR body should briefly state:

- the chapter's central argument
- the strongest evidence used
- the strongest counterevidence or uncertainty preserved
- the files changed

Do not merge the PR. The next hourly run should remain blocked until this chapter PR is merged or closed.