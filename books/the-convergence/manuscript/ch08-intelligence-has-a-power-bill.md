# Intelligence Has a Power Bill

For most people, computation still feels weightless.

A question is typed into a box. An answer appears. A photograph is searched, a route calculated, a language translated, a video recommended. Nothing visibly turns. No fuel is poured into the machine. The physical work has been pushed so far from the interface that a modern digital service can seem closer to thought than to industry.

Artificial intelligence is making that illusion harder to maintain.

Behind a frontier model is a building full of machines. Behind the machines are electrical substations, transformers, switchgear, cooling equipment, backup systems, fiber, water in some designs, and a grid connection large enough to feed them. The chips may perform operations measured in numbers too large to picture, but the constraint that reaches the utility planner is more familiar: megawatts.

The International Energy Agency offers a useful scale comparison. A conventional data center might draw 10 to 25 megawatts. An AI-focused hyperscale facility can exceed 100 MW. The largest facilities under construction when the IEA published *Energy and AI* in April 2025 were around 2,000 MW, and announced projects reached still farther. A 100 MW facility can consume roughly as much electricity in a year as 100,000 households. The [IEA’s description of the energy-AI nexus](https://www.iea.org/reports/energy-and-ai/understanding-the-energy-ai-nexus) is careful about the comparison: these are power-demand scales, not claims that every data center operates identically every hour.

That distinction between power and energy matters more here than it does in casual conversation.

Energy is accumulated consumption over time. Power is the rate at which energy must be delivered at an instant. A data center can be efficient in annual energy terms and still present a difficult power problem if hundreds of megawatts have to arrive continuously at one location. The grid does not serve an annual average. It has to satisfy the load when the machines ask for it.

This is the first reason AI changes the energy story. Computation has always required electricity, but frontier AI is concentrating unusually large electrical loads into particular places at unusually high speed.

The second reason is that demand is rising while the efficiency of computation is improving.

That combination should now be familiar.

Chapter 6 described the efficiency paradox: when a service becomes cheaper, society can use the savings to consume less input, or it can buy more of the service. Computing has spent decades doing both. Transistors became smaller. Hardware became more capable. Data centers improved power management and cooling. Software learned to accomplish tasks with fewer resources. Yet cheaper computation opened new markets faster than old workloads disappeared.

AI pushes that dynamic into a domain where the product itself is difficult to count.

A lumen is a unit of light. A passenger-mile is a unit of transport. What is a unit of intelligence?

Training runs, tokens, floating-point operations, model parameters, benchmark scores, queries, and users each measure something different. A model can become more capable while using fewer parameters. A new chip can perform more operations per joule while total accelerator shipments surge. An inference system can become dramatically more efficient per token while demand for generated tokens rises by a larger factor.

This makes forecasts unusually fragile.

The IEA estimates that data centers consumed around 415 terawatt-hours of electricity globally in 2024, about 1.5 percent of world electricity consumption. Its 2025 base case projected that figure to reach about 945 TWh in 2030, just under 3 percent of global electricity demand. Data-center electricity use in that projection grows around 15 percent per year from 2024 to 2030, more than four times as fast as electricity consumption in all other sectors combined. The underlying assumptions and sensitivity cases are laid out in the [IEA’s data-center demand analysis](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai).

The number is large, but its context matters. Data centers account for less than one-tenth of projected global electricity-demand growth to 2030 in the IEA base case. Industrial motors, air conditioning, and electric vehicles each contribute more. AI is not swallowing the world’s power system.

Locally, it can feel much closer to doing so.

Data centers cluster because networks, customers, skilled labor, land, tax policy, fiber routes, existing facilities, and electricity infrastructure cluster. The IEA estimates that nearly half of U.S. data-center capacity is concentrated in five regional clusters. In Virginia, data centers already accounted for about a quarter of electricity supply in the IEA’s 2024 estimate. A load that is modest as a share of global electricity can become a dominant planning variable for one utility territory.

The geography changes the problem.

A million electric cars spread across a country create a different electrical challenge from a cluster of data centers asking for the same annual energy in one county. Cars can often charge at different hours. A large computing facility is designed around keeping expensive hardware productive. Interruptions have costs. Utilization matters. The load is dense, concentrated, and often expected to be available around the clock.

The physical density also creates heat.

A processor does not consume electricity and make the energy vanish. Nearly all of the electrical energy entering computing equipment eventually becomes heat that must leave the equipment and, ultimately, the building. Cooling is therefore not decorative infrastructure around computation. It is part of the conversion chain.

The IEA estimates that servers account on average for around 60 percent of electricity demand in modern data centers, with cooling and other infrastructure consuming part of the remainder. The proportions vary sharply by facility. The familiar metric called power usage effectiveness, or PUE, compares total facility energy with the energy delivered to IT equipment. A PUE approaching 1 means less overhead outside the computing hardware, but it does not mean the computation itself is efficient. A facility can have excellent PUE while its servers perform a wasteful workload. It can also improve model efficiency while total facility demand rises because far more work is being done.

Facility efficiency, hardware efficiency, algorithmic efficiency, and total electricity consumption are different quantities.

Confusing them produces almost every bad argument about AI and energy.

The United States makes the uncertainty unusually visible because its data-center buildout is large enough to alter national electricity forecasts. Lawrence Berkeley National Laboratory’s original 2024 national report estimated that data centers used about 176 TWh in 2023, roughly 4.4 percent of U.S. electricity, and developed scenarios reaching 6.7 to 12 percent by 2028.

Then the forecast moved.

In June 2026, Berkeley Lab published an updated bottom-up analysis using newer information on planned IT-equipment shipments, per-device electricity use, cooling performance, facility type, and location. Its reference case estimates U.S. data-center electricity consumption at 649 TWh in 2030, or 11.8 percent of total U.S. electricity. Its sensitivity range spans 9.5 to 15.3 percent. The [2025 Update to the United States Data Center Energy Usage Report](https://datacenters.lbl.gov/publications/united-states-data-center-energy-2025) is more useful than the older forecast precisely because it demonstrates how quickly the evidence is changing.

A forecast revised upward is not proof that the new forecast will be right.

The range remains wide because the underlying system is moving on several fronts at once. How many accelerators will be manufactured? How much power will each generation of hardware use? How quickly will models become more efficient? How much inference will users demand? Will companies build the facilities they have announced? Will grid connections arrive on schedule? Will capital remain available if returns disappoint? Will new architectures reduce the need for brute-force scaling?

A confident single line through 2030 would conceal more than it reveals.

The IEA handles this by publishing sensitivity cases. In its 2025 analysis, global data-center electricity demand in 2035 ranged from about 700 TWh in a headwinds case to more than 1,700 TWh in a lift-off case. A high-efficiency case delivered the same assumed level of digital and AI services with more than 15 percent less electricity than the base case. The spread is not a rounding error. It is evidence that efficiency, adoption, and energy-system bottlenecks can materially change the physical footprint of the same broad technological transition.

There is a temptation to resolve this uncertainty by reaching for a simple ratio: energy per query, energy per token, energy per training run.

Those numbers can be useful for a defined system at a defined time. They are dangerous when generalized.

A short text query and a long reasoning task do not require the same computation. Generating an image differs from classifying one. Training a model differs from serving it. A model running on one accelerator generation can have a different energy profile on another. Batch size, utilization, memory movement, precision, cooling, software, and data-center overhead all matter. Even the same model can consume different energy depending on how it is deployed.

The more stable quantity for energy planning is often the one the utility sees: the aggregate load of the facility and the probability that it will actually connect.

This is where AI begins to collide with the slower clock of infrastructure.

A model architecture can change in months. A chip generation can turn over in a few years. A data center can be planned and built relatively quickly. Large transmission projects, power plants, substations, and manufacturing supply chains often move more slowly. The IEA notes that a data center can become operational in two to three years while the broader energy infrastructure required to serve it can take substantially longer.

The mismatch creates a peculiar inversion.

For decades, digital technology was the fast layer sitting on top of an electricity system whose demand in many advanced economies barely grew. Now the digital layer is asking the physical layer to expand again.

North American reliability planners can see the change in their load forecasts. The North American Electric Reliability Corporation’s [2025 Long-Term Reliability Assessment](https://www.nerc.com/our-work/assessments/long-term-reliability-assessments) forecasts summer peak demand rising by 224 GW over ten years, a projection more than 69 percent higher than the growth forecast in the prior year’s assessment. NERC says new data centers for AI and the broader digital economy account for most of the projected increase. Winter peak demand is forecast to rise by 246 GW.

These are forecasts submitted through a planning process, not metered future consumption. Some proposed loads will be delayed, reduced, relocated, or abandoned. That is the strongest counterevidence to the most breathless version of the AI power story: announced megawatts are not operating megawatts.

The distinction is not semantic. Utilities can receive overlapping requests from developers exploring several sites for one eventual project. A company may announce a campus before securing all of its power. Forecasts can include projects at different levels of maturity. Economic conditions can change. Hardware can become more efficient before a facility opens.

If every announced data-center load is treated as inevitable, the analysis becomes a press-release counter.

But dismissing the pipeline because some projects will fail creates the opposite error. Utilities still have to plan before certainty arrives. A transformer cannot be ordered after the load appears if the equipment takes years to procure. A transmission line cannot be permitted after a server hall is energized. Resource adequacy depends on capacity existing before the hour it is needed.

Infrastructure is built under uncertainty or it is built late.

This is why the power bill for intelligence is not merely an electricity bill. It is a capital-allocation problem.

A data center needs energy, but it also needs deliverability. The value of a megawatt at the wrong node is limited. Generation on the other side of a congested transmission interface may not solve a local capacity problem. A region with abundant annual renewable energy can still face hours when wind and solar output are low and computing demand remains high. Backup generation, storage, transmission, demand flexibility, and firm resources all enter the design problem.

The IEA estimates that around 20 percent of planned data-center projects could face delays if grid risks are not addressed. That estimate is a modeled assessment, not a count of projects already delayed, but it captures the emerging sequence: first chips were scarce, then suitable power connections became part of the competition for compute.

The source of that electricity matters too.

There is a clean narrative available in which AI companies create demand for solar, wind, geothermal, nuclear, and storage, accelerating a low-carbon power buildout. Some of that is happening. Technology companies have signed large power-purchase agreements, invested in advanced energy technologies, and become unusually motivated buyers of new generation.

The near-term physical mix is less tidy.

The IEA’s base case projects renewables meeting nearly half of the growth in global electricity supply for data centers through 2030. Natural gas and coal together supply more than 40 percent of the additional demand over the same period. In the United States, natural gas is the largest source of additional data-center electricity in the IEA base case through 2030. In China, coal remains a major source. The [IEA’s supply analysis for AI](https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai) estimates that emissions associated with global data-center electricity rise toward 2030 before flattening and declining modestly in its base case.

The wire still hides the source.

A model trained on coal-heavy electricity and the same model trained on low-carbon electricity may be computationally identical while having different emissions. A company’s contractual claim to renewable energy and the physical generators serving its load at a particular hour are also not necessarily the same thing. Annual procurement can be economically meaningful without proving that a facility operates carbon-free every hour.

This is not a reason to single out AI as uniquely dirty. Data centers remain a small share of global emissions in the IEA scenarios. It is a reason to keep the accounting honest.

The more interesting environmental question may be what AI does outside the data center.

If AI improves grid operations, industrial processes, logistics, building control, scientific discovery, or materials design, it can affect energy use elsewhere. The IEA has modeled cases in which widespread adoption of existing AI applications improves energy efficiency and reduces emissions, while also warning that rebound and adoption barriers can erode those gains. The sign of the net effect is not known in advance.

An energy-intensive technology can enable energy savings elsewhere. An efficient technology can stimulate more consumption. Chapter 6’s paradox returns at a larger scale.

There is also a distributional question hiding inside the aggregate electricity numbers.

A utility that must build generation, substations, or transmission for a large new customer has to decide who bears the cost and who bears the risk if the forecast load does not materialize. Data centers can expand a local tax base and create construction and technical employment, but they can also compete for constrained electrical capacity, water, land, and equipment. A global technology is always built somewhere.

The physical location matters to people who may never use the model being served.

That fact complicates the language of “the cloud.” Clouds are useful metaphors because users do not need to know which machine performs a task. They are terrible descriptions of infrastructure. Data centers are among the most grounded objects in the digital economy: large buildings attached to specific substations, watersheds, tax jurisdictions, transmission systems, and generation fleets.

AI has not dematerialized intelligence. It has industrialized a new kind of computation.

The comparison should not be pushed too far. A data center is not a steel mill. It does not consume ore or emit from a blast furnace at the site. Its output can be copied at almost zero marginal material cost. Software can improve without rebuilding the building. A breakthrough in algorithms can change the amount of hardware needed for a task far faster than a metallurgical breakthrough can shrink a furnace.

That flexibility is the strongest reason not to extrapolate today’s energy intensity mechanically into the future.

The history of computing is a history of doing more with less hardware per operation. There is no reason to assume that progress stops now. Models can become smaller. Specialized chips can improve. Quantization can reduce precision where full precision is unnecessary. Better scheduling can raise utilization. Cooling can improve. Inference can move to smaller models when frontier capability is not required.

But efficiency does not settle total demand.

If the cost of useful intelligence falls enough, more applications become economical. A company that would never have paid a human to inspect every image, summarize every document, translate every interaction, optimize every route, or generate thousands of design alternatives may ask a machine to do so. The relevant rebound is not necessarily a user typing more prompts. It is intelligence-like computation becoming cheap enough to enter processes that previously contained none.

The service boundary expands.

That is why AI belongs in an energy history rather than only a computing history.

Fire expanded the useful energy available beyond human metabolism. Agriculture stored solar energy in forms that institutions could concentrate. Coal released societies from part of the annual biomass budget. Electricity separated source from service and made power controllable at the edge. Efficiency lowered the energy cost of capabilities and often enlarged their markets.

AI introduces a service that seems almost maximally abstract—language, prediction, pattern recognition, generation, decision support—and reveals that even this service arrives through a physical conversion chain.

The chain can be hidden from the person asking a question. It cannot be hidden from the grid.

That does not prove that intelligence can be reduced to electricity. Human intelligence is biological, social, historical, embodied, and not measured in kilowatt-hours. Nor does the electrical appetite of current AI architectures prove that more energy will always produce more capable models. Algorithmic breakthroughs can dominate brute-force scaling. Data quality, architecture, training methods, and product design matter.

The narrower claim survives those objections.

At the frontier being built now, computational capability is constrained partly by the rate at which electrical power can be delivered to machines and heat can be removed from them. Electricity is not sufficient for intelligence, but without electricity the computation does not happen.

The thesis would have to narrow if that relationship weakened sharply—if frontier capability kept rising while aggregate AI compute and electricity needs flattened because algorithmic and hardware efficiency consistently outran demand, or if the enormous announced load pipeline dissolved into projects that never operated. Both outcomes are possible enough that they belong inside the chapter rather than outside it.

For now, the evidence points in the other direction, with unusually wide error bars.

Global data-center electricity demand is rising quickly. U.S. national-laboratory estimates have been revised upward as newer hardware and deployment plans entered the model. Reliability planners are raising load forecasts. Data-center developers are treating grid connection as a site-selection constraint. Energy companies are treating computing customers as a new class of large industrial load.

The frontier of computation has acquired a power-system timetable.

That may be the most revealing development of all. The digital economy spent decades teaching users that information could arrive instantly. Artificial intelligence is now colliding with infrastructure that cannot.

A model can be copied in seconds.

A gigawatt cannot.