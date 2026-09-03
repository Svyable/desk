# Production and Inspection

The paperwork said the batches were ready.

According to an FDA training case published in 2024, a sterile-drug manufacturer had signed quality-assurance release records indicating there were no out-of-specification results for hundreds of batches. The records looked like the end of a process: production complete, testing complete, quality checked, product released.

One part of that sequence had not happened.

The company used a contract laboratory to test its finished products. FDA said the manufacturer had no written procedure requiring those results to be retrieved and reviewed before release. Between June 5 and August 17, 2023, records showed 952 batches of sterile drugs were released without the manufacturer reviewing the laboratory's finished-product test results.

The tests existed. The review record existed. The review of the tests did not.

FDA's case study says the lapse and inaccurate quality review led to distribution of at least one super-potent and one sub-potent batch of fentanyl and was associated with twelve adverse drug events. That description comes from the regulator's inspection material, not a court's final allocation of liability, and it should be read at that level of confidence. But the institutional shape of the failure does not depend on a courtroom finding.

A system had produced evidence, then produced approval, without making the approval consume the evidence.

That is a useful way to begin the economics of inspection because it removes one easy explanation. The problem was not a shortage of information. A testing laboratory had done work. Nor was it that the organization lacked a formal quality function. The signed release documentation was itself evidence that a quality process existed on paper.

What failed was the connection between the two.

Pharmaceutical manufacturing has unusually explicit language for that connection. Under federal current good manufacturing practice rules, a quality-control unit has responsibility and authority to approve or reject components, in-process materials, packaging, labeling, and finished drug products. It can review production records for errors and determine whether errors were fully investigated. The regulation also requires adequate laboratory facilities for testing and gives the unit responsibility for approving or rejecting procedures and specifications that affect the identity, strength, quality, and purity of the drug.

A batch does not become acceptable merely because the production line has finished making it.

This sounds obvious until production gets fast.

Every system that produces at scale eventually encounters the same problem in a different costume. Making another unit and knowing that the unit is acceptable are separate activities. Sometimes they can share equipment and people. Sometimes they cannot. Sometimes the cheapest way to improve quality is to redesign production so fewer defects are created. Sometimes the cheapest way to gain confidence is to inspect a sample. Sometimes the consequence is serious enough that a separate organization is asked to establish its own understanding before acceptance.

The point is not that inspection must always be human, complete, or independent. It is that inspection has a cost curve of its own.

That fact became impossible to ignore when factories began producing things faster than people could check them one by one.

The history of acceptance sampling contains an almost too-perfect example. NIST's Engineering Statistics Handbook explains the method through U.S. military ammunition testing during the Second World War. Testing bullets creates an unusual version of the inspection problem because the most direct test is destructive. Fire every bullet before shipment and there is nothing left to send. Fire none of them and defects travel directly to the battlefield.

Harold Dodge and Harry Romig, working in the statistical-quality tradition developed at Bell Labs, helped turn that problem into a formal middle ground. Take a random sample from a lot. Inspect or test the sample. Use the result to decide whether to accept or reject the lot.

The method does not pretend to know the condition of every bullet. It does something more honest. It defines a procedure for acting under incomplete information.

That procedure contains risk on both sides. A good lot can be rejected. A bad lot can be accepted. The sample size and acceptance threshold determine how those risks are distributed. Inspection is not a magic operation that converts uncertainty into certainty. It is a way to purchase confidence at a known cost.

The same logic survives far beyond ammunition. Some tests destroy the product. Some inspections take too long. Some cost more than the item being inspected. In many systems, checking everything would stop the system from being a system.

This matters because the phrase "human review" often conceals the opposite assumption. It suggests that once machine production becomes abundant, people can simply inspect the output. Put a human in the loop. Require sign-off. Add a reviewer. Keep the familiar approval box and route more work through it.

That can work when the queue is small.

It stops being a plan when the cost of making another artifact approaches zero while the cost of understanding it does not.

A lawyer can ask for three alternate indemnity clauses instead of one. A programmer can ask for five candidate implementations. An analyst can generate ten scenarios, each with a polished explanation. A manager can request a longer report because producing the longer report no longer consumes much staff time. A researcher can ask for a literature synthesis, then a counter-synthesis, then a table reconciling the two.

Each output can be useful. Each can also create an inspection obligation.

The organization experiences the obligation differently from the generator. Generation is visible as completion. Inspection often appears as delay.

A draft appears at 10:03. The reviewer has not become faster at 10:03.

Industrial systems learned to cope with this mismatch by changing what counts as inspection. They moved quality work earlier in the process. They measured the process itself. They sampled. They automated measurement. They separated some approval rights from production. They decided that certain failures justified more expensive forms of independence.

The important move was to stop imagining that inspection meant a person standing at the end of the line looking at everything.

In pharmaceutical manufacturing, that move appears in the distinction between production and the quality unit. The regulation does not require every person in quality to be a stranger to the company. It does something more practical: it gives the quality function explicit authority to reject what production has made and to review the records on which release depends.

That authority matters because production has a goal.

The goal is to produce.

A line manager is measured on throughput, yield, schedule, and cost. An engineer wants the build to work. A lawyer who has spent three days negotiating an agreement wants the agreement signed. A developer who has spent a week on a feature wants the feature merged. None of these people needs to be dishonest for production pressure to shape judgment. The work itself creates attachment to the path that produced it.

Inspection exists partly because the question changes.

The producer asks whether the thing can be completed.

The inspector asks what evidence justifies accepting the consequence.

Those questions overlap, but they are not the same.

NASA makes the distinction unusually explicit in software. Its Independent Verification and Validation program exists for safety- and mission-critical systems where the ordinary development process does not provide enough assurance by itself. NASA defines independence in three dimensions: technical, managerial, and financial.

Technical independence means the people evaluating the software are not the people who developed it. They establish their own understanding and can use different methods to look for defects the development team may have missed. Managerial independence means the assurance team is outside the development management chain and can choose what to analyze, which methods to use, and when to perform the work. Financial independence protects the effort from being quietly starved by the organization whose schedule it might delay.

NASA does not apply this architecture to every script and internal dashboard. That would be absurdly expensive. The rigor is tied to risk.

But the structure reveals something general about checking. Independence is not a feeling. It is an arrangement that makes disagreement possible.

A second look by the same person may catch a typo. A second compiler may catch a defect the first compiler missed. A second model may notice an inconsistency in the first model's answer. These are useful forms of redundancy.

They are not automatically independent.

If two reviewers learned from the same data, use the same toolchain, rely on the same requirements, inherit the same missing context, and are rewarded by the same deadline, they can agree for the wrong reason. The second pass can be faster and still add less information than its existence implies.

This is common-mode failure in cognitive form.

A software system that generates code and then judges the code using another call to the same model family may produce valuable review. It may find bugs. It may generate tests the first pass forgot. It may compare the implementation with the request more patiently than a rushed engineer.

But "reviewed by AI" tells us almost nothing by itself.

Did the reviewer execute the code? Did it have access to production logs? Did it construct tests from requirements independent of the generated implementation? Could it block deployment? Did it search for failure modes the producer did not mention? Was disagreement surfaced or averaged away? Did the second system share the first system's blind spots?

The answer is not to forbid model-on-model review. It is to ask the same question quality systems have always asked: what new evidence did the inspection create?

That question helps distinguish inspection from repetition.

Suppose a model writes a financial memo claiming a proposed acquisition remains attractive under a moderate decline in revenue. A second model reads the memo and says the analysis is coherent. That review may be useful, but both artifacts can inherit the same incorrect revenue series.

Now suppose the second system retrieves the filed financial statements independently, rebuilds the historical series, recomputes the sensitivities, and reports that the memo's conclusion depends on a number that does not match the filing.

The second system has done more than read. It has touched a different source of truth.

The same distinction appears in software testing. A generated implementation can carry generated unit tests, and those tests are better than no tests. But tests inferred from the implementation can reproduce the implementation's misunderstanding of the requirement. A more independent check might start from the external contract, a property the system must satisfy, historical failures, adversarial inputs, or behavior observed in another implementation.

Inspection gains power when it approaches the artifact from somewhere the artifact did not already come from.

Manufacturing makes this visible because measurement can be physical.

A machined part has a dimension whether the CNC program believes it does or not. A coordinate-measuring machine can inspect that dimension. A camera can compare a seal, label, surface, or weld against detectable defect patterns. Sensors can observe vibration or thermal behavior while a machine is operating. The measurement system can still be wrong, but it has a route to the product that is not merely a restatement of the manufacturing instructions.

This is also where the optimistic case becomes important.

Inspection costs can fall.

NIST has documented automated visual inspection using machine vision in ordinary manufacturing settings, and its standards work on digital manufacturing increasingly connects machine-readable product definitions to both automated production equipment and automated inspection equipment. Research groups have demonstrated machine-learning systems for defect detection on manufacturing imagery that operate quickly enough for production use in benchmark settings.

In other words, automation does not have to create an inspection crisis. It can solve one.

A factory that used to rely on a person glancing at occasional units may install cameras that inspect every unit. A measurement that once required transcription between systems can be carried directly in machine-readable product data. A test that was too expensive to run on every software change can become cheap enough to run on every commit. A model can compare a contract against a playbook in seconds and reliably surface deviations a lawyer would otherwise have to hunt for manually.

In these cases, the cost of evidence falls with the cost of production.

That is the favorable trajectory for generative work.

The mistake is to assume it happens automatically.

Production automation and inspection automation optimize different things. The first tries to make an acceptable artifact cheaply. The second tries to determine whether the artifact is acceptable cheaply. A system can become spectacular at the first while remaining mediocre at the second.

Sometimes the distinction is hidden because both activities produce text.

A model drafts a report. Another model drafts a review of the report. The interface presents both as documents of similar polish. One appears under "Draft." The other appears under "Review." The labels create organizational comfort. Yet both may be forms of generation.

Physical manufacturing has a useful defense against this confusion: metrology is not called manufacturing with a different prompt.

The measuring device is supposed to measure.

Knowledge work needs an equivalent discipline. Not a new department for every memo, and not a universal demand for manual re-performance. It needs controls that are honest about what kind of confidence they purchase.

Acceptance sampling is honest in this way. It exposes coverage. It tells the organization that only a sample was inspected and that acceptance carries a defined probability of error. The method may be badly chosen, badly executed, or inappropriate to the defect pattern, but its structure does not pretend that partial inspection was complete inspection.

Human sign-off often does.

A checkbox marked "reviewed" rarely says what was reviewed. It does not say whether the reviewer read every line, tested a sample, compared against source documents, relied on an automated checker, inspected only exceptions, or spent ninety seconds confirming that the formatting looked normal.

The ambiguity was tolerable when production itself imposed friction.

If a twenty-page memo took a week to prepare, the people producing it were likely to encounter its structure. Not guaranteed to understand it, but forced to spend time near it. If a programmer typed and debugged a thousand-line change over several days, some of the review burden was paid during creation. If a lawyer assembled an agreement clause by clause, the drafting process itself generated a certain amount of familiarity.

Cheap generation weakens that incidental control.

An employee can now become the nominal author of work whose intermediate choices were made elsewhere. A document can arrive fully formatted before its owner has built a model of what it contains. The old inspection layer remains, but it is asked to compensate for understanding that production used to create as a by-product.

This is why the relevant economic ratio is not simply machine output per human worker.

It is output per unit of independent evidence.

Consider two organizations that both triple the number of analyses they can produce.

The first also automates source retrieval, calculation checks, provenance, version comparison, and anomaly detection. Its analysts receive more drafts, but they also receive structured evidence showing where numbers came from, what changed, which assumptions drive the result, and which checks failed. Human attention moves toward unresolved judgment.

The second automates drafting and summarization. Its analysts receive three times as many finished-looking reports and three times as many generated review notes. The reports become easier to skim. The review notes become easier to accept. No one measures whether the underlying claims were independently tested.

Both organizations can report similar AI adoption.

Only one improved inspection capacity.

The difference will often be invisible until consequence arrives.

The FDA case is useful because consequence arrived in a form that could be counted. Test results existed. Batch-release records existed. The missing step could be reconstructed. A regulator could point to a defined responsibility and say the review had not occurred.

Knowledge work is usually murkier.

A strategy memo that misses a market risk may never generate a clean incident. A generated contract may contain a term that becomes expensive two years later, after everyone involved has changed roles. A software patch may make a system harder to understand without causing an outage. A research synthesis may slowly strengthen confidence in a weak claim without ever producing one identifiable bad decision.

That makes inspection easier to underfund.

Production has units. Documents sent. Features merged. Contracts signed. Analyses completed. Tickets closed.

Inspection often has avoided outcomes.

A flaw found before release does not become an incident. A bad clause rejected during review never appears in litigation. A misleading claim removed from a report leaves no trace in the final version. The better the quality system works, the more its output can look like nothing happened.

This creates an accounting problem. Organizations can see the cost of review more clearly than the value of review.

Generative systems sharpen that asymmetry. The cost savings from production arrive quickly and are easy to demonstrate. A team can show that a first draft now takes twenty minutes instead of three hours. The organization then faces a choice about the recovered time.

It can produce more.

Or it can inspect better.

The first choice is easier to measure.

This does not mean the second choice requires keeping every old review ritual. Many of those rituals deserve to disappear. A person manually comparing two nearly identical documents may be doing work software can perform more reliably. A human scanning every manufactured item may be worse than a calibrated vision system. A reviewer reading ten thousand low-risk transactions may add less assurance than a good sampling plan plus targeted anomaly detection.

The purpose of inspection is not to preserve jobs for inspectors.

It is to produce enough trustworthy evidence for the consequence at hand.

That formulation changes the design problem. Instead of asking whether a human touched the artifact, ask what could make the acceptance decision wrong. Instead of asking whether a second model reviewed the first, ask whether the second process had access to evidence capable of falsifying the first. Instead of requiring complete review by default, decide where sampling is adequate, where exhaustive automated testing is possible, and where independence is worth its cost.

The cost should rise with consequence, not with nostalgia.

A suggested email reply does not need NASA-style IV&V. A typo in an internal note does not need a quality unit. A software change that can be rolled back in seconds may justify less pre-release assurance than code controlling a spacecraft. A contract clause that transfers billions of dollars may deserve a level of source checking that would be ridiculous for a lunch order.

Mature systems already behave this way when they are working well. They allocate assurance.

The generative era makes that allocation more important because surface quality has become cheap. A finished-looking artifact no longer tells us much about how much cognitive work occurred before it appeared. The visual distance between a thoughtless draft and a deeply reasoned draft has narrowed.

Inspection therefore has to become more explicit about its own evidence.

What was checked? Against what? By which method? With what independence? What remains unknown? What could still fail? What would block release?

These questions sound bureaucratic until the volume rises. Then they become the only way to distinguish a real control from a decorative one.

The signed batch-release record in the FDA case was decorative in the most dangerous sense: it represented a state of knowledge the underlying workflow had not established.

That is the failure this book will keep encountering.

A generated world will contain many excellent artifacts. It will contain many excellent automated checks. The goal is not to slow either one down for the pleasure of slowness. It is to prevent the label "reviewed" from becoming another form of generated content.

Inspection is production too. It consumes time, equipment, expertise, organizational authority, and sometimes the product itself. It can be redesigned, sampled, automated, and improved. It can also be starved.

Once that is visible, the next question is less philosophical than managerial.

How much serious attention does an organization actually have?

A quality unit has hours. A legal team has hours. Senior engineers have hours. Editors, auditors, regulators, managers, and scientists have hours. Those hours can be moved between queues, but they cannot be summoned by clicking Generate.

The review budget was always finite.

Cheap production is making the budget impossible to ignore.