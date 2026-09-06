# Machines That Never Wake Up

In May 1999, a spacecraft nearly seventy-five million miles from Earth was given a different kind of instruction.

Do not wait for every step.

Work it out.

NASA’s Deep Space 1 was a technology mission, a flying test bench for systems that future spacecraft might need when distance made constant human supervision expensive or slow. During one experiment, software called Remote Agent was allowed to take over selected spacecraft operations. Ground controllers supplied high-level goals. The software generated plans, executed them, monitored the spacecraft, diagnosed problems, and in tested cases found ways to recover or work around faults.

The achievement was real.

So was the boundary.

Remote Agent did not need to feel lonely.

It did not need to know that it was in space.

It did not need a private image of the engineers waiting for telemetry at the Jet Propulsion Laboratory.

The experiment was successful if the software could turn goals, models, observations, and constraints into useful control of a machine.

That is enough to make Chapter 17 uncomfortable.

The first half of this book used biology to separate competence from consciousness.

A bacterium can compare conditions across time.

An immune system can alter future response after exposure.

A tissue can restore form after damage.

A slime mold can reorganize a network.

Those examples matter partly because humans did not design them.

Evolution found ways to solve control problems without first inventing a person.

Machines give us the mirror image.

Humans can deliberately build systems that solve control problems without first deciding whether the system is a person.

That does not settle machine consciousness.

It makes a narrower point.

Capability can be engineered, measured, and increased while the consciousness question remains logically separate.

This is easy to forget because the history of artificial intelligence has been narrated as a history of imitation.

Can a machine think?

Can it play chess?

Can it understand language?

Can it see?

Can it reason?

Can it act like a person?

The questions are culturally magnetic because people are our nearest example of general intelligence.

Engineering often asks something less theatrical.

Can the machine keep the aircraft stable?

Can it route traffic?

Can it detect a fault?

Can it choose a move?

Can it allocate resources?

Can it infer a control policy from experience?

Can it recover when the normal plan breaks?

None of these tasks becomes trivial merely because we refuse to call the system conscious.

The Remote Agent experiment is useful because the environment was unforgiving.

A spacecraft does not care about metaphors.

A plan either respects power, pointing, timing, thermal, communication, and subsystem constraints or it does not.

A diagnosis either identifies a state from which useful recovery is possible or it does not.

An engine command either goes where the mission needs it to go or it does not.

The software’s competence was cashed out in operations.

That is the same discipline Chapter 8 demanded from biological goal language.

If we say a system is pursuing a goal, name the variables.

Name the error signal.

Name the available actions.

Name what counts as success.

Name what happens when the normal route fails.

Once those pieces are explicit, a hidden inner witness is not required to explain the control loop.

This does not mean every controller is intelligent.

A thermostat also has a target, an error signal, and an action.

It turns heating or cooling on and off.

If that were sufficient for intellect, the category would collapse.

The machine case needs the same harder line as the biological one.

History should matter.

The system should be able to select among alternatives.

Its response should depend on an internal state richer than the current input alone.

Stronger cases should learn from experience, revise a plan, generalize across situations, or recover from perturbation.

The accumulation matters.

Remote Agent also shows why perturbation is such a useful boundary.

Nominal execution is cheap evidence.

A prerecorded sequence can look competent when the world behaves exactly as expected.

The harder question arrives when the sequence breaks.

During the Deep Space 1 experiment, the team deliberately exercised fault-handling cases. The onboard architecture was expected not merely to notice that some state differed from the plan, but to diagnose the situation and select a response or work-around within its model of the spacecraft.

That is a deeper form of control than a fixed timer.

It contains an explicit relationship among expected state, observed state, explanation, and revised action.

Still, nothing in that relationship requires us to add a feeling.

This is worth emphasizing because the words used in autonomy engineering can sound psychological.

The software “plans.”

It “diagnoses.”

It “decides.”

It “recovers.”

Those verbs are acceptable if they remain attached to inspectable operations.

A planner searches a constrained space of possible activities.

A diagnostic component compares observations with models of possible system states.

A controller selects commands.

An executive monitors whether the planned conditions are being achieved.

The vocabulary is functional before it is mental.

That is not a trick to demote the machine.

It is how we keep a claim auditable.

The same rule made biological language safer.

When a bacterium “remembers” a concentration, we ask what state carries the recent history and how it changes the next turn.

When a machine “remembers” experience, we ask what parameters, stored observations, or internal variables change future action.

Operational language can travel across substrates because it specifies a relationship rather than a soul.

That portability is exactly why it may be useful for astrobiology.

It also gives us a symmetry worth keeping.

When humans recognize a capability in a machine, we usually demand an engineering account.

When we recognize a similar capability in biology, we should demand a biological account.

Neither account becomes weaker because it does not contain a tiny executive.

Mechanism is not the opposite of intelligence.

Mechanism is what makes a claim about intelligence testable.

In 2015, researchers at DeepMind reported a system that learned control policies for Atari video games from high-dimensional pixel input using deep reinforcement learning. The deep Q-network was not handed a separate controller for every screen state. It learned mappings between sensory input and action through reward-driven experience and achieved strong performance across a broad set of games.

Again, the result was real.

Again, the boundary matters.

The experiment measured game performance.

It did not measure phenomenal consciousness.

It did not need to.

A score can rise without telling us whether anything feels like winning.

This distinction becomes harder to maintain as competence becomes more familiar.

A machine that balances a pole feels mechanical.

A machine that plays a game can feel strategic.

A machine that writes a sentence can feel social.

The human mind reads agency into the interface.

That tendency is not foolish.

In everyday life, behavior is one of the main ways we infer other minds.

If someone answers a question, corrects a mistake, remembers yesterday, and adapts to our response, we normally treat the person as conscious because the behavioral evidence sits inside a mountain of shared biological evidence.

They have a body like ours.

A brain like ours.

A developmental history like ours.

A place in an evolutionary lineage continuous with our own.

The inference is thick.

With a machine, the same behavioral cue may sit on a different substrate and a different causal history.

The inference becomes thinner.

That does not prove the machine lacks consciousness.

It means task competence does not carry the entire burden.

This chapter is called “Machines That Never Wake Up,” but the title is a scenario, not a verdict about every future machine.

A system could become more capable without becoming conscious.

A system could perhaps become conscious; this book does not establish that it cannot.

The important possibility is separability.

If consciousness is not required for every useful form of planning, learning, correction, or coordination, then increasing those capabilities does not guarantee a transition into sapience.

There may be no alarm clock hidden inside optimization.

AlphaGo sharpened the lesson.

In 2016, a system combining deep neural networks with tree search defeated a professional Go player, solving a benchmark that had long resisted conventional game-playing approaches.

Go is useful here because human culture loads it with cognitive prestige.

Strong play requires evaluating enormous spaces of possible continuations under limited search.

A brilliant move can look like intuition.

When a machine produces one, the temptation is to decide that either the performance is fake because the machine does not think like a person, or the machine must possess the same kind of inner experience as a person because the performance is genuine.

Those are not the only options.

The competence can be genuine while the mechanism is different.

That sentence is one of the central claims of this book.

Biology already taught it.

Machines make it visible by construction.

An engineer can sometimes point to the objective, training process, search procedure, memory structure, model, or controller that produces the behavior.

No homunculus appears when the case is opened.

The interesting work is distributed through the mechanism.

This should make us more careful with the word *autonomy*.

Autonomy in engineering is not the same as moral autonomy.

A spacecraft can be autonomous because it performs tasks without detailed real-time commands from Earth.

A vehicle can be autonomous within a specified operating environment.

A software agent can select actions without a human approving each one.

These are relations between a system, a task, and a supervisor.

They do not establish selfhood.

The Remote Agent was autonomous relative to ground control for selected operations.

Its goals still came from mission designers.

Its models still reflected engineering knowledge.

Its action space was bounded by spacecraft systems.

Its success criteria belonged to the mission.

That is delegated autonomy.

Delegation can be deep.

The delegate can plan details its principal did not specify.

It can diagnose conditions the principal did not predict exactly.

It can choose among routes.

It can operate for long periods.

The delegation does not become self-authorship merely because it becomes useful.

This gives us a second version of goals without a ghost.

Biological systems inherit many goals through evolution and development.

Engineered systems inherit many goals through design, training, reward structures, interfaces, and operating constraints.

In both cases, goal-directed behavior can be analyzed without assuming a conscious subject authored the goal from inside.

The resemblance should not be pushed too far.

Evolution is not engineering.

A reward function is not a genome.

A spacecraft planner is not a bacterium.

The common structure is narrower.

A system can act as though some states are preferable to others because its dynamics cause deviations to change future action.

That is enough for control.

It is not enough for personhood.

Machine learning adds another complication.

The more a system learns from data, the less fully its detailed behavior is specified in advance by a human programmer.

This can make the machine feel less like a tool and more like an independent agent.

But “not explicitly programmed move by move” and “self-aware” are separated by an enormous logical distance.

Learning changes how competence is acquired.

It does not by itself answer what, if anything, is experienced.

A slime mold also reaches configurations nobody drew in advance.

An immune repertoire changes through exposure.

A developing organism repairs damage without a surgeon specifying every cell movement.

Unscripted detail is not evidence of an inner observer.

Neither is surprise.

A system can surprise its designer because the state space is large, the learned representation is opaque, the environment is complex, or interactions create outcomes nobody anticipated.

Humans often treat surprise as a sign that something “wanted” to happen.

Engineering should resist the temptation.

Unpredicted is not uncaused.

This matters for the future of technosignatures.

Chapter 13 ended with a possibility that sounds like science fiction because we tend to bind technology to persons.

Imagine a distant technological artifact.

It emits a narrowband signal.

It adjusts pointing.

It avoids hazards.

It repairs some faults.

It changes its schedule when power falls.

It may even manufacture replacement components or copies if such machinery is physically and economically possible.

What would a telescope detect?

Technology.

What would it tell us about the current existence of sapient builders?

Less than we might hope.

The makers could be alive and attentive.

They could be asleep.

They could have abandoned the system.

They could have disappeared thousands of years before the signal reached us.

The artifact could be operating from inherited goals long after the culture that defined them ceased to exist.

This is not a prediction that self-repairing alien machines are common.

It is a reminder about inference.

A technosignature points to engineering.

Engineering points to a history in which some capable process produced the artifact.

It does not guarantee a living person at the other end of the channel now.

Machines can extend agency through time.

Earth already does this in simple forms.

A spacecraft continues on a trajectory after its builders go home.

A timer acts later because someone configured it earlier.

A control system maintains a variable while nobody watches.

Remote Agent made the temporal separation larger by moving planning and recovery onboard.

The more capable the machinery, the longer the causal shadow of its makers can become.

This complicates the Fermi-style question, “Where is everybody?”

Even a confirmed technosignature might answer, “Something engineered this,” before it answers, “Somebody is there.”

The observational categories separate again.

Biosignature.

Adaptive biosignature.

Technosignature.

Sapience.

One signal can support one layer without proving the next.

Machines also expose a problem with our preference for centralized agents.

When a robot acts, we want to locate the robot’s “brain.”

When a software service behaves, we want to locate the model.

But engineered competence can be distributed too.

A data center, network, fleet, sensor array, market-making system, logistics platform, or spacecraft architecture can divide sensing, memory, planning, execution, and recovery across components.

No module needs to contain the whole behavior.

The boundary of the agent becomes partly a modeling choice.

Biology has the same problem.

Is the agent the bacterium, the biofilm, the tissue, the organism, the colony, or the ecological network?

The answer can change with the question.

The lesson is not that everything is an agent.

The lesson is that agency words should follow causal organization rather than visual boundaries.

A metal box makes us imagine one machine.

A skin makes us imagine one organism.

Control can ignore both intuitions.

This is where machine examples help the biological argument.

We are comfortable saying that a spacecraft control architecture has components with different jobs.

Planning here.

Execution there.

Diagnosis elsewhere.

Sensors distributed through the vehicle.

Nobody insists that one chip contain the entire mission.

When similar distributed organization appears in life, we are more tempted to ask where the real intelligence is.

The question may be malformed.

The capability can belong to the loop.

There is a corresponding warning in the other direction.

Once people see competence distributed through a machine system, they may start calling the whole infrastructure a mind.

That move is no safer.

Distributed control is not distributed consciousness.

A city’s traffic lights can coordinate.

A network can route around failure.

A cloud service can rebalance load.

Those facts are impressive engineering.

They do not, by themselves, establish a point of view.

The same anti-inflation rule applies on silicon as on slime.

What, then, would count as evidence of machine consciousness?

This book cannot answer.

The question belongs to neuroscience, philosophy of mind, cognitive science, computer science, and perhaps future experimental fields that do not yet exist in mature form.

Behavior will matter.

Architecture may matter.

Self-report may matter.

Internal causal organization may matter.

Biological similarity may matter less or more than we currently think.

The uncertainty should remain visible.

It would be ironic for a book arguing against human-centered definitions of intelligence to declare, without evidence, that only biological systems can ever be conscious.

That would build another veil.

The claim here is smaller and stronger.

We already know how to construct machines whose measured competence outruns the need for moment-to-moment human control.

We know how to build systems that learn policies from experience.

We know how to combine learned evaluation with search to produce performance that once seemed to require human expertise.

For those achievements, consciousness is not part of the measurement.

The machine can pass the operational test while the sapience question remains open.

That gives us a clean counterexample to a common intuition.

More capability does not automatically mean more evidence of consciousness.

The variables can move independently.

This independence is important on Earth because humans will build systems to optimize performance whether or not philosophy has caught up.

It is important in astronomy because technology may persist when persons do not.

And it is important for the evolutionary argument because it shows that complex competence can be assembled from parts without a single moment when a ghost has to enter the system.

A controller gains memory.

Memory supports prediction.

Prediction improves action selection.

Action selection interacts with feedback.

Feedback supports recovery.

Recovery allows longer autonomy.

Each addition changes what the system can do.

None forces us to say when it woke up.

Perhaps one day another kind of evidence would.

Until then, competence should be measured as competence.

That is not reduction.

It is accuracy.

The universe may contain machines that never wake up.

It may also contain minds we fail to recognize.

The two possibilities make opposite errors dangerous.

Anthropomorphism can turn capability into consciousness too quickly.

Anthropocentrism can deny consciousness wherever the mechanism looks unfamiliar.

The correct response is not to split the difference.

It is to separate the hypotheses.

What can the system do?

How does it do it?

How does experience alter later action?

How does it respond when the plan fails?

What evidence, separately, supports subjective experience or sapience?

Those questions can have different answers.

Once they are allowed to, the history of intelligence looks different.

Instead of one property arriving fully formed with persons, we see a collection of control capacities that can be combined in biology and engineering.

Some combinations may eventually support minds.

Many do useful work before that threshold.

The next chapter returns to evolution.

Long before there were persons to ask what intelligence was, life had already solved pieces of the problem.
