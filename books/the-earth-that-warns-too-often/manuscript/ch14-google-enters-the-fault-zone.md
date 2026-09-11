# Google Enters the Fault Zone

By the time Google researchers entered the QuakeFinder data set, the central problem was no longer whether a magnetometer could record something odd before an earthquake. That had been demonstrated many times in the least useful sense of the word. The problem was whether a feature could survive a design built to stop researchers from fooling themselves.

The collaboration produced one of the most interesting papers in the modern precursor literature: William Heavlin, Karl Kappler, Lusann Yang, Daniel Schneider and colleagues, *Case-Control Study on a Decade of Ground-Based Magnetometers in California Reveals Modest Signal 24–72 hr Prior to Earthquakes*, published in *Journal of Geophysical Research: Solid Earth* in 2022.

The title is unusually disciplined. 'Modest signal.' Not prediction. Not breakthrough.

The study began with more than 330,000 site-days of magnetic measurements from the QuakeFinder network. It then threw almost all of that apparent abundance away.

The investigators required qualifying earthquakes to be at least magnitude 4.5, close enough to more than one station to support paired analysis, and sufficiently isolated from other significant earthquakes to reduce contamination. Depending on parameter settings, the final analysis involved a small set of site-pair-earthquake combinations. Across the selected configurations, the study's key result rested on nineteen qualifying earthquakes.

That number should be kept in the reader's head.

Three hundred thirty thousand site-days sounds like big data. Nineteen earthquakes sounds like what the experiment actually had to generalize across.

The team divided the archive by time. Data before January 1, 2016 became the training period; later data became the test period. The split was chosen using earthquake occurrence and station coverage without inspecting the magnetic signals in the test interval. The researchers emphasized that they did not process the held-out test data while selecting the final candidate models, aside from an explicitly reported code issue discovered during evaluation.

This is the most important sentence in the paper even though it is not about earthquakes.

The test set had a fence around it.

Inside the analysis, the team used a feature based on spectral cross-power between pairs of stations. For each earthquake and nearby station pair, they defined one 'precursor' period—really just the case window—24 to 72 hours before the earthquake, with the final 24 hours excluded by a buffer. They compared that period with seven earlier windows of equal duration, called quiescent controls.

The word precursor was deliberately used as a label for the case interval, not as a conclusion about mechanism.

For each period, they calculated frequency-dependent features from the upper tail of the spectral cross-power distribution. A linear discriminant analysis trained on the earlier earthquakes attempted to separate pre-earthquake periods from controls. The frozen discriminator was then applied to later data.

The result: modest separability.

The paper characterized the effect size as sitting in an uncomfortable middle ground. It was not so large that anyone should have seen it effortlessly decades earlier. It was not zero. The authors discussed an effective signal-to-noise measure around 0.5 under their framework—substantial by some social-science standards, small for a physical detector expected to classify individual events.

More importantly, the distributions overlapped. Not every earthquake showed the feature. Control periods sometimes did.

That is why the paper did not claim a warning system.

This is exactly the result the precursor debate has needed for years because it refuses the binary choice.

If the analysis is sound, a weak magnetic antecedent exists in the aggregate. That does not mean a magnetometer can tell a city to evacuate. It does not vindicate VAN. It does not rehabilitate the Corralitos trace. It does not prove positive holes or electrokinetic currents. It says a particular statistical property of paired magnetic stations differed modestly during one defined pre-event window in one California data set, including held-out earthquakes.

The result is narrow enough to be useful.

It also has vulnerabilities.

Nineteen earthquakes are still nineteen earthquakes. Event independence matters. Fault systems differ. Station pairs differ. Earthquake magnitude estimates carry uncertainty. The parameter grid used during model development introduces researcher choices, even if the test set remains protected. Cross-power can suppress local noise without identifying a crustal source. A regional anthropogenic or environmental process could affect multiple stations. The 24–72-hour window is operationally interesting but not derived from a settled physical mechanism.

The paper is best read as an existential test: is there anything in the magnetic data worth chasing under a reasonably strict design?

Its answer was yes, modestly.

This creates a new burden for the field.

A positive effect in held-out data should not trigger celebration. It should trigger replication.

The cleanest replication uses different earthquakes collected after the paper, ideally from station hardware and regions not represented in the original training. Freeze the 2022 pipeline. No retraining. No new frequency choices. No new magnitude threshold. Run it forward.

If the effect persists at roughly the same size, then the mechanism question becomes urgent.

If it shrinks toward zero, the result joins a long list of first-generation anomalies that did not travel.

If it grows, the original study may have underestimated a conditional effect.

All three outcomes are informative.

The study also gives the field a way to reinterpret older negative evidence. Parkfield found no obvious preseismic electromagnetic anomaly in the channels and analyses used around the 2004 M6 earthquake. The QuakeFinder feature is statistical and distributed across station pairs and frequencies. Would the frozen 2022 feature extractor score Parkfield's pre-event window as unusual?

This is a tempting retrospective test. It should be done carefully because Parkfield could easily become another target used for post hoc tuning. The correct procedure is to run the exact frozen algorithm once on compatible Parkfield data if the instrumentation allows, publish the result, and resist the urge to modify the feature if it fails.

A mechanism should be held to the same standard.

The 2022 paper did not choose among positive holes, fluid-related currents, piezomagnetism, stress-dependent conductivity or some unknown geophysical background. Its cross-spectral feature is phenomenological. This is appropriate. A premature mechanism can distort the detector by making researchers search only where the theory expects.

But phenomenology cannot be the final state.

If the signal is crustal, its spatial coherence should tell us something about source scale. Station-pair separation matters. The frequency dependence should constrain propagation through conductive crust. Magnitude scaling should constrain source strength. Tectonic setting and geology should matter if specific minerals or fluids are responsible.

The existing data can begin to ask these questions, but every subdivision reduces event count.

This is the central tension of rare-event science. Mechanism demands stratification; statistics demands pooling.

Pooling California earthquakes gives power but may average over different physics. Splitting by fault, magnitude, depth and lithology gives physical clarity but leaves three events per bin.

The only honest cure is time and more instruments.

The Google collaboration also makes an important cultural point. Machine learning did not rescue earthquake prediction by discovering a hidden nonlinear oracle. The successful analysis used relatively restrained statistical machinery and a strong experimental split.

This is almost the opposite of the usual AI story.

When the number of independent events is small, simpler models can be more credible because they expose what is being measured. The intellectual contribution lies in study design: case-control windows, station pairs, held-out time periods, pre-specified configurations.

A model with higher historical accuracy but weaker separation between training and testing would be less interesting.

This matters now because earthquake prediction attracts deep-learning papers. Seismic catalogs, GNSS, satellite imagery and electromagnetic time series look like ideal high-dimensional inputs. A neural network can easily be trained to classify windows before earthquakes. If windows from the same earthquake sequence leak across train and test sets, accuracy can become spectacular without any prospective information.

The unit of independence has to be the future event.

The Google/QuakeFinder paper did not solve every version of that problem, but it moved the field toward the right question.

There is another subtle strength in the case-control design. Each earthquake's pre-event period is compared with nearby earlier periods at the same station pair. Geography, hardware and much of the seasonal context are therefore partly controlled by construction. The method does not ask California magnetometers to look the same everywhere.

This is analogous to matched case-control studies in epidemiology. Rare outcomes can be studied efficiently by comparing cases with carefully chosen controls rather than modeling the entire population from scratch.

The analogy is useful because it clarifies what the result means. A risk factor can be associated with disease without being diagnostic. Smoking strongly shifts lung-cancer risk but does not tell you which smoker has a tumor tomorrow. A weak magnetic risk factor could shift earthquake probability without identifying the next rupture.

This is the conceptual move the field has resisted.

Earthquake precursor research inherited the dream of deterministic prediction. The Google result is more naturally interpreted as risk-factor science.

That shift changes evaluation.

Instead of demanding, 'Did the signal predict the earthquake?', ask for the likelihood ratio of the magnetic feature. How much more common is a high score in the 24–72 hours before qualifying earthquakes than in matched control time? How stable is that ratio across regions and years? Does adding the feature improve a baseline short-term seismicity model? Is the improvement large enough to matter for any decision?

A weak but stable likelihood ratio could be real science.

The practical threshold comes later.

The study's authors were explicit that the effect was not directly useful for prediction. That statement protects the result from one of the precursor field's worst habits: making every statistically significant association carry the weight of public warning.

It also invites a better experiment.

If QuakeFinder or successor stations continue operating, the 2022 analysis should now be treated like a sealed instrument. Every new qualifying earthquake is another calibration point. The paper's code and raw data should allow independent groups to reproduce the original result. A public prospective registry could store scores as they are generated.

No one needs to believe in the mechanism.

No one needs to believe the effect will survive.

The network can simply keep score.

This is the moment the book has been building toward. The strongest modern positive case is not a glowing sky, a nervous animal, a Greek telegram or a spectacular satellite map.

It is a modest difference between two distributions, obtained after somebody finally protected the future from the analyst.
