# Formalize the Frontier

A proof assistant cannot verify a theorem written in a language it does not know.

That statement is so obvious that it hides the largest practical obstacle in the book.

If Anthropic decided tomorrow to formalize a complete proof of three-dimensional Navier–Stokes regularity, there is no guarantee the surrounding formal library would contain every theorem, space, operator, compactness argument, singular-integral estimate, localization device, and PDE construction needed in a convenient form. Some ingredients exist. Some can be built from existing mathematics. Some would require serious formal development before the first genuinely new Navier–Stokes idea ever reached the checker.

The frontier has to be paved.

This is easy to underestimate because human mathematics has a vast invisible standard library.

An analyst says “take a standard mollifier.”

Another says “by density.”

A paper passes to a weakly convergent subsequence, uses lower semicontinuity, invokes a singular-integral estimate for pressure, localizes with a cutoff, commutes a projection, interpolates between norms, and applies a compactness theorem.

Every phrase rests on mathematics that may fill a chapter of a textbook.

A trained human imports the chapter mentally.

Lean needs the theorem.

This is not an argument against formalization. It is a reason to begin before the final proof exists.

The first phase of an AI Navier–Stokes program should be a formal map of what the field already knows.

Not all of it. That would become another infinite project. Start with the spine connecting the Clay statement to the most important modern strategies.

Define the incompressible equations on the periodic domain and on Euclidean space in the exact forms needed.

Build the divergence-free function spaces.

Formalize the Leray projection where useful.

Represent the heat semigroup and Stokes evolution.

Develop the relevant Sobolev, Lebesgue, and critical-space machinery.

Formalize local existence for sufficiently regular data.

Formalize the energy estimate.

Establish weak formulations and approximation results.

Encode the scaling symmetry.

Formalize selected continuation and regularity criteria.

Build enough vorticity calculus to express the stretching mechanism.

Formalize the target equivalences the research program expects to use.

The purpose is not to recreate every textbook.

It is to ensure that when a novel route appears, its novelty is not mixed with a thousand routine gaps.

This separation has an enormous effect on proof search.

Suppose a model invents a promising estimate. If the surrounding analysis infrastructure is already formal, the new work can be isolated. The checker says: everything before this node is known; everything after it follows; here is the unresolved theorem. Human experts can concentrate on one mathematical claim.

Without that infrastructure, formalization fails in dozens of places unrelated to the new idea. The system cannot distinguish “your breakthrough is wrong” from “the library does not yet contain the version of Fubini you need.”

Research becomes debugging the environment.

Software teams solve the same problem with dependencies and tests. One does not evaluate a new algorithm inside a codebase that cannot compile for unrelated reasons. Mathematical formalization needs the equivalent of a green baseline.

This is why the unglamorous work of formal library building may be the highest-leverage first investment.

Anthropic’s Fermat formalization gives a sense of the scale. The project reportedly required an enormous body of Lean code and tens of thousands of theorem nodes. Fermat’s Last Theorem sits atop deep algebraic geometry, number theory, and the theory of elliptic curves and modular forms. Formalizing the route meant rebuilding substantial machinery.

Navier–Stokes would stress a different part of formal mathematics.

Measure theory.

Functional analysis.

Vector calculus.

Distribution theory.

Fourier analysis.

Bochner integration.

Weak derivatives.

Sobolev spaces.

Compactness.

Semigroups.

Nonlinear estimates.

Potential theory.

Singular integrals.

Parabolic regularity.

The list is not meant to intimidate. It is meant to make a strategic point.

The first “Navier–Stokes breakthrough” produced by an AI lab may be a formalization breakthrough whose headline sounds much less exciting.

A robust library for nonlinear PDE could alter the economics of the entire field.

Once the basic machinery exists, agents can formalize new papers quickly. Regularity criteria that once lived in incompatible notation can be compared mechanically. Hidden assumptions surface. Results become reusable across projects. A theorem proved for Navier–Stokes infrastructure can support Euler, reaction-diffusion systems, dispersive PDE, and other equations.

This is platform work.

Academic mathematics often struggles to fund platform work because credit is attached to new theorems. Open-source communities such as mathlib have created a different culture in which library infrastructure is itself a contribution. AI labs can accelerate that culture if they publish the infrastructure rather than trapping it inside proprietary projects.

This is one place where I would draw a hard line for any Millennium effort.

The formal frontier should be public.

Anthropic can keep model weights private. It can keep internal orchestration systems private. It can spend proprietary compute. But the theorem statements, formal definitions, reusable libraries, and final proof artifacts should live in a form independent researchers can inspect and build.

A private formalization is a demo.

A public one becomes mathematics.

There are technical reasons for openness beyond legitimacy.

Formal libraries improve through hostile use. Other researchers try to prove different theorems and discover the abstractions are too specialized. They find definitions that make simple statements painful. They contribute more general lemmas. They expose performance bottlenecks. They test whether an apparently canonical formulation is actually compatible with the rest of the ecosystem.

A Navier–Stokes formalization built only to close one theorem may contain brittle choices that distort the target.

A library used by a community is harder to fool.

The target itself should be intentionally boring.

No clever definitions designed to make the proof easy.

No hidden automation in the statement.

No proprietary opaque constants.

Encode a standard formulation as close as practical to the accepted mathematical statement. Then prove equivalences to other useful formulations rather than silently replacing it.

This becomes especially important if the final route uses an unusual solution concept.

Suppose agents discover that global regularity is easiest to prove in a new transformed variable. Fine. Formalize the transformation and prove that regularity in the transformed system implies the Clay statement. Do not let the new variable become a private semantic shortcut.

Every unusual abstraction should pay an equivalence tax.

That tax protects the theorem from specification gaming.

It also produces human understanding.

If a new formal object is genuinely useful, the equivalence proof explains how it relates to the classical theory. Mathematicians can then decide whether the abstraction is conceptually meaningful or merely convenient for automation.

The formal frontier should also include known failures.

Proof assistants are usually thought of as libraries of true theorems. A research system needs a library of refutations and counterexamples too.

This inequality fails at the endpoint.

This candidate monotone quantity is not monotone.

This class of self-similar profiles is impossible under finite-energy assumptions.

This generic argument would also prove regularity for an averaged equation that blows up.

This weak-solution uniqueness statement is false in the claimed class.

Negative knowledge can be represented as theorems just as rigorously as positive knowledge.

A machine that attempts the same dead conjecture should be confronted by a formal counterexample, not a vague search result saying “similar approach considered previously.”

This could transform the research process.

Human fields maintain taboos informally. Experts know certain estimates “cannot work” because of scaling, known examples, or decades of experience. Newcomers often rediscover the reason painfully. An AI system trained on papers may repeat the rediscovery because the negative lore is weakly represented.

Formalize the taboo.

Then the checker becomes a memory of the field’s scars.

Another frontier is theorem-statement translation.

Most research papers will continue to be written in human mathematical language. Agents need to convert those statements into formal objects without inventing hypotheses. This is a natural place for multiple independent models.

One agent extracts the theorem.

Another extracts it separately.

A comparator identifies differences.

A human resolves the ambiguity.

The final formal statement is linked back to the exact source passage.

This provenance layer is tedious and essential.

A model can make a theorem easier by accidentally strengthening a premise or weakening a conclusion. In ordinary summarization, the mistake may be minor. In a proof dependency graph, it can poison everything downstream.

The system should therefore treat mathematical translation as high-risk when the theorem becomes foundational.

This is a useful inversion of current AI practice. We often ask models to summarize more aggressively as documents get longer. A theorem database should do the opposite at critical nodes: preserve detail, attach source text, and expose uncertainty.

Formalization is compression only after semantics are secure.

The frontier also raises a labor question.

If agents can formalize known mathematics at enormous speed, what happens to the people who currently do formalization?

They become more important in a different role.

Automation shifts effort upward. Instead of proving every routine lemma manually, experts design abstractions, review definitions, curate libraries, diagnose pathological proof search, and decide which interfaces deserve stability. This resembles software engineering after code generation: less value in typing boilerplate, more value in architecture and review.

Formal mathematicians know where the dangerous choices live. They know that a definition that feels natural on paper can become unusable in a library. They know which automation patterns create opaque terms. They understand the trusted computing base. An AI lab that treats them as annotators for model output will build a bad system.

The role is closer to language designer and constitutional lawyer.

What does the machine mean when it says “solution”?

Which coercions are allowed silently?

What axioms are permitted?

What counts as a trusted computation?

How are numerical certificates imported?

Which theorem-statement transformations require proof?

These decisions define the epistemic environment in which agents operate.

Navier–Stokes makes the environment unusually demanding because analysis is full of approximation.

Weak limits.

Almost-everywhere statements.

Distributions.

Limits of smooth functions.

Passage from finite-dimensional Galerkin approximations to infinite-dimensional solutions.

Local estimates patched into global conclusions.

Arguments where the object exists first in a weak class and gains regularity later.

Formal systems can represent all of this. They simply insist that every bridge be built.

That insistence may reveal something surprising about the human literature.

Formalization projects often uncover small gaps, ambiguous conventions, or lemmas whose “standard” proof is harder to locate than expected. Usually the underlying mathematics is sound. The formalizer is paying down accumulated exposition debt.

A large Navier–Stokes formalization could become a systematic audit of the field.

That audit might produce new mathematics before the main problem moves.

An endpoint theorem may require a missing lemma.

Two standard formulations may need an equivalence proof nobody has written carefully.

A constant assumed universal may depend on the domain in a way that matters.

A numerical paper’s theorem may rely on a regularity assumption hidden in implementation.

These are not scandals. Mature fields contain layers of shared understanding that rarely need to be written from bedrock.

AI makes the cost of writing them lower.

The result is a frontier with fewer foggy edges.

There is a risk that all this infrastructure creates the illusion of progress. A lab can spend years formalizing known results and claim the Millennium problem is “30 percent solved” because 30 percent of a dependency graph is green. That metric would be nonsense if the missing node contains the entire conceptual difficulty.

The project must never confuse library completeness with theorem proximity.

Formalization reduces uncertainty about what we know.

It does not guarantee movement on what we do not.

That is enough.

For a problem this old, cleaning the boundary between known and unknown is itself a powerful act.

The decisive insight may still arrive in one line.

When it does, I want the rest of mathematics ready to compile.
