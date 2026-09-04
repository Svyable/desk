# Pipeline Bubbles

A factory line can be full of machines and empty of work between them.

That empty space moves.

One station finishes and waits for the next item. Another cannot begin because the previous stage has not delivered. A third is idle because the line is being refilled after a changeover. The equipment exists. The workers are present. The line is technically operating.

The gaps are doing nothing.

Distributed AI systems have their own version of these gaps.

They are called bubbles.

Pipeline parallelism makes the idea literal. When a model is too large or too slow to run efficiently on one accelerator, different groups of layers can be placed on different devices or stages. A microbatch enters the first stage, then moves to the second, then the third, and so on. As additional microbatches enter behind it, multiple stages can work at once.

In the ideal picture, the pipeline stays full.

Each stage has useful work.

The next microbatch arrives just as the previous one leaves.

The real picture has edges.

At startup, later stages have nothing to do until the first microbatch reaches them. At shutdown, earlier stages finish while later stages continue draining the remaining work. If stages take different amounts of time, the faster stages wait for the slowest. If communication between stages is delayed, the downstream stage waits. If a microbatch is too small to use its stage efficiently, the hardware is occupied by work that underfills it.

These empty intervals are pipeline bubbles.

They are one of the cleanest demonstrations that adding parallelism does not automatically add useful capacity.

Parallelism creates the possibility of simultaneous work.

Scheduling determines whether the possibility is realized.

The easiest way to see this is with two stages.

Stage A performs the first half of the model.

Stage B performs the second.

The first microbatch begins on A while B waits.

When A finishes, the microbatch moves to B and the next microbatch can begin on A. Now both stages are occupied. Eventually A runs out of new work and becomes idle while B finishes the last microbatch.

The larger the amount of work flowing through the middle relative to the startup and shutdown periods, the less the bubbles matter.

This is why microbatching matters.

Divide the global batch into enough smaller pieces and the stages can overlap their work more effectively. The pipeline fills earlier relative to the total run and stays busy longer.

Make microbatches too small and another problem appears.

Small matrix operations may use the accelerator poorly. Kernel-launch and communication overhead become larger relative to useful arithmetic. More boundaries mean more coordination. The cure for pipeline idle time can create device underutilization elsewhere.

Again, optimization means balancing wastes rather than eliminating one in isolation.

Pipeline schedules try to reduce these gaps.

Training frameworks use different sequences for forward and backward passes, interleave work, and sometimes assign multiple model chunks to the same physical stage. The details can become diagram-heavy, but the purpose is intuitive: keep each stage occupied with some useful part of some microbatch as often as dependencies permit.

The constraint is causality.

A later stage cannot process an activation before the earlier stage produces it.

A backward pass cannot compute a gradient that depends on a forward result that does not exist.

No scheduler can remove dependency.

It can only arrange independent work around the dependency.

This is the same principle as overlapping network communication with computation.

Useful work hides unavoidable waiting.

A bubble appears when there is nothing independent available to hide the wait.

The size of the bubble therefore depends on how much parallel work the model and batch expose.

This is why pipeline parallelism is not equally attractive for every workload.

A very large training run with substantial batch size may have enough microbatches to keep many stages busy. A latency-sensitive inference request with a batch size of one does not. The pipeline can reduce memory pressure by spreading layers across devices, but each token may still have to travel through the stages sequentially. More stages can add communication and synchronization without enough concurrent requests to amortize them.

The model fits.

The product gets slower.

Fit is not efficiency.

Stage balance is the other major problem.

Suppose a four-stage pipeline divides a model by layer count.

Each stage receives the same number of layers.

It feels fair.

One stage contains layers that are computationally more expensive. Another handles extra communication. A third has different memory behavior. The slow stage determines the rhythm of the line.

The other three wait for it.

Distributed systems have a brutal sense of fairness: everyone gets to wait for the slowest participant.

This is why stage partitioning should target execution balance rather than cosmetic symmetry.

Equal layer counts are useful only if layers cost roughly the same under the actual workload.

Mixture-of-experts architectures make this harder because work can be data-dependent. A stage containing experts may receive uneven token traffic. Long-sequence behavior can shift the cost of attention-heavy layers. Different microbatch shapes can change kernel efficiency.

The balanced pipeline is a property of a workload, not merely a model graph.

This leads to an uncomfortable truth about optimization measurements.

A pipeline can look beautifully balanced under a synthetic batch distribution and develop bubbles in production because real sequences are messier.

Variable sequence lengths change stage times.

Dynamic routing changes communication.

Different tasks trigger different output lengths.

Hardware faults or thermal behavior can create stragglers.

A scheduler tuned for the average can spend its life waiting on the tail.

The same problem appears beyond explicit pipeline parallelism.

Any staged AI system can develop bubbles.

A data loader prepares batches, then the accelerator trains.

A retrieval system fetches documents, then the model processes them.

A prefill service prepares KV state, then a decode service generates tokens.

An agent plans, calls a tool, waits, reads the result, then reasons again.

A verification pipeline generates candidates, scores them, and selects one.

Whenever the stages have different speeds or blocking dependencies, some stage can sit idle while another becomes the bottleneck.

Pipeline thinking therefore applies to whole products, not just model parallelism.

Consider retrieval-augmented generation.

The model may be ready immediately.

Retrieval takes two hundred milliseconds.

The accelerator waits.

The obvious optimization is faster retrieval.

Another is overlap: can part of the request be processed before retrieval finishes? Can the system begin parsing or classifying the question? Can likely shared instructions be prefetched or prefix-cached? Can retrieval begin earlier in the interaction? Can a cheap model produce an initial response structure while evidence arrives?

The goal is not always to shorten every stage.

It is to keep expensive stages from becoming idle behind cheaper ones.

This is why data pipelines matter so much in training.

A training job can have excellent kernel performance and still lose accelerator time because data preparation cannot keep up. The accelerator finishes one step and waits for the next batch. Increase device speed and the wait can become worse as a fraction of total time.

A faster GPU makes a slow input pipeline look slower.

The remedy may include prefetching, parallel data loading, caching processed examples, moving transformations off the critical path, or changing storage layout. The exact solution depends on the data.

The conceptual solution is fill the pipeline.

This is one reason end-to-end traces are so valuable.

A profiler focused only on kernels can tell you what happens while the GPU is working.

A timeline tells you when it is not working and what the rest of the system was doing at that moment.

The empty intervals often contain the answer.

Did the device wait for data?

Communication?

Another pipeline stage?

A synchronization barrier?

A checkpoint?

A host thread?

A scheduler admission decision?

A tool call?

The more distributed the system becomes, the more important the negative space becomes.

This is the infrastructure equivalent of listening for silence.

A hundred milliseconds of nothing on one accelerator is trivial.

A hundred milliseconds of synchronized waiting across ten thousand accelerators is one thousand accelerator-seconds of paid absence.

Repeat it every step and the bubble becomes a building.

Scale converts tiny idle gaps into capital expense.

That is why pipeline efficiency often matters more at large scale than small teams expect from development runs.

An engineer tests a model on eight GPUs. A small bubble is barely visible. The same schedule is deployed on hundreds of stages, replicas, or parallel groups. Communication grows. Straggler probability grows. The global system begins repeatedly waiting for the least fortunate component.

The bubble has multiplied.

This is also why very large training systems become obsessed with overlap and balance.

The hardware cost is too high to accept synchronized emptiness casually.

Yet there is a limit to the obsession.

A team can spend enormous engineering effort chasing the final few points of pipeline utilization. More complex schedules can increase memory pressure, make debugging harder, complicate checkpointing, or reduce flexibility. Interleaving can shrink bubbles while increasing communication. Increasing microbatch count can improve pipeline occupancy while worsening arithmetic efficiency.

The last bubble is not always worth popping.

The same business discipline applies here as everywhere else.

What is the gain?

What does it cost in engineering complexity?

What other resource becomes tighter?

Does the improvement matter at the current fleet size and job duration?

Does it change time-to-result enough to affect the product or research program?

At ten devices, a one-percent gain may not justify a month of work.

At one hundred thousand devices running continuously, one percent can be a very different number.

Scale changes which inefficiencies deserve attention.

Pipeline bubbles also clarify why utilization percentages can lie.

A stage may show high utilization whenever it has work while spending meaningful wall-clock time waiting for work to arrive. Depending on how the metric is averaged and sampled, the gaps can disappear into a flattering summary. A cluster-wide average can hide one badly balanced stage because several other devices remain active.

The correct unit is progress through the pipeline.

How long does one useful unit of work take from entrance to exit?

How much device time was available during that interval?

How much of that time contributed to forward progress?

Where did the critical path wait?

Those questions turn bubbles into goodput.

There is an architectural way to reduce bubbles that is easy to overlook: change the model or workflow so stages depend on one another less.

A model architecture with lower communication requirements may scale better even if its single-device benchmark is slightly worse. A serving design that separates prefill and decode can improve resource matching when the handoff cost is low enough. An agent that issues independent tool calls in parallel can hide external latency that a sequential plan would pay directly. A training pipeline that moves expensive preprocessing offline can remove a stage from the critical path entirely.

The best pipeline optimization can be deleting a dependency.

That is stronger than scheduling around it.

This principle generalizes beyond compute.

Organizations have bubbles too.

One team finishes a decision and waits for approval. Another waits for data access. A third waits for a review that could have happened in parallel. Expensive human capability sits idle because the workflow is staged badly.

AI infrastructure makes the cost more measurable because the accelerator keeps billing while it waits.

The lesson is the same.

Do not confuse occupied stages with flowing work.

A pipeline is healthy when useful work keeps moving.

Running on full means making the empty space small enough that the machine behaves like one continuous system instead of a collection of expensive stages waiting politely for one another.