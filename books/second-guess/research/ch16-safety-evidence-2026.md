# Chapter 16 source strengthening — automated-driving safety evidence

Accessed: 2026-09-01

## Why this note exists

Chapter 16 compares first-party safety evidence from Tesla and Waymo. The existing source-ledger entries are useful as pointers, but the Waymo entry in particular describes an older framing built around a crude crash-per-mile figure and a disengagement metric. Waymo's current public safety dashboard is materially richer and should be the controlling source for the next manuscript revision.

## Waymo — current primary evidence

**Source:** Waymo, *Safety Impact* dashboard, https://waymo.com/safety/impact/

**Corroborating dated update:** Waymo, “From the road — June 24, 2026,” https://waymo.com/blog/shorts/safetydata-june26/

Waymo reports **220.6 million rider-only miles through March 2026** across Phoenix, the San Francisco Bay Area, Los Angeles, Austin, and Atlanta. Its current dashboard compares rider-only crash outcomes with geographically adjusted human-driver benchmarks rather than merely publishing an undifferentiated crash-per-mile figure.

For all operating locations combined, the dashboard reports:

- serious-injury-or-worse crashes: **0.01 incidents per million miles** for Waymo versus **0.23** for the human benchmark;
- any-injury-reported crashes: **0.71 incidents per million miles** for Waymo versus **3.91** for the benchmark;
- Waymo's June 24, 2026 summary describes those results as **94% fewer serious-or-fatal-injury crashes** and **82% fewer any-injury-reported crashes** than the benchmark, regardless of fault.

The dashboard also exposes city-level mileage, outcome definitions, confidence intervals, downloadable crash data, and benchmark methodology. That is stronger evidence than the older chapter framing suggests.

### Limitation / counterevidence

The comparison is still not a randomized or same-vehicle human-versus-automation experiment. Waymo chooses its operational design domains, while benchmark construction attempts to adjust for geography and exposure rather than making the two populations literally identical. The evidence is first-party, although the underlying serious-crash reports are tied to NHTSA Standing General Order reporting and Waymo publishes downloadable case data and methodology. The right manuscript conclusion is therefore not that the figures are unusable, but that they are **substantially more informative than a raw national crash-rate comparison while still requiring scrutiny of exposure and benchmark design**.

## Tesla — current primary evidence

**Source:** Tesla, *Full Self-Driving (Supervised) Vehicle Safety Report*, https://www.tesla.com/fsd/safety

**Supporting evidence dashboard:** Tesla, FSD (Supervised) evidence dashboard, https://www.tesla.com/fsd-evidence-dashboard

Tesla's current materials are also richer than a single Autopilot headline ratio. The company reports road-class mileage distributions and separates FSD (Supervised) from manual driving with active safety features. For 2025 North American driving, Tesla says FSD (Supervised) accumulated nearly **2 billion miles** across highway, arterial, urban-collector, and local-access roads. Its evidence dashboard reports lower major- and minor-collision rates for FSD (Supervised) than for manually driven Teslas with active safety features across the road classes it analyzes.

Tesla's 2024 Impact Report provides a simpler legacy comparison: **6.77 million miles per accident with Autopilot engaged**, **1.18 million without Autopilot engaged**, and **0.70 million for the U.S. national average**. This older aggregate comparison remains useful historically but should not be treated as the strongest current evidence once road-class-stratified FSD data are available.

### Limitation / counterevidence

Tesla remains the publisher of the telemetry, definitions, and analysis. The FSD comparison is not equivalent to an independent regulator-run randomized trial, and differences in driver selection, road use, hardware generation, software release, reporting thresholds, and intervention behavior can still matter. But the current road-class breakdown weakens an overly broad claim that Tesla's automated-driving evidence is *merely* highway miles compared with all other driving. A revision should distinguish older Autopilot aggregate reporting from newer FSD (Supervised) road-class evidence rather than collapsing them together.

## Required manuscript corrections for the next Chapter 16 revision

1. Remove the statement that Waymo's safety-impact data are best summarized as roughly one crash per 50,000 miles plus a critical-disengagement rate. The current primary dashboard instead foregrounds outcome-specific crash rates and geographically adjusted human benchmarks.
2. Remove the statement that Waymo has “no equivalent human baseline” in its report. The current dashboard explicitly compares Waymo rider-only outcomes with human benchmarks in the same operating geographies.
3. Qualify the chapter's claim that Waymo's marketing invites comparison with a general national human baseline. Its current methodology is more sophisticated than that description and publishes geography-specific benchmark construction.
4. Separate Tesla's older Autopilot aggregate safety report from its newer FSD (Supervised) safety evidence. The newer material includes meaningful non-highway exposure and road-class-stratified comparisons, so the manuscript should not imply the present evidence base is simply highway Autopilot versus everything else.
5. Preserve the chapter's central epistemic argument: first-party safety evidence deserves scrutiny. But revise it so the criticism is aimed at **benchmark design, operational-domain selection, definitions, telemetry ownership, and independent validation**, not at evidence limitations the companies' current reports have partly addressed.

## Falsification note

This note would be weakened if independent audits showed the companies' published benchmark methods systematically misstate safety outcomes, or strengthened if independent studies reproduced the reported direction and magnitude of the safety advantage under comparable exposure conditions. It should also be revisited whenever Waymo or Tesla materially changes definitions, operating domains, or reporting methodology.
