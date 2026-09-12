# Notes and Publication Gate

This is a developing full-book draft, not a release candidate.

The first deep-research pass has now been completed for Chapter 7 (Nipah) and Chapter 11 (MERS). Both were rebuilt from architecture notes into developed narrative chapters using primary or authoritative local-language public-health material as well as global guidance. The Nipah pass added Bengali IEDCR surveillance and risk-communication records; the MERS pass added Saudi Ministry of Health Arabic records that preserve the transition from uncertain source investigation to camel-focused precautions and the coupled camel-to-human / hospital-amplification problem.

The governing gate remains: expand every chapter beyond 3,000 words and the chapter-only manuscript beyond 65,000 words. Deepen each disease through primary outbreak reports, reservoir evidence, phylogenetics, field epidemiology, local-language reporting, oral history, and the strongest competing causal account. Build disease-by-disease evidence tables separating reservoir, intermediate host, index exposure, sustained human transmission, and uncertainty. Audit every quantitative claim against primary or authoritative sources.

Highest-priority next research and drafting passes:

- Yellow fever: Cuban Spanish primary and historical sources around Carlos Finlay; preserve the difference between Finlay's mosquito hypothesis, experimental confirmation, and later vector-control implementation.
- Ebola and Lassa: French and West African institutional records plus African-authored scholarship and testimony; avoid reducing community resistance to “culture” when governance, trust, war history, health-system capacity, and coercive response also matter.
- SARS: Chinese-language primary records, market regulation, animal sampling, civet evidence, and the chronology from clinical recognition through wildlife-market intervention.
- H5 avian influenza: current panzootic evidence, mammalian spillovers, dairy-cattle transmission evidence, poultry economics, and uncertainty about pathways into new host populations.
- Indigenous epidemiology: replace any romanticized “traditional wisdom” framing with Indigenous-authored and rights-based sources; distinguish knowledge partnership from extraction and preserve data sovereignty, Free Prior and Informed Consent, and local governance.
- COVID-19: maintain explicit uncertainty calibration and update against the latest primary evidence before publication. Do not collapse “zoonotic origin,” “market-associated emergence,” “laboratory-related incident,” and “proven immediate progenitor” into interchangeable claims.

Remaining editorial work is book-wide: remove repeated interface-thesis restatements, vary chapter forms, deepen fewer cases rather than accumulating disease summaries, build narrative pressure from records rather than invented scenes, and ensure the final chapters change the meaning of the opening instead of merely restating prevention doctrine.

Run the human-prose and paragraph passes, `python3 scripts/check-book-length.py zoonosis-natures-deadliest-diseases`, cover-metadata validation, and `python3 scripts/check-desk.py` before any release-state change. Shared catalog/publication surfaces should remain untouched until the manuscript clears the objective new-book gate.
