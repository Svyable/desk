# Forty Minutes over Tohoku

At 14:46 local time on March 11, 2011, the plate boundary east of Japan ruptured on a scale that made ordinary language feel insufficient.

The magnitude 9 Tohoku-Oki earthquake displaced the seafloor, generated a catastrophic tsunami and killed thousands. It also occurred beneath perhaps the most scientifically observed tectonic region on Earth. Japan's dense geodetic networks had been watching the crust before the event. Afterward, their records became a mine.

Kosuke Heki went looking in the sky.

Using data from Japan's dense GPS network, Heki reported an increase in ionospheric total electron content beginning about forty minutes before the earthquake. In his 2011 *Geophysical Research Letters* paper, the enhancement reached close to ten percent of background TEC and appeared spatially concentrated around the focal region. He also looked at several other very large earthquakes and argued that related pre-seismic enhancements appeared before the 2010 Chile earthquake and possibly before the 2004 Sumatra-Andaman and 1994 Hokkaido-Toho-Oki events.

The claim was unusually sharp for earthquake precursor research.

Forty minutes. A mapped spatial pattern. A magnitude dependence. Public raw data that other scientists could examine. Heki explicitly presented the result as an objectively testable hypothesis and raised the possibility that at least magnitude-9-class earthquakes might not be inherently unpredictable.

This was not a dog acting strangely or a witness remembering a glow.

It was a quantitative claim sitting inside a mature measurement system.

That is exactly why the subsequent argument matters.

The first thing to understand is that Tohoku definitely disturbed the ionosphere. This is not controversial. Once rupture occurred, enormous ground and ocean motions launched waves into the atmosphere. Researchers using GPS observations documented traveling ionospheric disturbances associated with seismic and tsunami waves. The ionosphere became, in effect, a remote screen on which the earthquake's aftermath was projected.

The dispute concerns the part before 14:46.

To infer a pre-event enhancement, one must estimate the background TEC trend. Heki used fitted reference curves. Critics argued that the apparent enhancement depended strongly on how those curves were constructed and that the large post-earthquake ionospheric disturbance contaminated the fit.

The technical issue can sound minor: polynomial degree, fitting window, reference trend.

It is not minor.

Imagine a time series that rises gradually before an earthquake, then changes sharply afterward because acoustic-gravity waves arrive. To decide whether the pre-event portion is “enhanced,” you fit a smooth curve representing what would otherwise have happened. If the post-event data influence the curve, the fit can bend in a way that makes the earlier segment sit artificially above it. Change the polynomial or the time window and the pre-event anomaly changes.

In 2021, Eisenbeis and colleagues made this criticism explicit. They tested the method's sensitivity to the reference curve and used synthetic examples to show that a pre-event enhancement could be generated even when the input contained no actual precursor. Their conclusion was that the reported TEC enhancement was likely an artifact.

The disagreement is unusually instructive because both sides can point to the same raw data.

This is not a fight over whether the receiver recorded a number. It is a fight over the counterfactual.

What would TEC have been at 14:20 if the earthquake had not happened at 14:46?

Nobody knows. The baseline model supplies the answer. If different reasonable baselines produce opposite conclusions, the precursor is not robust enough yet.

This is a modern version of an old problem. Historical observers disagree about whether a light preceded shaking because human timing is poor. Here the clocks are perfect. The ambiguity has moved into mathematics.

That move can create false confidence. A plot with a fitted line looks objective in a way an eyewitness account does not. But a fit encodes choices. The analyst decides the interval, functional form, outlier handling and which post-event data remain in the estimate. When the event time is known, those choices are vulnerable to unconscious tuning.

This does not mean Heki's analysis was careless or that every pre-seismic TEC result is invalid. It means the strongest version of the hypothesis requires a prospective algorithm.

The algorithm should process TEC in real time without knowing whether an earthquake will occur. It should issue an anomaly score continuously. It should not refit the pre-event history after rupture. Space-weather controls should be applied automatically. Every anomaly above threshold should be logged, including the thousands that may lead to nothing.

Then the forty-minute claim becomes a prediction problem rather than a curve-fitting debate.

There is a deeper physical question too. If the ionosphere really changes forty minutes before a magnitude 9 rupture, what source can create the effect?

The nucleation process of a giant earthquake is occurring tens of kilometers below the seafloor. The claimed ionospheric anomaly is hundreds of kilometers above. A mechanism must connect them fast enough and with enough energy or electric potential to alter electron content measurably over a large region.

Various coupling pathways have been proposed: stress-activated currents, atmospheric ionization, electric fields, aerosols, gravity waves. Each has scaling problems. A mechanism that works over land may behave differently under ocean water. Seawater is conductive. The focal region is offshore. The spatial footprint is large.

The physical challenge is valuable because it can make the hypothesis vulnerable.

If a proposed crustal electric field would be shorted by the ocean, that mechanism weakens. If the required atmospheric current exceeds plausible source budgets by orders of magnitude, it fails. If a gravity-wave pathway cannot precede rupture because the necessary surface motion occurs only after it, it fails. The precursor claim becomes stronger when it survives mechanisms being killed.

Too often anomalous research proceeds in the opposite direction. A signal is reported, and mechanisms accumulate around it. Radon could do it. Positive holes could do it. Aerosols could do it. Each additional possibility makes the anomaly feel more plausible while making the theory less constrained.

A good mechanism narrows the world.

The magnitude dependence in Heki's result is another point of tension. It is physically reasonable that only the largest earthquakes produce an ionospheric precursor strong enough to see. Large ruptures involve larger fault areas and perhaps larger preparation zones. But a magnitude dependence discovered in a tiny set of giant earthquakes is statistically fragile. There simply are not many magnitude 9 events in the high-quality GNSS era.

A sample of four is not made large by the size of the earthquakes.

This is one of the cruelties of geophysics. The events capable of producing the clearest signal are the ones least available for replication.

One can respond by lowering the magnitude threshold and analyzing many magnitude 6 and 7 earthquakes. If the effect disappears, the proponent can say the events are too small. That may be true. But now the hypothesis becomes difficult to test within a human timescale. If only a handful of global earthquakes qualify, every analysis choice carries enormous weight.

The obvious solution is patience plus automation.

Freeze the algorithm now. Run it for decades. Use global GNSS networks. Publish the alarm stream. When the next giant earthquake occurs, nobody will need to reconstruct what the method would have said.

That experiment is possible.

It is also institutionally unattractive. Careers, grants and satellite missions run on shorter cycles. A twenty-year prospective validation can outlive the team that designed it. This mismatch between scientific timescale and institutional timescale is one reason rare-event fields accumulate retrospective evidence.

There is another way to gain samples: test non-earthquake anomalies.

If the proposed precursor has a distinctive morphology, search historical TEC data blindly for that morphology and inspect what follows. Do not start from earthquake times. Start from signal times. The result may reveal that “Tohoku-like” enhancements happen frequently during ordinary space-weather conditions. Or it may show they are extraordinarily rare and disproportionately precede giant earthquakes.

This anomaly-first analysis is the counterpart of the lesson from Corralitos.

The famous event should not choose the data.

The Tohoku debate also exposes how scientific disagreement gets flattened in public. A paper reports a precursor. Years later, another paper calls it an artifact. The popular story becomes either “scientists discovered an earthquake signal” or “the signal was debunked.” Both are too neat.

The original paper did something valuable even if the artifact critique is correct. It proposed a concrete, reproducible method and a claim strong enough to attack. The later paper did something equally valuable: showed that a key analysis step could manufacture the effect. The field learned exactly where the hypothesis is fragile.

That is progress.

The uncomfortable part is that the final answer remains open in a broader sense. The failure of one TEC baseline method does not prove the ionosphere never responds before earthquakes. Other statistical studies using satellite data have reported pre-seismic density changes under certain conditions. Some will survive; some will not. Tohoku is a battle over one of the strongest individual cases, not a universal theorem.

The right conclusion is therefore narrower than either camp's slogan.

A forty-minute pre-Tohoku TEC enhancement has not been established as a robust earthquake precursor. The reported signal depends strongly enough on reference construction that an artifact explanation is serious and, in the 2021 critique, compelling.

That sentence still leaves an enormous research program alive.

It leaves open whether other ionospheric parameters carry weak statistical information. It leaves open whether certain geological settings produce stronger coupling. It leaves open whether future satellites with better spatial and temporal coverage can separate seismic effects from space weather prospectively.

What it closes is the easy path from one beautiful plot to an earthquake warning system.

There is something almost cruel in the timing. Forty minutes is exactly the kind of lead time people want. Long enough to stop trains, move surgeries to safer phases, shut gas, open firehouse doors, move away from tsunami zones and interrupt dangerous industrial operations. Not enough for mass evacuation, perhaps, but enough to matter enormously.

A real forty-minute predictor for magnitude 9 earthquakes would be among the most consequential geophysical discoveries of the century.

That consequence raises the burden of proof, not because extraordinary claims require ritual skepticism, but because a false alarm system at that scale also has consequences.

Japan already has earthquake early warning that can provide seconds after rupture begins. Tsunami warning can follow rapidly. A pre-rupture ionospheric alarm would sit upstream of both. If false positives were frequent, operators would learn to ignore it. If the alarm threshold were raised to avoid false positives, it might miss the only events that matter.

Operational value is a narrow channel between panic and silence.

The Tohoku TEC controversy has not navigated it.

What it has done is reveal how close modern precursor science can come to looking decisive. Dense network. Quantitative signal. Immediate lead time. Spatial correspondence. Magnitude scaling. Peer-reviewed publication.

And still the entire claim can turn on how a curve is drawn through the background.

This is why prediction science has to be designed backward from the future evaluation.

The next earthquake should not be allowed to choose its own baseline.