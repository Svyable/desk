# Precision Is a Product Decision

A number does not need thirty-two bits because thirty-two bits are morally correct.

It needs enough precision to preserve the behavior the product depends on.

That sounds like a technical distinction. In AI infrastructure it is an economic one.

Every extra bit has somewhere to live.

It occupies memory. It travels through memory buses. It crosses interconnects. It may change which arithmetic units the accelerator can use at full speed. It affects how many model weights fit on a device, how many replicas fit in a server, how much room remains for KV cache, and sometimes how many GPUs a model requires at all.

Precision is therefore not merely a numerical format.

It is capacity.

The history of machine learning has already moved through several precision regimes. Researchers once treated full-precision floating point as the safe default because it made optimization easier to reason about and hardware made it convenient. Then mixed-precision training showed that much of the computation could be performed with fewer bits while preserving the numerical behavior needed for successful training, provided the sensitive parts were handled carefully. Inference pushed further. Model weights, activations, and caches began appearing in increasingly compact representations as hardware and software learned to support them.

The temptation is to tell this story as one long march toward smaller numbers.

That would be too simple.

Lower precision is useful because it can make the same physical machine behave like a larger one. It is dangerous because the thing being compressed is not a JPEG whose quality can be inspected by eye. It is part of a statistical system whose errors can appear unevenly across tasks.

A model can look unchanged on the average benchmark and fail differently on the edge case that matters to your product.

That is why precision is a product decision.

Start with the physical advantage.

Suppose a model's weights occupy one hundred and sixty gigabytes in one representation and eighty in another. The second representation may change the deployment from multiple accelerators to fewer accelerators. Even when the model already fits on one device, reducing weight memory can leave more room for concurrent request state. Less data may need to move from memory for each operation. Hardware that has much higher throughput for lower-precision arithmetic can execute supported operations faster.

One change can attack memory capacity, memory bandwidth, arithmetic throughput, and deployment density at the same time.

This is why quantization has such large appeal in inference stacks.

NVIDIA's TensorRT-LLM, like other modern inference frameworks, supports several lower-precision and quantized formats because no serious serving system wants to leave those tradeoffs inaccessible. The exact menu changes with hardware and software. The principle is stable: use fewer bits where the model can tolerate fewer bits.

The phrase where the model can tolerate them is doing a great deal of work.

Not every layer is equally sensitive.

Not every task is equally sensitive.

Not every model family behaves the same way.

Not every format is equally well supported by the target accelerator.

An operator who treats quantization as a checkbox can create a system that is wonderfully efficient at producing subtly worse answers.

The difficult part is that worse does not always look like lower benchmark accuracy.

A model can remain fluent while becoming less reliable on arithmetic. It can preserve average quality while losing calibration. It can remain good at ordinary summarization and become less dependable on structured output. It can fail more often on rare languages, unusual syntax, long contexts, tool-use decisions, or a narrow domain that barely affects a broad evaluation suite.

If the product depends on one of those behaviors, the broad average is not enough.

This is where infrastructure and evaluation stop being separate departments.

The infrastructure team wants to know how many bits can be removed.

The product needs to know which mistakes appear after they are removed.

The only honest answer comes from evaluating the actual work.

Take the production task distribution.

Run the candidate representation.

Measure success at the task level.

Include the ugly cases.

Include long prompts if the product has them. Include tool calls if the product has them. Include structured outputs. Include languages that matter. Include the rare safety or policy decision where a false positive or false negative has disproportionate cost.

Then measure the infrastructure gain.

How much memory was released?

How did throughput change at realistic batch sizes?

How did time to first token change?

How did inter-token latency change?

Did the model fit on fewer devices?

Did more requests fit concurrently?

Did power consumption change?

Did the quantized kernels actually run efficiently on the hardware in production, or did an unsupported operation force conversions that gave back part of the gain?

A precision choice is good only if both sides of the ledger work.

This is one reason vendor feature lists should be treated as capability maps rather than guaranteed savings.

A framework can support a format.

The workload still decides whether that format helps.

The model may contain operations that remain at higher precision. Some layers may need exemptions. Quantization may reduce weight bandwidth while leaving KV-cache memory untouched. A smaller weight footprint may enable larger batches, which then move the bottleneck to compute. A more compact cache may increase concurrency until scheduler overhead becomes the limiting factor.

Efficiency is always an invitation to meet the next bottleneck.

The same logic applies to training.

Lower precision can make training dramatically faster and more memory-efficient, but training has additional numerical sensitivities because tiny errors are being accumulated through optimization rather than merely used to generate one forward pass. Mixed-precision techniques keep some values or operations in higher precision, use scaling or other numerical safeguards, and exploit lower-precision hardware where it is safe.

This is not compromise in the pejorative sense.

It is resource allocation inside the number system.

Spend precision where precision changes the result.

Do not spend it where the result survives without it.

That is exactly the same philosophy we used for model routing in the previous chapter.

The strongest model should be reserved for the requests that need it.

The highest precision should be reserved for the operations that need it.

AI efficiency improves when capability is not distributed uniformly out of habit.

There is a second form of precision that matters just as much: output precision.

Products often ask models to do more work than the user requires because the cost is hidden inside an apparently simple interface.

A forecasting system may produce six decimal places when the underlying uncertainty makes the fourth meaningless. A retrieval system may compute a highly accurate ranking of a thousand candidates when the product displays ten. A generative system may sample several alternatives and discard all but one. An agent may repeatedly refine a plan that was already good enough for the next action.

Numerical precision and product precision share the same question.

How exact does this need to be?

Engineers are trained to avoid unnecessary numerical error. Good. But products also need to avoid unnecessary numerical work.

If a customer needs a category, do not compute a dissertation.

If a downstream system needs the top five candidates, do not optimize the ordering of the bottom five thousand unless that ordering serves another purpose.

If an answer will be reviewed by a human who only needs a draft, the model does not need to spend expensive inference producing polished final prose on the first pass.

This is why the title of this chapter reaches beyond data types.

Precision is a product decision whenever the system can trade resource use against closeness to an ideal answer.

The dangerous response is to turn that principle into an excuse for sloppiness.

"Good enough" is meaningful only after good has been defined.

A medical dosage is not a place to discover that two significant figures were plenty. A financial system can make tiny numerical errors economically material when they are repeated at enormous scale. A structured API may need exact syntax even when a human would forgive a small formatting difference. A model used to judge whether another model's output is safe may need more capability and numerical fidelity than the end-user task itself appears to require.

The acceptable error depends on consequence.

That is why quality belongs in the efficiency equation.

An optimization that halves infrastructure cost while doubling the rate of expensive failures may be a loss. An optimization that changes no meaningful product outcome and cuts memory by a quarter is the kind of gain operators should pursue aggressively.

This is also where quantization interacts with model size in a non-obvious way.

A larger quantized model may outperform a smaller full-precision model at similar memory cost. A smaller model may remain cheaper because it has fewer parameters to move even before quantization. A model that fits on one accelerator after quantization may avoid inter-device communication and therefore gain more than the weight reduction alone would suggest.

The comparison should be empirical.

Model family, precision, hardware, batch size, context distribution, and quality target form one deployment choice.

Do not optimize them one at a time if the product can afford to test combinations.

The same applies to KV-cache precision.

Long-running generations can devote a large share of memory to cached attention state. Reducing the precision of that state can create concurrency. But the resulting quality effect can depend on architecture, sequence length, and task. A cache format that is excellent for one model and context range may not transfer neatly to another.

Again, the gain is not that a smaller number exists.

The gain is that the smaller number frees a scarce resource without harming useful work.

There is an organizational lesson here.

Infrastructure teams often have excellent measurements of throughput and weak measurements of quality. Product teams often have excellent opinions about quality and weak measurements of throughput. Quantization forces the two groups to meet.

That meeting is healthy.

Every major compute optimization eventually does the same thing.

Batching asks how much latency the product can tolerate.

Caching asks which context repeats.

Routing asks which tasks need the strongest model.

Precision asks which numerical fidelity the product actually needs.

Scheduling will ask which work deserves priority.

These are not purely technical questions because the technical system exists to deliver a service, not to maximize a hardware counter.

One practical way to keep the discussion honest is to maintain a small set of deployment candidates rather than declare one precision globally correct.

A latency-sensitive path may use a lower-precision configuration that has been heavily validated on a narrow task.

A high-stakes path may retain more precision and a stronger model.

An offline batch job may tolerate a representation that trades a small amount of quality for a large reduction in cost, provided downstream verification catches the errors that matter.

A research path may stay conservative because reproducing subtle training behavior is more important than squeezing maximum throughput from the hardware.

The machine does not require ideological consistency.

It requires compatible kernels.

The business requires useful outcomes.

Precision is one of the cleanest places to see what running on full really means.

A naive system treats every bit as equally valuable.

A mature system asks which bits are carrying information the product cannot afford to lose.

Everything else is potential capacity.