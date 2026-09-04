# Publication Checklist — Commit

This checklist governs the first publication candidate for **Commit: How Git Became the Memory of Software—and What Comes Next**. Desk remains the canonical working source; Sven Hardy Benson’s Shelf will hold a frozen released snapshot, not a live mirror.

## Gate 1 — Manuscript integrity and scope

- [x] Front matter present.
- [x] Chapters 1–22 present and linked from the book README.
- [x] Rights notice and machine-readable rights metadata present.
- [x] Research brief and source ledger present.
- [x] Desk Reader/discovery registrations exist for the book.
- [x] Reader-facing back matter present.
- [ ] Generate the exact manuscript word count with `python3 scripts/catalog.py --write`.
- [ ] Confirm at least 65,000 manuscript words excluding front matter, back matter, and research.
- [ ] Confirm every chapter clears 2,500 words, targets at least 3,000 words, and that most chapters land in the repository’s normal 3,500–4,500-word range.
- [ ] Expand short chapters with additional cases, counter-evidence, primary-source detail, and consequences rather than restatement.

Publication pass 1 has deepened Chapters 6 and 8–14 with first-party historical or technical anchors. The remaining scope gate stays open until the repository word-count generator can identify any chapters still below the manuscript standard.

## Gate 2 — Claims and research

- [x] Git’s April 2005 origin is anchored to the first public commit, original README, and official Git history.
- [x] Object-model, branching, distributed-workflow, merge, signing, worktree, and large-repository mechanics are grounded primarily in Git’s own documentation.
- [x] Git 2.55, the Git 3.0 roadmap, SHA-256 migration, reftable, partial clone, protocol v2, and bundle URI claims are separated into current implementation, declared project direction, and author forecast.
- [x] The manuscript does not describe Git history as immutable and does not conflate Git with GitHub.
- [x] Jujutsu, Sapling, Pijul, Git LFS, and GitHub-specific workflow claims use first-party sources where relevant.
- [x] Add a first-party source for GitHub’s 2008 launch/history if the launch framing remains in Chapter 6.
- [x] Add a primary or first-party source for the 2018 Microsoft acquisition if that detail remains in Chapter 6.
- [ ] Review source coverage chapter by chapter so broad historical claims are not supported only by adjacent technical documentation.
- [ ] Recheck the latest released Git version and unreleased development state on the exact publication-candidate date.
- [ ] Recheck Git 3.0 roadmap wording on the exact publication-candidate date; do not publish roadmap items as shipped defaults unless they have actually shipped.
- [ ] Recheck current Jujutsu, Sapling, and Pijul interoperability claims before freezing the candidate.

Publication pass 1 also added primary or first-party anchors for SHAttered, GitHub’s SHA-1 collision defenses, CVE-2022-24765 / `safe.directory`, Microsoft’s GVFS scaling work, Git LFS’s 2015 launch, and GitHub artifact attestations.

## Gate 3 — Editorial coherence

- [x] The core distinction between distributed possession and social authority remains consistent across the manuscript.
- [x] The book distinguishes the Git object graph from the forge metadata and institutional process layered around it.
- [x] The future section treats replacement as layer-specific rather than assuming one successor must replace Git wholesale.
- [ ] Deepen the compressed middle chapters with concrete organizations, incidents, migrations, and scaling cases.
- [ ] Reduce repeated rhetorical machinery where the same short-sentence cadence or contrast is doing work that a concrete example should do.
- [ ] Audit terminology for consistent use of object, ref, branch, remote, repository, forge, clone, partial clone, worktree, and provenance.
- [ ] Audit every forward-looking passage so prediction is clearly labeled and separated from current Git behavior.
- [ ] Copyedit names, dates, command formatting, capitalization, punctuation, and chapter-to-chapter transitions.
- [ ] Read Chapters 1–22 consecutively for repetition, missing setup, duplicated conclusions, and continuity of the central thesis.

## Gate 4 — Publication package

- [x] Add reader-facing back matter with a concise current-snapshot note, selected primary sources/further reading, and the boundary between Git facts and forecasts.
- [x] Add publication metadata to the book README as appropriate for the first edition: format, publisher, language, edition label, and candidate date.
- [ ] Regenerate the root Desk dashboard so `Commit` has an exact word count and current revision status.
- [ ] Run `python3 scripts/check-desk.py` against the frozen candidate and resolve every blocking error.
- [ ] Preview the complete book through `reader/#/b/commit/` and verify every contents link opens the intended manuscript file.
- [x] Verify `RIGHTS.md` and `rights.json` still match the intended public release terms.

## Gate 5 — Edition strategy and release transaction

- [ ] Freeze the exact Desk commit selected for the first edition.
- [ ] Run `scripts/release-book.sh commit ../shelf` from clean Desk and Shelf worktrees.
- [ ] Review the prepared Shelf diff for `README.md`, `catalog.json`, and `books/commit/` before any commit or push.
- [ ] Confirm the Shelf copy alone is transformed to `Published`; Desk remains the working edition.
- [ ] Verify every publication file on Shelf byte-matches the frozen Desk commit except the intentional published-status/catalog transformation.
- [ ] Verify Shelf catalog/discovery metadata and Reader links.
- [ ] Land Shelf and Desk release-record changes as a coordinated, traceable transaction.

## Release rule

Do not publish merely because all 22 chapter files exist. Publish only when the exact candidate commit is frozen, the manuscript meets the Desk’s full-book scope bar without padding, the research review matches the candidate’s actual claims, and the Shelf snapshot can be traced back to that commit without ambiguity.
