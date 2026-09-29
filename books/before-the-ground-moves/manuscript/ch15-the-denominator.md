# The Denominator

The most important earthquake precursor may be the event that did not happen.

That is not a clever paradox. It is bookkeeping.

Suppose a magnetometer produces a pulse on Monday and a magnitude 6.5 earthquake occurs nearby on Tuesday. The pair is interesting. Now suppose the same magnetometer produced comparable pulses on twenty other Mondays that year and no large earthquake followed any of them. The scientific meaning changes.

Nothing about Tuesday changed.

The denominator did.

This is the recurring failure mode behind almost every seductive precursor story. Earthquakes are memorable and rare. Anomalies are memorable when attached to earthquakes and forgettable when they are not. A literature built event-first therefore overrepresents successful-looking pairings even when nobody selects evidence dishonestly.

The fix sounds trivial: count everything.

In practice, “everything” is difficult to define.

Take radon. What counts as an anomaly? Two standard deviations above a rolling mean? A monotonic increase lasting a week? A change in the radon/thoron ratio? A station-specific threshold? How much missing data disqualifies the episode? What if rainfall explains half the rise? How far away can the later earthquake be? What magnitude counts? If an earthquake occurs twenty-five days later, was that inside the alarm window?

Each choice changes both numerator and denominator.

If the choices are made after inspecting the earthquake, apparent skill becomes cheap.

This is multiple testing wearing hiking boots.

The usual statistical warning about trying many hypotheses applies with special force because precursor data are high dimensional. A researcher may have ten sensors, twenty frequency bands, several smoothing windows, multiple magnitude cutoffs, several epicentral radii and a dozen lead-time windows. There can be thousands of reasonable-looking ways to ask whether “something changed before earthquakes.” Even if every measurement is pure noise, some combinations will look exceptional.

The problem becomes almost invisible when analysis is narrated physically. The frequency band was chosen because theory predicts ULF propagation. The radius was chosen because preparation zones scale with magnitude. The window was chosen because stress activation should begin days before rupture. Each explanation can be plausible after the result.

Prospective testing asks the rude question: would you have chosen the same values yesterday?

If yes, freeze them.

A prediction method then produces four basic outcomes. It can alarm and the target earthquake occurs. It can alarm and nothing occurs. It can remain quiet and an earthquake occurs. Or it can remain quiet and nothing occurs. The last box is enormous because most places, most of the time, do not experience a damaging earthquake.

That imbalance is the heart of the problem.

Consider an imaginary detector that correctly alarms before ninety percent of magnitude 7 earthquakes and falsely alarms on only one percent of ordinary days. Those numbers sound excellent. But if the target earthquake has a daily base rate of one in one hundred thousand for the region under consideration, the detector is almost always wrong when it alarms.

Out of one hundred thousand days, roughly one contains the target event. The detector catches about 0.9 of it. The other 99,999 days produce about a thousand false alarms at a one-percent rate. An alarm therefore means something like one chance in a thousand of a true event, not ninety percent.

Sensitivity is not probability.

This is why balanced machine-learning datasets can be so misleading. Put one thousand pre-earthquake windows and one thousand quiet windows into a test set and an eighty-percent classifier looks useful. Deploy it into a world where true precursor windows occupy one tenth of one percent of time and its positive predictions can become mostly false.

The deployment prevalence matters.

There are valid reasons to balance classes during training. The error is reporting balanced-test accuracy as if it were public warning performance.

Prediction researchers need metrics that preserve the operational problem: fraction of space-time under alarm, probability gain, precision under realistic base rates, calibration and decision value. No single metric is sufficient because different users care about different failures. A nuclear plant may tolerate more false alarms than a metropolitan evacuation system if the precaution is automatic and cheap. A train system can act on seconds-scale early warning at thresholds that would be absurd for shutting an entire city for a week.

The cost belongs inside the evaluation.

This is not an excuse to lower scientific standards for harmless alarms. A false scientific claim remains false even if nobody evacuates. But operational usefulness depends on what an alarm triggers.

The denominator has spatial dimensions too.

A prediction that covers a circle with a radius of five hundred kilometers has more chance to contain a future earthquake than one covering fifty kilometers. If two methods have the same hit rate but one alarms ten times as much territory, they do not have the same information.

Time works the same way. A thirty-day alarm is easier to hit than a one-hour alarm. Magnitude thresholds matter because small earthquakes are common. A method that “predicts earthquakes” but counts magnitude 3 events within broad regions can generate impressive successes with little hazard relevance.

Every alarm is a volume in space, time and magnitude.

The cleanest evaluations measure that volume explicitly.

There is another denominator people resist because it complicates cherished cases: other earthquakes.

If a proposed precursor appeared before Loma Prieta, did it appear before comparable earthquakes recorded by the same instrument? If not, why not? A universal mechanism should have a miss problem. A conditional mechanism needs to state the condition before the comparison.

This is where post hoc geological explanations can become dangerous. The signal appeared at Loma Prieta because the rocks there were special. It was absent at another event because that fault was different. Both may be true. But if “different geology” is defined only after the missing signal, the theory has no predictive content.

Conditional hypotheses need denominators within the condition.

The same discipline applies to claimed successes across countries. A prediction method operating in Greece cannot claim only the earthquakes that fit its station-selectivity map without counting all the periods those selected regions were under alarm. A satellite method cannot exclude geomagnetically disturbed days from false alarms while keeping earthquake days with similar disturbances unless the exclusion rule was fixed independently.

Asymmetrical filtering is one of the quietest ways a predictor becomes unbeatable.

The denominator also lives in publication.

A strong positive result gets a paper. A year of null monitoring may become a sentence in a report, if it appears anywhere. A prediction that fails can disappear from a website. A method can therefore acquire a public history made mostly of hits even when its private history contains alarms everywhere.

Immutable forecast archives are a simple technological solution.

A prediction system should write every forecast to a public, timestamped ledger before outcomes occur. Not a press release after a particularly good event. A stream. The record should contain the model version, data availability, target definition and probability. If a sensor fails, the failure should be logged rather than silently removing the period from evaluation.

This is scientific infrastructure, not theater.

Meteorology became credible partly because weather forecasts are issued continuously and everyone experiences the misses. Numerical weather prediction improves in an environment where yesterday's forecast cannot be rewritten. Earthquake prediction has rarely had that luxury because methods often remain experimental and event-triggered.

A public forecast ledger would change the culture.

It would also expose another complication: nonstationarity.

Sensors change. Satellite missions end. Urban electromagnetic noise grows. Groundwater systems are pumped. Models are updated. Faults themselves evolve. A predictor that performed one way during five years may change later for reasons that have nothing to do with statistical overfitting.

Prospective evaluation therefore needs versioning.

Update the model if new science justifies it. But start a new evaluation period. Do not let improvements retroactively alter the record of the old version.

The comparison baseline deserves equal care. A predictor should not be asked merely to beat random guessing if ordinary seismicity already contains information. Earthquakes cluster. Aftershocks are highly forecastable in a probabilistic sense. Swarms change short-term rates. A fancy electromagnetic model that appears to predict earthquakes may be adding no information beyond recent earthquake occurrence.

The correct question is incremental value.

Does the radon signal improve a seismicity-based forecast?

Does TEC add information after location, time of day, season and geomagnetic state?

Does animal activity outperform local microseismic detection?

A new sensor earns its place by improving the best practical baseline, not by outperforming ignorance.

This standard can seem unfair to exploratory science. It is not. Exploratory work has a different job. Find patterns. Develop hypotheses. Estimate effect sizes. It should be free to roam. The problem begins when exploratory performance is advertised as confirmed predictive skill.

The two stages need separate names and preferably separate data.

Discovery can be messy.

Validation should be boring.

There is an aesthetic resistance to this. The history of earthquake precursors is full of singular moments: an instrument twitches, a gas rises, a satellite sees a patch. The denominator is a spreadsheet of days when nothing happened. It has no drama.

But the nothing is where the claim lives.

Every ordinary day asks whether the proposed precursor can tell the difference between a planet approaching rupture and a planet merely being a planet.

Most methods fail not because they cannot detect anything.

They fail because the Earth is always doing something.