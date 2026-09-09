# Chapter 16 evidence audit — September 9, 2026

## Revision question

Chapter 16 previously had the right subject—common-mode failure in a highly interoperable alliance—but delivered much of it through repeated named frameworks, question stacks, and symmetrical mini-lessons. This pass tests a narrower proposition: **alliance resilience depends less on visible supplier/component count than on whether critical alternatives can fail for different reasons.**

## Primary and authoritative sources checked

### NATO Alliance Digital Strategy — January 13, 2026

https://www.nato.int/en/about-us/official-texts-and-resources/official-texts/2026/01/13/alliance-digital-strategy

Relevant bounded findings:

- NATO explicitly seeks interoperable, secure-by-design infrastructure rather than isolated national digital systems.
- The strategy calls for standardized services for equivalent requirements and agreed interoperability standards.
- It also calls for federated platforms, Zero Trust, reduced vendor lock-in, operation in degraded/contested/denied environments, and redundant and diversified technical solutions for mission-critical services using the PACE principle.
- These provisions are policy/architecture direction, not evidence that the target architecture is fully deployed or proven in wartime.

The important counterevidence is inside the strategy itself: standardization can improve security, training, support, lifecycle coherence, and interoperability. The chapter therefore does **not** treat technological commonality as inherently fragile or diversity as inherently resilient.

### NATO / NCIA Protected Business Network contract — July 7, 2026

NATO release:
https://www.nato.int/en/news-and-events/articles/news/2026/07/07/nato-builds-a-more-agile-and-resilient-digital-infrastructure

NCIA release:
https://www.ncia.nato.int/newsroom/news/nato-advances-towards-more-agile-and-resilient-digital-infrastructure-through-200meur-contract-with-industry

Relevant bounded findings:

- NCIA signed a roughly EUR 200 million contract with Accenture for the Protected Business Network.
- NATO describes PBN as a cloud-enabled foundation for classified digital operations across the NATO Enterprise, replacing legacy approaches with a common cloud operating model and standardized engineering practices.
- This is evidence of real implementation/procurement rather than strategy language alone.
- It is **not** evidence that PBN is already universally deployed, that it has experienced a common-mode failure, or that centralization has made NATO less resilient.

The manuscript uses PBN only as a concrete example of why successful integration changes the topology of dependence. The vulnerability discussion is an architectural implication, not an allegation about the contract, Accenture, NATO, or the deployed security of PBN.

## Strongest counterargument / disconfirming evidence

A heterogeneous architecture can be less secure than a standardized one. Multiple implementations increase configuration variety, training burden, patch divergence, observability complexity, integration errors, and the chance that nominal backups are poorly exercised. One deeply defended standard service with a genuinely tested alternate path may be more resilient than several nominally independent systems.

The revised chapter therefore rejects a simple “more vendors / more systems = more resilience” rule. Its claim is conditional: preserve diversity **where correlated failure would create unacceptable mission loss**, and judge diversity by failure independence rather than branding or contract count.

## Claim boundaries

The chapter does not claim:

- that NATO's PBN is insecure or excessively centralized;
- that NATO currently relies on one identity provider, cloud region, model family, or software component across all Allies;
- that every shared service requires a nationally sovereign duplicate;
- that Zero Trust eliminates compromise;
- that diverse model families necessarily produce independent errors;
- that PACE language proves every NATO mission has a working alternate, contingency, and emergency path.

The chapter does claim that current NATO architecture documents themselves recognize the need to combine standardization and interoperability with Zero Trust, diversification, degraded operation, and alternatives—and that this tension provides a stronger empirical basis for the chapter than a generic warning about network attack surface.

## Editorial effect

The revision removes the previous stack of named devices—blast-radius budget, dependency-centrality map, graceful-degradation ladder, trust-zone state machine, model-dependency ledger, resilience ledger, political service levels—and lets a smaller set of mechanisms carry the argument: common-mode failure, provenance, degraded operation, repair authority, supplier dependency, and failure independence.

The retained falsification condition is substantive: if tighter standardization repeatedly proves easier to defend and recover than deliberately heterogeneous alternatives, the architecture should standardize more. Resilience is treated as an empirical property, not a doctrine.