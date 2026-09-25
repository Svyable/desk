# The Experiment We Have Not Run

The decisive earthquake-precursor experiment would be almost offensively uneventful.

No press conference after a spectacular anomaly. No map drawn around a famous epicenter. No special issue built from the one satellite pass that looks strange in retrospect.

It would begin on an arbitrary date.

The instruments would already be running.

Choose several tectonic regions with different geology: a continental strike-slip system, a subduction margin, an extensional province, perhaps a region with active fluids. Deploy enough stations that a local anomaly has geometry rather than anecdote. Use instruments whose ordinary scientific value justifies keeping them alive for years: broadband seismometers, GNSS, strainmeters, magnetometers, electric-field and telluric arrays, groundwater level and chemistry, radon and thoron, meteorology, atmospheric electric fields and optical cameras. Where orbital coverage permits, ingest ionospheric and magnetic data from existing satellites and GNSS TEC networks.

The point is not to build the world's largest coincidence machine.

The point is to separate discovery from scoring.

For the first phase, researchers can explore historical and early network data freely. Let them be creative. Search for electrical transients, hydrogeochemical changes, deformation patterns and cross-domain relationships. Develop mechanisms. Discover that one fault responds differently from another. Throw away bad sensors. Learn the weather. This is where scientific imagination belongs.

Then stop.

Freeze a small number of candidate models.

Each model gets a version number, an explicit target and an explicit forecast output. Not “anomaly present.” A probability or a defined alarm. The target might be magnitude 5.5 or greater within a specific spatial region over the next seven days. Another model could target magnitude 6.5 within twenty-four hours. The design can include several products if each is declared in advance.

The sensors continue streaming.

Every forecast is written to an immutable public archive before the future arrives.

The archive also records data availability, sensor-health flags and model version. If a magnetometer dies, the model does whatever its predeclared missing-data rule says. If a satellite pass is absent, no one reconstructs the forecast later using a substitute dataset. Operational inconvenience becomes part of performance because a predictor that requires perfect data is not an operational predictor.

Then everybody waits.

This is the part science institutions are bad at funding.

A five-year period may produce few target earthquakes in one region. A ten-year period may still leave wide confidence intervals for rare magnitudes. The network must survive personnel changes, grant cycles, satellite replacements and software updates. The most important product for long periods will be a database of forecasts before nothing happened.

That database is exactly what the field lacks.

The experiment should have at least three layers of comparison.

The first is a simple time-independent background based on historical rates.

The second is a strong conventional seismicity-based forecast using recent earthquakes, aftershock statistics and whatever validated geodetic information is appropriate.

The third adds the candidate precursor channels.

The scientific question is whether the third layer improves out-of-sample probability forecasts enough to justify its complexity. If it does not beat the second, the precursor measurements may still reveal physics, but they have not earned predictive status.

The comparison should be probabilistic rather than theatrical.

A model that assigns a 2 percent probability and the earthquake occurs is not “wrong” in the ordinary binary sense. Over many forecasts, well-calibrated 2 percent bins should contain events about 2 percent of the time. Proper scoring rules can reward probability estimates that become sharper without becoming overconfident.

This matters because precursor effects, if they exist, may be weak.

A radon-electric-ionospheric combination might increase the seven-day probability of a target event from 0.1 percent to 0.4 percent. That is a fourfold probability gain and still not an evacuation signal. The experiment should be capable of recognizing this as scientific information without inflating it into deterministic prediction.

Likewise, the experiment must be able to kill a method that occasionally looks spectacular.

Suppose one model gives a 90 percent alarm before a magnitude 7 earthquake and becomes an international story. If it has produced dozens of similar alarms without events, the ledger prevents the single hit from rewriting its history.

This is why public forecasts should be machine-readable.

Narratives can be edited. Rows are harder to charm.

The multi-physics network also needs a firewall between exploratory analysts and the evaluation stream. Researchers will inevitably notice interesting patterns during the prospective period. Good. Those patterns become hypotheses for the next model version or the next evaluation epoch. They do not get inserted into the current model and credited retroactively.

This is standard practice in mature prediction problems and oddly radical in earthquake precursors.

One could go further and make the experiment adversarial.

Create two teams. A discovery team develops models from the allowed training archive. An evaluation team controls the holdout period and earthquake catalog, checks implementation and publishes scores automatically. Neither team decides after an event whether a forecast “should count.” An external statistical group audits class imbalance and multiple testing.

The design sounds bureaucratic because the enemy is flexible interpretation.

Mechanism work proceeds alongside scoring. If an electrical model gains skill, geophysicists should ask whether the field geometry matches a plausible crustal source. If radon improves forecasts at one station, hydrogeologists should reconstruct fluid pathways. If ionospheric data add value only over certain faults, atmospheric and space physicists should test the proposed coupling.

Prediction success without mechanism is operationally interesting but scientifically incomplete.

Mechanism without prediction success is scientifically interesting but operationally incomplete.

The experiment should preserve both verdicts.

There is a temptation to combine every channel immediately with machine learning. Resist it at first.

Start with individually interpretable models and a small number of predeclared interactions. The purpose of the first prospective epoch is to measure whether any channel carries incremental information. A giant neural network that improves the score slightly but cannot reveal whether it used radon, local time or a station artifact will make the next physics experiment harder.

Once the pipeline is secure against leakage and the baseline is established, more flexible models can enter as competitors.

They should face the same ledger.

A modern system could also use blinded “pseudo-events” during development. Analysts receive datasets centered on many windows, only some containing real pre-earthquake periods, with locations and dates transformed. Their job is to identify candidate precursor windows without knowing the outcomes. This would expose how often human analysts can talk themselves into seeing preparation in quiet data.

It might be humbling.

Humiliation is underrated experimental equipment.

The optical part of the network should be similarly unromantic. All-sky cameras detect luminous events continuously. Automated pipelines cross-reference lightning networks, aircraft, astronomical objects and grid telemetry. The earthquake catalog is not consulted until optical events are classified. If a tectonic residue exists, it emerges after ordinary causes have been removed using rules that did not know which nights mattered.

The animal question could be attached without turning farms into superstition laboratories. Existing livestock or wildlife telemetry can supply blinded behavioral anomaly scores. Again: score first, earthquake later.

The ionosphere requires perhaps the strictest discipline. TEC and plasma models should run continuously across large regions, with solar and geomagnetic controls. A claimed pre-seismic anomaly must be defined without future data in the baseline. The Tohoku reference-curve problem should be impossible by construction.

The experiment should publish its failures prominently.

A target earthquake with no candidate precursor is scientifically valuable. A month of extraordinary-looking multi-channel behavior followed by nothing is equally valuable. A sensor artifact that initially fools the system should be preserved as a benchmark case rather than quietly removed from the narrative.

Over time, the negative library may become more useful than the positive one.

It can train future instruments and models to recognize the things the Earth does when no damaging earthquake is imminent.

There is another outcome this experiment could reveal: preparation physics without prediction.

Perhaps radon, electric fields and ionospheric parameters show small average changes before some earthquake classes, statistically robust across years, but no combination achieves useful event-level precision. That result would settle an argument that has been muddled for decades. The anomalous effects would move into ordinary geophysics. The prediction dream would narrow.

This would not be failure.

It would be one of the most valuable outcomes.

The opposite result is also possible. A small set of multi-parameter signals may improve forecasts far more than conventional seismicity alone in a reproducible way. If so, the field should say so with the same restraint. First probability gain. Then independent region. Then independent decade. Then operational experiment. No leap from correlation to evacuation map.

A real predictor can afford patience because it will keep working.

The experiment described here is expensive, but not absurd. Much of the infrastructure already exists in fragments. Seismic and GNSS networks are mature. Magnetometers, groundwater wells, meteorological stations and satellite data operate for other purposes. The largest missing piece is institutional rather than technological: a common prospective protocol that treats quiet time as data and keeps the scoring rules still.

Earthquake prediction has spent a century waiting for the Earth to reveal itself.

The more useful change may be procedural.

Stop asking the earthquake to validate the experiment after it arrives.

Make the experiment ready before the earthquake knows where it is going to happen.