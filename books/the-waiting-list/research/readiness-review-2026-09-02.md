# Full-book readiness review — 2026-09-02

## Verdict

**Remain `Drafting`.** The manuscript is structurally complete at 20 of 20 numbered chapters and has a proportional chapter-level evidence trail, matching rights files, front matter, prologue, epilogue, and back matter. The Desk discovery/catalog blocker identified in the original review has since been closed. The six shorter chapters identified by the original byte-size triage have all received evidence-led depth revisions, and subsequent passes have deepened Chapters 1 and 4 and strengthened source discipline in Chapters 5, 6, 7, 12, and 19. The remaining blocker is objective local verification: the exact per-chapter and total manuscript word-count gates, followed by `python3 scripts/check-desk.py`, have not been executed in this connector-only environment.

Do not promote the canonical book README to `Complete draft` until that remaining verification is closed.

## Standard checked

This review applies the current `AGENTS.md`, `docs/book-brief-standard.md`, and `.agents/skills/human-prose/SKILL.md` on `main` as of September 3, 2026.

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

The original readiness pass found roughly 393 KB of UTF-8 Markdown across the numbered chapters. That made the 65,000-word floor plausible but did not prove it, because byte size is not a word count and must not be substituted for the repository's word-count rule.

The original shortest chapter files by byte size were:

- Chapter 11, `The Uber Problem` — 15,960 bytes;
- Chapter 13, `The Vaccine Line` — 16,172 bytes;
- Chapter 9, `A Nobel for a Marriage That Never Happened` — 16,341 bytes;
- Chapter 8, `Kidneys Without Cash` — 16,847 bytes;
- Chapter 10, `School Choice, Rebuilt` — 17,822 bytes; and
- Chapter 7, `The Man Who Fixed the Medical Match` — 17,901 bytes.

All six of those triage candidates have since been revised rather than padded:

- Chapter 11 develops the legibility tradeoff between a visible taxi queue and private dynamic dispatch, including driver-side waiting and competing rider/driver allocation objectives.
- Chapter 13 separates priority, appointment access, and throughput, including the implementation friction created by verification, site capacity, inventory movement, and access constraints.
- Chapter 8 treats scheduling, operating-room capacity, testing, donor availability, transport, and coordination as part of the kidney-exchange mechanism rather than as administrative debris around a compatibility graph.
- Chapter 9 develops the theory/practice and credit boundary across mathematical results, institutional redesign, administrators, programmers, clinicians, coordinators, participants, and political adoption.
- Chapter 10 separates the value of a common clearing process from the choice of matching algorithm and preserves the countercase that centralization can scale mistakes or suppress local knowledge.
- Chapter 7 develops why computational experiments matter when couples and complementarities break clean textbook assumptions, while distinguishing theoretical counterexamples from operational failure rates at institutional scale.

Two additional early chapters have also received earned depth. Chapter 1 now distinguishes reimbursement from compensation and examines how legal saleability can change bargaining pressure even without a completed sale. Chapter 4 now distinguishes bilateral bidding, fixed public compensation, and illegal brokerage by who sets payment, who can bid, who bears risk, and who captures scarcity rents.

These revisions materially deepen the chapters identified by the audit without adding another restatement of the book's scarcity thesis. They still do not establish that every chapter clears 3,000 words or that the qualifying manuscript total clears 65,000 words. `scripts/catalog.py` contains the repository's Markdown word-count implementation, but it has not been executed against the current candidate state in this connected environment.

If local counting identifies any remaining short chapter, deepen it with a real case, countercase, mechanism boundary, or implementation consequence from the existing research trail; do not pad it merely to satisfy the count.

## Research and factual discipline

Every numbered chapter has a dedicated chapter-level evidence/falsification note in addition to the omnibus `chapter-briefs.md` and `source-ledger.csv`. Chapter 4 has two related notes because its organ-market evidence was strengthened in separate passes.

The research brief explicitly preserves disconfirming cases rather than treating non-price allocation as automatically superior. It records that markets can outperform queues where ethical constraints permit them, stable matching does not settle upstream priority choices, algorithmic matching can hide bias, informal rationing can outperform formal mechanisms under some conditions, celebrated market-design cases are a selected sample, and allocation reform can distract from a deeper supply shortage.

Recent source passes strengthened several factual boundaries. Chapter 5's Ticketmaster/Live Nation note now distinguishes the June 2026 proposed final judgment from adjudicated findings. Chapter 6's incentive discussion is anchored directly to Dubins–Freedman and Roth so proposer-side truthful-reporting protection is not confused with universal strategy-proofness. Chapter 7 uses the May 14, 2025 congressional hearing date and 2026 Main Residency Match figures rather than a loose recency or scale claim. Chapter 12 limits its quantitative dating-platform result to the cited field experiment. Chapter 19 distinguishes operative AI rules from proposed or deferred obligations in the European Union and Colorado.

The dedicated chapter notes do not identify an unresolved factual correction that requires withholding the manuscript. Important boundaries remain explicit: organ-sale law does not make transplantation money-free; the 2012 economics prize recognized distinct theory and practice contributions; Uber's public marketplace pages do not expose its complete proprietary dispatch system; ACIP recommendations were advisory rather than one binding national allocation law; and kidney exchange expands feasible living donation without solving the kidney shortage.

## Continuity and prose

The sampled manuscript chapters preserve the book's governing distinction between scarcity and the rule used to allocate scarcity. They also preserve counterarguments rather than ending every case with the same mechanism-design triumph. Chapter 8 explicitly calls kidney exchange brilliant but insufficient; Chapter 9 warns against turning institutional redesign into a hero story or technocratic vanity; Chapter 11 distinguishes unavoidable complexity from chosen opacity; Chapter 13 separates the value of vaccination from the fairness and operability of its early allocation; and Chapter 20 closes by warning that a beautiful queue is still a queue when the deeper problem is inadequate supply.

No wholesale voice rewrite is warranted. The full-book risk remains repetition of the core maxim rather than lack of thesis. Any further length repair should therefore add case depth or counterevidence, not another restatement that scarcity implies rules.

## Rights and package integrity

`RIGHTS.md` and `rights.json` agree on:

- work title: `The Waiting List`;
- author/copyright owner: Sven Hardy Benson;
- copyright year: 2026;
- policy: `bookself-arr-v1`; and
- All Rights Reserved status with reserved AI/generative-use permissions.

Both files are present at book root. Front matter, prologue, epilogue, back matter, research README, chapter briefs, source ledger, and chapter-specific research notes are present.

## Desk discovery status

**Closed.** The book is now registered consistently in the root Desk catalog, the chapter-feedback book dropdown, `llms.txt`, and `sitemap.xml`. `index.html` derives its catalog dynamically from the root README, so it does not require a separate hard-coded Waiting List row.

This removes the discovery blocker recorded in the original review. The remaining integrity requirement is to run `python3 scripts/check-desk.py` locally against the final candidate state rather than infer success from manual inspection alone.

## Completion gate

Promote the canonical book status to `Complete draft` only after all of the following are true:

1. Run the repository word-count logic and confirm at least 65,000 qualifying manuscript words under the current standard's inclusion/exclusion rule.
2. Confirm every numbered chapter meets the 3,000-word floor; deepen any remaining short chapter with earned material rather than padding.
3. Run `python3 scripts/check-desk.py` from a local checkout and resolve every reported error.
4. Re-read the final diff and confirm no Shelf or Bookself mutation and no accidental unrelated manuscript change.

Until those gates are evidenced, `Drafting` is the correct status.