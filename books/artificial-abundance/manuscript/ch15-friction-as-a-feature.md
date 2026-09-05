# Friction as a Feature

The button says Confirm.

You have already clicked the thing once.

The system knows what you want. It could execute immediately. Instead it asks again.

Are you sure?

Most of modern software has been trained to regard this moment as a defect.

Every extra screen is a drop-off risk. Every additional field reduces conversion. Every second of delay is an invitation to abandon the transaction. The ideal interface is frictionless: one tap, one click, one voice command, one invisible automation that acts before you have to ask.

For many tasks, this is obviously better.

Nobody misses filling out paper forms to transfer money between their own accounts. Nobody needs a ceremonial delay before turning on a lamp. A customer should not have to call three departments to cancel a service. A disabled person should not be forced through an obstacle merely because the obstacle once protected an old process.

Friction is often waste.

That is exactly why the useful cases are easy to miss.

Some friction is a safety mechanism.

The second click can be the whole point.

Artificial intelligence makes this distinction more important because it does not merely remove steps. It can remove the experience of producing the thing that once made us notice what we were doing.

A person who writes a difficult email has several opportunities to reconsider it while composing the sentences. A person who types “write a firm response and send it” can collapse composition and transmission into one action. A junior analyst who builds a model encounters assumptions as she enters them. A system that produces the completed spreadsheet can hide those assumptions behind a polished result. A manager who used to spend an hour preparing a decision memo may have discovered contradictions during the preparation. A generated memo can deliver coherence before the manager has earned understanding.

The removed labor may have been pointless.

Or it may have contained a checkpoint nobody had named.

This is the dangerous thing about friction. Its function is often invisible until it disappears.

A door that is difficult to open might be badly designed.

A door that is difficult to open because there is a fire on the other side is doing something else.

The same interface property can be either obstruction or protection depending on consequence.

We need better language than frictionless good, friction bad.

Consider surgery.

A surgical team has every reason to value speed. Operating rooms are expensive. Anesthesia time matters. Delay can harm patients. Nobody wants a surgeon slowed by pointless paperwork in the middle of an emergency.

Yet modern surgical safety practice deliberately inserts pauses.

The World Health Organization's surgical safety checklist is a famous example. The original multicenter study introduced a 19-item checklist across eight hospitals in different countries. Teams paused around specific moments to confirm things that competent professionals generally already knew mattered: identity, procedure, site, anticipated critical events, equipment, counts, and other safety-relevant facts. In the study, the checklist program was associated with lower rates of observed complications and inpatient deaths.

The remarkable part is not that a list contained secret medical knowledge.

It did not.

The intervention created a shared interruption.

A team that might otherwise continue on momentum had to make certain facts explicit before moving forward.

That is productive friction.

But the story has an important second half.

When surgical checklists were later implemented broadly in Ontario, researchers did not observe the dramatic improvements reported in the original pilot. The existence of a mandated checklist did not automatically reproduce the earlier result.

This matters for everything that follows.

A checkpoint can protect a system.

A checkpoint can also become theater.

Anyone who has worked inside a large organization knows the difference.

There is the box a person checks because the question forces useful thought.

And there is the box everyone checks because the form will not submit otherwise.

There is the review that catches a real problem.

And there is the review whose only function is to create evidence that a review occurred.

There is the required pause that gives a second person time to notice danger.

And there is the required pause that teaches people to click through warnings without reading them.

Friction has to earn its delay.

Artificial intelligence will make that test urgent because the systems can generate consequential actions faster than institutions can redesign the controls around them.

Imagine a financial analyst with a tool that can generate an acquisition model, draft the investment case, identify comparables, propose a negotiation range, produce a board presentation, and answer objections in an afternoon.

The old process may have taken two weeks.

Some of that time was waiting.

Some was repetitive formatting.

Some was gathering information that a machine can now gather faster.

Good. Remove it.

But the two-week process may also have forced the analyst to live with the assumptions long enough to notice which ones were fragile. Different people may have touched the work at different stages. A finance lead may have questioned the growth rate. A lawyer may have noticed a contractual constraint. A business-unit leader may have pointed out that the model's “synergy” required cooperation from a team that planned to leave.

If the new system compresses two weeks into two hours, the organization has to decide which delays were latency and which were exposure to disagreement.

That is not a software question.

It is institutional design.

The same problem appears at smaller scale.

Autofill removes typing.

Autocomplete removes recall.

Automatic approval removes review.

Automatic scheduling removes negotiation.

Automatic summarization removes reading.

Automatic coding removes some implementation work.

Automatic purchasing removes the moment when a buyer sees the price again.

Each removal can be excellent.

Each can also remove information that used to reach the person through the inconvenience of doing the task.

The right response is not to preserve every old inconvenience as a shrine to human effort.

It is to identify the consequential information that friction used to expose and decide whether the new system exposes it another way.

This is what good automation has always required.

Elevators removed elevator operators but added interlocks, sensors, alarms, inspection regimes, load limits, emergency systems, and standardized controls. Commercial aviation automated enormous parts of flight without adopting the principle that a safe cockpit is one in which the humans never have to verify anything. Payment systems became faster while banks built fraud detection, limits, reversals, authentication, and exception handling around them.

Speed at the center often creates control systems at the edges.

Artificial abundance will do the same for cognitive work.

The cheap draft will create expensive verification.

The instant decision will create demand for escalation rules.

The autonomous agent will create permission boundaries.

The abundant recommendation will create audit trails.

The generated contract will create provenance requirements.

The system that can act continuously will create reasons to define what it may never do without stopping.

This is not a failure of automation.

It is what mature automation looks like.

NIST's work on AI assurance describes the problem in less poetic language. A system cannot be trusted merely because it performs impressively in a demonstration. Assurance requires evidence across dimensions such as performance, data quality, security, explainability, and the conditions under which the system is expected to operate.

Evidence takes time.

Testing takes time.

Review takes time.

Red-teaming takes time.

Monitoring takes time.

Incident response takes time.

The existence of these costs does not mean the technology is bad. It means consequence has not become free merely because inference did.

This gives us a useful way to classify friction.

Bad friction protects the process from the user.

Good friction protects the user, the institution, or another affected party from a consequential error.

The distinction is not always obvious because organizations are skilled at describing self-protection as customer protection.

A cancellation flow with seven screens may be called a confirmation process when it is really retention theater.

A bank may describe a delay as fraud prevention when the same bank removes every barrier to opening a more profitable product.

A bureaucracy may require signatures because nobody wants to own the risk of changing the form.

A company may add human review after an AI system fails publicly while giving the reviewer too little time or authority to alter the outcome.

Protective language does not make friction protective.

The test is functional.

What error is this step meant to catch?

How often does it catch that error?

What does the error cost?

Could the same protection be achieved more cheaply?

Does the person performing the check have the information and authority required to disagree?

What happens when the check fails?

If nobody can answer those questions, the friction may be decorative.

This becomes especially important with human-in-the-loop systems.

The phrase sounds reassuring.

A human is involved.

But where?

A human who approves one output every ten seconds is not performing the same function as a human who investigates ambiguous cases. A human who cannot see the model's source material cannot verify a claim that depends on that material. A human who is punished for slowing throughput will learn to approve. A human who reviews only after the automated action has already caused irreversible harm is not a meaningful control at the decision point.

Presence is not control.

This connects directly to the human signal from the previous chapter.

A signature matters only if the signer had a genuine opportunity to refuse.

A review matters only if disagreement changes the path.

A confirmation matters only if saying no is possible.

The value of friction lies in optionality at a consequential moment.

That can be as small as an undo window.

Many good systems do not prevent action. They preserve reversibility.

An email service delays sending for a few seconds so a mistaken click can be undone.

A version-control system keeps history so a bad change can be rolled back.

A bank may place a hold on an unusual transfer while still allowing ordinary payments to proceed instantly.

A deployment system can stage a release to a small population before exposing everyone.

A medication order can trigger an alert only when a dose exceeds a meaningful threshold rather than interrupting every routine prescription.

The best friction is often selective.

It does not slow the common safe case merely to prove seriousness.

It concentrates resistance where the cost of error rises.

Artificial intelligence can make this selectivity better.

The same systems that create risk can help identify which actions deserve review. A low-stakes draft can flow through. A high-dollar transfer can pause. A routine code change can be tested automatically. A change touching authentication can require another reviewer. A generic marketing image can be generated freely. A public health claim can require source verification.

The goal is not maximum friction.

It is correctly priced friction.

That phrase is worth taking seriously because delay has a cost.

A safety system that blocks too much can create new harms.

A doctor who receives hundreds of low-value alerts learns to ignore alerts.

A security system that requires constant confirmation trains employees to click approve reflexively.

A welfare application that demands repeated documentation can prevent eligible people from receiving help.

A fraud system that freezes legitimate transactions can strand travelers or small businesses.

A content-review process that takes weeks can silence speech at the moment it matters.

The protective checkpoint can become the hazard.

That is why friction should be proportional to consequence, not to institutional anxiety.

Abundant intelligence makes proportionality easier to imagine because systems can become more context-sensitive. Instead of one fixed process for every case, the organization can route different cases differently.

But adaptive friction introduces another problem.

Who decides what deserves resistance?

If a bank's model decides your transaction is suspicious, you experience more friction than another customer.

If a hiring system decides your application is anomalous, you may receive extra scrutiny.

If a public agency decides one person's claim needs additional verification, the burden of proof can become uneven.

Friction can encode power.

The people forced to stop are not always the people creating the risk.

This is the dark side of intelligent control systems. They can make barriers more targeted, which can improve efficiency, and more invisible, which can make unequal treatment harder to see.

A standard form burdens everyone openly.

An adaptive system can burden particular people quietly.

The politics of friction therefore matters as much as the engineering.

Who bears the delay?

Who benefits from the protection?

Who can appeal the decision?

Who can see that the friction exists?

Who is exempt?

Who gets the frictionless experience because the system trusts them by default?

The answers reveal what the institution values.

This is another reason not to romanticize slowness.

Slow systems are not automatically humane.

A person waiting six months for a disability decision does not need a lecture about the wisdom of friction. A business waiting for a permit while paying rent does not experience bureaucracy as contemplative design. A patient waiting for treatment can be harmed by a process that mistakes delay for caution.

The point is narrower.

When artificial intelligence removes the cost of acting, institutions need to notice which costs were serving as brakes.

Some brakes should be thrown away.

Some should be rebuilt deliberately.

That rebuilding will create strange products.

There will be software whose premium feature is not speed but restraint.

Agents that ask before spending above a threshold.

Writing systems that show uncertainty instead of smoothing it away.

Decision tools that force a source check before a claim enters a regulatory filing.

Autonomous systems that refuse to optimize certain objectives without a human decision.

Communication tools that distinguish “draft for me” from “send for me” with meaningful permissions rather than a buried setting.

Recommendation systems that insert stopping points instead of making continuation effortless.

The most sophisticated product may occasionally be the one that does less.

That will feel unnatural in an industry trained to measure capability by how much a system can do unattended.

But adulthood in technology often looks like learning where not to automate.

The abundance machine can produce without fatigue.

The people and institutions around it still live with consequences.

That is why the pause survives.

Not every pause.

Not the old delays merely because they are old.

The useful pause is the one that gives consequence time to become visible before action becomes irreversible.

And once difficulty itself is no longer necessary for production, we will face a different temptation.

We may start adding difficulty back, not for safety, but for status.