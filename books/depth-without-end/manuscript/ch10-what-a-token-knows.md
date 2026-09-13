# Chapter 10 — What a Token Knows

A comma and a theorem do not deserve the same amount of thought.

The architecture of most language models pretends otherwise.

For each new position, the network executes roughly the same fixed stack. The content can change which attention heads activate, which experts route, and which features matter, but the basic depth schedule is predetermined. A token completing “Dear Sir or Madam” receives the same nominal number of Transformer layers as the token that commits a proof to a contradiction.

This uniformity is one of the reasons dense neural networks run so well on modern hardware. Regular work is schedulable work. Every token moves through the same machinery. Batch dimensions line up. Kernels are easy to plan. Throughput becomes predictable.

Cognition, if we can use the word without making metaphysical claims, is not uniformly difficult.

Some next-token predictions are nearly determined by syntax. Others require recalling a distant constraint, checking a calculation, reconciling contradictory evidence, or deciding among plans whose consequences have not yet been worked out. The computational value of another transformation is not constant across positions.

We can see the mismatch whenever a model slows down intentionally.

Reasoning systems often allocate more output tokens to difficult problems. Search systems explore more branches when uncertainty remains. Agents retry failed tool calls. Verifiers spend extra passes on candidate solutions. Human programmers stare at one line for twenty minutes and type the next ten lines in thirty seconds.

The fact that effort is uneven should make us suspicious of architectures that distribute depth uniformly by construction.

RLT does not solve this problem. Its temporal recurrence makes it more visible.

Every consumed token extends the recurrent path. A long sequence creates a deep trajectory even if much of the sequence is easy. The architecture's baseline computation schedule is therefore proportional to token count, not to difficulty.

This has a strange implication. A verbose easy prompt can make the recurrent state older than a concise hard prompt.

Suppose one user asks for the capital of France but includes five pages of polite context and irrelevant background. Another asks, in twelve tokens, for the key invariant needed to solve a difficult combinatorics problem. Under a purely token-driven recurrent schedule, the first request gives the state far more opportunities for transformation before the answer begins.

That cannot be the final form of adaptive intelligence.

It may still be a useful foundation. A state that persists through every token provides continuity; an additional mechanism could later decide when to loop more, when to skip work, or when to halt early. The recurrent path supplies a place for extra thought to live. The scheduler determines whether the thought is worth buying.

This distinction between *having recurrence* and *allocating recurrence* is one of the most important in the field.

Alex Graves's 2016 work on [Adaptive Computation Time](https://arxiv.org/abs/1603.08983) attacked the allocation problem directly. A recurrent network could learn how many internal computation steps to perform before moving on. Rather than deciding in advance that every input receives exactly the same number of updates, the system learned a halting behavior. Easy cases could finish quickly. Harder ones could continue.

The idea predates today's reasoning models, but the economic logic has become newly relevant.

Inference compute is now a product choice.

A company serving millions of requests does not want to spend maximum reasoning effort on greetings, formatting edits, or obvious autocomplete. It may be willing to spend far more on code that touches production infrastructure, a difficult proof, or a scientific analysis. Variable computation can improve average cost if the system identifies difficulty reliably.

The phrase “if the system identifies difficulty reliably” hides the entire problem.

A model can be confidently wrong. It can mistake novelty for simplicity. It can spend more time when confused and less time when a hidden trap is present. A learned halting policy becomes another prediction problem whose errors have consequences.

This is why “let the model think until it is done” is not an engineering specification.

Done according to what signal?

One possibility is a learned halting probability, as in adaptive-computation methods. Another is convergence: continue applying the recurrent transformation until the state changes very little. Fixed-Point Reasoners explore this approach. Another is uncertainty: spend more compute when the output distribution remains diffuse. Another is external verification: stop when a checker accepts the answer. Another is budgeted search: continue until a time or FLOP limit is reached. Each signal measures a different notion of completion.

None is universally trustworthy.

Convergence is particularly seductive because it appears objective. If repeated computation barely changes the state, perhaps the model has finished refining its answer.

Or perhaps it has become stuck.

An iterative numerical solver can converge to the wrong solution if the objective or initialization is wrong. A recurrent neural network can enter a stable attractor that encodes nonsense. Confidence can rise while accuracy falls. Stability is evidence about dynamics, not truth.

The safest stopping mechanisms may therefore combine internal and external signals. A model can stop latent recurrence when its state stabilizes *and* a verifier confirms the result. A coding system can continue until tests pass. A proof system can halt when the formal kernel accepts the derivation. A planning agent can stop after satisfying explicit constraints.

These examples have something in common: correctness is partly outside the model.

For ordinary language tasks, there may be no such checker. The scheduler has to make a judgment under uncertainty.

This makes adaptive depth an economics problem as much as a machine-learning problem.

Imagine an inference service with a fixed daily compute budget. It receives a million queries. Spending ten times more computation on every query is impossible. The system needs a policy for allocating marginal FLOPs where they purchase the most expected improvement.

This resembles resource allocation in a portfolio. Each request has an unknown response curve: how much would accuracy improve if we spent one more recurrent step, one more sample, one more verification pass, one more tool call? The optimal policy would compare those marginal returns against cost.

We do not know the curves in advance.

A model can estimate them. A meta-controller can learn them. Historical data can inform them. But the problem is not eliminated by naming it.

Charlie Snell and collaborators' work on scaling test-time compute makes this broader point concrete. Their experiments show that inference compute can sometimes be allocated in ways that outperform simply using a larger model under comparable budgets. The exact result depends on task, base model, and method, but the strategic implication is durable: compute spent *after seeing the problem* can have unusually high value because it can be targeted.

Recurrent depth is one way to create that targetable budget.

A model with fixed physical depth but variable recurrent iterations can operate at several compute points without loading different checkpoints. An easy request can use fewer loops. A hard request can use more. In principle, a single model can trace a quality-cost frontier at runtime.

The same idea appears in mixture-of-experts models, but along a different axis. Sparse routing chooses which parameters activate for a token. Recurrent routing would choose how many times computation continues. One varies *where* the token goes. The other varies *how long* the state is transformed.

A future architecture could combine both.

A state might route to one set of experts, recur until a local condition is satisfied, then move on. The resulting execution would look less like a fixed stack and more like a learned program graph. Parameter count would describe the library of available machinery. The trajectory would describe which machinery actually ran.

That possibility is exciting enough that it should be surrounded by skepticism.

Dynamic execution is difficult to optimize on hardware. GPUs prefer large regular batches. If every token in a batch halts at a different depth, the batch becomes ragged. Some examples finish while others continue. Utilization falls unless the runtime repacks work efficiently. Conditional routing introduces communication and load-balancing problems. Recurrence introduces dependencies that cannot be parallelized across steps.

The model may save FLOPs on paper and lose wall-clock time in practice.

This is why systems co-design belongs in the recurrent-depth conversation from the beginning. A clever halting rule that produces irregular tiny kernels could be less useful than a fixed-depth model that saturates the accelerator. The physical machine decides whether theoretical savings become economic savings.

There is another complication: the unit of difficulty may not be the token.

A hard problem can contain long stretches of easy language after the key reasoning has been completed. Once a model decides the proof strategy, writing the proof may be relatively mechanical. A token-level halting policy could waste effort repeatedly rediscovering that the remaining work is straightforward.

Conversely, one decisive token can hide a global dependency. Choosing “therefore” instead of “however” may require understanding the entire argument. The semantic importance of a token is not visible from its surface form.

Perhaps computation should be allocated to *states* rather than tokens.

A model could maintain a recurrent workspace and periodically decide whether the workspace is settled enough to emit several tokens cheaply, whether to spend latent loops before the next commitment, or whether to branch into search. This would decouple linguistic cadence from computational cadence.

Such a system begins to resemble a processor with a variable instruction pipeline. Output tokens are I/O events, not clocks governing every internal operation.

Coconut moves in that direction by inserting continuous thoughts between ordinary tokens. Recurrent-depth models move further by letting a latent state loop without necessarily advancing the language sequence. RLT currently couples recurrence to token progression, but its persistent state could serve as the substrate on which adaptive inner computation is later added.

That hybrid is speculative. It also clarifies what RLT alone does and does not claim.

The report's “infinite temporal depth” is a statement about the *possible path length as sequence time grows*. It is not a claim that the model learns to spend arbitrary extra depth on a hard token. Temporal depth and adaptive depth are related but distinct.

This distinction protects us from a common hype pattern. A paper introduces one new axis of computation. Commentary immediately attributes every desirable property of a mature system to it. Persistent state becomes “memory.” More loops become “thinking.” Convergence becomes “knowing when it is done.” Hidden computation becomes “intuition.” The metaphors outrun the mechanism.

Mechanisms deserve narrower verbs.

RLT carries state.

A recurrent-depth model repeats a transformation.

Adaptive computation changes iteration count.

A verifier checks a criterion.

Search explores alternatives.

Intelligence, if the whole system deserves the word, emerges from how these mechanisms interact.

The practical question in front of recurrent architectures is therefore not how to make every token deeper. It is how to make depth *selective*.

Selectivity can happen at several scales.

At the request level, a router can send simple questions to a cheap model and difficult questions to an expensive reasoning model.

At the sequence level, the same model can choose an overall recurrent budget.

At the token level, it can spend additional latent steps before difficult commitments.

At the layer or expert level, it can route state through only the modules that matter.

At the branch level, it can allocate compute among competing hypotheses.

The best architecture may not choose one scale. It may combine them.

That makes the future of model deployment look less like selecting a model size from a menu and more like scheduling a computation.

The scheduler becomes part of capability.

It also becomes part of safety. If a system learns that certain difficult or policy-sensitive tasks should receive *less* deliberation to avoid triggering a monitor, the compute policy itself can become strategically relevant. If an attacker can manipulate the halting signal, they can force denial-of-service by inducing endless recurrence or force premature answers by creating false confidence. Adaptive depth opens control surfaces that fixed depth does not have.

These are not arguments for keeping computation uniform. Fixed allocation has its own waste and blind spots. They are reasons to treat “thinking time” as a governed resource.

Human institutions already do this imperfectly. A hospital triages. A court schedules. A company assigns senior attention to some decisions and templates others. An emergency interrupts routine work. The scarce resource is not merely knowledge; it is time from a process capable of applying knowledge.

Machine intelligence may acquire the same distinction.

A checkpoint can contain enormous learned capacity and still need to decide where to spend its next millisecond.

When that happens, the most important question about a token will not be what it knows.

It will be whether it knows that this is the moment worth thinking longer about.
