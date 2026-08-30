# Predictive Policing and the Data It Creates

A map can look innocent.

A city is divided into boxes. Some are shaded more darkly than others. The darker boxes are places where crime is predicted to be more likely during the next shift. Patrol officers are told where to spend scarce time.

Nothing about the map arrests anyone.

That is precisely why the feedback problem can be easy to miss.

The map changes where police go. Where police go changes what police see. What police see becomes police data. The next map is built from that data.

The prediction helps create the evidence used to validate the prediction.

This is the structure in its cleanest form.

Suppose two neighborhoods have the same underlying rate of a low-visibility offense: open-air drug possession, minor disorder, or another activity police often discover by being physically present rather than because a victim calls for help.

At the beginning, one neighborhood receives more patrol attention for historical reasons. Officers there observe more offenses and make more arrests. The database now contains more incidents from that neighborhood.

A predictive system trains on the database.

It concludes that the neighborhood is higher risk.

More officers are sent there.

They discover more offenses.

The next round of data looks even more convincing.

Nothing in this loop requires a malicious officer, a racist programmer, or a deliberately discriminatory rule.

The loop can emerge from sampling.

That does not make the consequences neutral.

Kristian Lum and William Isaac made the problem concrete in Oakland. They compared 2010 Oakland drug-arrest data with estimates of drug use derived from a demographically representative synthetic population and the National Survey on Drug Use and Health. Their purpose was not to claim perfect knowledge of where every drug offense occurred. It was to test whether police-recorded drug incidents resembled a plausible independent estimate of drug use across the city.

They did not.

Drug arrests were heavily concentrated in parts of West Oakland and along International Boulevard, while their estimated pattern of drug use was much more broadly distributed. They then applied a predictive-policing algorithm to the police data. The resulting patrol recommendations reproduced the concentration already present in the arrest record and, in their simulation, would disproportionately expose Black residents to targeted policing relative to white residents.

The model did not invent the historical pattern.

It amplified the consequences of treating the historical pattern as ground truth.

That distinction matters.

Predictive policing is often criticized as though the central problem were simply biased code. Sometimes code can contain bias. But the more fundamental difficulty is that police data are not a census of crime.

They are a record of detected, reported, recorded, classified, and enforced events.

Those verbs matter.

A burglary may enter the database because a homeowner calls 911. A street-level drug offense may enter because an officer is present to observe it. A domestic assault may never be reported. A theft may be recorded under one category rather than another. A suspicious-person stop may generate no criminal charge but still enter another dataset. A traffic offense may be discovered wherever traffic enforcement is concentrated.

Different crimes have different observation mechanisms.

That means the police database is not one kind of measurement.

It is many kinds stitched together.

Some incidents are largely citizen-reported. Others are heavily police-discovered. Some are visible in public space. Others occur behind closed doors. Some produce strong incentives to report. Others carry fear, shame, immigration risk, distrust, or uncertainty that suppress reporting.

A predictive system that treats all recorded incidents as comparable observations can erase those differences.

The first question should therefore be simple: how did this event become data?

That question is often more important than the sophistication of the forecasting model.

Danielle Ensign and colleagues formalized the feedback problem in work on runaway loops in predictive policing. Their model distinguishes reported incidents from discovered incidents. Reported incidents can arrive without police already being in the area. Discovered incidents depend on where police are sent.

That difference is enough to create a trap.

If a system directs officers toward one area because of past discovered incidents, it receives more opportunities to discover new incidents there. The model's future sample is selected by its previous recommendation.

This is not ordinary prediction.

It is prediction under selective observation.

The algorithm does not get to see what would have happened if patrols had gone elsewhere.

That missing information is the heart of the problem.

Imagine an officer spends twenty minutes in one block and observes two low-level offenses. Another block receives no patrol during the same period and produces zero observed offenses.

The database records two and zero.

But zero does not mean nothing happened.

It may mean nobody looked.

This asymmetry turns policing into a version of a measurement problem familiar from science. You cannot compare two sites cleanly if one site receives ten times the observation effort and the observation process itself detects events that would otherwise remain unseen.

Biologists adjust for search effort when surveying wildlife. Astronomers care about telescope sensitivity. Epidemiologists worry about testing intensity. Police forecasting faces the same basic issue, except the observation mechanism is also an exercise of state power.

That last fact raises the stakes.

A patrol is not just a sensor.

It is an intervention.

Officers can deter crime, make arrests, stop people, question residents, conduct searches, issue citations, respond faster to calls, and create a visible police presence that changes behavior. The prediction therefore affects both measurement and the thing being measured.

More patrol can reveal more crime.

More patrol can also prevent crime.

Those effects run in opposite directions.

This makes outcome interpretation unusually difficult.

Suppose predicted hotspots receive extra patrol and recorded crime rises. Did the model fail because crime increased? Or did officers detect more offenses that would otherwise have gone unnoticed?

Suppose recorded crime falls. Did the model succeed by deterring crime? Or did activity move one block away? Did residents become less willing to report? Did officers spend more time on visible patrol and less time recording minor offenses?

A single incident count cannot settle the question.

This does not mean predictive deployment is useless.

The strongest counterevidence to a simplistic critique is that targeted patrol can reduce crime.

George Mohler and colleagues conducted randomized controlled field trials of dynamic predictive policing in Los Angeles and Kent. Their forecasting system generated short-term crime-risk locations that were compared with hotspot maps produced by crime analysts. In the reported trials, the algorithm predicted more crime than analyst forecasts, officers were able to spend time in the predicted boxes, and patrols directed by the algorithm were associated with reductions in crime volume as a function of patrol time.

That is real evidence that prediction can improve deployment.

It would be a mistake to erase it because feedback loops are theoretically possible.

The interesting question is what kind of crime the system predicts, what kind of data it learns from, how patrol changes observation, and how success is evaluated.

Predictive policing is not one thing.

A model forecasting burglaries from victim reports is not identical to a model forecasting drug possession from arrest records.

A model that recommends where to place patrol cars is not identical to a model that scores individuals for future violence.

A tool that updates only from externally reported incidents has a different feedback structure from one that updates from officer-discovered incidents.

Lumping them together hides the mechanism.

The second-order frame asks us to separate them.

Start with reported crime.

If residents call police after burglaries regardless of where patrol cars were previously sent, the data stream is less directly selected by the model. It can still be biased. Reporting rates vary with trust, insurance requirements, severity, language, and access. But the model's patrol decision does not fully determine whether the event enters the database.

Now consider possession offenses.

Police often discover them through stops, searches, or presence. More policing creates more opportunities to observe them. A patrol recommendation can therefore raise the measured incidence of the very offense it predicts.

The same city contains both types of data.

Treating them identically is a category error.

This is where arguments about “bias in, bias out” are too weak.

The problem is not only biased input.

The output changes the next input.

A static dataset can be audited once.

A feedback system has to be audited over time.

That means asking how exposure accumulates.

If one neighborhood receives ten percent more patrol this week, does that create five percent more discovered incidents next week? Does that raise predicted risk again? Does the loop converge, stabilize, or run away? Do independent reports counterbalance it? Does the system normalize for patrol effort? Does it preserve exploration in places with less historical observation?

These are dynamic questions.

A one-time fairness test can miss them.

A model can appear racially neutral in its features and still produce unequal exposure because geography carries the history of enforcement. It can omit race entirely and still learn from arrest locations created by decades of uneven patrol. It can pass a conventional accuracy test against police records while failing to represent underlying crime.

Accuracy against the wrong target is not safety.

This is especially important because police departments often have no complete ground-truth dataset.

Nobody observes every offense in a city.

That makes validation difficult in a way that is different from weather forecasting or manufacturing quality control. If the model predicts rain, we can later check whether it rained. If a model predicts hidden drug activity in a block that receives no patrol and no resident report, the absence of an arrest tells us almost nothing about whether the prediction was wrong.

The system receives partial feedback.

That phrase sounds technical, but the practical consequence is simple: it learns mainly from places where it acts.

Ensign and colleagues connected predictive policing to this broader problem of decision-making with limited feedback. Hiring systems observe job performance for people who were hired, not for equally qualified applicants who were rejected. Lending systems observe repayment under loans that were actually granted. Police observe discovered crime where officers were deployed.

The action determines which labels become visible.

Once you see that pattern, predictive policing stops looking like an isolated controversy and starts looking like a general problem in deployed machine learning.

A model trained on historical decisions inherits selective labels.

A model used to make future decisions creates new selective labels.

Retraining closes the loop.

There is another complication: police presence can change community behavior toward police.

A neighborhood repeatedly designated high risk may experience more stops and more scrutiny. Residents can respond by avoiding public space, changing travel, moving activity elsewhere, calling police more often because officers are nearby, or calling less often because trust deteriorates.

Those behavioral changes alter the data stream again.

The model is not merely predicting offenders.

It is changing witnesses, reporters, and observers.

This makes community trust part of model validity.

If reporting rates fall because residents expect every interaction to bring unwanted scrutiny, the apparent crime pattern can shift even while underlying harm remains unchanged. If reporting rises because patrol makes residents feel safer contacting police, recorded crime can increase even as safety improves.

More recorded crime can therefore mean worse crime, better detection, stronger trust, heavier enforcement, or some combination.

The number needs context.

This is why evaluating predictive policing only through arrest counts is dangerous.

Arrests are partly outcomes of police activity.

A department that sends more officers to a neighborhood can generate more arrests without any increase in underlying criminal behavior. If those arrests then become evidence of model success, the system can become self-sealing.

The forecast says the area is risky.

Police go there.

Police make arrests.

The arrests prove the area was risky.

The loop does not require anyone to ask whether equally intensive patrol elsewhere would have generated similar results.

That counterfactual is missing.

Randomization is one way to recover it.

The Mohler field trials are valuable partly because they did not merely compare predicted hotspots with later police data. They randomized whether algorithmic or analyst-generated patrol missions were deployed, making it possible to compare treatment conditions under realistic operational constraints.

This is a much stronger design than retrospective accuracy alone.

It treats the policing strategy as an intervention.

That lesson carries beyond policing.

When a model allocates scarce attention, randomized or quasi-experimental evaluation can reveal whether the allocation changes outcomes rather than merely predicting where outcomes are observed.

But even experiments need the right endpoints.

If extra patrol reduces burglary in one box but shifts it two blocks away, a narrow local measure overstates success. If arrests rise because detection improves, arrest count cannot be treated as harm reduction. If residents experience more intrusive contact without measurable safety gains, that cost belongs in the evaluation.

The unit of analysis matters.

So does the horizon.

Short-term deterrence can coexist with long-term mistrust. A temporary drop in recorded incidents can coexist with displacement. A model can improve patrol efficiency while concentrating burdens on the same communities repeatedly.

There is no single metric that resolves those tradeoffs.

That is not an excuse for vagueness.

It is a reason to specify objectives more carefully.

What is the system trying to reduce?

Victimization?

Emergency calls?

Serious violence?

Property loss?

Officer response time?

Arrests?

Those are different objectives.

A department can increase arrests while reducing crime. It can reduce arrests while crime falls. It can increase calls because trust improves. It can decrease calls because residents disengage.

A predictive system needs an objective closer to public safety than to its own data production process.

That sounds obvious.

Institutions often drift toward the measurable proxy anyway.

Arrests are easy to count. Stops are easy to count. calls are easy to count. Prevented crimes are not.

The event that never occurred leaves no row in the database.

This creates a deep asymmetry in prevention systems.

Failure is visible.

Success is often absence.

A burglary that happens is recorded. A burglary deterred by visible patrol is not. A shooting prevented through interruption does not produce a clean label saying “prevented shooting.” A risky block that stays quiet may look like a false positive even if patrol caused the quiet.

This resembles the clinical problem from the previous chapter.

A good intervention destroys the event the model predicted.

Policing adds the further complication that intervention can also increase detection of other events.

The system can simultaneously make one category go down and another go up.

That is why a model cannot be evaluated without a theory of how patrol affects behavior and observation.

The word “prediction” can obscure this.

A patrol map is not just a forecast.

It is a resource allocation policy.

Once officers are dispatched, the model is governing who receives state attention.

That governance can be useful. Concentrating patrol in genuinely high-risk places can reduce victimization and improve response. Hotspot policing has a substantial evidence base independent of machine learning, and dynamic forecasts may help officers anticipate changing patterns rather than relying on stale maps.

The mistake is to assume that predictive accuracy against police-generated data is enough to justify the allocation.

It is not.

A responsible system needs safeguards against self-confirmation.

One is to distinguish reported from discovered incidents and avoid treating them as equivalent evidence.

Another is to normalize discovered incidents by observation effort where possible. Ten arrests from one hundred patrol hours mean something different from ten arrests from ten hours.

Another is to preserve exploration. If a system only sends officers where it already believes crime is high, it never learns enough about areas it neglects. Some patrol capacity can be allocated in ways that allow the department to estimate what it is missing.

Another is to use independent data sources: victimization surveys, emergency medical data, community reports, insurance claims, or other measures that do not arise directly from the same patrol decisions.

Another is to evaluate outcomes through experiments or credible quasi-experiments rather than relying solely on retrospective fit.

Another is to measure costs as well as benefits, including stops, searches, complaints, displacement, and unequal exposure to police contact.

None of these creates perfect ground truth.

They make the feedback loop more visible.

There is also a temptation to solve the problem by freezing the model.

If retraining creates self-reinforcement, perhaps never update it.

That fails for a different reason.

Crime patterns change. neighborhoods change. transit changes. gangs change. housing changes. businesses open and close. policing itself changes. A model that never updates can fossilize an old city.

The problem is not learning.

The problem is learning naively from data your own decisions helped create.

That distinction will matter repeatedly in the rest of this book.

Recommendation systems learn from clicks generated by previous recommendations. Hiring systems learn from employees selected by previous hiring rules. Credit models learn from borrowers previous models approved. educational tools learn from students assigned to particular lessons. AI agents learn from environments partly shaped by prior agents.

Predictive policing is simply one of the clearest places to see the loop because the act of observing is so visible.

A patrol car turns onto a street.

That turn is a sampling decision.

It is also a social event.

People notice.

Some feel safer. Some feel watched. Some change behavior. Officers notice different things because they are there. The database changes because the officers were there. The model later treats the database as evidence about the street.

The street has become partly a product of the model's attention.

This is why the most important design question is not whether an algorithm can find patterns in police records.

Of course it can.

The harder question is whether the institution can tell the difference between a pattern in crime and a pattern in its own looking.

That distinction is the difference between prediction and self-confirmation.