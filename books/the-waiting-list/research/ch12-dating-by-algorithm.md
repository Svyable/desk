# Chapter 12 research — Dating by Algorithm

Checked September 3, 2026.

## Core claim

Dating apps are not centralized stable-matching mechanisms. They are reciprocal recommendation markets in which the platform controls exposure, users reveal preferences incrementally, and the ranking system can affect the preferences and outcomes it later observes.

The strongest evidence for the chapter is not that commercial dating apps have adopted Gale–Shapley. It is that reciprocal recommendation creates a different optimization problem from ordinary one-sided recommendation: showing many users the same apparently desirable profile can maximize predicted clicks while producing congestion, low response rates, and fewer mutual matches.

## Verified evidence

- **Hinge, Most Compatible (current help documentation, updated Dec. 23, 2025).** Hinge says Most Compatible is generally one daily recommendation based on mutual Dealbreakers, recent activity, and shared patterns in whom the user and others tend to like. This supports the chapter's claim that current Hinge recommendations use reciprocal constraints and behavioral patterns rather than a one-time submitted ranking. Source: https://help.hinge.co/hc/en-us/articles/360011233073-What-is-Most-Compatible
- **Hinge, We Met? (updated Jan. 22, 2026).** Hinge says post-date feedback about whether users met and wanted another date can inform future recommendations. This supports the feedback-loop discussion. Source: https://help.hinge.co/hc/en-us/articles/360010692913-What-is-We-Met
- **Hinge, Preferences / Dealbreakers (updated Dec. 23, 2025).** Hinge distinguishes hard Dealbreakers from softer preferences that may be relaxed in recommendations. This is a clean institutional example of hard constraints versus soft ranking signals. Source: https://help.hinge.co/hc/en-us/articles/360011063294-How-do-I-set-my-Dating-Preferences
- **Chen, Hsieh & Lin (International Economic Review, 2023), “Reducing Recommendation Inequality via Two-Sided Matching: A Field Experiment of Online Dating.”** The authors ran a one-month randomized field experiment involving 690,857 registered accounts on a dating platform. Their matching-informed recommender reduced recommendation concentration and produced 5,729 mutual-like pairs during the experiment, 1.5 times the count under their one-sided OLS recommender and 1.2 times the platform control. The paper is especially useful because it separates one-sided click prediction from reciprocal feedback and final mutual matches. Source: https://doi.org/10.1111/iere.12631
- **Ma & Gajos (CHI 2022), “Not Just a Preference: Reducing Biased Decision-Making on Dating Websites.”** In a simulated online-dating experiment, interface design changed the degree to which racial bias affected choices; presenting substantive profile information before name/photo reduced bias in the study. The chapter uses this narrowly to establish that interface design can mediate expressed preference, not to claim a measured effect for any commercial app. Source: https://www.eecs.harvard.edu/~kgajos/papers/2022/ma2022preference.shtml
- **Feliciano & Robnett / Social Forces (2011), “Patterns of Racial-Ethnic Exclusion by Internet Daters.”** Profile data from U.S. online daters show structured racial and gender patterns in stated exclusion. Used only to establish that online dating preferences are socially patterned and therefore potentially consequential when recommender systems learn from them. Source: https://doi.org/10.1093/sf/89.3.807
- **Ershov, Fong & Yildirim (NBER Working Paper 34757, Jan. 2026), “What Happens When Dating Goes Online? Evidence from U.S. Marriage Markets and Health Outcomes.”** The authors build county-level measures of online-dating use for desktop platforms in 2002–2013 and mobile apps in 2017–2023 and estimate different associations across the two eras, including changes in marriage, divorce, and assortative matching. The paper is useful as evidence that platform form and search technology can change market-level matching patterns, but it remains a working paper using observational county-level identification rather than a randomized experiment on a named app. Source: https://www.nber.org/papers/w34757
- **Tinder 2026 product materials.** Tinder announced expanded AI-assisted matching at its March 2026 product keynote. Used only as current company evidence that ranking/matching systems continue to evolve; company claims about product effectiveness are treated as interested claims. Source: https://www.tinderpressroom.com/

## What the 2023 field experiment does and does not establish

The Chen, Hsieh, and Lin experiment gives the chapter a concrete mechanism result that is stronger than a generic claim that “algorithms matter.” Their control, one-sided OLS recommender, and matching-informed OLS-CS recommender faced the same broad product environment while differing in recommendation logic. The matching-informed treatment increased coverage, reduced concentration, improved reciprocal feedback on important measures, and generated more mutual-like pairs in that setting.

The congestion mechanism is the key transferable insight. A one-sided recommender can repeatedly surface a small set of profiles because each recommendation looks individually likely to earn a click. But a profile receiving many recommendations has finite attention and may reciprocate only a small fraction. The platform can therefore increase predicted one-sided interest while decreasing the number of distinct users who receive realistic opportunities for reciprocal attention.

That does not mean equal exposure is always the correct objective. The paper's treatment deliberately redistributes recommendation opportunity, and a commercial platform could reasonably care about other outcomes: user safety, preference fit, response quality, geographic feasibility, retention, or the probability that a conversation continues. Nor does the experiment prove the same quantitative effect would appear on Hinge, Tinder, Bumble, or in a different country, demographic mix, or gender balance.

The durable point is narrower and more useful for the book: on a two-sided platform, maximizing the probability that one person likes a recommendation is not generally the same problem as maximizing successful reciprocal matches.

## Counterevidence and limits

- Recommendation is not assignment. A dating platform generally controls which profiles are surfaced and in what order, but it does not compel mutual acceptance or produce a stable terminal allocation.
- A matching-informed recommender that reduces exposure inequality can still make paternalistic choices about whom users should see and may sacrifice some one-sided prediction accuracy or other platform objectives.
- Observed preference is endogenous to the menu and interface. A platform can only learn from choices it allowed the user to face.
- Racial or other social disparities in online dating should not automatically be attributed to an algorithm. User preferences, local demographics, platform design, paid visibility, and the ranking system can all contribute.
- Commercial incentives are mixed. Retention can reward continued use, while poor match quality can also drive churn; successful offline relationships can benefit reputation while removing users from the product.
- Market-level evidence from online-dating adoption does not identify the effect of one production recommender. The 2026 NBER paper studies changes associated with platform adoption and search technology at county scale, not the causal effect of Hinge's, Tinder's, or another app's current ranking system.

## Falsification notes

The chapter should be revised if evidence shows that a named app's current system is materially different from the public documentation cited here. In particular, do not describe Hinge as literally running Gale-Shapley or any other stable-marriage algorithm unless the company publishes a current technical statement establishing that fact.

Do not state that Tinder currently ranks users with a single Elo score. Public descriptions have changed over time and the chapter uses that history only to illustrate how users compress opaque recommender systems into simple folk theories.

Do not generalize the Taiwan field experiment's exact effects to all dating apps or populations. The 5,729 matched-pair result and the 1.5x / 1.2x comparisons belong to that platform, experiment, treatment definition, and one-month window. The durable claim is narrower: two-sided reciprocal objectives can produce different allocation outcomes from one-sided popularity or click prediction.

Treat the January 2026 NBER paper as working-paper evidence rather than settled consensus. Its desktop/mobile differences are useful for showing that “online dating” is not one fixed treatment, but those estimates should not be converted into claims about the causal effect of a specific commercial recommendation algorithm.
