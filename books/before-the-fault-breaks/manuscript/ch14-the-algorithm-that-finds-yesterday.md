# The Algorithm That Finds Yesterday

Machine learning arrived in earthquake-precursor research carrying the usual promise: perhaps the signal has been present all along, smeared across too many dimensions for a human to see.

This is plausible.

A fault system produces seismicity, deformation, fluid movement, gas emissions, electromagnetic variation, and perhaps atmospheric or ionospheric consequences. Each channel is noisy. The useful state may not appear as a threshold in any one variable. A model trained across multiple streams could detect a pattern that no simple rule captures.

This is also exactly how one builds the most convincing retrospective illusion in modern science.

Give an algorithm enough features, enough earthquakes, enough preprocessing choices, and enough opportunities to tune. Let the researchers know the earthquake catalog while designing the model. Split the data incorrectly. Normalize with information from the future. Let aftershock sequences leak between training and test sets. Select only stations that produced interesting anomalies. Optimize the warning window after seeing performance. Then call the output prediction.

The machine will find yesterday.

The danger is not that machine learning is fraudulent. The danger is that prediction problems are unusually sensitive to leakage, and precursor data sets are almost designed to leak.

Time-series normalization is one route. Suppose a researcher calculates a local mean and standard deviation using a window that extends beyond the time being predicted. The future has entered the baseline. This can happen subtly through smoothing, detrending, seasonal decomposition, or interpolation.

Event splitting is another. Earthquakes cluster. If aftershocks from the same sequence appear in both training and test sets, a model may learn the sequence rather than a general precursor. It can appear to predict earthquakes because nearby events share geography, sensor conditions, and recent seismic history.

Station leakage is a third. A model trained and tested on the same sensor network may memorize which stations sit near active faults. This can be useful for hazard mapping and useless for short-term prediction.

Label construction is perhaps the most dangerous.

Researchers must decide how many hours or days before an earthquake count as “pre-seismic,” how far from the epicenter a station can be, what magnitude threshold defines a target, and whether overlapping windows are merged. Those choices define the phenomenon before the model sees any data. If the choices are adjusted after looking at results, the labels become optimized to the catalog.

A ten-day precursor that performs poorly can become a seven-day precursor. A one-hundred-kilometer radius can become two hundred. Magnitude six can become 5.5. The algorithm improves. Nature has not changed.

This is why the best machine-learning experiment is boring to describe.

Choose a historical development period. Build everything there. Freeze the data cleaning, features, architecture, thresholds, target definitions, and alert policy. Then evaluate on a later period that nobody touches until the model has been sealed.

Better still, evaluate on another region.

Geographic holdout is cruel because geology differs. That is also why it matters. A model that works only where it was trained may be detecting local station behavior rather than a general physical process. Cross-region failure does not automatically invalidate a mechanism if the mechanism is geology-specific, but then the geology-specific conditions should have been defined beforehand.

The model should know why it is local.

A 2026 systematic review of AI methods applied to radon earthquake precursors shows how quickly the field is growing and how heterogeneous it remains. Different studies use different sensor media, anomaly definitions, preprocessing methods, coupling windows, and validation schemes. This is fertile research territory and a warning label.

“AI found a precursor” is almost meaningless without the evaluation design.

The same caution applies to satellite data. A neural network can ingest electric fields, magnetic fields, plasma density, electron temperature, particle flux, space-weather indices, orbital variables, and seismic catalogs. Its performance may look extraordinary if the negative examples are random locations or times. But a useful model has to distinguish pre-earthquake states from the hardest non-earthquake states: active faults during ordinary days, geomagnetic disturbances, thunderstorms, aftershock periods, seasonal extremes, and instrument anomalies.

Hard negatives make classifiers honest.

This idea is standard in computer vision. A model trained to recognize wolves can accidentally learn snow if most wolf photographs contain snow and dog photographs do not. The famous lesson is not that neural networks are stupid. It is that they exploit whatever reliable difference the data provide.

An earthquake model can learn the equivalent of snow.

Tectonic regions have characteristic latitudes, topographies, land-cover patterns, radio environments, station densities, and ionospheric climatologies. If earthquake examples and controls differ along those dimensions, a classifier can achieve impressive accuracy without seeing a single pre-seismic process.

Interpretability tools can help but are not absolution. Feature importance may reveal that the model relies on geomagnetic latitude or recent seismicity. That is useful. But a model can distribute spurious information across correlated features in ways no simple importance plot exposes.

The cleanest test remains intervention by data design: remove the shortcuts.

Matched controls. Region holdouts. Time-forward validation. Event-cluster separation. Prospective scoring.

There is also the base-rate problem, which machine-learning papers routinely hide with balanced test sets.

Suppose the researchers construct a data set with ten thousand pre-earthquake windows and ten thousand normal windows. A classifier reaches ninety percent accuracy. That sounds extraordinary. In reality, any given day in any given region may have a tiny probability of a target earthquake. Deploy the classifier globally and false positives can overwhelm true positives even if sensitivity and specificity look excellent on the balanced benchmark.

Operational evaluation must use the real class imbalance.

The metric I care about is not accuracy. It is the number of public alarms per successfully anticipated damaging earthquake, together with warning time and geographic precision.

If a system “predicts” every magnitude-seven event but keeps half the world under alert, it has learned nothing useful.

Calibration matters too. A probability should mean something. If the system labels one hundred situations as having a ten percent event probability, roughly ten should produce the event over enough trials. A well-calibrated model can be useful even without dramatic binary accuracy because decision-makers can combine probabilities with consequence and vulnerability.

This pushes the field away from prophecy and toward risk.

There is a deeper opportunity in machine learning that has little to do with black-box prediction. Models can improve nuisance correction. They can estimate expected radon from meteorology, ionospheric state from solar and local-time variables, animal behavior from weather and husbandry, groundwater from rainfall and pumping. In other words, machine learning may be most valuable for removing what is not an earthquake.

I trust this use more because the target variables are abundant. There are millions of ordinary hours to learn weather-radon relationships and ionospheric climatology. Large earthquakes are scarce. The model can become excellent at background physics before being asked whether a residual remains.

That residual should then be handed to simpler, more auditable prospective tests.

The irony is attractive. The best AI system for earthquake prediction may spend most of its effort proving that anomalies are normal.

This is the right direction of pressure.

Frontier fields do not need algorithms that make weak signals look sophisticated. They need algorithms that make weak signals survive hostile alternatives.

The future of precursor science will not be decided by whether a neural network can fit earthquake catalogs.

It will be decided by whether a frozen model can be wrong tomorrow in exactly the way it said it might be wrong today.