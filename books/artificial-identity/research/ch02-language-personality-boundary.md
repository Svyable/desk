# Chapter 2 audit — personality inference from ordinary language

## Scope

This note tests one current Chapter 2 claim in *Artificial Identity*: that ordinary open-ended language has become an inference surface from which general-purpose LLMs can estimate personality traits. The goal is to preserve the genuinely surprising 2026 result without promoting a psychometric validation study into evidence that an LLM has discovered a person's stable inner identity.

## Primary result

Wright, Ringwald, Vize, Eichstaedt, Angstadt, Taxali, and Sripada, “Assessing personality using zero-shot generative AI scoring of brief open-ended text,” *Nature Human Behaviour* 10 (2026), 541–555.

- Article: https://doi.org/10.1038/s41562-025-02389-x
- Open full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC12974486/
- Data/code record: https://github.com/SripadaLab/personality_llm_zero_shot/

The paper used seven commercially available generative LLMs to score Big Five traits from two kinds of open-ended material: a laboratory stream-of-thought task and naturalistic daily video diaries. The two reported samples were small enough to matter to interpretation: Sample 1 had N=60 and Sample 2 N=108.

The models' scores converged with participants' self-reported Big Five scores. The authors compare that agreement with established self-other benchmarks and with conventional language-processing approaches. They also report predictive validity for measured daily behavior and mental-health outcomes. This is stronger evidence than a demonstration that an LLM can merely reproduce personality vocabulary from a prompt.

A particularly useful detail for the manuscript is also a limitation: performance differed across models, and the **average score across the seven LLMs** produced the strongest agreement with self-report. The result therefore should not be narrated as a generic property of any one chatbot reading a paragraph.

## What the study establishes

The defensible claim is narrow and interesting:

> In two research samples, general-purpose commercial LLMs could extract enough structure from brief open-ended narratives to produce Big Five estimates that converged with self-report and predicted other measured outcomes.

That is evidence that ordinary language can carry task-relevant psychological signal usable by general-purpose models without a bespoke personality classifier.

It is not evidence that the model has recovered a person's complete identity, discovered an immutable trait essence, diagnosed mental illness, or earned the right to use such estimates in employment, credit, insurance, security, or other consequential decisions.

## Strongest counterargument

The chapter currently says that “ordinary language can now become another inference surface.” That survives the paper. The more aggressive interpretation does not.

The principal criterion is still **self-reported personality**. Agreement with self-report is meaningful psychometric evidence, but it is not independent ground truth about a hidden self. Big Five traits are useful constructs measured with error and context dependence; the paper itself begins from the limitations of questionnaire-based assessment.

The study also does not establish transport to arbitrary populations, languages, genres, life stages, or high-stakes institutional uses. Sample 1 was N=60 and Sample 2 N=108. The best result came from averaging across models. The authors report model-to-model variation. A deployment that uses one model, one short text, a different population, or a different construct is making a new empirical claim.

There is a second distinction worth protecting. **Predicting a measured trait is not the same as predicting the person.** If an LLM estimate correlates with a Big Five score and some daily behavior, that can be useful without granting the estimate ontological authority. For this book, that is a feature rather than a disappointment: an artificial identity can become consequential precisely because it is useful enough for a task, not because it is a complete portrait.

## Disconfirming test for the book

Chapter 2's inference-surface claim should narrow if independent work finds that performance falls sharply under any of the following:

- held-out populations with different demographic or linguistic composition;
- text produced for purposes unlike the study prompts/diaries;
- temporally separated writing from the same person when context changes;
- preregistered prediction of behavior not used to select or tune the scoring approach;
- single-model deployment rather than an ensemble/average;
- adversarial, strategic, ironic, role-played, or deliberately privacy-preserving language.

A useful future test would collect repeated naturalistic language from the same participants over months, freeze the model and scoring prompt, and ask separately about **trait agreement, temporal stability, incremental prediction beyond self-report, and error by subgroup**. The book's identity argument becomes stronger if the representation is both consequential and persistent; it becomes weaker if the estimate is mostly a context-sensitive reading of one sample of language.

## Prose opportunity

The manuscript already avoids the “AI knows you” cliché. A later prose pass can make the 2026 result more concrete by replacing “researchers reported” with the actual experimental shape: **60 people speaking streams of thought, 108 recording daily video diaries, seven commercial models, and the ensemble beating any single model's reliability in the reported comparison.**

That detail creates a better tension than a broad claim about psychological inference. The machine does not need a secret questionnaire. But neither does one paragraph of ordinary language become a certified personality file merely because seven models can extract a reproducible signal from it.

The chapter's broader thesis should remain: inference surfaces are expanding. The evidence does not justify the stronger proposition that representations built from those surfaces are complete, stable, or fit for consequential reuse.
