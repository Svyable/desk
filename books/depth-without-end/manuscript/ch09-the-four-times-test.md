# Chapter 9 — The Four-Times Test

The most honest number in the Recurrent Looped Transformer report is 20.7 percent.

It is not the highest number in the table. It is barely above the floor.

The task has five possible final states, so random guessing succeeds about 20 percent of the time. RLT reaches 20.7 percent when evaluated on programs containing 128 state transitions after being trained on programs containing thirty-two.

If the only purpose of a research report were persuasion, that number would be inconvenient.

Its presence makes the experiment useful.

The preliminary results contributed by Aradhye Agarwal use a small implementation of roughly 79,000 parameters. Three random seeds are reported. Training length is thirty-two operations. Evaluation extends to 128, four times the training horizon, with 2,048 test programs per task and length. RLT is compared with a Transformer, a GRU, and a token-only merge variant under matched parameter and data budgets. The report notes that FLOPs were not matched.

These details establish the scale before the story begins.

Seventy-nine thousand parameters is not a modern language model. It is small enough that calling the experiment “AI reasoning at infinite depth” would be absurd. The tasks are synthetic state tracking, not open-ended reasoning. Three seeds are better than one and far from a population. The reported chart includes means and seed ranges, but many values have to be read approximately from the figure because exact labels are not printed for every point.

The evidence is modest by design.

That makes the experiment easier to reason about.

The first task is parity. The model processes a sequence of operations and must identify the final binary state. Chance accuracy is 50 percent. At sixteen operations, RLT is approximately perfect. At thirty-two, the training length, it remains approximately perfect. At sixty-four, twice the training length, it is around 82 percent. At 128, four times training length, it scores 60.8 percent.

The Transformer baseline behaves differently. It is around 98 percent at sixteen operations, roughly 72 percent at thirty-two, around 50 percent at sixty-four, and around 48 percent at 128. The token-only merge variant follows a similar collapse, from roughly 98 percent at sixteen to about 59 percent at thirty-two and chance thereafter.

If you stop here, recurrence looks excellent. RLT fits the training horizon and retains meaningful signal well beyond it. At 128 operations, 60.8 percent is not good enough for a real state machine, but it is measurably better than chance in a regime where the baselines have lost the task.

Then comes the five-state transition problem.

RLT again reaches approximately 100 percent at sixteen and thirty-two operations. At sixty-four, it drops to roughly 49 percent. At 128, 20.7 percent.

Chance.

The Transformer is already weak: about 54 percent at sixteen, 24 percent at thirty-two, and around chance at sixty-four and 128. The token-only merge model looks similar. RLT clearly learns the task at the training length better than those baselines. It also fails to preserve that learned computation through a four-times-long unroll.

The pair of tasks tells a better story together than either tells alone.

The architecture appears to create an inductive bias that is genuinely useful for state tracking. It also does not magically transform gradient-trained continuous networks into perfect algorithms.

The parity result demonstrates partial length generalization.

The five-state result demonstrates its limit.

This is exactly the kind of evidence a new architecture needs. A clean win at every length would invite questions about task leakage, implementation asymmetry, or whether the problem was too easy. A complete failure would tell us little except that the idea needs work. The observed pattern—strong in-distribution fit, better extrapolation than baselines, then substantial degradation—locates the research problem.

The problem is stability under repeated application.

Parity has only two logical states. If the learned representation forms two robust basins and the transition between them is reasonably clean, small errors may be corrected or at least remain separated for many steps. A five-state system requires more distinct regions and more transitions among them. More opportunities exist for trajectories to drift, overlap, or accumulate small mistakes.

That is one plausible explanation. It is not established by the figure.

Another possibility is that parity admits shortcuts with good length behavior that the five-state transition task does not. Another is that the model's attention pathways contribute in ways that happen to extrapolate better on parity. Another is optimization: the small RLT may simply have enough capacity to learn the training distribution while lacking the margin required for stable long unrolling.

A useful follow-up would inspect state geometry directly. Train a probe to identify the true discrete state from the recurrent representation at each operation. If probe accuracy remains high while final output collapses, the problem lies downstream. If state clusters blur progressively with length, the recurrence itself is losing the invariant. Perturb the recurrent state slightly and see whether subsequent updates return it toward the correct cluster or amplify the error. Swap states between examples whose true discrete state matches; if behavior remains stable, the representation may be encoding the intended sufficient statistic rather than incidental history.

The figure cannot answer those questions. It tells us where to look.

The unmatched-FLOP caveat matters just as much.

Suppose RLT executes more work than the Transformer baseline because the recurrent decoder adds a path the baseline does not have. Then its superior accuracy could be partly a consequence of spending more computation. That does not make the result meaningless. It changes the claim.

There are several possible scientific questions hiding inside the phrase “better model.”

At equal parameter count, which architecture is more capable?

At equal training compute, which learns faster?

At equal inference FLOPs, which answers more accurately?

At equal wall-clock latency on specific hardware, which performs better?

At equal memory footprint, which can support a longer or more capable execution?

At equal energy, which is preferable?

The current experiment primarily speaks to the first and, partially, to architectural generalization. It does not settle the others.

This distinction becomes especially important for a recurrent model because parameter sharing can make storage look inexpensive while execution grows. A looped block may contain fewer distinct weights than an equally deep untied network and still perform as many or more multiplications. If researchers compare only parameter count, recurrence receives free compute in the experimental accounting.

If they compare only FLOPs, they can miss the practical value of a model that fits in memory or reuses weights efficiently.

There is no single fair denominator.

There is only a denominator appropriate to the claim.

The synthetic results are also independent rather than part of a large coordinated evaluation. That is a useful feature and a limitation. Independent contribution reduces the risk that the architecture's author selected every implementation detail to favor the proposal. It also means the experiment may not embody the architecture exactly as a future large-scale implementation would. Small models can behave differently from large ones. Optimization settings that work at 79,000 parameters say little about training a recurrent decoder with billions of parameters and long contexts.

Scaling can expose failures that do not exist in a toy.

Memory bandwidth becomes dominant. Gradient checkpointing becomes expensive. Long recurrent sequences make backpropagation costly. Distributed training introduces synchronization. Numerical error accumulates across more transformations. Batch composition affects utilization. The ratio between encoder and decoder work matters. Cross-attention to global memory becomes a substantial systems component.

Scaling can also make mechanisms work better.

A tiny model may lack capacity to represent a robust transition. Larger hidden states may create cleaner attractors. More diverse training may teach the model to recover from off-trajectory states. Better normalization and residual scaling may allow repeated parameter visits to remain stable. An architecture that looks fragile at 79,000 parameters could improve with scale.

We do not know which direction dominates.

That uncertainty should control the language used to describe the result.

The phrase “RLT generalizes to four times the training length” is technically defensible only if immediately qualified. On parity, it remains above chance at four times length but has lost nearly forty percentage points from its in-distribution performance. On five-state transitions, the four-times-length result is chance. The stronger statement—that recurrence yields robust four-times extrapolation—would be false.

The opposite claim, “RLT fails beyond training length,” is also too crude. At twice training length, both tasks show substantial advantages over the baselines. Parity retains meaningful signal even at four times. Something about the recurrent structure has changed the failure curve.

Science lives in that uncomfortable middle.

The architecture is neither vindicated nor embarrassed. It has produced a phenomenon.

This is one reason synthetic tasks remain valuable in an era obsessed with giant benchmarks. Natural-language evaluations contain too many degrees of freedom. A model can answer a question through memorization, pattern matching, tool knowledge, verbal heuristics, or genuine multi-step computation. When the score changes, identifying why can be difficult.

A synthetic state machine removes much of the fog. We know the minimal algorithm. We know the true state at every step. We can extend the horizon arbitrarily. We can construct adversarial transitions. We can test exactness. The task becomes a microscope for one mechanism.

The danger is confusing the microscope with the world.

A network that learns parity to 128 operations has not demonstrated scientific reasoning. It has demonstrated a property that might matter to scientific reasoning: the ability to preserve and update a latent variable beyond the length distribution seen in training.

Many real problems require exactly that ability and much more.

A coding agent may need to maintain a hypothesis across dozens of tool calls while new evidence arrives. A legal model may need to track which claims remain unresolved as it reads a long record. A theorem prover may need to preserve proof obligations through many transformations. A scientific system may need to update a causal model without forgetting why an earlier hypothesis was rejected.

In none of these cases is the state a clean integer from zero to four.

The synthetic task strips away the richness so we can ask whether the basic dynamical capacity exists at all.

The next experimental step should therefore increase complexity carefully rather than jump straight to a conversational benchmark.

One progression might begin with deterministic finite-state machines of increasing state count, then pushdown-like tasks requiring a stack, then algorithmic problems with multiple interacting variables, then tasks where relevant information must be retrieved from global memory while recurrent state carries the current procedure. Each stage tests a different computational burden.

Another progression could vary training and evaluation horizon systematically. Train at sixteen, thirty-two, sixty-four. Evaluate every model across a broad length range. If the break point always occurs at a fixed multiple of training length, the recurrence is not learning a truly length-invariant update. If improved training causes the failure point to move much farther outward, the limitation may be optimization rather than architecture.

A third progression would match compute.

Give the Transformer baseline extra layers, pause tokens, or explicit iterative steps equal in FLOPs to the recurrent model. Compare fixed-depth, tied-depth, and token-time recurrence. This would tell us whether RLT's advantage comes from a particular state pathway or simply from an additional budget.

A fourth would remove components.

No recurrent state, only sliding-window cache.

No sliding-window cache, only recurrence and encoder memory.

Reset the recurrent state at the prompt boundary.

Keep the recurrent state but stop its gradient.

Carry the final state but randomize older decoder KV.

Replace the learned merge with a trivial token-only merge—the baseline already points in this direction.

A strong architecture should have an identifiable causal core.

The fifth progression is the one most likely to be skipped because it is expensive: measure systems performance.

How much slower is prompt prefill when the decoder must recur through every prompt token? How much memory does full backpropagation through time require at realistic context lengths? How much can activation checkpointing recover? What throughput is achieved when independent sequences are batched? Do shared weights reduce memory movement enough to offset some sequential cost? How does latency compare with a baseline that spends the same FLOPs on explicit reasoning tokens?

Until those questions are measured, “hardware co-design” remains an agenda, not a result.

There is nothing wrong with an agenda.

New architectures begin as bets about which bottlenecks are worth moving. The Transformer itself did not arrive with the entire industrial software stack that would later optimize it. FlashAttention, fused kernels, specialized compiler paths, quantization schemes, serving systems, and enormous distributed training infrastructure followed because the architecture proved valuable enough to justify engineering around it.

A recurrent architecture would have to earn the same investment.

The first proof does not need to be a production speedup. It needs to show a capability or efficiency frontier that cannot be reached as easily by simpler means.

That is what the four-times test begins to ask.

Can a learned state update keep doing useful work after the training horizon ends?

For parity, somewhat.

For five-state transitions, for a while.

Then the loop forgets how to be the algorithm we hoped it had learned.

The next paper should not hide that failure. It should make the failure curve the object of study.

The number 20.7 percent is where the real research starts.
