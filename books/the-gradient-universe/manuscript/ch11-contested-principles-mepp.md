# Contested Principles: MEPP and Cousins

The second law gives us an inequality, not a screenplay.

For an isolated macroscopic system, entropy does not spontaneously decline. For an open system, an entropy balance tracks what enters, what leaves, and what is produced internally. Those statements constrain possible histories. They do not usually tell us which of several possible non-equilibrium states will be realized, how fast a gradient will relax, whether a flow will remain laminar or become turbulent, which chemical oscillation will appear, or which biological strategy will evolve.

That gap is irresistible.

Physics is full of successful extremum principles. Equilibrium states can often be characterized by maximizing entropy or minimizing an appropriate free energy subject to constraints. Mechanics can be formulated through stationary action. Optics has variational formulations. If nature is this economical elsewhere, perhaps driven systems also choose a state by maximizing or minimizing one quantity.

Several proposals try to supply that missing rule.

The most famous is the maximum entropy production principle, usually abbreviated MEP or MEPP. In its broadest popular form, it says that a driven system will settle into the accessible state that produces entropy at the greatest rate, subject to its constraints. Variants have been used in climate science, fluid dynamics, chemical networks, ecology, biogeochemistry, and discussions of life.

The idea is provocative because it would turn the book’s descriptive language into a predictive principle. If a gradient can relax through several pathways, do not merely say that each pathway produces entropy. Calculate the entropy-production rate of each accessible state and predict the maximum.

If that rule were generally valid, much of the difficulty of far-from-equilibrium science would collapse into an optimization problem.

It is not generally established.

The cleanest way to understand the controversy is to begin with a principle that *is* rigorous but much narrower: Prigogine’s minimum entropy production theorem. In his Nobel lecture, Ilya Prigogine emphasized that for steady states sufficiently close to equilibrium, within a strictly linear regime and under restrictive boundary conditions, entropy production reaches a minimum relative to nearby admissible states. He was equally explicit about the limitations. The result requires linear flux-force relations and coefficients that can be treated as constants. The Nobel lecture is unusually useful because it prevents us from turning Prigogine into a mascot for any entropy-production slogan we prefer: [Prigogine’s 1977 Nobel lecture](https://www.nobelprize.org/uploads/2018/06/prigogine-lecture.pdf).

Near equilibrium, then, a *minimum* theorem exists under specified conditions.

Far from equilibrium, there is no comparably accepted universal maximum theorem.

That sentence should remain visible throughout the rest of the book.

A 2020 review by Ghosh, Dixit, Agozzino, and Dill opens with the point plainly: despite extensive work, there is no equally satisfactory general variational principle for nonequilibrium situations. Their subject is [maximum caliber](https://doi.org/10.1146/annurev-physchem-071119-040206), a powerful inference framework defined on trajectories rather than equilibrium states. Maximum caliber can infer distributions over possible dynamical paths when particular constraints are known. It does not mean that a physical system literally searches all trajectories and chooses the one with maximum entropy production.

This distinction between *inference principle* and *dynamical law* is easy to lose because both use maximization language.

Maximum entropy in statistical inference says, roughly, that given limited information, choose the probability distribution that adds the least unsupported structure while satisfying the known constraints. Maximum caliber extends the logic from static states to paths through time. It can derive useful stochastic models and flow distributions from dynamical constraints.

The maximized quantity belongs to our probabilistic description.

That is different from asserting that the material system has a universal physical drive to maximize its thermodynamic entropy-production rate.

Roderick Dewar’s work helped connect maximum-caliber reasoning with maximum-entropy-production ideas. Those derivations are intellectually important, but they depend on choices about path ensembles, constraints, and what macroscopic information is specified. They do not elevate every version of MEPP into a theorem comparable with the second law. A change in constraints can change the inferred optimum because the optimization problem itself has changed.

Constraints are not decoration around the principle. They are most of the problem.

Consider a fluid layer heated from below. At a sufficiently small temperature difference, conductive heat transfer can remain stable. Increase the forcing enough and convection may become unstable, producing organized rolls or other motions that transport heat differently. At still stronger forcing, time dependence and turbulence can appear. Entropy production can change across these regimes.

It is tempting to summarize the sequence as “the system discovers states that dissipate the temperature gradient faster.” That description may be useful after the fact. But the onset and form of convection are predicted through the equations of fluid dynamics, boundary conditions, material properties, dimensionless control parameters, and stability analysis. The entropy-production rate alone does not replace the Rayleigh number, geometry, viscosity, thermal diffusivity, or boundary conditions.

If a maximum principle predicts the same transition, the important scientific question is whether it predicts something the detailed dynamics did not already supply.

Climate applications make the issue sharper. George Paltridge famously found that simple climate models could reproduce aspects of observed heat transport by selecting states with high entropy production. Later researchers, including Axel Kleidon and collaborators, developed maximum-entropy-production approaches to Earth-system processes. Kleidon’s 2009 review of [nonequilibrium thermodynamics and maximum entropy production in the Earth system](https://doi.org/10.1007/s00114-009-0509-x) lays out the attraction: the climate system is driven far from equilibrium, contains multiple irreversible processes, and often operates near limits set by competing transport and conversion constraints.

Some MEP climate models are striking because they obtain reasonable large-scale states with fewer dynamical details than a full general circulation model.

That success is evidence worth taking seriously.

It is not proof of a universal law.

A closure rule can be useful because it captures the net consequence of omitted dynamics within a regime. Meteorology already uses many successful parameterizations that are not fundamental laws. If maximum entropy production gives a robust closure for a class of climate problems, that would be valuable even if it does not govern chemical oscillators, ecosystems, and economies.

The question should be domain by domain: under which constraints, state variables, and timescales does an extremum principle work?

This is much harder than asking whether MEPP is “true.”

The phrase *entropy production* itself can hide measurement problems. In a macroscopic continuum model, irreversible entropy production may include contributions from heat conduction, diffusion, viscous dissipation, chemical reactions, phase changes, and other processes. Which terms are included depends on the model boundary and coarse graining. At microscopic scales the challenge is greater because fluctuations matter and the observed variables may omit hidden degrees of freedom.

Modern stochastic thermodynamics has made major progress here without requiring a universal maximum principle. Udo Seifert’s review of [thermodynamic inference](https://doi.org/10.1146/annurev-conmatphys-031218-013554) describes fluctuation relations, trajectory-level definitions of work and entropy production, and bounds that can infer hidden dissipation from observable currents. Thermodynamic uncertainty relations, for example, connect the precision of some fluctuating currents with a minimum thermodynamic cost under specified conditions.

This is a different style of nonequilibrium science.

Instead of saying “nature maximizes entropy production,” it derives exact equalities, inequalities, and bounds for well-defined stochastic models.

That is usually the safer model for this book’s ambition: prefer a narrower relation with stated assumptions over a universal slogan with unclear scope.

Maximum power is a related but distinct proposal. Alfred Lotka argued in the 1920s that natural selection could favor organisms that increase their capture and use of available energy. Howard T. Odum and Richard Pinkerton later developed a maximum-power principle in which systems may trade conversion efficiency against rate to maximize useful power output. A recent historical review, [“Maximum power in evolution, ecology and economics”](https://doi.org/10.1098/rstb.2022.0262), traces that lineage and also acknowledges unresolved issues of mechanism and testing.

Maximum power should not be collapsed into maximum entropy production.

A device can dissipate enormous power while producing nothing useful. Short a battery and the current can become large while the stored chemical exergy is destroyed mostly as heat. A high-power biological strategy can consume resources quickly and lose to a slower competitor when resources are scarce. An organism can maximize reproductive success by storing energy, reducing activity, or investing in defense rather than maximizing instantaneous throughput.

Even in engineered systems, maximum efficiency and maximum power commonly occur at different operating points.

That tension is exactly why Odum’s formulation remains interesting. It asks whether competitive systems tend toward operating points that maximize *useful* power after accounting for constraints. But “useful” already imports a function. In biology, the relevant function must ultimately be connected to reproductive consequences if the principle is supposed to arise through natural selection. In an ecosystem, there is no automatic reason the power optimum of one species will maximize a system-wide quantity.

A 2024 BioScience essay asking [“Does nature select to maximize power?”](https://doi.org/10.1093/biosci/biae104) makes the contemporary dispute explicit: several influential traditions have proposed maximum-power ideas, while other evolutionary frameworks question whether empirical evidence or biophysical theory supports a universal MPP.

That is the appropriate status for this book: a historically important hypothesis with active descendants, not an established evolutionary law.

The constructal law, associated with Adrian Bejan, makes a different claim. Its proponents argue that finite-size flow systems that persist over time evolve configurations that facilitate access to the currents flowing through them. Branching networks, river basins, vascular systems, traffic patterns, and engineered flows have all been discussed in constructal terms. Bejan and Lorente’s review, [“The constructal law and the evolution of design in nature”](https://doi.org/10.1016/j.plrev.2011.05.010), presents the strongest version: a general physical law of evolving flow architecture.

The examples are visually compelling because branching really does recur.

But recurring geometry does not establish one universal mechanism.

Blood vessels are shaped by development, tissue demand, mechanics, gene regulation, and evolution. River channels arise through rainfall, erosion, sediment transport, tectonics, vegetation, and history. Lightning branches through electrical breakdown in a heterogeneous atmosphere. Tree roots grow through biological sensing and development. The fact that several systems form networks that facilitate transport may reveal common optimization problems without showing that one new law caused all of them.

Critics have challenged both the theoretical basis and the performance of particular constructal derivations. A published [critical review of constructal theory](https://doi.org/10.1016/j.enconman.2007.08.005) argued that increasing structural complexity does not universally increase the flow performance predicted by the theory. The debate has continued, and constructal methods remain productive in parts of engineering.

The proper lesson is not that constructal theory is wrong and therefore useless. It is that the word *law* in a proposed generalization should earn the same scrutiny we give any other strong scientific claim.

Jeremy England’s work on driven systems supplies another frequently overstated idea. His 2013 paper, [“Statistical physics of self-replication”](https://doi.org/10.1063/1.4818538), derived a lower bound on heat production for self-replication under a specified stochastic-thermodynamic model. Faster growth, replicator durability, and internal entropy enter the bound. The paper does not say that the second law makes life inevitable or that self-replicators maximize entropy production.

That is already interesting enough: replication has unavoidable thermodynamic costs that can be related quantitatively to properties of the replicator.

England later discussed [“dissipative adaptation in driven self-assembly”](https://doi.org/10.1038/nnano.2015.250), asking whether driven many-body systems can develop structures whose response becomes tuned to the external forcing. The proposal concerns relationships among work absorption, irreversibility, kinetic accessibility, and the probability of transitions in driven systems.

Popular retellings often turn that into “matter organizes itself to dissipate energy better.”

That slogan erases the conditions.

A driven system can become trapped in structures that are kinetically accessible. Some structures may absorb work strongly from a particular drive. Others may be stable because transitions out of them are rare. The relevant probabilities depend on the forcing protocol, microscopic dynamics, energy landscape, noise, and history. The theory does not supply a general replacement for biological natural selection.

This is especially important because *selection* has different meanings in physics and biology. A physical ensemble can become enriched for configurations through transition probabilities. Darwinian selection requires heritable variation and differential reproductive success. The mathematics can sometimes rhyme; the mechanisms are not interchangeable.

The same caution should apply to phrases like “the most probable trajectory.” Probability is always probability under a model, with a specified ensemble and specified conditioning information. Change the allowed paths or constraints and the result can change. Real history happens once. A statistical ensemble is a tool for describing uncertainty and repetition.

This chapter therefore needs a hierarchy, not a verdict.

At the strongest level are the first and second laws and conservation constraints. They are extraordinarily well tested and apply across the domains discussed in this book when the system boundary is defined correctly.

Next come established regime-specific results: Onsager reciprocity near equilibrium under appropriate microscopic conditions; Prigogine’s minimum entropy-production theorem under stricter linear assumptions; fluctuation theorems and stochastic-thermodynamic relations for specified classes of small driven systems; stability criteria for particular fluids, reaction networks, and dynamical systems.

Then come proposed broad extremum or organizational principles: maximum entropy production, maximum power, constructal law, dissipative adaptation, and related formulations. These can generate models, suggest measurements, and identify recurring patterns. Their evidence and domains of applicability differ. None should be smuggled upward into the first category merely because its name sounds like a law.

That hierarchy changes the book’s thesis in a productive way.

The gradient framework does not need MEPP.

It needs the much weaker and better-supported observation that sustained active systems depend on accessible free-energy differences and that specific mechanisms couple those differences to flows, work, storage, repair, or transformation. Some of those mechanisms can self-organize under driving. Their realized states are shaped by constraints, kinetics, geometry, feedback, fluctuations, history, and — for living populations — natural selection.

Whether an additional extremum principle predicts the chosen state is an empirical question.

This also means that a counterexample to MEPP does not refute thermodynamics. A low-power dormant state, a metastable chemical configuration, a laminar regime, a stored battery, or a forest accumulating biomass can all be physically ordinary. The question is whether the proposed maximum principle claimed to cover that regime under those constraints.

A principle that survives every counterexample by redefining the constraints after the fact has stopped predicting.

That is the hardest methodological test for all of these ideas.

Suppose a model predicts that a climate variable takes the value that maximizes entropy production. Before looking at the data, the researcher should specify the allowed state space, the boundary conditions, the entropy-production calculation, and the alternative models. If the observation disagrees, the principle should be allowed to fail. If every discrepancy can be explained by adding an unmeasured constraint until the optimum matches reality, the exercise becomes curve fitting with thermodynamic vocabulary.

The same standard should apply to ecosystems. If “maximum power” predicts which strategy dominates, specify the relevant power, scale, resource constraints, and competing predictions before seeing the winner. If “dissipative adaptation” predicts a driven assembly outcome, specify the forcing protocol and measurable signature that distinguishes it from ordinary kinetic trapping.

Science gets stronger when the escape hatches are closed in advance.

The most useful common thread among these contested principles may therefore be humbler than any one of them. Far-from-equilibrium systems are constraint-sensitive. A pathway that appears optimal under one bottleneck can become poor when another bottleneck binds. Increase substrate and an enzyme saturates. Increase temperature and a material changes phase. Increase flow and turbulence appears. Remove a predator and another resource becomes limiting. Add a transmission line and generation rather than transmission becomes scarce.

The identity of the binding constraint can change as the system moves.

This is why the language of optimization is so seductive and so dangerous. If we observe a stable system, we can usually invent something it appears to optimize. Survival. Power. Entropy production. Efficiency. Robustness. Information. Predictability. Cost. Flow access. Once enough objective functions are available, every outcome can look optimal under one of them.

The better discipline is to ask which objective, if any, was specified independently by the mechanism.

Engineers specify objectives. Natural selection supplies a statistical filter through reproductive success, though organisms still face trade-offs and changing environments. A physical dynamical system generally follows equations of motion and stochastic transitions, not an explicit objective function merely because we can rewrite some solutions variationally.

Mathematical equivalence does not automatically establish causal purpose.

That returns us to the title of the book. *The Gradient Universe* works best as a language for availability and coupling, not as a claim that the universe has one optimization target. Differences in temperature, composition, pressure, electrical potential, chemical potential, and gravitational potential create opportunities for change. Structures alter which paths are open. Some paths accelerate relaxation. Others preserve a difference for later. Some convert one gradient into another. Some systems become patterned under driving. Living systems add heredity and selection. Minds and technologies add prediction and deliberate control.

The second law constrains every layer.

No single maximum principle currently explains them all.

That is not a disappointment. It is where the science becomes interesting.

The next chapter asks what would make the *gradient framework itself* fail. That requires more care than listing examples of storms dying over cold water or cells dying without fuel. If the thesis is stated so broadly that every active system can be redescribed as using some gradient, it risks becoming true by definition. A scientific framework earns its place only when it rules something out, improves prediction, or organizes evidence better than its alternatives.

The task now is to close the escape hatches.