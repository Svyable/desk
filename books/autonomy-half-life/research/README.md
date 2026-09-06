# Research brief — Autonomy Half-Life

## Thesis

The manuscript argues that grants of autonomy should not remain fully authoritative until a binary expiration or revocation event. Their practical mandate should weaken when the environment materially drifts from the conditions that justified the grant. Elapsed time is one signal of possible staleness, but **state change is the governing idea**.

The book uses “autonomy half-life” as a conceptual metaphor, not a universal quantitative law. It deliberately avoids pretending that legitimacy can always be reduced to a scalar. In domains where measurable policy signals exist, the metaphor can inform engineering. In law, management, and institutions, it is primarily a design principle and burden-of-proof rule.

## Novelty check

A September 4, 2026 web search did not surface prior use of the exact phrase **“Autonomy Half-Life”** as the title or central doctrine described here. It did surface important adjacent work that the manuscript must acknowledge rather than obscure:

- Adam Laabs, “An AI Agent Does Not Need to Be Hacked. It Only Needs to Inherit Your Permissions” (August 2026), uses **Authority Half-Life** for the period during which original context continues to justify an agent action.
- Reza Parsa, “Runtime Legitimacy in Autonomous AI Systems” (2026), proposes **Authority Decay** and runtime re-verification for agentic AI.
- David Forbes, “The Missing Layer” (2026), argues that authority should contract as operating conditions change.
- Internet-Drafts on Intent Tokens, Principal Agent Protocol, Agent Authorization Envelopes, and Progressive Trust use time bounds, delegation chains, decay states, or trust half-lives.
- Older legal scholarship on sunset clauses, distributed-systems work on leases, and security standards on expiring credentials provide deep precedents for bounded authority.

The manuscript’s distinct claim is therefore not “nobody has ever thought authority should expire.” That would be false. The distinct synthesis is that **the useful half-life is primarily a function of distance from the grant conditions rather than wall-clock age**, and that this principle can unify agent authorization, organizational delegation, emergency power, and institutional legitimacy without treating them as identical domains.

## Falsification notes

The thesis would be weakened by evidence that context-sensitive renewal systematically produces worse safety and accountability outcomes than static grants while offering no compensating reduction in stale authority; that material environmental drift cannot be detected or operationally represented in domains where the book recommends it; or that renewal mechanisms predictably centralize decision-making so severely that they destroy the benefits of delegation.

The book therefore preserves several counterclaims:

1. Short fixed expiries can be superior to complicated drift detection because they are legible, auditable, and hard to game.
2. Automatic decay can create brittleness during emergencies, outages, communications failures, and other moments when renewed permission is hardest to obtain.
3. Principals can be less informed than agents; requiring reauthorization from a distant principal may reduce rather than improve decision quality.
4. Renewal can become ritualized, producing repeated approvals without fresh evaluation.
5. Stable long-term mandates can protect institutions from arbitrary interference and can be essential for credible commitment.
6. “Context” is manipulable. A system that decides whether its own authority remains justified can rationalize continuation unless the relevant signals and escalation rules are externally constrained.

## Source discipline

Concrete claims in the manuscript should be traceable to the source ledger. The prose avoids invented dialogue, invented historical scenes, unsupported statistics, and imitation quotations. Where the book uses a scenario to clarify the principle, it labels the scenario as hypothetical or writes it generically rather than presenting it as a historical event.

Key source families include: NIST zero-trust guidance; RFC 6749; Gray and Cheriton on distributed-system leases; Gama et al. on concept drift; U.S. Army mission-command doctrine; Jensen and Meckling and later public-administration work on delegation and agency costs; legal scholarship on sunset clauses; and 2026 autonomous-agent authorization proposals.
