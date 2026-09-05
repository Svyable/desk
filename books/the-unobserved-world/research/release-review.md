# Release Review — The Unobserved World

## Decision — September 5, 2026

**Remain blocked on the repository’s mechanical manuscript-length gate.**

No unresolved factual, research, rights, matter, novelty, or editorial blocker was found in this bounded release review. The previously outstanding length condition has now been evaluated against the committed Desk source using the same word-token regex as `scripts/check-book-length.py` and the exact generated manuscript total recorded by the Desk catalog.

The generated manuscript-directory total is **66,129 words**. Counting the committed front matter with the checker’s `\b[\w’'-]+\b` regex yields **2,151 words**; counting the committed back matter yields **2,621 words**. Because `scripts/check-book-length.py` counts only `chNN-*.md` files, the resulting chapter-only total is therefore **61,357 words**.

That is **3,643 words below** the repository’s 65,000-word chapter-only minimum. Publication must not proceed from this source.

Precise remediation:

1. Add at least **3,643 net chapter-only words** across the numbered manuscript while preserving the reviewed thesis, evidence boundaries, and 20-chapter architecture.
2. Run `python3 scripts/check-book-length.py the-unobserved-world` on the remediated frozen Desk source and require `healthy: true`; this full run must also verify that every numbered chapter is at or above the separate 3,000-word floor.
3. Run `python3 scripts/check-desk.py` on the same frozen source and require a clean exit.
4. Recheck that the remediated source has not introduced new factual, research, rights, matter, novelty, or editorial blockers before creating any Shelf publication pair.

This is a bounded mechanical-length blocker, not a reversal of the substantive factual/editorial clearance below. No additional human-review gate is invented.

## Package reviewed

The canonical Desk book is `Complete draft` with 20 of 20 numbered chapters, front matter, back matter, a research brief with chapter-level falsification notes, a 23-record source ledger, `RIGHTS.md`, and `rights.json`.

The manuscript tree contains exactly the intended 22 Markdown files: front matter, 20 numbered chapters, and back matter. The book README and manuscript tree agree on chapter count and paths. No Drafting, revision, `DO NOT RELEASE`, missing-matter, or unresolved-research marker was found in the canonical book package.

The book-level rights files identify Sven Hardy Benson as author and copyright owner, use the `bookself-arr-v1` / All Rights Reserved profile, permit public reading, and reserve reproduction, derivative, commercial, and AI reuse rights except where independently permitted by law.

## Factual and research review

The existing research trail is unusually explicit about claim boundaries. It separates potential outcomes from literally observable counterfactual records; prediction from intervention; exploitation from exploration; individual welfare from institutional learning; observational recommendation-system evidence from causal claims; and partial research-funding lotteries from unrestricted random allocation.

The review preserves those boundaries. In particular, publication copy should not imply that:

- every rejected or unchosen option contains useful information;
- exploration is ethically justified merely because it is statistically informative;
- a contextual-bandit result generalizes from one hiring setting to all labor markets;
- reject inference reconstructs unobserved repayment outcomes without assumptions;
- medicine, lending, hiring, education, science funding, and public policy share one lawful or ethical exploration rule;
- algorithmic recommendation necessarily causes reduced diversity merely because observational studies find lower diversity in algorithmically driven consumption;
- funding lotteries replace peer review with pure chance; or
- generating evidence guarantees institutional adoption.

### September 5, 2026 volatile-source refresh

The three most time-sensitive 2026 lanes were rechecked against current publication or first-party pages:

1. **Li, Raymond, and Bergman, “Hiring as Exploration.”** The article is in *The Review of Economic Studies*, Volume 93, Issue 2, March 2026, pages 1200–1240, DOI `10.1093/restud/rdaf040`. Its abstract supports the manuscript’s narrow description: a contextual-bandit resume-screening approach in professional-services recruiting within one Fortune 500 firm improved eventual hiring rates among selected interview candidates while increasing demographic diversity relative to the firm’s existing practices. The setting-specific limitation remains controlling.
2. **Agte, Morales, Neilson, Otero, and Rao, “Incentives, Evidence, and Reminders for Bureaucrats: Overcoming Barriers to Policy Scale Up.”** NBER Working Paper 35291 is dated June 2026. Its nationwide Dominican Republic experiment documents a substantial implementation gap for a previously effective education intervention and reports null effects for the tested evidence-sharing, modest-incentive, and implementation-assistance treatments. The manuscript correctly uses it as setting-specific evidence that evidence generation does not guarantee scale-up.
3. **Max Bennett, “When the best decision is no decision: the rise of randomization in grant funding.”** The *Nature* career feature is dated August 11, 2026, DOI `10.1038/d41586-026-02082-7`. It remains appropriate only as current operational/journalistic context around partial randomization after eligibility or quality screening, not as primary causal evidence that lotteries dominate peer review.

No contradiction requiring manuscript remediation was found in those refreshes.

## Editorial review

The manuscript’s strongest contribution is the synthesis: decision systems partly determine which outcomes become observable and therefore which evidence future systems can learn from. The release should preserve the book’s narrower claim that this matters when selection affects exposure, access, treatment, measurement, or opportunity; it should not turn that insight into a general argument for randomization or experimentation everywhere.

The three post-completion robustness passes strengthened the manuscript without changing its 20-chapter architecture, especially around policy-scorecard reopening conditions, hiring exploration governance, science-funding portfolio logic, fairness and reciprocity, credit-learning boundaries, public-policy scale-up, bounded randomization, and institutional allocation of validation capacity.

No manuscript prose change is required by the substantive review. Manuscript expansion is required only because the objective publication-length gate fails.

## Mechanical release conditions

The committed source evaluated here does **not** satisfy `scripts/check-book-length.py`’s total-word requirement:

- generated manuscript total: **66,129 words**
- front matter: **2,151 words**
- back matter: **2,621 words**
- chapter-only total: **61,357 words**
- required chapter-only total: **65,000 words**
- deficit: **3,643 words**

The remediated source must then receive a literal full run of:

`python3 scripts/check-book-length.py the-unobserved-world`

Require `healthy: true`, at least 18 numbered chapters, every numbered chapter at or above 3,000 words, and at least 65,000 chapter-only words.

Then run:

`python3 scripts/check-desk.py`

Require a clean exit with the canonical book folder, root Reader/catalog surfaces, direct Reader slug, feedback picker, and Desk compatibility guards in agreement.

If both pass and the remediated frozen source still matches the reviewed manuscript/research/rights boundaries, no additional factual or human-review gate is required by this artifact.

## Final checklist

- [x] Canonical status is `Complete draft`.
- [x] README lists 20 of 20 chapters and complete front/back matter.
- [x] Manuscript tree contains front matter, 20 numbered chapters, and back matter.
- [x] Research brief includes chapter-level source trails and falsification notes.
- [x] Source ledger contains the book’s primary evidence lanes and explicit use boundaries.
- [x] The most volatile 2026 sources were rechecked on September 5, 2026.
- [x] Book-level `RIGHTS.md` and `rights.json` are present and coherent.
- [x] No unresolved factual, research, rights, matter, novelty, or editorial blocker remains in this review.
- [x] Mechanical chapter-only total evaluated on the committed source: **61,357 words**.
- [ ] Expand numbered chapters by at least **3,643 net words** without violating reviewed evidence boundaries.
- [ ] Run the full `python3 scripts/check-book-length.py the-unobserved-world` command on the remediated frozen Desk source and require a pass, including every per-chapter floor.
- [ ] Run `python3 scripts/check-desk.py` on the same frozen Desk source and require a pass.
