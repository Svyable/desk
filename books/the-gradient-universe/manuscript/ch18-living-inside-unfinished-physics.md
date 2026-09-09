# Living Inside an Unfinished Physics

The physics is unfinished in a more interesting way than this book first claimed.

The second law does not become vague when a system is far from equilibrium. Energy is still conserved. Entropy balances can still be written. Chemical potentials still matter. Heat engines still face thermodynamic limits. Open systems do not receive permission to violate physics because their dynamics are complicated.

What becomes difficult is prediction.

Given a strongly driven fluid, which flow state appears? Given a nonlinear reaction network, which steady state, oscillation, or pattern survives? Given a cell with thousands of interacting reactions, what happens after one pathway is perturbed? Given a climate forcing, how do clouds, ocean circulation, ice, vegetation, and atmospheric dynamics respond together? Given heritable variation under a changing environment, which traits spread?

The second law narrows the space of answers.

It rarely selects one by itself.

That is the scientific opening, not a defect.

Near equilibrium, irreversible thermodynamics supplies general relations under well-defined assumptions. Farther away, nonlinear dynamics, bifurcation theory, stochastic thermodynamics, kinetic theory, active-matter physics, reaction-network theory, fluid mechanics, control theory, and information theory provide increasingly powerful but increasingly system-specific tools. A 2024 *Physics Reports* review, [“On principles of emergent organization”](https://doi.org/10.1016/j.physrep.2024.04.001), makes the frontier unusually clear: physics has accumulated formidable machinery for describing self-organization while still lacking basic general principles that predict organization across all driven systems.

That is a better description than saying that nonequilibrium thermodynamics is unfinished.

The field is not waiting for one missing equation.

It is trying to discover which descriptions remain useful when the microscopic equations are too numerous, nonlinear, history-dependent, or poorly observed to answer the question we actually care about.

The original version of this book reached for the most obvious unifying answer. Perhaps productive structures are preferred because they dissipate gradients faster. Perhaps stars, convection, metabolism, ecosystems, minds, and civilizations are manifestations of one maximum principle.

That story does not survive scrutiny as a universal law.

Maximum entropy production remains useful in some models and disputed as a general principle. Maximum power has important historical and ecological formulations but does not replace Darwinian fitness. Constructal approaches capture recurring flow architectures without proving one mechanism for rivers, lungs, lightning, and traffic. Dissipative-adaptation work shows nontrivial statistical relations in driven matter but does not make biological evolution a corollary of heat production.

Modern nonequilibrium physics has, in many places, moved in the opposite direction: away from universal slogans and toward exact bounds, fluctuation relations, response relations, inference methods, and regime-specific theorems.

Falasco and Esposito's 2025 review of [macroscopic stochastic thermodynamics](https://doi.org/10.1103/RevModPhys.97.015002) is a good example. Bebon, Robinson, and Speck's 2025 treatment of [dissipation across scales in active matter](https://doi.org/10.1103/PhysRevX.15.021050) is another. These works do not explain every organized structure. They do something better: they specify quantities and assumptions tightly enough that the theory can fail.

That standard changed this book.

The strongest unifying statement left from the first draft is simple:

**Differences make work possible. Structures change the pathways through which those differences can change.**

A temperature difference can drive heat flow, but insulation slows it and convection can reorganize it. A chemical-potential difference can drive reaction, but an activation barrier may preserve disequilibrium for years and a catalyst can change the timescale by orders of magnitude. A membrane prevents ions from equilibrating freely. A pump spends work to rebuild an electrochemical gradient. A battery separator suppresses direct reaction so charge can be routed elsewhere. A reservoir gate delays gravitational discharge until a chosen time.

The gradient is not an instruction.

It is an opportunity constrained by mechanism.

For a while, that observation seemed to point toward a new object I called recursive thermodynamic reachability. The thought was that a system can spend work now to alter what will be physically possible for it later. A cell maintains a membrane whose selectivity changes later transport. A microbe expresses an enzyme that changes which substrates it can use. An animal stores fuel. An engineer charges a battery. A nervous system learns a route before the next journey.

The phrase was useful because it forced a better question than maximum dissipation.

It was not new mathematics.

Suppose a system has ordinary process variables \(x\) and architecture variables \(c\). If both change in time,

\[
\dot{x}=f(x,c,e,u),
\]

\[
\dot{c}=g(x,c,e,u),
\]

then define one larger state

\[
z=(x,c).
\]

The dynamics become

\[
\dot{z}=F(z,e,u).
\]

That is an augmented-state dynamical system. Standard reachability, viability, stochastic control, and cost functionals can in principle operate on it. Nothing about allowing the system to change its own architecture creates a new branch of mathematics by itself.

That reduction matters because it removes a seductive source of novelty by vocabulary.

Control theory has studied reachable sets for decades. Viability theory asks from which states a system can remain inside specified constraints. Lakatos and Stumpf applied reachable-set computation to stochastic biochemical systems: https://doi.org/10.1098/rsos.160790 . Minimum-energy and energy-feasible reachability are existing control problems. Ashby's cybernetics already made response variety central to regulation. Empowerment measures how strongly an agent's actions can influence its future sensory states. Montévil and Mossio formalized biological organization as [closure of constraints](https://doi.org/10.1016/j.jtbi.2015.02.029). Kolchinsky and Wolpert tied information to a declared viability function in [nonequilibrium statistical physics](https://doi.org/10.1098/rsfs.2018.0041).

Recent work closes the boundary further.

Hyun Youk has proposed **non-equilibrium capacity**, the latent ability of a living system to generate, sustain, or restart life-associated dynamics even when present activity becomes extremely low: https://doi.org/10.1016/j.newton.2025.100358 . A 2026 paper, [“Life as Counterfactual Geometry”](https://doi.org/10.3390/e28030255), explicitly studies biological function using distributions over unrealized but accessible future trajectories. On September 3, 2026, Jumpei Yamagishi and Tetsuhiro Hatakeyama published a [thermodynamic cost–controllability trade-off in metabolic currency coupling](https://doi.org/10.1103/4bqh-zhry), showing in a biologically meaningful model that greater independent metabolic control can carry a higher thermodynamic cost.

Even the idea that a useful macroscopic description can outperform a microscopic one is old territory. Statistical mechanics is built on useful coarse-grainings. The Mori–Zwanzig formalism derives reduced dynamics with memory and noise when unresolved variables are eliminated. Computational mechanics asks for minimal predictive state representations. Causal-emergence work asks when macrovariables support stronger or cleaner causal descriptions. Markov-blanket approaches study statistical boundaries in biological and adaptive systems. Contemporary stochastic thermodynamics asks what entropy production and hidden dynamics can be inferred after coarse-graining.

So where is the book left after all of that subtraction?

With a smaller question that I now think is better.

**Which variables make recovery predictable?**

That is the variable problem.

Imagine that I give you the positions, velocities, molecular identities, chemical states, and interactions of every atom in a bacterium. In one sense I have given you an extraordinarily complete description. Now suppose I ask a practical question: after forty-eight hours of starvation, will this cell resume growth when nutrients return?

The microscopic inventory does not automatically tell you which coordinates matter most for that prediction.

Perhaps ATP matters. Perhaps membrane potential matters. Perhaps redox state matters. Perhaps the material state of a protein aggregate matters. Perhaps a particular biosynthetic enzyme has fallen below a threshold. Perhaps the important variable is not one molecule at all but a relation among several processes: membrane integrity, repair capacity, ion homeostasis, and access to a usable carbon source.

A complete state and a useful state description are not the same thing.

That is familiar throughout science. Meteorology does not forecast tomorrow's weather by tracking every gas molecule. Fluid dynamics uses pressure, velocity, temperature, vorticity, and density fields. An electrical engineer does not need the quantum state of every electron in a grid to predict frequency stability. Genetics did not become useless when molecular biology discovered more detail; sometimes a gene remains exactly the right level of description for the question.

The hard part is finding variables that compress what matters without erasing the mechanism that matters.

Living systems add a peculiar twist. Some candidate macroscopic variables may remain useful partly because the organism spends work keeping the physical arrangement behind the variable intact.

“Inside” and “outside” are meaningful cellular categories because a membrane is continually maintained. Membrane potential is a useful variable because selective permeability and pumps keep charge separation from vanishing immediately. A regulatory state can persist because proteins are synthesized, modified, localized, protected, and degraded on controlled timescales. A chromatin state can influence future expression because molecular machinery keeps reconstructing parts of that state through cell activity. A reserve pool remains a reserve because reactions that would consume it are gated.

The organism does not merely occupy a coarse-grained state chosen by an observer.

It may spend resources maintaining the physical conditions that make the coarse-graining predictive.

That statement is not yet a theorem. It is a candidate empirical pattern.

The scientific task is therefore no longer to announce a new universal measure of optionality or a new law of reachability. It is to identify a small set of physically interpretable, work-maintained variables and ask whether they earn their place as causal coordinates for a specific prediction problem.

A variable should have to work for the title of constraint.

First, intervention on it should change the predicted recovery boundary. If removing a membrane regulator, changing aggregate material state, or disabling a repair pathway leaves recovery unchanged, the proposed constraint has failed that test.

Second, its physical cost should be measured independently. A regulatory protein, chaperone, pump, reserve pool, or redundant pathway cannot be treated as free. Construction, maintenance, switching, and opportunity costs belong in the bookkeeping.

Third, extra resource alone should not reproduce the effect. This is the matched-resource test. If an architecture costs a certain amount of ATP, substrate, protein allocation, or chemical work, give the comparison system the same additional resource without giving it the architecture. If the added resource restores the same recovery repertoire, then we mistook abundance for organization.

Fourth, the reduced description should predict held-out behavior. It should not merely summarize the data from which it was invented. Fit one disturbance regime and predict another. Fit early dormancy and predict later recovery. Fit one intervention and predict a second without changing what the variables mean.

Fifth, the model has to compete against what the field already knows. If ATP alone predicts the outcome just as well, use ATP. If a standard robust-control metric is enough, use it. If an established growth-lag model or pathway-specific biochemical model explains the result with fewer assumptions, do not rename it constraint thermodynamics.

This is a harsher publication standard than the book began with.

It should be.

The first promising empirical arena is dormancy because dormancy separates present activity from future capability so starkly.

A dormant cell can consume very little and remain recoverable. A dead cell can consume very little and not be recoverable. Current wattage does not tell us which is which.

Recent experiments make that distinction more concrete. In 2025, Celien Bollen and colleagues studied protein aggregates as *Escherichia coli* cells developed dormant phenotypes. The aggregates first behaved more like liquid condensates and progressively matured toward more solid structures. That physical maturation impeded aggregate dissolution and the return to growth. The study supports a model in which [aggregate structure, rather than cellular activity, marks the transition between a recoverable persister-like state and a poorly recoverable viable-but-nonculturable state](https://doi.org/10.1038/s41467-025-56387-8).

That is unusually close to the variable problem.

ATP still matters. Protein aggregation can sequester proteins involved in energy production and contribute to ATP depletion as dormancy develops. But the later loss of recoverability is not adequately described as one more turn of an energy gauge. The material arrangement of the proteome changes whether an accessible route back to growth remains.

A 2026 study by Raleb Taher and colleagues supplies a complementary example. Under nitrogen starvation, *E. coli* persister abundance rose sharply [without a corresponding decrease in ATP](https://doi.org/10.1038/s41467-026-75914-9). The discriminating mechanism involved pyrimidine biosynthesis: persister cells tended to have low PyrBI, and PyrBI overexpression reduced persistence.

The two studies do not reveal one hidden universal variable.

That is why they are useful.

One points toward the material state and reversibility of aggregates. The other points toward a pathway-specific regulatory bottleneck. A 2026 *Nature Communications* perspective on [metabolic rewiring in bacterial persistence](https://doi.org/10.1038/s41467-026-71427-7) emphasizes precisely this heterogeneity. Persisters are not one uniformly inactive physiological state.

So the test cannot be “does my preferred variable correlate with dormancy?”

The test has to be harder.

Before refeeding, measure a declared state vector: ATP or another energy proxy, membrane potential, redox state, aggregate material state, relevant disaggregation machinery, pathway-specific variables, and whatever physiological coordinates the mechanism independently requires. Define recovery before fitting: first division within a fixed horizon, sustained biomass growth, or another explicit criterion. Train a model on one condition. Predict a second.

Then intervene.

If changing the aggregate state moves recovery in the predicted direction, that is causal evidence. If matched extra substrate restores recovery without changing the aggregate state, the architecture-specific interpretation weakens. If targeted restoration of a pathway or structural state restores recovery while extra energy does not, then a useful physical coordinate may have been found.

The most important comparison is not “my model versus nothing.”

It is energy-only versus structure-only versus their joint model versus the strongest conventional mechanism already supported by the experiment.

A successful result would still not prove a universal law.

It would establish something smaller and real: in one biological recovery problem, present energetic state is not a sufficient low-dimensional description, while a physically interpretable structural or regulatory state carries causal, transferable predictive information about which future recovery trajectories remain accessible.

That would justify asking the same question in a second system.

Only then should we begin talking about generality.

Origin-of-life research offers a more ambitious version of the same problem. A prebiotic system does not become interesting merely because it dissipates free energy. Flames do that. A driven chemical assembly becomes more life-like when its processes help maintain boundaries, catalysts, stores, or other constraints that affect what the assembly can do next.

Constraint closure already captures part of that logic. Synthetic-cell research gives us a way to test it progressively rather than argue about definitions. Build a compartment. Supply a reaction network. Introduce an energy-coupling mechanism. Perturb the membrane, gradient, catalyst, or information polymer. Ask whether the system's own ongoing dynamics reconstruct the damaged constraint before the whole network falls out of the operating regime.

The relevant question is not whether the synthetic cell “wants” to live.

It is whether a small physical description of its maintained constraints predicts loss and recovery across perturbations better than raw fuel inventory does.

The same discipline can be carried into cognition, although the evidence becomes harder to isolate. A nervous system spends energy maintaining ion gradients, synapses, cellular structure, and memory-related molecular changes. Planning can alter which bodily action is selected before an expensive or irreversible action occurs. But active inference, reinforcement learning, model-predictive control, empowerment, and predictive-processing theories already occupy much of that territory.

The book gains nothing by declaring cognition a new thermodynamic law.

A useful thermodynamic contribution would be narrower: identify a physical state variable or resource constraint that changes which actions remain feasible, predict the consequence, intervene, and outperform ordinary neuroscience or control descriptions. Otherwise the native science should keep the explanatory credit.

Technology makes the logic easier to see because objectives are explicit. A power grid can have ample fuel and still lose recoverability if transmission paths, synchronization, black-start capability, communications, or control authority are lost. A battery can contain chemical energy while a failed separator renders it useless. A machine can have spare parts in a warehouse that cannot reach the failed component before the deadline.

Inventory is not capability.

Capability depends on accessible pathways under time and structural constraints.

Engineering already knows this in many forms: reliability theory, robust control, contingency analysis, logistics, resilience, and network science. The point is not to rename those fields. The point is that the same distinction between stock and accessible transition appears in living systems where the relevant variables are harder to identify.

Social systems require still more restraint. A civilization is physically embodied. Farms, power plants, bodies, vehicles, roads, data centers, water systems, and supply chains require energy and materials. But thermodynamics does not contain legitimacy, law, trust, political strategy, culture, or justice.

A country can possess energy resources and fail politically. A poor society can build durable institutions. A wealthy one can make historically contingent mistakes. A printing press consumes exergy; it does not thermodynamically imply the Reformation.

The world contains nested explanatory levels.

A lower-level constraint can be necessary without being sufficient.

A successful unifying framework should clarify where its authority stops.

The same humility belongs in cosmology. Stars will not shine forever. The universe's accessible forms of free energy change over time. Black holes, expansion, background radiation, possible particle decay, and vacuum physics complicate the distant future. “Heat death” is useful shorthand for scenarios in which usable disequilibria become increasingly scarce, not a simple picture of every point reaching one room temperature. Adams and Laughlin's classic review of the [long-term fate of astrophysical objects](https://doi.org/10.1103/RevModPhys.69.337) is a better antidote to cartoon certainty than any one-sentence cosmic ending.

The long-term future does not assign meaning to the present.

Thermodynamics does not tell us that finitude is tragic, precious, liberating, or irrelevant.

Those are human interpretations.

The physical point is enough: organized activity occupies finite windows of accessible work.

Within those windows, differences make processes possible. Constraints shape which processes actually occur. Some constraints are passive consequences of geometry or material. Some are produced by prior history. Living systems add the remarkable fact that many of their important constraints are continually rebuilt by the chemistry they help organize.

That fact alone is not a new law.

It is a clue about where to measure.

This is where *The Gradient Universe* ends up after arguing with itself.

Not with entropy as the protagonist.

Not with a universal drive toward complexity.

Not with a new force.

Not even with a new mathematical object called reachability.

With a problem of representation:

**Which physically maintained variables let us predict what a driven system can still recover from?**

A good answer will have to survive dimensional analysis, causal intervention, independent cost accounting, matched-resource controls, held-out prediction, transfer, and comparison with the best existing model.

If a membrane variable passes that test, keep it. If aggregate material state passes, keep it. If ATP alone wins, stop there. If a pathway-specific enzyme explains the result, give the enzyme the credit. If no small variable set transfers across conditions, perhaps the system does not admit the kind of coarse-graining we hoped for.

The book should be allowed to lose every one of those contests.

That is the difference between a scientific question and a cosmology made from metaphor.

The first draft wanted the universe to tell one story.

The evidence kept refusing.

What remains is more useful. A gradient can supply work without dictating its use. A structure can redirect a flow without being selected by a universal maximum principle. A living cell can remain nearly inactive yet preserve the architecture needed to return. A system can possess energy while losing the pathways required to spend it. Microscopic laws can be complete while the right macroscopic variables remain unknown.

There may be no missing fourth law hiding behind those facts.

There may instead be a missing map between scales.

That map has to be earned one system at a time.

The next experiment is small enough to be embarrassing if it fails: predict recovery in dormant cells before they wake.

That is exactly why it is worth doing.