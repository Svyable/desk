# A Signal Is Not a Forecast

The easiest way to overstate an earthquake precursor is to speak in percentages without a denominator.

Suppose a magnetic feature appears before 60 percent of magnitude-six earthquakes. That sounds promising. Suppose the feature also appears on 20 percent of ordinary days. Now the problem changes. At a particular place, magnitude-six earthquakes are rare. A detector can be associated with earthquakes and still spend almost all its life crying wolf.

This is the base-rate problem, and it is the graveyard of intuitive prediction claims.

A precursor has two lives. In a paper, it can be evaluated conditionally on known earthquakes: how often did the signal appear before the events? In the world, it must run forward through mostly uneventful time: when the signal appears, how often does an event follow?

Those are not the same probability.

Bayes' theorem is the arithmetic bridge between them, but no equation is needed to feel the effect. Imagine a region where the chance of a target earthquake in any given 72-hour period is one in ten thousand. A precursor multiplies that risk by ten. That is an extraordinary likelihood ratio for a geophysical signal. The new probability is still only about one in a thousand.

An official would be irresponsible to announce that an earthquake is 'likely.'

The signal could be scientifically profound and publicly quiet.

This is why claims about prediction should be evaluated in decision space, not only anomaly space.

The 2022 QuakeFinder result is useful here because its authors did not pretend their modest class separation amounted to a calibrated warning. Their case-control design was an existential test for a relationship. Turning the result into a forecast would require estimating absolute probabilities across all time, not merely comparing one pre-event window with seven earlier controls.

That requires modeling earthquake occurrence itself.

Short-term seismicity models already exist. After a significant earthquake, aftershock probabilities rise sharply. Earthquake rates depend on fault history, background seismicity and stress transfer. A new electromagnetic feature should therefore be judged against a baseline forecast, not against ignorance.

The question becomes: does the magnetic information improve probability estimates after standard seismological information is included?

This is harder than showing statistical association and more useful.

Imagine a region experiencing an aftershock sequence. Magnetic activity also rises. If a model ignores the seismic sequence, the magnetic feature may appear predictive because both are associated with the same evolving fault state. Add the earthquake catalog and the magnetic feature may contribute nothing independent.

That would not make the magnetic effect fake. It would make it redundant.

Forecasting is full of real but redundant signals.

Meteorologists do not care that a variable correlates with storms if the numerical model already contains the information more accurately. Medicine does not add a biomarker merely because it differs between cases and controls; the marker must improve discrimination, calibration or clinical decisions beyond existing predictors.

Earthquake precursors need the same discipline.

This also clarifies the difference between sensitivity and usefulness.

A predictor that catches every earthquake can be useless if it alarms constantly. A predictor with many misses can be useful if its alarms are rare and dramatically change short-term risk. No single metric captures this. Receiver-operating curves, precision-recall curves, Molchan diagrams, information gain and proper probabilistic scoring each illuminate different aspects.

The Molchan framework has a special history in earthquake prediction because it plots the fraction of missed target events against the fraction of space-time under alarm. A random predictor lies on a simple benchmark. A useful predictor captures more events while occupying less alarm space.

This geometric idea is intuitive and merciless.

A famous success looks less impressive when the alarm region covers half the map for half the year.

VAN's critics and defenders fought over how alarm space should be defined because that definition decides where the method sits on such a diagram. The argument was not bookkeeping trivia. It was the predictive claim.

Modern machine-learning studies sometimes repeat the old mistake in new form by balancing their data sets.

If a training set contains equal numbers of 'pre-earthquake' and 'normal' windows, a classifier that reports 80 percent accuracy may appear impressive. But the real world is not balanced. Normal windows outnumber imminent-earthquake windows by orders of magnitude. Deploy the model continuously and false positives can dominate.

Class balance is not a nuisance parameter. It is reality.

This is another reason the Google/QuakeFinder case-control result should remain modest until it is converted into a prospective rate model. A case-control design is efficient for detecting associations with rare events but does not directly estimate prevalence. Epidemiology solved this problem long ago. Earthquake AI papers often rediscover it painfully.

Forecasting also requires spatial calibration.

A precursor may be observed at a station pair but the future earthquake can occur within some radius. Widen the radius and hit rate improves while usefulness declines. The same is true for magnitude tolerance. A warning for 'M4.5 or larger somewhere within forty kilometers in the next two days' carries different information from 'M7 or larger within ten kilometers in the next six hours.'

All prediction claims should be translated into the volume of future they exclude.

A useful forecast makes the future smaller.

This is the deepest problem with generic anomaly language. 'Elevated seismic risk' can be true while barely shrinking uncertainty. Public readers hear a categorical warning where scientists may mean a tiny probability update.

The field needs a standard vocabulary for likelihood ratios and absolute risk.

Suppose a future network identifies a robust electromagnetic precursor with a likelihood ratio of five. At a high-hazard fault segment with elevated baseline probability, the absolute update might matter. At a low-hazard location, it might not. The same physical signal can have different operational value because prior risk differs.

This makes universal alarm thresholds questionable.

Decision makers also have different loss functions. A nuclear plant, a hospital, a commuter rail system and a homeowner should not necessarily respond to the same probability in the same way. A plant may run extra checks at low cost. A hospital may postpone an elective procedure if risk rises enough. An evacuation requires a far higher threshold.

The science should produce calibrated probabilities. Policy decides actions.

This division protects both sides.

Scientists should not hide uncertainty in order to make their work actionable. Officials should not demand certainty science cannot provide.

The L'Aquila disaster would later demonstrate what happens when these roles blur under public pressure.

There is another reason weak precursor effects deserve careful probabilistic treatment: they can combine.

A magnitude-five foreshock, a magnetic anomaly and a groundwater change might each produce a modest likelihood ratio. If the signals are conditionally independent given impending rupture, multiplying them could generate a substantial update. If they share a common cause or noise source, multiplying them double-counts evidence.

Conditional independence is the hidden monster in multi-sensor forecasting.

Consider weather. Rain changes soil conductivity, groundwater levels, animal behavior and perhaps local electromagnetic noise. A storm could make four sensors 'anomalous' at once. A naive fusion algorithm sees convergence. A causal model sees one weather event.

The same applies to geomagnetic storms affecting multiple electromagnetic and ionospheric channels.

A multimodal earthquake system therefore needs nuisance models as carefully as precursor models.

This is where modern AI can help if it is used humbly. Machine learning is good at modeling complex backgrounds. A system could learn ordinary relationships among weather, geomagnetic conditions, human activity and sensor channels, then identify residual patterns. But the final earthquake association still needs earthquake-level holdout and prospective validation.

AI cannot abolish base rates.

It can only help estimate them.

The distinction between precursor and forecast also changes how we interpret null results. If an effect exists in only thirty percent of earthquakes, a single Parkfield null does not eliminate it. If the theory had claimed universality, Parkfield is devastating. Thus a mature model needs an estimated prevalence of the precursor among target events.

Heterogeneity becomes a parameter.

Perhaps fluid-rich faults produce one class of precursor. Perhaps dry faults do not. Perhaps large shallow continental earthquakes have ionospheric effects and deep oceanic events do not. These possibilities can be tested by hierarchical models that estimate effect sizes across contexts rather than forcing one universal coefficient.

Again, conditionality must be declared before the event class is examined.

The temptation is always to discover the subgroup in which the model works and then treat that subgroup as physically meaningful. Sometimes it is. Sometimes it is overfitting.

Replication in another region is the discriminator.

Forecast science also needs negative predictions.

A model should identify circumstances under which a signal ought not appear. A positive-hole mechanism might predict no effect in certain lithologies. An ionospheric mechanism might predict suppression during strong geomagnetic storms because background noise overwhelms it. An electrokinetic model might require fluid-rich crust.

Successful negative predictions are powerful because they reduce the search space.

They are rarely celebrated because 'nothing should happen here' does not make a good headline.

The best precursor theory may ultimately be valuable not because it tells us exactly when earthquakes happen but because it tells us which fault states are physically different in the last days before rupture. That information could improve probabilistic models incrementally.

Incremental improvement is not the dream that launched earthquake prediction.

It may be the science that survives it.

A signal is a change in data.

A precursor is a signal statistically associated with a future event.

A forecast converts that association into probabilities over defined time, space and magnitude.

A warning is a social decision based on those probabilities and their consequences.

Most controversy in this field comes from skipping one of those steps.

The Earth may produce signals before rupture.

The hardest question is how much future they actually remove.

## What a Real Forecast Looks Like

There is a useful control experiment running in public right now.

The U.S. Geological Survey already issues operational aftershock forecasts after significant earthquakes. The system is not a precursor detector. It begins with something earthquake science knows how to use: an earthquake catalog, a mainshock, a decaying sequence and statistical regularities measured across many prior sequences.

The output is not `high risk`.

It is a table.

Magnitude threshold. Time window. Probability of one or more events. Expected count. Model parameters. Update time.

A 2026 USGS forecast after an M5.0 earthquake south-southwest of Unalaska, Alaska, for example, gave the probability of at least one M5-or-larger aftershock as roughly **1 in 30,000 within one day**, **1 in 4,000 within one week**, **1 in 1,000 within one month**, and **1 in 200 within one year**. The same product simultaneously gave probabilities for M3+, M4+, M6+ and M7+ events.

Nothing about those numbers sounds like prophecy.

That is why they are useful.

The USGS system uses statistical aftershock models descended from Reasenberg-Jones and, in some cases, ETAS-style models. The forecast can begin with generic parameters for the relevant tectonic setting and then update as the actual sequence produces data. In the Bayesian version, the generic model becomes a prior and the observed aftershocks update the productivity estimate.

This is what operationalization looks like.

The model declares its target variable. It declares its time horizon. It declares its magnitude threshold. It can be wrong in a way that can be scored.

An electromagnetic precursor worthy of public use has to enter that world.

The proper experiment is not `can magnetometer feature X distinguish pre-earthquake windows from control windows?`

It is closer to:

Given the existing seismicity forecast at time t, does adding feature X improve the probability assigned to earthquakes in future space-magnitude-time bins, prospectively, out of sample, under a proper scoring rule?

That sentence is less exciting than `we found a precursor.`

It is also the sentence that matters.

The Collaboratory for the Study of Earthquake Predictability was built around this discipline. CSEP asks researchers to submit forecasts before the target data exist and then evaluates them prospectively. In Italy, for example, CSEP experiments tested one-day, three-month and five-year forecasts against subsequent earthquakes rather than letting each model choose its own success criteria after the sequence was known.

That architecture should be the destination for precursor research.

A candidate electromagnetic signal would first have to beat a seismicity-only baseline. Then it would have to keep beating it in another region. Then it would have to remain calibrated as event rates change. Then somebody would have to decide whether the probability gain crosses a threshold for any particular action.

This ladder is deliberately cruel.

It should be.

The cost of an earthquake warning is not only the cost of evacuating when nothing happens. It is also the cost of teaching the public that warnings are theatrical.

A weak but real precursor may never become an evacuation trigger.

It might instead become a small term in a forecast model.

That is not failure.

It is what happens when a signal survives contact with the denominator.