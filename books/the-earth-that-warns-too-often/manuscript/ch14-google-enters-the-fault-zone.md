# Google Enters the Fault Zone

The Google–QuakeFinder paper began with more than 330,000 site-days of magnetometer data and ended with nine earthquakes in the held-out test era.

Both numbers matter. The first explains why the experiment could be attempted. The second explains why the result remains fragile.

William Heavlin, Karl Kappler, Lusann Yang and their colleagues published the study in *Journal of Geophysical Research: Solid Earth* in 2022. The title was admirably unheroic: *Case-Control Study on a Decade of Ground-Based Magnetometers in California Reveals Modest Signal 24–72 hr Prior to Earthquakes*.

The word *modest* was doing real work.

QuakeFinder had accumulated the thing precursor research usually lacks: boring time. More than a hundred instruments had spent years recording days on which no useful earthquake happened. The archive exceeded 26 terabytes. Yet once the researchers demanded earthquakes of at least magnitude 4.5, suitable station geometry, enough intact data and separation from other significant earthquakes, the impressive sensor archive collapsed into nineteen distinct earthquakes: ten before the train/test boundary and nine after it.

The statistical unit that mattered was not the second of magnetic data. It was the earthquake.

For each qualifying event, the analysis paired nearby magnetometer sites. The sites had to be close enough to the epicenter—depending on the selected configuration, within twenty, thirty or forty kilometers—and there had to be at least two of them. Cross-spectral power between the two stations was meant to suppress nuisances confined to one location: a vehicle, a bad cable, construction near a sensor. A disturbance seen at both instruments was harder to dismiss as local clutter.

Harder, not impossible. Solar and ionospheric disturbances can cover much larger areas than forty kilometers. So can parts of the electrical grid. Cross-power changes the nuisance problem; it does not abolish it.

The team cut the time before each earthquake into one case period and seven controls. The case occupied the forty-eight hours from seventy-two to twenty-four hours before rupture. The final twenty-four hours were deliberately ignored. The seven control periods, also forty-eight hours each, came before the case interval.

Then the sensor record was compressed brutally.

Ten-minute Fourier windows with heavy overlap converted the time series into spectra. Frequencies were grouped into eighty-five logarithmically spaced bins. At each frequency, the paired stations were combined through cross-power. Instead of averaging the resulting distribution, the analysis retained its 98th percentile—the unusually large common excursions. A linear discriminant built from the earlier earthquakes then asked whether those spectral features differed between the case and control periods.

This is a much stranger object than the phrase “magnetic precursor” suggests. The final signal was not a compass needle swinging before an earthquake. It was a weighted difference among upper-tail cross-spectral features assembled from paired instruments across frequency.

That specificity is a strength. It is also why replication has to mean more than finding another magnetic anomaly.

The paper describes its procedure as pre-specified, and the train/test boundary is a serious methodological advance. But “pre-specified” should not be mistaken for “the complete method descended from the sky before anybody looked at the data.” On the training period, the investigators explored a grid of 576 combinations of analysis choices. Those choices included earthquake magnitude threshold, maximum station distance, time-window parameters and feature settings. From that development process they selected three closely related configurations, whimsically named blue, channel and flathead after catfish—a nod to Namazu, the giant catfish of Japanese earthquake mythology.

Only those three configurations were then run on the held-out test data.

That is legitimate model development. In fact, it is what a training set is for. The important discipline is that the exploratory freedom stayed on one side of the temporal wall.

The wall, however, protected only nine distinct future earthquakes.

Because one earthquake could be observed by several station pairs, the analysis contained more site-pair–earthquake combinations than that: fifty-five in training and sixty in testing before later filtering. Those combinations add measurement information, but they do not turn one earthquake into several independent ruptures. A feature that happens to fit the circumstances of one event can therefore appear repeatedly across its station pairs.

The paper itself is more candid about awkward details than the simplified story usually told about it.

Missing data were common. If a forty-eight-hour interval contained a gap longer than three minutes, that period was discarded. This removed about nineteen percent of the training site-pair–earthquake combinations and sixteen percent of those in the test set because their case periods failed the requirement. Control periods were affected even more heavily. When a control window was unusable, the investigators moved farther backward in time to find another valid one. In some cases the replacement control was months earlier. Forty percent of the site-pair–earthquake combinations therefore contained discontinuity in the nominal sequence of controls.

There are reasonable reasons for doing this. Magnetometers fail. Batteries drop. Stations reboot. Throwing out bad intervals is better than pretending they are observations. But a case-control design whose controls sometimes migrate months away from the earthquake inherits more seasonal, instrumental and environmental difference than a picture of eight neat adjacent boxes would suggest.

The authors tried to defend against exactly this kind of drift. They detrended the earlier control features toward the time of the case period—their “pocketwatch” correction—so that a slow change in the instruments would not masquerade as an earthquake antecedent. They also smoothed the frequency weights rather than letting the discriminant seize on one narrow noisy bin. Both decisions were intentionally conservative in the training data.

Yet one unresolved nuisance remains especially important. The magnetometers themselves changed over the decade as equipment was improved, and the paper says the effects of those hardware changes were not modeled. The authors also called for better removal of geographically broad signals from solar wind, lightning and power lines, and suggested using remote reference stations to suppress ionospheric contributions.

Those are not footnotes to be swept aside after a positive result. They are the next experiment.

After training, the three frozen configurations showed a modest separation between the pre-earthquake windows and their controls in the later data. The characteristic frequency weighting peaked around a period of roughly three seconds. The reported effect size, expressed as a signal-to-noise ratio, was around 0.5 in the study’s framework.

The authors chose an unusual comparison to explain that number. An effect of roughly that size can be respectable in noisy human experiments and unimpressive for a physical detector. Their point was not that earthquakes behave like psychology subjects. It was that the observed distributions still overlapped substantially.

Some earthquake case windows looked ordinary. Some control windows looked unusual.

A city cannot evacuate on that basis.

The result therefore does less—and more—than the usual precursor claim. It does not say that a magnetometer can identify the next rupture. It says that under one carefully developed family of transformations, paired California stations contained a statistical difference in a defined forty-eight-hour window before a small set of later earthquakes.

The strongest counterargument is not that nine test earthquakes are automatically too few. Rare-event science often has to work with small numbers. The stronger objection is that the result still has several plausible non-seismic explanations that can reproduce broad spatial coherence: unmodeled common-mode geophysics, infrastructure, hardware history, or some interaction between those backgrounds and the case-selection process. Cross-power rejects a broken sensor more readily than it rejects the Sun.

The strongest argument in the paper’s favor is equally specific. Whatever produced the held-out effect had to survive a temporal split after the frequency weights and three final configurations had been chosen from earlier earthquakes. That is a higher bar than drawing a circle around an anomaly after a famous rupture.

By September 2026, there is an additional fact the chapter has to acknowledge. QuakeFinder’s own current history says the project operated from 2000 through 2023. Its publication list ends with the 2022 Google collaboration. Fresh searches did not identify a direct published replication in which the frozen 2022 pipeline was run prospectively on a new set of post-publication earthquakes with comparable station coverage.

That is a literature-status observation, not a negative experiment. The network winding down does not make the 2022 result false. It does make the chapter’s old proposal—simply keep the same network running and score each new earthquake—historically obsolete.

A replication now has to be reconstructed rather than merely awaited.

One route is archival. Freeze the published 2022 analysis and apply it to compatible observations that were not used for model development, including whatever later QuakeFinder data can be recovered before the network ceased operating. Another is geographic: find an independent dense ULF array, preserve the same event rules and frequency transformation, and let different hardware and different faults test whether the feature travels. A third is prospective but more expensive: build the paired stations again and register the scoring pipeline before the next qualifying earthquakes occur.

The distinction between those tests matters. Reanalyzing the original archive can challenge implementation details, but it cannot create new independent earthquakes. A different region supplies independent events but also different geology and instrumentation. A rebuilt prospective network is the cleanest test and the slowest.

That slowness is not an incidental inconvenience. It is the subject.

The paper’s 330,000 site-days can seduce the eye into thinking the experiment is large. In one sense it is. Years of quiet recordings are what let a researcher characterize the background at all. But the decisive evidence is constrained by the small number of future ruptures that satisfy the same rules.

This is why deep learning is not obviously the next step. A model can ingest billions of sensor samples and still be trained on ten earthquakes. The apparent data abundance exists inside events; the generalization problem exists across them.

The 2022 collaboration understood enough of that distinction to choose restrained machinery. The cleverness was not a neural network. It was the fence between earlier and later earthquakes.

But a fence is not a replication.

The paper earned the right to ask the next question. It did not answer it in advance.

That leaves the result in an unusually productive position. Too disciplined to dismiss as another highlighted squiggle. Too small and too entangled with background physics to call a forecasting technology. Too specific to be vindicated by a different kind of anomaly somewhere else.

The next convincing result has to make the same instrument—analytically, not necessarily physically—survive another set of earthquakes it was not allowed to learn from.

Until then, the most interesting thing Google brought into the fault zone was not artificial intelligence.

It was the future tense.