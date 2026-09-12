# Chapter 13 audit — answer-engine traffic, citation, and the missing click

## Why this audit exists

Chapter 13 has the right structural idea: an answer engine can let a source influence an answer without receiving the visit that conventional search once made economically useful. The current prose, however, mostly argues that point from interface logic. There is now enough measured behavior to make the change concrete without pretending the traffic question is settled.

The strongest currently available evidence also produces a useful disagreement. Pew Research Center observes substantially fewer outbound clicks on Google result pages that contain an AI summary. Google, looking at its own aggregate traffic, says total organic click volume from Search remained relatively stable year over year and that the clicks it does send have become higher quality. Those findings should sit beside one another. They measure different objects, use different data, and do not collapse into a clean winner.

## 1. The measured user-behavior result

Pew Research Center published a browsing-data analysis on July 22, 2025 using 900 U.S. adults in KnowledgePanel Digital who had agreed to install tracking software. The underlying March 2025 browsing record contained 68,879 unique Google searches. Pew later reran the same queries through a scraping service to identify whether the result pages contained AI summaries and which links appeared.

For the searches classified as having an AI summary:

- users clicked a traditional search-result link after 8% of visits;
- users clicked a source link inside the AI summary after only 1% of visits;
- users ended the browsing session after 26% of visits.

For result pages without an AI summary:

- users clicked a traditional search-result link after 15% of visits;
- users ended the browsing session after 16% of visits.

Source: Pew Research Center, Athena Chapekis and Anna Lieb, **“Google users are less likely to click on links when an AI summary appears in the results,”** July 22, 2025: https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/

### What this establishes

It is direct behavioral evidence for the chapter's most important economic distinction: appearing in or contributing to an answer can be separated from receiving a visit. On the observed Google queries, an AI-summary page was associated with roughly half the traditional-result click rate of a page without one, while clicks on the summary's own cited sources were rare.

### What it does not establish

This is not a randomized experiment showing that the AI summary *caused* the entire click difference. Queries that trigger summaries differ systematically from those that do not. Pew itself found that longer queries, questions, and full-sentence searches were much more likely to produce AI summaries, and those query types may have different click behavior even without a summary.

There is also an exposure-reconstruction limitation worth keeping visible. The browsing behavior was recorded in March 2025, while Pew recreated the search-result pages from April 7–17, 2025. AI summaries and rankings can change over time, so the reconstructed page is not proof of the exact result page each panelist saw at the moment of the original search.

Safe manuscript language: **“In Pew's 2025 browsing sample, searches later classified as showing an AI summary were followed by substantially fewer outbound clicks.”**

Avoid: **“AI Overviews cut publisher clicks in half.”** The design does not identify that causal effect.

## 2. Google's counterclaim

On August 6, 2025, Google published its own account of Search traffic after the expansion of AI Overviews. Google said total organic click volume from Search to websites was “relatively stable” year over year and said it was sending slightly more “quality clicks,” which it defined as visits where users do not quickly return to Google. The company also argued that AI features allow people to ask more and more-complex questions.

Source: Liz Reid, Google, **“AI in Search is driving more queries and higher quality clicks,”** August 6, 2025: https://blog.google/products-and-platforms/products/search/ai-search-driving-more-queries-higher-quality-clicks/

A separate Google product update on May 20, 2025 said AI Overviews were available in more than 200 countries and territories and more than 40 languages, and that in the U.S. and India they were associated with more than a 10% increase in Google usage for query types where AI Overviews appear.

Source: Google, **“AI Overviews expand to over 200 countries and territories, more than 40 languages,”** May 20, 2025: https://blog.google/products-and-platforms/products/search/ai-overview-expansion-may-2025-update/

### Why this does not simply refute Pew

Pew measures what a sampled user does after an individual search page. Google describes aggregate click volume across a changing quantity and mix of searches. It is entirely possible for the click-through probability on one class of result page to fall while total outbound clicks stay roughly flat if people conduct more searches, if query mix changes, or if other classes of searches produce more clicks.

Google's “quality click” metric is also a company-defined measure and the public post does not provide the underlying distribution needed to reproduce the claim independently. It belongs in the book as serious counterevidence, not as adjudication.

The useful unresolved question is therefore not “who is right?” but **which denominator matters to a publisher**: clicks per answer-bearing query, total clicks from the platform, referrals to a particular class of sites, or economically valuable visits after synthesis has already done part of the user's work.

## 3. The original GEO result needs a tighter boundary

The chapter accurately notes that the research associated with **Generative Engine Optimization (GEO)** showed that presentation can change source visibility in generated answers. The originating work by Aggarwal et al., first posted in 2023 and subsequently published in the KDD 2024 research cycle, introduced GEO-bench and reported visibility improvements of up to roughly 40% under its experimental setup.

Source: Pranjal Aggarwal et al., **“GEO: Generative Engine Optimization,”** arXiv:2311.09735: https://arxiv.org/abs/2311.09735

The important claim boundary is already implicit in Chapter 13 and should become explicit if the prose is revised:

- the paper demonstrates that controlled changes to source text can change visibility under tested generative-engine configurations;
- the effect varies by domain and strategy;
- visibility in a generated response is not the same outcome as citation;
- citation is not the same outcome as referral traffic;
- none of those outcomes is the same as conversion, trust, or long-run publisher welfare;
- a black-box production engine that changes models, retrieval, prompting, citation policy, or source-selection rules can invalidate a stable optimization recipe.

The chapter should therefore resist treating “GEO” as the successor profession to SEO before the measurement object is named. A publisher can optimize for at least four distinct things: **retrieval, inclusion, citation, and click-through**. A tactic that helps one can fail to help another.

## 4. Strongest counterargument to the chapter's economic story

The strongest skeptical reading is that answer engines may change the *composition* of web traffic more than its total economic value. If direct answers absorb low-value informational clicks while users still click for purchases, primary evidence, complicated decisions, communities, tools, or deeper reading, publishers could receive fewer visits but more intentional ones. Google's “quality click” claim points in exactly this direction, although its public evidence is not sufficient to settle it.

A second counterargument is supply expansion. If AI interfaces create additional searches that people previously would not have made, a lower click probability per query can coexist with stable or rising aggregate traffic. This matters because a publisher cares about the product of query volume, inclusion probability, click probability, and value per click—not one rate in isolation.

A third counterargument is that the old search bargain was never as clean as the draft occasionally implies. Search engines have long answered some queries directly through snippets, weather, maps, calculators, sports scores, knowledge panels, and other zero-click surfaces. Generative answers deepen an existing tendency rather than inventing intermediary completion from nothing.

These counterarguments strengthen the book. The defensible novelty is not “search used to send every user away and now AI keeps them.” It is that synthesis can make **source contribution and source visitation separable at a much wider semantic range**.

## 5. Best prose move for Chapter 13

The chapter currently opens with a conceptual contrast between a ranked list and a generated answer. A stronger next pass can put a browser session on the page before explaining the model:

A person asks a long question. Google supplies an AI summary. The person reads it and closes the browser. In Pew's March 2025 sample, ending the session was materially more common on pages classified as having a summary, while clicking a cited source inside the summary was rare. Then introduce Google's apparently conflicting aggregate claim. The tension makes the chapter more interesting than a simple “AI kills traffic” narrative.

That scene creates three separate objects the rest of the chapter can keep straight:

1. **representation** — did the source affect or appear in the answer?
2. **attribution** — did the answer cite the source?
3. **attention** — did the user visit the source?

The publisher can now win the first two and lose the third. That is the chapter's clearest contribution to the book's argument about the machine as an audience.

## 6. Claim boundaries to preserve in any manuscript revision

- Do not write that AI Overviews have been proven to halve publisher traffic; Pew's study is observational and reconstructs result pages after the browsing period.
- Do not use Google's aggregate traffic claim as independent evidence of publisher welfare; it is a platform statement using company-held data and a company-defined “quality click” measure.
- Do not equate GEO benchmark visibility with production-engine citation or referral traffic.
- Do not say answer engines invented zero-click search. Frame synthesis as a significant extension of an older direct-answer tendency.
- Do not treat every publisher identically. Effects should vary by query intent, vertical, brand strength, source type, and whether the user's task can be completed inside the answer.
- Preserve the possibility that fewer but more intentional clicks can be economically valuable.

## Recommended narrow manuscript thesis

**Answer engines do not merely change who ranks first. They separate being used as a source from being visited as a destination. Early browsing evidence suggests that separation is already behaviorally real, while Google's aggregate traffic claims show that its economic magnitude cannot be inferred from click-through rates alone.**
