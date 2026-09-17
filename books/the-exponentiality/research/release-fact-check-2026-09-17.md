# Release fact-check — 2026-09-17

This note records the current-source recheck performed after the September 17 structural and prose pass. The manuscript changes in that pass were primarily architectural: Chapter 6 was refocused on time compression, Chapter 11 was tightened around migrating scarcity, the afterword was compressed, and front-matter copyright naming was aligned with the rights metadata. None of those edits added a new date-sensitive factual claim.

## Human oversight / institutional speed

The current authoritative sources still support Chapter 12's distinction between nominal human presence and effective oversight.

- EUR-Lex continues to show the July 27, 2026 consolidated text of Regulation (EU) 2024/1689 as the current consolidated AI Act text. Article 14 requires covered high-risk AI systems to permit effective human oversight and describes powers that include understanding system limitations, guarding against automation bias, interpreting outputs, disregarding or overriding outputs, and interrupting operation where appropriate: https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng
- NIST's AI Risk Management Framework page still states that AI RMF 1.0 is being revised. The current AI Resource Center continues to present Appendix C on human-AI interaction, which emphasizes clearly defined and differentiated human roles and responsibilities rather than treating the presence of a person as sufficient oversight: https://www.nist.gov/itl/ai-risk-management-framework and https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/

### Boundary preserved

These sources support the manuscript's claim that meaningful oversight requires actual information, competence, authority, and ability to intervene. They do not establish that manual review is required for every AI-mediated decision, nor that one oversight design is empirically optimal across contexts.

## Scientific discovery / physical bottlenecks

The current Berkeley Lab record still supports Chapter 4's distinction between cheap computational search and slower physical validation.

- Berkeley Lab's August 3, 2026 materials report describes solid-state synthesis as a process that can still require weeks to years of trial and error even when computational systems identify promising materials. The report presents a modeling approach intended to reduce that synthesis bottleneck rather than eliminate physical experimentation: https://newscenter.lbl.gov/2026/08/03/new-ai-modeling-approach-accelerates-the-development-of-advanced-materials/
- The manuscript's A-Lab numerical claims remain grounded in the peer-reviewed Nature record already listed in the source ledger: Szymanski et al., "An autonomous laboratory for the accelerated synthesis of inorganic materials," https://doi.org/10.1038/s41586-023-06734-w

### Boundary preserved

The checked sources support the argument that AI, robotics, and automated experimentation can shorten parts of the discovery loop while synthesis, measurement, validation, and interpretation remain real constraints. They do not support a claim that scientific discovery as a whole is autonomous or that computational prediction removes the need for physical evidence.

## September 17 manuscript changes

- Front-matter copyright owner now matches `rights.json` and `RIGHTS.md`: Sven Hardy Benson.
- The afterword was tightened to reduce repetition of the book's curve / bottleneck / friction language while preserving its falsification boundary.
- Chapter 11 was reduced from an inventory of every previously discussed scarcity to a bridge chapter explaining the economic rule: when one input becomes cheap, follow the complement that becomes relatively scarce.
- The former Chapter 6, "The Slow Machines," substantially overlapped the later institutional synthesis in Chapter 12. It was replaced by "The Present Expires Faster," which now owns cycle time, reversibility, expiring assumptions, planning horizons, and unequal adaptation time. Chapter 12 remains the primary institutional-speed chapter.

## Release judgment

No checked authoritative source requires a material correction to the manuscript's current scientific or institutional framing as of September 17, 2026.

The remaining release work is editorial and repository-level rather than thesis-level: complete the whole-manuscript repetition pass, run Desk catalog/integrity checks, and snapshot a reviewed Desk commit only when an explicit Shelf release is requested.
