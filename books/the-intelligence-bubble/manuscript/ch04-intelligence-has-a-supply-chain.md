# Intelligence Has a Supply Chain

Ask a child where the internet lives and you may get a better answer than you would from a corporate presentation.

The child might point at the laptop.

At least the laptop is physical.

Adults spent two decades learning to speak about “the cloud” as though computation had escaped matter. We uploaded files to it. We migrated software into it. Companies became cloud-native. Infrastructure disappeared behind a dashboard and an invoice.

The abstraction was economically useful. It let businesses treat computing as a service rather than a collection of machines they owned. But the abstraction became so successful that investors forgot what was being abstracted.

AI has made the underlying machinery impossible to ignore.

**The Stack Below the Stack**

Begin with the model and move downward.

A model needs compute.

Compute needs accelerators, CPUs, memory, networking, storage, and software.

Accelerators need advanced semiconductor fabrication.

Advanced semiconductors need lithography systems, chemicals, wafers, design software, packaging, testing, and a global chain of specialized suppliers.

High-performance systems need high-bandwidth memory and advanced packaging capacity.

Clusters need switches, optical links, cables, network interface cards, racks, power distribution units, liquid cooling, pumps, heat exchangers, and backup systems.

The building needs concrete, steel, land, permits, security, fiber routes, and contractors.

The site needs electricity.

Electricity needs generation, transmission, substations, transformers, interconnection studies, fuel, storage, and regulatory approval.

Behind the synthetic sentence on a screen stands an industrial civilization.

This is not rhetoric. It is a map of where bargaining power can appear.

If advanced packaging is scarce, packaging earns scarcity returns.

If transformers are scarce, transformer suppliers gain leverage.

If powered land is scarce, land with interconnection rights becomes more valuable.

If GPUs are scarce, accelerator vendors gain leverage.

If cloud capacity is scarce, cloud pricing firms.

When those scarcities ease, the economics move elsewhere.

The AI value chain is therefore less like a single technology sector than a succession of temporary toll booths.

That last word matters: temporary. A bottleneck can be extraordinarily profitable without being permanent. High prices call forth capacity. Customers redesign around constraints. Competitors attack the fattest margin. Engineers substitute one scarce input for another. Governments decide that a dependency has become strategic and subsidize an alternative. What looks like a moat from inside a shortage can turn out to be a construction schedule.

This is one of the easiest mistakes to make in a capital boom. Investors observe a real scarcity and correctly conclude that the scarce thing has value. They then capitalize today's scarcity as though it were a durable property of the world.

Sometimes it is. Semiconductor manufacturing at the frontier requires accumulated process knowledge, immense capital, trusted customer relationships, specialized equipment, and years of execution. Those are not constraints that disappear because a spreadsheet assumes another factory. TSMC's 2025 annual report, for example, described robust AI-related demand not only for leading-edge silicon but for advanced packaging, while the company continued to invest heavily in capacity. The demand was real; so was the effort required to serve it.

But durable capability and durable scarcity are different propositions. A supplier can remain excellent while its customers gain alternatives. Capacity can grow while demand grows. The relevant investment question is not whether the component matters. It is whether the owner of that component will retain unusual bargaining power after everyone has had time to respond.

**Power Before Product**

A software company can create a new feature overnight.

A utility cannot create a new gigawatt overnight.

The International Energy Agency's work on AI and energy emphasizes the mismatch. A large data center can be developed in a few years, while the broader energy system often requires much longer lead times for generation and grid infrastructure. By 2026, the IEA was describing tightening bottlenecks in transformers, gas turbines, chips, grid connections, and regulatory approvals.

This changes what AI developers compete for.

The naive view is that they compete for the best researchers.

They do.

They also compete for megawatts.

A region with abundant fiber and cheap land but no credible path to power may be less valuable than a less glamorous site with a secured interconnection. A model company that can raise ten billion dollars but cannot energize new capacity has discovered the boundary between financial capital and physical capital.

Money can bid for a transformer.

It cannot make the factory produce last year's transformer today.

The scale is large enough that percentages can mislead. The IEA estimated data centers used roughly 415 terawatt-hours of electricity in 2024, about 1.5 percent of global electricity consumption. Globally, that is still a modest share. The same report projected roughly 945 terawatt-hours by 2030 in its base case, while emphasizing substantial uncertainty around adoption, efficiency, and infrastructure constraints.

Those global numbers are useful and dangerous. Electricity is not delivered from a global pool. Data centers cluster. A load that barely moves the world total can matter enormously to one utility, one transmission zone, or one county. The IEA estimated that nearly half of U.S. data-center capacity was concentrated in five regional clusters. It also warned that around one-fifth of planned projects could face delay if grid risks were not addressed, while transmission construction and waits for critical components could stretch for years.

That is why a megawatt in the right place is not economically equivalent to a megawatt somewhere else.

The distinction sounds obvious until a boom begins. Then capital has a way of counting nominal capacity while ignoring deliverability. A developer can announce a campus before the substation exists. A utility can have generation on its system without having the transmission capacity to serve a particular node. A technology company can sign a power-purchase agreement without making every hour of physical supply at its chosen site interchangeable.

The constraint is not “energy” in the abstract. It is dependable power, at a particular location, on a particular schedule, through a particular network.

That specificity creates rents. It also creates the conditions for those rents to migrate.

**The Chip Is a System**

The public shorthand for AI infrastructure is “GPUs,” but the shorthand hides the system.

A frontier accelerator sitting alone is a very expensive paperweight. Its economic value depends on memory, networking, software libraries, cluster architecture, cooling, scheduling, and workload utilization. Performance at scale is a systems problem.

This is why hardware moats can persist longer than a simple transistor-count story suggests. A supplier that controls not merely a chip but a software ecosystem, interconnect architecture, developer base, and optimized stack can defend value even while the underlying silicon improves rapidly.

Yet systems advantage does not eliminate the capital cycle. It can intensify it.

When the leading stack produces unusually attractive economics, customers and competitors have enormous incentives to design alternatives. Hyperscalers build custom accelerators. Startups pursue specialized architectures. Model designers optimize around different hardware. Governments support domestic substitutes. Software layers emerge to make workloads portable.

The stronger the toll booth, the more traffic tries to route around it.

There is another complication. The useful unit is not a chip but a functioning cluster. A shortage of one component can strand the economic value of all the others. An accelerator delivered without enough high-bandwidth memory does not create the intended system. Servers installed before adequate cooling is commissioned do not produce tokens. A completed building waiting on grid connection is real estate with an unusually expensive promise inside it.

This changes how investors should think about reported capacity. Nameplate quantities are seductive because they are countable: chips ordered, racks installed, megawatts announced, campuses planned. But a chain is governed by the least available complement. Ten abundant inputs do not cancel one missing input.

The pattern can reverse just as quickly. Once the missing complement arrives, capacity that looked scarce can appear all at once. Several suppliers expand in parallel because all saw the same prices. Customers who double-ordered during shortage receive deliveries from more than one vendor. Projects delayed by one constraint reach completion together. The market moves from allocation to utilization.

That transition—from “Can we get it?” to “Can we keep it busy?”—is where a supply-chain boom becomes a capital-cycle problem.

**The Cloud Becomes Industrial**

Cloud computing was once celebrated as the triumph of pooled resources. Instead of every company buying its own servers, hyperscalers could operate vast fleets more efficiently. Customers paid only for what they used. Utilization improved. Scale produced advantages.

AI pushes that model toward a new extreme.

A modern accelerator cluster can require enormous up-front capital, dense power, sophisticated cooling, and specialized networking. The largest deployments resemble industrial projects. Their economics depend on how much useful work the cluster performs over its life.

That word—*useful*—is critical.

A rack being powered is not the same as a rack generating economic value.

A reserved instance is not the same as a durable workload.

A benchmark run is not the same as a paying customer.

A customer contract is not the same as a solvent customer.

An installed GPU is not the same as an adequately utilized GPU.

The physical stack makes these distinctions unavoidable because the cost exists whether the narrative does or not.

It also introduces time in a way that software investors can underestimate. A server purchased today begins aging today. A data-center shell may last for decades, but the most valuable electronics inside it can move through generations much faster. The economic life of the campus and the economic life of the accelerator are not the same. Financing them as though they were one asset creates a mismatch between durable concrete and depreciating compute.

That mismatch can be harmless when utilization is high and prices hold. It becomes painful when performance per dollar improves faster than expected, customers shift to newer hardware, or a formerly scarce accelerator has to compete on price with the next generation. The machine can still work perfectly while its earning power falls.

This is why falling inference costs are not simply good news or bad news. They can expand usage dramatically. They can also transfer surplus away from the owner of yesterday's expensive capacity. More intelligence can be consumed even as the price of producing a unit of it declines.

The IEA's scenario work captures the physical side of the same uncertainty. Its high-efficiency case reaches materially lower electricity demand than its base case while serving the same broad expansion in digital services, because hardware, software, and infrastructure improve faster. Efficiency does not mean AI loses. It means the amount of physical input required for a given service can change.

For a society, that is generally welcome.

For an owner paid for the scarce input, it deserves closer attention.

**AI Competes With the Rest of the Economy**

Data centers do not merely consume electricity. They consume electricity in places.

That makes the burden local.

Globally, a few percentage points of electricity demand may sound manageable. In a specific transmission zone, the addition of several large data centers can dominate load growth, force upgrades, alter generation plans, complicate reliability, and become politically contentious.

This is why AI increasingly intersects with subjects once considered far outside technology investing: utility regulation, gas pipelines, nuclear licensing, transmission reform, water policy, local taxation, land use, and community opposition.

The cloud has zoning hearings now.

That is not a side story. It is a sign of maturity.

Technologies become economically consequential when they begin competing with other important uses of scarce resources.

The competition also complicates the easy claim that AI's infrastructure problem can simply be solved by building more generation. Generation is only one part of an electric system. New supply has to connect. Networks have to carry it. Equipment has to withstand changing load profiles. Reliability has to survive peaks, outages, maintenance, and weather. The IEA noted in 2026 that AI workloads can create large and rapid power swings, adding another systems problem behind the meter and on the grid.

None of this establishes that data-center growth is impossible. Quite the opposite. High prices, political attention, and valuable demand are powerful incentives to solve constraints. Renewables, natural gas, nuclear, storage, grid expansion, more flexible operations, and better siting can all contribute. Efficiency can do more work with the same electricity. Workloads can move in time or, in some cases, geography.

The countercase matters because infrastructure analysis easily becomes a catalog of bottlenecks. Bottlenecks are not destiny. They are prices and delays that provoke responses.

The investment consequence is subtler. If the response succeeds, today's bottleneck owner may lose scarcity power. If it fails, the downstream project that assumed cheap and abundant supply may disappoint. Either way, simply identifying a constraint is not enough. You have to ask who bears it, who can solve it, how long the solution takes, and what happens to returns after it arrives.

**The AI Value Stack**

It helps to abandon the idea that “AI” is one business and instead see nine layers:

1. Energy and land
2. Data-center infrastructure
3. Compute hardware
4. Cloud and capacity markets
5. Models
6. Tools and agent infrastructure
7. Enterprise workflows
8. Distribution and customer trust
9. End-user economic outcomes

Money enters the stack from the bottom as capital and from the top as willingness to pay.

The investor's job is to determine where the two meet with the least competition.

The most technically glamorous layer is not guaranteed to capture the most economic value. Sometimes suppliers do. Sometimes distribution does. Sometimes customers keep the surplus.

The history of technology is full of crucial layers that became cheap inputs to someone else's business.

The personal computer enriched software companies beyond most PC assemblers.

The internet enriched applications built on cheap bandwidth.

Standardized shipping containers created enormous value for trade while intense competition limited returns for many carriers.

Semiconductor abundance made entire industries possible without guaranteeing excess returns to every manufacturer.

AI may follow the same pattern.

There is no contradiction in saying that a layer will become vastly larger and that returns in that layer may fall. Rail mileage expanded after railroad investors had already learned this lesson. Fiber traffic expanded after telecom shareholders learned it. Commodity production can rise for years while producers suffer because supply rises faster than profitable demand.

The question running through this book is not whether intelligence will matter. It is where the surplus created by cheaper and more capable intelligence will settle after competition has had time to work.

The supply chain gives the first answer and then immediately warns us not to trust it for too long. Today's scarce accelerator, transformer, interconnection, or powered site can earn extraordinary rents. Those rents finance the attempt to remove the scarcity. Some constraints will resist. Others will yield. New ones will appear farther down the chain.

The factories making thought can become indispensable while the thought itself becomes cheap.
