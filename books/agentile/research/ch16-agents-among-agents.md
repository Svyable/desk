# Chapter 16 — Agents Among Agents

## Claim under test

Chapter 16 argues that once software agents represent different principals to one another, protocols become economic institutions. Interoperability can reduce the cost of discovering, invoking, negotiating with, and paying external machine capabilities, but it also creates new requirements for identity, delegated authorization, reputation, rate limiting, evidence, dispute resolution, and compositional security. The chapter does not assume a separate machine civilization; agents remain delegates embedded in human legal and economic relationships.

## Sources checked

- NIST, “Announcing the AI Agent Standards Initiative for Interoperable and Secure Innovation” (February 17, 2026; updated February 18, 2026) and the initiative page updated August 14, 2026. NIST identifies interoperable protocols, agent authentication/identity, security evaluations, and community-led open protocol ecosystems as prerequisites for trusted agent adoption. https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure and https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative
- NIST, “Summary Analysis of Responses to the Request for Information Regarding Security Considerations for AI Agents” (May 18, 2026). Respondents broadly agreed that agent systems present security challenges requiring adaptations of existing cybersecurity practice, with standards and information sharing among proposed responses. https://www.nist.gov/publications/summary-analysis-responses-request-information-regarding-security-considerations-ai
- NIST NCCoE, “Accelerating the Adoption of Software and Artificial Intelligence Agent Identity and Authorization” concept paper (February 5, 2026). The project focuses on applying existing identity standards and best practices to agents with access to enterprise tools, applications, and data. https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd
- Google, “Announcing the Agent2Agent Protocol (A2A)” (April 9, 2025). A2A was introduced to allow agents built in different frameworks or by different vendors to discover capabilities and collaborate. It is used as evidence of an industry interoperability direction, not evidence that A2A will become the universal standard. https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/
- Model Context Protocol, “The 2026-07-28 Specification” (July 28, 2026). The specification revision added a stateless protocol core, routing improvements, tasks/extensions, caching, and authorization hardening. The chapter uses MCP as evidence that agent/tool protocol design is rapidly becoming infrastructure and that authorization is a major practical integration concern. https://blog.modelcontextprotocol.io/posts/2026-07-28/
- Mastercard, “Mastercard launches Agent Pay for Machines” (June 10, 2026). The announcement describes credentialing, permissioning, continuous machine transactions, and settlement across payment rails. This is an interested industry source used to demonstrate infrastructure being built for machine-to-machine commerce, not to establish current transaction volume. https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html

## Counterevidence and boundary conditions

Interoperability standards can reduce integration costs without producing a large open market if identity, discovery, reputation, or settlement remain concentrated. Open protocols can coexist with powerful gatekeepers, as email deliverability, search, app stores, and payments already demonstrate. Conversely, proprietary integration can sometimes provide better security and reliability than a fragmented open ecosystem.

The chapter does not claim that every agent interaction requires a blockchain, a universal identity, or autonomous payment. Many useful agent relationships can remain inside one organization or one trusted platform. Machine-to-machine microtransactions will be economic only where transaction value exceeds compute, verification, fraud, dispute, and settlement costs.

## What would weaken the chapter

The thesis would weaken if agents remain overwhelmingly single-platform and rarely invoke external agents or services dynamically; if interoperability protocols fail to reduce integration cost; or if identity, delegation, and dispute mechanisms prove no more difficult than conventional API security. It would also narrow if machine-speed transactions remain too costly or risky to create new service granularity beyond today's API and cloud markets.
