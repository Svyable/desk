# The Fundamental Problem

Causation begins with a story we cannot watch twice.

A patient takes a drug and recovers. Did the drug cause the recovery? A student attends a new program and graduates. Did the program change the outcome? A city changes a policing policy and crime falls. Did the policy do it? A company hires an unconventional candidate who becomes a star. Did the hiring decision reveal talent that the old process would have missed, or did the person happen to land in a favorable team?

For each question, the tempting comparison is unavailable. We want to rewind the same person, the same city, the same company, the same moment, change one decision, and run the world again.

Reality offers no rewind button.

The potential-outcomes tradition in causal inference handles this problem by being unusually strict about what a causal claim means. Imagine that each person has an outcome under treatment and an outcome under no treatment. The causal effect for that person is the difference between those two potential outcomes. The definition is clean. The observation is impossible. At a given moment, the person either receives the treatment or does not. One potential outcome becomes factual. The other remains counterfactual.

Paul Holland's 1986 paper on statistics and causal inference gave the dilemma a durable name: the fundamental problem of causal inference. The problem survives more data, more computation, better sensors, and larger models because it is not a shortage of storage. It is a property of time.

We live one history.

The practical triumph of modern empirical science is that this impossibility does not prevent useful causal knowledge. We cannot observe both outcomes for one person, but under the right design we can learn about effects across groups. Randomized assignment is powerful because it can make treatment independent of the characteristics that would otherwise influence the outcome. With enough units and proper execution, the treated and control groups become credible stand-ins for the impossible two histories.

The logic is almost rude in its simplicity. We cannot clone a person, so we create comparable groups.

That move supports clinical trials, field experiments, online A/B tests, agricultural experiments, policy evaluations, and much of what people mean when they refer to a gold standard for causal evidence. It also has boundaries. Randomization can fail through noncompliance, attrition, spillovers, measurement error, poor execution, changing behavior, small samples, or inappropriate extrapolation. Some questions cannot ethically be randomized. Some interventions occur at scales where the number of units is small. Some effects take decades. Some treatments cannot be hidden from participants. Some experiments measure a version of a program too unlike real deployment to answer the policy question people actually care about.

Causal inference is not a machine that turns random numbers into truth. It is a discipline of comparisons.

That discipline matters for this book because prediction has made it easy to forget how much evidence depends on comparison.

A prediction asks, roughly, what outcome is likely given what we know. A causal question asks what outcome would change if we did something different. The two can overlap, but they are not interchangeable.

Suppose a model accurately predicts which hospital patients are likely to receive an intensive diagnostic test. That tells us something about physician behavior and patient characteristics. It does not, by itself, tell us which patients would benefit from being tested. Suppose another model accurately predicts which job applicants the company will hire. That does not tell us who would succeed if hired. A model can become exquisitely accurate at forecasting the behavior of an existing institution while offering very little guidance about whether the institution should behave differently.

The distinction sounds academic until a prediction is used as a decision.

Then the model begins to choose which outcomes will become available.

Consider a simplified lender. For every applicant, there are two relevant potential outcomes: what happens if credit is extended and what happens if it is not. The lender cares particularly about repayment under lending. For approved borrowers, repayment can be observed. For declined applicants, the lender never observes repayment on a loan it did not make. The very action that protects the lender from suspected risk also prevents the lender from measuring whether some of that suspected risk was real.

Now imagine the lender builds a model from previous approved borrowers. If approval historically depended on income, geography, credit history, documentation, or human judgment, the training set reflects those gates. A technically sophisticated model can still inherit an epistemic boundary: it has richer evidence where the institution has historically ventured.

A naive response is to say that the lender should simply approve random risky loans to learn. This is where abstraction collides with responsibility. Credit can help and harm. Losses are borne by lenders, borrowers, investors, guarantors, or the public depending on the product. Laws constrain discrimination and underwriting. A loan somebody cannot afford is not a harmless probe.

The fundamental problem does not dictate the remedy. It tells us what we do not know.

That is already valuable.

One of the most damaging habits in decision-making is turning an identification problem into a confidence problem. If we cannot observe the counterfactual, we often compensate by speaking more firmly about the factual. The approved group repaid at a certain rate, therefore the approval rule worked. The tested patients had certain outcomes, therefore the testing threshold was appropriate. The admitted students graduated at a certain rate, therefore the admissions process selected well.

Each statement may contain useful evidence. None answers the missing comparison by itself.

A good selection process should produce a strong selected group. That is what selection means. The harder question is what happened near or beyond the line.

This is why thresholds are so important to researchers. When a rule creates a cutoff—an exam score, age boundary, eligibility date, risk score, vote margin, income limit—cases just above and just below the threshold may be more comparable than cases far apart. Regression discontinuity designs use that local discontinuity to estimate causal effects under assumptions. Natural experiments exploit circumstances in which assignment changes for reasons plausibly unrelated to the outcome. Instrumental-variable designs use sources of variation that influence treatment but affect the outcome only through the treatment, again under assumptions. Matching and weighting approaches try to construct comparability from observed covariates.

Each method is, in its own way, an attempt to find a piece of the world where the road not taken leaves a shadow.

The language of potential outcomes can feel bloodless because it compresses lives into symbols. Yet it contains a humane restraint. It refuses to pretend that we know what would have happened to a person under an alternative simply because we know what happened to someone else.

That restraint is becoming more important as predictive systems grow more persuasive.

A large model can produce a probability with several decimal places. A risk system can rank thousands of people. A recommendation engine can estimate engagement for millions of items. The numerical surface creates a sense that uncertainty has been converted into knowledge. Sometimes it has. Sometimes uncertainty has merely been sorted.

A ranking is not a counterfactual.

If a hiring model gives one candidate a score of 0.78 and another 0.61, the numbers may reflect genuine predictive differences in a defined outcome among observed data. They do not reveal the exact performance each person would achieve under the job, nor whether a manager, assignment, training program, or changing market would alter the result. They certainly do not reveal how the model's own deployment will reshape future data.

This is not an argument against scores. Humans rank people with far less transparency all the time. A calibrated probability can be vastly better than intuition. The problem begins when a useful estimate is granted a metaphysical status it never claimed.

Potential outcomes force us back to the missing branch.

The habit is especially important in settings where the decision changes the person. Education is the cleanest example. A school placement does not merely reveal a student's fixed ability. The class teaches. Peers matter. Expectations matter. Curriculum differs. Being placed into remediation can change course sequences and time to degree. Being admitted to a selective institution can change networks, resources, and opportunities. The outcome after selection is partly an effect of selection.

Hiring works the same way. Employee performance is not a sealed property carried into the firm. It depends on role fit, manager quality, onboarding, team composition, opportunity, and whether the organization gives the employee difficult work. Creditworthiness is not perfectly fixed before credit; loan terms and access can influence the borrower's financial path. Health outcomes are altered by diagnosis and treatment. Cultural preference can be shaped by exposure rather than merely revealed by it.

In all these cases, the system is tempted to treat the observed outcome as evidence about what the person or item “was” before the decision. The causal structure is messier. Selection changes what is selected.

This creates a second missing world inside the first.

We do not only lack the outcome for the rejected option. We may also misunderstand the outcome for the accepted option by treating it as a pure revelation rather than a joint product of the subject and the institution.

A company says, “Our process identifies high performers.” Maybe. It may also create high performance by concentrating mentoring and high-value assignments on the people it already selected. A university says, “Our admitted students succeed.” Of course many do. The university's resources help produce that success. A platform says, “Users prefer the content our model ranks highest.” They may. The ranking also affects what users notice long enough to form or express a preference.

Causal reasoning complicates flattering institutional stories.

It also complicates pessimistic ones. If a group has historically produced worse observed outcomes, those outcomes may reflect unequal treatment, access, environment, or measurement after selection. Prediction can identify a pattern without locating its cause. Using the pattern as policy can then stabilize the conditions that created it.

The feedback is not mystical. It is procedural.

Imagine a company that believes graduates of a particular school perform well. It recruits there heavily. Those hires enter with a large peer cohort, alumni mentors, and managers familiar with the curriculum. Graduates from another school arrive rarely and without the same support. Historical performance differs. A model learns that school identity is predictive. Even if the variable itself is excluded, correlated features may carry part of the signal. The next recruiting cycle concentrates again on the familiar school.

Was the original belief correct? Was the performance gap caused by selection? By support? By applicant differences? By role assignment? By chance? The observed history alone may not separate these stories.

An institution can be data-rich and causally poor.

The usual answer is better research design. That can mean experiments where ethical, natural experiments where available, explicit logging of decision rules, measurement of near-threshold cases, policy changes rolled out in ways that permit comparison, and careful distinction between predictions and treatment effects. It can also mean humility: some questions remain unresolved.

Humility is not operational paralysis. Decisions must still be made.

The mistake is to treat the need to decide as evidence that the uncertainty has disappeared.

This matters politically because people experience decisions individually while institutions learn statistically. A patient wants the right test for this body, today. A hiring candidate wants a fair chance for this job. A borrower wants a decision on this loan. Researchers often estimate average effects across populations. The gap cannot be wished away.

Randomization can be scientifically elegant and personally difficult. If two treatments are genuinely in equipoise, a trial may be ethical and valuable. If one treatment is known to be better, random assignment can be wrong. If two grant proposals are both judged excellent and indistinguishable within reviewer noise, a lottery may be defensible. If one is clearly incompetent, putting it into the lottery in the name of exploration would be perverse.

The boundary work comes first.

That observation will return throughout the book because “explore more” can become as shallow a slogan as “trust the data.” The information value of an action is only one value among many. Safety, dignity, legality, consent, distributive fairness, and cost matter independently.

The fundamental problem of causal inference is therefore not a command to experiment. It is a warning against pretending the alternative is known.

Once you take that warning seriously, ordinary management language changes.

“We know this kind of candidate doesn't work here” becomes “we have little successful internal evidence from this kind of candidate, partly because we rarely hire them.”

“We know these customers are bad credit risks” becomes “under our historical policy, we have limited repayment evidence for applicants beyond this boundary.”

“We know users don't want this content” becomes “we have weak response evidence because we rarely expose users to it.”

“We know this policy won't work” becomes “we have reasons to doubt it, but we have not produced a credible comparison.”

Sometimes the revised sentence still supports the same decision. It is nevertheless a better sentence because it separates knowledge from policy.

That separation is essential when automated systems enter the room. Models are often built to answer the question the dataset can support, then deployed to answer the question the institution actually cares about. The slippage can be tiny in code and enormous in meaning.

A model predicts observed employee retention; leaders infer future contribution. A model predicts default conditional on historical lending; leaders infer risk for new applicant populations. A model predicts test ordering; administrators infer clinical need. A model predicts clicks; designers infer preference. Each translation may be useful. Each requires assumptions.

The dangerous moment is when the assumptions disappear from view because the score is convenient.

The missing potential outcome never disappears. It only becomes easier to forget.

That is why the unobserved world is not a philosophical curiosity at the edge of data science. It is the negative space around every decision system. The more confidently we automate the observed side, the more important it becomes to preserve methods for learning about the other side.

We cannot watch two histories for the same person.

But we can design institutions that remain capable of being surprised by history they did not expect.
