# Chapter 15 — executive operating discipline

Research note for the September 2026 revision of **The Executive's Playbook**.

## NIST AI Risk Management Framework

Primary source: National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)* and NIST's AI Resource Center.

- NIST released AI RMF 1.0 on January 26, 2023 for voluntary use by organizations designing, developing, deploying, or using AI systems.
- The framework organizes practical AI risk management around four functions: **Govern, Map, Measure, and Manage**.
- NIST describes governance as cross-cutting, with mapping establishing context, measurement assessing identified risks, and management prioritizing and acting on those risks.
- The framework is context-specific rather than a claim that one universal checklist fits every deployment.

Canonical resources:

- https://www.nist.gov/itl/ai-risk-management-framework
- https://airc.nist.gov/airmf-resources/airmf/5-sec-core/

## NIST Generative AI Profile

Primary source: NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, published July 26, 2024 and updated by NIST on April 8, 2026.

- The profile is a companion resource to AI RMF 1.0 for generative AI.
- NIST describes it as a cross-sectoral profile intended to help organizations incorporate trustworthiness considerations into the design, development, use, and evaluation of generative-AI systems.
- The chapter uses this source only to support the narrow claim that serious enterprise deployment needs explicit context, evaluation, governance, and risk ownership; it does not present NIST guidance as mandatory law.

Canonical resource:

- https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

## Falsification / counterevidence note

The chapter argues for evaluations, portability, governed permissions, and explicit liability boundaries, but these controls impose real costs. A tightly integrated single-vendor deployment may be economically superior when switching costs are outweighed by reliability, speed, security integration, or operating simplicity. Portability is therefore framed as an **option with a price**, not as a universal requirement for multi-vendor architecture.

Likewise, a human approval step is not automatically safer. Review capacity can become ceremonial when people are asked to approve machine outputs faster than meaningful checking permits. The revision therefore treats human oversight as a capacity-constrained control whose location should depend on consequence, reversibility, and observed system performance.
