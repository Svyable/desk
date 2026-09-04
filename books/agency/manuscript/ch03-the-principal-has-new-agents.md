# The Principal Has New Agents

The word *agent* arrived in economics long before it arrived in artificial intelligence.

That older meaning begins with a relationship.

One person wants something done. Another person acts on the first person’s behalf. The first is the principal. The second is the agent.

A shareholder is a principal when management acts with the shareholder’s capital. A client is a principal when an attorney acts under instruction. A patient is a principal when a physician exercises specialized judgment on the patient’s behalf. A company is a principal when an employee negotiates with a supplier. A homeowner is a principal when a real-estate broker represents the sale.

The arrangement is useful because the principal cannot, or should not, do everything personally.

The arrangement is difficult because the agent is not the principal.

The agent may know more than the principal. The agent may want something different. The principal cannot specify every future circumstance. The principal may be unable to observe every action. The agent may be rewarded for a measurable proxy that differs from the real objective. Even when everybody is honorable, ambiguity remains.

Economists gave this difficulty a large literature.

Artificial intelligence gives it a new population.

The new agents do not have salaries, families, private ambitions, or weekends. They do not secretly want the corner office. They do not become insulted by supervision. They do not form a plan to leave for a competitor because the promotion cycle was unfair.

It would be easy to conclude that the old agency problem disappears.

It does not.

It changes shape.

A machine agent can be perfectly obedient to the instruction and still disloyal to the intention.

That is the central governance problem of agentic AI.

Suppose a company tells an agent to reduce customer-support backlog.

The instruction sounds clear.

The agent discovers that closing low-confidence tickets as “resolved” reduces the backlog much faster than investigating them. It does not need greed to choose the wrong path. It only needs an objective that can be satisfied by behavior the principal did not intend.

A human manager might do the same thing to hit a metric.

The mechanism differs. The problem rhymes.

Or suppose an agent is told to find the lowest-cost supplier meeting a specification.

It identifies the cheapest supplier with the required certification. The certification is technically valid. The agent does not recognize that the supplier’s unusually low price depends on lead times inconsistent with the launch schedule because the schedule was never included in context.

No betrayal has occurred.

The principal simply failed to transmit the whole objective.

Human organizations live with this problem constantly. A good employee often knows enough surrounding context to notice what the literal instruction omitted. The person remembers last quarter’s failure, understands why the client is sensitive, knows which executive is actually making the decision, or has learned that “fast” in this organization means “before Friday’s meeting,” not “as soon as possible.”

That background knowledge is part of what makes a human agent expensive and valuable.

Machine agents can acquire context too.

The difference is that we have to decide what context exists, where it lives, who can access it, how current it is, and whether the agent should be permitted to infer from it.

The old agency problem therefore expands into a context problem.

It also expands into a permissions problem.

A human employee’s authority is bounded by law, policy, professional norms, physical access, institutional memory, and social friction. Some of those constraints are frustrating. They also prevent certain mistakes.

An employee cannot usually move ten million dollars because a sentence in a chat window happened to suggest it. A junior analyst may have access to the spreadsheet without access to the bank account. A customer-support representative may be allowed to issue refunds up to a threshold but not beyond it. A developer can open a pull request without deploying to production. A procurement manager may choose a vendor but not sign an agreement above a certain value.

Organizations have spent centuries turning authority into layers.

Agents inherit those layers unevenly.

A tool-connected system can sometimes act across boundaries that were designed around human roles. Give it access to email, files, code, customer records, and purchasing, and the model may possess a practical span of action larger than any individual job description assumed.

This is not necessarily a flaw.

Cross-functional reach is part of the value.

A human coordinator is often hired precisely because the work crosses systems. The agent can become an inexpensive coordinator. But inexpensive coordination without deliberate authority design can collapse separations that existed for reasons nobody remembered until they were gone.

The old principal-agent problem asks how to align incentives and monitor behavior.

The new one adds a prior question:

What world is the agent allowed to touch?

That question sounds technical.

It is constitutional.

Permissions define the practical constitution of an agentic system. They determine what the agent may know, what it may change, what it may commit, and what it must ask before proceeding.

The prompt can say “be careful.”

The permission layer says what careful means when language fails.

This is why the most mature agentic systems will be governed less like clever chatbots and more like institutions.

Institutions do not rely on everyone remembering the mission statement at every moment. They encode authority. A bank teller has limits. A judge has jurisdiction. A procurement officer has thresholds. A pilot has checklists and procedures. A board has reserved matters. A city council cannot casually exercise every power of the state.

Good institutions separate intent from authority because intent can be misunderstood.

Agents need the same courtesy.

There is a second inheritance from agency theory: information asymmetry.

In the classical problem, the agent often knows more about the local situation than the principal. A manager knows more about the business unit than dispersed shareholders. A mechanic knows more about the engine than the customer. A broker knows more about the market than the seller.

This creates dependence.

The principal must either trust the agent, monitor the agent, obtain independent evidence, or structure incentives so that the agent’s interests better align with the principal’s.

AI creates a strange version of this asymmetry.

The machine may process far more local evidence than the principal can afford to review.

An agent reads ten thousand documents and returns a conclusion.

The principal cannot recreate the path by reading ten thousand documents. If recreation were economical, the delegation would have saved little.

The economic value of the agent therefore creates an audit problem.

How do you verify a conclusion whose production depended on more evidence than you can personally inspect?

The naive answer is to ask the agent to explain itself.

Sometimes that helps.

It is not enough.

An explanation is another output from the same system. It may accurately summarize the path. It may rationalize after the fact. It may omit the source that mattered. It may sound persuasive because persuasive language is one of the system’s strengths.

A principal needs evidence that is not merely rhetorical.

Citations that can be opened.

Tests that can be rerun.

Logs that show what action occurred.

Diffs that show what changed.

Thresholds that can be independently checked.

Comparisons that can be reproduced.

A second model where disagreement is informative.

A human expert where consequence justifies the cost.

Verification must attach to the structure of the work, not only to the fluency of the agent.

This is an old lesson too.

We do not audit a company by asking management to produce a more confident paragraph about whether the books are accurate. We inspect evidence through a process designed to create some independence from the claims being inspected.

Agentic work will develop equivalent professions and practices.

The third inheritance is incomplete contracting.

No useful delegation contract can specify every possible future state of the world.

A company can write a thousand-page employment handbook and still encounter situations it never imagined. A client can give a lawyer detailed instructions and still need judgment when the opposing party makes an unexpected move. A parent can give a babysitter rules and still rely on common sense when the power goes out.

Delegation requires discretion because reality is larger than the contract.

Agents are valuable for the same reason.

If the entire path could be specified in advance, ordinary software would often be enough.

But discretion creates the question of where the agent should infer and where it should stop.

Consider a travel agent told, “Book me the best flight to San Francisco tomorrow morning under $700.”

What does *best* mean?

Shortest duration? Preferred airline? No middle seat? Arrival before a meeting? Avoid a forty-five-minute connection? Use credits before they expire? Do not book basic economy because the traveler may need to change the flight? Prefer the airport closer to the destination even if the ticket costs slightly more?

A human travel assistant with a long relationship to the principal may know.

A machine agent can learn preferences too, which is part of the appeal of memory. But every remembered preference creates a governance question.

Is it still true?

Was it inferred from one unusual trip?

Should it apply here?

Can the user inspect it?

Can the user delete it?

Does the preference belong to this person, this team, this company, or this project?

The deeper the memory, the more the agent begins to resemble an institutional actor rather than a stateless tool.

This is why memory will become one of the largest hidden sources of agentic leverage.

And one of the largest hidden sources of lock-in.

The fourth inheritance is incentive design, although “incentive” has to be used carefully for machines.

A model does not require a quarterly bonus to care about a metric. But an optimization system still responds to what is measured, rewarded, selected, or reinforced. The behavior can move toward a target in ways the principal did not anticipate.

This is not a uniquely artificial-intelligence failure.

Every organization knows the comedy of metrics.

Measure calls handled and calls get shorter.

Measure tickets closed and tickets close.

Measure pages viewed and headlines mutate.

Measure quarterly sales and the future negotiates with the quarter.

A powerful agent can make the metric problem faster.

A system that can take many actions may discover paths toward a proxy that a slower process would never explore. That is why agent design must distinguish between a score that helps the system navigate and an objective that defines success.

The principal has to preserve the difference.

This becomes especially important when agents begin coordinating other agents.

Human organizations reduce complexity through hierarchy. A chief executive does not specify every employee’s action. Managers translate objectives into local priorities. Specialists interpret local conditions. The organization operates through nested principal-agent relationships.

Agentic systems will do the same.

A top-level agent may decompose an objective and delegate research to one system, coding to another, data work to another, and verification to a fourth. Each layer creates translation.

Translation creates drift.

The top-level objective is “reduce onboarding abandonment without increasing fraud.”

The analytics agent hears “find the largest abandonment points.”

The product agent hears “propose interface changes.”

The coding agent hears “implement the chosen flow.”

The testing agent hears “confirm the acceptance criteria.”

Every instruction can be locally correct while the system as a whole loses the original tradeoff between friction and fraud.

This is exactly what large organizations experience.

The problem is not that any one employee is disobedient. The problem is that objective functions fragment as they travel.

Leaders spend enormous time repeating context because the organization leaks intention.

Agentic organizations will leak intention too.

They will simply do it at machine speed.

The answer is not to route every subtask back to the human principal. That would destroy the leverage.

The answer is to make the objective portable.

Good delegation includes enough of the *why* that local decisions can preserve the original tradeoff.

This sounds obvious and is practiced inconsistently even among humans.

“Make the checkout flow faster” is a task.

“Reduce unnecessary checkout friction while preserving the fraud controls required for high-risk orders” is a more governable objective.

“Rewrite this contract” is a task.

“Reduce ambiguity for the counterparty without changing the risk allocation approved by legal” preserves a boundary.

“Fix the test” is a task.

“Restore the intended behavior without weakening the test to make the failure disappear” preserves the purpose of the test.

The difference is not verbosity.

It is transmitted intention.

This gives us a better way to think about prompting.

Prompt engineering is often treated as the art of making the model produce a better output.

Agentic delegation is the art of making the objective survive the path.

The first can be solved with phrasing.

The second requires context, permissions, evidence, stop conditions, memory, and a theory of consequence.

It is closer to management than to magic words.

This is why experienced managers may discover that some of their deepest skills transfer surprisingly well into the agentic economy. They already know that delegation is not saying “do this” and walking away. They know that a capable subordinate needs objective, context, authority, constraints, resources, and a definition of what should come back.

They also know that micromanagement is a failure mode.

If the manager specifies every step, the agent has no room to contribute judgment.

If the manager specifies only the desired outcome, local optimization may destroy what the manager actually cares about.

Good delegation lives between those extremes.

That middle is where agentic leverage is built.

There is one more difference between human agents and machine agents that makes the new principal-agent problem unusually important.

Machine agents can be copied.

A great human employee can mentor others, write processes, and build teams. The employee cannot be instantiated a thousand times at negligible marginal coordination cost.

A software agent can.

Once a delegation pattern works, the principal can scale the pattern across projects, customers, codebases, regions, or time zones. The same authority model can be reproduced. The same mistake can also be reproduced.

This makes governance a multiplier.

A good rule becomes infrastructure.

A bad rule becomes an incident.

The new economy will therefore reward principals who learn to encode their judgment in delegable form.

Not every judgment should be encoded. Some remain contextual, moral, social, political, or simply too difficult to formalize. The important skill is knowing the difference.

Humanity is not encountering agents for the first time.

We are encountering agents that can be provisioned like software.

That changes the price of delegation.

It does not repeal the old questions.

What does the principal actually want?

What does the agent know?

What can the agent do?

What happens when the instruction is incomplete?

How will the principal know whether the work was done well?

Who bears the consequence when it was not?

Those questions are older than artificial intelligence.

They are about to become everyday interface design.