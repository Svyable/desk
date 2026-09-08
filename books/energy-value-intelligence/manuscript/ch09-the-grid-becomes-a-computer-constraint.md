# The Grid Becomes a Computer Constraint

Software engineers are used to waiting on computers. The reversal now arriving in parts of the AI economy is stranger: computers are waiting on electricity.

Not everywhere. The global power system is vast, many regions can add data-center load without drama, and efficiency keeps changing how much useful computation a megawatt can buy. But where large facilities cluster, power has moved from operating expense to schedule risk. A company can raise capital, order accelerators, secure land and fiber, then discover that the delivery date is controlled by a substation, a transmission upgrade, a transformer order, or a study queue.

That is what happens when a fast industry hits a slow network.

A model roadmap can change in months. Electric infrastructure moves through engineering studies, equipment orders, rights-of-way, permits, construction and reliability review. The mismatch is not evidence that the world is running out of energy. It is evidence that potential energy and deliverable power are different products.

Berkeley Lab's 2026 interconnection data make the distinction unusually visible. At the end of 2025, about 8,200 U.S. generation and storage projects were actively seeking transmission interconnection, representing 1,312 gigawatts of generation and roughly 749 gigawatts of storage. The total, about 2,060 gigawatts, was actually down 10 percent from the previous year as withdrawals remained high.

That decline is useful counterevidence. The queue is not a one-directional meter of national electricity scarcity, and a larger queue is not automatically worse. Projects enter, withdraw, mature, duplicate one another and compete for the same network capability. Most requests do not become operating plants.

What the queue does reveal is the cost of conversion. A project can exist as finance, land, equipment plans and a requested connection long before it exists as power available to a customer. Berkeley Lab reports that projects that do reach operation are taking longer on average to complete the required interconnection process. The queue is therefore better read as a map of intentions colliding with a network than as a forecast of future capacity.

This matters for AI because the generation queue and the large-load queue meet in the same physical system. A region can have developers proposing solar, batteries, wind or gas while data centers simultaneously request large new loads, yet still lack the studies, transmission, substations, equipment and approvals needed to join supply and demand on the required date.

The International Energy Agency describes the same timing problem globally. In *Electricity 2026*, it estimated that more than 2,500 gigawatts of renewable, storage and large-load projects were stalled in grid-connection queues. Data centers can often be built in roughly one to three years. New grid infrastructure can take five to fifteen.

The significant number is not 2,500 gigawatts by itself. It is the gap between those clocks.

AI can help with part of that gap. Better software can improve demand forecasts, power-flow studies, queue administration and network planning. Regulators can change readiness requirements so engineers spend less time repeatedly studying speculative projects. Grid-enhancing technologies can increase the useful capacity of existing lines. The IEA estimates that combinations of technology upgrades and regulatory changes could unlock substantial hosting capacity for projects already at advanced stages.

That is important because the chapter's argument would be too easy if every delay simply meant “build more wires.” Sometimes the cheapest megawatt is hidden inside equipment that already exists. Dynamic line ratings, topology optimization, reconductoring, batteries used as transmission assets and better operating rules can increase the amount of generation or load a network can accommodate.

But software cannot repeal the remaining constraint. A faster study can still conclude that a new line is needed. A better forecast can still identify a transformer that has to be manufactured. A more intelligent queue can still end at a corridor that requires permits, land, steel and crews.

The grid is useful precisely because it separates information friction from physical friction. Some bottlenecks are bad paperwork. Some are copper.

That distinction becomes economically valuable when time matters. A developer may prefer a region with somewhat higher electricity prices and a credible near-term connection over a nominally cheaper region whose upgrade schedule is uncertain. An old industrial site can become valuable because the interconnection survives the machinery that once used it. A megawatt available in two years may be worth more than a cheaper megawatt promised in six.

Time acquires a power price.

In a technology race, that price can be high. If a company believes earlier compute materially changes product capability or market position, it may pay for dedicated generation, storage, upgraded substations or other routes around the ordinary schedule. The transfer is revealing: as machine intelligence becomes more valuable, scarcity migrates into the physical systems required to instantiate it.

That does not make data centers passive victims of a slow grid. Large loads can also create the problem they are trying to escape. Clusters form because firms want the same fiber, suppliers, customers, workforce, tax treatment and infrastructure. Once the cluster becomes valuable, new projects arrive at the same constrained nodes. Network effects and network stress grow together.

The resulting costs are not merely technical. A new load can require upgrades beyond its immediate meter. That raises the question utilities and regulators have faced for generations with factories, mines and housing growth: who pays for infrastructure whose benefits and risks are shared unevenly?

If a data center triggers a substation and transmission reinforcement, charging the customer for every dollar may be wrong if the upgrades also serve future customers or improve reliability. Socializing every dollar may be equally wrong if the investment exists mainly because one customer wants a huge connection on an accelerated schedule and can later leave.

The difficult quantity is stranding exposure: how much of the asset's usefulness remains if the initiating load disappears?

That is a better guide than the slogan “make the data center pay.” A dedicated facility with little alternative use looks different from a network upgrade that unlocks capacity for an entire region. The more specific the benefit, the stronger the case for specific cost responsibility. The more broadly useful the asset, the more plausible some sharing becomes.

Good contracts make that distinction visible before steel goes into the ground. Long-term commitments, minimum payments, collateral and curtailment terms can force a customer to reveal whether a forecast is merely optimistic or valuable enough to underwrite. They also give utilities a better signal about which announced loads deserve long-lived investment.

This is the value ledger doing useful work. A forecast is information. A contract turns some of that information into consequence.

The same principle applies to flexibility. Data centers are not one kind of load. Some computation is latency-sensitive and difficult to interrupt. Other workloads can move through time or, within limits, geography. Training, batch processing and internal jobs may have more scheduling freedom than interactive inference. Backup generation and storage add another layer of optionality.

The technical possibility of flexible compute does not mean the flexibility is free. Accelerators are expensive, operators value utilization, customers expect service levels, and delaying a training run can have commercial cost. The IEA has made this counterpoint explicitly: AI-focused data centers are highly capital-intensive, so curtailing them can be expensive even when the electrical system would benefit.

The grid obtains flexibility only when contracts and prices make the trade worthwhile.

That turns software scheduling into an infrastructure resource. A workload that can move but is trapped behind an inflexible service promise is not flexible in practice. A data center that can curtail but receives no economic value for doing so has little reason to reorganize around the grid. Physical optionality matters only when the business model exposes it.

This is one reason electricity systems will increasingly care about controllability as well as raw megawatts. A battery stores energy. A thermostat stores almost none, yet many controllable loads can reduce a peak or shift demand into a period when the network has spare capacity. The value lies in changing the shape of demand.

For computation, the opportunity is unusually interesting because the output is information. Aluminum smelters have long turned local electricity into a tradable product. A data center can do something related without putting a heavy material on a ship: consume local power, perform computation, and export the result through fiber.

That makes geography negotiable, not irrelevant. Latency, data sovereignty, networking, chips, water, political stability, technical labor and customer proximity still matter. Cheap electricity alone cannot conjure an AI industry any more than cheap hydropower alone creates an aluminum industry without ore, capital, equipment and markets.

The broader lesson is that abundance requires complements.

This is also why a rising electricity forecast should not be mistaken for failure. Growth in electricity use can accompany economic improvement, electrification and valuable digital services. The relevant question is not whether demand rises. It is whether the system can add valuable demand while assigning its infrastructure costs, reliability consequences and externalities intelligently.

That question becomes sharper because AI is not the only new claimant on the grid. Electric vehicles, heat pumps, advanced manufacturing, cooling and industrial electrification arrive with different load shapes and geographies. More demand can justify more generation, transmission and equipment manufacturing. New customers can improve utilization and make projects financeable.

Demand can build supply.

The strongest counterargument to the “grid as bottleneck” story is therefore that bottlenecks are adaptive. Berkeley Lab's 2025 queue volume fell rather than rose. The IEA identifies large amounts of hosting capacity that could be unlocked without waiting for entirely new networks. Higher demand attracts investment. Technology improves. Developers move. Regulators change rules. A constraint that looks immovable can loosen quickly once enough money and attention arrive.

The book's claim survives only in narrower form: the grid matters when those adaptations remain slower than the demand trying to use them.

That timing difference is enough to change business decisions. It changes where data centers are built, what customers will pay for connection certainty, how utilities evaluate load forecasts, which brownfield sites become attractive, and which equipment manufacturers gain bargaining power. It can turn an existing interconnection into an asset more valuable than the building attached to it.

Infrastructure stores option value.

It also stores obligations. A hyperscaler can build dedicated generation and still depend on the public grid for backup. A behind-the-meter plant can reduce average purchases while creating a large contingency if it trips. A private project can change public transmission flows. The accounting boundary becomes the policy fight because the electrons do not respect the financing diagram.

Who pays for standby reliability? Who funds shared upgrades? Who carries fuel-price risk? Who absorbs the cost if a customer leaves before a thirty-year asset has paid for itself?

Those questions are less cinematic than artificial general intelligence. They may have more influence on electricity bills.

The mature response is neither “software will solve the grid” nor “the grid will stop AI.” Intelligence can improve utilization, forecasting, siting, queue management and flexibility. Capital can add generation and network capacity. Contracts can allocate forecast risk. Prices can expose scarcity by place and time. Communities and regulators can decide which costs and benefits count.

The hard part is making those systems agree before the servers are ready.

That is why the grid belongs in this book. Energy may exist in abundance at the system level while being unavailable at the socket where intelligence wants to become physical. Intelligence can identify a better conversion path without being able to manufacture the transformer instantly. Value determines whether anyone is willing to pay for the path, who carries the downside if the forecast is wrong, and whether the arrangement remains politically legitimate.

Software scales by replication. Infrastructure scales by projects.

The future of machine intelligence will depend partly on how well we make those two verbs meet.