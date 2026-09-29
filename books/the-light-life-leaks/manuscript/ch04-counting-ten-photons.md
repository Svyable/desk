# Counting Ten Photons

The most dangerous sentence in this field is “we detected light.”

Detected with what?

At what wavelength?

Against what background?

For how long?

Through what optics?

At what temperature?

With what gain?

After what subtraction?

Under what definition of an event?

Ten photons per square centimeter per second sounds like an objective fact. It is not objective until the instrument's own appetite for false photons has been measured with the same seriousness as the sample.

A photon detector does not sit outside physics waiting to receive truth. It is a physical device immersed in heat, electronics, radiation, materials, and statistics. At ultraweak intensities, the device can generate events that look exactly like the thing one wants to measure.

This chapter is about those lies.

Photomultiplier tubes were among the workhorses that made ultraweak biological emission experimentally tractable. A photon strikes a photosensitive surface and ejects an electron. That electron is accelerated toward a dynode, producing more electrons, which cascade across additional dynodes until a single optical event becomes a measurable electrical pulse. The amplification is enormous. So is the opportunity for noise.

Thermally emitted electrons can create dark counts. Radioactivity in materials can contribute. Cosmic rays can create bursts. Electrical pickup can imitate pulses. The photocathode's sensitivity depends strongly on wavelength. A detector optimized for blue light may be nearly blind where another biological emitter radiates. Optical windows and filters impose their own transmission curves.

The resulting number is never simply “photons from life.”

It is counts from a defined spectral and geometrical system minus a measured background under assumptions about detector efficiency.

Camera-based UPE imaging adds spatial information and a different collection of problems. CCD and EMCCD sensors convert incoming photons into charge within pixels. Cooling reduces thermal dark current. Electron multiplication can amplify weak signals before readout noise dominates. Long exposures accumulate events that would be invisible frame by frame. Binning can pool neighboring pixels to increase sensitivity at the cost of resolution.

These are not technical footnotes. They shape what the biological phenomenon looks like.

A five-minute exposure of a leaf produces an image in which a wound may appear as a bright region. That image is not a snapshot in the way a phone photograph is a snapshot. It is an integration over time. If emission occurred in brief bursts that moved around the wound edge, the final image may smooth them into a stable glow. If a few pixels experienced cosmic-ray events, filtering decisions matter. If the camera warms slightly, dark current can drift.

A beautiful image can be a compressed history of detector decisions.

Modern papers are often careful about these issues. The 2025 mouse-and-plant study, for example, used dark enclosures, cooled sensors, long acclimation periods, and defined imaging protocols. The preprint describing the work gives unusually concrete details: the EMCCD was cooled to around minus ninety-five Celsius, images used binning and high electron-multiplying gain, cosmic-ray filtering was applied, and the samples were placed in ultra-dark enclosures. Those choices are part of the result.

The same paper also illustrates the next layer: blackbody radiation.

All matter above absolute zero emits thermal radiation. A mouse at body temperature radiates strongly in the infrared. If one is claiming visible or near-visible UPE, one has to show that ordinary thermal emission in the detector's spectral band is too weak to explain the measured counts. Planck's law gives that comparison. At wavelengths in the ultraviolet and visible range, a body at roughly 310 kelvin emits extraordinarily little thermal radiation. The spectral peak is much farther into the infrared. This allows visible UPE to sit above the tiny blackbody background at those wavelengths even though the total thermal power emitted by the body is much larger.

The distinction is counterintuitive enough that it deserves repetition in a different form.

A warm mouse is radiating much more energy thermally than biologically in total. But a detector limited to selected shorter wavelengths can see a nonthermal metabolic photon signal against a negligible blackbody contribution in that band.

This is why spectral response matters.

It is also why claims that UPE is “not heat” should be stated carefully. The measured visible photons are not simply blackbody radiation from the organism's temperature. But temperature still influences metabolism, reaction kinetics, detector behavior, and some emission pathways. Heating a plant can increase UPE for biochemical reasons. Temperature is both a biological variable and an instrumentation variable.

Dark adaptation is another source of confusion.

Biological materials exposed to light can continue emitting afterward through delayed luminescence, phosphorescence-like processes, and relaxation of excited states. If the experiment aims to measure spontaneous UPE, prior illumination becomes a contaminant. Samples are therefore kept in darkness before imaging so induced emission can decay.

How long is enough?

There is no universal answer. Different tissues, pigments, and illumination histories can have different decay times. A thirty-minute dark adaptation protocol is a procedural choice that should be justified for the sample and detector. If one laboratory uses ten minutes and another uses an hour, they may not be measuring the same mixture of spontaneous and delayed emission.

This is one reason cross-study comparisons are treacherous.

Ultraweak photon literature spans decades, instruments, units, spectral bands, sample geometries, environmental conditions, and analytical conventions. One paper reports counts per second from a photomultiplier facing a cuvette. Another reports photons per square centimeter per second after calibration. Another gives camera intensity units from a region of interest. Another reports spectral counts through filters. The word UPE can create the illusion of a standardized quantity where none yet exists.

The field needs metrology more than metaphor.

A serious interlaboratory program would use calibrated reference light sources whose photon flux overlaps the biological range. Laboratories would characterize detector dark counts, quantum efficiency by wavelength, optical collection geometry, filter transmission, and linearity. Standardized biological preparations could be measured under controlled oxygen, temperature, and oxidative perturbations. Raw count data and preprocessing pipelines would be shared.

The resulting work would look boring.

That is a compliment.

Boring measurement standards are what turn a fascinating effect into a scientific instrument.

Rare-event physics offers a useful comparison. Experiments searching for dark matter, neutrinoless double beta decay, or rare neutrino interactions spend extraordinary effort modeling backgrounds. Materials are screened for radioactivity. Detectors are placed underground. Shielding is layered. Calibration is continuous. A single candidate event can be meaningless if the background model is weak.

Biological photon research does not require a kilometer of rock overhead, but it shares the epistemic structure. The event rate is low enough that the apparatus becomes part of the hypothesis.

Cosmic rays make the comparison literal. High-energy particles can strike imaging sensors and create bright pixels or tracks. Long exposures increase the chance of such events. Software filters can identify characteristic shapes or temporal behavior, but filtering introduces researcher choices. Remove too little and cosmic events inflate the biological signal. Remove too much and real transient photons may be discarded.

The safest analysis separates the questions.

First: is the sample-associated count rate statistically above detector background under matched conditions?

Second: does the count rate change reproducibly with a biological perturbation?

Third: is the change consistent with a known photochemical mechanism?

Fourth: can alternative optical or instrumental explanations be excluded?

Fifth: if a functional role is proposed, does manipulating the photons change biology independently of whatever chemistry generated them?

Each question requires a different control.

This ladder is easy to collapse because positive evidence accumulates emotionally. Once one sees a live mouse brighter than a dead mouse, the visual system wants to promote the finding. The bright image feels like direct contact with life. But the experiment still begins at rung one and two: sample-associated emission and state dependence.

Spectroscopy raises the bar further.

Counting photons across broad wavelengths can establish intensity. Assigning molecular sources requires spectral resolution. Filters can divide the signal into coarse bands. Spectrometers can in principle give more detail, but ultraweak signals make dispersion expensive because splitting light reduces counts per channel. Longer acquisition times then collide with biological change: the sample may not remain in the same state while one collects enough photons for a spectrum.

This is the basic curse of weak-light spectroscopy.

The less light there is, the longer one must wait. The longer one waits, the less stationary the biological system may be.

Researchers therefore face a tradeoff among spectral resolution, temporal resolution, spatial resolution, and statistical confidence. No detector gives all four for free.

That tradeoff is especially important for communication claims. A communication system might encode information in timing rather than average intensity. Long integrations could erase the code. It might use a narrow wavelength band hidden inside a broad oxidative background. Low-resolution spectroscopy could miss it. It might be highly localized inside tissue, with few photons escaping the organism for an external camera.

This is a legitimate reason not to infer absence of signaling from crude whole-body measurements.

It is not permission to claim an invisible signaling system whenever external detectors fail.

A functional hypothesis has to specify enough of the channel to become testable.

What emits?

What receives?

What spectrum?

What distance?

What temporal pattern?

What photon flux?

What biological response?

What intervention blocks the channel?

Without these details, “biophoton communication” is not one hypothesis. It is a cloud of possibilities.

Detector calibration can also expose impossible versions of the cloud. If a proposed signal would deliver substantially fewer than one photon to a target during the relevant decision interval, a conventional photochemical receiver cannot respond unless photons are being guided or concentrated in a way that has itself been demonstrated. If tissue absorption would remove nearly all photons at the claimed wavelength over the proposed distance, the geometry needs a mechanism.

This is where optical properties of tissue enter.

Biological tissue is not optically empty. Hemoglobin absorbs strongly in parts of the visible spectrum. Melanin absorbs broadly. Water dominates at longer infrared wavelengths. Scattering redirects photons. Some wavelength regions penetrate farther than others, which is why near-infrared light is useful in biomedical optics. A photon born inside a mitochondrion must survive local chromophores, membranes, organelles, cytoplasm, extracellular matrix, and possibly millimeters or centimeters of tissue before it reaches a distant target.

For diagnostic UPE imaging, absorption is a nuisance because the detector sees only what escapes.

For endogenous signaling, absorption could be the entire point if a nearby molecule is the receiver.

The same loss term changes meaning depending on the question.

This is why whole-organism imaging cannot by itself settle intracellular communication. A low external photon flux may coexist with much larger local generation if most photons are absorbed before escape. Conversely, a visible external signal says little about whether internal photons hit any biologically relevant receptor.

The measurement geometry determines the ontology one is tempted to infer.

There is also a statistical problem hidden in the language of “significant emission.” With low counts, Poisson statistics matter. If background is five counts per interval and the sample gives seven, repeated measurements may be needed to distinguish a real increase. If researchers inspect many wavelengths, regions, time windows, or treatment conditions, multiple comparisons can generate apparent effects by chance. Small biological sample sizes compound the problem.

The 2025 mouse study used four animals. The live-dead contrast was striking enough to be interesting, but four animals are not a universal atlas of mammalian UPE. Replication across laboratories, species, sexes, ages, metabolic conditions, anesthetic states, and detector systems will determine how general the pattern is.

This is not a criticism unique to that paper. It is how a field grows up.

A first experiment can be elegant and small. The next experiment should attack its assumptions.

Can a blinded laboratory reproduce the live-dead contrast with a different imaging platform?

How does emission change minute by minute after euthanasia?

What happens if body temperature is clamped precisely?

How much of the signal is suppressed by antioxidants?

Does hyperoxia increase it? Hypoxia decrease it? Does mitochondrial uncoupling alter the spectrum? Do respiratory-chain inhibitors produce predictable changes before tissue injury overwhelms the system?

Those perturbations would make the light mechanistic rather than pictorial.

The detector can then become a partner to biochemistry.

One can imagine simultaneous measurements of oxygen consumption, NADH redox state, mitochondrial membrane potential, reactive oxygen species, and photon emission. Instead of asking whether life glows, the experiment asks which metabolic transitions pay out in photons and with what kinetics.

That program is technically harder and scientifically less viral.

It is also where the field becomes useful.

The old dream was to discover a hidden radiation peculiar to life.

The modern opportunity may be better: to build a detector sensitive enough that ordinary metabolism can no longer keep all of its chemistry private.