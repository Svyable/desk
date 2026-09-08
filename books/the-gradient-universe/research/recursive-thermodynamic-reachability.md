# Recursive Thermodynamic Reachability

## Status

This note proposes a research program, not an established law of nature.

The central conjecture is that the most informative thermodynamic distinction among some persistent adaptive systems may not be their instantaneous entropy-production rate, power use, or energy throughput. It may instead be how measured work invested in a specific physical constraint changes the system's later *viable reachable states* under finite physical budgets and a declared disturbance process.

The proposed object is **recursive thermodynamic reachability**: the capacity of a driven system to use present free energy to construct, maintain, remove, or reconfigure constraints that alter its own future physically reachable states.

The proposed measurable effect is **reachability leverage**: a causal change in future viable reachability attributable to a specified constraint after the work and material cost of that constraint are included.

This is intended as a synthesis and extension of existing literatures, not a claim that reachability, viability, control, constraints, energetic resilience, architecture co-design, or exergy are new concepts. Relevant prior work includes control-theoretic reachability, viability theory, minimum-energy control, energetic resilience, control/architecture co-design, stochastic thermodynamics, thermodynamic inference, constraint closure, biological regulation, active matter, semantic information, non-equilibrium capacity, and recent counterfactual-geometric theories of biological function.

The novelty claim, if one survives a full literature review, is therefore very narrow: **in a driven chemical or living system, predict before experiment the thermodynamic cost of a self-produced constraint and the robust viable-reachability gain causally attributable to that constraint, then show that the cost/gain relation predicts when the constraint is retained or selected under environmental variability better than existing power, growth, resilience, control-energy, or co-design models do.**

## The problem this is trying to solve

The second law tells us that irreversible processes produce entropy. It does not tell us why one driven system burns through a resource immediately while another stores it, why one reaction network builds a membrane that slows equilibration, why an organism spends energy on repair rather than growth, why a spore can remain nearly inactive yet retain the capacity to restart, or why a brain expends energy modeling futures that may never happen.

Maximum-entropy-production and maximum-power proposals try to fill part of that gap with an extremum principle. They are attractive because they reduce dynamics to a scalar objective. They are also too strong as universal explanations. Batteries are valuable because they do not short themselves. Insulation is useful because it reduces heat flow. Dormancy can improve survival by suppressing metabolism. Repair spends energy now to prevent future failure. Redundancy often lowers efficiency. A living system that maximized instantaneous throughput could destroy the gradients, structures, or reserves needed to survive the next hour.

A different question is therefore worth asking:

**What can the system still do next?**

That is a reachability question and is not new by itself.

A second question is more specific:

**What future viable transitions did this particular self-produced constraint buy, and what did the system physically pay to buy them?**

That is the proposed reachability-leverage question.

## Minimal formal statement

Let a system have state \(x(t)\), environmental state \(e(t)\), and admissible controls or internally selectable actions \(u(t)\). Its dynamics can be written abstractly as

\[
\dot{x}=f(x,e,u;c),
\]

where \(c\) denotes constraints that shape the dynamics: membranes, catalysts, channel states, stored chemical species, network architecture, geometry, material boundaries, regulatory rules, or other physically instantiated structures.

Not every system has a meaningful internal control variable. For a passive physical system, \(u\) may simply represent externally imposed forcing or an experimental intervention. For an organism, \(u\) can represent physiological or behavioral actions. The mathematics should not smuggle agency into systems that do not have it.

Let \(K\) be a predeclared set of viable or admissible states. In a cell, \(K\) might constrain ATP/ADP ratio, membrane potential, pH, redox state, osmotic balance, and damage below experimentally justified failure thresholds. In an engineered device, \(K\) might encode temperature, voltage, stress, and operational limits. The choice of \(K\) is part of the model and cannot be adjusted after seeing the result.

Let \(B\) be a physical resource budget over a time horizon \(\tau\). Depending on the experiment, \(B\) may be expressed as available exergy, fuel molecules, absorbed work, ATP turnover, electrical energy, or another explicitly measured resource. Entropy production \(\Sigma\) should generally be tracked separately rather than folded into one scalar objective.

Define a thermodynamically budgeted reachable set

\[
R_\tau(x_0,e_0;c,B)
\]

as the set of states that can be reached within horizon \(\tau\) from \((x_0,e_0)\) using admissible actions while respecting the budget and specified path constraints.

Define a viable reachable set by restricting to trajectories that remain within \(K\), or use a standard viability-kernel construction when indefinite viability is the question.

For uncertain environments, define a **robust** reachable or viable set over a predeclared disturbance family \(D\). This matters because a system that can reach many states only under one perfectly known future is less adaptable than a system that retains feasible responses across perturbations.

The central comparison should initially be set-valued, target-specific, or Pareto-based rather than a single state-space “volume.” Volume depends on coordinates, coarse-graining, and the measure chosen. Scalar summaries may become useful for particular experiments, but the physical interpretation has to be declared first.

## Reachability leverage

Suppose the system can use work \(W_c\) and material resources to construct or maintain a physical constraint \(c\). That constraint changes the dynamics from \(f_0\) to \(f_c\), changes the admissible controls, alters transport coefficients, changes barriers, creates storage, or changes which couplings are physically possible.

The constraint has **positive reachability leverage** over horizon \(\tau\) and disturbance model \(D\) if, after accounting for \(W_c\) and all other matched resource differences, it expands the system's robust viable reachable set, makes additional declared target states reachable, lowers the cost of reaching them, or preserves viability under disturbances the comparison architecture cannot survive.

The simplest set-valued signature is

\[
R^{(c)}_{\tau,\mathrm{viable}} \supset R^{(0)}_{\tau,\mathrm{viable}},
\]

with strict inclusion for at least one physically relevant predeclared perturbation or target state.

This is deliberately not the claim that every constraint is useful. A wall can trap a system. A mutation can reduce metabolic options. A regulation layer can cost more than it saves. A control architecture can make an engineered network brittle. Reachability leverage can be zero or negative.

The hypothesis becomes scientifically interesting only if the sign and magnitude can be predicted from mechanism before outcomes are observed.

## Recursive reachability

A dam gate changes when gravitational potential is released. A membrane changes which ions can cross. An ATP-driven pump uses one chemical gradient to build another. DNA repair consumes chemical work to preserve a structure that will affect future replication. A bacterium changes gene expression, which changes which substrates it can metabolize later. An animal stores fat, builds a shelter, or learns a route. A technological system charges a battery, builds a transmission line, or writes software that changes its future control options.

These examples share more than dissipation, but the engineered examples are not novel control theory. Control/architecture co-design, minimum-energy control, and energetic-resilience theory already formalize neighboring trade-offs.

The candidate biological process is more specific:

Present work changes future admissible transitions through **constraints produced or maintained by the driven system itself**.

Call the process **recursive** when a system's current activity changes the constraints or control architecture that determines its later reachable set, and when the changed reachable set includes pathways that can maintain, reproduce, or further modify the relevant constraints.

This definition is intentionally broader than life. A passive geological process can alter later flow paths through erosion. An engineered adaptive controller can reconfigure itself. The claim is not that recursive reachability equals life or consciousness.

The more specific biological claim is that heredity and natural selection can accumulate architectures with positive reachability leverage when the expanded future response set improves reproductive success in the environments actually encountered.

The more specific agency claim is that feedback-conditioned action can select among present expenditures partly according to their effect on future reachable states.

That gives a possible physical distinction between merely consuming a gradient and managing one without inventing a new force.

## Why this may explain persistence better than maximum dissipation

A maximum-dissipation story ranks pathways by a present rate.

A reachability story asks how a present pathway changes later possibilities.

Those rankings can disagree.

Shorting a battery can produce high instantaneous dissipation and destroy nearly all future electrical options. Running a load through a controlled circuit produces less immediate heat in the battery but supports useful state transitions elsewhere. A hibernating animal suppresses present metabolic power to preserve reserves until an environment becomes favorable. A seed maintains barriers that prevent metabolism and water uptake until cues permit germination. A cell spends ATP pumping ions “uphill,” deliberately creating electrochemical disequilibrium that later powers transport, signaling, or ATP synthesis. Immune memory and nervous-system memory consume resources to alter future response latency and target selection.

All of these are ordinary physics.

They become one candidate explanatory class when described as work invested in future viable control.

This also explains why total entropy production may be the wrong order parameter for adaptive persistence. Two systems can produce similar entropy while differing radically in which future states remain accessible. A damaged cell and a viable dormant cell may both show low metabolic throughput, but only one retains a reactivation repertoire. A power grid can possess ample fuel while losing the control and network state needed to deliver power. Raw energy inventory and current dissipation can both remain misleading when the reachable set has collapsed.

## Relation to existing work

This proposal must not be marketed by pretending its components are unprecedented.

**Reachability and viability.** Control theory has long studied reachable sets: states accessible from an initial state under admissible controls. Viability theory studies states from which a system can remain within constraints. Lakatos and Stumpf applied reachable-set computation to stochastic biochemical systems: https://doi.org/10.1098/rsos.160790 . Viability-kernel methods are established in engineering, ecology, and sustainability.

**Minimum-energy reachability and energetic resilience.** Control theory already studies the minimum control effort required to reach target states. Padmanabhan and Ornik's 2026 work explicitly quantifies extra energy needed to retain reachability after partial loss of control authority: https://doi.org/10.1016/j.automatica.2026.112898 . The book must not claim that energy-versus-reachability accounting is new.

**Control/architecture co-design.** Engineers already optimize sensors, actuators, communication links, plant parameters, controllers, architecture cost, and performance together. The candidate novelty cannot be “spend more architecture cost to gain control.”

**Constraint closure.** Montévil and Mossio formalized biological organization as closure of constraints, emphasizing systems whose processes maintain the constraints that enable those processes: https://doi.org/10.1016/j.jtbi.2015.02.029 . Lehman and Kauffman later connected constraint closure to origin-of-life transitions: https://doi.org/10.3390/e23010105 . Recursive reachability should be presented as building on this idea, not replacing it.

**Viability and information.** Kolchinsky and Wolpert connected semantic information to autonomous agency and a chosen viability function in nonequilibrium statistical physics: https://doi.org/10.1098/rsfs.2018.0041 . This is especially close prior art and must be engaged directly.

**Counterfactual geometry.** A 2026 paper, “Life as Counterfactual Geometry,” explicitly studies biological function using geometry and stability of distributions over unrealized but accessible future trajectories: https://doi.org/10.3390/e28030255 . The book cannot claim future-trajectory geometry itself as novel.

**Stochastic thermodynamics.** Modern stochastic thermodynamics provides exact and approximate relations for work, entropy production, fluctuations, and inference in specified models. Falasco and Esposito's 2025 review provides a current foundation: https://doi.org/10.1103/RevModPhys.97.015002 . Thermodynamic uncertainty relations show that precision can carry thermodynamic costs rather than emerging for free.

**Active matter.** Bebon, Robinson, and Speck developed a multiscale account of dissipation in active matter in 2025: https://doi.org/10.1103/PhysRevX.15.021050 . This is a natural experimental/theoretical domain for testing whether dissipation rate and recoverable macrostate repertoire can be separated.

**Cost versus control in metabolism.** Yamagishi and Hatakeyama reported a thermodynamic cost–controllability trade-off in metabolic currency coupling in PRX Life on 3 September 2026: https://doi.org/10.1103/4bqh-zhry . That result means this book cannot claim discovery of the general idea that biological controllability costs dissipation. Recursive reachability must make a distinct prediction about future viable state sets, perturbation repertoires, or endogenous constraint investment.

**Non-equilibrium capacity.** Hyun Youk proposed “non-equilibrium capacity” as the retained ability of living systems to generate, sustain, or restart life-associated dynamics, including from dormant states: https://doi.org/10.1016/j.newton.2025.100358 . Recursive reachability should ask whether that capacity can be operationalized as a thermodynamically constrained reachable/viable set rather than simply renamed.

**Emergent organization.** A 2024 Physics Reports review emphasizes that physics still lacks basic general principles of spontaneous self-organization and the difficulty of defining structure: https://doi.org/10.1016/j.physrep.2024.04.001 . Any claimed new principle has to solve part of that problem rather than add a slogan.

## Candidate predictions

### 1. Variable environments should favor costly endogenous control architectures only when they add enough viable reachability

Consider two otherwise comparable microbial systems exposed to the same mean resource flux. One architecture has low regulatory cost but a narrow response repertoire. The other spends more energy maintaining regulatory separation, storage, or sensing and can switch among more metabolic regimes.

Under a constant environment, the cheaper architecture may win.

Under a fluctuating environment with the same time-averaged resource supply, the more expensive architecture should gain an advantage only when its added controls expand the robust viable reachable set enough to compensate for their energetic and material cost.

This is more specific than “adaptability is useful.” It predicts a phase boundary in environmental variability versus endogenous control cost.

The recent PRX Life result on metabolic-currency controllability provides a concrete starting system for deriving such a test.

### 2. Instantaneous dissipation should be a worse predictor of persistence than thermodynamically budgeted viable reachability in some fluctuating environments

Measure entropy production or a suitable dissipation proxy, plus a preregistered reachability metric, across competing regulatory architectures.

If maximum-dissipation logic is sufficient, higher dissipation should predict persistence within the relevant regime.

If recursive reachability captures something additional, systems with lower current dissipation but larger robust viable reachable sets should outperform high-dissipation systems under at least some perturbation distributions.

Dormancy is an obvious qualitative example. The research task is to make the comparison quantitative rather than anecdotal.

### 3. Failure can begin as reachability collapse before energy collapse

A system can have substantial stored energy yet lose the couplings required to use it.

In cells, damage to membrane integrity, redox control, or regulatory networks may shrink the set of recoverable physiological states before bulk nutrient availability disappears. In engineered systems, loss of control authority or network connectivity can do the same, but that engineered case is already close to existing energetic-resilience theory.

The biological prediction is that a properly chosen robust reachable-set metric should deteriorate before a simple energy-inventory or average-throughput metric in at least some classes of impending cellular failure.

If reachability never provides earlier or better warning, the framework is less useful than claimed.

### 4. Self-produced constraint construction should be favored only when it produces measurable positive reachability leverage

In a synthetic dissipative chemical system, create competing architectures that differ in whether part of the fuel is spent building a persistent barrier, catalyst localization, compartment, memory state, or storage species.

Under matched total fuel, test whether the constraint-bearing architecture accesses or survives a wider predeclared set of future forcing protocols.

The key measurement is not whether it is “more organized.” It is whether the work invested in the constraint changes future accessible states in the predicted direction after the constraint cost is included.

### 5. Physical memory should be detectable as a change in future reachability or control cost, not merely lower prediction error

For a physical adaptive controller or organism, expose the system to a repeated environment and measure how history changes the set of future perturbations it can successfully handle under a matched budget.

A memory has physical value in this framework when it changes later reachable viable states or the cost of reaching them.

If learning changes internal representations but not any task-relevant reachable set or energetic frontier, recursive reachability is not explaining the functional gain.

## A possible distinction among dissipation, life, and agency

The framework may support a hierarchy, but it should not be treated as a new taxonomy until tested.

A simple dissipative structure channels an imposed gradient.

A constraint-forming system can alter pathways of later dissipation.

A self-maintaining system can use work to rebuild some of the constraints that sustain its own dynamics.

A recursively reachable system can use current work to change its later viable control possibilities.

A feedback agent can condition that investment on sensed state.

A model-based agent can condition it on represented counterfactual futures.

Each step adds mechanism. None requires a new fundamental force.

This may provide a cleaner bridge from physics to agency than saying that minds are merely better “gradient dissipators.” A mind's distinctive physical role may include the capacity to estimate and modify future reachable sets before committing scarce resources, but this sits next to existing work on planning, active inference, model-predictive control, and counterfactual biological function and must not be marketed as wholly unprecedented.

## What would falsify or demote the conjecture

The conjecture should be abandoned as a physical principle if it cannot outperform existing descriptions.

It is weakened if robust viable reachability cannot be operationalized without arbitrary, post hoc choices of state variables and viability criteria.

It is weakened if thermodynamically budgeted reachability adds no predictive power beyond standard control-theory, viability, energetic-resilience, or co-design metrics.

It is weakened if the proposed reachability advantage disappears once the energy and material cost of sensing, storage, repair, architecture, and control is fully accounted for.

It is weakened if instantaneous power, entropy production, ordinary fitness models, energy inventory, or standard resilience metrics predict experimental outcomes equally well with fewer assumptions.

It is falsified in any stated domain if a preregistered reachability comparison predicts architecture A should persist better than B under a specified disturbance distribution and B reliably wins for reasons already included in the model.

A failed test cannot be rescued by redefining the viability set after the fact.

A failed test cannot be rescued by inventing hidden gradients without independent measurements.

A failed test cannot be rescued by changing the time horizon until the ranking reverses unless the horizon dependence was part of the original prediction.

## Mathematical work still required

Before this can be presented as more than a book conjecture, several technical problems need solving.

First, the state representation must be coarse-grained without making reachability an artifact of coordinates.

Second, resource budgets need a consistent physical treatment. Exergy is attractive for macroscopic systems, while chemical work, ATP turnover, or stochastic-thermodynamic quantities may be more natural at cellular scales.

Third, robust reachability under stochastic dynamics needs a probability threshold or risk measure rather than deterministic set membership.

Fourth, reachability leverage needs a comparison that properly subtracts the work and material resources required to construct and maintain a constraint.

Fifth, systems that alter their own state variables or effective phase space create a harder problem than ordinary fixed-state-space control theory.

Sixth, the relation between a larger viable reachable set and Darwinian fitness is contingent, not automatic. The environment determines which options matter.

Seventh, the formulation needs to identify a regime in which it predicts an experimentally observed threshold that existing viability, robust-control, energetic-resilience, metabolic-control, or architecture-co-design models do not already predict as well.

These are not details to hide. They are the research program.

## The publishable claim, if it survives

The strongest defensible version is not:

> Nature maximizes future options.

That would simply create another universal optimization slogan.

It is:

> In a driven chemical or living system, work can be invested endogenously in physical constraints that change the system's later viable reachable set. The thermodynamic/material cost and the causal reachability gain of those constraints can be measured separately. Under a specified fluctuating environment and selection process, architectures with positive reachability leverage can be favored even when they reduce instantaneous power or entropy production.

That statement connects thermodynamics, control, viability, constraint closure, and adaptation while remaining falsifiable.

If a mathematical formulation and experiment can demonstrate a nontrivial threshold prediction that competing power, fitness, viability, energetic-resilience, and standard control models do not supply, this could become a genuine scientific paper rather than a book metaphor.
