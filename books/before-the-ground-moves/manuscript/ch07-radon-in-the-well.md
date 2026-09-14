# Radon in the Well

Radon is an almost perfect earthquake precursor if you stop the story at the right sentence.

It is a radioactive gas produced naturally in the decay chain of uranium. It exists in rock and soil. It can move through pores, fractures and groundwater. If stress changes crack networks or fluid flow before an earthquake, radon concentration in wells or soil gas might change. Unlike a reported glow in the sky, radon can be counted. Unlike a vague feeling that animals are restless, it comes with a detector and units.

For decades, researchers have watched it.

The literature includes increases, decreases, spikes, long buildups, groundwater changes and soil-gas anomalies reported before earthquakes in several tectonic settings. Some observations are difficult to dismiss casually. The problem is that radon is also exquisitely sensitive to everything else happening in the shallow Earth.

That is why it belongs at the center of this book.

Radon teaches the difference between a plausible precursor and a specific one better than almost any other signal.

The basic causal story has several variants. Stress may create new microcracks, increasing emanation from mineral grains and opening transport pathways. Pore pressure changes may push gas or water carrying dissolved radon toward a sensor. Dilatancy may alter permeability before rupture. Strain may change the contact between groundwater and uranium-bearing rock. Different versions imply different timing and signs, which already complicates the expectation that radon should simply “rise before earthquakes.”

A well is not a microphone pointed at a fault. It is a hydrological system.

Rainfall changes recharge. Barometric pressure changes soil-gas flow. Temperature changes convection and detector conditions. Pumping changes water levels. Seasonal groundwater patterns move fluids through different rock volumes. Ventilation changes indoor or cave concentration. Snowmelt matters. Nearby construction can matter. The same sensitivity to cracks and fluids that makes radon interesting for tectonics makes it sensitive to a large set of non-seismic causes.

This is not a reason to abandon the measurement. It is a reason to measure the causes too.

An early USGS-associated radon program in Iceland illustrates the experimental mindset. In 1980, researchers collected radon data from geothermal wells and monitored other quantities such as gas-to-water ratio, temperature and chloride. They saw possible changes associated with some seismic or volcanic activity and also events with no distinctive radon anomaly. That mixture is scientifically healthier than a collection containing only hits.

The phrase “no anomaly” is precious in precursor science.

If a volcanic event occurs and the radon record stays ordinary, the theory has to absorb the null. If one station changes while another does not, transport and geology become part of the problem. If chloride changes inversely with radon, the system begins to look less like a simple stress gauge and more like actual hydrogeochemistry.

Similar ambiguity appears in long-term monitoring along the North Anatolian Fault. Researchers reported significant radon changes, including increases before some earthquakes, but different sensors and sites did not behave identically. A groundwater station and soil-gas stations could tell different stories.

That inconsistency is often treated as weakness. It may instead be a clue to the mechanism.

If radon transport depends on site hydrology, expecting synchronized universal response is unreasonable. But conditional behavior creates a prediction problem: you need a site model good enough to know when an excursion means changing tectonic stress rather than changing groundwater.

This is where newer radon work becomes interesting.

A 2015 *Scientific Reports* paper by Yong Hwa Oh and Guebuem Kim proposed using radon together with thoron, radon-220. The isotope pair offers a physical handle because thoron has a half-life of only about fifty-six seconds, while radon-222 survives for days. A very short-lived isotope cannot travel far before decaying. Changes in the radon/thoron relationship may therefore help distinguish local transport and source effects that a single long-lived isotope blurs.

This is good precursor science because it does not merely add a second sensor. It tries to close an ambiguity in the mechanism.

The more recent 2025 report of a persistent radon anomaly preceding the March 28 magnitude 7.7 Myanmar earthquake is similarly worth taking seriously without granting more than it shows. Researchers operating the Indian Network for Detecting Radon Anomaly signal reported a pronounced buildup at an Imphal station, beginning months before the earthquake and showing a sharper rise about a month before the mainshock. They also pooled ten earthquake events and reported a strong correlation between radon buildup duration and earthquake magnitude.

Those are striking results.

They are not yet the same thing as an operational prediction record.

The immediate questions are denominator questions. How many comparable radon buildups occurred during the full station history without a target earthquake? How many large regional earthquakes occurred without comparable buildup? Were anomaly thresholds fixed before the Myanmar event? How much freedom existed in selecting baseline, start date, event radius and the earthquakes included in the pooled analysis? How were monsoon, pressure, temperature and hydrological changes handled? Are results similar across independent networks using the same rules?

A correlation of 0.96 can be real in the sample and still exaggerate predictive value if the sample was constructed after the outcomes were known.

That sentence is not a criticism specific to the authors. It is the central danger of all rare-event precursor statistics.

Suppose a network has twenty years of daily radon data and ten large earthquakes in a broad surrounding region. Researchers can choose from multiple stations, smoothing windows, anomaly definitions, lead times and distance cutoffs. A sufficiently flexible search may discover a highly impressive relationship. The correct next step is not to argue over whether the p-value is “real.” It is to freeze the discovered rule and expose it to the next decade.

Earthquake science has an unfortunate timescale for this kind of validation.

A medical biomarker can sometimes be tested in thousands of patients within a few years. Large local earthquakes may provide only a handful of independent targets in a researcher's career. The pressure to treat retrospective structure as validation is therefore enormous. Waiting for prospective evidence can feel like refusing to learn.

There is a middle path: use the retrospective result as a mechanism hypothesis, not an alarm certificate.

If radon begins changing because stress modifies permeability, then other observables should move with it. Groundwater level may change. Other dissolved gases or ions may shift. Strain or microseismicity may evolve. The spatial pattern across stations should depend on fault geometry and hydrological connectivity. A good theory should predict relationships among these measurements, not just a radon curve before a known earthquake.

This is the multi-parameter temptation in its best form.

It is also dangerous.

Add enough channels and every future earthquake will have something strange beforehand. Radon rises at one station, conductivity falls at another, TEC changes overhead, a magnetic pulse occurs, animal activity shifts, and a machine-learning model declares the combined pattern rare. Without fixed feature definitions and continuous controls, multi-parameter monitoring can become a machine for manufacturing uniqueness.

The way out is not fewer measurements. It is harsher prospective rules.

A network can define anomaly scores independently for each sensor using rolling backgrounds that do not know future earthquake times. It can publish those scores continuously. A forecast model can combine them using parameters fitted on a historical period, then lock the model before an evaluation period. Every day receives a probability, not only days before earthquakes. When a damaging event occurs, the forecast is already in the archive.

This is the point where modern machine learning could improve precursor science—or repeat its oldest mistakes at digital speed.

The temptation is obvious. Feed years of radon, weather, groundwater, electromagnetic and seismic data into a deep model. Label windows before earthquakes as positive. Let the network discover nonlinear signatures human analysts missed.

The trap is just as obvious once you have seen it.

If windows from the same station leak across training and test sets, the model learns site identity. If aftershock periods contaminate labels, it learns seismic clustering. If the data are balanced artificially, performance ignores deployment base rates. If preprocessing uses statistics calculated across the full dataset, future information leaks backward. If researchers try many architectures and report the best, the test set becomes part of training by social process.

Prediction does not become prospective because the algorithm is complicated.

Radon is particularly suited to disciplined modeling because the nuisance variables are measurable. Atmospheric pressure, rainfall, temperature and water level can be recorded. The goal should not be to “remove noise” blindly. Environmental influences are part of the causal graph. A pressure drop that explains a radon increase is not noise; it is an alternative mechanism.

This distinction matters for interpretability. If a model declares an earthquake alarm because barometric pressure changed in a way correlated with the training catalog, its accuracy may be accidental and geographically fragile. A physically grounded model should tell us how much of the residual radon variation remains after known transport drivers.

There is another hard question: distance.

A radon anomaly at a station hundreds of kilometers from an eventual epicenter is more difficult to explain by direct strain or fluid transport than a local change. Long-distance claims therefore require either a broad stress-transfer mechanism or a different pathway. The temptation is to treat larger earthquakes as capable of influencing larger regions before rupture. But if the proposed preparation zone grows with magnitude, we need a quantitative scaling law and independent tests, not just larger circles around larger events.

The same is true of lead time. Months-long buildups sound attractive because they offer useful warning. They also create enormous alarm volume. If a radon station enters an “anomalous” state for a hundred days before a large earthquake, one must count every hundred-day anomaly that did not precede one. Long lead time is purchased with more chances for false positives.

A precursor can look better by getting earlier while becoming less useful statistically.

The public discussion rarely captures that tradeoff. “Scientists saw a signal three months before the earthquake” sounds more impressive than “scientists saw it three hours before.” In forecast evaluation, the reverse can be true if the short window is much rarer and more specific.

Radon also complicates the philosophical argument that earthquakes are inherently unpredictable. Even if rupture magnitude emerges from a cascade, the crust can still undergo preparatory changes in fluid flow. Those changes may modulate probabilities without determining the outcome. A radon anomaly could therefore be genuinely caused by evolving stress while failing as a deterministic predictor.

This is the middle category again: real, causal, insufficient.

It is a category science handles badly because publication and public communication prefer verdicts.

Does radon predict earthquakes? No validated operational system has shown that it does.

Can radon change before earthquakes for tectonically meaningful reasons? The record is interesting enough that a categorical “no” is too strong.

Those two sentences can coexist.

The scientific opportunity is to stop asking radon to be an oracle and make it earn a narrower role as one tracer of crustal state. A tracer can improve models without issuing a siren. It can reveal fluid pathways, strain sensitivity and site-specific coupling. If, after years of prospective evaluation, those state measurements also improve short-term forecasts, the prediction question can be reopened with numbers rather than anecdotes.

Until then, the well remains a wonderfully frustrating instrument.

It connects deep rock, water, gas, weather and detector in one narrow pipe.

When the count rate rises, something changed.

The entire field is contained in the next question:

What?