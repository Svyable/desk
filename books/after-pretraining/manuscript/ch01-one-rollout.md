# One Rollout

On September 18, 2026, a technical report appeared with a title built to repel civilians: *KL-Regularized Policy Optimization for Critic-Free Agentic Reinforcement Learning*. Its central figure was nine boxes of notation joined by arrows. Gibbs optimum. Exact normalizer. Fixed-normalizer regression. Backprop surrogate. Monte Carlo KL. It looked like the sort of diagram a reader is trained to skip.

Read the labels rather than the equations and the paper makes a stranger claim. It is trying to remove things.

One complete rollout. No same-prompt response group. No learned critic. No learned normalizer. The authors call the method KL-Regularized Policy Optimization, or KLPO, and present it as a critic-free, single-rollout route for asynchronous off-policy agentic reinforcement learning. Whether KLPO itself becomes important is still an empirical question; the project's own release notes are careful about what had and had not been validated at scale. What matters for this book is the direction of effort. Researchers are spending serious mathematical energy trying to extract more learning from each expensive encounter between an agent and an environment. ([Zhang et al., 2026](https://github.com/yifanzhang-pro/KLPO))

The nine-box diagram is therefore less interesting as an algorithm than as an X-ray. It shows what the field has started to regard as scaffolding.

A modern language model begins with prediction. Give it a sequence of tokens and ask it to predict the next one. Repeat that exercise across an absurd quantity of text and code. The resulting system absorbs patterns of language, facts, styles, procedures, fragments of mathematics, software conventions, arguments, jokes, and the broad statistical debris of human culture. This is pretraining, and it is the foundation beneath the systems that made generative AI feel sudden even though the engineering lineage was long.

Prediction becomes a different problem once the machine is expected to do something in the world.

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

There is another reason the diagram matters. It exposes a problem that becomes unavoidable once training and data collection happen at different times.

The policy that generated an old trajectory is not necessarily the policy being trained today.

In the KLPO notation, the sampler and the trainer are given different symbols because they are different objects. The sampler is the historical policy that actually produced the action. The trainer is the current policy whose parameters are being updated. If a lab wants to reuse old trajectories rather than throw them away after one gradient step, it has to remember what the sampler believed when the action was taken and account for the fact that the trainer may now assign a different probability to the same action.

This is the off-policy problem in practical clothing.

Imagine a coding agent that tried to repair a bug on Monday. On Monday it believed one edit was highly plausible and another was unlikely. By Thursday, after thousands of updates, the current model may rank those edits differently. The Monday trajectory is still potentially valuable. It contains a real sequence of decisions, tool outputs, test failures, and perhaps a successful final patch. But the Thursday trainer cannot pretend it generated that experience under its current beliefs.

One classic response is importance weighting: mathematically reweight old experience according to how much more or less likely the current policy would be to produce it. Importance sampling is powerful, but the weights can become volatile when the old and new policies disagree sharply. A rare action under the sampler that becomes common under the trainer can receive an enormous ratio. Training can become hostage to a few trajectories with extreme weights.

KLPO takes a different route. It regresses a log-probability ratio toward an optimum implied by a KL-regularized local policy-improvement objective. The details matter to specialists, but the intuition is easier. Reward says "move toward what worked." The KL term says "do not move so far, so fast, that the update stops resembling a controlled improvement over the policy that produced the data." KL divergence is therefore doing two jobs at once in the story: it is a mathematical regularizer and a speed limit on forgetting where the experience came from.

The "normalizer" in the diagram is part of making those relative probabilities add up to a proper distribution. Exact normalizers are usually inconvenient in large action spaces because the vocabulary may contain tens or hundreds of thousands of possible next tokens, and a long response creates a new distribution at every prefix. The paper's derivation shows how to profile that quantity out of the regression objective rather than learning a separate model to predict it.

Then comes the move that makes the figure feel less like abstract optimization and more like an accounting trick for experience.

At each prefix, the complete rollout contains the token the agent actually chose. The algorithm also asks: what would the historical sampler have said about other possible tokens here? It can draw auxiliary tokens from that old sampler and evaluate them under the current trainer. Those local draws help estimate the score correction needed for the gradient. They are not free—nothing in machine learning is—but they are much cheaper than replaying the entire world from the same prompt several more times.

This is the distinction the figure compresses into "MC-KL."

Monte Carlo methods estimate a difficult quantity by sampling. Here the algorithm samples alternative tokens rather than alternative complete lives.

That sentence is technically imperfect if pushed too far, but economically useful. A full agent trajectory may include expensive computation and interactions whose cost has little to do with the price of drawing another token. Reopening a browser, compiling a repository, querying a service, or stepping a robot through a task can dwarf a local probability calculation. Methods that exchange complete trajectories for cheaper local estimates are therefore not merely rearranging symbols. They are trying to spend the training budget at a different layer of the system.

That is why apparently small algorithmic changes can alter which organizations have an advantage. A ten-percent reduction in an inner-loop tensor operation is valuable. A reduction in the number of full environments that must be run may change the feasible dataset itself.

The phrase "single rollout" deserves to be translated into economics.

A rollout is experience. In an agent system it may be a long, expensive sequence involving model inference, tool calls, browser sessions, code execution, database queries, simulated actions, or interactions with some environment that has to be maintained and observed. If a learning algorithm needs a group of full rollouts to extract a useful update, the data cost multiplies. If it can recover a useful learning signal from one trajectory plus much cheaper local samples, the same budget may support more distinct tasks, more varied states, or more updates from experience already collected.

One paper does not settle that future. KLPO's own release notes are careful about scope. The repository provides theory, a loss implementation, CPU verification, and native training integration; it explicitly says paper-scale GPU benchmark reproduction had not yet been validated in the release available at the time of writing. Some equivalence claims depend on assumptions about the sampler, the draws, the transition structure, and how data is reused. Fixed historical records can become an empirical surrogate rather than an exact unbiased estimator once those conditions change.

That uncertainty is part of the evidence. Research fields reveal their priorities in what they spend effort trying to eliminate.

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

This is why the next competition over "training data" may look less like scraping and more like operations. An environment that can teach an agent is not merely a place to run software. It is a controlled feedback asset: permission to act, enough instrumentation to observe the result, a credible way to judge success, a budget for failed attempts, and contractual or technical rights to preserve and reuse the trajectory.

Those requirements pull machine learning into corporate strategy, regulation, labor, science, and infrastructure. A company may own no uniquely brilliant algorithm and still possess something a rival cannot download: millions of consequential interactions inside a codebase, laboratory, marketplace, browser workflow, factory, simulation, or customer operation. The data appears because the system was allowed to act.

That is the boundary this book follows. The public story of generative AI began with a machine that had read the internet. The more interesting machine may be the one that gets another attempt.
