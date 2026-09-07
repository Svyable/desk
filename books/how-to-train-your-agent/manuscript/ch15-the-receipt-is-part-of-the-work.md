# The Receipt Is Part of the Work

When labor becomes cheap, evidence becomes more valuable.

A human employee spends three hours preparing a report. The time itself is not proof of quality, but it creates a kind of friction around the artifact. Somebody had to open the files, make the calculations, write the sentences, and deliver the result. The manager may know the employee's habits. The process leaves social traces.

An agent can produce the same-looking report in three minutes.

This is wonderful when the work is good.

It also destroys one of our crude proxies for seriousness.

Volume no longer implies effort.

Polish no longer implies review.

Speed no longer tells us whether the result was easy or reckless.

The artifact has become cheaper than the confidence we place in it.

A receipt closes part of that gap.

By receipt I do not mean a giant transcript of everything the model internally considered. The principal usually does not need a performance of thought. The useful receipt records what happened in the world and which evidence supports the claim that the task is complete.

Which sources were used?

Which records changed?

Which test passed?

Which customer received the message?

Which transaction was prepared or executed?

Which file was modified?

Which policy controlled the decision?

Which parts remain unresolved?

A receipt turns “done” from a conversational assertion into something inspectable.

This matters because agents are excellent at announcing completion. They can say the research is comprehensive, the bug is fixed, the account is reconciled, the booking is confirmed, and the task is handled.

The sentence costs almost nothing.

The state of the world may disagree.

A coding agent says the bug is fixed. The receipt is the diff and the relevant passing tests.

A research agent says the market is growing. The receipt is the source trail, including the date and population behind the claim.

A calendar agent says the conflict is resolved. The receipt is the new event state and a note showing which invitation moved.

An expense agent says the month reconciles. The receipt is the reconciliation, not the confidence of the prose.

The principle is simple enough to become invisible: trust the state, not the sentence about the state.

Human professionals already work this way in high-consequence domains. Accountants reconcile. Laboratories keep records. Engineers run tests. Banks preserve transaction histories. Software development uses version control. Legal work cites authority and preserves executed documents. Aviation relies on checklists, logs, and maintenance records.

The agent economy spreads evidence discipline into ordinary work because ordinary work can now happen without a human visibly performing it.

The home office begins to need receipts.

The freelancer needs them.

The one-person company needs them.

A family using an agent to coordinate travel may need confirmation numbers and cancellation terms preserved automatically because nobody remembers making the booking manually.

The receipt is memory with accountability.

This is distinct from an activity log.

A log can be enormous and useless. Thousands of tool calls do not prove the objective was achieved. More observability can drown the principal in machine exhaust.

The receipt should be shaped around the consequence.

What changed?

What verifies the change?

What exception occurred?

What would the next responsible person need to know?

This is compression again.

A good receipt lets the principal inspect the result without replaying the whole task.

That property becomes essential as one human supervises more agents. If every delegated task requires reading the agent's full path, delegation has failed economically. The human has merely traded execution for forensic reconstruction.

The machine should reduce its own work into evidence.

This can be automated in surprisingly mundane ways. Save the diff. Attach the source links. Record the before-and-after value. Preserve the external confirmation. Store the error code when a tool fails. List the unresolved items instead of burying them in a paragraph.

The agent should know what a receipt looks like before it begins the task.

That changes behavior.

If a research role knows every material factual claim requires a source, it searches differently.

If a coding role knows “done” requires tests, it treats code generation as an intermediate step.

If a purchasing role knows the receipt must include price, vendor, return terms, and approval basis, it is more likely to notice when one of those is missing.

Evidence becomes part of the job definition rather than a cleanup exercise after trust has already been requested.

This is where evaluation and operation meet.

During the agent's childhood, receipts help the principal compare proposed work with reality. After promotion, the same receipts allow supervision to move from constant approval toward sampling and audit where appropriate.

A mature role can act autonomously because it leaves enough trace for the principal to understand what it did.

The trace does not make bad actions safe.

An irreversible harmful action is not repaired by excellent logging. Evidence is not a substitute for permission boundaries.

It changes detectability and accountability.

A silent failure can become visible.

A pattern can be measured.

A correction can be tied to the actual incident.

A model upgrade can be compared with earlier behavior.

A dispute about what happened can be resolved from records rather than memory.

This is especially important when agents manage agents. A final answer may be produced by several layers of delegation. The receipt should preserve material provenance through the chain.

The principal does not need to know every subagent's wording. She may need to know that the price recommendation came from a source dated two years ago, that the legal constraint came from a current primary source, and that the final purchasing action was executed under a specific authority limit.

Without provenance, delegation can launder uncertainty.

The worker says “maybe.” The manager says “likely.” The final agent says “recommended.” The principal sees confidence whose original source was weak.

A receipt can preserve the weak link.

This creates an interesting inversion. In ordinary conversation, polished synthesis is valuable because it removes clutter. In autonomous work, some clutter is evidence. The system must know which details can be compressed and which must survive.

Source dates survive.

Conflicting instructions survive.

Approval identity survives.

State changes survive.

Known uncertainty survives.

The twenty-seven discarded search queries probably do not.

The distinction is part of training.

A role that returns too little evidence is hard to trust.

A role that returns everything is hard to supervise.

The best receipt is not the longest. It is the smallest record that allows a competent reviewer to verify the consequential claim.

This standard varies by job.

A low-risk internal draft may need almost no receipt beyond the document itself.

A financial transaction deserves more.

A public factual claim may need sources.

A security-sensitive change may need tests, peer review, and deployment evidence.

A household purchase may need only the order confirmation unless the item is unusually expensive or nonrefundable.

Evidence should scale with consequence.

The principle avoids a common failure of governance: forcing high-stakes paperwork onto trivial work until everybody learns to ignore the paperwork.

Agents can generate forms effortlessly, which makes this danger worse.

If every action produces a beautiful compliance packet, the principal may feel safer while becoming less able to distinguish the packet that actually matters. Machine-generated bureaucracy is still bureaucracy.

The receipt should earn the attention it requests.

There is another reason evidence matters: agents can inflate traditional productivity metrics until the metrics lose meaning.

Documents written.

Tickets closed.

Lines of code produced.

Reports completed.

Customers contacted.

These counts once contained some relationship to scarce human effort. Agents can increase artifact volume dramatically without increasing useful consequence.

If the organization rewards the count, the agent can satisfy the metric beautifully.

The result is activity abundance.

The principal needs measures closer to state.

Did the customer problem stay solved?

Did the software become more reliable?

Did the reconciliation match the source of truth?

Did the decision improve?

Did the research reduce uncertainty?

Did the project reach the next real milestone?

Receipts help because they anchor output to a changed or verified condition rather than the number of artifacts emitted along the way.

This is Goodhart's law entering the agent economy with more horsepower. When a measure becomes a target, it tends to become less useful as a measure. Cheap machine production can accelerate the distortion. Reward summaries and you can get summaries. Reward closed tickets and you can get closures. Reward code volume and you can get code.

The scarce object is not production.

It is consequence you still wanted after the metric was optimized.

A receipt can make the consequence harder to fake, though never impossible.

This is why independent evidence matters.

An agent should not be the sole authority for whether its own high-stakes task succeeded.

If it says the website is live, check the website.

If it says the payment settled, check the payment system.

If it says the tests passed, preserve the test output from the test runner.

If it says a source supports the claim, link the source.

The evidence should come from the world the action changed, not only from the worker that wants credit.

Human institutions learned this through separation of duties and audit. The book does not need to recreate an accounting department around every personal agent. The principle can remain lightweight: where error matters, prefer evidence the agent cannot create merely by saying it exists.

This becomes particularly important as models become persuasive enough to explain away anomalies.

A human reviewer sees a discrepancy. The agent offers a plausible reason. The explanation may be correct. The reviewer can become satisfied by coherence instead of checking the underlying state.

Fluency turns into evidence laundering.

The receipt interrupts the spell.

Show the record.

Show the source.

Show the test.

This is not hostility toward the agent. It is ordinary professional discipline.

The mature principal can be highly trusting precisely because verification is built into the role.

Trust without evidence requires constant personal confidence in the worker. Trust with receipts can survive worker changes.

A new model can take over the role. The evaluation and evidence standard remain. The principal does not have to infer reliability entirely from personality.

This is one reason receipts contribute to portability.

The valuable system is not only the model that performs the work. It includes the proof format that says what acceptable completion looks like.

A company can switch providers and keep the requirement that every customer-credit action record account identity, amount, policy basis, approval, and transaction state.

A writer can switch models and keep the requirement that every factual claim added to a researched chapter has a traceable source.

A developer can switch coding agents and keep the test suite and branch protections.

The worker changes.

The institution keeps its standards.

The receipt also improves correction culture.

When a failure occurs, the principal can reconstruct the meaningful path. Not the model's private chain of thought, but the observable decisions and state changes.

The wrong source was retrieved.

The right source was retrieved and misread.

The correct recommendation was generated but the wrong account was modified.

The approval existed but had expired.

The tool reported success while the external state remained unchanged.

Different failure, different correction.

Without evidence, every incident collapses into “the agent messed up.” That diagnosis teaches nothing.

There is a privacy cost to receipts.

Logs and evidence can preserve sensitive information. A system that records every action creates a new archive. The principal must decide what belongs in the receipt and how long it should live.

The same disciplines from memory apply: purpose, scope, provenance, retention.

Do not preserve private content forever merely because it helps debug a low-risk workflow.

Do not put secrets into logs that wider groups can access.

Do not make accountability depend on surveillance so broad that the cure becomes another problem.

Evidence should be sufficient, not total.

This is a useful theme across the whole book. More is not the same as safer.

More memory can create confusion.

More agents can create coordination burden.

More approvals can create ceremonial oversight.

More logs can create noise and privacy risk.

The trained role learns sufficiency.

Enough context to act.

Enough authority to complete the job.

Enough evidence to verify consequence.

That balance is what makes autonomy economic.

A human principal cannot supervise abundant machine labor by watching it think.

The principal needs the machines to leave reality in a form that can be checked.

The receipt is not paperwork added after the work.

Once agents can act, the receipt is part of the work.