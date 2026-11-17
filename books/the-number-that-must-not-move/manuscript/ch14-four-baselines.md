# 14. Four Baselines

The strongest experiment in this field may not exist in one laboratory.

It may be the consistency relation among four baselines that have almost nothing else in common.

Oklo integrates a nuclear-physics and geological record from roughly two billion years ago. Quasar spectra sample atomic transitions in distant absorbing clouds along cosmological sightlines. Laboratory clock comparisons watch the present in seconds, days and years. Thorium introduces a nuclear sensitivity direction that conventional electronic clocks cannot supply, now with operating clock prototypes rather than spectroscopy alone.

These are not four independent votes on whether alpha changed. They are four different linear or nonlinear functionals of a possible physical history. Their integration windows, nuisance parameters and coupling dependencies differ. Giving them one common number to constrain without specifying a model is not synthesis; it is a category error.

### The same field, at four resolutions

Take a deliberately simple local history of the fine-structure constant,

\[
a(t)=\delta\ln\alpha(t)=d(t-t_0)+A\cos[\omega(t-t_0)+\varphi],
\]

where \(d\) is a constant fractional drift rate and the sinusoid is an illustrative oscillation. It is not a general cosmological model. A scalar field could instead evolve nonlinearly, couple to a density or gravitational potential, acquire environmental screening, or carry a spatial gradient.

Even this toy model shows why the clocks cannot be collapsed into one number. A multi-year Yb+ E3/E2 comparison constrains the component that looks like a secular slope over its sampled years. A one-day thorium/Yb+ data set can constrain oscillations in a frequency window set by the cycle time and uninterrupted span. Oklo constrains how the model shifts neutron-capture resonance conditions at its geological epoch after reactor physics and other couplings are specified. Quasar spectra compare line patterns at a redshift and sky direction with wavelength calibration and astrophysical cloud-velocity structure folded in.

The 2021 Yb+ E3/E2 result gave \(\dot\alpha/\alpha=(1.0\pm1.1)\times10^{-18}\ {\rm yr}^{-1}\) in its secular-drift analysis (https://doi.org/10.1103/PhysRevLett.126.011102). Multiplying the *uncertainty scale* \(1.1\times10^{-18}\ {\rm yr}^{-1}\) by \(2\times10^9\) years gives roughly \(2.2\times10^{-9}\). That is what a single constant fractional slope of that magnitude would accumulate over Oklo time. It is **not** an empirical two-billion-year bound: the multiplication assumes unchanged slope, no sign reversal, no oscillation, no spatial effect and no relevant changes in other dimensionless couplings. The assumptions do all the traveling.

Conversely, a sinusoidal field with a period of minutes can have almost no net secular displacement between two geological epochs but a detectable clock-ratio oscillation today. A transient structure crossing Earth can perturb a local clock without altering an ancient time-averaged reactor archive in any straightforward way. A cosmological dipole proposed from quasar data would require the sky coordinates, telescope calibration and Earth's motion to be modeled together; the dipole cannot simply be read as a present-day \(\dot\alpha\).

This comparison also puts thorium in its proper place. In 2025 one nuclear model estimated \(K_\alpha=5900\pm2300\), against the measured Yb+ E3/E2 ratio coefficient of \(-6.95\). The nominal response advantage is about 850. The 2026 thorium clock systems, however, reported short-time fractional instabilities of \(3\times10^{-12}/\sqrt{\tau/{\rm s}}\) and \(5\times10^{-13}/\sqrt{\tau/{\rm s}}\), and material/inter-run reproducibility still at roughly \(10^{-13}\) to \(5\times10^{-13}\) scales. One cannot rank an uncertain nuclear response coefficient, a daily Allan deviation and a four-year drift uncertainty as if they carried the same physical units.

The reported values and their different meanings are developed in Chapters 7 and 12. Primary sources: https://doi.org/10.1038/s41467-025-64191-7, https://doi.org/10.1038/s41586-026-11084-4, https://doi.org/10.1038/s41586-026-11122-1.

### Make the comparison lose something

Suppose a proposed scalar model specifies a field \(\phi(t,\mathbf{x})\) and couplings \(d_\alpha,d_\mu,d_q\), with

\[
\delta\ln\alpha=d_\alpha\phi,\qquad
\delta\ln\mu=d_\mu\phi,\qquad
\delta\ln X_q=d_q\phi.
\]

This is a parameterization to test, not an assertion that the field exists. For each clock ratio, the model predicts the time series

\[
y_{ij}(t)=[\Delta K_{\alpha,ij}d_\alpha+
\Delta K_{\mu,ij}d_\mu+
\Delta K_{q,ij}d_q]\phi(t,\mathbf{x}_{\rm lab})
+s_{ij}(t)+\epsilon_{ij}(t).
\]

For Oklo, propagate the same couplings into the samarium-resonance response and into a reactor-core neutron-spectrum and burnup calculation. For quasar absorbers, predict the transition-dependent wavelength shifts at each absorber's spacetime position and fit the instrument wavelength distortions jointly, not after selecting a preferred sky pattern. For thorium, retain uncertainty in its Coulomb/strong-sector sensitivity vector as a fitted or marginalized theoretical nuisance; do not silently set the strong-sector response to zero. For laboratory networks, keep noise correlations and common optical references in the covariance rather than multiplying nominally independent likelihoods that share hardware.

The appropriate output is a **model-dependent joint likelihood**, schematically

\[
\mathcal L_{\rm joint}(\theta,\eta)=
\mathcal L_{\rm Oklo}\,
\mathcal L_{\rm quasar}\,
\mathcal L_{\rm atomic\ clocks}\,
\mathcal L_{\rm thorium}\,
\mathcal L_{\rm equivalence},
\]

where \(\theta\) contains the actual field history and couplings and \(\eta\) the experiment-specific nuclear, astrophysical, environmental and calibration parameters. Multiply independent conditional likelihoods only after checking for shared data or calibration dependence. Marginalize or profile nuisance parameters rather than converting every measurement into an alpha-only pseudo-observation first.

The falsification test should be public before the fitting. Freeze at least two field hypotheses—a constant drift and an oscillatory field—plus a null model with environmental and instrumental effects. Predeclare the clock sampling windows, cross-species sensitivity matrix, correlated noise model, and quasar calibration terms. Fit on one subset; predict held-out clock species, laboratory sites or quasar sightlines. Report failures without changing the coupling sign between chapters. A field with unlimited model freedom will always survive. A field required to obey one sensitivity vector across four baselines may not.

The scientific prize is not the tightest isolated bar on a plot. It is a surviving trajectory: one field living one life through a reactor, a distant cloud, an optical comb and a nucleus. If none survives, that too is a result. The number did not move, as far as these particular instruments and models could tell.
