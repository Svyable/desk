# Chapter 21 — The Benchmark That Could Kill the Idea

A new architecture deserves a benchmark designed to make it lose.

Not a benchmark hostile to the mechanism. A benchmark hostile to ambiguity.

Recurrent depth is unusually easy to flatter because the obvious comparison axes can be chosen selectively. Match parameter count and the recurrent model may receive more compute. Match FLOPs and an untied model may require more parameter memory. Match output tokens and the latent model may hide expensive internal work. Match latency on one accelerator and a kernel optimized for the baseline may dominate. Evaluate only at training length and length generalization disappears from view. Evaluate only on synthetic state machines and the architecture never has to prove it helps language.

A convincing experiment has to survive several definitions of fair.

The first benchmark should be boring enough to audit.

Take algorithmic state-tracking tasks where the true state is known at every step. Include parity, finite-state transitions, counters, stacks, nested structures, shortest-path updates, and small dynamic programs. Train across specified length distributions and evaluate far beyond them.

Do not report only final accuracy.

Report the entire failure curve as length increases.

Decode the true latent state at each step where a ground-truth state exists. Measure when trajectories begin to drift. Inject controlled perturbations. Reset recurrent state halfway through. Swap states between examples. Vary loop or recurrence budget. If the architecture's advantage comes from learning stable update rules, those rules should be visible under stress.

The second benchmark should remove the home-field advantage.

Use natural-language tasks in which recurrence is not obviously the right solution. Long-document reasoning. Code debugging. mathematical proofs. multi-hop factual synthesis. planning under changing constraints. Tasks where the model must revise an early hypothesis after later evidence.

These problems should be selected because they require different computational shapes.

Some favor state tracking.

Some favor retrieval.

Some favor search.

Some favor tool use.

A recurrent architecture that wins only on problems designed to look recurrent has established a niche, not a new scaling axis.

The third requirement is multiple resource matches.

Compare equal parameter count.

Compare equal inference FLOPs.

Compare equal training compute.

Compare equal peak memory.

Compare equal wall-clock latency on declared hardware.

No single experiment needs every match simultaneously, which may be impossible. The paper should show how the ranking changes under each constraint.

This matters because architectures are resource transformations. RLT may convert parameter memory into sequential compute. An untied Transformer may convert memory into parallel depth. Search may convert latency into breadth. A fair evaluation reveals the exchange rate rather than pretending there is one universal budget.

The fourth requirement is a strong baseline family.

An ordinary Transformer at matched size is not enough.

Include a deeper untied Transformer spending similar FLOPs.

Include a weight-shared looped Transformer without token-time recurrent state.

Include a recurrent-depth model with inner latent loops.

Include explicit chain-of-thought or pause-token baselines given comparable test-time compute.

Include a search or self-consistency baseline where the task supports it.

Include a model with long context and no recurrence.

Include the token-only merge ablation already used in the preliminary experiment.

The goal is to discover what part of the gain belongs specifically to persistent recurrent state across tokens.

The fifth requirement is brutal component ablation.

Reset recurrent output at the prompt–response boundary.

Keep recurrent output but remove decoder sliding-window attention.

Keep sliding-window attention but remove recurrent feedback.

Reduce encoder memory.

Detach recurrent gradients at various horizons.

Use stale caches in replay and compare them with exact reconstruction.

Vary merge functions.

Randomize or zero the recurrent state at controlled positions.

If a component can be removed without changing behavior, stop giving it conceptual credit.

The sixth requirement is a depth-response curve.

A claim about scalable temporal computation should not be supported by one chosen depth.

Train and evaluate across multiple recurrent budgets. Plot quality against actual compute. Look for monotonic improvement, saturation, degradation, and phase changes. Test recurrent depths beyond those common in training. Report variance across seeds.

If the model improves to depth sixteen, flattens at thirty-two, and deteriorates at sixty-four, that is the result.

Do not report only sixteen.

For RLT's token-time recurrence, sequence length provides one depth axis, but researchers can still manipulate effective state exposure with neutral tokens, compressed prompts, state resets, or variants with inner recurrence. The objective is to separate “more evidence” from “more transformations.”

The seventh requirement is wall-clock honesty.

Run on real hardware with real kernels.

Report time to first token for long prompts.

Report steady-state decoding latency.

Report throughput at batch one and under high utilization.

Report memory consumption for weights, activations, encoder memory, and KV caches.

Report how checkpointing changes training time.

Report energy if measurement is credible.

A recurrent model does not get to call itself efficient because it stores fewer parameters while the accelerator waits on a serial critical path.

Nor should an untied model get to call itself faster because an optimized production kernel is compared against a naïve recurrent prototype. Systems comparisons should document implementation maturity and include roofline-style analysis where possible.

The eighth requirement is exactness around reinforcement learning.

Take a current-policy RL setup and measure the cost and effect of rebuilding recurrent state under updated weights. Compare exact replay with stale-state approximations across update magnitudes and sequence lengths. Measure divergence in action probabilities, objective estimates, gradient direction, and achieved reward.

If stale state barely matters, the replay problem becomes an implementation detail.

If it causes large bias, the architecture has acquired a serious training tax.

Either outcome is valuable.

The ninth requirement is perturbation robustness.

Run inference under different numerical precisions and mathematically equivalent kernels. Add tiny controlled noise to recurrent state. Quantize it. Change batch composition. Measure whether trajectories and outputs remain stable.

A useful recurrent system must tolerate the numerical messiness of real deployment.

If one bit of floating-point noise at token 200 changes the answer at token 2,000, the temporal path is not a source of intelligence. It is a source of chaos.

The tenth requirement is revision.

Construct tasks where the model is encouraged to believe something wrong early and receives decisive correction late. Measure how quickly its recurrent state abandons the old hypothesis. Compare against a model that reconstructs reasoning from attention each step.

This benchmark attacks the deepest risk of persistent hidden state: that continuity becomes commitment.

A model that cannot revise should not be rewarded for remembering.

The eleventh requirement is interpretability proportional to the claim.

No paper has to solve neural interpretability before releasing an architecture. But if authors claim a recurrent state performs iterative reasoning, they should provide evidence beyond accuracy.

Probe known task variables.

Intervene on them.

Show whether useful information strengthens or merely confidence increases.

Measure state displacement around consequential tokens. Examine attractors and oscillations. Demonstrate that later recurrence can correct earlier internal error on at least some controlled tasks.

The stronger the cognitive vocabulary, the stronger the mechanistic burden.

The twelfth requirement is replication.

The first large result should be treated as the beginning, not the ending. Independent teams should reproduce the training curve, hardware performance, and recurrent-depth gains. Small implementation choices can matter enormously in new architectures. A result that survives different codebases becomes qualitatively more trustworthy.

The original RLT synthetic experiment is valuable in this respect because it was contributed independently. A mature evaluation should expand that habit.

What would kill the idea?

Not one failed model.

Architectures have optimization problems. Hyperparameters are missed. Kernels mature. Small-scale results fail to predict large-scale behavior in both directions.

The serious kill result would be systematic.

Across sizes and tasks, after matching resources appropriately, recurrent temporal state provides no durable advantage. Fixed-depth or untied models achieve equal generalization at equal compute. Explicit test-time reasoning uses additional FLOPs more effectively. Search handles hard tails better. Long context reconstructs state cheaply enough that recurrence adds no value. Parameter sharing saves memory but creates too much serial latency. Exact RL replay imposes cost without learning benefit. Longer recurrent paths become unstable before they become useful.

If those findings accumulate, temporal recurrence is not a new scaling axis.

It is a specialized engineering trade.

This book should survive that outcome by narrowing its claim rather than resisting the evidence.

The history would then read differently. Researchers in the late 2020s revisited recurrence because test-time compute had become valuable. They learned that shared iterative structure could help on some algorithmic tasks but that modern attention, search, and external tools remained better general-purpose mechanisms. The experiment clarified why the Transformer abandoned token-time recurrence and why the abandonment remained rational under new conditions.

That would still be a worthwhile story.

What would make the idea hard to dismiss?

A recurrent model trained at useful scale that improves smoothly as latent or temporal depth grows, including beyond familiar training horizons.

Gains that survive matched-FLOP comparisons against strong untied and explicit-reasoning baselines.

Ablations showing that persistent recurrent state, rather than generic extra computation, causes the improvement.

Stable long trajectories under perturbation.

Adaptive computation that saves average cost without sacrificing hard cases.

Hardware measurements showing a credible deployment regime where shared weights and state locality offset sequential dependence.

Mechanistic evidence that recurrence carries and revises task-relevant variables.

Natural-language or tool-using tasks where the same learned transition continues useful work rather than merely fitting synthetic automata.

That package would not prove infinite intelligence.

It would establish something much more valuable: reusable learned computation that remains productive as execution continues.

There is one more benchmark I would like to see because it is harder to game.

Train two models under the same total budget. One is allowed additional parameters but fixed execution depth. The other is forced to remain smaller but is allowed recurrence. Then give both a distribution of tasks whose difficulty varies widely and a fixed lifetime inference budget across the entire test set.

The models are not scored only on average accuracy.

They have to decide where to spend their resources.

An easy problem solved cheaply leaves more compute for a hard one. An overthinking model runs out of budget. A model that cannot identify difficulty wastes capacity. A large fixed model pays its cost on every example.

This would test the economic thesis behind recurrent depth, not merely its raw capability.

Can a model with a reusable transition allocate time better than a model that stores more computation in structure?

The experiment resembles life more than a leaderboard does.

Resources are finite. Problems arrive with unequal difficulty. We do not know in advance which ones deserve attention. Intelligence is partly the ability to spend scarce computation where it changes the outcome.

If recurrence cannot help with that, the word *depth* has seduced us.

If it can, the discovery will be larger than one architecture.

The benchmark should be designed so we are willing to learn either answer.
