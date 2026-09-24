# Research note: what “one rollout” does — and does not — mean

## Editorial target

Chapter 1 is right to use KLPO as a live artifact of the effort to make agentic reinforcement learning less sample-hungry. But the phrase **one rollout** is easy to let do more rhetorical work than the method itself supports.

The useful distinction is between **complete environment trajectories** and **auxiliary policy samples**.

## Primary-source check — KLPO, 20 September 2026 revision

The KLPO project describes the default method as critic-free and single-rollout: one complete response per prompt is sufficient, and the method does not require a same-prompt response group or a learned value/normalizer model. That is a real reduction in full-response collection scaffolding.

But MC-KL does not mean “one sample and nothing else.” At each visited prefix, the default estimator draws independent auxiliary tokens from the collection sampler to estimate the sampler-conditioned score correction. The project’s toy default uses **M=128 auxiliary token draws per prefix**; token regression permits M >= 1. The authors are explicit that these are *not extra response rollouts*.

The project also states a scope limitation that belongs near any claim of practical efficiency: the current release provides theory, loss implementation, CPU verification, and native training integration, while **GPU training and paper-scale benchmark reproduction have not been validated**. Example hyperparameters are starting values rather than tuned benchmark settings.

Primary source: Yifan Zhang et al., *KL-Regularized Policy Optimization for Critic-Free Agentic Reinforcement Learning*, project repository/report, technical report 18 September 2026, revised 20 September 2026: https://github.com/yifanzhang-pro/KLPO

## Revision implication

Keep **One Rollout** as the opening title. It is memorable and defensible if the chapter immediately defines the accounting unit:

> One rollout means one complete response or environment trajectory per prompt. It does not mean one stochastic draw, one model evaluation, or one unit of compute.

That sentence improves the book because it prevents an efficiency claim from quietly changing denominators. The larger argument survives: if expensive *environment experience* is the scarce asset, reducing the number of complete trajectories can matter even when additional token-level computation is spent to learn more from each trajectory.

A sharper formulation for the chapter’s thesis is therefore: **post-training economics may shift from collecting more complete experiences toward extracting more update signal from each expensive experience.** That is more interesting than “RL got cheaper,” and it aligns better with the book’s proposed focus on environments, permissions, instrumentation, replay, and verifiers.

## Strongest counterargument

The strongest counterargument is that the distinction could be economically irrelevant in some regimes. If auxiliary sampling, scoring, long-context inference, or repeated learner updates dominate cost, fewer complete rollouts need not mean cheaper training. Conversely, when the environment itself is expensive — a robot action, laboratory experiment, paid API interaction, human adjudication, scarce simulator, or consequential real-world attempt — replacing extra full trajectories with local computation can be a major change even if FLOPs increase.

The manuscript should therefore avoid converting **sample efficiency** into **compute efficiency**, **wall-clock efficiency**, or **dollar efficiency** without measurements for the relevant workload.

## Falsification / reporting rule

For any later method presented as evidence that experience is becoming more valuable, record at least four denominators separately:

1. complete environment trajectories / responses;
2. auxiliary samples or model evaluations;
3. learner/training compute;
4. external environment cost (human, API, simulator, robot, experiment, etc.).

A method supports the book’s scarcity thesis most strongly when it reduces (1) or (4) while preserving or improving capability. It supports a stronger claim of overall efficiency only when the other denominators are measured too.

## Publication hold

Do not write that KLPO has demonstrated cheaper large-scale training or benchmark superiority unless a later primary source reports validated GPU/paper-scale runs and comparative cost/performance. As of the 20 September 2026 project revision, the repository explicitly says those validations have not been completed.
