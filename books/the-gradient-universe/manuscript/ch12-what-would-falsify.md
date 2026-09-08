# How the Reachability Conjecture Could Fail

A theory that explains every outcome after the outcome occurs explains very little before it does.

The reachability conjecture is especially vulnerable to that failure because the language is seductive. A successful organism had options. A failed one lost options. A resilient grid retained options. A collapsed one did not. If that is all the claim means, it is autobiography written after the fact.

The conjecture earns scientific value only if “future reachable states” can be specified before the system reveals which future occurred.

That requirement is harder than it sounds.

A reachable set depends on a model. The modeller chooses the state variables, the controls, the disturbance family, the resource budget, the time horizon, and the viability criteria. Change those choices and the reachable set changes. This is not a defect of control theory. It is a fact about asking a conditional question. But it gives a careless theorist many ways to rescue a bad prediction.

So the first rule is brutal:

**No post hoc state space.**

If an experiment is supposed to test whether a membrane, storage pool, regulatory network, or learned policy increases viable reachability, the relevant state variables must be declared before the result. They should be physically measurable and connected to the claimed mechanism.

For a microbial experiment that might mean ATP/ADP ratio, membrane potential, intracellular pH, redox state, growth rate, substrate uptake, and damage markers. For an active-matter experiment it might mean collective velocity, cluster structure, polarization, or another measurable macrostate. For a grid it might mean frequency, voltage, reserve, line loading, and recoverability under contingencies.

The second rule follows:

**No post hoc viability boundary.**

The viability set cannot simply be “whatever states the winner happened to occupy.” A cell is not viable because it resembles the surviving strain. A machine is not safe because it did not fail this time.

Viability criteria need independent justification: experimentally established failure thresholds, engineering limits, loss of reproductive capacity, irreversible damage, or another criterion that exists before the comparison.

This is one place where the conjecture can fail immediately. If no non-arbitrary viability set can be defined for a domain, then viable reachability may be the wrong language there.

The third rule is physical bookkeeping.

A larger reachable set is not impressive if the architecture that creates it simply has more resources.

Suppose one bacterium has a costly regulatory system, large energy stores, and more transporters. It survives a wider perturbation range than a stripped-down strain. That does not by itself demonstrate reachability leverage. The comparison has to account for the work and material required to build, maintain, and operate the added architecture.

The correct question is not whether one system has more options.

It is whether the *constraint itself* changes future viable options enough to justify its physical cost under the tested conditions.

That means matching external resource budgets where possible, measuring internal costs, or building a model that makes the cost explicit.

If the supposed reachability advantage disappears once control costs are included, the conjecture has lost that test.

The fourth rule is to specify the time horizon before the result.

Reachability is always reachability over time.

A storage strategy can dominate over ten hours and lose over ten years. A redundant component can improve short-term robustness while imposing a maintenance burden that matters later. A seed that waits through a dry season gains options; a seed that never germinates has preserved itself into reproductive failure.

A flexible theory could always pick the horizon that makes its preferred architecture look good.

So \(\tau\) is part of the prediction.

If an architecture is claimed to have positive reachability leverage over a 48-hour fluctuating environment, that is the horizon on which it should be tested. A later analysis can ask what happens at one week or one month, but it cannot retroactively rescue the original claim.

The fifth rule concerns uncertainty.

Real adaptive systems do not face one known future. They face a distribution or family of disturbances.

A system that is excellent against one carefully chosen perturbation may be fragile everywhere else. If reachability is supposed to explain adaptability, the disturbance set must be broad enough to make adaptability nontrivial and narrow enough to remain experimentally meaningful.

Again, it must be declared first.

A microbial experiment might alternate carbon sources, oxygen levels, temperature, osmotic stress, or nutrient interruptions according to a known stochastic protocol. An engineered controller might face bounded load changes or component failures. A synthetic chemical assembly might experience varied drive amplitudes and interruption durations.

The robust reachable set is then tested against that declared family.

Do not add new disturbances only after the preferred architecture performs well on them.

The sixth rule is comparative explanation.

The reachability conjecture is not competing with ignorance.

It must beat existing theories.

In biology, ordinary fitness models may already predict which strain wins. Resource-allocation theory may explain the trade-off. Control theory may explain regulation without invoking thermodynamic reachability. In ecology, resilience metrics may already capture the effect. In engineering, robust control may predict the failure boundary directly.

If those models perform as well or better with fewer assumptions, then “recursive thermodynamic reachability” may be a useful synthesis for a book but not a scientific advance.

That is an acceptable outcome.

A serious research program must permit itself to become merely explanatory prose.

The seventh rule is to separate four claims that are easy to blur.

The first is established thermodynamics: sustained active work requires free-energy availability and produces entropy in the total accounting.

The second is control theory: constraints and controls affect which states are reachable.

The third is biological or engineered function: some reachable states count as viable or desirable.

The fourth is the new conjecture: work invested in endogenously maintained constraints can produce a future viable-reachability gain that predicts persistence or adaptation better than present dissipation does.

The first three can all be true while the fourth is false.

That separation prevents the conjecture from hiding behind the second law.

A failed reachability prediction is not rescued by saying, “but the system still uses energy.”

Of course it does.

The interesting claim is the additional one.

Now consider concrete failures.

The first experiment proposed in the previous chapter compares cheap narrow control with costly broad control under constant and fluctuating environments.

The prediction is that the costly architecture can become advantageous as environmental variability rises because its viable response set is broader.

This is not the same as predicting that regulatory complexity is always good.

The experiment can fail in several ways.

The cheap architecture may win under both constant and fluctuating conditions. That could mean the added control is simply wasteful in the tested regime.

The costly architecture may win everywhere. That could mean it has some ordinary performance advantage unrelated to variability.

The crossing point may exist but be fully explained by a conventional growth-versus-maintenance model with no need for reachable-set language.

Or the predicted crossing may occur at the wrong level of variability.

Any of those results can narrow or kill the claim.

The second proposed test compares instantaneous dissipation with robust viable reachability as predictors of persistence.

The hypothesis says there should be regimes in which lower present dissipation accompanies greater future viable capability.

Dormancy makes that plausible, but a qualitative example is not enough.

A strong experiment would measure dissipation or a defensible proxy, measure or calculate a preregistered reachable-set quantity, expose systems to a future perturbation distribution, and compare predictive performance.

If current dissipation predicts survival just as well, reachability has added nothing.

If stored energy alone predicts survival just as well, reachability has added nothing.

If a standard resilience metric predicts survival just as well, the burden rises further.

The third test concerns failure-before-energy-exhaustion.

The conjecture predicts that some systems lose accessible futures before they lose raw energetic resources.

This can be tested in cells, machines, networks, or other controlled systems.

Take a cell exposed to accumulating damage. Track substrate availability, total cellular energy measures, membrane potential, redox control, regulatory response, and the range of perturbations from which the cell can recover. Does recoverability collapse while substantial energetic resources remain?

Take an engineered network. Track stored energy or generation capacity while progressively removing control authority or connectivity. Does the set of recoverable operating states shrink before the energy stock does?

If no such separation occurs in a domain where the theory predicted it, the mechanism is wrong there.

The fourth test concerns constraint construction directly.

This is probably the cleanest physical experiment because it can avoid much of biology's historical complexity.

Use a fuel-driven synthetic system that can either dissipate through immediate turnover or spend part of its input constructing a persistent constraint: a compartment, barrier, catalyst localization, storage species, or programmable feedback structure.

Match the total external fuel budget.

Then expose both systems to a predeclared family of future drives.

The reachability conjecture predicts positive leverage only if the constructed constraint allows the system to reach or recover viable target states the unconstrained architecture cannot, after the work cost of the constraint is counted.

If the constraint merely looks more organized, that is not enough.

If it lasts longer but cannot do anything new, that is not necessarily enough.

If it opens one future while closing another, the comparison has to remain set-valued or use a task distribution declared in advance.

The fifth test concerns memory.

A physical memory consumes resources to write, maintain, retrieve, or protect.

The reachability account says its functional value is not mystical information content. It is causal modification of future action possibilities or their cost.

A learned controller and an untrained controller can be given the same present energy budget and the same future task family. If the learned system can recover from more perturbations, reach more target states, or do so at lower cost because of the stored information, memory has demonstrated reachability leverage.

If the memory changes internal state without changing future capability in any measurable way, it has no functional leverage in that experiment.

This gives the theory a way to lose without claiming that “information always matters somehow.”

There is another failure mode that is subtler than a bad experiment.

The mathematical object itself may turn out to be too model-dependent to support a general principle.

Reachability in high-dimensional nonlinear stochastic systems is hard. Exact sets may be computationally impossible to calculate. Biological systems have hidden variables. Coarse-graining can erase important constraints or invent apparent ones. A cell does not come with a neat list of control inputs. Evolution can alter the architecture itself.

A framework that can only be calculated after reducing every interesting system into a toy model may still be useful theoretically, but its claim to cross-domain explanation should shrink.

The metric problem is especially serious.

Suppose system A can reach ten discrete macrostates and system B can reach eight. Is A more capable?

Not necessarily. The eight may be robust and the ten fragile. The ten may all be nearly identical. The eight may include the only states that matter under the environment. One system may reach its states at enormous energetic cost. Another may reach them quickly.

There is no universal scalar called “amount of reachability” waiting to be discovered by naming it.

That is why set dominance, viability under disturbances, target-specific reachability, and Pareto frontiers are safer starting points than a grand scalar index.

If the research program eventually needs a scalar, its measure must be tied to a declared physical or functional problem.

This caution differentiates the conjecture from the maximum-entropy-production temptation it is meant to replace.

Do not search for another magic number.

The conjecture may also fail as a theory of biological complexity.

A lineage can evolve elaborate structures for reasons that have nothing to do with broad future flexibility. Sexual selection can produce costly ornaments. Arms races can produce specialized defenses. Developmental constraints can lock in complexity. Historical contingency can preserve awkward designs. Neutral processes can expand genomes or networks without adaptive benefit.

Reachability cannot become a universal explanation of “why complexity increases,” because complexity does not even increase monotonically in evolution.

Parasites often lose pathways. Cave animals lose eyes. Endosymbionts lose genes. Specialists shed flexibility because the environment supplies what they no longer need to synthesize.

Those examples are not embarrassing.

They are strong tests.

A reachability-based evolutionary model should predict when reduced capability is favored because maintaining unused options costs more than they are worth.

If it simply labels every loss “negative reachability leverage that was adaptive,” it has again become post hoc.

The environment and cost structure must predict the direction first.

The concept of agency creates another danger.

It is tempting to say that a hurricane merely dissipates while an organism changes its future reachable set, therefore reachability is the essence of agency.

Too fast.

A river changes its own future flow path by erosion. A crack propagates and changes future stress distribution. A growing crystal changes which surfaces remain exposed. A fire changes its fuel environment. Passive dynamics can alter future boundary conditions.

So endogenous boundary modification is not enough.

A stronger agency claim requires feedback: the system's action depends on sensed state, and different sensed states produce different interventions on future constraints.

A stronger model-based agency claim requires more: action depends on internal variables that encode counterfactual or predictive structure relevant to later outcomes.

Even those conditions may not settle philosophical debates about agency or consciousness.

The reachability framework should remain a physical account of control depth, not an announcement that physics has solved the mind.

This distinction can be tested in machines.

A passive self-organizing system, a feedback controller, and a model-predictive controller can be given the same energy budget and disturbance family. Their reachable sets can be measured. If model-based control does not expand future viable states or reduce the cost of reaching them, the supposed advantage disappears in that task.

The theory should not assume intelligence guarantees reachability leverage.

Poor models can make a system worse.

So can bureaucracy.

So can overcontrol.

A final threat is simple redundancy with existing concepts.

Viability kernels already exist.

Reachable sets already exist.

Robust control already exists.

Constraint closure already exists.

Thermodynamic control costs already exist.

Semantic-information frameworks already connect information to viability.

Non-equilibrium capacity has already been proposed for the latent ability of living systems to restart their dynamics.

If “recursive thermodynamic reachability” turns out to be no more than those ideas placed in one paragraph, then the right scholarly action is to say so.

A synthesis can still be valuable.

It is not a breakthrough merely because the book gave it a name.

The strongest route to novelty is therefore not branding.

It is a prediction that falls between the existing literatures.

For example: take a system in which a control architecture has a known thermodynamic cost. Calculate, before experiment, how that architecture changes the robust viable reachable set under a specified disturbance process. Predict a threshold at which the added reachability becomes worth its cost. Then test whether persistence or fitness changes at that threshold.

That would connect thermodynamic cost, control geometry, and adaptation in one measurement.

If the threshold prediction works where simpler power, efficiency, and resource models fail, the idea becomes interesting.

If not, remove the grand language.

Another possible novelty test is dormant viability.

Hyun Youk's non-equilibrium-capacity proposal asks what a living system retains when active dynamics nearly stop. A reachability theory would need to show that a dormant-but-viable state and a dead state with similar present dissipation can be distinguished quantitatively by their future thermodynamically accessible transition structure.

If that distinction cannot be operationalized before reactivation, then “latent reachability” may be an empty restatement of the fact that the spore later woke up.

Again, prediction comes first.

The same discipline applies to aging, ecology, technology, and civilization if the book goes there.

Do not say that an aging organism has “shrinking reachability” unless a measurable state-space or perturbation repertoire is specified.

Do not say that an ecosystem has greater “optionality” unless the relevant states and disturbance family are defined.

Do not say that a civilization is robust because it has more energy pathways unless those pathways can actually be activated within the time, infrastructure, material, and institutional constraints that matter.

The physics becomes useful only when the pathway is real.

The word *gradient* faces the same discipline.

A voltage difference is a gradient-related physical quantity. A chemical potential difference is a physical quantity. Temperature, pressure, concentration, gravitational potential, and redox disequilibria can be measured.

“Status gradient,” “meaning gradient,” “opportunity gradient,” and “knowledge gradient” may be useful metaphors in other contexts. They are not automatically thermodynamic variables.

The reachability conjecture does not grant permission to make them physical by analogy.

The system boundary also matters.

A refrigerator appears to create a temperature gradient until the power plant is included. A cell builds ion gradients by degrading chemical free energy. A battery charger increases electrochemical disequilibrium while drawing power from elsewhere. Recursive reachability never means creating usable free energy from nothing.

It means redirecting available work so that one part of the system's future state space changes.

Every experiment must close the energetic books over an appropriate boundary.

If a claimed reachability gain disappears when hidden external work is included, the claim fails.

This leaves a hierarchy of confidence.

The second law is not at stake.

Control-theoretic reachability is not at stake.

The existence of biological regulation is not at stake.

The novel claim is the proposed explanatory connection: that thermodynamically costly, endogenously maintained constraints can be evaluated by how they reshape robust viable futures, and that this can explain adaptive persistence in cases where instantaneous dissipation-based principles fail.

That claim is ambitious enough.

It has many ways to die.

Good.

A theory should have enemies in the data.

The next chapters will use the reachability idea cautiously when discussing minds, tools, and civilization. They should not assume the conjecture is true. They should ask a more modest question: does prediction, memory, storage, infrastructure, or coordination measurably change the future set of physical actions available to the system under finite budgets?

Sometimes the answer will be yes.

Sometimes ordinary domain language will be better.

If the framework cannot tolerate both answers, it is not ready to publish.