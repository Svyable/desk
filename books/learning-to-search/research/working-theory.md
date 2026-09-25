# Working Theory — Observability, Hitting Sets, and Discovery Hazards

This note develops two compact models that can serve as recurring baselines in *Learning To Search*. They are intentionally simple. Their value is in clarifying which assumptions must fail before sophisticated adaptive search can help.

They should be treated as working derivations under the assumptions stated here, not as claims of novelty or literature priority. Adjacent literatures include sequential experimental design, controlled sensing, active hypothesis testing, adaptive submodularity, information gathering, and stochastic search.

## 1. Static hidden state and evidence channels

Let the hidden state be $s \\in S$, where $S$ is finite.

An agent can choose an evidence channel $a \\in A$. Conditional on hidden state $s$ and channel $a$, it receives observation $Y$ according to distribution

$
P_a(\cdot\mid s).
$

Assume for this section that the hidden state does not change while the agent observes it, and that the channel law is fully described by the current state and chosen channel. A policy may be adaptive: the next channel can depend on the entire history of earlier actions and observations.

### Proposition 1 — policy-level indistinguishability

If two states $s_i$ and $s_j$ satisfy

$
P_a(\cdot\mid s_i)=P_a(\cdot\mid s_j)
$

for every available channel $a \\in A$, then every adaptive policy induces the same distribution over complete action-observation histories under $s_i$ and $s_j$.

The converse is immediate in the useful engineering sense: if some channel $a$ has different observation laws in the two states, then a policy that selects $a$ can produce evidence whose distribution depends on which state is true.

### Proof sketch

At time zero the policy has seen the same empty history in either state, so it chooses the same distribution over first actions.

For any selected action, the observation law is identical under $s_i$ and $s_j$ by assumption. Therefore the distribution of the first action-observation pair is identical.

Inductively, suppose the complete history through step $t$ has the same distribution under both states. Because the policy is a function of that history, it chooses the same conditional distribution over the next action. The selected channel again has the same observation law in both states. The extended history therefore remains identically distributed.

Adaptivity cannot manufacture a statistical difference that no available channel contains.

### Decision-relevant indistinguishability

An agent often does not need to recover the exact hidden state. It needs to make the correct terminal decision.

Let $d^*$s$$ denote the decision that would be correct if state $s$ were known.

Only pairs

$
(s_i,s_j) \quad \text{with}\quad d^*$s_i$\neq d^*$s_j$
$

must be distinguished.

Call these **decision-changing pairs**.

This matters because full state identification can be much more expensive than decision sufficiency. Two states can remain observationally fused without harm when they imply the same action.

## 2. Adding evidence channels as a hitting-set problem

Suppose the current channel set leaves some decision-changing pairs indistinguishable.

Let (U) be the set of those unresolved pairs.

Now suppose there is a menu of candidate new channels $b \\in B$. Each candidate channel separates a subset

$
H_b\subseteq U,
$

where a pair belongs to $H_b$ when the channel's observation laws differ for the two states in that pair.

Assign channel $b$ acquisition or operating weight $w_b>0$.

To make every decision-changing pair distinguishable, select a subset $B' \\subseteq B$ such that

$
\bigcup_{b\in B'} H_b = U.
$

The minimum-cost instrumentation problem is

$
\min_{B'}\sum_{b\in B'} w_b
$

subject to that coverage constraint.

This is a weighted set-cover formulation, equivalently a weighted hitting-set formulation under the usual dual view.

The practical translation is straightforward. If an agent cannot reliably decide because several materially different worlds look identical through its current tools, "more reasoning" is the wrong intervention. The design problem is to add the smallest useful portfolio of evidence channels that breaks the unresolved decision-relevant equivalence classes.

Candidate channels in real systems include tests, logs, APIs, sensors, search indexes, database fields, provenance records, simulations, interviews, human escalation, permissions, and physical measurements.

### Limits

This reduction is clean only under the static abstraction.

It does not automatically capture:

- noisy channels that differ only slightly and require repeated samples;
- channels whose value depends on earlier results;
- stateful tools or environments;
- actions that change the hidden state;
- costs that depend on sequence or shared setup;
- continuous state spaces;
- model misspecification;
- adversarial observation processes;
- the possibility that a new observation changes which terminal decisions are available.

Those complications are where adaptive experimental design re-enters.

## 3. Memoryless discovery hazards

Now consider a different problem.

There is a target to be discovered. Search action $a$ costs $c_a>0$. Every time action $a$ is used before discovery, it independently hits the target with fixed probability

$
\pi_a\in[0,1).
$

A failure does not change the target, the action set, the future hit probabilities, or the information value of any later action. Costs add linearly.

This is deliberately stripped of learning.

### Survival probability

Suppose an action sequence uses action $a$ exactly $n_a$ times.

The probability of no discovery is

$
\Pr(\text{no hit})=\prod_a(1-\pi_a)^{n_a}.
$

Taking negative logs gives

$
-\log \Pr(\text{no hit})
=\sum_a n_a[-\log(1-\pi_a)].
$

Total cost is

$
C=\sum_a n_a c_a.
$

Define each action's discovery exponent per unit cost as

$
\lambda_a
=\frac{-\log(1-\pi_a)}{c_a}.
$

Then the sequence-level exponent per unit cost is

$
\frac{-\log \Pr(\text{no hit})}{C}
=
\sum_a
\frac{n_a c_a}{C}
\lambda_a.
$

The coefficients $n_a c_a/C$ are nonnegative and sum to one. The achieved rate is therefore a cost-weighted average of the individual action rates.

So

$
\Lambda^*=\max_a \lambda_a
=\max_a\frac{-\log(1-\pi_a)}{c_a}.
$

Repeatedly using any maximizing action attains this rate.

### Proposition 2 — no adaptive advantage under fixed independent hazards

Under the assumptions above, an adaptive policy conditioned on previous failures cannot achieve a better discovery exponent per unit cost than the best fixed action.

Why? Because after any history containing only failures, the problem has exactly the same future hazard structure it had at the beginning. There is no information state to exploit. The policy can randomize or switch actions, but its realized cost allocation still forms a mixture of fixed per-cost rates.

The result is almost embarrassingly simple. That is why it is useful.

An elaborate agentic search procedure should have to answer: **what did the last observation change?**

If the honest answer is "nothing about the value of the next action," then adaptivity may be complexity without gain.

## 4. Where learning-to-search begins

The no-adaptivity baseline breaks when any of its assumptions break in a consequential way.

### Posterior change

A failed test can make one hidden state less likely and another more likely. The next best test can therefore change.

### Diminishing returns

Repeated observations from one channel may become redundant. A second source can be more valuable than a tenth sample from the first.

### Conditional tools

An expensive tool may be useful only after a cheap test narrows the state space.

### Unlocking actions

One search action can reveal a credential, identifier, file path, hypothesis, or location that creates new actions unavailable before.

### Stateful environments

A click changes the page. A code edit changes the test results. A robot contact changes pose. A market order changes the book. Search is now control.

### Correlated evidence

Repeated channels can share the same upstream source. Apparent confirmation may add little independent information.

### Nonstationarity

The target or environment moves while the policy searches.

### Different terminal losses

The value of evidence depends on what kind of mistake matters. A medical triage agent, a shopping agent, and a code-repair agent can rationally demand different evidence for the same posterior uncertainty.

### Unknown hypothesis space

The agent can encounter an anomaly that creates a new candidate explanation. Search changes not merely probabilities over known states but the state vocabulary itself.

These departures are the substantive territory of the book.

## 5. Design implications

The two working results suggest an order of operations for agent design.

First ask whether the decision-relevant distinction is observable at all.

Then ask whether the current search process is learning anything that should change the next action.

Only after those questions are answered should the system spend complexity on adaptive routing, tree search, reflection, multi-agent debate, or learned policies.

The fashionable stack is often reversed. Builders begin with more reasoning loops and only later discover that the decisive database field was never exposed, the evaluator could not detect the error, the browser tool returned the same stale source, or every branch was sampling the same uncertainty.

Search policy cannot repair absent evidence.

It can only allocate the evidence channels the system actually has.
