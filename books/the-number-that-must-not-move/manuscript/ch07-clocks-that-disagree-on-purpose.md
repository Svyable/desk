# 7. Clocks That Disagree on Purpose

The best clock experiment for varying constants is not necessarily the best clock.

It is a comparison between clocks that would disagree in a predictable way if the underlying physics moved. There is an important difference. Timekeepers want the smallest possible error in a second. The new-physics experiment wants a particular error *in the ratio* between unlike transitions, with a mechanism that can survive every mundane explanation.

A strontium optical lattice clock, a caesium microwave fountain, and an ytterbium-ion clock do not get their frequencies from precisely the same physics. Electronic relativistic shifts, nuclear magnetism and electron-to-proton mass dependence enter in different proportions. Compare the right pair and a drift of the fine-structure constant, alpha, no longer looks like a universal change in the unit of time. It looks like an observable dimensionless difference.

The useful equation is small enough to fit on one line:

\[
y_{ij}(t)\equiv \delta\ln(\nu_i/\nu_j)
=(K_{\alpha,i}-K_{\alpha,j})\,\delta\ln\alpha
+(K_{\mu,i}-K_{\mu,j})\,\delta\ln\mu
+(K_{q,i}-K_{q,j})\,\delta\ln X_q+s_{ij}(t)+\epsilon_{ij}(t).
\]

Here the K coefficients are logarithmic frequency sensitivities; \(\mu\) denotes a dimensionless electron-to-proton (or reciprocal proton-to-electron, if consistently redefined) mass ratio, \(X_q\) a dimensionless light-quark/QCD mass parameter, \(s_{ij}\) the residual apparatus and transfer-link shifts, and \(\epsilon_{ij}\) measurement noise. Conventions for \(\mu\) change signs; the definition must travel with the reported coefficient. For a clean optical–optical comparison dominated by alpha, the other sensitivity differences may be small. For hyperfine, molecular and nuclear comparisons, pretending they vanish can turn a measured ratio into a misleading alpha limit.

### A measured limit with a denominator

In a 2021 comparison at PTB, the electric-octupole E3 and electric-quadrupole E2 transitions of ytterbium-171 ions had a calculated *ratio* sensitivity \(K_{\alpha,\mathrm{E3/E2}}=-6.95\). The measured ratio drift was \((-6.8\pm7.5)\times10^{-18}\) per year. Divide by the sensitivity, preserving the sign, and the reported alpha drift is

\[
\frac{\dot\alpha}{\alpha}=(1.0\pm1.1)\times10^{-18}\ {\rm yr}^{-1}.
\]

That is not evidence alpha moved. The estimate is compatible with zero. The number after the plus-or-minus is a one-standard-deviation uncertainty, not an established nonzero rate. The observation stretched across more than four years, and the E2 transition carried a much larger systematic uncertainty than E3. In that experiment an E2 blackbody-radiation shift of \(-495\times10^{-18}\) had an uncertainty of \(27\times10^{-18}\); its second-order static Zeeman shift was \(+463\times10^{-18}\), with uncertainty \(6\times10^{-18}\). Large corrections can cancel while the residual uncertainty remains consequential. Precision is an accounting exercise, not an adjective.

The result is reported by Lange and colleagues in *Physical Review Letters* (2021): https://doi.org/10.1103/PhysRevLett.126.011102. It is a secular, multi-year constraint obtained from repeated comparisons. It cannot be put on the same numerical axis as the one-day Allan deviation of a clock.

The more stringent published follow-up matters more for a present-tense comparison. Filzinger and colleagues added about 235 measurement-days of interleaved Yb+ E3/E2 data collected over 26 months (2020–2022) to their earlier series, extending the combined record from May 2016 to November 2022. The resulting *ratio* slope was \((-1.2\pm1.8)\times10^{-18}\ {\rm yr}^{-1}\). Dividing by the E3/E2 alpha response gives

\[
\frac{\dot\alpha}{\alpha}=(1.8\pm2.5)\times10^{-19}\ {\rm yr}^{-1},
\]

again consistent with zero and about four times tighter in uncertainty than the 2021 result. That is the stronger published secular benchmark used here, not the older \(1.1\times10^{-18}\) uncertainty. The same paper also investigated oscillations in E3/E2 and E3/Sr ratios; their different noise spectra and servo limits make the frequency-dependent constraints separate products. Source: Filzinger et al., *Physical Review Letters* 130, 253001 (2023), https://doi.org/10.1103/PhysRevLett.130.253001.



### Four kinds of number that are routinely mistaken for one another

A 2026 BACON Collaboration measurement compared Al+, Yb and Sr optical clocks with total fractional *ratio uncertainties* at or below \(3.2\times10^{-18}\). The clocks shared an ultrastable optical reference over 3.6 kilometres of phase-stabilized fibre. Yet comparisons to earlier measurements revealed discrepancies of roughly \(10^{-16}\) in Sr-containing ratios and \(1.6\times10^{-17}\) for Al+/Yb. Those are differences between measurement campaigns, not a discovery of drifting constants. They are a warning that extremely small uncertainty budgets need independent repetition. The 2026 source is https://doi.org/10.1103/g865-9mk1.

A useful comparison ledger is therefore not a ranking of impressive exponents:

| Clock evidence | Reported observable | Time axis | What the number cannot mean by itself |
| --- | --- | --- | --- |
| Yb+ E3/E2, Lange et al. (2021) | \(\dot\alpha/\alpha=(1.0\pm1.1)\times10^{-18}\ {\rm yr}^{-1}\); \(\Delta K_\alpha=-6.95\) | Repeated measurements across more than four years | A detection of nonzero drift, or an oscillation bound at all frequencies |
| Yb+ E3/E2, Filzinger et al. (2023) | \(\dot\alpha/\alpha=(1.8\pm2.5)\times10^{-19}\ {\rm yr}^{-1}\); ratio slope \((-1.2\pm1.8)\times10^{-18}\ {\rm yr}^{-1}\) | Combined 2016–2022 record | A detection of drift, or a bound at every oscillation frequency |
| Sr/Yb+/Cs, Sherrill et al. (2023) | Ratio time series analyzed for alpha and mass-ratio variations | Roughly one minute to nearly one day | A general model-independent bound on every scalar-field coupling |
| Al+/Yb/Sr, BACON (2026) | Ratio uncertainty \(\leq3.2\times10^{-18}\); historical inter-campaign offsets also reported | Comparison campaigns; not itself a yearly slope | A drift bound of \(3.2\times10^{-18}\ {\rm yr}^{-1}\) |
| Th-229:CaF2, Ooi et al. (2026) | 220 Hz, or \(1.1\times10^{-13}\) fractional, cross-crystal frequency reproducibility | Two differently doped crystals across seven months | A seven-month limit on alpha drift |
| Th-229 feedback clock, European team (October 2026) | Instability \(3\times10^{-12}/\sqrt{\tau/{\rm s}}\); day-to-day line-centre reproducibility around \(5\times10^{-13}\) | 20 seconds to about a day for the reported new-physics analysis | Optical-clock accuracy, or a long-baseline secular limit |
| Th-229 feedback clock, Chinese team (October 2026) | Instability \(5\times10^{-13}/\sqrt{\tau/{\rm s}}\); inter-crystal offset \(2.8(6)\times10^{-13}\) | Operating-clock averaging intervals and crystal comparison | Proof that independent solid-state references have zero material-dependent offsets |

The Sr/Yb+/Cs work is Sherrill et al., *New Journal of Physics* (2023), https://doi.org/10.1088/1367-2630/aceff6. The thorium results are Ooi et al., *Nature* (January 2026), https://doi.org/10.1038/s41586-025-09999-5; the European feedback-clock experiment, *Nature* (October 2026), https://doi.org/10.1038/s41586-026-11084-4; and the independent Chinese clock, *Nature* (October 2026), https://doi.org/10.1038/s41586-026-11122-1. Uncertainties, instability and cross-crystal reproducibility are deliberately separate columns of evidence, not substitutes for one another.

The nuclear-clock results change the story's tense. In 2024 the crucial achievement was laser access and an optical frequency connection. By October 2026, lasers had actually been locked to the 148-nanometre nuclear transition in solid-state thorium, with a comparison to an Yb+ clock in one experiment. Neither instrument had thereby overtaken the best optical atomic clocks. It had made a formerly hypothetical sensitivity vector operational.

### How much does a sensitivity coefficient buy?

A 2025 analysis of thorium-229, using measured changes in nuclear quadrupole moment and a semiclassical shape model, obtained \(K_\alpha=5900\pm2300\): https://doi.org/10.1038/s41467-025-64191-7. Its uncertainty is approximately 39% of the central coefficient, before allowing for model inadequacy or correlated nuclear strong-sector responses. The E3/E2 ratio has magnitude 6.95. The nominal ratio of alpha responses is

\[
5900/6.95\simeq849.
\]

That is the striking comparison: about 850 times the fractional *response* for the same hypothetical alpha change, provided the thorium model is correct and other dimensionless couplings are held fixed. It is not an 850-fold improvement in a measured limit.

For an illustration, suppose alpha changed by \(10^{-18}\) while everything else relevant remained fixed. The Yb+ E3/E2 ratio would shift by about \(-7\times10^{-18}\); a thorium-to-low-sensitivity optical ratio would shift by approximately \(+5.9\times10^{-15}\). Reverse the exercise with the 2026 solid-state thorium cross-crystal reproducibility of \(1.1\times10^{-13}\): dividing by 5900 gives a scale of about \(1.9\times10^{-17}\) in alpha. This is **only a conditional scale translation**, not a published alpha constraint. The 220-Hz difference is a measure of crystal reproducibility, not a clean time variation of a fundamental constant. Chemical environment, site shifts, temperature, strong-sector coefficients and theory covariance are still in the room.

For comparison, a transition with a large K but a drift in its environment can be less constraining than a modest-K pair with a long, repeated, calibrated baseline. A \(10^{-13}\) material offset can easily hide a \(10^{-15}\) hypothetical fundamental signal. The coefficient amplifies what physics does, not what a laboratory knows.

### The experiment needs a matrix, not a mascot

For several clocks, write measured dimensionless ratio residuals as

\[
\mathbf y(t)=\mathbf K\,\boldsymbol\theta(t)+\mathbf B\,\mathbf z(t)+\boldsymbol\epsilon(t),
\qquad
\boldsymbol\theta=(\delta\ln\alpha,\delta\ln\mu,\delta\ln X_q,\ldots).
\]

Each row of \(\mathbf K\) is a difference of clock sensitivities. Columns of \(\mathbf B\) encode measured environmental regressors: blackbody temperature, magnetic fields, local gravitational potential and link diagnostics. With covariance \(\mathbf C\), the formal information in the physical couplings is tied to \(\mathbf K^\mathsf{T}\mathbf C^{-1}\mathbf K\), after nuisance parameters are handled. If the sensitivity rows are nearly parallel, collecting another billion data points with the same clock species may not separate alpha from mass-ratio changes. A third *different* transition can do more than a thousand repetitions of an identical one.

The rank requirement is unforgiving. Two independent varying parameters need at least two genuinely independent ratio sensitivities after nuisance projection. Three need three. A thorium coefficient with a large theoretical range is a powerful additional row, but its uncertainty belongs in the inference rather than being treated as an exact entry.

Time has its own geometry. A clock series with sampling interval \(\Delta t\) and observation span \(T\) has, in the simplest evenly sampled case, a nominal frequency window from approximately \(1/T\) to \(1/(2\Delta t)\). Gaps, duty cycle, dead time, servo filtering, colored noise and trial factors narrow the honest discovery space. A multi-year drift constraint does not test every minute-scale oscillation. A one-day narrowband search does not test a monotonic drift over the age of Earth. A transient wall crossing can be invisible in daily averages.

This is why Sherrill and colleagues' minute-to-day Sr/Yb+/Cs data and the October 2026 thorium clock's 20-second-to-one-day search are important even without replacing the 2021 secular limit. They attack a different part of a hypothetical field's time dependence. Their model-independent ratio residuals must remain distinct from the dark-matter coupling bounds obtained after assuming a field spectrum and a coupling model.

A clock does not observe a particle. It records a changing ratio. Even a spectacular synchronized signal would first be a metrological event. A new physical interpretation would then have to explain its frequency, species dependence, phase, coherence, gravitational behavior and failures of ordinary environmental models.

The purpose of collecting different clocks is not to crown the most sensitive device. It is to build a set of disagreements so constrained that a new field cannot imitate a drifting thermometer, a magnetic offset, a fibre-link fault or a nuclear model error by changing its explanation from one apparatus to the next.
