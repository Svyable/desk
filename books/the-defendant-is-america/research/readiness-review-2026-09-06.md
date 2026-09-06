# Publication Readiness Review — 2026-09-06

## Current state

**Book:** *The Defendant Is America: 26 Trials That Explain 250 Years of the United States*  
**Author:** Sven Hardy Benson  
**Desk status:** Drafting — full 26-decade sequence drafted; research and length augmentation in progress.

The manuscript now contains all 26 planned chapter files, one for every decade from the 1770s through the 2020s, plus front matter, prologue, epilogue, and back matter. `RIGHTS.md` and `rights.json` are present with the Desk/Shelf all-rights-reserved profile.

The book also now has a research brief, chapter-by-chapter falsification notes, and an initial source ledger with one anchor source per chapter. That is enough to support the next revision pass, but it is not yet a publication-grade source density for a 26-chapter historical book.

## What is ready

- [x] Distinct title, subtitle, author identity, and book slug
- [x] 26/26 decade chapters drafted
- [x] Front matter, prologue, epilogue, and back matter drafted
- [x] Rights notice and machine-readable rights profile
- [x] Whole-book research thesis and evidence hierarchy
- [x] Chapter briefs for all 26 chapters
- [x] Falsification/counter-evidence note for all 26 chapters
- [x] Initial chapter-by-chapter source ledger
- [x] Explicit freshness protocol for the live-history 2020s chapter

## Blocking items before `Complete draft`

### 1. Mechanical length validation

Desk's full-book standard requires:

- at least 18 chapters;
- at least 3,000 words in every `chNN-*.md` chapter;
- at least 65,000 chapter-only words in total.

The current connector environment can inspect repository files but cannot execute `python3 scripts/check-book-length.py the-defendant-is-america` against a checked-out branch. File sizes indicate that Chapters 1–14 are materially shorter than the later chapters and are the highest-risk group for failing the per-chapter minimum. Several later chapters are also close enough that exact counting remains necessary.

**Release gate:** run the repository validator on the branch before changing the README status to `Complete draft`. Any failing chapter should be deepened with additional researched scenes, procedural detail, counter-evidence, and afterlife—not padded.

### 2. Research depth

The source ledger currently supplies an anchor source for each chapter. Before publication-readiness review, expand it to include:

- primary trial or appellate material wherever surviving records are available;
- at least one serious scholarly or historical counter-source where interpretation is disputed;
- specific afterlife records for pardons, reversals, statutory changes, retrials, later admissions, or federal investigations;
- precise support for all direct quotations retained in the prose.

Priority source upgrades:

- **Ch 6 — Denmark Vesey:** pair the 1822 official report with scholarship challenging the report's reliability and construction of the alleged conspiracy.
- **Ch 15 — Leo Frank:** add the Georgia pardon-board record and keep the 1986 pardon distinct from a factual-innocence exoneration.
- **Ch 19 — Emmett Till:** keep later recantation claims aligned with the Justice Department's 2021 closure findings.
- **Ch 23 — O. J. Simpson:** replace remembered television shorthand with trial-record or high-quality contemporaneous sourcing for forensic statistics and chain-of-custody claims.
- **Ch 24 — Moussaoui:** add indictment, plea, sentencing verdict forms, and official federal court records.
- **Ch 26 — Trump:** refresh all post-verdict and appellate facts immediately before release.

### 3. Historical-claim audit

Before release, perform a manuscript-wide check for:

- invented or unverified quotations;
- later evidence smuggled into the trial-time narrative;
- anachronistic claims that historical actors violated doctrine that did not yet exist;
- causal language stronger than the evidence supports;
- famous but apocryphal lines, especially in the Worcester/Jackson chapter;
- pardon, reversal, or acquittal language that is accidentally converted into a declaration of factual innocence.

The research brief's two-clock rule should govern the pass: **Clock A** is what the tribunal could know then; **Clock B** is what became knowable later.

### 4. Desk catalog integration

Before merger to `main`, add `the-defendant-is-america` to the repository's canonical discovery surfaces:

- root `README.md` catalog;
- `catalog.json`;
- `llms.txt`;
- `sitemap.xml`;
- `index.html`;
- `.github/ISSUE_TEMPLATE/chapter-feedback.yml`.

Generated surfaces should preferably be refreshed through the repository's catalog tooling from a checkout rather than hand-edited if the tool owns the marked blocks.

### 5. Final editorial differentiation pass

The book fails structurally if every chapter resolves to the same moral. The final edit should preserve the distinct failure modes already present:

- due process that works for unpopular defendants;
- constitutional language that becomes unexpectedly enforceable;
- a bad prosecution later repudiated politically;
- a correct judicial ruling that practical power fails to honor;
- a catastrophic constitutional judgment entrenched for generations;
- emergency deference later repudiated;
- a right that becomes meaningful only when the system funds the institution required to exercise it;
- formal acquittal surviving later historical condemnation;
- criminal process reaching executive power through deputies rather than the president himself;
- a still-live case whose historical meaning cannot yet be settled.

## 2020s live-history cutoff

The current Chapter 26 research cutoff is **September 6, 2026**. The chapter must be refreshed if any material New York appellate or federal ruling changes the status of the 2024 conviction before Shelf release.

## Current recommendation

**Do not publish to Shelf yet.** The manuscript has crossed the important threshold from concept to complete narrative sequence, but it has not yet crossed Desk's mechanical length gate or the research-density gate appropriate for a historical trade book.

The next efficient publication sequence is:

1. deepen chapters most likely to fail the 3,000-word floor;
2. run `scripts/check-book-length.py` from a checkout and repair every failure;
3. expand the source ledger and verify quotations;
4. run catalog generation/integrity checks;
5. update the book README to `Complete draft · publication candidate` only after those checks pass;
6. open a mergeable PR to `main` with the validation output in the PR body;
7. make an explicit Shelf release decision after the merged Desk snapshot is frozen.

This review is intentionally stricter than “all chapters exist.” Publication status should describe what has actually been validated, not what the manuscript is close to becoming.
