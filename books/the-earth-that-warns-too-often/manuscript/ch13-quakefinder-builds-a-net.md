# QuakeFinder Builds a Net

The obvious response to Corralitos is more Corralitos.

Not another single magnetometer near another famous earthquake. A network. Many stations, spread along active faults, running for years whether or not anything happens. Enough redundancy that a truck passing one sensor does not become a crustal current. Enough quiet time that an anomaly can be compared with its own history.

That was the logic behind QuakeFinder.

The project began around 2000 and eventually operated a network of more than a hundred ground stations, with dense coverage in California and additional deployments elsewhere. Each California site included three-component induction magnetometers and supporting sensors. Stations sampled continuously, producing a data archive far larger than the handful of records that had driven earlier ULF precursor claims.

The ambition was unapologetic: look for electromagnetic changes before earthquakes.

QuakeFinder was funded outside the traditional government prediction programs, most visibly by Stellar Solutions and its founder Celeste Ford. That institutional origin mattered. It allowed a long-lived monitoring effort after mainstream U.S. seismology had become deeply skeptical of short-term prediction. It also created an obvious conflict to manage: a project organized around finding precursors has an incentive to find precursors.

The right answer to that conflict is not distrust. It is design.

Early QuakeFinder work included case reports and algorithmic searches for magnetic pulses. Like most young anomaly programs, it had to learn the difference between a pulse that looks unusual and a population-level effect. A dense network generates enormous quantities of unusual data. Lightning, switching power systems, vehicles, sensor faults, wind-driven motion and local construction all leave signatures.

The first scientific task became nuisance ecology.

Researchers characterized instrument response. They buried sensors to reduce mechanical motion. They recorded timing with GPS. They accumulated years of station history. They developed algorithms to identify short magnetic pulses and tried to distinguish local artifacts from larger-scale coherent features.

A 2019 paper by Karl Kappler and colleagues in *Computers & Geosciences* represented an important shift. Instead of highlighting one earthquake, the team analyzed temporal relationships between magnetic-field pulses and California earthquakes across a much larger data set. Their reported result suggested a modest excess of magnetic activity several days before nearby earthquakes, with statistical significance around the two-sigma range under the chosen framework.

Two sigma is exactly the kind of result that should make a scientist interested and a press release nervous.

It is not nothing. It is also not a discovery threshold in fields where multiple analysis choices are available. The right next move is replication with fewer degrees of freedom.

QuakeFinder had something most precursor groups never acquire: enough data to try.

The network also supplied an answer to a basic criticism of single-station studies. If a signal is generated over a regional crustal volume, nearby stations may observe related spectral behavior. If a disturbance is purely local—a bad cable, a nearby motor, a moving metal object—it is unlikely to appear coherently at another station tens of kilometers away.

Cross-station coherence does not prove a seismic source. Regional power systems and geomagnetic disturbances can also be coherent. But it removes a large class of local false positives.

This insight would become central in the later Google collaboration.

QuakeFinder is interesting sociologically because it occupied territory abandoned by consensus without becoming fully detached from mainstream methods. The project's website used ambitious language about earthquake forecasting, but its peer-reviewed papers increasingly emphasized effect size, statistical controls and the limitations of the findings. The 2022 study would state explicitly that the observed signal was not useful for earthquake prediction.

That sentence is evidence of maturation.

A precursor program can survive a weak effect if it is actually studying the physics. It cannot survive scientifically if every weak effect must be marketed as an imminent warning technology.

The network itself is the durable contribution.

Imagine trying to evaluate electromagnetic earthquake precursors with only national geomagnetic observatories. Those stations are designed to characterize regional or global magnetic fields, often far from active faults. A local crustal signal could be too small. QuakeFinder's stations were placed near faults at separations that made local comparisons possible.

This changes the inferential geometry.

With a pair of stations close to an earthquake, one can calculate cross-power spectra. Frequencies present coherently at both sites gain weight. Features unique to one site are suppressed. With many years of data, one can estimate how often coherent features occur during ordinary time.

The network also makes negative evidence richer. If one station sees a dramatic pulse and its neighbor does not, the event can be downgraded. If both see it and a distant geomagnetic observatory sees the same feature, the source may be space weather. If a subset near the fault sees it while remote references do not, the case becomes more interesting.

This is how instrumentation turns anecdotes into localization.

But dense networks introduce another problem: feature multiplicity.

Three components times many stations times many frequency bins times many window lengths creates a gigantic search space. A model can overfit network data more efficiently than a human can overinterpret one trace.

QuakeFinder therefore became, almost inevitably, a machine-learning problem.

This is where the history loops back to VAN. The Greek system had human experts recognizing SES and station selectivity. A modern magnetic network can replace those judgments with code, but code still contains choices. Frequency bands, thresholds, spatial radius, magnitude cutoff, declustering method, window duration, normalization and feature aggregation all act like hidden expert rules.

Automation removes one kind of subjectivity and can multiply another.

The only reliable guard is data the algorithm has never seen.

By the late 2010s, QuakeFinder possessed enough temporal depth to split its archive into earlier and later periods. That sounds mundane. It is the conceptual breakthrough.

The network also encountered an inconvenient fact: earthquakes large enough to matter statistically are rare near any particular pair of stations. Even with more than a decade of monitoring, a careful analysis might end with fewer than two dozen qualifying events. That scarcity limits model complexity. A neural network with millions of parameters would be absurd. Simple discriminants and predeclared features are often scientifically superior when the event count is tiny.

This is a case where machine-learning culture can learn from geophysics rather than the other way around.

The data set may contain billions of sensor samples and still have only nineteen independent earthquakes.

Samples are not events.

This distinction is routinely lost in AI claims. A model trained on hours of high-frequency data can appear to have enormous N, but if all those hours surround the same few earthquakes, the effective sample size for generalizing across earthquakes is small.

QuakeFinder's value lies partly in forcing that truth into view.

A useful future network would be even denser and more heterogeneous. Magnetometers alone cannot identify mechanism. Add electric-field dipoles, atmospheric electric-field mills, radon, soil gas, groundwater, broadband seismometers, GNSS, meteorology and perhaps optical monitoring. But do not feed all channels into a black box immediately.

First characterize each channel independently. Then preregister combinations.

The temptation of multimodal AI will be intense. A model can claim to discover subtle cross-sensor patterns preceding earthquakes. Without strict earthquake-level holdout, such a model is almost guaranteed to discover something.

QuakeFinder's long, somewhat stubborn history is therefore useful precisely because it makes progress look slow.

Twenty years of instruments. A modest statistical effect. No public warning system.

That can look like failure if the only acceptable result is prediction.

It looks different if the goal is to find out whether a weak electromagnetic antecedent exists at all.

The network converted the question from 'Was there a weird magnetic trace before this earthquake?' to 'Does a defined property of nearby magnetic stations change, on average, during a defined period before a defined class of earthquakes?'

That is a smaller question.

It is also finally answerable.
