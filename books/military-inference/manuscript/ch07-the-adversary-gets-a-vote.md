# The Adversary Gets a Vote

Every model of war contains another mind.

Sometimes the model hides this fact. A map can make the battlefield look like terrain plus symbols. A logistics forecast can make the campaign look like consumption rates and transport capacity. A sensor network can make it look like a problem of detection. But the other side is not weather. It watches, learns, chooses, withholds, improvises, lies, panics, adapts, and occasionally does something that makes no sense until the assumptions behind its behavior are understood.

This is why military prediction is different from forecasting a river.

The river does not read your forecast.

The adversary can.

The phrase “the enemy gets a vote” survives because it captures something doctrine cannot engineer away. Plans create intention. Contact creates revision. The other side’s actions change what is possible and what is sensible. Every advantage contains a response.

Machine inference does not remove that vote. It may give the adversary more places to cast it.

A force that increasingly relies on computational classification, data fusion, prediction, and decision support exposes more of its understanding process to deliberate manipulation. The attack surface is not only the model in a technical sense. It is the whole evidence environment around the model.

What does the system expect to see?

What does it treat as suspicious?

What does it ignore?

How quickly does confidence rise?

Which sources are trusted?

What patterns cause a human to be interrupted?

Which anomalies are dismissed as noise?

Those questions describe a military system from the adversary’s point of view.

War has always included this perspective. Deception doctrine explicitly aims at adversary decision-making. The point is not merely to hide an object. It is to shape what the other side believes strongly enough that behavior changes. Historical military deception is full of efforts to reinforce existing expectations, create false alternatives, draw attention toward one area, or delay commitment through ambiguity.

Operation Fortitude before the Normandy landings remains famous because it did not depend on one trick. The Allied deception constructed a larger story that fit German expectations about where the main invasion might occur. False formations, controlled agents, signals, and other evidence contributed to a picture that the German command had reasons to believe. The deception mattered because it entered an existing intelligence process.

The important lesson is not a particular technique from 1944.

It is that successful deception often collaborates with the target.

The target brings priors.

The target brings doctrine.

The target brings institutional habits, fears, and preferred explanations.

The deceiver tries to make the false story easier to believe than the true one.

Machine inference does not eliminate those priors. Models have them too, though they are encoded differently. Training data, system design, labels, prompts, thresholds, evaluation sets, retrieval sources, and user expectations all shape what the system considers normal. A model deployed inside an institution also inherits the institution’s priors because humans decide what to ask and what to trust.

The adversary can therefore aim at the relationship between machine priors and human priors.

This is more subtle than “fooling AI.” The popular image of adversarial machine learning often involves a strange input designed to cause a classifier to make a mistake. Such examples are useful demonstrations of technical fragility, but military counter-inference can be broader. The goal is not necessarily to make one algorithm produce one wrong label. It is to make the opposing organization build the wrong model of the situation.

That can happen with entirely plausible evidence.

A force may behave in a way that reinforces what the opponent already expects, then depart at the moment when the expectation has become organizationally entrenched. It may create a pattern that encourages the opponent to allocate sensing and analytical attention away from the important question. It may exploit the fact that an automated system rewards consistency by producing evidence that is consistent for the wrong reason.

The target is belief formation.

This makes military inference recursive.

One side is not only asking, “What is the adversary doing?”

It is asking, “What does the adversary think we are doing?”

Then, “What does the adversary think we think they are doing?”

Human strategists have always entered this hall of mirrors. Machine reasoning makes it cheaper to explore the mirrors without making them less dangerous.

A model can generate many interpretations of adversary intent. An agent can simulate how a particular signal might be read. A red-team system can search for ways a plan reveals assumptions. These tools can improve anticipation.

They can also create confidence about mental states that are fundamentally difficult to observe.

Intent is not a sensor reading.

This is one of the places where the inference age risks confusing computational abundance with epistemic access. More models can produce more narratives about why an adversary acted. The narratives may be internally coherent and mutually incompatible. The organization still has to decide how much weight to place on each.

The adversary can exploit that ambiguity by remaining deliberately interpretable in several ways.

Ambiguity is often treated as something intelligence should reduce. It can also be a strategic asset. A posture that supports multiple plausible intentions forces the opponent to divide attention and maintain branches. The cost is not only uncertainty. It is the resources required to manage uncertainty.

This is why the previous chapter’s hypothesis reserve has an adversarial counterpart.

An opponent can try to populate it for you.

If your system is designed to maintain many plausible explanations, the adversary may benefit from making many explanations remain plausible. If your system escalates anomalous patterns to human review, the adversary may create a steady stream of anomalies. If your collection plan seeks evidence that distinguishes A from B, the adversary may provide evidence consistent with both.

The inference system becomes a resource that can be taxed.

This does not mean deception becomes easy. Sensor diversity and data fusion can make some deceptions much harder. Commercial imagery and ubiquitous observation reduce the ability to conceal certain kinds of activity. Models can detect subtle inconsistencies across large datasets. Machine reasoning can help identify when a story is too coherent or when several signals share suspicious timing.

The contest is dynamic.

Better inference creates better counter-inference, which creates demand for better verification.

This is analogous to other adversarial digital systems. Spam filters improve; spam changes. Fraud detection improves; fraud changes. Malware defenses improve; attackers change behavior. The defensive model is not solved once because the opponent learns from what gets blocked.

Military systems add two complications.

First, the adversary may accept physical costs to create a misleading picture. A commercial fraudster usually wants to avoid losing money. A military may deliberately sacrifice assets, reveal information, or endure local disadvantage if doing so changes the opponent’s larger decision.

Second, the defender cannot observe the full distribution of attempts. A successful deception may never be recognized as deception. The data used to improve the system are therefore biased toward detected failures.

This creates a learning problem.

A force may become highly confident because its counter-deception system performs well against the techniques it knows to test. The unknown techniques remain absent from the evaluation set precisely because they are unknown.

The adversary gets a vote in your benchmark too.

This is one reason realistic evaluation matters. A model tested only on static datasets learns nothing about opponents adapting to it. A command system tested only with reliable communications learns little about degraded environments. A decision-support tool evaluated by whether users complete tasks faster may miss the more important question of whether it changes how they behave when it is wrong.

Military testing has always tried to approximate operational conditions, with imperfect success. AI increases the importance of adversarial realism because system behavior depends heavily on data and context.

The relevant test is not “Does the model work?”

It is “How does the sociotechnical system behave when a competent opponent is trying to make it fail?”

That includes the human response.

Suppose a model has a known tendency to become uncertain under a class of conditions. Operators may learn to compensate. They may seek more evidence, switch tools, or rely on local judgment. The combined system is more robust than the model alone. But an adversary may instead aim for the opposite failure: make the model extremely confident in a way that aligns with the operator’s expectation.

People are often more vigilant when machines look confused than when machines look certain.

Confidence can therefore become the attack surface.

A system that knows when it does not know is valuable. A system that is confidently wrong is dangerous. The adversary’s ideal outcome is not necessarily a broken model. It is a functioning model producing the wrong degree of confidence.

This is why calibrated uncertainty belongs in military security.

Traditional cybersecurity asks whether an adversary gained unauthorized access, changed data, or disrupted a service. Those questions remain essential. Counter-inference adds another: can an adversary shape the conclusions of an authorized, uncompromised system without ever violating its technical boundaries?

If so, the system is secure in one sense and defeated in another.

Military deception has always exploited that distinction. The enemy does not need to hack a commander’s brain. It needs to present evidence that causes the commander to decide badly.

Machine systems make the process more legible because some of the decision machinery is encoded. That can help defenders. Thresholds can be tested. Models can be red-teamed. Provenance can be checked automatically. An organization can deliberately search for conditions under which the system produces overconfidence.

But legibility also creates the possibility of optimization by the opponent if enough is learned about the system.

This creates tension with transparency.

Responsible AI rightly values traceability and understandable system behavior for users and overseers. Military security may require limiting how much of that behavior is exposed to adversaries. The same system needs internal transparency and external uncertainty.

This is not a new problem. Militaries have always tried to make command intelligible to themselves and less intelligible to opponents.

Inference systems inherit that requirement.

The challenge extends to models trained on open information. Public doctrine, organizational charts, speeches, budgets, exercises, procurement notices, and social media can reveal how a force thinks. This has always been true. Machine reasoning makes it easier to synthesize enormous quantities of open information into models of institutional behavior.

The adversary has cheap hypotheses too.

It can run agents against your public footprint. It can compare years of statements. It can identify recurring language, priorities, and assumptions. It can simulate likely interpretations of a signal. It can search for institutional seams where one organization expects another to act.

The result is symmetrical pressure toward epistemic camouflage.

A military may decide that concealing intentions is not enough. It may want to conceal how it forms beliefs.

This can collide with democratic accountability. Public institutions need oversight. Procurement and strategy need debate. Responsible AI requires governance and auditability. A military cannot simply declare its reasoning system secret and treat secrecy as security.

The balance will be difficult because some of the most important vulnerabilities are organizational rather than technical.

If every commander is taught to trust one dashboard, that fact can matter to an adversary even if the dashboard’s code is perfect. If every staff uses the same model to summarize intelligence, the model’s framing becomes a common dependency. If doctrine rewards rapid convergence on one shared picture, an adversary may focus on corrupting the picture rather than attacking individual units.

This is inference monoculture as strategic vulnerability.

The obvious response is diversity.

But diversity is not free. Different models and methods complicate interoperability. They produce disagreements that somebody must resolve. They require more evaluation and maintenance. A force with five independent analytical systems may be more robust and slower to integrate than one with a single standard system.

The tension resembles biological defense. Monocultures are efficient and vulnerable. Diversity is resilient and costly.

The inference-age military will have to decide where diversity is worth the friction.

High-consequence assessments are an obvious candidate. An organization may deliberately require independent analytical paths before certain decisions. One model family may produce a judgment while another challenges it. Human analysts may be asked to form an assessment before seeing the machine result to preserve some independence. Sources may be separated to test whether conclusions converge without shared inputs.

The purpose is not to create ritual disagreement.

It is to make deception more expensive.

An adversary that can fool one sensor, model, or institutional assumption should not automatically fool the entire force.

This is how the statement “the adversary gets a vote” becomes architectural. The system is designed with the expectation that some evidence will be shaped by a hostile mind.

That expectation changes what counts as robustness.

Accuracy in a benign environment is not enough.

Speed in a benign environment is not enough.

Agreement in a benign environment is not enough.

The system has to survive an opponent who watches what it values and changes behavior accordingly.

One way to formalize that expectation is to separate **environmental reliability** from **adversarial reliability**. A sensor or model can perform extremely well when the world is not trying to fool it. That is useful. It does not tell the institution how quickly performance deteriorates when an opponent changes behavior deliberately.

The gap between the two reliabilities is itself a strategic property.

Some systems may have modest baseline accuracy but degrade gracefully under manipulation. Others may be excellent until a narrow assumption is violated, then fail sharply. The second can look superior in ordinary testing and become more dangerous in war.

Evaluation should therefore ask about the **shape of failure**, not only average performance.

Does confidence fall before accuracy collapses?

Does disagreement among components increase when the environment becomes adversarial?

Does the system surface novelty?

Can humans recognize the transition?

A system whose uncertainty rises as it enters danger gives the institution a chance to respond.

A system that remains smooth until the cliff does not.

The adversary can also learn from the force’s corrective behavior. Every time a deception is discovered, defenders change procedures. Those changes can reveal which part of the story failed. An adaptive opponent watches the repair.

This creates **second-order adaptation**.

The force does not merely learn from the adversary.

The adversary learns from the force learning.

Military inference needs to preserve enough variation that one defensive lesson does not become a permanently exploitable rule. If a discovered deception always causes the same collection response, the response itself becomes predictable. If one class of anomaly always triggers one model family, the attacker may begin shaping the anomaly around the model.

The solution is not arbitrary randomness. It is **adaptive defense with audit**.

The institution changes procedures based on evidence while periodically asking whether the new procedure has become too legible or too dependent on one assumption.

This resembles security engineering more than traditional static doctrine.

There is also the problem of **strategic mimicry**. As inference systems become good at recognizing known patterns, an adversary may not need to hide. It can behave enough like a familiar category that the system assigns the wrong meaning. The danger is not one false pixel or one malicious packet. It is the exploitation of classification itself.

Every category creates a boundary.

Boundaries can be inhabited.

The force therefore needs to know which categories are consequential enough that classification should remain contestable. A low-stakes maintenance label can be automated confidently. A high-consequence interpretation of intent should retain more room for alternative framing.

This is another reason to separate observation from meaning structurally.

The same movement can support several intentions.

The same communications pattern can have several causes.

The same absence can mean concealment, inactivity, failure, or irrelevance.

A classification system that turns the ambiguous world into one ontology may become highly efficient and strategically narrow.

Ontology itself becomes part of the contest.

What kinds of things can the system imagine?

What distinctions does it encode?

What behaviors get collapsed into the same label?

An adversary benefits from living in the distinctions the ontology erased.

This suggests **ontology red teaming**.

Instead of asking only whether the model labels examples correctly, ask which strategically different situations receive the same label. Ask which categories are artifacts of our doctrine rather than properties of the world. Ask what an opponent could do that remains technically inside a familiar category while carrying different intent.

This is a safe and high-level use of adversarial thinking because the target is our own conceptual structure.

It may be especially valuable when machine systems inherit categories from historical data. Historical labels encode old doctrine. A new adversary may exploit a seam nobody considered because the category itself no longer fits.

There is a related human failure: **institutional mirroring**. Analysts often infer the opponent’s choices by imagining what their own organization would do under similar constraints. Machine models trained heavily on friendly doctrine, public military writing, or familiar historical cases can reproduce the same bias at scale.

The system becomes excellent at predicting an adversary that thinks like us.

This is not solved by instructing a model to “think like the enemy.” That phrase can produce stereotype with more fluency. The stronger approach is empirical: maintain several models of adversary decision logic tied to observable behavior, internal contradictions, leadership change, and historical outcomes.

The model of the opponent should itself carry uncertainty.

This is **adversary-model pluralism**.

One explanation may emphasize material incentives. Another domestic politics. Another organizational culture. Another bureaucratic fragmentation. None becomes the permanent psychology of the state.

The system watches which framework continues to predict.

This is slower than declaring one strategic personality. It is harder to deceive because the target has not committed its entire inference architecture to one imagined mind.

The adversary’s vote also enters **our own organizational incentives**. A force under political pressure may prefer interpretations that justify existing plans. A procurement program may prefer evidence showing that its system works. A command may interpret ambiguous success metrics favorably. These biases create priors the adversary did not invent but can exploit.

Counter-inference defense therefore includes incentive design.

Can analysts report that a major investment is underperforming without career penalty?

Can machine evaluations expose weak results without being tuned away?

Can a unit challenge a shared picture that senior leadership already endorsed?

The more expensive it is internally to admit error, the cheaper it becomes externally to sustain deception.

That may be one of the most important asymmetries in the entire book.

A deception does not need to survive evidence forever.

It only needs to survive until the institution has invested enough prestige, resources, or public commitment that changing its mind becomes painful.

The adversary can aim for **commitment capture**.

Make the target commit to a story, then let organizational inertia defend the story for you.

The technical defenses—provenance, independent sensors, model diversity—matter. The cultural defense is equally important: decisions should remain revisable without treating revision as institutional humiliation.

A force proud of changing its mind when evidence changes is harder to trap than one proud of never appearing uncertain.

This is where counter-inference becomes a leadership problem.

The adversary’s greatest opportunity may not be the weakness of the model.

It may be the ego of the organization using it.

The adversary gets a vote in your benchmark, your ontology, your attention system, and eventually your politics.

The goal is not to silence that vote.

War does not permit that.

The goal is to ensure no single adversarially shaped signal can become the whole election before reality has a chance to count the ballots.
