# Chapter 9 — LDEX quantitative null audit

Checked September 11, 2026 against the primary paper.

## The number the chapter should carry

Szalay & Horányi (2015) did not merely report that LDEX saw no terminator enhancement. For the canonical Apollo-era population they tested — characteristic grain radius `a = 0.1 μm` — the paper converts the instrument current into an explicit density limit.

At the lowest terminator crossing altitude, about 3 km, the average measured LDEX current was approximately `10^5 electrons/s`. Under the paper's impact-ionization calibration and assumed grain density, that corresponds to a lofted-dust number-density upper limit of **<100 m^-3** while the Moon was exposed to the solar wind. During passages through Earth's magnetotail, the reported limit tightened to approximately **<40 m^-3**.

Those limits were roughly **2–3 orders of magnitude below** the densities expected from the Apollo-derived high-altitude dust models used in the comparison. The paper's table makes the contrast unusually concrete: the McCoy (1976) Apollo model would have produced a predicted LDEX current near `6 × 10^7 electrons/s` at 3 km; the Glenar et al. (2011) Apollo-based model about `3 × 10^7 electrons/s`. LDEX instead sat near `10^5 electrons/s`.

Primary source: J. R. Szalay & M. Horányi, “The search for electrostatically lofted grains above the Moon with the Lunar Dust Experiment,” *Geophysical Research Letters* 42 (2015), 5141–5146. https://doi.org/10.1002/2015GL064324

## Why the current itself is not a dust detection

The measured terminator current correlated with ARTEMIS solar-wind ion density at **r = 0.64**. Szalay & Horányi therefore argued that low-energy ions were likely contributing substantially to the current channel. This matters because their dust-density calculation treats the measured current conservatively as an upper bound: subtracting the plasma contribution would make the allowed dust density smaller, not larger.

That is a stronger and more interesting statement than “LDEX was sensitive enough.” The nuisance signal works against the null. The authors still obtain a limit far below the old Apollo-derived population.

## Strongest counterargument / surviving domain

The result is model-conditional. It assumes the characteristic ~0.1 μm grain population used in the historical optical interpretation and applies the LDEX response model. It does not measure every possible size, charge, velocity, intermittency, or trajectory distribution.

More importantly, the paper itself explicitly leaves **transport confined below 3 km** alive. Its conclusion is unusually useful for the book's thesis: the expected high-density, high-altitude electrostatic population is not present at the modeled level, but near-surface mobilization can survive because the orbiter did not sample that regime.

Champlain et al. (2016) subsequently framed their UV/vacuum charging experiments around exactly this remaining domain, describing near-surface conditions below LDEX's observational regime as the place where electrostatic forces could still matter.

Primary source: A. Champlain et al., “Lunar dust simulant charging and transport under UV irradiation in vacuum: Experiments and numerical modeling,” *Journal of Geophysical Research: Space Physics* 121 (2016), 103–116. https://doi.org/10.1002/2015JA021738

## Editorial implication for Chapter 9

The chapter already has the right conceptual distinction — LADEE damaged the “tall” theory while sparing a shorter near-surface one — but it currently leaves the decisive comparison qualitative. A future prose pass should put the **6 × 10^7 predicted versus ~10^5 measured current** on the page before explaining the density conversion. That gives the reader an instrument-level mismatch before the interpretation.

The strongest sequence is:

1. Apollo-derived model predicts a current large enough to be obvious at the lowest crossing.
2. LDEX measures a current hundreds of times smaller.
3. Much of even that smaller current appears to track plasma ions rather than dust.
4. The resulting dust upper limit is <100 m^-3, or ~<40 m^-3 in the magnetotail subset.
5. The authors themselves preserve the below-3-km escape hatch.

This is not a generic “null result shrinks a theory” lesson. It is a quantitative altitude boundary produced by a detector whose nuisance background makes the published limit conservative.

## Claim boundary

Safe: **For the canonical ~0.1 μm population and LDEX response model, LADEE found no 3–250 km terminator dust population at Apollo-derived densities; the 3 km limit was <100 m^-3 in solar-wind conditions and ~<40 m^-3 in magnetotail observations.**

Too broad: **LADEE showed electrostatic lunar dust does not exist.**

Too weak: **LADEE simply failed to see the Apollo cloud.** The experiment quantitatively excluded much of the modeled high-altitude parameter space.