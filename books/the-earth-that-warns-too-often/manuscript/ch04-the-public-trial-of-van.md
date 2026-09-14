# The Public Trial of VAN

Scientific disagreement is usually distributed. A paper appears. A reply follows months later. Different groups publish incompatible results in different journals. The argument becomes visible only to specialists willing to reconstruct it.

The VAN dispute briefly became something else: a public trial inside the literature.

In 1996, *Geophysical Research Letters* published a concentrated series of papers examining the Greek earthquake-prediction method. The issue is worth reading not because it settles the matter—it did not—but because it exposes nearly every difficulty that still haunts anomaly research: ambiguous scoring, moving thresholds, clustered events, mechanism arguments, selective records, adversarial statistics, and the problem of deciding when a weak physical effect has become an operational claim.

David Jackson's contribution was devastating in its simplicity. Before debating whether VAN's claimed success rate was statistically significant, he asked whether the method had been specified well enough to evaluate at all.

For a binary alarm method, he wanted five things. First, a quantitative definition of the observable that turns the alarm on. Second, a quantitative statement of the predicted time, location and magnitude. Third, a complete record of previous alarms. Fourth, a complete record of predicted earthquakes. Fifth, a complete record of earthquakes that occurred without prediction.

This sounds bureaucratic until one tries to score a real prediction history.

Suppose a telegram says an earthquake with magnitude around six is expected in western Greece. How wide is 'western Greece'? How wide is 'around six'? How long does the warning remain valid? If a magnitude 5.4 event occurs ten days later at the edge of the region, is that success? If a magnitude 6.2 occurs twenty days later, does the alarm still count? What if the target event is part of a sequence? What if multiple candidate regions were named?

Any one of these choices may be defensible. The statistical problem is that the choices cannot be made after the event without paying a penalty.

Jackson concluded that VAN was not yet stated as a sufficiently testable hypothesis. He also offered plausibility criteria. A proposed precursor should have a reasonable relation between source and observation. It should connect to stress, strain or some process related to earthquakes. And, absent a compelling reason otherwise, one would expect related effects to occur during the earthquake as well as before it.

Varotsos, Lazaridou and Hadjicontis replied directly. They argued that most magnitude, distance and time tolerances had been published before the prediction interval under debate. They rejected Jackson's portrayal of the criteria as undefined and insisted that station selectivity and physical work on SES satisfied the plausibility requirements.

The exchange did not reduce to one side understanding statistics and the other refusing them.

Philip Stark examined statistical significance. Yan Kagan emphasized the ambiguity in classifying which earthquakes had been successfully predicted and whether rules had been changed retrospectively. Other authors used different null models, alarm regions and catalog treatments. VAN's defenders argued that some evaluations overestimated alarm space or used inappropriate assumptions about earthquake occurrence. Aftershocks became a surprisingly important issue because earthquake catalogs are not bags of independent random points.

This is the technical heart of the matter.

If earthquakes followed a simple Poisson process with a constant rate, calculating chance success for a prediction system would be relatively straightforward. But earthquakes cluster. A large event changes the probability of later events. Aftershocks crowd space and time around the mainshock. Fault segments have different background rates. A prediction method that tends to issue alarms during active sequences can look unusually successful if the null model assumes independent events.

Conversely, aggressively declustering the catalog can remove events a predictor claims as legitimate targets. The choice of null is not neutral.

The same problem appears today in machine learning for earthquakes. A model trained and tested on randomly split examples can leak information because earthquakes from the same sequence appear in both sets. A proper temporal split or sequence-level separation is harder but more realistic. The vocabulary changed. The structure did not.

Kagan's 1996 reflections make another point that remains underappreciated: one needs a general evaluation strategy, not a bespoke statistical duel for every new precursor. If each group invents its own scoring method after making a claim, the literature becomes a collection of incomparable victories.

Prediction science needs something closer to metrology.

Metrology sounds dull because it is supposed to. A meter does not change length depending on which laboratory prefers the result. Earthquake prediction needed standardized definitions of alarm duration, spatial coverage, target magnitude, missed events and false alarms. Without them, even honest researchers can talk past each other.

The VAN debate also revealed a conflict between physical and statistical evidence.

Supporters could reasonably argue that a purely statistical evaluation might mishandle a physically selective network. If the crust channels electric currents along conductive structures, the sensitivity region of a station need not be circular. A critic who draws simple radius-based alarm zones could misrepresent the method. But once station selectivity maps are allowed, those maps become part of the model and need independent validation.

This is where physics can either constrain freedom or create it.

A conductivity model derived independently from magnetotelluric surveys could predict how signals should propagate from source regions to stations. That would reduce degrees of freedom. An empirically hand-drawn selectivity map derived from the same earthquake record being scored does the opposite.

The difference is not philosophical. It is testable.

The 1996 issue also showed how difficult it is to evaluate expert signal recognition. If SES are identified partly by waveform morphology, amplitude relations among dipoles and a researcher's knowledge of station behavior, then the signal-extraction step itself contains judgment. Statistical scoring that starts after those signals have been selected treats the hardest part as fixed when it is not.

A blind signal-recognition challenge would have been revealing. Give VAN and independent groups unlabeled records from periods containing earthquakes, industrial transients and quiet time. Ask each group to identify SES using written rules. Compare agreement. Then reveal the earthquake catalog. If the groups cannot agree on which signals are SES without knowing the outcomes, the prediction problem is premature.

To my knowledge, no decisive test of that exact form ended the controversy.

Instead, the debate migrated. VAN researchers continued developing the method and later emphasized concepts such as SES activities and natural time. Critics continued to view the prediction record as unconvincing. The broader seismological community moved toward probabilistic forecasting, hazard assessment and eventually earthquake early warning rather than short-term deterministic prediction.

There is a sociological temptation here: declare the losing side a pseudoscience and the winning side a closed establishment. Neither description is useful.

The VAN group published in mainstream geophysical journals and answered critics in detail. That matters. It distinguishes the episode from claims that survive only by avoiding scrutiny. But publication does not equal validation. A controversial method can remain scientifically interesting for decades without becoming operationally credible.

Likewise, mainstream skepticism was not a refusal to study electromagnetic effects. Researchers at USGS, Stanford and elsewhere made long-term electric and magnetic measurements near faults. Parkfield became a deliberately instrumented test. The famous Loma Prieta ULF claim was revisited with more data. France launched DEMETER. The question received instruments, not just dismissals.

The important divide was increasingly methodological: case stories versus prospective tests.

A case story is necessary when a phenomenon is new. The Corralitos magnetometer did something unusual before Loma Prieta. That is enough to justify looking. It is not enough to justify warning. A prediction method must convert the case story into a rule that can lose.

The word 'lose' matters.

An honest hypothesis needs a future that embarrasses it. If VAN says a station's SES activity should be followed by a magnitude-six earthquake in a particular region within a particular window, then quiet passage through that window counts against the method. If a large earthquake occurs in the station's sensitivity region without SES, that also counts. The method may allow some misses and false alarms; no real detector is perfect. But the permitted error rates have to be stated before the events.

This seems obvious now partly because several sciences went through replication crises that formalized the problem. Registered reports, preregistration, held-out data and blind analysis are all ways of forcing a theory to encounter the future rather than continuously editing the past.

VAN's telegrams were an early, imperfect version of that impulse. They timestamped the claim. The 1996 critics demanded the rest of the machinery.

There is another reason to dwell on this old argument. Modern anomaly research often has better sensors and worse search spaces.

A 1980s Greek station might have a handful of electric channels. A modern satellite measures plasma density, temperature, magnetic field, electric field, energetic particles and wave spectra across thousands of orbits. A machine-learning pipeline can generate thousands of features. That abundance feels like progress. Statistically, it can become an anomaly factory.

The same five questions Jackson asked VAN still apply. What observable triggers the alarm? What exactly is predicted? What were all prior alarms? What events were captured? What events were missed?

A neural network does not make those questions obsolete. It can make the first one harder to answer.

The public-trial format also exposes an ethical problem. If a group believes it can predict earthquakes, when should it warn authorities?

Waiting for perfect scientific consensus can be irresponsible if the signal is genuinely strong. Issuing warnings on weak evidence can also kill people indirectly by producing panic, costly evacuations or alarm fatigue. The acceptable threshold depends on the cost of action, the specificity of the prediction and the credibility of the signal.

A warning to inspect emergency supplies can tolerate more false positives than an order to evacuate a city.

This decision-theoretic perspective was not the center of the VAN technical debate, but it lurked underneath. The method was not being proposed merely as a new laboratory effect. Its value proposition was social.

That is why prediction standards need to be designed backward from decisions.

A scientist can report a likelihood ratio without telling a mayor what to do. A public agency can combine that ratio with building vulnerability, time of day, weather, evacuation feasibility and expected losses. The mistake is to demand that a raw precursor carry all of those burdens itself.

This is also where the binary language of 'earthquake prediction' can distort research. A weak but reproducible electromagnetic antecedent could improve probabilistic forecasts without ever supporting a deterministic alarm. If a feature raises the short-term probability of a local magnitude-five-or-greater earthquake from one in a million to two in a million, the relative change is impressive and the operational value is negligible. If it raises the probability from one percent to twenty percent, the same type of feature becomes socially important.

Effect size and base rate decide.

The VAN controversy often became trapped in the question of whether the method 'worked.' A better decomposition is possible.

Are the candidate SES physically real signals rather than cultural or instrumental noise?

Do they occur more often before earthquakes than during matched control periods?

Is the association stable out of sample?

Can the spatial mapping be predicted independently?

Does the signal improve an existing seismicity-based forecast?

Can it estimate magnitude, location and time with enough information to change decisions?

Each question can have a different answer.

This decomposition is the book's basic discipline. It keeps us from asking a small anomaly to become a prophecy.

The 1996 debate did not resolve the first question cleanly enough to reach the last one. But it gave later researchers a gift: a catalog of ways not to evaluate rare-event signals.

Avoid vague alarms. Preserve the full record. Declare tolerances. Control aftershocks. Separate training from testing. Do not let mechanism stories substitute for prediction skill. Do not let a failed prediction system prove that every underlying physical effect is absent.

Those rules will return when we reach California.

They will matter even more when Google enters the story.
