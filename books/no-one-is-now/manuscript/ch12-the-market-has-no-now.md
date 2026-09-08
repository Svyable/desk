# Chapter 12 — The Market Has No Now

A price looks like a fact.

Open a finance app and a number sits beside a ticker symbol: 143.27. Green if it has risen, red if it has fallen. The visual language is assertive. Here is what the thing is worth.

The market does not contain that number in one place.

A security may trade on multiple venues. Quotes change as orders are entered, canceled and executed. Market-data feeds travel over fiber and microwave links. Different participants receive updates at different times. A consolidated display chooses rules for combining information. By the time a price reaches a phone through several layers of infrastructure, the events that produced it are already past.

The displayed present is an edited reconstruction.

Finance makes a useful laboratory for the absence of global now because money forces institutions to care about delays most people can ignore.

During the rise of high-frequency trading, firms spent extraordinary sums shaving microseconds from communication paths. Fiber routes were straightened. Microwave networks were built because radio through air can outrun light traveling through glass once the lower propagation speed in fiber and route geometry are considered. Servers were placed in co-location facilities near exchange matching engines. Cable lengths inside data centers became competitive variables.

A market supposedly made abstract by computers rediscovered geography at nearly the speed of light.

Distance became price.

This was not because traders had failed to buy fast enough computers. It was because information had to move.

Suppose an order changes the best available price on an exchange in New Jersey. A participant in the same co-location building can receive the update quickly. Another participant in Chicago receives it later. Someone in London later still. There is no physical instant at which “the market” everywhere possesses the new state.

There is a causal wave of knowledge.

Trading systems are designed around this. Some firms attempt to predict how price changes on one venue will propagate to another. Exchanges and regulators create rules around data dissemination, access and timestamps. The fairness questions become questions about which delays are acceptable, which are sold as products and which participants can act before others know what happened.

The underlying physics is neutral.

The institutional choices are not.

This is a distinction worth keeping. Relativity does not tell a securities regulator what market structure is fair. The speed of light does not decide whether co-location should be allowed or how data feeds should be priced. Physics sets a floor under latency. Humans decide what to build above it.

The same is true of clocks.

A regulator can require trading venues to synchronize business clocks within a specified tolerance of UTC and timestamp reportable events to specified resolution. Those rules make later reconstruction possible. They do not cause every market event to become simultaneous.

A timestamp is evidence about an event under a clock discipline.

This sounds bureaucratic because it is. Bureaucracy is where metaphysics goes when someone has to audit it.

After a market disruption, investigators may receive billions of records from different systems. They need to know which orders were accepted, routed, canceled and executed; what market data each participant could have seen; whether clocks were synchronized; whether timestamps had sufficient resolution; and which network paths introduced delay.

The timeline is not lying around waiting to be printed.

It has to be reconstructed.

That reconstruction can reveal causal order at a precision finer than any human observer experienced. A trader may remember “around 2:32.” The machines preserve microseconds. The clocks may still require correction.

This creates a peculiar modern condition: systems remember temporal distinctions their users never perceived.

Your phone knows when a photo was taken more precisely than you remember the day. A web server logs a request to milliseconds. A payment processor timestamps authorization. A car records sensor states before a crash. An implanted medical device may retain event history. The digital world generates a dense artificial past.

The denser the record, the more serious clock disagreement becomes.

If one device is thirty seconds wrong, the human story may survive. If one market server is thirty microseconds wrong, the inferred order of events can change.

Precision transforms “when?” from context into evidence.

There is no end to this escalation in principle. Better clocks and faster systems make smaller offsets relevant. Optical clock networks may eventually distribute time at levels where gravitational potential differences that once belonged only to relativity experiments enter routine infrastructure.

The floor beneath a server rack could matter to the clock model.

This sounds absurd until one remembers that satellite systems already incorporate relativistic models because tens of microseconds are enormous to navigation. Infrastructure grows into the effects measurement can see.

Markets reveal another problem with the universal present: one-number interfaces conceal multiplicity.

A stock has a last traded price on each venue. It has bid and ask quotes. It has orders hidden or displayed under different rules. Derivatives markets imply expectations. Dark pools execute without displaying all interest. Overseas instruments related to the same company may trade while a primary venue is closed.

Which number is the present value?

Economics supplies answers depending on purpose. Mark-to-market accounting may use one convention. A trader uses executable prices. A news app uses a consolidated last price. A valuation model estimates something else entirely.

There is no scandal in this until an interface pretends purpose disappeared.

Time works similarly.

“What time is it?” has a civil answer because we have agreed on a purpose: coordinate human activity. “How much time elapsed along this satellite’s orbit?” has a proper-time answer. “Which distributed event happened first?” may have a causal answer or no forced order. “How old is the universe?” has a cosmological-model answer. Trouble begins when one answer is promoted into the essence of time.

Markets also show how actors exploit uncertainty at boundaries.

Arbitrage exists when related prices temporarily diverge. A trader who can buy cheaper in one place and sell dearer in another helps bring the prices together while earning from the gap. Classical descriptions often imagine this happening until one law of one price is restored.

But convergence has speed.

Information travels, orders travel, inventory risk exists, transactions can fail. A price discrepancy lasting a millisecond is still a real local state for a system capable of acting within that millisecond.

What counts as temporary depends on the organism.

To a human discretionary trader, a one-millisecond divergence does not exist as an opportunity. To an automated system built for microseconds, it can be a landscape.

Biology has analogous scale dependence without the money. A hummingbird experiences and controls movements on temporal scales different from a tree. A bacterium responds to chemical changes no human nervous system individually notices. A geological process treats a century as brief.

There is no universal operational present because operations have timescales.

This suggests a useful way to think about “real time.”

Real time is a contract between delay and consequence.

A cardiac pacemaker has deadlines tied to physiology. A power-grid protection relay has deadlines tied to electrical instability. A spacecraft landing system has deadlines tied to motion. A video stream has deadlines tied to perception. A market-maker has deadlines tied to competition. A payroll system can take hours.

Calling all of these real-time systems would be technically wrong in some contexts, but the broader principle holds: timeliness is relative to what happens if the response is late.

Human society increasingly forgets this because software labels everything live.

Live traffic.

Live location.

Live sports score.

Live election results.

Live inventory.

Live markets.

The adjective usually means a pipeline is updating frequently. It does not mean the display shares a physical present with the events.

A live sports broadcast crosses cameras, encoders, networks, distribution systems and screens. Someone in the stadium can cheer before a remote viewer sees the play. Betting markets care. Friends messaging across different streams discover delays because one person sends “WHAT A GOAL” before the other has seen the shot.

A trivial annoyance reveals causal structure.

The audience is not in one now.

Historically, broadcast media came unusually close to manufacturing one. A radio address could reach millions within fractions of a second. Television schedules synchronized national routines. People later remembered where they were when an event was announced because mass communication compressed the knowledge delay.

Streaming has partially reversed this. Personalized networks introduce differing buffers. The same event arrives on different devices at different times. The global audience fragments into local presents managed by software.

The physics did not change. The architecture did.

This is a useful warning against treating cultural simultaneity as natural.

A nineteenth-century town, a twentieth-century broadcast nation and a twenty-first-century personalized network inhabit different manufactured presents. Their people have the same nervous systems and live under the same speed of light. Infrastructure changes which delays matter socially.

The future could change them again.

As humans place more autonomous machines in the world, decisions may occur on timescales below human perception. An electrical grid can trip automatically. A trading algorithm can react in microseconds. A vehicle-control system can intervene before a driver consciously understands the hazard. Humans become supervisors of causal processes whose present is too thin for consciousness.

This creates an accountability problem.

When an autonomous system acts within milliseconds, the human cannot be “in the loop” in the literal temporal sense. Oversight moves earlier and later: design constraints beforehand, logs and review afterward.

The present becomes the machine’s territory.

We govern it from adjacent times.

This pattern is already normal in aviation. Pilots do not manually stabilize every aerodynamic fluctuation. Control systems do. Operators set modes, monitor behavior and intervene at human timescales. After an incident, investigators use high-frequency records to reconstruct processes too fast to have been consciously observed.

Advanced AI systems may deepen this. Agents can exchange messages, execute transactions and update plans at machine speed. If multiple autonomous systems act across networks, causal ordering, clock integrity and audit trails become part of governance. “What did the model know when it acted?” becomes a distributed-systems question as much as a psychological metaphor.

The market has been rehearsing this problem for years.

Machines act on local views. Their local views are delayed. They infer what others may know. They leave logs. Humans reconstruct the outcome.

The system displays one price afterward.

This is why I think finance is a better teacher of relativity than most motivational analogies about time.

It is ruthless about the difference between a convenient shared present and a physical one.

A firm can buy a faster link, but it cannot buy zero distance.

An exchange can publish a timestamp, but it cannot make every observer receive the event simultaneously.

A regulator can mandate synchronization, but the mandate must specify tolerances because real clocks and real networks exist.

A trader can profit from a discrepancy, proving the discrepancy was operationally real for someone even if a slower observer never saw it.

The market is not special.

It simply attaches money to causality.

That makes the invisible expensive enough to measure.