# Source Registry

Accessed for first-draft research on 2026-09-03 unless otherwise noted. Volatile sources should be rechecked before a Shelf release.

| ID | Source | Type | First-draft use |
|---|---|---|---|
| S01 | Stanford HAI, *The 2026 AI Index Report* — https://hai.stanford.edu/ai-index/2026-ai-index-report | Independent annual report | Capability pace, adoption, infrastructure concentration, current landscape. |
| S02 | Stanford HAI, *2026 AI Index — Technical Performance* — https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance | Independent benchmark synthesis | Jagged capability, agent benchmark movement, benchmark-specific limits. |
| S03 | Stanford HAI, *2026 AI Index — Responsible AI* — https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai | Independent report chapter | Incident growth, responsible-AI evaluation gaps, safety-performance tradeoffs. |
| S04 | Stanford HAI, *2026 AI Index — Economy* — https://hai.stanford.edu/ai-index/2026-ai-index-report/economy | Independent report chapter | Organizational adoption and early agent deployment. |
| S05 | METR, *Task-Completion Time Horizons of Frontier AI Models* — https://metr.org/time-horizons/ | Independent evaluation program | Capability growth measured in human-equivalent task duration; reliability thresholds. |
| S06 | METR, *Time Horizon 1.1* (2026-01-29) — https://metr.org/blog/2026-1-29-time-horizon-1-1/ | Method/evaluation update | Method changes and the need to preserve evaluation vintage. |
| S07 | NIST, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1 (2024; page updated 2026) — https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence | Government standard/profile | Lifecycle risk, context mapping, measurement, monitoring, management. |
| S08 | NIST, *AI Risk Management Framework* — https://www.nist.gov/itl/ai-risk-management-framework | Government framework | Operational governance vocabulary and current RMF revision context. |
| S09 | Microsoft Learn, *Model retirement schedule — Microsoft Foundry* — https://learn.microsoft.com/en-us/azure/foundry/openai/concepts/model-retirement-schedule | Provider lifecycle documentation | Concrete evidence that model deprecation and migration are normal production concerns. |
| S10 | Google, *Site Reliability Engineering: Embracing Risk* — https://sre.google/sre-book/embracing-risk/ | Engineering handbook | Reliability as explicit risk management; error budgets; cost of extreme reliability. |
| S11 | Google, *Site Reliability Engineering: Production Services Best Practices* — https://sre.google/sre-book/service-best-practices/ | Engineering handbook | SLOs, error budgets, monitoring, degraded service. |
| S12 | Google, *Site Reliability Engineering: Addressing Cascading Failures* — https://sre.google/sre-book/addressing-cascading-failures/ | Engineering handbook | Load shedding, graceful degradation, testing rare fallback paths. |
| S13 | Anthropic, *Anthropic Economic Index* — https://www.anthropic.com/economic-index | Vendor research | Usage patterns, augmentation versus automation. Treat as interested evidence. |
| S14 | OpenAI, *The State of Enterprise AI* (2025) — https://openai.com/index/the-state-of-enterprise-ai-2025-report/ | Vendor research | Enterprise usage growth and workflow deepening. Treat as interested evidence. |
| S15 | OpenAI, *From assistance to execution: How enterprises put AI to work* (2026-08-12) — https://openai.com/index/how-enterprises-put-ai-to-work/ | Vendor research | Movement from chat assistance toward agentic execution. Treat as interested evidence. |
| S16 | Raja Parasuraman and Victor Riley, “Humans and Automation: Use, Misuse, Disuse, Abuse,” *Human Factors* 39(2), 1997 — https://doi.org/10.1518/001872097778543886 | Peer-reviewed human factors paper | Automation misuse, disuse, trust, monitoring, and role design. |
| S17 | Raja Parasuraman and Dietrich Manzey, “Complacency and Bias in Human Use of Automation,” *Human Factors* 52(3), 2010 — https://pubmed.ncbi.nlm.nih.gov/21077562/ | Peer-reviewed review | Automation complacency, omission/commission errors, attention. |
| S18 | Berkeley J. Dietvorst, Joseph P. Simmons, and Cade Massey, “Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err,” *Journal of Experimental Psychology: General* 144(1), 2015 — https://pubmed.ncbi.nlm.nih.gov/25401381/ | Peer-reviewed experiments | Calibration of human trust after observed algorithm error. |
| S19 | *Toward a science of human–AI teaming for decision making: A complementarity framework*, *PNAS Nexus* 5(3), 2026 — https://academic.oup.com/pnasnexus/article/5/3/pgag030/8490283 | Peer-reviewed synthesis | Conditions for human–AI complementarity, role partitioning, training, continuous evaluation. |

## Handling notes

- S01–S06 and S09 are fast-moving. Preserve dates beside any quantitative claim and recheck immediately before publication.
- S13–S15 are first-party vendor studies. Use them to describe observed behavior on those vendors’ surfaces, not as unbiased estimates of all AI use.
- S10–S12 predate generative AI. Their mechanisms are analogies and engineering antecedents, not proof that AI systems behave exactly like conventional distributed services.
- S16–S18 predate current foundation models. Use the human-factors mechanisms carefully and avoid implying that every historical automation result transfers unchanged to generative AI.
- No source in this registry should be treated as authority for the book’s normative prescriptions. The prescriptions are arguments that must earn their case from mechanisms, counterexamples, and explicit tradeoffs.
