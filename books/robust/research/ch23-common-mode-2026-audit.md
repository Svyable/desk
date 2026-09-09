# Chapter 23 evidence audit — common-mode failure and independence

Checked 2026-09-09 for the Chapter 23 revision.

## Primary / authoritative additions

### NIST IR 8613 initial public draft — multi-cloud architecture challenges

NIST, *Multi-Cloud Architecture Challenges: Security and Compliance Implications*, NIST IR 8613 Initial Public Draft, published 2026-08-21.

https://csrc.nist.gov/pubs/ir/8613/ipd

Use: current institutional counterevidence to the simplistic claim that adding providers automatically adds resilience. NIST says its public working group consolidated 23 challenge areas that are unique to or significantly amplified by multi-cloud architectures, including structural problems created when controls must be orchestrated across autonomous cloud silos.

Boundary: this is an initial public draft, not a final standard. It does not establish that multi-cloud is generally less reliable or less secure than single-cloud architecture. The manuscript uses it only to show that provider diversity can trade concentration risk for coordination, identity, policy, visibility, and governance complexity.

### NIST AI 800-4 — monitoring deployed AI systems

NIST / CAISI, *Challenges to the Monitoring of Deployed AI Systems*, NIST AI 800-4, published 2026-03-06.

https://doi.org/10.6028/NIST.AI.800-4

https://www.nist.gov/publications/challenges-monitoring-deployed-ai-systems-center-ai-standards-and-innovation

Use: supports the chapter's narrower claim that a strong pre-deployment eval cannot be assumed to represent a changing deployed environment indefinitely. NIST identifies drift/performance degradation, fragmented logging, human-AI feedback loops, uncertain monitoring cadence, immature guidance, and the balance between automated and human-validated monitoring as live challenges.

Boundary: the report does not say every deployed model inevitably degrades, that fixed evals are useless, or that continuous monitoring guarantees robustness.

### NIST 2026 agent-security / identity work

NIST CAISI, *CAISI Issues Request for Information About Securing AI Agent Systems*, 2026-01-12.

https://www.nist.gov/news-events/news/2026/01/caisi-issues-request-information-about-securing-ai-agent-systems

NIST NCCoE, *Accelerating the Adoption of Software and Artificial Intelligence Agent Identity and Authorization*, initial concept paper, 2026-02-05.

https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd

Use: establishes that current official agent-security work treats access to diverse data, tools, and applications, plus identification, authorization, auditing, monitoring, and deployment-environment constraints, as active security-design problems.

Boundary: the RFI and concept paper are agenda-setting / draft materials. They are evidence that these are live problems, not proof that a particular architecture solves them.

## Strongest counterargument

Standardization and shared infrastructure can improve robustness. Common platforms can simplify security operations, patching, observability, training, governance, and incident response. Multi-provider architecture can add failure modes of its own. A deeply integrated single-provider system with a genuinely tested degraded/manual path may therefore be more robust than nominal provider diversity connected through a fragile common orchestration layer.

The chapter should not advocate maximum heterogeneity. Its claim is narrower: **count independence at the failure mode that matters, not at the visible component layer.**

## Anti-slop / narrative diagnosis

The prior chapter had a strong governing sentence but repeatedly re-announced it through short examples, paired corrections (`had X / did not have Y`), question stacks, mini-morals, and lists of safeguards. The revision keeps the opening/closing line, which earns its recurrence, while consolidating the rest around four mechanisms: execution-path dependence, cognitive monoculture, eval staleness, and evidence lineage.
