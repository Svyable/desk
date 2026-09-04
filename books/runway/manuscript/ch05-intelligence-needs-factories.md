# Intelligence Needs Factories

The most advanced artificial intelligence in the world begins with dirt.

Quartz is mined. Copper is mined. Metals are refined. Chemicals are manufactured. Silicon becomes wafers. Components cross oceans. Machines the size of rooms arrive at factories built to hold temperature, vibration, contamination and alignment inside extraordinarily tight tolerances. Other factories make memory. Others make substrates, cables, pumps, power supplies, switches and cooling equipment. Trucks move pieces between sites. Engineers install them. Technicians maintain them. Utilities feed them.

Only at the end of this sequence does the system begin producing something that looks weightless.

A token.

The contrast matters because much of the AI economy is described as though software escaped industry.

It did not escape.

It climbed to the top of an industrial stack so elaborate that most users never have to see it.

The history of computing encourages this blindness. Each generation of computers has become easier to use while the manufacturing process behind it has become harder to reproduce. A child can operate a device containing billions of transistors without knowing what a transistor is. The device feels simpler because complexity has been pushed backward into factories, supply chains and standards.

Artificial intelligence pushes even more complexity backward.

Training and inference concentrate enormous computation into specialized systems. The economic pressure is not simply to manufacture a good chip. It is to manufacture enough chips, package them with enough memory, connect them efficiently, deliver enough power and keep the entire system operating at high utilization.

A useful way to think about an AI accelerator is not as a product but as a claim on a factory network.

Every order for a leading chip implicitly reserves slices of lithography capacity, fabrication capacity, advanced packaging, high-bandwidth memory, testing, substrates, network equipment and eventually data-center capacity. Demand propagates backward.

This is why the AI boom has been visible in companies whose names rarely appear in consumer conversations about intelligence.

ASML does not operate a chatbot. Its lithography systems help chipmakers pattern advanced semiconductors. TSMC does not sell a consumer AI assistant. It fabricates chips designed by companies around the world. Memory manufacturers do not decide what an agent should say. Their products determine whether processors can access data quickly enough to remain productive. Toolmakers for deposition, etch and metrology live several layers beneath a generated answer and can still become strategic constraints on that answer’s cost.

The deeper you move into the stack, the longer the replacement times become.

Software can be patched tonight.

A new chip design takes longer.

A new manufacturing process takes longer still.

A new fab is measured in years and billions of dollars.

A new lithography ecosystem is the product of decades.

This is the industrial inertia beneath exponential charts.

In 2025, ASML described AI demand as a major driver of advanced logic and memory investment. In 2026 it said customer capacity plans had strengthened enough that it was preparing significant additional EUV capacity for later years. The company also reported an important High-NA EUV production milestone with Intel. These announcements are company claims and should be read as such. They nevertheless reveal the lag structure of the industry. Decisions made in one year are aimed at capacity two or three years later because advanced manufacturing cannot respond at software speed.

The runway is being poured ahead of the aircraft.

That creates risk.

A factory built for demand that disappears is not a line of code that can be deleted. The capital is sunk. The workforce has been hired. Suppliers have expanded. Debt may be outstanding. Governments may have offered incentives. Communities may have planned around jobs and tax revenue.

Industrial investment forces beliefs about the future into concrete.

This is useful for anyone trying to understand AI expectations. Forecasts are cheap to make. A multibillion-dollar fab expansion is a more expensive expression of confidence.

It is not necessarily a more accurate one.

Companies misforecast cycles. Governments subsidize fashionable sectors. Competitive pressure can force firms to invest even when each would prefer the others to absorb the risk. The semiconductor industry has repeatedly overbuilt and underbuilt. Memory prices have swung violently. A capital-intensive industry can be correct about long-run demand and wrong about the next two years.

Takeoff does not require the industrial planners to forecast perfectly.

It requires enough of their bets to create capacity before it is needed.

This leads to one of the less intuitive features of a runway: overcapacity can be productive.

An empty factory is a financial problem. Spare system capacity is an option.

When compute is scarce, researchers ration experiments. Companies delay workloads. Startups cannot access the same hardware as incumbents. Prices stay high. When capacity becomes abundant, the set of economically reasonable experiments expands. Some of the most important applications may emerge only after the infrastructure is already considered excessive by the standards of the previous workload.

The same thing happened with earlier computing infrastructure. Storage that looked absurdly large found uses. Bandwidth considered excessive became normal. Processor performance enabled software developers to spend computation on interfaces, abstraction and convenience that earlier generations could not afford.

Slack changes behavior.

It also changes who can participate.

A frontier training run may remain concentrated among a few organizations, but abundant inference can spread far beyond them. Smaller firms can rent capacity. Researchers can run experiments. Open models can be deployed. Edge devices can absorb capability. The industrial system that initially looks like a monument to concentration can eventually produce a cheap commodity downstream.

Whether that happens depends partly on manufacturing learning curves.

Semiconductor progress has never been simply about shrinking transistors. Yield matters. Equipment uptime matters. process complexity matters. Packaging matters. Design tools matter. A new technology becomes economically powerful when factories learn to manufacture it repeatedly at acceptable cost.

EUV lithography is a useful example because its history resists the myth that breakthrough technology appears in one clean moment.

The physics was understood long before high-volume production was practical. Generating sufficient EUV light, maintaining optics, controlling contamination and achieving throughput required a long accumulation of engineering. ASML’s account of its source-power progress moves through years of incremental milestones before EUV became a workhorse at leading nodes. In 2025 the company demonstrated a thousand-watt source but explicitly cautioned that commercial readiness would take time.

A laboratory milestone is not factory throughput.

That sentence belongs far beyond semiconductors.

It applies to batteries, nuclear reactors, robots, drug discovery, materials and AI itself.

The distance between “works once” and “works cheaply at scale” is where industrial civilization lives.

This distance is often hidden in AI discourse because software can cross it quickly. Once an algorithm works, copies are cheap. But the algorithm still depends on physical systems whose scale-up curves are different.

Take the shift from one accelerator generation to the next.

A presentation may announce a large theoretical performance gain. Delivering that gain to customers requires fabrication yield, memory supply, packaging, rack design, networking, software support, power delivery, cooling and application optimization. A benchmark on a small system is not the same as fleet-wide useful work.

Every layer can consume the headline gain.

If a new chip is twice as fast but much harder to cool, data-center density can become the constraint. If it requires a new network architecture, deployment can wait on switches and optics. If software cannot efficiently use its features, theoretical performance remains stranded. If supply is limited, the average user sees little benefit.

The factory system decides how quickly frontier capability becomes average capability.

That diffusion rate is central to the economic roadmap.

A world in which one laboratory possesses a system with extraordinary capability is different from a world in which millions of businesses can buy the same capability for cents. The first can change research. The second can change institutions.

Manufacturing is what turns rarity into infrastructure.

There is a second feedback loop here, and it is more consequential than the simple one in which AI demand causes more chips to be built.

AI can improve the factories.

ASML describes using AI in diagnostics, predictive maintenance, knowledge retrieval and research. Chip design increasingly relies on machine-learning methods to explore enormous design spaces. Manufacturing plants collect vast streams of process data that can support anomaly detection and optimization. Equipment suppliers can use models to assist troubleshooting. Construction firms can use machine intelligence for design review, scheduling and procurement.

The important question is not whether these examples exist.

They do.

The important question is whether they attack the critical path.

A model that helps an engineer write an email does not materially increase wafer output.

A system that shortens the time required to diagnose a recurring equipment fault might.

A design agent that finds a slightly better circuit can improve a product.

A design agent that consistently shortens verification cycles could change product cadence.

A scheduling assistant can improve administrative efficiency.

A system that predicts construction conflicts before crews encounter them can shorten physical deployment.

The difference is throughput.

This gives us a disciplined way to think about AI improving its own hardware base without leaping immediately to fantasies of self-replicating machines.

Start with the boring work.

Specification review.

Simulation.

Verification.

Failure analysis.

Process control.

Supply planning.

Maintenance.

Documentation.

Training.

Construction coordination.

These are large categories of human cognitive labor inside manufacturing. If machine systems can perform meaningful fractions of them, the industrial response to AI demand can become faster even if robots still do not build fabs autonomously.

The time saved accumulates across interfaces.

A chip reaches tape-out earlier.

A tool is repaired sooner.

A process excursion is identified faster.

A procurement conflict is found before it delays installation.

A design change is evaluated in hours instead of days.

No single event looks like takeoff.

The factory clock begins to tick faster.

There are limits.

Physical lead times do not vanish because paperwork improves. Concrete cures. Equipment must be fabricated. Cleanrooms must be commissioned. Precision systems require calibration. Skilled technicians cannot always be trained instantly. Supply chains can be disrupted. Some manufacturing knowledge is tacit and localized.

AI can compress information work more readily than material work.

That is why the distinction between “design latency” and “build latency” will matter.

If design latency collapses while build latency remains constant, factories receive more designs than they can realize. The bottleneck moves into capacity. If manufacturing automation and modular construction improve too, some of that pressure moves again. If permitting or power then becomes limiting, the chain continues.

The central mistake is to expect the entire industrial stack to accelerate uniformly.

It will not.

The stack will lurch.

A breakthrough in memory can expose a network limitation. A new packaging technology can create demand for different equipment. A denser rack can make power distribution the critical problem. A faster fab can run into specialty chemical supply. Each improvement rearranges the importance of suppliers.

This makes the AI industrial ecosystem unusually dynamic for investors and policymakers.

A policy aimed at “more chips” can fail if it does not understand which stage is actually scarce. Subsidizing fabrication without enough tool capacity, workforce, packaging or demand can create expensive underutilization. Export controls aimed at one component can shift design toward substitutes. Domestic manufacturing can improve resilience while increasing cost. Geographic diversification can reduce catastrophic concentration while duplicating infrastructure.

There is no free industrial policy.

There is only a choice of risks.

For the runway, resilience deserves equal billing with scale.

A takeoff system that depends on one region, one supplier or one shipping route for a critical component can be fast in ordinary times and fragile in extraordinary ones. The more economically important AI becomes, the less tolerable that fragility becomes.

This tension will create redundancy.

Redundancy costs money and reduces apparent efficiency. It can also prevent a local failure from becoming a global stop.

A second fab in another country may initially cost more per wafer. A second supplier may have lower yield. Inventory buffers tie up capital. Spare power capacity looks wasteful. Yet systems that society considers critical are rarely optimized solely for average-day efficiency. Airlines keep diversion options. Banks hold capital. Grids maintain reserves. Hospitals stock emergency supplies.

AI infrastructure will be pulled in the same direction as it becomes critical.

That may slow the cheapest path to maximum compute while improving the durability of the runway.

The tradeoff is real.

So is the geopolitical layer.

Advanced semiconductors sit at the intersection of commercial demand and national power. The ability to produce leading chips affects military systems, scientific research, communications and economic competitiveness. Export controls, subsidies and strategic alliances therefore shape the AI roadmap in ways a pure technology forecast cannot capture.

A sudden policy change can alter which chips can be sold where. A conflict around Taiwan would create consequences far beyond AI. A restriction on manufacturing equipment can affect the pace at which another country develops advanced capacity. Governments can accelerate domestic plants through subsidy while slowing projects through permitting or trade conflict.

The factory is political infrastructure.

It always was.

AI makes that harder to ignore.

The most important consequence of all this is that compute should not be treated as a single number.

Ten million accelerators spread across different generations, networks, regions and utilization rates are not equivalent to ten million identical units. Training compute, inference compute and research compute serve different purposes. A chip sitting unpowered is not compute. A chip with inadequate memory bandwidth delivers less useful work. A cluster with poor networking can waste processor cycles. A system limited by software may have theoretical capacity it cannot convert into output.

The useful resource is not installed silicon.

It is completed computation at an acceptable cost and latency.

Factories are one part of the conversion.

The runway becomes substantially longer when semiconductor supply stops being the dominant source of uncertainty. That does not mean chips become trivial. It means capacity becomes predictable enough that builders can plan around it.

We are not there yet.

The industry is still expanding into extraordinary demand, and the leading edge remains concentrated. Memory and packaging have had their own cycles of scarcity. Equipment capacity is being planned years ahead. Geopolitical risk is rising rather than disappearing.

But the direction of adaptation is visible.

More fabrication.

More packaging.

More HBM.

More lithography capacity.

More geographic redundancy.

Better network fabrics.

More integrated rack systems.

More software tuned to extract useful work from installed hardware.

The industrial system is learning what an intelligence economy consumes.

Then AI enters the factories that are learning it.

That is the loop to watch.

The takeoff does not begin when intelligence becomes independent of factories.

It begins, if it begins at all, when the factories become increasingly responsive to intelligence.