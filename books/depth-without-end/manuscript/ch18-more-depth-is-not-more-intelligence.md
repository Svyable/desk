# Chapter 18 — More Depth Is Not More Intelligence

The easiest way to sell recurrent depth is to smuggle intelligence into the word *deeper*.

Humans already use depth as praise. Deep thought. Deep understanding. Deep expertise. A shallow answer is careless; a deep one is wise. When a neural architecture offers more depth, the metaphor arrives preloaded with virtue.

Machine-learning depth has no such guarantee.

A network becomes computationally deeper when a signal passes through more transformations. Those transformations can be useful, redundant, destructive, or irrelevant. A thousand applications of a bad update rule do not create wisdom. They create a long mistake.

This chapter is the argument against the book.

The strongest case against RLT and recurrent-depth enthusiasm does not say recurrence is antiquated. It says the field already has better ways to spend additional computation.

Start with explicit reasoning.

Chain-of-thought is inefficient in some ways, but it has advantages latent recurrence must fight hard to replace. Intermediate steps can be supervised. They can be verified. They can be edited. They can call tools. They can become training data. A human can inspect a derivation and identify where it went wrong. A second model can critique it. A formal system can validate it.

A hidden recurrent state gives up much of that surface.

If explicit reasoning needs more compute, generate more tokens. If one chain is unreliable, sample several. If the task requires alternatives, use a tree. If arithmetic matters, call a calculator. If a proof matters, use a formal prover. If factual evidence matters, retrieve sources.

Why add an opaque stateful dynamical system inside the model when the surrounding system can already iterate?

This argument becomes stronger as agent infrastructure improves.

A model can write its plan to a file, execute code, inspect the result, revise the plan, and continue. The world itself becomes the scratchpad. State is durable, auditable, versioned, and often human-readable. Repository history records changes. Databases preserve facts. Tool outputs can be checked.

External loops have one enormous advantage over latent loops: they can change the evidence.

A recurrent model thinking for another hundred steps over the same internal representation cannot discover a new measurement. An agent can run an experiment. Search can retrieve a paper. Code can execute. A simulator can reveal consequences. Additional internal depth competes with actions that acquire information.

For many real tasks, the bottleneck is not insufficient transformation of what the model already knows. It is missing evidence.

A brilliant recurrent state cannot infer a private database record it has never seen.

This suggests a different allocation principle: spend internal compute only until the value of another thought falls below the value of another observation.

RLT by itself does not solve that decision.

The countercase continues at training time.

Perhaps a model that needs enormous recurrent depth is simply underparameterized.

Untied layers can specialize. Early layers detect local structure. middle layers integrate. later layers resolve task-specific abstractions. Shared recurrent weights force one transition to perform many roles. That parameter efficiency may become representational compromise.

A physically deeper network can learn a sequence of qualitatively different operations without asking one block to reinvent its function based on hidden state.

The price is more parameters.

Parameters are getting cheaper to store relative to the value of predictable parallel execution in many settings. Quantization reduces weight memory. high-bandwidth memory grows. sparse activation lets models own huge capacity while using only part of it per token. If hardware continues favoring wide parallel operations, buying more specialized layers may remain a better trade than buying long serial trajectories.

The original Transformer may have gotten the economics right for longer than recurrence advocates expect.

There is also a data argument.

Many apparent reasoning failures may not be architecture failures. The model may simply not have been trained on the right distribution of procedures, counterexamples, feedback, or long-horizon tasks. Better pretraining mixtures, synthetic curricula, process supervision, reinforcement learning, and tool-use data could teach fixed-depth Transformers to use their existing capacity more effectively.

If a standard model performs badly on 128-step state tracking after training at thirty-two steps, one response is to add recurrence.

Another is to train at a broader range of lengths.

If the second solution produces equal generalization with simpler serving, the architectural innovation was unnecessary.

The same applies to long context. RLT gives the decoder a recurrent state that can carry the consequence of distant information. But modern long-context attention, retrieval, memory compression, and state-space methods are all improving. Perhaps direct access to the past will remain better than asking a hidden state to summarize what matters.

Attention won its original argument partly because compression is dangerous.

Reintroducing a compact recurrent channel risks rebuilding the bottleneck attention removed.

The hybrid design softens this criticism because RLT keeps global encoder memory and local attention. It does not rely on recurrence alone. But then the skeptic asks a sharper question: if attention already provides the information, what unique value does recurrent state add?

Every additional mechanism has to justify itself against ablation.

If removing `s_{t-1}` barely changes performance, the architecture's headline feature is dead weight.

If the recurrent state helps only on parity-like tasks, it becomes a niche inductive bias.

If it helps but loses under equal-FLOP comparison, recurrence may be an expensive way to purchase compute.

If it wins only under equal parameter count, its practical value depends on a world where parameter storage matters more than latency.

All of these outcomes are plausible.

The strongest attack comes from test-time search.

Reasoning problems often contain uncertainty about *which path* to take, not merely how much to refine one path. Recurrence deepens a trajectory. Search compares trajectories.

Suppose a mathematical problem admits three plausible strategies. A recurrent state may blend them or commit to one and refine it. Tree search can explicitly explore all three, score progress, and discard failures. For tasks with deceptive local optima, breadth can be more valuable than depth.

A looped model can be extended to branch, but once it is branching, part of the advantage belongs to search rather than recurrence.

This is not semantic bookkeeping. It determines scaling behavior. A hundred units of compute can be spent as one path of depth one hundred, ten paths of depth ten, or some adaptive mixture. The best allocation depends on the problem.

RLT's temporal depth naturally favors the first shape.

The architecture could be wrapped in search. Then the real question becomes whether each branch benefits enough from recurrent state to justify its cost.

There is also a calibration problem.

A larger fixed model can sometimes know that it does not know. A smaller recurrent model may use extra iterations to manufacture confidence. If quality does not improve monotonically with depth, a runtime system needs a robust policy for deciding when more recurrence is helpful. That scheduler can become as complicated as choosing among models in the first place.

At some point, flexibility becomes overhead.

The skeptic can then invoke engineering history.

General-purpose computers support arbitrarily complex control flow, yet accelerators repeatedly win by restricting flexibility around common workloads. GPUs sacrifice some control-flow efficiency to perform enormous parallel numeric work. Tensor processors specialize further. The fastest system is often not the one with the most dynamic architecture. It is the one whose regularity lets hardware exploit the workload relentlessly.

Fixed-depth Transformers are regular.

The recurrence movement asks hardware to tolerate more sequential dependence, more dynamic depth, and more stateful execution because the model may use those freedoms intelligently.

That is a high burden of proof.

The proof has not arrived for RLT.

The report is one day old at the time of this manuscript's first draft. The large-scale configuration is proposed, not trained and benchmarked. The synthetic evidence is promising in one task, mixed in another, and does not match FLOPs. Hardware gains are an agenda. RL scaling is an agenda. The phrase “infinite temporal depth” describes a causal path property, not a measured intelligence frontier.

A cautious reader can reasonably stop there.

Why build a book around a proposal?

Because the proposal sits at an intersection where several independent research lines are already producing evidence. Universal Transformers, looped Transformers, recurrent-depth language models, Coconut, LOTUS, Fixed-Point Reasoners, DeepLoop, and mechanistic studies of looped models all ask versions of the same question: can learned computation become more useful when a compact transition is allowed to run again?

RLT is not the proof of that research program.

It is a sharp new formulation of one branch.

The countercase therefore has to attack the broader thesis too.

Perhaps the observed gains from recurrent and latent-depth models are temporary artifacts of small models and narrow benchmarks. As base models grow more capable, one fixed pass may approximate the iterative procedure well enough that looping adds little. Distillation can compress multi-step computation into a larger feed-forward network. The recurrent path becomes training scaffolding that the mature model no longer needs.

This would resemble how explicit search can sometimes be distilled into policy networks. A slower procedure generates better targets; a larger model learns to imitate the result directly.

If distillation works reliably, then recurrence may be valuable during training and wasteful during deployment.

Or the reverse may happen. No finite fixed model can efficiently compile every possible amount of future computation into its weights. Recurrent execution remains valuable precisely because problem difficulty has an unbounded tail.

Both stories have precedent in computer science.

Lookup tables can replace computation when the input space is small enough.

Algorithms win when the space is too large to tabulate.

Large neural networks occupy an ambiguous middle. They can memorize astonishing amounts and also implement procedures. The frontier between “store the answer” and “compute the answer” shifts with scale.

Recurrent depth is a bet that the compute side of that frontier remains important.

The skeptic's final argument is the most philosophical and the least romantic: maybe total useful compute is what matters, not how it is organized.

Under this view, recurrent depth is one implementation detail among many. Give a sufficiently flexible system the same training compute and test-time FLOPs, and similar capability emerges whether the work is spent in tied loops, untied layers, extra tokens, or search. Architecture matters for engineering efficiency but not for the qualitative nature of reasoning.

If careful experiments supported that view, the central thesis of this book would have to shrink.

“Time is a new dimension of intelligence” would be too grand. Time would be another place to put FLOPs.

That is the book's real falsification condition.

Not that RLT fails. New architectures fail constantly.

The stronger challenge is that recurrence adds no durable advantage once computation, data, and optimization are matched. It does not generalize better, allocate compute better, fit memory better, stabilize algorithms better, or create a more useful internal state. Every apparent win can be reproduced by an ordinary Transformer spending the same resources differently.

If that result emerges, we should believe it.

The historical reversal would still be instructive. Researchers would have rediscovered recurrence, measured it carefully, and learned that the Transformer's old bargain remained superior.

There is no shame in a loop that teaches us where not to spend the next unit of compute.

A best-seller should not need its central technology to win.

It should need the question to survive contact with evidence.

The question here is whether intelligence benefits from computation that can keep transforming a state after architectural depth has run out.

The answer may still be no.
