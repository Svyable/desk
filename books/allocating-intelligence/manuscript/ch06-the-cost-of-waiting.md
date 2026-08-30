# The Cost of Waiting

A correct answer can be late enough to be wrong.

This is easiest to see in physical systems. A controller that perfectly calculates where an aircraft was ten seconds ago may be useless for avoiding another aircraft now. A medical diagnosis made after a patient has deteriorated can be accurate and tragic. A fraud alert delivered after the money has left the account belongs to the history of the crime rather than its prevention.

Intelligence has a time value.

The concept is familiar in finance because a dollar now and a dollar later are not treated as the same asset. The same should be true of cognition. An answer has a useful life determined by how quickly the world changes and how long action remains possible. Some questions can tolerate weeks. Others expire between one heartbeat and the next.

AI systems invite us to ignore this because model quality is usually presented without a clock. A benchmark score says how often a system answered correctly under test conditions. Deployment asks an additional question: how long did it take to get the evidence, invoke the model, verify the output, acquire permission, communicate the result, and act?

That full interval is decision latency.

A slow system can still be excellent if the decision has a long horizon. Scientific review, treaty negotiation, capital planning, legal interpretation, and strategy may reward patience. A fast system can be excellent when the cost of waiting dominates. The problem is not speed itself. It is matching latency to consequence.

Modern finance provides extreme examples because markets convert milliseconds into money. High-frequency trading firms moved servers closer to exchange infrastructure, bought faster links, and optimized systems around tiny delays. It would be absurd to generalize this race to every form of intelligence. The interesting point is narrower: once an environment values fast reaction, architecture changes. Geography changes. Verification changes. Authority moves closer to action because round trips are expensive.

Physical control systems have always known this. Reflexes live close to the body. A person does not consciously solve differential equations before withdrawing a hand from heat. The nervous system uses different layers of response because every sensation does not deserve the same deliberative path.

AI organizations will need cognitive reflexes.

A cybersecurity system may block a known malicious pattern immediately and escalate an unfamiliar pattern for analysis. A factory machine may stop when a sensor crosses a dangerous threshold without waiting for a large language model. A vehicle may use local perception and control for immediate motion while consulting slower planning systems for route choices. A financial system may freeze a suspicious transaction temporarily, buying time for deeper review.

The pattern is act narrowly to preserve optionality, then think more deeply.

This is different from acting broadly and hoping to reverse later. Good low-latency actions are often designed to be conservative: stop, hold, isolate, slow, preserve evidence, enter a safe state. They reduce the rate at which consequences accumulate.

The idea of a safe state appears across engineering because time pressure transforms uncertainty. If a machine behaves abnormally, stopping it may be safer than continuing while diagnosis occurs. Toyota’s jidoka philosophy institutionalized the value of making abnormalities visible and stopping production rather than allowing defects to travel downstream. In computer systems, circuit breakers and rate limits can prevent a local error from becoming a flood. In medicine, stabilizing airway and circulation can precede complete diagnosis.

Intelligence allocation should ask: what can we do now that buys better thinking later?

This question is underused in AI safety discussions, which often frame choices as act or wait. There is usually a third category: reversible containment. An agent need not either send an uncertain email or do nothing; it can draft and queue. A financial system can pause a transfer. A deployment system can canary a change to a small population. A legal assistant can prepare a filing without submitting it. A personal agent can hold a purchase for confirmation.

These intermediate states convert latency from pure cost into a resource.

The opposite pathology occurs when institutions insist on full deliberation for events that move faster than their governance. A security team detects an attack but needs three approvals to isolate a system. A public agency sees a fast-moving hazard but cannot publish until a chain of sign-offs completes. A company knows a model is misbehaving but waits for a scheduled committee because nobody is authorized to disable it.

In these cases, the intelligence exists and the authority arrives late.

NASA mission rules are instructive because they moved some decisions out of the emergency and into preparation. Managers could establish boundaries before flight. When time permitted, the flight director could consult. When time did not permit, operational responsibility was clear. The institution bought speed in advance by deciding who would be allowed to decide later.

This is a general way to reduce decision latency: precommitment.

Emergency checklists, standing orders, incident runbooks, spending limits, escalation thresholds, and constitutional rules all do cognitive work ahead of time. They are stored decisions. They reduce the amount of fresh reasoning required when time is scarce.

AI systems can expand the value of precommitment because they can execute policies with fine-grained context. But they can also tempt organizations to replace policy with improvisation: the model is smart, so let it decide case by case. This can be attractive when the environment is complex. It can also create unacceptable variance in high-pressure situations.

A mature design separates what must be decided consistently in advance from what deserves contextual judgment at runtime.

Speed has another hidden cost: it can synchronize error.

When decision latency falls across a network, participants react to one another faster. This can improve coordination in ordinary conditions and amplify instability in unusual ones. The 2010 Flash Crash showed how rapidly modern market structure could produce extraordinary price movements. The detailed causal story is specific to that event and should not be turned into a generic fable about algorithms, but the broader systems lesson is useful: fast automated responses can interact in ways no individual participant intends.

Human institutions possess friction that sometimes prevents cascades. Markets close. Trading halts. People ask questions. A clerk notices an odd number. A manager delays approval. These frictions can be maddening in routine operation and life-saving during abnormal conditions.

AI will remove many frictions. We should decide which ones to replace with designed brakes.

The Knight Capital incident in 2012 is a stark example of speed meeting weak control. A software deployment problem left old code active on one server. The system sent orders rapidly, and the consequences accumulated before the firm could stop them. The SEC later emphasized failures in deployment procedures and controls, including the absence of adequate review and safeguards. The lesson is not “automation is dangerous.” The lesson is that high-speed action requires high-speed containment.

A human approval step after every order would have destroyed the usefulness of the system. The right control had to live at machine speed: limits, monitoring, deployment discipline, kill switches, and fault isolation.

This distinction matters for AI agents. “Keep a human in the loop” is not a universal answer when an agent may perform thousands of actions per minute. Human review cannot operate at that frequency. Either the action space must be narrowed, the rate must be limited, automatic controls must enforce bounds, or the autonomy should not be granted.

Responsibility has a maximum clock speed.

A person can meaningfully supervise only a certain volume of dynamic behavior. Above that, the person becomes an after-the-fact auditor. That may still be valuable, but it should not be described as real-time control.

The aviation industry has wrestled with related questions for decades as automation changed the pilot’s role. Flight-deck human-factors research emphasizes workload, mode awareness, alerting, and predictable automation because a system that behaves correctly but unexpectedly can still create danger. Time pressure shrinks the space for reconstructing what the automation is doing.

Predictability is therefore a latency feature.

If a person must spend precious seconds understanding the machine’s current mode, intention, or limitations, the interface has imposed cognitive delay. Good systems reveal the state necessary for intervention. A pilot does not need a philosophical explanation of the autopilot. The pilot needs to know what it is commanding, what it will do next, and how to change it.

AI agents need comparable legibility at the moment of action. What is the agent doing now? Which authority is it using? What is queued? What has already happened? What can still be undone? Which assumption triggered escalation? A beautiful natural-language explanation generated afterward is not a substitute for operational state.

This suggests a distinction between explanatory latency and control latency. Explanations can take time. Control cannot always wait. Systems should expose immediate coarse controls—pause, stop, isolate, revert—while deeper analysis proceeds.

The cost of waiting also changes how verification should be allocated.

People often imagine verification as adding a second check after the first answer. In urgent systems, verification may need to run in parallel. Multiple sensors compare. Independent models evaluate simultaneously. Deterministic constraints reject impossible outputs. A person sees both recommendation and uncertainty at once. The architecture spends more resources to preserve time.

Parallelism is a way of buying lower latency with greater capacity.

But parallelism can create its own attention problem. If five systems return five analyses, someone must integrate them. Diversity is useful when disagreement carries information. It is wasteful when the outputs are long variations of the same answer. Fast verification should therefore be designed around discriminating checks rather than duplicated prose.

A unit test is valuable because it converts a broad question—“is this code correct?”—into a fast check on a specific property. A type checker, formal constraint, checksum, dosage range, financial limit, or schema validator can perform the same role. The best verifier may be less “intelligent” than the generator because it asks a narrower question with a clearer failure signal.

This is one of the recurring reversals in allocating intelligence: strong creation paired with simple constraint.

Latency also has social dimensions. Slow justice can become injustice. Slow benefits can arrive after eviction. Slow medical appointments can turn manageable conditions into emergencies. Slow permits can protect communities or simply preserve scarcity for insiders. The value of faster intelligence will depend on whether institutions can move at the same speed.

A legal model can research a case in minutes, but a court calendar may still take months. An AI diagnostic tool can interpret an image quickly, but treatment may wait for a bed. A planning model can optimize a grid upgrade, but construction and permitting take years. In these settings, cognitive latency is not the bottleneck.

The danger is optimizing the visible stage because it is technological while ignoring the slower physical or institutional stage.

This happened in earlier waves of digitization. Forms moved online while the underlying approval chain remained unchanged. Documents traveled faster; decisions did not. AI can produce a more sophisticated version: perfect briefs arriving at a committee that still meets monthly.

Allocation begins by locating the actual clock.

What is the deadline imposed by physics, markets, law, biology, or human patience? Which stage consumes most of it? Which delays protect quality and which are merely inherited? Where can precommitment reduce delay? Where can reversible containment buy time? Where must autonomy live because human reaction is too slow? Where should friction remain because speed amplifies risk?

These questions make latency a design material rather than a complaint.

There is also a personal version. AI promises to answer immediately, and immediate answers can shrink the habit of waiting. Some problems improve when slept on. Some emotions become less authoritative after an hour. Some arguments should not be optimized at the speed of anger. A personal agent capable of instant drafting may be most useful when it refuses to send.

Intelligence can create a pause as well as remove one.

A good system understands that time has several values. There is time we lose because we are waiting unnecessarily. There is time we buy because more evidence is coming. There is time we preserve by acting quickly. There is time we deliberately insert to prevent impulse from becoming consequence.

The mature allocation question is not “How fast can the model answer?”

It is “What is this decision’s clock, and how should intelligence be arranged around it?”
