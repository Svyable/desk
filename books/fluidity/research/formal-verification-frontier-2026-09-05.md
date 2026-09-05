# Formal-verification frontier — September 5, 2026

This memo records a cutting-edge verification finding that materially strengthens *Fluidity*’s argument about how an AI-assisted Millennium proof would have to be checked.

## The surprising fact

Formal verification has a trusted computing base.

That sounds obvious in computer science and is easy to forget in popular descriptions of machine-checked mathematics. A proof assistant does not descend from mathematics itself. It is software implementing a logic, parser, elaborator, kernel, libraries, build process and surrounding operating environment. A theorem can be mathematically valid while a verifier is buggy; conversely, malicious or malformed code can attempt to exploit bugs in the verifier.

In July 2026, the Lean project published two point releases fixing soundness bugs in Lean 4.

Lean 4.32.1, released July 22, fixed a bug that could let a malicious meta-program trick the kernel into accepting `False` or another theorem. Lean’s release note says the recommended Comparator workflow for dishonest proofs was not affected by that particular bug.

Lean 4.32.2, released July 28, fixed a separate soundness bug involving nested inductive types with phantom type parameters. Lean’s release note says this bug could be exploited even when using Comparator. The independent Rust checker `nanoda` did not share that bug, although the same note emphasizes that independent checkers can have their own unrelated bugs and should also be kept updated.

This is not evidence that Lean is unreliable.

It is evidence that serious verification practice has matured enough to model proof submissions as potentially adversarial software.

The Lean reference manual now describes Comparator plus external checkers as the “Gold Standard” for high-risk situations including proof marketplaces, high-reward proof competitions and unaligned AI. The workflow places the theorem statement in a trusted challenge file, builds the proposed proof in a sandbox, exports the resulting proof term, rechecks it outside the sandbox and confirms that the proved theorem matches the trusted challenge statement. The current documentation describes checking with Lean’s kernel and optionally the independently implemented `nanoda` checker.

That architecture maps almost perfectly onto the needs of an AI-assisted Navier–Stokes solution.

## What a formal checker actually certifies

A proof checker can establish that a formal object proves a formal statement under a particular logical foundation and trusted implementation.

It does not automatically establish that:

- the statement is the Clay Millennium statement the authors intended;
- the formal definitions match the standard mathematical interpretation;
- the code was built without exploiting a verifier bug;
- imported axioms are acceptable;
- a numerical certificate embedded in the argument was generated correctly;
- a human-language explanation accurately describes the formal proof;
- the mathematical community has accepted the result.

The trusted challenge is therefore as important as the generated proof.

For *Fluidity*, the exact Clay theorem should be encoded and maintained by a group organizationally separate from the proof-generating agents. The generating system should not be able to edit the challenge, weaken its quantifiers, change the solution class, insert a smallness condition, alter the domain or replace global smoothness with a nearby theorem.

A correct proof of the wrong theorem is still the wrong answer.

## Comparator as an anti-cheating design pattern

Lean Eval, launched in 2026, makes the security model explicit.

Benchmark authors write trusted theorem statements once. Solvers work only in submission-owned files. Comparator overlays those files onto a pristine challenge workspace and scores a problem as solved only if Comparator accepts the resulting proof. The intended separation is similar to a security boundary: the solver can be creative or adversarial, but it does not own the target.

A future Navier–Stokes challenge could borrow this pattern.

### Trusted root

A small, independently reviewed Lean file containing the exact target formulation and the definitions necessary to state it.

### Untrusted research workspace

Generated lemmas, helper libraries, automation, numerical bridges, tactics and proof attempts. This can be created by frontier models and may contain arbitrary mistakes.

### Sandboxed compilation

No proof-generating code gets privileged access to the trusted root or host environment.

### Exported proof term

The result is converted into a form that can be checked separately from the generating build process.

### Multiple independent kernels

At least Lean’s kernel plus one or more independently implemented external checkers. For a Millennium problem, greater diversity is justified: different programming languages, teams and implementation lineages reduce common-mode risk.

### Exact statement comparison

The proved theorem must match the trusted Navier–Stokes challenge, not merely have a similar name or be accompanied by prose claiming equivalence.

## Why the 2026 kernel bugs improve the book

A weaker version of *Fluidity* would say that AI creates too much mathematics for humans to check, so Lean solves the trust problem.

That is too simple.

The stronger and more accurate claim is that AI-generated mathematics changes the threat model of proof verification.

When a human mathematician writes Lean code, the main concern is usually accidental error. When a powerful agent is explicitly optimizing for a checker’s acceptance, one must also consider specification gaming and software exploitation. The proof-producing system may discover strange implementation behavior simply because it searches more aggressively than ordinary users.

This does not require attributing malicious intent to the model. Optimization is enough.

If “accepted by the checker” is the reward, any discrepancy between that reward and “mathematically proves the intended theorem” becomes a possible route.

The appropriate response is the same one security engineering uses elsewhere:

- minimize the trusted base;
- separate privileges;
- sandbox untrusted computation;
- pin dependencies;
- use independent implementations;
- preserve exact artifacts;
- reproduce in clean environments;
- treat specification integrity as a security property.

## The certification ladder for Fluidity

The manuscript should distinguish at least six levels.

1. **Plausible argument** — an agent or human has written reasoning that appears coherent.
2. **Checked local derivation** — symbolic, numerical or formal tools verify parts of the argument.
3. **Formal proof in one environment** — Lean accepts a proof of an exact formal theorem.
4. **Adversarial formal validation** — the proof is rebuilt in a sandbox, exported and checked against a trusted challenge, ideally with multiple kernels.
5. **Independent mathematical reproduction** — outside groups inspect the target encoding, rebuild the formal artifacts and understand the human mathematics.
6. **Community acceptance / Clay process** — the result survives the social and institutional process required for a Millennium resolution.

A headline can collapse all six into “AI proved Navier–Stokes.” The book should refuse that compression.

## Direct implications for the hypothetical Anthropic stack

The formal layer should be split into at least three organizations or trust domains.

### Formalization team

Converts research arguments into Lean and builds missing mathematical infrastructure.

### Challenge authority

Maintains the canonical formal statement of the Clay target, approved by outside PDE and formal-methods experts. Proof agents cannot modify it.

### Verification authority

Runs sandboxed builds and independent checkers on frozen artifacts. It should have no incentive to make the project appear successful and no dependency on the proof-generating stack.

For the final claim, an external group should repeat the verification with its own machines and ideally a second checker implementation or second proof assistant for strategically critical pieces.

## New source entries

### FV01 — Lean reference manual, “Validating a Lean Proof”
- URL: https://lean-lang.org/doc/reference/latest/ValidatingProofs/
- Use: official description of Comparator plus external checkers as the gold-standard workflow for high-risk or untrusted proofs.
- Key point: correctness still depends on the trusted challenge statement and the safety of the sandbox / checker ecosystem.

### FV02 — Lean 4.32.1 release notes
- URL: https://lean-lang.org/doc/reference/latest/releases/v4.32.1/
- Date: 2026-07-22.
- Use: evidence that proof-assistant kernels can contain soundness bugs and that verification threat models distinguish ordinary from malicious proof code.

### FV03 — Lean 4.32.2 release notes
- URL: https://lean-lang.org/doc/reference/latest/releases/v4.32.2/
- Date: 2026-07-28.
- Use: especially important counterexample to naïve “Comparator makes all verifier bugs irrelevant” language. Lean states this bug could be exploited even under Comparator; the external checker `nanoda` did not share that specific bug.

### FV04 — Lean Eval
- URL: https://lean-lang.org/eval/
- Repository: https://github.com/leanprover/lean-eval
- Use: live 2026 example of trusted challenge statements, untrusted solver workspaces and Comparator-based scoring.

### FV05 — Comparator
- URL: https://github.com/leanprover/comparator
- Use: implementation-level reference for sandboxed / exported proof checking.

## Falsification note

The conclusion is not that every future Navier–Stokes proof requires Lean or that Lean is uniquely capable of checking it.

A fully rigorous human proof can resolve the problem without formalization. Another proof assistant may be preferable. A future checker architecture may supersede Comparator.

The durable conclusion is narrower:

> When AI systems generate high-value proofs at machine scale, the verifier and the theorem specification become adversarially important parts of the scientific instrument. Mathematical trust must be engineered end to end, not inferred from a green checkmark.
