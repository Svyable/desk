# Search Under Constraint

On Mars, a good idea can die because the battery is cold.

A rover may have a scientifically interesting target in view, a route that appears traversable, instruments capable of examining it, and engineers on Earth eager to know what is there. None of that makes the observation free. Driving consumes time and energy. Warming an instrument consumes energy. Taking an image consumes time, power, and storage. Sending the image home competes for communications capacity. A route that is short in meters can be expensive in wheel motion or computation. A plan that works at noon may fail when temperature, illumination, terrain, or the rover's internal state changes.

The machine is not choosing among possibilities in the abstract. It is searching inside a budget.

This sounds obvious. Everything has a budget. Yet much of our language about discovery quietly assumes that the main problem is finding the best option. We rank candidates, optimize designs, compare strategies, and speak of exploring a possibility space as if every point in that space were equally available for inspection. In practice, the shape of a search is often determined less by what could exist than by what the searcher can afford to learn.

Constraint is not an inconvenience added after intelligence. Constraint is part of intelligence.

Planetary robotics makes this unusually visible because the budgets are physical and unforgiving. Researchers working on rover planning describe activities whose feasibility depends on consumptive resources and on interactions among those resources over time. A rover cannot merely maintain a list of desirable tasks. It has to schedule them so that power, time, thermal conditions, and other operational limits remain acceptable. Work on Mars rover autonomy has likewise emphasized the need to adapt plans when opportunities or disruptions appear rather than pretending a plan made earlier can simply be executed unchanged.

The rover therefore confronts two questions at once. What is worth doing? And what remains possible after everything already done?

Humans do the same thing, usually with worse bookkeeping.

A person deciding whether to change careers may imagine dozens of paths. But only some can be tested without losing rent money, health insurance, childcare coverage, immigration status, professional standing, or the patience of a spouse. A small company may see ten plausible markets and possess enough cash to investigate two. A laboratory may have twenty hypotheses and enough instrument time for four experiments. A government may know that several policies deserve pilots while having the administrative capacity to run one competently.

The frontier is not the set of imaginable moves. It is the set of moves reachable from here with the resources still in hand.

That distinction changes how we should think about exploration.

In Chapter 3, exploration competed with exploitation because both consume scarce resources. Here the problem becomes sharper. Scarcity does not merely reduce the amount of exploration. It changes its geometry. Some experiments become impossible. Others become dangerously irreversible. Cheap probes become disproportionately valuable. Information that arrives early becomes more useful than equally good information that arrives after the budget has been committed. A searcher with little slack has to care not only about expected payoff but about sequence, recoverability, and the cost of being wrong.

Imagine two experiments that cost the same and have the same expected informational value. The first can be stopped halfway if early results are poor. The second requires the full budget up front. For a wealthy searcher the difference may be modest. For a constrained searcher it can dominate the decision. The first experiment preserves the right to change course.

Optionality is worth more when failure threatens the search itself.

This is why cash-poor startups stage commitments, why field scientists run reconnaissance before mounting an expedition, why engineers prototype interfaces before tooling factories, and why people uncertain about a career sometimes take a class before resigning from a job. The small move is not necessarily timid. It may be the move that keeps the larger search alive.

The opposite mistake is familiar too. Under pressure, organizations often make the largest commitment precisely when they can least afford error. Revenue falls, so management bets on a sweeping transformation. A project slips, so the team adds a complicated rescue plan. A government faces a deadline, so it launches a nationwide system before learning from a smaller implementation. Scarcity creates urgency, and urgency can be mistaken for a reason to collapse the option set.

Sometimes collapse is necessary. A rover with a narrowing communications window eventually has to transmit something. A company with three weeks of payroll cannot spend six months studying its strategic identity. A surgeon cannot preserve every option once an operation has begun. Constraint can turn a broad search problem into a stopping problem very quickly.

The difficult part is that scarcity affects the searcher as well as the search.

Anuj Shah, Sendhil Mullainathan, and Eldar Shafir reported experiments in which scarcity changed how participants allocated attention. Their argument was not simply that people with less perform worse. Scarcity can produce intense focus on the problem that is immediately pressing while causing other considerations to be neglected. That narrowing can be useful. A deadline can make a team stop wandering. A nearly empty fuel tank makes route selection wonderfully concrete. But the same tunnel can hide consequences just outside the frame.

A year later, Anandi Mani, Mullainathan, Shafir, and Jiaying Zhao reported studies testing whether financial concerns could themselves impede cognitive performance. In one setting, lower-income participants performed worse on cognitive tasks after considering a demanding financial scenario than after considering an easier one, while higher-income participants did not show the same pattern. In another, sugarcane farmers were tested before and after harvest, when their financial circumstances differed. The authors interpreted the results as evidence that poverty-related concerns can consume cognitive resources.

The claim deserves care. It does not mean poverty makes people inherently less intelligent. It does not mean every constrained decision-maker becomes irrational. It does not mean a laboratory task captures the full experience of financial hardship. It does suggest something important for search: a tight resource budget can also tighten the attention budget used to manage it.

This creates a cruel recursion. The people who most need to allocate scarce resources carefully may have the least spare attention for comparing distant alternatives, planning contingencies, filling forms, negotiating prices, or recovering from administrative mistakes.

A fee is not only a fee when money is scarce. A form is not only a form when time is scarce. A missed bus is not only twenty minutes when childcare closes at six.

Search costs compound through constraints.

Consider the difference between buying a washing machine with and without slack. A household with savings can compare models, wait for a sale, pay for delivery, reject a bad unit, and absorb the delay if a replacement is needed. A household whose current machine has failed and whose cash is nearly exhausted faces a different possibility space. The cheapest sticker price may require transport they do not have. The reliable model may cost too much today. The laundromat consumes time and travel money while the search continues. Financing expands the immediate option set but can raise total cost. The household may rationally choose an option that looks inferior in a spreadsheet because the spreadsheet does not contain the household's actual constraints.

This is one reason advice given from abundance can sound absurd under scarcity. “Shop around” assumes search itself is affordable. “Wait for the right opportunity” assumes waiting is survivable. “Take a risk” assumes failure leaves another turn.

Constraint is positional.

The same option can be exploratory for one person and existential for another.

That matters for institutions because we often infer preferences from observed choices without reconstructing the feasible set. A worker who stays in a bad job may appear risk-averse when the real constraint is health coverage. A founder who accepts unfavorable financing may appear impatient when payroll is due Friday. A student who attends the nearby college rather than the better-ranked distant one may be optimizing around family obligations, housing, or transport. The chosen move tells us something about preference only after we understand which alternatives were genuinely reachable.

Search theory without a feasible set becomes moralizing very quickly.

The same problem appears at larger scales. Poor countries do not search for development strategies with the same buffers as rich ones. Small firms do not experiment like incumbents with cash reserves. A hospital at full capacity does not learn from operational experiments the way one with spare beds and staff can. Slack is often criticized as waste because, in a static snapshot, unused capacity looks inefficient. But some slack is the medium in which adaptation occurs.

A system operating at one hundred percent utilization has little room to discover anything.

This does not make slack universally good. Chapter 6 preserved evidence that organizational slack can cushion firms from signals that ought to provoke search. Abundance can protect complacency. Large budgets can finance bad experiments for years. Extra capacity can become a constituency for keeping extra capacity. The point is narrower: resilience and exploration require resources that are not already irreversibly committed.

The useful distinction is between idle resources and option resources.

A spare server, an unallocated afternoon, a cash reserve, an unused hospital bed, a second supplier, or an engineer who is not scheduled to the minute can look idle until the environment changes. Then the apparent waste becomes the capacity to respond. The accounting treatment did not change. The state of the world did.

Engineers understand this as margin.

A bridge is not normally designed so that expected load equals failure load. A battery-operated system is not planned as if every theoretical unit of charge will be available for productive work. Schedules include buffers because durations vary. Networks reserve capacity because traffic spikes. The margin acknowledges that our model of the future is imperfect.

Search needs margin for the same reason.

If every dollar, hour, and unit of attention is assigned before uncertainty resolves, new information has nowhere to go. The organization may learn something and be unable to act on it. A competitor fails, a customer asks for an unexpected feature, a scientific result invalidates the planned next experiment, a supplier offers a new material—and the schedule says no. Knowledge without maneuvering room becomes trivia.

This is why sequencing matters so much under constraint.

Suppose a laboratory has funds for three experiments. Experiment A is expensive but could produce a decisive result. Experiments B and C are cheaper and could reveal whether A is worth running. If the lab begins with A, it may consume most of its budget before learning that the underlying premise was weak. If it begins with B, it may discover enough to abandon A and redirect resources. The value of B includes the decisions it improves downstream.

This is the same logic that makes early reconnaissance valuable to a rover. A camera observation can be worth more than its direct scientific content if it prevents an expensive drive toward impassable terrain. Information changes the value of later actions.

But cheap probes can become a hiding place.

Organizations sometimes celebrate optionality because it postpones commitment. They commission another study, another pilot, another prototype, another survey. Each is inexpensive relative to the final move, and each preserves the appearance of prudent search. Eventually the accumulated cost of not committing exceeds the cost of a wrong commitment. Constraint can justify staged learning; it cannot abolish stopping.

The best sequence therefore depends on whether the next unit of information can plausibly change the decision.

If it cannot, continued search is ceremony.

Planetary planning offers a useful discipline here because the machine cannot be impressed by ceremony. A rover activity has a resource profile. The scheduler must determine whether it fits. If a plan is disrupted, autonomous systems can use different levels of response: small adaptations, plan repair, or more comprehensive replanning. The point is not that robots have solved bounded rationality. They have not. The useful feature is that their constraints must be represented explicitly enough for the system to reason about them.

Human organizations often keep constraints implicit until they become emergencies.

A project plan says what should happen but not what gets dropped if a supplier is late. A strategy names five priorities without identifying the scarce resource that makes five priorities impossible. A research agenda lists questions without ranking the experiments by cost of information. A household budget records money but not the hours required to secure every saving. A public benefit exists in law while the application process consumes the attention of the people meant to receive it.

Making the constraint visible changes the conversation.

“What should we do?” becomes “What can we learn before the next irreversible commitment?”

“What is the best option?” becomes “What is the best reachable option from our present state?”

“How do we maximize output?” becomes “How much margin must remain for information we do not yet have?”

These are less heroic questions. They are usually better ones.

Constraint can also improve search. This is the part scarcity arguments sometimes underplay. Unlimited possibility is not a neutral baseline. It can be paralyzing. A strict page limit forces an argument to reveal its spine. A fixed engineering envelope can eliminate thousands of irrelevant designs. A deadline can make a group stop collecting decorative information and decide. The important word is can. Constraints help when they remove low-value branches more than they remove valuable ones.

A well-chosen constraint is a search heuristic.

The trouble is that many constraints are inherited rather than chosen. Poverty, disability, discrimination, geography, caregiving, legacy infrastructure, debt, and political exclusion do not arrive as clever creativity exercises. They close branches that may contain the best answer. Praising constraint in the abstract can therefore confuse the benefits of focus with the costs imposed on people who have too little room to fail.

The relevant question is not whether constraint is good for creativity. It is who chose the constraint, what it excludes, and whether the searcher can survive a mistake.

This returns us to the frontier.

A frontier is usually drawn as a line between known and unknown territory. For a real searcher, there is another line behind it: the solvency boundary. Cross that one and the search ends. A company runs out of cash. A rover exhausts its power. A climber loses the daylight needed to descend. A household misses rent. A political coalition spends its credibility. Every exploration system operates between the frontier of what it has not learned and the boundary beyond which it can no longer continue learning.

Good search advances the first without accidentally crossing the second.

That requires a different idea of efficiency. The most efficient search is not always the one that extracts the maximum immediate output from every resource. Sometimes efficiency means preserving enough unused capacity to respond to evidence. Sometimes it means paying for a cheap negative result before an expensive positive hope. Sometimes it means taking the nearby opportunity because the distant one cannot be reached safely. Sometimes it means recognizing that a person who appears to be making a narrow choice is navigating a narrow corridor.

The rover on Mars cannot complain that its feasible set is unfair. It simply has one.

We do have the luxury of asking where human feasible sets come from. We can redesign forms, insurance, credit, transport, schedules, safety nets, interfaces, and institutions so that more people can afford to search. That is not charity toward exploration. It is an investment in the number and diversity of experiments a society is capable of running.

A civilization's search capacity depends partly on how many of its members possess another turn.

The next chapters will examine a new pressure on that capacity. Machines are making candidate generation dramatically cheaper in domains that once required expensive human effort. They can produce more code, text, images, designs, hypotheses, and plans than people can inspect. That sounds like the end of constraint.

It is not.

When one constraint relaxes, another becomes visible.

The rover still has to decide where to drive.