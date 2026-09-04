# Speculate

The next token does not always need to be discovered one token at a time.

Sometimes it can be guessed.

Then checked.

That is the basic intuition behind speculative decoding, and it captures a broader systems idea that appears far beyond language models.

Prediction can be cheaper than waiting.

A large model is expensive to run autoregressively because generation is sequential. The model produces a token, then consumes that token to produce the next one, then repeats. Each step depends on the previous step. In many serving regimes, especially at lower batch sizes, the expensive model can spend much of its time moving weights and state for one small unit of progress.

The dependency is real.

But the system can sometimes get ahead of it.

A smaller or otherwise cheaper draft mechanism proposes several future tokens.

The large model then evaluates those proposed tokens in a more parallel verification step.

If the guesses are accepted, the system advances several tokens while invoking the expensive model fewer times than ordinary one-token-at-a-time decoding would require.

If a guess is rejected, the large model corrects the path and generation continues.

The draft is allowed to be wrong because verification is authoritative.

That is what makes speculation powerful.

It trades cheap extra work for fewer expensive sequential steps.

This is not free speed.

The draft model consumes compute.

Verification consumes compute.

Rejected guesses consume work without directly becoming output.

Additional state and coordination may be required.

At high enough throughput, the extra work can interfere with batching or make the system slower.

The gain depends on acceptance rate, workload, hardware, serving engine, sampling configuration, model pair, and traffic shape.

Speculative decoding is therefore not a universal optimization.

It is a bet on predictability.

When the draft is often right, the bet pays.

When it is often wrong, the system spends money being imaginative about tokens that never survive.

This is a useful way to think about speculation in general.

A speculative system performs work before certainty arrives because waiting for certainty would leave an expensive resource underused or extend the critical path.

The system gains when the cost of occasionally doing unnecessary work is lower than the cost of repeatedly waiting.

Processors do this with branch prediction.

Storage systems prefetch data.

Browsers preload likely resources.

Databases execute optimistically.

Networks transmit ahead of acknowledgement windows.

Schedulers start work based on expected capacity.

AI serving can guess future tokens.

The pattern is older than AI because latency has always created opportunities for prediction.

The hard question is where to speculate.

Speculation is most attractive when four conditions hold.

First, the expensive operation is sequential or latency-bound.

Second, a cheaper predictor exists.

Third, the prediction can be verified before becoming an irreversible result.

Fourth, wrong guesses are affordable.

Remove any one of those and speculation can become dangerous or pointless.

Consider the difference between drafting tokens and sending emails.

A draft token can be rejected with no external consequence.

An email cannot be unsent simply because a stronger model later disagrees with the draft model.

Speculation is easy when side effects are private.

It is harder when guesses escape into the world.

This is why verification boundaries matter.

The same architecture that is safe inside a decoder can be reckless inside an agent.

An agent might speculate about which tools it will need and prepare requests in parallel.

That can be useful if the tools are read-only.

It can be disastrous if speculative calls modify state.

The system needs to distinguish reversible work from irreversible work.

Compute can be speculative.

Consequences should usually wait for confirmation.

This gives us a broader rule for AI infrastructure:

Speculate aggressively on internal state.

Commit conservatively at side-effect boundaries.

That rule can make agent systems faster without making them chaotic.

Suppose an agent is answering a question that may require three independent sources.

A sequential design searches source A, reads it, decides whether source B is needed, searches B, reads it, then decides about C.

A speculative design may begin likely searches in parallel after the initial plan.

Some searches turn out unnecessary.

The system paid for extra tool calls.

The answer arrives sooner.

Whether that is a win depends on the price of the tools, latency sensitivity, rate limits, and the probability those calls are useful.

This is speculative execution at the workflow level.

The same mathematics is hiding underneath.

What is the expected cost of guessing?

What is the expected latency saved when the guess is right?

What happens when the guess is wrong?

The right optimization can change as traffic changes.

At low QPS, a model server may have spare compute but poor single-request latency. Speculation can turn unused arithmetic into lower latency by doing more parallel verification work.

At high QPS, the same server may already be efficiently batched. Extra speculative work competes with real requests. Throughput can become the scarce resource.

An optimization designed for idle capacity becomes a tax under saturation.

This is why current serving systems increasingly treat speculative decoding as workload-sensitive rather than simply on or off.

The relevant question is not:

Is speculation faster?

It is:

Under what traffic regime does speculation increase useful work or reduce user-visible latency without consuming more of the bottleneck than it saves?

That sentence could describe almost every optimization in this book.

Speculation is another resource trade.

Acceptance rate is the obvious metric, but it is not sufficient.

A draft method with a very high acceptance rate can still be unattractive if producing the draft is expensive.

A cheaper method with a lower acceptance rate may win because the wasted guesses cost almost nothing.

The number of tokens proposed at once matters too.

Propose too few and the system captures little parallelism.

Propose too many and more guesses are likely to diverge, verification grows, and wasted work increases.

The optimum depends on how predictable the continuation is.

Predictability itself changes by task.

Code completion can have long locally predictable stretches.

Highly creative prose may branch more.

Structured formats can constrain possible next tokens.

Repeated boilerplate can be extremely predictable.

A user's unique reasoning request may be less so.

The same draft strategy can therefore behave differently across a product's traffic mix.

This suggests routing speculation just as we route models.

Do not apply the optimization because the feature exists.

Apply it when the request is likely to benefit.

The request classifier becomes part of infrastructure again.

This is one of the central changes in modern AI serving: the runtime is becoming adaptive.

It does not merely execute a fixed model graph.

It chooses batch composition.

It chooses cache admission.

It chooses which model to invoke.

It may choose quantization mode, parallelism degree, context handling, and speculative strategy.

The serving engine is becoming an operating system for probabilistic work.

Speculation fits naturally into that operating system because it converts uncertainty into a scheduling option.

There is a beautiful asymmetry in speculative decoding.

The draft can be weaker than the target model and still accelerate it because the draft is not trusted with correctness.

Its job is not to know the answer.

Its job is to be cheap and often unsurprising.

This is an important design lesson.

Not every component in an AI system needs to be intelligent enough to make the final decision.

Some components only need to reduce the search space for a stronger component.

A cheap reranker can filter candidates before an expensive verifier.

A heuristic can reject obviously irrelevant documents before model scoring.

A small model can classify requests before routing them.

A cache key can recognize repeated work before inference.

A draft model can propose tokens before verification.

Weak components can create strong-system efficiency when they sit in the right place.

The mistake is asking the cheap component to be authoritative.

Authority should follow error cost.

This mirrors human organizations.

A junior process can triage.

A senior process can decide the rare hard case.

The system becomes efficient because expensive judgment is reserved for where it matters.

In compute terms, speculation is a cascade across time rather than across requests.

The cheaper model runs ahead.

The expensive model decides how much of that future to keep.

This raises a useful question about model design.

Should a model be trained not only to answer well, but to be easy to speculate around?

If a target model has auxiliary prediction heads or supports multi-token prediction, the architecture can expose future-token guesses more directly. The line between “draft model” and “target model” becomes less rigid. Speculation can be built into the model rather than bolted onto serving.

Again, architecture becomes infrastructure.

A model that exposes cheap future predictions can change the economics of decode.

The serving stack needs to know how to use them.

The hardware needs to execute the verification pattern efficiently.

The scheduler needs to decide when the extra work is worthwhile.

An architectural idea becomes a fleet behavior.

This is also why speculative decoding should not be described with one universal speedup number.

Published systems can report impressive gains in particular settings.

Those settings matter.

Low or medium QPS can behave differently from saturated throughput.

Draft-model compatibility matters.

Sampling settings matter.

Sequence length matters.

Hardware matters.

Framework implementation matters.

Batch interaction matters.

The honest claim is conditional:

Speculative decoding can reduce inter-token latency or improve serving efficiency when draft generation and verification cost less than the sequential target-model work they replace.

That sounds less dramatic than a multiplier.

It is much more useful.

The same honesty should govern speculation elsewhere.

Prefetching can reduce latency when predictions about future data are good.

Over-prefetching can evict useful cache entries and waste bandwidth.

Starting cloud capacity early can reduce queueing risk.

Starting too early wastes rental time.

Replicating likely tool calls can hide tail latency.

Replicating every tool call doubles cost and load.

Speculation is not the opposite of efficiency.

Uncontrolled speculation is.

The operator needs a budget for wrong futures.

One way to express that budget is expected wasted work.

If the system spends five units of cheap work to save one unit of expensive work, the trade can be excellent.

If it spends five units of the bottleneck resource to save one unit of something abundant, the trade is bad.

The resource type matters more than the operation count.

This is why spare arithmetic can be used to reduce memory-bound latency.

The GPU may have compute units available while memory movement determines token rate. Speculative verification can increase the amount of arithmetic performed per large-model pass and sometimes make better use of the device.

More FLOPs can make the product faster.

That sentence sounds contradictory only if FLOPs are the objective.

They are not.

Useful progress is the objective.

This is a recurring lesson in systems optimization: doing more total work can reduce wall-clock time if the additional work uses otherwise idle resources or removes a serial dependency.

Replication does this.

Caching does this.

Redundant reads sometimes do this.

Hedged requests do this.

Speculative decoding does this.

Efficiency is not always minimal work.

It is minimal constrained cost for the required result.

There is a reliability implication too.

Speculation needs a clean fallback.

If the draft mechanism is unavailable or performing poorly, the target model should still be able to decode normally. An optimization that makes the base path fragile can erase its own benefit.

Optional acceleration is powerful because it can fail open into correctness.

The ideal speculative system treats the draft as an accelerator, not a dependency for validity.

This is one reason the verification model remains authoritative.

The system can abandon speculation when acceptance collapses.

It can disable a draft model during an incident.

It can route incompatible requests to ordinary decoding.

Graceful degradation preserves goodput.

That is a publication-worthy distinction because AI performance discussions often celebrate the best path and ignore the fallback path.

Production spends real time in fallback paths.

A mature system measures both.

What percentage of requests speculate?

What is the acceptance distribution?

How much target-model work is avoided?

How much draft work is added?

What happens to first-token latency?

What happens to inter-token latency?

What happens to throughput under saturation?

What happens to memory?

What happens to batch size?

What happens when the traffic mix changes?

If the answer is only “the demo felt faster,” the system is not ready.

Speculation also forces a useful philosophical correction.

Prediction is not valuable because it is correct.

Prediction is valuable when acting on it has positive expected value.

A draft model can be wrong often enough to be embarrassing as a standalone model and still be useful as a speculation engine if its correct guesses are cheap and its mistakes are harmless.

Infrastructure cares about utility, not pride.

This is one of the reasons AI systems can benefit from components that would look unimpressive on leaderboards.

The leaderboard asks whether the component is good by itself.

The system asks whether the component makes the expensive path cheaper.

Those are different questions.

The broader future of AI compute will contain more of this kind of conditional work.

Draft before verify.

Cache before recompute.

Route before escalate.

Retrieve before stuff everything into context.

Prefetch before wait.

Checkpoint before fail.

Schedule before provision.

The machine becomes efficient by making cheap predictions about which expensive work will matter.

The final discipline is knowing where prediction must stop.

Do not speculate across an irreversible boundary without a transaction model.

Do not let a weak draft determine a high-stakes answer without verification.

Do not spend bottleneck capacity on guesses merely because spare capacity existed yesterday.

Do not treat one workload's acceptance rate as a law of nature.

Speculation works because it is conditional.

So should the decision to use it.

Running on full sometimes means keeping every expensive resource busy.

Sometimes it means letting a cheaper resource run ahead and asking the expensive one to approve the future in batches.

The machine gets faster by guessing carefully.