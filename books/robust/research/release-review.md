# Robust — Release Review

**Book:** *Robust: What It Means to Be Sturdy in the Ever-Shifting AI Landscape*  
**Author:** Sven Hardy Benson  
**Desk status:** Complete draft  
**Review opened:** 2026-09-03  
**Publication surface:** Sven Hardy Benson’s Shelf  

This file is the release gate between a manuscript-complete Desk project and a deliberate Shelf publication. A checked box means the evidence or artifact was inspected, not merely assumed.

## 1. Manuscript completeness

- [x] Front matter exists.
- [x] Thirty-one numbered chapters exist and are listed in canonical reading order.
- [x] Back matter exists.
- [x] Practical publication appendix / robustness review exists inside back matter.
- [x] Every checked Reader-facing manuscript link in `books/robust/README.md` points to an intended manuscript file by repository path.
- [x] Exact manuscript word count has been run with the repository’s `scripts/catalog.py` word-count regex and confirmed above the Desk full-book standard: **66,938 words across 35 manuscript files** after the final editorial pass.
- [x] Chapter-length distribution has been reviewed. Numbered chapters range from roughly 1,568 words at the short end to 2,753 at the long end; the two interludes are intentionally brief. No padding is required to meet the book standard.

**Gate:** The Desk length/completeness gate is closed. Do not inflate short chapters merely to equalize chapter size; revise only where argument, scene, or pacing needs it.

## 2. Structural review

- [x] The central thesis remains consistent: robustness is preservation of agency under surprise, not resistance to change.
- [x] The six recurring properties remain visible across the manuscript: reversible choices, optional paths, bounded delegation, understood failure modes, substitutable dependencies, tested fallbacks.
- [x] Counter-cases are preserved: deep single-vendor integration can be rational; redundancy can increase complexity; human review can reduce reliability; old skills and fallbacks can deserve retirement.
- [x] Part VII adds mechanism-rich field tests rather than a second conclusion.
- [x] Part V’s `Sturdy, Not Still` is explicitly framed as the end of the core argument rather than the literal end of the book. `Interlude — The Stress Test` opens Part VI as an institutional-scale stress test.
- [x] `Interlude — Into the Field` creates an explicit transition from the institutional synthesis into Part VII’s historical field tests and states the limits of the cross-domain analogies.
- [x] Full-manuscript repetition pass completed: zero exact repeated prose paragraphs and zero exact repeated cross-chapter sentences remain after the final editorial pass.
- [x] Opening/closing transition pass found and corrected the premature conclusion wording in Chapters 20 and 25.

## 3. Current / volatile factual claims

Recheck these immediately before a Shelf release because they can change after this review.

- [x] **Stanford AI Index 2026:** source is current in the registry and was reviewed during the 2026-09-03 draft/revision pass.
- [x] **METR task-completion time horizons:** current program page and 2026 methodology update were reviewed during the draft/revision pass.
- [x] **NIST AI RMF / GenAI Profile:** current NIST pages were reviewed during the draft/revision pass.
- [x] **Microsoft Foundry model retirement schedule:** provider lifecycle page was reviewed during the draft/revision pass and supports the claim that retirement/migration is ordinary production work.
- [ ] Re-open S01–S09 on the actual Shelf release date and update any changed statistics, statuses, retirement dates, or methodology language.
- [x] Final manuscript scan reviewed uses of `today`, `currently`, `right now`, and `this year`. The hits are contextual, hypothetical, or explicitly dated rather than free-standing volatile statistics.

## 4. Historical incident verification

- [x] **Chapter 26 / CrowdStrike:** chronology and mechanism checked against CrowdStrike’s July 24, 2024 Preliminary Post Incident Review. The manuscript uses the incident to discuss blast radius, staged change, and recovery-channel independence; those prescriptions are clearly presented as interpretation.
- [x] **Chapter 27 / Knight Capital:** incident framing checked against the U.S. SEC’s 2013 enforcement materials. The manuscript preserves the approximate $440 million / forty-five-minute framing and uses the event as an antecedent for bounded automated authority.
- [x] **Chapter 28 / GitLab:** backup and recovery claims checked against GitLab’s February 10, 2017 database-outage postmortem, including the failed `pg_dump` path, restoration constraints, and lack of routine backup-test ownership.
- [x] **Chapter 29 / AWS S3:** command/input and subsystem-impact framing checked against AWS’s official 2017 US-EAST-1 incident summary.
- [x] Source-registry handling notes explicitly distinguish first-party incident chronology from the manuscript’s broader AI analogy.
- [x] Final prose pass changed cadence and continuity rather than historical substance; incident numbers/dates remain those already verified against S20–S23.

## 5. Human-factors evidence

- [x] Historical automation research is labeled as antecedent/mechanism rather than proof that contemporary foundation models behave identically.
- [x] Chapter-source map flags the transfer-risk in Chapters 6, 7, 9, and 22.
- [x] Final claim pass reviewed those chapters and retains calibrated language such as `versions of this problem`, `can`, and `does not necessarily`, rather than universalizing historical findings.

## 6. Vendor and interested evidence

- [x] Anthropic and OpenAI enterprise/economic sources are labeled as vendor research in the source registry.
- [x] Manuscript policy is to use vendor studies directionally for behavior observed on their surfaces, not as neutral estimates of the entire economy.
- [x] Final manuscript scan found no vendor-produced adoption statistic presented as a free-standing neutral estimate without source context.

## 7. Rights and quotation review

- [x] `research/rights-notes.md` exists.
- [x] Drafting policy defaults to paraphrase rather than reproduced source prose.
- [x] Field-test chapters were written from facts/mechanisms and do not intentionally reproduce long source passages.
- [x] Final manuscript quotation scan found no markdown blockquotes and no long reproduced third-party quotation; quotation marks are overwhelmingly hypothetical dialogue, example language, or short terms/phrases.
- [x] Names, trademarks, and incident descriptions are used factually and are not presented as endorsements.

## 8. Editorial / voice pass

The repository’s `human-prose` standard governed the full-manuscript pass. Details are recorded in `research/editorial-review.md`.

- [x] Run the repository human-prose standard across the complete manuscript rather than chapter-by-chapter in isolation.
- [x] Remove repeated rhetorical templates where they became predictable across thirty-one short chapters.
- [x] Reduce list-like passages that read as generated enumeration rather than authored argument.
- [x] Verify sentence fragments are used rhythmically and not as a default cadence.
- [x] Check that case chapters contain enough scene and mechanism to earn their length.
- [x] Check that every chapter advances the thesis rather than merely restating one of the six robustness properties.
- [x] Perform title consistency review for chapter titles and Part names.

Post-pass publication metrics: **66,938 words**, zero exact repeated prose paragraphs, zero exact repeated cross-chapter sentences, and materially shorter fragment runs while preserving the deliberate Chapter 20 close.

## 9. Reader / repository integration

- [x] Book README has a complete checked manuscript manifest, including both continuity interludes.
- [x] Book status is `Complete draft` after editorial and manuscript gates closed.
- [x] The branch has been synchronized onto the current mainline before final registration work, eliminating the earlier long-lived branch drift.
- [ ] Register `robust` in the current root Desk catalog and discovery surfaces required by `AGENTS.md`.
- [ ] Run the current local-first `python3 scripts/check-desk.py` contract (or an equivalent inspection of every invariant if the execution environment cannot materialize a full checkout).
- [ ] Confirm Reader opens every manuscript section in canonical order on the committed PR head.
- [x] Book README contains no stale `/self/` or `/binder/` Reader URLs.

## 10. Release decision

Desk completion and Shelf publication are separate decisions.

Before moving this project to Sven Hardy Benson’s Shelf:

- [x] Manuscript and editorial Desk gates are closed.
- [x] Desk status is `Complete draft`.
- [ ] Current Desk discovery/catalog surfaces are synchronized for `robust`.
- [x] PR #830 exists and contains the manuscript, research trail, rights notes, editorial review, and release review.
- [ ] Repository integrity checks pass on the final PR head.
- [ ] PR #830 is merged when objective repository gates permit; no human-review blocker is added merely as ceremony.
- [ ] **Shelf-only gate:** recheck volatile sources S01–S09 on the actual release date, then use the Bookself release path only after an explicit release instruction.

## Current blocking items

1. Synchronize the current Desk catalog/discovery surfaces for `robust`.
2. Run final current-repository integrity checks and verify the PR head remains aligned with `main`.
3. Merge PR #830 if those objective gates are green.
4. Shelf publication remains a separate explicit release step with a same-day volatile-fact refresh.

The manuscript itself is a complete Desk draft. Remaining work is repository integration and the later deliberate Shelf release boundary.
