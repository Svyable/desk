# Chapter 4 research note — technical permission is not the same as mandate

## Why this belongs in the chapter

Chapter 4, “Identity Becomes Executable,” makes one of the book’s most important distinctions: an agent can hold a valid credential and still act outside what the human principal actually meant. The current prose expresses that intuitively through coarse permissions, remembered preferences, and the difference between capability and intent.

The OAuth standards record gives that argument a firmer technical boundary. It shows that identity infrastructure itself has had to evolve because a broad permission such as “write” or “payments” can be too coarse to describe the authority attached to one concrete transaction.

## Primary sources checked

### NIST NCCoE concept paper, February 5, 2026

NIST’s National Cybersecurity Center of Excellence published *Accelerating the Adoption of Software and Artificial Intelligence Agent Identity and Authorization* on February 5, 2026. The project framing explicitly treats identification, authorization, auditing, and non-repudiation of software and AI agents as live implementation questions, with a focus on agents that can access data, applications, and tools.

Source: https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd

This supports the chapter’s opening and its emphasis on preserving an authority chain. It does **not** establish that current standards already solve the problem.

### IETF RFC 9396, OAuth 2.0 Rich Authorization Requests, May 2023

RFC 9396 is especially useful because it states a concrete limitation of ordinary OAuth scopes. The specification says scopes are sufficient for static and coarse-grained requests such as profile access, but are not sufficient to express fine-grained authorization requirements such as transferring a particular amount to a particular merchant or giving read access to one directory and write access to one file.

The RFC therefore introduces `authorization_details`, which can carry structured information about actions, locations, data types, identifiers, privileges, and API-specific transaction details.

Source: https://www.rfc-editor.org/rfc/rfc9396.html

The chapter already says, “A credential says what a system can technically access. Intent says what the principal meant the system to do.” RFC 9396 makes the middle of that distinction more precise. There is not simply a binary between credential and subjective intent. Authorization systems can encode increasingly specific parts of a mandate — action, resource, amount, counterparty, location — while still failing to capture everything a human meant.

## Sharper argument

The strongest version of Chapter 4 is therefore not that tokens are crude and human intent is ineffable. It is that **authority has layers of resolution**.

A system can know:

- who the principal is;
- which software actor is operating;
- which resources that actor may reach;
- which actions it may perform;
- which transaction-specific details were approved;
- and still not know whether the resulting action fits the principal’s broader situational intent.

That is a more defensible reason for step-up authorization. The purpose is not merely to compensate for bad permission design. Even a finely scoped authorization can encounter a changed circumstance, an ambiguous instruction, a stale preference, or an unexpectedly consequential choice.

A useful editorial formulation for a later prose pass would be:

> OAuth’s own evolution shows the problem in miniature. A token that says “payments” may be too broad, so newer standards can carry the amount, action, resource, and counterparty. That is better authorization. It is still not a complete theory of what the person meant.

This should be paraphrased rather than inserted mechanically if the manuscript is revised.

## Strongest counterargument / disconfirming evidence

The chapter should not imply that current identity infrastructure is limited to coarse scopes. RFC 9396 exists precisely because authorization systems can express much richer, transaction-specific constraints. Policy engines, resource indicators, token exchange, approval workflows, and step-up authentication can narrow authority substantially.

That counterevidence improves the book. If technical authorization can already become quite expressive, then the remaining problem cannot be described lazily as “permissions are broad.” The harder boundary is between **machine-readable authorization** and **contextual mandate**.

Nor should the chapter imply that every delegated AI action requires repeated human confirmation. Human delegation is valuable because representatives are allowed some discretion. Over-confirmation can destroy usefulness, create habituation, and shift users toward mechanically approving prompts. The design problem is therefore selective escalation: identify where uncertainty, novelty, irreversibility, cost, privacy, or downstream authority is high enough that the principal should re-enter the loop.

## Editorial consequence

A later surgical prose pass could improve Chapter 4 in three ways without changing its voice:

1. replace the broad implication that OAuth-style permissions are inherently coarse with the narrower claim that **some common scope mechanisms are coarse, while richer authorization can encode transaction details**;
2. use RFC 9396 as one concrete example showing that the infrastructure is already moving from generic capability toward mandate-like detail;
3. preserve the chapter’s deeper claim by locating the unresolved problem one layer higher: a technically valid and finely bounded authorization can still diverge from human intent when circumstances change or the agent interprets an underspecified goal.

That makes the chapter harder to caricature and strengthens its central distinction between a representative being authorized and a representative being faithful.