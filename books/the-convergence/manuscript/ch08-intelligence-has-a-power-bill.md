# Intelligence Has a Power Bill

A modern AI rack can fit inside a space not much larger than a refrigerator.

By 2027, according to the International Energy Agency, an advanced rack of that size could draw peak power comparable to roughly sixty-five households.

One rack is not a data center. A frontier facility may contain thousands of them, backed by networking gear, storage, cooling systems, batteries, switchgear, transformers, substations, generators, and enough electrical redundancy that a momentary disturbance does not interrupt machines worth billions of dollars.

The intelligence appears on a screen. The industrial plant behind it does not.

That gap between appearance and infrastructure is easy to miss because computation has spent decades becoming less visible. The machines shrank. The interfaces became cleaner. A search box, spreadsheet, phone, or chatbot gives almost no clue about the physical system carrying out the request.

Yet every inference is work. Charges move through transistors. Memory is read and written. Data travel across networks. Heat accumulates and has to be removed. The calculation may feel weightless to the user, but the machine obeys thermodynamics all the same.

This has always been true. What changed is scale and concentration.

The International Energy Agency estimates that data centers used about 485 terawatt-hours of electricity worldwide in 2025. That was still a small share of global electricity demand. It was not remotely close to swallowing the grid.

But the global percentage hides the local problem.

A large data center does not ask for a tiny fraction of world electricity. It asks a particular utility for hundreds of megawatts at a particular site, sometimes on a schedule much shorter than the time required to build the generation, substations, transformers, transmission, and permits that make those megawatts usable.

The distinction is the same one that matters throughout this book: total energy is not the same as available capability.

A region can have ample annual generation and still be unable to serve a new load at the place and hour it is wanted. A utility can have fuel, generators, and customers willing to pay, yet lack the network capacity to connect another campus. A developer can own land, chips, financing, and a nearly finished building while waiting for the date on which the site can actually be energized.

In that sense, computation has re-entered the world of heavy industry.

The factories are quieter. Their finished product can be a stream of tokens rather than steel, fertilizer, or automobiles. But the project schedule increasingly depends on objects that would have been familiar to an electrical engineer a century ago: transformers, switchgear, cooling equipment, turbines, wires, substations, and permits.

There is a temptation to turn this into a grand law: intelligence is energy.

That goes too far.

A watt is not a thought. More electricity does not guarantee a better model, any more than more gasoline guarantees a better car. Algorithms, training data, chip architecture, memory bandwidth, networking, software, capital, and human judgment all matter. Improvements in any of them can change the amount of energy required for a given result.

The energy cost of an AI task has, in fact, been falling very quickly.

The IEA's 2026 update describes energy use per AI task dropping by at least an order of magnitude annually in recent years as hardware and software improved. That is a remarkable rate of efficiency gain. A simple text query can require very little electricity compared with many ordinary household activities.

If the story ended there, AI might become another case in which better engineering makes the physical substrate steadily less important.

The story does not end there.

Efficiency makes a service cheaper. Cheap services get used more. Better models make new uses worthwhile. Longer contexts, video generation, reasoning systems, agents, repeated sampling, personalized software, scientific search, coding assistance, robotics, and synthetic media can consume far more compute than a simple text response.

The same IEA analysis that records huge gains in efficiency also notes that some newer AI tasks can consume hundreds or thousands of times more energy than simple text generation.

The unit gets cheaper while the menu expands.

This is the efficiency paradox in a new costume. Energy per task can collapse while total electricity use rises because there are more users, more tasks, more demanding tasks, larger models, higher utilization, and more machines running for more hours.

That does not prove a Jevons-style rebound of any particular size. It would be sloppy to infer a causal rebound percentage from rising electricity demand alone. Adoption, model capability, chip supply, utilization, and data-center construction are all changing at once.

But the direction of pressure is clear enough to matter for infrastructure.

Data-center electricity demand grew about 17 percent in 2025, according to the IEA. Electricity use at AI-focused data centers grew faster still. The agency's central outlook puts global data-center consumption at roughly 950 terawatt-hours in 2030, close to double the 2025 level.

Forecasts that far ahead should not be read as meter readings from the future.

The uncertainty is unusually large because the technology being forecast is itself changing while the forecast is being made. Model architectures shift. Chips improve. Software gets leaner. Customers discover uses nobody modeled. Other uses disappoint. Capital spending races ahead and then projects are cancelled. A facility announced at one size may open later, smaller, larger, or not at all.

The IEA's own scenarios make the point. Stronger efficiency can satisfy the same digital-service demand with materially less electricity than the base case. Berkeley Lab's June 2026 U.S. analysis likewise gives a wide range rather than a single inevitable outcome.

Its reference case puts U.S. data centers at about 649 terawatt-hours in 2030, or 11.8 percent of national electricity consumption. The modeled range runs from roughly 521 to 843 terawatt-hours, or 9.5 to 15.3 percent.

That is not a rounding error. It is a different grid-planning problem depending on where reality lands.

The uncertainty itself becomes infrastructure.

Utilities are accustomed to building long-lived assets for loads that grow more slowly than software companies do. A transmission line, gas turbine, transformer factory, or substation may take years to plan, finance, permit, build, and commission. A frontier AI product can change its architecture twice before the first shovel goes into the ground.

This produces an awkward mismatch between technological time and electrical time.

Underbuild, and a real load may wait years for power. Overbuild, and customers may pay for assets sized around projects that never materialize. Build generation near the load, and fuel, emissions, noise, water, land, and local opposition enter the calculation. Move the data center elsewhere, and fiber, latency, climate, taxes, labor, and access to other infrastructure change with it.

There is no purely digital solution to a transformer lead time.

The mismatch is not only about how much electricity a facility uses over a year. It is about the shape of the obligation the utility is being asked to accept.

A customer that consumes a great deal of energy but can wait for favorable hours is one kind of planning problem. A customer that expects its full contracted capacity to be available at any moment is another. The annual meter reading can be identical while the network, generation, and reserve requirements are very different.

That distinction matters for computation because not all compute is equally urgent.

Some work is tightly coupled to a human request. A search result, medical image, payment authorization, or interactive model response loses value if it arrives tomorrow. Other work has more temporal slack. Training, batch inference, synthetic-data generation, software testing, some scientific workloads, and portions of internal analytics may be movable within limits. A job that can shift by an hour is not the same electrical product as a job that must finish now.

The important phrase is within limits.

Servers are not magic batteries. Deferring computation can interfere with deadlines, equipment utilization, customer commitments, cooling conditions, network traffic, or expensive chips that investors expect to keep busy. A data center designed around continuous high utilization cannot casually become a grid-balancing device whenever electricity is scarce. The value of flexibility depends on what the machines are doing, how long work can move, how often curtailment is requested, and what happens to the deferred work afterward.

There is also a trap in shifting rather than reducing load. If a training run pauses during a stressed hour and simply resumes later, the grid may gain relief at the peak without much reduction in total energy consumption. That can be extremely valuable for reliability, but it is not the same thing as efficiency. Capacity and energy are different products.

The reverse is true as well. A more efficient chip may reduce annual electricity use while doing little to solve a local connection problem if the facility still wants the same peak capacity so it can run more chips at once.

This is why conversations about AI electricity often become confused. One person is talking about terawatt-hours. Another is talking about megawatts. A third is talking about emissions. A fourth is talking about transformer capacity. They can all be correct and still appear to disagree because they are measuring different constraints.

The useful question is not simply whether computation can become flexible. It is which computational services can tolerate which kind of flexibility, in which place, under which commercial arrangement.

That turns software scheduling into a piece of energy-system design.

A facility with genuine temporal slack can expose some of that slack to a utility or grid operator. It might slow selected workloads, move jobs between campuses, charge batteries before a constrained period, or alter cooling operations without interrupting the services users actually notice. In a region where a few stressed hours drive a large share of infrastructure needs, even limited flexibility can matter.

But flexibility does not erase the need for wires and generation. A campus that can curtail occasionally still needs power most of the time. A workload shifted to another region becomes somebody else's load. A battery has a finite duration. A backup generator consumes fuel. A demand-response contract is valuable only if the promised response arrives when the system is stressed.

The engineering possibility therefore has to survive institutional contact.

Who is allowed to call the curtailment? How much notice is given? How is performance measured? Who bears the cost if a job misses its deadline? Does the customer get paid for flexibility, receive a cheaper connection, or accept lower firmness in exchange for earlier service? What happens if a supposedly flexible load behaves inflexibly during an emergency?

Those questions are less glamorous than model architecture. They are also where a large fraction of the practical value sits.

The same is true of location.

A data center can be more geographically mobile than an aluminum smelter once the fiber, legal, security, and latency requirements are satisfied. Computation does not need an ore body beneath it or a port beside it. That creates an unusual option: instead of moving electricity toward load, some load can move toward electricity.

Yet that freedom is easy to exaggerate. The best electrical site may be far from dense fiber routes. A cool climate may have limited transmission. A region with abundant generation may lack skilled construction labor or sufficient transformers. A politically welcoming jurisdiction may have expensive power. A cheap-power region may impose water constraints or long permitting timelines. Interactive services can care about latency in ways batch training does not.

The geography of computation is therefore a multi-constraint optimization, not a treasure hunt for the world's cheapest kilowatt-hour.

This changes the economic meaning of spare capacity. A power system that once treated underused generation or transmission as a historical accident may discover that flexible computational load is willing to travel to it. Conversely, a region already struggling to build housing, transmission, or generation may decide that attracting another enormous load is not obviously a bargain merely because the customer is wealthy.

The industry is already adapting. Developers seek sites near existing substations or large generation sources. Some sign long-term power agreements. Some finance new generation. Some add batteries or onsite generators. Some consider operating flexibility that could reduce load during stressed grid hours. Others chase regions where electricity is cheap, permits are faster, or network capacity is underused.

What looks from Silicon Valley like a race for models becomes, on the ground, a race for interconnection rights and construction slots.

The grid operators have noticed.

In 2026, the North American Electric Reliability Corporation began moving toward dedicated reliability requirements for large computational loads. The proposed standards address interconnection studies, operational data, communications, protection coordination, and disturbance monitoring. NERC is also considering new registered entity categories specifically for computational-load owners and operators.

That is an extraordinary institutional milestone for a technology whose popular image is still a chat window.

Reliability organizations do not create new categories because a load is fashionable. They do it when the electrical behavior is large enough, fast enough, or unusual enough to affect the bulk power system.

AI loads can be unusual in several ways. They are concentrated. They can ramp rapidly. Their power electronics may behave differently during voltage disturbances from traditional industrial equipment. Training jobs and computing workloads can shift in ways that produce sudden changes in demand.

A steel mill is a large load, too. The difference is that a steel mill usually does not replicate on a software investment cycle.

This does not mean every grid is about to be overwhelmed by AI.

Globally, data centers remain a minority of electricity demand. Even the IEA's central 2030 projection puts them around 3 percent of the world total. Buildings, industry, transport, cooling, appliances, and rising living standards still account for far more electricity.

That perspective matters because data centers attract attention out of proportion to their global share. They are new, concentrated, capital intensive, politically visible, and associated with companies whose valuations make every megawatt sound consequential.

A serious account has to hold both facts at once.

AI is not consuming most of the world's electricity.

AI can still dominate the planning problem in the particular places where very large facilities are trying to connect.

Scale is geographic before it is global.

The same asymmetry appears in emissions. There is no single carbon footprint for an AI query because electricity systems differ. A server running in a region with abundant hydro, nuclear, wind, or solar has a different operating-emissions profile from the same server on a coal-heavy grid. The timing of load matters too. So does the generation built to serve growth rather than the average generation already on the system.

It is therefore misleading to assign AI one timeless emissions number and equally misleading to pretend that efficiency improvements erase the need to think about supply.

The supply response matters because new load can change what gets built.

The IEA expects renewables to meet a large share of additional data-center electricity demand, but gas, coal, and nuclear also contribute in its outlook. A hyperscale buyer may sign a clean-power contract while the local system still dispatches fossil generation during other hours. A new gas plant justified partly by data-center growth can operate for decades. A nuclear restart or new reactor agreement can likewise be accelerated by large customers seeking firm low-carbon power.

The load does not arrive alone. It changes investment incentives around it.

That is one reason the phrase "AI's power bill" should be understood broadly.

The bill includes electricity, but also the capital needed to make electricity dependable at a particular site. It includes cooling equipment, backup systems, network upgrades, land, interconnection studies, and whatever generation is built because the new load exists.

It also includes risk.

The risk may sit with a technology company that prepays for infrastructure. It may sit with a utility that builds for projected demand. It may sit with ordinary ratepayers if costs are socialized and the customer later scales back. It may sit with communities asked to host generators, substations, transmission lines, water systems, or acres of industrial buildings.

A megawatt is an engineering quantity. Who pays for the megawatt is an institutional choice.

That distinction becomes important when forecasts are uncertain and loads are unusually large. A traditional subdivision can fill gradually. A data center can arrive as a single customer whose requested load resembles that of a city.

If the customer appears, the utility needs to be ready. If the customer disappears, the utility still owns the equipment.

The old problem of stranded infrastructure has acquired a new protagonist.

There is a second reason not to reduce AI to electricity: the binding constraint can move.

Suppose utilities solve the power problem faster than expected. Transformer factories expand. New generation is built. Interconnection becomes quicker. Data centers spread toward regions with spare capacity. Energy per task keeps falling.

Then memory bandwidth may bind. Or advanced packaging. Or chips. Or networking. Or capital. Or the availability of high-quality data. Or the difficulty of turning model capability into a product people will actually pay for.

This is the pattern the book has encountered repeatedly. A civilization solves one constraint and discovers that another had been waiting behind it.

Fire did not abolish scarcity. Agriculture did not abolish scarcity. Coal did not. Electricity did not. Efficiency did not.

What each transition did was enlarge the feasible set.

AI is interesting in this history because it converts electricity into something that looks unusually close to cognition. The conversion is indirect and imperfect, but the chain is real: generation becomes electric power; electric power becomes computation; computation becomes predictions, images, code, plans, classifications, translations, and decisions that can alter activity elsewhere in the economy.

The product may be informational. The production process is physical.

That has consequences for where intelligence can be produced cheaply. A model can be copied globally, but the infrastructure to train or serve it cannot be conjured everywhere at once. Electricity price, grid reliability, climate, water, fiber, land, regulation, taxes, and construction capacity begin to shape the geography of machine cognition.

The cloud has weather after all.

There is a deeper inversion here.

For most of human history, intelligence was expensive because human brains were scarce, slow to train, biologically fragile, and attached to bodies with limited working hours. Modern computation changes some of those constraints. A machine can copy software, run continuously, and scale across hardware.

But machine cognition substitutes one set of scarcities for another.

Silicon has to be fabricated. Servers have to be assembled. Memory has to be packaged. Data centers have to be built. Electricity has to arrive. Heat has to leave.

A digital mind, if that phrase is ever warranted, still needs plumbing.

The most defensible claim is therefore not that intelligence has become an energy problem.

It is that frontier computation has become large enough for the energy system to participate directly in its feasible speed, cost, and geography.

That threshold matters.

A technology that once fit comfortably inside existing electrical demand is now large enough that grid planners are writing new standards around it, utilities are redesigning load forecasts, developers are negotiating for generation and interconnection years in advance, and communities are debating whether the local benefits justify the infrastructure required.

The power bill has become part of the product roadmap.

This makes AI a useful bridge between the previous chapter and the next one. Chapter 7 argued that more kinds of useful work are converging on electricity. Computation is one of the fastest-growing and most concentrated examples.

But once a large electrical load appears, the relevant question is no longer simply whether enough energy exists somewhere in the system.

The question is whether the network can deliver it.

A model may live in software. Its constraint can be a transformer.