# Chapter 4 — The Electrical Shadow

A new data center can appear on a utility planning map years before it appears on the landscape.

The buildings may still be drawings. The servers may not exist yet. The model that will eventually run inside them may not have been trained. But somebody has asked for power, and that request begins changing the future.

Utilities plan around loads that are not yet consuming anything because large electrical systems cannot be improvised at the moment a switch is flipped. Transmission lines, substations, transformers, generators and protection systems have lead times. Equipment has manufacturing queues. Rights of way have politics. Interconnections require studies. A customer asking for hundreds of megawatts is not simply buying a larger version of a household service. It is entering the architecture of the grid.

This is the electrical shadow of artificial intelligence: the infrastructure that has to be promised before computation can happen.

Heat revealed that every watt entering a machine must eventually leave as thermal energy. Electricity reveals something else. A watt is not useful merely because it exists somewhere. It has to be available in the right place, at the right voltage, at the right moment, through equipment capable of carrying it without violating reliability limits.

That sounds obvious until demand begins to grow faster than the network was designed to grow.

For much of the early twenty-first century, electricity demand in several advanced economies was relatively flat. Efficiency improvements offset some growth. Utilities became accustomed to planning in that environment. Then several large trends began arriving together: electrification of vehicles and buildings, new manufacturing, and rapid data-center expansion driven in part by artificial intelligence.

The scale of the change can be seen in forecasts, but the local shape matters more than the national total. Lawrence Berkeley National Laboratory's 2026 update on U.S. data-center energy use estimates a broad range in which data centers could consume roughly a tenth or more of national electricity by 2030. The International Energy Agency likewise expects strong global growth. These numbers are uncertain because the underlying technology is changing quickly. They do not tell a utility where the load will appear.

A cluster of facilities in one county can matter more to a regional grid than a national average.

Electric systems are built from constraints. A region can have enough generating capacity in aggregate while a particular transmission corridor is full. A substation can have room on the site but no spare transformer capacity. A transmission line can carry enough power on a cool night and become constrained on a hot afternoon. A generator can produce electricity but sit behind a bottleneck. A customer can be willing to pay for upgrades while the equipment needed for the upgrades has a multi-year manufacturing lead time.

The phrase “there is enough electricity” is therefore incomplete in the same way “there is enough water” is incomplete.

There is electricity somewhere. The question is whether the network can deliver it here, now, reliably.

AI makes this more complicated because the load can be both enormous and electronically fast.

A traditional industrial plant often has mechanical processes that change load over seconds, minutes or hours. Large computing clusters can change electrical demand rapidly as accelerators move between idle and active states. The International Energy Agency has highlighted the increasingly high power density of AI racks and the rapid power swings that AI workloads can produce. A grid does not see tokens. It sees changing megawatts.

Inside the facility, operators use power supplies, uninterruptible power systems, batteries, transformers and controls to keep those swings from becoming somebody else's problem. At sufficient scale, the facility itself begins to look like a small grid nested inside the larger one.

This nesting is one reason data centers can be unusually sophisticated electrical customers. They care intensely about power quality and continuity because an interruption can crash work, corrupt data, break service commitments and leave expensive equipment idle. Redundant feeds, backup generators and batteries are common. Some facilities can ride through brief disturbances that would darken an ordinary building.

Reliability creates another intentional residue.

Backup systems are built to be unused most of the time. Spare electrical paths, batteries and generators represent capital tied up in waiting. Yet their value appears precisely when ordinary service fails. The infrastructure looks inefficient if judged only by average utilization. It looks prudent if judged by the cost of downtime.

This distinction matters beyond the fence because society also buys reserve capacity.

A power grid cannot be operated so that every generator and line is loaded to its theoretical maximum every minute. Equipment fails. Weather changes. Demand forecasts are imperfect. Plants require maintenance. A system with no margin is a system waiting for a cascading problem. Reliability therefore depends on reserves, redundancy, diversity, protective relays, frequency control and the ability to react to contingencies.

A large new load consumes not only energy but some share of that reliability envelope.

Utilities must decide how to serve it without making service worse for existing customers. This is where data-center debates often shift from engineering into fairness.

If a new customer requires a substation, transmission upgrade or new generation, who pays? If utilities spread costs across all ratepayers, residents and small businesses may subsidize infrastructure built primarily for one class of customer. If the data-center operator pays the full upgrade cost, the project may move elsewhere. If utilities build ahead of confirmed demand and projects are canceled, somebody is left with stranded assets. If they wait until demand is certain, construction may take too long.

The electrical shadow is partly financial because infrastructure costs arrive before the electricity sales that justify them.

This creates a planning problem under extreme uncertainty.

AI companies can revise hardware roadmaps in months. Utility assets are measured in decades. A model architecture that changes computing demand can alter the economics of a campus after a transmission project has entered permitting. A provider can decide to build in another region. A slowdown in AI demand can leave planned infrastructure underused. A breakthrough that lowers energy per task can reduce one kind of load while lower prices stimulate more usage.

The grid has to make long-lived decisions around a technology with a short decision cycle.

There is no perfect solution, but contract design can move uncertainty toward the party creating it. Large-load tariffs can require minimum payments, deposits, construction contributions or commitments long enough to protect other ratepayers. Interconnection rules can distinguish speculative requests from mature projects. Utilities can stage upgrades. Regulators can examine whether projected load growth is plausible and whether costs are allocated fairly.

These are not side issues. They determine whether the machine's wake becomes public infrastructure or private expense.

The generation question is equally important.

If data-center demand grows quickly, new electricity has to come from somewhere. In regions with abundant renewable development, some of the load may be served by new wind and solar. Their variable output creates a need for storage, transmission, flexible demand or firm generation. Nuclear plants can provide high-capacity-factor electricity but take substantial time and capital to build. Natural-gas generation can be built more quickly in some places but carries fuel-price and emissions consequences. Hydroelectric resources are geographically limited. Geothermal and other firm clean resources may become more important where available.

The machine does not choose a single national energy source. It inherits the resource mix and constraints of the grid to which it connects, then changes that grid through demand.

This is why claims that an AI service “runs on renewable energy” need careful interpretation. A company may contract for renewable generation equal to its annual consumption. That can finance real clean-energy projects. But annual matching does not mean the data center is physically powered by that resource every hour. Electricity flows through a network. At night, when solar output is zero, another resource supplies the marginal balance unless storage or another clean source covers it.

More granular clean-energy matching can improve the relationship between claimed and actual operating conditions. It is also harder. A facility with a continuous load requires a continuous supply, while many renewable resources vary. Moving workloads in time and space can help when latency, legal and operational requirements permit.

AI itself may become a flexible load in ways traditional industry cannot.

Training jobs, batch evaluation, synthetic-data generation and some offline inference can potentially be scheduled around grid conditions. If a task can wait, a data center can run more of it when electricity is abundant and less when the system is strained. Batteries can smooth rapid load changes. On-site generation or storage can reduce peaks. Work can be shifted among regions.

But flexibility should not be assumed merely because the load is digital.

Users expect interactive services to respond now. Financial, medical and industrial systems may require constant availability. Moving work across borders can violate data rules. Training jobs can be interrupted only at checkpoints without wasting progress. A cluster full of expensive hardware has a strong economic incentive to keep that hardware productive. The machine may be technically flexible and financially inflexible.

That distinction will matter as utilities design programs that pay large customers to reduce load during emergencies.

A data center that can shed fifty megawatts for an hour can be an asset to the grid. A facility that must run flat-out regardless of system conditions is simply a large obligation. The best architecture may include enough workload diversity, storage and scheduling intelligence that some load can become responsive without degrading the service users actually care about.

Again, the wake can be designed.

There is a second electrical shadow that sits inside the data center: utilization.

A server consumes electricity when working, but it also consumes electricity when waiting. Accelerators are expensive enough that providers try hard to keep them occupied, yet demand is not perfectly smooth. Capacity must be provisioned for peaks. Models may require large clusters that are difficult to partition efficiently. Memory constraints can leave compute units underused. Network bottlenecks can stall hardware. Failures can strand resources.

The energy intensity of useful work therefore depends not only on chip efficiency but on how well the whole system converts installed hardware into completed tasks.

This is one reason scheduling is a first-class environmental technology. A better scheduler can reduce the number of machines needed for a workload. Better batching can raise accelerator utilization. Better placement can reduce data movement. A model that fits in less memory may use hardware more efficiently. Software changes can save electricity without touching the electrical system directly.

The grid sees the accumulated result of thousands of such software decisions.

Product design matters too.

If an application calls a model every time a user moves a cursor, that choice becomes electrical demand. If an agent routinely performs ten speculative searches to produce one recommendation, that becomes electrical demand. If a company decides to generate personalized video for every customer interaction rather than text, that becomes electrical demand. There is no bright boundary between “product” and “infrastructure” once the product is used at scale.

This does not mean every software engineer should become a power engineer. It means organizations need feedback paths that connect software decisions to physical consequences.

Cloud computing has already created versions of this discipline through cost observability. Teams that once treated servers as invisible learned to look at utilization, idle resources, data transfer and storage because the bill arrived every month. Energy-aware computing extends the idea. Cost can be a proxy for resource use, but not a perfect one. Electricity prices, hardware amortization and service margins distort the relationship. Still, a feature that doubles model calls usually leaves a financial trace before anyone calculates its carbon intensity.

The electrical wake can often be found by following the bill.

Then it can be followed further.

Who supplies the electricity? Which part of the network is constrained? What equipment was added? What happens on the hottest day of the year? How does the load respond to price? Is backup generation tested regularly? How much storage is available? Are there transmission projects whose economics depend on a cluster of data centers materializing? Does a new tariff protect existing customers if growth forecasts fail?

These questions turn a technological forecast into infrastructure planning.

The most dangerous electrical assumption is that demand and supply can be synchronized automatically by markets.

Prices are powerful signals, but physical systems have construction time. A high electricity price can encourage investment, conservation and relocation. It cannot instantly manufacture a high-voltage transformer or obtain a transmission right of way. Markets operate inside engineering constraints.

AI's rapid commercial cycles collide with that slowness.

This collision can produce creative solutions. Companies can sign long-term power agreements, fund generation, invest in storage, build behind-the-meter resources, finance grid upgrades or locate near underused capacity. It can also produce shortcuts: extended operation of older generation, rushed siting, dependence on temporary generators or politically attractive promises whose physical delivery dates do not match project schedules.

The wake reveals whether the timeline is real.

There is an instructive contrast between a model launch and a power-plant launch. Software can be copied globally after one release. Infrastructure cannot. A new capability may create demand in every market at once, but each grid has to absorb that demand locally. The digital layer scales by replication. The electrical layer scales by construction.

That asymmetry may become one of the defining constraints of AI deployment.

It also explains why energy abundance has returned to technology strategy. For years, software companies could treat electricity as a commodity purchased in the background. When computing load becomes large enough, energy becomes a strategic input. Executives discuss generation technologies. Data-center developers court utilities. Technology firms invest in nuclear, geothermal and storage projects. Governments connect AI competitiveness with grid expansion.

The machine's shadow has moved into industrial policy.

There is a temptation to read this as proof that AI has become inherently wasteful. That conclusion is too easy. Large electricity demand can accompany large economic value. Aluminum smelters, steel mills, chemical plants, transit systems and hospitals also consume substantial energy. The relevant question is not whether a sector uses electricity. It is what society receives in return, what alternatives exist, how efficiently the electricity is used, and who bears the costs of expanding supply.

AI complicates the value question because its output is heterogeneous. The same infrastructure can help discover a drug candidate, generate an unwanted advertisement, translate a conversation, produce spam, write software, simulate a protein, make a game asset or answer a trivia question. The electrons are indifferent. Society is not.

This is another limit of resource metrics. They can tell us how much was used. They cannot decide whether the use was worth it.

That judgment belongs to markets, institutions, individuals and politics. But those judgments are better when the wake is visible.

If a low-value product creates high infrastructure costs that it does not pay, the price signal is wrong. If an extremely valuable service cannot obtain power because interconnection rules are clogged with speculative projects, the allocation system is wrong. If a facility can reduce load during a grid emergency but has no incentive to do so, the tariff may be wrong. If transmission construction is blocked for a decade while demand rises, the problem is not located inside the model.

The electrical shadow turns AI into a systems problem.

At the user interface, intelligence appears to arrive on demand. In the grid, demand has to be anticipated.

One world runs at software speed. The other runs at infrastructure speed.

The future of AI will be shaped by the distance between them.
