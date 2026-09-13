# Chapter 2 — The Machine That Escaped Time

The most important sentence in the title *Attention Is All You Need* was not about attention.

It was the word *all*.

When Ashish Vaswani and seven coauthors introduced the Transformer in 2017, sequence modeling was still dominated by architectures that moved through data in order. Recurrent neural networks had a simple bargain with time. Read one element. Update a hidden state. Read the next. Update again. The state was a compact inheritance from the past.

That bargain was conceptually natural and computationally expensive.

If the hidden state at position 100 depends on the hidden state at position 99, which depends on 98, then a machine cannot fully compute position 100 before the earlier states exist. The dependency is serial. You can parallelize work inside each step. You can batch independent sequences. You can make matrix multiplication faster. But the sequence itself creates a waiting line.

Waiting lines are bad business on a GPU.

The hardware revolution that made deep learning practical was not built around the beauty of one calculation. It was built around doing enormous numbers of similar calculations at once. Graphics processors had been designed to shade many pixels and vertices in parallel. Machine learning discovered that the same appetite for broad numerical work fit matrix operations unusually well. As models grew, the industry became a machine for turning parallelizable algebra into capability.

Recurrent networks contained a dependency that refused to widen.

They also carried an old optimization problem. A hidden state that has to preserve information across many steps asks gradients to travel backward across those same steps during training. The chain can shrink the learning signal until early events become almost irrelevant, or amplify it until optimization becomes unstable. The literature on vanishing and exploding gradients is older than the current AI industry because the problem is structural. Long Short-Term Memory networks, gating, gradient clipping, better initialization, and other techniques made recurrence far more usable. They did not remove the serial dependency.

The Transformer attacked sequence modeling from a different direction.

Instead of carrying one compressed hidden state forward and asking it to remember the past, let each position attend directly to other relevant positions. During training, when the whole sequence is known, compute representations for many positions in parallel. Use attention to create content-dependent communication among them. Build depth by stacking layers, not by walking a hidden state through every token.

The paper's abstract said the architecture was “based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.” That line now reads like a declaration of independence. At the time, it was also a systems decision.

The Transformer bought parallelism by changing the geometry of dependence.

A standard recurrent network says: the next state depends on the previous state.

A Transformer layer says: the representation at each position may depend on representations at many positions in the previous layer.

The second pattern can be computed as large matrix operations across a sequence. The time axis of the data does not have to become the time axis of the hardware in the same direct way.

That escape mattered more as hardware improved.

The architecture was not simply more accurate on the original translation tasks. It was easier to scale into the industrial training regime that followed. Larger batches. larger datasets. larger models. dense accelerators. distributed training. The software stack learned to love the same things the architecture loved: parallel operations, regular tensor shapes, matrix multiplication, predictable memory access.

An entire scaling culture grew around the result.

The simplest version of that culture says that capability comes from size. More parameters. More data. More compute. More layers. The actual scaling literature is more careful. Jared Kaplan and colleagues showed empirical power-law relationships between loss and resources. Jordan Hoffmann and the Chinchilla team later demonstrated that the allocation among parameters, data, and training compute mattered dramatically. Sparse mixture-of-experts models showed that total parameters and active parameters could diverge. Retrieval moved some knowledge outside weights. Better post-training changed behavior without repeating pretraining. The object was never merely “big.”

Still, fixed stacked depth became normal enough to stop feeling like a design choice.

A Transformer block performs attention, feed-forward transformation, normalization, residual updates, and related operations. Stack a certain number of blocks. During a forward pass, a token representation travels through that stack. The model may contain thirty-two layers, eighty layers, or some other fixed count. The number is part of the model's identity.

This makes depth spatial.

You can draw it on a page as layers from bottom to top. Each layer owns parameters. A signal moves upward. When it reaches the final layer, the network has spent its allotted depth.

There are variations, of course. Some weights can be shared. Sparse experts can route different tokens through different feed-forward modules. early-exit systems can stop before the top. But the dominant mental picture remains architectural: depth is something built into the network.

RLT asks us to notice what that picture hid.

A token sequence already has time. Generation is unavoidably autoregressive when the model produces one next token after another. At inference, even an ordinary Transformer cannot generate token 100 before it has generated token 99, because 100's context includes 99. The Transformer escaped recurrent *training* dependencies across known input positions, but autoregressive generation still unfolds step by step.

Once that sequential generation exists anyway, Zhang's architecture asks whether each step should do more than append another token to an attention cache.

Why not also carry forward a learned computational state?

The answer may be “because the costs are not worth it.” But the historical reason recurrence disappeared no longer settles the question by itself. The systems landscape has changed. Inference has become as important as training. Test-time reasoning budgets have become a first-class capability lever. Models already spend variable amounts of computation after pretraining. Users already tolerate seconds or minutes of latency for difficult tasks that once demanded an instant next token. The economic value of a correct answer can exceed the value of maximum throughput.

A design that would have looked like a step backward under a 2017 machine-translation objective can look different under a 2026 reasoning objective.

This is common in engineering. A constraint disappears from the foreground and later returns as an opportunity because the rest of the system changed.

Consider memory. For decades, computer architects fought to hide the latency of moving data. Then machine learning models became so large that memory movement itself became one of the dominant costs. Quantization, cache layout, fused kernels, and high-bandwidth memory turned what once looked like implementation detail into model strategy.

Something similar is happening with time.

For early large language models, latency was mainly an inconvenience: how fast can we return the next token? For reasoning systems, time became a resource that could purchase quality. A hard math problem might deserve more inference than a greeting. A coding agent could spend minutes running tests. A theorem prover could search. A planning system could compare alternatives. The field rediscovered an old truth from algorithms: some problems become solvable when you let the procedure run longer.

The Transformer was never hostile to longer procedures. You can simply generate more tokens. Chain-of-thought turned that into a mainstream technique. A difficult answer could be decomposed into intermediate textual steps, each step becoming new context for the next. In a sense, language itself became a scratchpad.

But that solution has an odd property. The model must *talk in order to think*.

Every additional reasoning step is discretized into vocabulary tokens. Those tokens occupy context. They have to satisfy the constraints of language. They can be inspected, which is valuable, but they also require decoding and then re-encoding through the next forward pass. A hidden state containing a rich continuous representation is collapsed into a word or subword choice before the computation continues.

There is no theorem saying useful reasoning must be legible English.

This dissatisfaction has produced several alternatives. Pause-token work gives the model extra forward passes before it must answer. Quiet-STaR generates internal rationales around token prediction. Coconut feeds hidden states back into the model as continuous “thoughts” rather than decoding them into language. Recurrent-depth models iterate a block in latent space, allowing additional internal computation before output. Looped Transformers reuse the same parameters several times. Fixed-point models continue iterating until their state appears to converge.

None of these means the original Transformer was a mistake. They mean the objective has changed enough to reopen a trade.

The 2017 architecture optimized a world in which the ability to process known sequences in parallel was transformative. Recurrent-depth systems optimize a world in which inference computation itself may be worth scaling, and where the weight file is no longer the only scarce resource.

This is why history should not be told as pendulum mythology.

Machine learning does not move from recurrence to attention and then back to recurrence because researchers forgot an old truth and recovered it. The new systems combine ideas that were previously in tension. They often keep attention. They keep parallel computation where it is available. They keep stacked physical depth. Then they introduce recurrence selectively where the additional sequential transformation might be worth its cost.

RLT is a good example. It does not replace attention with an old-fashioned recurrent cell. Its causal encoder constructs global key-value memory. Its decoder uses cross-attention into that memory and sliding-window self-attention for recent decoder history. The recurrent hidden state is an additional path, not a substitute for all the others.

The architecture is therefore less “RNN returns” than “Transformer acquires a state that ages.”

That phrase—state that ages—captures an important distinction.

In a standard cached Transformer decoder, the machine accumulates a record of past key and value representations. Later tokens can retrieve from that record through attention. The past remains available as a set of stored representations.

A recurrent state is different. It is one current object that has already been transformed by the past. The history has been compressed into a state transition. The state does not merely point backward; it arrives changed.

This is the ancient advantage and danger of recurrence.

Compression forces selection. A recurrent state cannot preserve every detail unless it is impossibly large. It learns what deserves to survive. That can produce useful abstraction: carry the parity bit, the plan, the unresolved constraint, the running total. It can also produce catastrophic forgetting: discard the one fact that matters because the model did not know it would matter later.

Attention escaped that bottleneck by letting the model revisit stored history directly. RLT tries to have both: global encoder memory for access, local decoder attention for recent context, and recurrent state for ongoing computation.

If it works, the recurrent state need not become the sole memory of the sequence. It can become something closer to a workspace.

The word *workspace* should be used carefully. Cognitive science has its own theories about global workspaces, conscious access, and recurrent processing. Machine-learning interpretability papers borrow the term in more limited functional senses. We do not need a consciousness theory to see the computational appeal. A workspace is simply a state where partial results can survive long enough to be transformed again.

This is what fixed-depth next-token prediction lacks in the most literal sense. Each token's representation gets a fresh trip through the stack. It can attend to traces of previous representations, but there is no single final hidden state that says: this is where the computation itself left off; continue from here.

Chain-of-thought creates such continuity in language. Tools create it in external artifacts. Agents create it in files and environments. Recurrence creates it in hidden state.

Each choice has a cost profile.

Language is inspectable but verbose. External state is durable but requires interfaces and retrieval. Search is powerful but branching can be expensive. A hidden recurrent state is compact and differentiable but opaque and serial. The architecture question is not which mechanism is universally best. It is what combination should carry which kind of work.

That is why “attention is all you need” has aged in a productive way.

The title was never a metaphysical claim that recurrence, memory, convolution, search, tools, or any other operation would forever be useless. It was a demonstration that a startling amount could be done without recurrent sequence processing, and that the resulting parallelism unlocked a new scaling regime.

The success was so complete that a research generation inherited the stack as nature.

Now the stack itself is under examination.

If a model can reuse a learned block, perhaps a thousand virtual layers do not require a thousand separately stored layers. If a state can persist, perhaps later tokens can inherit computation rather than only information. If an easy problem can stop early while a hard one loops longer, perhaps compute can become conditional on difficulty. If the same parameters can do more work over time, perhaps the relationship between model size and capability becomes less fixed.

These are hypotheses, not conclusions.

They also contain the seed of a reversal in AI economics.

The industrial strategy of the last decade often turned capital into capability by buying more hardware to train larger static objects. Recurrent depth suggests a different place to spend the marginal dollar: on the *execution path* of an existing object. That does not necessarily save compute. It may consume more. But it changes when the compute is spent and what it buys.

Training-time scale buys a model in advance. Test-time scale spends resources on a particular problem after you know the problem exists.

The distinction resembles building a larger factory versus running a flexible machine longer on a difficult part. The factory may dominate when every part is equally hard and demand is high. The flexible machine may dominate when difficulty varies and mistakes are expensive. Most real workloads contain both kinds of work.

The return of recurrence therefore sits inside a broader move from fixed allocation toward conditional allocation.

Mixture-of-experts models condition parameter activation. Retrieval conditions memory access. agents condition tool use. reasoning systems condition how long they deliberate. A recurrent model can, in principle, condition how much latent transformation it performs.

But RLT, as proposed, does not yet solve adaptive halting. Its central temporal depth accumulates with tokens. That means every token pays the recurrent decoder cost, whether the token is a semicolon or the decisive step of a proof. Other recurrent-depth work explicitly asks how to stop when a state converges. Graves's Adaptive Computation Time asked the same question a decade ago.

The old trade has returned with new stakes: once you give a model more time, you have to decide who gets it.

The 2017 Transformer escaped time by exposing parallel work. The 2026 recurrent-depth movement is not trying to crawl back into the same bottleneck. It is trying to make time earn its keep.

To see whether it can, we have to separate two notions of depth that ordinary network diagrams blur together.

One can be counted in layers.

The other can be accumulated by a state that survives.
