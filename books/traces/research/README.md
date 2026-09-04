# Traces — research brief

## Research question

What can we learn about a trained machine by studying the evidence left by the process that changed it?

Machine learning is usually explained from one of two endpoints. Mathematical accounts explain the optimization machinery that can produce learning. Interpretability accounts inspect the internal organization or behavior of a trained model. *Traces* focuses on the interval between those views: the developmental record.

The manuscript asks whether training dynamics, checkpoints, data attribution, memorization, model differences, mechanistic interventions, forgetting, and unlearning can be understood as parts of a common evidentiary program.

The guiding question is:

> **How did this particular model become different, and what evidence of that change remains?**

The book does not assume that every model behavior has one identifiable cause or one recoverable training source. Deep learning is path-dependent, distributed, stochastic, and highly redundant. A responsible version of the thesis must therefore be probabilistic and comparative rather than promising a perfect audit log.

## Working thesis

A trained model is not only a computational artifact. It is a compressed historical artifact produced by a sequence of updates.

The most useful traces of that history can appear in several places:

1. **Training dynamics** — how losses, confidences, gradients, capabilities, and example difficulty change through training.
2. **Checkpoints** — executable snapshots of earlier model states that allow longitudinal comparison.
3. **Data influence** — estimates of how particular examples or groups of examples affect later predictions or behaviors.
4. **Representational change** — features, circuits, activation patterns, and internal mechanisms that appear, disappear, or change strength across model versions.
5. **Behavioral diffs** — differences between a base model and later tuned or updated descendants.
6. **Memorization and privacy leakage** — cases in which training records leave unusually recoverable residue.
7. **Forgetting and unlearning** — attempts to measure whether previously learned influence has been suppressed, overwritten, or genuinely reduced.
8. **Lineage metadata** — data versions, objectives, tuning stages, model parents, and other context required to interpret the traces.

The strongest form of the thesis is not “we can reconstruct exactly what happened during training.” Current methods do not justify that claim.

The stronger and more defensible claim is:

> **Comparative traces can make otherwise opaque learning histories empirically narrower, testable, and partially reconstructable.**

That is enough to change how models are studied and audited.

## Why this book is distinct

There is extensive prior literature on machine-learning mathematics, neural-network history, explainable AI, mechanistic interpretability, data attribution, training dynamics, privacy, model auditing, and machine unlearning. No responsible research process can certify that no prior writer has discussed any individual sub-idea.

The novelty target is the synthesis and narrative frame: **machine learning as a historical science of traces**.

Existing work generally treats training dynamics, influence functions, checkpoint studies, memorization, interpretability, model diffing, and unlearning as separate research programs with different immediate goals. *Traces* asks what becomes visible when they are organized around one shared unit of analysis: **change through training time**.

This distinguishes the book from popular treatments such as Anil Ananthaswamy's *Why Machines Learn*, which explains the mathematical ideas that make machine learning possible. *Traces* begins after the mathematical mechanism is accepted and asks what evidence the mechanism leaves behind in a particular run.

It also distinguishes the project from Sven Hardy Benson's *Gradient Ascent*, whose subject is the loss of reliable information signals under cheap optimization and synthetic abundance. *Traces* stays inside learned systems and their development.

The project is also separate from *Source Code*. That manuscript argues that software agents should understand code by searching repositories for concrete traces rather than trusting architecture labels. *Traces* asks the analogous but distinct scientific question for trained models themselves.

## Evidence anchors for the opening

### 1. Influence functions make training ancestry an empirical question

Koh and Liang's 2017 work, *Understanding Black-box Predictions via Influence Functions*, adapts a classical robust-statistics technique to estimate how marginally upweighting a training point would affect learned parameters and a target prediction. The authors explicitly frame the method as tracing a prediction through the learning algorithm back to training data.

The manuscript should preserve the limitations: classical influence-function assumptions are more comfortable in convex settings than in deep neural networks, and practical use depends on approximations to expensive second-order calculations.

Use in Chapters 2–3: establish the difference between similarity and influence and the idea of training ancestry as a counterfactual rather than a literal lookup.

### 2. TracIn makes training time part of attribution

Pruthi, Liu, Kale, and Sundararajan's 2020 NeurIPS paper, *Estimating Training Data Influence by Tracing Gradient Descent*, estimates influence using gradients evaluated across saved checkpoints. The method's central intuition is that when training on one example changes the target example's loss, that training point has exerted influence under the method's definition.

The practical implementation relies on checkpoint sampling and first-order approximations rather than a complete record of every training step.

Use in Chapters 2–4: establish checkpoints as scientific evidence, not merely restart files.

### 3. Training dynamics can reveal structure in the dataset

Swayamdipta et al.'s 2020 EMNLP paper, *Dataset Cartography: Mapping and Diagnosing Datasets with Training Dynamics*, tracks model confidence and variability on individual training examples across epochs. The work identifies model-relative regions described as easy-to-learn, ambiguous, and hard-to-learn, with experiments showing that these categories carry useful information about generalization and data quality.

The categories are not universal properties of examples independent of model, task, and training procedure. The manuscript should keep the relational framing.

Use in Chapters 5–6: make the learner's changing relationship to an example the central object.

### 4. Large-scale attribution is possible but approximate

TRAK, introduced by Park et al. in 2023, addresses data attribution at larger scale using random projections and approximations that make leave-one-out-style reasoning more tractable for modern models. The work demonstrates attribution across ImageNet classifiers, CLIP, BERT, and mT5.

Later theoretical work in 2026 argues that TRAK's approximations can preserve useful influence rankings even when raw influence estimates contain substantial error. This is a useful case for the book's broader rule: an imperfect trace can still narrow inquiry without becoming a certificate of causation.

Use in Chapters 3, 10, and 19.

### 5. Influence analysis scales into large language models

Anthropic's 2023 *Studying Large Language Model Generalization with Influence Functions* scales influence-function analysis to models up to 52 billion parameters using EK-FAC curvature approximations plus filtering and batching strategies. The study reports influence patterns related to abstraction, cross-lingual generalization, mathematics, programming, and role-playing, while also identifying sensitivity to phrase order.

Do not describe these influence results as exact provenance. The paper itself treats influence functions as a tool for studying generalization patterns.

Use in Chapters 3 and 10.

### 6. Memorization can be invisible in averages and visible in tails

Carlini et al.'s 2021 USENIX Security paper demonstrates extraction of verbatim training sequences from GPT-2. The paper's important conceptual result for *Traces* is that average training-versus-test loss can fail to advertise severe worst-case memorization. Some individual records leave much stronger residue than aggregate metrics suggest.

Use in Chapters 9 and 17.

### 7. Intermediate training states can expose capability emergence

Work on transformer circuits and induction heads, especially Olsson et al.'s 2022 study *In-context Learning and Induction Heads*, links the emergence of induction-head-like mechanisms in small transformers to a phase change in in-context learning behavior during training.

The book should not universalize this result to all models or all forms of in-context learning. Its role is methodological: checkpointed developmental evidence can associate internal mechanism formation with capability change.

Use in Chapter 7.

### 8. Grokking proves endpoint performance can hide developmental history

Power et al.'s work on grokking shows models in certain algorithmic settings reaching near-perfect training performance long before sharp improvement in held-out generalization. The effect depends on training regime and should not be presented as a universal neural-network law.

Its value to the book is epistemic: two final models can look similar while the timing and route to generalization differ dramatically.

Use in Chapters 1, 4, and 8.

### 9. Circuit tracing makes internal computation experimentally manipulable

Anthropic's 2025 circuit-tracing work attempts to reconstruct attribution graphs that connect interpretable internal features into partial computational pathways supporting model outputs. The researchers explicitly note that the method captures only a fraction of computation and can introduce interpretability-tool artifacts.

The ability to intervene on intermediate features and observe output changes is important because it moves from descriptive trace toward causal test.

Use in Chapters 7, 19, and 20.

### 10. Model diffing makes change itself an audit target

Anthropic's March 2026 work on cross-architecture model diffing introduces a Dedicated Feature Crosscoder intended to identify shared and model-specific features across models. The project is explicitly motivated by the software practice of reviewing a diff rather than auditing an entire codebase from scratch.

The researchers caution that identifying a feature unique to a model does not determine the feature's origin. Training data, tuning, architecture, or deliberate design may all contribute.

Use in Chapters 11 and 14.

### 11. Internal workspace research demonstrates a new class of trace

Anthropic's July 2026 *A Global Workspace in Language Models* reports evidence of a small collection of internal patterns in Claude with properties the authors compare to global-workspace theories from neuroscience. The work uses a Jacobian-based lens to identify internal word-linked patterns that can be read and intervened upon.

This source must be handled carefully. The paper does not establish machine consciousness. The manuscript's interest is methodological: hidden internal states can sometimes be measured, compared, and manipulated in relation to behavior.

Use in Chapters 19–21.

### 12. Unlearning can be used as an attribution experiment

Isonuma and Titov's 2024 *Unlearning Traces the Influential Training Data of Language Models* proposes UnTrac, which uses gradient ascent to unlearn training datasets and measures how predictions change. The method turns removal pressure into an influence probe and is especially relevant to questions about harmful, biased, or untruthful behavior.

The book should distinguish this kind of approximate unlearning-based attribution from legal or product claims that information has been fully erased.

Use in Chapters 15 and 18.

### 13. Token-level attribution is becoming more tractable

Lin et al.'s 2024 ACL paper *Token-wise Influential Training Data Retrieval for Large Language Models* proposes RapidIn, which compresses gradient information heavily and retrieves influential training data for generated tokens far more efficiently than naïve scanning.

The headline speedups depend on the study's implementation and benchmark conditions; use them as evidence of engineering progress, not universal runtime guarantees.

Use in Chapters 3 and 19.

## Chapter map and evidence burden

### Chapters 1–4: history enters the model

The opening establishes the core reversal: a finished model is an endpoint, not a developmental explanation.

Evidence burden:
- gradient-based learning described accurately without pretending examples map neatly to parameter locations;
- checkpoints framed as sampled state history, not a continuous recording;
- grokking and induction-head results kept within the experimental regimes where they were observed;
- influence methods described as counterfactual approximations rather than provenance certificates.

### Chapters 5–8: learning trajectories

These chapters move from datasets as static collections to examples and capabilities as trajectories.

Evidence burden:
- dataset cartography methodology and limitations;
- noisy-label and ambiguous-example findings reported with task/model dependence;
- checkpoint-based capability probing;
- grokking conditions and replication boundaries;
- induction-head phase-change claims separated from broad claims about all in-context learning.

### Chapters 9–10: memorization and generalization have different traces

The manuscript separates verbatim retention from distributed influence.

Evidence burden:
- extraction studies and membership-inference literature;
- clear distinction between memorization, influence, and generalization;
- examples where large models show abstract or cross-lingual influence patterns;
- counterexamples where attribution methods are brittle or unstable.

### Chapters 11–14: post-training creates new strata

Fine-tuning, preference optimization, reward modeling, and model diffing create before/after structure that can be studied longitudinally.

Evidence burden:
- documented behavior changes under fine-tuning;
- base-versus-finetune mechanistic comparisons;
- crosscoder/model-diffing work;
- explicit separation between finding a changed feature and identifying why it changed;
- reward-model and human-feedback provenance where evidence exists.

### Chapters 15–18: forgetting, privacy, and ownership

These chapters test the trace thesis where technical interpretation meets rights and risk.

Evidence burden:
- machine-unlearning definitions and evaluation criteria;
- catastrophic forgetting and continual-learning research;
- membership inference and training-data extraction;
- current legal and policy requirements described from primary sources and dated carefully;
- no claim that technical influence scores determine copyright infringement, ownership, consent, or legal causation.

### Chapters 19–21: interpretability becomes longitudinal

The manuscript combines static mechanism maps with developmental comparison.

Evidence burden:
- circuit tracing and sparse-feature work;
- model-diffing methods;
- intervention/steering evidence separated from interpretation labels;
- limitations of current feature dictionaries and attribution graphs;
- neuroscience analogies presented as analogies, not equivalences.

### Chapters 22–24: preserving the developmental record

The final act asks what evidence future model builders, auditors, scientists, and institutions should preserve.

Evidence burden:
- realistic checkpoint/storage costs and security/privacy tradeoffs;
- versioning and lineage practices from ML operations;
- examples where discarded history prevents later causal analysis;
- distinction between an archival recommendation and a demand for universal public disclosure.

The final chapter should earn the title *Traces* by showing that model history can become a first-class scientific artifact even if no single method reconstructs it perfectly.

## Falsification notes

The thesis should be weakened, revised, or rejected if the evidence shows any of the following:

1. **Endpoint analysis becomes sufficient.** If mature mechanistic interpretability can reliably recover all practically relevant causal structure from final models without developmental records, the value of longitudinal traces is smaller than the book claims.

2. **Training paths prove largely uninformative.** If checkpoint trajectories, training dynamics, and model differences rarely predict or explain later capabilities beyond what final-state evaluations provide, the historical frame becomes mostly metaphorical.

3. **Data attribution fails to scale reliably.** If influence estimators remain too unstable, computationally prohibitive, or definition-dependent to narrow real investigations in large models, training ancestry should occupy less of the book's practical case.

4. **Internal representations are too non-identifiable across time.** If feature/circuit comparisons across checkpoints and model versions cannot be made robustly because representations rotate, split, merge, or reencode beyond meaningful alignment, longitudinal mechanistic claims need stronger qualification.

5. **Checkpoint preservation has low marginal scientific value.** If carefully selected intermediate checkpoints rarely enable useful analyses that cannot be reconstructed from final weights plus logs, the archival recommendation should narrow.

6. **Unlearning provides no meaningful evidence of influence.** If model behavior after unlearning is too confounded by collateral changes to support attribution or forgetting audits, unlearning should not be treated as a strong trace method.

7. **Behavioral differences are dominated by serving layers.** If most consequential model-version changes arise from prompts, routing, tools, retrieval, or policy layers outside the weights, model-history analysis must expand beyond the trained model itself.

8. **Privacy and security costs dominate trace retention.** If storing detailed training traces systematically creates greater privacy, security, or proprietary risk than explanatory benefit, the book's prescription must favor aggressive minimization and controlled retention.

## Language guardrails

- Do not call an influence ranking proof that a training example “caused” an output.
- Do not describe neural-network weights as a database of training records.
- Do not equate data presence, measurable influence, memorization, and legal ownership.
- Do not imply that a checkpoint series captures every important event between checkpoints.
- Do not universalize grokking or induction-head findings beyond the settings studied.
- Do not treat mechanistic-interpretability labels as literal human concepts without qualification.
- Do not describe model diffing as identifying the origin of a changed behavior unless an intervention or known lineage supports the claim.
- Do not treat failed elicitation as proof that information has been erased.
- Do not call machine unlearning equivalent to human forgetting.
- Do not infer consciousness from internal-state or global-workspace-like findings.
- Prefer “suggests,” “is associated with,” “under this definition of influence,” and “in this experiment” where the evidence is conditional.
- Use primary papers and first-party technical reports for claims about fast-moving interpretability methods.
- Separate scientific traceability from legal conclusions.

## Novelty discipline

The book may say that its organizing frame is unusual or that multiple research traditions are converging on a common historical problem.

It should not say that nobody has ever described models as historical artifacts, nobody has previously connected training dynamics to attribution, or that this is the first work to use the word “trace” in machine learning. Such absolute novelty claims are not realistically verifiable.

The defensible novelty is the trade-book synthesis:

> **A model is not only a machine that learned. It is evidence of learning that happened.**

The manuscript should earn that sentence through examples rather than repeat it as a slogan.

## Core narrative test

Every chapter should be able to answer one question:

> **What evidence of change exists here that the finished model alone would hide?**

If a chapter cannot answer that, it probably belongs in a general machine-learning or interpretability book rather than *Traces*.
