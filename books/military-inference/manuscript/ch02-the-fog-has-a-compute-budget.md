# The Fog Has a Compute Budget

The oldest mistake in discussions of military intelligence is to imagine that more information steadily subtracts uncertainty.

Sometimes it does. A better map can resolve a location. Another photograph can show whether a bridge is still standing. A second independent report can make an ambiguous observation more credible. A weather forecast can narrow the range of plausible conditions. The problem is that information and understanding are not the same resource.

There are situations in which additional information makes the picture clearer. There are others in which it creates more possibilities, more contradictions, more stale assumptions, and more reasons to delay committing to an interpretation. A commander can be poorly informed because too little is known. A commander can also be poorly informed because too much has been presented without a reliable way to decide what matters.

The fog of war is not simply missing data.

It is the condition of having to act while the world remains partially unknowable, other people are trying to mislead you, your own organization is imperfect, the future has not happened yet, and even correct facts do not assemble themselves into correct meaning.

That condition survives computation.

What computation changes is how much analytical effort can be applied to it.

The Marine Corps’ command-and-control doctrine describes uncertainty and time as defining features of military decision-making. It makes a point that remains useful in an era of large models and continuous sensing: theoretically, uncertainty can sometimes be reduced by obtaining more information, but doing so costs time. The doctrine also warns that the amount of information matters less than having the right elements at the right place and time.

This is a severe sentence for the information age.

The twentieth and early twenty-first centuries built military systems capable of collecting extraordinary amounts of data. Satellites, radar, acoustic sensors, signals collection, unmanned aircraft, human reporting, logistics databases, weather services, open-source information, cyber telemetry, and operational reporting created something close to the opposite of the old scout’s problem. The challenge was no longer merely getting a report back to headquarters. It was deciding what to do with thousands of reports arriving through different systems with different latencies, classifications, error rates, and institutional owners.

The phrase “sensor to shooter” emerged because militaries wanted to shorten the path between detection and action. But the interesting middle of that phrase is often hidden. A sensor does not naturally become a decision. Evidence has to be interpreted. Something has to decide whether a signal represents an object, whether the object matters, whether the observation is current, whether it agrees with other observations, whether it fits a known pattern, whether the pattern is real, and whether the consequence of being wrong is acceptable.

Humans have traditionally supplied that middle layer.

Machine inference makes it scalable.

Imagine a headquarters receiving a large set of contradictory reports about a changing situation. A human staff has finite time. It can assign people to examine some of the reports, request clarification, compare to known patterns, and present a manageable number of interpretations. Much of the raw uncertainty disappears during the process because it has to. There is not enough attention to preserve every branch.

A machine-assisted staff can preserve more branches. It can maintain ten explanations instead of three. It can search historical records for analogous patterns. It can ask what evidence would distinguish one hypothesis from another. It can track which reports depend on the same upstream source. It can continuously recalculate confidence as new information arrives. It can run a simulation under several assumptions and show which conclusions are robust to changes in the inputs.

That is a genuine capability.

It does not remove fog. It buys more structured ways to explore it.

This is what it means to say the fog has a compute budget.

The budget is not only processors. It includes the ability to spend machine reasoning on uncertainty. One unit may afford a shallow answer because communications are weak and hardware is constrained. Another may have access to powerful models, rich data, and hours of analysis. A strategic headquarters may be able to run many more branches than an isolated tactical element. A coalition may have vast aggregate sensing while struggling to share enough data across classification and interoperability boundaries to use it coherently.

Compute changes the possible shape of thought, but only inside the rest of the system.

This is why NATO’s 2026 strategy connects inference AI at the edge to federated platforms, access control, data standards, resilient networks, and edge computing. The model is only one component. If the data cannot arrive, if it cannot be trusted, if it cannot be shared, if it is stale, or if the user cannot explain the system’s conclusion, greater model capability does not automatically create greater military understanding.

The same principle applies in reverse. A modest model embedded in a well-designed evidence system may be more useful than a powerful model isolated from reliable data and feedback.

The point can be missed because artificial intelligence is often discussed through benchmark performance. Benchmarks are valuable because they make comparison possible. They can show that a model improved at classification, planning, coding, or reasoning on a defined task. Military uncertainty is less cooperative. It is not a clean test set. The distribution changes because the adversary changes it. Missingness may be intentional. Labels may be disputed. The cost of an error may depend on context rather than average accuracy. The most important event may be the one that has no close precedent in the training data.

The system is asked to infer while the ground underneath the inference is moving.

This creates a distinction between computational uncertainty and strategic uncertainty.

Computational uncertainty concerns the model’s uncertainty about an input or prediction. It can sometimes be estimated, calibrated, or represented numerically. Strategic uncertainty includes things no model can reduce simply by running longer: political intention, future choices, hidden constraints, deception, organizational dysfunction, chance, and the fact that an adversary can choose a course precisely because it is unexpected.

A military can become very good at calculating the first while becoming dangerously confident about the second.

The risk is most obvious when precision is mistaken for knowledge. A system may output a probability to two decimal places. The number looks disciplined. It feels less subjective than a human phrase such as “likely” or “uncertain.” Yet the mathematical surface does not tell the commander whether the underlying categories were correct, whether the model’s assumptions still hold, or whether the adversary understands enough about the system to shape the evidence it receives.

Precision can be the most elegant costume uncertainty owns.

This does not mean probability is useless. Quite the opposite. Explicit uncertainty can be better than unspoken intuition. The problem is institutional. Does the organization understand what the number means? Does it preserve the path from evidence to estimate? Can somebody see that three apparently independent signals are all derived from one source? Does the confidence decline when the environment changes? Does the system know when it is outside its experience?

Those questions are part of the compute budget because answering them requires resources.

A cheap inference can be produced in seconds. A trustworthy inference may require another sensor, another model, an adversarial review, a human specialist, a historical comparison, or simply more time.

Verification latency is the distance between having an answer and having reasons to trust it.

In a commercial setting, that gap can be inconvenient. In war, it can define the architecture of command.

There will always be pressure to compress it. The system that can verify faster can act faster without accepting the same increase in risk. This is why testing, provenance, data quality, and model diversity are not merely defensive bureaucracy. They are methods of buying decision speed honestly.

A military that skips verification can appear faster for a while.

Eventually it is borrowing time from the future.

The debt comes due when a wrong inference propagates into actions that cannot be easily reversed.

Consider the difference between a reversible and irreversible decision. A logistics system reallocates some supplies based on a forecast. If the forecast changes, the allocation may be adjusted. An intelligence system prioritizes collection against one hypothesis. That too may be reversible, though time has been lost. Other decisions can cross thresholds where correction becomes much more expensive.

The sensible compute budget should therefore be consequence-sensitive.

This is an old command principle in new clothes. Militaries already vary the level of authority and review according to risk. Mission command does not mean every subordinate can do anything. It means authority is distributed within intent, responsibility, and acceptable risk. Machine inference should be governed in the same spirit. Low-consequence, high-reversibility analytical tasks can tolerate more automation and lower verification cost. High-consequence conclusions need different evidentiary standards.

The temptation will be to make one system do both because integration is convenient.

That is where the epistemic architecture becomes dangerous.

A dashboard that begins as a maintenance tool may become a source for operational planning because the data are already there. A model trained to prioritize human review may become trusted as a classifier because its recommendations looked good for months. An agent designed to summarize may begin to influence decisions because its summaries determine which facts senior leaders see. Capability can migrate without formal authorization because usefulness travels faster than governance.

The compute budget grows by accretion.

Soon the organization depends on reasoning infrastructure it never explicitly decided to treat as critical.

The physical military has learned this lesson repeatedly with communications and software. A system built as a convenience becomes a dependency. The dependency becomes infrastructure. The infrastructure becomes a target. Inference will follow the same path.

Once a commander expects continuous machine-assisted analysis, the loss of that capability is no longer a return to normal. It is degradation.

That changes resilience planning.

A force should ask not only how well its inference systems perform when everything is connected, but what happens when the compute budget collapses. Can people operate with partial tools? Are local units capable of reconstructing enough context to act independently? Does doctrine assume access to a shared picture that may disappear? Have humans practiced decision-making without the recommendation layer?

The question resembles the problem of navigation systems. A technology can improve performance so dramatically that the older skill atrophies. This is not an argument for refusing the technology. It is an argument for recognizing dependency as a military fact.

The same is true of analytical depth.

If a headquarters becomes accustomed to running hundreds of branches, what happens when communications permit only a handful? If an agent normally searches a vast repository, what happens when the repository cannot be reached? If a coalition depends on a common model but one partner loses access to the relevant data, does the shared understanding fragment?

The fog has a compute budget, and budgets can be cut by the enemy.

This is why edge inference matters conceptually. It is not simply about lowering latency. It is about preserving some ability to interpret when the network is damaged. A local system can continue to classify, compare, and recommend without constant reach-back. Yet localization creates tradeoffs. The edge has less compute, less context, fewer updates, and perhaps less ability to corroborate. It may be more resilient physically while becoming more epistemically isolated.

Resilience is not one number.

A distributed inference system can survive the loss of a central node but suffer from divergence. Different units may build different pictures of reality. That can be useful if it creates cognitive diversity. It can be disastrous if coordination depends on agreement. A centralized system can provide coherence and shared context but create a large common-mode failure.

The architecture therefore mirrors a familiar military problem: how much to centralize, how much to decentralize, and how to preserve intent when communication is imperfect.

Machine reasoning does not solve mission command. It becomes another thing mission command has to govern.

One of the more interesting possibilities is that cheap inference may improve decentralized execution rather than undermine it. Modern networks have sometimes encouraged higher headquarters to reach downward because they can see more. The “luxury of connectedness,” as recent military writing has called it, can become a form of micromanagement. If leaders believe they possess a superior picture, they are tempted to decide at a level far removed from the local situation.

Machine inference could intensify that temptation. A headquarters may have more data, more models, more simulations, and more confidence than ever before.

It could also support the opposite approach. If local elements have access to capable reasoning tools, shared intent, and bounded authority, they may be able to operate with greater independence when communications fail. The machine becomes a local staff rather than a leash connecting every decision to the center.

Which future emerges is organizational, not technical.

This is one reason the rhetoric of “decision dominance” should be handled carefully. Dominance suggests that the decision problem can be conquered. It fits military language because advantage matters and because commanders need confidence. But the danger of the phrase is that it turns uncertainty into an enemy that can be defeated rather than a condition that must be managed.

A military cannot dominate the future.

It can build a better process for encountering it.

That process should include what might be called a hypothesis reserve. Human staffs often narrow possibilities because attention is scarce. Once a working estimate forms, alternative explanations become expensive to maintain. Machine reasoning can lower that cost. A system can preserve minority hypotheses and update them as evidence changes without requiring a full team to defend each one.

This is one of the most promising uses of cheap inference because it does not demand that the machine be right. It asks the machine to help the organization avoid becoming prematurely certain.

A hypothesis reserve is valuable only if the alternatives are connected to tests. Otherwise the system simply creates imaginative noise. The important question is not “What else could be happening?” but “What evidence would we expect to see if this alternative were true?”

That shift—from answers to discriminating evidence—is where computation can attack uncertainty without pretending to eliminate it.

The system can propose what to look for. Humans can decide whether the proposed distinction matters. Sensors can be tasked, reports compared, or time allowed to reveal which explanation survives.

The process resembles science more than prophecy.

That is an important correction to the popular image of military AI as a prediction engine. Prediction will matter, but prediction alone invites overconfidence. The more robust architecture treats models as participants in a continuing contest between hypotheses and reality.

Reality gets the final vote.

An adversary, however, gets to influence the evidence before reality arrives.

That is where the compute budget becomes a battlefield.

If a force can run more hypotheses, an opponent may create more false ones. If a force uses more sensors, an opponent may generate more misleading signatures. If a model learns from patterns, an opponent may behave in ways designed to exploit those patterns. If a headquarters rewards fast consensus, an opponent may feed it evidence that produces exactly the kind of consensus it prefers.

The value of additional inference therefore depends on the quality of the evidence environment.

This is another way cheap reasoning can move scarcity rather than eliminate it. As machine analysis becomes abundant, trustworthy contact with reality becomes more valuable. Independent sensors, physical inspection, authenticated provenance, reliable human reporting, and feedback from actual outcomes gain importance because they provide something computation cannot manufacture: constraint.

A model can generate another explanation.

Reality can tell you that the bridge is gone.

The strategic implication is that future militaries may invest enormous computational resources not to know everything but to improve the rate at which bad beliefs die.

That is a less glamorous ambition than omniscience.

It is also more attainable.

The force with the larger compute budget may be able to ask more questions. The force with the better epistemic architecture may be able to abandon wrong answers sooner.

Those are not the same advantage.

The rest of this book is largely about the difference.
