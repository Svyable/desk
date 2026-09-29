# What Counts as a Prediction

In earthquake science, prediction is not a synonym for being right later.

That sounds obvious until you look at the things people call predictions.

A seismologist says a certain fault has a high probability of producing a major earthquake within thirty years. A geologist says a sequence of earthquakes is migrating toward a locked segment. A physicist sees an electrical transient and says an event above magnitude 5.5 may occur within a hundred kilometers during the next few weeks. An app detects a rupture that has already begun and warns a city forty seconds before damaging waves arrive. A man in a television interview says that after watching animal behavior he knew something bad was coming. These statements have different logical structures, different denominators and different uses. Put them in one box and almost any argument about whether earthquakes can be predicted becomes insoluble.

The strict version is simple enough. A prediction specifies a future earthquake's location, time and magnitude within defined bounds. It can be scored. The event either falls inside the target window or it does not. The alarm region occupies some fraction of space and time. Earthquakes outside the alarms are misses. Alarms with no target earthquake are false alarms. Successful predictions are meaningful only in relation to those other outcomes.

The scoring problem gets uncomfortable quickly.

Suppose I predict an earthquake of magnitude 6 or greater somewhere in California during the next ten years. That statement is likely to be correct eventually. It is also close to useless for emergency action because the time window is huge. Now shrink the window to tomorrow but let the location be the entire Pacific Rim. I may still get lucky eventually, but the geographic alarm volume is absurd. Shrink both and the prediction becomes useful if it works, but much harder to hit by chance.

Every prediction method therefore spends a budget of uncertainty. Wide windows purchase sensitivity by sacrificing specificity. Narrow windows make a hit impressive but increase misses. You cannot compare two methods merely by counting how many earthquakes followed their alarms. You have to know how much of the map and calendar they placed under alarm to get those hits.

This is one reason prediction controversies can survive for decades. The public remembers events. Statistical evaluation remembers alarm space.

Consider a hypothetical electrical network in Greece. An unusual voltage appears at one station. The researchers declare an alarm for an earthquake above magnitude 5 within three weeks in a region occupying a large portion of western Greece. A magnitude 5.3 event occurs two weeks later near the edge of the region. Was it predicted?

If the rules were fixed beforehand, maybe. If the region was drawn after the event, no. If the original magnitude threshold was 5.8 and later lowered, no. If several alarms were issued during the same period and only one was publicized, the success rate needs the full alarm list. If another magnitude 6 event occurred outside any alarm, the method also has a miss. If the region spends half the year under overlapping alarms, a hit is less surprising than it looks on a newspaper page.

None of this requires accusing anybody of fraud. Flexible scientific judgment can turn into retrospective overfitting without a single dishonest decision.

The earthquake itself supplies an enormous amount of information after the fact. It tells the investigator which station was “near.” It suggests which frequency band to inspect. It makes a particular three-day rise look more interesting than the identical rise six months earlier. It encourages the use of a baseline fitted around the event. Each choice can be individually defensible and collectively fatal to a prediction claim.

The cure is boring: decide early.

Pre-register the alarm rule. Freeze the preprocessing. Time-stamp the prediction somewhere the predictor cannot edit. Specify what happens if an instrument fails. Specify how aftershocks count. Specify whether one alarm can claim several earthquakes. Specify what background forecast you intend to beat. Then wait.

Earthquake prediction research learned these lessons painfully because the events are sparse. In many sciences, an experimenter can collect another hundred samples. A magnitude 7 earthquake near a dense instrument network may not return for decades. This scarcity encourages a case-study culture. Every large event becomes scientifically precious. The temptation to use all available knowledge to wring meaning from it is rational for mechanism discovery and dangerous for prediction evaluation.

That distinction deserves emphasis. Retrospective analysis is not bad science merely because it cannot validate prediction.

After the 2011 Tohoku earthquake, researchers had every reason to search GNSS data for unusual ionospheric behavior, seismic records for nucleation signatures and geodetic data for subtle deformation. Knowing the event time lets them ask high-resolution physical questions. That work can discover mechanisms. What it cannot do by itself is establish how an alarm system would have performed on March 10, when the future was still full of possible outcomes.

Mechanism discovery and prediction validation are different experiments.

Much of the public confusion around earthquake precursors comes from crossing that boundary without noticing. A paper says “an anomaly was observed before an earthquake.” A headline says “scientists find earthquake warning signal.” The first statement may be literally true. The second requires false-alarm rates, lead-time stability, generalization and a decision threshold that the paper may never have attempted to provide.

There is another word we need: forecast.

A forecast assigns probabilities. It does not say an earthquake will occur in a defined window; it says how likely different outcomes are. Modern seismic hazard and aftershock models live comfortably here. After a large earthquake, the probability of additional damaging earthquakes changes. During a swarm, short-term probabilities can change. Over decades, fault slip rates, paleoseismology and earthquake catalogs inform regional hazard.

Forecasts can be useful while remaining deeply uncertain. Building codes are built around this logic. Insurers, emergency planners and infrastructure owners do not need to know the date of the next rupture to know that some ground motions are plausible enough to design against.

The distinction between forecast and prediction is not a retreat invented after prediction failed. It reflects different kinds of information. A loaded die can be probabilistically forecast without the next roll being predictable. An earthquake process may have time-dependent rates even if no observable state variable tells us which small rupture will become the large one.

The strongest theoretical skeptical argument about prediction lives here. If earthquake rupture behaves as a cascade in a complex fault system, the eventual magnitude may not be encoded in any large, slowly developing precursor visible at the surface. A tiny nucleation may be physically similar at first to one that stops. The difference between a magnitude 2 and a magnitude 7 may emerge as rupture propagates through a heterogeneous stress field rather than being announced by a unique precursor hours earlier.

If that is correct, the dream of a universal countdown signal is not merely technologically premature. It is conceptually wrong.

But that conclusion is stronger than the data require in every case. There could still be preparatory changes that alter probabilities without determining outcomes. Fluids may migrate. Slow slip may change local stress. Electrical properties may change. The rate of small events may rise. None of those signals needs to contain a deterministic “M7 tomorrow” message to matter scientifically.

This is where precursor research often gets trapped between two audiences. To skeptics, a signal that cannot predict is dismissed as irrelevant. To enthusiasts, a signal correlated with earthquakes is promoted as a hidden predictor. Both reactions skip the middle ground where most geophysics actually happens.

A fault can prepare without confessing.

The practical standard is not whether a signal reveals the future with certainty. It is whether adding the signal improves a forecast enough to matter. Suppose a region's daily probability of a magnitude 6 earthquake is normally one in a million. After a certain multi-parameter anomaly it rises to one in ten thousand. That is a hundredfold increase and still a 99.99 percent chance of no earthquake that day. Scientifically, the signal could be extraordinary. Operationally, evacuating a city every time it appears may be indefensible.

Base rates are brutal.

Low-base-rate hazards punish mediocre classifiers. A detector can be 99 percent accurate in a colloquial sense and still generate mostly false alarms if the target event is sufficiently rare. Earthquake prediction is therefore an unusually pure example of a problem now common in machine learning. Accuracy is not enough. Precision, recall, calibration and action cost matter. A model that “detects pre-earthquake states” in a balanced research dataset may collapse when deployed into years of normal time.

This is why the denominator keeps returning.

Imagine a satellite algorithm trained on one hundred magnitude 6 earthquakes and one hundred randomly chosen quiet days. It learns to identify ionospheric patterns with 80 percent accuracy. Impressive. Now deploy it globally every hour. The planet supplies tens of thousands of non-earthquake hours for every target window. Unless the false-positive rate is extraordinarily low, alarms flood the system.

The training set hid the operational base rate.

The same can happen in human reasoning. A researcher collects twenty famous earthquakes and finds that fourteen have some reported anomaly in the preceding week. Without control weeks, that fraction means almost nothing. If similar anomalies happen on half of all weeks, the apparent precursor has little information. If they happen once every hundred years, the association is astonishing. The earthquake cases alone cannot tell us.

Prediction is therefore inseparable from negative data.

The quiet station day matters. The dog that behaved normally before the quake matters. The radon spike that went nowhere matters. The magnetic pulse during a geomagnetic storm matters. The earthquake with no optical anomaly matters. A field that archives only the extraordinary event is structurally incapable of learning specificity.

This is not unique to fringe claims. Parkfield, one of the most respectable prediction experiments ever attempted, became powerful precisely because it was defined enough to fail. A segment of the San Andreas fault appeared to produce magnitude 6 earthquakes with striking regularity. A formal expectation was built around the next event. Instruments were deployed. Time passed. The high-probability window expired. The fault remained quiet for years.

That failure did more for earthquake science than a vague success could have.

It forced the characteristic-earthquake idea into contact with an actual calendar.

Later, when the expected earthquake finally came in 2004, there was a temptation to call the prediction approximately right. Right place. Right magnitude. Wrong decade. This is exactly where a definition protects us from hindsight. A prediction with a specified time window does not become successful because nature eventually produces the kind of event expected. If your train arrives tomorrow, the timetable was wrong even if it reaches the correct station.

The point is not pedantry. Time is part of the promised information.

Public action depends on it. A thirty-year hazard forecast can justify retrofitting bridges. A one-day alert might justify closing a tunnel. A ten-second early warning can stop a train. Each information product has a different use. Confusing them produces either panic or complacency.

Earthquake early warning is especially instructive because it is sometimes advertised in ordinary language as prediction. It is not. The rupture has already started. Seismic stations near the source detect it and electronic systems transmit information faster than destructive waves travel through the crust. The system exploits a race, not foreknowledge.

That does not make it less valuable. Quite the opposite. Early warning works because its causal problem is easier. It does not need to know whether stressed rock will fail tomorrow. It waits until failure begins.

The history of earthquake prediction can therefore be read as a migration toward information products whose uncertainties are measurable: long-term hazard, time-dependent aftershock forecasts, operational earthquake forecasting, early warning. This is sometimes narrated as science giving up on the hard problem. A more generous interpretation is that the field learned to stop promising a kind of knowledge it could not score honestly.

Yet the precursor question did not disappear. It moved into specialized literatures: hydrogeochemistry, electromagnetics, satellite ionosphere studies, laboratory rock physics, machine learning. That dispersal has a strange effect. Each subfield can rediscover the excitement of prediction without carrying the full historical memory of how prediction claims failed elsewhere.

A new sensor sees an anomaly. A new algorithm separates earthquake windows from controls. The phrase “potential precursor” appears in an abstract. Sometimes that is exactly the right phrase. Sometimes it is the first step in a familiar inflation.

This book will keep one rule in place as we move among those fields: do not ask whether an anomaly is interesting and then answer whether it predicts.

Those are separate verdicts.

An anomaly can be real, causal, statistically robust and worth years of research while still failing as an alarm. A prediction method can occasionally be right for reasons that have nothing to do with its proposed mechanism. An operational forecast can be useful without identifying any precursor at all.

The words are not labels for competing camps. They are tools for not fooling ourselves.

Before we go to Parkfield, it is worth writing the hierarchy plainly.

First: did something measurable happen?

Second: was it connected to the earthquake process?

Third: did it happen before dynamic rupture?

Fourth: does it happen reliably enough, with few enough false positives, to improve a prospective forecast?

Fifth: is that improvement large enough to justify a real action?

A great deal of precursor literature establishes the first question. Some reaches the second. Much less survives the third. Very little has earned the fourth. No deterministic method has established the fifth at operational scale.

That hierarchy is not a verdict against the research.

It is the map.