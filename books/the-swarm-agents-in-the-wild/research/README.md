# Research and verification agenda

This working edition has begun, but has not completed, the source pass required for release.

## Evidence pass 1 — first habitats

The first reported interlude anchors several claims with checkable sources rather than relying on generalized agent-industry description:

- Anthropic’s production account of its multi-agent Research architecture, including its internal evaluation and token-cost measurements;
- OpenAI/SWE-bench documentation on the human-validated SWE-bench Verified software-engineering benchmark;
- METR’s independent task-completion time-horizon methodology, limitations, and 2026 frontier-agent measurements;
- Klarna’s 2025 regulatory disclosures on customer-service AI usage, estimated labor-equivalent work, service metrics, and cost savings;
- Klarna’s formal response to SEC questions about press reports concerning AI-service quality and its continued human-service path.

## Evidence pass 2 — market rehearsal

The failure-ecology section includes a documented pre-agent market analogue built from regulatory records:

- the joint CFTC/SEC reconstruction of the May 6, 2010 Flash Crash, used as a coupling case in which automated execution, rapidly changing liquidity, high-frequency trading, and cross-market linkages interacted under stress;
- the SEC’s Knight Capital enforcement record, used as a distinct blast-radius case in which a software-deployment failure retained enough market authority to create millions of erroneous orders and a loss above $460 million in roughly forty-five minutes.

The manuscript keeps these failure classes separate. The Flash Crash is not presented as one defective algorithm acting alone, and Knight is not presented as an emergent population event.

## Evidence pass 3 — apprenticeship test

The labor section pressure-tests its own apprenticeship and organizational-compression claims with evidence pointing in different directions:

- Brynjolfsson, Li, and Raymond’s peer-reviewed workplace study of 5,172 customer-support agents, including the large gains among less-experienced workers and evidence consistent with faster skill acquisition;
- Dell’Acqua and coauthors’ 2026 *Organization Science* field experiment with 791 Procter & Gamble professionals, in which individuals with AI matched teams without AI on early-stage product-innovation tasks while human judgment retained value in selection;
- METR’s early-2025 randomized trial in which experienced open-source developers working on familiar repositories were nineteen percent slower with AI tools despite perceiving speedups;
- METR’s 2026 methodological update, which says later tools likely improved productivity but that selection effects made the follow-up estimate unreliable;
- METR’s maintainer-review study showing a substantial gap between SWE-bench automated passes and real maintainer acceptance.

This pass is intentionally counterevidential. It does not treat AI as either uniformly deskilling or uniformly skill-building. The manuscript distinguishes novice knowledge transfer, coordination compression, expert verification costs, and institutional acceptance as separate mechanisms.

## Evidence pass 4 — protocol layer

The protocol interlude is now tied directly to current developer documentation and open specifications rather than generalized descriptions of agent infrastructure:

- OpenAI’s 2025 Agents SDK documentation for tools, multi-agent workflows, handoffs, guardrails, tracing, and observability;
- OpenAI’s April 2026 sandbox update, including isolation, files and command execution, configurable memory, long-horizon work, separation of harness from compute, and an explicit assumption of prompt-injection and exfiltration attempts;
- the Model Context Protocol 2026-07-28 specification, including its stateless core, routable method/tool headers, authorization hardening, extensions, and task support;
- the Linux Foundation’s 2025 A2A governance announcement and its 2026 adoption report, with foundation-reported adoption figures labeled as such;
- A2A specification v0.3.0, including Agent Cards, Tasks, Messages, Artifacts, cancellation, streaming, and cooperation without disclosure of internal reasoning.

This pass makes a deliberate distinction between two seams: MCP primarily standardizes access from AI systems to tools/data, while A2A standardizes cross-agent communication and task exchange. The manuscript does not assume either protocol will necessarily become the final industry standard.

Machine-readable source records for the evidence passes live under [`research/sources/`](sources/). First-party company metrics are identified as such in the manuscript. Internal evaluations are not presented as independent evidence.

## Still to verify

Before the manuscript is treated as a complete trade-nonfiction draft, verify and source the concrete claims chapter by chapter, especially:

- security and identity claims beyond the protocol/sandbox evidence already added, including prompt injection, tool poisoning, provenance, permission attenuation, and credential theft;
- payment and machine-commerce infrastructure, including where an agent’s authority to spend or contract becomes enforceable;
- claims about insurance, procurement, logistics, and other machine-speed institutional interactions beyond the documented market analogues;
- historical analogues used elsewhere to explain organizations, monocultures, bureaucracy, infrastructure, and resilience;
- any real organization, product, standard, incident, or numerical claim added in later reporting passes.

The opening refrigerated-truck sequence and the hurricane-insurance cascade are illustrative constructions in this draft, not reported incidents. A release pass should keep them explicitly hypothetical or replace them with sourced cases.

The source trail should grow alongside reporting rather than being backfilled with plausible citations after the prose is finished.
