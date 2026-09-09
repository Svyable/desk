# Appendix D — The Variable Problem

Suppose I give you the position and momentum of every molecule in a bacterium.

Have I given you the state of the bacterium?

In one sense, yes. If the description were exact enough and the laws governing the molecules were known, nothing physical has been omitted. The membrane is in there. The ATP is in there. The ribosomes, ion concentrations, DNA, water, proteins, damage, folded and misfolded molecules, every collision and vibration: all present.

In another sense, I have given you almost nothing you can use.

You want to know whether the cell will recover after an osmotic shock. I hand you ten billion coordinates.

This is not a shortage of physics.

It is a shortage of the right variables.

Physics is full of successful escapes from that problem. A gas contains an absurd number of molecular degrees of freedom, yet pressure and temperature can become excellent variables. A fluid contains molecules too, but velocity, density, viscosity, and vorticity let us write equations at a scale where individual collisions disappear into transport coefficients. A ferromagnet can be described microscopically in terms of many interacting spins, while magnetization becomes the variable that makes a phase transition visible.

The success of those macroscopic variables can make the achievement look automatic in retrospect.

It is not.

Choose bad macroscopic variables and a simple microscopic system becomes mysterious. Variables you omitted return as memory, noise, history dependence, or unexplained parameter drift. A process that looked Markovian at one resolution can acquire long memory at another. Two microscopic states that appear identical in your coarse description can have different futures because the hidden variables were not actually irrelevant.

This is why coarse-graining is not merely throwing information away.

It is choosing what information can be thrown away *without destroying the prediction you care about*.

The problem is old. The Mori–Zwanzig projection formalism is one systematic way of starting with high-dimensional dynamics and deriving equations for selected variables. What disappears from the retained description does not vanish from nature. Its influence can return as a memory kernel and a fluctuating force. A modern discussion of the formalism and irreversible macrodynamics is available [here](https://arxiv.org/abs/2112.04067). Work on nonlinear dynamic coarse-graining shows the same warning in practice: choose an inadequate projection and the reduced model can fail to reproduce the behavior that mattered in the full system ([Jung & Jung, 2023](https://arxiv.org/abs/2307.08143)).

The word *relevant* is doing almost all the intellectual work.

Relevant to what?

Relevant to predicting pressure? Relevant to predicting whether a chemical oscillator changes phase? Relevant to predicting whether a cell divides? Relevant to predicting whether it can wake from dormancy? There is no reason the same reduced description must answer all of those questions.

This creates a problem for every proposed theory of biological organization. It is easy to define a quantity after choosing macrostates that make the quantity look meaningful. It is harder to justify the macrostates themselves.

James Crutchfield and Cosma Shalizi made that criticism sharply in a paper on thermodynamic depth. A proposed structural-complexity measure depended on a prior choice of macroscopic states, making the result arbitrary when there was no principled way to choose those states. Their alternative, computational mechanics, defines *causal states* by grouping histories that give the same probability distribution over futures. The resulting states are minimal sufficient statistics for prediction in the formal setting. Their 1999 discussion is worth reading because it identifies the variable-selection problem directly rather than hiding it behind an impressive scalar: [“Thermodynamic depth of causal states”](https://doi.org/10.1103/PhysRevE.59.275).

There is an important lesson here for this book.

Calling something a constraint does not make it one.

I can take a cell model with five hundred variables, circle twenty of them, name the circle “constraint architecture,” and congratulate myself when those variables correlate with survival. Nothing scientific has happened yet.

The circle has to earn itself.

This is where the first-principles reduction in Appendix C lands. If process variables are \(x\) and architecture variables are \(c\), and both evolve, then \((x,c)\) is simply a larger state vector. The mathematics does not care which variables I have typographically promoted. Standard dynamics already contains them.

The distinction becomes meaningful only if treating \(c\) differently gives us something we did not have before.

A membrane is a useful example because it tempts us to answer too quickly. At molecular resolution it is lipids, proteins, water, ions, and forces. At cellular resolution it can behave like a boundary that changes transport. The membrane may make some molecules almost irrelevant to the cytoplasm by excluding them. It may expose others to selective channels. It can allow a cell to maintain voltage and concentration differences that would collapse without it.

The membrane therefore changes the effective dynamics of many faster processes at once.

That sounds like a constraint.

But even here, the word depends on the question. During a millisecond electrical event, a particular ion channel can act as the changing process while bulk membrane composition is approximately fixed. During membrane remodeling, the composition itself becomes a dynamic variable. Over evolutionary time, the proteins constructing and regulating that membrane are changing too.

There is no universal boundary between process and constraint.

There is a scale at which the distinction becomes useful.

This is close to the role of a reaction coordinate in chemistry. A complicated molecular transformation may live in a huge-dimensional configuration space, yet one carefully chosen coordinate can sometimes summarize progress across the important barrier. A bad reaction coordinate makes transition-state behavior look noisy and inexplicable. A good one does not replace the microscopic dynamics. It exposes the part of them that controls the event we care about.

The strongest surviving scientific idea in this book may be that some biological structures should be treated as **work-maintained reaction coordinates for recovery**.

That phrase needs caution. It is not a formal new class. It is a way of asking an experiment.

Imagine a stressed cell. Thousands of quantities change. ATP falls. Proteins aggregate. membrane potential shifts. pH moves. chaperone activity changes. transcription changes. Some of these are downstream symptoms. Some are resources. Some alter many later transitions at once.

Which variables tell us whether there remains a path back to active growth?

A merely predictive machine-learning model can search for variables correlated with recovery. That is useful. But a physical constraint hypothesis asks for more.

First, intervene on the candidate variable. If I restore membrane potential without repairing damaged proteins, does the recovery boundary move? If I dissolve aggregates while ATP remains low, what changes? If I restore ATP but leave the membrane compromised, what changes? The variables should not be chosen only because they announce the answer after the cell has already recovered.

Second, ask what maintaining the variable costs. A membrane potential is not free. Chaperone capacity is not free. Reserve ribosomes are not free. A cell that carries more of one thing carries less of something else or expends resources maintaining it.

Third, ask whether the variable compresses many microscopic effects into one stable prediction. If membrane integrity predicts recovery from one antibiotic treatment but has to be redefined for heat shock, osmotic shock, starvation, and oxidative damage, then perhaps it is merely a local biomarker. If the same physically defined quantity predicts several kinds of recoverability without being retuned, it begins to look more like a genuine macroscopic control variable.

Fourth, compare it with the variables the field already uses.

This requirement keeps getting harsher as the literature gets better.

Bacterial dormancy already has mechanistic predictors. ATP depletion is tied to dynamic protein aggregation and dormancy depth; chaperone-mediated disaggregation participates in resuscitation ([Pu et al., 2019](https://doi.org/10.1016/j.molcel.2018.10.022)). Proteome-allocation models already quantify why apparently unused ribosomes can be valuable during future nutrient upshifts ([Mori et al., 2017](https://doi.org/10.1038/s41467-017-01242-8)). Modern metabolic theory already identifies a thermodynamic price for independently controlling coupled currency metabolites, and explicitly links that trade to environmental complexity ([Yamagishi & Hatakeyama, 2026](https://doi.org/10.1103/4bqh-zhry)).

Any new description has to beat those models on their own ground or leave them alone.

There are other ways to attack the variable problem.

Computational mechanics asks for minimal predictive states. Information-theoretic work asks how much of one variable can be discarded while preserving information relevant to another. Causal-emergence approaches ask whether macro-level causal descriptions can in some cases be more informative than a maximally detailed micro description. Markov-blanket approaches search for statistical partitions separating internal and external states and have been used to discuss nested biological organization ([Kirchhoff et al., 2018](https://doi.org/10.1098/rsif.2017.0792)). Stochastic thermodynamics asks what dissipation can be inferred when only coarse observations are available; Udo Seifert's 2026 review surveys bounds obtained from coarse-grained trajectories ([Seifert, 2026](https://doi.org/10.1038/s42254-026-00954-5)).

These are not fringe neighbors.

They occupy most of the conceptual territory a careless version of this book might claim.

So why retain the word *constraint* at all?

Because it suggests an intervention that generic predictive state compression does not automatically privilege.

A candidate constraint is not merely a variable that predicts the future. It is a variable whose physical state changes the transition structure of other variables across the horizon of interest. It can filter disturbances, change transport, open or close pathways, alter the energetic price of responses, or change which reactions can run fast enough to matter.

And, in the cases most interesting for life, keeping that variable in its functional regime costs something.

That combination gives us a concrete causal experiment.

Suppose a structure costs the cell an amount of resource \(\Delta B\). Compare the intact cell with an ablated version. Then give the ablated version the extra \(\Delta B\) without restoring the structure. If the extra fuel alone repairs the recovery defect, the architecture was not special; the intact cell simply had more resources. If the architecture restores recovery while the equal resource supplement does not, the organization of the resource mattered.

That is a much cleaner claim than “structure creates optionality.”

It also scales surprisingly well.

An electrical grid with reserve generation can be compared with a grid given the same nominal energy supply but without the transmission path or black-start architecture needed to deploy it. A battery with intact separator chemistry can be compared with the same stored chemical energy after internal damage creates a shorting pathway. A biological system can contain substrate and fail because the couplings needed to use it have collapsed.

In each case, quantity and organization separate.

The energy is present.

The usable path is not.

This is where the book's title earns another meaning. A gradient is not a command to dissipate. It is an opportunity subject to architecture. Two systems can possess the same nominal free-energy source while one has access to a viable path and the other does not.

Availability is therefore not only about the source and sink.

It is also about the machinery between them.

Classical exergy already knows part of this lesson: energy quality and environment determine available work. Chemical kinetics knows another part: thermodynamically favorable reactions can remain inaccessible behind barriers. Control theory knows another: a target can be unreachable from a state under the available controls. Biology adds yet another complication: parts of the machinery that make a path accessible are themselves rebuilt by paths through the machinery.

Nothing in that sentence demands a new law.

It demands that we stop expecting one scalar to do the work of several sciences.

There is a deeper possibility here, but it should remain a possibility until data force it on us.

In equilibrium physics, good macroscopic variables often become good because enormous numbers of microscopic details average away. Living systems are different. They are historically constructed, heterogeneous, finite, noisy, and full of components maintained precisely because they prevent certain averages from becoming true. A membrane keeps inside and outside from mixing. An enzyme preserves kinetic selectivity. A genome preserves sequence differences. A repair system fights the statistical tendency toward damage accumulation.

The important macrovariables of life may therefore be unusual in one respect: some of them are not passive summaries of microscopic behavior.

They are expensive physical arrangements that help make their own macro-description stable.

A temperature does not build the thermometer that measures it.

A cell builds membranes that keep “inside” a meaningful category.

That does not make the membrane supernatural. It makes the coarse-graining partly endogenous to the dynamics.

Even this idea has ancestors in theories of constraint closure, autonomy, Markov blankets, and self-maintenance. The question is whether it can be made experimentally sharper.

Can we identify a small set of maintained variables whose loss predicts that the very distinction between viable internal dynamics and uncontrolled equilibration is about to disappear?

Can those variables predict recovery before the outcome is known?

Can their maintenance costs be measured?

Can the same variables survive a change in disturbance?

Can direct intervention move the boundary where the model says it should?

If yes, we have discovered something modest but real: not a new force, but a new useful level of description.

If no, we should return to the domain variables that already work.

This is less cinematic than telling the reader that the universe wants to dissipate.

It is more interesting to me now.

The frontier may not be a hidden force waiting beyond thermodynamics.

It may be the problem of finding the variables in which thermodynamics, kinetics, control, and history finally become the same prediction.