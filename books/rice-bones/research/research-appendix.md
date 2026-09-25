# Research Appendix — Publication Gate

## Required expansion work

1. **Judgments:** obtain and translate the key causation passages from the 1971 Toyama District Court decision and 1972 appellate decision; separate judicial findings from later museum summaries.
2. **Agreement text:** locate the full 1972 compensation pledge, soil-pollution pledge, and pollution-control agreement; translate inspection, sampling, information, confidentiality, and enforcement clauses.
3. **Inspection corpus:** build a year-by-year table for every Kamioka inspection: date, participants, teams, sampled points, findings, company responses, engineering changes, unresolved issues.
4. **Discharge series:** recover cadmium and other metal discharge/water-quality measurements from before major source controls through the present and test whether improvements temporally match inspection interventions.
5. **Mining process:** reconstruct Kamioka’s ore, concentration, wastewater, smoke, tailings, and drainage systems by period. Do not describe modern controls as though they existed during peak exposure.
6. **Exposure reconstruction:** map irrigation systems, paddy contamination, rice cadmium, drinking/cooking water, and dietary patterns. Distinguish concentration from individual dose.
7. **Clinical spectrum:** build a table separating certified Itai-itai disease, observation-category cases, cadmium-associated renal tubular dysfunction, subclinical osteomalacia, and unrelated illness.
8. **Gender:** deepen the evidence on iron status, cadmium absorption, pregnancy/lactation, menopause, nutrition, work, diet, cohort structure, and diagnostic selection without turning modifiers into alternative causes.
9. **Restoration engineering:** reconstruct the 1,686-ha countermeasure area, 863-ha public restoration, 120-ha voluntary restoration, converted land, soil-replacement methods, cost allocation, subsidence, and long-term monitoring.
10. **Comparative governance:** compare Toyama’s agreement with community-right-to-know, citizen-suit, fence-line monitoring, consent-decree, and Indigenous co-monitoring models elsewhere. Avoid claiming uniqueness without comparison.
11. **Memory:** archive victim newsletters, museum oral histories, Seiryū Hall materials, and local broadcasts while firsthand witnesses disappear.
12. **Prose:** after factual expansion, run the full human-prose/anti-slop pass. Increase length through cases, records, mechanisms, and counterevidence, not repeated thesis language.

## Mechanical gate

Before publication surfaces are synchronized:

```bash
python3 scripts/check-book-length.py rice-bones
python3 scripts/check-desk.py
```

Every numbered chapter must exceed 3,000 words; chapter-only total must exceed 65,000 words. Shared README/catalog/Reader/feedback/llms/sitemap/index surfaces should remain untouched until those objective gates pass.