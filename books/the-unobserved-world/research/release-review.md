# Release Review — The Unobserved World

## Decision — September 5, 2026

**Release-candidate, subject only to the repository’s two local mechanical gates on the frozen Desk source:**

- `python3 scripts/check-book-length.py the-unobserved-world`
- `python3 scripts/check-desk.py`

No unresolved factual, research, rights, matter, novelty, or editorial blocker was found in this bounded release review. If either mechanical command fails on the frozen source, do not release; record the failure, remediate it on Desk, and repeat the review from the corrected commit.

This review does not claim those local commands ran in the connected execution environment. That environment cannot resolve or reach GitHub from its shell, so the mechanical checks remain explicit conditions rather than inferred passes.

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

No manuscript prose change is required by this review.

## Mechanical release conditions

Before freezing a publication snapshot, run both commands from an executable checkout at the exact Desk source SHA intended for release:

`python3 scripts/check-book-length.py the-unobserved-world`

Require `healthy: true`, at least 18 numbered chapters, every numbered chapter at or above 3,000 words, and at least 65,000 chapter-only words.

Then run:

`python3 scripts/check-desk.py`

Require a clean exit with the canonical book folder, root Reader/catalog surfaces, direct Reader slug, feedback picker, and Desk compatibility guards in agreement.

If both pass and the frozen source still matches this reviewed manuscript/research/rights package, no additional factual or human-review gate is required by this artifact.

## Final checklist

- [x] Canonical status is `Complete draft`.
- [x] README lists 20 of 20 chapters and complete front/back matter.
- [x] Manuscript tree contains front matter, 20 numbered chapters, and back matter.
- [x] Research brief includes chapter-level source trails and falsification notes.
- [x] Source ledger contains the book’s primary evidence lanes and explicit use boundaries.
- [x] The most volatile 2026 sources were rechecked on September 5, 2026.
- [x] Book-level `RIGHTS.md` and `rights.json` are present and coherent.
- [x] No unresolved factual, research, rights, matter, novelty, or editorial blocker remains in this review.
- [ ] Run `python3 scripts/check-book-length.py the-unobserved-world` on the frozen Desk source and require a pass.
- [ ] Run `python3 scripts/check-desk.py` on the same frozen Desk source and require a pass.
