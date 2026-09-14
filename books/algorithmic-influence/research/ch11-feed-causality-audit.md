# Chapter 11 research audit — feed allocation versus persuasion

Checked 2026-09-13 for Chapter 11, “Campaigning for the Recommender.”

## Why this is worth tightening

The chapter already makes an important distinction between a recommender’s allocation power and its persuasion power. The best current experiments make that distinction stronger, but they also make a simple “algorithm on versus algorithm off” story harder to sustain. Feed interventions can change exposure substantially without moving some measured attitudes; in another platform and period, turning an algorithmic feed on changed both exposure and selected political attitudes. A newer 2026 experiment further shows that ranking design can reduce exposure to polarizing content and correct some perceived social norms without reducing user enjoyment.

The manuscript should therefore resist treating “the algorithm” as one stable political treatment. The causal object is a particular ranking rule, content supply, user population, platform state, and time period.

## Primary evidence

### X field experiment: algorithm on can change selected attitudes

Gauthier, Hodler, Widmer & Zhuravskaya, “The political effects of X’s feed algorithm,” *Nature* 652 (2026), 416–423.

https://doi.org/10.1038/s41586-026-10098-2

The independently run experiment randomized active U.S.-based X users to the platform’s algorithmic “For you” feed or chronological “Following” feed for roughly seven weeks in summer 2023. The main post-treatment sample contained 4,965 participants.

For participants initially using the chronological feed, assignment to the algorithmic feed increased engagement and shifted several measured outcomes in a conservative direction. The paper reports a 0.11 SD shift toward conservative policy priorities, a 0.08 SD increase in viewing the Trump investigations as unacceptable, and a 0.12 SD increase in pro-Kremlin attitudes regarding the war in Ukraine. The aggregate policy/current-news index moved 0.12 SD. The experiment found no significant effect on self-reported partisanship or affective polarization.

The content mechanism matters. Relative to the chronological condition, the algorithmic feed showed more conservative political content, fewer posts from traditional news organizations, and more posts from political activists. Users newly exposed to the algorithmic feed were also more likely to follow conservative activist accounts. Those follow decisions help explain why switching the algorithm off did not produce a symmetric reversal.

Boundary: this is evidence about X as configured in 2023 among active X users, not a timeless ideological property of recommender systems. The authors explicitly caution that platform algorithms can change and that effects depend on the platform and period. Compliance was largely self-reported, and the active-user sample does not automatically generalize to irregular users or the public.

### Meta chronological-feed experiments: exposure can move without the measured attitudes moving

The chapter’s Meta comparison should remain because it is genuine counterevidence rather than a foil. The 2020 U.S. election experiments found that replacing algorithmic ranking with reverse chronology substantially changed what consenting Facebook and Instagram users saw and reduced time spent on the platforms, while producing no statistically significant effects on several measured political attitudes and knowledge outcomes.

The X paper itself treats this earlier result as part of the puzzle and offers one plausible mechanism for the apparent difference: turning an algorithm off may fail to undo follow relationships and habits that earlier algorithmic exposure helped create. That mechanism is suggestive, not a complete reconciliation across platforms.

Primary reference used by the X paper: Guess et al., *Science* 381 (2023), 398–404. DOI: https://doi.org/10.1126/science.abp9364

### Bluesky/custom-feed experiment: ranking design is an intervention, not merely a source of harm

Brady et al., “Redesigning algorithms to intervene on social norm misperceptions during a national election,” *Nature* 655 (2026), 942–956.

https://doi.org/10.1038/s41586-026-10536-1

This experiment randomly assigned 2,000 participants to custom feed-ranking algorithms for eight weeks around the 2024 U.S. presidential election. A redesigned ranking treatment reduced exposure to intergroup, moralized, and emotional political content and improved some perceptions of social norms without reducing reported enjoyment.

This is important counterevidence for the chapter’s governance section. The choice is not exhausted by opaque engagement ranking versus chronology. Ranking systems can themselves be redesigned to pursue different exposure goals, and those interventions can be experimentally evaluated.

Boundary: a custom research feed is not evidence that the same result will persist at platform scale or under strategic adaptation by campaigns, creators, and users. The book’s recursive thesis predicts that successful interventions may change the behavior they are measuring.

## Strongest counterargument to the chapter

The strongest objection is not that algorithms are politically irrelevant. It is that the chapter risks attributing too much coherence to “the recommender.” Political outcomes emerge from ranking rules interacting with the available content, follow graph, user preferences, prior exposure, strategic production, and the platform’s current design. The 2026 X experiment is powerful precisely because it identifies a causal effect in one configuration; its external-validity limits are part of the result, not an inconvenience to hide.

A second objection is normative. Algorithmic ranking is not necessarily a degradation from a neutral baseline. Chronology is also an allocation rule, and a deliberately redesigned recommender can sometimes improve the information environment on measured dimensions. The policy question is therefore not simply whether to rank, but which objectives, constraints, user controls, audits, and recourse mechanisms govern ranking.

## Sharper manuscript claim

A defensible version of Chapter 11’s core argument is:

> Political recommenders have demonstrable allocation power, and under some platform conditions that allocation can causally change selected political attitudes and durable follow behavior. The magnitude, direction, and persistence of persuasion are empirical properties of a particular system and moment, not universal properties of algorithmic ranking.

That formulation preserves the chapter’s thesis while making the counterevidence do real work.

## Suggested future prose move

If Chapter 11 receives a manuscript pass, compress the current Meta/X discussion into one consequential experimental sequence rather than several slogan-like reversals. The useful narrative tension is that changing the feed clearly changes the information environment, but attitude effects are conditional and asymmetric. Then use the 2026 redesigned-feed experiment to complicate the governance section: recommendation is not one treatment, and chronology is not the only alternative.

Do not add another platform catalog. Three experiments are enough if each performs a distinct argumentative job: Meta for exposure-without-attitude movement, X for causal attitude movement under one real platform configuration, and the redesigned feed for the possibility of changing the ranking objective itself.

## Falsification / update conditions

Narrow the chapter further if preregistered replications fail to reproduce the X attitude effects under comparable conditions, if effects disappear under objective compliance measurement, or if broader samples show the result is confined to a small high-use subgroup. Strengthen the causal claim only if independent experiments across platforms and periods repeatedly show that specified ranking changes alter downstream attitudes or behavior with stable effect sizes and known mechanisms.

For the book’s larger recursive thesis, the especially valuable evidence would track how campaigns and other political producers change content after ranking rules change. User-side feed experiments establish mediation and sometimes persuasion; they do not by themselves establish the full producer → recommender → audience → producer feedback loop.