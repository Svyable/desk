# Chapter 15 — The Right Amount of Thought

There is a hidden absurdity in asking a machine to think forever.

Most problems do not deserve it.

A calculator should not contemplate `2 + 2` for an afternoon. A model asked to fix a comma should not consume the same inference budget as a model asked to reconcile conflicting evidence across a thousand pages. An architecture that can continue computation indefinitely has solved only half a problem. The other half is deciding when another step is worth its cost.

This is where the language of “infinite depth” becomes least helpful.

Useful depth is finite, conditional, and instance-dependent.

The idea has been around long enough to have several names. Adaptive computation. Conditional computation. early exit. learned halting. iterative refinement. convergence. In each case, the system tries to avoid spending the same amount of work on every example simply because the architecture's maximum exists.

Alex Graves's Adaptive Computation Time was an early attempt to make a recurrent neural network choose how many internal steps to spend at each input position. A learned halting mechanism accumulated probability until the model decided to move on. The technical details matter less here than the inversion: computation became an output of the model as well as an input constraint.

The network did not only predict *what* to produce. It helped predict *how long to work before producing it*.

That ability looks increasingly valuable in 2026 because test-time compute is no longer a rounding error. Reasoning models, agents, search procedures, verifiers, and tool-using systems can spend orders of magnitude different amounts of computation on requests presented to the same underlying model family.

Once inference is elastic, intelligence becomes partly a scheduling problem.

The simplest scheduler is a fixed budget. Give every problem eight loops. Or thirty seconds. Or 2,000 reasoning tokens. This is easy to operate and easy to benchmark. It also wastes work on easy cases and starves difficult ones.

A smarter scheduler needs a signal of marginal value.

How much better is the answer likely to become if the model gets one more recurrent step?

That is a much harder question than asking whether the current state has changed.

Fixed-Point Reasoners make the convergence idea concrete. A looped model repeatedly updates latent state and can stop when successive representations become sufficiently similar. The method is appealing because the halting signal is intrinsic to the dynamics. No external token budget has to know in advance how many updates a maze, Sudoku, or state-tracking problem deserves.

Yet convergence can mean at least three different things.

The model may have found a correct solution and settled.

It may have found a wrong solution and settled.

It may have stopped changing because its update rule has lost the ability to make progress.

A thermometer that stops moving has not necessarily found the right temperature. It may be broken.

The distinction becomes important in high-dimensional neural state because distance itself is a design choice. Which norm should define convergence? Across which layers? Should a small change in many dimensions count as more important than a large change in one? Does a state that oscillates between two representations deserve more compute, or does it reveal that the system lacks a stable solution?

The halting rule is therefore part of the model's epistemology.

It encodes what counts as “nothing important is changing anymore.”

An external verifier offers a different stopping condition. A proof assistant says the proof is valid. A unit test suite passes. A constraint solver confirms satisfaction. A calculator recomputes the arithmetic. In these domains, latent recurrence can continue until an independently checkable condition is met.

This is more reassuring than self-reported convergence, but it changes the system. The verifier becomes an additional source of intelligence. It can reject a wrong attractor and force more work. It can also be incomplete: tests can pass while software remains wrong; a formal checker can validate only what was formalized.

Search adds another stopping signal. If the best candidate's score is sufficiently better than alternatives, stop. If uncertainty remains, branch further. This spends compute on breadth rather than only depth.

The distinction matters because recurrence is inherently one-path computation unless the system explicitly branches states. A loop can refine a bad hypothesis indefinitely. Search can keep several hypotheses alive. The right amount of thought may therefore require changing *shape*, not just duration.

This is one reason explicit chain-of-thought and tree search will not vanish simply because latent recurrence becomes efficient. Different computational problems reward different structures.

A future reasoning system might begin with a recurrent state, branch when uncertainty becomes multimodal, call a tool when the uncertainty is factual, and return to recurrence after evidence arrives. The scheduler would decide among modes of computation rather than merely counting loops.

That architecture sounds sophisticated because it is. It also sounds expensive.

The scheduler itself needs compute.

If a model spends ten percent of its inference budget deciding how to spend the other ninety percent, the meta-problem has become a real part of the system. If the scheduler is wrong, it can erase the gains from conditional computation.

A practical service therefore cares about average-case economics.

Suppose a fixed-depth model costs one unit per request and solves 80 percent of a workload. A recurrent model can spend between half a unit and ten units depending on the case. If the scheduler sends eighty percent of requests through the half-unit path and reserves expensive recurrence for the hard tail, the average cost can fall while accuracy rises. If it misclassifies difficulty and overthinks most requests, the architecture becomes a luxury product.

The shape of the workload matters as much as the shape of the model.

This is familiar from human organizations. A hospital triages because not every patient needs the operating room. A law firm assigns some matters to routine process and others to senior attention. A cloud service places hot data in faster storage and cold data elsewhere. Scarcity forces hierarchy.

Artificial reasoning will face the same pressure once compute becomes a variable per task.

The most interesting economic consequence is that a smaller recurrent model might compete with a larger fixed model by spending computation selectively.

Imagine two systems. Model A is large enough to solve difficult cases in one fixed pass but pays that large-model cost on every request. Model B is smaller and cheaper per iteration. It solves easy cases quickly and loops longer on hard ones. If Model B's average compute is lower for the same quality, recurrence becomes an economic substitute for stored capacity.

This is the dream behind test-time scaling.

It should not be confused with an established law.

Larger models can be more efficient in ways smaller models are not. A big model may solve in one pass what a small model fails to solve after ten. Recurrent overhead can dominate. More iterations can amplify mistakes. The scheduler can misallocate. The quality curve may saturate quickly.

The only way to know is to compare the entire frontier.

For each model size, measure performance as inference compute varies. Then compare equal-cost operating points. A single benchmark score at one recurrent depth reveals almost nothing about the economic trade.

This is especially relevant for RLT because its baseline recurrent path is tied to sequence length rather than a learned inner halting policy. The architecture naturally gives longer sequences more temporal depth. It does not automatically give harder *tokens* or harder *problems* more depth.

A mature RLT-like system might need two clocks.

One clock advances when a new token is consumed, preserving continuous state across the sequence.

The other advances when the model chooses to iterate internally before committing to the next token.

The first provides continuity. The second provides adaptive thought.

This two-clock design is speculative, but it exposes an important property of reasoning systems: language time and computation time need not be identical.

A person can read one sentence and think for a minute. A model can, in principle, process one token position through several recurrent updates before speaking. A tool call can take ten seconds while no new language token is generated. A search algorithm can explore thousands of states between two visible words.

Token count is an interface clock.

Compute is the underlying clock.

Conflating them made sense when inference was mostly a fixed forward pass per token. It makes less sense as systems acquire latent loops and external actions.

The distinction may eventually reshape benchmarking. Today, “reasoning length” often means how many tokens a model generated before the answer. A recurrent system can think more while saying less. A tool-using agent can spend seconds in external execution. A speculative decoder can generate tokens using different compute patterns. A useful benchmark will need to record wall-clock time, FLOPs, energy, tool costs, and output quality separately.

This also changes product design.

Users may want a control that means “be quick” or “be thorough,” but they should not have to understand recurrent depth. The system can map that preference onto internal budgets. High-stakes tasks might automatically require verification even if the user requests speed. Cheap creative tasks might favor diversity over deep recurrence.

The budget becomes a policy surface.

Policy surfaces attract adversaries.

An attacker may try to force a system into maximal recurrence with inputs designed to appear difficult, creating a denial-of-service attack through cognition. Another attacker may craft prompts that trigger early halting before safety checks complete. A malicious agent might strategically conceal uncertainty so the scheduler grants it less monitored computation. A buggy halting mechanism could create infinite or near-infinite loops in a production service.

Bounded budgets remain necessary even when halting is learned.

“Think until done” must always have a hard ceiling.

This ceiling is not merely a safety valve. It defines the product's worst-case cost and latency. In an architecture whose theoretical temporal depth is unbounded with sequence length, engineering reintroduces boundaries everywhere: maximum context, maximum output, maximum recurrent steps, maximum wall-clock time, maximum memory, maximum tool calls.

Infinity survives only in the asymptotic description.

Real systems are made of quotas.

That does not diminish the conceptual shift. Fixed-depth models hide the quota in the architecture. Recurrent models can move it into runtime policy.

A runtime quota is more flexible.

It is also more political.

Who receives the expensive reasoning tier? Does a free user get fewer loops than a paying user? Does a hospital receive more verification than an advertising system? Does a company allow an autonomous trading agent to spend unlimited compute during a market shock? Does a government model get a different maximum depth for security decisions than for public information requests?

Once computation is conditional, allocation becomes governance.

This sounds premature when RLT itself has not yet demonstrated large-scale advantage. The economics are still worth developing because they tell us what success would actually look like.

Success would not be a model that can recur forever.

It would be a model whose marginal recurrent step is useful often enough, predictable enough, and cheap enough that a scheduler can buy it only when needed.

That is a much higher bar than unbounded depth.

It is also a better definition of intelligence under constraint.

An intelligent system does not prove itself by continuing to think.

It proves itself partly by knowing when another thought is worth more than its cost.
