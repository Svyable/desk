# Fluidity

*How Anthropic Solves Navier–Stokes*

Sven Hardy Benson

There is an awkward fact at the center of modern fluid mechanics. We know how to use the Navier–Stokes equations well enough to fly aircraft, route weather models, design turbines, simulate blood flow, shape racing cars, move ships through water, and spend staggering amounts of computing power approximating what air and liquid will do next. We do not know whether the three-dimensional incompressible equations, started from smooth data of the kind specified by the Clay Mathematics Institute, must remain smooth for all time.

That sentence sounds like a contradiction only because the word *solve* has been carrying too much weight.

Engineers solve Navier–Stokes problems every day. They choose a geometry, a grid, a time step, a turbulence model, a numerical method, a tolerance, and a machine. They produce useful answers. The answers can be tested against wind tunnels, pressure sensors, flow visualization, field measurements, and the unforgiving fact that an aircraft either behaves as expected or it does not.

The Millennium problem is different. It asks for a theorem about an infinite class of possible three-dimensional flows. Either prove that smooth, divergence-free initial data of the required kind always generate smooth solutions for all future time, or construct an admissible case in which smoothness breaks down in finite time. There is no mesh fine enough to settle that statement by brute force. There is no amount of numerical agreement that quietly turns an approximation into a proof.

As of September 5, 2026, the problem remains open.

This matters because the title of this book is written in the present tense.

*How Anthropic Solves Navier–Stokes* is not a claim that Anthropic has announced a solution. It has not. It is a forecast written at a peculiar moment, one day after Anthropic described what it says is the first complete computer-checked formalization of Fermat’s Last Theorem, produced largely autonomously by Claude agents working in Lean. A few weeks earlier, Anthropic reported that an unreleased research model, asked to take a serious run at the Riemann hypothesis, failed at the headline problem but improved a longstanding bound on a related question. Elsewhere, researchers working with Google DeepMind, Brown, NYU, Stanford, Princeton, and other institutions have been using machine learning and high-precision numerical methods to discover unstable singularities in related equations of fluid motion.

None of those results solves Navier–Stokes. Together they change the question of how one might try.

For most of the history of artificial intelligence, asking whether a machine could solve a Millennium problem was a parlor game about intelligence. Could it reason deeply enough? Could it be creative? Could it invent mathematics? Could it produce a proof that surprised experts?

Those are still interesting questions. They are no longer the only ones.

A modern AI system can read papers, write code, run computations, call theorem provers, maintain files, split a large objective among agents, search a library, test a conjecture numerically, generate counterexamples, formalize definitions, and keep working long after a single conversational turn would have ended. A proof assistant can reject a missing step without caring how persuasive the prose sounds. A high-precision numerical system can search for structures that would have been impractical to scan by hand. A reviewer agent can be assigned not to help the proof but to break it.

The interesting object is therefore becoming larger than the model.

It is the institution around the model.

Mathematics has always been institutional in this sense. A famous theorem may acquire one or two names, but the proof sits on definitions, lemmas, techniques, seminars, skeptical colleagues, journals, referees, libraries, notation, prior failures, and generations of results whose authors never appear in the newspaper headline. The romantic picture is a solitary mathematician staring at a blackboard until the decisive idea arrives. The real picture is usually a network with one unusually visible node.

Artificial intelligence makes it possible to construct a strange new version of that network inside a machine-readable workspace.

One agent can be told to pursue a regularity estimate. Another can be told to find the first unjustified inequality. A third can formalize the statement in Lean before anybody invests in proving it. A numerical group can search self-similar ansätze for candidate blowups. A literature agent can trace whether an apparently new lemma is already known under different notation. A counterexample agent can try to destroy each generalization on toy PDEs. A dependency graph can record which lemmas actually support the target. Failed routes can be kept instead of forgotten. Formal checkers can sit at the narrow end of the funnel and refuse to be impressed.

This is not the same as multiplying intelligence by the number of agents. Correlated systems can share correlated mistakes. Ten instances of the same model can agree for the same bad reason. Formalization can prove the wrong theorem perfectly. Numerical methods can return beautifully converged nonsense. A system optimized to close a proof hole can quietly choose a definition that makes the hole disappear. A language model can produce an argument with exactly the texture mathematicians associate with competence while containing one fatal line.

The purpose of the institution is not to manufacture confidence. It is to manufacture friction.

That is the central design claim of this book.

If Anthropic, or any similar laboratory, contributes materially to a Navier–Stokes solution, the decisive advantage may not be that Claude becomes a genius in the human sense. The advantage may be that a laboratory can afford to surround every promising idea with search, attack, memory, computation, formal verification, and repetition at a scale previously available only through years of human collaboration.

Navier–Stokes is an unusually good test of this claim because it refuses shortcuts.

The equations are compact. The literature is enormous. The physical intuition is rich. The analytical obstacles are deep. The problem has survived generations of brilliant mathematicians. It contains several traps that make AI overconfidence especially dangerous: weak solutions exist globally, but weak existence is not smoothness; singular sets can be constrained without being eliminated; numerical growth can become spectacular without becoming infinite; a theorem for an averaged or modified equation can look almost indistinguishable from the target to a careless reader while proving something decisively different.

In other words, the problem rewards the exact things language models have historically been bad at: maintaining definitions across long chains, respecting hypotheses, refusing seductive analogies, distinguishing “nearly” from “is,” and knowing when a plausible argument has not earned its conclusion.

It also rewards the things machine systems are becoming unusually good at: exhaustive search, symbolic manipulation, code generation, parallel exploration, persistent memory, translation between representations, and checking formal objects against mechanical rules.

That collision is *Fluidity*.

The first part of the book explains the mathematical promise we have been living with for almost a century: useful equations, global weak solutions, deep partial regularity, and one missing guarantee. The second asks what changed when Claude stopped being only a conversational model and entered formal mathematics. The third follows AI into fluid singularities, where machine learning is already being used as a discovery instrument rather than a writing assistant. The fourth builds the speculative system at the heart of the book: a Navier–Stokes research stack designed not merely to generate proofs but to kill bad ones quickly. The final part considers both endings. Smoothness may win. Blowup may win. The more important question is what kind of evidence would deserve belief.

That last phrase is worth holding onto.

A Millennium problem is not solved when a model says it is solved. It is not solved when a company publishes a triumphant blog post. It is not solved when a formal checker accepts a theorem whose statement has not been matched carefully to the real target. It is not solved when a million simulations fail to find a singularity. It is not solved when a singularity appears on a screen.

Clay’s rules are intentionally slow. A proposed solution has to be published in a qualifying outlet. At least two years must pass. The result must earn general acceptance in the global mathematics community before Clay considers the next stage. That process can look almost antique next to machines producing millions of proof steps.

I suspect its slowness is about to become more valuable.

When mathematical production becomes cheap, skepticism becomes scarce. When proof candidates can be generated faster than experts can read them, institutions that know how to say *not yet* become part of the epistemic infrastructure. Formal verification helps, but only after the statement is right, the definitions are right, the trusted base is understood, and the bridge from mathematical intention to machine object is intact.

The future of AI mathematics will therefore be less cinematic than many forecasts suggest.

There may be a moment when a result arrives and the world notices. Before that moment there will be dependency graphs, dead ends, compiler errors, numerical instability, definition fights, wrong lemmas, duplicate ideas, library work, formal gaps, and specialists pointing to the one line everybody else hoped was harmless.

Good.

That is what serious progress looks like.

The most surprising outcome would not be an AI that never makes mistakes. It would be a scientific system designed so that mistakes become visible before they become history.

Navier–Stokes has been waiting long enough to demand that standard.
