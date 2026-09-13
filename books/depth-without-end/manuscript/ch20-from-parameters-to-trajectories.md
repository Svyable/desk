# Chapter 20 — From Parameters to Trajectories

For years, the easiest way to describe an AI model was to say how big it was.

Parameter count was never enough, but it was legible. A model with 175 billion parameters felt larger than one with seven billion. The number fit into a headline. It suggested cost, capacity, ambition, and, often incorrectly, quality.

Then the number began to fracture.

Sparse mixture-of-experts models contained far more total parameters than they activated for one token. Quantization changed storage without changing the nominal parameter count. Retrieval moved some factual memory outside weights. Longer contexts changed what a model could condition on without changing weights at all. Fine-tuning, reinforcement learning, and tool use made checkpoints with similar size behave very differently.

Reasoning models fractured the number further.

The same weights could produce different performance depending on how much test-time compute they were allowed to spend.

Recurrent depth makes the fracture impossible to ignore.

A checkpoint is no longer one computation.

It is a rule for generating computations.

This is the shift from parameters to trajectories.

A trajectory is the path a state takes through the model during execution: which inputs arrive, which internal transitions are applied, how many times shared parameters are revisited, which memories are consulted, where the state converges or changes direction, and how much compute is spent before output.

Two systems can own the same weights and travel different trajectories.

One stops after four recurrent iterations. Another continues for twenty. One reads a short prompt. Another carries state through a hundred-thousand-token sequence. One branches into search. Another remains on a single latent path. The stored model is identical. The effective computation is not.

This should sound ordinary if you come from algorithms.

Nobody describes a sorting program's performance solely by the size of its executable. We care about input size, algorithmic complexity, memory, and runtime. A chess engine's source code does not determine how many nodes it will search under every time control. A database binary does not tell you how expensive a query will be.

Neural networks briefly allowed us to forget this because fixed-depth inference made execution unusually regular.

A token entered. It passed through the stack. Cost was predictable enough that parameter count and token count were useful rough proxies.

Recurrent architectures turn the model back into a program whose behavior depends on how long and where it runs.

This has consequences for scaling laws.

The familiar modern frame uses parameters, training data, and training compute as major resource axes. Those variables remain important. Recurrent depth adds another allocation decision after training: how much learned computation should be executed for this problem?

Call the stored parameters `N`.

Call the training data `D`.

Call training compute `C_train`.

Now add test-time compute `C_test`, and allow it to vary per request.

A fixed-depth model still has `C_test`; inference has never been free. The difference is that recurrent and reasoning architectures can make the variable strategic rather than nearly mechanical.

The deployment problem becomes a surface.

For a given `N`, what performance is achievable as `C_test` changes?

For a given total budget, should the next dollar buy a larger model that is expensive on every request, or a smaller model allowed to run longer only when needed?

For a repeated workload, when does training a larger checkpoint pay back its higher fixed cost through cheaper inference per solved task?

For a rare difficult problem, when is it better to spend enormous one-off test-time compute than to own a larger model permanently?

These are resource-allocation questions, not philosophical questions about whether a machine is “thinking.”

They will decide which architectures survive.

Consider a stylized example.

Model A has twice the parameters of Model B. It achieves 90 percent accuracy with one fixed pass. Model B achieves 82 percent with a shallow recurrent budget, 88 percent with moderate recurrence, and 91 percent with heavy recurrence. If the workload is mostly easy and the scheduler can identify difficult cases, Model B may be cheaper overall. If every request is hard, Model A may win by avoiding serial loops. If latency is critical, A may win even when B uses fewer total operations. If memory capacity is the constraint, B may fit where A cannot.

There is no universal “smaller recurrent model beats larger model” conclusion.

The useful object is the frontier.

Plot quality against cost under several constraints. Include wall-clock latency, not only FLOPs. Include memory, not only parameters. Include batch size. Include energy when relevant. Then ask which system dominates in the regime you actually care about.

The industry already does fragments of this analysis internally. Public model discourse remains much cruder.

A recurrent era would force more honest reporting because a single checkpoint could be sold at several reasoning depths.

The provider might expose a “fast” mode and a “deep” mode. The underlying weights could be identical. The difference would be recurrence budget, search budget, verifier use, or some mixture. Users would experience two apparent models built from one parameter file.

Pricing would have to follow execution more closely.

Token-based billing is convenient because input and output are observable. Hidden recurrence creates cost that tokens do not reveal. Providers can absorb that difference into a price tier, charge for “reasoning effort,” or meter compute more directly. Each choice hides or exposes different parts of the system.

Scientific benchmarking faces the same problem without the luxury of hiding it.

If one paper reports a seven-billion-parameter model and another reports a thirteen-billion-parameter model, the comparison is already incomplete. If the seven-billion model runs its shared block sixteen times and the thirteen-billion model runs a fixed stack once, parameter count can be actively misleading.

Benchmarks will need execution disclosures.

How many recurrent steps were used?

Were they fixed or adaptive?

What was the average and tail distribution?

How many visible reasoning tokens were generated?

How many candidates were sampled?

Were tools or verifiers used?

What was total inference compute and latency on stated hardware?

Without those numbers, “model performance” becomes a property of an invisible budget.

This is not a unique problem for recurrence. Agentic benchmarks already struggle with variable numbers of tool calls. Search-based systems spend different amounts of time. Reasoning models may hide internal tokens. Recurrent depth is one more pressure pushing evaluation from checkpoints toward systems.

The shift has a conceptual consequence too.

If capability depends on trajectory, intelligence becomes less like a stored substance.

A model does not contain one fixed quantity called intelligence that is released when prompted. It contains learned structure that can participate in computations of different lengths and forms. Some trajectories uncover capabilities others do not. Some waste compute. Some get trapped. Some use tools that radically extend what the weights can accomplish.

This sounds obvious to engineers and disruptive to the culture built around model leaderboards.

The culture likes objects.

Objects can be ranked.

Trajectories require conditions.

A trajectory-based view also changes how we think about distillation.

Suppose a large or deeply recurrent teacher solves a problem through a long computation. A smaller student is trained on the final answer or intermediate supervision. If the student learns to produce the same result with a shorter trajectory, some test-time computation has been compiled into weights.

Training can therefore convert runtime into structure.

The reverse is also true. Recurrence can convert structure into runtime by reusing a smaller set of weights more times.

This creates an exchange rate between stored complexity and executed complexity.

That exchange rate is not fixed.

Better distillation makes runtime easier to compile away.

Better recurrence makes stored depth easier to replace with repeated computation.

Better hardware changes the price of memory relative to arithmetic.

Better data changes how much structure can be learned into a fixed model.

Better search changes the value of spending compute outside the network.

Architecture research is partly the study of these changing exchange rates.

RLT places one unusual item on the market: temporal path length that grows naturally with sequence progression.

The architecture does not ask for a separate recurrent-depth hyperparameter in its basic formulation. Each token extends the path. This means `C_test` is coupled to input and output length in a way that differs from optional test-time search.

That coupling can be useful when longer sequences genuinely require more state updates. It can be wasteful when length is verbosity rather than difficulty.

A future system may decouple them with adaptive inner loops, selective state updates, or skipping mechanisms. Then the trajectory becomes more dynamic still.

The model could learn not only *what* state to carry but *whether* the current token deserves to change it.

Imagine a recurrent state update gate that remains nearly closed for boilerplate and opens for consequential evidence. The physical decoder still executes, but the effective state trajectory advances unevenly. A contradiction produces a large update. Punctuation barely moves the workspace. A difficult subproblem triggers several latent loops before output.

Now “depth” is no longer an integer counted cleanly from token one.

It becomes a path-dependent measure of how much transformation the state has actually undergone.

This is one reason the future metric may be less about nominal depth and more about *effective computation*.

But effective computation is difficult to define. FLOPs are objective enough to count but do not tell us which operations mattered. State displacement can be measured but depends on representation geometry. information-theoretic measures can quantify change without telling us whether the change improved the solution.

The cleanest practical measures may remain mundane: accuracy, latency, energy, memory, and money.

If recurrence gives better answers per dollar under real constraints, the architecture will matter.

If it merely produces elegant trajectories that cost more than alternatives, it will remain a research curiosity.

This economic framing protects us from both hype and dismissal.

“Parameters are obsolete” would be nonsense. Parameters remain the learned machinery that makes the trajectories possible.

“Only parameters matter” is becoming equally untenable. The same machinery can be used differently.

A useful analogy is an orchestra score. The score matters enormously. It constrains what can be played. But the duration, tempo, repetitions, interpretation, ensemble, and performance determine what is actually heard. Counting notes in the score does not tell you the length of the concert.

The analogy breaks where all analogies do; a neural model is not an orchestra. The point is simply that stored specification and executed event are different objects.

AI is moving from an era obsessed with the specification toward one forced to measure the event.

Recurrent depth accelerates that move.

The relevant unit is no longer only the model.

It is the model in motion.
