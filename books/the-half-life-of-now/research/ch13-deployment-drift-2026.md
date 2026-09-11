# Chapter 13 — deployment drift and freshness, 2026 evidence note

## Editorial question

Chapter 13 argues that a model can remain technically functional while the relationship that justified trusting it ages. The revision should avoid the easy version of that claim: newer data, continuous retraining, or retrieval do not automatically solve staleness, but neither are deployed models doomed to decay merely because they were trained on historical data.

## Primary / authoritative evidence

### NIST CAISI, *Challenges to the Monitoring of Deployed AI Systems* (March 6, 2026)

NIST's Center for AI Standards and Innovation distinguishes controlled pre-deployment evaluation from post-deployment monitoring in real-world settings. It identifies performance degradation and drift as practical barriers, alongside fragmented logging, insufficient research on human-AI feedback loops, uncertain monitoring cadence, immature validated methodologies, and the challenge of combining automated with human-validated monitoring.

Source: https://www.nist.gov/publications/challenges-monitoring-deployed-ai-systems-center-ai-standards-and-innovation

Supporting NIST release, March 9 / updated March 18, 2026: https://www.nist.gov/news-events/news/2026/03/new-report-challenges-monitoring-deployed-ai-systems

**Use in manuscript:** grounds the chapter's move from abstract concept drift to the organizational difficulty of maintaining deployed systems. Do not imply NIST has established a universal monitoring method; the report says the opposite—methods and terminology remain nascent and scattered.

### NIST AI RMF Playbook, MANAGE 2.2

The current NIST playbook states that deployed AI performance and trustworthiness can shift over time, commonly described as drift, and recommends regular monitoring to detect and respond to those changes.

Source: https://airc.nist.gov/airmf-resources/playbook/manage/

**Use in manuscript:** supports the narrower proposition that launch-time evaluation is not a permanent warranty. The playbook is voluntary guidance, not a finding that every model inevitably degrades.

### NIST AI RMF status in 2026

NIST's AI RMF page states that AI RMF 1.0 is currently being revised. The original framework remains a voluntary, use-case-agnostic risk-management resource.

Source: https://www.nist.gov/itl/ai-risk-management-framework

**Use in manuscript:** avoid presenting the 2023 framework as a frozen or mandatory standard.

## Strongest counterargument

AI systems can be substantially *fresher* than human institutions. Live measurement, automated drift detection, retrieval, controlled online learning, and rapid deployment can identify changes that a periodic committee, static report, or unaided decision-maker misses. Historical training therefore does not imply permanent staleness.

This counterargument narrows the chapter rather than defeating it. The relevant question is whether faster updating preserves trustworthy contact with the target phenomenon. Recent data may be endogenous to earlier model decisions; retrieval may surface recent but weak or misdated material; monitoring can track the wrong metric; rapid adaptation can sacrifice reproducibility or stability. Freshness is evidence quality plus temporal fit, not recency alone.

## Falsification / boundary

The chapter should weaken materially if robust post-deployment systems can demonstrate that automated monitoring and updating reliably preserve performance, subgroup behavior, calibration, and decision-relevant outcomes across changing environments without requiring meaningful external validation or governance. Current NIST material does not support that stronger proposition.

The chapter should not claim:

- that every model inevitably decays after deployment;
- that humans are intrinsically better at noticing drift;
- that continuous learning is generally unsafe;
- that retrieval guarantees current knowledge;
- that newer evidence is necessarily superior to older evidence;
- that NIST guidance is mandatory regulation.

## Narrative consequence

The revised chapter treats deployment as the point where the model enters a world it can partly alter. The key line of argument becomes: a model can update quickly and still update from the wrong evidence. This sets up Chapter 14 cleanly: even after a model changes or retires, its old inferences can persist in downstream machine memory.