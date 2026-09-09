# Artificial Abundance Chapter 17 — flexible-load counterevidence

Date: 2026-09-09

Chapter 17, “Reality Gets Expensive,” is strongest when it treats physical scarcity as conditional rather than mystical. The existing prose already asks whether an electricity queue measures atoms or paperwork. A useful extension is to ask a second question: **is the load itself fixed?**

## Primary and authoritative evidence checked

### Lawrence Berkeley National Laboratory — 2025 U.S. data-center energy update

LBNL’s June 2026 *United States Data Center Energy Usage Report: 2025 Update* estimates a 2030 reference case of 649 TWh for U.S. data-center electricity use, with compounded-uncertainty scenarios spanning 521–843 TWh. Expressed as a share of U.S. electricity, the report gives a reference estimate of 11.8% and a 9.5–15.3% range.

The report is useful precisely because it is not a single-point prophecy. Its bottom-up model depends on expected IT-equipment shipments, per-device electricity use, cooling performance, facility type, location, utilization, chip lifetimes, and other assumptions. Alternative assumptions materially move the result.

Source: https://bies.lbl.gov/publications/united-states-data-center-energy-2025

### DOE / Lawrence Berkeley National Laboratory — load-flexibility workshop

A 2025 DOE/LBNL workshop report on data-center load flexibility records practical ways some demand can be shifted or reshaped, including temporal workload shifting and on-site energy resources. It also records the limits: high costs, regulatory complexity, operational constraints, service-level obligations, and the need for incentives and standardized approaches.

This is important counterevidence to any version of the chapter that treats a data center as a permanently rigid block of megawatts. Some computing work can move across time, location, or power source. Some cannot, or cannot move cheaply enough to matter during the relevant grid constraint.

Source: https://energyanalysis.lbl.gov/publications/doe-data-center-load-flexibility

### Federal Energy Regulatory Commission — June 18, 2026 large-load orders

On June 18, 2026, FERC issued show-cause orders to all six RTOs/ISOs under its jurisdiction, directing them to justify or reform tariffs governing large-load interconnection. The Commission’s five reform categories include more efficient application and study processes, protection against cost shifting, treatment of co-location and behind-the-meter generation, and **new transmission services for flexible large loads**.

FERC’s action is direct evidence for Chapter 17’s distinction between a physical shortage and a market/process design problem. The regulator is not assuming that every delay reflects insufficient generation or transmission. It is asking whether tariff design, study procedures, co-location rules, cost allocation, and load flexibility are themselves affecting the queue.

Source: https://www.ferc.gov/news-events/news/ferc-launches-aggressive-targeted-action-speed-large-load-integration

## Strongest counterargument

The physical-bottleneck thesis can become too easy if “physical” is allowed to mean “currently inconvenient.” Data-center demand is partly an engineering and market-design object. Workloads can sometimes be scheduled into lower-cost hours, shifted geographically, paired with storage or on-site supply, or exposed to contracts that make curtailment valuable. Interconnection rules can also generate delay that better process design could reduce.

That does not make the grid imaginary. Flexibility has boundaries. Low-latency services, reliability commitments, hardware utilization economics, network architecture, user demand, data locality, storage duration, fuel availability, and contractual obligations can all make a nominally flexible load much less flexible in practice. A megawatt that can move tomorrow is not necessarily useful during tonight’s constraint.

The stronger chapter-level claim is therefore narrower:

**Physical scarcity survives cheap cognition when the relevant capacity cannot be substituted, expanded, shifted, or reallocated on the clock that demand requires.**

That formulation improves the book because it makes flexibility part of the test rather than an afterthought. It also keeps the argument falsifiable: if cheap cognition makes loads materially more movable, improves utilization enough to avoid new capacity, or removes queue friction faster than demand grows, then the “reality gets expensive” effect should weaken in that domain.

## Editorial implications for a later prose pass

- Keep the existing “Some queues measure atoms. Some measure paperwork.” line, but consider extending the thought to loads that can move rather than only queues that can shrink.
- Do not replace the IEA global-share evidence with the LBNL U.S. estimate; they answer different questions. The IEA establishes global scale and local concentration, while LBNL gives a U.S.-specific uncertainty range.
- Do not describe the 11.8% figure as an observation. It is the report’s 2030 reference estimate.
- Avoid implying that flexibility eliminates infrastructure needs. Treat it as one way to change the timing, location, or shape of demand.
- Keep the policy test operational: before calling a bottleneck “physical,” ask what part of the wait survives better tariff design, better studies, better scheduling, and realistic load flexibility.
