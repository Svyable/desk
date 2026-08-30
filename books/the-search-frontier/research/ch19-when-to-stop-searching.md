# Chapter 19 research — When to Stop Searching

## Research spine

- Herbert A. Simon, “A Behavioral Model of Rational Choice,” *The Quarterly Journal of Economics* 69(1), 1955, pp. 99–118, DOI 10.2307/1884852. Primary classic source, with bibliographic record also preserved in Carnegie Mellon University’s Herbert Simon archive. Used for bounded rationality and the architecture behind aspiration-level / satisficing approaches to search under limited information and computation.
- Joseph D. Petruccelli, “Secretary Problem,” *Wiley StatsRef: Statistics Reference Online* (original encyclopedia entry 2006; republished 2014), with references to the foundational optimal-stopping literature including Chow, Moriguti, Robbins, and Samuels (1964) and Chow, Robbins, and Siegmund (1971). Used only to characterize the classic secretary problem as an intentionally stylized sequential-choice model and to motivate the broader learn-then-commit architecture. The chapter deliberately avoids presenting the familiar ~37% rule as practical advice outside its assumptions.
- U.S. Food and Drug Administration, “Guidance for the Use of Bayesian Statistics in Medical Device Clinical Trials.” Authoritative regulatory guidance. Used for the bounded claim that prespecified predictive probabilities at interim points can support stopping a planned trial for likely success or for futility, subject to the design assumptions described by FDA. Re-verified on 2026-08-30.
- David A. Seale and Amnon Rapoport, “Optimal stopping behavior with relative ranks: the secretary problem with unknown population size,” *Journal of Behavioral Decision Making* 13(4), 2000, pp. 391–411. Behavioral experiment and modeling paper. Used as counterevidence to simplistic claims that humans naturally implement optimal stopping rules; the study reports that subjects in its experimental setting tended to stop earlier than the modeled optimum.

## Claims kept deliberately narrow

The chapter does not claim that Simon’s 1955 paper supplies a single universal stopping rule. It uses bounded rationality to motivate the need for aspiration levels and finite search when exhaustive optimization is impossible or costly.

The secretary problem is presented as a teaching model, not a hiring algorithm. The text explicitly names the assumptions that make its classic solution possible: known sequence length, random order, relative ranking, no recall, a single objective, and stylized search costs.

The FDA example is used to illustrate prespecified stopping criteria and interim evidence, not to recommend a particular clinical-trial design or to generalize medical-device guidance to every drug or biomedical study.

The discussion of staged funding, pilots, and organizational stopping is analysis. It does not claim that stage gates reliably kill weak projects or preserve strong ones; political incentives, noisy evidence, and path dependence can distort those mechanisms.

## Falsification / counterevidence note

The strongest counterargument is that explicit stopping rules can terminate valuable searches prematurely when evidence is noisy, delayed, or regime-dependent. The chapter preserves this by treating thresholds as reference points rather than substitutes for judgment and by arguing that stopping rules must depend on consequence, reversibility, and feedback speed.

A second counterargument is that continued search can change the option set rather than merely sample a fixed one. Candidates learn, technologies improve, competitors move, and preferences evolve. The chapter therefore rejects direct application of fixed-option optimal-stopping models to most real institutions.

A third counterargument is that “satisficing” can become an excuse for low standards. The chapter's position is narrower: a threshold is defensible only when the marginal expected information from further search is priced against delay and foregone action, not simply when a decision-maker becomes tired.
