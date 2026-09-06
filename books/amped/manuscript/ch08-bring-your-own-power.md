# Bring Your Own Power

Bring your own power sounds like the cleanest answer to the data-center problem.

If the grid cannot serve a new campus quickly enough, build generation beside it.

The company gets electricity. The utility avoids an enormous new obligation. Existing customers do not have to finance infrastructure for a private project. The data center can design the generation around its own reliability requirements. Everybody gets to stop arguing about the grid.

Then somebody asks what happens when the generator trips.

The argument begins again.

A power system is easiest to misunderstand when nothing has gone wrong. A data center beside a generator can appear nearly self-sufficient during normal operation. If the plant produces roughly what the campus consumes, the net flow at the connection to the wider system may be small.

Net flow is not the same thing as independence.

The grid may still be providing backup, balancing, voltage support, frequency response, restoration, startup power, reserve, or an outlet for surplus generation. The surrounding transmission system may still need to remain capable of serving the campus under certain contingencies. A customer can consume little energy from the grid over a year while depending on the grid's existence during the few hours that matter most.

That dependence is insurance.

Insurance is valuable even when it is rarely used.

This is the central problem of co-location.

The modern fight became concrete at the Susquehanna nuclear plant in Pennsylvania, where a large data-center arrangement raised questions about how power could be delivered from an existing generator to a neighboring load while both remained part of the PJM system. The commercial attraction was obvious. A data center wanted large quantities of reliable electricity. An operating nuclear plant could provide a large block of carbon-free generation. Physical proximity appeared to offer a way around some of the delays and uncertainties associated with building new generation and transmission from scratch.

The regulatory question was less obvious.

What exactly disappears when the customer sits beside the generator?

Not the generator's connection to the grid.

Not the grid's need to survive the generator's sudden loss.

Not necessarily the data center's desire for backup power.

Not automatically the transmission obligations created by changing how the plant's output is used.

The wires may be shorter.

The system relationship remains.

FERC's 2025 proceedings over co-located loads in PJM turned this into a national issue. The commission later directed PJM to develop clearer rules for several co-location structures and for ways large loads might receive service under more flexible arrangements.

The important result was not that one side won the philosophical argument over private power.

It was that the old categories were inadequate.

A large customer can be behind a generator, beside a generator, behind the customer's own meter, connected directly to transmission, served partly by the grid, or served under an arrangement that changes depending on operating conditions.

The traditional binary—grid customer or self-supplier—does not describe the electrical reality well enough.

The future will contain hybrids.

This matters because hybrid systems can be genuinely useful.

A data center that provides substantial onsite generation can reduce the amount of new public generation required. A campus that can island during grid emergencies can relieve stress on the network. A customer that combines generation, batteries, and controllable load can become less demanding at critical hours. A co-located project can create a bankable buyer for a generator that might otherwise retire or never be built.

The mistake is treating reduced dependence as zero dependence.

Consider a campus with four hundred megawatts of demand beside a four-hundred-megawatt generator.

On a normal day, the arithmetic appears balanced.

Then the generator has a forced outage.

If the data center expects uninterrupted service and can immediately import four hundred megawatts from the grid, the regional system has to be capable of that import. The transmission network and generation fleet may need to reserve capacity for an event that occurs only occasionally.

If the campus instead agrees to curtail or shut down when the adjacent generator fails, the public obligation is smaller.

The difference is not the physical distance between the data center and the plant.

It is the service contract.

This is why bring your own power can work only when bring your own outage is part of the bargain.

If a customer wants the economic benefit of self-supply while assigning every failure to the grid, it has not left the system. It has converted ordinary energy purchases into standby service.

Standby service needs a price.

Utilities have dealt with versions of this problem for decades. Industrial customers with cogeneration or onsite power may buy less ordinary electricity but still depend on the grid when their equipment is unavailable. Rate design tries to recover the costs of maintaining that capability without making self-generation uneconomic.

Data centers enlarge the problem.

A small industrial backup need can be absorbed within normal system variability. A sudden five-hundred-megawatt import can look like the loss of a large generator from the opposite direction. The grid has to prepare for both.

The irony is elegant.

A co-located data center and generator may appear to cancel each other during normal operation.

Under contingency planning, they can create two large things that might fail separately.

That is why system operators care about topology, not just annual energy balance.

The debate also exposes a deeper confusion around the phrase behind the meter.

The meter is an accounting boundary.

Physics does not recognize it.

If generation and load are connected behind a common point, their net exchange with the grid may be what the meter sees. But internal events can still affect the wider system. Protection schemes, generator trips, changes in load, and operational transitions can alter flows quickly. The grid operator needs to know enough about the internal arrangement to protect everyone else.

This is not a claim that regulators should control every wire inside a private facility.

It is a claim that a network needs visibility into events large enough to move the network.

At data-center scale, private electrical systems become public contingencies.

That creates a new design space.

Instead of arguing over whether a co-located campus is on the grid or off the grid, regulators can define service products.

One product might provide full firm backup. The customer pays for the system to be ready to serve the entire load when onsite generation is unavailable.

Another might provide limited backup. The campus can import a smaller amount and must shed the rest.

Another might provide emergency-only service with strict duration or frequency limits.

Another might allow the customer to disconnect automatically under defined system conditions.

Each product creates a different planning obligation.

The grid can price the obligation instead of debating the label.

That is the larger lesson of co-location.

Electricity regulation becomes more efficient when it prices the service actually reserved.

Data centers may accelerate that transition because they have both the scale and the technical sophistication to use differentiated products. A household wants simplicity. A hyperscaler can build control systems, telemetry, batteries, backup generation, and automated workload management around a complex tariff if the savings justify it.

The customer can become programmable.

This is where software economics meets grid economics directly.

A data-center operator can write software that responds to electricity conditions. It can move batch jobs. It can discharge batteries. It can start onsite generation where permitted. It can reduce nonessential load. It can change cooling strategies within limits. It can route some traffic to other regions.

These actions are not costless, and they are not available for every workload.

But a utility does not need infinite flexibility.

It needs dependable flexibility at valuable moments.

A few hours a year can determine how much capacity the system has to build.

That makes onsite generation part of a broader flexibility stack rather than a declaration of independence.

The generation choices themselves carry tradeoffs.

Natural-gas turbines are attractive because they can provide dispatchable power and are familiar technologies. A campus can potentially deploy them faster than the regional system can complete a major transmission expansion. But gas requires pipeline capacity or other fuel arrangements, produces emissions, and exposes the facility to fuel-price and future regulatory risk.

Fuel cells can offer modular onsite generation with different operating characteristics, but their environmental impact depends on the fuel and upstream system. Diesel generators provide robust emergency backup but are generally not desirable as a routine primary power source at enormous scale. Batteries provide rapid response and can bridge outages or shave peaks, but they need to be charged and have finite duration. Nuclear offers dense, low-carbon generation but cannot simply be ordered from a catalog on a data-center construction schedule. Geothermal and other emerging resources may fit some regions but remain project-specific.

Bring your own power therefore becomes bring your own energy portfolio.

The portfolio still has to interact with public infrastructure.

This is where the data-center industry can either deepen or relieve the grid problem.

A company that installs onsite gas solely to bypass a slow connection may reduce local transmission demand while increasing fossil generation. A company that supports a nuclear restart may increase clean firm supply available to the region. A campus that builds batteries can reduce its peak grid import if the batteries are operated accordingly. A company that contracts for new renewable generation far away may add annual clean energy while doing little for a local capacity constraint unless transmission can deliver it.

The location of the resource matters as much as the ownership.

This seems obvious in electricity and yet corporate energy claims often flatten geography.

A megawatt-hour generated in one place can offset a megawatt-hour consumed elsewhere for accounting purposes under certain procurement frameworks. The climate value can be real. The reliability value is local to the network path.

A data center cannot solve a congested substation in Virginia by owning a solar project in Texas.

The grid revolution will require technology companies to become more electrically literate than annual matching claims demand.

Some already are.

The largest companies employ sophisticated energy teams and increasingly sign complex power agreements, invest in generation technologies, and participate in regulatory proceedings. Their scale has made energy strategy part of corporate strategy.

That expertise changes the balance of power with utilities.

A century ago, the industrial customer often depended on the utility to tell it what electrical service was possible. A hyperscaler can arrive with its own engineers, consultants, generation partners, financial models, and alternative sites. It may know exactly what it is willing to self-supply and what reliability it needs the public system to guarantee.

This can produce better deals.

It can also produce regulatory asymmetry.

A local commission and consumer advocates have to evaluate structures negotiated by some of the world's largest companies. The customer can threaten to take investment elsewhere. The utility can argue that losing the project would harm economic development. The complexity of the arrangement can make the cost shift difficult to see.

The cure is not hostility to private power.

It is clarity about the residual public obligation.

Every co-location proposal should be forced through a simple test.

What happens during the worst credible failure?

If the answer is that the grid instantly carries the full load, then the customer is still reserving substantial public infrastructure.

If the answer is that the campus curtails, islands, or accepts interruption, the grid obligation is smaller.

If the answer changes by season, outage type, or service tier, the contract should say so.

This is where reliability engineering and rate design meet.

The grid needs to price contingency rights.

That phrase may sound technical, but everyone understands the underlying concept.

A backup has value.

If a hotel promises you a room only if somebody else's reservation is canceled, that room is worth less than a guaranteed reservation. If a cloud provider sells an interruptible compute instance, it prices the risk of termination differently from a reserved instance. If an airline offers standby travel, the passenger accepts uncertainty for a different price.

Electricity has similar service dimensions, but most retail customers have historically bought them in one bundle.

Data centers may cause the bundle to come apart.

This is one of the ways the grid can become more flexible without becoming less reliable.

Customers that truly need firm service can pay for it.

Customers that can tolerate interruption can buy a cheaper product that does not force the system to build around their full peak demand.

Customers with onsite generation can pay specifically for standby capacity.

The result is a more accurate match between physical obligation and financial obligation.

The danger is complexity becoming a loophole.

A sophisticated customer can describe itself as flexible and self-supplied to obtain favorable treatment, then rely on emergency exceptions whenever conditions become inconvenient. If the tariff lacks enforceable limits, the system has planned around flexibility that does not exist.

This is why performance has to be measurable.

Telemetry.

Testing.

Automatic controls.

Penalties.

Clear operating conditions.

These are not bureaucratic add-ons. They are what convert a promise into a reliability resource.

The distinction will become especially important as data-center campuses grow larger than individual generators. A one-gigawatt campus is not merely a customer with backup. It is an operating entity whose behavior during system stress can materially affect regional reliability.

At that scale, the campus begins to resemble a power plant from the other side.

It has ramps.

It has contingencies.

It has controls.

It has fuel or stored energy onsite.

It can help or hurt the system depending on what it does at the wrong moment.

The old division between load and resource becomes less useful.

This is the future hidden inside bring your own power.

The data center may not leave the grid.

It may become a more active participant in it.

That is a better destination anyway.

Complete electrical independence sounds attractive because it avoids cost-allocation fights. In practice, shared networks create enormous value. Diversity reduces the amount of backup each participant needs. A regional grid can draw on generation across a wide area. Surplus in one place can serve shortage in another. Outages can be absorbed by a portfolio rather than one customer's private reserve.

Islanding every data center would duplicate infrastructure and sacrifice some of those benefits.

The better design is selective independence.

Let the campus carry more of the costs and risks it can efficiently manage.

Let the shared grid provide the services that are genuinely valuable to share.

Price the boundary accurately.

That boundary will become one of the most important pieces of industrial policy in the AI era because it determines whether private urgency strengthens or bypasses public infrastructure.

If every hyperscaler builds a private power system because the public grid cannot move fast enough, America could end up with extraordinary investment that does little to improve shared capacity.

If the public grid insists every new load wait for traditional full-service expansion, the country could lose investment and fail to use customer flexibility that technology makes possible.

The middle path asks more of both sides.

The grid has to offer smarter products.

The customer has to make its operating promises real.

Bring your own power is therefore not the end of the grid story.

It is the moment the story stops pretending that connection is binary.

A data center does not have to choose between being a passive customer and a private island.

It can become something more interesting: a giant load that knows what parts of the grid it truly needs and is prepared to pay for them.
