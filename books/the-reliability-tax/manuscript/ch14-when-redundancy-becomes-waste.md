# When Redundancy Becomes Waste

A book about reliability can become dangerous if it makes every spare object sacred.

Organizations are full of buffers that deserve to die.

An emergency procedure no one can execute. A warehouse of obsolete parts. A second database that is never synchronized. A committee that meets because another committee once failed. A strategic stockpile whose contents have degraded. A backup generator with an empty fuel tank. A paper form preserved in case the software disappears, though nobody remembers how to process the paper.

These things are not resilience. They are nostalgia with carrying costs.

The reliability tax must therefore pass its own audit.

The first test is whether the safeguard protects against a defined failure.

“Just in case” is not a definition. A good reserve has a scenario attached to it: a supplier interruption of a certain duration, a regional outage, a demand surge, a cyber compromise, a flood, a funding freeze. The scenario need not be perfectly forecastable, but the mechanism should be understood.

The second test is whether the safeguard is independent of what it backs up.

A mirrored database with the same corruption is not protection. A second supplier dependent on the same plant is not diversification. A generator sharing the flooded switchgear is not backup power.

The third test is whether it has been exercised.

Untested resilience decays into fiction. People change jobs. passwords expire. connectors do not fit. software versions diverge. fuel degrades. restoration instructions reference machines that no longer exist.

The fourth test is whether there is a cheaper way to buy the same option.

A company may not need three months of inventory if a product can be redesigned to use interchangeable components. A city may not need a giant concrete flood barrier if distributed green infrastructure and building adaptation reduce consequences more cheaply. A software team may not need active-active deployment across two providers if rapid restore from independent backups meets the business requirement.

Reliability has engineering substitutes.

The fifth test is whether the protection creates more risk than it removes.

Complex failover systems can fail because of the failover logic. Extra rules can make workers ignore alarms. Overly conservative medical protocols can delay treatment. Financial regulations can push risk into less visible institutions. Security controls can become so burdensome that users invent unsafe workarounds.

This is the point at which resilience becomes bureaucracy.

Bureaucracy is not automatically bad. Civilization runs on repetitive procedures because improvisation does not scale. The problem is when the procedure retains authority after losing causal contact with the risk.

A resilient institution periodically asks why.

Why is this reserve here? Why this amount? Why this location? Why this approval? Why this drill? What changed since we chose it? What new common cause has appeared? What is the evidence that the safeguard still works?

These questions are the maintenance cost of preparedness.

They also protect reliability budgets politically. When every old safeguard is defended as essential, critics eventually stop believing any of them. The result is often indiscriminate cuts. Reliability advocates need credibility, which means volunteering to remove obsolete protections.

There is an analogy to biological immune systems. An immune system that never reacts is useless. One that reacts to everything becomes destructive. The value lies in discrimination.

Economic resilience requires similar discrimination.

The aim is not maximum redundancy. It is enough adaptive capacity to survive important disturbances without carrying so much defensive structure that ordinary life becomes unaffordable.

That balance changes with technology.

Cloud computing made some forms of backup cheaper. Additive manufacturing may reduce the need to stock certain parts. Better forecasting can reduce inventory while preserving service. Modular design can replace physical duplication with substitutability. Remote work can create geographic resilience for some organizations while adding dependence on networks.

The reliability tax can fall when innovation gives us cheaper options.

This matters because a lazy resilience agenda can become protectionism for incumbents. Existing suppliers will happily describe their capacity as strategic. Agencies will defend budgets. local industries will claim national-security value. Consultants will sell stress tests. Every crisis creates entrepreneurs of fear.

Skepticism is not the enemy of resilience. It is one of its tools.

The correct response to fragility is not to build a bunker around everything. It is to identify where consequence, dependency and recovery time justify paying for alternatives.

The world contains risks that are cheap to tolerate.

A streaming service can go down for an hour. A coffee shop can run out of oat milk. A low-traffic website can restore from yesterday's backup. A household does not need a generator capable of powering the neighborhood.

The reliability tax should be progressive with consequence.

Systems that can kill people, freeze payments, contaminate water, disable critical communications or propagate across sectors deserve larger margins than systems whose failure produces annoyance.

Obvious, perhaps. Yet organizations routinely spend huge sums eliminating minor visible defects while leaving catastrophic dependencies untouched because the minor defects occur often and the catastrophic dependencies have never yet failed.

Frequency dominates attention.

Reliability work must resist that bias without creating the opposite one.

The final test of a safeguard is simple to state and hard to answer: does this expense purchase a real option we are likely to value under a plausible bad future?

If yes, maintain it.

If no, stop calling it resilience.