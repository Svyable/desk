# Chapter 13 research note — runtime authority in agent systems (2026)

## Editorial purpose

Chapter 13 argues that machine-speed delegation creates a gap between a credential remaining technically valid and the underlying mandate remaining justified. The strongest current evidence does not establish a settled standard for "runtime mandate evaluation." It does show that agent identity, authorization, delegation, auditability, and bounded scope have become active standards problems, while existing OAuth mechanisms already cover important parts of fine-grained and delegated authorization.

The chapter should therefore avoid claiming that AI agents invented task-specific authorization. Its distinct proposition is narrower: even a correctly authenticated, correctly scoped, correctly delegated action can become stale when material facts change between grant and execution.

## Primary / authoritative sources checked

### NIST AI Agent Standards Initiative — February 17, 2026; updated August 14, 2026

NIST's Center for AI Standards and Innovation launched an AI Agent Standards Initiative focused on secure, interoperable agent systems. The initiative explicitly includes research into agent authentication and identity infrastructure, industry-led standards, open protocols, and security evaluation.

This supports the manuscript's claim that software-agent identity and authority are now active standards questions. It does not establish any particular architectural solution.

Source: https://www.nist.gov/artificial-intelligence/ai-agent-standards-initiative

### NIST NCCoE concept paper — February 5, 2026

The National Cybersecurity Center of Excellence published a concept paper on applying identity standards and best practices to software and AI agents. NIST specifically requested feedback on identification, authorization, auditing, non-repudiation, access to tools/data/applications, and controls relevant to agent systems.

This is useful because the problem statement is broader than model safety: agents can act through ordinary enterprise identity and access infrastructure while creating new delegation and accountability problems.

Source: https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd

### NIST CAISI agent-security RFI — January 12, 2026

CAISI's RFI describes agent systems as capable of planning and taking autonomous actions that affect real systems or environments and asks about interventions that constrain and monitor agent access in deployment environments.

The RFI is evidence of an open problem, not a validated control framework.

Source: https://www.nist.gov/news-events/news/2026/01/caisi-issues-request-information-about-securing-ai-agent-systems

## Current IETF work in progress

Internet-Drafts are temporary working documents, not settled IETF standards. They are useful here as evidence of convergent engineering attention, not as normative authority.

### Attenuating Authorization Tokens for Agentic Delegation Chains — draft-niyikiza-oauth-attenuating-agent-tokens-01, June 15, 2026

This proposal defines task-scoped credentials for agent delegation, with tool/argument constraints and a rule that delegated child tokens may have equal or narrower authority than the parent, subject to depth and lifetime limits.

Source: https://datatracker.ietf.org/doc/draft-niyikiza-oauth-attenuating-agent-tokens/

### The Intent Token — draft-williams-intent-token-02, September 2026

This proposal binds an autonomous action to a signed, time-bounded human-declared authorization envelope before execution and propagates declared intent through delegation chains. It is particularly adjacent to the chapter's action-level authority discussion.

The draft is individual work in progress and includes proprietary/patent context. The manuscript should not present it as an adopted standard or proof that its framing is correct.

Source: https://www.ietf.org/ietf-ftp/internet-drafts/draft-williams-intent-token-02.html

### OAuth Profile for Delegated AI Agent Authorization — draft-mishra-oauth-agent-grants-02, August 30, 2026

This proposal is an important counterweight because it intentionally reuses existing OAuth and JOSE mechanisms rather than inventing a new authorization substrate. It covers agent identity, user consent, resource-bound and sender-constrained tokens, attenuated authority through token exchange, and refresh-token rotation.

Source: https://www.ietf.org/ietf-ftp/internet-drafts/draft-mishra-oauth-agent-grants-02.html

## Established counterevidence: OAuth already has relevant machinery

### RFC 9396 — OAuth 2.0 Rich Authorization Requests (2023)

RFC 9396 supports structured authorization details that are more expressive than a flat scope string. This narrows any claim that action- or resource-specific authorization is uniquely an agent-era invention.

Source: https://www.rfc-editor.org/rfc/rfc9396.html

### RFC 8693 — OAuth 2.0 Token Exchange (2020)

RFC 8693 supports token exchange, delegation/impersonation semantics, and actor information. Again, agent systems are extending an existing authorization tradition rather than beginning from zero.

Source: https://www.rfc-editor.org/rfc/rfc8693.html

## Strongest counterargument / boundary

A reader could reasonably object that the chapter is redescribing ordinary least privilege, zero trust, idempotency, rate limiting, workflow state, and conditional access in new language. That objection should remain alive.

The defensible contribution is not that those controls are new. It is the synthesis: machine-speed agents can make the *semantic freshness of the mandate* change independently of credential validity. Identity can be correct, the token can be unexpired, the scope can be properly attenuated, the delegation chain can be authentic, and the action can still be wrong because the recipient, purpose, principal, risk, or world state changed.

This claim should be treated as a design proposition, not a law. In some systems, existing conditional authorization and workflow controls may already capture the relevant state completely. If they do, "runtime mandate evaluation" adds vocabulary rather than new capability.

## Narrative implication

The strongest chapter structure is concrete rather than standards-first:

1. human tempo quietly limits practical authority;
2. agents remove that accidental friction;
3. current NIST/IETF work shows identity/delegation becoming explicit;
4. established OAuth standards supply the countercase that fine-grained delegation is not new;
5. the remaining problem is a valid credential attached to a stale reason;
6. retries, queues, long plans, accumulation, principal changes, and model/tool upgrades are concrete ways that staleness appears;
7. the handoff to Chapter 14 is reversibility: mandate freshness should tighten as consequence becomes harder to undo.

This keeps the research inside the argument instead of turning the chapter into a protocol catalogue.