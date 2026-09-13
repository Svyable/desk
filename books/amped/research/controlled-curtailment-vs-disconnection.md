# Controlled curtailment is not uncontrolled disappearance

## Chapter target

Chapter 13, **“The Data Center Becomes a Grid Resource,”** argues that a sufficiently controllable large load can become a reliability resource. The chapter is strongest when it insists that planning credit requires durable obligations, telemetry, testing, and penalties. Its weakest stretch is the hypothetical emergency in which a data center simply declines to curtail. A real 2026 PJM event now gives the chapter a sharper and less obvious stress test: a data center can reduce load *too abruptly and without coordination*.

## Primary record

### July 22, 2026: nearly 4 GW disappears in Northern Virginia

PJM reported that on July 22, 2026, nearly **4,000 MW of data-center load unexpectedly disconnected** from the grid in Northern Virginia and transferred to backup generation. PJM and Dominion operators then had to manage the resulting load-generation imbalance together with voltage and frequency excursions. PJM said the event did not cause unresolvable reliability impacts, but described it as the third measurable event of this type in two years.

PJM’s September 10 account says the operator responded by proposing changes to large-load interconnection reliability requirements, including ride-through expectations, modeling, and coordination for computational loads.

Primary source:
- PJM, “PJM Proposes Reliability Standards to Manage Large Load Disconnection Events,” September 10, 2026: https://insidelines.pjm.com/reliability-standards-to-manage-large-load-disconnection-events-proposed-by-pjm/

PJM’s System Operations Subcommittee also posted a dedicated presentation titled **“July 22 Dominion Load Transfer Event”** on July 31, 2026. That meeting record is useful as the underlying technical-document trail and should be preferred for any later quantitative detail beyond PJM’s public summary:
- PJM System Operations Subcommittee meeting materials, July 31, 2026: https://www.pjm.com/committees-and-groups/subcommittees/sos

## Why this changes the argument

At first glance, a four-gigawatt reduction sounds like spectacular proof that data centers are flexible. It is almost the opposite of the reliability product Chapter 13 is describing.

A dispatchable resource is useful because the operator can predict, request, measure, and plan around its response. An autonomous transfer to backup generation can create a new contingency even though the customer’s net grid demand falls. The important variable is therefore not merely **how much load can disappear**. It is whether the disappearance is coordinated with the power system: when it happens, how quickly, how much changes, what electrical behavior accompanies the transfer, and how load returns afterward.

This produces a cleaner distinction for the chapter:

> **Controlled curtailment is a reliability product. Uncontrolled disappearance is a reliability event.**

The distinction also improves the book’s treatment of automation. The existing draft calls automation “trust infrastructure.” That is directionally right but incomplete. Automation serving only the data center’s internal continuity objective can conflict with bulk-system needs. A protective system may rationally move a campus to backup power during a disturbance while creating an abrupt multi-gigawatt change that grid operators did not ask for. The relevant institutional achievement is not automation by itself; it is **coordinated automation with known ride-through and transfer behavior**.

## Strongest counterargument

The July event is **not** evidence that flexible-service programs are a mistake. It is evidence that accidental or autonomous load loss must not be counted as equivalent to contracted flexibility.

PJM’s 2026 Connect and Manage work points in the opposite direction: it is explicitly exploring ways for certain new large loads to connect under non-firm arrangements, with curtailment during defined shortage conditions and with transmission-owner/load-serving-entity coordination. PJM’s task-force materials describe customer flexibility as a possible bridge to earlier connection while necessary generation or transmission catches up.

Primary sources:
- PJM Connect and Manage Senior Task Force: https://www.pjm.com/committees-and-groups/task-forces/camstf
- PJM, “Develop Process to Provide Large Load Customers Flexibility to Connect to the Transmission Grid in the PJM Region,” February 2026: https://www.pjm.com/-/media/DotCom/committees-groups/committees/mrc/2026/20260219/20260219-item-04---2-exelon-connect-and-manage-large-load-flexibility---problem-statement.pdf
- PJM, “PJM Board Directs Action on Resource Adequacy, Affordability and Large Loads,” July 27, 2026: https://insidelines.pjm.com/pjm-board-directs-action-on-resource-adequacy-affordability-and-large-loads/

The strongest pro-flexibility reading is therefore preserved: controlled large-load curtailment may genuinely defer infrastructure, accelerate connections, or provide emergency relief. The July event simply raises the performance standard. A customer should not receive planning credit because its equipment is physically capable of leaving the grid; it should receive credit only for behavior the system can actually depend on.

## Recommended bounded prose pass

Replace the chapter’s hypothetical sequence beginning **“Imagine the first real emergency”** with the July 22 event and use it to make three points in fewer paragraphs:

1. **Direction alone is not reliability.** A 4 GW reduction can be destabilizing if it arrives unexpectedly.
2. **Software control is not automatically grid control.** Internal uptime logic and system reliability can point in different directions.
3. **Planning credit should attach to coordinated performance.** Ride-through, telemetry, transfer rate, curtailment triggers, restoration behavior, testing, and penalties matter more than a generic claim that compute is “flexible.”

This is more concrete than the current hypothetical, removes several presentation-like one-sentence paragraphs, and strengthens rather than weakens the chapter’s central thesis.

## Falsification / follow-up

Before converting this note into manuscript prose, check the July 22 technical presentation and any subsequent PJM standards filing for the exact event sequence and terminology. Do not infer that every disconnected megawatt was voluntarily dispatchable, that all sites behaved identically, or that backup generation itself caused the voltage/frequency effects.

The proposed distinction would weaken if later technical evidence showed that the event was fully coordinated with PJM/Dominion, occurred exactly as operators expected, and created no meaningful operational burden. PJM’s September 10 description currently points the other way, but the manuscript should follow the technical record if that changes.
