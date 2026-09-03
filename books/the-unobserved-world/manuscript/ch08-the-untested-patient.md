# The Untested Patient

A negative test is data.

No test is not a negative test.

The distinction is easy to say and difficult to preserve inside a health record.

A patient arrives with chest discomfort. A physician takes a history, examines the patient, orders some tests, declines others, and makes a judgment about what is likely enough to investigate. Another patient with similar symptoms sees a different physician and receives a different workup. One chart fills with measurements. The other remains comparatively quiet.

Months later, a researcher asks which patients had heart attacks.

The answer is partly shaped by who was tested.

Medicine has always lived with this problem because diagnosis is an action, not merely a fact. Disease can exist without being observed. Testing changes what becomes visible. Treatment changes what happens next. Follow-up changes which outcomes return to the same health system. A clinical dataset is a record of biology filtered through access, judgment, workflow, coding, and measurement.

The stakes make medicine a useful antidote to careless talk about exploration.

No decent physician orders invasive procedures on random patients merely to improve the dataset. Tests can cause pain, radiation exposure, complications, anxiety, false positives, incidental findings, cascades of follow-up care, and cost. Even a blood draw is not free in the aggregate. The ethical boundary is not an inconvenience added after the statistics. It defines what learning is permissible.

Within that boundary, selective observation still matters.

Sendhil Mullainathan and Ziad Obermeyer's work on physician testing decisions gives us an unusually concrete example. They study how physicians diagnose heart attack, using machine learning to estimate risk and then comparing predicted risk with actual testing choices and downstream outcomes. Their paper reports evidence of two errors in the setting examined. Some patients with predictably low risk were tested even though the test did not appear to benefit them. Other patients with predictably high risk were left untested and later suffered serious adverse health events, including death.

The result is not “AI beats doctors.” The authors' design is more interesting than that slogan. They use prediction to expose where physician decisions differ from risk and use natural variation in testing behavior to help determine whether those deviations are mistakes or superior human judgment.

Why is natural variation important?

Because outcomes for untested patients are selectively missing in the immediate diagnostic record. If every physician applied the exact same threshold, it would be harder to learn what happens to patients near the boundary. Variation across shifts and physicians creates comparisons.

The researchers are, in effect, learning from doors that different clinicians opened differently.

This creates a tension for quality improvement. Medicine has spent decades trying to reduce unwarranted variation. Standardized pathways, checklists, guidelines, decision support, and evidence-based protocols can prevent arbitrary differences in care. That work saves lives.

But when standardization removes variation, it can also remove a source of evidence about the threshold itself.

The solution is not to preserve arbitrary medicine. The solution is to make the standardized system capable of testing its own assumptions.

Clinical trials are the clearest example. When genuine uncertainty exists between treatments and ethical requirements are met, random assignment can turn variation into evidence rather than noise. But trials cover only part of medicine. Many questions concern diagnostic thresholds, workflows, combinations, subgroups, rare events, and changing technology. Real-world evidence, pragmatic trials, natural experiments, prospective registries, and carefully designed implementation studies expand the toolkit.

The common discipline is comparison.

Prediction without comparison can mislead in medicine because illness is not distributed independently of testing. Suppose a health system trains a model to predict a diagnosis from historical records. Patients with classic symptoms were more likely to be tested, so their diagnoses are well represented. Patients with atypical presentations were tested less often, so their true disease status is less visible. A model may become highly accurate at recognizing the disease in people the old system already knew how to recognize.

This can produce the worst kind of reassurance: excellent validation on a selected sample.

The model appears to confirm clinical wisdom because clinical wisdom helped construct the labels.

Researchers refer to related problems under several names—verification bias, workup bias, spectrum bias, missing-not-at-random labels, selective labels. The details vary, but the intuition is stable. The path to a label matters.

Health systems often have ways to recover some of the missing information. An untested patient may return with a later diagnosis. Mortality records may capture severe outcomes. Claims can reveal care elsewhere. Follow-up calls or registries can track patients over time. A natural experiment can exploit physician or shift variation. None of these is perfect. They widen the aperture.

The best evidence may come from events the original decision-maker did not control.

This resembles credit. A lender that declines an applicant may later observe bureau outcomes from another lender. A hospital that declines a test may later observe a hospitalization. External outcomes provide clues about the rejected action.

Medicine adds a complication: the missing outcome can be changed by the delay itself.

A disease not diagnosed today may be harder to treat tomorrow. The decision not to test is not merely a missing label. It can alter the causal path.

That means diagnostic exploration has a direct patient benefit when it catches conditions earlier and a direct patient cost when it leads to unnecessary intervention. The institution is balancing more than information.

This is why uncertainty should be decomposed.

There is uncertainty because the disease is genuinely difficult to distinguish. There is uncertainty because the test is imperfect. There is uncertainty because the patient belongs to a poorly studied group. There is uncertainty because historical clinicians rarely tested this presentation. There is uncertainty because the data system does not follow patients well. There is uncertainty because the model is operating in a new hospital or population.

Treating all of these uncertainties as one risk score loses the diagnosis of the diagnostic system.

A learning health system would care about where its uncertainty comes from.

Imagine two patients both assigned a 3 percent estimated risk. For one, the model is based on thousands of closely comparable cases. For the other, the model is extrapolating from sparse evidence because the patient's presentation is rare. Same point estimate, different epistemic position.

A conventional threshold may treat them identically. An exploration-aware system may flag the second for additional review, not because 3 percent suddenly means something different, but because the confidence around the estimate is different.

Again, this is not permission to test indiscriminately. It is a reason to expose uncertainty to clinicians rather than hiding it behind precision.

Medical AI often emphasizes calibration: among patients assigned a certain risk, does the outcome occur at roughly that rate? Calibration is important. But a model can be calibrated on the population it sees and still be unreliable under a deployment policy that changes who is measured, treated, or followed.

Calibration is about predictions. The unobserved-world problem is about the loop.

Suppose a model recommends fewer tests for a category of patients. The immediate effect may be beneficial: fewer unnecessary procedures. Over time, however, the health system will collect fewer definitive labels in that category. The next model may have less information there. If the disease changes, the patient mix changes, or the original model was slightly wrong, the blind spot can grow.

This is a reason to maintain surveillance even after a policy appears successful.

Surveillance does not have to mean testing everyone. It can mean randomized chart review, follow-up sampling, registry linkage, audit testing in approved low-risk ways, monitoring of later adverse outcomes, or periodic re-evaluation of thresholds. The principle is that reduced intervention should not imply reduced ability to detect model drift.

Airlines inspect systems that rarely fail. Banks stress-test risks they hope never to realize. Health systems can audit diagnostic pathways even when the pathway is performing well.

The paradox is that success makes auditing feel least urgent.

If a model reduces unnecessary tests and the observed adverse-event rate remains low, leaders may assume the problem is solved. Yet observed adverse events are themselves affected by follow-up and measurement. The institution needs a channel for bad news that does not depend entirely on the policy being wrong in a way the policy can see.

This is one reason patient complaints, second opinions, malpractice claims, external diagnoses, and clinician overrides can be informationally valuable even when they are messy. They are routes by which evidence escapes the standard pipeline.

A mature system does not dismiss every deviation as noise.

The physician who overrides a model may be wrong. The override may also indicate a feature the model does not capture. If overrides are logged with outcomes, they become a source of learning. If clinicians are punished for deviating and the model's recommendation becomes effectively mandatory, the system may lose this channel.

Human judgment can be an exploration mechanism.

That statement needs the same caveat as earlier chapters. Human judgment is also a source of bias, inconsistency, fatigue, and error. The point is not to elevate intuition above evidence. It is to treat disagreement between human and model as a potentially informative event rather than something to eliminate reflexively.

The best hybrid systems may use disagreement to allocate attention.

If model and clinician agree strongly, follow the normal path. If they disagree and both have plausible reasons, the case may deserve review. Over time, the institution can learn where humans add information and where they introduce noise. This is more productive than asking whether “AI” or “doctors” are better in the abstract.

The unit of performance is the decision system.

This becomes clearer in diagnosis because every layer matters. The patient chooses whether to seek care. The triage process chooses urgency. The clinician chooses tests. The test has sensitivity and specificity. The lab returns results. The clinician interprets them. Treatment follows or does not. The patient adheres or does not. Follow-up captures outcomes or loses them. A model inserted at one point inherits selection from every previous point and changes selection downstream.

Calling the final dataset “clinical reality” is too generous.

It is clinical reality as observed through a pipeline.

This does not make the data suspect. It makes the pipeline part of the scientific object.

The same insight appears in public health screening. If a cancer-screening program reaches one population more effectively than another, detected incidence can rise where screening is better even if underlying disease rates are similar. Improved detection can look like worsening health. Conversely, low recorded incidence in an underserved population can reflect underdiagnosis.

Observation is an intervention.

The phrase sounds philosophical until it changes a dashboard.

A health leader comparing diagnosis rates across clinics needs to ask whether the clinics are measuring the same way. A model developer needs to ask which patients had definitive tests. A regulator needs to ask whether reduced intervention is hiding missed outcomes. A clinician needs to know when a reassuring score is based on sparse comparable evidence.

The untested patient is therefore not simply a missing row.

They are a reminder that clinical evidence is conditional on care.

There is a humane limit to how far this idea should travel. Patients do not owe the health system data. A person has the right to refuse testing. Privacy can restrict linkage. A clinician can reasonably choose not to pursue a low-probability diagnosis. Medicine is not obligated to maximize collective knowledge at the expense of individual welfare.

That limit strengthens rather than weakens the argument.

Because some exploration is ethically unavailable, the evidence we can obtain should be designed more carefully. Natural variation should be analyzed before it disappears. Approved trials should answer questions that matter. Follow-up systems should capture outcomes without demanding needless procedures. Model uncertainty should be represented honestly. Changes in diagnostic policy should be rolled out in ways that preserve evaluation where feasible.

Learning has to fit inside care.

The ideal is not a hospital that tests more. It is a hospital that knows what its decision rules prevent it from seeing.

That awareness changes the meaning of a quiet chart.

No result may mean no disease.

It may also mean no test.
