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

**Three Kinds of Full**

A data center can be full in at least three different senses.

It can be physically full: the racks are populated, the power is committed, and the cooling system is carrying the load.

It can be contractually full: customers have signed agreements that reserve most of the available capacity.

And it can be economically full: the hardware is doing enough high-value work, at prices high enough, for long enough, to earn an acceptable return on the capital tied up in the site.

Those conditions often overlap during scarcity. They do not have to remain aligned.

A provider can report a large backlog while still waiting for buildings, power, chips, or networking to become available. Once capacity is delivered, a customer can hold a reservation without using every hour it bought. A workload can keep machines busy while competitive pricing drives the revenue earned per unit of useful compute downward. A contract can protect near-term cash flow even as the replacement value of the service falls.

The difference is not accounting trivia. It is the center of the investment question.

CoreWeave's June 2026 disclosures provide a useful snapshot of the scale involved. The company reported roughly $104 billion of revenue backlog at June 30, with the measure including remaining performance obligations and other amounts expected from committed customer contracts, subject to delivery and service availability. That is formidable commercial evidence. It is not the same thing as $104 billion already earned, nor proof that every dollar of the capacity built to serve those commitments will retain the same economics through the life of the hardware.

The distinction cuts both ways. A backlog can be much more valuable than a loose pipeline because customers have actually committed. Long contracts can finance buildings, power, and equipment that would otherwise be too risky to construct. They can also give a provider time to diversify its customer base and improve scheduling.

But the backlog is the beginning of the utilization analysis, not the end.

You still have to ask when the capacity will be delivered, what it costs to deliver, how concentrated the customers are, what happens if a customer changes architecture, what portion of the obligation is take-or-pay, and what the same amount of useful compute will cost when renewal arrives.

In a rapidly deflating technology, time can turn a strong contract into a bridge from one pricing regime to another.

**Training Is Lumpy, Inference Is Restless**

Training and inference produce different utilization patterns.

Large training runs can consume enormous clusters for extended periods. They are spectacular, visible, and strategically important. But frontier training is concentrated among a relatively small number of organizations, and each generation of model may use different architectures, hardware, and optimization techniques.

Inference is potentially much larger in aggregate because every user interaction consumes it. It is also more variable. Consumer demand follows time zones. Enterprise workloads follow business processes. Agents may create bursts of activity. Coding assistance is different from video generation. Batch processing can wait; interactive systems cannot.

A capacity provider wants to smooth these patterns into a high-utilization portfolio.

That is easier said than done.

The provider must combine customers, geographies, workload types, pricing models, and scheduling systems to turn irregular demand into something resembling a steady industrial load.

The better the provider becomes at this, the stronger the economics.

The worse it is, the more capital sits idle.

There is another complication. A machine can be busy without being busy in the most profitable way.

A premium cluster may be occupied by work that could have run acceptably on cheaper hardware. A provider may discount spare hours rather than leave them empty. Customers may shift batch jobs toward off-peak periods or cheaper regions. Routing software may send easy requests to smaller models and expensive requests only to the frontier system.

All of those choices can be economically rational. They also mean that a simple utilization percentage can conceal deteriorating yield.

Airlines learned this long ago. A plane with every seat occupied is not necessarily a profitable flight if the seats were sold too cheaply. Hotels do not stop at occupancy; they watch room rates and revenue per available room. An AI infrastructure business eventually needs the same discipline: utilization multiplied by realized price, adjusted for the cost and economic age of the hardware doing the work.

That is a harder number to advertise during a boom.

**The Reservation Illusion**

During scarcity, customers reserve capacity because they fear not having enough.

This behavior can make demand look stronger than actual usage.

Imagine an enterprise that expects its AI workload to grow rapidly. It commits to capacity today because executives believe future shortages will be worse. The commitment is rational insurance. But six months later, model efficiency improves. The company discovers that a smaller model can handle most tasks. It adopts caching. Prompts get shorter. A new accelerator generation delivers more work per watt. The application still succeeds—but it needs less compute than originally expected.

The provider sees a contract.

The system sees excess headroom.

Long-term contracts can hide this divergence for a while. Revenue remains protected even if usage is light. That is financially valuable in the near term. Yet contract renewal becomes the moment when technical reality meets commercial reality.

The customer asks a devastatingly simple question:

Why am I paying for what I no longer need?

Scarcity can also produce a subtler form of double counting.

Suppose several customers each reserve more capacity than their median expected workload because they fear a shortage. The provider sees multiple commitments and builds for them. The customers see guaranteed access and feel prudent. But if all of them independently built the same insurance cushion into their reservations, the industry's contracted demand may contain more precaution than actual simultaneous use.

That does not make the contracts fake. Insurance has value precisely because the insured event may not occur.

It does mean that a capacity planner should distinguish demand for compute from demand for the *option* to use compute.

Those are different products.

During a shortage, the option can command a premium. During abundance, customers become less willing to pay for it.

This is one reason the end of scarcity can be so abrupt for suppliers. The market does not merely lose some workloads. It can lose the insurance premium that customers were paying to secure access before they knew how much they would need.

**Concentration Makes Utilization Look Safer Than It Is**

A small number of enormous customers can solve the utilization problem beautifully.

They can also move it somewhere else.

A hyperscaler, frontier lab, or large enterprise can absorb enough capacity to support an entire site. The contract may make financing possible. The customer's technical team can coordinate closely with the provider. Scheduling becomes easier because the provider does not have to aggregate thousands of small accounts.

The cost is concentration.

If a few customers represent most of the revenue, utilization risk becomes renewal risk, credit risk, and bargaining-power risk. The machines may remain busy while the customer uses its scale to demand lower prices. A customer may internalize more infrastructure. It may switch providers. It may redesign a model so that the same output requires fewer accelerator-hours. It may remain loyal but insist that the provider share the gains from better hardware economics.

This is not unique to AI. Suppliers in semiconductors, aerospace, retail, and automotive manufacturing have long discovered that a giant customer can simultaneously be the reason a factory exists and the reason its margins are thin.

The AI version is unusually intense because the underlying service is improving so quickly.

When the next generation of hardware offers more useful work per dollar, both sides know it. When software efficiency improves, both sides know it. When competing capacity comes online, both sides know it.

The negotiation takes place against a moving technical frontier.

A ten-year building can host several generations of machines. A five-year financing package can outlive the economic premium of the accelerators it funded. A customer contract can be long relative to a model cycle and short relative to the site underneath it.

The mismatch among those clocks is where apparently stable utilization can become unstable economics.

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

There is a further wrinkle. Jevons effects often arrive through new uses that look trivial before the price falls far enough.

Nobody can forecast those applications cleanly in advance. That uncertainty is part of the bull case. Cheap inference may create categories of demand that today's spreadsheets barely contain.

But new demand does not arrive obligated to use yesterday's supplier, yesterday's architecture, or yesterday's price.

The same abundance that creates the use case widens the customer's choice.

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

The historical numbers sharpen the point. The Richmond Fed found that real investment in communications equipment rose from roughly $62 billion a year in early 1996 to more than $135 billion by the end of 2000, in constant 1996 dollars. Then investment growth turned negative for seven consecutive quarters. The physical network did not vanish when the capital cycle reversed. The ownership claims and return expectations changed first.

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

That clock becomes more important when the asset stack contains different useful lives.

The land may remain valuable for decades. The transmission connection may become more valuable as power grows scarce. The building may host multiple equipment generations. The electrical gear may be reusable. The accelerators themselves may lose their scarcity premium much faster.

An investor who says “the data center will be useful for twenty years” may therefore be answering the wrong question.

Which part of the data center?

Useful to whom?

At what price?

And after how much additional capital has been spent replacing the equipment that made the first underwriting case work?

Physical durability can coexist with financial obsolescence.

**The Useful Capacity Question**

Every AI infrastructure investor should ask a question more demanding than “How much capacity is contracted?”

Ask:

**How much of this capacity will be economically productive through a full hardware and pricing cycle?**

That requires understanding expected utilization by workload, the duration and quality of customer contracts, customer concentration, hardware refresh requirements, power costs, networking constraints, software scheduling efficiency, residual value, price declines for equivalent performance, and the cost to refinance the capital structure.

It also requires separating four denominators that are often collapsed into one.

How much capacity has been announced?

How much has actually been delivered?

How much delivered capacity is being used?

How much used capacity is earning an adequate return?

The first number is easy to put in a press release. The last one is the business.

For a mature operator, the most revealing metric may eventually resemble revenue per available accelerator-hour rather than raw accelerator count: realized revenue divided by the economically usable fleet, with enough disclosure to understand hardware generation, customer mix, and power cost. The exact industry metric may differ. The principle will not.

A denominator that deteriorates quietly can overpower a numerator that still looks impressive.

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
