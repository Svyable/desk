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

## Release check

Re-check current NIST cryptographic-transition guidance before Shelf release. RFC 8996 is stable historical evidence; living migration guidance can evolve.
