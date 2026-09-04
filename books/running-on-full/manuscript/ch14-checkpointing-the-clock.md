# Checkpointing the Clock

A training run is not finished when the hardware has spent the time.

It is finished when the useful state survives.

That distinction matters because long-running AI jobs accumulate value gradually and risk continuously.

Every minute of training creates more state worth preserving.

Every minute without a durable checkpoint increases the amount of work that can disappear when something fails.

A checkpoint is therefore not merely a file.

It is an insurance policy on elapsed compute.

The premium is the time and infrastructure required to write it.

The deductible is the work lost since the previous one.

The operating question is not whether to checkpoint.

It is how often.

Checkpoint too rarely and a failure can erase hours of expensive progress.

Checkpoint too often and the job spends meaningful time stopping, serializing, transferring, and synchronizing instead of training.

The ideal interval sits between those losses.

This is a classic optimization problem, but modern AI makes the stakes unusually large because the job can be both expensive and distributed.

A five-minute interruption on one workstation is five minutes.

A five-minute interruption on ten thousand accelerators is more than a month of accelerator-hours compressed into one event.

Scale changes the emotional texture of failure.

Small failures become capital events.

That is why checkpointing the clock belongs in a book about utilization.

The device can be fully active right up until the moment the work is lost.

Every utilization graph can look excellent.

If the state disappears, the useful work did not survive.

Goodput has memory.

The simplest checkpoint strategy pauses training, writes the state, confirms durability, and resumes.

This is easy to reason about.

It is also easy to hate.

During the pause, the accelerator may have nothing useful to do. The larger the model, optimizer state, and distributed job, the more data may need to be serialized and moved. Shared storage can become the bottleneck. A coordinated checkpoint can make thousands of workers arrive at the same storage system at once.

The checkpoint protects progress by temporarily stopping progress.

That trade can be improved but not abolished.

Asynchronous checkpointing tries to move the write off the critical path.

The training process creates a consistent snapshot, hands it to another thread, process, host buffer, or service, and resumes while the checkpoint is written in the background.

Now the accelerator can continue working.

The apparent cost shrinks.

But the system has borrowed risk.

If the job fails before the asynchronous write becomes durable, which state actually survives?

If the next checkpoint begins before the previous one finishes, does memory pressure increase?

What happens when storage slows down?

How much host memory is required to hold the pending snapshot?

Can background checkpoint traffic interfere with data loading or interconnect traffic?

Moving work off the critical path does not make the work disappear.

It changes which resource pays.

This is a recurring theme in high-performance systems.

Overlap turns latency into bandwidth demand.

A synchronous checkpoint pays in wall-clock pause.

An asynchronous checkpoint pays in additional concurrency, memory, I/O, and failure-state complexity.

The better design depends on which resource has slack.

Checkpoint frequency also depends on failure frequency.

If the system almost never fails, frequent checkpoints may waste more time than they save.

If failures are common, a long checkpoint interval can lead to repeated recomputation.

The relevant failure rate is not only hardware failure.

Large jobs can stop because of software bugs, process crashes, network faults, preemption, power events, storage errors, scheduler actions, operator mistakes, bad data, or an upstream service disappearing.

A cluster built from reliable components can still have a high job-level interruption rate because a large job depends on many components at once.

More participants create more opportunities for one participant to fail.

This is one reason reliability changes with scale.

The component can get better while the job becomes more fragile.

Imagine each individual worker is highly reliable during any one hour.

A job using a few workers may run for days without noticing.

A job using thousands of workers samples thousands of chances for trouble every hour.

The system-level question becomes less about preventing every failure and more about recovering cheaply.

Checkpointing is one of the mechanisms that converts failure from catastrophe into delay.

That conversion has economic value.

A system that is slightly slower in failure-free conditions can have better completed-job cost if it recovers far more efficiently.

This is another case where peak performance is not throughput.

The fastest possible step time is not the fastest possible time to finished model.

Completed training time includes interruption, detection, restart, reload, replay, and sometimes investigation.

A job that trains ten percent faster but loses twelve hours every week may be slower than a more conservative system.

The clock that matters is wall time to durable result.

Checkpoint design has several dimensions.

The first is what to save.

A minimal checkpoint might include model weights.

A resumable training checkpoint may also need optimizer state, scheduler state, random number generator state, data-loader position, gradient scaler state, and enough metadata to recreate the exact distributed layout or translate it into a new one.

The more faithfully the checkpoint captures the job, the more state must be written.

The less it captures, the more reconstruction work appears during restart.

There is no point saving a smaller checkpoint if the missing state makes recovery unreliable or statistically different in a way the training process cannot tolerate.

Correctness is part of utilization.

A quickly written checkpoint that cannot resume correctly is not an optimization.

It is a placebo.

The second dimension is where to save.

Local storage can be fast.

It can also disappear with the machine.

Remote durable storage protects against node failure but can add network and service bottlenecks.

A layered design may write first to local or nearby storage, then copy to a more durable tier asynchronously.

This can shorten the pause while eventually improving durability.

But it creates a window during which the newest checkpoint and the durable checkpoint are different things.

Operators need to know which one the recovery system can actually trust.

A checkpoint is not durable because a log line says “checkpoint complete.”

It is durable when the failure modes you care about can no longer destroy it.

The third dimension is how much can be incremental.

If most of a large state has not changed, writing only changes can reduce I/O.

In training, however, many tensors change every step. Incremental approaches can still help with metadata, replicated state, or systems that separate stable model artifacts from frequently changing optimizer state, but the benefit depends heavily on representation.

Compression can reduce bytes at the cost of CPU or accelerator work.

Lower precision can reduce checkpoint size if the numerical consequences are acceptable.

Sharding can let workers write in parallel rather than funneling all state through one process.

Each technique moves the bottleneck.

The fourth dimension is consistency.

A distributed checkpoint must represent a coherent training state.

If one worker saves step 50,000 while another saves state from step 49,999, the collection may not form a valid restart point.

Coordinating consistency can create barriers.

Barriers create waiting.

The desire for a perfectly coherent snapshot therefore collides with the desire to keep every device moving.

This is the same systems problem databases have faced for decades: preserve a meaningful state without stopping the world longer than necessary.

AI infrastructure often rediscovers old distributed-systems truths at larger tensor sizes.

The fifth dimension is restart speed.

Teams often optimize how fast they can write a checkpoint and ignore how long it takes to restore one.

This is backwards if failures are common.

A checkpoint that writes in ninety seconds but takes forty minutes to reload across the fleet can dominate recovery time.

Restart storms matter.

Thousands of workers can simultaneously read weights and optimizer shards from storage. The storage system that handled steady-state writes comfortably can collapse under coordinated reads. Network links can saturate. Metadata services can become hot. Node-local caches are cold because the previous machines are gone.

The job survives the failure and then waits to remember itself.

Recovery throughput is part of training throughput.

This suggests a more complete metric.

Instead of asking only how much time is spent checkpointing during successful execution, ask what fraction of fleet time contributes to a durable training trajectory after failures and restarts are included.

That number captures both insurance premium and claims.

A system with more frequent checkpoints pays higher premiums but may have smaller claims.

A system with infrequent checkpoints pays lower premiums but can have enormous claims.

The optimum depends on actual failure behavior, checkpoint cost, and job scale.

Do not borrow a checkpoint interval from another cluster as if it were a constant of nature.

Measure your own hazards.

There is also a product version of checkpointing.

Agent systems, long-running workflows, and multi-step inference pipelines accumulate state too.

An agent researches, calls tools, creates intermediate artifacts, receives approvals, and continues later. If every interruption forces it back to the first prompt, the system wastes inference, tool calls, latency, and user attention.

Persisting intermediate state is checkpointing.

A long video generation workflow that can resume from an intermediate stage is checkpointing.

A batch inference job that records completed items so a retry does not recompute the entire file is checkpointing.

A retrieval indexing pipeline that can resume from the last processed shard is checkpointing.

The principle extends anywhere progress is expensive and failure is possible.

Idempotency is the companion idea.

If a step is retried, can the system safely perform it again?

A model inference call is usually easy to repeat economically, though the output may not be identical if sampling is involved.

A tool call that sends an email, places an order, or changes a database is different. Replaying it blindly can duplicate side effects.

A durable workflow needs enough state to know what has already happened.

That is checkpointing with consequences.

This matters for compute because retries can become hidden utilization.

The GPUs are busy.

The tool APIs are busy.

The network is busy.

The workflow is redoing completed steps because it cannot distinguish progress from absence.

The infrastructure is active and the product is standing still.

Again, goodput is what survives.

Checkpointing also changes the economics of interruptible compute.

Cheap capacity is only cheap if the workload can tolerate losing the machine.

A training job that checkpoints frequently and restarts quickly can exploit preemptible or spot capacity more effectively than a job that assumes stable hardware for twenty-four hours.

The checkpoint architecture creates purchasing flexibility.

Software reliability becomes procurement leverage.

That connection is easy to miss.

The finance team sees an instance price.

The infrastructure team sees a checkpoint interval.

They are part of the same decision.

The ability to recover lowers the effective cost of unreliable capacity.

The inability to recover raises it.

This is why Chapter 18 will treat completed-job cost rather than hourly rental price as the economic unit.

There is a darker side to checkpointing: it can preserve bad work.

If a training run has diverged, a corrupted checkpoint lets you resume the corruption faster.

If data quality degraded, faithfully saving the current state does not make the state valuable.

If a software bug has silently changed the objective, perfect recovery merely returns you to the bug.

Durability and validity are different properties.

A publication process understands this intuitively.

Saving every draft does not make every draft correct.

But without saved drafts, correction becomes harder.

The same distinction applies to model training.

Checkpointing protects progress from infrastructure failure.

Evaluation protects progress from being mistaken for quality.

Both are required.

Operationally, teams should treat checkpoint performance as a first-class workload rather than an afterthought.

Measure checkpoint duration.

Measure accelerator pause time.

Measure bytes written.

Measure storage tail latency.

Measure how often checkpoints fail.

Measure time from job failure to resumed useful step.

Measure the amount of recomputation after an interruption.

Measure whether recovery changes the statistical trajectory in unacceptable ways.

Most importantly, practice recovery before a crisis.

A checkpoint that has never been restored is an assumption.

The first restore should not happen after a three-day run fails at 3 a.m.

Recovery drills are capacity tests.

They reveal whether the restart path is real.

This is a general principle of reliability engineering: an untested fallback is not capacity you own.

The final optimization is to stop thinking of checkpointing as dead time.

It is productive overhead.

Some overhead protects the usefulness of all the work around it.

A checksum costs time and protects integrity.

Replication costs resources and protects availability.

Headroom costs utilization and protects latency.

Checkpointing costs bandwidth and protects progress.

The right question is not how to drive overhead to zero.

It is whether the overhead buys more useful work than it consumes.

That is the discipline of running on full.

The machine is not full when every second is arithmetic.

It is full when the largest possible fraction of paid time turns into a durable result.

Sometimes that means stopping long enough to remember where you are.