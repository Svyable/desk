# Book Brief — Learning To Search

## Canonical identity

**Title:** *Learning To Search*

**Subtitle:** *Optimizing Agentic Discovery*

**Author:** Sven Hardy Benson

**Status:** Drafting

## Central question

What separates an agent that can answer questions from an agent that can reliably discover what it needs to know?

A language model can reason impressively over the evidence placed in front of it and still fail because the decisive evidence never entered the context. An agent can call many tools and still waste its budget on low-value observations. It can branch aggressively and create a verification problem larger than the original task. It can search too little, search too long, confuse repeated evidence with independent evidence, or keep using a tool whose failures are telling it nothing.

The book's working answer is that agentic capability depends on a learned policy for **evidence acquisition**. Search is not a preprocessing step and not a synonym for web lookup. It is the sequential choice of what to inspect, query, test, measure, simulate, ask, execute, verify, revisit, and eventually stop doing.

The agent is not only predicting an answer. It is choosing the information state from which the answer will be made.

## Reader promise

The reader should finish the book able to inspect an agentic system and ask a more useful set of questions than "Which model does it use?" or "How many tools does it have?"

The reader should be able to identify:

- the hidden state the agent actually needs to resolve before acting;
- which distinctions matter to the final decision and which do not;
- what each tool or evidence channel can discriminate;
- the cost of observations in money, latency, tokens, risk, permission, and attention;
- when an observation should change the value of the next action;
- when branching creates useful diversity and when it merely multiplies correlated error;
- whether an evaluator can cheaply reject bad candidates or whether verification is the true bottleneck;
- how memory changes future search rather than merely storing previous output;
- whether the environment is passive, stateful, strategic, or altered by the search itself;
- what stopping rule converts open-ended exploration into a decision.

The practical payoff is architectural. A builder should be able to redesign an agent around better observability, evidence routing, search budgets, evaluators, state, and stopping rules rather than treating failures as a reason to prompt the same model harder.

## Distinct contribution

This book sits next to *Search Frontier* without being a sequel or a duplicate.

*Search Frontier* is a civilization-scale book about constrained exploration: consumers, firms, markets, laboratories, institutions, careers, culture, and machines all face possibility spaces too large to inspect. Its unit of analysis is the system searching a space of possible actions or futures.

*Learning To Search* is narrower and more technical. Its unit of analysis is the **agent choosing its next evidence-producing action**.

The book focuses on partial observability. The central object is not the option set but the relationship among hidden state, observation channel, belief, action, cost, and decision. That brings sequential experimental design, controlled sensing, active hypothesis testing, value of information, search trees, verification, memory, tool use, and test-time computation into one practical frame for modern agents.

The distinction matters commercially. Many books will describe agents as digital workers or collections of tools. This book asks what makes their behavior improve between the first observation and the last.

## Strongest competing explanations

The argument should survive several alternatives rather than absorb them.

**Model capability may dominate search policy.** A sufficiently capable model can sometimes solve a task from the initial context, making elaborate search machinery wasteful. The manuscript should identify when better priors or better reasoning reduce the marginal value of additional evidence.

**Better tools may matter more than better routing.** If one tool is dramatically more reliable, current, or comprehensive than the alternatives, the problem can collapse into using that tool well rather than learning a sophisticated policy.

**Verification may dominate discovery.** Cheap candidate generation can move the bottleneck from search to evaluation. An agent can explore widely and still fail because it cannot tell a correct result from a plausible one.

**Environment design may explain the gain.** A benchmark can reward tree search because it exposes cheap rollbacks, deterministic validators, or unusually clear reward signals. Do not generalize from evaluator-rich domains to medicine, policy, science, or human organizations without preserving the difference.

**Search traces can be brittle supervision.** A trajectory that succeeded once may encode accidents of interface, ordering, or benchmark structure rather than a transferable policy.

**More test-time compute can hide poor strategy.** Parallel sampling can improve results by brute force. The book must distinguish spending more from searching better.

**Access can dominate intelligence.** An agent cannot infer evidence it is not permitted to observe. Authentication, licensing, privacy, physical sensors, human testimony, and organizational authority may determine the ceiling.

**The world may change while the agent looks.** Classical inference often treats the hidden state as fixed. Many agent environments are not. Queries can alter markets, users, files, permissions, inventories, or adversaries. A search policy built for passive observation may fail when observation is intervention.

## The intellectual backbone

The book develops three layers of argument.

### 1. Observability before intelligence

In a finite static hidden-state model, suppose an agent chooses among evidence channels and each channel produces observations according to a state-dependent distribution.

If two states induce the same observation law under every available channel, no adaptive policy can distinguish them. No amount of clever sequencing creates information that none of the channels contain.

The engineering consequence is severe: before improving reasoning, ask whether the system can observe the distinction the decision requires.

For a fixed decision rule, only pairs of states that would lead to different decisions need to be separated. If candidate evidence channels separate different subsets of those pairs, selecting a minimum-cost set of new channels becomes a weighted hitting-set problem.

That converts a vague demand for "more context" into an instrumentation problem.

### 2. A baseline where adaptivity has no value

Suppose action $a$ costs $c_a$ and independently discovers a fixed target with probability $\pi_a$ each time it is used. Failures do not change any future probability and reveal nothing except that the target was not found on that draw.

For a sequence using action $a$ exactly $n_a$ times, the survival probability is

$$
\Pr(\text{no discovery})=\prod_a(1-\pi_a)^{n_a}.
$$

The cost-normalized exponential discovery rate of action $a$ is

$$
\lambda_a=\frac{-\log(1-\pi_a)}{c_a}.
$$

Any mixture achieves a cost-weighted average of these rates, so it cannot beat the best fixed action:

$$
\Lambda^*=\max_a \lambda_a.
$$

Under these assumptions, adaptive cleverness is theater. The policy learns nothing useful from failure.

This deliberately simple result supplies a baseline. A serious learning-to-search system must exploit a structure the baseline excludes: posterior change, dependence, heterogeneity, state, tool acquisition, correlated evidence, diminishing returns, nonstationarity, intervention, or different terminal decisions.

### 3. Learning changes the value of looking

Adaptivity becomes valuable when one observation changes what should be observed next.

That can happen because evidence updates which hypothesis is plausible, because a tool is informative only in a subset of states, because the environment changes, because one action unlocks another, because repeated observations become redundant, because a human escalation becomes worthwhile only after cheaper checks fail, or because search itself reveals a new candidate that did not exist in the original action set.

The core design question becomes:

**What property of the environment makes the next best search action depend on what the agent has already seen?**

The rest of the book is an answer to that question.

## Narrative engine

The manuscript should not read like a survey paper with better metaphors.

Open chapters with an agent, experiment, benchmark, codebase, failure, instrument, or decision where the next observation matters. Let the reader encounter the constraint before naming the formal concept.

The strongest contemporary examples have visible search loops:

- AlphaEvolve proposes programs, evaluates them automatically, retains promising candidates, and uses the evolving program database to shape later generations.
- web agents choose among clicks, searches, pages, forms, and tool calls while receiving feedback from a stateful environment;
- software agents must locate the relevant files and tests before a patch can be judged;
- scientific agents generate hypotheses, search literature, run or propose experiments, rank candidates, and feed evaluation into the next round.

The book should keep returning to one pressure: **the wrong next observation can be more damaging than a weak answer to the right evidence.**

## Chapter architecture

### Part I — The Searcher

**1. The Searcher Around the Model**  
Open with AlphaEvolve. The important system is larger than the language model: proposal, evaluation, memory, selection, mutation, and another proposal. Establish search as an engineered loop rather than a synonym for intelligence.

**2. What to Look at Next**  
Define agentic discovery as sequential evidence acquisition. Separate answer generation from query selection, tool choice, experiment selection, branch expansion, and stopping. Introduce the observation-action loop without turning the chapter into POMDP notation.

**3. What Cannot Be Inferred**  
Observability and indistinguishability. Two possible worlds can remain identical to every policy when all available channels look the same in both. Show why reasoning cannot repair a missing sensor.

**4. Evidence Has a Price**  
Search budgets are multidimensional: latency, tokens, API fees, human escalation, privacy exposure, permission, compute, irreversible actions, and opportunity cost. Introduce value of information carefully.

### Part II — Adaptivity

**5. The Baseline That Doesn't Need Intelligence**  
Develop the memoryless-hazard result. If failures teach nothing and every attempt keeps the same hit rate, repeated use of the best cost-adjusted channel is optimal. Establish the baseline that adaptive systems must beat.

**6. When Failure Teaches You Something**  
Posterior updates, diminishing returns, conditional tools, and path-dependent evidence. Give examples where the first failed action should change the second.

**7. Tool Choice Is Experimental Design**  
Connect modern tool-using agents to Chernoff, Robbins, controlled sensing, active hypothesis testing, and sequential design. A tool call can be an experiment chosen for information value.

**8. The Hitting Set of Reality**  
Decision-relevant state pairs and evidence channels. Show how a minimal observability portfolio can be designed rather than accumulated. Extend from abstract channels to logs, tests, APIs, sensors, databases, interviews, and human review.

### Part III — Architecture

**9. Memory Changes the Searcher**  
Memory matters only when it alters future action selection. Separate replay, retrieval, compressed state, provenance, failure memory, and learned search priors.

**10. Branches, Beams, and Trees**  
Best-first search, beam search, Monte Carlo tree search, rollout diversity, and test-time compute. Focus on what branching buys and the evaluator burden it creates.

**11. Verification Is Its Own Search Problem**  
A verifier can be wrong, expensive, gameable, or incomplete. Treat test selection, cross-checking, independent evidence, and adjudication as a second search layer.

**12. The World Moves While You Look**  
POMDPs, intervention, stateful interfaces, markets, robots, adversaries, and users. The search action can change the hidden state it was supposed to reveal.

**13. Many Searchers**  
Parallel agents, specialization, diversity, debate, voting, shared memory, and correlated failure. Ask when multiple searchers increase coverage and when they merely repeat the same prior.

**14. Search Under Permission**  
Authentication, private data, rate limits, human approvals, physical access, licensing, and organizational authority. Capability is bounded by the channels the agent is lawfully and practically able to use.

### Part IV — Discovery in the Wild

**15. The Web Is Not a Database**  
Use WebArena, GAIA, BrowserGym and related work to show why web search is a sequential control problem: pages are partial, interfaces are stateful, and actions can commit changes.

**16. The Repository Is an Environment**  
Use SWE-bench and software agents. Finding the right file, reproducing the failure, choosing a test, localizing the cause, and verifying the patch are coupled search decisions.

**17. Science Becomes a Search Loop**  
AI Scientist, Co-Scientist, AlphaEvolve, automated experiment systems, and the difference between domains with cheap objective evaluators and domains where reality is slow.

**18. Search for the Thing Nobody Named**  
Open-world discovery. Anomaly detection, surprise, hypothesis generation, novelty search, and the harder problem where the correct candidate is not in the original menu.

### Part V — Learning

**19. Learn the Search Policy**  
Imitation from traces, reinforcement learning, offline trajectories, counterfactual evaluation, synthetic tasks, curriculum, and the danger of learning benchmark-specific rituals. Define what a training signal for "look somewhere better" could be.

**20. Stop Looking**  
Stopping rules, confidence, residual uncertainty, decision loss, budget exhaustion, escalation, and irreversible commitment. Close on a mature definition of an agent: not a model that can keep searching, but a system that knows what another search is worth.

## Core distinctions

Protect these distinctions through cases and mechanisms rather than slogans:

- model capability / search policy;
- candidate generation / evidence acquisition;
- evidence acquisition / verification;
- information / repeated information;
- tool availability / observability;
- observability / identifiability;
- search cost / action cost;
- passive observation / intervention;
- more compute / better search;
- diversity / independent evidence;
- memory / stored transcript;
- search trace / transferable policy;
- benchmark success / robust discovery;
- confidence / decision sufficiency;
- unknown state / unknown hypothesis space;
- fixed target / changing world.

## Research burden

The manuscript should make strong technical claims only under explicit assumptions.

For mathematical propositions developed in this project, label them as working propositions or derivations unless a literature source establishes the exact statement. Connect them to adjacent literature without claiming novelty by implication.

For benchmark numbers, record the model version, date, environment, metric, and whether the number comes from the original paper, a later leaderboard, or a company report.

For company research systems, separate demonstrated results from company interpretation. AlphaEvolve and Co-Scientist are especially useful because their search loops are visible, but their public descriptions should not be treated as independent validation of every claim about impact.

For scientific-discovery systems, separate hypothesis generation from experimentally verified discovery. A generated paper or hypothesis is not the same thing as new knowledge.

For safety and permissions, distinguish a system's technical capability from authorized operation.

## Commercial positioning

Primary audience: AI builders, product leaders, researchers, founders, technical executives, investors, operators, and serious general readers trying to understand what agents actually need in order to become useful.

The book should sit between serious technology narrative and practical systems thinking. It should be readable without a graduate course in statistics, but the technical reader should find real structure beneath the prose.

The title works because "learning to search" has three meanings at once: training a policy, improving a search process through experience, and the human discipline of recognizing that knowing what to look for is a distinct form of intelligence.

The subtitle keeps the book attached to the agentic moment without making it dependent on one vendor, model generation, or product cycle.

## Practical devices worth earning

A small number of recurring tools may survive the manuscript.

**The observability map:** list the decision-relevant hidden distinctions, then record which evidence channels can separate each one.

**The search ledger:** for each action, record cost, latency, permissions, likely information gain, reversibility, and what observation would make the action more or less valuable next.

**The no-adaptivity test:** ask whether a failed search action changes any future action's hit rate or information value. If not, an elaborate adaptive policy may be unnecessary.

**The verifier budget:** every branch creates evaluation work. Record not only how many candidates an agent can generate, but how many can be checked against reality.

**The stopping debt:** continued search consumes time and can postpone the decision itself. Record the uncertainty that another observation could realistically resolve and the cost of waiting.

These devices should appear only after the reader has seen the problem they compress.
