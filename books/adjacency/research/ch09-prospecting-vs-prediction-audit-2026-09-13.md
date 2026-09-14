# Chapter 9 research audit — prospecting versus prediction

Checked: 2026-09-13

Target: Chapter 9, `The Discovery Before Discovery`

## Why this is worth adding

Chapter 9 already makes the right conceptual move: literature models should be judged as prospecting systems that improve the candidate set, not as oracles that prove a discovery before experiment. The current chapter leans heavily on Tshitoyan et al. (2019), whose historical time-slice experiment is striking but easy to overread because later publication is used as the outcome label.

A 2026 *Nature Machine Intelligence* paper provides a useful modern stress test. It moves from word-level latent proximity toward explicit concept graphs and asks whether machine learning can identify research links that later emerge in the literature. The result supports the chapter's basic thesis while also narrowing it.

## Primary sources checked

### Tshitoyan et al. (2019)

Vahe Tshitoyan et al., “Unsupervised word embeddings capture latent knowledge from materials science literature,” *Nature* 571, 95–98 (2019).

https://doi.org/10.1038/s41586-019-1335-8

What the paper establishes:

- Word2vec embeddings trained on a large materials-science literature corpus recovered recognizable chemical structure without an explicit hand-coded chemistry ontology.
- Historical time-slice experiments showed that materials associated with later functional-material publications could already rank near relevant functional concepts in earlier literature embeddings.
- The authors therefore argued that past literature contained latent structure useful for recommending candidates before those associations became explicit in later publications.

Important boundary:

The benchmark is **future literature attention**, not direct experimental truth. A material counted as a successful historical recommendation because it later became associated with the target application in published research. That is meaningful evidence of anticipatory literature structure, but it does not establish that every highly ranked candidate was physically superior, synthetically accessible, economically useful, or even ultimately correct.

This matters because publication is itself selective. Future papers reflect scientific opportunity, funding, fashion, accessibility, available instrumentation, and what researchers decided to test. The historical benchmark therefore measures whether the model anticipated later scientific attention unusually well, not whether it recovered a complete ground-truth set of objectively best materials.

### Krenn et al. / 2026 concept-graph work

“Predicting new research directions in materials science using large language models and concept graphs,” *Nature Machine Intelligence* (2026).

https://doi.org/10.1038/s42256-026-01206-y

What the paper adds:

- The authors used large language models to extract scientific concepts from materials-science abstracts and built dynamic concept networks over time.
- They trained link-prediction models to identify concept pairs that had not previously been connected but later became connected in the literature.
- A comparatively simple graph representation was already useful for predicting emerging links; adding semantic concept embeddings improved predictive performance further.
- The authors also tested generated recommendations with domain experts. The paper reports that experts rated **77 of 292 recommendations (26%)** as interesting in qualitative interview sessions.

Why that 26% result is valuable for Chapter 9:

It is not a failure rate that needs to be apologized for. It is almost exactly the sort of number the chapter's prospecting argument should welcome. A research-support system does not need every suggestion to become a discovery. It needs to increase the density of worthwhile candidates enough that scarce expert and experimental attention is spent better than under a reasonable baseline.

At the same time, “interesting to an expert” is not experimental validation. The interviews show usefulness as an ideation filter, not that one quarter of the recommendations will survive synthesis, measurement, mechanism testing, replication, cost constraints, or later scientific scrutiny.

## Strongest counterargument

The chapter can still overstate the role of vector geometry if it treats semantic representation as the essential engine of discovery prospecting.

The 2026 study reports that a **simple concept-graph representation itself already predicted emerging links**, with semantic embeddings improving performance rather than making the task possible from nothing. That matters because Chapter 9 sometimes moves rhetorically from “the literature contains latent relation” to “vector space is what makes the latent relation operational.”

A stronger formulation is:

> Scientific literature contains exploitable relational structure. Vector representations are one powerful way to expose it, especially when relations are fuzzy or language varies, but graphs, explicit entities, citation structure, structured databases and domain models can carry complementary or sometimes sufficient signal.

That distinction keeps the chapter aligned with Chapter 21, where graphs and vectors are treated as cooperating representations rather than rivals.

## Claim boundary for a later prose pass

The chapter should preserve four separate levels:

1. **Retrospective temporal prediction** — a model trained on earlier literature ranks candidates or links that appear in later literature.
2. **Expert-interest enrichment** — domain experts judge some machine-surfaced ideas worth considering.
3. **Experimental validation** — a candidate survives synthesis, measurement or another field-appropriate test.
4. **Scientific discovery** — the validated result is sufficiently novel, robust and consequential to alter understanding or practice.

Only the first two are directly established by the two anchor papers above. Chapter 9 already gestures toward this separation; the 2026 result gives it a concrete modern denominator.

## Suggested editorial use

A future revision could replace some of the chapter's abstract discussion of “candidate generation for knowledge” with a compact sequence:

- 2019: historical embeddings place some later-studied materials near useful-property concepts before those associations become explicit.
- 2026: concept-network models predict later research links, but human experts call only about a quarter of generated recommendations interesting.
- The interesting fraction is the point, not an embarrassment. Science is bottlenecked by which ideas deserve expensive contact with reality.

The counterweight should land in the same passage: later publication and expert interest are both intermediate labels. Neither is the same as nature saying yes.

## What would falsify or materially weaken the chapter's stronger claim

The manuscript should narrow if careful prospective studies show that literature-derived semantic or graph systems do not improve candidate quality over strong baselines such as citation heuristics, keyword/co-occurrence models, expert-curated search, or structured scientific databases after controlling for popularity and publication density.

It should also narrow if apparent historical foresight disappears when evaluation removes already-rising topics, leakage from publication chronology, or field-fashion effects.

The durable claim does not require machine prospecting to dominate experts. It requires evidence that representation-assisted search can improve the opportunity set at acceptable cost while preserving provenance and leaving validation downstream.
