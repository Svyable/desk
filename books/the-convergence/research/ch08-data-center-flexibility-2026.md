# Chapter 8 research note — data-center load, flexibility, and grid risk

This note tightens the empirical boundary around Chapter 8, **“Intelligence Has a Power Bill.”** The chapter’s central claim is defensible: frontier computation has become large and concentrated enough that electricity delivery can constrain its speed, cost, and geography. The stronger claim — that large AI loads are necessarily inflexible additions that must always be met with equivalent new firm infrastructure — is not.

The useful distinction is between **annual energy**, **site peak demand**, **connection capacity**, and **operational flexibility**. They are not interchangeable.

## 1. Update the U.S. demand range to the June 2026 Berkeley Lab report

Lawrence Berkeley National Laboratory’s *United States Data Center Energy Usage Report: 2025 Update*, published June 2026, supersedes the earlier 2024 U.S. report for near-term national projections.

Source:
- LBNL, *United States Data Center Energy Usage Report: 2025 Update* (June 2026): https://eta-publications.lbl.gov/publications/united-states-data-center-energy-2025

Key numbers:
- Reference case: **649 TWh** of U.S. data-center electricity use in 2030, equal to **11.8%** of total U.S. electricity consumption.
- Compounded uncertainty range: **521–843 TWh**, or **9.5–15.3%** of U.S. electricity consumption in 2030.
- The model is bottom-up, using expected IT-equipment shipments, per-device annual electricity use, cooling-performance simulations, facility types, and locations.
- Sensitivity cases vary assumptions including equipment installations, specialized graphics-chip shipments, AI-chip operating lifetime, idle power, and utilization.

### Why this matters

The range is not merely statistical noise. The low and high cases imply materially different generation, transmission, and local interconnection requirements. The manuscript is right to treat uncertainty itself as an infrastructure problem.

But the range also constrains the rhetoric. A national forecast should not be converted into a claim that every announced campus will operate at requested nameplate load, or that all forecast electricity must be supplied as perfectly inflexible 24/7 demand.

## 2. The IEA’s 2026 update strengthens both sides of the argument

The International Energy Agency published *Key Questions on Energy and AI* on April 16, 2026, updating its 2025 *Energy and AI* work.

Source:
- IEA, *Key Questions on Energy and AI* (16 April 2026): https://www.iea.org/reports/key-questions-on-energy-and-ai

The report is useful because it makes two apparently opposed facts coexist:

1. AI and data-center electricity demand are growing fast enough to matter for grids and supply chains.
2. Hardware, software, model architecture, utilization, and task mix are changing quickly enough that demand remains unusually difficult to forecast.

The manuscript should preserve that tension. Efficiency gains do not make the physical layer irrelevant; they widen the range of possible outcomes.

For any future prose revision, keep these categories separate:
- energy per task;
- rack or server power density;
- facility IT load;
- whole-facility electricity including cooling and power conversion;
- annual energy consumption;
- requested grid connection capacity.

A decline in the first quantity can coexist with rapid growth in every later one.

## 3. Strongest counterevidence: some computational load can move in time or space

A May 2026 Berkeley Lab article, *Integrating AI Data Centers with the Power Grid*, identifies demand flexibility as a real integration option rather than a speculative footnote.

Source:
- Jessica Granderson et al., *Integrating AI Data Centers with the Power Grid* (May 2026), DOI 10.20357/B7X61S: https://eta-publications.lbl.gov/publications/integrating-ai-data-centers-power

The authors identify four broad flexibility mechanisms:
- shifting computational work in time or geographically;
- adjusting core facility infrastructure;
- using onsite energy storage;
- using onsite generation.

The important correction is not “data centers are flexible.” It is narrower:

> **Some workloads and some facility assets can be operated flexibly, under some technical and commercial conditions.**

Training, batch inference, checkpointing, non-urgent internal jobs, cooling systems, batteries, and geographically distributed workloads can have more scheduling freedom than latency-sensitive inference, safety-critical services, or tightly synchronized jobs. The fraction that can move, for how long, and at what performance or economic cost is workload-specific.

### What would make the chapter’s grid-constraint claim weaker?

If a large share of future AI work proves shiftable across hours or regions, data centers could operate more like controllable industrial loads and less like fixed blocks of peak demand. That could reduce the amount of generation or network capacity needed solely to serve coincident peaks.

This is genuine disconfirming evidence and should remain available to the prose rather than being treated as an implementation detail.

## 4. Flexibility is not free capacity

Berkeley Lab’s January 2025 DOE Data Center Load Flexibility Workshop summary is useful precisely because it does not treat flexibility as automatic.

Source:
- T. W. Kirchstetter et al., *DOE Data Center Load Flexibility Workshop Summary* (2025): https://eta-publications.lbl.gov/publications/doe-data-center-load-flexibility

The workshop identified opportunities for load shifting and onsite energy strategies, but also regulatory complexity, cost, incentive design, and the absence of standardized approaches as barriers.

That supports a more exact formulation:

**Technical flexibility is not the same as contracted, dispatchable grid flexibility.**

A utility cannot plan around a workload’s theoretical ability to pause unless the operational rules, compensation, telemetry, reliability obligations, and commercial incentives make that flexibility dependable when the system needs it.

This distinction fits the book’s wider institutional argument: a capability becomes infrastructure only when institutions make it predictable.

## 5. Connection bottlenecks have multiple remedies besides waiting for new wires

Berkeley Lab’s June 2026 *Speed to Power: Solutions for Accelerating Large Load Connections* identifies more than forty potential approaches across load forecasting, interconnection, resource planning and procurement, markets and operations, and cost allocation and ratemaking.

Source:
- Fredrich Kahrl and Natalie Mims Frick, *Speed to Power: Solutions for Accelerating Large Load Connections* (June 2026): https://eta-publications.lbl.gov/publications/speed-power-solutions-accelerating

This matters for Chapter 8 and the handoff to Chapter 9. A connection delay can reflect a real physical shortage, but it can also reflect study methods, planning rules, cost-allocation disputes, queue design, uncertain forecasts, procurement sequencing, or a mismatch between how fast customers request power and how utilities authorize investment.

Do not flatten all “time to power” problems into a shortage of copper and transformers.

The stronger systems claim is that large computational loads expose the full stack required to turn electrical capability into a firm service: hardware, network capacity, planning, contracts, forecasting, operating rules, and risk allocation.

## 6. Rate design is part of the physical story because it allocates forecast risk

Berkeley Lab’s August 2026 update on large-load rate designs is particularly relevant to the manuscript’s paragraphs about stranded infrastructure and ordinary ratepayers.

Source:
- Natalie Mims Frick et al., *Electricity Rate Designs for Large Loads: Evolving Practices and Opportunities — 2026 Update* (August 2026): https://emp.lbl.gov/publications/electricity-rate-designs-large-0

The report frames two distinct risks:
- inadequate supply or infrastructure if projected large loads arrive faster than utilities can serve them;
- underused investments if utilities build for projected loads that arrive late, arrive smaller, or do not arrive.

That is the institutional version of forecast uncertainty. Minimum-bill provisions, contract terms, contribution requirements, and other tariff structures can determine who bears the cost of being wrong.

This supports the manuscript’s line that a megawatt is an engineering quantity while who pays for it is an institutional choice.

## 7. NERC’s August 2026 actions are stronger evidence than the earlier generic standards reference

As of August 2026, NERC’s Large Loads Action Plan has moved into concrete standards and registry proposals for computational loads.

Sources:
- NERC, *Large Loads Action Plan*: https://www.nerc.com/initiatives/large-loads-action-plan
- NERC, *Letter to CEOs Outlines Near-Term Actions on Large Loads and Standards Development Process* (18 August 2026): https://www.nerc.com/newsroom/letter-to-ceos-outlines-near-term-actions-on-large-loads-and-standards-development-process

Current actions include:
- proposed registry categories for **Computational Load Owners** and **Computational Load Operators**;
- proposed **CLO-001-1** covering computational-load interconnection, studies, and modeling;
- proposed **CLO-002-1** covering operational data and communications;
- proposed **CLO-003-1** covering protection coordination and disturbance monitoring;
- a separate August 26 Standard Authorization Request concerning disturbance performance for computational loads.

The proposals were open for public comment in August–September 2026. They should therefore be described as **proposed**, not final reliability standards.

### Why this matters

The strongest evidence is institutional, not rhetorical. NERC is not merely discussing “large loads” in general; it is proposing computational-load-specific registration and compliance structures because certain loads can be large enough and electrically unusual enough to create bulk-system reliability concerns.

The counterevidence is equally important: the existence of a proposed standard does not demonstrate that computational loads are already causing widespread system failures. It demonstrates that NERC judges the risk significant enough to standardize studies, data, protection, and disturbance behavior before the fleet becomes larger.

## 8. Suggested evidentiary hierarchy for Chapter 8

When the chapter is revised again, weight evidence in roughly this order:

1. **Observed electricity use and equipment data** — strongest for what has already happened.
2. **Connected or operating site load** — stronger than announcements or requested capacity.
3. **Utility or system-operator interconnection records** — strong for local constraints, but distinguish requests from realized load.
4. **Scenario forecasts** — useful for planning ranges, not future facts.
5. **Corporate campus announcements** — useful as evidence of intention and capital commitment, weak as evidence of future electricity consumption.

Avoid using aggregate global electricity share to dismiss local grid effects, and avoid using a large local connection request to imply a comparable global shortage.

## 9. Chapter claim that survives the counterevidence

The chapter does not need the claim that AI is fundamentally energy-limited.

A stronger version survives both efficiency and flexibility:

> Frontier computation has become power-dense and geographically concentrated enough that electricity infrastructure now participates directly in where and how quickly capacity can be deployed. Efficiency, workload flexibility, better forecasting, rate design, and faster interconnection can weaken that constraint, sometimes substantially; their importance is evidence that computation has entered the operating logic of the power system, not evidence that the physical layer disappeared.

That formulation also improves the transition into Chapter 9. The network is not always the bottleneck, and not every network problem requires new transmission. The recurring book-level pattern is more precise: once a technology becomes large enough, its feasible speed is governed by whichever complementary system is hardest to expand or coordinate next.