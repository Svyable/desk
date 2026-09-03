# Running On Full

*How to Get the Most of Your AI Compute*

There is a peculiar moment in the life of an expensive machine when everybody can agree it is working and nobody can agree what it is doing.

The accelerator is allocated. The process is alive. Memory is occupied. A monitoring dashboard shows activity. The cloud bill is accumulating with admirable consistency. Somewhere in the stack, a model is technically running.

And the user is still waiting.

This is one of the central absurdities of the artificial-intelligence buildout. We are buying some of the most valuable computing equipment ever manufactured, putting it in buildings that require industrial amounts of electricity, connecting it with increasingly exotic networks, then discovering that owning arithmetic is not the same thing as getting work done.

A great deal can happen between the accelerator and the answer.

A request can wait in a queue. A processor can wait for data. A kernel can wait on memory. One accelerator can wait for another. A model can reread a prefix it has already seen a thousand times. A serving system can reserve memory for a sequence that ends early. A batch can contain work of such different lengths that part of the machine finishes first and sits around. A training job can stall because storage cannot feed it, because one worker is slower than the rest, because a checkpoint is being written, because communication has swallowed the gain from adding more devices, or because the whole thing failed two hours before the next checkpoint and must now repeat work it already paid to perform.

The expensive part may be busy during some of these failures.

That is what makes the problem treacherous.

The language of AI infrastructure encourages us to talk about capacity in units that belong to the machine: GPUs, TPUs, FLOPs, tensor operations, memory bandwidth, gigabytes, megawatts, tokens per second. They are necessary units. They are not the final unit.

The final unit belongs to the user.

Did the job finish?

Did the answer arrive soon enough?

Was it good enough to use?

Did it cost less than the value it created?

Can the system do it again tomorrow, during a traffic spike, after a worker fails, when the context gets longer, when the model changes, when a customer asks for three outputs instead of one?

The machine does not get credit for trying.

This book is about the distance between nominal compute and useful compute.

That distance is becoming more important because AI infrastructure has moved out of the phase where raw capability alone can excuse waste. When a new model does something nobody has seen before, the industry will tolerate almost any economics for a while. Researchers will run it slowly. Early customers will wait. Investors will finance oversized systems because the prize is learning what is possible. Engineers will accept inefficient code because correctness and capability come first.

Then the miracle becomes a service.

Services have queues.

Services have margins.

Services have latency targets and reliability targets and budgets. They have Monday mornings. They have bursty demand. They have customers who abandon a page if nothing happens, batch jobs that can run overnight, executives who want the same fleet to do both, and finance teams who eventually notice that a machine bought to produce intelligence spends a surprising amount of its life producing heat while waiting for something else.

The maturation of AI is therefore partly a story of learning to waste less of it.

This sounds less glamorous than another generation of larger models. It may matter almost as much.

Computing history is full of periods when improvements came not from a faster component but from learning how to keep an expensive component fed. Factories learned that buying a faster machine did little if material arrived late. Airlines learned that owning aircraft did not create profit while those aircraft sat at gates. Warehouses learned that the performance of one picker mattered less than the flow of the whole building. Databases learned that avoiding unnecessary disk access could be more valuable than making a processor faster. Distributed systems learned, often painfully, that a thousand machines create a thousand opportunities to wait for the slowest one.

AI inherits all of those lessons and adds several new ones.

The models are large enough that memory placement becomes architecture. The requests are variable enough that scheduling becomes product behavior. The output is sequential enough that the system can spend one phase ingesting a prompt and another emitting tokens one at a time, with different bottlenecks in each phase. The context can grow until the memory used to remember a conversation competes directly with the number of conversations the machine can serve. The same model can be used for a five-word classification, a two-page answer, a coding agent that runs for hours, or a batch job no human is waiting to watch.

Calling all of this "AI compute" hides more than it reveals.

The first discipline of getting more from compute is to stop treating it as one thing.

There is arithmetic capacity. There is memory capacity. There is memory bandwidth. There is communication capacity. There is host processing. There is storage and data loading. There is electrical power and cooling. There is scheduler capacity. There is demand. There is the willingness of a user to wait. There is the quality threshold that determines whether a cheaper model is good enough. Any one of these can become the constraint while the others sit underused.

The bottleneck moves.

It moves within a request. It moves as batch size changes. It moves as context length changes. It moves when the traffic pattern changes. It moves when a model is quantized. It moves when a cluster grows. It moves when a team solves the problem that was limiting them last week.

This is why utilization is such a seductive word.

Everyone wants the number to go up.

A machine that costs tens of thousands of dollars, or considerably more once it is installed in a full system, feels morally obligated to be busy. A cloud instance billed by the hour creates the same instinct. If the accelerator is at forty percent, somebody will ask why it is not at eighty. If it is at ninety, everybody feels better.

Sometimes they should.

Sometimes ninety percent means the system is doing excellent work.

Sometimes it means requests are backed up so badly that users are suffering while the machine is gloriously saturated. Sometimes it means memory is moving while tensor units are underfed. Sometimes it means a long batch job has consumed all available headroom and an interactive request is now waiting behind it. Sometimes a lower average utilization would be economically superior because it keeps tail latency low enough to retain customers. Sometimes the correct answer is to shut a machine down, not fill it with work of dubious value merely so a dashboard looks efficient.

The point is not that utilization is useless.

The point is that utilization is evidence.

It is not the verdict.

A well-run AI system begins with a harder question: what counts as useful work here?

For an offline inference job, useful work may be the number of validated outputs completed before morning at the lowest acceptable cost. For an interactive assistant, it may be a response that begins quickly, continues smoothly, meets a quality bar, and remains inside a cost budget. For model training, it may be progress toward a target loss or evaluation score per unit of time and money, not merely the number of floating-point operations executed. For an agent, the unit may be a completed task whose result survives verification, regardless of whether one run used ten thousand tokens and another used a million.

These objectives are related. They are not interchangeable.

A system optimized for maximum throughput can make a terrible interactive product. A system optimized for the fastest possible response to one request can make terrible use of a fleet. A training cluster designed to minimize time-to-result can be economically irrational if the result is not urgent. A model chosen because it wins the broadest benchmark may be wasteful when a smaller model already clears the quality threshold for most requests.

The machine cannot resolve these tradeoffs for you because they are not machine questions.

They are product questions wearing infrastructure clothes.

That is the argument underneath the technical material in this book.

Better AI efficiency is not merely a matter of better kernels, although better kernels matter. It is not merely quantization, although precision matters. It is not merely batching, caching, routing, partitioning, parallelism, checkpointing, or better networking, although we will spend plenty of time on all of them.

The largest gains often come from making the system do less unnecessary work.

Do not recompute what can be reused.

Do not send every request to the most expensive model if most requests do not need it.

Do not carry context because the product can, when the model does not need it.

Do not spread a job across more accelerators after communication has become the limiting resource.

Do not hold scarce interactive capacity idle for a batch job that could run later on cheaper machines.

Do not buy for the peak if the peak can move.

Do not optimize a component after another component has become the bottleneck.

And do not celebrate a full GPU if the user receives nothing useful from the fullness.

There is a second reason this matters now.

Demand for machine intelligence is elastic in a way that can hide efficiency gains almost as soon as engineers create them.

Make inference cheaper and people use more inference. Make context cheaper and applications carry more context. Make generation faster and products generate multiple candidates. Make coding agents less expensive and teams ask them to inspect larger repositories, run more tests, and stay on tasks longer. Improve training efficiency and researchers spend the savings on larger runs, more experiments, more data, more checkpoints, or more attempts.

This is not failure. It is what useful technology does.

But it means the goal cannot be to finish optimizing and declare compute cheap enough. There will always be a more ambitious use waiting for the next unit of capacity.

The practical advantage belongs to the operator who can turn a given physical budget into more useful intelligence than the operator next door.

That is true whether the budget is one rented accelerator or a data center.

A small developer benefits from knowing when a model is too large, when a prompt is too long, when caching will help, and when traffic is too low for elaborate batching to matter. A growing company benefits from understanding how queueing changes latency, why memory determines concurrency, why a scheduler can waste an otherwise excellent fleet, and when reserved capacity becomes cheaper than constantly buying urgency. A large operator benefits from all of the same ideas at a scale where small percentages become buildings.

The scale changes.

The physics does not become polite.

Data still has to move. Memory is still finite. Networks still have latency. Power still has limits. Failures still happen. Work still arrives at inconvenient times. Some tasks still deserve the best model available and many do not. A system that is efficient at one traffic level can become wasteful at another.

There is no single configuration called optimized.

There is only a configuration optimized for a workload, a service level, a price, and a moment in the life of the hardware and software.

That can sound discouraging. I think it is the opposite.

It means a great deal of AI progress remains available without waiting for the next chip.

The accelerator you already have can often do more useful work if you understand what is starving it, what is crowding its memory, what is forcing requests to wait, what can be cached, what can be compressed, what can be routed elsewhere, what can be scheduled later, and what should never have been sent to the expensive path in the first place.

You can buy more compute.

Sometimes you should.

But before buying another machine, it is worth finding out whether the machines you already own are actually full.
