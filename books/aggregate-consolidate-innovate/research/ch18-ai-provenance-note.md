# Chapter 18 research note — fluency, confabulation, and provenance

## Why this belongs in the chapter

Chapter 18 argues that AI can make large, messy corpora searchable without making them coherent, current, or trustworthy. The strongest version of that argument is not that generative systems are generally unreliable. It is that fluent output and evidentiary integrity are separate properties, so an organization still needs source identity, dates, status, authority, and contradiction handling after retrieval becomes cheap.

## Primary source checked

National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1, published July 26, 2024 and updated on NIST's publication page April 8, 2026. DOI: https://doi.org/10.6028/NIST.AI.600-1

NIST identifies **confabulation** as confidently stated erroneous or false content that can mislead users. It separately identifies **information integrity** risk when generated material does not adequately distinguish fact from opinion or fiction, acknowledge uncertainty, or otherwise supports the circulation of misleading information.

That distinction is useful for Chapter 18 because it maps closely to two different failure modes already present in the manuscript:

- a model can fabricate or misstate the content itself;
- a model can produce a smooth synthesis that obscures source status, disagreement, uncertainty, or provenance even when much of the underlying material is real.

The chapter should preserve that separation. "The model can summarize all four beautifully" is stronger when the reader understands that surface coherence does not establish which policy is current or authoritative.

## Strongest counterargument / boundary

NIST AI 600-1 is a risk-management profile, not a benchmark showing that every retrieval-augmented or enterprise-search system fails in these ways. Retrieval, citations, source filtering, temporal metadata, and human review can materially reduce the relevant risks. The source therefore should not be used to claim that AI aggregation is inherently untrustworthy or that manual research is epistemically superior.

The narrower claim is better: once machines make aggregation cheap, provenance and information-integrity controls become more important because linguistic fluency cannot by itself establish source authority, recency, or truth.

## Editorial use

A future Chapter 18 prose pass can use this evidence in one or two sentences near the existing discussion of "plausible connective tissue" and "persuasive ghosts." Avoid inserting a policy-report detour. The chapter's voice is strongest when the institutional evidence quietly sharpens the argument rather than turning the page into a literature review.

A concise formulation consistent with the surrounding argument would be to note that NIST treats confident falsehoods and information-integrity failures as distinct generative-AI risks, then immediately preserve the countercase: retrieval and source controls can reduce both, but they do not make fluency a substitute for provenance.
