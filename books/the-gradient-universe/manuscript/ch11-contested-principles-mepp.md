# Beyond Maximum Dissipation: The Reachability Conjecture

The second law gives us an inequality, not a screenplay.

Entropy production constrains what irreversible processes can do. It does not usually select one realized history from every physically possible history. A heated fluid can conduct, convect, oscillate, or become turbulent depending on geometry, forcing, material properties, and perturbations. A chemical network can settle into one steady state, another steady state, or a cycle. A cell can burn substrate, store it, reroute it, enter dormancy, repair itself, or die. The laws of thermodynamics remain true in every case.

The temptation is to search for one extra rule that chooses the winner.

Maximum entropy production is the most famous candidate. In its strongest popular form, the proposal says that a driven system tends toward the accessible state that produces entropy at the greatest rate, subject to constraints. Maximum power makes a related claim about energy throughput. Constructal arguments emphasize easier flow access. Dissipative-adaptation arguments ask whether driven matter becomes biased toward configurations that absorb and dissipate work under a particular forcing protocol.

Each captures something real in some systems.

None currently gives us a universal law of organization.

That conclusion is not a retreat. It creates room for a better question.

A battery is valuable partly because it does not dissipate its chemical gradient as quickly as possible. A membrane is useful partly because it blocks equilibration. An animal may survive winter by reducing metabolic throughput. A seed can preserve a chemically rich structure while doing almost nothing visible for months. An immune system spends energy maintaining cells that may not be needed for years. A brain expends metabolic power representing futures that never occur. A power grid holds reserve capacity idle on purpose.

These examples look like failures if instantaneous dissipation is the objective.

They look ordinary if the relevant quantity is future capability.

The question is not only how much free energy a system is destroying now.

It is what the system will still be physically capable of doing next.

Control theory already has language for part of this problem. Given a dynamical system, an initial state, and a set of admissible controls, the *reachable set* is the set of states the system can reach. Viability theory asks a related question: from which states can the system continue operating without crossing specified failure boundaries? These ideas are mature in engineering and have been applied to biological networks. Lakatos and Stumpf, for example, used reachable-set methods to bound the behavior of stochastic biochemical systems under uncertain parameters and control inputs: https://doi.org/10.1098/rsos.160790 .

Thermodynamics contributes another missing part. A theoretically reachable state may not be physically affordable. A robot may be able to drive to the top of a hill in its equations and lack the battery energy to do it. A cell may possess a reaction pathway but lack sufficient ATP, reducing equivalents, membrane potential, or substrate to execute it. A power plant may be controllable in principle and unable to follow the requested trajectory without exceeding thermal or fuel limits.

Reachability therefore has to be budgeted.

Suppose the state of a system is represented by \(x(t)\), its environment by \(e(t)\), and its admissible actions by \(u(t)\). Write the dynamics abstractly as

\[
\dot{x}=f(x,e,u;c),
\]

where \(c\) represents physical constraints that shape the dynamics: membranes, catalysts, valves, stored chemical species, network architecture, geometry, channel states, regulatory machinery, or other embodied structures.

Now specify a set \(K\) of viable states. For a cell, \(K\) might include experimentally defensible ranges of membrane potential, pH, redox state, osmotic balance, metabolite levels, and molecular damage. For an engineered machine, it might include temperature, voltage, stress, speed, and control limits. The choice of \(K\) must be declared before the result. Otherwise “viable” becomes another word that can be stretched around whatever happened.

Next specify a physical budget \(B\) over a time horizon \(\tau\). The budget might be available exergy, electrical energy, ATP turnover, fuel molecules, absorbed work, or another quantity appropriate to the scale.

Then ask which viable states can actually be reached within that budget.

Call the resulting object a *thermodynamically budgeted viable reachable set*.

The phrase is clumsy. The idea is not.

Two systems exposed to the same environment can have the same current energy throughput and radically different future possibilities. One can tolerate heat, switch fuel, repair damage, or wait out scarcity. The other can do exactly one thing efficiently until conditions move outside its narrow operating range.

Which is more capable?

Instantaneous entropy production cannot answer that question.

The shape of the future reachable set can.

This does not require inventing a new fundamental force. It requires taking seriously a process that ordinary dissipation language tends to hide: systems can use work to change the constraints that determine their later dynamics.

A cell spends ATP to pump ions against electrochemical gradients. The result is not merely heat. The work constructs a new gradient that changes what transporters, channels, motors, and signaling processes can do later. A bacterium induces a transport protein and thereby gains access to a substrate that was physically present but previously unusable. An animal stores fat and changes what environmental interruptions it can survive. A beaver builds a dam and changes the local hydraulic boundary conditions of its own future habitat. Humans charge batteries, build roads, insulate buildings, write software, and educate children. Present work changes later possibilities.

This is the process I will call **recursive thermodynamic reachability**.

The term *recursive* matters because the action reaches forward into the system's own future action space. Work performed now constructs, maintains, removes, or reorganizes constraints that alter which future state transitions remain available. In stronger cases, the newly available states include pathways that maintain or rebuild the very constraints that made those pathways possible.

That last feature connects the proposal to existing work on biological organization.

Montévil and Mossio formalized living organization as a *closure of constraints*: processes in an organism produce or maintain constraints that in turn regulate other processes in the organization: https://doi.org/10.1016/j.jtbi.2015.02.029 . Lehman and Kauffman developed a related thermodynamic account of constraint closure in origin-of-life transitions: https://doi.org/10.3390/e23010105 . These theories already capture the crucial idea that constraints are not passive decorations. They channel work, and in living systems some of the work is used to reconstruct the constraints themselves.

The reachability conjecture does not replace constraint closure.

It asks what constraint closure *buys*.

A constraint has what I will call **reachability leverage** when the work invested in creating or maintaining it expands the system's later viable possibilities under a matched physical budget.

The cleanest version is set-valued rather than scalar. Imagine two otherwise comparable architectures, one with constraint \(c\) and one without it. Under the same external resources and the same predeclared disturbance set, ask whether the constrained architecture can remain viable in every future the unconstrained one can handle, plus at least one additional future.

If so, the constraint has positive reachability leverage over that time horizon.

If the constraint consumes resources and closes more useful futures than it opens, its leverage is negative.

This is deliberately different from saying that the constraint is “more efficient,” “more complex,” or “more ordered.” Those words are too easy to manipulate. A storage tank may lower efficiency and increase reachability. Redundant organs may consume more resources and increase reachability. A safety margin may reduce peak output and increase reachability. A useless regulatory circuit may consume ATP and decrease reachability.

The sign has to be measured.

There is a reason not to begin by assigning a single number to the reachable set. The “volume” of a state space depends on coordinates and coarse-graining. A system can appear to have more possible states merely because the modeller chose more variables or rescaled an axis. A serious theory should first compare inclusion, robust viability under a declared disturbance family, or target reachability under declared tasks. Scalar summaries can come later, once the measure has a physical interpretation.

This immediately improves on maximum-dissipation thinking in one respect.

It can explain why a system may rationally — or evolutionarily — dissipate *less now*.

A shorted battery can produce a large current and destroy nearly all future electrical options. A controlled discharge preserves some future options while delivering work. A spore suppresses metabolism but retains the capacity to reactivate. A hibernating mammal lets body temperature and metabolic rate fall to protect stored chemical resources. A plant closes stomata during drought even though doing so reduces carbon uptake and photosynthetic throughput. A microbe activates stress responses that slow growth.

In each case, the system trades present rate for future reachability.

Natural selection provides a mechanism by which that trade can accumulate in biology without invoking any thermodynamic purpose. Heritable architectures that preserve more fitness-relevant future options in the environments actually encountered can leave more descendants. The target remains reproductive success. Reachability is a physical intermediate variable, not a replacement definition of fitness.

That distinction is essential.

An organism could possess a huge repertoire of metabolically reachable states that never matter in its environment and gain no fitness advantage. Another could be narrowly specialized and dominate a stable niche. The environment determines which parts of the reachable set are valuable to selection.

This is one reason the proposal should not be phrased as “nature maximizes options.”

That would simply replace one empty optimization slogan with another.

The more defensible conjecture is conditional:

**In variable environments, heritable constraints with positive thermodynamic reachability leverage can be favored even when they reduce instantaneous power, efficiency, or entropy production.**

That statement can fail.

It also connects to current research in a way that gives us something concrete to test.

On September 3, 2026, Jumpei Yamagishi and Tetsuhiro Hatakeyama published a result in *PRX Life* showing a thermodynamic cost–controllability trade-off in metabolic currency coupling: https://doi.org/10.1103/4bqh-zhry . Their model concerns ATP, GTP, NAD(P)H, and the difficulty of independently controlling coupled metabolic currencies. Greater controllability can require comparable metabolite pools and therefore greater entropy production.

That result is close enough to this book's territory that intellectual honesty demands we say exactly what it does and does not leave open.

It establishes neither a universal reachability principle nor a general theory of adaptation. But it shows that *control itself has a thermodynamic price* in a biologically meaningful model. A next question is whether systems paying that price gain a measurably larger viable response repertoire under environmental variation, and whether that gain predicts when the cost is evolutionarily worth paying.

That is a reachability question.

Another recent idea comes even closer from a different direction. Hyun Youk introduced the concept of **non-equilibrium capacity**: the retained ability of a living system to generate, sustain, or restart the dynamics of life, including in states such as dormancy where ongoing activity may be extremely low: https://doi.org/10.1016/j.newton.2025.100358 .

Dormancy is devastating to any theory that identifies life with high current throughput.

A dry spore and a dead cell can both have very low present metabolic activity. Yet the spore retains a structured capacity to restart metabolism, regulation, repair, and replication when conditions permit. The difference is about latent possibility.

Could non-equilibrium capacity be operationalized as a thermodynamically constrained viable reachable set?

That is one of the sharpest questions this book can now ask.

If the answer is no, the reachability conjecture may be only an analogy. If the answer is yes, dormancy becomes more than a counterexample to maximum dissipation. It becomes a test case for measuring latent physical capability.

Stochastic thermodynamics gives us tools for the cost side of that measurement. Falasco and Esposito's 2025 *Reviews of Modern Physics* article on macroscopic stochastic thermodynamics develops a bridge from trajectory-level nonequilibrium descriptions toward macroscopic deterministic dynamics: https://doi.org/10.1103/RevModPhys.97.015002 . Thermodynamic uncertainty relations and related bounds show that precision, current fluctuations, response, and dissipation can be quantitatively linked under specified assumptions.

Active-matter physics offers another experimental arena. Bebon, Robinson, and Speck's 2025 *Physical Review X* paper tracks dissipation across scales in active matter and makes the relationship between microscopic fueling and collective behavior explicit: https://doi.org/10.1103/PhysRevX.15.021050 .

A natural experiment would be to construct active systems with comparable energy budgets but different feedback, storage, or structural-memory mechanisms. Measure both their dissipation and the set of macrostates or perturbations they can recover from. If instantaneous dissipation predicts performance as well as the reachability structure does, the conjecture has added little. If systems with lower current dissipation but higher reachable viability survive a wider perturbation family, the distinction becomes physically meaningful.

Information adds another layer without becoming magic.

Kolchinsky and Wolpert developed a framework connecting semantic information, autonomous agency, and a chosen viability function in nonequilibrium statistical physics: https://doi.org/10.1098/rsfs.2018.0041 . Their work asks when information carried by one part of a system is causally valuable for maintaining another part in a viable state.

The reachability view suggests a related operational test for memory.

A memory has physical value when possessing it changes which future viable states can be reached, or changes the physical cost of reaching them, under a specified task distribution. A bacterial regulatory state, an immune memory cell, a learned motor policy, and a map in a robot can all be evaluated this way without claiming they are the same kind of information.

This gives us a candidate bridge from thermodynamics to agency that is stronger than “agents dissipate energy.”

A passive dissipative structure follows the dynamics imposed by its current state and boundary conditions. A feedback system senses some variable and changes its action. A recursively reachable system can use current work to alter the constraints governing its later choices. A model-based agent can estimate counterfactual futures and choose present actions partly because of their predicted effect on later options.

Nothing supernatural has entered.

What has changed is the causal depth of control.

A thermostat spends energy according to a present error signal. A bacterium can change gene expression and thereby alter what resources it can metabolize later. An animal can build a shelter before the storm arrives. A human can forgo current consumption to build a machine whose future output changes what projects are possible. A brain can rehearse a movement before committing the body to it.

These are not merely larger dissipation rates.

They are interventions on future boundary conditions.

This may also explain a familiar pattern in collapse. Systems sometimes fail while substantial energy remains physically present.

A cell can contain nutrients yet lose membrane integrity or redox control. A mitochondrion can have substrate while electron transport fails. A grid can have generators and fuel while losing synchronization, transmission paths, protection coordination, or black-start capability. An organization can have money and equipment while losing the procedures and trusted relationships required to act.

The raw stock is not always the limiting variable.

The reachable set can collapse first.

That observation suggests another prediction: in at least some systems approaching failure, a robust reachable-set metric should deteriorate earlier than bulk energy inventory or average energy throughput.

If it does not, the framework is less useful than it sounds.

There are deeper difficulties.

The first is model dependence. Reachability exists only relative to state variables, dynamics, controls, budgets, and a time horizon. Choose them badly and the result will be meaningless.

The second is the time horizon itself. A structure that improves one-hour reachability may reduce ten-year reachability. Storing a fuel helps through a short shortage and can become a liability if maintenance costs dominate over decades. Any experimental claim must specify \(\tau\) before comparing systems.

The third is uncertainty. Real organisms and machines do not know the future disturbance exactly. The relevant object is therefore often a robust or probabilistic reachable set: what can be handled across a declared family or distribution of futures?

The fourth is cost accounting. A larger response repertoire is not free. Sensors, memory, control molecules, redundancy, storage, and repair consume matter and energy. The comparison must subtract those costs rather than celebrating complexity after the fact.

The fifth is state-space growth. Living and technological systems can create new components, tools, symbols, niches, and effective variables. Ordinary control theory often assumes a fixed state space. A system that constructs a new enzyme, organ, machine, or interface can change the dimensionality or effective topology of its future possibilities. That is mathematically harder than controlling a fixed plant.

It may also be where the most interesting science begins.

Physics Reports published a 2024 review titled [“On principles of emergent organization”](https://doi.org/10.1016/j.physrep.2024.04.001). Its opening point is unusually relevant: despite a century of work, physics still lacks basic general principles of spontaneous self-organization, and even defining “structure” rigorously is difficult.

A reachability theory would not solve that entire problem.

It might solve a smaller one.

Instead of asking why the universe “prefers complexity,” ask when work invested in a structure changes the future set of physically viable processes enough for that structure to persist, reproduce, or be selected.

Instead of asking whether life maximizes dissipation, ask which constraints let a lineage survive a wider distribution of future conditions per unit of physical cost.

Instead of treating agency as a mysterious substance, ask whether the system can use sensed or modeled information to alter its future control landscape before committing scarce resources.

Instead of treating collapse as simple energy exhaustion, ask whether the map of viable futures is shrinking even while energy remains.

Those questions are narrower than a fourth law.

They are also experimentally better.

The reachability conjecture can be tested first in systems simple enough to measure.

Build two synthetic driven chemical assemblies with matched fuel. Let one spend nearly all input on immediate turnover. Let the other spend part of the input forming a persistent compartment, catalyst distribution, or storage species. Then expose both to a preregistered family of future forcing protocols. Does the constraint-bearing system remain viable or reach target states that the high-throughput system cannot? Is the gain large enough after counting the work used to build the constraint?

Engineer microbial strains with different regulatory costs and expose them to constant versus fluctuating environments with the same mean resource flux. Does the costly-control strain lose in the constant environment and win beyond a predictable variability threshold because its viable response set is wider?

Take dormant and dead cells with similar present metabolic rates. Can a measurable reachable-state assay distinguish latent capacity before reactivation occurs?

Use programmable active matter. Does feedback-induced structure expand the set of recoverable macrostates even when total dissipation falls?

These experiments could fail cleanly.

That is the point.

If ordinary fitness, standard control metrics, current dissipation, or simple energy reserves predict the outcomes just as well with fewer assumptions, recursive thermodynamic reachability should be demoted to a descriptive synthesis.

If the reachable-set result depends on choosing state variables after the fact, discard it.

If a constraint appears beneficial only because its construction cost was ignored, discard the comparison.

If every failure can be rescued by changing the time horizon or inventing a hidden gradient, the conjecture has become another unfalsifiable story.

A real principle closes its escape hatches in advance.

The most ambitious defensible statement is therefore not that nature maximizes reachability.

It is this:

**Work can be invested in physical constraints that change a system's later viable reachable set. Under variable environments, selection or design can favor constraints with positive reachability leverage even when those constraints reduce present dissipation or power.**

That proposition is less grand than maximum entropy production.

It explains more of what maximum entropy production gets wrong.

It gives storage, membranes, repair, redundancy, dormancy, memory, and planning a common physical description without pretending they are the same phenomenon.

And unlike “the universe prefers complexity,” it points toward measurements.

The next chapter has one job: try to kill it.