# The Memory Wall

The arithmetic unit gets the glamour because arithmetic comes with large numbers.

Peak operations per second fit neatly into a product announcement. They let one generation of hardware be compared with another. They create the reassuring impression that if we can multiply fast enough, intelligence will arrive on schedule.

Then the model asks for its weights.

The weights are in memory.

The activations are in memory.

During generation, the model also needs state derived from earlier tokens. That state occupies memory too. Before arithmetic can happen, data has to be where the arithmetic can reach it. After arithmetic happens, results often have to move again.

A processor can be capable of astonishing computation and still spend meaningful time waiting for numbers.

This is the memory wall.

It is not a new problem. Computer architects have lived with the gap between processor speed and memory access for decades. AI makes the old problem unusually visible because modern models combine enormous parameter sets with workloads that repeatedly move those parameters and intermediate state through the memory hierarchy.

The important distinction is between memory capacity and memory bandwidth.

Capacity answers how much can fit.

Bandwidth answers how quickly it can move.

A device may have enough memory to hold a model but not enough bandwidth to keep its arithmetic units fed at the rate their peak specification suggests. Another workload may have plenty of bandwidth but run out of capacity because too many concurrent requests have accumulated state. These are different failures and they call for different remedies.

The H100 is a useful illustration because its specification sheet puts both sides next to each other. The accelerator can be configured with high-bandwidth memory measured in tens of gigabytes and memory bandwidth measured in terabytes per second, alongside very large peak tensor-compute figures. Those numbers describe an extraordinary machine. They also describe several different resources sharing one package.

A model does not automatically use them in the same proportion.

Inference exposes the mismatch clearly.

A language model performs two broad kinds of work during a typical request. First it processes the input—the prompt, system instructions, retrieved documents, conversation history, code, or whatever else the product has assembled. This is commonly called prefill. Then it generates new tokens one after another in a decode phase.

The two phases can stress the machine differently.

Prefill has a relatively large amount of input available at once. There is more opportunity to perform large matrix operations efficiently. Decode is sequential: each new token depends on the state created by the tokens before it. When batches are small, the amount of arithmetic performed for each movement of model data can be comparatively low. In that regime, memory bandwidth can matter enormously.

This is why a system can own more peak arithmetic than it knows how to use.

The accelerator is not slow.

The workload is thirsty.

One response to thirst is to improve locality: move less data, reuse more of what is already close to the computation, and avoid writing intermediates to distant memory only to read them back moments later.

FlashAttention is a clean example.

The paper did not make attention faster by changing the result into an approximation. It reorganized the computation around the memory hierarchy. By tiling the work and reducing reads and writes between high-bandwidth memory and faster on-chip memory, the authors improved wall-clock performance in their evaluated transformer workloads while computing exact attention.

That is an important kind of optimization because it reveals where hidden capacity lives.

The arithmetic hardware was already present.

The gain came from feeding it differently.

This pattern appears throughout high-performance AI software. Kernel fusion can reduce unnecessary trips through memory. Better data layouts can make accesses more efficient. Coalesced reads matter. Keeping operations on the device instead of bouncing through host memory matters. Overlapping transfers with computation can matter. The details differ by workload and hardware, but the underlying question stays the same: how often are we making the expensive engine wait while data travels?

Then language-model serving adds a more peculiar memory problem.

The model has to remember the past.

During autoregressive generation, attention uses key and value information associated with earlier tokens. Serving systems keep this information in a KV cache so the model does not recompute the entire history from scratch for every new token. This is a good trade. It is also a claim on scarce memory that grows with the number and length of active sequences, subject to the model's architecture and cache representation.

Now concurrency becomes a memory-management problem.

Imagine a serving machine with enough arithmetic to handle another request but not enough free memory for that request's cache state.

The compute is available.

The capacity is not.

This is one reason serving throughput can be limited by memory even when a broad GPU activity graph looks unimpressive. The system may be unable to admit more sequences because their state will not fit. More requests in the queue do not help. A larger batch would be attractive, but the memory required to sustain the batch is already the limiting resource.

The problem gets worse when memory is reserved inefficiently.

Requests do not all have the same length. A serving system may know the maximum possible sequence length but not how many tokens a particular response will actually produce. If it reserves a large contiguous region for every request, much of that region can remain unused. If requests start and finish at different times, free space can become fragmented into pieces that are individually too small or awkward to use.

This is the problem PagedAttention attacked.

The vLLM paper borrowed the idea of paging from operating systems. Instead of requiring each request's KV cache to occupy one large contiguous region, the system manages the cache in blocks. That makes allocation more flexible and reduces the memory lost to fragmentation and over-reservation. In the authors' evaluations, the resulting vLLM system achieved substantial throughput improvements over the comparison systems, especially in workloads with longer sequences and more complex decoding.

The precise multiplier is less important than the mechanism.

A software memory manager made the same hardware serve more work.

No new GPU arrived.

No model became smaller.

The system simply stopped wasting as much of a scarce resource that had been preventing larger effective batches.

That should change how operators think about capacity.

When a fleet appears full, ask what is full.

If memory capacity is full, several options exist besides adding arithmetic. A model can be quantized or otherwise represented more compactly. KV state can sometimes be stored at lower precision. A serving framework can manage blocks more efficiently. Long-lived and short-lived requests can be scheduled differently. Prefixes can be shared or reused. Some state may be offloaded, with a latency cost. A larger model may be replaced by a smaller one for part of the workload. Requests can be distributed across devices differently.

Each option moves another constraint.

Reduce memory footprint and arithmetic may become the bottleneck.

Offload state and the interconnect may become the bottleneck.

Compress cache precision and quality or kernel support may become the concern.

Spread the model over more devices and communication joins the critical path.

There is no free release of capacity. There are trades.

The good operator wants the trade that matches the product.

This is why "memory optimization" is too narrow a phrase. Memory determines how much work can coexist. That makes it a scheduling resource and an economic resource.

A request occupying cache memory prevents some other request from using that memory. A long generation has a capacity cost beyond the arithmetic required to generate its tokens. A product feature that encourages users to carry enormous histories changes fleet concurrency. A routing decision that sends an easy request to a very large model consumes both more arithmetic and more memory than the same task may require on a smaller path.

Memory is part of the price of a product decision.

Long context makes this especially obvious, but even ordinary traffic creates hidden memory economics.

Suppose two users submit identical long system instructions followed by different short questions. A naive serving system performs the same prefix work twice and stores two copies of state derived from that shared prefix. A system capable of prefix reuse can recognize the common beginning and avoid some redundant computation and storage.

The savings depend on the traffic.

If every request has a unique prefix, a prefix cache has little to reuse. If a product sends the same lengthy instructions, schema, policy text, or document prefix with thousands of requests, the opportunity can be large.

The key is to look for repetition in the workload rather than install caching as a religious practice.

Caches create their own management problems. They occupy memory. Entries need eviction policies. A cache hit is valuable; a cache full of prefixes nobody will use again is just another tenant. The useful cache is not the largest cache. It is the cache that keeps expensive repeated work from being repeated often enough to justify the space.

This sounds like ordinary systems engineering because it is.

AI has a tendency to make familiar engineering disciplines look novel by putting a neural network in the center. The memory hierarchy did not stop mattering because the output became language. Locality did not stop mattering because the model became intelligent. Fragmentation did not stop mattering because the object being allocated was a KV cache instead of a file page.

The novelty is the shape and scale of the workload.

A single serving request can have a short input and a long output, a long input and a short output, or both. A batch can contain sequences at different stages. The amount of cache state changes as generation progresses. The same infrastructure may serve several model architectures with different memory requirements. A product may suddenly introduce a longer-context feature and discover that the advertised context window was also an invitation to cut concurrency.

Hardware gives the maximum.

Workload shape decides what fraction is usable.

The easiest mistake is to look only at whether the model fits.

"It fits in memory" is a milestone, not a capacity plan.

The model can fit and leave too little room for a useful number of concurrent sequences. It can fit only when a particular precision is used. It can fit across multiple devices but create so much communication that the fleet is inefficient. It can fit comfortably at average context length and fail under the long tail. It can fit during testing and fragment under continuous production traffic.

A serving system needs room not merely for the model but for the life around the model.

That includes cache state, temporary buffers, framework allocations, communication buffers, and enough flexibility to handle variation without constantly failing admission or evicting useful work.

The same principle applies to training with different objects.

Parameters need memory. Gradients need memory. Optimizer state can require substantial memory. Activations need memory. Distributed training techniques such as sharding exist partly because one device cannot always hold all of these at once. Checkpointing activations trades extra computation for lower memory use. Lower precision can reduce footprint and increase throughput when the hardware and training method support it. Parallelism divides the problem but introduces communication.

Again, the bottleneck moves.

A memory-saving technique can cost compute.

A compute-saving technique can cost memory.

A device-saving technique can cost network bandwidth.

The job is not to minimize one resource in isolation.

It is to balance the resources so the scarce one is not needlessly strangling the rest.

There is a useful habit hidden in all of this: when performance disappoints, ask what arithmetic intensity the workload is actually giving the machine.

You do not need to turn every production meeting into a roofline lecture. The intuition is enough.

If an operation performs a great deal of computation on each piece of data it moves, arithmetic throughput is more likely to matter.

If it moves large amounts of data for relatively little computation, memory bandwidth is more likely to matter.

Batching can change that balance by allowing weights and operations to be shared across more useful work. Quantization can change it by reducing the bytes that represent weights and activations. Kernel design can change it by reducing unnecessary memory traffic. Model architecture can change it. Sequence length can change it. Hardware generation can change it.

The label "LLM inference" is far too broad to tell you which side you are on.

Measure the phase.

Measure the batch.

Measure the memory behavior.

Measure the traffic.

A machine whose tensor units are underused may not need more work. It may need fewer trips to memory.

This is the central lesson of the memory wall.

Compute is not what the accelerator can calculate.

Compute is what the whole memory-and-arithmetic system can keep moving.

Once you see that, a full memory allocator stops looking like a bookkeeping issue. It becomes what it really is: a limit on how much intelligence the machine can produce at once.
