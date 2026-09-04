# Chapter 9 — Large-load flexibility boundary (2026)

## Why this note exists

Chapter 9 argues that deliverable power can become a binding compute input when data-center development moves faster than substations, transmission, generation, equipment procurement, and grid studies. The 2026 regulatory record sharpens that claim in an important way: grid access is not simply available or unavailable. The firmness of the service, the customer's willingness to curtail, and the load's behavior during disturbances can change both how quickly a project connects and what risk it creates for everyone else.

The useful distinction is therefore not just **power versus no power**. It is **firm power, flexible power, and badly controlled power**.

## FERC: flexibility is becoming an interconnection product

On June 18, 2026, the Federal Energy Regulatory Commission opened Section 206 proceedings covering all six regional grid operators under its jurisdiction and directed them to justify or reform their tariffs for large loads such as data centers and manufacturing facilities. FERC framed the problem as one of speeding large-load integration while preserving reliability and consumer safeguards.

The accompanying orders explicitly point toward flexible transmission service as one possible solution. In the PJM context, FERC had already created pathways for co-located loads that are willing and able to limit their withdrawals from the transmission system. The June 2026 orders generalize the underlying question: when a large customer can credibly reduce grid demand, the system may be able to connect it with fewer or later network upgrades than would be required for fully firm service.

That is strong evidence for one of Chapter 9's more interesting claims: flexibility can become capacity. But it should be stated more precisely. Flexibility does not create megawatts from nothing. It changes the reliability obligation the grid must satisfy for that customer.

**Primary source:** Federal Energy Regulatory Commission, "FERC Launches Aggressive Targeted Action to Speed Large Load Integration," June 18, 2026, and the associated Section 206 orders for the six RTO/ISO regions.

## PJM: connect first, manage the constraint

PJM's 2026 Connect and Manage Senior Task Force makes the idea operational. The framework was created for a transition period in which new load additions are outpacing new capacity additions. PJM is examining whether certain large loads could connect before all required transmission upgrades are complete, with curtailment occurring before pre-emergency demand response when the system lacks sufficient capacity.

This is useful counterevidence to any version of the chapter that treats grid delay as mechanically fixed. Some delay can be converted into a contract: accept interruption risk, expose real flexibility, and gain earlier access.

The economic implication is clean. A megawatt with a five-nines-style firmness promise is a different product from a megawatt the customer agrees to surrender during a narrow set of stressed hours. A data center with schedulable training work, batteries, backup generation, or geographic redundancy may rationally buy less firmness than a hospital or an industrial process that cannot stop without damage.

**Primary source:** PJM Interconnection, Connect and Manage Senior Task Force materials and issue charge, 2026.

## NERC: uncontrolled flexibility can itself become a disturbance

The strongest counterargument to "flexible compute as a grid resource" is that very large electronic loads do not only matter when they consume power. They also matter when they suddenly stop consuming it.

NERC's 2026 Summer Reliability Assessment reports that both the Eastern and ERCOT Interconnections have experienced voltage-sensitive load-reduction events of about 1,500 MW. In the Eastern event, NERC says the reduction was primarily associated with data centers and other power-electronic loads transferring to backup generation. The abrupt loss of load contributed to frequency overshoot and high voltage.

NERC's 2026 computational-load standards work makes the broader point explicit. Emerging large loads can have fast ramp rates, unusual ride-through behavior, and other characteristics that require better modeling, commissioning, and operating rules. At the same time, NERC says treating these loads as sources of flexibility and reliability support, when possible, will be important.

The two claims belong together. A controllable load can help the grid. An uncontrolled or poorly modeled load that disappears in a block can hurt it.

**Primary sources:** North American Electric Reliability Corporation, *2026 Summer Reliability Assessment*; NERC Project 2026-02, Computational Loads; NERC Large Loads Action Plan.

## Strongest counterargument

The chapter can overstate the physical-grid bottleneck if it treats every requested megawatt as needing the same infrastructure and reliability standard. FERC and PJM are actively developing ways to connect flexible or co-located large loads sooner, which means tariff design and operational commitments can substitute for some near-term construction.

That counterargument does not defeat the chapter's mechanism. It narrows it. The binding input is not gross electricity in the abstract; it is **deliverable electricity under a specified reliability contract at the place and time the workload requires it**.

There is also a second boundary. Flexibility is not automatically benign. If thousands of megawatts transfer to backup generation or trip off in correlated fashion, the system can experience a reliability event precisely because the load was able to disappear quickly.

## Editorial implication for Chapter 9

A future prose pass should replace any binary treatment of connection with a product spectrum:

- firm service that assumes the load remains available through stressed conditions;
- interruptible or flexible service that buys earlier access by accepting defined curtailment;
- behind-the-meter or co-located arrangements that reduce ordinary grid withdrawals but still create contingency and cost-allocation questions;
- poorly modeled or poorly coordinated computational load whose rapid behavior can itself become a grid disturbance.

The most useful sentence to earn from this evidence is not "software can replace wires." It is narrower: **software, contracts, and operational flexibility can change how many wires are needed now, but they also change what the grid must be prepared to survive.**

That is a stronger version of the book's conversion thesis because it turns flexibility from a slogan into a reliability obligation.