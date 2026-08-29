# Intelligence Has a Power Bill

A model can be copied in seconds. A substation cannot.

That mismatch is becoming one of the stranger constraints on artificial intelligence. The visible product is software: a prompt, an answer, an image, a prediction. The physical system behind it is less ethereal. Accelerators sit in racks. Racks sit in buildings. Buildings need transformers, switchgear, backup systems, fiber, cooling equipment, land, and a connection to a power system that has to remain balanced every second.

For most users, computation still feels almost free of place. A request leaves a phone and returns from somewhere called the cloud. The name is good marketing. Clouds do not usually require a 500-megawatt interconnection agreement.

Data centers do.

The International Energy Agency estimated that data centers used about 415 terawatt-hours of electricity worldwide in 2024, roughly 1.5 percent of global electricity consumption. That is a useful antidote to the idea that artificial intelligence is already consuming the world’s grid. It is not.

The denominator changes when the question becomes local. The United States accounted for about 45 percent of global data-center electricity use in 2024, and nearly half of American data-center capacity was concentrated in five regional clusters. A load that looks modest in a global energy balance can be large enough to alter the investment plan of the utility territory that must actually serve it.

Infrastructure has an address.

That is the important part of the AI power story. Not that computation has suddenly become uniquely energy-hungry, but that a fast-moving industry is asking a slower-moving system for unusually large blocks of reliable power in particular places.

The IEA’s base case has global data-center electricity consumption reaching about 945 terawatt-hours in 2030, still just under 3 percent of global electricity demand. The same analysis makes clear how fragile that number is. By 2035, its scenarios range from roughly 700 terawatt-hours in a headwinds case to more than 1,700 in a faster AI-growth case. Hardware efficiency, software efficiency, utilization, deployment speed, supply-chain constraints, and demand for AI services all move the result.

That range should make anyone suspicious of a single forecast quoted to the nearest terawatt-hour.

It should not make planners indifferent.

A utility deciding whether to reinforce a transmission corridor cannot postpone the decision until 2030 reveals which scenario was correct. A developer asking for hundreds of megawatts of service forces a capital decision while the future load is still partly a business plan. If the project disappears, customers may be left helping to pay for underused infrastructure. If the project is real and the system builds too slowly, the connection itself becomes the bottleneck.

This is a forecasting problem with concrete attached.

Berkeley Lab’s June 2026 update makes the uncertainty unusually visible. Its reference case estimates U.S. data centers using about 649 terawatt-hours in 2030, or 11.8 percent of national electricity consumption. Its compounded uncertainty range runs from 521 to 843 terawatt-hours, roughly 9.5 to 15.3 percent.

The report is useful partly because it shows what moves the estimate. Lower expected installations of data-center IT equipment reduce the 2030 total to 578 terawatt-hours. Higher shipments of specialized graphics chips push it to 664. Higher idle power and utilization of AI servers raise it to 782. Assumptions about chip life, cooling, equipment mix, and installation rates matter too.

The future power demand of AI is therefore not just an energy forecast. It is a forecast of technology adoption layered on top of an engineering model.

There is a further complication. Better computers do not necessarily mean lower sector-wide electricity use.

This book has already met that problem in steam engines, lighting, vehicles, and air conditioning. Efficiency lowers the resource cost of a unit of service. Demand decides how much of the engineering saving remains at the system level.

AI makes the mechanism easy to see. Suppose a new accelerator and a better model cut the electricity required for an inference in half. If the number of inferences stays fixed, electricity use falls. If the lower cost makes inference cheap enough to put into every search box, spreadsheet, call center, camera, factory, and software product, total electricity use can rise while electricity per inference falls sharply.

Both statements can be true at once: AI can become dramatically more efficient and the data-center sector can consume more power.

The recent history of computing is good reason not to treat scale as destiny. Through much of the 2010s, data-center computation expanded far faster than electricity consumption because servers, storage, virtualization, cooling, and facility operations improved. There is no physical law requiring each generation of useful computation to drag a proportional amount of electricity behind it.

There is also no law requiring efficiency gains to outrun demand forever.

Modern AI systems have changed the composition and density of the load. Accelerated servers draw more power than conventional servers and concentrate that power into less floor space. Higher rack densities alter cooling design, electrical distribution, and backup requirements. The energy consumed by the processors is only part of the facility total; fans, pumps, power conversion, cooling, lighting, and other infrastructure consume electricity too.

Engineers summarize part of this overhead with power usage effectiveness, or PUE: total facility electricity divided by IT electricity. Lower is better. A facility can have an excellent PUE and still be enormous.

The ratio says how efficiently the building supports the computers. It does not say how many computers the owner has chosen to install.

That distinction matters because AI companies are buying unusually expensive hardware. Once the chips exist, the economics often favor keeping them busy. Flexible demand sounds attractive from the grid’s point of view: run training jobs when electricity is plentiful, pause them when the system is tight, move workloads between regions. Some computation can work that way.

Some cannot. Interactive services have latency targets. Training runs have deadlines and complex checkpointing. Data may be difficult or unlawful to move. Spare accelerators may not exist in the region where power is cheap. A company that has spent billions of dollars on hardware may rationally pay a high electricity price rather than leave the equipment idle.

Compute can be flexible. Capital can make it stubborn.

The same tension appears in siting. Data centers have traditionally cared about fiber, latency, taxes, land, labor, water, and proximity to customers. Power availability can now outrank several of those factors. A mediocre site with a credible connection date may beat an otherwise ideal site that cannot receive firm service for years.

That changes geography. It encourages developers to move toward places with generation or transmission headroom, sign long-term power agreements, support new generation, install storage, or build behind-the-meter supply. It also creates incentives for utilities and regulators to invent new rate structures for unusually large customers.

Those rate structures matter because the downside is not symmetrical.

Berkeley Lab’s August 2026 review of large-load tariffs describes the problem plainly: utilities can face insufficient supply if growth is underestimated and underused investments if projects do not materialize. Either mistake can spill costs onto other customers unless contracts, deposits, minimum bills, exit fees, construction contributions, or similar protections assign risk deliberately.

The data center may be private. The network is shared.

Who should pay for a substation sized for a customer that may leave after five years? Who bears the cost of a transmission upgrade if several announced campuses collapse into one real project? Who receives the benefit if new infrastructure later serves other customers?

These are old utility questions wearing new hardware.

They also weaken a simplistic version of the economic-development case. A large data center can bring tax revenue, construction, investment, and demand for electricity. It can also require infrastructure whose cost and opportunity cost are borne beyond the site. The relevant comparison is not “investment versus no investment.” It is the value of the project against the generation, network, land, water, and financial commitments required to serve it.

Nor should a request for power be confused with realized demand.

Announcements are cheap enough to be strategic. Developers can seek sites in several regions while intending to build only one. Utilities may see multiple requests for projects competing for the same corporate capital. Forecasts can therefore count options as though they were obligations.

NERC has already begun adjusting to this problem. Its 2025 Long-Term Reliability Assessment projected more than 224 gigawatts of additional North American summer peak demand over ten years, with data centers accounting for most of the increase. It also noted that newer forecasts in some regions had moved lower in the near term because projects were delayed or cancelled.

A press release can contain a gigawatt. The grid cannot.

Only equipment that connects and operates becomes load.

The challenge is that reliability planners have to prepare before that distinction is fully resolved. In August 2026, NERC was proposing new reliability standards and registry criteria specifically for computational loads. The work covers interconnection studies and modeling, operating data and communications, protection coordination, and disturbance monitoring.

That is a remarkable change in category. AI is not only a topic for computer science or corporate strategy when clusters become large enough to affect the bulk power system. Their electrical behavior becomes part of reliability engineering.

The grid does not care whether the load is intelligent. It cares whether the load is large, concentrated, fast-changing, and predictable when the system is under stress.

This is where the analogy to an aluminum smelter or steel mill is useful and where it breaks down. Industrial plants have long consumed huge amounts of electricity. Their loads, processes, and expansion plans are comparatively familiar to utilities. AI campuses can arrive on technology-industry schedules, change hardware generations quickly, and carry more uncertainty about long-run utilization. A planner may be asked to build forty-year infrastructure for a customer whose most important machine will be obsolete in a fraction of that time.

The mismatch is not that electricity is slow and software is fast. Some generation can be built quickly, and some digital infrastructure is difficult to move. The mismatch is between asset lives, planning horizons, and decision clocks.

Generation is only part of the answer. A data center can sign a contract claiming that its annual electricity consumption is matched by renewable generation. That may finance useful clean supply, but annual accounting is not the same thing as being physically served by that resource every hour. Solar output at noon does not directly satisfy a load at midnight unless the surrounding system supplies the difference through storage, other generators, or the grid.

A dedicated gas plant can supply firm power more directly, while adding fuel-price and emissions exposure. New nuclear or geothermal could provide low-carbon firm electricity if projects are built on time and at acceptable cost. Batteries can shift energy across hours but do not automatically solve multi-day shortages or transmission congestion. Every option changes the constraint rather than abolishing it.

The emissions story is therefore inseparable from timing and location.

Globally, the IEA expects renewables to supply a large share of additional data-center electricity through 2030, with natural gas, nuclear, and other sources contributing as well. If low-carbon generation and networks expand quickly, growing AI demand can be met with a relatively small emissions penalty. If load outruns those additions, existing or new fossil generation can fill the gap.

The same megawatt of computation can have a different carbon consequence depending on where and when it runs.

This is another reason the global percentage can mislead. Data centers below 3 percent of world electricity in 2030 can still be decisive in a region where demand is growing faster than generation and wires. A small global sector can determine whether a local gas plant remains open, whether a transmission project advances, or whether other customers face higher system costs.

The strongest argument against making too much of all this is straightforward: AI may surprise on the side of efficiency.

Models may become much smaller. Specialized chips may improve faster than expected. Useful applications may saturate. Companies may discover that customers will not pay for ubiquitous inference. Projects now advertised may never be energized. The IEA’s headwinds case is not a footnote; it is a plausible future in which efficiency and slower deployment hold global data-center electricity use near 700 terawatt-hours in 2035.

If that happens, some infrastructure plans being debated today will look excessive.

The opposite outcome is plausible too. Cheaper inference may create uses that are difficult to see from the present. Training may remain compute-intensive. Video, robotics, scientific modeling, autonomous systems, synthetic data, and agentic software may add loads that current forecasts only approximate.

The honest conclusion is not that AI will overwhelm electricity systems. It is that the uncertainty itself has become an infrastructure fact.

The power system has to make commitments before the technology sector knows how much intelligence it will buy.

There is a temptation to treat this as evidence that energy is the hidden measure of intelligence. It is not. A badly trained model does not become insightful because its data center has a larger transformer. Algorithms, data, chips, institutions, capital, and human judgment still determine what computation can do.

Energy is an enabling constraint, not an explanation of cognition.

But constraints reveal themselves most clearly at the frontier. When chips are scarce, companies talk about chips. When skilled researchers are scarce, they compete for researchers. When power becomes scarce at the right place and time, a product that appears immaterial begins to reorganize around substations, generation contracts, and transmission maps.

Artificial intelligence makes an old lesson visible again: every material capability eventually presents a physical bill.

The interesting question is what happens when the bill arrives faster than the network can be expanded.
