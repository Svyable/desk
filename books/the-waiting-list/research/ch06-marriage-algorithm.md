# Chapter 6 research note — The Marriage Algorithm

Checked September 2, 2026.

## Claim under test

Chapter 6 explains deferred acceptance as a stable-matching mechanism and uses the original Gale–Shapley result to show that mechanism details can distribute advantage even when the algorithm is mathematically well defined.

The chapter's core claims are supported by the original 1962 paper and Nobel-era retrospectives, but three boundaries matter: stability is not the same thing as fairness, stable matchings need not be unique, and which side proposes changes the distribution of outcomes within the stable set.

## Primary anchors

David Gale and Lloyd Shapley's 1962 paper defines the stable-marriage and college-admissions problems, introduces deferred acceptance, proves existence of a stable matching, and establishes the proposer-favoring structure of the classic mechanism.

Source: David Gale and Lloyd S. Shapley, “College Admissions and the Stability of Marriage,” *American Mathematical Monthly* 69(1), 1962: https://doi.org/10.1080/00029890.1962.11989827

The Royal Swedish Academy's 2012 prize materials distinguish Shapley's theoretical work on stable allocations from Alvin Roth's empirical and institutional work showing how market rules behave in practice. That distinction is important to the manuscript because the book is about designed institutions, not merely the existence theorem.

Source: Royal Swedish Academy of Sciences, 2012 prize documentation: https://www.nobelprize.org/prizes/economic-sciences/2012/press-release/

Roth's Nobel lecture emphasizes the distance between an abstract mechanism and a working market institution: preferences must be elicited, strategic incentives understood, operational constraints incorporated, and real participants persuaded to use the system.

Source: Alvin E. Roth, “The Theory and Practice of Market Design,” Nobel lecture, 2012: https://www.nobelprize.org/uploads/2018/06/roth-lecture.pdf

## Counterevidence and falsification

A stable outcome can still be objectionable on distributional grounds. The absence of a blocking pair means no unmatched pair would both prefer one another to their assigned partners; it does not mean the outcome maximizes aggregate welfare, equalizes satisfaction, or treats both sides symmetrically.

The chapter would overstate the mathematics if it implied that deferred acceptance discovers a uniquely fair answer. Multiple stable matchings may exist, and proposer-optimality is itself a policy-relevant distributional choice.

The practical case for deferred acceptance weakens when reported preferences are poor proxies for welfare, priorities upstream of the algorithm are unjust, or participants face constraints that the preference model does not represent.

## Prose boundaries

- Keep “stable” distinct from “optimal” or “fair.”
- Do not imply the stable matching is always unique.
- Preserve the point that proposer choice matters.
- Do not let the clean hand-worked algorithm stand in for the institutional work required to deploy it.

## Readiness judgment

The chapter's theoretical architecture is well anchored. Its strongest countercase is distributional rather than mathematical: a mechanism can be stable and still embody contestable priorities. No manuscript correction is required from this check.