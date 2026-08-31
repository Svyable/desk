# Expansion pass 02 — evidence notes

This file continues the post-merge depth pass for *The Compatibility Dividend*.

## Chapter 14 — When Standards Freeze

### Deprecating TLS 1.0 and TLS 1.1

- RFC 8996, published in March 2021 as BCP 195, formally deprecated TLS 1.0 and TLS 1.1 and moved their defining RFCs to Historic status.
- The RFC notes that TLS 1.2 had superseded TLS 1.0/1.1 years earlier, but surviving systems still existed that could not negotiate newer versions.
- Its operational discussion explicitly recognizes the trade: following the deprecation can break interoperability with those old systems, while retaining obsolete versions incurs security and maintenance risk.
- Source: IETF / RFC Editor, **RFC 8996 — Deprecating TLS 1.0 and TLS 1.1**: https://www.rfc-editor.org/rfc/rfc8996.html
- Use: supports the chapter's claim that mature infrastructure sometimes has to coordinate on *ending* compatibility, not merely creating it.
- Caution: do not imply the RFC remotely disabled TLS 1.0/1.1 everywhere; actual retirement depended on implementations, operators, vendors and policy.

### Cryptographic agility

- NIST defines cryptographic agility as the capability to replace and adapt cryptographic algorithms across protocols, applications, software, hardware, firmware and infrastructure while maintaining security and ongoing operations.
- NIST published final Cybersecurity White Paper 39, **Considerations for Achieving Crypto Agility: Strategies and Practices**, on 19 December 2025, motivated in part by the operational difficulty of the post-quantum migration.
- Sources:
  - NIST, **Crypto Agility** project overview: https://csrc.nist.gov/Projects/crypto-agility
  - NIST, **NIST Publishes CSWP 39: Considerations for Achieving Crypto Agility**, 19 December 2025: https://www.nist.gov/news-events/news/2025/12/nist-publishes-cswp-39-considerations-achieving-crypto-agility
- Use: supports the chapter's argument that capacity to migrate should itself be treated as a system property rather than an improvised emergency response.
- Caution: crypto agility is environment-specific; do not turn it into a claim that every algorithm should be dynamically negotiable or that more negotiation is always safer.

## Chapter 16 — The Machine Customer

### Universal Commerce Protocol

- Google announced the Universal Commerce Protocol (UCP) in January 2026 as an open-source standard for agentic commerce, with common commerce primitives connecting consumer surfaces, businesses and payment providers.
- Google's description explicitly says UCP is designed to work with existing retail infrastructure and can integrate through APIs, A2A and MCP; it is also compatible with AP2 for payment support.
- Source: Google Developers Blog, **Under the Hood: Universal Commerce Protocol (UCP)**, 11 January 2026: https://developers.googleblog.com/en/under-the-hood-universal-commerce-protocol-ucp/
- Use: supports the chapter's claim that commerce standards are emerging as composable seams rather than one monolithic agent protocol.
- Caution: this is a sponsor description of a young protocol and partner ecosystem, not proof of broad market adoption or eventual standard dominance.

### Agent Payments Protocol

- AP2 is an open agent-payment protocol with roles and verification responsibilities for agent-performed payments.
- The current specification separates Checkout Mandates and Receipts from linked Payment Mandates and Receipts, explicitly designing the artifacts to serve as evidence in disputes.
- Sources:
  - Google Cloud, **Powering AI commerce with the new Agent Payments Protocol (AP2)**, 16 September 2025: https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol
  - AP2 repository/specification: https://github.com/google-agentic-commerce/AP2/blob/main/docs/ap2/specification.md
- Use: supports the chapter's distinction between commercial commitment and the payment action that funds it.
- Caution: AP2 remains versioned and developing; record the exact version used for any release claim.

### HTTP 402 machine-payment protocols

- Cloudflare's 2026 Agents documentation supports agentic payments through x402 and Machine Payments Protocol (MPP), both using HTTP `402 Payment Required` flows in which a server issues a payment challenge and a client fulfills it programmatically before retrying the request.
- x402 supports paid HTTP resources and MCP tools; Cloudflare's docs describe payment requirements, signatures and settlement receipts.
- MPP supports multiple payment methods, including card and stablecoin flows, and Cloudflare describes it as backwards-compatible with x402 services.
- Sources:
  - Cloudflare, **Agentic Payments**, updated 5 August 2026: https://developers.cloudflare.com/agents/tools/payments/
  - Cloudflare, **x402**, updated 3 June 2026: https://developers.cloudflare.com/agents/tools/payments/x402/
- Use: supports the chapter's claim that a machine-native market may move payment into ordinary request-response semantics rather than reproduce human account and checkout flows.
- Caution: x402/MPP are young protocols. Their coexistence is evidence of experimentation, not proof that the ecosystem has converged.

### Payment networks and agent recognition

- Visa announced a card specification and SDK for MPP in March 2026 and separately documents a Trusted Agent Protocol intended to let merchants cryptographically recognize approved agents with commerce intent.
- Mastercard's Agent Pay materials emphasize registered agents, network tokens and verifiable intent for agentic transactions.
- Sources:
  - Visa, **Visa introduces card specification and SDK for Machine Payments Protocol**, 18 March 2026: https://corporate.visa.com/en/sites/visa-perspectives/innovation/visa-card-specification-sdk-for-machine-payments-protocol.html
  - Visa Developer, **Trusted Agent Protocol**: https://developer.visa.com/capabilities/trusted-agent-protocol/docs-getting-started
  - Mastercard, **Agent Pay**: https://www.mastercard.com/us/en/business/artificial-intelligence/mastercard-agent-pay.html
- Use: supports the chapter's distinction among recognizing an agent, establishing intent, authorizing an action and settling value.
- Caution: company protocol and product claims should be treated as primary descriptions of those systems, not independent evidence of market scale, fraud reduction or consumer benefit.

## Release check

Re-check current NIST cryptographic-transition guidance and all agent-commerce protocol versions immediately before Shelf release. RFC 8996 is stable historical evidence; UCP, AP2, x402, MPP and payment-network agent protocols are rapidly evolving.
