# The Harness Chooses the Winner

Terminal-Bench does something many AI leaderboards still resist. It names the agent. The table has a model column and an agent column because the people running the benchmark know that a language model sitting alone is not the same thing as an agent operating a terminal. The system that actually attempts the task includes the model, the wrapper around it, the tools it can use, the way context is managed, the rules for recovery, the interface to the computer, and the logic that decides what happens next.

That design makes the leaderboard look messier. It also makes it more honest. In Terminal-Bench 2.0, the same model can appear multiple times under different agent systems. A model may perform better with one harness than another. Two entries can share the underlying model family and still differ in how often they complete the same tasks. This is not the small configuration question from Chapter 3.

Chapter 3 asked what a benchmark score belongs to. This chapter asks what happens when the surrounding machinery becomes a competitive technology of its own. The answer is already visible in coding agents. A modern coding product is not a model with a text box.

It decides which files to inspect. It may summarize large repositories to preserve context. It can run commands. It sees test failures.

It decides whether to retry. It edits patches. It may maintain a plan. It may ask another model to review the work.

It decides when it is finished. The base model supplies much of the reasoning and generation. The harness turns that capability into a process. If the harness is bad, a capable model can spend its tokens wandering.

If the harness is good, a weaker model may look surprisingly competitive because the surrounding system keeps it oriented, exposes the right state, and catches recoverable mistakes. This changes the meaning of "best model." A buyer choosing an agent does not necessarily care. The buyer wants the task done.

If a clever harness makes Model B outperform Model A in the actual workflow, Model B inside that harness can be the better product even if Model A would win under a neutral wrapper. A researcher making a claim about base-model progress cares a great deal. If the harness changed, the score cannot be attributed to the model alone. The same tension appears in every mature technical system.

A Formula One engine does not race without a car. A database engine does not operate without indexes, caches, query planning, storage, and hardware. A camera sensor does not produce a photograph without optics and image processing. The surrounding system is not fake capability.

It is capability embodied somewhere other than the component receiving the headline. AI makes this boundary unusually slippery because so much of the stack can be expressed in language. A system prompt can act like policy. A context manager can act like memory.

A planner can turn one goal into a sequence of subtasks. A verifier can act like quality control. A router can send difficult steps to a stronger model. A retrieval layer can compensate for missing knowledge.

A retry policy can convert stochastic success into higher delivered reliability. An external tool can replace a cognitive operation with a deterministic one. The harness begins to look less like packaging and more like management. That is why agent benchmarks increasingly report both.

Terminal-Bench was built around tasks that happen inside a Linux terminal. The benchmark's harness spins up environments, gives agents access to the task, records actions, manages the lifecycle, and checks the resulting state. The original Terminus agent was deliberately simple because the team wanted a relatively neutral test bed for comparing language models. "Neutral" is useful. It is not the same thing as commercially optimal. As agent developers entered the leaderboard, the table filled with systems designed to squeeze more performance out of models.

Some manage context more aggressively. Some use different planning loops. Some expose different tools. Some specialize in terminal interaction.

Some coordinate multiple models. The benchmark becomes partly a competition in agent engineering. That is not benchmark corruption. It may be exactly the technology that matters.

The field has reached a point where a user can reasonably ask two different questions. Which underlying model is most capable under a controlled common harness? Which available agent system completes the most real tasks for an acceptable cost? Terminal-Bench's own tables show why the distinction cannot remain theoretical. In its 2.0 results, the same frontier model appears under multiple agents, and the rows do not collapse to one score. The spread is sometimes modest and sometimes meaningful. A few points can decide a leaderboard position, while a large gap can reveal that the agent layer is wasting or recovering a substantial fraction of the model's potential.

The exact values age quickly, so the book should resist turning one version's leaderboard into a permanent ranking. The stable fact is structural: Terminal-Bench treats **model** and **agent** as separate columns because both vary. That table layout may end up more important than any one row. Those questions should not be forced into one leaderboard. The first rewards comparability.

The second rewards engineering. Terminal-Bench's separation of model and agent at least makes the distinction visible. A 2026 research project called Harness-Bench tried to isolate it more deliberately. The benchmark is designed around a question leaderboards often blur: hold the task environment and resource rules stable, vary the model-harness pairing, and record not only whether the final artifact passes but how the system used tools, time, tokens, state, and recovery. The authors constructed 106 sandboxed tasks derived from realistic agent workflows and ran 5,194 execution trajectories across combinations of models and harness configurations.

That process data matters because two systems can reach the same pass rate by different routes. One may finish efficiently. Another may burn its budget recovering from repeated execution mistakes. A third may reason plausibly in text while failing to reconcile its plan with the actual workspace. Final accuracy collapses those failure modes into one bit. Harness-Bench calls some of these failures execution-alignment problems: the system's reasoning can drift away from tool feedback, file state, evidence, or the output contract. The label is specific to that work and should not be inflated into a theory of alignment generally. It names an engineering fact familiar to anyone who has watched an agent continue confidently after a command failed.

The authors constructed 106 sandboxed tasks derived from realistic agent workflows and ran thousands of trajectories across combinations of models and harness configurations. Their reported result was not that one harness always won. It was that performance varied materially across pairings: completion, efficiency, failure behavior, and process quality could shift when the model stayed similar and the execution layer changed. The study is a preprint. Its exact effect sizes should not be treated as a universal law of agent systems. The experimental framing is useful because it names a variable the industry often hides inside a product name.

Harness quality is measurable. The difficult part is deciding how to measure it without simply creating another layer of benchmark overfitting. A good harness can make a model more effective by doing things a human team would also do. Give the worker the right tools.

Preserve the relevant documents. Make the current state visible. Check the work. Allow correction.

Escalate when necessary. These are not tricks. They are organization design. The AI analogy becomes clearer when a model fails for a reason that has little to do with reasoning.

Suppose the system correctly decides to modify a configuration file. The tool writes to the wrong directory. The model never sees the resulting state. It continues reasoning from an obsolete assumption.

The final task fails. Did the model lack the capability? At the level of the deployed agent, yes. At the level of abstract reasoning ability, perhaps not.

Now reverse it. Suppose the model proposes a bad action. The harness validates the command, detects the problem, blocks execution, and asks for a revision. The system succeeds on the second attempt.

Did the model solve the task? The product did. The distinction sounds philosophical until money enters the picture. An enterprise buying agents cares about delivered outcomes, auditability, security boundaries, latency, and cost. A lab studying scaling laws may care about the base model. A safety evaluator may need both views because a strong harness can increase useful capability and dangerous capability at the same time.

Measurement has to follow the decision. A neutral harness earns its value when the goal is to isolate differences among models. If every model runs through the same simple agent, differences in the leaderboard are easier to attribute to the model. But neutrality has limits.

A common harness may fit one model family better than another. Models are trained with different tool conventions. Some handle long context differently. Some expect particular interaction patterns.

A wrapper that looks neutral from the evaluator's perspective can be an unnatural interface for one system and a familiar one for another. The "same harness for everybody" principle can therefore improve experimental control while underestimating what some models can do under competent elicitation. METR's capability-elicitation guidance faces the same problem from another direction. If the goal is maximum capability, the evaluator should not let a weak scaffold create an artificial bottleneck. The model deserves a serious attempt at elicitation. Terminal-Bench's dataset registry demonstrates that harness standardization can be done carefully.

When the team adapts external benchmarks into its framework, it runs parity experiments. The same model, agent, and prompt are executed through the original evaluation route and the Terminal-Bench adapter. The reported resolution rates are compared to check whether the new harness changed the result. For several adapted benchmarks, the rates closely match. That is important counterevidence to the idea that harnesses introduce arbitrary chaos. Infrastructure can be engineered for measurement fidelity.

The point is not that every wrapper changes everything. The point is that the evaluator should verify when it does. As the agent market matures, harnesses may become a larger share of product differentiation. The best base models are available to multiple companies through APIs.

If several vendors can call the same frontier model, they cannot all differentiate on weights they do not own. They can differentiate on what surrounds the model. Context. Memory.

Tools. Permissions. Planning. Observability.

Domain integrations. Verification. Recovery. Cost control.

Human escalation. The competitive unit becomes the system. This changes benchmarking incentives. A model provider wants a benchmark that highlights its model.

An agent company wants a benchmark that credits its orchestration. An enterprise buyer wants a benchmark that resembles its workflow. A researcher wants experimental control. Those interests can conflict while everybody uses the word "performance."

The most commercially useful evaluation may be the least scientifically clean. This can be handled by reporting a frontier rather than a winner. Suppose one agent resolves 80 percent of tasks at four times the token cost of a system that resolves 76 percent. For a multimillion-dollar engineering incident, the expensive system can be the obvious choice. For thousands of routine tickets, the cheaper system may create more value. Add latency and human-review burden and the ranking can flip again. Terminal-Bench's more recent interfaces increasingly expose cost and token use alongside resolution rate for exactly this reason. Once inference-time computation and multi-agent search become strategic choices, success rate alone rewards systems for spending resources without showing the bill.

A scientifically controlled benchmark can hold the budget fixed to isolate capability. A buyer may instead want the best achievable outcome under a budget constraint. These are different optimization problems. Imagine two agent products attempting a hundred enterprise tasks. Agent A uses a stronger model with a minimal wrapper. Agent B uses a slightly weaker model with better retrieval, structured planning, file inspection, and verification.

Agent B completes more tasks at lower cost. A pure model leaderboard says A is better. The customer's invoice says B is better. Neither result is incoherent.

They measure different products. This is one reason the phrase "model race" is becoming stale. Users increasingly experience agent stacks. The model is the engine, but the economic output depends on a vehicle.

The analogy should not be pushed too far. Language models can perform planning that used to require separate modules, and model improvements can absorb functions that were previously external. A better model can make an elaborate scaffold unnecessary. That movement is itself part of the story. Harness logic migrates into weights. Capabilities that once required explicit prompting become default behavior.

Models learn to call tools more reliably. Longer context reduces the need for aggressive summarization. Integrated computer-use systems blur the line between model and wrapper. The system boundary moves over time.

A benchmark that fixes the harness can therefore preserve comparability by freezing an architecture the market is leaving behind. A benchmark that allows every team to bring its own harness measures real systems but loses causal clarity. The choice is not permanent. A useful ecosystem may need both.

One track holds the harness constant to study models. Another track lets teams optimize the complete agent. A third reports Pareto frontiers across success, cost, latency, and token use. Terminal-Bench has moved in this direction by showing resource dimensions alongside resolution rate in current versions.

That matters because a harness can buy score with resources. More retries increase chances. More context costs tokens. Multiple agents multiply search.

A judge adds another inference call. A system that wins by spending ten times more may still be the right system for a high-value task. It is not the same efficiency result. The buyer should see the trade.

Agent evaluation will eventually need something like an engineering specification rather than a medal table. Task success. Cost. Latency.

Variance. Human intervention. Failure severity. Tool permissions.

Reproducibility. Model version. Harness version. Those dimensions sound tedious because they are the things a single leaderboard score was invented to compress.

The compression is becoming lossy. This does not mean every product comparison needs twenty metrics. It means the evaluator has to know which dimensions can change the conclusion. Harness identity is now one of them.

There is also a selection problem hidden inside harness benchmarking. Agent developers naturally tune their systems against the models they expect to ship. A harness that performs poorly with one model may simply be under-optimized for that model's interaction style, tool syntax, or context behavior. Comparing every model under every vendor's preferred stack would be fairer to products and much harder to interpret scientifically. One solution is a matrix rather than a single race. Run several representative models through several representative harnesses. The resulting table reveals interactions: some harnesses are robust across models, some are specialized, and some models are unusually sensitive to the wrapper. Harness-Bench is valuable partly because it moves evaluation in this direction.

The matrix also changes procurement. An enterprise that already depends on a particular tool framework may care about the best model inside that framework, not the global leaderboard winner. Another enterprise may be free to change both layers and should compare complete systems. The unit of choice follows the constraints of the buyer. This is a recurring theme in measurement: a component ranking is useful only when the surrounding system is held still enough for the component to be the decision variable.

The distinction also matters for forecasting. Suppose a model improves slowly for six months while agent systems built around it improve quickly. A model-only trend says capability progress slowed. A workflow benchmark says useful autonomy advanced.

If the economic question is how much work software can complete, the second trend may matter more. Now suppose the opposite happens. A new model is dramatically stronger in a neutral harness, but production agent systems fail to capture the gain because integrations, security policies, and verification layers lag behind. The model frontier moves.

The deployed frontier does not. Both are real. This is why attributing an agent score to a model can produce bad forecasts. The stack has its own learning curve.

That curve can be surprisingly fast because harness changes are software changes. A team does not need to train a frontier model to add a validator, repair context truncation, change a retry policy, or improve tool descriptions. Product performance can move between model releases. This creates attribution risk in historical charts. If a benchmark shows a steep jump after a new agent version launches, the underlying model may deserve only part of the credit. Conversely, a model release can look disappointing inside a harness built around the quirks of its predecessor. The wrapper needs its own adaptation period.

Longitudinal evaluation should therefore version both layers. "Claude Opus 4.6" or "GPT-5.3-Codex" is not a complete identifier for an agent run if the harness changed around it. The model version and agent version form a pair. People learn how to prompt new models. Tool APIs improve. Agent frameworks discover better context management.

Failure traces become training data for the wrapper. Products add recovery logic. The model may be frozen while the system gets better. Then a new model arrives and changes which scaffolds are useful.

Capability emerges from interaction. Harness-Bench uses the phrase "model-harness configuration" for a reason. It is a clumsy phrase. It is probably closer to the unit that matters.

The temptation will be to solve the naming problem by picking one layer and calling it real. That would repeat an old mistake in technology. Software performance is not only the processor. Network performance is not only the radio.

Manufacturing output is not only the machine tool. Organizations create capability by arranging components. Agent systems do the same. The evaluator's job is not to strip away every arrangement.

It is to state which arrangement was measured. This gives a cleaner way to read the leaderboard. When the same model appears multiple times with different agents, the duplicate rows show how much measured performance moved with the surrounding system. The model name alone no longer identifies the thing that won the task.
