# Research Trail — Learning To Search

This folder is the evidence and falsification trail for *Learning To Search: Optimizing Agentic Discovery*.

The book is allowed to be ambitious about the importance of search. It is not allowed to blur together distinct literatures just because they share the words "explore," "search," "agent," or "information."

## Evidence rules

1. State the hidden-state and observation assumptions behind any theorem-like claim.
2. Distinguish search over candidate solutions from search for evidence about the world.
3. Distinguish passive observation from actions that change the environment.
4. Do not call extra test-time compute "better search" unless the policy or allocation improves, not merely the budget.
5. Treat benchmark results as environment-specific and dated.
6. Treat company announcements as primary evidence for what the company reports, not independent validation of broad effectiveness.
7. Separate generation from verification. A system that can propose many candidates may still have no reliable way to rank them.
8. Separate tool availability from tool reliability, freshness, permissions, and coverage.
9. Preserve negative results and cases where simple fixed policies match or beat adaptive ones.
10. For working propositions developed in this project, provide the derivation and explicit assumptions rather than laundering them through adjacent literature.

## Foundational sequential decision and sensing sources

- Herbert Robbins, "Some Aspects of the Sequential Design of Experiments," *Bulletin of the American Mathematical Society* 58(5), 1952, 527–535.  
  https://projecteuclid.org/journals/bulletin-of-the-american-mathematical-society/volume-58/issue-5/Some-aspects-of-the-sequential-design-of-experiments/bams/1183517370.full

- Herman Chernoff, "Sequential Design of Experiments," *Annals of Mathematical Statistics* 30(3), 1959, 755–770. DOI: 10.1214/aoms/1177706205.  
  https://doi.org/10.1214/aoms/1177706205

- Sirin Nitinawarat, George K. Atia, and Venugopal V. Veeravalli, "Controlled Sensing for Multihypothesis Testing," *IEEE Transactions on Automatic Control* 58(10), 2013, 2451–2464. DOI: 10.1109/TAC.2013.2261188.  
  https://arxiv.org/abs/1205.0858

- Daniel Golovin and Andreas Krause, "Adaptive Submodularity: Theory and Applications in Active Learning and Stochastic Optimization," *Journal of Artificial Intelligence Research* 42, 2011.  
  https://arxiv.org/abs/1003.3967

These sources establish that choosing what to observe next has a long mathematical history. They should prevent the manuscript from presenting controlled sensing or adaptive experimental design as inventions of LLM agents.

## Language agents and interactive search

- Shunyu Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," ICLR 2023.  
  https://arxiv.org/abs/2210.03629

- Shuyan Zhou et al., "WebArena: A Realistic Web Environment for Building Autonomous Agents," ICLR 2024.  
  https://arxiv.org/abs/2307.13854

- Grégoire Mialon et al., "GAIA: a benchmark for General AI Assistants," 2023.  
  https://arxiv.org/abs/2311.12983

- Jing Yu Koh, Stephen McAleer, Daniel Fried, and Ruslan Salakhutdinov, "Tree Search for Language Model Agents," 2024.  
  https://arxiv.org/abs/2407.01476

- King Zhu et al., "Scaling Test-time Compute for LLM Agents," 2025.  
  https://arxiv.org/abs/2506.12928

These sources are useful for the transition from "model produces a response" to "agent acts, observes, and searches." Results should be reported with their original model and benchmark context rather than upgraded into claims about current frontier performance.

## Software agents

- Carlos E. Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", ICLR 2024.  
  https://openreview.net/forum?id=VTF8yNQM66  
  Project: https://www.swebench.com/

SWE-bench is useful because a repository makes the search problem concrete. An agent can fail before code generation: wrong file, wrong reproduction, wrong test, wrong dependency, or wrong interpretation of the issue.

Research burden: use current leaderboard data only when the chapter needs it and preserve the date, benchmark variant, scaffolding, and verification rules.

## Automated scientific and algorithmic discovery

- Google DeepMind, "AlphaEvolve: A Gemini-powered coding agent for designing advanced algorithms," May 14, 2025.  
  https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/

- Google DeepMind, "AlphaEvolve: How our Gemini-powered coding agent is scaling impact across fields," May 7, 2026.  
  https://deepmind.google/blog/alphaevolve-impact/

- Google Research, "Accelerating scientific breakthroughs with an AI co-scientist," February 19, 2025.  
  https://research.google/blog/accelerating-scientific-breakthroughs-with-an-ai-co-scientist/

- Google DeepMind, "Co-Scientist: A multi-agent AI partner to accelerate research," May 19, 2026.  
  https://deepmind.google/blog/co-scientist-a-multi-agent-ai-partner-to-accelerate-research/

- Chris Lu et al., "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery," 2024.  
  https://arxiv.org/abs/2408.06292

AlphaEvolve is especially useful for the opening because its public architecture makes the surrounding search machinery visible: proposal models, automated evaluators, a database of programs, selection, mutation, and repeated evaluation.

The AI Scientist is useful as a counterexample and caution. Automated generation of papers and experiments demonstrates end-to-end search machinery while also exposing the difficulty of evaluation, sandboxing, and distinguishing plausible research from reliable knowledge.

Co-Scientist is useful for multi-agent hypothesis generation, ranking, debate, literature grounding, and iterative refinement. Preserve the company's description as such and separately track peer-reviewed or independently replicated evidence.

## Working theory in this project

The file [working-theory.md](working-theory.md) develops two deliberately simple results motivated by the supplied decision-temperature/search notes.

The first is an observability statement: in a static finite hidden-state model, if every available evidence channel has the same observation distribution in two states, no adaptive policy can distinguish them. For decision-making, candidate channels can be mapped to the decision-relevant state pairs they separate, turning minimum-cost observability augmentation into a weighted hitting-set problem.

The second is a no-adaptivity baseline for independent memoryless discovery hazards. If action (a) costs (c_a) and has fixed independent hit probability (pi_a), the best asymptotic discovery rate per unit cost is achieved by the action maximizing (-\log(1-\pi_a)/c_a). An adaptive mixture cannot improve the rate because failures do not alter future action values.

These are working derivations, not claims of literature priority. Their purpose is to make the boundary of the book crisp: **learning to search matters when the evidence changes the value of the next search action.**

## Falsification questions

- In realistic agent tasks, how often is the dominant failure missing evidence versus weak reasoning over available evidence?
- When a stronger base model is substituted, do search-policy gains persist?
- How much of tree-search improvement comes from more compute rather than better allocation?
- Can simple heuristics match learned search policies on heterogeneous real tasks?
- Does agent memory improve future action selection or merely lengthen context?
- How often are multiple agents genuinely diverse rather than correlated samples from the same prior?
- Can a verifier reliably distinguish better search outcomes, or does optimization overfit the verifier?
- Are costly human escalations selected better by learned policies than by fixed thresholds?
- Which tasks remain unidentifiable under the available tools no matter how capable the model becomes?
- How does a policy change when observations alter the environment?
- Does a learned policy transfer across interface changes, tool sets, and model generations?
- Can search be optimized without training the agent to exploit benchmark artifacts?

## Publication burden

Before a case enters polished manuscript prose, record:

**State:** What uncertainty actually matters to the terminal decision?

**Channel:** What can each action reveal, and what can it never reveal?

**Cost:** What does the observation consume or risk?

**Update:** How should the result change the value of future actions?

**Verifier:** How is a candidate answer, plan, or discovery checked?

**Stop:** What condition makes another observation not worth acquiring?

**Countermodel:** Could the same performance gain be explained by stronger priors, more compute, a better tool, or an easier evaluator?
