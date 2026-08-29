# The Trillion-Dollar Spreadsheet

On January 29, 2025, Meta announced that some of its servers had acquired another year of life.

Nothing physical had happened to them.

The chips had not become faster. The cooling system had not improved overnight. No engineer had replaced a rack. Meta had reassessed the estimated useful life of certain servers and network assets and increased it to five and a half years.

The company estimated that the change would reduce 2025 depreciation expense by about $2.9 billion on equipment already in service at the end of 2024.

That sentence belongs in an earnings release, not a scandal.

Companies are required to estimate how long assets will remain economically useful. Those estimates can change as maintenance improves, workloads move, software extracts more work from older hardware, and management learns how long equipment can remain productive.

The disclosure is interesting for a different reason.

A large part of the AI investment case eventually passes through a cell in a spreadsheet that somebody has to estimate.

The physical buildout from the previous chapter arrives on financial statements as property and equipment, leases, depreciation, operating expense, commitments, and cash outflows. A single campus can contain concrete expected to last decades, networking gear expected to last years, and accelerators whose competitive value may change with each hardware generation.

Accounting has to turn those different clocks into numbers reported every quarter.

Investors, meanwhile, do not own a pile of GPUs. They own claims on future cash flows.

Suppose a company spends $6 billion on equipment with no expected salvage value. If it depreciates the fleet evenly over six years, the annual expense is $1 billion. Over four years, it is $1.5 billion.

The company spent the same $6 billion either way.

What changes is when the cost reaches reported earnings.

The arithmetic is simple because the economic life is not.

A server remains valuable only while it can do useful work at a competitive cost. A six-year-old machine may still function perfectly and be economically unattractive because newer hardware performs far more work per watt. Or it may remain profitable because demand is high, software improves its throughput, and the machine has already been largely depreciated.

This is why useful-life assumptions deserve attention without turning them into conspiracy evidence.

Alphabet generally depreciates servers and network equipment over six years. Its investor materials say those estimates are reviewed for technological obsolescence, planned use, and utilization.

Those words are accounting language for the questions this book has been asking all along.

How quickly does the technology improve? How busy is the asset? What can it still earn?

Microsoft faced the same issue directly in January 2026.

During its fiscal second-quarter earnings call, an analyst pointed to a potential mismatch: servers were being capitalized over six years, while Microsoft's average commercial remaining performance obligation lasted about two and a half years.

What happens if the customer contract ends before the accounting life of the hardware?

Chief Financial Officer Amy Hood answered that the average duration blended several businesses and said that much of Microsoft's deployed capital, including many GPUs, was contracted for most or all of its useful life. For some large customers, she said GPU contracts covered the full useful life of the equipment.

Satya Nadella added the engineering case. Software improvements can make older fleets more productive, and newer models do not have to run exclusively on the newest chips.

That is serious counterevidence to a lazy depreciation argument.

If expensive equipment is contracted, heavily utilized, and made more productive through software, a long useful-life estimate may accurately reflect cash-generating value.

The remaining question is how broadly those conditions hold.

Microsoft's own spending shows why one capex number cannot answer it.

In its fiscal third quarter of 2026, the company reported $31.9 billion of capital expenditure. Roughly two thirds went to short-lived assets, primarily GPUs and CPUs. The remainder went to longer-lived assets, including data-center infrastructure intended to support monetization for fifteen years or more.

Those are not the same investment hidden under different accounting labels.

A data-center shell can survive several generations of processors. A substation can outlive the model family that caused it to be built. The accelerator inside the building has a shorter competitive clock.

The return on the campus therefore depends on a sequence of replacements, upgrades, and workloads rather than the first batch of equipment alone.

The scale of that sequence is now reaching the cash-flow statement.

Microsoft reported about $115.9 billion of additions to property and equipment in fiscal 2026, up from about $64.6 billion in fiscal 2025. Depreciation, amortization, and other noncash adjustments in the operating cash-flow reconciliation were about $38.5 billion.

Those numbers should not be subtracted and labeled “AI spending.” Microsoft's property and equipment support many businesses, and the cash-flow adjustment includes more than depreciation.

The direction still matters.

Assets are entering the balance sheet far faster than the expense from earlier investment is flowing through reported earnings.

That is normal during a buildout.

It also means the buildout creates future expense before investors know how profitable the new capacity will be.

Alphabet described the same pressure in early 2026. Its depreciation expense rose from $15.3 billion in 2024 to $21.1 billion in 2025. Management expected depreciation growth to accelerate in 2026 as prior capital spending entered service. About 60 percent of 2025 technical-infrastructure investment went to servers; the remaining 40 percent went to data centers and networking equipment.

Again, there is no single AI asset.

There is a portfolio of clocks.

Depreciation is therefore useful and insufficient.

The income statement tells us how an accounting cost is recognized. It does not tell us whether the underlying investment earns an adequate return.

For that, utilization matters.

Imagine two identical accelerator fleets. One is busy almost continuously serving paid workloads. The other spends long stretches idle. They can have the same purchase price, the same depreciation schedule, and completely different economics.

This is one of the hidden variables in the current buildout.

Cloud providers do not publish a clean fleet-wide GPU utilization number. Even if they did, one average would mix training, inference, internal research, first-party products, third-party customers, latency reserves, and capacity held for strategic reasons.

So outsiders have to work indirectly.

Contracts matter. Capacity constraints matter. Revenue growth matters. Margins matter. The speed with which new capacity begins earning revenue matters.

Microsoft said in April 2026 that it remained capacity constrained while spending heavily on short-lived compute. It also said the infrastructure supported Azure, Microsoft 365 Copilot, GitHub Copilot, internal development, and research.

That breadth makes the return difficult to isolate.

Some compute is sold directly. Some supports a subscription whose price is not expressed per GPU-hour. Some helps defend an existing product. Some is effectively research. Some capacity may have option value simply because being unable to serve a strategic customer would be worse than carrying spare capacity.

A spreadsheet can allocate every rack to a business line.

Reality is less cooperative.

Margins provide another clue, but they bring the same problem.

AWS generated $42.2 billion of revenue and $16.6 billion of operating income in the second quarter of 2026. Microsoft Cloud reported a 66 percent gross margin for fiscal 2026 even as management said AI infrastructure investment and AI usage were pressuring that margin.

Those numbers matter because they show that the largest builders are not standing on top of an infrastructure base that has failed to monetize.

They do not isolate the return on the next dollar of AI capital.

AWS contains a broad cloud business. Microsoft Cloud contains mature products as well as newer AI workloads. Existing assets bought under different cost structures can produce excellent average economics while the next gigawatt earns a weaker return.

Average economics and marginal economics are different questions.

The reverse is also possible.

Newer hardware may perform so much more useful work per watt that higher purchase prices still produce better unit economics. Better scheduling can raise utilization. New applications can pull more workloads onto the platform. The next campus may be more productive than the old one rather than less.

This is why gross margin alone cannot settle the capital-cycle argument.

The cash-flow statement gives a harsher view of timing.

At the end of the second quarter of 2026, Amazon's trailing twelve-month free cash flow was negative $7.6 billion. The company attributed the decline primarily to a $66.1 billion year-over-year increase in property-and-equipment purchases, net of proceeds and incentives.

Placed next to AWS's operating profit, the numbers look almost contradictory.

They are not.

Amazon can run a highly profitable cloud business and simultaneously spend more cash on future infrastructure than the current business produces in free cash flow.

The cash leaves before the return is known.

If demand arrives at attractive margins, the outflow becomes the bridge to larger future profits. If pricing weakens, utilization disappoints, or hardware ages faster than assumed, the same capex becomes the evidence later used to explain poor returns.

The cash-flow statement records the bet before the outcome.

Meta's useful-life change shows the other side of the timing problem.

Extending estimated asset life reduced the depreciation expense expected from equipment already in service. By the second quarter of 2026, however, Meta's quarterly depreciation and amortization had risen to about $6.36 billion from $4.34 billion a year earlier. Its operating margin had fallen to 31 percent from 43 percent while total costs and expenses rose sharply.

Many things affected that margin. It would be wrong to assign the change to depreciation alone.

The narrower point survives.

Changing an estimate can alter when expense appears. It cannot make a capital-intensive business costless. As successive investment waves enter service, depreciation accumulates.

The spreadsheet catches up with the construction site.

Then pricing moves, and the spreadsheet has to change again.

On July 30, 2026, OpenAI cut the API price of GPT-5.6 Luna by 80 percent and GPT-5.6 Terra by 20 percent after efficiency improvements. Luna moved to $0.20 per million input tokens and $1.20 per million output tokens. Terra moved to $2 and $12.

That is a useful reminder that the revenue line is not fixed while the capex is being depreciated.

A static model reads a lower unit price as less revenue.

A dynamic market may behave differently.

Cheaper intelligence can make new uses economic. Developers can run more agents, process more documents, invoke models more often, and apply AI to tasks that were not worth automating at the old price.

If volume rises faster than price falls, total revenue can grow.

If serving costs fall faster than price, margins can improve.

If competitors cut price faster than costs decline, margins can compress even while usage explodes.

The same price cut can belong to several financial futures.

That is why capital expenditure divided by “AI revenue” is an appealing ratio and a dangerous conclusion.

The numerator mixes assets with different lives and uses. The denominator is just as slippery.

A customer paying for an API call is easy to classify. A Microsoft 365 subscriber who renews partly because Copilot improves the product is harder. An advertiser whose campaign performs better because a ranking model improves may never appear in an AI revenue disclosure. An AWS customer running machine-learning workloads on general infrastructure can create AI-related economics without buying a product labeled AI.

The ambiguity can be abused by both sides.

Optimists can attribute too much existing revenue to AI. Skeptics can demand a stand-alone revenue line for investments whose value appears inside broader products.

Labels do not solve the return calculation.

Incremental cash flow does.

A company spends capital because it expects the future cash generated by that investment, adjusted for time and risk, to exceed the cost of the capital.

That is the trillion-dollar spreadsheet.

The formula is easy.

The inputs are not.

How long will the hardware remain economically useful? How busy will it be? What will customers pay? How fast will unit prices fall? How much will software improve old equipment? How much replacement spending will be required? Which assets retain value across several hardware generations? How much of the capacity is contracted and how much is speculative?

A good model does not hide those questions behind a single base case.

It exposes which assumptions are carrying the conclusion.

If hardware remains productive for six years rather than four, returns improve.

If new generations make older accelerators second-tier after three years, returns weaken unless the old fleet can be repurposed.

If contracted demand keeps utilization high, returns improve.

If reserved capacity waits for customers, fixed costs keep accumulating.

If inference prices fall but cost per useful task falls faster and volume expands, the economics may strengthen.

If price competition outruns efficiency, margins compress.

If the building and power infrastructure serve several hardware generations, long-lived spending may earn good returns even when the first GPUs age quickly.

If technology or geography strands the site, the long-lived asset becomes the problem.

None of those outcomes requires AI to fail.

That is the uncomfortable part.

The investment case can deteriorate while the technology becomes more useful every year.

Rapid improvement can create some of the financial risk because it makes yesterday's scarcity less durable. Better chips increase effective supply. Better software raises throughput. Cheaper models shift value toward customers and applications. New competitors inherit a lower cost curve.

The same forces that make artificial intelligence more abundant can make it harder for owners of expensive existing capacity to earn the returns assumed when the assets were ordered.

Or demand can outrun every one of those improvements and make today's capex look conservative.

The spreadsheet cannot tell us which future will happen.

Its job is humbler and more useful: tell us what has to be true for the price we are paying to make sense.

That brings us back to the prediction problem.

A financial model can produce a beautifully precise answer from assumptions that are deeply uncertain. A market price can do the same thing in public.

The danger is not the number.

It is forgetting what had to be assumed before the number appeared.