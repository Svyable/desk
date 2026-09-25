# Chapter 3 energy-budget audit

## Why this audit exists

`Pu-238 has an ~88-year half-life` is true but too coarse to explain why isotopic pacemakers were technically compelling. The useful engineering chain is:

`decay heat → thermoelectric conversion → electrical conditioning → pacing pulse → lead → myocardium`.

A long-lived first term does not imply a long-lived whole device. This audit freezes the quantitative source term and the safe inference boundary.

## Primary / authoritative anchors

### Pu-238 nuclear properties

- U.S. Department of Energy, Pu-238 production / heat-source documentation: half-life approximately **87.7 years** and specific thermal power approximately **0.56–0.57 W/g** for Pu-238.
  - https://www.energy.gov/sites/prod/files/NEGTN0NEAC_PU-238_042108.pdf
  - DOE safety-basis material also gives 87.74 years, 17.1 Ci/g and ~0.56 W/g.

### AEC / NUMEC reference pacemaker design

- AEC-era program description and NUMEC technical material describe a Pu-238 thermoelectric cardiac-pacemaker reference design with approximately:
  - **135 mW thermal** isotopic power;
  - **1,056 thermocouples**;
  - **162 µW electrical output**, stated as greater than the conventional electronic circuit requirement.
- Contemporary AEC information is preserved in IAEA/INDC historical material; the underlying NUMEC program reports are preserved through DOE/OSTI/UNT.
  - NUMEC component-development report: https://doi.org/10.2172/4129422
  - NUMEC mid-term Phase I report: https://doi.org/10.2172/4500440

### Long-duration clinical control case

- Parsonnet et al., `A Lifetime Pacemaker Revisited`, *New England Journal of Medicine* (2007), DOI: https://doi.org/10.1056/NEJMc072143
  - NU-5 implanted April 10, 1973.
  - Lead fracture occurred 11 years later and was repaired without replacing the nuclear generator.
  - Generator remained in service 34 years after implantation at publication.

## Derived quantities

Using 87.74 years as the Pu-238 half-life:

`P(t) / P0 = 2^(-t / 87.74)`

Approximate remaining source heat:

| Elapsed time | Remaining Pu-238 heat | Heat lost |
|---:|---:|---:|
| 10 y | 92.4% | 7.6% |
| 20 y | 85.4% | 14.6% |
| 34 y | 76.4% | 23.6% |
| 50 y | 67.4% | 32.6% |

For the 135 mW thermal / 162 µW electrical reference design:

`η ≈ 0.000162 W / 0.135 W ≈ 0.0012 = 0.12%`.

This is a **system conversion figure for the cited reference design**, not a universal efficiency for every isotopic pacemaker.

The low efficiency is not itself evidence of a bad design. Pacemaker loads were extremely small. A source can waste almost all its decay heat and still satisfy a microwatt-scale electronic load.

## Safe claim boundary

### Safe

- Pu-238 decay was slow enough that **isotope depletion was unlikely to be the first lifetime bottleneck** in a properly margined pacemaker design.
- Early NUMEC designs converted only a small fraction of decay heat into electricity, but the pacing electronics required correspondingly tiny power.
- The 34-year NU-5 case demonstrates that a lead could fail and be repaired while the original generator remained clinically useful.
- Long isotope half-life exposed other system clocks: thermocouple aging, lead integrity, electronics, pacing-mode obsolescence, patient survival, record continuity and source recovery.

### Not established by these numbers alone

- That thermoelectric output declines exactly in proportion to Pu-238 decay over decades.
- That every model had the same thermal inventory, electrical output or efficiency.
- That a generator retaining sufficient heat necessarily retained adequate voltage/current margin.
- That nuclear pacemakers had lower total lifecycle cost than contemporary chemical or lithium systems.
- That the 34-year NU-5 case is representative of all implants.

## High-value next extraction

Build a model-level table for every verified isotopic pacemaker:

`model | isotope form/activity | thermal watts | converter type | electrical µW | initial voltage | load | pulse mode | expected life | patient dose | generator outcome | lead outcome | disposition`.

That table would let the book distinguish the fuel clock from the converter clock instead of using `half-life` as a proxy for `device life`.