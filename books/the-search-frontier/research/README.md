# Research Brief

## Thesis under test

*The Search Frontier* argues that many systems we describe as intelligent, innovative, strategic, adaptive, or lucky are better understood as search processes operating under severe constraints.

The strong claim — that better outcomes always come from searching more possibilities — is false. Search consumes time, attention, money, political capital, compute, laboratory capacity, and sometimes lives. More options can delay action, amplify noise, or make evaluation the bottleneck.

The narrower claim worth testing is this:

> When a possibility space is too large to inspect, outcomes depend heavily on the rules that determine what gets considered, how candidates are evaluated, what is learned from trials, and when search stops.

A second claim follows:

> Search policies are recursive. What a person or institution chooses to inspect changes the evidence, capabilities, incentives, and categories available to the next round of search.

The manuscript will test these claims across cognition, consumer behavior, firms, scientific research, venture capital, markets, standards, military strategy, organizational culture, innovation, artificial intelligence, and institutions.

## What would weaken the argument?

Evidence that should materially change the book includes:

- domains where near-exhaustive enumeration is cheap enough that search policy has little practical effect;
- evidence that organizational outcomes are explained mostly by execution quality after options are selected rather than by candidate generation and attention allocation;
- markets where decentralized search reliably discovers important alternatives without systematic financing, status, distribution, or information filters;
- research domains where increasing candidate generation produces proportional gains despite fixed verification capacity;
- cases where expert filtering does not create measurable blind spots when environments change;
- evidence that institutional memory generally improves search without also preserving stale exclusions or path dependence;
- AI systems in which cheap candidate generation also makes verification and evaluation proportionally cheap.

Counterexamples should remain visible in the manuscript rather than being explained away.

## Chapter 1 — The Room of Possible Moves

The opening chapter uses Claude Shannon's 1950 chess paper to establish the central constraint. Shannon estimated that typical chess positions offer on the order of thirty legal moves, producing roughly 10^120 game variations across a typical game and roughly 10^43 possible board positions. His practical conclusion was not that perfect search should be attempted, but that a useful machine must select promising branches and evaluate positions approximately.

That example supports the book's core distinction between possibility, attention, evaluation, and commitment. The chapter then generalizes cautiously to firms, consumers, science, institutions, careers, markets, and machine-generated options.

Herbert Robbins's 1952 paper on sequential experimental design supplies a second intellectual anchor: observations can change what is sampled next. That makes search recursive rather than passive. The chapter uses this only as conceptual background; later chapters will treat exploration/exploitation formally and with a broader source base.

## Chapter 1 source trail

1. Claude E. Shannon, “XXII. Programming a Computer for Playing Chess,” *Philosophical Magazine*, Series 7, vol. 41, no. 314 (1950), pp. 256–275. DOI: 10.1080/14786445008521796.
   - Primary source for the chess branching estimates, the impracticality of exhaustive calculation, approximate evaluation, and selective search strategies.
   - The paper states that typical positions have on the order of thirty legal moves; a White move plus Black reply yields about 10^3 possibilities; a typical game yields about 10^120 variations; possible positions are roughly 10^43.

2. Herbert Robbins, “Some Aspects of the Sequential Design of Experiments,” *Bulletin of the American Mathematical Society*, vol. 58, no. 5 (1952), pp. 527–535. DOI: 10.1090/S0002-9904-1952-09620-8.
   - Primary source for sequential experiment design in which later sampling decisions depend on earlier observations.

3. Computer History Museum, “Programming a Computer for Playing Chess,” artifact record for Shannon's 1950 paper.
   - Secondary institutional source used to verify bibliographic context and the paper's place in early computer-chess history.

## Chapter 5 — The Consumer in the Aisle

This chapter treats consumer choice as a constrained search problem rather than a morality play about rational versus irrational shoppers. Stigler supplies the economic baseline: information acquisition has a cost, so buyers sample rather than enumerate every seller or product. The chapter extends that logic to attention, familiarity, brand trust, recommendation systems, and the construction of a consideration set.

Iyengar and Lepper's 2000 experiments are used narrowly. Their findings support the proposition that larger choice sets can sometimes reduce action or satisfaction, but the chapter does not generalize the famous jam result into a universal law.

Chernev, Böckenholt, and Goodman's 2015 meta-analysis is the main counterweight. Across 99 observations (N=7,202), choice-overload effects depended on moderators including choice-set complexity, decision-task difficulty, preference uncertainty, and decision goals. The manuscript therefore frames overload as an interaction between assortment and search conditions, not as an automatic consequence of abundance.

The chapter's broader claims about recommendation systems and platforms are analytical rather than empirical claims about any specific company. Before release, later chapters that make platform-specific or contemporary assertions should add primary or authoritative sources for those systems rather than borrowing generalizations from this consumer-search chapter.

## Chapter 5 source trail

1. George J. Stigler, “The Economics of Information,” *Journal of Political Economy*, vol. 69, no. 3 (1961), pp. 213–225. DOI: 10.1086/258464.
   - Primary source for costly search and the idea that buyers do not possess all market information for free.

2. Sheena S. Iyengar and Mark R. Lepper, “When Choice Is Demotivating: Can One Desire Too Much of a Good Thing?”, *Journal of Personality and Social Psychology*, vol. 79, no. 6 (2000), pp. 995–1006. DOI: 10.1037/0022-3514.79.6.995.
   - Primary experimental source. The paper reports three studies in which more limited choice sets sometimes increased purchase, task completion, satisfaction, or performance relative to larger sets.

3. Alexander Chernev, Ulf Böckenholt, and Joseph Goodman, “Choice Overload: A Conceptual Review and Meta-Analysis,” *Journal of Consumer Psychology*, vol. 25, no. 2 (2015), pp. 333–358. DOI: 10.1016/j.jcps.2014.08.002.
   - Meta-analysis of 99 observations (N=7,202). Used to preserve the conditional nature of choice overload and identify moderators rather than treating assortment size as sufficient by itself.

## Source discipline

- Do not treat a large possibility space as proof that every domain resembles chess.
- Distinguish search cost from execution cost.
- Distinguish candidate generation from candidate evaluation.
- Do not imply that more exploration is always better.
- Preserve the possibility that stable environments reward narrow expert search.
- Treat culture, incentives, status, and institutions as candidate filters only where evidence supports that mechanism.
- In AI chapters, separate cheap generation from real-world verification costs and re-check contemporary claims before release.
- Do not use retrospective success stories as evidence that the winning branch was obvious ex ante.
- Do not present the jam experiment as proof that large assortments are generally harmful; preserve moderator evidence and contrary conditions.

## What would make the whole book false?

The book's strongest conclusion would weaken substantially if search architecture turned out to explain little once resources, execution quality, and underlying opportunity are controlled — or if modern systems could cheaply enumerate and verify relevant alternatives well enough that attention allocation no longer constrained outcomes.
