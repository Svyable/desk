# Chapter 22 — Depth Without End

The phrase that started this book has become smaller.

That is a good sign.

“Latent reasoning with infinite temporal depth” sounded, on first encounter, like a claim about boundless machine intelligence. Twenty-one chapters later, the useful meaning is more precise. A recurrent state can pass through a fixed decoder again as new tokens arrive. The model owns a finite set of blocks. The causal path available to state can keep growing with sequence time. Computation that would normally be encoded into more distinct layers can, in part, be expressed as repeated transformation of changing state.

Nothing about that is infinite in the way ordinary language uses the word.

The hardware is finite. The sequence ends. Memory ends. Budgets end. Gradients become difficult. States drift. Latency accumulates. A useful system must halt.

The architecture's real provocation survives all of those limits.

Depth does not have to be finished when the model is built.

That idea reaches beyond RLT.

Universal Transformers recurrently refined representations across depth. Transformer-XL carried representations across segments. ALBERT demonstrated aggressive sharing of layer parameters. Looped Transformers explored iterative algorithms. Coconut fed continuous hidden states back into later reasoning. Recurrent-depth language models turned additional latent iterations into test-time compute. LOTUS tried to supervise useful latent progress without serializing every thought into words. Fixed-Point Reasoners asked whether convergence could decide when to stop. DeepLoop studied what repeated visits do to residual scaling. Mechanistic work began following representation trajectories through virtual depth rather than assuming a loop has one universal function.

RLT ties a particular knot among these threads.

Its causal encoder retains global key-value memory. Its decoder retains recent sliding-window attention. Its previous final decoder output enters the next token's computation. The recurrent state survives the user-facing line between prompt and response. The architecture therefore treats the entire sequence as one computational history.

This gives the model something ordinary attention does not explicitly promise: a place for *where the computation has arrived* to survive from token to token.

The distinction matters even if RLT itself fails.

Large language models have trained us to think of intelligence as a property of an object. The object has parameters. The object has a context window. The object has a benchmark score. We name the object and compare it with other objects.

Modern reasoning systems are already breaking that picture.

The same weights behave differently under different search budgets, tool access, reasoning lengths, samplers, memories, and verification procedures. Capability increasingly belongs to the execution as much as to the checkpoint.

Recurrent depth makes the execution impossible to treat as an afterthought.

A state has a trajectory.

A trajectory has a length, a stability, a cost, and a history.

It can improve.

It can drift.

It can converge.

It can get trapped.

It can be interrupted.

It can be replayed incorrectly after the model changes.

It can carry a useful invariant farther than the training horizon, then collapse at four times length.

That last sentence is not an abstract warning. It is in the first RLT evidence. The small synthetic model performs impressively on state tracking at and beyond its training length, especially compared with the baselines. Then the five-state task falls to 20.7 percent at 128 operations.

Chance.

I keep returning to that number because it protects the idea from becoming mythology.

The interesting future is not one in which recurrence automatically produces perfect algorithms. It is one in which researchers learn why a repeated learned transition remains stable for sixty-four steps and fails by 128, then make the failure horizon move, understand what moved it, and determine whether the same principles survive contact with natural language and large-scale training.

That work could fail.

Maybe untied depth remains easier to optimize and faster to serve. Maybe explicit chain of thought plus tools offers better oversight and flexibility. Maybe search uses the hard-tail compute budget better than recurrence. Maybe long context reconstructs what a hidden state would carry without introducing dynamical fragility. Maybe the serial path is too expensive on hardware built to exploit parallelism. Maybe any advantage at equal parameter count vanishes when FLOPs are matched.

These are not caveats around the thesis.

They are alternatives to it.

A book written one day after the initiating report cannot know which one wins. The proper ambition is to identify the fork clearly enough that future evidence has somewhere to land.

The fork is not recurrence versus attention.

That battle is already obsolete. The interesting architectures combine mechanisms.

The fork is between two pictures of learned computation.

In one, capability is largely stored in a fixed architecture whose forward pass extracts what training put there. More capability usually means improving the stored object: more or better parameters, data, objectives, routing, or memory.

In the other, the stored object increasingly becomes a reusable transition embedded inside a runtime that can decide how long, where, and in what form to compute. More capability can come from a better trajectory as well as a better checkpoint.

The second picture looks more like conventional computation than the first.

A program is not powerful because every possible execution is unrolled into its source code. It is powerful because compact instructions operate on mutable state, branch, loop, call other procedures, read memory, and stop under conditions determined partly by the problem.

Neural networks are slowly rediscovering that freedom after a decade in which fixed stacks fit the hardware unusually well.

The rediscovery will not recreate ordinary software. Learned transitions are probabilistic, distributed, and difficult to specify. Their state does not arrive with variable names. Their loops can amplify errors. Their stopping rules can be wrong. Their behavior outside training is uncertain.

That is what makes the research worthwhile.

A recurrent neural system is a program we did not write whose loop invariant we may not know.

If we are going to let it run longer, we need to discover the invariant.

This may become one of the central scientific problems of recurrent reasoning.

What property remains stable when useful thought continues?

In parity, the answer is obvious: the correct parity state.

In a proof, perhaps it is the set of established obligations and unresolved goals.

In code, perhaps it is a model of the program's causal behavior.

In planning, perhaps it is a consistent representation of constraints and consequences.

In ordinary language, the invariant may be less formal: fidelity to the user's objective, the evidence, and the distinctions the task requires.

A recurrent architecture that cannot preserve these things is merely deep.

A recurrent architecture that preserves them while revising everything else begins to look useful.

This is why the memory hierarchy matters. The recurrent state should not have to preserve every fact. Exact evidence can remain in addressable memory or external sources. Recent detail can remain in local attention. The state can carry the consequence of what has been learned so far.

That division is attractive because it resembles how complicated computing systems manage information: not one giant memory, but several levels with different costs and purposes.

It also creates responsibility. If the hidden state carries conclusions while the evidence remains elsewhere, the system must know when to reopen the evidence. A compact interpretation can become wrong. Continuity can become dogma.

The model needs a right to reconsider.

This is the deeper reason adaptive computation matters.

The problem is not simply giving the model more time. It is governing time.

When should the state be updated strongly?

When should it barely move?

When should the model loop internally before speaking?

When should it branch?

When should it retrieve evidence?

When should it call a tool?

When should it stop?

The future reasoning system may answer these questions dynamically. If so, the scheduler becomes as important as the transition.

Intelligence becomes partly resource allocation.

That may sound disappointingly economic for a book whose title promises depth without end.

It is also where the idea becomes real.

Every intelligent organism and organization lives under resource constraints. Attention is scarce. time is scarce. energy is scarce. The point is not to think forever. The point is to know what deserves another pass.

Machine systems have mostly hidden this problem inside architecture and product tiers. Fixed-depth networks spend the same nominal stack on every token. Bigger models spend more on every request. Reasoning modes expose a crude knob. Agents add time through external loops.

Recurrent depth moves the allocation question into the model's own computational fabric.

This creates a new scale of comparison.

A future model card may need to report not only parameter count and context length but how performance changes with recurrent budget. A benchmark may need to report the distribution of hidden steps. A serving system may quote time to final verified answer rather than tokens per second. A safety evaluation may perturb recurrent state and ask whether harmful plans reappear. An RL system may treat exact state reconstruction as part of policy correctness.

The checkpoint becomes the beginning of the description.

The trajectory completes it.

There is a political consequence here too, though this book has mostly stayed close to architecture.

If capability becomes elastic with inference compute, access to compute becomes access to *depth*. Two users can invoke the same model and receive different practical intelligence because one request is granted more recurrent time, more search, more verification, and more tool use.

The inequality is no longer only who can train the biggest model.

It is who can afford to let the model keep going.

That question belongs to another book. It is enough here to note that architecture eventually becomes economics, and economics eventually becomes power.

RLT's hardware problem makes the connection immediate. A serial recurrent decoder has to justify itself on chips optimized for parallel work. If it cannot, the idea stalls regardless of mathematical elegance. If it can, hardware may adapt. Shared weights, persistent state locality, efficient batching, and specialized kernels could make the architecture more attractive over time.

The history of AI is full of ideas whose fortunes changed when hardware changed around them.

This is why we should not evaluate recurrence solely against today's kernel library or solely against asymptotic equations. The proper unit is the co-designed system: architecture, training algorithm, hardware, compiler, serving runtime, and workload.

The same is true of safety. A recurrent state should not be judged solely by whether it improves a reasoning benchmark. A system that becomes more capable while making state impossible to audit, reset, version, or reproduce has created another kind of cost.

Depth has governance requirements.

We will need boundaries even when the mathematics says the path can continue.

Maximum depth.

Reset points.

State provenance.

Version compatibility.

Verification gates.

Rules for when hidden computation must produce an inspectable artifact.

The engineering of “infinite temporal depth” will consist largely of deciding where to make it finite.

That is not irony. It is design.

The most useful technologies often create a new abundance and then force us to govern it. Cheap storage created the problem of what to keep. abundant bandwidth created the problem of what deserves attention. abundant generation created the problem of what deserves belief.

Abundant computational depth would create the problem of what deserves continuation.

Yifan Zhang's report does not solve that problem. It does something more preliminary and, for the moment, more valuable. It gives the problem a sharp architecture.

A causal encoder remembers globally.

A recurrent decoder keeps working.

A sliding window remembers locally.

The hidden state does not politely forget everything when the assistant begins to speak.

A token can inherit more than context. It can inherit unfinished computation.

That is the sentence I would keep if the title disappears and the architecture changes and the paper turns out to be wrong in half its details.

A token can inherit unfinished computation.

Once that possibility is taken seriously, the design space of language models expands.

The next model does not have to be only larger.

It can be longer in another sense.

Longer not because it says more words.

Longer because the state that reaches the words has had somewhere to continue.

That is depth without end.

Not a promise that the machine can think forever.

A refusal to assume that useful computation must stop merely because the last physical layer has been reached.
