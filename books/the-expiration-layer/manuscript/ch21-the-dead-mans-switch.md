# The Dead Man’s Switch

Some systems should continue only while somebody is actively proving they are still there.

Railways learned this in brutal physical terms. A locomotive moving at speed is not a place where silence should automatically mean everything is fine. Early safety devices evolved around a simple problem: what happens if the person controlling the machine becomes incapacitated?

The answer became a family of mechanisms commonly described as dead man’s controls. The exact implementations differ across eras and equipment. A pedal may need pressure. A handle may need to remain engaged. More sophisticated vigilance systems demand periodic responses. If the expected human signal disappears, the system does not interpret absence as consent to continue indefinitely. It moves toward a safer state.

The principle is larger than trains.

Presence can expire.

That sounds obvious for a heartbeat. It is less obvious for authority.

Modern systems routinely grant power based on a momentary proof and then allow that power to persist long after the proof has gone quiet. A user authenticates once. A session remains alive. An operator starts a process. It keeps running. An employee opens a privileged console and walks away. A trading strategy is activated and continues under market conditions its designer is no longer watching. An AI agent receives a task and keeps taking actions after the person who initiated it has gone offline.

The original signal was real.

The continued presence is inferred.

This is a distinct expiration problem because the thing that goes stale is not a fact, model, law, or permission. It is supervision itself.

We tend to model supervision as binary: human in the loop or human out of the loop. Reality is temporal. A person can be nominally responsible and functionally absent. A manager can approve an agent at 9:00 a.m. and stop paying attention by noon. A clinician can initiate an automated process and become occupied with an emergency. A security operator can leave a console open. A parent can hand a device to a child. A pilot can become incapacitated. A trader can lose connectivity.

The system needs to know how long human silence is allowed to mean continued authorization.

That interval depends on the action.

A music playlist can continue for hours without supervision. A lawn sprinkler can run on a schedule. A low-risk data cleanup can finish overnight. A robot moving heavy equipment near people deserves a different standard. An agent spending money deserves another. A system sending public communications in a person’s name may need tighter limits as the audience or consequence grows.

The expiration layer therefore needs a concept of liveness.

Not the crude version that constantly asks, “Are you still there?” until the user wants to throw the machine away. Liveness should be proportional to consequence and inferable from ordinary interaction when possible.

A person actively reviewing an agent’s proposed actions is obviously present. A person who has not touched the device for hours is less clearly present. A workflow that has moved from drafting to transferring funds has crossed a consequence boundary even if only seconds passed. The need for fresh presence can be triggered by risk, not merely time.

This is how safety systems already think.

Industrial controls use interlocks. Computing systems use heartbeats and leases. Distributed systems do not assume a node remains healthy forever because it answered once. They ask again. If heartbeats stop, another component can take over, isolate the node, or mark it unavailable.

The philosophical insight is almost embarrassingly simple: yesterday’s proof of life is not proof of life now.

Yet our emerging agent systems are often built around exactly that assumption.

A user says, “Handle this.”

The agent decomposes the goal. It sends messages, calls tools, opens accounts, schedules actions, updates files, perhaps delegates to other agents. The work can continue after the user closes the laptop.

This is one of the great promises of agents. Software becomes useful while we are absent.

A universal dead man’s switch would destroy that promise.

The right question is not whether agents may act while humans are away. It is which authorities are safe to exercise without fresh evidence of human presence.

An agent can monitor a flight price overnight. It can prepare a report. It can organize files. It can run tests. It can draft a plan. These actions are reversible or low consequence.

Buying a nonrefundable ticket is different.

Publishing an accusation is different.

Deleting the production database is different.

Accepting a settlement is different.

Sending a large wire transfer is different.

The agent may have general permission to pursue the goal and still need fresh presence at a boundary.

This suggests a new primitive for delegated software: presence-scoped authority.

Today we commonly scope authority by identity, resource, action, and sometimes time. A future capability can also specify whether it remains usable in the user’s absence.

“May draft emails for thirty days” is one permission.

“May send routine scheduling replies while I am away” is another.

“May spend up to $25 without me present” is another.

“May spend up to $2,500 only while I am actively supervising this session” is another.

“May never make this class of decision without fresh confirmation” is another.

The distinction would make autonomy less binary.

People could delegate broad low-risk work and reserve high-consequence transitions for moments of renewed liveness.

The system could also degrade gracefully when presence expires.

Instead of stopping all work, the agent can move from execute to prepare. It can gather information, draft the transaction, calculate options, and wait at the irreversible boundary. When the person returns, the work is ready for a small amount of judgment.

This is better than either extreme: an agent that constantly interrupts or an agent that treats a week-old instruction as unlimited present consent.

The dead man’s switch has another use: organizations.

Many institutional powers survive because nobody has to demonstrate that a responsible person is still attending to them. A scheduled job keeps moving money. A bot keeps posting. An API integration keeps exporting data. A vendor retains access. An automated campaign keeps contacting customers. The nominal owner may have changed jobs months ago.

Ownership itself needs a heartbeat.

A high-impact automation should periodically be able to answer: which current person or accountable role is watching this?

If nobody is, the system need not necessarily shut down instantly. It can narrow authority, notify successors, suspend high-risk actions, or enter a review queue.

This would prevent a class of organizational ghosts: active systems whose human sponsors have disappeared.

The idea becomes stranger and more important when agents delegate to agents.

Suppose a person authorizes an executive agent. The executive agent hires a research agent, which invokes a purchasing agent, which creates a cloud environment, which spins up another service. Authority can travel several layers away from the original human action.

If every downstream capability inherits the full lifetime of the original instruction, delegation becomes authority amplification.

A presence requirement can propagate instead.

The system can know that certain powers remain valid only while a chain of accountable supervision is live. If the root user disappears, low-risk work continues while sensitive branches freeze or demote.

Distributed systems already reason about lease ownership and failure detection. Agent systems will need the social equivalent.

There is an uncomfortable edge case: death.

Digital systems increasingly survive their users. Accounts contain money, writing, photographs, private messages, businesses, domains, subscriptions, cryptographic assets, automated processes, and AI memories. A person can die while software continues behaving as if the principal remains available somewhere off-screen.

Estate law, platform policies, contracts, and account-recovery systems address pieces of this problem. AI will make it more active.

What happens to a personal agent when its user dies?

Should it keep paying bills?

Should it answer messages?

Should it maintain a business?

Should it speak in the user’s voice?

Should family members inherit its memory?

Should recurring charitable gifts continue?

Should subscriptions cancel?

Should confidential instructions remain sealed?

There is no universal answer, but “keep running because no stop command arrived” is indefensible.

Death is the ultimate revocation event that software is terrible at detecting reliably and dangerous to infer casually.

The solution cannot be an algorithm guessing that someone died because they stopped logging in. People disappear from services for innocent reasons. False death declarations would be catastrophic.

The system needs explicit succession design.

A user can name trusted processes or legal representatives. Certain automations can have posthumous instructions. Others can suspend after a long absence and require a defined recovery process. High-consequence authority can be designed so it cannot simply persist forever without renewed proof of the principal or an authorized successor.

This resembles estate planning because it is estate planning for executable state.

The future estate will not contain only assets.

It will contain agents.

An agent may know how the business runs, which bills get paid, what the user promised, which drafts are private, how investments are managed, which people receive birthday messages, and which systems are maintained. Some of that knowledge should transfer. Some should die with the person. Some should become an archive. Some should remain inaccessible.

The distinction must be made before silence becomes permanent.

This returns us to the moral asymmetry of expiration.

A dead man’s control is attractive because it limits active power. It is dangerous when used to make rights or protections depend on constant demonstrations of presence. A pension should not stop because an elderly recipient failed to click a monthly “I am alive” button without robust safeguards. A person should not lose citizenship, property, or medical coverage because a liveness system made an error.

Presence checks belong closest to powers that can cause harm while unattended.

The train should stop if the operator is incapacitated.

The passenger’s right to be safe should not.

That is the deeper pattern.

We have built digital systems that are excellent at interpreting silence as continuation. The session stays open. The process runs. The subscription renews. The permission persists. The automation repeats. The agent proceeds.

Sometimes silence should mean exactly that.

Sometimes silence should change the mode.

The future of autonomy depends on knowing the difference.

A machine that can act without us needs more than permission.

It needs to know when our absence matters.