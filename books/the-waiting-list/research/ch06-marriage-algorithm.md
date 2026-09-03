# Chapter 6 research note — The Marriage Algorithm

Checked September 3, 2026.

## Claim under test

Chapter 6 explains deferred acceptance as a stable-matching mechanism and uses the original Gale–Shapley result to show that mechanism details can distribute advantage even when the algorithm is mathematically well defined.

The chapter's core claims are supported by the original 1962 paper and later incentive results, but four boundaries matter: stability is not the same thing as fairness, stable matchings need not be unique, which side proposes changes the distribution of outcomes within the stable set, and incentive protection is asymmetric rather than universal.

## Primary anchors

David Gale and Lloyd Shapley's 1962 paper defines the stable-marriage and college-admissions problems, introduces deferred acceptance, proves existence of a stable matching, and establishes the proposer-favoring structure of the classic mechanism.

Source: David Gale and Lloyd S. Shapley, “College Admissions and the Stability of Marriage,” *American Mathematical Monthly* 69(1), 1962: https://doi.org/10.1080/00029890.1962.11989827

Dubins and Freedman’s 1981 result gives the proposer side a stronger incentive interpretation: under the Gale–Shapley procedure, students/proposers cannot improve their outcome by lying about their preferences when the other side is held fixed, and the paper also studies coalition manipulation. This supports the manuscript’s claim that a mechanism can make truthful reporting safer for one side without making strategic behavior disappear everywhere.

Source: Lester E. Dubins and David A. Freedman, “Machiavelli and the Gale-Shapley Algorithm,” *American Mathematical Monthly* 88(7), 1981, 485–494: https://doi.org/10.1080/00029890.1981.11995301

Roth’s 1982 *Mathematics of Operations Research* paper makes the asymmetry explicit. It shows that no matching procedure can simultaneously guarantee stable outcomes and truthful revelation incentives for all participants in the general two-sided matching problem, while stable procedures can give all agents on one side the incentive to report truthfully. This is the strongest primary anchor for the chapter’s statement that the dream of a universally manipulation-proof stable mechanism is unavailable.

Source: Alvin E. Roth, “The Economics of Matching: Stability and Incentives,” *Mathematics of Operations Research* 7(4), 1982, 617–628: https://doi.org/10.1287/moor.7.4.617

The Royal Swedish Academy's 2012 prize materials distinguish Shapley's theoretical work on stable allocations from Alvin Roth's empirical and institutional work showing how market rules behave in practice. That distinction is important to the manuscript because the book is about designed institutions, not merely the existence theorem.

Source: Royal Swedish Academy of Sciences, 2012 prize documentation: https://www.nobelprize.org/prizes/economic-sciences/2012/press-release/

Roth's Nobel lecture emphasizes the distance between an abstract mechanism and a working market institution: preferences must be elicited, strategic incentives understood, operational constraints incorporated, and real participants persuaded to use the system.

Source: Alvin E. Roth, “The Theory and Practice of Market Design,” Nobel lecture, 2012: https://www.nobelprize.org/uploads/2018/06/roth-lecture.pdf

## Counterevidence and falsification

A stable outcome can still be objectionable on distributional grounds. The absence of a blocking pair means no unmatched pair would both prefer one another to their assigned partners; it does not mean the outcome maximizes aggregate welfare, equalizes satisfaction, or treats both sides symmetrically.

The chapter would overstate the mathematics if it implied that deferred acceptance discovers a uniquely fair answer. Multiple stable matchings may exist, and proposer-optimality is itself a policy-relevant distributional choice.

Strategy-proofness for proposers also should not be translated into a claim that nobody can ever gain from strategic behavior in a real deployment. The theoretical protection depends on the mechanism and the modeled preference environment. Receiving-side participants may still face strategic incentives, priorities can be manipulated upstream, and real institutions may add couples, quotas, ties, eligibility constraints, or other features not present in the stripped-down marriage model.

The practical case for deferred acceptance weakens when reported preferences are poor proxies for welfare, priorities upstream of the algorithm are unjust, or participants face constraints that the preference model does not represent.

## Prose boundaries

- Keep “stable” distinct from “optimal” or “fair.”
- Do not imply the stable matching is always unique.
- Preserve the point that proposer choice matters.
- Attribute truthful-reporting protection to the relevant side and mechanism; do not call stable matching universally manipulation-proof.
- Do not let the clean hand-worked algorithm stand in for the institutional work required to deploy it.

## Readiness judgment

The chapter's theoretical architecture is now anchored not only in the original existence/stability result but also in the primary incentive literature. Its strongest countercase remains distributional and institutional: a mechanism can be stable, proposer-strategy-proof in the relevant model, and still embody contestable priorities or leave meaningful strategic and welfare questions elsewhere in the system. No manuscript correction is required from this evidence check.