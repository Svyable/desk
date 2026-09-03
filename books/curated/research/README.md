# Research Brief

## Thesis under test

*Curated* asks what happens to human preference once the sorting of options — songs, partners, news, prices, purchases — is delegated to a machine optimizing for something other than the chooser's own satisfaction, and what changes again once that machine stops merely suggesting and starts deciding.

The weak version of the argument — "algorithms manipulate us and always have" — is too broad to test. The version worth defending is narrower:

> Recommendation systems did not invent human suggestibility, but they industrialized it: they made the sorting of choice cheap, continuous, personalized, and largely invisible, and they were built to optimize engagement, purchase, or retention rather than the chooser's independently stated goals. Agentic AI — software empowered to search, decide, and transact on a person's behalf — completes that shift by removing the moment of comparison altogether.

The book should survive contact with the strongest counter-evidence: that curation solves a real and worsening abundance problem, that several of the most-feared effects (filter bubbles, algorithmic radicalization, echo chambers) are more limited or more self-selected than the popular version of the story claims, and that some algorithmic systems demonstrably increase satisfaction, discovery, and welfare relative to unaided choice.

## Core empirical tests

1. **The abundance problem is real.** How does measured choice overload (jam-study-style findings and their replications) compare with catalog growth on platforms like Spotify, Netflix, and Amazon?
2. **Collaborative filtering's actual mechanism.** What did the foundational recommender-systems research (GroupLens, Amazon's item-to-item patent, Netflix Prize) actually claim, and how does that differ from the popular "black box knows you" framing?
3. **Engagement optimization and its side effects.** What do platforms' own disclosed ranking-signal changes (Facebook's 2018 "meaningful social interactions" pivot, YouTube's 2016 deep-learning recommender paper) say about the objective function being optimized, and what independent research exists on downstream effects?
4. **Filter bubble evidence, both directions.** What do the main empirical studies (Bakshy/Messing/Adamic 2015, Flaxman/Goel/Rao 2016, Möller et al. 2018) actually find, including the ways they complicate Eli Pariser's original 2011 claim?
5. **Radicalization-pathway evidence, both directions.** What do the strongest claims (Chaslot's AlgoTransparency, Mozilla's RegretsReporter, Ribeiro et al. 2020) and the strongest rebuttals (Hosseinmardi et al. 2021 PNAS) each show, and where do they actually disagree?
6. **Price personalization.** What did the 2012 Wall Street Journal Staples investigation and the 2000 Amazon DVD-pricing episode actually document, and how has dynamic/personalized pricing evolved since?
7. **Design for compulsion.** What does the peer-reviewed and historical record on variable-ratio reinforcement (Skinner) and slot-machine design (Schüll's field research) support about deliberate engagement engineering in consumer software, and where does that analogy overreach?
8. **The agentic-commerce transition.** What has actually shipped as of the research date — ChatGPT's Instant Checkout, Perplexity's shopping features, Amazon's Rufus, Google's Project Mariner/Agentspace work, Visa's Trusted Agent Protocol, Mastercard's Agent Pay, the Agent Payments Protocol (AP2) — versus what remains a roadmap claim?
9. **Regulatory response.** What does the EU Digital Services Act (Article 27) actually require of large platforms' recommender-system transparency, and what has changed in practice since it took effect?
10. **Counter-movements.** What is the actual scope and durability of "de-influencing," algorithm-optional product design, and human-curation businesses, versus their media visibility?

## Falsification and counter-evidence to preserve

- Curation is frequently a rational, welfare-improving response to genuine abundance, not a manipulation imposed on a satisfied audience that wanted to browse everything unaided.
- Several headline "filter bubble" findings are weaker or more conditional than their popular retellings; self-selection (choosing which sources and friends to have in the first place) explains a large share of the ideological sorting attributed to algorithms.
- Some recommendation systems measurably increase satisfaction and reduce search costs (a large majority of Netflix and Spotify plays come from recommended rather than searched-for content, by the companies' own account), which is evidence of function, not just manipulation.
- The "engagement equals addiction" framing understates the number of users who report neutral or positive experiences and overstates the uniformity of platform objective functions, which have changed multiple times, sometimes explicitly to reduce time-on-site.
- Agentic commerce could increase consumer welfare by lowering search and negotiation costs, not only reduce it by removing comparison; the honest position is that the outcome depends on who the agent is built to represent and how that is disclosed and enforced.
- Human curators have their own well-documented biases, gatekeeping failures, and payola-adjacent incentives (radio's historical payola scandals, biased film and restaurant criticism); "bring back the human gatekeeper" is not automatically the corrective it is often presented as.
- Cultural homogenization claims (identical cafés, identical playlists) compete with counter-evidence of continued local distinctiveness and algorithmically enabled niche and long-tail discovery.

## Evidence lanes

### I. The abundance problem
Choice-overload research (Iyengar & Lepper 2000 and its replications and critiques), Barry Schwartz's *The Paradox of Choice*, and catalog-growth data for major platforms as the demand-side reason curation infrastructure exists at all.

### II. The machinery of recommendation
The academic and patent record: GroupLens's early collaborative-filtering work, Linden/Smith/York's Amazon.com item-to-item collaborative filtering (IEEE Internet Computing, 2003), the Netflix Prize (2006–2009), Covington/Adams/Sargin's YouTube deep-learning recommender paper (RecSys 2016), and Spotify's public engineering disclosures about Discover Weekly and its 2014 Echo Nest acquisition.

### III. Platform ranking history and disclosed objective functions
Facebook/Meta's own announcements about News Feed ranking changes, including the January 2018 "meaningful social interactions" shift; YouTube's public statements about optimizing first for watch time and later adding satisfaction/well-being signals; reporting on TikTok's For You algorithm (the Wall Street Journal's 2021 reverse-engineering investigation).

### IV. Filter bubbles and ideological sorting: the empirical record
Eli Pariser's *The Filter Bubble* (2011) as the originating popular claim; Bakshy, Messing & Adamic (*Science*, 2015); Flaxman, Goel & Rao (*Public Opinion Quarterly*, 2016); Möller et al. (2018) and subsequent replication debates; Guess, Nyhan, Lyons & Reifler and related work on the actual concentration of exposure to false or hyperpartisan content among a small subset of users.

### V. Recommendation and radicalization: claim and rebuttal
Zeynep Tufekci's reporting and essays on YouTube; Guillaume Chaslot's AlgoTransparency project; the Mozilla Foundation's RegretsReporter findings; Ribeiro et al.'s 2020 "Auditing radicalization pathways on YouTube"; and the countervailing Hosseinmardi et al. 2021 PNAS study using real browsing-panel data, plus YouTube's own account of post-2019 borderline-content policy changes.

### VI. Personalized and dynamic pricing
The Wall Street Journal's 2012 Staples.com investigation (Valentino-DeVries, Singer-Vine & Soltani); the 2000 Amazon DVD differential-pricing controversy and Amazon's public response; academic price-discrimination literature (Acquisti and Varian; the FTC's 2021 personalized-pricing study/workshop record).

### VII. Engagement design and behavioral psychology
B.F. Skinner's operant-conditioning research on variable-ratio reinforcement; Natasha Schüll's *Addiction by Design* (2012) on slot-machine engineering in Las Vegas; the design history of the infinite scroll and the pull-to-refresh gesture; the public record of Tristan Harris's and the Center for Humane Technology's critique, including where designers of these features (e.g., infinite scroll co-creator Aza Raskin) have since qualified or revised their own claims.

### VIII. Preference formation and identity
Robert Zajonc's mere-exposure effect research (1968 and later replications); Martin Lindstrom's *Buyology* neuromarketing fieldwork; consumer-identity and ritual research in marketing psychology; behavioral-economics work on default effects (Thaler & Sunstein) as a non-algorithmic ancestor of algorithmic nudging.

### IX. The agentic-commerce transition
Company documentation and contemporaneous reporting on OpenAI's ChatGPT Instant Checkout and Agentic Commerce Protocol (2025), Perplexity's shopping/Comet Assistant features, Amazon's Rufus assistant, Google's Project Mariner and agentic shopping work, Visa's Trusted Agent Protocol, Mastercard's Agent Pay, and the jointly published Agent Payments Protocol (AP2, 2025); trade and business press coverage of early pilots and stated limitations.

### X. Regulation and counter-movement
The EU Digital Services Act, Article 27 (recommender-system transparency) and platform compliance reports; the FTC's 2019 COPPA settlement with YouTube/Google over children's data; TikTok's 2023 "de-influencing" trend as documented in trade and consumer press; the historical record of radio payola (the 1959–60 U.S. payola hearings) as a precedent for gatekeeper capture predating algorithms.

## Planned figures (descriptive, for future illustration)

1. **The abundance curve** — Spotify/Netflix/Amazon catalog size over time against a fixed unit of human browsing time.
2. **What Discover Weekly actually mixes** — a schematic of collaborative filtering, natural-language processing of music writing, and raw audio analysis as Spotify has publicly described it.
3. **The News Feed's changing objective function** — a timeline of Facebook's disclosed ranking-signal changes, 2006–2023.
4. **Filter bubble, measured two ways** — a side-by-side of Pariser's original framing and the Bakshy/Flaxman/Möller empirical findings.
5. **The radicalization dispute** — Ribeiro et al.'s pathway claim next to Hosseinmardi et al.'s panel-data rebuttal.
6. **Who set this price** — a reconstruction of the 2012 Staples geographic price-variation map as reported by the Wall Street Journal.
7. **The slot machine and the scroll** — a side-by-side comparison of a variable-ratio slot-machine payout schedule and a social-feed refresh, with the disanalogies noted.
8. **The agentic checkout stack, 2025–2027** — a timeline of shipped features and protocols (Instant Checkout, AP2, Trusted Agent Protocol, Agent Pay) against announced-but-unshipped roadmap claims.

## Chapter-to-evidence map

| Chapter | Primary research question |
|---|---|
| 1 — The Checkout With No One Watching | What does an agentic purchase already look like, and what does it quietly remove from the older shopping decision? |
| 2 — The Jam Table | Why does more choice reliably fail to make people happier, and how directly does that finding generalize? |
| 3 — Customers Who Bought This | What did the foundational collaborative-filtering research actually build, and how does the real mechanism differ from "the algorithm knows you"? |
| 4 — The Machine That Learned Your Ear | How does Spotify's recommendation stack combine listening data, text, and audio, and what does that imply about the durability of "taste"? |
| 5 — The Feed That Decided | What objective function has Facebook's News Feed actually optimized for, and how and why has that changed? |
| 6 — Up Next | How does YouTube's recommender work, and what happened to watch time as the platform's stated priority? |
| 7 — The Elo of Desire | How do matching algorithms sort romantic attention, and what do platforms' own data disclosures show about the patterns that result? |
| 8 — The Cold Start Problem | Why is it structurally harder for something new to be found, and how did TikTok's design change that math? |
| 9 — Airspace | Is there real evidence of algorithmically driven aesthetic homogenization across cities, or is that claim doing more cultural-criticism work than data work? |
| 10 — The Slot Machine in Your Pocket | Which specific design mechanisms borrow from variable-ratio reinforcement, and where does the gambling analogy break down? |
| 11 — The Price That Was Watching You | What has been documented about personalized and dynamic online pricing, and what remains speculative? |
| 12 — The Bubble That Wasn't Quite There | What do the leading empirical studies actually find about ideological sorting, and how does that complicate the popular filter-bubble narrative? |
| 13 — The Taste You Thought Was Yours | What does psychological research on mere exposure and consumption ritual say about how repeated exposure becomes felt preference? |
| 14 — The Agent Who Shops for You | What agentic-commerce infrastructure has actually shipped, and what does it change about the moment of choosing? |
| 15 — Negotiating With No One | What happens to price discovery and bargaining power when both sides of a transaction can be software? |
| 16 — The De-influencing | How large and durable is the documented backlash to algorithmic overconsumption? |
| 17 — Children of the Algorithm | What does the regulatory and research record show about algorithmic content and children specifically? |
| 18 — The Taste of a Nation | How do recommender systems differ across jurisdictions, and what has transparency regulation actually changed? |
| 19 — An Algorithm You Would Defend | What design and governance choices are documented to increase user trust and satisfaction with a recommender system? |
| 20 — What Wanting Will Mean | Given the weight of the preceding evidence, what is actually likely to change about human preference-formation as agentic commerce matures, and what genuinely is not new? |

## Source discipline

- Prefer company engineering blogs and disclosures, peer-reviewed papers, patents, regulatory filings and settlements, and contemporaneous investigative reporting with named sources over retrospective summaries.
- Record the publication date of every study and news investigation; recommender systems and platform policies change quickly enough that vintage matters.
- Distinguish a shipped, documented product feature from an announced roadmap claim or a single pilot; label each accordingly in the manuscript.
- Preserve counter-evidence and minority findings; do not resolve genuine academic disagreement (especially around filter bubbles and radicalization pathways) into a false consensus.
- Never invent a quotation, a statistic, or an attributed number. If a precise figure cannot be verified, describe the finding qualitatively and name the source instead of estimating a number.
- Distinguish correlational findings from causal claims explicitly, especially in the psychology and platform-effects chapters.
- For every chapter's central claim, keep a one-line note titled "What would make this false?" in that chapter's source file.
