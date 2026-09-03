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

The protocol interlude is tied directly to current developer documentation and open specifications rather than generalized descriptions of agent infrastructure:

- OpenAI’s 2025 Agents SDK documentation for tools, multi-agent workflows, handoffs, guardrails, tracing, and observability;
- OpenAI’s April 2026 sandbox update, including isolation, files and command execution, configurable memory, long-horizon work, separation of harness from compute, and an explicit assumption of prompt-injection and exfiltration attempts;
- the Model Context Protocol 2026-07-28 specification, including its stateless core, routable method/tool headers, authorization hardening, extensions, and task support;
- the Linux Foundation’s 2025 A2A governance announcement and its 2026 adoption report, with foundation-reported adoption figures labeled as such;
- A2A specification v0.3.0, including Agent Cards, Tasks, Messages, Artifacts, cancellation, streaming, and cooperation without disclosure of internal reasoning.

This pass makes a deliberate distinction between two seams: MCP primarily standardizes access from AI systems to tools/data, while A2A standardizes cross-agent communication and task exchange. The manuscript does not assume either protocol will necessarily become the final industry standard.

## Evidence pass 5 — confused deputy

The security and identity section grounds its attack-and-containment argument in independent benchmarks, government security work, open authorization rules, and first-party production defenses:

- AgentDojo’s peer-reviewed benchmark for indirect prompt injection against tool-using agents operating over untrusted data;
- NIST CAISI’s 2026 analysis of a public agent-hijacking red-team competition covering 13 frontier models, more than 250,000 attack attempts, and over 400 participants;
- OpenAI’s 2026 security engineering account framing mature prompt injection as social engineering and emphasizing source-to-sink controls that constrain damage even when manipulation succeeds;
- Anthropic’s browser-agent red-team work, including its explicit warning that a one-percent attack success rate remains meaningful at scale;
- OWASP guidance separating excessive functionality, permissions, and autonomy as distinct architectural risks;
- Anthropic’s filesystem/network sandboxing work as an example of stronger boundaries enabling more autonomy inside a smaller blast radius;
- NIST NCCoE’s agent identity and authorization concept paper, which frames identification, authorization, auditing, non-repudiation, and data-flow tracking as enterprise agent problems;
- MCP authorization rules on resource-bound tokens, audience validation, confused-deputy defenses, and the prohibition on token passthrough.

This pass distinguishes model robustness from system security. The manuscript treats prompt injection as consequential because an authorized agent can connect untrusted input to privileged action, and treats identity portability as separate from authority portability.

## Evidence pass 6 — the mandate

The markets and delegation section grounds machine spending and contracting in current payment infrastructure rather than treating agent wallets as a hypothetical endpoint:

- Google’s Agent Payments Protocol (AP2), with signed Intent and Cart Mandates designed to preserve evidence of user authorization in both human-present and delegated purchases;
- Stripe’s current agentic-commerce documentation for customer-controlled wallets, seller-agent checkout, scoped/shared payment credentials, and machine-payment integrations;
- Stripe and Tempo’s Machine Payments Protocol, which targets programmatic agent and machine transactions that are too small or too frequent for human-oriented checkout flows;
- Mastercard’s Agent Pay and Agentic Tokens, framed around registered and traceable agents and verifiable user intent;
- Mastercard’s 2026 Agent Pay for Machines announcement, describing high-frequency, low-latency and low-value machine transactions including microtransactions;
- Visa Intelligent Commerce, including credentialing, authentication, spending limits, approval workflows, and identity signals for agent-initiated payments.

The manuscript treats all of these payment-company claims according to source type. Product announcements are evidence that major payment networks are designing for delegated machine spending, not proof that a large autonomous machine economy already exists. The analytical focus is the emerging institutional primitive: a machine-checkable mandate connecting a principal, an agent, a budget, a purpose, and a transaction record.

## Evidence pass 7 — chain of custody

The reputation and security sections now gain a supply-chain layer built from a documented compromise and mature software provenance systems:

- Andres Freund’s primary March 2024 disclosure of the XZ/liblzma backdoor after anomalous SSH behavior led him into the build chain;
- Red Hat’s CVE-2024-3094 documentation on malicious XZ 5.6.0/5.6.1 release material and the important distinction between the distributed tarball/build path and the expected Git source path;
- OpenSSF’s incident analysis and social-engineering guidance, including the observation that staged experimental distribution helped contain the compromised releases before broad stable deployment;
- SLSA v1.2’s definition of provenance as verifiable information about where, when, and how an artifact was produced;
- Sigstore’s artifact signing, identity binding, short-lived certificates, and transparency-log model for establishing chain-of-custody evidence;
- OWASP’s MCP tool-poisoning attack description, used to show that a remote agent tool creates a runtime provenance problem because a trusted endpoint can emit new descriptions or responses after connection-time approval.

The manuscript distinguishes reputation from provenance: reputation compresses an actor’s history, while provenance helps establish what exact artifact or runtime result arrived this time. It extends that distinction to consequential agent memory, arguing that durable beliefs that authorize action or shape reputation need enough source history to be challenged and corrected later.

Machine-readable source records for the evidence passes live under [`research/sources/`](sources/). First-party company metrics are identified as such in the manuscript. Internal evaluations are not presented as independent evidence.

## Still to verify

Before the manuscript is treated as a complete trade-nonfiction draft, verify and source the concrete claims chapter by chapter, especially:

- persistent-memory poisoning, memory-snapshot inheritance, and inter-agent trust mechanisms beyond the provenance analogues already added;
- claims about insurance, procurement, logistics, and other machine-speed institutional interactions beyond the documented market analogues;
- historical analogues used elsewhere to explain organizations, monocultures, bureaucracy, infrastructure, and resilience;
- any real organization, product, standard, incident, or numerical claim added in later reporting passes.

The opening refrigerated-truck sequence and the hurricane-insurance cascade are illustrative constructions in this draft, not reported incidents. A release pass should keep them explicitly hypothetical or replace them with sourced cases.

The source trail should grow alongside reporting rather than being backfilled with plausible citations after the prose is finished.
