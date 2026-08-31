# Counterfactuals in a Reactive World

A prediction enters the world and something happens.

The patient survives. The borrower repays. The neighborhood receives more patrols. The student passes. The recommendation is clicked. The market calms. The employee stays. The model is retrained on the new data and its accuracy improves.

The temptation is to treat the outcome as an answer.

It is not always an answer.

Often it is the result of an intervention that was triggered by the prediction itself.

The harder question is the one the data do not automatically contain: what would have happened if the prediction had not been made, had not been shown, or had led to a different action?

That is a counterfactual question.

Counterfactual reasoning is already difficult in ordinary causal inference because only one path is observed. A patient either receives a treatment or does not. A city adopts a policy or does not. A worker gets a training program or does not. Researchers build comparison groups, experiments, natural experiments, structural models, and assumptions to learn about the missing path.

Reactive systems make the problem harder because deployment can change not only one outcome but the population that generates future outcomes.

A model does not merely select treatment.

It can alter incentives, attention, eligibility, resource allocation, behavior, and the composition of the next dataset.

Then the model is updated.

Now the counterfactual is no longer just “What would this person have done without treatment?” It may be “What would this population have become under a different sequence of models and responses?”

The missing world acquires memory.

This is where prediction and causality collide.

A predictive model can be excellent at estimating the conditional probability of an outcome under the policy that generated its training data. That may be exactly what an institution needs. But if the institution uses the prediction to change policy, the historical conditional probability may no longer describe the relevant counterfactual.

Suppose a hospital estimates which patients are most likely to die and uses the model to intensify care for those patients. Years later, the highest-risk group may have surprisingly good outcomes because treatment was effective. A new model trained on those outcomes can learn that some markers of severe illness are associated with survival.

The data are not wrong.

They are records of illness plus response.

To ask what would happen if the next patient did not receive the response requires separating those two processes.

Chapter 7 showed this in clinical prediction. The same logic appears whenever predictions trigger action.

A lender predicts default and denies a loan. There is now no repayment outcome for the denied loan.

A fraud system predicts abuse and blocks a transaction. The system never observes whether the transaction would have become a confirmed fraud loss if it had proceeded.

A school predicts dropout and assigns counseling. The student graduates. The observed label records success under intervention, not untreated risk.

A platform predicts that a user will dislike a video and never shows it. No click arrives to verify the prediction.

A police department predicts crime in one place and sends officers there. More offenses are detected there than in places watched less closely.

The policy determines what can be observed.

This is sometimes called selective labels in machine learning. But the larger second-order problem is broader than missing labels. The policy can change the behavior being labeled.

That means even complete observation can be causally misleading.

Juan Perdomo, Tijana Zrnic, Celestine Mendler-Dünner, and Moritz Hardt formalized one version of this problem in 2020 under the name performative prediction. Their starting point is simple: predictions support decisions, decisions influence people or institutions, and those responses change the distribution of future data.

The deployed model therefore helps choose the distribution on which it will later be evaluated.

This is a profound change from the standard supervised-learning picture.

In the standard picture, a model is trained on samples from a distribution and judged on new samples from the same or a similar distribution. The world may drift, but the model is conceptually outside it.

In a performative setting, the model is one cause of the drift.

Perdomo and his coauthors defined a notion they called performative stability. A model is performatively stable when, after deployment induces a new data distribution, retraining on that distribution returns the same model.

The loop has reached a fixed point.

That sounds reassuring.

It is not the same as saying the fixed point is good.

A stable system can settle into an undesirable equilibrium.

Consider a simple lending example. A model approves loans mainly for applicants with one visible profile. Those applicants generate repayment data. The next model becomes increasingly confident about that profile because it has rich evidence there and little evidence elsewhere. Approval patterns stop changing. Retraining returns essentially the same model.

The system is stable.

It may still be excluding creditworthy borrowers it never learns about.

Stability describes the loop.

It does not certify the objective.

John Miller, Juan Perdomo, and Tijana Zrnic made this distinction explicit in later work. They showed that performatively stable solutions can be far from optimal when judged by performative risk—the loss that results after accounting for the distribution induced by the deployed model. A fixed point of repeated retraining is therefore not necessarily the model a decision maker would choose if it could reason directly about how deployment changes the world.

This is one of the most important counterfactual lessons in machine learning.

Repeatedly fitting the data you caused is not the same as optimizing the consequences you want.

The difference is easy to miss because retraining feels adaptive.

A model is deployed. New data arrive. The model is updated. Performance improves on the new environment. The process looks empirical, responsive, and modern.

But the data stream may be increasingly endogenous to the system's own past choices.

The loop can become better at predicting the world it has learned to produce.

That is useful if the produced world is desirable.

It is dangerous if the institution forgets that another world was possible.

Counterfactual blindness can appear in several forms.

The first is intervention success.

A risk model identifies danger, action follows, and the danger does not materialize. A naive evaluator concludes the original prediction was a false positive.

This is the smoke-alarm problem.

If alarms lead people to leave the building, many alarms will be followed by no injury. The absence of injury cannot by itself show the alarm was unnecessary.

Medicine has lived with this problem for generations. Once treatment depends on severity, observed outcomes are partly treatment outcomes. The sickest patients can improve because they receive the most intensive care.

Any system that rewards a predictor only for matching post-intervention outcomes risks penalizing useful warnings.

The second form is intervention failure.

A system predicts danger, action follows, and the danger still occurs. The prediction may look accurate, yet the policy may have had no effect or may even have worsened the outcome.

A forecast can be right for the wrong operational reason.

If a city predicts congestion and sends every driver the same detour, the detour itself can become congested. The forecast about crowding may remain correct at the system level even though the intervention was poorly designed.

The third form is non-observation.

A model acts before the outcome is allowed to occur.

Spam is filtered before a user can mark it as spam. Fraud is blocked before a chargeback exists. A loan is denied before repayment can be observed. A risky applicant is rejected before job performance can be measured.

The institution loses the very evidence that could reveal whether its rule is too strict.

This creates a self-sealing policy.

The system knows much about the cases it accepts and less about the cases it rejects. Confidence can rise while empirical coverage shrinks.

The fourth form is behavioral adaptation.

People learn the model or infer its consequences and change what they do.

Applicants improve the features a classifier rewards. Sellers change titles to fit search algorithms. students practice tested formats. Drivers respond to route recommendations. Firms alter reported metrics. Once these responses occur, a later dataset reflects both underlying quality and adaptation to the rule.

A counterfactual under a different rule must model a different adaptation.

This is where one-step causal intuition becomes insufficient.

If a bank changes its approval threshold today, applicants may change application behavior tomorrow. Brokers may change which clients they send. Competitors may change pricing. Credit bureaus may collect different patterns. The intervention alters the environment in which the next intervention will operate.

The fifth form is state dependence.

Gavin Brown, Shlomi Hod, and Iden Kalemaj extended performative prediction to a stateful world in which population response depends not only on the current classifier but on the current state of the population. This matters because real systems carry history forward.

People acquire resources at different rates. Institutions accumulate expertise. Some groups learn how to respond to a model faster than others. A rule that is harmless for one round can create large differences after repeated deployment because the state itself evolves.

The path matters.

A counterfactual is therefore not always represented by swapping one model at one instant while holding everything else fixed.

Sometimes the relevant comparison is between trajectories.

What would the population look like after five years under policy A versus policy B?

Which people would have entered or exited the system?

What behaviors would have become common?

What data would each policy have generated?

Which institutions would have invested in compliance, evasion, training, or infrastructure?

This is a much harder object than static prediction error.

It also resembles policy evaluation more than conventional machine learning.

Robert Lucas's critique in macroeconomics made the same structural point in another language: relationships estimated under one policy regime cannot automatically be treated as invariant under another if people change decision rules when the regime changes.

The reactive counterfactual asks for exactly what Lucas warned cannot be obtained by mechanical projection.

You need a theory, design, experiment, or source of variation that says something about response under the alternative regime.

Historical fit is not enough.

This does not mean every deployed model requires a full structural model of society.

That would be an impossible standard.

Many prediction problems remain usefully predictive because the intervention is small, the environment is stable, or the model's purpose is explicitly to forecast outcomes under the existing policy regime. A demand model can be useful without solving the causal effect of every price change. A hospital can estimate short-term deterioration risk without modeling the entire health system. A recommendation system can rank content effectively without identifying the counterfactual effect of every possible feed.

The key is to match the question to the evidence.

Prediction asks what outcome is likely under conditions like the observed ones.

Causal inference asks what would change under an intervention.

Reactive-system design often asks a third question: what intervention should we choose when the intervention changes the conditions under which future predictions will be made?

That third question combines the first two and adds dynamics.

It is tempting to solve it by retraining faster.

Faster retraining can help track a moving distribution.

It can also accelerate a bad loop.

Imagine a hiring model that favors candidates from a narrow set of backgrounds because those candidates dominate historical successful hires. The company deploys the model. More hires come from those backgrounds. Managers gain experience evaluating and mentoring them. Referral networks strengthen. Future successful-employee data contain even more examples of the same profile.

Weekly retraining will detect the new distribution beautifully.

Nothing in that procedure asks whether another hiring policy could have built a broader pool of successful employees.

Adaptation is not counterfactual reasoning.

This distinction has practical consequences for evaluation.

The first is to preserve exploration.

A system that always chooses the currently estimated best action may stop learning about alternatives. Randomized trials are the cleanest solution when they are feasible and ethical. Smaller exploration policies, holdout groups, rotating rules, or deliberately varied decisions can also preserve evidence outside the dominant policy.

Exploration has a cost.

It sometimes means taking an action that current estimates say is not best.

But exploitation has an epistemic cost too. A policy that never tests alternatives can become certain by construction.

The second is to log decisions, not only outcomes.

A dataset should record which model was used, what prediction it produced, what decision followed, what alternatives were available, and what information the decision maker saw. Without this policy context, later analysts can mistake the outcome distribution for an untreated property of the population.

The third is to distinguish target outcomes from observed proxies.

A fraud system may care about actual fraud losses, but observe chargebacks only for transactions that were allowed. A hiring system may care about job performance, but observe performance only for hired candidates. A health system may care about untreated risk, but observe treated outcomes.

The missingness is not administrative noise.

It is generated by policy.

The fourth is to evaluate interventions on downstream outcomes that the model cannot trivially optimize.

If a school model claims to reduce dropout, track graduation and later enrollment, not only the risk scores. If a hospital model claims to improve care, track morbidity, mortality, workload, and treatment intensity, not only discrimination metrics on labels generated after deployment. If a recommender claims to improve long-term satisfaction, do not let short-term clicks become the sole feedback channel.

The fifth is to examine heterogeneity.

A reactive policy can work on average while changing the population unevenly. Some groups may adapt quickly because they have resources, information, or institutional familiarity. Others may face the same model as a fixed barrier.

Stateful performative models make this explicit, but the practical point is older than machine learning: the ability to respond to a rule is itself unequally distributed.

A system can therefore create inequality through adaptation even if the initial model treats identical measured features identically.

The sixth is to separate equilibrium from desirability.

Organizations love stable systems.

Stable systems make budgets predictable. Alerts stop surprising people. Metrics settle. Retraining produces small changes. Operations teams can sleep.

But stability can mean the policy has found a good equilibrium.

It can also mean the institution has stopped observing alternatives.

A lender that only lends to one class of applicant may obtain stable default rates. A platform that only recommends one style of content may obtain stable engagement. A school that teaches tightly to one exam may obtain stable scores.

The absence of movement is not proof of correctness.

The seventh is to ask who controls the counterfactual story.

When an institution deploys a model and later evaluates itself, it has enormous power over the evidence. It chooses who is acted on, which outcomes are observable, how long the evaluation window lasts, and which metrics count as success.

This does not require bad faith.

Operational systems naturally collect the data their own workflows generate.

But the result can be an epistemic enclosure: the institution becomes increasingly good at seeing the world through the consequences of its own decisions.

Independent audits, external datasets, policy variation, and outcomes collected outside the primary decision loop are valuable partly because they open windows in that enclosure.

The deeper challenge is conceptual.

A reactive model changes the meaning of “ground truth.”

In a static image-classification benchmark, a dog remains a dog after the model predicts dog. The label does not care.

In a social system, a prediction can alter the event that later becomes the label.

Risk changes treatment.

Treatment changes survival.

Rank changes applications.

Applications change selectivity.

Patrol changes detection.

Detection changes recorded crime.

Recommendation changes attention.

Attention changes preference and production.

The label is downstream of the prediction.

Once that is true, model evaluation needs a causal diagram even if nobody draws one.

There is a predictor.

There is a decision.

There is a response.

There is an observed outcome.

There is a future training set.

And behind all of them sits at least one missing world in which a different decision was made.

The goal is not to recover every missing world with certainty.

That is impossible.

The goal is to stop pretending the observed one is the only world relevant to judgment.

Good system design preserves ways to be surprised by the counterfactual.

It leaves some room for alternatives to generate evidence. It records the policy that produced the data. It distinguishes prediction from intervention. It notices when outcomes become selectively observable. It asks whether a stable equilibrium is actually desirable. It tests whether short-term improvement survives changes in the rule.

Most of all, it recognizes that the question “Was the model accurate?” may be too small after deployment.

The more consequential question is often: compared with what world?

In a reactive system, that world does not sit quietly in the data waiting to be discovered.

It has to be designed for, inferred, or deliberately kept alive.