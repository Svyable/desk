# Chapter 10 method audit — Discover Weekly

Date checked: 2026-09-11

## Why this audit

Chapter 10 correctly treats Spotify as a useful case for endogenous exposure, but one paragraph currently gives the 2020 randomized experiment more evidentiary work than it can carry. The experiment did **not** randomize listeners into more- versus less-diverse recommendation diets and then measure whether recommendation changed their long-run diversity. It randomized the **ranking algorithm** inside seven decade playlists and measured short-run streams and skips.

That distinction is worth making explicit because it improves the book's central argument: the strongest causal result in the paper concerns the immediate performance of relevance-based ranking, while the diversity/retention relationship that motivates the chapter remains observational.

## Primary source checked

Ashton Anderson, Lucas Maystre, Ian Anderson, Rishabh Mehrotra, and Mounia Lalmas, “Algorithmic Effects on the Diversity of Consumption on Spotify,” *Proceedings of The Web Conference 2020*, pp. 2155–2165. DOI: https://doi.org/10.1145/3366423.3380281

Author-hosted paper: https://mounia-lalmas.blog/wp-content/uploads/2020/05/www-listener-diversity-main.pdf

Spotify Research summary: https://research.atspotify.com/2020/12/algorithmic-effects-on-the-diversity-of-consumption-on-spotify

## What the experiment actually did

- The online experiment covered seven “All Out” decade playlists, from the 1950s through the 2010s.
- It ran for one week on a random sample of **540,000 Spotify Free users** who interacted with those playlists.
- Users were randomly assigned to one of three ranking approaches: popularity, relevance, or a learned ranker.
- The ranker selected **70–100 songs from a pool of more than 400** for the relevant playlist.
- The relevance ranker increased streams relative to popularity by **10.03% for generalists** and **25.66% for specialists**; skips also increased by 4.71% and 2.89%, respectively.
- The learned ranker produced only small additional stream gains over relevance (+1.82% for generalists, +1.30% for specialists), while reducing skips by 9.76% for specialists.

The authors' causal conclusion is correspondingly narrow: relevance-based algorithmic ranking is effective at satisfying short-term listening needs, especially for users with narrower listening profiles.

## What it did not establish

The randomized test did **not** establish that algorithmic recommendation causes users to become less diverse over time. The authors say this directly. Their findings that programmed listening is less diverse than organic listening, that users becoming more diverse shift toward organic consumption, and that diversity is associated with retention/conversion are observational. They explicitly identify the causal relationship among recommendation, diversity, and user outcomes as a difficult open question.

This is the strongest counterargument to any chapter sentence that treats the experiment as causal evidence for the diversity trajectory itself.

## A second field experiment worth using

David Holtz, Benjamin Carterette, Praveen Chandar, Zahra Nazari, Henriette Cramer, and Sinan Aral, “The Engagement-Diversity Connection: Evidence from a Field Experiment on Spotify” (2020), reports field-experimental evidence of an engagement/diversity trade-off from personalized recommendation exposure. The authors report that personalized recommendations increased engagement while changing the diversity of content consumed, and that exposure also affected later organic consumption.

Authoritative record: https://business.columbia.edu/faculty/research/engagement-diversity-connection-evidence-field-experiment-spotify

This is a better causal citation if Chapter 10 wants to say that recommendation exposure can alter consumption diversity. It should still be presented as evidence from one platform and experiment, not as proof that personalization inevitably narrows taste.

## Current product reality

Spotify's June 30, 2025 tenth-anniversary update says Discover Weekly had generated more than **100 billion track streams** and more than **56 million new artist discoveries per week**, 77% involving emerging artists. The same update added user-facing genre controls to the 30-track playlist. Those controls are useful counterevidence to a portrait of recommendation as a one-way optimizer: the current product explicitly lets listeners steer discovery.

First-party source: https://newsroom.spotify.com/2025-06-30/discover-weekly-turns-10-celebrating-100-billion-tracks-streamed-and-a-decade-of-personalized-discovery/

The company-reported discovery numbers are scale/context claims, not independent evidence of welfare, diversity, or causal creator benefit.

## Editorial implication

A stronger Chapter 10 should replace the generic sentence “They also ran a randomized experiment showing that personalized recommendations were particularly effective for listeners whose existing consumption was narrower” with the physical experiment: 540,000 free users, seven decade playlists, three rankers, and a relevance-vs-popularity effect more than twice as large for specialists as generalists.

Then draw the boundary immediately: **the experiment randomized ranking, not diversity**. That makes the chapter more interesting because the paper contains its own unresolved tension. The causal evidence says relevance works very well now; the observational evidence raises the possibility that optimizing that success repeatedly may have a different relationship with long-run diversity. The authors themselves leave that second causal question open.

The Holtz et al. field experiment can then supply separate causal evidence that personalized recommendation exposure can change diversity, while Spotify's 2025 user controls and discovery statistics supply a fair counterweight: recommendation can be an engine of discovery, and modern product design can give users some agency over the direction of exploration.

## Claim boundary for future prose

Safe: “In a one-week randomized test on 540,000 Free users using seven decade playlists, relevance ranking increased streams relative to popularity, with a much larger gain among narrower listeners.”

Safe: “In Anderson et al., the relationship between algorithmic listening and lower diversity was observational; the experiment did not randomize long-run diversity.”

Safe with separate citation: “A different Spotify field experiment found that exposure to personalized recommendations could alter consumption diversity while increasing engagement.”

Avoid: “Spotify proved its recommender makes listeners less diverse.”

Avoid: “Discover Weekly traps listeners in a filter bubble.”

Avoid treating Spotify's company-reported discovery counts as independent evidence that the recommender improves cultural welfare.
