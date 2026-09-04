# Useful Work per Second

A benchmark can make two machines look as though they are having an argument when they are answering different questions.

One system finishes a large pile of inference requests in less time. Another begins each response faster. A third keeps latency steadier when requests arrive unpredictably. A fourth produces slightly better answers but needs more memory. A fifth is cheaper because it is slower and runs when nobody is waiting.

Which one is efficient?

The answer depends on what the product promised.

That may sound obvious, but a surprising amount of infrastructure work begins in the opposite direction. A team receives a machine and asks how to maximize it. It selects a metric that belongs to the component—tokens per second, accelerator utilization, floating-point throughput, requests per second—and then tries to push the number upward.

Sometimes that works.

Sometimes the metric becomes a local religion and the product pays the tithe.

MLPerf Inference is useful here not because its benchmark numbers should be copied into a production capacity plan, but because the benchmark itself acknowledges that inference has different operating regimes. Datacenter submissions are divided into scenarios such as Offline and Server rather than pretending one score describes both. Offline work can emphasize how much of a finite pile the system can complete. Server work has to deal with requests arriving under latency constraints.

The distinction is deeper than benchmark design.

It is the first rule of AI compute economics: performance is always performance under a constraint.

Consider an overnight job.

A company has fifty million documents to classify before employees arrive in the morning. Nobody is watching individual requests. If the first classification takes thirty seconds to appear but the entire collection finishes by six, the delay to the first item may not matter. The operator can form large batches, pack the device aggressively, use the whole night, and optimize around total completed work and cost.

Now move the same model into an interactive product.

A customer types a question and waits.

The system can improve raw throughput by holding that request briefly while more requests arrive, combining them into a larger batch, and executing more efficiently. At some point the waiting itself becomes the problem. The throughput optimization begins degrading the product it is supposed to serve.

The machine has not changed.

The meaning of a second has.

Interactive language generation makes this especially visible because latency has several parts.

There is the wait before processing begins. There is the time required to process the prompt and produce the first output token. There is the pace at which subsequent tokens appear. There is the total time until the answer finishes. There is the tail: the slower experience of the unlucky requests that arrive during congestion, receive unusually long inputs, produce long outputs, encounter a cold cache, or share the system with another difficult job.

Two systems with the same average tokens per second can feel completely different to a person.

One may hesitate, then stream quickly. Another may begin immediately but continue slowly. One may be excellent for short questions and collapse under long prompts. One may look fast on average while a small percentage of requests wait long enough to destroy the experience for the customers who receive them.

Average performance is often where infrastructure trouble goes to hide.

This is not unique to AI. Networks, databases, storage systems, airlines, emergency departments, and call centers all learn the difference between average load and the experience of the person who arrives at the wrong moment. AI serving simply places an unusually expensive machine in the middle of the queue.

The temptation is to invent a universal metric that resolves all of this.

Useful tokens per dollar.

Quality-adjusted FLOPs.

Successful requests per watt.

Each can be useful in a particular analysis. None removes the need to define useful.

A token is not a stable unit of value. One token may be part of a correct legal summary and another part of a hallucinated paragraph that creates more work than it saves. A request is not a stable unit either. One request may classify a sentence. Another may ingest a book and produce a detailed report. Even quality is not one number because the cost of an error depends on what the model is doing.

The better approach is less elegant and more practical.

Define the service before optimizing the machine.

For an interactive assistant, the service may require a certain quality threshold, a target time to first token, a minimum streaming rate, a tail-latency limit, and an acceptable cost per completed conversation.

For a coding agent, it may require successful completion of a task, passing tests, staying inside a runtime budget, and recovering from certain failures without human rescue.

For a batch extraction pipeline, it may require processing the full data set by a deadline at a defined accuracy and total cost.

For training, it may require reaching a specific evaluation threshold by a date, with a budget that includes failed runs and repeated work.

Once the product constraint is explicit, infrastructure metrics become interpretable.

High throughput is good if it helps satisfy the objective.

Low latency is good if the user needs it.

High utilization is good when the work filling the machine is useful and does not make more valuable work wait.

Lower cost is good until it reduces quality, reliability, or timeliness more than the savings are worth.

This sounds like common sense because it is common sense.

Common sense becomes difficult when the system has enough layers that each team can win its own metric while the product loses.

A model team can improve benchmark quality by moving to a larger model. The infrastructure team now needs more accelerators per replica. To recover efficiency, the serving team forms larger batches. Time to first token increases. The product team compensates by showing a loading animation. Customers ask shorter questions because long ones feel slow. The analytics team sees fewer tokens per session and celebrates lower inference cost.

Every dashboard can be green while the product gets worse.

The antidote is to measure the whole trip.

Take a request from arrival to useful completion.

How long did it wait before admission?

How long did prompt processing take?

How soon did the first useful output arrive?

How quickly did generation continue?

Did the request finish?

Did it have to retry because the worker failed or the output was invalid?

Did a verifier reject it?

Did the user immediately ask the same question again because the answer missed the point?

Those last questions are easy to leave out of infrastructure accounting because they happen above the accelerator. They can dominate the economics.

Suppose an optimization increases raw token throughput by twenty percent but causes a modest decline in answer quality. The infrastructure team may record a twenty-percent victory. If users now need more turns to get the same task done, the application may consume more total tokens and more human time.

Suppose a cheaper model answers eighty percent of requests perfectly well and struggles on the remaining twenty. If the product can identify the difficult cases and escalate them, the smaller model can create enormous effective capacity. If it cannot identify them and silently gives bad answers, the same routing scheme may be unacceptable.

Suppose a batch job can save thirty percent by running on interruptible capacity. If interruptions are rare and checkpoints are frequent, that can be excellent economics. If the job repeatedly loses hours of progress and misses a deadline, the cheaper accelerator-hour was not cheaper completed work.

Infrastructure cost is full of prices that exclude the consequence.

The cloud provider charges for time.

The business pays for outcomes.

This is why queueing deserves a place beside arithmetic in any serious account of AI performance.

A lightly loaded system can usually accept new work immediately. As load rises, requests increasingly overlap. Batching becomes easier because there are more requests available to combine. Device efficiency can improve. This is the pleasant part of increasing load.

Then the system approaches its practical service limit.

New work arrives nearly as fast as existing work can finish. Small disturbances begin creating queues. A run of longer-than-average prompts, a burst of traffic, a temporary slowdown, or one failed worker produces waiting that takes time to drain. Push still closer to the maximum and latency can deteriorate quickly even if average throughput barely changes.

This is why the final ten percent of nominal capacity can be so expensive to capture in an interactive service.

It is not necessarily hard to make the accelerator do more work.

It is hard to make it do more work without making somebody wait too long.

The operating point is therefore a choice.

Offline workloads can often run near saturation because waiting in front of the accelerator is mostly harmless as long as the deadline is met. Interactive workloads need headroom because arrivals are irregular and tail latency matters. Mixed fleets can exploit the difference by allowing flexible jobs to fill quiet periods and yielding capacity when urgent traffic arrives.

That sounds like the obvious end state: keep every machine filled with something, but give priority to the work that cannot wait.

In practice, the scheduler has to know enough to make that possible.

How quickly can background work be paused?

How much model state must be loaded before an interactive request can run?

Can different models share the same device without repeatedly paying load costs?

Does preempting one sequence waste its cache state?

Can a job be moved to another accelerator?

Are memory requirements predictable?

What happens if a request begins small and grows into a long generation?

The closer the system gets to full, the more these details matter.

Capacity planning has the same problem at a longer timescale.

If a service needs one hundred accelerators on an average day and three hundred during a launch event, what does "efficient" mean?

Buying three hundred guarantees plenty of quiet time.

Buying one hundred guarantees pain during the event.

Renting the difference may be economical if capacity is available when needed. Reserving it may be prudent if it is not. Queueing lower-priority work until after the peak can reduce the requirement. Moving some traffic to smaller models can reduce it further. Degrading optional features can protect the core service. A company that knows the value and urgency of each unit of work has many more options than one that simply asks for three hundred identical accelerators.

The same logic applies inside a single request.

Not every token has equal urgency.

The first useful token can matter greatly to perceived responsiveness. Later tokens may be more tolerant of small variation. Some applications need a complete structured output before anything can be shown. Others can stream. Some can speculate using a smaller draft model and verify with the larger one. Some can return an approximate result immediately and refine it later.

Product design determines what the infrastructure is allowed to optimize.

This is why the most valuable performance conversation often happens before a kernel is changed.

Can the answer be asynchronous?

Can the task run overnight?

Can the product show partial results?

Can a smaller model handle the easy path?

Can repeated context be cached?

Can work be combined across users?

Can the quality bar differ by task?

Can the system refuse low-value work during a peak instead of slowing down every request?

Every yes changes the shape of the compute problem.

Engineers sometimes resist this because product constraints can feel like fixed facts handed down from elsewhere. They are not always fixed. A latency target may be inherited from an old architecture. A context length may be chosen because a competitor advertises a larger number. A quality requirement may be expressed as "use the best model" because nobody has defined the actual failure cost. A batch deadline may be midnight because it has always been midnight.

Compute becomes easier to optimize when these inherited requirements are turned back into questions.

What would happen if the answer arrived two seconds later?

What would happen if this class of request used a cheaper model?

What would happen if a background report arrived at seven instead of six?

What would happen if the product carried only the relevant context rather than the entire history?

Sometimes the answer is that the requirement is real.

Good. Now the infrastructure has something honest to optimize.

Other times the requirement dissolves, and with it an expensive piece of the architecture.

The phrase useful work per second is intentionally incomplete.

It asks you to fill in useful.

That is the point.

The accelerator does not know whether its output matters. It can execute instructions quickly, measure its own activity, and expose a wealth of counters. The serving framework can report throughput. The benchmark can report performance under a defined scenario.

Only the operator can connect those numbers to the promise made to the user.

Once that connection is explicit, the rest of the book becomes much easier.

Memory matters because it limits how much useful work can coexist.

Batching matters because it changes how efficiently that work reaches the device.

Context matters because the system pays to ingest and remember it.

Model size matters because capability has a cost curve.

Scheduling matters because urgency differs.

Networking matters because distributed work waits for communication.

Reliability matters because failed work is paid work that does not count.

The goal is not to keep the machine busy.

The goal is to make as much of its busyness count as possible.
