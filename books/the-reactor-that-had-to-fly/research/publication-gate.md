# Publication gate

This run completes the argument at 18/18 chapters but does **not** claim Desk’s automated full-book gate of at least 3,000 words per chapter and at least 65,000 chapter-only words. The present chapters are materially shorter. No additions, line count or file count should be presented as a substitute for word count.

Before release-candidate status, complete the following substantive pass.

## Primary technical reconstruction

1. Page-index UCRL-5484 (*Tory II-A*) and extract the exact requirement matrix: core volume, coolant fraction, temperatures, pressure drop, stress/load assumptions, fuel composition and which flight requirements were deliberately excluded.
2. Locate and reconstruct the Tory II-A final test report/run history, including date, duration, power, airflow, inlet conditions, control behavior, anomalies and post-test inspection.
3. Page-index UCRL-7679 (*Tory II-C*) plus the relevant data book/performance/test reports. Build a run-by-run table sufficient to reconcile the public 461/500/513/600-MW-class figures to design points and actual tests.
4. Extract exact core inventory: fueled versus unfueled elements, fuel loading, channel geometry, reflector/control arrangement and component mass. Replace round popular-history numbers where the primary record differs.
5. Reconstruct Tory II-C’s six-test sequence claimed in later LLNL histories and identify whether “without failure” conceals anomalies, component degradation or shortened runs.

## Materials and industrial base

6. Extract the full fuel-element fabrication process: powder chemistry, additives, extrusion, firing, shrinkage, density, tolerances, inspection, modulus/strength, moisture/oxidation issues and accepted/rejected quantities.
7. Build a Coors Porcelain supplier ledger from primary records: production lots, scale, yield, quality-control problems and which steps remained at Livermore versus contractor facilities.
8. Trace other contractors/suppliers and the physical program footprint to test the manuscript’s “material metabolism of secrecy” argument quantitatively rather than rhetorically.

## Radiation model

9. Replace every broad “radioactive exhaust” discussion with a quantitative pathway ledger separating:
   - prompt neutron/gamma radiation;
   - neutron activation of N/O/Ar and relevant half-lives;
   - fuel-element erosion/ablation/corrosion;
   - fission-product retention and release;
   - activated structural materials;
   - shutdown inventory/decay heat;
   - crash/fire/destruct dispersal.
10. Find measured mass loss and contamination data from Tory tests and use them to bound normal-operation particulate release.
11. Model dose/deposition for representative SLAM speed/altitude and plausible release fractions. Preserve uncertainty rather than selecting the most dramatic endpoint.

## Missile and flight-test reconstruction

12. Locate primary Air Force/Vought SLAM requirement and configuration records: airframe, inlet, booster, reactor-start sequence, guidance, terrain-following, payload, warhead release, mission duration and terminal/disposal concept.
13. Reconstruct proposed flight-test architectures from primary documents: corridor, ocean/range use, reactor startup point, termination logic, destruct philosophy, shutdown, recovery/disposal and accident response.
14. Separate proposed options from approved plans. A concept mentioned in a meeting is not a mature range plan.
15. Quantify likely sonic-boom/overpressure envelopes at proposed speeds/altitudes and separately search primary mission records for any deliberate use of overpressure as a casualty mechanism.

## Cancellation and strategic comparison

16. Build a dated 1963–1964 decision ledger from Department of Defense, AEC, Air Force, Joint Committee and budget/hearing records. Identify who advocated continuation, who opposed it, and when the program shifted from reactor R&D to a demanded weapon-system commitment.
17. Quantify the next-phase flight/weaponization cost estimates and distinguish program-to-date spend from projected spend.
18. Build a controlled comparison with Atlas, Titan, Minuteman and Polaris: operational dates, readiness, basing, penetration logic and the strategic uncertainty each had already retired by mid-1964.
19. Test environmental/safety/treaty-context explanations against primary decision records rather than allowing modern concern to become retrospective causation.

## Program residue and aftermath

20. Reconstruct declassification chronology and current archival holdings so the source-genealogy chapter can distinguish what was publicly knowable in 1964, 1973, 1990 and now.
21. Build a current NNSS Area 26/Pluto facility and contamination/cleanup ledger from DOE/NNSS records. Use actual stewardship history to support lifecycle-cost claims.
22. Trace demonstrable technical migrations into later reactor/materials/test work. Do not call a later technology a Pluto descendant without personnel, report or program evidence.

## Burevestnik comparison

23. Collect primary Russian statements and public technical claims since 2018, including the October 2025 announced test, with original dates and wording.
24. Build an independent-observable ledger: satellite imagery, test-site activity, accident reporting, radionuclide evidence where credible, U.S./NATO assessments and expert technical work.
25. Keep Russian state-reported 14,000-km / ~15-hour / nuclear-powered-throughout figures explicitly attributed unless independently confirmed.
26. Do not infer Tory-like reactor geometry or release behavior from the fact of nuclear propulsion.

## Manuscript expansion and editorial gate

27. Expand **every numbered chapter to at least 3,000 words**, with most in the 3,500–4,500 range, using primary evidence, counterevidence and quantitative reconstruction rather than repetition.
28. Bring chapter-only manuscript total to **at least 65,000 words**; 70,000–90,000 remains the preferred complete-draft range under Desk’s standard.
29. Perform a whole-book structural pass for duplicated arguments, especially “component versus system,” “testing is part of engineering,” “secrecy leaves residue,” and “range is not mission.” Each recurrence must advance with a new mechanism or case.
30. Perform the required human-prose anti-slop and paragraph passes. Remove canned antitheses, repeated one-line morals, excessive rhetorical symmetry and section-end restatements while preserving the manuscript’s useful roughness.
31. Run locally:

```bash
python3 scripts/check-book-length.py the-reactor-that-had-to-fly
python3 scripts/check-book-cover-metadata.py the-reactor-that-had-to-fly
```

32. Once the manuscript actually clears the objective one-shot gate and inventory registration is appropriate, update required shared Desk catalog/Reader surfaces per `docs/book-metadata-standard.md`, then run:

```bash
python3 scripts/check-desk.py
```

Shared catalog, Reader, feedback dropdown and release-state files remain untouched in this draft PR because this manuscript is not yet a release candidate.