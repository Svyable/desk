# 16. The Network That Watches for a Wall

One of the strangest dark-matter searches looks like a timing problem for a weather front no one can feel.

Some models allow topological defects or other spatial structures in ultralight fields. If such a structure crossed Earth and coupled to Standard Model parameters, clocks in different locations could experience transient frequency excursions separated by propagation delays.

The cartoon is irresistible: a domain wall sweeps across the planet and the clocks twitch one after another.

The real experiment is harder.

A network needs synchronized raw data, species metadata, environmental channels, transfer-link diagnostics and a predeclared coincidence analysis. It needs to know its dead time. It needs to understand how often ordinary network faults produce traveling-looking patterns. It should include magnetometers, gravimeters or other sensor classes if the proposed field predicts correlated effects there.

A candidate event should be fit as a spacetime object, not merely a simultaneous anomaly.

Direction, speed and thickness inferred from one subset of sensors should predict timing at held-out sensors. Different clock species should exhibit amplitude ratios tied to coupling coefficients. A laboratory environmental disturbance should fail that out-of-sample prediction.

The same architecture can search for oscillatory dark matter, but with different statistics. There the signal is narrowband and coherent for a finite time rather than impulsive.

What matters is that the experiment is capable of discovering something it was not built to recognize by eye. No operator should have to notice that five clocks looked funny on Tuesday.

### How fast would the clocks have to speak?

A network's baseline means nothing without its sampling interval. Take a *hypothetical*, model-dependent structure traveling at 300 kilometres per second relative to the laboratory frame. Across stations separated by 1,000 kilometres along the direction of travel, the arrival-time separation would be about \(1000/300=3.3\) seconds. Across a full Earth diameter, roughly 12,742 kilometres, the largest projected separation at that speed would be about \(42\) seconds. Geometry matters: stations perpendicular to the path could trigger almost together. These are design examples, not a measured dark-matter speed or a prediction that a wall exists.

Now compare those delays with real clock analysis windows. A thorium nuclear-clock experiment published in October 2026 searched a roughly 20-second-to-one-day domain, with a fast mode using 20-second interrogation-and-feedback updates (https://doi.org/10.1038/s41586-026-11084-4). A three-second inter-station delay cannot be convincingly measured from a sequence that produces only one independent datum per 20 seconds. Shorter timestamping and a suitable sensor response would be necessary—and reducing the averaging time raises frequency noise. A network that promises both nanosecond event timing and \(10^{-18}\) fractional frequency resolution must show how both arise from its actual interrogation and transfer architecture.

For evenly sampled data with spacing \(\Delta t=20\) seconds and a total uninterrupted duration of 24 hours, the *formal* Nyquist frequency would be \(1/(2\Delta t)=0.025\) hertz (40-second period), and the Fourier-bin width about \(1/T=1.16\times10^{-5}\) hertz. Servo filtering, a finite integration aperture, missing samples and aliasing can make the usable range narrower. A 20-second *clock cycle* need not even deliver an independent unfiltered instantaneous point every 20 seconds. The recorded transfer function, not the marketing description of the clock, defines the search.

A credible multi-station proposal therefore needs two simultaneous budgets. The first is *temporal*: timestamp uncertainty, cadence, interrogation aperture, propagation geometry, duty cycle and dead time. The second is *physical*: the predicted fractional pulse in each transition, each clock pair's \(\Delta K\) vector, measured environmental sensitivity, and the covariance of shared time-transfer links. A field crossing should predict not only an arrival order but an amplitude pattern that cannot be freely changed after seeing the data. At least one station and one clock species should be held out of the event fit.

This is not an argument against a global network. It tells us what experiment would actually test the cartoon, and which parameters would remain unconstrained by a non-detection.

The network watches for a wall by becoming a telescope whose baseline is Earth and whose photons are absent.
