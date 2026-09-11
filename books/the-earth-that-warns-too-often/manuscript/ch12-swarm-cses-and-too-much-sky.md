# Swarm, CSES, and the Problem of Too Much Sky

DEMETER ended, but the question escaped the spacecraft.

By the 2010s, near-Earth space had become crowded with high-quality measurements. ESA's Swarm constellation, launched in 2013, was built primarily to study Earth's magnetic field and its sources, not to predict earthquakes. The satellites nonetheless offered exactly the sort of stable, precise magnetic and plasma data that seismo-electromagnetic researchers wanted. In 2018, China launched the China Seismo-Electromagnetic Satellite, commonly called CSES or Zhangheng-1, explicitly including earthquake-related electromagnetic observations among its scientific goals.

The argument had moved from one dedicated French satellite to a multi-mission data ecology.

This should have made the precursor question easier to settle.

It also made it easier to search.

Search is not the same thing as test.

A modern satellite archive contains magnetic vectors, plasma density, plasma temperature, electric fields, energetic particles, wave spectra, orbital position, local time and geomagnetic context. Data can be transformed into residuals, gradients, entropies, wavelet coefficients, polarization measures and machine-learned features. Each earthquake supplies multiple spatial radii and multiple time windows. Each filtering choice changes the sample.

If a research team examines enough combinations, some will look extraordinary.

The problem is not dishonesty. It is arithmetic.

One of the prominent Swarm analyses appeared in *Scientific Reports* at the end of 2019. Angelo De Santis, Dedalo Marchetti and a large group of colleagues reported what they described as precursory worldwide signatures associated with earthquake occurrence in Swarm satellite data. They analyzed magnetic and electron-density anomalies and reported temporal concentrations before earthquakes, with relationships to earthquake magnitude and epicentral distance under their framework.

The paper is important because it attempts global statistics rather than presenting only a single map before a famous event.

It is also a good example of why global statistics do not automatically solve the precursor problem.

The analysis pipeline still contains choices: anomaly thresholds, quiet-time selection, earthquake magnitude cutoffs, depth restrictions, spatial windows, temporal windows, declustering and corrections for geomagnetic disturbances. The Earth supplies enough events that one can estimate distributions, but the ionosphere and magnetic environment supply enough structure that small methodological differences matter.

The key question is replication under a locked pipeline.

Imagine taking the exact 2019 Swarm algorithm as frozen code and applying it prospectively from January 1, 2020 onward, with no parameter changes. Every day the system outputs anomaly scores over geographic cells. Those scores are archived before future earthquake catalogs exist. Six years later, the evaluation is simple: did earthquake rates rise as predicted with score? Did the effect size match the original paper? Did it vary with magnitude as expected? How many high anomaly scores produced no target earthquake?

This is the experiment the field keeps approaching without fully institutionalizing.

CSES offers another opportunity because its mission design is closer to the hypothesis. The satellite carries instruments intended to characterize electromagnetic fields, plasma and energetic particles relevant to lithosphere-atmosphere-ionosphere coupling. A second mission or successor architecture can, in principle, provide continuity.

National programs matter here for a reason that has nothing to do with scientific prestige. Long-duration precursor tests require infrastructure that outlasts ordinary grants. Satellites, ground networks and earthquake catalogs need stable operation across years of quiet time. Governments can sustain that scale.

The danger is that mission purpose can become mission prior.

If a spacecraft is called seismo-electromagnetic, analysts naturally search for seismic associations. Negative results are less narratively satisfying than anomalies. A satellite team can become a community whose conferences, students and future missions depend on the problem remaining interesting.

Again, this is not evidence of bias in any individual result. It is an incentive structure worth designing around.

The cleanest defense is a red team.

One team develops candidate precursor algorithms. Another team receives frozen code and hidden future data. A third team constructs null catalogs that preserve earthquake clustering, geographic distribution, orbital sampling and space-weather structure. The scoring rules are published. Results are released whether positive or negative.

This kind of adversarial collaboration is common in fields with high stakes and subtle statistics. Earthquake precursors need more of it.

Cross-national replication would be even stronger.

A Chinese algorithm trained on CSES data could be tested by European researchers on held-out intervals. A European Swarm feature could be tested against CSES observables where instrument physics allows. Japanese ground networks could provide independent lithospheric measurements. GNSS total-electron-content data add another global channel maintained for reasons unrelated to earthquake prediction.

Independence should be engineered.

The seismo-electromagnetic field has historically suffered from a paradox: the strongest positive evidence often comes from systems built to find the effect, while the strongest negative evidence comes from systems or researchers skeptical of it. This invites arguments about motive.

A better structure makes motive irrelevant.

The code runs on hidden data.

The result appears.

Space-based research also allows a direct test of one of the more dramatic claims in precursor literature: scaling with magnitude.

If large earthquakes disturb a larger preparation volume, one might expect larger or more spatially extensive electromagnetic or plasma effects. Some satellite studies report such relationships. This is physically plausible and statistically useful because it makes a directional prediction.

But magnitude itself is not known in advance.

A practical warning system must infer risk before the event. If anomaly amplitude correlates with eventual magnitude only after selecting earthquakes, that is mechanistic information, not yet prediction. The algorithm must translate the measured anomaly into a prospective distribution over future magnitudes and regions.

This seems like a semantic distinction until one builds the forecast.

Suppose a satellite sees a strong anomaly. Does it imply a 10 percent chance of a magnitude-seven earthquake in 200 kilometers over the next week? A 0.1 percent chance? Without calibration, 'strong anomaly' is not actionable.

Calibration is where many anomaly fields fail.

A well-calibrated probabilistic model that says twenty percent should be correct roughly twenty percent of the time across comparable cases. This allows decision makers to combine the model with costs and vulnerabilities. It also exposes overconfidence immediately.

Satellite anomaly papers often report statistical significance without producing calibrated short-term probabilities. That is appropriate for exploratory science. It also means they should not be described as earthquake prediction systems.

There is a deeper reason space may be the wrong place to begin operationally.

By the time a weak crustal signal reaches the ionosphere, it has passed through multiple noisy systems. A ground sensor close to the source should, in many mechanisms, have a better signal-to-noise ratio. If no corresponding ground effect exists, why should the satellite be trusted?

There are possible answers. The atmosphere-ionosphere system may amplify small electric perturbations. Large spatial integration may make a weak ground effect more coherent aloft. Ground stations suffer cultural noise and sparse coverage. Some coupling channels could produce a cleaner integrated response in plasma than in a single electrode.

These are testable hypotheses.

A serious space-based precursor should therefore come with a ground campaign. When the satellite anomaly occurs, what happened below? Did magnetic station pairs show coherent spectral changes? Did atmospheric electric fields change? Did radon or aerosol ionization change? Did GNSS show the same plasma structure independently?

Multimodal agreement is valuable if the channels are physically related in the predicted sequence.

Otherwise the number of sensors becomes theater.

CSES and Swarm also intersect with geopolitics in a quieter way. Earthquake monitoring is civilian science, but electromagnetic satellites, magnetic-field mapping and ionospheric characterization have broader technological relevance. Navigation, communication and space-weather operations all benefit from understanding near-Earth plasma. A mission can therefore be justified by multiple goals even if the earthquake hypothesis remains uncertain.

This is another reason not to infer validation from sustained government funding.

States often fund dual-use measurements because the data are broadly valuable.

The strongest evidence for a precursor remains performance against hidden future events.

By 2026, the field has enough infrastructure to perform that test at meaningful scale. Swarm has a long archive. CSES has accumulated years of observations. Global GNSS networks run continuously. Ground magnetic observatories and specialized arrays provide comparison data. Earthquake catalogs are rapid and standardized. Cloud computing makes it feasible to lock algorithms and process future data automatically.

The missing instrument is institutional commitment to not touch the test set.

This sounds absurdly modest beside a satellite.

It may be the hardest component to build.

Researchers are rewarded for improving algorithms. Every improvement discovered after seeing test performance creates pressure to rerun the analysis. A new geomagnetic filter seems obviously better. A different spatial radius seems more physical. A new earthquake catalog corrects magnitudes. Each change may be justified. Together they dissolve the boundary between exploration and confirmation.

The solution is sequential testing.

Version one is frozen and scored on one future period. If it fails, improve it using that period as new training data, then freeze version two for the next future period. The model can evolve without rewriting its past.

Weather forecasting already works this way culturally. New models are continuously verified against future observations. Earthquake precursor research needs the same operational humility.

There is a possibility that such testing will reveal heterogeneity rather than one global effect. Perhaps ionospheric precursors appear only for shallow continental earthquakes above magnitude 7 under geomagnetically quiet nighttime conditions. That would still be a scientific discovery if defined prospectively.

It would also make operational use rare.

Again the field must tolerate physics without prophecy.

A second possibility is that every global statistical effect weakens as controls improve. This would be equally valuable. It would redirect attention toward better-established forecasting inputs such as seismicity, geodesy and fault-system models.

The least useful outcome is the current middle: a stream of anomaly papers, each plausible enough to cite and flexible enough to resist closure.

Too much sky can hide a weak truth.

It can also manufacture one.

The next satellite should not merely have better instruments. It should have a precommitted argument with itself.
