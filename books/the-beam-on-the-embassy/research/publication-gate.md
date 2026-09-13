# Publication gate

## Current state

This branch contains the complete 18-chapter argument, front matter, back matter, source log, four-class evidence matrix, chronology, contradiction/incentive audit, and rights metadata.

It is a substantive first-pass manuscript, not a release candidate.

The run does **not** claim Desk's automated one-shot length gate. The GitHub connector used for this run cannot execute `python3 scripts/check-book-length.py the-beam-on-the-embassy`, and no word count is being inferred from line count or GitHub additions. The chapters are visibly below the required 3,000-word minimum and therefore require a full expansion pass before the book can satisfy the repository's 65,000-word chapter-only minimum.

Shared root catalog/Reader surfaces are intentionally left untouched until the objective length gate and whole-book editorial gate can pass; this follows the recent Author-agent draft convention and avoids advertising a short working manuscript as a complete Desk edition.

## Frozen expansion work

Every item below should add evidence, reconstruction, mechanism, or counterevidence rather than restating the thesis.

### Chapter 1 — The Beam Nobody Could Explain
- reconstruct the detection history from first technical records rather than later summaries;
- add building geometry, source positions, frequency ranges, hours/day, and changes by period;
- distinguish “beam aimed at building” from personal exposure map.

### Chapter 2 — Technical Unidentified Moscow Signal
- reconstruct TUMS → MUTS naming and agency ownership from originating memoranda;
- build an agency-by-agency responsibility map: State, CIA, ARPA/DARPA, NSA/technical security, White House/PFIAB;
- recover the exact threat hypotheses active at each date rather than blending decades.

### Chapter 3 — The Building Was Already Listening
- develop the Great Seal / passive resonant-cavity bug from primary technical histories;
- add embassy technical-security chronology and known Soviet bugging incidents;
- test the device-interrogation hypothesis against Moscow signal frequency, geometry, and equipment requirements.

### Chapter 4 — The Number That Changed the Experiment
- recover raw measurement and calibration records behind the 1967 TUMS power-density revision;
- build a quantitative table of early assumed exposure vs corrected estimates;
- translate incident power density into realistic absorbed-dose/SAR ranges with uncertainty;
- add building-reflection and occupancy sensitivity analysis.

### Chapter 5 — PANDORA
- page-index Cesaro's 1965 justification memo and program budgets/contracts;
- construct a contract-by-contract program ledger with institution, endpoint, sample, exposure regime, result, and later review;
- separate PANDORA, BIZARRE, BIG BOY, and other related work precisely.

### Chapter 6 — One Monkey
- recover trial-level or fullest available primate protocols;
- identify species, training task, exposure waveform, blinding, sample size, and endpoint definitions;
- reconstruct the positive first result and corrected-dose follow-up numerically;
- compare contemporaneous reviewer interpretations without hindsight.

### Chapter 7 — The Soviet Literature Problem
- build a primary-source sample of Soviet/Eastern European low-level RF papers actually cited by U.S. officials;
- distinguish occupational standards from experimental thresholds;
- recover U.S. intelligence assessments of Soviet “psychotronics” or RF-biological research only where primary/declassified records exist;
- track translation, replication, and publication-quality problems.

### Chapter 8 — Blood Under a Cover Story
- recover the full “Moscow Viral Study” cable and GWU contract;
- reconstruct sample counts, assays, laboratory procedures, and any reported cytogenetic findings;
- compare the ethics against contemporaneous U.S. human-subject rules rather than only modern standards.

### Chapter 9 — Big Boy on the Saratoga
- recover full BIG BOY methods and cohort definitions;
- quantify RF/radar exposure categories aboard *Saratoga*;
- reconstruct sample sizes and psychological/genetic/physical endpoints;
- compare with later radar-worker epidemiology.

### Chapter 10 — The Human Experiment They Planned
- page-index all April-May 1969 minutes;
- identify participants and institutional roles;
- determine whether any protocol, legal review, IRB-like review, or Fort Detrick implementation record followed;
- keep the performed/planned boundary explicit.

### Chapter 11 — RAND Says No
- recover both RAND reviews in full;
- map each methodological criticism to the specific experiment it addresses;
- document whether investigators responded, changed protocols, or disputed the review;
- distinguish failed experiment from failed mechanism.

### Chapter 12 — Tell the Embassy
- reconstruct the 1975-1976 Stoessel/Kissinger/White House decision chain;
- recover briefing text, employee notices, contemporaneous press leaks, and Soviet diplomatic responses;
- separate health communication from technical-intelligence disclosure concerns.

### Chapter 13 — The Lilienfeld Cohort
- obtain the full 1978 contract report and appendices;
- reproduce principal mortality/morbidity tables;
- identify all multiple-comparison and small-number issues explicitly;
- perform a modern sensitivity discussion for latency, healthy-worker effects, exposure misclassification, and subgroup selection;
- compare Elwood (2012), Martínez (2019), IARC treatment, and primary report without cherry-picking.

### Chapter 14 — What Radiofrequency Energy Can Actually Do
- add a worked RF dosimetry primer with frequency, wavelength, field strength, power density, SAR, pulse width, duty cycle, and peak/average distinction;
- use primary microwave-auditory experiments and modern replication/review literature;
- add current IEEE/ICNIRP exposure standards carefully by frequency/regime;
- distinguish established thermal and thermoelastic effects from disputed low-intensity endpoints.

### Chapter 15 — The Purpose Problem
- build competing Bayesian/diagnostic evidence tables for surveillance, jamming, device interrogation, and biomedical intent;
- search Soviet/Russian archival material and credible defector/participant testimony;
- define exactly what evidence would discriminate among purposes.

### Chapter 16 — Havana Enters the Archive
- page-index the 2020 National Academies report, 2022 Experts Panel, 2023 ICA, and January 2025 ICA;
- construct a question-by-question comparison showing mechanism plausibility vs adversary attribution vs medical-care policy;
- add dissent/confidence language from individual IC components without smoothing it into one consensus;
- update again before publication for any post-January-2025 public assessment.

### Chapter 17 — The Weapon Made of Uncertainty
- develop historical analogues where ambiguous adversarial signals imposed large defensive costs without proving the feared mechanism;
- keep deliberate “uncertainty weapon” intent speculative unless doctrine/records are found;
- test the synthesis against cases where secrecy actually protected high-quality science rather than degrading it.

### Chapter 18 — What Would Count as Proof
- turn the proposed evidence chain into a concrete prospective protocol for future unexplained RF/AHI-like incidents;
- include sensor suite, sampling rates, calibration, evidence preservation, clinical timing, preregistration, negative controls, and attribution thresholds;
- define defeat conditions before discussing candidate mechanisms.

## Whole-book editorial work after expansion

1. Run `python3 scripts/check-book-length.py the-beam-on-the-embassy` and clear all chapter/total thresholds.
2. Read the manuscript straight through for repeated “claim boundary” explanations; consolidate them where the evidence has already earned the distinction.
3. Replace repeated abstraction with deeper scenes/documents: Wiesner 1964, Glassboro 1967, one BIZARRE protocol, the 1969 PANDORA meeting, Stoessel 1975-76, and the Lilienfeld tables should carry more narrative weight.
4. Perform the required anti-slop and paragraph pass from `docs/prose-authoring-standard.md`.
5. Verify every quotation against a primary source and remove any phrasing not recoverable verbatim.
6. Run book cover metadata and Desk integrity checks locally.
7. Only after those gates pass, update root README/catalog/llms/sitemap/feedback dropdown and consider a publication-state workflow.

## Release-blocking factual questions

- exact Moscow signal waveform(s) and periodized power-density record;
- provenance and quality of the first positive primate result;
- whether any PANDORA human exposure beyond planning occurred;
- item-level methodology of the cytogenetic and BIG BOY studies;
- full Lilienfeld table reconstruction;
- Soviet operator-purpose evidence rather than U.S. speculation;
- any public AHI assessment later than January 10, 2025 that materially changes the official attribution picture.
