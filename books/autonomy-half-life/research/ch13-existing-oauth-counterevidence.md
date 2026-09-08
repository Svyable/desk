# Chapter 13 evidence note — existing OAuth authorization primitives

**Checked:** September 8, 2026

Chapter 13, “Machines Do Not Wait for Monday,” uses several 2026 Internet-Drafts to show active work on authorization for asynchronous and delegated agents. Those drafts are useful evidence of current design pressure, but they should not imply that agent systems begin from a world of only coarse, long-lived bearer credentials. Mature IETF standards already provide important pieces of narrower, delegated authorization.

## Established standards that narrow the novelty claim

### RFC 9396 — OAuth 2.0 Rich Authorization Requests

RFC 9396 is an IETF Proposed Standard published in May 2023. It adds the `authorization_details` parameter so an authorization request can carry structured, fine-grained requirements rather than only a coarse scope string. The RFC’s own examples include a payment authorization with amount and creditor details, and read/write authorization tied to particular resources.

Primary source: https://www.rfc-editor.org/rfc/rfc9396.html

**What it supports for Chapter 13:** fine-grained, action- and resource-specific authorization is not uniquely an agent-era invention. Existing OAuth can already represent more of the “this” in “handle this” than a generic actor-level permission.

**What it does not establish:** RFC 9396 does not define the book’s proposed rule that authority should contract when the environment materially drifts from the conditions of grant. It carries authorization detail; it does not by itself decide whether those details remain justified at a later execution event.

### RFC 8693 — OAuth 2.0 Token Exchange

RFC 8693 is an IETF Proposed Standard published in January 2020. It defines OAuth token exchange, including impersonation and delegation semantics. Its JWT `act` claim can represent an actor and a nested history of prior actors in a delegation chain.

Primary source: https://www.rfc-editor.org/rfc/rfc8693.html

**What it supports for Chapter 13:** delegated identity and multi-hop authorization are not wholly new problems created by autonomous agents. Existing standards already support token exchange and can preserve information about who is acting for whom.

**Important boundary:** RFC 8693 explicitly says prior actors in nested `act` claims are informational for access-control purposes; authorization policy remains a separate question. A verifiable delegation history therefore does not prove that the current action still fits the principal’s live mandate.

## Current 2026 Internet-Draft landscape

The newer agent-specific drafts remain relevant because they combine or extend ideas around machine-speed action, bounded mandates, re-delegation, value limits, asynchronous operation, revocation, and context. They should be described as **work in progress**, not as standards or proof that established authorization systems are incapable of supporting agents.

Freshly rechecked:

- `draft-baur-pap-02`, Principal Agent Protocol, June 29, 2026: active individual Internet-Draft; includes bounded principal/agent protocol machinery. https://datatracker.ietf.org/doc/draft-baur-pap/02/
- `draft-williams-intent-token-01`, Intent Token, June 2026: individual Internet-Draft proposing pre-action, signed intent authorization and context-sensitive mode changes. https://datatracker.ietf.org/doc/draft-williams-intent-token/
- `draft-daniel-ai-agent-internet-architecture-03`, dated August 28, 2026: the IETF archive and I-D announcement record this revision even though the Datatracker landing page was still surfacing revision 00 when checked. The -03 draft explicitly treats identity, authorization, delegation, intent, trust, payment, and audit as distinct concerns; says intent alone is not authorization; and recommends narrowly scoped authority by operation, resource, time, value, and context. https://www.ietf.org/archive/id/draft-daniel-ai-agent-internet-architecture-03.html

The revision mismatch between the Datatracker landing page and the IETF archive is itself a reminder to cite a dated revision or stable archive URL for fast-moving drafts rather than assuming every index surface updates simultaneously.

## Strongest counterargument to the chapter’s framing

A skeptical reader can reasonably argue that Chapter 13 overstates the discontinuity between ordinary software authorization and agent authorization. Rich Authorization Requests, Token Exchange, short-lived tokens, audience restriction, policy engines, rate limits, idempotency controls, and ordinary workflow state already solve meaningful parts of the problem. Many systems can become safer by composing those tools well rather than inventing a new “runtime legitimacy” layer.

That counterargument should narrow, not erase, the book’s claim. The residual problem is **semantic freshness**: even a valid, fine-grained, correctly delegated authorization can become stale if the recipient changes, the task is cancelled, a prior step alters the state, the principal loses the relevant role, or the action’s consequence changes materially. Existing standards can carry constraints and provenance; they do not automatically determine which changed facts should invalidate or narrow a mandate.

## Editorial implication

When Chapter 13 is next revised, prefer this formulation:

> Agent systems do not require authorization to be reinvented. They make the gaps between identity, delegation, fine-grained permission, and live task justification harder to ignore.

That is stronger than claiming that older authorization assumes one long-lived credential. It credits mature standards, gives the new Internet-Drafts their proper evidentiary weight, and leaves the book’s distinctive thesis where it is hardest to dismiss: the difference between a permission that remains valid and a mandate that remains justified.