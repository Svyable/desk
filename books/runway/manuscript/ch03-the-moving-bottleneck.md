# The Moving Bottleneck

A bottleneck is easy to recognize after it has stopped you.

Before that, it often looks like somebody else’s problem.

The factory manager worries about the machine that is fully utilized while the finance team worries about the cost of the machines sitting idle. The software team asks for more servers while the infrastructure team asks why utilization is low. A utility sees an interconnection request; a data-center developer sees the date on which billions of dollars of equipment can begin earning a return. A hospital sees a promising model; the security office sees a system asking for access to patient data and clinical software. Every group is describing the same system from the position of the constraint it can see.

Artificial intelligence makes this especially difficult because the constraint moves.

In one period the hard thing is training a capable model. Then several organizations can train models of similar quality and the scarce thing becomes inference capacity. Hardware arrives and the scarce thing becomes power. Power is contracted and the scarce thing becomes grid connection. A campus is energized and the scarce thing becomes useful deployment. Agents improve and the scarce thing becomes verification. Verification improves and the scarce thing becomes organizational willingness to delegate. Delegation spreads and the scarce thing becomes human attention for exceptions.

The success of one stage creates the next problem.

That is not a failure of progress. It is what progress looks like in a constrained system.

There is a long tradition of thinking this way in manufacturing and operations. A production line does not increase output merely because every worker becomes ten percent faster. If one station determines throughput, improvements elsewhere can create inventory rather than finished goods. The manager who wants more output has to identify the binding constraint, improve it, then look again because the system has changed.

The lesson sounds banal until the constraint is expensive and fashionable.

Then organizations become remarkably good at optimizing what is visible instead of what matters.

AI has spent several years in an era when model capability was so visibly limiting that it became natural to treat capability progress as system progress. Early language models failed in ways that were obvious even to casual users. Better scaling, training methods, data, reinforcement techniques and inference-time reasoning produced improvements that felt directly useful. A stronger model could suddenly answer questions, write code or follow instructions that an earlier one could not.

This encouraged a simple causal story: make the model smarter and everything downstream gets better.

Sometimes it does.

But downstream systems have their own thresholds.

A bank does not care that a model’s average answer quality improved if the remaining failures are concentrated in cases that create regulatory liability. A software company does not care that an agent can complete ninety percent of a migration if the last ten percent creates subtle production bugs that take longer to find than the migration saved. A manufacturer does not care that a vision system is usually correct if its errors occur around dangerous equipment. A scientist does not care that a generated hypothesis sounds plausible if the validation pipeline cannot distinguish it from thousands of other plausible hypotheses.

Once raw capability crosses a useful threshold, the constraint often becomes the shape of the residual error.

This is one reason benchmark progress can coexist with frustration in practice.

Benchmarks are necessary. They tell us something about changing capability under specified conditions. They become misleading only when we ask them to answer a different question: whether a whole sociotechnical system is ready to change.

A benchmark can tell us that an agent completes longer software tasks. It does not by itself tell us whether a company has a repository architecture the agent can understand, permissions it can safely use, tests that detect mistakes, incident-response procedures for automated changes, or managers willing to assign it meaningful work.

Those surrounding elements are not footnotes.

They determine whether capability becomes throughput.

The moving-bottleneck view helps explain why adoption often looks slow and then suddenly ordinary.

Before a technology is usable, improvements in one layer can have little visible effect because another layer blocks them. Then a few constraints are removed in close succession and the system appears to jump. The jump may be real, but it was prepared by work that looked incremental and unrelated.

Electric lighting offers a useful historical pattern. A better bulb was not enough. Generators, distribution networks, wiring, meters, standards, fixtures, financing and operating practices had to exist. Early factories that replaced steam with electric motors did not immediately capture the full productivity gains of electricity when they simply substituted one central motor for another. The larger gains came as factories were redesigned around distributed electric power. Floors could be reorganized. Machines no longer had to cluster around shafts and belts. The technology changed the architecture of work.

The important moment was not only invention.

It was reconfiguration.

AI is beginning a similar argument with the organizations adopting it.

The first implementation often preserves the old process. A human writes a document, then asks a model to polish it. A developer writes code, then asks a model for suggestions. A support agent receives an AI-generated answer and decides whether to use it. These are sensible first steps because they preserve control and make evaluation easier.

They also preserve the old bottlenecks.

If a human has to initiate, review, copy, paste, route and approve every unit of machine work, human attention remains in the critical path. The machine may reduce the time spent producing a draft while leaving queueing, coordination and decision time unchanged. The result is a local efficiency gain rather than a system redesign.

Agentic software is interesting because it attacks this boundary. An agent can potentially receive an objective, use tools, inspect intermediate results, recover from some errors and continue until it reaches a stopping condition. The unit of delegation moves from a sentence toward a task.

As soon as that happens, a new constraint appears: how long can the system remain useful without supervision?

METR’s time-horizon work makes this question concrete. Instead of asking whether a model can solve isolated benchmark items, the evaluations estimate the duration of tasks a system can complete with a given probability of success. The frontier has been moving outward. That is important because many economically useful activities are sequences rather than responses.

But duration has a cruel mathematical property.

Small failure probabilities compound.

A worker who makes one consequential mistake every hundred decisions may be excellent at a ten-step task and dangerous at a ten-thousand-step process unless mistakes are detected and recovered from. Long-running autonomy therefore creates demand for checkpoints, tests, observability, rollback and escalation. A smarter agent may require more infrastructure around it, not less.

The bottleneck moves from generation to control.

Software engineers already understand this at the level of production systems. A powerful service without logs, metrics, access controls, backups and rollback is not a mature service. The intelligence industry is rediscovering the same lesson for agents.

This is why NIST’s work on software-agent identity matters more than it may sound. Identity is boring right up until software can move money, read confidential files, deploy code or contact customers. Then the question “Which agent is this, acting on whose authority, with what scope, and who can audit what happened?” becomes infrastructure.

A system that can act needs a perimeter.

A system that can act for hours needs a history.

A system that can act at scale needs governance.

These constraints are not external to intelligence. They determine the amount of intelligence an institution can safely consume.

The same pattern appears in compute.

Suppose accelerator performance improves. Training becomes faster or larger runs become affordable. Very quickly, memory bandwidth can become more important because processors need to be fed. Improve memory and interconnect may become limiting. Improve networking and power delivery or cooling may become limiting. Build a denser rack and the electrical distribution architecture has to change. Solve rack power and the campus may run into a utility limit.

Every efficiency gain shifts pressure downstream.

This is the industrial version of the Jevons paradox. Efficiency can reduce the resources required for one unit of output while increasing total demand because the output becomes cheaper and more useful. Better inference efficiency does not necessarily reduce electricity demand. It can make more inference economical. More capable agents can reduce the cost of a task while creating demand to attempt tasks that were never previously performed.

The bottleneck moves because demand moves with it.

This makes static forecasts fragile.

A forecast that assumes today’s workload mix can underestimate what happens when prices fall. Few people in the dial-up era would have produced a good bandwidth forecast by imagining that households would do the same things faster. Video streaming, cloud software, social feeds, remote work and software updates changed the workload. Cheap bandwidth created applications that consumed cheap bandwidth.

Cheap intelligence will do the same.

When a translation costs dollars, people translate important material. When it costs fractions of a cent, they translate menus, chats, drafts, product descriptions, internal notes and text that would otherwise never cross a language boundary. When software is expensive, organizations prioritize a small number of applications. When first-pass code becomes cheap, they build internal tools, experiments and one-off automations that would never have survived a budget meeting.

The new applications create new constraints.

Maintenance.

Evaluation.

Security.

Selection.

Integration.

Attention.

The moving bottleneck is therefore not a tidy sequence in which one obstacle is permanently conquered before the next arrives. Old constraints can return. A geopolitical shock can make chips scarce again. A heat wave can constrain power. A security incident can cause an organization to withdraw permissions it had granted. A major model failure can turn trust into the binding constraint overnight.

The runway can narrow after it widens.

This is another reason timelines are less useful than maps.

A timeline encourages the idea that progress is irreversible: capability level A leads to B leads to C. A map shows alternate routes and vulnerable bridges.

Consider power. The amount of generation on a national grid can be sufficient in aggregate while a specific data-center site remains unable to connect. The constraint may be local transmission. It may be a transformer. It may be the stability limits of a region. It may be a tariff dispute about who pays for upgrades. It may be the inability to build generation quickly enough near the load.

“Power” is not one bottleneck.

Neither is “chips.”

Neither is “regulation.”

Useful analysis has to get specific enough to identify the actual scarce interface.

This specificity is where many grand AI predictions become vulnerable. It is easy to say that AI will automate science. Harder questions follow.

Which part of science?

Literature search?

Hypothesis generation?

Simulation?

Experiment design?

Lab execution?

Measurement?

Interpretation?

Replication?

Peer review?

A model may make one stage nearly free while another remains stubbornly slow. Biology can wait on cell growth. Materials science can wait on synthesis and characterization. Clinical research can wait on recruitment, ethics review and outcomes. Astronomy can wait for observing time. A useful scientific agent can shift the bottleneck toward the parts of science that cannot be accelerated with text.

This would still be transformative.

It would simply be transformative in a different way from the usual picture.

If hypotheses become abundant, experimental capacity becomes more valuable. If code becomes abundant, compute and evaluation become more valuable. If designs become abundant, manufacturing capacity becomes more valuable. If strategies become abundant, judgment and capital allocation become more valuable.

Abundance creates scarcity next door.

That sentence is worth keeping in mind through the rest of the book.

The economic consequences can be large because value migrates toward the new constraint.

When a scarce skill becomes abundant, the premium attached to it can fall. The complementary scarce asset can capture more value. If generating advertising copy becomes cheap, trusted distribution may matter more. If drafting software becomes cheap, proprietary data, customer access, reliability and integration may matter more. If model inference becomes cheap, power and access to real-world workflows may matter more.

This is why AI may create fortunes in businesses that do not look like AI companies.

A manufacturer of transformers does not need to train a foundation model to benefit from data-center demand. A utility with available capacity can become strategically valuable. A company with trusted access to a regulated workflow can possess something a frontier model provider cannot conjure from weights. A robotics firm with a reliable service network can own the scarce complement to increasingly capable control software.

The moving bottleneck moves profit pools as well as engineering attention.

Investors tend to discover this after the obvious trade becomes crowded.

First the scarce asset is the accelerator. Then it is HBM. Then perhaps power. Then perhaps land with interconnection rights. Then perhaps secure enterprise distribution. Each stage produces a narrative that the current constraint is the permanent center of the industry.

It rarely is.

The danger for incumbents is especially sharp because a company can be excellent at solving yesterday’s scarcity.

A business organized around expensive expertise may struggle when expertise becomes cheap. A cloud provider built around selling raw compute may have to move toward higher-value orchestration if compute becomes more commoditized. A software company whose moat is the difficulty of writing its code may find that customer relationships and data matter more. A consulting firm built on producing analysis may discover that clients can generate more analysis than they can read.

Every removed bottleneck is somebody’s margin.

Every new bottleneck is somebody else’s opportunity.

The public sector faces the same migration, but with different consequences.

If AI makes processing applications cheaper, agencies may receive more applications. If it makes legal drafting cheaper, more people may challenge decisions. If it makes benefit eligibility easier to analyze, the constraint may move to case adjudication or appeals. If it makes permitting documents easier to produce, review capacity may become scarce. Productivity at one side of an administrative interface can increase workload on the other.

Governments can be surprised by success.

The same is true of education. If personalized tutoring becomes abundant, motivation, social development, credentialing and assessment integrity may matter more. If every student can generate polished prose, the scarce educational object becomes evidence that the student can reason, choose and defend. The bottleneck moves from production to proof.

This is not a pessimistic view.

It is a way to avoid being fooled by the wrong victory.

A system can solve the problem it was designed to solve and still fail to deliver the outcome people expected because the outcome depended on several other things. That is normal. The mistake is to infer from it that the technology did nothing or that the remaining constraints are permanent.

The more useful habit is to ask what became scarce next.

In AI infrastructure, that means watching advanced packaging after accelerators, power after rack capacity, transmission after generation, cooling after density, and construction after financing.

In agents, it means watching task horizon after answer quality, verification after task horizon, identity after tool use, and organizational redesign after reliability.

In science, it means watching experimentation after hypothesis generation and physical throughput after simulation.

In robotics, it means watching hardware economics, uptime, maintenance and fleet learning after control capability.

In the economy, it means watching demand after cost reduction.

And in AI research itself, it means watching whether increasingly capable systems begin removing bottlenecks from the process that creates their successors.

That last transition deserves special care because it is where the moving-bottleneck story can turn into a takeoff story.

If AI makes AI research ten percent more productive, the effect is useful but familiar. If it makes software engineering faster but leaves experiments, hardware and scientific judgment unchanged, the bottleneck shifts and the loop weakens. If it accelerates algorithms, experimental design, evaluation, systems optimization, chip design and infrastructure planning at the same time, the loop closes across more of the critical path.

The difference between ordinary productivity and takeoff may be the number of bottlenecks inside the feedback loop.

A narrow loop saturates.

A broad loop can keep moving.

This is why the runway is not a checklist that ends with “AGI.” It is a dynamic system in which improvements change the importance of other improvements.

There will be no final bottleneck.

There can, however, be a change in tempo.

If the constraint moves every decade, society experiences technological progress.

If it moves every year, industries can be reorganized inside a business cycle.

If it begins moving every few months because the intelligence attacking each constraint is improving while the physical and institutional systems become more responsive, our normal planning horizons fail.

The takeoff is not the disappearance of constraint.

It is the acceleration of constraint removal.