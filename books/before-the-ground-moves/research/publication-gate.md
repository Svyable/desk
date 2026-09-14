# Publication gate

This run establishes a complete 18-chapter first-pass argument, front/back matter, a source log, a four-class evidence matrix, chronology, contradiction/incentive audit and rights metadata.

It does **not** claim to clear Desk's automated full-book standard yet. The repository standard requires at least 18 chapters, at least 3,000 words in every numbered chapter, and at least 65,000 chapter-only words. The GitHub connector used for this run does not execute the repository's local `scripts/check-book-length.py before-the-ground-moves --json` validator, and several chapters in this first pass are visibly likely to remain below 3,000 words. No word-count claim is being inferred from line count or GitHub additions.

## Frozen expansion work

The next manuscript pass should add evidence and mechanism rather than repeat the specificity thesis.

- Reconstruct Parkfield from the original 1985 prediction paper, alert protocol, the October 1992 M4.7 warning, 2004 instrument record, and Savage/Jackson-Kagan critiques with exact forecast windows and probabilities.
- Rebuild the Corralitos/Loma Prieta case from the original 1990 plots, station logs and 2009 reanalysis, including the exact sensor-system failure argument and comparison stations.
- Recover the 1996 GRL VAN debate issue-by-issue and build a prospective alarm ledger with stated location, magnitude and time windows rather than relying on later descriptions of success.
- Add a quantitative field-scaling chapter layer for electrokinetic potentials, piezoelectric cancellation, stress-magnetic effects, positive-hole carrier budgets and conductive attenuation.
- Build a radon ledger containing both earthquake-associated excursions and comparable non-earthquake excursions, with rainfall, pressure, temperature, groundwater and station-maintenance controls. Reconstruct the 2025 Myanmar result from the full station history, not the event window alone.
- Reproduce Heki's Tohoku TEC baseline construction and the Eisenbeis et al. artifact demonstration numerically; add Hector Mine as an independent background-control case.
- Build a DEMETER→CSES-01→CSES-02 hypothesis-transfer table: parameter, sign, lead time, local-time dependence, depth/magnitude condition and whether the claim was specified before the newer dataset.
- Add current CSES-02 commissioning/science results only where they materially test a pre-existing precursor hypothesis; mission existence remains evidence of inquiry, not efficacy.
- Reconstruct modern earthquake-light cases using synchronized video timing, grid/lightning alternatives, geology and instrument availability. Historical reports should remain a separate evidence class.
- Rebuild animal studies from continuous behavioral baselines, explicitly separating P-wave responses after rupture begins from days-to-weeks precursor claims.
- Reconstruct L'Aquila using court and official commission records before expanding legal detail; do not repeat the false shorthand that scientists were prosecuted simply for failing to predict an earthquake.
- Add a worked rare-event classification example with real base rates, alarm-volume metrics and proper forecast scoring.
- Specify the Chapter 17 experiment as a preregistration-ready protocol: regions, sensors, model freeze, baselines, immutable forecast ledger, scoring rules, missing-data policy, model-version transitions and minimum evaluation horizon.
- Run the objective length validator, cover-metadata validator and Desk checks locally after expansion, followed by a whole-book anti-slop and paragraph pass under `docs/prose-authoring-standard.md`.

## Publication-state boundary

Until those objective full-book and whole-book editorial gates pass, shared Desk catalog, Reader registration, `catalog.json`, `llms.txt`, `sitemap.xml` and feedback-dropdown surfaces should remain untouched. This branch is a substantial working manuscript, not a release candidate.