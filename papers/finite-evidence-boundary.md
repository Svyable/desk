# The Finite-Evidence Boundary

## Exact and minimax impossibility for finite-change invariants

**Sven Hardy Benson**  
12 September 2026

## Abstract

Suppose the object to be classified is an infinite sequence, function, trace, or history, and suppose the target property is unchanged when finitely many coordinates are altered. If the property is nontrivial, then no finite body of coordinate evidence can force either verdict. More strongly, every finite observation is compatible with a positive completion and a negative completion.

This note isolates that splice argument as a general boundary theorem and follows it through several consequences. In the product topology with discrete coordinates, every nontrivial finite-change-invariant property and its complement are both dense, so the boundary of the property is the entire space. No exact classifier whose output is locally fixed by finitely many inspected coordinates can solve the classification problem on every input. Every finite ensemble of such observers admits a positive/negative pair on which all members of the ensemble return identical outputs. For sequences indexed by the natural numbers, randomization does not repair the worst-case problem: any randomized adaptive oracle procedure that halts after finitely many queries almost surely has worst-case classification success at most \(1/2\). A fair coin attains \(1/2\), so the bound is sharp. Continuous confidence functions face the same sharp \(1/2\) uniform barrier.

The proofs are unconditional. The combinatorial kernel, deterministic exact-classification theorem, and finite-ensemble theorem are encoded in a pinned Lean 4 / Mathlib project at `papers/code/finite_evidence_boundary/`. The source contains no `axiom`, `sorry`, or `admit` declarations. The authoring environment used for this draft does not contain a Lean toolchain, so the accurate status is **Lean formalized, compiler check pending**, not machine-checked. The project pins Lean 4.33.0 and Mathlib 4.33.0 and includes exact build instructions.

The underlying finite-modification mechanism is not new. Eventual equality \(E_0\) is classical in descriptive set theory, and its equivalence classes are dense in Cantor space. Runtime verification has a substantial literature on properties for which finite observations cannot produce conclusive verdicts. Finitely observable invariants have also been studied in ergodic theory. The novelty claim here is therefore deliberately narrow and provisional: a targeted search did not locate this exact abstract package, especially the sharp worst-case \(1/2\) theorem for arbitrary nontrivial finite-change-invariant labels under almost-surely finite adaptive randomized coordinate interrogation. That search is not a proof of novelty.

## 1. The question finite evidence cannot answer

An infinite object is usually encountered finitely. A monitor has seen only a prefix. A program has queried only finitely many oracle locations. A scientist has collected a finite record. A predictor has received a finite sample of coordinates. Even when the underlying object is completely deterministic, the evidence available at a particular time is finite.

Some properties are genuinely local. Whether the first bit is \(1\) is settled by one query. Whether the first thousand symbols contain the word `1011` is settled by a thousand. Other properties are insensitive to every finite disturbance. A binary sequence contains infinitely many \(1\)s or it does not. A sequence is eventually periodic or it is not. A real sequence converges to zero or it does not. Changing finitely many terms cannot alter any of those verdicts. Computability of a sequence is also unchanged by finitely many coordinate edits, because finitely many exceptions can be hard-coded. Normality, where defined in the usual asymptotic frequency sense, likewise survives finite modification.

It is tempting to say merely that these properties are hard to decide early. The theorem below says something sharper. If a property is nontrivial and invariant under finite changes, there is no finite observation at which the observed coordinates themselves have become decisive. This is not a computational-complexity statement. It is a statement about the geometry of the problem: every finite cylinder cuts through both truth values.

That distinction matters once we move from certainty to prediction. A procedure may be statistically excellent under a particular distribution even though finite evidence never logically determines the label. Conversely, a procedure that works with high probability under one data-generating law may have no nontrivial distribution-free worst-case guarantee. The minimax theorem in Section 7 makes the latter point exact.

## 2. Definitions

Let \(I\) be an index set and \(A\) a nonempty alphabet or value space. Write

\[
X=A^I
\]

for the set of all functions \(x:I\to A\). No topology, probability measure, or computability structure is needed for the first theorem.

Two points \(x,y\in X\) are **finitely equivalent**, written

\[
x\equiv_{\mathrm{fin}}y,
\]

if

\[
\{i\in I:x(i)\ne y(i)\}
\]

is finite.

A property \(P\subseteq X\) is **finite-change invariant** when

\[
x\equiv_{\mathrm{fin}}y
\quad\Longrightarrow\quad
(x\in P\Longleftrightarrow y\in P).
\]

It is **nontrivial** when \(P\ne\varnothing\) and \(P\ne X\).

For a finite set \(F\subset I\) and data \(d\in X\), define the finite cylinder

\[
C(F,d)=\{x\in X:\forall i\in F,\ x(i)=d(i)\}.
\]

The cylinder records exactly what has been observed on \(F\) and leaves every other coordinate unconstrained.

## 3. The finite-evidence boundary theorem

### Theorem 3.1 — Two-sided finite extension

Let \(P\subseteq A^I\) be nontrivial and finite-change invariant. Then for every finite \(F\subset I\) and every \(d\in A^I\),

\[
C(F,d)\cap P\ne\varnothing
\qquad\text{and}\qquad
C(F,d)\cap (X\setminus P)\ne\varnothing.
\]

Equivalently, every finite coordinate observation has both a positive completion and a negative completion.

### Lamport-style proof

The hierarchy is intentionally explicit. Leslie Lamport's argument for hierarchical proofs is not that a short proof requires ceremony; it is that a proof discipline should expose dependencies in a form that still works when the proof becomes difficult.

**〈1〉1.** Fix arbitrary finite \(F\subset I\) and arbitrary \(d\in A^I\).

**〈1〉2.** Choose \(u,v\in X\) with \(u\in P\) and \(v\notin P\).

**〈2〉1.** Such \(u\) exists because \(P\ne\varnothing\).

**〈2〉2.** Such \(v\) exists because \(P\ne X\).

**〈1〉3.** Define \(u_F,v_F\in X\) by

\[
u_F(i)=
\begin{cases}
d(i),&i\in F,\\
u(i),&i\notin F,
\end{cases}
\qquad
v_F(i)=
\begin{cases}
d(i),&i\in F,\\
v(i),&i\notin F.
\end{cases}
\]

**〈1〉4.** \(u_F\equiv_{\mathrm{fin}}u\) and \(v_F\equiv_{\mathrm{fin}}v\).

**〈2〉1.** Outside \(F\), \(u_F\) equals \(u\) by definition, so every coordinate on which they differ lies in the finite set \(F\).

**〈2〉2.** The same argument applies to \(v_F\) and \(v\).

**〈1〉5.** \(u_F\in P\) and \(v_F\notin P\).

**〈2〉1.** From **〈1〉4**, \(u_F\equiv_{\mathrm{fin}}u\). Finite-change invariance and \(u\in P\) imply \(u_F\in P\).

**〈2〉2.** Likewise \(v_F\equiv_{\mathrm{fin}}v\), and finite-change invariance together with \(v\notin P\) implies \(v_F\notin P\).

**〈1〉6.** Both \(u_F\) and \(v_F\) agree with \(d\) on \(F\).

**〈2〉1.** For every \(i\in F\), the first branch of the definitions in **〈1〉3** gives \(u_F(i)=d(i)=v_F(i)\).

**〈1〉7.** Thus \(u_F\in C(F,d)\cap P\) and \(v_F\in C(F,d)\cap(X\setminus P)\). **QED.**

The theorem is elementary enough that its force can be missed. Its quantifiers matter. It does not say that some specially chosen observation admits troublesome continuations. It says that **every** finite observation, including one chosen adaptively and including one containing coordinates far out in the object, remains compatible with both labels.

## 4. The whole space is boundary

Give \(A\) the discrete topology and \(X=A^I\) the product topology. Basic open sets are exactly cylinders constraining finitely many coordinates.

### Corollary 4.1 — Dense and co-dense

Under the hypotheses of Theorem 3.1, \(P\) is dense in \(X\) and \(X\setminus P\) is dense in \(X\).

### Proof

Every nonempty basic cylinder meets both sets by Theorem 3.1. Every nonempty open set contains a nonempty basic cylinder. **QED.**

### Corollary 4.2 — Boundary everywhere

\[
\partial P=X.
\]

### Proof

Corollary 4.1 gives

\[
\overline P=X=\overline{X\setminus P}.
\]

Therefore

\[
\partial P=\overline P\cap\overline{X\setminus P}=X.
\]

**QED.**

### Corollary 4.3 — Nowhere-continuous exact label

Let \(\chi_P:X\to\{0,1\}\) be the characteristic function, with \(\{0,1\}\) discrete. Then \(\chi_P\) is discontinuous at every point.

### Proof

Continuity at a point would give a neighborhood on which \(\chi_P\) is constant. Every neighborhood contains points of both labels by Corollary 4.1. **QED.**

For binary sequences \(2^{\mathbb N}\), finite equivalence is the classical eventual-equality relation \(E_0\). Every \(E_0\)-class is dense: overwrite any requested finite prefix and leave the remaining tail unchanged. Theorem 3.1 can therefore be read as a general form of a simple orbit-saturation fact: a nonempty proper union of dense finite-change classes is dense and co-dense.

## 5. Exact finite classification is impossible

A classifier may inspect different coordinates on different inputs. It may be adaptive. A fixed prefix bound is therefore too restrictive a model.

Call a Boolean observer

\[
M:X\to\{0,1\}
\]

**locally finitary** if for every \(x\in X\) there is a finite \(F_x\subset I\) such that

\[
\forall y\in X,
\quad
\bigl(\forall i\in F_x,\ y(i)=x(i)\bigr)
\Longrightarrow
M(y)=M(x).
\]

Any deterministic oracle algorithm that halts after finitely many adaptive coordinate queries on every input induces a locally finitary observer. On input \(x\), let \(F_x\) be the coordinates actually queried. Any \(y\) returning the same answers on those coordinates produces the same transcript and the same output.

### Theorem 5.1 — No exact locally finitary classifier

Let \(P\subseteq X\) be nontrivial and finite-change invariant. There is no locally finitary \(M:X\to\{0,1\}\) satisfying

\[
M(x)=1\Longleftrightarrow x\in P
\]

for every \(x\in X\).

### Lamport-style proof

**〈1〉1.** Assume for contradiction that such \(M\) exists.

**〈1〉2.** Choose \(x\in P\).

**〈1〉3.** Local finitarity at \(x\) gives a finite \(F\subset I\) such that agreement with \(x\) on \(F\) forces the output \(M(x)\).

**〈1〉4.** Theorem 3.1 applied to \(C(F,x)\) gives \(y\notin P\) agreeing with \(x\) on \(F\).

**〈1〉5.** By **〈1〉3**, \(M(y)=M(x)\).

**〈1〉6.** Exactness gives \(M(x)=1\) and \(M(y)=0\).

**〈1〉7.** **〈1〉5** contradicts **〈1〉6**. **QED.**

The point is stronger than “no fixed prefix length suffices.” The finite evidence may depend on the path by which the algorithm reached its decision. The contradiction is built inside the exact cylinder on which that particular decision has become locally frozen.

## 6. Finite ensembles are simultaneously blind on one opposite-label pair

A natural response to one observer's failure is to diversify observers. The splice argument survives any finite collection.

### Theorem 6.1 — Finite-ensemble indistinguishability

Let \(P\subseteq X\) be nontrivial and finite-change invariant. Let

\[
M_1,\ldots,M_k:X\to\{0,1\}
\]

be locally finitary. Then there exist \(x\in P\) and \(y\notin P\) such that

\[
M_j(x)=M_j(y)
\qquad\text{for every }j=1,\ldots,k.
\]

### Proof

Choose \(x\in P\). For each \(j\), local finitarity at \(x\) gives a finite support \(F_j\) that freezes \(M_j\)'s output near \(x\). Let

\[
F=F_1\cup\cdots\cup F_k.
\]

The union is finite. Theorem 3.1 gives \(y\notin P\) agreeing with \(x\) on all of \(F\). Therefore \(y\) agrees with \(x\) on each \(F_j\), and every observer returns the same value on the pair. **QED.**

A sharp finite-mixture consequence follows immediately. Give the observers arbitrary mixing weights \(w_j\ge0\) summing to one. On the indistinguishable pair \(x,y\), observer \(j\) emits the same bit on both objects while the true labels are opposite. Exactly one of its two classifications is correct. Averaging over observers and then over the equally weighted pair gives success exactly \(1/2\). Hence at least one of \(x,y\) has mixture success at most \(1/2\).

The Lean project formalizes Theorem 6.1 for a `Fin n` family of Boolean observers.

## 7. Randomization cannot beat one half in the worst case

The finite-ensemble theorem leaves open a genuinely infinite randomization. A randomized algorithm can have infinitely many possible query patterns even though each realized run inspects only finitely many coordinates. On sequences indexed by \(\mathbb N\), the same obstruction survives.

A randomized adaptive oracle procedure \(M\) receives oracle access to \(x\in A^{\mathbb N}\) and a random seed \(\omega\). Conditional on the seed and the answers already received, the procedure chooses its next coordinate query or halts and outputs a bit. Assume that for every oracle \(x\), the run halts after finitely many queries with probability one.

Write

\[
p_M(x)=\Pr_\omega[M^x(\omega)=\chi_P(x)].
\]

### Theorem 7.1 — Almost-sure finite-query minimax barrier

If \(P\subseteq A^{\mathbb N}\) is nontrivial and finite-change invariant, then every such randomized adaptive oracle procedure satisfies

\[
\inf_{x\in A^{\mathbb N}}p_M(x)\le\frac12.
\]

The bound is sharp: ignoring the oracle and returning an independent fair coin succeeds with probability exactly \(1/2\) on every input.

### Lamport-style proof

**〈1〉1.** Choose a positive witness \(x\in P\).

**〈1〉2.** Let \(Q_x(\omega)\subset\mathbb N\) be the coordinates queried by the run against \(x\).

**〈1〉3.** For every \(\varepsilon>0\), there is \(N\) such that

\[
\Pr[Q_x(\omega)\subseteq\{0,1,\ldots,N\}]>1-\varepsilon.
\]

**〈2〉1.** By assumption, \(Q_x(\omega)\) is finite almost surely.

**〈2〉2.** Every finite subset of \(\mathbb N\) lies in some initial segment \(\{0,\ldots,N\}\).

**〈2〉3.** The increasing events

\[
E_N=\{\omega:Q_x(\omega)\subseteq\{0,\ldots,N\}\}
\]

therefore have union of probability one.

**〈2〉4.** Continuity of probability from below gives \(\Pr(E_N)\to1\).

**〈1〉4.** Fix \(\varepsilon>0\), choose such \(N\), and write \(F=\{0,\ldots,N\}\).

**〈1〉5.** By Theorem 3.1 choose \(y\notin P\) agreeing with \(x\) on every coordinate in \(F\).

**〈1〉6.** Couple the runs \(M^x\) and \(M^y\) using the same random seed. On \(E_N\), their complete transcripts and outputs are identical.

**〈2〉1.** Fix \(\omega\in E_N\). The first query is determined by the common seed, so both runs ask the same coordinate. That coordinate lies in \(F\) because it appears in the \(x\)-run.

**〈2〉2.** The two oracles return the same answer there because they agree on \(F\).

**〈2〉3.** Inductively, identical seeded states and identical previous answers force the same next action. Every query appearing in the \(x\)-run lies in \(F\), so the answers continue to agree.

**〈2〉4.** When the \(x\)-run halts, the \(y\)-run has followed the same finite transcript and halts with the same output.

**〈1〉7.** Let \(S_x,S_y\) be the success events. On \(E_N\), at most one can occur.

**〈2〉1.** The outputs are identical on \(E_N\) by **〈1〉6**.

**〈2〉2.** The correct labels are opposite because \(x\in P\) and \(y\notin P\).

**〈1〉8.** Therefore

\[
p_M(x)+p_M(y)\le1+\varepsilon.
\]

**〈2〉1.** On \(E_N\), the two success indicators sum to at most \(1\).

**〈2〉2.** On \(E_N^c\), they sum to at most \(2\).

**〈2〉3.** Taking expectations yields

\[
p_M(x)+p_M(y)
\le\Pr(E_N)+2\Pr(E_N^c)
=1+\Pr(E_N^c)
<1+\varepsilon.
\]

**〈1〉9.** At least one of the two success probabilities is at most \((1+\varepsilon)/2\). Since \(\varepsilon>0\) is arbitrary,

\[
\inf_z p_M(z)\le\frac12.
\]

**QED.**

The theorem does not say randomization is useless. It says randomization cannot produce a distribution-free worst-case advantage over guessing when its only information source is an almost-surely finite adaptive interrogation of an unrestricted infinite object and the label is a nontrivial finite-change invariant. A prior distribution, a restricted model class, a promise on the input, static knowledge of the system, or permission to observe indefinitely can change the problem.

## 8. Continuous confidence scores hit the same midpoint

Let \(X=A^I\) carry the product topology with \(A\) discrete and let

\[
q:X\to[0,1]
\]

be continuous. Interpret \(q(x)\) as a confidence score for membership in \(P\).

### Theorem 8.1 — Sharp uniform approximation barrier

For every continuous \(q:X\to[0,1]\),

\[
\sup_{x\in X}|q(x)-\chi_P(x)|\ge\frac12.
\]

The constant function \(q\equiv1/2\) attains equality.

### Proof

Assume the uniform error is \(e<1/2\). Then

\[
x\in P\Longrightarrow q(x)\ge1-e>1/2,
\]

whereas

\[
x\notin P\Longrightarrow q(x)\le e<1/2.
\]

By Corollary 4.1, both \(P\) and its complement are dense. For any \(z\in X\), continuity gives

\[
q(z)\in\overline{q(P)}\subseteq[1-e,1]
\]

because \(z\in\overline P\), and also

\[
q(z)\in\overline{q(X\setminus P)}\subseteq[0,e]
\]

because \(z\in\overline{X\setminus P}\). The two intervals are disjoint when \(e<1/2\), a contradiction. The constant \(1/2\) has uniform error exactly \(1/2\). **QED.**

Theorems 7.1 and 8.1 reach the same sharp midpoint by different routes. One concerns randomized finite interrogation; the other concerns continuous approximation of the discontinuous label.

## 9. Prior art and the novelty boundary

A proof does not become new because its notation is new. The finite-change mechanism in Theorem 3.1 has clear ancestors and close relatives.

In descriptive set theory, eventual equality on binary sequences is the classical relation \(E_0\). Finite changes move within an \(E_0\)-class, and every class is dense in Cantor space because an arbitrary finite prefix can be overwritten without altering the tail. A standard reference is Alexander S. Kechris, *Classical Descriptive Set Theory*, Springer, 1995: https://link.springer.com/book/10.1007/978-1-4612-4190-4. The topological density observation in this paper is not claimed as a discovery of a new property of \(E_0\).

Runtime verification studies when finite observations can yield conclusive verdicts about indefinitely continuing behavior. Sandro Stucki, César Sánchez, Gerardo Schneider, and Borzoo Bonakdarpour explicitly discuss properties for which finite observations cannot give a final verdict and develop gray-box methods that add static information to overcome black-box limitations in selected settings. See “Gray-box monitoring of hyperproperties with an application to privacy,” *Formal Methods in System Design* 58 (2021), 126–159: https://doi.org/10.1007/s10703-020-00358-w.

There is also a distinct probabilistic literature on finite observability. Yonatan Gutman and Michael Hochman define a process invariant to be finitely observable when estimators based on longer finite samples converge in probability and prove strong constancy results for classes of stationary processes. See “On processes which cannot be distinguished by finitary observation,” *Israel Journal of Mathematics* 164 (2008), 227–242: https://arxiv.org/abs/math/0608310 and https://doi.org/10.1007/s11856-008-0029-y. Their notion is asymptotic and statistical rather than exact finite-cylinder decidability, but the relationship should be acknowledged rather than obscured.

The proof presentation follows Leslie Lamport's hierarchical method. See “How to Write a Proof,” *American Mathematical Monthly* 102(7) (1995), 600–608, and “How to Write a 21st Century Proof” (2011): https://www.microsoft.com/en-us/research/publication/how-to-write-a-proof/ and https://www.microsoft.com/en-us/research/publication/write-21st-century-proof/.

A targeted search conducted on 12 September 2026 did not locate the exact theorem package in this note, particularly Theorem 7.1 in the stated generality. That is a report about a search, not bibliographic certification. Before publication as a novelty claim, the result should be checked against MathSciNet, zbMATH, descriptive set theory, runtime verification, query complexity, online learning, and statistical decision theory. If an equivalent theorem is standard elsewhere, attribution is the correct outcome.

The strongest plausible contribution is the bridge: one finite-change splice yields exact logical ambiguity, an everywhere topological boundary, deterministic local impossibility, simultaneous finite-ensemble indistinguishability, a sharp randomized worst-case bound, and a sharp continuous-prediction bound. Those consequences are often discussed in different vocabularies.

## 10. Lean formalization and verification status

The reproducible Lean project is

`papers/code/finite_evidence_boundary/`

with theorem source

`papers/code/finite_evidence_boundary/FiniteEvidenceBoundary.lean`.

It pins:

- Lean `v4.33.0` in `lean-toolchain`; and
- Mathlib `v4.33.0` in `lakefile.toml`.

The Mathlib tag resolves to commit `db584cd6d46c92f209a44c0f1c829460d327499d`.

The Lean source defines finite equivalence, finite-change invariance, finite patching, and local finitarity, then proves:

1. `two_sided_finite_extension`;
2. `no_exact_locally_finitary_classifier`; and
3. `finite_ensemble_indistinguishable`.

The source contains no `axiom`, `sorry`, or `admit` declarations. From the project directory, the independent verification procedure is:

```text
lake update
lake exe cache get
lake build
```

The present drafting environment has neither `lean` nor `lake` installed and cannot resolve external hosts from its shell. I therefore do not claim a successful kernel check in this session. The source has been written against the pinned Lean/Mathlib APIs and cross-checked against current Mathlib definitions, but source inspection is not a substitute for elaboration and kernel checking. Until the commands above succeed, the status remains **formalized, compiler check pending**.

The almost-sure randomized theorem in Section 7 is not encoded in the current Lean project. Formalizing it cleanly requires choosing an explicit adaptive-oracle computation model and probability-space interface. The adversarial combinatorial kernel it uses is formalized; the measure-theoretic coupling remains a conventional proof in this version. This boundary is stated explicitly so that “formalized in Lean” is not used to imply more coverage than the code contains.

Lean itself is designed so that elaborated proof terms are checked by a small kernel. The Lean project and documentation are available at https://lean-lang.org/ and https://github.com/leanprover/lean4; Mathlib is at https://github.com/leanprover-community/mathlib4.

## 11. Consequences and limits

Finite-change invariance is essential. A property determined by the first bit is not protected against a one-coordinate edit, and one query decides it. Nontriviality is essential. The empty property and the whole space are trivial to classify. The unrestricted domain is essential to the worst-case randomized theorem. A promise class can eliminate the adversarial completion.

There is also a crucial distinction between logical impossibility and probabilistic typicality. A property may be dense and co-dense yet have probability one under a particular product measure. The binary property “infinitely many \(1\)s” is the simplest example under a fair independent coin measure: every finite prefix admits both a completion with finitely many \(1\)s and one with infinitely many \(1\)s, while the latter event has probability one. The finite-evidence boundary concerns what observed coordinates logically rule out over the unrestricted space. It does not assign equal posterior probability to the competing completions.

That is why the \(1/2\) theorem is a **worst-case** result. It is not Bayesian and it does not say that learning long-run properties is futile. Its claim is narrower: without structural assumptions beyond finite-change invariance, no almost-surely finite randomized coordinate-query procedure can guarantee even an epsilon of advantage over a fair coin simultaneously on every infinite input.

## 12. Closing observation

There is a particular mistake that becomes easier as finite-data machinery becomes more sophisticated: confusing a decision procedure's confidence with the fact itself having become finitely determined.

For finite-change invariants on an unrestricted infinite domain, the distinction is absolute. At every finite stage, after every clever adaptive choice of coordinates, there remains a completion on the other side. A deterministic observer can be trapped inside its own decision cylinder. A finite committee can be trapped simultaneously. An almost-surely finite randomized observer can make its dangerous cylinder depend on its random seed, but on a sufficiently high-probability finite region the same coupling returns, and the worst-case advantage collapses to zero.

The proof is a splice. The boundary it exposes is not.
