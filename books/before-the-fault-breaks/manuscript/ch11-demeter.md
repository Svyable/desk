# DEMETER

In 2004, France put a satellite into orbit with a name that made the ambition explicit: DEMETER, Detection of Electro-Magnetic Emissions Transmitted from Earthquake Regions.

The acronym is almost too good. Demeter was the Greek goddess of agriculture, the ground made divine. The spacecraft was more prosaic: a low-Earth-orbit microsatellite built to measure electromagnetic waves and ionospheric plasma. Earthquakes were not its only scientific target, but the possibility of seismic electromagnetic effects was central enough to name the mission.

DEMETER matters because it punctures a lazy story about earthquake precursors. The subject was not confined to village folklore or fringe newsletters. A national space program devoted real hardware, launch mass, orbital operations, and years of data analysis to the question.

That proves institutional interest.

It does not prove the phenomenon.

This distinction should be obvious, but classified and anomalous subjects teach the opposite habit. People often treat the existence of a government program as evidence that the program’s motivating hypothesis was true. Governments study threats that do not exist, technologies that do not work, phenomena they misunderstand, and possibilities whose probability is low but consequence high. A satellite is evidence that scientists believed a question was worth measurement.

That is enough to take the question seriously.

DEMETER carried instruments capable of measuring electric and magnetic fields, plasma density and temperature, energetic particles, and related ionospheric parameters. It operated until 2010. The resulting literature includes analyses of individual earthquakes, statistical studies, and proposed electromagnetic or plasma anomalies before seismic events.

Some findings were suggestive. Some did not replicate cleanly. Some papers identified perturbations in very-low-frequency or other bands near earthquakes. The interpretation was persistently complicated by geomagnetic activity, lightning, transmitters, orbital sampling, and the fact that researchers knew where and when the earthquakes had occurred.

One rejected 2014 preprint on VLF disturbances observed by DEMETER before three earthquakes is instructive precisely because it did not become a clean success story. The authors reported spectral variations they considered potentially precursory. The revision was not accepted. The existence of the analysis tells us what kinds of patterns researchers were seeing; its publication history reminds us that seeing a pattern is the beginning of review, not the end of discovery.

DEMETER’s larger value may be methodological rather than predictive.

A dedicated mission forces the precursor hypothesis into instrument space. What frequency range? What sensitivity? What altitude? What orbit? What local-time coverage? What environmental monitors? What data products? Once these choices are embodied in hardware, the theory acquires costs.

That is healthy.

An anecdote can mutate indefinitely. A satellite cannot change its detector after launch because the signal turned out to be elsewhere.

Space missions also create archives. Future researchers can reanalyze raw or processed data with new methods, including methods designed to penalize the retrospective freedoms earlier studies enjoyed. One can define earthquake catalogs without selecting only famous events, generate matched controls, incorporate geomagnetic covariates, and ask whether anomalies survive blinded analysis.

This is where old missions can become more scientifically valuable after their original excitement fades.

The temptation, of course, is machine learning. Feed years of DEMETER measurements and earthquake catalogs into a sufficiently flexible classifier and ask it to predict seismic events. This sounds modern. Without careful splits, it can be an elaborate way of teaching the model geography, season, local time, solar activity, and catalog artifacts.

Spatial leakage is particularly dangerous. If training and test data include repeated passes over the same tectonic zones, a model can learn where earthquakes are common without learning any precursor. Temporal leakage can occur when normalization uses future data. Event windows can overlap. Aftershock sequences can let the model detect the aftermath of one earthquake and receive credit for “predicting” another.

The solution is to design the evaluation like an adversary.

Hold out entire regions. Hold out future years. Separate aftershock sequences. Compare against hazard-only baselines. Randomize earthquake times within appropriate seasonal and tectonic constraints. Use synthetic catalogs. Ask whether the model’s advantage disappears when geomagnetic variables are withheld or controlled.

A precursor model should be difficult to impress.

DEMETER also clarifies the difference between discovery and operations. Even a statistically significant association may have little warning value. Suppose an ionospheric parameter is shifted on average before large earthquakes. The distributions may still overlap so much that no threshold produces an acceptable false-alarm rate. Group differences are not automatically classifiers.

This is a recurring problem in medicine. Two patient populations can have significantly different biomarker averages while the biomarker is useless for diagnosing an individual. Earthquake precursor studies often stop at the equivalent of group significance and leap rhetorically toward warning.

Operational value requires discrimination.

That means receiver-operating curves, calibration, positive predictive value under real event rates, and costs. It means publishing how many alarms would have been issued across the full mission, not just how many earthquakes had interesting-looking measurements nearby.

There is another lesson hidden in DEMETER’s retirement.

The mission ended in 2010. The question did not. China launched CSES-01 eight years later with Italian participation, carrying a broader instrument suite aimed at electromagnetic and ionospheric measurements relevant to earthquakes and other phenomena. Then CSES-02 followed in 2025.

Scientific interest migrated rather than vanished.

This persistence can be read cynically: another generation repeating an unproven search. It can also be read as the normal progression of difficult measurement science. Particle physicists build successive detectors for phenomena not yet seen. Astronomers return to elusive signals with better surveys. Gravitational waves required decades of instrumentation before direct detection.

The analogy has limits. In those fields, the underlying theories often made quantitative predictions stronger than most earthquake-precursor models do. That difference matters. Better instruments cannot rescue a hypothesis that refuses to specify what they should see.

The burden on CSES is therefore higher than DEMETER’s.

The newer missions inherit twenty years of lessons about false positives, space weather, orbital sampling, retrospective windows, and statistical freedom. They should not merely produce another gallery of anomalies beside famous earthquakes. They have the opportunity to create the first genuinely prospective orbital precursor experiment at scale.

That would require a cultural shift.

Publish the anomaly algorithm before the target period. Archive daily global scores. Invite skeptical teams to define competing models. Register the evaluation windows. Track every false alarm. Compare against shuffled catalogs and standard seismic forecasts. Treat a null result as mission science rather than institutional failure.

This last point is harder than it sounds. Large programs acquire narratives. A satellite justified partly by a scientific objective creates pressure to produce papers showing progress toward that objective. Null results are harder to celebrate in annual reports. Collaborations develop specialists whose careers depend on the subject remaining alive.

That does not imply dishonesty. It implies ordinary human incentives inside extraordinary measurement.

The best defense is architecture.

Make the data public. Separate algorithm development from evaluation. Let teams compete on blinded periods. Reward falsification. Predefine what would count as failure.

DEMETER put the question in orbit.

The next step is to put the hypothesis on a clock.