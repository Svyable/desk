# The Utilization Trap

A hotel room that goes empty tonight cannot be sold twice tomorrow.

A seat on an airplane that leaves unoccupied is gone forever.

A megawatt-hour not sold during the relevant hour cannot always be saved for next week.

Capacity businesses share a cruel characteristic: time can destroy inventory.

AI infrastructure belongs partly to this family.

A GPU remains an asset after an idle hour, but the revenue opportunity from that hour is gone. Worse, the hardware itself is aging economically while it waits. A cluster purchased at the frontier is moving toward the middle of the performance curve every month.

This is why utilization is one of the most important and least glamorous variables in the AI boom.

**Installed Is Not Used**

The industry talks constantly about capacity.

Megawatts commissioned.

GPUs deployed.

Clusters announced.

Regions opened.

Bookings signed.

Backlogs accumulated.

These numbers matter, but they are not interchangeable with profitable utilization.

Consider a 100,000-accelerator fleet.

Some hardware is unavailable for maintenance. Some is fragmented across workloads. Some sits reserved for burst demand. Some is used for internal research rather than external revenue. Some customers have purchased commitments they do not fully consume. Some jobs cannot be scheduled efficiently because they require particular memory, networking, or latency characteristics. Some capacity is technically occupied but serving low-margin work.

The headline fleet can be full while the economic fleet is not.

This distinction appears in every capacity market. Hotels have rooms but care about revenue per available room. Airlines have seats but care about load factors and yields. Semiconductor fabs have wafer capacity but care about mix and utilization. Utilities have generation capacity but care about dispatch and realized power prices.

AI capacity owners need their own equivalent.

Tokens alone are insufficient.

**Training Is Lumpy, Inference Is Restless**

Training and inference produce different utilization patterns.

Large training runs can consume enormous clusters for extended periods. They are spectacular, visible, and strategically important. But frontier training is concentrated among a relatively small number of organizations, and each generation of model may use different architectures, hardware, and optimization techniques.

Inference is potentially much larger in aggregate because every user interaction consumes it. It is also more variable. Consumer demand follows time zones. Enterprise workloads follow business processes. Agents may create bursts of activity. Coding assistance is different from video generation. Batch processing can wait; interactive systems cannot.

A capacity provider wants to smooth these patterns into a high-utilization portfolio.

That is easier said than done.

The provider must combine customers, geographies, workload types, pricing models, and scheduling systems to turn irregular demand into something resembling a steady industrial load.

The better the provider becomes at this, the stronger the economics.

The worse it is, the more capital sits idle.

**The Reservation Illusion**

During scarcity, customers reserve capacity because they fear not having enough.

This behavior can make demand look stronger than actual usage.

Imagine an enterprise that expects its AI workload to grow rapidly. It commits to capacity today because executives believe future shortages will be worse. The commitment is rational insurance. But six months later, model efficiency improves. The company discovers that a smaller model can handle most tasks. It adopts caching. Prompts get shorter. A new accelerator generation delivers more work per watt. The application still succeeds—but it needs less compute than originally expected.

The provider sees a contract.

The system sees excess headroom.

Long-term contracts can hide this divergence for a while. Revenue remains protected even if usage is light. That is financially valuable in the near term. Yet contract renewal becomes the moment when technical reality meets commercial reality.

The customer asks a devastatingly simple question:

Why am I paying for what I no longer need?

**The Jevons Escape Hatch**

Bulls have an important response.

When the cost of a resource falls, people often use much more of it. This is associated with the Jevons paradox: improvements in efficiency can increase total consumption by making a resource cheaper and enabling new uses.

AI may be one of the strongest Jevons technologies ever created.

If inference becomes ten times cheaper, developers may run models a hundred times more often. Agents may perform continuous background work. Video generation may become routine. Software may contain models in every interface. Scientific systems may explore vastly more candidate solutions. Robotics may consume persistent real-time inference.

This can keep aggregate compute demand rising even while cost per task falls.

The escape hatch is real.

But it does not rescue every supplier.

Jevons describes system-level demand. Investors own companies.

If usage grows a hundredfold while price falls two hundredfold, revenue falls.

If aggregate compute rises but newer hardware captures most of the work, owners of older fleets suffer.

If demand explodes but customers route to the cheapest adequate provider, premium margins compress.

If AI becomes universal but embedded inside applications sold by other firms, model vendors may capture only a thin fraction of the value.

The economy can experience Jevons abundance while individual assets experience deflation.

**The Bull Case Deserves Its Full Weight**

A serious capital-cycle argument must acknowledge the possibility that the buildout is not large enough.

What if agents create workloads that are orders of magnitude larger than chat?

What if video generation becomes a daily consumer habit?

What if scientific inference, robotics, simulation, and autonomous software turn every marginal improvement in efficiency into even more demand?

What if sovereign buyers deliberately duplicate capacity for resilience?

What if frontier training remains so valuable that the largest firms rationally spend extraordinary sums to preserve leadership?

In that world, today's capex could look conservative.

The point of the utilization framework is not to deny this outcome. It is to reveal what must be true for a particular asset to earn its expected return.

A macro shortage does not guarantee every project is well located.

Explosive demand does not guarantee every hardware generation retains value.

Strategic importance does not guarantee every borrower can refinance.

The bull case can win at the level of civilization while some capital providers still lose at the level of securities.

That is the recurring distinction.

**The Fiber Lesson**

In September 2000, an industry publication could still run a headline saying the future looked bright for fiber manufacturers.

Within months, the language changed from shortage to glut.

A later Federal Reserve Bank of Richmond history of the telecom boom reconstructed how quickly the narrative broke. By late 2000, it was becoming clear that long-haul fiber contained significant overcapacity. In early 2001, trade coverage described nearly 600,000 miles of new inter-city fiber on the way while capacity prices were already falling and major customers were failing. By June, Nortel announced a quarterly loss measured in the tens of billions of dollars.

The internet had not stopped growing.

That is what makes the episode so useful.

The Richmond Fed authors identified three forces behind the overcapacity. First, the industry had done what young industries often do: overshot investment before a shakeout. Second, improvements in the amount of traffic a single strand of fiber could carry were greater than planners had anticipated when many networks were conceived. Third, demand had grown—but not as fast as the forecasts embedded in valuations and capital-spending plans.

Read those three causes again in the language of AI.

Too many firms build for the same future.

Technical efficiency makes each installed unit more productive than expected.

Demand grows enormously but still fails to match the heroic assumptions used to finance the buildout.

No collapse in end use is required.

The investment math can break while the technology keeps winning.

This is why the fiber analogy is more useful than the cartoon version of the dot-com crash. The story is not that people bought silly websites. The story is that serious companies financed serious physical infrastructure for a future whose direction they understood better than its timing.

They were right about the destination.

They were wrong about how the cash flows would be distributed on the way there.

The economic afterlife of the fiber is equally important. Networks changed hands. Capital structures were written down. Capacity that had been expensive to construct became cheap for later users to rent. Applications that would have looked extravagant under scarcity economics became ordinary under abundance economics.

The infrastructure survived its original spreadsheet.

That is the nightmare version of the AI buildout for some investors and the dream version for everyone who wants to build on top of it:

Not empty data centers forever.

Not a collapse in AI usage.

A world in which enormous capacity is built, technical efficiency improves faster than expected, and the resulting abundance benefits applications more than the owners who financed the first wave.

**The Bandwidth Fallacy**

One of the seductive arguments in the telecom boom was that internet traffic would grow so rapidly that almost any amount of new bandwidth would eventually be needed.

This was directionally true and financially incomplete.

The missing variable was time.

A network financed in 1999 did not merely need the world to consume its capacity someday. It needed enough paying traffic soon enough, at high enough prices, to service the capital that had built it.

Investors in AI infrastructure face the same temporal trap.

Saying that AI may eventually consume vastly more compute does not answer whether a particular cluster earns its hurdle rate before the next hardware generation changes the price-performance frontier.

Eventually is not a cash-flow period.

The cost of capital owns a clock.

**The Useful Capacity Question**

Every AI infrastructure investor should ask a question more demanding than “How much capacity is contracted?”

Ask:

**How much of this capacity will be economically productive through a full hardware and pricing cycle?**

That requires understanding:

- expected utilization by workload;
- duration and quality of customer contracts;
- customer concentration;
- hardware refresh requirements;
- power costs;
- networking constraints;
- software scheduling efficiency;
- residual value of equipment;
- price declines for equivalent performance;
- and the cost to refinance the capital structure.

The industry will publish easier metrics because easy metrics rise faster during booms.

Serious investors will look for the denominator.

**The Overbuild Can Be Bullish for Everyone Else**

There is a final irony.

If the AI infrastructure industry overbuilds, users win.

Developers gain access to cheaper compute.

Startups face lower barriers to experimentation.

Enterprises gain bargaining power.

Researchers can run more experiments.

New business models become possible because inference costs fall beneath thresholds that once made them uneconomic.

The infrastructure investor's pain becomes the application entrepreneur's subsidy.

This is how bubbles hand the future to the next cohort.

Railroad receivership did not erase the tracks.

Telecom bankruptcy did not erase the fiber.

If AI capacity is someday sold below the return assumptions that financed it, the machines will still be there, humming on behalf of people who did not pay full price to build them.
