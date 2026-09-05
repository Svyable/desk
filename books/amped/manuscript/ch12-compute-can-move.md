# Compute Can Move

The most important power plant in the AI era may be a scheduler.

That claim sounds ridiculous until the grid is one hundred megawatts short for three hours.

A new generator can solve the shortage by producing more electricity.

A transmission line can solve it by bringing electricity from somewhere else.

A battery can solve it temporarily by discharging electricity stored earlier.

A data center can sometimes solve part of it by deciding that some computation does not need to happen here, now.

The word sometimes is the whole opportunity.

Data centers are often described as unusually flexible electric loads because computation can move through time and geography. The image is seductive: when electricity becomes scarce in Virginia, software simply sends work to Texas. When solar output falls in California, a training job pauses until noon. The grid becomes a kind of energy-aware cloud, shifting computation toward spare electrons the way a network routes packets around congestion.

Some version of this future is technically plausible.

The naïve version is not.

Computation is not one workload.

A batch job processing internal data has a different clock from a search query waiting for an answer. Model training has a different interruption cost from video streaming. A recommendation system serving millions of users has a different latency requirement from a scientific simulation that can run overnight. Data may be legally or commercially constrained to a region. Network bandwidth can be scarce. Replicating large datasets can consume time and energy. Accelerators in another region may already be fully utilized.

The fact that computation is digital does not make it frictionless.

The useful question is more specific.

Which megawatts can move, how far, how quickly, for how long, and at what economic cost?

That is a grid question.

It is also a software architecture question.

For most of electricity history, those disciplines barely needed to speak.

The grid saw load.

The application developer saw compute.

The cloud provider sat between them and tried to make both invisible to the customer.

AI is making the boundary economically valuable.

Suppose a data center has three categories of work.

The first must run continuously because customers expect real-time service.

The second can be delayed for an hour without meaningful harm.

The third can run in any of several regions as long as it finishes by tomorrow morning.

From the customer's perspective, all three consume server capacity.

From the grid's perspective, they are different products.

The first is firm demand.

The second is schedulable demand.

The third is geographically mobile demand.

If the data center exposes those differences to the power system through contracts and control software, the grid can plan around a smaller firm obligation than the building's maximum electrical capacity.

That can be worth more than small improvements in energy efficiency.

A one-percent efficiency gain reduces consumption at nearly every hour.

A ten-percent reduction available exactly during the system's most constrained hours can avoid capacity or transmission investment far larger than its annual energy value would suggest.

Electricity prices already encode some of this distinction. Wholesale prices vary by time and location in regional markets. Demand charges can make a customer's peak more expensive than ordinary consumption. Time-of-use rates can encourage load shifting. Demand-response programs compensate customers for reducing usage during stressed periods.

Data centers add software leverage to those signals.

A conventional factory may be unable to respond because the production process is physically continuous. A data center can potentially incorporate electricity conditions into workload orchestration.

The scheduler becomes part of the energy system.

That is the revolutionary idea.

It does not require the grid operator to know what the computation is doing. It only requires the customer to translate grid conditions into dependable net-load behavior.

This can happen at several layers.

A facility can lower electrical demand by using onsite batteries.

It can reduce cooling load temporarily within safe operating limits.

It can defer nonessential maintenance jobs or batch processing.

It can reduce the power allocated to some accelerators, accepting slower completion rather than stopping work entirely.

It can pause a training checkpoint at a safe boundary.

It can route some new requests toward another region with available capacity.

It can combine several small actions until the meter shows the contracted reduction.

The grid does not need to care which lever produced the result.

That makes flexibility composable.

The customer can innovate behind the meter while the utility buys one observable service.

There is a strong analogy with cloud computing itself.

Cloud providers abstract hardware complexity behind service interfaces. A customer asks for compute, storage, or database capacity without specifying every transistor.

A flexible-load tariff can abstract internal data-center complexity behind an electrical interface. The utility asks for a reduction of fifty megawatts for two hours under defined conditions. The operator decides how to produce it.

This is infrastructure as an API.

The metaphor should not be pushed too far. A power grid is not software, and failure can cascade physically. But the design instinct is useful: specify the contract at the boundary and let the internal system optimize within it.

The challenge is verification.

A data center can claim that twenty percent of its load is flexible.

The claim becomes valuable only after the facility actually curtails during a test or real event.

The grid therefore needs baselines. What would the customer have consumed without the curtailment? Did the load reduction occur because of the program or because normal workload happened to fall? Did the facility simply shift demand into the next hour and create a rebound peak? Was the reduction available for the promised duration?

These are old demand-response questions appearing at new scale.

Data centers may make them harder because the baseline itself can change quickly. A campus adding new server halls has a rising load. Hardware refreshes can change electrical intensity. Workload growth can alter utilization. A static baseline can become obsolete.

The answer is better telemetry and better contract design, not giving up on flexibility.

A large data center already measures itself intensely for operational reasons. Electricity can become another high-resolution system variable. The utility and customer can agree on methods for measuring delivered flexibility based on actual net load rather than broad assumptions.

Performance can earn trust over time.

This is important because the first flexible-load programs will be judged harshly.

If a utility connects a large customer earlier on the condition that the customer curtail during critical events and the customer later refuses, every future developer will face more skepticism. The reputational cost of early failure will extend beyond one campus.

The technology industry therefore has an interest in making the first agreements conservative.

Promise the megawatts that can actually move.

Not the theoretical maximum.

A smaller dependable resource is more valuable than a giant marketing number.

The distinction between training and inference is useful here but should not become a cliché.

Training large models can involve long computational runs that appear naturally flexible because the final model does not care whether one portion of training happened at 2 p.m. or 2 a.m. In practice, training infrastructure is expensive enough that operators want accelerators highly utilized. Interruptions can waste work, complicate scheduling, and delay deployment. Distributed training can depend on tightly synchronized hardware. Pausing is possible in some architectures and costly in others.

Inference appears less flexible because a user expects a response when the request arrives.

Yet inference also has layers. Some requests are latency-sensitive. Others can be batched. Some models can run in several regions. Some applications can degrade gracefully by using a smaller model during constrained periods. Caching can reduce repeated work. Requests can be routed toward infrastructure with more available power if network latency remains acceptable.

The line between flexible and inflexible is a design choice as much as a workload property.

That means electricity price can influence software architecture.

This is a remarkable feedback loop.

For decades, programmers optimized for processor time, memory, network latency, storage, and later cloud cost. Electricity was mostly embedded in the price of computing infrastructure.

As power becomes scarce, energy availability can move upward into the software stack.

An application may decide when to run based partly on grid conditions.

A model-serving platform may decide where to route requests based partly on regional power cost.

A training scheduler may treat carbon intensity or demand-response events as constraints alongside accelerator availability.

The grid becomes an input to software.

Software becomes an input to the grid.

This is one of the few genuinely new relationships in the data-center power story.

Industrial customers have provided interruptible load for decades. Aluminum smelters, chemical facilities, water systems, cold storage, and other large users have adjusted demand in response to prices or emergencies. Flexible load is not an AI invention.

What computation adds is granularity.

A data center can potentially decide at the level of workloads rather than the whole plant. It may shed twenty megawatts without closing the facility. It may move one category of work while preserving another. The marginal unit of curtailment can be software-defined.

That makes flexibility less binary.

The power system can use that.

Imagine a tariff with several levels.

The customer receives full firm service for a base load.

A second block is interruptible only during declared emergencies.

A third block is highly flexible and can be curtailed more often in exchange for lower charges or faster connection.

The campus can decide which workloads live in each electrical class.

The service contract becomes an input to capacity planning.

This is more sophisticated than asking the customer to turn everything off during a crisis.

It also matches how hyperscale computing is built: in layers of service criticality.

The opportunity grows when a company operates multiple regions.

One data center cannot move geographically.

A network of data centers can move workload among fixed places.

This is analogous to generation diversity. A regional grid is more resilient because many power plants and transmission paths share the obligation. A cloud network can be more flexible because many campuses share the compute obligation.

The largest hyperscalers therefore have a flexibility advantage smaller operators may not.

They can route around electrical scarcity because they own more destinations.

This raises a competition issue.

If flexible-load tariffs become the fastest way to obtain scarce power, companies with global infrastructure and sophisticated workload orchestration may gain another advantage over smaller data-center operators or enterprise customers. The policy may be economically efficient and still increase concentration.

Regulators should notice that tradeoff.

The grid's job is not to equalize every technology-company business model. It should avoid writing tariffs whose complexity creates hidden favoritism unless the physical benefit justifies it.

Performance-based eligibility can help.

Any customer capable of delivering the required flexibility should be able to qualify, regardless of whether the flexibility comes from workload shifting, batteries, onsite generation, or industrial process control.

This keeps the tariff technology-neutral.

Data centers may dominate because they can perform well, not because regulators have chosen them as a favored class.

The same neutrality should apply to geography.

If a company moves workload from a constrained region to another data center, the receiving region sees more load. The flexibility is valuable only if the destination has spare capacity at that moment.

Moving the problem is not solving it.

This is where multi-regional coordination becomes important.

A cloud provider optimizing only for local electricity price could create new peaks elsewhere. A sophisticated scheduler needs information about the marginal condition at several sites. Wholesale prices can provide some signal, but not every reliability constraint appears perfectly in price, especially under retail tariffs or emergency conditions.

The future may require more direct communication between grid operators and large compute networks.

Not control of the servers.

Signals.

Prices.

Curtailment events.

Forecasts.

Available capacity.

The data-center operator can translate them into workload decisions.

This is demand response at internet scale.

The privacy and security implications should not be ignored. Grid operators do not need access to customer data or model workloads. Technology companies do not need privileged visibility into sensitive grid operations beyond what is required for safe participation. The interface can be narrow.

What matters is that both systems expose enough state to coordinate.

This coordination has a natural limit during emergencies.

Markets and software optimization work best when participants have time to respond. A sudden generator trip or transmission fault can unfold faster than a cloud scheduler can rearrange large workloads. Batteries and automatic controls handle the first moments. Workload shifting is more valuable for forecastable constraints: a heat-wave afternoon, a capacity emergency expected hours ahead, a planned outage, a period of high prices, or a delayed infrastructure upgrade.

Different tools operate on different clocks.

This is why the data center's real flexibility is a stack.

Milliseconds: power electronics.

Seconds: UPS batteries and automated protection.

Minutes: storage, onsite generation, power capping.

Hours: workload deferral and regional routing.

Days or months: shifting construction phases, choosing sites, scheduling major training campaigns.

Years: deciding where the next campus is built.

The last layer is the most powerful and least discussed.

Before concrete is poured, compute is extraordinarily mobile.

A company can choose another utility territory.

That site-selection flexibility is a form of demand response operating on an infrastructure time scale.

If power is scarce in one region and abundant in another, capital moves.

The grid signal changes geography.

This is how the data-center boom can produce a more distributed American compute map even without one workload ever moving after construction.

Power scarcity becomes a price on concentration.

That may relieve Northern Virginia while creating new clusters elsewhere. It may channel investment toward regions with generation headroom or easier transmission expansion. It may revive industrial sites with existing grid connections.

The scheduler in this case is corporate capital allocation.

The effect is still electrical.

This is why the claim that compute can move needs two definitions.

Operational mobility happens after the facility exists.

Investment mobility happens before it exists.

The first can shave peaks.

The second can reshape the grid map.

Together they distinguish data centers from many earlier industrial loads.

An aluminum smelter could move before construction too, but once built its product and process strongly anchored it. Data centers can preserve more network optionality after construction because the product remains digital.

That flexibility is not free.

Companies pay for redundant regions, unused capacity, network links, software complexity, and the organizational ability to operate globally. The fact that a hyperscaler already pays those costs for reliability and customer service means the grid may be able to borrow flexibility created for another purpose.

This is the same pattern as the battery.

Private resilience can become public flexibility.

Only under a contract.

Only when measured.

Only when the customer remains economically willing to perform.

That is the sober version of the exciting idea.

Compute will not float around the country following every gust of wind.

It does not need to.

If enough nonurgent work can shift away from the few hours and locations where the grid is most constrained, the infrastructure consequences can be large.

The American grid was built around the assumption that demand is mostly something planners have to meet.

Data centers introduce a customer for whom part of demand can be scheduled.

Once that becomes dependable, the planner is no longer forecasting only how much electricity the customer will consume.

The planner is negotiating when the customer insists on consuming it.

That is a different grid.
