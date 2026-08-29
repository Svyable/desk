# The Spare Engine Problem

A commercial airliner does not become safe because nothing can fail. It becomes safe because engineers begin from the impolite assumption that things will.

Hydraulic pumps fail. Sensors disagree. electrical buses trip. people make mistakes. birds enter engines. software behaves in ways the test plan did not imagine. The craft is therefore designed around containment, detection, fallback and recovery.

This is one reason aviation is such a useful place to study reliability. The consequences of failure are obvious enough that the argument for redundancy rarely needs marketing. Nobody proposes removing a flight-control channel because it was underutilized last quarter.

Outside aviation, the same logic becomes politically difficult.

Why keep a second supplier if the first has delivered on time for six years? Why retain a manual process if the automated one works? Why fund a public-health laboratory between outbreaks? Why maintain a reserve margin on a grid that normally has plenty of electricity? Why keep experienced operators after the system has been automated?

The answer is not that the second thing will definitely be needed. It is that the first thing is not a law of nature.

Reliability engineering formalized a vocabulary for this. Components have failure rates. Systems have dependencies. Fault trees map routes from local defects to larger consequences. Engineers distinguish fail-safe from fail-operational designs, common-cause failures from independent failures, graceful degradation from abrupt collapse.

The language matters because it forces a question that ordinary budgeting tends to skip: what exactly are we trying to survive?

A duplicate component protects against some failures and not others. Two engines protect against one engine failing, but not necessarily against bad fuel supplied to both. Two generators in the same basement may protect against mechanical failure and still be lost together to a flood. Two data centers under one network control plane may look geographically diverse while sharing a software dependency.

Reliability is a property of architecture, not inventory count.

This distinction can be stated more sharply. Redundancy without failure diversity is theater.

The phrase explains a long history of disasters in which organizations possessed backup equipment that failed alongside the primary system. Sometimes maintenance had been deferred because everyone assumed the spare would work. Sometimes the backup had never been tested under realistic load. Sometimes the same contractor had made the same mistake twice. Sometimes both systems depended on one upstream service nobody had considered part of the design.

Humans love visible duplication because it is easy to audit. Two pumps. Three suppliers. Four servers. But the hard work lies in tracing invisible common causes.

The Apollo program famously carried extraordinary redundancy, yet the deeper achievement was not simply adding more hardware. Mission designers thought obsessively about failure propagation. The Lunar Module could serve as a lifeboat because it was a separately capable spacecraft with different resources and functions, not just a spare copy of the Command Module. The improvised survival of Apollo 13 has since become a cultural parable about ingenuity, but ingenuity worked because the mission carried options.

Options are expensive before the crisis and priceless during it.

That asymmetry tempts us to tell reliability stories as heroic rescues. The engineer improvises. The crew adapts. The city restores power. The company reroutes supply. Yet the more important choices usually happened earlier, when somebody approved an extra system whose need could not be demonstrated.

We remember the rescue because it is dramatic. We forget the procurement meeting.

The reliability tax is often paid in those meetings by people who sound pessimistic. They ask what happens if the main assumption fails. Optimists can regard them as blockers, compliance officers, security people, old operators protecting obsolete processes. Sometimes they are exactly that. But the cultural role remains necessary because systems drift toward the assumptions rewarded by normal operation.

Normal operation is a dangerous teacher.

If a plant runs for ten years without a severe outage, managers can infer that its current maintenance regime is sufficient. Perhaps it is. Or perhaps the plant has been lucky. If a trading strategy survives ten calm years, its leverage appears prudent. If a region avoids a major storm, flood defenses look overbuilt. If a pandemic stockpile expires unused, the waste is visible while the prevented shortage remains hypothetical.

This is the spare engine problem in its broadest form: how do we know whether an unused backup was unnecessary or successful?

We often cannot know from experience alone.

That is why mature reliability practice relies on models, drills, near-miss reporting, stress tests and adversarial imagination. These techniques manufacture information about futures that ordinary operations do not provide. A fire drill is deliberately inefficient theater meant to reveal whether an evacuation plan exists outside a binder. A bank stress test invents a recession to see what capital would remain. Chaos engineering deliberately breaks software components to learn whether the service survives. Military exercises create fictional enemies because waiting for a real one would be a poor testing strategy.

These practices share an epistemic principle: if you only learn from actual failures, the failures may be too expensive.

The principle becomes important for artificial intelligence. AI systems are increasingly asked to operate infrastructure, write code, allocate capital, diagnose faults and coordinate fleets of machines. They are trained heavily on records of what happened. Reliability, however, depends just as much on disciplined imagination about what has not happened yet.

An agent trained to maximize measured throughput may rediscover every efficiency argument humans have made against slack. Unless its objective includes tail risk, recovery time, dependency diversity and the cost of correlated failure, it can optimize a system into fragility faster than any human manager.

That possibility is not science fiction. Automated optimization already changes inventories, staffing, compute placement and network routing. The systems are useful precisely because they discover slack. The danger is that not all slack is waste.

Some slack is memory encoded in architecture.

A second pathway may embody knowledge of the day the first pathway failed. An extra nurse may embody knowledge of how quickly a ward can become overwhelmed. A manual override may embody knowledge that sensors can lie. A local warehouse may embody knowledge that transport networks can stop.

When we remove the slack, we may also remove the memory.

The question, then, is not whether to keep every spare engine. It is whether we understand which forgotten disaster paid for it.