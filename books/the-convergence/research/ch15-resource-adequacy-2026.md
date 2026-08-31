# Chapter 15 — Resource adequacy, capacity value, and extreme-weather risk (2026)

## Why this matters

Chapter 15 argues that annual energy, instantaneous capacity, flexibility, and reliability are different quantities. That is directionally right, but the strongest version of the argument is not simply that variable resources need backup or that batteries have finite duration. Modern reliability planning increasingly treats capacity contribution as a **system-dependent probability problem**: the value of a resource depends on whether it is available during the hours when the whole system is most at risk, what other resources are present, how correlated their failures or output patterns are, and whether stored energy can be replenished before the next risky interval.

That distinction gives the chapter a firmer empirical spine and protects it from a common simplification on both sides of the energy debate: assigning technologies a permanent, context-free label such as “reliable,” “unreliable,” or “firm.”

## PJM: capacity value is relational, not a factory label

PJM’s Effective Load Carrying Capability (ELCC) framework is a useful primary-source example because it explicitly measures capacity contribution during high-risk system conditions rather than treating nameplate capacity as dependable capacity.

PJM states that resources contributing more during hours with very high demand and/or poor fleet-wide resource performance receive more capacity value. It also emphasizes that these risk hours can move as the resource mix and demand profile change. More solar, for example, can shift the tightest hours later in the day; widespread nighttime EV charging could shift them again. The methodology also accounts for interactions among resources, including the declining marginal contribution that can occur as more of one correlated resource is added and the complementary contribution of combinations such as solar plus storage.

For Chapter 15, this supports several claims already present in the manuscript:

- the first unit of a technology can have a different reliability value from the fiftieth;
- the same battery, solar plant, or thermal generator can have a different accredited capacity contribution in a different system;
- reliability is a portfolio property, not a moral attribute of an individual technology;
- marginal value can fall even while the underlying technology keeps getting cheaper.

The stronger formulation is therefore not “solar has low capacity value” or “batteries are four-hour resources.” It is: **capacity value changes with the risk profile created by the rest of the system.**

Source: PJM, “Effective Load Carrying Capability Measures Capacity Contribution of All Resources,” January 28, 2025, and PJM’s current ELCC resource-adequacy page, which includes the January 30, 2026 ELCC/RRS study materials.

- https://www.pjm.com/-/media/DotCom/about-pjm/newsroom/fact-sheets/elcc-measures-capacity-contribution-of-renewable-and-storage-resources.pdf
- https://www.pjm.com/planning/resource-adequacy-planning/effective-load-carrying-capability

## August 2026 check: the ratings actually move

PJM’s current 2028/2029 Base Residual Auction materials make the system-dependence visible in concrete numbers. The final ELCC class ratings published in February 2026 were 7% for fixed-tilt solar, 10% for tracking solar, 59% for four-hour storage, 68% for six-hour storage, 71% for eight-hour storage, and 78% for ten-hour storage. Nuclear was accredited at 96%, coal at 85%, gas combined cycle at 78%, and single-fuel gas combustion turbines at 67%.

Those values are not technology constants. Earlier PJM results for the 2025/2026 auction had fixed-tilt solar at 9%, tracking solar at 14%, four-hour storage at 59%, six-hour storage at 67%, eight-hour storage at 68%, and ten-hour storage at 78%. PJM’s March 2025 comparison for the following delivery year explicitly attributed part of the class-rating movement to a greater share of winter reliability risk.

That is a useful empirical example for the book because it shows the mechanism rather than merely naming it. The same hardware can receive a different reliability value when the modeled risk hours, fleet composition, load shape, outage assumptions, or class membership change.

Current-source links:

- PJM, 2028/2029 BRA IRM/FPR/ELCC presentation, February 13, 2026: https://www.pjm.com/-/media/DotCom/committees-groups/committees/mrc/2026/20260213-special/item-01---2028-2029-bra-fpr--irm---presentation.pdf
- PJM, 2026/2027 BRA ELCC comparison, March 19, 2025: https://www.pjm.com/-/media/DotCom/committees-groups/committees/mrc/2025/20250319/20250319-item-04---irm-fpr-and-elcc-for-26-27-bra---presentation.pdf
- PJM current ELCC page, including 2029/2030 data files dated August 7–10, 2026: https://www.pjm.com/planning/resource-adequacy-planning/effective-load-carrying-capability

## California: a large battery fleet can strengthen reliability without eliminating extreme-event risk

California provides a concrete counterexample to two opposite slogans: “batteries cannot support a large grid” and “enough four-hour batteries make firm capacity unnecessary.”

CAISO’s 2026 Summer Loads and Resources Assessment reports that more than 16,000 MW of battery storage had been added since 2020 and describes those batteries as playing a vital role in serving hot-summer evening peaks after solar output falls. The assessment finds a 2,547 MW surplus above the portfolio calibrated to the industry-standard once-in-ten-years supply-shortage target under the study’s modeled conditions.

But CAISO makes the boundary of that result explicit: the assessment does **not** include coincident extreme events such as drought, wildfire, widespread regional heat, or other disruptions. In other words, a system can satisfy its ordinary probabilistic planning criterion and still retain meaningful tail risk.

That is an important distinction for Chapter 15. “Reliable” should not be made to mean “immune to every plausible compound event.” Resource adequacy is a chosen risk standard under modeled assumptions. Resilience to low-probability, high-impact events is related but not identical.

Source: California ISO, “2026 Summer Loads and Resources Assessment,” 2026.

- https://www.caiso.com/generation-transmission/resource-adequacy/2026-summer-loads-and-resources-assessment

## Duration is only half the storage question

The manuscript correctly notes that a four-hour battery cannot simply discharge at full output for several days. The deeper systems point is that **recharge opportunity is part of effective duration**.

CAISO’s local-capacity work has explicitly considered the need for storage to recharge after discharging so that it can remain available for the next peak if an outage persists. A battery that has enough energy to serve one tight evening may provide less multi-day reliability value if the local system cannot both serve load and recharge it before the next tight period.

This avoids another misleading comparison: nameplate MW alone cannot tell us whether storage substitutes one-for-one for a generator. Relevant variables include MWh of stored energy, discharge duration, charging capability, round-trip losses, local transmission constraints, the sequence of risk hours, and the rest of the fleet.

This also means that long-duration storage should not automatically be framed as “a better four-hour battery.” It may solve a different reliability problem: not merely shifting solar across an evening, but carrying energy across longer weather or outage episodes.

## Strongest counterargument: probabilistic accreditation is model-dependent

ELCC and resource-adequacy studies are better than static nameplate comparisons, but they are not physical constants. Their answers depend on assumptions about weather years, outage distributions, load growth, correlations, transmission, imports, storage dispatch, recharge behavior, and the assumed future resource mix.

A model can therefore become overconfident if the historical distribution no longer represents future extremes, if correlated failures are understated, or if a rapid change in load shape outpaces the data used to calibrate risk. Conversely, crude rules of thumb can be too conservative when they ignore geographic diversity, flexible demand, improved forecasting, or complementary resources.

The right lesson is not “trust the model.” It is: **reliability should be analyzed probabilistically, while keeping the model boundary visible.**

The August 2026 PJM materials reinforce that caveat rather than eliminating it. PJM continues to publish assumed resource mixes, hourly load scenarios, critical performance hours, and other study inputs alongside its ELCC results. That transparency is evidence that the accreditation values are outputs of a modeled system state, not immutable engineering labels.

## Manuscript implications

The current Chapter 15 prose is strongest where it says that dependable contribution is relational and that the grid must survive bad weeks. Future manuscript revision should preserve those lines and, if this material is folded in, make three distinctions explicit:

1. **Nameplate capacity is not accredited capacity.** What matters for resource adequacy is expected contribution during system risk hours.
2. **Meeting a planning criterion is not the same as eliminating tail risk.** A grid can meet a one-in-ten standard and still remain exposed to compound extremes outside the study boundary.
3. **Storage duration includes recharge conditions.** A four-hour battery’s system value depends on when it can recharge and on how risk is distributed across consecutive hours or days.

## What would make this false?

The chapter’s stronger claim would be weakened if capacity contribution proved largely invariant to system composition, if adding large quantities of correlated resources did not shift risk hours or marginal accreditation, or if storage reliability contribution were well predicted by nameplate MW alone regardless of energy capacity and recharge conditions. Current PJM and CAISO planning practice points in the opposite direction.

## Research boundary

This note does **not** establish the least-cost future generation mix, prove that any particular technology is indispensable, or show that one reliability market design is optimal. It supports the narrower claim that reliability is a probabilistic system property and that technology value depends on timing, duration, interactions, and modeled risk—not merely annual energy production or nameplate capacity.
