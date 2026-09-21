# Research Trail — After Pretraining

This folder is the evidence trail for *After Pretraining: How Machines Learn From Consequences—and Why Experience Is Becoming the New Training Data*.

The book's subject is moving quickly enough that chronology and validation status matter. A preprint, accepted conference paper, peer-reviewed journal article, product announcement, code release, benchmark result, and laboratory claim are different kinds of evidence. Keep those differences visible in the manuscript.

## Evidence rules

1. Attach dates to claims about the frontier. "Current" reinforcement-learning practice becomes historical quickly.
2. Separate pretraining, supervised fine-tuning, preference optimization, reinforcement learning, inference-time search, tool use, and agent-environment interaction. They can coexist in one system but are not interchangeable.
3. Do not describe a method as eliminating supervision when it still depends on a reward function, verifier, rubric, environment, demonstrations, or human-designed task distribution.
4. Treat "critic-free" as an algorithmic claim about the absence of a learned value/critic component, not as the absence of evaluation.
5. Distinguish one full rollout from auxiliary token samples. A method may reduce complete trajectories without eliminating sampling cost.
6. Preserve assumptions behind exact or unbiased-gradient claims, especially independence, sampler fidelity, off-policy replay conditions, deterministic transitions, and terminal-reward assumptions.
7. Do not generalize results from mathematics, code, board games, or simulated environments directly to medicine, politics, science, management, or other open-ended domains.
8. Track reward hacking and Goodhart-style failure as central evidence, not a footnote.
9. When a company describes its own training system, treat the description as primary evidence of what it says it does, not independent proof of superiority.
10. Follow the economics of experience: cost per rollout, environment construction, verifier quality, failed-attempt budget, tool costs, storage, replay, and rights to generated trajectories.

## Opening source — KLPO

- Yifan Zhang et al., *KL-Regularized Policy Optimization for Critic-Free Agentic Reinforcement Learning*, technical report dated September 18, 2026 and revised September 20, 2026: https://github.com/yifanzhang-pro/KLPO  
  Primary source for the book's opening. The project describes KLPO as critic-free, single-rollout, off-policy agentic reinforcement learning. The default implementation uses token regression plus Monte Carlo KL; one complete response per prompt is sufficient, and auxiliary draws occur at visited prefixes rather than as extra full responses. The repository explicitly notes that paper-scale GPU benchmark reproduction had not yet been validated in the cited release.

- Project page: https://yifzhang.com/blog/KLPO/  
  Primary explanation of the method, its assumptions, regression routes, KL estimators, and implementation boundaries.

Research burden: verify later benchmark replications before converting this from "an algorithmic proposal with implementation checks" into a claim about frontier training economics at scale.

## The long arc — general computation and self-generated experience

- Rich Sutton, "The Bitter Lesson" (March 13, 2019): https://bitterlesson.ai/  
  Historical argument that general methods exploiting increasing computation have repeatedly displaced approaches that encode more human domain knowledge. Use as a recurring provocation, not as a universal law.

- Google DeepMind, AlphaGo research history: https://deepmind.google/research/alphago/  
  Primary institutional account of AlphaGo, reinforcement learning, search, and the lineage to AlphaZero, MuZero, and AlphaDev.

Research lane: pair institutional retrospective with the original AlphaGo/AlphaZero papers and independent histories before narrating specific decisions or motives.

## Human feedback and learned reward

- OpenAI, "Learning to summarize with human feedback" (2020): https://openai.com/index/learning-to-summarize-with-human-feedback/  
  Primary source for the shift from next-token imitation toward optimizing a learned reward model. Especially important for the documented observation that optimizing too aggressively against the reward model eventually reduced human-rated quality.

Research lane: connect this work to InstructGPT, PPO, reward-model overoptimization, preference data, DPO-style alternatives, and later judge/rubric systems without pretending these are one continuous method.

## DeepSeek-R1 and the rise of RL for reasoning

- Daya Guo et al., "DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning," *Nature* 645, 633–638 (2025): https://www.nature.com/articles/s41586-025-09422-z  
  Peer-reviewed source for DeepSeek-R1 and R1-Zero. Important distinctions: R1-Zero demonstrates pure-RL reasoning behavior from a base model; the final R1 uses a multistage pipeline including cold-start data, RL, rejection sampling, supervised fine-tuning, and a second RL stage.

Research burden: do not flatten the final R1 into "no supervised data." The paper itself is explicit about the multistage system.

## RL with verifiable rewards

- Xumeng Wen et al., "Reinforcement Learning with Verifiable Rewards Implicitly Incentivizes Correct Reasoning in Base LLMs," ICLR 2026: https://proceedings.iclr.cc/paper_files/paper/2026/hash/517f9b9c227b9dd51dba4560f37165ed-Abstract-Conference.html  
  Evidence that RLVR can extend reasoning performance on mathematical and coding tasks and can incentivize correct reasoning from outcome-level correctness signals.

- Massimiliano Pronesti, Anya Belz, and Yufang Hou, "Beyond Outcome Verification: Verifiable Process Reward Models for Structured Reasoning," Findings of ACL 2026: https://aclanthology.org/2026.findings-acl.1611/  
  Useful counterpoint: outcome verification is not the only route. The paper explores deterministic process-level verification in a structured medical evidence-synthesis task.

- Anisha Gunjal et al., "Rubrics as Rewards: Reinforcement Learning Beyond Verifiable Domains," ICLR 2026: https://proceedings.iclr.cc/paper_files/paper/2026/hash/cfd7bee7a651ee9af525098ef67a9e45-Abstract-Conference.html  
  Evidence for attempts to extend reinforcement learning beyond binary verifiable domains using structured rubric feedback. Useful precisely because it exposes the dependence on a judge or rubric when the environment cannot supply ground truth directly.

## Exploration and collapse

- Guanhua Huang et al., "Low-probability Tokens Sustain Exploration in Reinforcement Learning with Verifiable Reward," Findings of ACL 2026: https://aclanthology.org/2026.findings-acl.1209/  
  Evidence on entropy collapse and the suppression of low-probability exploratory tokens during RLVR. The paper reports extensive on-policy and off-policy experiments; verify exact compute and performance figures in the paper before quoting them in final prose.

Research question: when does preserving exploration increase genuine problem-solving diversity, and when does it simply keep low-quality noise alive?

## Environments as training assets

- Zhiyuan Zeng et al., "RLVE: Scaling Up Reinforcement Learning for Language Models with Adaptive Verifiable Environments" (2025 preprint): https://arxiv.org/abs/2511.07317  
  Introduces RL with Adaptive Verifiable Environments and a suite of procedurally generated environments. Use as evidence of the shift from fixed problem sets toward environment generation; keep preprint status visible unless later publication supersedes it.

Research lanes:
- coding agents trained on real repositories versus synthetic bug environments;
- browser and computer-use agents with deterministic and nondeterministic outcomes;
- robotics and physical-world trajectory collection;
- cyber ranges;
- scientific laboratories and self-driving labs;
- games and procedurally generated curricula;
- customer-support and operations loops where rewards arrive from real users.

## Falsification questions

- Does reinforcement learning actually create new capabilities, or mostly reweight behaviors already latent in the pretrained model?
- When apparent reasoning improves, does pass@k reveal that training changed competence or only sampling efficiency?
- Does removing a critic or response group reduce total training cost after accounting for extra token samples, replay bookkeeping, and instability?
- Are "single-rollout" methods still dependent on expensive environment construction or verification?
- Does a richer environment improve generalization, or merely teach a broader benchmark family?
- When outcome rewards are sparse, which credit-assignment techniques genuinely matter?
- How often do reward optimizers discover loopholes that humans would reject?
- Which important tasks cannot be reduced to verifiable or rubric-scored objectives without losing the point of the task?
- Who bears the cost of exploration when an agent is acting in a real system rather than a simulation?
- Who owns trajectories produced while an agent works inside a customer's repository, laboratory, browser, factory, or company?
- If frontier models become commodities, do proprietary environments and feedback loops become the durable moat?
- What happens when the environment itself changes in response to the agent learning inside it?

## Publication burden

Before release, re-check every 2026 method for revised papers, benchmark replications, retractions, superseding versions, and independent evaluations. The thesis should survive even if KLPO itself proves less important than the direction it represents.
