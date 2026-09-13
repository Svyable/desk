# The Finite-Evidence Boundary

## Exact and minimax impossibility for finite-change invariants

**Sven Hardy Benson**  
12 September 2026

## Abstract

Suppose the object to be classified is an infinite sequence, function, trace, or history, and suppose the target property is unchanged when finitely many coordinates are altered. If the property is nontrivial, then no finite body of coordinate evidence can force either verdict. More strongly, every finite observation is compatible with a positive completion and a negative completion.

This note isolates that elementary-looking statement as a general boundary theorem and follows it through four consequences. First, in the product topology with discrete coordinates, every nontrivial finite-change-invariant property and its complement are both dense, so the boundary of the property is the entire space. Second, no exact classifier whose output is locally fixed by finitely many inspected coordinates can solve the classification problem on every input. Third, every finite ensemble of such observers admits a positive/negative pair on which all members of the ensemble return identical outputs. Fourth, for sequences indexed by the natural numbers, randomization does not repair the worst-case problem: any randomized adaptive oracle procedure that halts after finitely many queries almost surely has worst-case classification success at most \(1/2\). A fair coin attains \(1/2\), so the bound is sharp.

The proofs are unconditional. The combinatorial kernel and the deterministic finite-ensemble theorem are supplied in Lean 4 / Mathlib source at `papers/code/finite_evidence_boundary.lean`, with no `axiom`, `sorry`, or `admit` declarations. The present environment does not contain a Lean toolchain, so I do not label that source compiler-checked here; a normal Lean/Mathlib installation should be used as an independent type-check before any stronger verification claim is made.

The underlying finite-modification mechanism is not new. In descriptive set theory, eventual equality \(E_0\) is classical, and its equivalence classes are dense in Cantor space. Runtime verification has a mature literature on properties for which finite observations cannot produce conclusive verdicts. Finitely observable invariants have also been studied in ergodic theory. The novelty claim here is therefore deliberately narrow and provisional: I did not locate, in the targeted search reported in Section 9, this exact abstract package combining the finite-change splice theorem, local exact-classification impossibility, simultaneous finite-ensemble indistinguishability, and the sharp worst-case \(1/2\) theorem for almost-surely finite adaptive randomized observation. That search is not a proof of novelty.

## 1. The question finite evidence cannot answer

An infinite object is usually encountered finitely. A monitor has seen only a prefix. A program has queried only finitely many oracle locations. A scientist has collected a finite record. A predictor has received a finite sample of coordinates. Even when the underlying object is completely deterministic, the evidence available at a particular time is finite.

Some properties are genuinely local. Whether the first bit is \(1\) is settled by one query. Whether the first thousand symbols contain the word `1011` is settled by a thousand. Other properties are insensitive to every finite initial disturbance. A binary sequence contains infinitely many \(1\)s or it does not. A sequence is eventually periodic or it is not. A real sequence converges to zero or it does not. Changing finitely many terms cannot alter any of those verdicts. Computability of a sequence is likewise unchanged by finitely many coordinate edits, because finitely many exceptions can be hard-coded. Normality, where defined in the usual asymptotic frequency sense, also survives finite modification.

The natural temptation is to say that such properties are merely hard to decide early. The theorem below says something sharper. If a property is nontrivial and invariant under finite changes, there is no finite observation at which the data itself has become decisive. This is not a statement about computational complexity, insufficient cleverness, or an unlucky sampling strategy. It is a statement about the geometry of the problem: every finite cylinder still cuts through both truth values.

That distinction matters when one moves from impossibility of certainty to claims about prediction. A procedure may be statistically excellent under a chosen distribution even though finite evidence never logically determines the label. Conversely, a procedure that works with high probability under one data-generating law may have no nontrivial worst-case guarantee at all. The main minimax theorem makes that second point exact.

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

For a finite set \(F\subset I\) and data \(d\in X\), define the corresponding finite cylinder

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

### Proof in Lamport style

The hierarchy is intentionally more explicit than this short argument strictly needs. The point of the style is that every inferential dependency is visible. Leslie Lamport's case for hierarchically structured proofs is not that elementary proofs require ceremony, but that a proof discipline should continue to work when the argument becomes difficult.

**〈1〉1.** Fix an arbitrary finite \(F\subset I\) and arbitrary data \(d\in A^I\).

**〈1〉2.** Choose \(u,v\in X\) with \(u\in P\) and \(v\notin P\).

**〈2〉1.** Such \(u\) exists because \(P\ne\varnothing\).

**〈2〉2.** Such \(v\) exists because \(P\ne X\).

**〈1〉3.** Define \(u_F,v_F\in X\) coordinatewise by

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

**〈2〉1.** If \(i\notin F\), then \(u_F(i)=u(i)\) by definition.

**〈2〉2.** Therefore every coordinate on which \(u_F\) differs from \(u\) lies in \(F\).

**〈2〉3.** \(F\) is finite, so \(u_F\equiv_{\mathrm{fin}}u\).

**〈2〉4.** The same argument with \(v\) gives \(v_F\equiv_{\mathrm{fin}}v\).

**〈1〉5.** \(u_F\in P\) and \(v_F\notin P\).

**〈2〉1.** From **〈1〉4**, \(u_F\equiv_{\mathrm{fin}}u\). Since \(P\) is finite-change invariant and \(u\in P\) by **〈1〉2**, we obtain \(u_F\in P\).

**〈2〉2.** From **〈1〉4**, \(v_F\equiv_{\mathrm{fin}}v\). Since \(P\) is finite-change invariant and \(v\notin P\) by **〈1〉2**, we obtain \(v_F\notin P\).

**〈1〉6.** Both \(u_F\) and \(v_F\) agree with \(d\) on \(F\).

**〈2〉1.** For every \(i\in F\), the first branch of the definitions in **〈1〉3** gives \(u_F(i)=d(i)\) and \(v_F(i)=d(i)\).

**〈1〉7.** Therefore \(u_F\in C(F,d)\cap P\) and \(v_F\in C(F,d)\cap(X\setminus P)\). **QED.**

Nothing probabilistic has happened. Nothing asymptotic has happened. The proof uses only a positive witness, a negative witness, and the permission to overwrite finitely many coordinates without changing the property.

The theorem is elementary enough that its force is easy to underestimate. Its quantifiers are the important part. It is not saying that for each observation *some specially chosen* troublesome continuation exists. It says that **every** finite observation, including an adaptively selected one and including one taken very far out in the object, lies on the boundary between the two labels.

## 4. The whole space is boundary

Now give \(A\) the discrete topology and \(X=A^I\) the product topology. Basic open sets are exactly the cylinders that constrain finitely many coordinates.

### Corollary 4.1 — Dense and co-dense

Under the hypotheses of Theorem 3.1, \(P\) is dense in \(X\), and \(X\setminus P\) is dense in \(X\).

### Proof

Every nonempty basic open cylinder meets \(P\) and its complement by Theorem 3.1. Since every open set is a union of basic cylinders, every nonempty open set meets both. **QED.**

### Corollary 4.2 — Boundary everywhere

\[
\partial P=X.
\]

### Proof

The boundary is

\[
\partial P=\overline P\cap\overline{X\setminus P}.
\]

Corollary 4.1 gives both closures equal to \(X\). **QED.**

### Corollary 4.3 — Nowhere-continuous exact label

Let

\[
\chi_P:X\to\{0,1\}
\]

be the characteristic function of \(P\), with \(\{0,1\}\) discrete. Then \(\chi_P\) is discontinuous at every point of \(X\).

### Proof

If \(\chi_P\) were continuous at \(x\), there would be a neighborhood of \(x\) on which the value is constant. Corollary 4.1 says every neighborhood contains points of both labels. **QED.**

For binary sequences \(2^{\mathbb N}\), the equivalence relation \(\equiv_{\mathrm{fin}}\) is the classical eventual-equality relation usually denoted \(E_0\). Each \(E_0\)-class is dense: given any finite prefix, overwrite that prefix and leave the tail alone. Theorem 3.1 can therefore also be read as the elementary orbit-saturation fact behind this paper: a nonempty proper union of dense finite-change classes must be dense and co-dense.

## 5. Exact finite classification is impossible

A classifier can inspect different coordinates on different inputs. It may be adaptive. So a global statement such as “the classifier reads coordinates \(1,\ldots,n\)” is unnecessarily restrictive.

Call a Boolean observer

\[
M:X\to\{0,1\}
\]

**locally finitary** if for every \(x\in X\) there is a finite \(F_x\subset I\) such that agreement with \(x\) on \(F_x\) fixes the observer's output:

\[
\forall y\in X,
\quad
\bigl(\forall i\in F_x,\ y(i)=x(i)\bigr)
\Longrightarrow
M(y)=M(x).
\]

Any deterministic oracle algorithm that halts after finitely many adaptive coordinate queries on every input induces such an observer. At a given input \(x\), take \(F_x\) to be the finite set of coordinates actually queried during that run. Any \(y\) agreeing on those answers produces the same transcript, hence the same output.

### Theorem 5.1 — No exact locally finitary classifier

Let \(P\subseteq X\) be nontrivial and finite-change invariant. There is no locally finitary \(M:X\to\{0,1\}\) such that

\[
M(x)=1\Longleftrightarrow x\in P
\]

for every \(x\in X\).

### Lamport-style proof

**〈1〉1.** Assume, for contradiction, that such an \(M\) exists.

**〈1〉2.** Choose \(x\in P\).

**〈1〉3.** By local finitarity at \(x\), choose a finite \(F\subset I\) such that any \(y\) agreeing with \(x\) on \(F\) satisfies \(M(y)=M(x)\).

**〈1〉4.** By Theorem 3.1 applied to the cylinder \(C(F,x)\), choose \(y\notin P\) agreeing with \(x\) on \(F\).

**〈1〉5.** \(M(y)=M(x)\).

**〈2〉1.** This follows from **〈1〉3** and the agreement in **〈1〉4**.

**〈1〉6.** \(M(x)=1\) and \(M(y)=0\).

**〈2〉1.** Exactness and \(x\in P\) give \(M(x)=1\).

**〈2〉2.** Exactness and \(y\notin P\) give \(M(y)=0\).

**〈1〉7.** **〈1〉5** contradicts **〈1〉6**. Therefore no such \(M\) exists. **QED.**

The theorem is stronger than “no fixed prefix length is enough.” The finite evidence may depend on the entire path by which the algorithm reached its decision. The contradiction is reconstructed inside the exact cylinder on which that particular decision has become locally frozen.

## 6. A finite ensemble learns nothing in the worst pair

A common reaction to a single observer's failure is to diversify observers. Run several monitors, use different heuristics, or randomize over a finite menu of procedures. The splice argument survives simultaneous finite evidence.

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

Choose \(x\in P\). For each \(j\), local finitarity at \(x\) supplies a finite support \(F_j\) that fixes \(M_j\)'s output around \(x\). Let

\[
F=F_1\cup\cdots\cup F_k.
\]

The set \(F\) is finite. Theorem 3.1 gives \(y\notin P\) agreeing with \(x\) on all of \(F\). In particular \(y\) agrees with \(x\) on each \(F_j\), so every observer gives the same output on the pair. **QED.**

The immediate minimax consequence for a finite random mixture is sharp. Give the observers arbitrary mixing weights \(w_j\ge0\) summing to one. On the indistinguishable pair \(x,y\), each observer emits the same bit on both objects while the true labels are opposite. For each \(j\), exactly one of the two classifications is correct. Averaging first over observers and then over the two inputs therefore gives success exactly \(1/2\). At least one member of the pair has mixture success at most \(1/2\).

The Lean file formalizes Theorem 6.1 directly for a `Fin n` family of Boolean observers.

## 7. Randomization cannot beat one half in the worst case

The finite-ensemble theorem leaves open an infinite randomization: a randomized algorithm may have infinitely many possible query patterns, even though each actual run inspects only finitely many coordinates. On countable sequences, the same obstruction still wins.

For this section let \(I=\mathbb N\). A randomized adaptive oracle procedure \(M\) receives oracle access to \(x\in A^{\mathbb N}\) and a random seed \(\omega\) drawn from a probability space. Conditional on the seed and the answers it has already received, the procedure chooses its next coordinate query or halts and outputs a bit. Assume that for every oracle \(x\), the procedure halts after finitely many queries with probability one.

Write

\[
p_M(x)=\Pr_\omega\bigl[M^x(\omega)=\chi_P(x)\bigr].
\]

### Theorem 7.1 — Almost-sure finite-query minimax barrier

If \(P\subseteq A^{\mathbb N}\) is nontrivial and finite-change invariant, then every randomized adaptive oracle procedure satisfying the almost-sure finite-query assumption obeys

\[
\inf_{x\in A^{\mathbb N}} p_M(x)\le\frac12.
\]

The bound is sharp: an observer that ignores the oracle and returns an independent fair coin has success exactly \(1/2\) on every input.

### Lamport-style proof

**〈1〉1.** Fix a positive witness \(x\in P\).

**〈1〉2.** For a random seed \(\omega\), let \(Q_x(\omega)\subset\mathbb N\) be the set of coordinates queried by the run of \(M\) against oracle \(x\).

**〈1〉3.** For every \(\varepsilon>0\), there exists \(N\in\mathbb N\) such that

\[
\Pr\bigl[Q_x(\omega)\subseteq\{0,1,\ldots,N\}\bigr]>1-\varepsilon.
\]

**〈2〉1.** By assumption, \(Q_x(\omega)\) is finite with probability one.

**〈2〉2.** Every finite subset of \(\mathbb N\) is contained in some initial segment \(\{0,\ldots,N\}\).

**〈2〉3.** Therefore the events

\[
E_N=\{\omega:Q_x(\omega)\subseteq\{0,\ldots,N\}\}
\]

increase to an event of probability one.

**〈2〉4.** Continuity of probability from below gives \(\Pr(E_N)\to1\), proving **〈1〉3**.

**〈1〉4.** Fix \(\varepsilon>0\), choose \(N\) as in **〈1〉3**, and let \(F=\{0,\ldots,N\}\).

**〈1〉5.** By Theorem 3.1, choose \(y\notin P\) such that \(y(i)=x(i)\) for every \(i\in F\).

**〈1〉6.** Couple the two runs \(M^x\) and \(M^y\) by using the same random seed \(\omega\). On the event \(E_N\), the two complete query transcripts and final outputs are identical.

**〈2〉1.** Fix \(\omega\in E_N\).

**〈2〉2.** The first query is determined by the common seed, so both runs ask the same coordinate. That coordinate belongs to \(F\) because it occurs in the \(x\)-run and \(\omega\in E_N\).

**〈2〉3.** The two oracles give the same answer at that coordinate because \(x\) and \(y\) agree on \(F\).

**〈2〉4.** Inductively, after any number of identical query-answer pairs, the deterministic state of the seeded procedure is identical in the two runs. Its next action is therefore identical. If the action is another query, it is a query made by the \(x\)-run, hence lies in \(F\), and the two answers again agree.

**〈2〉5.** Since the \(x\)-run halts after its finite transcript, the \(y\)-run follows the same transcript and halts with the same output. This proves **〈1〉6**.

**〈1〉7.** Let \(S_x\) and \(S_y\) be the success events of the two coupled runs. On \(E_N\), at most one of \(S_x,S_y\) can occur.

**〈2〉1.** By **〈1〉6**, the two outputs are equal on \(E_N\).

**〈2〉2.** The correct labels are opposite because \(x\in P\) and \(y\notin P\).

**〈2〉3.** Hence equal outputs cannot be correct for both inputs.

**〈1〉8.** The two success probabilities satisfy

\[
p_M(x)+p_M(y)\le 1+\varepsilon.
\]

**〈2〉1.** Pointwise on \(E_N\), the sum of the two success indicators is at most \(1\) by **〈1〉7**.

**〈2〉2.** Pointwise on \(E_N^c\), that sum is at most \(2\).

**〈2〉3.** Taking expectations gives

\[
p_M(x)+p_M(y)
\le \Pr(E_N)+2\Pr(E_N^c)
=1+\Pr(E_N^c)
<1+\varepsilon.
\]

**〈1〉9.** Therefore

\[
\inf_z p_M(z)\le\frac12.
\]

**〈2〉1.** From **〈1〉8**, at least one of \(p_M(x)\) and \(p_M(y)\) is at most \((1+\varepsilon)/2\).

**〈2〉2.** Hence for every \(\varepsilon>0\),

\[
\inf_z p_M(z)\le\frac{1+\varepsilon}{2}.
\]

**〈2〉3.** Letting \(\varepsilon\downarrow0\) yields the claimed \(1/2\) bound. **QED.**

The theorem does not say randomization is useless. It says randomization cannot produce a distribution-free worst-case advantage over guessing when the only information source is an almost-surely finite adaptive interrogation of an unrestricted infinite object and the target is a nontrivial finite-change invariant. Additional structure can change the problem completely: a prior distribution, a restricted model class, a promise on the input, a static model of the system, or permission to observe forever can all break the adversarial construction.

## 8. Continuous confidence scores hit the same wall

The classification obstruction has a quantitative analogue that does not mention algorithms.

Let \(X=A^I\) carry the product topology with \(A\) discrete, and let

\[
q:X\to[0,1]
\]

be continuous. Interpret \(q(x)\) as a confidence score for \(x\in P\).

### Theorem 8.1 — Sharp uniform approximation barrier

For every continuous \(q:X\to[0,1]\),

\[
\sup_{x\in X}|q(x)-\chi_P(x)|\ge\frac12.
\]

Equality is attained by the constant function \(q\equiv1/2\).

### Proof

Assume for contradiction that the uniform error is some \(e<1/2\). Then

\[
x\in P\Longrightarrow q(x)\ge1-e>1/2,
\]

while

\[
x\notin P\Longrightarrow q(x)\le e<1/2.
\]

By Corollary 4.1, both \(P\) and its complement are dense. Pick any \(z\in X\). Since \(z\in\overline P\) and \(q\) is continuous,

\[
q(z)\in\overline{q(P)}\subseteq[1-e,1].
\]

Since \(z\in\overline{X\setminus P}\), continuity also gives

\[
q(z)\in\overline{q(X\setminus P)}\subseteq[0,e].
\]

The intervals are disjoint because \(e<1/2\), a contradiction. The constant \(1/2\) has uniform error exactly \(1/2\). **QED.**

This result is the topological analogue of the randomized minimax theorem. One concerns continuous scores; the other concerns almost-surely finite randomized interrogation. Both identify the same sharp midpoint.

## 9. What is new here, and what is not

A proof does not become novel because its notation is new. The finite-change mechanism in Theorem 3.1 has clear ancestors and close relatives.

In descriptive set theory, eventual equality on binary sequences is the classical equivalence relation \(E_0\). Finite changes move within an \(E_0\)-class, and each class is dense in Cantor space because an arbitrary finite prefix can be overwritten without altering the tail. Standard references include Alexander S. Kechris, *Classical Descriptive Set Theory* (Springer, 1995). The present topological corollary is therefore not offered as a discovery of a new feature of \(E_0\).

Runtime verification studies when a finite observation can produce a conclusive verdict about an indefinitely continuing behavior. Sandro Stucki, César Sánchez, Gerardo Schneider, and Borzoo Bonakdarpour explicitly describe non-monitorable properties as those for which finite observations cannot lead to a final verdict, and develop gray-box techniques that add static information to overcome black-box limitations in selected settings. Their paper is “Gray-box monitoring of hyperproperties with an application to privacy,” *Formal Methods in System Design* 58 (2021), 126–159: https://doi.org/10.1007/s10703-020-00358-w.

There is also a distinct probabilistic literature on finite observability. Yonatan Gutman and Michael Hochman define a process invariant to be finitely observable when estimators based on longer and longer finite samples converge in probability, and prove strong constancy results for classes of stationary processes. See “On processes which cannot be distinguished by finitary observation,” *Israel Journal of Mathematics* 164 (2008), 227–242; preprint: https://arxiv.org/abs/math/0608310 and DOI: https://doi.org/10.1007/s11856-008-0029-y. Their notion is asymptotic and statistical, not the exact finite-cylinder notion used here, but the family resemblance is real and should not be blurred away.

The proof presentation follows Leslie Lamport's hierarchical method. See “How to Write a Proof,” *American Mathematical Monthly* 102(7) (1995), 600–608, and “How to Write a 21st Century Proof” (2011): https://www.microsoft.com/en-us/research/publication/how-to-write-a-proof/ and https://www.microsoft.com/en-us/research/publication/write-21st-century-proof/.

A targeted web and literature search on 12 September 2026 did not locate the exact theorem package in this note, particularly Theorem 7.1 in the stated generality of arbitrary nontrivial finite-change-invariant labels and almost-surely finite adaptive randomized coordinate interrogation. That is evidence about what this search found, not a mathematical proof or bibliographic certification of novelty. Before a formal publication claim, the result should be checked against MathSciNet, zbMATH, descriptive set theory, runtime verification, decision-tree/query complexity, online learning, and statistical decision theory. If an equivalent theorem is already standard in one of those literatures, the correct response is attribution, not rhetorical narrowing designed to preserve a novelty claim.

The potentially useful contribution is the bridge. The same one-line splice drives exact logical ambiguity, an everywhere topological boundary, deterministic local impossibility, simultaneous finite-ensemble indistinguishability, a sharp randomized worst-case bound, and a sharp continuous-prediction bound. Those statements are often discussed in different vocabularies. Here they become consequences of one invariant.

## 10. Lean formalization

The file

`papers/code/finite_evidence_boundary.lean`

formalizes the combinatorial kernel in Lean 4 with Mathlib. In particular, it defines finite equivalence, finite-change invariance, finite patching, and local finitarity, then proves:

1. `two_sided_finite_extension`;
2. `no_exact_locally_finitary_classifier`; and
3. `finite_ensemble_indistinguishable`.

The source deliberately contains no admitted propositions and no custom axioms. It imports `Mathlib` and proves the results from ordinary Lean logic and finite-set machinery.

That statement should not be confused with a claim that the file has already passed an external compiler in this drafting session. The execution environment used to prepare this note does not have `lean` or `lake` installed. The correct verification step is therefore mechanical and falsifiable: run the file through a current Lean 4 / Mathlib toolchain, for example with

```text
lake env lean papers/code/finite_evidence_boundary.lean
```

or paste the file into the Lean community web editor at https://live.lean-lang.org/ with a Mathlib project selected. Lean's kernel checks the elaborated proof term; a successful run is materially stronger evidence than visual inspection of proof-like source. Until that run has occurred, the accurate description is **Lean formalized, compiler check pending**, not **machine-checked**.

The almost-sure randomized theorem in Section 7 is not encoded in the current Lean file. Formalizing it cleanly would require choosing an explicit model of adaptive oracle computation and a probability-space interface. I have not hidden that additional modeling work behind the word “formalized.” The combinatorial theorem on which its adversarial construction depends is formalized; the measure-theoretic coupling argument remains a conventional proof in this version.

## 11. Consequences and limits

The theorem is strongest when its assumptions are read literally.

Finite-change invariance is essential. A property determined by the first bit is not protected against a one-coordinate modification, and one query decides it. Nontriviality is essential. The empty property and the whole space are perfectly classifiable. Unrestricted input space is essential to the worst-case randomized theorem. A promise class can eliminate the adversarial completion. An input distribution can make one label overwhelmingly likely even while both labels remain topologically dense. Static information can convert a black-box monitoring problem into a gray-box one. Infinite observation can reveal limits that no finite stopping time certifies.

There is also a useful distinction between logical impossibility and probabilistic typicality. A property may be dense and co-dense yet have probability one under a particular product measure. The binary property “infinitely many \(1\)s” is the simplest example under a fair independent coin measure: every finite prefix has both a completion with finitely many \(1\)s and a completion with infinitely many \(1\)s, while the latter event has probability one. The finite-evidence boundary concerns what the observed coordinates logically rule out over the unrestricted space. It does not say the competing completions deserve equal posterior probability under a chosen stochastic model.

That is why the \(1/2\) result in Theorem 7.1 is a **worst-case** theorem. It is not a Bayesian theorem and not a claim that learning long-run properties is futile. Its claim is narrower and harder-edged: without structural assumptions beyond finite-change invariance, no almost-surely finite randomized query procedure can guarantee even an epsilon of advantage over a fair coin simultaneously on every infinite input.

## 12. Closing observation

There is a particular kind of mistake that becomes easier as our finite-data machinery becomes more sophisticated. We confuse a decision procedure's confidence with a fact having become finitely determined.

For finite-change invariants on an unrestricted infinite domain, the distinction is absolute. At every finite stage, after every clever adaptive choice of coordinates, there remains a completion on the other side. A deterministic observer can be trapped inside its own decision cylinder. A finite committee can be trapped simultaneously. An almost-surely finite randomized observer can make the dangerous cylinder depend on its random seed, but on a sufficiently high-probability finite region the same coupling returns, and the worst-case advantage collapses to zero.

The proof is a splice. The boundary it exposes is not.
