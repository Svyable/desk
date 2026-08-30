# The Price of Attention

The most expensive person in a modern organization may be the one everyone is allowed to interrupt.

Not expensive in salary, though the two often correlate. Expensive because every incoming request can reroute the work of dozens of other people. A chief engineer answers a question and twenty developers change course. A surgeon glances at an alert and a procedure pauses. A regulator reads a warning and a market waits. A parent looks down at a phone while a child is telling the part of the story that will not be repeated.

Attention has always been scarce, but digital systems learned to spend it casually.

The economics are peculiar. The sender pays almost nothing to create an interruption. The receiver pays nearly all of the cost. An email can be written in seconds and occupy minutes across fifty recipients. A notification generated automatically may cost a fraction of a cent and interrupt a physician whose next minute is worth far more. A dashboard alert can be added by a developer who will never sit in the control room where the alarm sounds. A model can generate ten thousand “insights” without suffering the fatigue of reading one.

This asymmetry matters because artificial intelligence radically lowers the cost of producing attention-seeking material.

Before AI, writing imposed friction. A person had to compose the report, summarize the meeting, draft the proposal, prepare the deck, or write the code review comment. The friction was often wasteful, but it also limited volume. When generation becomes cheap, output can expand until the receiving side becomes the constraint. We will not merely have more information. We will have more information shaped specifically to win access to attention.

Herbert Simon’s famous observation about information abundance was made before the web, social media, smartphones, or generative models. He argued that an information-rich world creates a poverty of attention. The sentence survives because it describes a structural relation rather than a particular technology. Information is not useful without a recipient. When supply grows faster than the capacity to receive, selection becomes valuable.

AI changes selection in two opposite ways. It can protect attention by filtering, summarizing, ranking, and handling routine material. It can also industrialize interruption by producing personalized, plausible, context-aware reasons that something deserves attention now.

Both futures can be true in the same system.

Consider clinical alerts. Software can watch more variables than any clinician could continuously track. That is a genuine advantage. But if the software produces too many warnings, clinicians learn that an alert is usually not urgent. The alert still technically appears. Functionally, it has been discounted. The problem is known as alert fatigue, but the phrase can obscure the economic structure. The system is minting claims on scarce attention without a hard budget.

Organizations often respond by adjusting thresholds. Fewer alerts, only the serious ones. This helps until a missed event produces a demand for sensitivity. Then thresholds move again. The deeper problem is that attention is treated as free in the design process and expensive only after deployment.

A better design begins by pricing interruption.

The price need not be money. It can be an internal rule: to interrupt a certain role, an event must cross a defined severity threshold; repeated alerts from the same source consume a rate limit; low-confidence signals are batched; systems that interrupt must record whether the interruption changed action; users can inspect which sources are spending their attention. In effect, the institution creates an attention ledger.

This sounds bureaucratic until one notices that every serious control system already does something similar. Aviation distinguishes warnings, cautions, and advisory information because not every condition deserves the same claim on the crew. Emergency medicine distinguishes urgency. Networks prioritize packets. Operating systems schedule processes. Human attention deserves at least as much design discipline as processor time.

The alternative is cognitive denial-of-service.

A denial-of-service attack overwhelms a system with more requests than it can usefully handle. The requests need not be individually complex. Their power comes from volume. Human institutions can be attacked accidentally in the same way. A compliance regime adds reports until the regulator cannot distinguish signal from ritual. A company adds metrics until every team can prove success. A manager asks an agent to monitor every competitor, customer, issue, and employee signal, then receives an “executive briefing” containing so many developments that the briefing becomes a new job.

The AI era makes this failure cheap to create.

It also gives us tools to fight it. A personal agent can act as an attention firewall. It can know that a person is driving, sleeping, writing, grieving, or in conversation and refuse most claims on the channel. It can aggregate routine notices and escalate only exceptions. It can learn that a particular alert source is noisy. It can notice that three messages are manifestations of one underlying problem. It can hold information until the recipient reaches a context in which action is possible.

This is more than convenience. It is allocation of a human life.

Time-management advice often treats attention as a private moral problem. Turn off notifications. Practice discipline. Make a list. These techniques are useful, but they place the burden on the person receiving systems designed by others to break concentration. Attention allocation is institutional before it is personal. A hospital decides which alerts can sound. A company decides whether meetings default to thirty minutes. A platform decides whether unread badges glow. A school decides whether students are reachable during class. A government decides how many forms must be read before a benefit can be claimed.

Designers create attention policy whether they acknowledge it or not.

One of the most important properties of attention is that it is state-dependent. An hour is not an hour. A person can perform difficult reasoning in one hour and barely read in another. Fatigue, stress, noise, hunger, fear, context switching, and emotional load change the effective supply. A surgeon in the first hour of a planned day and a surgeon in the fifteenth hour of a crisis do not possess interchangeable units of attention. Neither does a citizen reading a tax notice at a desk and the same citizen reading it beside a hospital bed.

Machine systems can exploit this state dependence or protect against it.

Advertising has long been interested in the moment of receptivity. AI can make such targeting more precise. A system with access to personal context can infer when someone is anxious, lonely, hurried, or uncertain. It can generate the message most likely to capture attention then. The same capabilities can be used benevolently: delay a financial decision when the person is distressed; surface a medication reminder when action is possible; summarize rather than interrupt; translate a dense notice into language the recipient can actually use.

The ethical difference is not simply whether AI is persuasive. It is whose objective governs the allocation of attention.

This is where attention becomes political economy. Platforms compete for it because attention can be converted into money, influence, data, or action. Employers claim it because labor contracts purchase slices of a person’s day. Families and communities depend on forms of attention that are economically valuable but often unpriced. Democratic institutions require citizens to spend attention on matters whose benefits are shared and delayed. Every system is bidding.

AI increases the sophistication of the bids.

A model can write a notification in the recipient’s preferred tone, at the preferred length, with knowledge of prior behavior. It can generate infinite variants and test which wording wins. The recipient may use another model to summarize, block, or negotiate the incoming stream. We can imagine an arms race of agents on both sides of attention: sellers’ agents producing ever more tailored appeals, buyers’ agents deciding which deserve entry.

That future sounds exotic, but spam filters already perform a primitive version. The deeper question is what rights the receiving agent represents. Does it work for the user, the platform, the employer, the advertiser, or all of them under conflicting incentives? An attention firewall controlled by the same party that profits from interruption is not a firewall. It is a tollbooth.

The economics of attention also change inside organizations when AI systems become participants in meetings and workflows. Today, an employee may hesitate before asking a senior colleague to review an early idea. The social cost of interruption creates a filtering function. With an agent, the employee can ask endlessly. This is liberating. Junior people gain access to patient explanation. Experts can externalize routine mentoring. But the abundance of private advice can produce public coordination problems.

Suppose every member of a product team asks an agent to improve the plan. Each receives ten suggestions. The team arrives with a hundred locally sensible modifications. Meeting time is consumed reconciling improvements. The agent optimized each person’s document; nobody optimized the shared attention required to integrate them.

The scarce unit becomes common context.

Organizations often underestimate common context because it is hard to measure. A team that shares a mental model can coordinate with fewer messages. A team whose members each possess rich but different machine-generated analyses may communicate more while understanding each other less. Private intelligence can increase faster than collective intelligence.

This suggests another attention rule: not every answer should be personalized. Sometimes the best allocation is a shared artifact everyone sees. Mission rules, checklists, runbooks, public dashboards, and written decisions create common reference points. They sacrifice some tailoring to reduce coordination cost. AI systems should know when to synthesize into shared memory rather than multiply private interpretations.

The value of common context is clearest under pressure. In mission control, the flight director did not need every raw telemetry stream. Specialists watched them. What mattered was that unusual conditions could be escalated through known channels and that the room shared enough procedure to understand what an escalation meant. In aviation, alert design attempts to distinguish levels of urgency because a cockpit cannot become a democratic conversation among every sensor. In emergency response, the dispatcher compresses a caller’s story into categories the system can route.

Compression is not the enemy of intelligence. It is one of the ways intelligence protects attention.

But compression has costs. A summary can hide dissent, uncertainty, or the one detail that matters. Ranking can create invisibility. A filter can reproduce bias. An agent that shields a manager from “low-priority” messages may also shield the manager from early evidence that the priorities are wrong. Every attention system therefore needs routes around itself.

This is the paradox of gatekeeping. Without gates, attention floods. With perfect gates, surprise disappears.

Healthy institutions solve this with multiple channels. Routine information travels through structured paths. Urgent exceptions can escalate. People can appeal classifications. Leaders sample raw reality periodically instead of living entirely inside summaries. Whistleblowers have protected routes. Customers can reach a human when the automated system misclassifies their problem. Engineers can stop a production line. Pilots can ignore automation when conditions demand it.

The exact mechanisms differ, but the principle is stable: an attention allocation system should not become a prison made of its own previous judgments.

The coming temptation will be to use AI to optimize every attention channel for efficiency. Meetings become shorter. Reports become summaries. Alerts become ranked. Emails become drafts. Feeds become perfectly personalized. The result could be wonderful. It could also remove the friction through which weak signals, idle conversation, and unplanned encounters enter institutions.

Some waste is informational habitat.

A scientist notices something while reading outside a narrow query. A manager hears a concern in the hallway that would never merit a formal escalation. A student asks a confused question that reveals the lesson is wrong. A mechanic hears a machine make a sound no dashboard classified as significant. The weak signal survives because somebody was not perfectly allocated.

This is why the goal cannot be maximum attention efficiency. It must be adaptive allocation: protect deep attention, spend interruption deliberately, maintain common context, and preserve some uncommitted capacity for surprise.

The difference resembles ecological design more than accounting. A monoculture can be efficient until the environment changes. A system that routes every minute toward predicted value may perform beautifully on the distribution it expects and become brittle when something new arrives. Slack, exploration, and low-level human contact create diversity in the attention landscape.

AI can help by taking over the repetitive taxes that currently exhaust people. It can draft routine correspondence, search records, reconcile formats, translate, schedule, extract, and summarize. The moral promise is not that people can therefore work twenty percent more. It is that some of the reclaimed attention can return to tasks machines cannot value on our behalf: deciding what deserves care, noticing when the model of the situation is wrong, teaching, negotiating, comforting, imagining, and sometimes doing nothing long enough to think.

Whether that promise is kept depends on who captures the dividend.

Historically, productivity gains do not automatically become leisure or human discretion. They can become higher output targets. If an AI assistant halves the time required to prepare a report, the organization may ask for twice as many reports. If a physician can document faster, the clinic may schedule more patients. If a teacher can grade faster, the school may enlarge class sizes. Attention saved at one stage can be immediately claimed elsewhere.

This is another reason to treat attention as a budget. Savings need an owner. Otherwise they disappear into the next demand.

A humane organization would decide in advance what it wants to do with cognitive productivity. Some gains may increase output. Some may reduce cost. Some should increase verification. Some should create reserve capacity. Some should shorten the workday or deepen contact with customers, patients, students, and colleagues. The allocation should be explicit because the default is consumption.

The same applies personally. An agent that saves an hour can create an hour of freedom or an hour of additional tasks. Technology does not decide.

The most mature attention systems will make three prices visible. The first is interruption cost: what is displaced when this message arrives now? The second is omission cost: what happens if this message waits or never arrives? The third is coordination cost: who else must share this information for action to work?

No model can calculate these perfectly because they involve values and unknown futures. But even rough awareness improves design. A severe safety alert has high omission cost and justifies interruption. A routine status update has low omission cost and can be batched. A strategic change has high coordination cost and belongs in shared context rather than private personalization.

This is what it means to allocate attention rather than merely capture it.

For a long time, software measured engagement because engagement was easy to count. Minutes, clicks, opens, views, sessions. The metrics treated attention as proof of value. In many systems the opposite should be the ambition: achieve the result with less claim on the person. A navigation system is good when it gets you there without requiring constant thought. A background safety monitor is good when it stays quiet until it matters. A well-designed agent may perform valuable work precisely by reducing the number of times it needs to speak.

Silence can be a feature of intelligence.

The future will include systems capable of generating more language than humanity could ever read. That abundance makes restraint valuable. The intelligent act will often be deciding not to produce another answer, not to send another notification, not to add another meeting, not to escalate another borderline case, not to fill every empty moment with advice.

A civilization surrounded by minds will need to rediscover the dignity of an uninterrupted minute.
