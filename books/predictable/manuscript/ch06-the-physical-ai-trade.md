# The Physical AI Trade

A model can be copied in seconds. A substation cannot.

That difference has become one of the defining facts of the AI buildout.

The public experience of artificial intelligence is almost weightless. A prompt travels to a service and an answer appears. Nothing about the interface suggests copper, switchgear, transmission rights of way, cooling loops, turbine orders, construction crews, or a transformer whose delivery date may be measured in years.

Then the bill reaches the wall socket.

By June 2026, Lawrence Berkeley National Laboratory estimated that U.S. data centers could consume 11.8 percent of national electricity by 2030 in its reference case. Its scenario range ran from 9.5 to 15.3 percent.

The range is more useful than false confidence in the midpoint.

AI demand is uncertain. Hardware efficiency is uncertain. Model efficiency is uncertain. The number of announced campuses that will actually be energized is uncertain. Grid connections, permitting, financing, and equipment availability can all delay a project that looks inevitable in a press release.

But even the low end describes a load large enough to matter to the power system.

The International Energy Agency reached the same conclusion globally. It estimated data centers used roughly 415 terawatt-hours of electricity in 2024, about 1.5 percent of world demand. Its base case rises to about 945 terawatt-hours by 2030, with accelerated servers associated mainly with AI accounting for almost half the increase.

The IEA also publishes futures in which efficiency improves faster or AI deployment runs into more friction. That is exactly what a useful forecast should do. The physical system and the computing system are changing at the same time, so a single neat number would imply more certainty than the evidence deserves.

Companies still have to build before the uncertainty disappears.

A modern AI campus needs processors, memory, storage, and networking. Those are the glamorous parts. None of them work without a slower industrial system around them.

Electricity has to be generated. It has to reach the site. Voltage has to be transformed. The campus needs switchgear, protection equipment, backup systems, cooling, fiber, roads, concrete, steel, pumps, pipes, permits, and people who can install all of it.

Each layer has a different supply curve.

That is where the software story turns into an infrastructure story.

Electricity is the obvious constraint because it is stubbornly local. A cloud company can move a server order from one region to another. It cannot move a gigawatt of spare grid capacity from Iowa to Virginia by changing a spreadsheet.

Location matters.

So does timing.

Data centers prefer continuous power because expensive machines earn nothing while they are idle. Reliability has a different meaning when a power interruption can knock thousands of processors out of a coordinated workload. Utilities therefore have to plan for concentrated demand, not merely annual energy consumption.

A hundred-megawatt campus is manageable at the scale of a national grid. Several large campuses arriving in one utility territory can be a very different problem.

Planning systems were not designed around customers whose load forecasts can jump by hundreds of megawatts because a model release changed corporate strategy.

That mismatch is now reaching regulation.

In June 2026, the Federal Energy Regulatory Commission required the six regional grid operators under its jurisdiction to justify or revise the rules governing how large loads such as data centers connect to the transmission system.

The questions sound procedural until money is attached to them.

If a data-center developer requests service and the grid needs a major upgrade, who pays? What happens if the customer later cancels? Should other ratepayers be left with the cost? How much generation should a utility build against a queue in which several proposed campuses may be competing for the same tenants? What happens when a large load tries to co-locate beside an existing power plant and consume much of its output directly?

These are capital-allocation questions created by scarcity.

A cloud company can overbuild compute. A utility can overbuild for compute.

The difference is that regulated infrastructure has to decide in advance who bears the cost when the forecast is wrong.

Generation has its own version of the problem.

At the end of 2025, Berkeley Lab counted more than 2,060 gigawatts of generation and storage actively seeking interconnection in the United States.

The number was enormous.

It was not the same thing as 2,060 gigawatts of future supply.

Most projects that enter interconnection queues never get built. Some lack financing. Some lose their economics. Some cannot secure permits or equipment. Some withdraw when a better project moves ahead.

A queue is evidence of interest, not an inventory of assets that will exist.

The same discipline should be applied to data centers. An announced five-gigawatt campus is not five gigawatts of operating load. It is a proposal contingent on land, power, financing, equipment, customers, and years of execution.

Physical infrastructure contains layers of optionality long before it becomes productive capacity.

That does not mean the bottlenecks are imaginary.

It means they provoke a response.

Long grid-connection times encourage developers to look in other regions. Scarce grid power raises the value of on-site generation, storage, and efficiency. Expensive electricity raises the value of chips that deliver more work per watt. A parcel with an existing substation becomes more valuable than cheaper land without power. Slow permits send projects toward jurisdictions willing to move faster.

A bottleneck is not just an obstacle.

It is a price signal for engineers and capital.

Transformers provide a beautifully unglamorous example.

They are century-old technology and, until recently, rarely appeared in conversations about artificial intelligence. Yet no giant electrical load can simply attach itself to whatever voltage happens to be nearby.

The U.S. Department of Energy has reported that distribution-transformer lead times rose from roughly three to six months in 2019 to 12 to 30 months in 2023. AI did not cause the entire shortage. Pandemic disruption, material constraints, labor, utility specifications, and broader electrification all mattered.

Data-center growth arrived in an already tight market.

This is what an infrastructure boom does. It recruits industries that had no reason to think of themselves as part of the original technology.

Copper producers, transformer manufacturers, utilities, turbine suppliers, engineering firms, cooling specialists, construction contractors, and landowners can all become part of the AI trade without training a model.

Scarcity rents migrate.

When accelerators are scarce, chip suppliers have leverage. When megawatts are scarce, a utility territory can have leverage. When energized land is scarce, a site developer can have leverage. When transformer slots are scarce, electrical-equipment makers can have leverage.

Then investors make the familiar inference: an input is scarce and valuable, therefore capacity that produces more of it must also be valuable.

Sometimes that is the right conclusion.

Sometimes it is how the next surplus is financed.

The transformer shortage is already producing efforts to expand manufacturing, simplify specifications, improve interoperability, and shorten delivery times. Grid operators are revising interconnection procedures. Utilities are changing load forecasts. Technology companies are signing long-term power agreements and looking at nuclear, gas, renewables, storage, geothermal, and dedicated generation.

None of those responses is instant.

That matters.

Transmission can take years. Large transformers and turbines are not software. New nuclear projects operate on timelines that make a model-generation cycle look like a blink. Gas projects run into turbine and pipeline constraints. A site can have land and fiber and still wait years for usable power.

The shortage can be temporary and profitable for a very long time.

Cooling introduces another clock.

Almost all the electricity consumed by processors eventually becomes heat. Higher rack densities concentrate that heat in less space. Air cooling that worked well for ordinary enterprise servers becomes less attractive, pushing operators toward liquid systems and other designs.

The IEA estimates that cooling can account for about 7 percent of electricity use in highly efficient hyperscale data centers and more than 30 percent in less efficient enterprise facilities.

There is no universal overhead ratio.

Climate matters. Facility age matters. Utilization matters. Equipment temperature limits matter. Cooling design matters.

Water is similarly local.

Some systems consume water directly. Power generation can consume it indirectly. Berkeley Lab research has shown that the water footprint of an individual computing workload can vary enormously depending on server efficiency, cooling technology, utilization, climate, location, and the electricity mix.

So the sentence “AI uses water” is true and not yet an analysis.

The same workload can have very different physical consequences depending on where and how it runs.

That flexibility is important because computation can move more easily than a steel mill.

Some training workloads can run where power is cheaper, cleaner, or more abundant. Some inference needs low latency and therefore stays close to users; some does not. A company blocked by a grid queue in one region may have options elsewhere.

This is strong counterevidence to the idea that today's bottlenecks impose a permanent ceiling on AI growth.

Computing has a long history of routing around constraints.

When hardware is expensive, engineers compress models, use fewer bits, cache, batch, schedule better, and build specialized silicon. When cooling becomes difficult, they redesign the thermal system. When one region cannot supply power, they search for another.

The physical system moves more slowly than software.

It still moves.

This is why announcements require translation.

A giant campus proposal is not operating capacity. A requested grid connection is not an energized rack. A generator in an interconnection queue is not power available to a customer. A utility load forecast is not a binding contract.

The distinction is easy to forget because every participant has a reason to plan before certainty arrives.

Utilities cannot wait until every server is installed before deciding whether a substation is necessary. Transformer makers cannot expand a factory after every order is already late. Power developers cannot begin permitting after demand has become undeniable.

Infrastructure forces capital to move while evidence is incomplete.

That is where the financial risk enters.

A data-center developer may reserve power years before tenants fully commit. A utility may reinforce a network based on a load forecast. A transformer maker may add capacity because current lead times suggest years of demand. A power developer may enter a queue because data-center growth appears durable.

Each decision can make sense.

Together they become the supply response.

The risk is not only that AI demand disappoints.

Solutions can arrive from several directions at once.

A new accelerator can reduce electricity per unit of useful work. Better models can accomplish the same task with fewer tokens. Liquid cooling can raise rack density. Standardized transformer designs can shorten production. Interconnection reform can speed projects. New generation can relieve local scarcity. Flexible workloads can move away from constrained regions.

A parcel that commands a premium because it has 200 megawatts available in 2026 may face a different market after four years of investment aimed at creating more parcels like it.

That does not make today's scarcity rent fictional.

The constraints are real enough to alter federal regulation and corporate siting decisions. They are real enough to push equipment lead times into years and to make technology companies structure power agreements on a scale once associated with heavy industry.

The question is who owns the bottleneck after everyone tries to solve it.

Some constraints will be harder to remove than others.

Transmission rights of way, permitting, local politics, nuclear sites, gas-pipeline access, low-cost power, fiber connectivity, water, and energized land may preserve advantages for long periods. Certain equipment markets may remain concentrated enough to support durable margins.

Other shortages may be competed away quickly once standardization and new manufacturing catch up.

That is why there is no single “physical AI trade.”

There is a chain of assets whose values depend on one another and whose lives are radically different.

Models improve in months. Accelerators turn over in years. Data-center shells last longer. Substations, transmission lines, and generation assets can remain for decades.

The clocks do not line up neatly.

A GPU installed because compute is scarce in 2026 may become second-tier while the substation built to serve it is still near the beginning of its useful life. A transmission upgrade can outlive several generations of models. A gas plant, nuclear agreement, or power contract can shape economics long after the software that justified it has changed beyond recognition.

The physical layer therefore makes AI both more tangible and harder to value.

If demand compounds for twenty years, grid investments made during the shortage may look obvious in hindsight. If computational efficiency improves faster than expected, some long-lived projects may arrive into a softer market. If training concentrates in a few giant campuses while inference disperses, the winners at one layer may not be the winners at another.

A coherent investment case has to make those clocks fit.

The processor needs the rack. The rack needs cooling. The cooling needs electricity. Electricity needs generation, transmission, transformation, and regulation. The building needs land, permits, financing, fiber, and customers.

A delay at one layer can strand capital at another.

That chain is the reason the least glamorous parts of the AI boom deserve attention.

The boom entered public imagination through models.

It is now visible in switchyards, transformer factories, cooling loops, utility queues, transmission plans, concrete pads, and parcels of land valuable mainly because someone can energize them.

The physical layer proves that the capital is real.

It does not prove the return.

Every bottleneck has a price. A high price attracts a response. The response takes time. And the assets built to solve today's shortage can live much longer than the shortage itself.

The next chapter brings those different clocks onto the financial statements.

A data center may stand for decades. The processors inside it may not.

Somebody still has to decide how fast to depreciate them.