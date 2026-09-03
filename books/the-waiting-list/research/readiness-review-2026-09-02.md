# Full-book readiness review — 2026-09-02

## Verdict

**Remain `Drafting`.** The manuscript is structurally complete at 20 of 20 numbered chapters and has a proportional chapter-level evidence trail, matching rights files, front matter, prologue, epilogue, and back matter. The remaining blockers are objective completion checks rather than missing argument architecture: the exact per-chapter and total manuscript word-count gates have not been executed in this connector-only environment, and the root Desk discovery surfaces do not yet register `the-waiting-list` consistently.

Do not promote the canonical book README to `Complete draft` until both blockers below are closed.

## Standard checked

This review applies the current `AGENTS.md`, `docs/book-brief-standard.md`, and `.agents/skills/human-prose/SKILL.md` on `main` as of September 2, 2026.

The automated full-book floor relevant here is at least 18 numbered chapters, at least 3,000 words per chapter with most chapters normally 3,500–4,500 words, at least 65,000 manuscript words excluding front/back matter and research, a proportional checkable research trail with falsification notes, matching `RIGHTS.md` and `rights.json`, and synchronized Desk discovery/catalog surfaces.

## Manuscript structure

The canonical README lists and checks:

- front matter;
- a prologue;
- Chapters 1–20;
- an epilogue; and
- back matter.

All 20 numbered chapter paths currently exist under `manuscript/`. The chapter sequence is coherent: the opening establishes repugnant markets and queue types; the central run moves through matching theory, the medical Match, kidney exchange, the Nobel history, and school choice; the second half tests the same allocation logic in ride-hailing, dating, vaccines, refugee placement, compute, water, housing, and college admissions; Chapters 19–20 close on audit and design principles.

No missing numbered chapter or broken book-local TOC entry was found in this pass.

## Length and depth gate

The numbered chapters contain roughly 393 KB of UTF-8 Markdown. That is enough material to make the 65,000-word floor plausible, but byte size is not a word count and must not be substituted for the repository's word-count rule.

The shortest chapter files by byte size are currently:

- Chapter 11, `The Uber Problem` — 15,960 bytes;
- Chapter 13, `The Vaccine Line` — 16,172 bytes;
- Chapter 9, `A Nobel for a Marriage That Never Happened` — 16,341 bytes;
- Chapter 8, `Kidneys Without Cash` — 16,847 bytes;
- Chapter 10, `School Choice, Rebuilt` — 17,822 bytes; and
- Chapter 7, `The Man Who Fixed the Medical Match` — 17,901 bytes.

The exact word-count gate is therefore still material. `scripts/catalog.py` contains the repository's Markdown word-count implementation, but it cannot be executed from the connected GitHub-only environment used for this review. A local run must establish both the manuscript total and the per-chapter floor. If any numbered chapter is below 3,000 words, deepen it with a real case, countercase, mechanism boundary, or implementation consequence from the existing research trail; do not pad it merely to satisfy the count.

The existing chapter notes make Chapters 8, 9, 11, and 13 the first depth candidates if the exact count identifies shortfalls. Their research packets already contain unused or expandable material on chain-end kidney exchange and distribution, attribution and institutional engineering in market design, ride-hailing objective conflicts and proprietary dispatch limits, and the separation between vaccine eligibility and appointment allocation.

## Research and factual discipline

Every numbered chapter now has a dedicated chapter-level evidence/falsification note in addition to the omnibus `chapter-briefs.md` and `source-ledger.csv`. Chapter 4 has two related notes because its organ-market evidence was strengthened in separate passes.

The research brief explicitly preserves disconfirming cases rather than treating non-price allocation as automatically superior. It records that markets can outperform queues where ethical constraints permit them, stable matching does not settle upstream priority choices, algorithmic matching can hide bias, informal rationing can outperform formal mechanisms under some conditions, celebrated market-design cases are a selected sample, and allocation reform can distract from a deeper supply shortage.

The dedicated chapter notes reviewed in this pass do not identify an unresolved factual correction that requires withholding the manuscript. Important boundaries are already recorded: organ-sale law does not make transplantation money-free; the 2012 economics prize recognized distinct theory and practice contributions; Uber's public marketplace pages do not expose its complete proprietary dispatch system; ACIP recommendations were advisory rather than one binding national allocation law; and kidney exchange expands feasible living donation without solving the kidney shortage.

## Continuity and prose

The sampled manuscript chapters preserve the book's governing distinction between scarcity and the rule used to allocate scarcity. They also preserve counterarguments rather than ending every case with the same mechanism-design triumph. Chapter 8 explicitly calls kidney exchange brilliant but insufficient; Chapter 9 warns that mechanism design can become technocratic vanity; Chapter 11 distinguishes unavoidable complexity from chosen opacity; Chapter 13 separates the value of vaccination from the fairness of its early allocation; and Chapter 20 closes by warning that a beautiful queue is still a queue when the deeper problem is inadequate supply.

No wholesale voice rewrite is warranted. The full-book risk is repetition of the core maxim rather than lack of thesis. Any length repair should therefore add case depth or counterevidence, not another restatement that scarcity implies rules.

## Rights and package integrity

`RIGHTS.md` and `rights.json` agree on:

- work title: `The Waiting List`;
- author/copyright owner: Sven Hardy Benson;
- copyright year: 2026;
- policy: `bookself-arr-v1`; and
- All Rights Reserved status with reserved AI/generative-use permissions.

Both files are present at book root. Front matter, prologue, epilogue, back matter, research README, chapter briefs, source ledger, and chapter-specific research notes are present.

## Desk discovery blocker

The book exists as a canonical real directory on `main`, but the current root discovery surfaces are stale:

- root `README.md` does not contain a `the-waiting-list` catalog row;
- `.github/ISSUE_TEMPLATE/chapter-feedback.yml` does not contain the `the-waiting-list` option;
- `llms.txt` does not list the book; and
- `sitemap.xml` does not list the book.

Because `scripts/check-desk.py` compares all real book directories against those surfaces, the current repository cannot pass that integrity check until this catalog drift is reconciled. `index.html` derives its book list dynamically from the root README, so it does not require a separate hard-coded Waiting List entry.

## Completion gate

Promote the canonical book status to `Complete draft` only after all of the following are true:

1. Run the repository word-count logic and confirm at least 65,000 manuscript words under the current standard's inclusion/exclusion rule.
2. Confirm every numbered chapter meets the 3,000-word floor; deepen any short chapter with earned material rather than padding.
3. Synchronize root README/catalog, chapter-feedback dropdown, `llms.txt`, and sitemap for `the-waiting-list`.
4. Run `python3 scripts/check-desk.py` from a local checkout and resolve every reported error.
5. Re-read the final diff and confirm no Shelf or Bookself mutation and no accidental unrelated manuscript change.

Until those gates are evidenced, `Drafting` is the correct status.