# Chapter 10 — The Human Cleanup Crew

Automation rarely announces the people standing behind it.

A system is sold as an answer. The people often appear only when the answer fails.

Someone labels training data. Someone reviews a disturbing output. Someone compares two model responses and chooses the better one. Someone writes adversarial prompts. Someone checks whether the translated phrase carries the right meaning in a local dialect. Someone looks at the flagged image that a classifier could not decide about. Someone answers the customer whose automated refund went wrong. Someone reads the security finding produced by an agent-generated code scan. Someone decides whether the model's refusal was appropriate or absurd.

These people are part of the machine wake because their work is created by automation even when they are not visible in the product.

The phrase “human in the loop” is accurate and insufficient.

It describes a system topology, not a labor condition.

A human can be in the loop as a highly paid domain expert making consequential judgments. A human can be in the loop as a contractor completing repetitive microtasks for small payments. A human can be in the loop as a customer-service employee absorbing anger from users after an automated system made a decision they cannot explain. A human can be in the loop as a volunteer red teamer trying to break a model. The common feature is not the quality of the job. It is that the machine still needs a person at a boundary it cannot reliably handle alone.

Artificial intelligence has a long history of invisible work.

Before large language models became consumer products, machine-learning systems already depended on labeled examples. Images were classified. Speech was transcribed. Search results were judged. Maps were corrected. Content was moderated. The International Labour Organization has described digital platform workers performing data annotation and other microtasks that support AI systems, often from locations far from the companies whose products use the work.

The invisibility is partly created by supply chains. A technology company contracts with a vendor. The vendor recruits workers directly or through platforms. Work is divided into small tasks. The final model contains no label showing who corrected which example.

Human effort is dissolved into model capability.

This can be economically useful. Digital work can provide income to people who face barriers in local labor markets. ILO programs have trained workers, including refugees and young people, in annotation and other digital skills. Remote work can create opportunities across geography.

It can also create poor work.

Microtasks can be repetitive, insecure and paid by the piece. Workers may spend unpaid time qualifying for tasks. Algorithms can rate their performance. Platform rules can make appeals difficult. Specialized knowledge can be underused. When the material involves violence, abuse or exploitation, the psychological burden can be serious.

Both sides of this story matter because “hidden labor” should not become another slogan that erases workers' agency. A remote annotation job can be exploitative in one context and a valuable opportunity in another. The question is who sets the terms, how the work is valued, what protections exist and whether the worker can build a durable livelihood rather than merely filling a temporary gap in the machine.

The cleanup crew changes as systems improve.

Early in a technology, people often perform routine tasks the machine cannot yet do. Later, automation handles more of the easy cases and leaves the difficult cases to humans. This can make the remaining human work more cognitively demanding and emotionally intense.

Content moderation illustrates the pattern. A classifier can filter obvious spam or known illegal material. Humans receive ambiguous images, context-sensitive speech, satire, coded harassment and material that needs cultural interpretation. The machine removes volume but concentrates difficulty.

AI evaluation can do the same.

A model can judge another model's response on simple criteria. Automated tests can catch formatting errors. Large suites of benchmark questions can be scored mechanically. The remaining questions are often those where reasonable people disagree: Is this answer misleading? Is the advice safe in context? Does the tone demean the user? Does the refusal protect someone or merely obstruct them? Is the explanation adequate for a specialist?

The human is not merely checking the machine. The human is defining what “good” means where the metric runs out.

That work has enormous leverage.

If thousands of human preferences are used to tune a model, the labeling instructions become a kind of hidden constitution. They encode norms about helpfulness, safety, style, uncertainty and conflict. Small wording differences in a rubric can change what workers reward. Disagreement can be smoothed into one preferred answer even when the underlying issue has no consensus.

The cleanup crew is also a legislature.

This is why evaluation design needs more transparency than “humans preferred it.” Which humans? Selected how? In what language? Under what instructions? Were disagreements recorded? Did evaluators have domain expertise? Were they paid by the task? Did they know the intended use?

A preference dataset is not a natural resource extracted from people. It is an institutional artifact.

NIST's AI evaluation programs make this visible by explicitly incorporating model testing, red-teaming and field testing. The ARIA pilot, for example, used trained assessors and human participants to study how people interact with AI applications rather than treating model accuracy as the whole question. This acknowledges a basic fact: some AI risks appear only in use.

A model can produce a technically accurate statement that users interpret badly. A warning can be so frequent that people ignore it. A system can perform well on average while a particular population struggles with the interface. Field testing turns the human from label source into subject of the system.

This is a more mature role.

The same shift is happening in red teaming.

Security red teams historically probe systems for exploitable weaknesses. AI red teams attempt to elicit unsafe behavior, bypass controls, reveal hidden instructions, induce tool misuse or exploit the model's interaction with external content. NIST's 2026 analysis of a large agent-security red-teaming competition examined indirect prompt injection and other attacks against agents operating with tools.

The work is adversarial creativity.

A good red teamer imagines what the system designers did not. They exploit ambiguity. They notice that one permission boundary interacts badly with another. They try the weird input. They combine harmless capabilities into a dangerous sequence.

This kind of labor does not disappear when models become more capable. Capability can make the attack surface richer.

Then there is remediation.

Finding a failure is not the same as fixing it. A model can be tuned. A filter can be added. A tool permission can be narrowed. A prompt can be changed. A test can be added. The user interface can ask for confirmation. The incident can reveal that the task should not be automated at all.

Each fix creates more work for engineers, policy teams, evaluators and support staff.

The myth of automation imagines a line: human work becomes machine work, and the human cost declines. The reality is often a graph. One kind of human work falls while another rises. Some work moves upstream into data preparation. Some moves downstream into review. Some appears sideways in compliance, security and customer support.

The net effect depends on the system.

This is one reason productivity research at the task level can fail to predict productivity at the organization level. An AI assistant may make drafting faster while increasing review volume. A coding agent may produce more changes while maintainers spend more time triaging them. A customer-service model may resolve routine questions and leave agents with only the angriest or most complicated customers.

The machine takes the easy middle and leaves the edges.

Those edges can be where professional skill matters most.

This creates a training problem. Junior workers historically learned by doing routine work under supervision. If machines absorb that routine layer, where do future experts acquire judgment?

A law associate learns from ordinary research and drafting before handling difficult matters. A programmer learns by fixing modest bugs before reviewing large architectural changes. A radiologist learns through cases with feedback. If entry-level tasks become automated, organizations may enjoy short-term productivity while weakening the apprenticeship pipeline that creates future reviewers.

The cleanup crew cannot remain expert unless experts are still made.

This is a subtle machine wake because it appears over years. A company sees fewer junior roles and lower cost. Later it discovers that senior reviewers are scarce. The missing training opportunities were residue in reverse: work the machine removed that institutions had been using for another purpose.

Good automation therefore asks which tasks are economically redundant but educationally useful.

Some can be preserved as training exercises. Machines can become tutors rather than replacements. Junior workers can review machine output and receive feedback. Simulation can provide practice. But this requires deliberate design. If every routine task is simply routed away from people, learning pathways shrink by accident.

There is another human burden: responsibility without control.

Organizations sometimes put a human at the end of an automated process and call it oversight. The person sees a recommendation, has seconds to decide and knows that disagreeing creates extra work. Over time, the machine's suggestion becomes the default. The human is technically in the loop and practically serving as a rubber stamp.

Real oversight requires authority, time, information and permission to disagree.

A reviewer needs to understand what the system did, not merely see its conclusion. They need a path to override it. The organization needs to tolerate override rates that are not zero. Performance metrics should not punish people simply for slowing automation when uncertainty is real.

Otherwise “human in the loop” becomes liability laundering.

The machine makes the decision. The person signs it.

This matters in regulated or high-stakes environments where institutions may feel safer because a human appears in the process diagram. A genuine human-control design asks what evidence the person receives, what decisions they can change and how much attention the role demands.

Attention is finite.

If one reviewer is expected to monitor hundreds of automated decisions per hour, the oversight mechanism has been sized as theater. A rare intervention role can work when automation is highly reliable and anomalies are well surfaced. It fails when every case requires subtle judgment.

The wake therefore includes human capacity planning.

How many escalations does the machine produce? How long does a serious review take? What happens during spikes? Which cases are routed automatically? Do reviewers receive enough context? Are their decisions fed back into the system? Are disagreements audited for systematic patterns?

These are queue questions wearing a human face.

There is also the matter of emotional residue.

Content moderators and safety evaluators can be exposed to material most users never see. Fraud teams handle deception. Customer-support staff handle people harmed or frustrated by automation. Incident responders work under pressure when systems fail publicly. As AI expands into sensitive domains, organizations can push unpleasant edge cases onto a relatively small group of people.

The product's cleanliness depends on someone else's exposure.

Responsible design should reduce unnecessary exposure through filtering, rotation, psychological support, clear escalation and compensation that recognizes the difficulty of the work. Machines can preprocess material so people see only what is necessary, but preprocessing should not conceal important context. There is no universal answer. The existence of the burden should at least appear in the system's cost model.

A useful accounting question is: What does the machine make a person look at so that everyone else does not have to?

That question can reveal labor hidden in “safety,” “quality” and “support.”

The human cleanup crew is not only external contractors. It includes users.

Every time a person corrects a model's output, reformats a bad answer, verifies a citation, fixes generated code, reports a hallucination or rephrases a prompt, they perform quality work. Some of this is ordinary interaction. Some of it is uncompensated debugging transferred from the provider to the customer.

Products differ in how much cleanup they externalize.

A tool that saves ten minutes of drafting but requires fifteen minutes of verification is not productive, even if the generation step looks impressive. A code assistant that produces plausible insecure code pushes the security review downstream. A search answer that requires the user to open every cited source to check fabrication may be slower than ordinary research.

Net value is value after cleanup.

This sounds trivial, yet AI demos systematically underweight it because cleanup is difficult to show. The first output appears instantly. Verification happens later, dispersed among users.

Organizations should measure correction cost as seriously as generation speed.

What percentage of outputs are accepted? How much editing do they require? Which errors are expensive? Which users are best at detecting them? Does the system improve with feedback? Is the correction itself captured safely? Can recurring cleanup be converted into a better product rule?

The ideal machine wake becomes smaller over time because the system learns which messes it repeatedly leaves.

But some human roles should not be optimized away.

Independent evaluators provide a different perspective from the model developer. Domain experts bring tacit knowledge. Auditors preserve separation. Moderators understand cultural context. Users define whether a product is useful. A system judged entirely by machines like itself can drift into self-confirming quality.

Human disagreement is not always noise.

It can reveal that the target is plural.

Two doctors can disagree about a difficult case. Two editors can prefer different sentences. Two communities can have different boundaries for offensive speech. An evaluation pipeline that forces every disagreement into one label may make the model easier to train and the world less accurately represented.

This is where the cleanup crew becomes a source of epistemic diversity.

Record disagreement where it matters. Do not average away uncertainty merely because the training system requires a scalar reward. A model can learn that some questions have multiple reasonable answers. A product can route controversial decisions to context-specific policy. An organization can maintain different evaluation sets for different populations or domains.

Humans are valuable partly because they do not all agree.

The future of AI labor will include less obvious roles as well. Agent supervisors will investigate unusual trajectories. Model operations teams will manage evaluation suites. Provenance specialists will design receipts. Identity teams will manage non-human access. Data stewards will decide what training and trace material can be retained. Energy managers will coordinate flexible computing with infrastructure constraints.

New work appears around the wake because somebody has to keep residue from becoming disorder.

This is not an argument that automation fails to automate. It obviously does automate tasks. The printing press automated copying. Elevators automated a job once performed by operators. Spreadsheets automated calculations that employed rooms of clerks. Technologies can remove enormous amounts of labor.

The lesson is that labor accounting should follow the whole system.

Ask which work disappeared, which became easier, which moved, which intensified, which new jobs appeared and which learning pathways vanished. Count the people outside the company as well as inside it. Count customer correction. Count moderation. Count incident response. Count review.

The machine's labor wake is the difference between gross automation and net automation.

There is a hopeful version of this future.

Machines handle repetitive volume. People spend more time on cases where judgment, empathy, negotiation and expertise matter. AI makes skilled workers more capable. Remote annotation becomes a stepping stone into higher-value data and evaluation work. Safety teams use automation to shield reviewers from unnecessary harmful content. Junior employees learn faster with machine tutors. Humans supervise systems with enough context and authority to intervene meaningfully.

That future does not emerge automatically from better models.

It is a labor design.

The cleanup crew should not be the part of the product nobody admits exists. It should be staffed, protected, measured, trained and given influence over the systems whose residue it handles.

A clean interface is an achievement.

It should not require dirty work to stay invisible.
