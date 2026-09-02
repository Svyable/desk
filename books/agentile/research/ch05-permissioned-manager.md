# Chapter 5 — The Permissioned Manager

## Claim under test

Chapter 5 argues that agentic management is not merely task assignment. Once software can take consequential actions, useful delegation depends on an explicit authority envelope: identity, permissions, approval thresholds, escalation, observability, provenance, and revocation. The chapter uses that mechanism to bridge Chapter 4’s firm-boundary argument to Chapter 6’s queue argument: some waiting disappears only when institutions redesign who or what is allowed to act.

## Sources checked

- National Institute of Standards and Technology, Center for AI Standards and Innovation, “Announcing the AI Agent Standards Initiative for Interoperable and Secure Innovation” (February 17, 2026; page updated February 18, 2026). NIST describes agents as systems capable of autonomous actions and identifies secure interoperability with external systems and internal data as a practical condition for adoption. https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure
- NIST National Cybersecurity Center of Excellence, “Accelerating the Adoption of Software and Artificial Intelligence Agent Identity and Authorization” concept paper (initial public draft, February 5, 2026). The project explicitly centers identification, authorization, auditing, non-repudiation, tool/data access, and controls around agent use. https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd
- NIST, “CAISI Issues Request for Information About Securing AI Agent Systems” (January 12, 2026). NIST emphasizes constraints and monitoring on agent access to deployment environments, supporting the chapter’s distinction between model capability and granted authority. https://www.nist.gov/news-events/news/2026/01/caisi-issues-request-information-about-securing-ai-agent-systems
- Anthropic, “Trustworthy agents in practice” (April 9, 2026). Anthropic describes practical agent control through tool permissions, approval requirements, pausing under ambiguity, transparency, and security controls. This is a provider source and is used for implementation evidence, not as neutral proof of broad economic effects. https://www.anthropic.com/research/trustworthy-agents

## Counterevidence and boundary conditions

The chapter does not assume that more explicit permissions always improve productivity. A dense approval system can reproduce the slow hierarchy it was meant to replace. Human review can erase the execution savings when outputs are difficult to verify. Conversely, removing approvals too aggressively can increase operational and security risk. Provider descriptions of permission systems demonstrate deployment concerns but do not establish that current agents are reliable enough for high-consequence autonomy across sectors.

The mechanism would be weakened if organizations can safely grant broad agent authority without meaningful identity, authorization, auditability, escalation, or revocation controls; or if those controls routinely cost more than the delegated work they enable. The chapter therefore treats permissioned action as a design problem, not a claim that autonomy is automatically productive.
