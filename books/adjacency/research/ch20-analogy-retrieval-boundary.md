# Chapter 20 research audit — analogy is not nearest-neighbor similarity

## Scope

This note tests one claim family in Chapter 20, “The Analogical Machine”: that vector retrieval can make useful cross-domain analogy less dependent on accidental recall by surfacing candidate structures expressed in different language.

The chapter’s central distinction — resemblance is not analogy — is sound. What is missing is the cognitive-science result that makes the distinction operational: **the properties that help an earlier case come to mind are not necessarily the properties that make it a good basis for inference once retrieved.** That result both strengthens and limits the vector-space argument.

This is a research-only pass. No manuscript prose is changed here.

## Structure mapping gives the chapter a real mechanism

Dedre Gentner’s structure-mapping account distinguishes literal similarity from analogy by emphasizing relational structure rather than shared object attributes. On this account, a useful analogy maps relations between elements, especially connected systems of relations, rather than merely transferring a list of surface features.

Primary source:

- Dedre Gentner, “Structure-Mapping: A Theoretical Framework for Analogy,” *Cognitive Science* 7(2) (1983), 155–170: https://doi.org/10.1207/s15516709cog0702_3

This gives Chapter 20 a stronger foundation than the current intuitive examples. The important claim is not simply that a financial bubble and a fever can “feel” structurally alike. It is that an analogy earns inferential value when the correspondence preserves a connected relational pattern that can support further inferences.

Safe manuscript claim: **analogical usefulness depends on the relations preserved by the mapping, not merely on the number of features two cases share.**

Unsafe promotion: **a vector embedding that retrieves semantically related material has therefore recovered the relevant analogical structure.** Gentner’s framework does not establish that.

## Retrieval and inferential quality can point in different directions

Gentner, Rattermann, and Forbus tested a particularly useful distinction for *Adjacency*. Across story-retrieval experiments, memory access was strongly affected by surface similarity, while judgments about whether an inference should transfer depended much more on common relational structure. In a forced-choice recognition condition, participants could discriminate relationally appropriate matches even when those matches had been poor spontaneous retrieval cues.

- Dedre Gentner, Mary Jo Rattermann, and Kenneth D. Forbus, “The Roles of Similarity in Transfer: Separating Retrievability From Inferential Soundness,” *Cognitive Psychology* 25(4) (1993), 524–575: https://doi.org/10.1006/cogp.1993.1013

This is the most important result for the chapter because it cuts in both directions.

It supports the book’s premise that **retrieval itself is a bottleneck**. A person can possess a potentially useful analogue and fail to call it to mind because surface cues do not point toward it.

But it also blocks an easy victory for semantic vector search. A retrieval system optimized for semantic or topical closeness may improve access while still ranking cases for the wrong reason. The case that is easiest to retrieve is not necessarily the case from which the soundest inference can be drawn.

A useful machine therefore needs at least two stages:

1. generate a candidate set broad enough to escape vocabulary and surface-form lock-in;
2. evaluate the proposed correspondence for relational structure, boundary conditions, and inferential consequences.

That is more precise than saying the vector space “finds analogies.” It finds candidates for analogical reasoning.

## Gick and Holyoak make the retrieval bottleneck visible

Gick and Holyoak’s classic analogical problem-solving experiments used a military story as a possible source for solving Duncker’s radiation problem. Participants could use the remote-domain solution when prompted to consider the earlier story, but spontaneous transfer fell sharply when that hint was absent. Their experiments therefore separate possession of a useful source case from noticing that it applies.

- Mary L. Gick and Keith J. Holyoak, “Analogical Problem Solving,” *Cognitive Psychology* 12(3) (1980), 306–355: https://doi.org/10.1016/0010-0285(80)90013-4

Their later work adds another boundary: comparing multiple analogues can help people abstract a more general problem schema, and the quality of the induced schema predicts later transfer. Merely presenting one example plus a verbal principle or diagram did not produce the same result in those experiments.

- Mary L. Gick and Keith J. Holyoak, “Schema Induction and Analogical Transfer,” *Cognitive Psychology* 15(1) (1983), 1–38: https://doi.org/10.1016/0010-0285(83)90002-6

For the manuscript, the useful implication is not that AI should imitate one laboratory paradigm. It is that **candidate abundance is not the same thing as transfer competence**. Retrieval can expose several source cases; comparison among them may help isolate the relation that is actually portable.

## Strongest counterargument to the chapter

Chapter 20 occasionally treats cross-domain retrieval as though reducing semantic distance automatically makes interdisciplinary analogy more available. The strongest counterargument is that the desired analogue may be **semantically distant precisely because its value lies in relational structure rather than topical resemblance**.

A dense retriever can therefore fail in two opposite ways:

- it can stay too close to topical or lexical neighborhoods and never surface the structurally useful remote case;
- it can surface a remote case that sounds clever but lacks the causal or relational correspondence needed for transfer.

The classic cognitive literature makes this asymmetry unusually clear: **surface resemblance can help retrieval while relational resemblance supports inference.** A system that optimizes only one side can become better at reminding without becoming better at reasoning.

That objection does not defeat the chapter. It gives the chapter a more interesting architecture. Vector retrieval is best understood as a mechanism for enlarging the pool of cases that can enter consideration. Structure-sensitive mapping, source inspection, counter-analogy, and domain validation decide whether anything should transfer.

## Recommended manuscript revision

A later prose pass should use this research to replace some of the chapter’s repeated abstract declarations with one developed empirical sequence:

1. introduce the problem with the Gick–Holyoak result: people can have a useful remote analogue available in memory and still fail to retrieve it without a cue;
2. use Gentner to explain why analogy is relational mapping rather than generic resemblance;
3. introduce the 1993 retrieval/soundness dissociation as the decisive complication: what comes to mind easily and what supports good inference are not the same thing;
4. return to vector search as a candidate-generation technology, not an analogy oracle;
5. preserve the chapter’s strongest existing move — counter-analogy — as the adversarial test after retrieval;
6. hand cleanly into Chapter 21, where graphs and other explicit structures become one way to expose relations that vector proximity alone leaves implicit.

This would also justify cutting some of the current repeated question inventories and “retrieve / map / test” formulations. The chapter can become more engaging by letting the experiments create the need for the distinction before naming the workflow.

## Claim boundary to preserve

- **Established in the cited cognitive work:** analogical reasoning depends importantly on relational structure; surface similarity and relational similarity can have different effects on retrieval and inferential judgment; people can fail to spontaneously retrieve a useful remote analogue even when they can use it once cued; comparison across multiple analogues can support schema abstraction and transfer.
- **Plausible engineering implication:** semantic/vector retrieval may reduce some failures of access by surfacing cases a person would not spontaneously recall, and multiple retrieved cases may support better comparison.
- **Not established by these sources:** modern embeddings reliably encode the relational structure required for sound analogy; nearest-neighbor ranking selects the best analogues; vector search by itself improves causal transfer; language-model fluency at producing analogies implies calibrated analogical reasoning.

## What would weaken the book’s claim

The chapter should narrow further if evaluations show that modern dense retrieval adds little over lexical or structured retrieval for remote structural analogies, or that improvements in candidate recall do not improve downstream mapping and decision quality once false analogues are counted. Conversely, evidence that relation-aware retrieval or reranking reliably improves held-out analogical transfer would justify a stronger claim than the current manuscript can make.

## Why this matters for *Adjacency*

This evidence gives the book a useful self-critique. *Adjacency* argues that learned proximity makes more relations reachable. Analogy is the case where reachability and usefulness separate most sharply. A system can improve the chance that an unfamiliar case enters the room without proving that the case belongs in the argument.

That is the stronger thesis: **adjacency can lower the cost of being reminded; analogy still has to earn the inference.**