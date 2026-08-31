# Triage

Triage begins with an admission that would sound cruel anywhere else: not everyone can be treated first.

The admission is not the cruelty. The scarcity is.

In a busy emergency setting, patients arrive with different injuries, different risks, and different clocks. The person who entered the building first may be able to wait. The person who arrived later may not survive the wait. Triage creates a provisional order from incomplete information. It does not promise that the first classification is a full diagnosis. It promises something narrower and more urgent: enough understanding to decide what should happen next.

This is one of the oldest practical answers to a problem artificial intelligence will make more common. When the supply of possible analysis exceeds the supply of consequential action, systems must sort before they solve.

The instinct of computer science has often been the opposite. Given an input, compute the answer. Given a query, return the result. The architecture implies that every admitted task deserves completion. Real institutions rarely have that luxury. They abandon, defer, batch, escalate, sample, or redirect constantly. A mature cognitive system needs the right to say not only “I do not know” but also “this does not deserve me yet.”

That sentence sounds strange because intelligence has been framed as a service. If a user asks, the system should help. At small scale, this is hospitable. At large scale, it is a policy of first-come cognitive allocation. The fastest typist, the noisiest department, or the process capable of generating the most requests can consume capacity. When demand is effectively infinite, politeness becomes a scheduling algorithm.

Triage makes the scheduling algorithm explicit.

WHO emergency guidance separates immediate danger from priority conditions and non-urgent cases. The categories exist because the clinical system has to act under time pressure before it knows everything. A person with an obstructed airway does not need the perfect differential diagnosis before someone opens the airway. The system is designed around consequences of delay.

Consequences of delay should become a basic variable in AI allocation.

Most current AI interfaces hide it. A request for a poem and a request to interpret a safety alarm can appear as identical blocks of text sent into identical infrastructure. Commercial systems may prioritize by account tier, rate limit, or technical load rather than by the human cost of waiting. This is understandable: platforms usually do not know enough about context to rank moral urgency safely. But organizations deploying AI inside hospitals, factories, governments, and infrastructure will know more. They will have to decide what deserves immediate cognition.

The obvious answer—highest stakes first—is not sufficient.

High stakes can also demand slowness. A routine operational decision may need a fast answer; a capital allocation worth billions may benefit from days of independent analysis. An ambiguous security alert could be both urgent and uncertain. A child asking a tutor for help may be low financial value and high developmental value. A minor software warning can be a weak signal of a catastrophic failure. Triage is not ranking by drama. It is matching the next action to the structure of risk.

Three questions are especially useful. How costly is delay? How costly is error? How reversible is action?

These dimensions produce different treatment. High delay cost and low error cost favors speed. High delay cost and high error cost demands redundancy, preplanned procedure, and possibly multiple independent systems operating in parallel. Low delay cost and high error cost favors deliberation. Low delay cost and low error cost can be deferred, batched, automated cheaply, or ignored.

Reversibility changes everything. A model can be allowed to reorganize a draft document with wide autonomy because the edit can be undone. The same model should encounter stronger barriers before sending money, deleting evidence, changing a medication, or making a public accusation. Reversibility converts some errors from catastrophes into experiments.

The best cognitive systems will therefore triage not only tasks but permissions.

A request may enter through a weak model that classifies it, extracts context, and checks for known hazards. Routine work ends there. Ambiguous work moves to a stronger model. High-consequence work triggers retrieval from authoritative sources, independent verification, or human review. Certain actions remain forbidden regardless of apparent confidence. This resembles a hospital more than a chatbot: most cases handled locally, some escalated, a few rushed through a different path entirely.

The design challenge is that triage itself can fail.

A misclassified routine case can become a tragedy. A system that confidently labels an unusual problem as ordinary may prevent the very escalation that could correct it. This is why good triage systems are sensitive to uncertainty and change. They reassess. New symptoms alter priority. A patient who was stable can deteriorate. A software incident that appeared contained can spread. A financial anomaly can become a liquidity crisis.

Static classification is not triage. Triage is a loop.

AI systems are well suited to some parts of this loop because they can monitor continuously, compare patterns, and update. They are badly suited to other parts when their apparent confidence is poorly calibrated or when novel cases resemble familiar ones superficially. The institutional answer is not to choose “human” or “machine” as a category. It is to design escalation so that each can catch the other’s blind spots.

A human nurse may notice that a patient “looks wrong” before a structured score changes. A model may notice a subtle pattern across vital signs a busy clinician misses. Either signal can trigger a second look. The useful system preserves both channels.

This matters beyond medicine. Cybersecurity already operates through triage because the number of events exceeds the number of investigators. Fraud teams rank transactions. Newsrooms rank leads. Intelligence agencies rank reports. Maintenance teams rank faults. Software teams rank bugs. Customer support ranks cases. Courts rank motions and schedules. Every one of these systems is vulnerable to the same pathology: the ranking mechanism becomes the invisible constitution of the institution.

What does the ranker reward? Severity, revenue, seniority, noise, recency, political pressure, probability, ease of resolution, legal exposure? The answer determines who receives intelligence.

AI can make the constitution more hidden because the ranking function becomes statistical. A manager can say, “the system prioritized these cases,” as though priority emerged from nature. But a model’s output reflects an objective, training data, labels, thresholds, and operational decisions. Even a score based on predicted harm contains a choice about which harms count and how they are measured.

Triage therefore needs legibility.

Legibility does not mean every model must explain itself in a complete causal narrative. That standard may be impossible or misleading. It means the institution can answer practical questions: why was this class of case placed here; what data were considered; what threshold triggered escalation; how often are urgent cases missed; who can appeal; what happens when confidence is low; who owns the policy?

Without those answers, triage becomes fate by interface.

There is another problem: urgency can be manufactured.

Digital systems teach users that marking something urgent improves its chance of receiving attention. Soon everything is urgent. Organizations add “high priority” labels until the label means little. AI agents acting on behalf of users may learn the same game. If priority is awarded to requests that present the strongest case for urgency, agents will generate stronger cases. The scheduler becomes an arena of persuasion.

A robust triage system therefore cannot rely only on self-reported urgency. It needs external signals, quotas, identity, history, rate limits, and sometimes random sampling. A department that marks every task critical should not consume every expert. An automated agent that escalates too often should face a cost. A low-status user should retain some route to urgent help even without institutional influence.

This is where queuing theory meets justice.

Queues feel neutral because everyone can see the line. First come, first served is attractive for that reason. But equal waiting can produce unequal harm. A person with a minor injury can tolerate a delay that a person with sepsis cannot. A court case involving imminent deportation is not equivalent to a routine filing. A power-grid alarm during extreme weather is not equivalent to a scheduled report. Triage introduces discretion because reality contains different clocks.

Discretion creates risk of bias and abuse. The solution is not to pretend clocks are equal. It is to make the criteria contestable, measure outcomes, and preserve appeal.

AI may improve consistency in triage while worsening legitimacy. A machine can apply the same rule repeatedly. That can reduce arbitrary variation. But people affected by the rule may need a human avenue to challenge context the system does not represent. Consistency is not fairness if the classification categories are wrong.

The problem becomes sharper in public services. Suppose a city uses an AI system to triage housing inspections. It predicts which complaints indicate severe hazards and routes inspectors accordingly. If the system is accurate, scarce inspectors may reach dangerous buildings faster. But the training data may reflect neighborhoods where residents historically complained more, where officials historically inspected more, or where documentation was better. A model can turn institutional history into a future priority map.

The correct response is not a slogan about bias. It is design work. What outcome is being predicted? What populations are under-observed? Which cases should be sampled regardless of score? How do residents appeal? Are model errors audited geographically? Is there a public explanation of the allocation policy? Does the system optimize risk reduction, complaint closure, legal exposure, or visible productivity?

Triage always reveals the objective function eventually.

Private companies face a parallel issue with customers. When AI lowers support cost, firms can theoretically provide more help. They can also use AI to create elaborate barriers that keep expensive human attention away from customers. The same technology can broaden service or ration it more aggressively. An automated agent that resolves ordinary problems is useful. An automated agent whose hidden objective is to exhaust complainants is an allocation device for denying attention.

The difference may not be visible in benchmark accuracy. It lives in policy.

One of the strongest uses of AI triage is to protect scarce expertise from routine work. Experts are often used badly because organizations confuse prestige with routing. The most senior lawyer reviews matters a junior system could handle. The specialist physician answers questions primary care could resolve. The principal engineer is pulled into tickets that never needed her. This feels safe—send the hard-looking thing upward—but it degrades the expert pool. Scarce expertise spends its days confirming the ordinary.

Good triage should increase the proportion of expert time spent on cases where expertise changes the outcome.

That requires measuring not how many cases the expert touches but the marginal value of the touch. If an AI system can safely handle ninety percent of routine review, the remaining ten percent may become stranger and harder. Expert productivity measured by case count might fall even while expert value rises. Institutions need metrics that understand selection effects.

This will be a common trap. As automation absorbs easy cases, human performance appears worse because humans inherit the residue. A customer-service worker sees only angry, ambiguous customers. A radiologist sees more uncertain scans. A programmer receives the bugs agents could not fix. A teacher spends more time with students whose confusion survived personalized tutoring. If management compares the new human queue to the old average, it may conclude people deteriorated.

In fact, the routing improved.

The same selection effect changes training. Experts become experts partly by handling routine cases before unusual ones. If AI removes the lower rungs, novices may be thrown directly into complexity without the pattern exposure that once built judgment. Triage that maximizes today’s efficiency can reduce tomorrow’s expertise.

This is a recurring theme of intelligence allocation: the flow of work is also the flow of learning.

A hospital cannot route every easy case away from trainees and still expect them to become clinicians. A law firm cannot automate all basic research and assume new lawyers will somehow acquire the instincts built through basic research. A software team cannot let agents write every straightforward function and still expect junior engineers to understand systems deeply enough to handle failures. Allocation must include developmental value.

This suggests a deliberate inefficiency: reserve some tractable work for learning.

The machine may be able to do it faster. That is not the only objective. Flight simulators deliberately create work no passenger wants a pilot to encounter for the first time in reality. Education creates artificial tasks because performance today is less important than capability tomorrow. Apprenticeship routes work partly by what the worker needs to learn.

AI systems should participate in that routing. They can distinguish production mode from training mode. In production mode, handle the routine. In training mode, surface the routine case to the learner, observe, give feedback, and intervene if necessary. This turns triage from pure labor substitution into capability formation.

The developmental budget also applies to machines. An organization needs to learn where its systems fail. If every low-confidence case is handed to humans without recording why, the boundary never improves. If automated systems act without sampling and review, silent errors can persist. Triage should create a stream of informative cases for evaluation: disagreements, near thresholds, novel patterns, appeals, and outcomes.

A good triage system learns from its exceptions.

Toyota’s production philosophy offers an instructive parallel. Jidoka, often translated as automation with a human touch, includes the idea that abnormalities should become visible and can stop production rather than letting defects flow invisibly downstream. The point is not that every factory should mimic Toyota. It is that a well-designed system treats exceptions as information. A stop can be costly in the moment and valuable because it directs attention to the source of abnormality.

AI systems need their own andon cords.

Users should be able to flag an answer that feels wrong. Agents should be able to escalate when tools disagree. Models should be allowed to say that a case is outside their reliable domain. Monitoring should notice unusual distributions. High-consequence systems should fail into known states rather than improvise confidence.

The cultural piece matters. An andon cord works only if pulling it is not punished by default. An escalation path works only if the person or system using it is not treated as incompetent for admitting uncertainty. Organizations that reward apparent certainty will receive confident automation.

Triage is therefore not merely an algorithm. It is a culture of provisional judgment.

The triage nurse does not claim omniscience. The classification is a decision made with what is available now, subject to change. That humility is a strength. AI interfaces should communicate the same temporal quality. “Based on current evidence, this can wait” is different from “this is not serious.” “No escalation needed yet” is different from “resolved.”

Language shapes whether people remain alert to change.

The distinction between routine triage and mass-casualty triage sharpens the point because the objective can change when the resource environment changes. WHO guidance describes ordinary acuity-based triage as a way to identify people who need immediate intervention and those who can safely wait. Under mass-casualty conditions, however, needs exceed available resources by definition. The system must consider not only who is sickest but where limited intervention is most likely to help.

This is ethically difficult precisely because the same person can be classified differently under different resource conditions. The patient's body did not change. The surrounding system did. A category is therefore never only a property of the case. It is partly a relationship between the case and available capacity.

AI allocation will inherit this relational character. A request may deserve a frontier model during normal load and a smaller model during a crisis. A security alert may receive a human investigator when the queue is short and automated containment when hundreds arrive at once. A rural clinic may use an AI tool for tasks that a major academic hospital sends directly to a specialist because the local alternatives differ. The correct allocation cannot be defined solely by the intrinsic difficulty of the question.

This complicates benchmarking. Benchmarks usually hold the task still and compare systems. Institutions live inside changing queues. The relevant performance measure may be how gracefully allocation changes when demand exceeds nominal capacity. Does the system preserve the highest-consequence work? Does it communicate delay? Does it degrade into a known mode? Does it keep some capacity for surprises, or does the first surge consume everything?

Mass-casualty practice also emphasizes reassessment. A person categorized as able to wait can deteriorate. A red category can stabilize. The queue is alive. This matters because automated classification often acquires an aura of finality once written into a database. A score is generated at 9:03 and remains attached to the case at noon even though the world has changed.

A robust allocator needs expiry.

Every priority should have conditions under which it must be reconsidered: elapsed time, new evidence, failed attempts, changing system load, user appeal, or unusual disagreement. A low-priority software alert that repeats for six hours may become high priority. A customer support case that returns three times is not the same case. A public-benefits application delayed beyond a legal deadline changes category even if its substantive facts do not. Time itself can be new evidence.

This suggests an important separation between classification and ownership. The classifier can recommend a queue position, but some person or process must own the consequences of the queue. Otherwise everybody can point to the score when a case waits too long. Triage without ownership is merely automated sorting.

The system also needs to know when not to optimize globally. In a mass casualty, maximizing lives saved may be a defensible emergency objective. In ordinary life, institutions are constrained by rights that cannot be traded away for aggregate efficiency. A court cannot simply deny a hearing to an inconvenient minority because the average docket would move faster. A school cannot allocate every resource to students with the highest predicted test-score response and call the result neutral.

Allocation objectives live inside constitutional boundaries.

That is one reason appeals matter. An appeal is not only a concession to people who dislike their category. It is a sensor for missing variables. If one neighborhood repeatedly appeals a housing-inspection triage model and wins, the pattern may reveal an input the model does not see. If one type of medical case is frequently escalated after initial low priority, the triage rule may need revision. If experts override a model only when a particular supplier is involved, local knowledge may have identified a real dependency.

Appeals are expensive if treated one at a time. They are valuable if treated as data about the allocation system.

The Toyota analogy belongs here for the same reason. Jidoka is often summarized as stopping when an abnormality occurs. The deeper feature is that the abnormality becomes visible enough to organize a response and, ideally, prevent recurrence. A line stop is not merely a local inconvenience. It is a piece of information about the process.

An AI system that escalates every strange case to a human but never learns from the escalation has an andon cord without kaizen. It protects the present task while wasting the evidence the exception created. A mature system records why the case escaped automation, what the human noticed, whether the action was correct, and whether the boundary should move.

The purpose of triage, then, is not simply to make scarcity tolerable. It is to make scarcity informative. The queue tells the institution what it lacks. Repeated escalations reveal where models are weak, where policy is ambiguous, where demand is growing, where training is thin, and where rights are colliding with efficiency.

A queue is a map of unmet capability if anyone bothers to read it.

The larger lesson is that abundance makes triage more, not less, important. When cognition is expensive, many questions are never asked. When cognition is cheap, questions multiply. The system must choose which deserve depth, verification, authority, and immediacy. If those choices are not designed, they will be made by defaults: arrival order, user status, money, noise, or whatever the software happens to optimize.

There is no neutral queue.

The goal of triage is not to identify the most important thing in the universe. It is to allocate the next unit of intelligence where delay, error, and consequence justify it, while preserving routes for reassessment and surprise.

That modest definition is powerful. It turns intelligence from a contest of answers into a discipline of next actions.
