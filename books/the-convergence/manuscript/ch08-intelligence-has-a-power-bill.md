# Intelligence Has a Power Bill

A model can be copied in seconds. A substation cannot.

This difference is beginning to matter.

For most of the history of computing, the machine’s appetite for electricity was easy to hide inside a larger story of shrinking devices and improving efficiency. A transistor replaced a vacuum tube. An integrated circuit replaced a board full of components. A laptop performed work that once required a room. The service became more powerful while the hardware became smaller, cheaper, and less conspicuous.

Artificial intelligence has not reversed that history. The chips are still improving. Algorithms are still improving. Data centers are still becoming more efficient at turning electricity into useful computation.

But the scale has changed fast enough that the power system can now see the computer coming.

A large AI data center is not merely an office building with extra servers. It can arrive as a block of electrical demand measured in hundreds of megawatts, concentrated on one site, operating for long stretches, and expecting the kind of reliability that makes an ordinary commercial load look forgiving. At the scale now being proposed, the comparison is less to a corporate campus than to a steel mill, refinery, or aluminum smelter.

The unusual part is the speed.

A computing company can order servers, lease a building, and install equipment on a technology timetable. The electrical system moves on another clock. New transmission lines can take many years. Large transformers have their own manufacturing queues. Power plants require permits, fuel, equipment, and interconnection. A utility has to decide not only whether a proposed load is real, but whether it will still be there after the infrastructure built for it is paid for.

The intelligence may be artificial. The power bill is not.

In 2024, data centers consumed roughly 415 terawatt-hours of electricity worldwide, according to the International Energy Agency. That was about 1.5 percent of global electricity consumption.

One and a half percent is not civilization-devouring.

It is also not trivial.

The interesting fact is where the load is concentrated and how quickly it is changing. The United States accounted for about 45 percent of global data-center electricity use in 2024. Nearly half of American data-center capacity was concentrated in five regional clusters. A load that is modest in the global denominator can therefore be enormous to the utility territory, transmission corridor, or substation that actually has to serve it.

This is the same distinction that appears throughout energy systems: averages are useful until infrastructure has an address.

The global grid does not deliver a global average electron to a global average server. A particular facility connects to a particular network on a particular date.

That local reality is why the current AI boom has become an energy story.

The IEA’s base case projects global data-center electricity consumption rising to around 945 terawatt-hours by 2030, a little more than double the 2024 level. Yet the same report is unusually explicit about how uncertain that number is. By 2035, its scenarios range from roughly 700 terawatt-hours in a slower-growth case to more than 1,700 terawatt-hours in a faster one.

That is not a rounding error.

It is a range large enough to contain two very different energy futures.

The uncertainty comes from several directions at once. AI adoption may accelerate or disappoint. Models may become much more efficient. Hardware may improve faster than expected. Users may respond to lower inference costs by asking for far more inference. New applications may create demand that does not yet exist. Data centers may run their equipment harder or leave expensive accelerators idle more often than planners expect. Cooling systems, utilization rates, chip lifetimes, and software architecture all change the electricity required to produce a unit of useful computation.

Forecasting AI power demand therefore requires guessing not only how efficient computers will become, but what people will choose to do with cheaper intelligence.

That second question is harder.

The history of computing contains a warning against straight-line energy extrapolation. During the 2010s, global data-center compute activity grew vastly faster than data-center electricity use because servers, storage, virtualization, and facility efficiency improved at extraordinary rates. More computation did not translate one-for-one into more electricity.

There is no reason to assume that relationship suddenly disappears.

At the same time, there is no reason to assume efficiency will rescue every forecast.

AI accelerators have changed the composition of the load. The IEA expects electricity use by accelerated servers—the machines most associated with modern AI—to grow far faster than electricity use by conventional servers in its base case. These systems also push more power through a smaller physical footprint. A rack that once drew a few kilowatts can give way to racks whose demand is measured in tens or even hundreds of kilowatts.

Power density changes the engineering.

Electricity has to reach the rack through switchgear and busways. Heat has to leave it. Pumps, fans, cooling towers, chillers, or liquid-cooling loops have to move that heat somewhere else. Backup systems have to be sized for a facility whose interruption may waste expensive compute runs or disrupt services used around the world.

This is why a data center’s electricity consumption is larger than the power drawn by its processors alone.

Engineers often describe the relationship with power usage effectiveness, or PUE: total facility electricity divided by the electricity consumed by the IT equipment. A perfectly impossible PUE of 1.0 would mean every watt entering the building reached the computers and none went to cooling, power conversion, lighting, or other overhead. Real facilities do better or worse depending on climate, design, equipment, and operation.

PUE is useful, but it can also distract from the larger point.

An exceptionally efficient facility can still consume an enormous amount of electricity if it contains an enormous amount of computing equipment.

Efficiency changes the slope. Scale changes the total.

This is Chapter 6’s paradox returning in silicon.

Suppose a new generation of chips performs the same inference with half the electricity. If demand for that inference stays fixed, electricity use falls. If the lower cost makes it economical to run ten times as many inferences, electricity use rises. If the improved chips enable an entirely new product category, the comparison becomes harder still because there was no previous demand to hold constant.

The relevant unit is not merely joules per calculation.

It is the total calculation society decides to purchase once calculation becomes cheaper.

That is why the phrase “AI efficiency” can describe two opposite futures without contradiction.

The computers can become more efficient while the sector consumes more electricity.

The newest U.S. estimates show how wide the possible outcome remains. In June 2026, Lawrence Berkeley National Laboratory updated its national data-center model. Its reference case puts U.S. data-center electricity use at about 649 terawatt-hours in 2030, roughly 11.8 percent of total U.S. electricity use. Its compounded uncertainty range runs from about 521 to 843 terawatt-hours, or roughly 9.5 to 15.3 percent of U.S. electricity consumption.

The model is built from projected equipment shipments, device electricity use, cooling performance, facility type, and location. Change those assumptions and the result moves sharply.

One sensitivity that increases AI-server utilization and idle power pushes the estimate to 782 terawatt-hours. Another that lowers expected IT installations reduces it to 578. A shorter assumed life for AI chips changes the result again.

This is not evidence that the forecast is useless.

It is evidence about what kind of forecast it is.

A data-center electricity projection is partly an energy model and partly a technology-adoption model. It inherits uncertainty from both.

The mistake would be to convert the reference case into a prophecy.

The opposite mistake would be to dismiss the entire issue because the number is uncertain.

Utilities do not get to wait for epistemological comfort.

If a developer asks for 500 megawatts of service, someone has to decide whether to reserve capacity, reinforce the network, procure generation, build a substation, or tell the customer that the connection date is years away. Overbuilding for speculative demand is expensive. Underbuilding for real demand can strand investment and constrain growth.

The grid has to make a capital decision before the forecast becomes history.

North American reliability planners are already confronting this problem. NERC’s 2025 Long-Term Reliability Assessment, updated in early 2026, raised its ten-year summer peak-demand growth forecast to more than 224 gigawatts, about 70 percent higher than the previous year’s forecast. New data centers accounted for most of the increase, followed by other large industrial loads and electrification.

Even that number is unstable.

NERC noted that some newer forecasts in ERCOT and PJM had already moved lower in the near term because data-center projects were delayed or cancelled, while still showing substantial growth later.

This is what a boom looks like from the control room.

Announcements arrive faster than steel. Some projects are duplicates. Some are options. Some will never be built. Others will be built faster than planners expected. The utility has to distinguish them before the customer has fully distinguished them itself.

The distinction between announced load and operating load is therefore essential.

A press release can contain a gigawatt.

A power system cannot.

Only connected equipment counts.

This matters because the scale of proposed AI infrastructure encourages a new kind of numerical theater. Companies announce campuses in gigawatts. Investors aggregate pipelines. Regions compete over hypothetical demand. The numbers are real enough to influence capital spending long before the servers turn on.

But a gigawatt under discussion is not a gigawatt under load.

The same discipline applies to generation announcements, interconnection queues, and future nuclear or gas projects meant to serve data centers. Plans are evidence of intention. They are not observations of operation.

Keeping those categories separate makes the AI-energy story less dramatic and more interesting.

The important constraint is not simply that AI “uses a lot of energy.” Plenty of industries use a lot of energy.

The important constraint is that computation is beginning to encounter the physical pace of the electricity system.

Software can scale through replication. Power scales through equipment, land, wires, cooling, permits, fuel, and construction.

This collision is changing the geography of computing.

For years, data-center location was driven by fiber connectivity, tax policy, land, latency, labor, and proximity to customers. Those factors still matter. Now the date on which a site can receive firm electrical service can dominate them.

A mediocre site with power may be more useful than a perfect site without it.

That creates incentives to move computation toward regions with generation and transmission headroom, to build dedicated generation, to sign long-term power contracts, to revive old plants, to pair campuses with storage, and to design workloads that can shift in time or place.

Not all computation is equally flexible.

A search query, voice assistant, payment authorization, or interactive model response is expected now. Latency matters. A training run, batch inference job, synthetic-data pipeline, or some forms of model evaluation may tolerate delay. If the electricity system can signal that power is abundant at 2 a.m. and scarce at 6 p.m., flexible computing could in principle behave less like a fixed industrial load and more like a controllable one.

In principle matters.

The economic value of expensive accelerators creates pressure to keep them busy. A company that has spent billions on chips may prefer to pay more for electricity rather than leave the machines idle. Contractual obligations can reduce flexibility. Some workloads have deadlines. Moving work between regions requires network capacity, software, available hardware, and sometimes data that cannot easily cross jurisdictions.

Flexibility is a resource, but it is not free.

The same is true of on-site generation.

A data center can install backup generators. It can contract with a nearby plant. It can support construction of new solar, wind, storage, geothermal, gas, or nuclear capacity. These arrangements may reduce pressure on the public system or help finance new supply.

They can also create new dependencies.

A campus claiming to be “powered by” a renewable contract may still draw from a local grid whose marginal generator burns gas or coal during the hours when the contracted wind or solar resource is not producing. Annual energy matching is not the same thing as hourly physical supply. A dedicated gas plant solves one reliability problem while creating a fuel and emissions problem. A new nuclear plant can provide firm low-carbon electricity if it is completed, but construction risk and schedule do not disappear because the customer is a technology company.

There is no digital exemption from power-system arithmetic.

The environmental argument therefore needs the same care as the demand argument.

AI is not on track to consume most of the world’s electricity. Even in the IEA’s 2030 base case, data centers remain below 3 percent of global electricity demand. Between 2024 and 2030, they account for less than 10 percent of global electricity-demand growth. Industry, air conditioning, electric vehicles, buildings, and rising incomes still matter more in aggregate.

That is the strongest counterweight to claims that AI is swallowing the grid.

Globally, it is not.

Locally, it can still rearrange the grid’s investment plan.

The distinction is more than rhetorical. A problem can be small in the world energy balance and large enough to determine whether a particular transmission line gets built, whether a gas turbine stays open, whether a utility accelerates a substation, or whether households in a fast-growing service territory face new infrastructure costs.

Energy politics happens at those scales too.

The generation mix matters for emissions. The IEA estimates that coal remains the largest source of electricity physically supplying data centers worldwide today, followed by renewables and natural gas. Its base case expects renewables to provide nearly half of the additional electricity needed through 2030, while natural gas, coal, and nuclear also contribute.

That outcome is not preordained.

If AI demand rises faster than transmission and low-carbon generation can be built, fossil generation can fill the gap. In the IEA’s faster-growth scenario, long grid-connection queues cause a larger share of incremental demand to be met by fossil fuels. If efficiency improves more rapidly or data-center growth slows, the system has more time to add cleaner supply.

The emissions consequence of AI therefore depends partly on timing.

Demand that arrives in three years encounters a different grid than demand that arrives in ten.

This is a recurring theme in energy transitions. Technology is not only a contest between levelized costs or laboratory efficiencies. It is a race between deployment clocks.

The computer industry is moving on one of the fastest clocks in the economy.

The power industry is not.

That mismatch may turn out to be temporary. Utilities can learn to process large-load requests better. Data-center developers can provide deposits or other commitments that separate serious projects from speculative ones. New generation can be built. Transmission can expand. Flexible loads can become real grid resources. Hardware can improve. Models can require less compute. The market can punish waste.

There is also a more radical possibility.

If useful machine intelligence becomes cheap enough, electricity may cease to look expensive compared with what the computation produces.

A megawatt-hour is costly if it powers an unproductive machine. It may be cheap if it produces thousands of hours of valuable design work, drug screening, coding, translation, logistics, tutoring, or scientific search. The economic question is not whether intelligence consumes energy. Human intelligence does too. The question is what value the resulting capability creates per unit of scarce resource.

That is harder to measure than a utility meter.

It is also the question that matters.

The danger is to confuse willingness to pay with social value. A profitable advertising system can outbid a public laboratory for electricity. A trading model can pay more for low-latency compute than a school can pay for tutoring. Markets reveal demand backed by money, not a complete ranking of human importance.

Abundant machine cognition may therefore intensify old allocation questions rather than make them disappear.

Who gets the scarce connection?

Who pays for the substation?

Who bears the cost if the load never arrives?

Who receives the upside if it does?

These are not computer-science questions.

They are infrastructure questions.

NERC’s response shows how quickly the categories are merging. In 2026 it began advancing reliability standards aimed specifically at large computational loads, including requirements around interconnection studies, operational data, communications, protection coordination, and disturbance monitoring.

A few years earlier, “AI safety” almost always meant the behavior of models.

Now part of AI safety is whether a cluster of machines behaves predictably when connected to the bulk power system.

The grid does not care whether the load is intelligent.

It cares whether the load is large, fast, concentrated, and controllable.

That is a useful corrective to the mythology around artificial intelligence.

From far away, AI can look like pure abstraction: matrices, tokens, weights, software, ideas.

Walk backward through the stack and the abstraction becomes physical very quickly. The model requires accelerators. The accelerators require racks. The racks require buildings. The buildings require cooling. The cooling requires water or air and more equipment. The site requires transformers, switchgear, backup power, fiber, land, and a connection to an electrical system that must supply the right voltage and frequency every second the machines run.

Intelligence has a supply chain.

At the bottom of it is energy.

This does not mean energy explains intelligence. A poorly designed model does not become useful because its data center has a larger transformer. Algorithms, data, chips, institutions, capital, and human judgment all matter. Energy is an enabling constraint, not a substitute for them.

That distinction protects the book’s larger thesis from becoming a caricature.

Civilization is not a machine that turns joules automatically into progress.

But every material capability has a physical bill somewhere.

AI makes that bill unusually visible because the product feels immaterial while the infrastructure becomes industrial.

The irony is useful.

The most abstract technology of the moment is forcing technology companies to relearn some of the oldest lessons of economic development: power plants take time, networks matter, geography matters, equipment has lead times, and a promise of future demand is not the same thing as a functioning system.

The next constraint, then, is not whether humanity can invent another generator.

It is whether the network can connect the things we already know how to build.