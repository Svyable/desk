# Chapter 14 — Hardware Hates Serial Things

A modern accelerator is happiest when you give it too much arithmetic to do at once.

This is not a complaint. It is the reason contemporary AI exists at its current scale.

The chips behind large language models contain enormous parallel numerical capacity. To use that capacity well, software tries to assemble operations into large regular matrices, keep data close to the compute units that need it, overlap communication with arithmetic, and avoid forcing thousands of expensive cores to wait for one tiny result before work can continue.

Recurrence forces waiting.

That was one of the original Transformer's great victories. During training, known sequence positions could be processed in parallel within a layer instead of marching a hidden state from token to token. The architecture aligned unusually well with hardware that could turn broad tensor operations into throughput.

RLT deliberately reintroduces a serial dependency into the decoder.

State at token `t` depends on state at token `t - 1`.

No compiler can parallelize a true dependency away.

This does not mean the architecture is doomed. It means any performance claim has to begin from the correct enemy.

The enemy is not FLOPs alone.

Imagine two algorithms that require the same number of floating-point operations. Algorithm A organizes them into a few large matrix multiplications. Algorithm B requires thousands of tiny dependent operations. On a GPU, A can be dramatically faster because it exposes parallel work and amortizes overhead. Arithmetic counts the amount of work. Hardware efficiency measures how much of the machine can be kept busy doing it.

Recurrent architectures can therefore lose even when their theoretical operation count looks reasonable.

The RLT report recognizes this and frames the problem as model–hardware co-design. That phrase is sometimes used as a dignified way of saying “we hope kernels save us.” Here it names a real structural requirement.

The architecture has several sources of parallelism left.

The causal encoder can process known prompt tokens in parallel because its attention is causal but not recurrent in the RLT sense. During prompt prefill, encoder representations for all positions can be built with large batched operations. The recurrent decoder then consumes those representations in order.

Independent sequences can also be batched. If one conversation needs to process token 700 and another needs token 300, their recurrent steps do not depend on each other. A serving system can place many sequences at the same recurrent stage into a large batch.

The question is whether enough independent work exists at the right time.

Training often has it. A large batch may contain thousands of sequences. Serving can be harder. Interactive traffic arrives irregularly. Some requests are long, some short. Some are in prefill, some decoding, some waiting for tools. Continuous batching can combine active sequences, but recurrence adds another scheduling constraint.

A high-throughput service can hide serial depth across requests.

A single latency-sensitive request cannot.

This distinction between throughput and latency is one of the easiest to erase in benchmark talk.

Suppose RLT processes one token in ten milliseconds while a conventional decoder processes one in five. If one request matters, RLT is twice as slow. If RLT's weights are smaller and hundreds of independent requests can be batched more efficiently, total tokens per second across the fleet might still be competitive. If recurrent state reduces the need for enormous KV caches, perhaps more requests fit in memory at once. If it increases cache complexity, the opposite can happen.

No single “speed” number captures the system.

The architecture's shared weights create an interesting hardware opportunity. Modern inference can be limited not only by arithmetic but by moving model weights from memory to compute units. A block reused repeatedly may remain resident in faster memory or cache more effectively than many distinct blocks that must be streamed.

This is one of the strongest practical arguments for looped models.

A fixed parameter budget can be applied multiple times without loading a new parameter set for each virtual layer. If memory bandwidth is the bottleneck, reusing resident weights can make repeated computation cheaper in wall-clock terms than an equal-FLOP untied network that moves more parameter bytes.

But this advantage depends on details.

Large blocks may not fit in the memory level that would make reuse cheap. Activation and KV traffic may dominate. Cross-attention to encoder memory can require substantial reads. Batch size changes arithmetic intensity. Quantization changes the weight-bandwidth balance. A shared block that is theoretically cache-friendly can still stall on activations.

The only reliable answer comes from profiling real kernels.

This is why architecture papers that compare parameter count without hardware measurements should resist the word *efficient*.

RLT may be parameter-efficient and hardware-inefficient.

It may be parameter-efficient and hardware-efficient under the right batch regime.

It may be slower in latency and cheaper in memory.

Those are all plausible outcomes.

The decoder's sliding-window attention is part of the systems design too.

Full self-attention over an ever-growing decoder history makes cache size and attention work scale with sequence length. A sliding window bounds recent decoder KV, keeping local self-attention cost more controlled. Global information can still be accessed through encoder-derived memory.

This separates two histories: a bounded local decoder history and a broader global encoder memory.

From a hardware perspective, bounded windows can make cache shapes predictable and reduce memory pressure. From a modeling perspective, they force distant decoder information to survive through other routes—recurrent state or encoder memory, depending on whether generated tokens are represented there under the implementation.

Every memory optimization creates a modeling dependency.

Prompt prefill reveals the architecture's sharpest systems tax.

In an ordinary Transformer, prefill is often one of the most parallel phases. The entire prompt is known. Large matrix multiplications can process many positions together. The cost can be high, especially for long contexts, but the hardware has broad work.

RLT's causal encoder retains that advantage.

The recurrent decoder does not.

To arrive at the correct decoder state for the first generated token, it must traverse prompt tokens sequentially. A 100,000-token prompt implies 100,000 recurrent decoder updates before generation begins unless the architecture or algorithm introduces a shortcut.

That is potentially devastating for time-to-first-token.

The report's hardware agenda therefore has to do more than make decoding fast. It has to make recurrent prefill tolerable.

Several possibilities exist.

The first is batching. Many prompts can be recurrently decoded in parallel across the batch dimension. This helps throughput but not the latency of one enormous prompt.

The second is reducing decoder cost relative to encoder cost. If the recurrent decoder is narrow or otherwise cheaper than a full Transformer block stack, sequential steps may be manageable. RLT's concrete report uses forty-eight decoder layers, which makes this question especially important; equal encoder and decoder layer counts do not imply equal FLOPs because decoder blocks include cross-attention.

The third is kernel fusion. If merge, normalization, attention, feed-forward, and state update operations can be fused efficiently, launch overhead and memory traffic can fall. The dependency remains, but each step becomes cheaper.

The fourth is speculative or hierarchical processing. A system might summarize chunks in parallel and then recur over summaries. That would change the architecture's exact semantics and could weaken the very token-by-token temporal path being proposed.

The fifth is hardware specialization for recurrent workloads. If recurrent depth proves valuable enough, accelerator designs may devote more resources to low-latency state updates, persistent on-chip weights, and efficient small-batch execution.

Hardware has changed for algorithms before.

Convolutional neural networks benefited from specialized kernels and tensor cores. Sparse models motivated routing and communication optimizations. Attention's quadratic cost inspired FlashAttention, which improved practical performance not by changing the mathematical result but by reorganizing data movement around the memory hierarchy.

The lesson from FlashAttention is particularly relevant. Many AI bottlenecks that appear to be arithmetic problems are really I/O problems. A mathematically equivalent implementation can become much faster by reducing trips to slower memory.

A recurrent decoder with shared weights may offer similar opportunities if its working set is small enough and its dataflow regular enough.

Or it may not.

This is why the report's phrase “model–hardware co-design” should be read as a research program rather than a footnote. Recurrent depth can only become a major scaling axis if the systems stack learns to expose its advantages without being dominated by serial latency.

The tension is even sharper during training.

Backpropagation through time creates a long dependency not only forward but backward. Checkpointing saves memory by recomputing forward activations, which adds more sequential work. Distributed training has to decide how to partition a model whose same decoder parameters are reused repeatedly.

Pipeline parallelism becomes awkward when the same block reappears at many virtual depths. In an untied deep network, different layer groups can live on different devices and form a pipeline. With tied weights, sending the same state through the same parameter-owning device repeatedly may create bubbles or communication loops.

Tensor parallelism can shard the recurrent block itself across devices, but each sequential step then involves collective communication among those devices. Repeat the block a thousand times and communication latency repeats too.

Data parallelism remains natural across independent sequences, but gradient synchronization and long sequence variance can complicate utilization.

The architecture can reduce parameter memory while increasing coordination.

This trade resembles what happened with mixture-of-experts systems. Sparse activation promised enormous parameter capacity without executing every expert for every token. In practice, routing tokens among devices created communication and load-balancing problems. The theoretical compute savings were real; realizing them required systems work.

Recurrent depth has its own version of the gap between algorithmic sparsity and hardware efficiency.

The shared block is compact.

The state has to come back.

A useful way to evaluate the architecture would therefore separate four budgets.

Stored parameter bytes.

Activation and cache bytes.

Arithmetic operations.

Sequential critical-path time.

The fourth is the one model papers most often hide.

Two computations with identical FLOPs can have very different critical paths. A thousand operations that depend on one another take at least a thousand steps of latency at some level, while a thousand independent operations can be spread across the machine.

RLT's temporal depth is, by definition, partly critical path.

That is not necessarily a flaw if the work purchases capability unavailable through parallel alternatives.

Search has critical paths too. Tool use waits on external systems. Autoregressive chain of thought is serial token generation. Humans tolerate a minute of latency for a difficult answer if the answer is worth the minute. The relevant comparison is not against an imaginary zero-latency model. It is against other ways to spend the same wall-clock budget.

Suppose a conventional model needs 5,000 explicit reasoning tokens to solve a task. Suppose a recurrent model needs 500 visible tokens plus hidden state updates. The recurrent path may be serial, but the explicit chain is serial too. The efficiency question becomes which serial computation does more useful work per unit of time.

This is where latent reasoning could win even without restoring full Transformer-style parallelism.

A hidden state update does not need to sample from the vocabulary, append tokens to an ever-growing text context, or preserve a grammatical trace. It may be able to perform denser computation per step. If so, recurrence can replace one serial process with another that carries more useful state.

That claim needs end-to-end measurements, not FLOP folklore.

The same is true of energy.

Repeated arithmetic consumes power. Moving weights and activations consumes power. Keeping a giant model resident consumes memory capacity and infrastructure. A smaller tied model run longer might use less energy, more energy, or shift energy from memory movement toward compute. The outcome depends on the machine.

If recurrent depth becomes important, benchmark culture will need to mature beyond “tokens per second.”

We will need time to first token, time to final answer, energy per solved task, peak memory, average hardware utilization, parameter traffic, cache traffic, and quality as a function of recurrent budget. We will need to know whether a method wins at batch one, batch sixteen, and high-throughput serving. We will need to distinguish training economics from inference economics.

This sounds tedious compared with announcing infinite depth.

It is the difference between an architecture and an industry.

The Transformer won partly because its mathematical structure happened to align with the economic structure of accelerators. Recurrence, if it returns to the center of language modeling, will have to make a comparably persuasive bargain.

Hardware does not care that time has become depth.

It cares whether the depth can keep the machine busy.
