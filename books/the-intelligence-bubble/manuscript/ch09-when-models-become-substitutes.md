# When Models Become Substitutes

A moat that can be crossed with an API key is not much of a moat.

This sounds glib. It is also a useful provocation.

The early frontier-model market encouraged a winner-take-all imagination. Training costs were enormous. Research talent was concentrated. Benchmark leadership moved in visible leaps. The best model seemed to possess a gravitational pull: developers would build on it, users would prefer it, revenue would fund more compute, more compute would fund better models, and the loop would widen the lead.

That dynamic can exist.

But another loop exists too.

Models imitate one another's useful features. Techniques diffuse. Researchers move. Distillation compresses capabilities. Open models improve. Hardware becomes more accessible. Customers demand portability. Middleware makes switching easier. The leader's innovations become the market's expectations.

The frontier advances while the distance between adequate substitutes shrinks for many tasks.

**Six Models Walk Into a Procurement Meeting**

By early 2026, the frontier had become crowded enough to change the nature of competition.

Stanford's 2026 AI Index noted that several leading developers were clustered tightly in human-preference ratings. The exact leaderboard will change; that is almost the point. When multiple suppliers occupy the top tier, the buyer's conversation shifts.

The procurement committee no longer asks only:

Which model is smartest?

It asks:

Which model is reliable enough for this workflow?

Which provider gives us the best contractual protections?

Which one can process our data where we need it processed?

Which one has the latency profile our application requires?

Which one lets us route overflow elsewhere?

Which one will still answer our phone during an incident?

Which one is cheapest at our volume?

Which one can we replace without rebuilding the product?

Technical competition has become commercial competition.

That is a crucial transition.

A single frontier leader can behave like the owner of a scarce resource. A cluster of near-frontier suppliers behaves more like a market.

The difference between first and fourth place can remain scientifically fascinating while becoming economically less decisive for many ordinary tasks.

This is how commoditization often begins—not when products become identical, but when the buyer can credibly threaten to switch.

**The Benchmark Mirage**

Benchmarks are necessary because without measurement we are left with vibes.

Benchmarks are dangerous because what is measured becomes a proxy for what matters.

A model can score higher on a reasoning benchmark and still be worse for a particular enterprise because it is slower, more expensive, harder to govern, less predictable, or unavailable in the required jurisdiction.

The buyer's objective function is rarely “maximize leaderboard score.”

It is closer to:

Achieve acceptable quality, under latency constraints, at predictable cost, with auditability, security, uptime, integration, and legal terms we can live with.

Once multiple models cross the acceptable-quality threshold, the purchasing conversation changes.

The buyer stops asking which model is smartest.

The buyer asks which supplier offers the best package.

That is the beginning of substitution.

**The Router in the Middle**

Imagine an enterprise software team building an AI assistant for thousands of employees.

The first prototype uses one frontier model because that model was best when the project began. Engineers tune prompts around it. Procurement negotiates a volume agreement. Security approves the vendor. The application launches.

Six months later, a second model becomes good enough for most of the workload at a materially lower price.

The team does not hold a philosophical debate about which lab deserves to win.

It builds a router.

Difficult requests go to the premium system.

Routine summaries go to the cheaper model.

Sensitive classifications run on a private model inside the company's environment.

A small local model handles trivial transformations that never needed frontier intelligence in the first place.

The product still feels like one assistant to the employee.

Underneath, the economic architecture has changed completely.

This is what happens when buyers become sophisticated.

Early in a technology cycle, the customer asks a vendor to solve a capability problem.

Later, the customer manages a portfolio of suppliers to solve an economics problem.

The routing layer can measure quality by task, latency, failure rate, data jurisdiction, and price. It can retry a request on another provider. It can reserve the most expensive model for the tiny fraction of work where the quality difference matters.

The model company experiences this as pressure on mix.

The enterprise experiences it as procurement maturity.

The distinction matters because aggregate usage can keep rising while the premium supplier loses share of the easy work.

This is familiar from other industries. Airlines separate premium cabins from economy seats. Cloud customers reserve expensive instances for workloads that require them and move batch jobs to cheaper capacity. Semiconductor buyers use top-end chips where performance matters and mature components where it does not.

AI will be no different once customers learn the shape of their own demand.

The routing layer also weakens one of the most powerful early stories in AI: that the smartest general model automatically owns the entire application.

It may own the hardest five percent.

The other ninety-five percent can become a price war.

**The Weekend Test**

Here is a practical test for model-layer defensibility:

> If a competent engineering team can switch a meaningful portion of the workload to another model over a weekend, the model is not the moat for that workload.

The weekend is figurative. Some migrations take longer. Regulated systems require validation. Prompt behavior differs. Tool calling differs. Evaluations need to be rerun. Fine-tunes may need rebuilding.

The point is economic.

Switching cost must be high enough to protect pricing power.

If a routing layer can send routine requests to a cheaper model and hard requests to a premium one, the customer can arbitrage suppliers continuously. Model providers become components in a portfolio.

This is excellent architecture for the customer.

It is terrifying architecture for the commodity supplier.

**Open Weights Change the Negotiation**

Open-weight models do not need to dominate every benchmark to influence economics.

They need only be credible enough to create an outside option.

An enterprise negotiating with a proprietary provider can say: for our classification, extraction, summarization, and internal search workloads, we can deploy an open model privately. Maybe it is slightly worse. Maybe it requires more operations work. But it exists.

That alternative caps price.

This is a recurring pattern in enterprise technology. Open-source databases, operating systems, and developer tools often captured less direct revenue than proprietary leaders while exerting enormous downward pressure on pricing and forcing vendors to move value into managed services, support, integration, security, and ecosystems.

AI may do the same.

The model weights become cheaper.

The trusted operating environment becomes valuable.

**Convergence Does Not Mean Equality**

The commoditization argument is often attacked with an obvious observation: frontier models are not identical.

Correct.

Commoditization does not require equality.

Airlines are not identical, yet many routes are price competitive.

Cloud providers are not identical, yet workloads can be portable enough to create bargaining power.

Processors are not identical, yet standardized software layers can weaken architectural lock-in.

Law firms are not identical, yet routine legal work is far more substitutable than Supreme Court advocacy.

The important question is what percentage of demand requires the frontier.

If 10 percent of tasks require the best model and 90 percent can use something cheaper, the premium provider may remain indispensable while losing a large share of commodity volume.

This is the same way luxury survives in a world of mass production.

Scarcity retreats upward.

**Reliability Can Be a Moat**

This chapter is not an argument that model providers cannot build durable businesses.

They can.

But the moat may not be raw intelligence.

A provider can differentiate through reliability, security, privacy, compliance, service quality, predictable behavior, low latency, geographic availability, developer tooling, fine-tuning infrastructure, proprietary data partnerships, or a superior agent runtime.

In other words, the model company becomes more defensible as it becomes less like “a model company.”

It wraps intelligence in a system customers do not want to replace.

That is the pattern to watch.

**The Model as Ingredient Brand**

A useful analogy is the ingredient brand.

Consumers buy laptops, not CPUs in isolation, but the CPU brand can influence the purchase. Clothing may use a branded fabric. Food may advertise a particular sweetener or protein. A component can retain value by becoming a signal of quality inside a larger product.

Frontier model brands may evolve this way.

An enterprise software company can advertise that a demanding feature is powered by a premium model while routing routine work elsewhere. The model provider earns a share of value on tasks where its name or performance matters.

But ingredient brands generally capture less of the total surplus than vertically integrated platform monopolies.

That distinction matters for valuation.

**The Substitution Frontier**

Every year, draw a line across the AI workload landscape.

Above the line are tasks for which only the best few systems are adequate.

Below the line are tasks for which many systems are good enough.

As models improve, the line moves.

Counterintuitively, frontier progress can expand the commoditized region because yesterday's frontier capability becomes today's baseline.

The frontier company must keep running to remain scarce.

Its customers can stand still and become cheaper.

That is a structurally difficult position unless the frontier advantage compounds into something beyond model quality.

If it does not, the value migrates.

Which brings us to the question that matters most:

Where do the moats go?
