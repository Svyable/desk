# Robust — Release Review

**Book:** *Robust: What It Means to Be Sturdy in the Ever-Shifting AI Landscape*  
**Author:** Sven Hardy Benson  
**Desk status:** Revision  
**Review opened:** 2026-09-03  
**Publication surface:** Sven Hardy Benson’s Shelf  

This file is the release gate between a manuscript-complete Desk project and a deliberate Shelf publication. A checked box means the evidence or artifact was inspected, not merely assumed.

## 1. Manuscript completeness

- [x] Front matter exists.
- [x] Thirty-one numbered chapters exist and are listed in canonical reading order.
- [x] Back matter exists.
- [x] Practical publication appendix / robustness review exists inside back matter.
- [x] Every checked Reader-facing manuscript link in `books/robust/README.md` points to an intended manuscript file by repository path.
- [ ] Exact manuscript word count has been run with the repository’s `scripts/catalog.py` word-count logic and confirmed at or above the Desk full-book standard.
- [ ] Chapter-length distribution has been reviewed for unusually thin sections or accidental repetition.

**Gate:** Do not change Desk status to `Complete draft` until the exact word-count check and length-distribution review are complete.

## 2. Structural review

- [x] The central thesis remains consistent: robustness is preservation of agency under surprise, not resistance to change.
- [x] The six recurring properties remain visible across the manuscript: reversible choices, optional paths, bounded delegation, understood failure modes, substitutable dependencies, tested fallbacks.
- [x] Counter-cases are preserved: deep single-vendor integration can be rational; redundancy can increase complexity; human review can reduce reliability; old skills and fallbacks can deserve retirement.
- [x] Part VII adds mechanism-rich field tests rather than a second conclusion.
- [ ] Final continuity pass confirms that Part V’s `Sturdy, Not Still` no longer reads as if it is literally the last chapter after Parts VI and VII were added.
- [ ] Final continuity pass checks opening/closing transitions across all seven parts.
- [ ] Repetition pass removes duplicate formulations that accumulated during expansion.

## 3. Current / volatile factual claims

Recheck these immediately before a Shelf release because they can change after this review.

- [x] **Stanford AI Index 2026:** source is current in the registry and was reviewed during the 2026-09-03 draft/revision pass.
- [x] **METR task-completion time horizons:** current program page and 2026 methodology update were reviewed during the draft/revision pass.
- [x] **NIST AI RMF / GenAI Profile:** current NIST pages were reviewed during the draft/revision pass.
- [x] **Microsoft Foundry model retirement schedule:** provider lifecycle page was reviewed during the draft/revision pass and supports the claim that retirement/migration is ordinary production work.
- [ ] Re-open S01–S09 on the actual Shelf release date and update any changed statistics, statuses, retirement dates, or methodology language.
- [ ] Search manuscript for undated phrases such as “today,” “currently,” “now,” and “this year” and either date or remove them where the claim is volatile.

## 4. Historical incident verification

- [x] **Chapter 26 / CrowdStrike:** chronology and mechanism checked against CrowdStrike’s July 24, 2024 Preliminary Post Incident Review. The manuscript uses the incident to discuss blast radius, staged change, and recovery-channel independence; those prescriptions are clearly presented as interpretation.
- [x] **Chapter 27 / Knight Capital:** incident framing checked against the U.S. SEC’s 2013 enforcement materials. The manuscript preserves the approximate $440 million / forty-five-minute framing and uses the event as an antecedent for bounded automated authority.
- [x] **Chapter 28 / GitLab:** backup and recovery claims checked against GitLab’s February 10, 2017 database-outage postmortem, including the failed `pg_dump` path, restoration constraints, and lack of routine backup-test ownership.
- [x] **Chapter 29 / AWS S3:** command/input and subsystem-impact framing checked against AWS’s official 2017 US-EAST-1 incident summary.
- [x] Source-registry handling notes explicitly distinguish first-party incident chronology from the manuscript’s broader AI analogy.
- [ ] Final copyedit checks every number/date in Chapters 26–29 against S20–S23 one more time after prose stops moving.

## 5. Human-factors evidence

- [x] Historical automation research is labeled as antecedent/mechanism rather than proof that contemporary foundation models behave identically.
- [x] Chapter-source map flags the transfer-risk in Chapters 6, 7, 9, and 22.
- [ ] Final claim pass checks for any sentence that accidentally upgrades a cautious analogy into a universal empirical claim.

## 6. Vendor and interested evidence

- [x] Anthropic and OpenAI enterprise/economic sources are labeled as vendor research in the source registry.
- [x] Manuscript policy is to use vendor studies directionally for behavior observed on their surfaces, not as neutral estimates of the entire economy.
- [ ] Final notes pass ensures no vendor-produced adoption statistic is presented without source identity and date where the distinction matters.

## 7. Rights and quotation review

- [x] `research/rights-notes.md` exists.
- [x] Drafting policy defaults to paraphrase rather than reproduced source prose.
- [x] Field-test chapters were written from facts/mechanisms and do not intentionally reproduce long source passages.
- [ ] Search final manuscript for quotation marks and blockquotes; verify each third-party quotation against the original source and record rights treatment where necessary.
- [ ] Verify names, trademarks, and incident descriptions are factual, proportionate, and not used to imply endorsement.

## 8. Editorial / voice pass

- [ ] Run the repository human-prose standard across the complete manuscript rather than chapter-by-chapter in isolation.
- [ ] Remove repeated rhetorical templates where they become predictable across thirty-one short chapters.
- [ ] Reduce list-like passages that read as generated enumeration rather than authored argument.
- [ ] Verify sentence fragments are used rhythmically and not as a default cadence.
- [ ] Check that case chapters contain enough scene and mechanism to earn their length.
- [ ] Check that every chapter advances the thesis rather than merely restating one of the six robustness properties.
- [ ] Perform title consistency review for chapter titles and Part names.

## 9. Reader / repository integration

- [x] Book README has a complete checked manuscript manifest.
- [x] Book status is `Revision` while publication gates remain open.
- [ ] Run `python3 scripts/catalog.py --write` in a full Desk checkout.
- [ ] Run `python3 scripts/catalog.py --json` and confirm `healthy: true` with zero blocking Reader audit errors.
- [ ] Confirm root `README.md` catalog includes `Robust`, the correct `Revision` status, `31 of 31` progress, and the exact generated word count.
- [ ] Confirm Reader opens every manuscript section in canonical order.
- [ ] Confirm no stale `/self/` or `/binder/` Reader URLs exist in the book README.

## 10. Release decision

Desk completion and Shelf publication are separate decisions.

Before moving this project to Sven Hardy Benson’s Shelf:

- [ ] All blocking items above are closed.
- [ ] Desk status is changed from `Revision` to `Complete draft` only after the manuscript gate passes.
- [ ] Root Desk catalog is regenerated after the status change.
- [ ] A clean PR to `main` contains the complete manuscript, research trail, rights notes, release review, and catalog update.
- [ ] Repository checks pass on the PR head.
- [ ] PR is merged when objective repository gates permit; no human-review blocker is added merely as ceremony.
- [ ] Shelf release is handled as a separate deliberate publication step, with its own current-fact refresh and packaging review.

## Current blocking items

1. Exact manuscript word count / chapter-length audit using Desk’s own word-count logic.
2. Full-manuscript continuity and repetition pass after expansion to 31 chapters.
3. Root catalog regeneration and Reader audit.
4. Final volatile-fact refresh on the actual Shelf release date.

The manuscript is structurally complete. It is not yet marked publication-ready until these gates close.
