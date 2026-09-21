# One Rollout

On September 18, 2026, a technical report appeared with a title that sounded like another piece of reinforcement-learning machinery: *KL-Regularized Policy Optimization for Critic-Free Agentic Reinforcement Learning*. The paper came with equations, implementation notes, a toy example, and a flow diagram dense enough to make most readers decide that whatever mattered here could safely be left to the specialists.

The diagram is worth looking at anyway.

Across nine boxes, the authors move from a local policy objective through a Gibbs optimum, an exact normalizer, a regression target, score centering, an exact backpropagation surrogate, and finally a Monte Carlo estimate of a KL correction. The notation is compact and the vocabulary belongs to a field that has been accumulating abstractions for decades. Yet the most consequential phrases in the paper are almost ordinary: one complete rollout; no same-prompt response group; no learned critic; no learned normalizer.

Something is being removed.

That is the story hiding in the algebra.

A modern language model is first trained by prediction. Give it a sequence of tokens and ask it to predict the next one. Repeat that exercise across an absurd quantity of text and code. The resulting system absorbs patterns of language, facts, styles, procedures, fragments of mathematics, software conventions, arguments, jokes, and the broad statistical debris of human culture. This is pretraining, and it is the foundation beneath the systems that made generative AI feel sudden even though the engineering lineage was long.

Prediction, however, has an obvious limitation once the machine is expected to do something in the world.

Suppose an agent has to fix a software bug. The final result may require hundreds of small choices: inspect a repository, search for a symbol, read tests, form a hypothesis, edit a file, run a command, notice a failure, revise the hypothesis, try again, and stop only when the tests pass for the right reason. The internet contains examples of all of those actions. What it does not contain in sufficient quantity is the exact trajectory needed for every new repository, every new failure, every new dependency, every new state of the world.

The model has to learn what happens after it acts.

That sounds obvious, but it changes the source of intelligence. A static corpus says, in effect, here is what people have done and written before. An interactive environment says: try something.

Then it answers back.

Reinforcement learning has always been built around this exchange. An agent takes an action, receives a consequence, and adjusts behavior in pursuit of higher reward. In the cleanest textbook cases, the world is a game, a simulation, or a controlled environment with an explicit score. The action is easy to define. So is success.

Language models inherited a messier world.

A sentence is made of many token choices, yet the useful judgment may arrive only at the end. A program either passes its tests or does not. A mathematical proof lands on a correct answer or fails somewhere upstream. An agent completes a task or leaves the browser in the wrong state. A research workflow produces evidence or produces noise. Between the first token and the terminal result lies a long chain of actions that may have been individually plausible and collectively wrong.

The question is how to turn the final consequence into a learning signal.

For years, one standard answer involved a critic.

In actor-critic reinforcement learning, the policy is the actor: it chooses what to do. The critic estimates how good the situation or action is expected to be. That estimate can reduce the variance of learning and make updates more efficient, but it introduces another model, another target, another source of error, and another piece of machinery that must remain useful as the policy changes.

Large-language-model post-training inherited variants of this arrangement. Proximal Policy Optimization, or PPO, became central to early reinforcement learning from human feedback. In OpenAI's 2020 work on summarization, for example, humans compared model outputs, a reward model learned to predict those preferences, and the language model was optimized with PPO while a KL penalty kept it from drifting too far from its supervised starting point. OpenAI's own account is unusually clear about the bargain: next-token prediction does not directly encode the behavior people want, so human judgments were converted into a reward and the policy was optimized against that proxy. The same report also records the danger. Push the proxy too hard and quality eventually gets worse. ([OpenAI, 2020](https://openai.com/index/learning-to-summarize-with-human-feedback/))

The critic was not the only cost. Some newer methods estimated whether one response was good by comparing it with a group of responses to the same prompt. Generate several attempts. Score them. Use the distribution of outcomes to estimate which choices deserved more credit. This can work extremely well. It also means the training system may need several expensive completions to learn from one prompt.

DeepSeek-R1 made that tradeoff impossible to ignore.

The 2025 *Nature* paper describing DeepSeek-R1 reported that reinforcement learning could induce stronger reasoning behavior without requiring human-labeled reasoning trajectories at every step. DeepSeek-R1-Zero was trained from a base model with large-scale reinforcement learning before supervised fine-tuning, and the authors reported the emergence of behaviors such as self-reflection, verification, and strategy adaptation. The production R1 system used a more complicated multistage pipeline, but the result pushed a technical term—GRPO, Group Relative Policy Optimization—into the center of the reasoning-model conversation. GRPO removed the separate value model used in PPO and estimated advantages from rewards within a group of sampled responses. ([Guo et al., *Nature*, 2025](https://www.nature.com/articles/s41586-025-09422-z))

The group replaced part of the critic.

Then researchers began asking whether the group could disappear too.

This is where the September 2026 KLPO report becomes interesting. Its authors describe a "critic-free, single-rollout" method for asynchronous off-policy agentic reinforcement learning. The default implementation uses one complete response per prompt. Rather than requiring extra complete rollouts from the same prompt, it draws auxiliary tokens at visited prefixes to estimate a conditional score correction. Under the assumptions developed in the report, those samples recover the full-KL gradient in expectation. The method is designed so historical sampler data can be reused while a current trainer model updates against it. ([Zhang et al., 2026](https://github.com/yifanzhang-pro/KLPO))

The phrase "single rollout" deserves to be translated into economics.

A rollout is experience. In an agent system it may be a long, expensive sequence involving model inference, tool calls, browser sessions, code execution, database queries, simulated actions, or interactions with some environment that has to be maintained and observed. If a learning algorithm needs a group of full rollouts to extract a useful update, the data cost multiplies. If it can recover a useful learning signal from one trajectory plus much cheaper local samples, the same budget may support more distinct tasks, more varied states, or more updates from experience already collected.

One paper does not settle that future. KLPO's own release notes are careful about scope. The repository provides theory, a loss implementation, CPU verification, and native training integration; it explicitly says paper-scale GPU benchmark reproduction had not yet been validated in the release available at the time of writing. Some of its equivalence claims depend on assumptions about the sampler, the draws, the transition structure, and how data is reused. Fixed historical records can become an empirical surrogate rather than an exact unbiased estimator once the conditions change.

That caution is a reason to pay attention, not a reason to look away.

Research fields reveal their priorities in what they spend effort trying to eliminate.

The history of computing is full of components that began as necessary scaffolding and later became bottlenecks. Handwritten features gave way to representation learning. Carefully constructed game knowledge gave way, in some domains, to systems that learned more from self-play and search. Human demonstrations remain enormously important, but researchers keep testing how much of their role can be replaced by cheaper signals, synthetic data, environmental feedback, or computation.

Rich Sutton's 2019 essay "The Bitter Lesson" captured the recurring pattern with unusual bluntness. Across chess, Go, speech recognition, and computer vision, Sutton argued that methods able to exploit increasing computation tended to win in the long run over approaches that tried to encode more human knowledge into the system. Search and learning were the general methods he emphasized. The essay is not a law of nature, and the details of current AI systems hardly fit into a slogan. Still, the pressure it described is visible again: replace bespoke human judgment where possible with a process that can scale with computation. ([Sutton, 2019](https://bitterlesson.ai/))

Go made the idea legible to the public before language models did.

AlphaGo famously combined deep neural networks with search and reinforcement learning. After the system defeated Lee Sedol in 2016, its successors pushed further toward self-generated experience. The important fact was not merely that the machine could imitate strong human moves. It could improve by playing, searching, and discovering actions that human records did not teach it directly. DeepMind describes AlphaGo's legacy in precisely those terms: reinforcement learning allowed machines to learn hard problems through trial and error, and later systems such as AlphaZero extended that lineage. ([Google DeepMind](https://deepmind.google/research/alphago/))

The seductive analogy is that language agents will now do the same thing everywhere.

They will not.

Games are unusually forgiving laboratories for reinforcement learning because the rules are explicit, state is observable, and reward is difficult to argue with. The board does not care whether a move is eloquent. Checkmate is checkmate. A program with a correct test suite offers some of the same luxury. A mathematical answer may also be mechanically verifiable. This is why reinforcement learning with verifiable rewards, usually shortened to RLVR, became such an important part of reasoning-model research.

In 2026, ICLR published evidence that RLVR could extend reasoning performance on mathematical and coding tasks and could incentivize correct reasoning even when the reward was based on final-answer correctness. The argument matters because it suggests that a sparse terminal signal can sometimes shape the internal path without a human annotating every intermediate step. ([Wen et al., ICLR 2026](https://proceedings.iclr.cc/paper_files/paper/2026/hash/517f9b9c227b9dd51dba4560f37165ed-Abstract-Conference.html))

But verifiability is a privilege.

A compiler can tell you whether code builds. Unit tests can tell you whether specified behavior holds. A theorem checker can reject an invalid proof. A game can return a score. None of these mechanisms can tell you whether a corporate strategy is wise, whether a medical explanation is appropriately calibrated for a frightened patient, whether a diplomatic message will create an avoidable crisis, whether a scientific hypothesis is worth a year of laboratory time, or whether a beautifully optimized metric has quietly stopped representing the thing people cared about.

The moment agents move into those domains, reward design becomes politics by another name.

Even apparently objective domains contain traps. Tests can be incomplete. Benchmarks can be gamed. A reward that measures final correctness may ignore waste, fragility, deception, or unsafe shortcuts. A system trained against a narrow verifier can learn the verifier's boundary conditions rather than the underlying task. Optimizers are not malicious when they exploit a loophole. They are doing exactly what an optimizer is for.

This is the first tension of the post-pretraining era: the better machines become at learning from consequences, the more consequential our choice of consequence becomes.

The second tension is exploration.

Learning requires trying actions whose value is not already known. If training pushes probability mass too aggressively toward strategies that have worked before, the system can lose the low-probability alternatives from which a new solution might have emerged. Research presented at ACL in 2026 examined this failure mode in RLVR and described useful low-probability tokens as "reasoning sparks." The terminology is colorful, but the mechanism is familiar: exploit too early and the search space collapses. The authors reported that regularizing those low-probability candidates could sustain on-policy training in settings where baselines lost exploration. ([Huang et al., ACL 2026](https://aclanthology.org/2026.findings-acl.1209/))

A learning system therefore has to do two contradictory things at once. It must become less random in places where experience has taught it what works. It must remain random enough to discover that what worked yesterday is not the only strategy available tomorrow.

The human version of this problem has names like habit, doctrine, lock-in, and expertise.

The machine version has entropy.

By 2026, researchers were pushing beyond static collections of verifiable problems toward adaptive environments that could generate new tasks and adjust difficulty as models improved. One line of work, RLVE, described hundreds of procedurally generated verifiable environments and argued that scaling the variety of environments could improve generalizable reasoning more effectively than simply continuing the same reinforcement-learning distribution. The important word there is environment. The training asset is no longer only a dataset of solved examples. It is a machine for producing experiences, checking outcomes, and staying difficult enough to keep teaching. ([Zeng et al., 2025](https://arxiv.org/abs/2511.07317))

This changes what an AI company may eventually consider proprietary.

In the pretraining era, advantage could come from access to large corpora, compute, model architecture, engineering talent, and the ability to train reliably at scale. Those things still matter. After pretraining, another asset becomes legible: a closed loop between action and consequence.

A coding agent connected to millions of real repositories can observe a distribution of failures that no static benchmark captures. A customer-support agent can see which interventions actually resolve cases. A cybersecurity agent can be placed inside instrumented ranges where attacks and defenses produce measurable outcomes. A robotic system can collect physical trajectories. A scientific agent can propose experiments and learn from results if the laboratory itself has been wired into the loop.

The valuable object is not the log file.

It is the right to act, the instrumentation to observe what happened, the verifier or evaluator that can distinguish useful outcomes, and the machinery to turn those outcomes into another policy update.

This is why the next competition over "training data" may look less like scraping and more like operations.

Who has the environment?

Who has permission to let agents act inside it?

Who can measure success without reducing the objective to nonsense?

Who can afford failed attempts?

Who owns the trajectories after they are generated?

Who can replay them?

These questions sound less like machine learning than like corporate strategy, regulation, labor, science, and infrastructure. That is because the boundary is moving.

The frontier model does not learn only from a library. It learns from a laboratory, a game, a codebase, a marketplace, a browser, a factory, a simulation, a conversation, a failure.

The public story of generative AI began with a machine that had read the internet.

The more interesting machine may be the one that gets another attempt.
