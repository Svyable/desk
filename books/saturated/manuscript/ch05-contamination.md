# Contamination

SWE-bench Verified began as a repair.

The original SWE-bench had an appealing premise. Give an AI system a real software issue pulled from GitHub, place it inside the historical repository, and ask it to produce a patch that passes the tests. The task looked closer to programming than another multiple-choice exam because it inherited the disorder of software itself: old code, incomplete descriptions, dependencies, tests written by somebody else, and a repository large enough that the answer was not sitting politely beside the question.

Then researchers discovered a measurement problem.

Some issues were underspecified. Some tests rejected reasonable solutions. A model could fail because the benchmark itself was unfair.

OpenAI and the SWE-bench authors responded in 2024 by bringing in professional developers. Ninety-three developers screened 1,699 samples. They looked for issue descriptions that did not contain enough information and tests that could incorrectly reject a valid fix. The result was a 500-task subset called SWE-bench Verified.

The name described the ambition.

Two years later, OpenAI stopped treating it as a useful frontier coding measure.

The reason was no longer mainly that the tasks had been badly constructed.

The benchmark had become famous.

That can be fatal in a different way.

Public benchmarks live on the same internet from which modern language models learn. Their questions appear in papers. Their solutions appear in repositories. Their failures become blog posts. Researchers publish trajectories showing how an agent solved a task. Developers use the benchmark to tune prompts and systems. Fine-tuning datasets absorb public code and technical discussion. Synthetic-data pipelines can reproduce benchmark material after encountering it elsewhere.

A test that begins outside the training process can slowly migrate into it.

This is contamination.

The word is useful because it sounds accidental. Often it is. A crawler does not need to recognize a benchmark by name. It only needs to collect a page that happens to contain its questions. A synthetic-data generator does not need a plan to poison an evaluation. It can ingest a worked example, restate it, and send the same underlying information into another training set.

But "contamination" can hide several different events.

The exact question can appear in training.

A close paraphrase can appear.

The answer can appear without the question.

A solution trajectory can reveal the method.

The benchmark repository can become part of a coding corpus.

A later fine-tune can target benchmark-like tasks even if pretraining was clean.

A developer can repeatedly optimize a system against the public score.

All of those reduce the distance between training and testing. They do not do so in the same way.

The cleanest way to understand the problem is to start with a controlled experiment rather than with allegations about proprietary training data.

In 2025, Muhammed Yusuf Kocyigit and colleagues built such an experiment around machine translation. They began with a deliberately decontaminated train-test split. Then they introduced test material into training under controlled conditions.

The result was not subtle.

When both the source sentence and target translation from the evaluation data were included in training, measured BLEU performance rose artificially. In their experiments, the inflation was larger for the 8-billion-parameter model than for the 1-billion-parameter model and could reach roughly thirty BLEU points in some settings. Contaminating only one side of the translation pair produced smaller and less consistent effects.

The exact numbers belong to that experiment.

The mechanism travels.

A model can appear to generalize because the evaluation asks it to reproduce information it has already been optimized on.

That statement seems obvious until training sets become too large to inspect.

Traditional machine learning made the boundary between train and test almost ceremonial. A researcher split a dataset. The model learned from one partition. The other partition stayed hidden until evaluation. Everyone understood that training on the test labels would invalidate the result.

Frontier language models inherit data from the world rather than from one curated table.

The world does not respect the split.

A benchmark author can withhold the test set before publication. Once the benchmark becomes public, the future changes. Copies proliferate. Questions are quoted. Answers are discussed. Repositories are forked. Papers are mirrored. Dataset cards appear. Tutorials turn difficult examples into instruction.

Today's test set becomes tomorrow's web data.

This produces a strange asymmetry.

The benchmark is fixed.

The training corpus is moving around it.

Contamination can therefore increase over time without anybody changing a single benchmark file.

That is one reason benchmark age matters.

OpenAI's 2026 decision on SWE-bench Verified makes more sense in that frame. The company argued that the benchmark had become increasingly contaminated and no longer provided meaningful signal about frontier software-development capability. It recommended moving to newer evaluations.

That claim should be read with the normal caution applied to first-party model developers. OpenAI participates in the same competitive benchmark ecosystem it is evaluating. It has reasons to prefer measurements that distinguish newer systems.

The history still matters.

A benchmark that had been carefully human-verified for task quality could lose usefulness for a reason its creators could not permanently solve at launch.

Verification is not preservation.

A clean test is a temporary state.

Researchers have tried to detect contamination after the fact. This is difficult because the most interesting models often come with little or no public record of their training data.

Chunyuan Deng and colleagues approached the problem from two directions in work published at NAACL in 2024. For open corpora, they used retrieval to look for overlap. For systems whose underlying data could not be inspected, they developed a black-box procedure called test-set slot guessing.

The intuition is clever.

Take a benchmark question whose answer options contain some arbitrary or unlikely material. Hide part of the benchmark item. Ask the model to reconstruct what is missing.

General knowledge should help with the actual subject matter.

It should be less helpful at reproducing benchmark-specific oddities.

Deng and colleagues reported that some commercial models could reproduce missing benchmark material at rates that raised serious exposure concerns. On MMLU, their reported exact-match rates for guessing missing options reached 52 percent for ChatGPT and 57 percent for GPT-4.

That is suggestive evidence.

It is not a training log.

A model can reconstruct text for reasons other than direct memorization. Some benchmark items may have circulated broadly. Some answer structures are predictable. Black-box contamination detection is inference under uncertainty.

The important point is that contamination changes what the evaluator is trying to prove.

Detection becomes harder as soon as exposure stops being verbatim. Early decontamination pipelines often relied on string overlap: remove a training document if it shares a long sequence of tokens with a benchmark question. That catches copies. It is weaker against translations, paraphrases, worked solutions, or synthetic examples that preserve the same problem while changing the surface form.

Research by Shuo Yang and colleagues demonstrated how large that gap can become. They showed that ordinary string-matching defenses can miss benchmark variants created through rewriting or translation, and that a model exposed to transformed test material can still gain a large evaluation advantage. The unsettling part is not one reported score. It is that "not an exact duplicate" does not mean "not exposed to the answer structure."

This turns contamination detection into a semantic problem.

Did the model see these exact words?

Did it see the same mathematical object with different numbers?

Did it see a worked solution whose method transfers almost mechanically?

Did it see a translation of the question?

Did it see synthetic data generated from a model that had already absorbed the benchmark?

Those questions describe a continuum rather than a clean binary label.

The stricter the evaluator becomes, the closer contamination starts to resemble ordinary learning. A student who studies one thousand calculus examples is expected to recognize the structure of a new derivative problem. A model that trains on one thousand benchmark-derived variants may also have learned something general. The evaluation challenge is deciding whether the held-out item still demands meaningful transfer beyond the training examples.

This is why benchmark contamination cannot be diagnosed only by provenance. It also needs a claim about novelty.

Suppose a model answers a difficult chemistry question correctly.

If the item is clean, the answer provides evidence that the system can produce the result on an unseen problem of that type.

If the item appeared in training with its solution, the same answer may provide evidence of memory.

If a close variant appeared, the result might reflect some combination of memory and generalization.

The output is identical.

The evidentiary meaning is not.

This is why "the model got it right" becomes an incomplete sentence once public benchmarks enter training ecosystems.

Contamination does not make the answer false.

It weakens the inference from answer to capability.

The distinction is especially important because memory is itself a capability. Humans study examples. Doctors remember cases. Programmers recall familiar bugs. A model that has seen useful material can be more useful because it has seen useful material.

The problem appears when an evaluation claims to measure transfer to unseen cases.

Training exposure is then information about the experiment, not a moral flaw in the system.

The same restraint should apply to companies.

A developer is not necessarily cheating because its model performs well on a public benchmark that may exist somewhere in a giant pretraining corpus. At frontier scale, perfect exclusion can be technically difficult. Web datasets are duplicated, transformed, mirrored, translated, quoted, and synthetically reproduced.

Intent matters for accusations.

It matters less for validity.

An inadvertently contaminated test can still give a misleading answer.

The obvious solution is to rewrite the questions.

That turns out to be less obvious than it sounds.

If an old benchmark is believed to be contaminated, researchers can paraphrase questions, translate them, alter names and numbers, or generate new variants that preserve the underlying skill. The hope is that the model will no longer recognize the memorized surface form, allowing generalization to be measured again.

But preserving meaning while removing exposure is a delicate operation.

Yifan Sun and colleagues tested twenty contamination-mitigation strategies across five benchmarks and ten language models in work published at ICML in 2025. They introduced two useful concepts: fidelity to the original evaluation and resistance to contamination.

The two pulled against each other.

Changes gentle enough to preserve the original question often failed to eliminate the advantage of contamination. Changes strong enough to resist contamination could alter what was being measured.

There was no magic paraphrase.

This is the same difficulty that appears throughout *Saturated*. Fix the meter and the measurand can move.

A rewritten question may be fresher.

It may also be a different question.

LiveBench takes a more aggressive approach.

Its architecture is worth lingering on because it treats contamination as a scheduling problem as much as a data-cleaning problem. Questions are drawn from recent materials, new releases arrive regularly, and the most recent questions can be held back before full public disclosure. The benchmark is trying to create an evaluation window: a period in which the task exists, ground truth exists, but widespread exposure is less likely.

That window can never be perfectly sealed. A model provider may have access to recent sources. A benchmark contributor can leak material. A search-enabled model may retrieve the source at evaluation time. The method reduces one route of exposure without claiming to solve every route.

The objective scoring design matters too. Many attempts to create fresh benchmarks rely on human preference or another language model as judge because fresh questions are expensive to grade. LiveBench instead emphasizes questions with verifiable answers where possible. This limits one source of judge drift while constraining the kinds of tasks the benchmark can include.

Freshness, objectivity, breadth, and realism pull in different directions.

The current LiveBench site says the full question set refreshes over a six-month cycle. That policy turns benchmark maintenance into an operating cadence rather than a one-time publication event. A model's score should therefore be attached not only to the benchmark name but to the dated release.

Instead of expecting one static benchmark to remain clean indefinitely, the project was designed around renewal. It uses questions derived from recent sources, objective ground-truth answers, regular updates, and delayed release of some current questions. The benchmark refreshes completely over time.

The original paper called the design contamination-free.

The current project language is more cautious: contamination-limited.

That change in vocabulary is healthy.

No public benchmark can make a permanent promise about what future training pipelines will ingest.

Freshness buys time.

It does not abolish the internet.

LiveBench also reveals the cost of a moving test.

If the questions change, the historical series becomes more complicated. A model evaluated in January may not face exactly the same material as a model evaluated six months later. Difficulty can drift. Domain composition can change. New task types can enter.

Static benchmarks give comparability and accumulate exposure.

Dynamic benchmarks reduce exposure and sacrifice some comparability.

The evaluator chooses which risk matters more.

There are more radical options.

One is to create one-time exams. Freeze a model version, commission or generate a fresh test after the training process is complete, evaluate once, then publish the material for scrutiny. The method resembles a sealed clinical endpoint more than a permanent leaderboard. It can provide unusually clean evidence at one moment and almost no reusable infrastructure for continuous public comparison.

Another is to maintain paired public and private forms of the same construct. The public set lets researchers debug and compare methods. The private set estimates how much of the public gain transfers when the exact items have not circulated. If the two move together, contamination becomes a less plausible explanation. If the public score races ahead while the private score stalls, the divergence itself is evidence worth investigating.

Neither design needs a perfect forensic answer about what entered pretraining. They use experimental structure to make exposure less decisive.

Keep the test private.

Generate questions procedurally.

Commission fresh expert tasks only after a model is frozen.

Evaluate on events that happened after the training cutoff.

Use real deployment outcomes.

Each creates new problems.

Private tests demand trust in the test keeper.

Procedural tests can accidentally measure facility with the generator.

Fresh experts are expensive.

Post-cutoff events can favor browsing over underlying knowledge.

Deployment outcomes are slow, noisy, and hard to compare.

No design restores the childhood innocence of train and test.

The problem is structural because general-purpose models train on general-purpose data.

This is where contamination differs from the older problem of overfitting a small supervised dataset.

A conventional classifier can be trained on one thousand examples and tested on one thousand separate examples drawn from the same distribution. The researcher controls both piles.

A frontier model may have consumed trillions of tokens from public and licensed sources before the benchmark author even begins the audit. The model developer may not be able to state with certainty whether a particular sentence, paraphrase, code fragment, or derivative appeared somewhere in the mixture.

The evaluator must therefore reason probabilistically about exposure.

That makes provenance more valuable.

Dates matter.

Was the benchmark published before the model's known training cutoff?

Were the questions public?

Were solutions widely available?

Did a fine-tuning stage have access to them?

Was the model evaluated through browsing?

Did the benchmark appear in synthetic training pipelines?

These facts do not automatically prove contamination.

They establish the exposure surface.

A good evaluation should make that surface legible.

One useful practice is to keep canaries or identifiers in benchmark data that allow developers to detect accidental ingestion. Another is to retain private items that can be compared with public ones. Another is to rotate tasks fast enough that the current evaluation postdates the plausible training window.

None solves the problem after the test becomes famous.

Fame is itself a contamination pressure.

A benchmark that matters will be discussed.

A benchmark that is discussed will be copied.

A benchmark that is copied will become easier to ingest.

The more useful the benchmark becomes as a social coordination device, the harder it becomes to preserve as untouched evidence.

That is a nasty trade.

The field wants transparent benchmarks because transparency allows scrutiny. Researchers can inspect the tasks, find mistakes, reproduce results, and understand what systems are failing.

The field also wants hidden benchmarks because hidden material is harder to train on.

Those are conflicting virtues.

The solution is likely not a single benchmark with a perfect policy. It is a portfolio.

Public tasks for scientific inspection.

Private tasks for cleaner measurement.

Rolling tasks for freshness.

Field evidence for external validity.

Controlled contamination studies to estimate how badly exposure can inflate scores.

The goal is not purity.

The goal is to know what the score still supports.

That means contamination should be reported as a measurement limitation rather than whispered as an accusation.

There is a difference between saying "this model cheated" and saying "this evaluation cannot establish unseen-task generalization because exposure cannot be ruled out."

The second sentence is less exciting.

It is also more useful.

The practical consequence is that a serious benchmark report needs an exposure statement. Not a theatrical certificate of purity, but a dated account of what is known. When were the questions created? When did they become public? Which versions of the evaluated model could plausibly have trained after that date? Were benchmark repositories excluded from later fine-tuning? Are private or post-cutoff items available as a comparison?

This does not solve closed-model uncertainty. It improves the quality of the uncertainty.

A developer who cannot disclose training data can still report performance on fresh held-out tasks. An independent evaluator can compare public and private forms. A benchmark maintainer can publish the dates when items entered circulation. Researchers can look for divergence between old public questions and newer analogues.

The strongest evidence against a contamination explanation is not an assurance that nobody ever saw the test. It is transfer. If the system performs similarly on fresh problems that require the same underlying skill, the public score becomes easier to interpret. If performance collapses when the surface form and provenance change, familiarity becomes a stronger competing explanation.

That logic also protects against the opposite mistake. Benchmark skeptics sometimes treat any possible exposure as grounds to discard an entire result. That throws away information too aggressively. A contaminated item may still reveal something about execution, formatting, tool use, or reliability even if it can no longer establish unseen-task generalization. The evaluator should narrow the claim rather than pretend the observation vanished.

SWE-bench Verified did not become worthless because somebody forgot how to verify software tasks. Its lifecycle exposed a different problem. The field improved the questions, then improved the systems, then published enough about both that the old test could no longer carry the same evidentiary weight.

A benchmark can be well designed and still expire.

Public knowledge helped kill it.

That is not a paradox.

It is what happens when the examination becomes part of the curriculum.