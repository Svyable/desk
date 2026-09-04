# Data Is a Stage of Compute

The accelerator is not the beginning of the job.

It is somewhere in the middle.

Before a model can train, examples have to be found, read, decoded, transformed, tokenized, packed, shuffled, filtered, and delivered. Before an inference system can answer, prompts have to arrive, be normalized, perhaps enriched with retrieved material, turned into tokens, and placed into memory. Before a multimodal model can reason over an image or a video, pixels have to cross a storage system, a network, a host, and usually several software boundaries.

Every one of those steps is part of compute.

Not because every step happens on a GPU.

Because every step can determine whether the GPU has useful work to do.

The most expensive processor in the system does not get to define the system boundary.

The critical path does.

This is easy to forget when infrastructure is organized by hardware category. Storage belongs to one team. Data engineering belongs to another. Training infrastructure belongs to a third. The accelerator fleet is tracked in a dashboard that begins when a batch enters device memory.

The dashboard can be perfectly accurate and still miss the problem.

A device waits three hundred milliseconds for the next batch.

The GPU graph shows idle time.

The storage team sees normal read latency.

The data loader sees high CPU usage.

The network sees a manageable amount of traffic.

Everyone is within their local threshold.

The training job is slow.

This is what happens when a pipeline is measured as departments instead of as a path.

Data is a stage of compute because its ability to feed the next stage determines useful capacity.

A faster accelerator can therefore make a data system worse without changing the data system at all.

Suppose an input pipeline can reliably prepare one batch every 200 milliseconds.

The training step used to take 250 milliseconds.

The loader had time to stay ahead.

A new accelerator cuts the training step to 120 milliseconds.

Nothing in storage has regressed. Nothing in preprocessing has changed. The data system is performing exactly as well as before.

The accelerator is now starved.

An upgrade moved the bottleneck upstream.

This is one of the recurring patterns in AI infrastructure: improvements expose hidden constraints.

The better the GPU becomes, the less tolerance the rest of the system has for being merely adequate.

That is why end-to-end optimization is sequential.

Fix the current bottleneck.

Measure again.

The next bottleneck appears.

Fix that.

Measure again.

The system never reaches a permanent state called optimized. It reaches a state where the next improvement is not worth its cost.

The data stage is especially deceptive because many of its costs happen away from the device.

Tokenization can consume CPU.

Image decoding can consume CPU.

Compression reduces storage traffic but adds decompression work.

Shuffling improves statistical properties but can make reads less sequential.

Data augmentation improves training signal but adds computation.

Filtering reduces bad examples but may require expensive parsing or model-based scoring.

Remote object storage can be cheap and durable while adding latency that a tightly synchronized training job experiences as accelerator idle time.

None of these choices is inherently wrong.

The mistake is pretending they are free because they do not appear in the GPU bill.

A dollar of storage optimization can save a thousand dollars of accelerator waiting.

A dollar of storage optimization can also save nothing if the workload is compute-bound.

The value comes from the dependency, not the category.

This is why prefetching is such a powerful idea.

If the system knows what data will be needed next, it can begin preparing it while the accelerator is still working on the current batch.

The data stage does not become faster.

Its latency becomes less visible.

This distinction matters.

Many of the best systems techniques do not eliminate work. They move work off the critical path.

Communication is overlapped with computation.

Data is prefetched.

Checkpoints are written asynchronously.

Prefixes are cached.

Independent agent tools run in parallel.

Useful work hides necessary work.

The system becomes faster without each component becoming faster in isolation.

A training input pipeline often has several buffers for exactly this reason.

One batch is on the accelerator.

The next is in host memory.

Another is being decoded.

Another is being read from storage.

The ideal is a conveyor belt with enough inventory between stages that ordinary variation does not stop the line.

Too little buffering and small delays propagate immediately to the GPU.

Too much buffering and memory consumption grows, stale or unnecessary data may be prefetched, and the system becomes harder to reason about.

Buffering is not free capacity.

It is insurance against timing mismatch.

The right amount depends on the variability of the upstream stages and the cost of a downstream stall.

That last part is important.

A one-second storage pause in a laptop experiment is one second.

A one-second synchronized pause across five thousand accelerators is five thousand accelerator-seconds.

At large scale, variance becomes expensive even when averages look good.

This is why tail behavior matters in data systems.

A data loader with an average batch preparation time of 80 milliseconds may still starve a 100-millisecond training step if one batch in fifty takes 500 milliseconds and the prefetch buffer is shallow.

The average is fast enough.

The pipeline still stalls.

Capacity planning built on averages tends to underestimate the cost of synchronized systems.

The same problem appears in inference.

Imagine an application that performs retrieval before calling a model.

The model produces its first token quickly once the prompt arrives.

Retrieval latency varies.

Most requests retrieve in 50 milliseconds. Some take 600.

From the model server's point of view, those slow requests do not exist until they arrive.

From the user's point of view, the model is slow.

The product boundary includes retrieval.

An inference team can celebrate lower time-to-first-token while the user experiences no improvement because the upstream data stage dominates.

This is why the phrase model latency is dangerous when people mean product latency.

The user does not care which service owned the wait.

They care that they waited.

There are several ways to make data a better stage of compute.

The first is to reduce avoidable transformation.

A surprising amount of expensive infrastructure repeats deterministic work.

The same document is parsed repeatedly.

The same image is decoded and resized on every epoch.

The same prompt prefix is tokenized over and over.

The same retrieval corpus is re-embedded after an unrelated deployment.

The same validation filter is recomputed for unchanged data.

If a transformation is deterministic, reusable, and expensive enough, materializing its result can turn repeated compute into storage.

That trade is often attractive when storage is cheaper than accelerator waiting.

But materialization creates its own costs.

Cached artifacts consume space.

They need versioning.

A tokenizer change can invalidate tokenized corpora.

An image preprocessing change can invalidate resized examples.

A security policy can make old derived data unusable.

A cache that cannot tell you what produced it is a future incident.

Reusable work requires provenance.

This is why serious data pipelines eventually become software supply chains.

An example is not merely a file.

It has a source, a version, a transformation history, a schema, and a relationship to the model that consumed it.

The more expensive the training run, the more valuable reproducibility becomes.

You do not want to discover after a trillion-token run that the input pipeline silently changed halfway through.

Performance and correctness meet at the data boundary.

The second technique is locality.

Distance is latency and bandwidth.

If the same training shards will be read repeatedly, placing them closer to the compute can reduce both network traffic and variability. Local SSD caches, regional replicas, node-local caches, and pre-staged datasets all express the same idea.

Move reusable bytes toward the expensive machine before the expensive machine needs them.

Locality can become operationally awkward.

Compute moves.

Jobs are rescheduled.

Nodes fail.

Datasets change.

A cache on the wrong machine is not locality.

The scheduler therefore needs to understand data placement, or the data system needs to make placement invisible enough that jobs can move without catastrophic cache misses.

This is another example of the scheduler becoming the factory.

A scheduler that knows only how many GPUs are free can place a job onto accelerators that are technically available and practically far from its data.

The result is nominal capacity with poor goodput.

The third technique is parallelism.

Reading one file at a time is simple.

It can also be catastrophically serial.

Parallel readers, multiple workers, asynchronous prefetch, vectorized transforms, and staged decoding can increase throughput when the upstream system has bandwidth to support them.

Parallelism is not magic.

Ten readers can make storage ten times busier without delivering data ten times faster.

They can fight over the same CPU cores, saturate a network link, overwhelm metadata services, or randomize access patterns so badly that each individual read becomes slower.

The correct parallelism is the amount that feeds the downstream stage reliably without turning the upstream stage into a new bottleneck.

This is the same rule as batching.

Enough concurrency to amortize overhead.

Not so much that contention becomes the workload.

The fourth technique is to change the unit of storage.

Training systems often perform better when examples are packed into larger sequential shards rather than scattered across millions of tiny files. Tiny objects create metadata overhead, more requests, more seeks, and more opportunities for tail latency. Larger containers can improve sequential access and amortize fixed costs.

But large shards can reduce flexibility, increase wasted reads, and make recovery or partial sampling less convenient.

Again, the answer is not one universal format.

It is alignment between storage layout and access pattern.

Data that will be consumed sequentially should not be stored as if every record were an independent random transaction.

Data that needs random access should not be packed into a format that forces huge irrelevant reads.

The workload writes the storage requirements.

The fifth technique is to notice when the data stage is doing work the model does not need.

This is the data equivalent of using too large a model.

A retrieval system may fetch twenty documents because twenty sounds safer, even though only four fit into the useful context budget.

A training pipeline may decode full-resolution images before cropping most of the pixels away.

A multimodal service may transfer a source asset at far higher fidelity than the model can use.

An agent may download an entire repository to inspect one configuration file.

Unused bytes still consume bandwidth, CPU, memory, and time.

A useful system asks not only whether data arrived quickly, but whether the arriving data contributed to the answer.

The term goodput belongs here too.

Data throughput counts bytes.

Data goodput counts bytes that advance the useful job.

A pipeline can boast enormous storage throughput while moving mostly redundant, over-large, badly timed, or soon-to-be-discarded data.

That is the same mistake as celebrating FLOPs without asking what they achieved.

There is a deeper implication for model design.

Architectures that require less data movement can be operationally better even when their theoretical arithmetic is not dramatically lower.

A model that consumes a smaller working set, uses more reusable state, or tolerates more aggressive compression can fit into a data system that would starve another model.

Infrastructure and architecture are not separable after deployment.

The model determines what the machine must move.

The machine determines how expensive that movement becomes.

This is especially obvious in distributed training.

The training loop may need not only examples but optimizer state, checkpoints, logs, model weights, and sometimes dynamically generated or filtered data. The data plane becomes a mesh rather than a single input pipe.

A checkpoint writes while the next step wants to read.

An evaluation job reads a snapshot while training continues.

Multiple jobs share a storage backend.

A restart storms the storage system as hundreds of workers simultaneously reload state.

A dataset update invalidates caches just as a major run begins.

These are not storage incidents adjacent to compute.

They are compute incidents expressed through storage.

The operational cure is to measure the pipeline as one system.

For training, record step time alongside data-wait time, loader queue depth, host CPU saturation, storage latency, cache hit rate, network throughput, and accelerator activity.

For inference, trace from request arrival through retrieval, preprocessing, admission, prefill, decode, tool calls, and response completion.

The goal is not to collect every metric forever.

The goal is to know where elapsed time went.

A useful trace answers a simple question:

What was the expensive resource waiting for?

Sometimes the answer is nothing.

The accelerator was genuinely busy doing arithmetic.

Good.

Sometimes the answer is memory.

Sometimes network.

Sometimes another accelerator.

Sometimes a lock in a host process.

Sometimes a queue in a data service.

Sometimes a file that was stored on the wrong side of a region boundary.

Once the wait has a name, optimization becomes engineering instead of superstition.

There is also an organizational lesson.

If the team that owns the GPU budget cannot influence the data path, the company has split one economic system into separate reporting lines.

The cost will not respect the org chart.

A storage change can alter accelerator efficiency.

A model change can alter network traffic.

A scheduler change can alter cache hit rates.

A tokenizer change can alter CPU requirements.

Publication diagrams like to draw these boxes separately because boxes are legible.

Production systems pay for the arrows.

That is the real meaning of data as a stage of compute.

The bytes do not support the work.

Moving and transforming the bytes *is* part of the work.

If the accelerator is waiting for them, they are on the critical path.

And if they are on the critical path, they belong in the compute budget.

Running on full means feeding the machine as deliberately as you bought it.