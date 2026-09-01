# The New Utility Boom

In the old technology story, the scarce resource was talent.

In the new one, it may be a substation.

This is a strange transition for an industry that built its culture around the idea that code conquers atoms. Software people are accustomed to scaling by copying. Electricity people are accustomed to scaling by permitting.

The meeting between the two cultures is producing one of the great infrastructure booms of the century.

**From Server Rooms to Power Campuses**

The data center began as a room.

Then it became a building.

Then a campus.

Now, in some markets, the relevant planning unit is hundreds of megawatts or more. Developers discuss gigawatt-scale pipelines. Utilities receive load requests large enough to alter system plans. Technology firms sign long-term power agreements, invest in generation projects, explore nuclear arrangements, procure renewable energy, and in some cases consider dedicated power solutions.

The language of computing has merged with the language of utilities.

Load.

Capacity.

Interconnection.

Firm power.

Dispatchability.

Reliability.

The implications are deeper than “AI uses a lot of electricity.”

A utility business is built around heavy fixed investment and long-lived assets. Its economics are shaped by regulation, load forecasts, financing costs, and the requirement to build before demand fully materializes. AI infrastructure is importing some of those characteristics into technology.

That changes the character of the investment problem. A software company can often rent what it needs and discover demand as it goes. A power-intensive campus cannot. Somebody must buy land, secure transmission access, order switchgear and transformers, build substations, arrange backup generation, negotiate tariffs, and decide how much of the site should be energized before the revenue attached to that capacity is certain.

Those decisions are made by different firms with different balance sheets. The cloud customer may be investment-grade while the developer is highly levered. The utility may recover approved costs from a regulated customer base while the data-center owner faces competitive rents. A generator may sign a long contract while the hardware inside the building is replaced several times before the generating asset reaches middle age.

Calling all of this “AI capex” hides the most important fact about the boom: the liabilities mature on different clocks.

**The Queue Becomes a Moat**

In software, a queue is usually a bug.

In electricity, a queue can be an asset.

Grid interconnection studies determine whether and when a new large load can connect. Transmission upgrades may be required. Transformers have lead times. Local generation may be constrained. Communities may resist new facilities. Permits can take longer than the servers themselves.

A data-center developer with a credible path to powered capacity can therefore possess something close to a property right in time.

The value is not merely land.

It is *land plus power plus permission plus schedule*.

This bundle explains why infrastructure developers have raced to secure sites before final customer demand is visible. If they wait until demand arrives, the power may not.

This is rational behavior at the firm level.

At the system level, it can produce overbooking.

If ten developers each reserve capacity for a future they expect to dominate, the grid sees ten demands while the economy may eventually need six.

The same scarcity that justifies aggressive reservation can encourage duplication.

And duplication is difficult to observe while the shortage is still real. A developer with three possible sites may have sound reasons to pursue all three until one becomes clearly superior. A hyperscaler may want options in several regions because transmission, water, permitting, chip delivery, tax treatment, or customer demand can change. Each option can be rational. Added together, the options can resemble committed demand.

That distinction matters because infrastructure markets price the visible queue long before they learn how much of it is executable. Land changes hands. Utilities revise forecasts. Turbine manufacturers fill order books. Contractors hire. Municipalities issue bonds or promise road improvements. The reservation itself begins to create economic activity.

The boom can therefore become partly self-confirming before the load arrives.

**The Load That Arrives All at Once**

In June 2026, Lawrence Berkeley National Laboratory published an updated estimate of U.S. data-center electricity use.

Its reference case put data centers at roughly 649 terawatt-hours in 2030—about 11.8 percent of total U.S. electricity consumption—with a scenario range of 9.5 to 15.3 percent. The underlying uncertainty was wider in absolute energy terms: compounded scenarios ran from 521 to 843 terawatt-hours. The earlier 2024 study had estimated that data centers used about 176 terawatt-hours in 2023, or roughly 4.4 percent of U.S. electricity.

The range is as revealing as the headline. Berkeley's model changes when assumptions about equipment installations, specialized graphics-chip shipments, AI-chip operating lives, idle power, and server utilization change. These are not details around the edge of the forecast. They are the forecast.

The International Energy Agency reaches the same problem from a global direction. Its base case has worldwide data-center electricity consumption rising from roughly 415 terawatt-hours in 2024 to around 945 terawatt-hours in 2030. But the agency also models adoption, efficiency, supply-chain, and energy-system cases that diverge sharply after that. In its high-efficiency case, the same digital service demand can be served with materially less electricity. In its headwinds case, deployment bottlenecks and slower AI adoption flatten the trajectory much earlier.

Forecasts this large will be wrong in detail. That is not a criticism. Forecasting is the point.

A power system must decide what to build before it knows exactly which future will arrive.

That is what makes the AI load problem so different from the software-growth stories investors are used to. A software platform can discover that demand is 30 percent below plan and slow hiring. A utility cannot discover in 2029 that it should have ordered a transformer, transmission upgrade, or generating plant in 2026 and then download one overnight.

The timing mismatch creates a peculiar form of optionality.

Technology companies value the option to obtain enormous amounts of power later. Utilities value certainty that the load will actually show up. Developers want capacity reserved before their customers are ready to sign final contracts. Regulators want to avoid forcing ordinary ratepayers to fund infrastructure for speculative loads that may never materialize. Communities want jobs and tax base but may not want the transmission lines, generators, noise, water demand, or land use that accompany hyperscale campuses.

Every participant is responding rationally to a different downside.

The technology company fears missing the AI era because it cannot get power.

The utility fears building billions of dollars of equipment for a customer whose plans change.

The regulator fears socializing a private forecast error.

The data-center developer fears losing the site because somebody else secured the queue position first.

This is how a shortage story becomes a coordination problem.

There is also a measurement trap. A request for a gigawatt is not the same thing as a gigawatt of eventual load. Companies can submit large requests at multiple sites while they evaluate which location will actually work. Developers can seek more capacity than they ultimately need because they know some projects will be delayed. Utilities, seeing a wall of requests, must decide how much is signal and how much is option value.

The queue therefore contains both demand and fear of future scarcity.

That does not make the demand fake.

It makes the demand financially dangerous to extrapolate.

The important question for investors is not whether data-center electricity use rises dramatically. It probably can. The important question is who commits capital against which version of the forecast, who gets paid if the high case arrives, and who absorbs the write-down if reality lands closer to the low case.

A system can be short power in 2026 and overbuilt in one region by 2031.

Both statements can be true.

Capital cycles often turn precisely because investors assume they cannot be.

**Who Pays for the Wire**

There is a second question hidden inside the demand forecast: who bears the cost of being wrong?

For an unregulated merchant project, the answer can be brutally simple. Equity and creditors lose money. Regulated utility investment is more complicated. If a utility expands transmission, substations, or generation to serve a very large customer, regulators have to decide which costs belong to that customer and which belong to the broader system. The answer depends on jurisdiction, tariff design, asset use, and what happens after the original customer leaves.

This is not an accounting footnote. It determines how much speculative demand the system can tolerate.

Suppose a data-center campus requires a large network upgrade. If the customer pays the full cost up front, its option is expensive and the queue contains a stronger economic signal. If much of the cost can be spread across other ratepayers over decades, the option becomes cheaper to hold. If the customer later scales back, the steel and copper do not disappear with the forecast.

The difficult cases are the assets that are both customer-driven and genuinely useful to the grid. A transmission reinforcement may have been accelerated by one campus but later serve housing, factories, electric vehicles, or another data center. A new generator may have an economic life much longer than the original AI hardware. Cost causation becomes a negotiation over uncertain future benefits.

This is why the quality of the contract matters as much as the size of the load request. Minimum bills, deposits, take-or-pay provisions, collateral, termination payments, and long-term commitments are attempts to convert enthusiasm into something financeable. They do not eliminate forecast error. They decide who owns more of it.

For investors in utilities, developers, power producers, and infrastructure funds, the phrase “data-center demand” is therefore incomplete. The better questions are contractual. How much demand is committed? For how long? Against what credit? Who paid for the interconnection? What happens if energization is late? What happens if the customer wants half the power? What remains useful if the customer disappears?

A megawatt with a strong contract is a different asset from a megawatt in a presentation deck.

**The Gas-Turbine Problem**

AI's energy demand has revived technologies that many technology executives rarely discussed a decade ago.

Natural gas turbines are one example. They can provide dispatchable generation and relatively fast development compared with some alternatives, but the turbine supply chain itself can become constrained. Nuclear power is another. Several technology companies have pursued arrangements related to nuclear generation because large data centers value dense, reliable, round-the-clock electricity. Renewables remain central because they can be built relatively quickly and cheaply in many regions, but their variability means grids still need balancing resources, storage, transmission, or complementary generation.

The IEA's base case expects renewables to meet nearly half of the additional global electricity generation needed for data centers through 2030. Natural gas and coal together still supply more than 40 percent of the increment over that period, while nuclear becomes more important later in the decade and beyond.

That mix is important for a reason beyond climate policy. Different supply technologies create different capital cycles.

Solar modules can be ordered and deployed relatively quickly. Transmission can take much longer. Gas generation may be technically familiar while turbine availability becomes the bottleneck. Existing nuclear plants can offer unusually valuable firm output, but new nuclear construction has a different schedule and risk profile from a data hall. Batteries can shift energy across hours but do not by themselves solve every multiday, seasonal, or network constraint.

An investor who says “power is scarce” has not yet identified an asset class. Scarcity can accrue to a particular node, a transmission right, a turbine slot, an existing plant, a development permit, or simply a customer able to move its workload somewhere else.

The surprising lesson is not that one fuel “wins.”

It is that intelligence has become an energy-policy constituency.

**The Geography of a Megawatt**

Electricity is a commodity only until the network matters.

A megawatt in a region with spare generation but no transmission path to the desired campus is not equivalent to a megawatt behind an unconstrained substation. Nor is power in a region with abundant land necessarily useful if latency, fiber routes, water, taxes, permitting, or workforce make the site unattractive.

This local character explains how national abundance and local scarcity can coexist. The IEA notes that data centers remain a modest share of global electricity consumption even as their geographic concentration creates severe integration problems in particular markets. Nearly half of U.S. data-center capacity was concentrated in five regional clusters in its 2025 analysis. A global percentage can therefore look manageable while a local utility faces a demand shock.

The geography also creates a release valve. Compute is not perfectly mobile, but some workloads can move. Training can sometimes be scheduled where electricity and capacity are available. Batch inference can tolerate more latency than an interactive service. Companies can improve cooling, chips, software, and utilization. A customer facing a five-year power wait may redesign the workload rather than patiently preserve the original electricity forecast.

This is the counterforce that scarcity narratives often omit. High prices do not merely reward owners of scarce assets. They teach customers to use less of the scarce thing.

The AI electricity boom is occurring while the amount of useful computation obtainable from a unit of hardware and energy is also changing. That makes extrapolation especially treacherous. Demand for intelligence can rise faster than electricity use if efficiency improves rapidly; electricity use can still rise in absolute terms if falling cost causes much more intelligence to be consumed. Both mechanisms can operate at once.

A utility must build for electrons, not tokens. An AI company sells the tokens.

Between those two units lies the forecast risk.

**Sovereign Compute**

Governments do not usually care which word processor their citizens use.

They increasingly care where advanced AI is trained, which chips are available, what data crosses borders, and whether domestic institutions can access frontier compute.

This has created the concept of sovereign compute: nationally controlled or domestically located capacity intended to support strategic autonomy.

From an investor's perspective, sovereign demand is attractive because it can be less price-sensitive than ordinary commercial demand. Governments may accept lower financial returns to achieve security, resilience, prestige, or industrial-policy goals.

But strategic demand also complicates market signals.

If capacity is built for geopolitical reasons, the market may look tighter than commercial economics alone would justify. Private developers can interpret subsidized demand as evidence of durable pricing power. Competitors respond. More capacity is built.

Eventually, the industry may discover that some customers were buying independence rather than economic productivity.

That capacity still exists.

The same issue appears inside corporations in milder form. A chief executive may authorize excess compute because being short during a platform transition seems more dangerous than being temporarily overprovisioned. A cloud provider may build ahead because market share is strategically valuable. A model company may sign a large capacity agreement because access itself has option value.

None of these buyers needs to be irrational for the system to overbuild. They need only value strategic insurance more highly than the eventual marginal user values the resulting capacity.

**When Chips Arrive Before Electricity**

Imagine a company that has secured accelerators for a new cluster.

The hardware has a delivery schedule. The financing is arranged. The building is nearing completion. The customer pipeline is enthusiastic.

Then the interconnection slips twelve months.

The company has not experienced an AI problem.

It has experienced an infrastructure problem.

Yet the financial statements do not care about the taxonomy.

Interest accrues. Lease commitments remain. Equipment may age before generating revenue. Customers may move workloads elsewhere. A delayed project can miss an entire hardware generation.

The mismatch is particularly cruel because the assets depreciate at different speeds. The shell of the data center may remain useful for decades. A substation can outlive several generations of servers. The accelerators inside the building may lose economic value much faster as newer chips improve performance or lower the cost of inference.

Delay therefore changes the composition of the investment return. The long-lived infrastructure may eventually earn money even when the first hardware owner does not. A distressed project can be sold. A new tenant can occupy the powered shell. Creditors can take losses while the physical campus survives and becomes useful to somebody else.

That is one of the recurring patterns of infrastructure bubbles. The asset can be socially valuable and financially disastrous at the same time.

This is where power scarcity turns from bullish slogan to operational risk.

The phrase “we have more demand than capacity” sounds wonderful until one asks whether the constrained input is something the company can acquire at an adequate return.

If the cost of resolving the bottleneck rises faster than the revenue unlocked by the capacity, scarcity destroys rather than creates value.

**The Utility Lesson**

Utilities learned long ago that demand forecasts are dangerous because infrastructure arrives in lumps.

A city does not add a tenth of a power plant every time ten thousand people move in. Large projects are discrete. They take years. Once built, much of the cost is fixed.

AI capacity has similar lumpiness.

A cluster is financed before every token is sold.

A substation is sized before every customer appears.

A data hall is completed before utilization reaches maturity.

This gives the cycle a familiar rhythm:

Shortage.

High prices.

Buildout.

Delayed capacity arrives.

Shortage disappears.

Prices soften.

Projects authorized under scarcity assumptions compete in an abundance market.

The industry does not need demand to collapse.

Supply only needs to arrive faster than expected.

The harder possibility is that both demand and supply exceed today's expectations while returns still disappoint. Electricity consumption can double. AI can become indispensable. Utilities can build record amounts of infrastructure. And investors who paid scarcity prices for assets whose scarcity proved temporary can still lose money.

That is the capital-cycle point of this book in miniature. The economic importance of the product does not guarantee the return on the capacity built to supply it.

The wires may be necessary. The substation may remain busy for forty years. The data hall may find another tenant. Society may be glad the infrastructure exists.

None of those facts tells you whether the first owner paid the right price.

That is how a boom in an essential service becomes a utility bust.
