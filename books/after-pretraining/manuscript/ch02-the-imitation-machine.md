# The Imitation Machine

In September 2026, while the frontier laboratories were arguing about agents, reasoning, reward, and the increasingly exotic machinery of post-training, a quieter machine was doing what it had been doing for years. Common Crawl released another copy of the public web.

The September archive contained 2.17 billion pages. Uncompressed, it occupied 361.4 tebibytes. It joined a corpus that Common Crawl says now spans more than 300 billion pages collected over roughly fifteen years, with billions more arriving in a typical month. The organization is a nonprofit. Its purpose is almost disarmingly simple: collect samples of the public web and make them available in bulk so that researchers and companies do not need to build a search engine before they can study the internet. ([Common Crawl](https://commoncrawl.org/))

A crawl is not intelligence. It is not even a clean dataset. It contains navigation, duplicated pages, boilerplate, spam, dead links, accidental repetition, low-quality text, high-quality text, machine-generated text, legal documents, recipes, pornography, poetry, software manuals, political arguments, forgotten forum posts, product catalogs, scientific papers, and the thousand varieties of debris produced when billions of people and institutions publish things for reasons that have nothing to do with training a neural network.

But if the first act of modern generative AI had a mine, this was one of the pits.

The phrase "trained on the internet" is usually too crude to be useful. No serious model developer simply pours a raw crawl into a cluster and waits for intelligence to come out. Data is filtered, deduplicated, classified, mixed, weighted, tokenized, sometimes licensed, sometimes generated, and increasingly subjected to elaborate provenance and quality controls. The important point is not that the web became a dataset by itself. The important point is that, for a remarkable stretch of the industry's history, the dominant learning material already existed before the model arrived.

Someone had written the page. Someone had posted the code. Someone had argued the point, translated the sentence, answered the question, documented the bug, published the proof, described the molecule, uploaded the tutorial, or made the mistake.

The model's first education was retrospective.

In 2020, OpenAI published the GPT-3 paper. The headline number was 175 billion parameters, more than ten times the size of any previous nonsparse language model the authors compared it with. Less theatrical, but more revealing for the story of pretraining, was the table describing what the system read. The training mixture drew from filtered Common Crawl, WebText2, two book corpora, and English-language Wikipedia. The filtered Common Crawl component alone contained 410 billion tokens and carried 60 percent of the sampling weight. All GPT-3 models were trained for a total of 300 billion tokens. ([Brown et al., 2020](https://arxiv.org/abs/2005.14165))

That table contains a small lesson that tends to disappear when people talk about "more data." OpenAI did not sample those sources in proportion to their size. Wikipedia represented only about three billion tokens in the source pool but was sampled heavily enough to be seen several times during training. The filtered Common Crawl pool was much larger, yet less than half of it was traversed over the 300-billion-token run. The system was already being taught with a judgment about which human artifacts deserved more attention.

The training objective itself was less judgmental.

Given a sequence, predict the next token.

That is the engine beneath the word "pretraining." A token might be a word, a piece of a word, punctuation, code, or some other unit produced by the tokenizer. The model receives the previous tokens and assigns probabilities to what should come next. During training, its parameters are adjusted so that the token that actually appeared becomes more probable. Repeat the operation across hundreds of billions, then trillions, of tokens.

Nothing in the objective says: learn history.

Nothing says: learn to program.

Nothing says: build a representation of Paris, photosynthesis, double-entry bookkeeping, Python syntax, contract law, jokes, human grief, SQL joins, or the fact that a screwdriver is more useful than a spoon when the screw is loose.

The loss function asks for the next token.

The surprise was how much had to be learned in order to get better at answering that question.

Prediction sounds passive because humans can often predict language cheaply. Finish "peanut butter and..." and no theory of the world is required. But the easy completions are not where a large model spends all of its capacity. Predicting an unfamiliar paragraph in a medical text can require tracking anatomy and terminology. Predicting source code can require maintaining variables, data structures, interfaces, and conventions over long spans. Predicting the continuation of an argument can require representing what has already been claimed and what would contradict it. Predicting a chess transcript, a mathematical derivation, or a debugging discussion can reward representations that preserve structure rather than merely local phrasing.

A model does not need to understand those things in the human sense for the optimization pressure to favor internal states that are useful for predicting them. The philosophical argument over whether that deserves the word "understanding" can continue indefinitely. The engineering fact was harder to dismiss: as models and training runs grew, capabilities appeared that had not been separately programmed as modules.

GPT-3 made that visible because it could perform many tasks from instructions and examples placed directly in its context, without a gradient update for each new task. Translation, question answering, cloze completion, word manipulation, and some forms of arithmetic could be induced by a few examples in the prompt. Its performance was uneven and sometimes brittle. The paper itself devoted substantial space to failures and contamination concerns. Still, a general language-prediction system had begun to behave like a collection of tools that nobody had explicitly installed one by one.

That changed the industry's imagination.

The year before GPT-3, a language model was something many people still encountered as an autocomplete engine, a research curiosity, or a specialized component. After GPT-3, it became increasingly plausible that one sufficiently large model could absorb enough structure from text to serve as a general substrate for many tasks. The economic temptation was obvious. Instead of building one model per application, build a foundation and adapt it.

Then came a finding that made the recipe look almost industrial.

In early 2020, researchers at OpenAI published empirical scaling laws showing that language-model loss followed smooth power-law relationships with model size, dataset size, and training compute over the ranges they studied. The result did not mean that intelligence itself had been reduced to a straight line on log paper. It meant something narrower and, for capital allocation, almost as intoxicating: measured predictive performance improved with scale in regular enough ways that organizations could estimate returns to larger training runs before spending the full budget. ([Kaplan et al., 2020](https://arxiv.org/abs/2001.08361))

There is a difference between discovering that bigger systems sometimes work better and discovering a curve.

A curve can be financed.

If doubling a resource produces a roughly predictable improvement in loss, executives can budget for the cluster, engineers can design the training run, hardware companies can forecast demand, and investors can tell themselves that the next checkpoint is not an act of faith. The uncertainty does not disappear. It moves. The model may fail at important tasks. The training run may crash. The gains in cross-entropy may not translate cleanly into a product. Competitors may improve faster. But the existence of a scaling relationship converts part of research into planning.

It also creates a dangerous simplification.

"Scale" began to sound like a single variable when it was at least three: parameters, data, and compute. A model can be made larger without being trained long enough. A dataset can be expanded with material so low in quality that it contributes little. Compute can be spent inefficiently. The recipe has ratios.

DeepMind's Chinchilla work exposed one of them.

In 2022, researchers at DeepMind revisited the allocation of a fixed training-compute budget. Their conclusion was that many large language models had been oversized relative to the amount of data used to train them. They trained Chinchilla, a 70-billion-parameter model, on 1.3 trillion tokens. Gopher, an earlier DeepMind model, had 280 billion parameters. Chinchilla used the same training-compute budget and outperformed Gopher on most of the tasks DeepMind reported. ([DeepMind, 2022](https://deepmind.google/blog/an-empirical-analysis-of-compute-optimal-large-language-model-training/))

Four times fewer parameters. Much more data.

The lesson was not that small models always win. It was that unused data could be more valuable than unused parameter count. A giant model trained too briefly was like a library built with magnificent shelves and not enough books.

Even that analogy became dated quickly.

By 2024, Meta said its Llama 3 models had been pretrained on more than fifteen trillion tokens collected from publicly available sources. The training dataset was about seven times larger than Llama 2's, with four times as much code. Meta also reported an observation that complicated a simple reading of Chinchilla: its 8-billion- and 70-billion-parameter models continued to improve after being trained on far more tokens than a narrowly compute-optimal training calculation might suggest. One reason was economic. Training is paid once; inference is paid every time the model runs. A smaller model trained for longer can be expensive to create and cheap to serve. ([Meta, 2024](https://ai.meta.com/blog/meta-llama-3))

Pretraining had become an exercise not merely in teaching a model, but in deciding where to spend lifetime compute.

The historical numbers are worth holding next to each other. GPT-3: 300 billion training tokens in 2020. Chinchilla: 1.3 trillion in 2022. Llama 3: more than fifteen trillion in 2024.

These are not perfectly comparable systems, datasets, objectives, or disclosures, and the progression should not be mistaken for a universal law. But the direction is unmistakable. The industry learned to keep a model in school much longer.

That education did something astonishing.

It also did something incomplete.

A pretrained language model learns a distribution over continuations. A user, meanwhile, usually wants an outcome.

Those are different contracts.

Ask a base model to continue an online argument and the statistically appropriate continuation may be an insult. Ask it to complete a medical forum thread and it may imitate the confidence, confusion, anecdotes, or misinformation present in that genre. Ask it a question and, from the perspective of the training objective, a plausible continuation can be rewarded even when the human wanted a concise answer, an admission of uncertainty, or a refusal to fabricate.

The model has learned from a record of human behavior without being told which parts of the record deserve reenactment.

OpenAI described this problem plainly when it introduced InstructGPT in 2022. GPT-3 had been trained to predict the next word on internet text, the company wrote, rather than to safely perform the task a user wanted. The remedy was not another hundred billion parameters. It was a different kind of learning signal. Human labelers wrote demonstrations, ranked model outputs, and supplied the preference information used to train a reward model and then fine-tune the language model with reinforcement learning from human feedback. ([Ouyang et al., 2022](https://arxiv.org/abs/2203.02155))

One result from that work should have changed more conversations about scale than it did. On OpenAI's prompt distribution, human evaluators preferred outputs from a 1.3-billion-parameter InstructGPT model to outputs from the 175-billion-parameter GPT-3 model.

The smaller model had roughly one-hundredth the parameter count.

This did not prove that post-training was more important than pretraining. InstructGPT existed because GPT-3's pretrained representations existed first. The small model still came from the same broad family of pretrained systems. The comparison was also tied to a particular prompt distribution and evaluation setup. But as a product lesson it was brutal: a huge amount of general predictive capability can remain commercially awkward until the model learns what kind of answer a person is actually asking for.

Pretraining created capacity.

Post-training shaped conduct.

The distinction is still too neat if treated as a wall. Pretraining data contains instructions, preferences, dialogue, corrections, grades, code review, moral arguments, and examples of people responding to outcomes. Post-training systems often use synthetic data produced by pretrained models. Some techniques that look like reinforcement learning may mostly amplify behaviors that already existed at low probability. The stages leak into one another.

Yet the operational difference remains.

During pretraining, the model mostly learns from artifacts whose outcomes have already been decided by someone else. A code repository contains commits that survived long enough to be published. A textbook contains the worked proof. A forum contains the explanation after the bug was found. A paper contains the experiment after the authors chose what to report. Even failures in the corpus are narrated as text from the outside.

The model receives the record, not the consequence.

Consider the difference between reading ten thousand debugging conversations and being placed inside a repository with a failing test.

The conversations may teach syntax, patterns of diagnosis, common mistakes, library behavior, and the social grammar of software work. They can teach an enormous amount. But when the model edits the live repository and reruns the test, something qualitatively different becomes available. Its own action has produced a new state. The output of the test is evidence about that action. The next move can depend on a consequence that did not exist in the training corpus before the agent acted.

The data has become endogenous.

This is the hinge of the book.

The pretraining era was dominated by a question of collection: what human-produced information can be gathered, cleaned, licensed, filtered, or synthesized into a useful corpus?

The emerging agent era adds a different question: what experiences can a machine be allowed to create?

The distinction matters because the two sources of data have different economics.

A web page can often be copied once and reused by many trainers, subject to law, contracts, access controls, and the increasingly fierce disputes over training rights. A live environment may be rivalrous in ways a static text corpus is not. There is one production database. One robot is occupying the assembly cell. One chemistry instrument is running the assay. One browser session can place an order. One cyber range consumes compute. One customer's repository contains private failures that competitors cannot see.

Experience can be expensive even when tokens become cheap.

It can also be proprietary without being secret in the traditional sense. A company may not possess unique facts, but it may possess a stream of consequences that only appears because its system is used. A search engine sees which results people select. A marketplace sees whether recommendations become purchases or returns. A coding platform can observe which suggested changes survive tests and review. A logistics network can observe which plans fail when weather, traffic, inventory, and labor collide.

The strategic asset is the loop that converts action into evidence.

This is why the word "imitation" has to be handled carefully.

Calling a pretrained model an imitation machine can sound dismissive, as though a system capable of writing software, translating languages, answering difficult questions, and composing coherent arguments is merely copying phrases from a scrapbook. That is not the claim. Statistical prediction across sufficiently rich data can produce abstractions that are useful far beyond any one training example. Generalization is real. In-context learning is real. Novel combinations are real. A compressor that has to model the structure of a civilization's text can acquire representations with surprising reach.

But the source of correction remains external to the model's own behavior.

When GPT-3 predicted the wrong next token during training, the correct token was already present in the dataset. The world did not need to run again.

An agent changes that arrangement. It can enter a state for which no human-written continuation exists, choose an action, and cause the next piece of training information to come into existence.

That is a much more demanding form of education because reality does not conveniently provide a loss function.

A compiler gives useful feedback because software has formal structure. A Go board gives useful feedback because the rules are closed. A math problem can sometimes be checked exactly. In ordinary life, consequences are delayed, ambiguous, strategic, contested, or impossible to attribute to one decision. A manager changes a policy and revenue rises three months later. Was the policy correct, or did the market move? A physician recommends a treatment and the patient improves. Was that the treatment, natural recovery, adherence, another drug, or chance? A diplomat chooses one sentence in a negotiation and the counterpart yields. Was it persuasion, domestic pressure, bluff, fatigue, or information the agent never saw?

The web can record all of those stories.

It cannot automatically tell a machine which causal lesson to extract from them.

Pretraining thrives because language supplies supervision everywhere. Every next token is another target. A trillion-token corpus contains a trillion little opportunities to be wrong and adjust.

Action does not.

A long agent trajectory may produce one useful terminal outcome after thousands of decisions. The reward can be sparse. The credit assignment is hard. The environment can be costly. Exploration can break things. The evaluator can be mistaken. The system can discover shortcuts that satisfy the metric while defeating the purpose.

All of the machinery in the previous chapter exists because experiential learning is less convenient than prediction.

Critics estimate what may happen before the final reward arrives. Group-based methods compare several attempts so the learner can infer relative quality. Verifiers turn outcomes into scores. KL penalties constrain updates. Replay tries to wring additional learning from expensive old experience. Simulators create places where failure is affordable.

Seen from this angle, post-training is not the epilogue to the scaling era.

It is an attempt to build a second source of supervision after the cheap abundance of next-token targets runs out.

There is a tempting story in which this second source eventually replaces the first. Models will generate their own curricula, solve their own problems, test their own work, create synthetic worlds, and become progressively less dependent on the accumulated record of human knowledge.

That story is useful mainly as something to resist.

A model that explores effectively still begins somewhere. Its priors come from training. Its environment has rules. Its verifier has assumptions. Its reward function embodies a choice about what counts. Its simulator reflects a model of reality. Its synthetic data descends from earlier models and earlier corpora. Even AlphaZero, the canonical example of learning without human game records, was given the rules of the game and an environment in which wins and losses meant something unambiguous.

Self-generated experience is not knowledge from nowhere.

The more interesting question is how the mixture changes.

Suppose pretraining supplies broad world knowledge, language, coding syntax, factual associations, and a repertoire of strategies. Suppose post-training then allocates probability toward strategies that succeed under a task distribution. Suppose deployment generates new trajectories that reveal failures absent from benchmarks. Suppose those failures become training tasks. The next model now begins with a corpus partly shaped by the behavior of the previous one.

The boundary between dataset and environment starts to dissolve.

Meta's Llama 3 work already hinted at one version of this recursion from the data side. Meta said it used earlier Llama models to help create text-quality classifiers for Llama 3's pretraining pipeline. A model trained on yesterday's data helped decide which pieces of today's data were good enough to train its successor. That is not reinforcement learning, but it is evidence of a larger feedback process: models increasingly participate in manufacturing the conditions under which later models learn. ([Meta, 2024](https://ai.meta.com/blog/meta-llama-3))

Once agents become capable enough to act in meaningful environments, that recursion gets stronger.

The coding agent can produce the failure that becomes tomorrow's benchmark. The scientific agent can propose the experiment whose result becomes tomorrow's training example. The customer-service agent can generate the conversation whose resolution status becomes tomorrow's reward signal. The security agent can discover the exploit whose patch becomes tomorrow's task.

A static internet is a record of civilization.

An active agent economy could become a record of machines colliding with civilization and learning from the dents.

That prospect makes pretraining look less obsolete, not more.

The broader and more accurate the model's prior knowledge, the more intelligently it can explore. An agent that already understands programming languages needs fewer random edits to diagnose a bug. A robot with strong visual representations needs fewer physical trials to recognize objects. A scientific model that has absorbed chemistry literature can search a smaller region of experimental space. Experience is expensive, so prior knowledge has economic value precisely because it can prevent stupid experiences.

The future training stack may therefore look less like a succession—pretraining, then post-training, then something after that—than a circulation system.

Corpus creates model.

Model acts in environment.

Environment produces consequence.

Consequence produces trajectory.

Trajectory enters corpus.

The model that comes next inherits both what people wrote and what machines discovered by trying.

At that point, the phrase "training data" will be doing too much work.

Some data will be archives. Some will be demonstrations. Some will be preference judgments. Some will be synthetic problems. Some will be tool traces. Some will be test results. Some will be records of failure. Some will be measurements taken from physical systems. Some will be outcomes produced because an agent took an action no human had taken in that exact state before.

The provenance will matter because the epistemic status differs.

A sentence copied from a textbook is not equivalent to a reward produced by a unit test. A reward from a unit test is not equivalent to a judge model's score. A judge model's score is not equivalent to a clinical outcome. A clinical outcome is not equivalent to a causal explanation of why the outcome happened.

If all of them are reduced to "data," the differences disappear exactly where they matter most.

Pretraining taught the industry to obsess over quantity without entirely losing sight of quality.

The next phase will force it to obsess over consequence without confusing consequence with truth.

Common Crawl will keep crawling. Archives will keep growing. Model developers will keep finding better mixtures, filters, synthetic augmentations, and ways to extract more capability from enormous corpora. The library is not closing.

But a library can only contain what has already been written.

An agent, given permission, can do something that was never in the book.

Then the world has to answer.
