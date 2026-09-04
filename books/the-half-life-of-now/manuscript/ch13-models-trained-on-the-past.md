# Models Trained on the Past

Every predictive model is a memory arranged to make a guess.

The memory may be enormous. It may contain millions of transactions, images, documents, medical records, clicks, weather observations, or examples of human language. The mathematics may be sophisticated. The system may update continuously.

The basic bargain remains the same.

Past patterns are used to infer something about a case that matters now or later.

This works because the future is not completely new.

People repeat behavior. physical systems have continuity. markets preserve structure. language has regularity. diseases have mechanisms. images contain recurring forms. organizations develop habits. The past carries signal.

Prediction becomes fragile when the relationship between past and present changes.

Statisticians and machine-learning practitioners have names for parts of this problem: distribution shift, dataset shift, concept drift, covariate shift, label shift, domain shift. The terminology varies because the failure has several forms.

The incoming population may change.

The meaning of the target may change.

The relationship between inputs and outcomes may change.

The measurement process may change.

People may adapt to the model.

A new regime may appear that the training data barely contains.

The model is still executing the function it learned. The environment is no longer offering the same problem.

This is freshness debt in mathematical clothing.

A simple example is credit risk.

A lender trains a model using historical borrowers. Economic conditions, interest rates, employment patterns, consumer behavior, underwriting policies, and the borrower pool all influence the relationships in the data. The model may perform well in validation because validation resembles the past.

Then conditions change.

A recession arrives. A government program changes incentives. new forms of income become common. the applicant population shifts. The historical relationship between one feature and default risk may weaken or reverse.

The model did not "forget" how to calculate.

It became less current.

This is why responsible model deployment includes monitoring.

The launch is not the end of validation.

Performance must be observed on new data. Input distributions can be compared with training distributions. outcomes can be tracked. subgroup performance can be examined. assumptions can be retested. The system needs a process for retraining, recalibration, rollback, or retirement.

A model without monitoring is a policy document with code.

It may run faster, but it ages the same way.

Automation makes the aging more consequential.

A human decision-maker with a stale rule may notice an unusual case and hesitate. A model can apply the stale relationship consistently at scale.

Consistency is usually presented as a virtue.

It is a virtue when the rule deserves consistency.

When the world has moved, consistency becomes replication of mismatch.

This is one reason model risk cannot be reduced to accuracy at development time.

The more decisions depend on a model, the more important its update pathway becomes.

That pathway is organizational as well as technical.

Data scientists can detect drift but may not control the business process. A compliance team may require approval before a model changes. product teams may resist retraining because performance changes affect users. operations may depend on stable outputs. legal teams may worry that a new model creates inconsistent treatment relative to prior decisions.

The system cannot simply "learn continuously" without governance.

Continuous learning sounds attractive because it appears to solve staleness automatically.

Let the model ingest new data and adapt.

In some domains this can work well. In others it creates serious risks.

New data can be noisy, manipulated, or biased by the model's own prior decisions. A continuously updating system may become difficult to reproduce or audit. Behavior can change in response to the model, producing feedback loops. A malicious actor can attempt to poison the update process. Rapid adaptation can sacrifice stability.

A self-updating model still needs a theory of trust.

What observations deserve to change the model? How many? How quickly? Under whose supervision? With what rollback path?

The update problem has merely moved inside the algorithm.

Feedback loops deserve special attention because they can make a model's world increasingly self-referential.

Suppose a predictive system identifies certain areas as higher risk. Resources are directed there. More observations are collected there. The resulting data contains more detected incidents from those areas. The model sees evidence consistent with its prior prediction.

The map helped create the dataset that confirms the map.

This dynamic can occur in policing, fraud detection, content moderation, hiring, lending, recommendation, and many other systems.

The issue is not that every prediction is wrong. The issue is that observed outcomes may no longer be independent evidence about the environment.

Freshness becomes endogenous.

The system is learning from a world partly shaped by itself.

This makes retraining on "more recent data" an incomplete solution.

Recent data can be more current and more contaminated by the model's influence.

Sometimes older data contains relationships from before the intervention. Sometimes it is less representative of current behavior. The choice is not simple.

Model maintenance requires causal judgment, not just timestamps.

Generative AI makes the temporal problem feel different because the output is not always a numerical prediction.

A language model can produce a fluent answer in the present tense about a world it learned from historical data.

The style is current.

The knowledge may not be.

This creates one of the most psychologically powerful freshness illusions yet built.

A paper encyclopedia looked old when its pages yellowed. A model produces new sentences every time.

The novelty of the sentence can mask the age of the evidence.

Retrieval can reduce this problem by allowing a model to consult current sources at the time of the request.

That creates a hybrid system.

Part of the answer comes from durable patterns embedded in the model. Part comes from live or recent information retrieved externally. The output merges them.

This is promising because it allows different clocks to coexist.

It is also difficult because the system must know which clock each claim needs.

"What is the capital of France?" does not require minute-by-minute retrieval under normal conditions.

"Who is the current chief executive of this company?" may.

"What are today's flight delays?" certainly does.

A model that retrieves everything wastes time and may introduce poor sources. A model that retrieves nothing becomes stale in fast domains.

The missing capability is not search. It is freshness judgment.

The system needs to infer the half-life of the requested information.

Humans do this constantly.

We do not check a live database before saying who wrote Hamlet. We do check the weather before leaving for the airport. We may rely on memory for a friend's birthday but confirm a restaurant's hours. We know intuitively that "the current interest rate" is more perishable than "the causes of the French Revolution."

Good AI systems need a similar temporal instinct.

They also need source-age transparency.

A retrieved page may itself be stale. A company's old press release can outrank a newer regulatory filing. A cached page may display an outdated product. A search result can preserve an obsolete snippet. The internet is not the present. It is another mosaic of ages.

Retrieval shifts the freshness problem from model training to source selection.

The system has to compare publication dates, event dates, update history, authority, and context.

A newer source is not automatically better.

A breaking social-media post may be recent and false. An older official document may remain authoritative. A current blog may misunderstand a mature body of research. Freshness and trust are separate dimensions.

This is where naive real-time AI becomes dangerous.

The fastest source can dominate simply because it exists.

A robust system needs epistemic ranking as well as recency.

Artificial intelligence also changes the rate at which the environment can move.

Models do not merely observe change; they cause it.

If generative systems automate parts of coding, writing, customer service, design, research, or analysis, then labor markets and workflows change. Those changes make older training data about the same occupations less representative.

AI can shorten the half-life of datasets used to understand AI's own impact.

A study measuring how workers used AI last year may describe tools that have already changed. A benchmark created for one generation of models may saturate. A policy designed around a capability boundary may become stale as models cross it.

Governance enters a race with an adaptive object.

This does not mean regulation is hopeless.

It means good regulation should target durable properties where possible.

Requirements around documentation, testing, incident reporting, user notice, accountability, privacy, security, appeal, or discrimination may age better than rules tied to a narrow model architecture.

Technical standards can update faster underneath broader legal principles.

Again, layered clocks.

Model freshness also raises a fairness issue.

Different groups can change at different rates.

A model's overall performance can appear stable while deteriorating for a subgroup whose behavior, access, or representation changed. Aggregate monitoring may miss local staleness.

This is the model equivalent of a national average hiding a changing neighborhood.

Freshness has geography and demography.

The system should ask not only whether the model remains accurate but for whom, where, and under what conditions.

This is especially important when a model uses proxies.

A proxy that once correlated with an outcome may become less meaningful as technology or society changes. ZIP code, device type, purchasing pattern, educational credential, job title, browser behavior, or language use can shift meaning.

The field still exists. The relationship ages.

A feature can become stale without changing value.

This is one of the most subtle forms of model decay.

The input looks current. The inference attached to it is historical.

Humans do this too.

We use clothing, accents, addresses, job titles, schools, brands, and habits as shortcuts for understanding people. The observation may be fresh. The stereotype is old.

Machine learning industrializes that structure when it is not carefully governed.

The solution is not to eliminate all inference. Prediction requires relationships.

The solution is to treat relationships as revisable.

A deployed model should come with a falsification plan.

What pattern would tell us the model is aging? What outcomes are monitored? What population changes matter? What events trigger review? How quickly can the model be disabled? What fallback exists if the model becomes unreliable?

These questions belong in design, not only in crisis response.

A model also needs an end-of-life plan.

Organizations are often good at deploying models and bad at retiring them.

An old model remains because a downstream process expects its score. A new model runs alongside it. An analyst maintains a translation. Documentation fragments. People no longer know which output is authoritative.

This is the same informational sediment seen elsewhere, except now it can be embedded in production systems.

Retirement is a technical and social process.

Users have to trust the replacement. regulators may need notice. historical comparisons may need preservation. decision thresholds may change. appeals may reference the old model.

Freshness requires migration.

The deepest mistake is to imagine that a model's intelligence frees us from maintenance.

The more powerful the model, the more tempting this becomes.

If the system can generate, infer, adapt, and explain, perhaps it can keep itself current.

But current relative to what?

Reality remains outside the model.

Somebody or something must keep contact with it.

A model cannot guarantee its own freshness merely by processing more of its own outputs.

It needs new evidence, trusted observation, correction, contestation, and sometimes a human being who notices that the answer does not fit the street.

The future is not obligated to resemble the training set.

Every model is trained on the past.

The mature question is whether the system knows when the past has stopped being enough.
