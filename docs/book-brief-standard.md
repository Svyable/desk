# Standard for automated full-book drops

This file sets the minimum bar for a scheduled or automated task that is asked
to draft an entire new book "in one shot" — as opposed to the normal
incremental, one-chapter-per-PR workflow the rest of this repository uses
(see `AGENTS.md` and `books/predictable/research/automation-runbook.md` for
that narrower case). It exists because a first attempt at this kind of task
(the initial draft of `books/proof-of-human/`) came in far shorter than the
repository owner wanted, and the correction is recorded here so it survives
across sessions rather than depending on any one conversation's memory.

## Minimum scope for a new one-shot book

- **At least 18 chapters**, not counting front matter and back matter.
- **At least 3,000 words per chapter**, with most chapters landing in the
  3,500–4,500 word range. A chapter under 2,500 words should be treated as a
  sign the topic needs to be split or gone into more deeply, not padded.
- **A total manuscript length of at least 65,000 words**, excluding front
  matter, back matter, and the research trail. 70,000–90,000 words is the
  better target; treat that as the normal range for a complete trade-nonfiction
  draft, not a stretch goal.
- A **research trail proportional to that scope** — real, checkable sources
  for the concrete claims in every chapter, following the sourcing and
  falsification-note conventions already used in `books/predictable/research/`
  and `books/the-world-beneath-the-world/research/`.
- Matching `RIGHTS.md` and `rights.json` files for the new book, following the
  pattern in any sibling book (for example `books/predictable/RIGHTS.md`).
- The usual catalog updates: an entry in the root `README.md` books table,
  `llms.txt`, `sitemap.xml`, `index.html`, and the `Book` dropdown in
  `.github/ISSUE_TEMPLATE/chapter-feedback.yml`.

## Why the bar is this high

The existing complete drafts in this Binder that were written a chapter at a
time (`the-world-beneath-the-world`, `the-unbounding`) land in a similar range
almost by accident, one chapter per sitting, over enough sittings. A one-shot
task does not get that many sittings — it gets one — so it has to plan for
the full scope up front rather than stopping once the argument feels
"complete" at a much shorter length. A thesis that takes ten chapters to state
usually has another ten chapters of real case studies, counter-evidence, and
adjacent territory worth covering before it earns comparison to the
full-length nonfiction books this Binder's ratings sheet holds up as the bar
(`Thinking, Fast and Slow`, `The Innovator's Dilemma`, `Why Nations Fail`, and
similar): those run long because they earn the length with more cases, not
because they pad the argument that was already made.

## What this does not change

Length is a minimum, not a license to pad. Every instruction elsewhere in this
repository still applies at the new scale: one `# Title` heading per chapter
file, no invented quotations or statistics, real counter-evidence preserved
rather than argued away, and the voice guidance in
`.agents/skills/human-prose/SKILL.md` — in particular, more chapters and more
words per chapter should come from deeper research and more real cases, not
from restating the same point in more sentences.
