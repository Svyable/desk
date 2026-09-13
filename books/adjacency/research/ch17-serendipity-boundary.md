# Chapter 17 research audit — serendipity is not distance

## Scope

This note tests one claim family in Chapter 17, “The Serendipity Problem”: that vector-native discovery systems can engineer useful surprise by deliberately moving away from nearest-neighbor relevance. The chapter's intuition is strong, but several passages currently let **distance, diversity, novelty, exploration, and serendipity** behave as if they were interchangeable. The literature does not support that collapse.

This is a research-only pass. No manuscript prose is changed here.

## The older mechanism is narrower than the chapter implies

Carbonell and Goldstein's Maximal Marginal Relevance work is a useful historical anchor because it is less grand than the current chapter's treatment. MMR was introduced as a reranking criterion balancing query relevance against information novelty/redundancy among already retrieved candidates. Its clearest reported benefit was nonredundant multi-document summarization. It is evidence that a retrieval system can trade some nearest-neighbor redundancy for additional information; it is not evidence that semantic distance itself produces serendipity, long-run taste change, or better discovery.

Primary institutional copy:

- Jaime Carbonell and Jade Goldstein, “The Use of MMR and Diversity-Based Reranking in Document Reranking and Summarization,” Carnegie Mellon KiltHub: https://kilthub.cmu.edu/articles/journal_contribution/The_Use_of_MMR_and_Diversity-Based_Reranking_in_Document_Reranking_and_Summarization/6610814

Safe manuscript claim: **MMR gives the chapter a concrete early example of relevance being deliberately balanced against redundancy.**

Unsafe promotion: **MMR proves that farther results are more serendipitous or more valuable.**

## Diversity can hurt the thing called serendipity

Kotkov, Veijalainen, and Wang are especially useful counterevidence to the chapter's smooth “move outward” metaphor. Their serendipity-oriented reranking study finds that increasing diversity can improve or harm serendipity depending on how much diversity is introduced. Their algorithm also underperforms accuracy-oriented methods on accuracy. In other words, “more diverse” is not monotonically “more serendipitous,” and the tradeoff has a real user-value cost.

- Denis Kotkov, Jari Veijalainen, and Shuaiqiang Wang, “How does serendipity affect diversity in recommender systems? A serendipity-oriented greedy algorithm,” *Computing* 102 (2020), 393–411: https://doi.org/10.1007/s00607-018-0687-5

This is the strongest direct correction to the chapter's temperature metaphor. Turning up exploration is not a scalar path from boring to delightful. At some point the system can simply become less relevant.

## The user's preferred exploration level is itself uncertain

Nguyen, Harper, Terveen, and Konstan ran a six-month live recommender experiment with more than 1,800 users and found that users differed in their preferred levels of diversity, popularity, and serendipity. Importantly for Chapter 17, those preferences were not recoverable from ratings alone. That supports the chapter's instinct that users should be able to steer discovery distance, but it weakens any suggestion that a platform can infer one correct “temperature” simply from past consumption.

- Tien T. Nguyen, F. Maxwell Harper, Loren Terveen, and Joseph A. Konstan, “User Personality and User Satisfaction with Recommender Systems,” *Information Systems Frontiers* 20(6) (2018): https://doi.org/10.1007/s10796-017-9782-y

A newer curiosity-modeling paper reaches a compatible conceptual boundary: users differ in the amount of surprise they tolerate or seek, and serendipity lacks a single universally accepted operational definition.

- Zhe Fu and Xi Niu, “Modeling Users' Curiosity in Recommender Systems,” *ACM Transactions on Knowledge Discovery from Data* 18(1) (2024), Article 26: https://doi.org/10.1145/3617598

The useful reader-facing move is therefore not “set the right exploration temperature.” It is **make exploration a negotiable property because the system may not know the user's appetite for surprise from behavioral history alone.**

## Exploration can change what the system gets to learn

Parapar and Radlinski connect diversification to preference elicitation rather than only to the final recommendation list. Their WSDM 2021 work argues that popularity-biased elicitation can create popularity-biased recommendation; diversifying what the system asks or exposes can produce a broader estimate of preferences. This gives Chapter 17 a firmer version of its “the map needs probes” idea.

- Javier Parapar and Filip Radlinski, “Diverse User Preference Elicitation with Multi-Armed Bandits,” WSDM 2021, Google Research record: https://research.google/pubs/diverse-user-preference-elicitation-with-multi-armed-bandits/

The defensible claim is not that a surprising recommendation discovers a hidden “true self.” It is that **an exploit-only policy can make parts of the preference space observationally unavailable to the recommender itself.** Exploration changes the data-generating process.

That distinction matters. A system can become increasingly confident because it keeps asking the same kind of question.

## Strongest counterargument to the chapter

The chapter risks treating serendipity as an intrinsic property of an item-query pair: find something at the right semantic distance and surprise becomes engineerable. The strongest counterargument is that serendipity is partly a **user-event** rather than a geometric property. A result can be distant and useless, diverse and annoying, novel but unsurprising, or unexpected without becoming valuable. Different users can prefer different amounts of each, and those preferences can vary by task.

This does not defeat the chapter. It improves the thesis by moving the interesting design problem one layer up:

> Vector geometry can cheaply generate candidates at controlled kinds of distance. It cannot by itself tell us which departure from the familiar will become useful surprise for this person, in this task, now.

The map supplies options. The traversal policy creates exposure. The user's response supplies evidence. None of those is serendipity by itself.

## Recommended manuscript revision

A later prose pass should keep the concrete MMR mechanism but narrow the surrounding claims. The best sequence is:

1. begin with the failure mode already on the page — ten near-duplicate results;
2. introduce MMR as a historical engineering answer to redundancy, not as a theory of creativity;
3. show the counterexample that simply increasing diversity can reduce accuracy and can even reduce measured serendipity;
4. move to the more interesting problem: the system often does not know the user's desired exploration level from ratings/history alone;
5. preserve the chapter's strongest original idea — user-controlled semantic distance — but frame it as a way to expose and negotiate uncertainty rather than as a universal “serendipity dial”;
6. use preference elicitation to make “the map needs probes” empirical: exploitation determines not only what users see but what the model gets to learn about them.

This would also justify cutting several current abstractions: the evolution analogy, some of the temperature exposition, and repeated claims that vector geometry itself is “well suited” to computational serendipity. The chapter becomes more specific if it distinguishes **candidate geometry** from **selection policy** from **experienced value**.

## Claim boundary to preserve

- **Established:** relevance can be reranked against redundancy; recommendation systems can explicitly optimize beyond accuracy; users differ in preferred diversity/serendipity; exploration policy can alter what preference information is collected.
- **Supported but context-dependent:** diversification and exploration can improve discovery-oriented outcomes.
- **Not established by these sources:** greater vector distance monotonically improves discovery; serendipity has one agreed metric; a platform can infer a user's ideal exploration level from behavioral history; exploratory recommendations reliably create durable new tastes; semantic distance alone is a causal mechanism for creativity.

## Why this matters for *Adjacency*

The book's larger argument is stronger if vector space is treated as a map rather than an oracle. Geometry makes previously expensive comparisons cheap. It does not decide which comparison deserves attention. Chapter 17 can therefore become a useful limit case for the whole book: **adjacency expands the set of reachable encounters, while judgment still governs which encounters become discoveries.**
