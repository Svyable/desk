# Chapter 12 research — Dating by Algorithm

## Core claim

Dating apps are not centralized stable-matching mechanisms. They are reciprocal recommendation markets in which the platform controls exposure, users reveal preferences incrementally, and the ranking system can affect the preferences and outcomes it later observes.

## Verified evidence

- **Hinge, Most Compatible (current help documentation, updated Dec. 23, 2025).** Hinge says Most Compatible is generally one daily recommendation based on mutual Dealbreakers, recent activity, and shared patterns in whom the user and others tend to like. This supports the chapter's claim that current Hinge recommendations use reciprocal constraints and behavioral patterns rather than a one-time submitted ranking. Source: https://help.hinge.co/hc/en-us/articles/360011233073-What-is-Most-Compatible
- **Hinge, We Met? (updated Jan. 22, 2026).** Hinge says post-date feedback about whether users met and wanted another date can inform future recommendations. This supports the feedback-loop discussion. Source: https://help.hinge.co/hc/en-us/articles/360010692913-What-is-We-Met
- **Hinge, Preferences / Dealbreakers (updated Dec. 23, 2025).** Hinge distinguishes hard Dealbreakers from softer preferences that may be relaxed in recommendations. This is a clean institutional example of hard constraints versus soft ranking signals. Source: https://help.hinge.co/hc/en-us/articles/360011063294-How-do-I-set-my-Dating-Preferences
- **Chen, Hsieh & Lin (International Economic Review, 2023), “Reducing Recommendation Inequality via Two-Sided Matching: A Field Experiment of Online Dating.”** In a large randomized field experiment on a Taiwanese dating platform, a recommender inspired by a two-sided matching model reduced recommendation concentration and produced more mutual matches than comparison recommenders in that setting. The chapter uses this as evidence that one-sided predictive accuracy can create congestion and that reciprocal allocation can outperform a popularity-heavy recommender. Source: https://doi.org/10.1111/iere.12631
- **Ma & Gajos (CHI 2022), “Not Just a Preference: Reducing Biased Decision-Making on Dating Websites.”** In a simulated online-dating experiment, interface design changed the degree to which racial bias affected choices; presenting substantive profile information before name/photo reduced bias in the study. The chapter uses this narrowly to establish that interface design can mediate expressed preference, not to claim a measured effect for any commercial app. Source: https://www.eecs.harvard.edu/~kgajos/papers/2022/ma2022preference.shtml
- **Feliciano & Robnett / Social Forces (2011), “Patterns of Racial-Ethnic Exclusion by Internet Daters.”** Profile data from U.S. online daters show structured racial and gender patterns in stated exclusion. Used only to establish that online dating preferences are socially patterned and therefore potentially consequential when recommender systems learn from them. Source: https://doi.org/10.1093/sf/89.3.807
- **Ershov, Fong & Yildirim (NBER Working Paper 34757, Jan. 2026), “What Happens When Dating Goes Online?”** The paper uses county-level measures to estimate effects of online dating adoption on marriage, divorce, and assortative matching, with results differing between desktop and mobile eras. The chapter treats this as recent working-paper evidence, not settled consensus. Source: https://www.nber.org/papers/w34757
- **Tinder 2026 product materials.** Tinder announced expanded AI-assisted matching at its March 2026 product keynote. Used only as current company evidence that ranking/matching systems continue to evolve; company claims about product effectiveness are treated as interested claims. Source: https://www.tinderpressroom.com/

## Counterevidence and limits

- Recommendation is not assignment. A dating platform generally controls which profiles are surfaced and in what order, but it does not compel mutual acceptance or produce a stable terminal allocation.
- A matching-informed recommender that reduces exposure inequality can still make paternalistic choices about whom users should see and may sacrifice some one-sided prediction accuracy.
- Observed preference is endogenous to the menu and interface. A platform can only learn from choices it allowed the user to face.
- Racial or other social disparities in online dating should not automatically be attributed to an algorithm. User preferences, local demographics, platform design, paid visibility, and the ranking system can all contribute.
- Commercial incentives are mixed. Retention can reward continued use, while poor match quality can also drive churn; successful offline relationships can benefit reputation while removing users from the product.

## Falsification notes

The chapter should be revised if evidence shows that a named app's current system is materially different from the public documentation cited here. In particular, do not describe Hinge as literally running Gale-Shapley or any other stable-marriage algorithm unless the company publishes a current technical statement establishing that fact.

Do not state that Tinder currently ranks users with a single Elo score. Public descriptions have changed over time and the chapter uses that history only to illustrate how users compress opaque recommender systems into simple folk theories.

Do not generalize the Taiwan field experiment's exact effects to all dating apps or populations. The durable claim is narrower: two-sided reciprocal objectives can produce different allocation outcomes from one-sided popularity or click prediction.
