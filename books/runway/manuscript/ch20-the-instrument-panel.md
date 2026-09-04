# The Instrument Panel

A runway is useful because it replaces prophecy with instrumentation.

The old question is irresistible.

When will AI take off?

It invites a date.

A date invites confidence.

Confidence invites a headline.

The resulting argument usually collapses several different processes into one imaginary moment.

Model capability.

Compute supply.

Energy availability.

Agent reliability.

Robot deployment.

Scientific automation.

Institutional permission.

Economic adoption.

These processes do not move together.

They interact.

The better question is whether the system is accelerating across enough of them that the next increment of capacity arrives faster than the previous one.

That is measurable.

Not perfectly.

Enough to improve the conversation.

The runway needs an instrument panel.

The panel should not be a single index because a single number would recreate the problem this book is trying to escape. A composite score can hide the binding constraint. If compute doubles while grid connection times worsen, the average can look healthy while the runway is actually blocked.

We need to watch the constraints separately.

Then watch how quickly the binding one moves.

Start with capability price.

How much does it cost to buy a fixed level of useful performance?

This is more informative than asking only how capable the most expensive frontier model has become. A capability that exists at one laboratory but costs too much to deploy widely has limited economic reach.

Price-performance tells us when intelligence stops being rationed.

The benchmark must be chosen carefully because benchmarks age and can become contaminated. But the concept is stable.

Hold useful capability roughly constant and measure the cost curve.

If the same quality of translation, coding, reasoning or multimodal analysis becomes dramatically cheaper, new uses become economical.

The demand surface expands.

The second instrument is autonomous task horizon.

How long can a system pursue a real objective at a useful reliability level before human intervention becomes necessary?

METR’s task-horizon measurements are one example of this class of metric. The exact suite will evolve. The deeper idea is to measure duration and reliability together.

A system that succeeds on ten-minute tasks ninety percent of the time is not equivalent to one that succeeds on ten-hour tasks ninety percent of the time.

Longer horizons increase delegation leverage.

They allow one person to supervise more concurrent work.

They also expose more failure modes, which is why the reliability level matters.

The third instrument is accepted-work cost.

This is harder to measure and more economically important.

What is the total cost of producing a unit of work that survives review and can actually be used?

For code, count the time to specification, generation, testing, review, correction and maintenance impact.

For a legal document, count the cost of machine drafting plus professional verification.

For customer support, count escalations and rework.

For scientific analysis, count validation.

The accepted-work metric captures the verification tax.

It prevents generated volume from masquerading as productivity.

If model inference gets cheaper but human review cost rises, the full process may not be accelerating.

The fourth instrument is human-attention leverage.

How many active machine processes can one qualified person supervise without quality degrading?

This is the organizational measure of parallelism.

One-to-one assistance is useful.

One-to-ten supervision is a different production regime.

One-to-one-hundred supervision changes it again.

The ratio will vary by domain and risk. The important trend is whether accepted output grows faster than supervisory attention.

If it does, cognition is escaping the linear human labor constraint.

The fifth instrument is effective compute growth.

Physical accelerator count matters, but it is not enough.

Useful compute capacity changes through hardware additions, utilization, software optimization, networking, memory efficiency and algorithmic improvements.

A data center that recovers previously wasted capacity has effectively expanded without adding a building.

A model that produces the same useful work with less compute frees capacity.

A faster kernel creates virtual hardware.

The instrument should therefore track both installed compute and effective work per unit of compute.

Epoch AI and other researchers have tried to estimate frontier compute stock and training trends. Those estimates are difficult because companies do not disclose everything. They are still valuable because the physical scale is too important to ignore.

The sixth instrument is infrastructure lead time.

How long does it take to turn a decision to build into operating capacity?

For a data center, this includes land, permits, grid connection, transformers, construction, networking, cooling and equipment installation.

For generation, it includes interconnection, permitting, equipment and construction.

For semiconductor capacity, it includes facility buildout, tool delivery, process ramp and yield.

This may be the most underrated metric in the entire book.

Capability can compound only as fast as the resources it requires can arrive.

If infrastructure lead times remain fixed while demand explodes, queues lengthen.

If AI helps shorten those lead times, recursive acceleration becomes much more plausible.

The seventh instrument is power availability at the margin.

Global electricity supply is too broad a measure.

AI infrastructure is geographically concentrated. A region can have abundant national generation and still lack transmission or substation capacity where a data center wants to connect.

The useful metric is the time and cost required to secure dependable power for another unit of compute.

The International Energy Agency’s 2026 analysis described surging data-center electricity demand alongside tighter supply chains for equipment such as transformers and gas turbines and pressure on grid-connection systems.

That is runway data.

It tells us where the moving bottleneck has landed.

The eighth instrument is semiconductor delivery time across the whole stack.

Not only accelerator wafers.

Advanced packaging.

High-bandwidth memory.

Networking.

Power electronics.

Cooling equipment.

A cluster is built from complements. The slowest component can determine deployment.

Tracking accelerator shipments alone can miss the actual constraint.

The ninth instrument is experimental cycle time in AI research.

How many meaningful model or systems experiments can a research team complete per unit of calendar time?

This measure combines coding assistance, experiment orchestration, compute availability and evaluation.

It gets closer to the recursive loop than model benchmark scores do.

If research teams can test more hypotheses and obtain trustworthy feedback sooner, the generation interval of AI research is shrinking.

The tenth instrument is machine contribution to AI research itself.

This should be measured by accepted contributions, not anecdotes.

How much code is machine-produced and retained?

How many experiments are machine-proposed and judged useful?

How much engineering time is saved?

Are AI systems discovering optimizations that are deployed in training or inference infrastructure?

AlphaEvolve-style results are important because they provide concrete examples of a system improving pieces of the computing stack. The question is whether such examples become routine.

Routine is the threshold that matters.

A demonstration proves possibility.

Routine operation changes the production function.

The eleventh instrument is scientific loop time.

For fields where AI participates in research, how long does it take to move from a hypothesis to a validated result?

This should be decomposed by stage.

Literature synthesis.

Candidate generation.

Simulation.

Experiment design.

Physical execution.

Measurement.

Analysis.

Replication.

The stage with the longest marginal delay is the bottleneck.

If AI accelerates only the first two stages, candidate queues grow without proportional scientific output.

If laboratory automation and better measurement shorten the physical stages too, the loop begins to close.

The twelfth instrument is robot intervention rate.

Ignore the promotional category “autonomous.”

Ask how much human attention the fleet consumes per hour of productive machine work.

How often does a person need to recover the system?

How long does recovery take?

How many robots can one operator supervise?

How much of the environment has to be engineered around the machine?

The economics of physical automation are visible in those ratios.

The thirteenth instrument is robot manufacturing scale.

A brilliant policy with no bodies has limited physical impact.

Track unit production, component constraints, hardware cost, useful life and deployment time.

The software layer can improve quickly while embodiment remains scarce.

Physical takeoff requires the fleet to grow.

The fourteenth instrument is machine-readable institutional coverage.

This sounds abstract, but it can be approximated.

What share of important business processes have clean digital inputs, explicit objectives, accessible tools, policy boundaries and automatic logging?

How much work is still locked inside unstructured email, private memory or incompatible legacy systems?

An organization with poor interfaces cannot exploit agents fully no matter how good the model becomes.

Digital readiness is runway.

The fifteenth instrument is permission depth.

What actions are machines actually authorized to perform?

Read-only access is not the same as writing.

Writing is not the same as spending.

Spending is not the same as signing a contract.

A useful autonomy measure should classify the consequence level of actions and track how much work is executed without case-by-case human approval.

This makes governance measurable as a production constraint.

The sixteenth instrument is incident rate per unit of autonomous work.

Raw incident counts are misleading because deployment volume changes.

The relevant question is whether failures become less frequent or less severe as autonomous volume grows.

If incident rate falls while permission expands, the control stack is improving.

If incidents scale linearly or worse with deployment, trust becomes a brake.

The seventeenth instrument is capital conversion time.

How long does it take for committed investment to become productive capacity?

Capital expenditure announcements are not capacity.

A billion dollars can sit in land, construction-in-progress or equipment queues for years before serving one inference request.

Following capital from commitment to operation reveals the industrial clock behind the headlines.

The eighteenth instrument is return on AI infrastructure.

This matters because the runway is financed.

If providers and users cannot capture enough value to justify continued investment, the buildout can slow even if the technology is useful.

Consumer surplus alone does not pay for transformers.

The capital cycle needs credible cash flows or investors willing to fund future ones.

Watch utilization, pricing, margins, revenue growth and the willingness of capital markets to finance the next wave.

The nineteenth instrument is adoption breadth.

How many sectors are moving from occasional assistance to embedded intelligence?

Usage counts are not enough.

A chatbot tried once is different from an agent attached permanently to procurement, customer support, software operations or research.

Embeddedness matters because persistent use generates compounding process change.

The twentieth instrument is bottleneck half-life.

This may be the most original number on the panel.

How long does a newly visible constraint remain the binding constraint before investment, substitution, efficiency or redesign loosens it?

Suppose high-bandwidth memory becomes scarce.

How long until supply expands or architectures reduce dependence?

Suppose grid connection becomes scarce.

How long until generation, transmission, behind-the-meter power or location changes respond?

Suppose verification becomes scarce.

How long until better evaluators reduce review burden?

If bottleneck half-life is falling, the runway is becoming self-extending.

This is what acceleration looks like at system level.

The constraint still appears.

The system removes it faster.

A civilization with rapidly moving bottlenecks may feel perpetually constrained even while total capacity explodes. Every solved shortage reveals another.

This can create misleading pessimism.

Observers see the current shortage and assume it caps the future.

The right question is how long shortages survive once their economic value becomes obvious.

This is where industrial history becomes useful.

A shortage can trigger substitution.

High prices justify new capacity.

Engineers redesign around the scarce input.

Governments change permitting.

Competitors enter.

Efficiency improves.

Demand shifts geographically.

The response time determines whether the shortage is a wall or a speed bump.

The twenty-first instrument is generation interval across the whole AI production system.

This is difficult but conceptually central.

How long does it take for an improvement in AI capability to contribute materially to the next improvement in AI capability?

The path may run through coding tools, research, chip design, infrastructure operation or science.

It does not have to be a direct self-edit.

Measure the fastest important feedback loops and ask whether they are becoming shorter and larger in effect.

A recursive system is emerging when outputs from one generation become meaningful inputs to the next before the old production cycle would have completed.

The twenty-second instrument is calendar compression in the wider economy.

How long from idea to prototype?

Prototype to customer evidence?

Scientific hypothesis to measurement?

Capital commitment to productive asset?

Policy proposal to implementation?

Failure detection to correction?

The common denominator is elapsed time.

Takeoff is ultimately visible as more consequential cycles fitting inside the same year.

This panel is intentionally messy.

Civilization is messy.

A single AGI score cannot summarize transformers, laboratories, liability, memory bandwidth, organizational interfaces and robot maintenance.

The instrument panel should preserve the mess because the mess contains the bottleneck.

There is still a role for summary judgment.

We can ask whether most arrows point toward shorter cycles and higher parallelism.

We can ask whether physical capacity is expanding fast enough to support cognitive demand.

We can ask whether controls are improving fast enough to expand permission.

We can ask whether AI is materially helping remove the constraints on AI.

But the judgment should come after the measurements.

This also gives the book a way to be wrong.

A roadmap that cannot fail is a story.

This one can fail in several observable ways.

Model price-performance could flatten.

Task horizons could stop extending.

Verification cost could remain proportional to generation.

Data-center lead times could lengthen indefinitely.

Power constraints could dominate.

Chip improvements could slow.

AI-assisted research could produce mostly noise.

Robotics could remain intervention-heavy.

Organizations could refuse meaningful permissions.

Capital returns could disappoint enough to stop the buildout.

Bottleneck half-life could rise rather than fall.

Any of those outcomes would weaken the takeoff thesis.

Several together could break it.

This is healthy.

The point of a roadmap is not to make a prediction invulnerable.

It is to tell us what road we are on.

The instrument panel changes the emotional character of the AI debate.

Instead of arguing over whether a dramatic future is inevitable, we can look at the production system.

Is intelligence getting cheaper?

Can it stay on task longer?

Can humans supervise more of it?

Can the grid feed it?

Can fabs supply it?

Can laboratories close loops around it?

Can institutions trust it with larger actions?

Can it help improve the machinery that produces the next generation?

Are the waits shrinking?

Those questions are less glamorous than asking for the date of AGI.

They are also closer to the ground.

Aircraft take off because enough physical variables cross thresholds together.

Lift exceeds weight.

Thrust overcomes drag.

The runway provides enough distance.

The pilot has control.

No single gauge declares flight by itself.

AI takeoff should be treated the same way.

The instrument panel does not predict the exact moment the wheels leave the ground.

It tells us whether the aircraft is accelerating, whether the runway is long enough and whether the system building the runway is beginning to outrun the map we started with.
