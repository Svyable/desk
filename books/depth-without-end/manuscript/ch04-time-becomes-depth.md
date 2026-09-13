# Chapter 4 — Time Becomes Depth

A drawing of a neural network can make depth look like a piece of furniture.

There are layers. They are stacked. The signal enters at the bottom and leaves at the top. Add another layer and the network gets deeper. Remove one and it gets shallower. Even when the actual implementation is distributed across thousands of accelerators, the diagram encourages a spatial intuition: depth is how much architecture lies between input and output.

That intuition is useful until the same architecture is allowed to run more than once on a changing state.

Then depth becomes partly a property of execution.

The distinction is easiest to see with a deliberately small machine. Imagine a decoder containing four blocks. Call the transformation performed by those four blocks `D`. A conventional interpretation says the decoder has depth four. Feed a token representation through block one, then two, three, four, and produce the final hidden state.

Now suppose the final hidden state does not disappear after the token is processed. It becomes part of the input used when the next token is consumed. The same four-block decoder transforms the merged state again.

After one token, the recurrent path contains four block applications.

After two tokens, information carried through the surviving state may have passed through eight.

After ten tokens, forty.

The network still owns four decoder blocks. The temporal path through those blocks has become forty applications deep.

This is the basic arithmetic behind Recurrent Looped Transformer's phrase “infinite temporal depth.” Zhang's report writes the idea in a compact form: with decoder depth `L_D`, a recurrent path can traverse `tL_D` blocks after `t` processed tokens. The work executed *per token* remains `L_D`; the path length available to persistent state grows with `t`.

The equation is simple enough to create more confusion than clarity.

First, it does not mean the current token is computed by executing all `tL_D` blocks from scratch. If token one passed through forty-eight decoder blocks and token two then did the same, token two benefits from a state that has already survived token one's forty-eight transformations. The machine does not rewind and run ninety-six sequential blocks solely for token two. Temporal depth is accumulated in state.

Second, it does not mean every piece of information from the first token remains perfectly intact through the entire path. A recurrent state is transformed, compressed, mixed, normalized, and possibly forgotten. Saying a causal path exists is not saying the path carries useful signal. A telephone line can connect two cities even when nobody is speaking through it.

Third, the growing path is not identical to the depth of an untied network with `tL_D` independently parameterized layers. Reusing the same forty-eight decoder blocks imposes a strong constraint. A 4,800-layer untied network could assign a different transformation to each position in depth. RLT's recurrent path repeatedly revisits compatible parameters. Its expressive behavior comes from applying those parameters to a state that changes, not from owning a new instruction set at each virtual layer.

That difference is central to the bet.

A short computer program can perform an arbitrarily long calculation if it contains a loop. The program does not need a separate line of code for every iteration. Its power comes from combining reusable instructions with mutable state and a stopping condition. Neural networks made us accustomed to encoding computation spatially in a large graph of parameters. Recurrent depth restores some of the old programmatic economy: learn a transformation that remains useful when applied again.

The analogy should not be pushed too far. A neural transition does not have the crisp semantics of a hand-written loop body. It can behave differently as its inputs drift outside the training distribution. It may not implement a stable algorithm. Still, the distinction between stored instructions and executed steps is exact enough to matter.

This gives us two quantities that ordinary model descriptions often collapse.

One is **physical depth**: how many distinct blocks are present in the architecture.

The other is **effective computational depth**: how many transformations lie along the causal path that produced a state during an execution.

A loop can make the second much larger than the first.

That sounds like free depth until the bill arrives.

Parameters take memory. Executed operations take compute. Reusing a block avoids storing another copy of its parameters, but the multiplication still has to happen again. If the same block runs ten times, inference does not become ten times cheaper merely because the weights were shared. Parameter efficiency and compute efficiency part company.

This is why RLT's early synthetic comparison cannot support a broad efficiency claim. The report says parameter and data budgets were matched; FLOPs were not. That design can test whether a recurrent inductive bias produces a different result under similar model storage and data. It cannot establish that the result was achieved with the same amount of arithmetic.

The architecture's more interesting claim is not “depth for free.” It is “depth without proportionally more distinct parameters.”

Those are very different promises.

The distinction has precedents outside language modeling. Recurrent neural networks always shared their transition across sequence time. An LSTM with a million parameters can process a sequence of length ten or ten thousand without acquiring new parameters for the later positions. The computation grows with the sequence; the learned transition does not. Iterative optimization behaves similarly. A gradient-descent algorithm may use the same update rule a hundred times. The work grows. The rule stays compact.

What RLT changes is where this iterative path sits relative to a modern Transformer.

For each token `x_t`, the causal encoder produces a representation `e_t` and contributes to global encoder-derived key-value memory available up to that position. The recurrent decoder's state is not one vector alone. Zhang defines a complete decoder state with two components: the recurrent final output `s_t` and the layerwise sliding-window attention cache `C_t^D`.

The next update can be written, schematically, as:

`(s_t, C_t^D) = D(Merge(e_t, s_{t-1}); M_{≤t}, C_{t-1}^D, t)`

You do not need the notation to follow the consequence. The current token enters the decoder with three different inheritances.

It has the causal encoder's representation of the token in context.

It can cross-attend to encoder memory representing the global history up to the current position.

It has recent decoder key-value state through sliding-window attention.

And, crucially, it receives the previous token's final decoder output as a recurrent input.

The first three mechanisms let the current computation *consult history*. The last one lets it *continue a computation*.

That distinction is idealized, because attention representations are themselves products of earlier computation and a network can use retrieved history to reconstruct partial results. But architecturally, the routes differ. Encoder memory says: this is information from what happened. Recurrent state says: this is where the decoder left off.

Consider a toy parity task. The input is a sequence of bits, and the model must report whether the number of ones seen so far is even or odd. An ideal algorithm needs only one bit of state. Each new `1` flips the state; each `0` leaves it unchanged. There is no need to reread the entire history if the state is trustworthy.

Attention can solve parity in many ways. A sufficiently capable Transformer might count, aggregate, or exploit learned patterns over the visible sequence. But a recurrent state gives the task an obvious representation: carry the parity bit forward and update it.

Now replace parity with something messier. A programming problem contains constraints introduced in the prompt, an emerging plan, intermediate results, exceptions, and a sequence of generated code tokens. There is no known one-bit sufficient state. The decoder would have to learn what form of computational residue is useful enough to carry forward.

This is where the elegance of recurrent depth becomes an empirical question. On a clean state machine, we know what recurrence should preserve. On language, we do not.

The claim about depth therefore contains two hidden assumptions.

The first is that useful information actually survives the recurrence.

The second is that repeated transformation of that information creates computational value rather than mere distortion.

A path can be arbitrarily long and useless. If the recurrent merge learns to ignore `s_{t-1}`, the architecture collapses toward a model whose nominal temporal depth exists in the graph but does no work. If the recurrent state saturates or converges too early, later steps add little. If it drifts, longer sequences may be worse precisely because the state has had more opportunities to accumulate error.

This is why a proper depth-scaling experiment cannot stop at “the path is longer.” It has to intervene on the path.

What happens when the recurrent state is zeroed halfway through a sequence? What happens when it is replaced with the state from another example? Does performance improve monotonically as more recurrent steps are allowed? Do later tokens depend causally on information stored in the recurrent channel, or could the model obtain the same information from attention? Does recurrent state carry abstract task variables, unresolved decisions, or merely redundant echoes of recent tokens?

The architecture makes these questions possible. It does not answer them.

There is a second subtlety in RLT's depth formula. The token index is doing two jobs at once. It measures how much sequence has been consumed and how many times the recurrent state has been transformed. This means sequence length becomes a compute schedule.

A longer prompt produces a more aged recurrent state before generation begins. A longer answer continues the transformation. The architecture acquires increasing temporal depth simply by participating in a longer interaction.

This is elegant when the task itself unfolds over time. Consider an agent playing a game, reading an event stream, maintaining a proof, executing a long program trace, or following a scientific procedure. Each new observation legitimately changes the internal state. Continuing the same computation is natural.

It is less obviously efficient when length and difficulty diverge. A long document can be trivial to summarize. A short riddle can require substantial search. If every consumed token buys another decoder pass, the model's temporal compute is partly allocated by verbosity.

This is one reason recurrent depth within a token and recurrent state across tokens should not be treated as interchangeable. A model like Geiping's recurrent-depth language model can increase latent iterations for a hard problem without requiring the input to become longer. RLT's temporal recurrence grows with token time. The two mechanisms could eventually be combined: state carried across tokens, plus adaptive inner loops when a token or task warrants extra thought. But that is a different architecture from the report we have.

The phrase “time becomes depth” therefore names both the opportunity and the limitation.

When a persistent state survives, elapsed computational time can deepen the causal path. But the scheduler deciding how much time to spend matters as much as the existence of the path.

Computer science has wrestled with this trade for as long as it has had algorithms. An iterative method needs a stopping rule. Run too little and it under-solves. Run too long and it wastes resources, overfits numerical noise, or fails to terminate. Search algorithms need budgets. optimization needs convergence criteria. simulations need time steps. Operating systems decide which process gets another slice of a finite machine.

Neural networks disguised some of this because the architecture set the budget in advance. A twelve-layer network executes twelve layers. There is no philosophical crisis over whether layer thirteen should run; it does not exist.

Recurrent depth makes the budget visible again.

That is a conceptual gain even if the particular architecture turns out to be wrong. Once the same weights can be run for different amounts of useful computation, “the model” becomes an incomplete unit of analysis. We need the model plus the execution schedule.

This matters for benchmarking.

Suppose Model A has twice as many parameters as Model B, but Model B loops a shared block four times. Which is larger? If we care about storage, A may be larger. If we care about FLOPs per answer, B may be. If B can use two loops on easy questions and eight on hard ones, a single FLOP number may also be misleading. If A emits a 2,000-token chain of thought while B performs hidden recurrent updates, output length no longer reveals reasoning cost. If B's shared weights fit in faster memory and reduce bandwidth pressure, wall-clock time might not track FLOPs in the obvious way.

The old scoreboard—parameters, benchmark score, tokens per second—starts to fracture.

The same issue appears in pricing. A service priced per input and output token assumes token count is a tolerable proxy for work. That proxy is already strained by hidden reasoning and tool use. A recurrent architecture could make two requests with identical visible token counts consume very different internal compute if adaptive depth is added. The natural economic unit becomes harder to expose without revealing implementation details.

This is not merely a billing inconvenience. It changes incentives.

If users cannot observe how much hidden compute produced an answer, providers can optimize for latency, cost, or quality behind an abstraction layer. That is often desirable. But scientific comparisons become harder. A claimed improvement in reasoning may come from architecture, training, or simply more unreported inference compute. Recurrent models make this problem explicit because their central promise is to vary effective depth without varying stored parameters.

The solution is not to reject hidden computation. It is to report it.

A serious recurrent-depth result should tell us the number of recurrent steps, total FLOPs, memory footprint, wall-clock latency under stated hardware and batch conditions, and the baseline's corresponding budget. If adaptive halting is used, it should report the distribution of steps rather than only an average. If performance improves when recurrence exceeds the training schedule, the entire depth curve matters more than a single cherry-picked point.

RLT will eventually need this kind of evidence if its temporal-depth claim is to become more than an architectural observation.

For the moment, the observation itself is worth holding cleanly.

Depth is not identical to layers.

A system with reusable computation and persistent state can acquire a longer causal path simply by continuing to operate. Its parameter file can stay the same while its state passes through more transformations. That does not give it unlimited intelligence, unlimited memory, or unlimited useful reasoning. It gives it something more modest and more concrete: an axis along which computation can continue after the architecture has run out of unique layers.

The machine does not become infinitely deep.

It becomes a machine for which depth is no longer finished at design time.
