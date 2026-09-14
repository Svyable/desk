# Chapter 17 — physical bottleneck boundary

Checked 2026-09-13 for Chapter 17, **“Reality Gets Expensive.”**

## Why this audit

The chapter’s best idea is not simply that AI uses electricity. It is that cheap representation can expose a slower physical constraint. The existing data-centre passage already has the right global/local distinction, but current evidence lets the manuscript make the mechanism more precise and gives it a stronger counterargument than “some queues are paperwork.”

## What the current evidence supports

The IEA’s 2025 *Energy and AI* report estimates global data-centre electricity consumption at about **415 TWh in 2024**, around **1.5% of global electricity consumption**. Its Base Case reaches about **945 TWh in 2030**, just under **3%**. Those are not interchangeable numbers: 415 TWh is an estimate of a historical year; 945 TWh is a scenario result.

The IEA also makes the chapter’s local-scarcity argument directly. Nearly half of existing U.S. data-centre capacity is concentrated in five regional clusters, and 50% of U.S. data centres under development are in pre-existing large clusters. A modest global share can therefore produce a severe local connection problem.

The timing mismatch is similarly concrete. The IEA says a data centre can sometimes become operational in roughly **two to three years**, while new transmission lines in advanced economies can take **four to eight years**. It also reports that wait times for critical grid components such as transformers and cables had doubled over the preceding three years. This is a cleaner mechanism than treating “the grid” as one undifferentiated physical limit: digital demand, transmission, generation, equipment supply, permitting, and interconnection can run on different clocks.

The U.S. denominator makes the scale more legible. DOE’s December 20, 2024 summary of Lawrence Berkeley National Laboratory’s U.S. data-centre report estimated **176 TWh in 2023, about 4.4% of U.S. electricity consumption**, with a 2028 range of roughly **325–580 TWh, or 6.7–12%**. A later DOE resource hub reports an updated LBNL central estimate of **11.8% of U.S. electricity use by 2030**, with scenarios from **9.5% to 15.3%**. These are modeled demand scenarios, not promised load or proof that every queued project will be built.

## Strongest counterargument

The chapter should not let “physical” become a synonym for “fixed.” The same IEA analysis that identifies bottlenecks also identifies ways to relax them: efficiency improvements, better siting, storage, flexible server operation, onsite generation, and grid expansion. Its High Efficiency case has substantially lower electricity demand than its Base Case for the same broad growth in digital services. DOE likewise treats energy-management and operational efficiency as meaningful levers.

That matters because a connection queue can mix several different things: real deliverability constraints, long-lived equipment shortages, speculative customer requests, procedural delay, and projects whose economics will never survive to operation. A large queue is therefore evidence that many claims are competing for a constrained process; it is not by itself a measurement of how many new power plants must be built.

The stronger formulation for Chapter 17 is **constraint migration, not physical fatalism**. Cheap cognition can move demand toward a slower layer, but the new bottleneck can itself respond to price, engineering, substitution, efficiency, coordination, and time. Scarcity becomes economically important when the complementary layer cannot expand or substitute at the same rate as demand—not merely because that layer contains atoms.

## A useful prose distinction

The chapter currently distinguishes representation from transformation. Preserve that, but make the test operational:

- A representation bottleneck falls when another plausible plan, answer, design, schedule, or simulation becomes cheap to produce.
- A transformation bottleneck remains when realizing one more selected possibility requires capacity that cannot be copied at comparable marginal speed: deliverable electricity, a transformer, a permit, a hospital bed, a skilled visit, land, construction, capital at risk, or another person’s consent.
- The classification can change. Better software can turn yesterday’s transformation problem into an information problem; new infrastructure can make yesterday’s scarce physical capacity routine.

This avoids implying that physical goods are intrinsically destined to appreciate or that every embodied activity acquires a “human premium.” The claim is relative and conditional.

## Counterevidence that should survive a prose revision

A future revision should retain at least one explicit case where abundance reduces the supposedly physical bottleneck. The IEA’s efficiency cases are enough to do this without adding a second anecdote: if software, hardware, and infrastructure efficiency improve faster, the same broad digital-service demand can be served with materially less electricity. The physical layer is a constraint, but its coefficient is technological rather than sacred.

Likewise, flexible operation complicates the idea that every megawatt of nameplate data-centre demand is equally firm. Some computational work can move in time or place, although latency, utilization, contractual commitments, and the very high capital intensity of AI-focused facilities can make curtailment costly. The right question is therefore not “How much power did the project request?” but “What load must be served here, at this time, with what reliability, and what can move?”

## Falsification / narrowing test

The chapter’s physical-premium claim should narrow if, across the domains it invokes, cheap generation is followed by one or more of the following:

1. complementary physical capacity expands at roughly the same pace as generated demand;
2. digital substitution eliminates much of the need for the embodied complement;
3. efficiency reduces physical input per completed outcome faster than demand grows;
4. observed queues are mostly speculative or procedural and collapse without material capacity additions; or
5. prices of the supposedly scarce complement do not rise, access does not worsen, and utilization does not approach a binding constraint.

Conversely, the argument strengthens when abundant planning or demand produces measurable pressure at a complementary layer: higher utilization, longer reliable waits, locational price differences, binding equipment lead times, rationing rules, or new capital expenditure.

## Sources checked

- International Energy Agency, *Energy and AI* (published April 10, 2025), especially “Energy demand from AI” and the executive summary: https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai and https://www.iea.org/reports/energy-and-ai/executive-summary
- U.S. Department of Energy, “DOE Releases New Report Evaluating Increase in Electricity Demand from Data Centers” (December 20, 2024): https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers
- U.S. Department of Energy, “Powering America’s AI Future—Data Center Resource Hub,” checked 2026-09-13 for the updated LBNL 2030 range: https://www.energy.gov/powering-americas-ai-future-data-center-resource-hub

## Editorial payoff

The eventual prose pass does not need more statistics. It needs the clocks. A data centre can be conceived, financed, and built on one timetable while the line, transformer, generator, permit, or neighboring political bargain it depends on moves on another. That mismatch makes “reality gets expensive” concrete without pretending reality is immovable.

The chapter’s durable proposition is narrower than “atoms beat bits”: **abundance moves value toward complements that cannot adjust as quickly as the newly cheap layer.** Sometimes those complements are physical. Sometimes they are institutional or human. And sometimes engineering catches up.