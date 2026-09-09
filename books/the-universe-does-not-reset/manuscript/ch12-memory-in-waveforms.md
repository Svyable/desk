# Memory in the Waveforms We Build

No detector observes general relativity directly.

It observes voltages, photon counts, timing residuals, or other instrument outputs. Between those outputs and a statement about black holes lies a model. In gravitational-wave astronomy the model can be a staggering composite: analytical approximations for inspiral, numerical solutions of Einstein's equations near merger, perturbation theory for ringdown, calibration models for detectors, priors on source populations, and statistical likelihoods for noisy data.

Memory has to survive all of that before it becomes an observation.

The first challenge is that numerical relativity is expensive. Solving Einstein's equations for merging black holes requires discretizing spacetime, evolving strong-field geometry on supercomputers, controlling gauge conditions, extracting radiation far from the source, and extrapolating or otherwise relating finite-radius data to null infinity. A single high-accuracy simulation can consume substantial computational resources. Parameter space adds masses, spin magnitudes, spin directions, eccentricity, and more.

Waveform models therefore interpolate, approximate, or emulate across simulations. The models used in detector analysis are designed to capture the modes that contribute most strongly in the frequency band where the detectors are sensitive. Historically, memory was often omitted because it was weak, low-frequency, and unnecessary for first-generation detection goals.

That omission was rational.

It also has an expiration date.

As detectors improve, small physical effects become systematic errors. A model that was accurate enough at signal-to-noise ratio 20 can be inadequate at 200. A neglected waveform mode can bias source orientation. Spin precession can matter. Eccentricity can matter. Higher harmonics can matter. Tidal effects matter for neutron stars. Eventually memory matters.

The progression is ordinary scientific inflation: sensitivity converts yesterday's negligible term into tomorrow's nuisance parameter.

Memory has an additional complication because some standard waveform-extraction methods can lose or distort nonoscillatory content. If one reconstructs strain by integrating the Newman-Penrose scalar psi4 twice in time, low-frequency errors and integration constants can create drifts or suppress the very DC-like information one wants. Numerical methods have therefore been developed to obtain strain and memory more reliably, including Cauchy-characteristic extraction and balance-law approaches.

The asymptotic frame matters too.

A numerical simulation uses coordinates chosen for stable evolution, not because the universe hands us a preferred Bondi frame. At large distances one has BMS freedoms. If two waveforms are compared in inconsistent frames, translations, boosts, rotations, and supertranslations can masquerade as physical differences or mix modes. Recent numerical-relativity work has emphasized BMS frame fixing as essential for precision waveform comparisons and for correctly representing memory.

The conceptual loop closes neatly.

BMS symmetry first entered our story as abstract structure at infinity. It returns as a practical nuisance in waveform production. If you do not handle the symmetry correctly, you can mis-model the detector signal whose memory is itself linked to that symmetry.

Physics has a sense of humor about loose ends.

Waveform memory is also a lesson in what simulations are for. Numerical relativity is sometimes described as an artificial telescope: a way to see what equations predict before nature presents a clean observation. But simulations do more than generate pretty mergers. They define templates, discover nonlinear effects, test analytical approximations, calibrate effective-one-body models, and expose which quantities are gauge or frame sensitive.

For memory, simulation answers a concrete question: given two black holes with specified masses and spins, what nonoscillatory strain contribution reaches a distant observer at a particular orientation?

That prediction can then be inserted into data analysis.

The simplest memory estimate can be built from the energy flux of the oscillatory modes. More complete calculations track multipolar couplings and include the nonlinear contribution consistently. The dominant displacement memory often appears in even-parity modes that do not oscillate like the familiar quadrupole. Its amplitude grows through inspiral and rises more sharply near merger, when gravitational-wave luminosity peaks.

A model can therefore predict a step-like increase whose final amplitude depends on the integrated radiation.

The word final again carries an idealization. A numerical waveform starts at finite time. If the simulation begins only a few orbits before merger, it misses memory accumulated during earlier inspiral. Hybrid calculations can add post-Newtonian inspiral history. Extrapolation toward the infinite past is model dependent. The final memory offset can be underestimated if the waveform's beginning is mistaken for a true zero-memory state.

This is a delicious problem for a book about baselines.

The simulation itself needs a before.

A finite run begins when the computer begins. Nature's binary may have orbited for millions or billions of years. Most early memory accumulation is small and gradual, but a precision final offset is an integral over the entire radiative history. The computational baseline is therefore a choice that must be corrected or modeled.

We should not be surprised. Every archive begins too late for some question.

Paleontology loses soft tissue. Written history begins after humans already had histories. Climate records become sparse farther into the past. Astronomical surveys start on commissioning day. A simulation stores only the segment we paid to compute. Integrated quantities are especially ruthless about missing beginnings.

This has a human consequence for scientific infrastructure. Raw data and intermediate products that seem unnecessary now may become valuable when a new observable is recognized. Early LIGO data can be reanalyzed with improved methods. Numerical simulations can be postprocessed for new modes if sufficient fields were retained. Pulsar timing records can be searched for signals not central to the original observing proposal.

The discoverability of aftermath depends on archival generosity.

There is no guarantee generosity is cheap. Numerical relativity can produce enormous data sets. Detector collaborations face privacy, calibration, and computing constraints. Storing everything forever is not a plan. The problem is to identify which compressed products preserve enough structure for later questions.

This is, again, a memory problem in the ordinary human sense sitting beside memory in the relativistic sense.

The universe leaves a residue. The simulation leaves a file. The experiment leaves a calibrated time series. The paper leaves a source trail. At every layer, some details are preserved and others discarded.

A mature science learns which discards are reversible.

If memory can be reconstructed from oscillatory modes and flux balance, perhaps storing those modes is enough. If BMS frame information is lost, perhaps not. If calibration versions are undocumented, the detector time series may become ambiguous. If source-code commits vanish, a numerical waveform may be impossible to reproduce exactly.

The irony is that theoretical memory pushes us toward better institutional memory.

A future gravitational-wave catalog with thousands of events will not be scientifically useful merely because the strain data exist. It will need persistent identifiers, calibration metadata, waveform versions, posterior samples, detector-state information, and model provenance. Population-level memory detection may depend on combining weak evidence across events collected under changing instruments and software.

The book's human-role thesis begins to sharpen here.

Nature does not need us to make the memory effect real.

It may need us, if “need” is allowed in the purely observational sense, to build a chain of comparability long enough for the effect to become knowable.