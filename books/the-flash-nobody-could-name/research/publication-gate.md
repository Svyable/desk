# Publication / expansion gate

This run completes the 18-chapter argument but does **not** claim the Desk automated full-book length gate. The current chapters are visibly below the repository requirement of 3,000 words per chapter and 65,000 chapter-only words. No line-count or additions proxy is being used as a fake word count. The connector environment also cannot run the local `scripts/check-book-length.py` validator.

The next pass is frozen around substantive evidence expansion rather than padding.

## Required chapter expansion

1. **The Double Flash** — reconstruct the minute-by-minute alert chain from original messages; locate exact Vela 6911 orbital geometry and reported event-location uncertainty; page-index contemporaneous event summaries.
2. **A Machine Built to Notice Bombs** — build the Vela program history from primary Air Force/Los Alamos sources; explain bhangmeter design quantitatively; reproduce known-test performance and detector false-alarm history.
3. **The Signature** — reconstruct atmospheric nuclear double-pulse physics with equations only where they clarify mechanism; compare known yields, altitudes, cloud effects, and sensor geometries.
4. **Two Bhangmeters Disagree** — obtain original traces and quantify disagreement between channels; reproduce competing nuclear/cloud/geometry versus spacecraft-local explanations.
5. **The First Forty-Eight Hours** — build an exact collection timeline including AFTAC flights, allied contacts, seismic queries, weather products, and which evidence was known before each institutional judgment.
6. **The Ocean as Witness** — obtain the Naval Research Laboratory hydroacoustic report; reconstruct array locations, arrival times, localization uncertainty, source-depth assumptions, background candidates, and retrospective search denominator.
7. **Fallout That Would Not Sit Still** — inventory all atmospheric/rainwater/sheep sampling, detection limits, nuclides, negative results, meteorology, and industrial/medical alternatives; no single-isotope storytelling.
8. **Arecibo Hears the Sky Move** — retrieve original observatory data/analysis; compute expected acoustic-gravity propagation from candidate source regions; compare with natural disturbance background.
9. **The Panel That Said No** — page-index complete Ruina panel report, membership, charter, archive-comparison method, candidate false positives, and final probability language.
10. **The Scientists Who Would Not Let It Go** — retrieve full Agnew/Garwin/Lukasik analysis if available; normalize later CIA/DIA/DOE estimates by date and evidence set; separate opinions from measurements.
11. **South Africa Before the Bomb** — use primary/official South African nuclear-program history for device chronology, test-site preparations, weaponization, dismantlement, and known delivery concepts; identify what was and was not technically plausible in September 1979.
12. **Israel in the Inference** — build a sourced pre-1979 capability timeline from declassified U.S. records and serious nuclear-history scholarship; maintain opacity and actor-attribution boundaries.
13. **The Politics of an Answer** — reconstruct Carter nonproliferation policy constraints, Symington/Glenn amendment implications where relevant, and actual decision memoranda; distinguish legal/political consequences from speculative motive.
14. **False Alarms and True Systems** — quantify Vela false-positive logic against the 1979–80 missile-warning cases without merging mechanisms; use signal-detection theory carefully and avoid generic systems prose.
15. **What Secrecy Does to Error Bars** — map declassification history of the major Vela documents, including inconsistent redaction across releases; identify which crucial technical records remain unavailable.
16. **The Evidence That Arrived Late** — create a provenance ledger for every major post-1979 claim, labeling contemporaneous document, later declassification, retrospective testimony, journalism, or secondary synthesis.
17. **How to Prove a Secret Test** — compare 1979 architecture with the CTBT International Monitoring System using official CTBTO technical sources; build a preregisterable modern adjudication protocol for a Vela-like anomaly.
18. **The Flash Nobody Could Name** — rewrite only after all quantitative chapters are expanded; final conclusion must update rather than preserve uncertainty by habit.

## Book-level research tasks

- Retrieve and locally archive every cited PDF permitted by repository practice; page-index relevant passages.
- Build a table of all known Vela event probability assessments, author/agency, date, evidence available, and whether actor intelligence was included.
- Build a multisensor likelihood table: optical, seismic, hydroacoustic, radionuclide, infrasound, ionospheric, human/ship observation, and intelligence indicators.
- Trace all public claims of Israeli–South African joint responsibility back to their earliest identifiable source; distinguish firsthand, secondhand, and inferential chains.
- Search South African, Israeli, Australian, New Zealand, British, French, and relevant U.S. archives for primary material that changes event classification or attribution.
- Reconstruct weather from candidate source regions to Australia/New Zealand using contemporaneous products where possible, not modern verbal summaries alone.
- Audit claims about cloud cover and sensor geometry using actual orbital/event data.
- Search for later peer-reviewed quantitative reanalyses supporting both nuclear and meteoroid explanations and reproduce their assumptions on common terms.
- Add a document appendix with archival identifiers, classification markings, release dates, redaction differences, and stable links.
- Perform a whole-book anti-slop pass after expansion. The current draft already avoids chapter subheads and framework repetition, but several chapters still rely on repeated epistemic distinctions that should be replaced with deeper case material.

## Objective checks before any release claim

Run locally:

```bash
python3 scripts/check-book-length.py the-flash-nobody-could-name
python3 scripts/check-book-cover-metadata.py the-flash-nobody-could-name
python3 scripts/check-desk.py
```

Then conduct a whole-book editorial read against `docs/prose-authoring-standard.md`, not merely phrase searches or word-count success.

Shared Desk catalog, Reader, sitemap, issue-dropdown, and release surfaces remain intentionally untouched in this working-manuscript PR. Register them only when the objective full-book and editorial gates pass, rather than advertising an underlength draft as a complete Desk edition.