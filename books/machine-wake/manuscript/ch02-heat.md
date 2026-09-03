# Chapter 2 — Heat

Put your hand on the back of a laptop that has been working hard and the abstraction ends.

The machine is warm because computation is physical. Transistors switch. Current moves through resistance. Electrical energy that entered the device in a useful form leaves much of it as heat. The heat does not know whether the machine spent the last minute rendering a game, compiling software, decoding video or answering a question about Roman history. The meaning of the computation disappears at the thermal boundary. What remains is energy that has to go somewhere.

This is the first part of the machine wake because it is the part no interface can eliminate.

Software can hide complexity. Pricing can hide capital expense. A cloud can hide geography. None of those things can repeal thermodynamics. Every data center is, among other things, a place built to move heat away from electronics reliably enough that the electronics can keep working.

The phrase “data center cooling” makes that task sound secondary, as though the important work happens in the servers and cooling merely keeps the room comfortable. In high-density computing, heat removal is part of the computing architecture. A processor that cannot shed heat fast enough slows down or stops. A rack that cannot move enough heat into a cooling system cannot safely host the hardware its owner wants to install. A building without sufficient cooling capacity has unused electrical potential even if plenty of power reaches the property.

The machine's ability to think, in the everyday language people now use, is partly limited by its ability to sweat without water, circulate fluid without blood and dump warmth into a larger environment.

For decades, conventional server rooms were organized around air. Fans moved air through server chassis. Facility systems supplied cool air and removed warmer air. Raised floors, containment aisles, vents and careful rack layouts were used to prevent hot exhaust from mixing prematurely with cold supply air. The engineering could be sophisticated, but the basic medium remained familiar: move enough air across enough surface area to keep components within their thermal limits.

AI accelerators have pushed the problem toward greater density. A modern rack filled with advanced computing hardware can demand power at a scale that would have looked unusual in earlier generations of enterprise computing. More electrical power concentrated in the same physical space means more heat concentrated in that space. Air still works in many situations, but moving enormous quantities of air becomes noisy, bulky and energetically expensive. Heat transfer through liquids becomes increasingly attractive because liquids can carry much more heat per unit volume than air.

This is why server design now includes technologies that would look at home in an industrial plant. Cold plates sit against hot components. Pumps circulate coolant. Manifolds distribute fluid through racks. Heat exchangers transfer thermal energy between loops. Some designs immerse electronics in dielectric fluid. Facility operators decide where the boundary should sit between the technology equipment and the building's mechanical systems. Vendors debate standards for connections, water quality, temperature, pressure and leak detection.

The apparent magic of the answer box ends in plumbing.

That is not an insult to the technology. Plumbing is one of civilization's great achievements. It is a reminder that advanced computation becomes useful at scale only when several mature engineering disciplines meet without drama.

The best cooling system is not necessarily the one that makes the chips coldest. It is the one that maintains acceptable temperatures across expected loads while balancing energy, water, reliability, maintenance, capital cost, climate, available space and future hardware. Cooler is not free. A system that uses extra energy to drive temperatures lower than necessary can waste power. A system that chases maximum efficiency while leaving too little redundancy can make failure more likely. A design that is ideal in a cool dry climate may be foolish in a hot humid one.

Thermal engineering is therefore a good place to learn a broader lesson about the wake: the residue is shaped by constraints, not slogans.

It is easy to say that AI produces heat. It is harder, and more useful, to ask how much heat is produced in a particular place, at what density, at what temperature, with what cooling system, and what happens to it next.

At the chip, essentially all of the electricity used eventually appears as heat. At the facility level, additional energy is used by pumps, fans, chillers, power conversion and other supporting systems. Engineers often use power usage effectiveness, or PUE, to describe the ratio of total facility energy to the energy delivered to IT equipment. A PUE close to 1 means comparatively little facility energy is being used beyond the computers themselves. The metric is useful but incomplete. It says nothing by itself about whether the electricity is low-carbon, whether water is consumed, whether waste heat is reused, whether the hardware is fully utilized or whether the computation produced something valuable.

Still, the direction matters. Improvements in facility efficiency have allowed data centers to support more computing without overhead growing at the same rate. This is one reason simple stories about digital infrastructure aging into ever-greater inefficiency are wrong. Operators have powerful economic reasons to reduce wasted electricity. At large scale, a few percentage points are real money.

The difficulty is that demand is growing at the same time.

The International Energy Agency has documented rapid growth in data-center electricity use and expects AI-focused computing to be a major driver of the next phase. Lawrence Berkeley National Laboratory's 2026 update on United States data-center energy use likewise projects a wide but substantial range for the share of national electricity that data centers could consume by 2030. These are forecasts, not destiny. They depend on shipment volumes, hardware efficiency, cooling performance, utilization and workload growth. Their value is not that they provide one number to carve in stone. Their value is that they make the scale of the thermal problem impossible to treat as a footnote.

Every kilowatt entering active computing equipment becomes roughly a kilowatt that the facility eventually needs to move out as heat. A campus measured in hundreds of megawatts is not only a very large electrical customer. It is a very large continuous heat-management system.

The physical geography of AI begins to make more sense from this perspective.

Why do operators care about ambient temperature? Because outside conditions affect how easily heat can be rejected. Why do cooling technologies become part of regional water debates? Because some ways of rejecting heat use evaporation. Why does rack density matter to building design? Because high heat flux changes what air can accomplish and how fluid must be delivered. Why do chip designers care about power efficiency? Because every avoided watt reduces both the electrical bill and the thermal burden downstream.

Heat couples decisions that look separate on an organizational chart.

A model researcher changes the number of operations needed for a task. A chip designer changes joules per operation. A server designer changes how heat reaches a coolant. A data-center engineer changes the facility overhead. A utility changes the carbon and water consequences of the electricity supplying the site. A software team changes utilization by batching work, caching results or choosing a smaller model. A product manager changes demand by deciding that a feature should call a model once or twenty times.

The wake is assembled across all of them.

This is why debates about “the energy use of AI” often become frustrating. Participants are sometimes answering different questions while using the same words. One person is discussing the energy required for one inference. Another is discussing a training run. Another is discussing global data centers. Another is discussing the marginal electricity needed by new AI infrastructure in one region. Another is discussing carbon emissions rather than electricity. Another is discussing cooling water. The argument becomes a collision of denominators.

Heat offers a way back to first principles. Pick a boundary and follow the energy.

At the smallest useful boundary, a chip receives electrical power and releases heat. At a server boundary, add memory, networking, storage and fans or pumps. At a rack boundary, include power distribution and shared cooling equipment. At a facility boundary, add the mechanical and electrical systems needed to support IT. At a grid boundary, ask which generators respond to the load, which transmission assets carry it and what losses occur. At a life-cycle boundary, add the energy and materials used to manufacture equipment and build the facility.

Each boundary answers a different question. None should be casually substituted for another.

The same discipline helps with comparisons. A claim that one model is “more efficient” can refer to lower energy per token, fewer tokens needed to solve a task, lower total runtime, better hardware utilization or less facility overhead. A model that uses fewer joules per token but generates far more tokens can consume more energy per completed job. A large model that solves a difficult task in one pass may use less total computation than a smaller system that fails repeatedly. An agent that performs useful work for an hour should not be compared with a chatbot response as though they were the same product.

Meaning returns before the thermal boundary. What matters is energy per useful outcome, not energy per arbitrary digital unit.

This is where the wake can become an engineering tool rather than a guilt metric.

If heat is unavoidable, reduce the amount created per useful task. Use the smallest model that can reliably do the job. Improve algorithms. Improve hardware. Keep accelerators busy enough that the embodied and idle costs of equipment are not wasted. Batch compatible work. Cache results that do not need to be recomputed. Avoid pointless retries. Place workloads where infrastructure can serve them efficiently when latency and other constraints allow. Design products that do not call expensive models when ordinary software is sufficient.

Then improve what happens after the heat appears.

Raise coolant temperatures when equipment permits so that chillers do less work. Use economization when outside conditions allow direct or indirect cooling without mechanical refrigeration. Improve pumps and fans. Keep airflow paths clean. Monitor fouling. Reduce recirculation of hot exhaust. Use cooling topologies suited to actual rack density rather than to a past generation of equipment.

And in some locations, treat waste heat as a resource.

Data centers have supplied heat to district-heating systems, greenhouses and nearby buildings. The idea is attractive because it turns a residue into a product. The difficulty is practical. Low-grade heat is not valuable everywhere. A data center may sit far from a steady heat demand. The temperature may be too low without a heat pump. The demand may be seasonal while the computing load is year-round. Pipes and heat exchangers cost money. A facility designed primarily around uptime will be cautious about adding dependencies.

Waste-heat reuse is therefore not a universal answer. It is a good example of designed residue: valuable when geography, temperature, infrastructure and demand align.

The same caution applies to claims about “free cooling.” Outside air can sometimes help reject heat with little or no compressor work, but climate, air quality, humidity and equipment design matter. Liquid cooling can reduce fan energy and handle density, but pumps, water quality, leak management and service procedures matter. Immersion can move heat efficiently, but hardware compatibility, fluid handling and maintenance practices matter. No cooling architecture escapes tradeoffs by having a futuristic name.

The reliability tradeoff is especially important because the value of computing equipment is concentrated.

A thermal failure can quickly reduce performance or damage hardware. Systems therefore include sensors, alarms, redundant pumps, backup power for cooling controls, spare capacity and procedures for reacting to unusual conditions. The very infrastructure that reduces the risk of failure creates its own idle capacity and maintenance burden. Redundancy is a kind of intentional residue: equipment that may spend most of its life waiting for the moment when primary equipment fails.

From a narrow utilization perspective, redundancy looks wasteful. From a reliability perspective, it is the price of making a service dependable.

The same pattern will recur with logs, backups, safety reviews and human oversight. Efficient systems are not systems in which every resource is visibly busy every second. They are systems that spend enough on resilience to avoid much more expensive failures without turning precaution into uncontrolled accumulation.

Heat also exposes the limits of software metaphors.

Cloud computing invited users to think of servers as a pool. Serverless computing invited them to think of infrastructure as something that appeared only when code ran. Artificial intelligence services now invite people to think in tokens and requests. These abstractions are useful because they let a developer build without locating a machine. But the provider still has to locate the machine.

A rack has a floor loading. A data hall has a fire-suppression design. A cooling plant has pumps. A substation has transformers. A chip package has a maximum junction temperature. A coolant has chemistry. A facility has neighbors. The fact that a developer rents the capability by the second does not make the equipment intermittent.

This gap between economic abstraction and physical continuity becomes important when demand grows quickly. A user can double software demand in minutes. A utility cannot double a transmission line in minutes. A provider can release a model that makes a new category of workload attractive overnight. A data-center campus takes years to plan, permit and build. Transformers, turbines, switchgear and cooling equipment have manufacturing lead times. Heat is immediate. Infrastructure is slow.

The wake therefore has a timing problem.

When computational demand rises faster than supporting infrastructure can be expanded, operators look for shortcuts: existing sites, available power, temporary generation, higher rack density, more aggressive cooling, deferred loads, new contracts. Some solutions are elegant. Some simply move constraints elsewhere. A local grid with spare generation may lack transmission. A region with power may face water constraints. A site with land and water may be too far from users for latency-sensitive services. A data center with efficient cooling may still be supplied by an electricity mix that makes the overall carbon consequence unattractive.

The constraint migrates until someone designs around it.

This is another reason the wake is a better unit of analysis than the answer. The answer does not tell us which constraint was binding. The residue does.

A rack that repeatedly throttles reveals a thermal limit. A cluster with low utilization reveals scheduling or demand mismatch. A cooling plant operating near capacity during hot afternoons reveals climate exposure. A utility interconnection queue reveals electrical scarcity. A high water-use effectiveness number reveals one relationship between cooling and IT energy, but only within a particular facility boundary. Data about residue is diagnostic.

The same principle applies at the level of product design.

Imagine two AI assistants that deliver nearly identical user experiences. The first sends every keystroke to a large remote model, generates speculative answers continuously and discards most of them. The second handles simple prediction locally, waits for a meaningful request, routes easy tasks to a small model, caches repeated work and calls a larger system only when needed. To the user, both may feel fast. Thermally, they are different products.

The invisible architecture is part of the product whether marketing mentions it or not.

This does not mean users should be forced to think about joules every time they ask a question. The purpose of infrastructure is to absorb complexity. It means designers should have enough visibility into the wake that efficiency can become a quality attribute rather than a public-relations claim.

A sensible organization can ask: How much computation does this feature trigger? What fraction produces an outcome users keep? How often do we retry? Which model sizes are used for which tasks? How does latency change if we batch? What is the utilization of provisioned accelerators? Are we measuring facility overhead? When load shifts geographically, what other constraints change? Can we reduce the number of model calls without reducing quality?

Those questions turn heat from an externality into feedback.

There is a broader cultural benefit to recovering the thermal reality of computing. It discourages two equal and opposite fantasies.

The first fantasy is that digital work is immaterial and therefore nearly free of physical consequences. The second is that every unit of digital work carries a fixed and enormous environmental cost. Both fail for the same reason: they treat engineering as irrelevant.

AI is material enough that heat cannot be ignored and malleable enough that the amount of heat per useful outcome can change dramatically.

That combination should make the subject interesting rather than fatalistic.

The history of computing is, in part, a history of doing more useful work per unit of energy. The reason a phone can perform tasks that once required room-sized machinery is not that physics relaxed. Engineers learned to manipulate the same physics more efficiently. AI will continue that tradition. Models will become more efficient. Hardware will improve. Cooling will improve. Software will become better at routing work. Some tasks that now require a large remote system will move onto smaller devices.

At the same time, uses will multiply. More people will ask more systems to do more things more often. Some workloads will become longer and more autonomous. Video, simulation, science and robotics can be much more computationally intensive than short text. Efficiency and demand will race each other.

The result cannot be inferred from either trend alone.

But one thing can be known in advance: whatever electricity enters the machine will leave the computation as heat.

The answer may vanish when the window closes. The heat has already joined the world.
