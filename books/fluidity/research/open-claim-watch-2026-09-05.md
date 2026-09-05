# Open-claim watch — September 5, 2026

A book about AI and Navier–Stokes needs a procedure for handling claimed solutions before it needs a conclusion about them.

The 2026 preprint stream makes the reason concrete. This research pass found public manuscripts asserting outcomes on both sides of the Millennium alternative, while the Clay Mathematics Institute continues to mark the Navier–Stokes problem **Unsolved**.

That tension should be preserved rather than resolved by headline selection.

## Current control fact

As of September 5, 2026, Clay’s official Navier–Stokes page still labels the problem “Unsolved.”

That institutional status does not mean every new preprint is wrong. It means no claim identified in this pass has yet produced the level of accepted resolution that would justify *Fluidity* writing the problem in the past tense.

Primary source:
- Clay Mathematics Institute, Navier–Stokes Equation: https://www.claymath.org/millennium/navier-stokes-equation/

## Claim A — global regularity

A January 2026 arXiv preprint by Myong-Hwan Ri is titled “Global regularity for the Navier-Stokes equations with application to global solvability for the Euler equations.” Its abstract claims global regularity for Leray–Hopf weak solutions under critical Sobolev initial regularity and describes a frequency-space argument using a sparse inverse-logarithmic weight and rescaling.

This is an extraordinary claim because, if correct in the required setting and if the argument closes the relevant Clay formulation, it would have consequences far beyond an incremental regularity criterion.

The research pass did not locate peer-reviewed publication, broad expert acceptance, a Clay status change, or an independent formal verification establishing that this manuscript resolves the Millennium problem.

Therefore the correct classification for the book is:

**public claimed result, unresolved status in this research pass.**

Source:
- Myong-Hwan Ri, arXiv:2601.15685: https://arxiv.org/abs/2601.15685

## Claim B — finite-time singularity

An April 2026 arXiv preprint by Rishad Shahmurov is titled “Stable Finite-Time Singularity Formation for 3D Navier--Stokes via 5D-Lifted Axisymmetric Reductions.” Its abstract describes a stationary rescaled profile, an analytically weighted Hilbert-space formulation, interval arithmetic and a Newton–Kantorovich validation strategy, followed by reconstruction into a nearly self-similar singular evolution on the periodic torus.

A June follow-up manuscript by the same author claims a reduction of hypothetical general singularity behavior to an axisymmetric-with-swirl endpoint class.

Again, these are exceptionally consequential claims if correct and if the constructions satisfy the exact Clay hypotheses.

The research pass did not locate broad independent acceptance, a Clay status change, or a recognized community conclusion that the Millennium problem has been resolved by these manuscripts.

The correct classification is therefore:

**public claimed result / proposed computer-assisted route, unresolved status in this research pass.**

Sources:
- Rishad Shahmurov, arXiv:2604.09949: https://arxiv.org/abs/2604.09949
- Rishad Shahmurov, arXiv:2606.07875: https://arxiv.org/abs/2606.07875

## Why both claims belong in the research trail

It would be easy to omit these manuscripts because they are not accepted resolutions. That would miss an important feature of the coming AI-mathematics environment.

The cost of producing long, technically sophisticated mathematical manuscripts is falling. Formal code, numerical certificates, plots, symbolic derivations and polished exposition can increasingly accompany a claim from the day it appears.

Readers will encounter artifacts that look much closer to finished mathematics than the old stereotype of a crank proof emailed as a PDF.

The evaluation problem therefore gets harder, not easier.

A research institution needs to distinguish at least four questions:

1. **What is being claimed?**
2. **Does the argument prove the formal statement it says it proves?**
3. **Is that statement actually equivalent to the Clay target?**
4. **Has the result survived independent expert and computational scrutiny?**

A sophisticated artifact can succeed on one question and fail on another.

## A standing triage protocol for Fluidity

Any future claimed AI-assisted Navier–Stokes resolution should pass through the following sequence before the manuscript changes its factual posture.

### 1. Status check

Check Clay’s current page and prize-process materials. Record the date.

### 2. Exact theorem extraction

Write the claimed theorem in a neutral form. Record domain, forcing, viscosity, initial-data class, decay or periodicity, solution concept, and whether the conclusion is existence, regularity, uniqueness, or blowup.

### 3. Clay comparator

Compare the claim line by line against Fefferman’s acceptable alternatives. Do not infer equivalence from the title.

### 4. Publication state

Record whether the work is:

- an informal post;
- a public repository;
- an arXiv preprint;
- under review;
- peer reviewed;
- published in a qualifying venue.

Publication is not proof, but the state matters.

### 5. Independent expert response

Search for analysis by PDE specialists who are not authors or close collaborators. Distinguish silence from validation.

### 6. Formal / computational audit

If formal proof artifacts exist, inspect the theorem statement, axiom footprint, checker version, independent-checker status and reproducibility.

If computer-assisted numerics are essential, inspect interval enclosures, residual bounds, inverse estimates, tail control, rounding-error treatment and reproducibility of the exact certificate.

### 7. Refutation search

Actively search for a counterexample to the decisive lemma, a scaling problem, an unproved compactness step, an inadmissible solution class, a boundary / periodicity mismatch, circular use of regularity, or an unsupported numerical-to-exact bridge.

### 8. Time

Do not confuse lack of immediate refutation with acceptance. A difficult proof can take months or years to digest.

## The AI-specific danger

AI increases the need for this protocol because generated mathematical prose is unusually good at making local transitions look finished.

A model can fill missing connective language around an actual gap.

It can give a name to an unproved estimate and later refer to the name as though the estimate were established.

It can produce code that checks a weaker statement than the one described in the paper.

It can tune a numerical procedure until the surviving plot looks decisive.

It can generate a literature discussion that creates the social appearance that every standard objection has already been handled.

None of these behaviors requires intentional deception. They can arise from optimizing for completion, coherence or evaluator acceptance.

That is why *Fluidity* should treat spectacular presentation as orthogonal to mathematical status.

## A useful irony

The existence of opposing 2026 claimed resolutions is actually good material for this book.

One manuscript says, in effect, smoothness wins.

Another says, in effect, blowup wins.

Clay still says unsolved.

The three statements can coexist because a mathematical claim becomes a mathematical fact only after the argument survives enough scrutiny.

This is the exact institutional gap AI will make more important.

The problem of the future is not generating a candidate proof.

It is routing candidate proofs through systems capable of killing almost all of them without killing the rare correct one.

## Editorial rule

Until a claimed solution clears the relevant evidence threshold, the manuscript should use language such as:

- “a preprint claims…”
- “the author proposes…”
- “the manuscript presents a computer-assisted program…”
- “this research pass found no accepted status change…”

It should not write:

- “Navier–Stokes has been solved”;
- “blowup has been proved”;
- “global regularity is now known”;
- “Clay has effectively been settled.”

The status line belongs to the community, not the headline.

## Trigger for immediate re-research

Re-run this claim watch before publication if any of the following happens:

- Clay changes the official problem status;
- either cited preprint is published after significant specialist review;
- an independent expert group publishes a detailed validation or decisive refutation;
- a formal proof artifact is released and independently checked;
- a computer-assisted proof certificate is reproduced by an outside group;
- Anthropic, OpenAI, DeepMind or another laboratory publicly claims a full Navier–Stokes resolution.
