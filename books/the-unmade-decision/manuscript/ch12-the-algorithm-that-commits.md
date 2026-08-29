# The Algorithm That Commits

Algorithms are often praised for making decisions reversible.

Software can be updated. A model can be retrained. A recommendation rule can be changed overnight. A feature can be turned off. Compared with a bridge or a factory, code looks almost weightless.

This is true at the level of files and misleading at the level of systems.

Once software mediates millions of choices, its outputs become inputs to the world the next model observes. A recommendation system directs attention toward certain songs, products, creators, jobs, or political stories. The resulting clicks become training data. Sellers adapt inventory. Creators adapt style. users develop habits. The next version of the model sees a world partly shaped by the previous one.

The algorithm is not merely predicting preference. It is participating in preference formation.

This creates a form of commitment without concrete.

Suppose a music service recommends a genre to a listener because similar listeners liked it. The listener tries several songs, saves two, and begins receiving more. Over months, listening history becomes increasingly concentrated. The model correctly observes that the user likes the genre. The observation is not false, but causality is recursive: recommendation helped create exposure; exposure helped create taste; taste now validates recommendation.

The system has learned from its own footprint.

Markets work this way too. A lender uses historical repayment data to allocate credit. The allocation affects which borrowers receive opportunities to build repayment histories. An employer screens candidates using features correlated with prior hiring. Prior hiring was shaped by earlier screening and networks. A predictive policing system sends attention toward locations with recorded incidents; increased observation can generate more recorded incidents in those locations.

In each case, a decision rule changes the distribution it later treats as evidence.

This does not mean every algorithm inevitably locks in bias or preference. Systems can be designed with exploration, randomization, counterfactual evaluation, fairness constraints, audits, and human review. The point is structural: prediction in a passive environment differs from prediction in an environment that reacts to prediction.

The algorithm can close doors before anyone notices a door existed.

This is especially consequential when decisions are high-frequency and individually small. One ranking choice is reversible. Ten billion ranking choices create an ecology.

The cumulative effect returns us to the consumer chapter. Micro-reversibility can produce macro-stickiness.

Software teams sometimes assume they can "always change it later" because deployment is cheap. But changing code does not undo user habits, API dependencies, accumulated data, developer expectations, organizational metrics, or public norms. A social feature can be removed from the interface while the social practice it created persists. A pricing algorithm can be rewritten while customers remember the old price. A content policy can change while creators have already reorganized businesses around it.

Code commits faster than culture reverts.

The option structure of algorithmic systems therefore has at least four layers.

The model layer may be highly reversible. The data layer is less so because collected data reflects historical choices and may be legally or ethically constrained. The ecosystem layer is stickier because users and complementors adapt. The institutional layer can be stickiest of all because policies, revenue expectations, and staffing form around the system.

A product manager who sees only the first layer will underestimate commitment.

This is how experiments become policy by traffic share.

An A/B test begins with five percent of users. Results look promising, so exposure expands. Revenue teams start forecasting the lift. infrastructure is optimized. A quarter later, reverting the feature would not simply restore the old state because budgets now include its contribution. The experiment has acquired organizational dependencies.

The test graduated before the decision memo did.

Good experimentation therefore needs sunset logic. What happens automatically at the end of the test? Does the feature revert unless somebody explicitly approves scale, or persist unless somebody objects? The default matters.

Most organizations let successful experiments persist because turning them off feels wasteful. That is reasonable when success criteria were well designed. It is dangerous when the measured outcome was a proxy.

A recommendation feature might increase session length while reducing user satisfaction in ways measured later. A notification may improve near-term return rate and increase long-term fatigue. A sales ranking may raise conversion while concentrating business among already dominant sellers.

The fast metric can capture the experiment before the slow metric reports.

This creates a temporal form of Goodhart's law: the measure that arrives first can become the decision standard even when a slower measure better represents the objective.

The solution is not to wait for every long-term effect before shipping anything. Some effects take years. The solution is to distinguish reversible rollout from irreversible institutionalization.

You can launch while keeping the budget, architecture, and policy provisional.

That requires discipline because organizations crave scale. Once a metric improves, the story of success forms quickly. The team that built the feature gains status. Sales wants permanence. Leadership cites it. The social commitment begins before technical commitment.

The algorithm becomes somebody's promotion case.

This is one reason independent evaluation matters. A team should not be the sole judge of the metric that determines whether its work persists. Not because builders are dishonest, but because identity affects evidence interpretation. The same dynamic appears in science, capital budgeting, and war.

Every decision system needs a place where bad news can arrive without first defeating the prestige of its recipient.

Artificial intelligence intensifies the problem because model outputs increasingly trigger actions rather than recommendations.

A forecasting model that predicts demand influences inventory orders. An agent can place the orders directly. A coding model can suggest a patch; an autonomous system can merge and deploy it. A security model can flag a transaction; an automated policy can block the account. The distance between belief and commitment shrinks.

Automation converts latency into risk.

The faster the system can act, the less time there is for human reconsideration. This is useful when the environment moves quickly and the action is cheap to reverse. It is dangerous when the action propagates into expensive states.

The design question is therefore not "human in the loop" as a slogan. It is where the loop should slow down.

Some actions are safely automatic: cache invalidation, routing among redundant servers, low-value fraud challenges, dynamic allocation within known bounds. Other actions deserve staged authority: transferring large sums, deleting data, terminating accounts, changing production infrastructure, publishing consequential statements, making legal commitments.

The system needs an irreversibility gradient.

As consequence and propagation rise, friction should usually rise too.

This is not anti-automation. It is control architecture.

Airplanes contain automated systems because automation can improve safety and performance. They also contain modes, envelopes, redundancies, checklists, annunciations, and procedures because a fast system must make its state legible to humans when circumstances depart from expectation. The problem is not whether the computer or person is "in charge" in the abstract. The problem is whether authority, information, and recovery are aligned at the moment something unusual occurs.

Agentic software will force ordinary companies to confront the same question.

If a sales agent can send ten emails, can it send ten thousand? If a procurement agent can reorder office supplies, can it sign an annual contract? If a coding agent can open a pull request, can it merge to production? If a financial agent can rebalance within an approved range, can it borrow?

Each permission is an option granted to software.

Permissions are future commitments embedded in present configuration.

The safe instinct is to restrict everything. That can destroy the value of automation by forcing humans to approve trivial steps. The unsafe instinct is to grant broad authority because the system performed well in a narrow test. The middle architecture uses scoped credentials, spending limits, reversible sandboxes, audit logs, staged rollout, rate limits, and explicit escalation.

These are institutional versions of option contracts.

They define what action is available, under what conditions, with what ceiling, and how quickly it can be revoked.

Logs matter because automated systems can act faster than organizational memory. A human manager may perform three consequential actions in a day and remember the context. An agent may perform thousands. Without a durable trace, the institution cannot reconstruct why the state changed.

Auditability preserves the option to understand before correcting.

That sounds backward: why not simply roll back? Because rollback without causal understanding can recreate the failure. A system that automatically undoes visible symptoms may hide the mechanism.

Reversibility is not recovery if the cause remains active.

This distinction appears in finance during automated trading disruptions. Markets can halt, orders can be canceled under defined circumstances, software can be patched. But the larger problem is understanding the interaction among algorithms, liquidity, incentives, and market rules that produced the event. A reset returns the system to operation; it does not necessarily return knowledge to innocence.

Every automated decision leaves residue in beliefs.

The same is true of algorithmic hiring. If a screening tool is removed after criticism, managers may retain categories learned from it. If a recommendation system has shaped creator strategy for years, removing one ranking signal does not restore the old creative ecology. Institutional adaptation outlives code.

This is why responsible change must sometimes include restitution, migration, or active countermeasures rather than simple reversal.

A door reopened after ten years may lead to a room that no longer exists.

There is also a competitive dimension. Companies adopt automation partly because competitors do. Faster bidding, pricing, content production, customer response, and software deployment can create an arms race in decision speed. Each firm may prefer a slower, more reviewable environment while fearing unilateral delay.

Speed becomes a coordination equilibrium.

Financial markets have long experienced versions of this through electronic trading. Firms invest in latency because small timing advantages matter when others are equally fast. The social value of every microsecond is less obvious than the private value.

AI can spread this logic into more domains.

If competitors can generate and test one hundred advertising variants in an hour, a company testing five may feel slow. If an autonomous procurement system negotiates continuously, weekly human review looks archaic. If security attacks are automated, defense must respond rapidly.

The temptation is to treat speed as universally valuable.

But decision speed and learning speed are not the same.

A system can make one thousand decisions before receiving feedback on the first. That is not learning. It is scaled commitment under a stale model.

This may be the most important operational lesson for AI-era management: throttle action to the latency of trustworthy feedback.

If a pricing change affects customer retention over months, an agent should not optimize price hourly against immediate revenue as if the objective were fully observed. If a content strategy affects brand trust over years, click-through rate is an incomplete reward. If hiring choices shape culture slowly, an automated screener cannot be judged solely on time-to-fill.

Slow variables need representation even in fast systems.

Otherwise the algorithm eats the future because the future reports late.

The solution is partly technical and partly constitutional. Technical controls limit action. Constitutional controls define which objectives cannot be optimized away: safety, legality, privacy, fairness, solvency, human dignity, strategic resilience. These constraints behave like the stable lower layer beneath adaptive policy.

A well-governed agent should have freedom inside a jurisdiction, not freedom to redefine the jurisdiction.

Humans need the same arrangement.

This is not a machine problem alone. Algorithms make it visible because their action can be precise, fast, and repeatable. But the organization has always contained decision rules: incentive plans, approval chains, quotas, budgets, rankings, performance reviews. AI simply turns more of those implicit rules into executable systems.

Execution reveals assumptions.

Once a rule runs at scale, its edge cases become people.

That is why the apparently reversible world of software needs a stronger culture of precommitment around rollback, appeals, limits, and evidence than many physical systems. The code can change quickly. The world it touched may not.

We should design accordingly.

The relevant question before automating a decision is not only whether the model is accurate.

It is what the model will cause to become true if we believe it.