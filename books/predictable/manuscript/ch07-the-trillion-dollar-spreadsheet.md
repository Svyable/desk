# The Trillion-Dollar Spreadsheet

On the last day of January 2025, Meta disclosed that some of its servers had acquired another year of life.

Nothing physical had happened to them.

The machines had not been rebuilt. Their chips had not become faster overnight. No cooling loop had been replaced, and no data center had suddenly become more efficient. Meta had completed an accounting assessment and increased the estimated useful life of certain servers and network assets to five and a half years.

The company estimated that the change would reduce its 2025 depreciation expense by about $2.9 billion on the equipment already in service at the end of 2024.

That sentence belongs in an earnings release, not a conspiracy theory.

Companies are required to estimate how long assets will remain economically useful. Those estimates change as equipment improves, software gets better at using older hardware, maintenance practices evolve, and management learns more about how long a fleet can serve productive work. Updating an estimate can be the correct accounting treatment.

But the Meta disclosure exposes something easy to forget when looking at the artificial-intelligence buildout from a distance.

A great deal of the investment case eventually passes through a spreadsheet cell that somebody has to estimate.

The physical boom described in the previous chapter ends up on financial statements as property, equipment, leases, depreciation, operating costs, commitments, and cash outflows. The same data center can contain concrete expected to last for decades, networking equipment expected to last for years, and accelerators whose economic value may change with each hardware generation. Accounting has to turn those different clocks into periodic expenses.

That translation matters because investors do not own a pile of GPUs. They own claims on future cash flows.

A company can spend one dollar on a machine today and recognize the cost in earnings over several years. The cash has already left, but the income statement receives the expense gradually through depreciation. If management reasonably concludes that the machine will remain useful longer, the annual depreciation burden falls. If its useful life proves shorter, the economic cost arrives faster than expected, whether through higher depreciation, impairment, replacement spending, or weaker utilization.

There is nothing inherently suspicious about this.

There is also nothing neutral about it.

Consider an intentionally simple illustration. Suppose a company buys a $6 billion fleet and expects no salvage value. Depreciated evenly over six years, the accounting expense would be $1 billion a year. Over four years, it would be $1.5 billion. The company has spent the same $6 billion in either case. What changes is how quickly that cost appears in reported profit.

The arithmetic is simple because the real world is not.

The true economic life of AI hardware depends on what it can still do, what customers will pay for that work, what newer hardware costs, how much electricity the older fleet consumes, whether software can keep improving its efficiency, and whether capacity is scarce enough that even second-tier equipment remains valuable.

This is why useful-life estimates have been moving across the industry.

Alphabet says its servers and network equipment are generally depreciated over six years. It moved to that estimate in 2023 after reassessing expected useful lives. Its investor materials explicitly say those lives are regularly evaluated for technological obsolescence, planned use, and utilization.

The language is worth noticing.

Obsolescence and utilization are not accounting abstractions imposed on the technology. They are the technology economics.

A server is useful only if it can perform work that has value at a competitive cost. A six-year-old machine can be physically functional and economically unattractive. It can also remain profitable if demand is abundant, the hardware is fully depreciated, power is cheap, and software allows newer workloads to run efficiently on an aging fleet.

Microsoft described that countercase directly in January 2026.

During its fiscal second-quarter earnings call, an analyst asked how investors should think about servers being capitalized over six years when Microsoft's commercial remaining performance obligations had an average duration of about two and a half years. The question went straight to the anxiety inside the AI investment case: what happens if the revenue contract ends before the accounting life of the hardware?

Chief Financial Officer Amy Hood answered that the average contract duration mixed several businesses together. She said much of the capital Microsoft was deploying, including many GPUs, was already contracted for most or all of the equipment's useful life. For some large customers, she said GPU contracts covered the entire useful life of the hardware.

Satya Nadella added another part of the defense. Software can make an aging fleet more productive. Newer models do not have to run only on the newest machines, and operational improvements can raise the efficiency of equipment already installed.

This is strong evidence against the lazy version of the bubble argument.

If expensive hardware is contracted for most of its economic life, utilized heavily, and made more efficient through software, then a long depreciation schedule need not be an accounting trick. It can be a reasonable reflection of cash-generating usefulness.

The harder question is how broadly that condition holds.

Microsoft itself shows why the answer cannot be reduced to one number.

In its fiscal third quarter of 2026, the company reported $31.9 billion of capital expenditures. Roughly two thirds went to what it called short-lived assets, primarily GPUs and CPUs. The remainder went to long-lived assets expected to support monetization for fifteen years and beyond, including large data-center sites.

Those are very different bets hidden inside the same capital-expenditure total.

A data-center shell may serve several generations of processors. Power infrastructure can outlive the model family that justified its construction. A GPU fleet may face a faster competitive clock. The financial return on the campus therefore depends on a sequence of replacements and upgrades, not just the first batch of hardware installed inside it.

The scale of that sequence is becoming visible in Microsoft's cash-flow statement.

For fiscal 2026, Microsoft reported about $116 billion of additions to property and equipment, up from roughly $65 billion the prior year. Depreciation, amortization, and other noncash adjustments in its operating cash-flow reconciliation were about $38.5 billion.

Those figures should not be subtracted from one another and called an AI bill. Microsoft's property and equipment support many businesses, and the cash-flow adjustment includes more than depreciation alone. But the gap illustrates the direction of travel: assets are being added to the balance sheet much faster than the accumulated accounting expense from prior investments is flowing through the income statement.

That is what a buildout looks like before it matures.

It creates a reservoir of future depreciation.

Alphabet described the same pressure in February 2026. Its depreciation expense had risen from $15.3 billion in 2024 to $21.1 billion in 2025, an increase of 38 percent. Management expected the growth rate to accelerate further in 2026 because of the capital invested in prior years.

About 60 percent of Alphabet's 2025 technical-infrastructure investment went toward servers, according to the company. The remaining 40 percent went toward data centers and networking equipment, which generally have longer lives.

Again, there is no single AI asset.

There is a portfolio of clocks.

This makes depreciation a useful place to look, but a dangerous place to stop.

The income statement answers when an accounting cost is recognized. It does not by itself answer whether the investment earns an adequate return.

For that, utilization matters.

Imagine two identical accelerator fleets. One is busy nearly all the time serving paid workloads. The other spends long stretches waiting for demand. The purchase price and depreciation schedule can be identical. The economics are not.

Utilization is one of the hidden variables in every infrastructure model because fixed costs do not disappear when demand is quiet. A GPU bought for a large training cluster, a data-center lease, and the electrical capacity reserved for a campus all cost money before the next token is sold.

High utilization can make expensive hardware look cheap on a per-unit basis. Low utilization can make a technically advanced fleet economically poor.

Yet utilization is difficult to observe from outside a company.

Cloud providers generally do not publish one clean fleet-wide GPU utilization number, and such a number would be misleading even if they did. Training jobs, inference, internal research, first-party applications, and third-party customers have different demand patterns. Capacity may be reserved for latency, reliability, or strategic customers rather than run continuously at theoretical maximum load.

The most useful evidence is therefore indirect.

Contracts matter. Capacity constraints matter. Revenue growth matters. Margins matter. Waiting lists, customer commitments, and the speed with which new capacity begins generating revenue all reveal pieces of the utilization story.

Microsoft said in April 2026 that it remained capacity constrained and that roughly two thirds of quarterly capex was going into short-lived compute. It also said those investments were serving Azure, Microsoft 365 Copilot, GitHub Copilot, internal product development, and research rather than one isolated revenue line.

This complicates any attempt to calculate a clean return on AI capital.

Some compute is sold directly through Azure. Some supports a subscription product whose price is not expressed per GPU-hour. Some is effectively research and development. Some improves existing products and may defend revenue that would otherwise be at risk. Some capacity is strategic insurance against being unable to serve a customer when demand arrives.

A spreadsheet can assign each use a return.

Reality does not keep the ledger so neatly.

This is one reason investors often reach for margins instead.

Margins are imperfect, but they reveal whether current customers are paying enough to cover the operating economics of the service being delivered.

The current evidence is not the evidence of an industry whose economics have obviously collapsed.

Amazon Web Services generated $42.2 billion of revenue in the second quarter of 2026 and $16.6 billion of operating income. That is an operating margin of roughly 39 percent. Revenue grew 37 percent from the prior year.

Microsoft Cloud reported a 66 percent gross margin for fiscal 2026, even as the company said heavy AI infrastructure investment and growing AI usage were pressuring margins.

Neither number isolates the return on a dollar spent specifically for generative AI.

AWS includes a broad cloud business. Microsoft Cloud includes Microsoft 365 Commercial cloud, Azure and other cloud services, the commercial portion of LinkedIn, and Dynamics 365. Mature workloads can subsidize emerging ones, and segment accounting can obscure which services are carrying which costs.

Still, these margins matter.

They are counterevidence to the idea that hyperscalers are merely shoveling cash into machines with no monetization. Large profitable businesses already sit on top of the same infrastructure systems being expanded for AI.

The question is whether the incremental capital earns returns as attractive as the existing base.

That distinction gets lost when investors compare a company's total cloud margin with the cost of the next data center.

Average economics and marginal economics are not the same.

A network built years ago on cheaper land, cheaper power, and less expensive equipment can have excellent returns. The next gigawatt may cost more. The next generation of accelerators may arrive at higher prices. Capacity installed during scarcity may be less profitable than capacity installed before everyone wanted it.

Or the opposite can happen.

Newer hardware may do so much more work per watt that even higher purchase prices produce better economics. Software may raise throughput. Better scheduling may reduce idle time. Customers may move more workloads onto the platform, raising utilization across old and new assets at once.

This is why the capital cycle cannot be read directly from the gross margin line.

The cash-flow statement adds another view.

Amazon's trailing twelve-month free cash flow was negative $7.6 billion at the end of the second quarter of 2026. The company attributed the decline primarily to a $66.1 billion year-over-year increase in property-and-equipment purchases, net of proceeds and incentives.

That sounds alarming until it is placed next to AWS growth and operating income.

Amazon was simultaneously producing large operating profits from its cloud business and spending so heavily on infrastructure that free cash flow turned negative.

Both facts can be true.

This is the financial signature of a company choosing to invest current cash in capacity it expects to monetize later.

Whether that choice is brilliant or excessive cannot be determined from the cash outflow alone.

If future demand arrives at high margins, the negative free cash flow is a bridge to larger profits. If capacity becomes abundant, prices fall faster than costs, or hardware ages before sufficient revenue is earned, the same spending becomes the evidence later used to explain poor returns.

The cash-flow statement records the bet before the outcome is known.

Meta offers a similar tension from the opposite direction.

Its January 2025 useful-life extension reduced the depreciation expense expected from its existing server and network fleet. By the second quarter of 2026, however, depreciation and amortization had risen to $6.36 billion for the quarter from $4.34 billion a year earlier. Costs and expenses were up sharply, and operating margin had fallen to 31 percent from 43 percent.

Many things besides infrastructure affected those results, so it would be wrong to attribute the margin change to depreciation alone.

But the direction is important.

Extending an asset's useful life can delay expense recognition. It cannot make a capital-intensive buildout costless. As successive investment waves enter service, depreciation accumulates.

The spreadsheet eventually catches up with the construction site.

Pricing creates the next source of uncertainty.

If AI services could maintain high prices while hardware became more efficient, the return calculation would be straightforward. But technology markets rarely grant that combination for long.

The same efficiency improvements that make a provider's costs fall can also make competitors' costs fall. Better hardware increases supply. Better software raises throughput. Smaller models can perform tasks that previously required frontier systems. Customers learn to route easy work to cheaper models and reserve expensive intelligence for the difficult steps.

Prices then move.

OpenAI provided a vivid example in July 2026. It cut the API price of GPT-5.6 Luna by 80 percent and GPT-5.6 Terra by 20 percent after efficiency improvements reduced serving costs. Terra moved to $2 per million input tokens and $12 per million output tokens; Luna moved to $0.20 and $1.20.

A static spreadsheet would interpret a lower price as lower revenue per unit.

A dynamic market may interpret it very differently.

When the price of intelligence falls, applications that were previously uneconomic can become practical. Developers can run more agents, process more documents, use larger contexts, automate lower-value tasks, and call models more frequently. The number of tokens sold can rise faster than the price per token falls.

This is the countercase the bubble thesis has to take seriously.

Falling unit prices are not necessarily evidence of deteriorating economics.

They can be the mechanism by which demand explodes.

The history of computing is full of products whose unit costs collapsed while the total market became vastly larger. A cheaper unit of computation can destroy scarcity rents and create enormous new revenue at the same time.

The difficult variable is elasticity: how much additional paid demand appears when the price falls.

No one can read that number directly from today's income statement.

The result depends on what customers discover they can do with cheaper intelligence.

It also depends on where the cost curve moves.

If inference prices fall 80 percent because serving costs fall even faster, margins can improve. If prices fall because competitors are fighting for utilization while costs remain stubborn, margins can compress. If lower prices stimulate ten times as much volume, total gross profit can rise even with a thinner margin per unit.

The same observed price decline supports several futures.

That is why a single ratio such as capital expenditure divided by current AI revenue can be suggestive and still be inadequate.

Capital arrives before the revenue stream is mature. Some assets support existing businesses. Some support research. Some are leased. Some are owned. Some have fifteen-year lives. Some may be replaced in a few years. Some capacity is already contracted. Some is speculative. Some spending may defend an incumbent franchise rather than create a new line of revenue.

The denominator is just as difficult.

What counts as AI revenue?

A customer paying separately for an AI API is easy. A Microsoft 365 subscriber who renews partly because Copilot improved the product is harder. An advertiser whose campaign performs better because an internal model improved ranking is harder still. An AWS customer using a general compute service to run an AI workload may not appear in a clean AI revenue disclosure.

This measurement problem can be abused in both directions.

Optimists can attribute too much existing revenue to AI. Skeptics can demand a stand-alone AI revenue line for investments whose returns arrive through broader products.

Neither approach solves the accounting problem.

The return on invested capital ultimately depends on incremental cash flows, not labels.

A company spends capital because it expects the future cash generated by the investment, discounted for time and risk, to exceed what the capital costs.

That sentence contains the entire trillion-dollar spreadsheet.

Future cash generated.

Time.

Risk.

Cost of capital.

Every term is uncertain.

The temptation is to replace those uncertainties with a definitive valuation model and announce that the AI buildout is either obviously rational or obviously insane.

That would recreate the false precision this book is trying to examine.

A more useful spreadsheet exposes which assumptions have to be true.

Suppose hardware lasts six productive years rather than four. Returns improve because the same purchase supports more years of revenue.

Suppose new generations make old hardware economically second-tier after three years. Returns weaken unless older equipment can be repurposed profitably.

Suppose utilization remains high because capacity is contracted. Returns improve.

Suppose customers delay projects and reserved capacity sits idle. Returns weaken.

Suppose inference prices fall quickly, but cost per useful task falls faster and volume expands. Returns may improve.

Suppose price competition outruns efficiency. Returns compress.

Suppose buildings and electrical infrastructure remain useful across many hardware generations. Their long lives justify investment even if the first GPUs age quickly.

Suppose power constraints or technology shifts strand a site before it is fully utilized. The long-lived asset becomes the problem rather than the advantage.

None of these possibilities requires the technology to fail.

That is the central point.

The investment case can deteriorate while AI becomes more useful every year.

In fact, rapid technological improvement can create some of the financial risk. Better models and hardware make existing systems less scarce. Efficiency lowers the cost of entry. Competitors can pass savings to customers. The useful work produced by AI can surge while the price of producing a unit of that work falls.

Consumers may win from exactly the mechanism that weakens producer returns.

The reverse is also possible.

If demand compounds faster than efficiency improves, scarcity can persist. If a few providers retain advantages in chips, software, distribution, power, data, or customer relationships, they may capture unusually large rents. If contracts secure utilization for most of a fleet's useful life, the depreciation schedules that look optimistic from outside may prove conservative in practice.

The current evidence permits both stories.

Microsoft's response to the six-year server question is not hand-waving. Contracted capacity is real protection against utilization risk. AWS's operating income is real profit. Microsoft Cloud's margins are real. Alphabet's rising depreciation is also real. Amazon's negative free cash flow is real. Meta's useful-life revision is real.

The mistake is treating any one of those observations as the verdict.

They are inputs.

The verdict belongs to a future that has not happened yet.

This is what makes the AI investment cycle unusually hard to price.

The spending is enormous enough to matter now, but many of the returns arrive later. The technology is improving fast enough to change both costs and useful lives while the assets are still being installed. Demand is growing, but the price per unit of intelligence is falling. Capacity is constrained in some places while new supply is being financed everywhere.

The spreadsheet is being updated while the factory is being built.

And the people updating it are not simply guessing.

They have contracts, utilization data, customer pipelines, engineering forecasts, hardware road maps, power agreements, and internal cost curves that outside investors do not see.

That informational advantage deserves respect.

It does not abolish uncertainty.

Executives can be rational and still overbuild because competitors make the same rational decision. Contracts can be strong and customers can later fail. Useful-life estimates can be reasonable and technology can accelerate faster than expected. Demand can exceed forecasts while prices collapse enough to transfer much of the benefit to users.

A capital cycle does not require foolish participants.

It requires uncertainty, response, and time.

By 2026, the AI boom had reached the stage where physical scarcity was being translated into accounting assumptions at extraordinary scale. Server lives, utilization, contract duration, depreciation, price per token, power costs, and gross margins were no longer footnotes to a technology story. They were the story of who would capture its economics.

There is no single trillion-dollar spreadsheet sitting in one executive's office.

There are thousands of them.

Inside cloud companies, utilities, semiconductor firms, private-equity funds, data-center developers, startups, and public-market portfolios, different models contain different answers to the same set of questions. How much demand? How quickly? At what price? On which hardware? For how long? At what utilization? With what margin? Financed at what cost?

Each model can look internally coherent.

They cannot all be right if they imply incompatible amounts of profitable capacity.

That is where the next part of the book begins.

Financial models turn assumptions about uncertain futures into present values. Prediction markets perform a cousin of the same operation in public. They take disagreement about an event that has not happened and compress it into a price that can move by the minute.

The attraction is the same in both cases.

A messy future becomes a number.

The discipline is useful. The number can be informative. But before trusting it, the important question remains the one hidden beneath every spreadsheet in this chapter:

What has to be true for this price to be right?
