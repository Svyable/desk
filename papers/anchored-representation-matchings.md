# Anchored Representation Matchings and Sparse Deletion in Additive Bases

## A finite-obstruction route toward Erdős Problem #881

**Sven Hardy Benson**  
12 September 2026

## Abstract

Erdős Problem #881 asks whether an asymptotic additive basis of order \(h\) that is minimal under every infinite deletion must admit some infinite deletion after which it remains an asymptotic basis of order \(h+1\). The problem is still listed as open. This note isolates a finite obstruction that would settle it.

For a finite anchor set \(T\subset A\), consider representations of an integer \(n\) as a sum of \(r\) elements of \(A\), but ignore intersections occurring inside \(T\). Two representations are called \(T\)-disjoint when their supports outside \(T\) are disjoint. Let \(\nu_{r,T}^A(n)\) be the maximum size of a \(T\)-disjoint family of \(r\)-term representations of \(n\).

The main theorem is a hereditary sparse-deletion principle: if, for some finite \(T\),

\[
\nu_{r,T}^A(n)\longrightarrow\infty,
\]

then every infinite \(S\subseteq A\setminus T\) contains an infinite subset \(D\) such that \(A\setminus D\) remains an asymptotic basis of order \(r\). The deletion can be made arbitrarily sparse. The proof is deterministic: delete elements slowly enough that, by the time an integer \(n\) is reached, fewer elements have been deleted than there are pairwise free-disjoint representations available for \(n\).

This already says something sharp about the hypothesis in #881. If \(A\) is minimal under every infinite deletion at order \(h\), then for **every** finite anchor set \(T\), \(\nu_{h,T}^A(n)\) must fail to tend to infinity. The proposed **Anchored Representation Matching Conjecture** asserts a one-order phase transition: under the same hypothesis there is some finite \(T\subset A\) for which

\[
\nu_{h+1,T}^A(n)\longrightarrow\infty.
\]

The conjecture implies an affirmative answer to Erdős Problem #881 immediately. It has a sharp falsifiability profile. At order \(h\), infinite-deletion minimality forces bounded-size blockers along infinite subsequences after every finite core is protected. A counterexample to the conjecture would have to make such bounded blockers persist one order higher, migrating indefinitely after every fixed finite set of troublemakers has been absorbed into the anchor.

The note proves the hereditary sparse-deletion theorem, an equivalent blocker formulation up to a factor \(r\), a codegree criterion, and the conjecture for \(h=1\). It also supplies exact finite-window search code designed to find hostile examples rather than friendly ones. The novelty claim is intentionally narrow. Pairwise disjoint representation functions go back at least to Erdős and Nathanson (1988). What I did not locate in the literature search reported here is the finite-anchor, cross-order package and its use as a direct obstruction theory for Problem #881. That claim remains provisional until checked against MathSciNet, zbMATH, and specialist review.

## 1. The problem is not representation count alone

Let \(\mathbb N_0=\{0,1,2,\ldots\}\). For an integer \(h\ge 1\) and a set \(A\subseteq\mathbb N_0\), write

\[
hA=\{a_1+\cdots+a_h:a_i\in A\}.
\]

The set \(A\) is an **asymptotic basis of order \(h\)** if every sufficiently large nonnegative integer belongs to \(hA\).

There are two notions of minimality in the literature that should not be conflated. Standard element-minimality says that no proper subset of \(A\) remains a basis of the same order. Erdős Problem #881 uses a different hypothesis: every *infinite* deletion destroys the order-\(h\) basis property. I will call this **infinite-deletion minimality**:

\[
\forall D\subseteq A,
\qquad
D\text{ infinite}
\Longrightarrow
A\setminus D\text{ is not an asymptotic basis of order }h.
\]

The problem asks whether such an \(A\) must nevertheless admit an infinite \(D\subset A\) for which \(A\setminus D\) is an asymptotic basis of order \(h+1\).

As of 12 September 2026, the Erdős Problems site still marks #881 open. The problem has also been formalized in the Google DeepMind Formal Conjectures repository. Those two facts are useful discipline: the target is precise, public, and not something a finite computation can resolve by exhaustion.

It is tempting to attack the question with the usual representation function. For order \(r\), let

\[
r_{A,r}(n)
=
\#\{a_1\le\cdots\le a_r:\ a_i\in A,\ a_1+\cdots+a_r=n\}.
\]

But a large value of \(r_{A,r}(n)\) can be misleading. A thousand representations that all pass through one indispensable element are fragile in exactly the same way as one representation. The issue is not how many representations exist. It is how many can be destroyed independently.

That distinction is classical. Erdős and Nathanson studied the maximum number of pairwise disjoint representations and proved strong partition results from logarithmic lower bounds. Recent work by Daniel Larsen and by Daniel and Michael Larsen has reinforced the same warning from another direction: representation growth, decomposability, and minimal-subbasis behavior can separate in ways that raw multiplicity does not predict.

The proposal here is therefore not a new representation count. It is a modification of the older disjoint-representation invariant in exactly the place where Problem #881 seems to need modification: a finite set of structurally unavoidable elements should be allowed to remain shared.

## 2. Anchored representation width

Fix \(r\ge 2\), \(A\subseteq\mathbb N_0\), and a finite set \(T\subseteq A\). Think of \(T\) as a protected core. For an \(r\)-term representation

\[
\rho=(a_1,\ldots,a_r),
\qquad
a_1\le\cdots\le a_r,
\qquad
a_1+\cdots+a_r=n,
\]

define its **free support relative to \(T\)** by

\[
\operatorname{fsupp}_T(\rho)
=
\{a_i:a_i\notin T\}.
\]

Two representations \(\rho,\rho'\) are **\(T\)-disjoint** if

\[
\operatorname{fsupp}_T(\rho)
\cap
\operatorname{fsupp}_T(\rho')
=\varnothing.
\]

Thus repetitions inside a single representation are allowed, and different representations may share anchor elements in \(T\). What they may not share is a deletable element outside \(T\).

Define the **anchored representation matching number**

\[
\nu_{r,T}^A(n)
=
\max\bigl\{|\mathcal F|:
\mathcal F\text{ is a \(T\)-disjoint family of \(r\)-term representations of }n\bigr\}.
\]

For fixed \(n\), this is a finite hypergraph matching number once representations supported entirely inside \(T\) are absent. The vertices are the elements of \(A\setminus T\) that occur in \(r\)-term representations of \(n\), and each representation contributes its free support as an edge. The rank is at most \(r\). Since \(T\) is finite, anchor-only representations disappear for all sufficiently large \(n\).

A finite anchor is not cosmetic. Consider

\[
A=\{1\}\cup 2\mathbb N_0.
\]

This is an asymptotic basis of order \(2\). For odd \(n\), every two-term representation must use \(1\), so ordinary pairwise disjointness at order \(2\) is completely bottlenecked by one element. At order \(3\), odd integers have many representations of the form

\[
n=1+2u+2v.
\]

Those representations all share \(1\), yet outside the anchor \(T=\{1\}\) their even summands can be arranged in large disjoint families. If the purpose of a deletion argument is to keep \(1\), ordinary disjointness records the wrong obstruction. Anchored disjointness records the relevant one.

The basic monotonicity is immediate: if \(T\subseteq T'\subseteq A\), then

\[
\nu_{r,T}^A(n)\le \nu_{r,T'}^A(n).
\]

Protecting more vertices can only turn intersections into allowed intersections.

## 3. The hereditary sparse-deletion theorem

The central lemma is simpler than the logarithmic probabilistic estimates that first suggested this direction.

### Theorem 3.1 — Hereditary anchored sparse deletion

Let \(A\subseteq\mathbb N_0\) be infinite, let \(T\subseteq A\) be finite, and let \(r\ge 2\). Suppose

\[
\nu_{r,T}^A(n)\longrightarrow\infty
\qquad(n\to\infty).
\]

Let \(S\subseteq A\setminus T\) be any infinite set. Let \(g:\mathbb N_0\to\mathbb N\) be any nondecreasing function with \(g(x)\to\infty\). Then there exists an infinite

\[
D\subseteq S
\]

such that \(A\setminus D\) is an asymptotic basis of order \(r\) and

\[
|D\cap[0,x]|\le g(x)
\]

for all sufficiently large \(x\).

### Proof

Write

\[
m(n)=\nu_{r,T}^A(n).
\]

Since \(m(n)\to\infty\), for each positive integer \(j\) there is an integer \(N_j\) such that

\[
n\ge N_j\Longrightarrow m(n)\ge j+1.
\]

Choose \(N_1<N_2<\cdots\). Since \(g(x)\to\infty\), choose \(M_j\) so that

\[
x\ge M_j\Longrightarrow g(x)\ge j.
\]

The infinite subset \(S\) is unbounded. We may therefore choose distinct elements

\[
d_1<d_2<\cdots,
\qquad
d_j\in S,
\qquad
d_j\ge\max\{N_j,M_j\}.
\]

Set

\[
D=\{d_1,d_2,\ldots\}.
\]

Fix \(n\ge d_1\), and let \(j\) be the number of deleted elements at most \(n\):

\[
j=|D\cap[0,n]|.
\]

Then \(n\ge d_j\ge N_j\), so

\[
\nu_{r,T}^A(n)=m(n)\ge j+1.
\]

Take a \(T\)-disjoint family of \(j+1\) representations of \(n\). An element of \(D\) larger than \(n\) cannot occur in any representation of \(n\). Each element of \(D\cap[0,n]\) lies outside \(T\), and because the chosen representations have pairwise disjoint free supports, a given deleted element can destroy at most one representation in the family. There are only \(j\) such deleted elements and \(j+1\) representations. At least one representation survives entirely inside \(A\setminus D\).

Thus every \(n\ge d_1\) lies in \(r(A\setminus D)\), so \(A\setminus D\) is an asymptotic basis of order \(r\).

For the sparsity claim, if \(d_j\le x<d_{j+1}\), then \(|D\cap[0,x]|=j\). Since \(x\ge d_j\ge M_j\), we have \(g(x)\ge j\). Hence \(|D\cap[0,x]|\le g(x)\) for every \(x\ge d_1\). ∎

The theorem is worth pausing over because its threshold is not logarithmic. Mere divergence of the anchored matching number is enough. The conclusion is weaker than a partition theorem—we ask for one infinite sparse deletion, not two or infinitely many disjoint surviving bases—and that weaker conclusion permits a much weaker hypothesis.

It is also stronger in a different direction. The deleted set can be forced to lie inside any prescribed infinite \(S\). A divergent anchored matching number therefore makes safe infinite deletion unavoidable throughout the free part of the basis.

### Corollary 3.2 — Same-order obstruction forced by minimality

If \(A\) is infinite-deletion minimal as an asymptotic basis of order \(h\), then for every finite \(T\subseteq A\),

\[
\nu_{h,T}^A(n)\not\longrightarrow\infty.
\]

### Proof

If the limit were infinite for some finite \(T\), apply Theorem 3.1 with \(S=A\setminus T\). It produces an infinite \(D\subseteq A\setminus T\) for which \(A\setminus D\) remains an asymptotic basis of order \(h\), contradicting infinite-deletion minimality. ∎

This corollary is the first half of the proposed mechanism. Infinite-deletion minimality forces repeated finite bottlenecks at the current order. The conjecture below says that those bottlenecks cannot survive one extra summand after a finite core is protected.

## 4. The conjecture: a one-order escape from finite blockers

### Conjecture 4.1 — Anchored Representation Matching Conjecture, \(\mathrm{ARM}_h\)

Let \(h\ge 1\), and let \(A\subseteq\mathbb N_0\) be an asymptotic basis of order \(h\) that is minimal under every infinite deletion. Then there exists a finite anchor set \(T\subseteq A\) such that

\[
\nu_{h+1,T}^A(n)\longrightarrow\infty.
\]

Combined with Corollary 3.2, the conjecture predicts a precise cross-order transition:

\[
\forall\,T\subseteq A\text{ finite},
\quad
\nu_{h,T}^A(n)\not\to\infty,
\]

while

\[
\exists\,T\subseteq A\text{ finite},
\quad
\nu_{h+1,T}^A(n)\to\infty.
\]

In words: strong fragility at order \(h\) forces recurrent bounded obstructions at order \(h\), but one extra summand should create arbitrarily many independently survivable representation channels outside some finite core.

### Corollary 4.2

If \(\mathrm{ARM}_h\) holds, then Erdős Problem #881 has an affirmative answer for order \(h\).

### Proof

Apply Conjecture 4.1 with \(r=h+1\), then apply Theorem 3.1 with \(S=A\setminus T\). The resulting infinite set \(D\subseteq A\setminus T\) satisfies

\[
A\setminus D\text{ is an asymptotic basis of order }h+1.
\]

That is exactly the requested conclusion. ∎

This reduction is intentionally one-way. The existence of an infinite safe deletion does not obviously force anchored matching divergence. The conjecture is a structural strengthening of #881, not a reformulation by definition.

## 5. Why the finite anchor is the right place to be permissive

A basis can have a finite arithmetic core that every representation of certain residue classes must touch. Essential elements and essential subsets have been studied extensively; in particular, work of Deschamps, Farhi, and Hegarty shows that finite essential structure is a genuine and subtle feature of asymptotic bases.

Any invariant that insists on complete pairwise disjointness can mistake a finite congruence gate for global fragility. Problem #881 does not require us to delete every part of \(A\). It asks for *some* infinite deletion. A finite core can simply be left alone.

Anchors formalize that asymmetry. The set \(T\) is not a reservoir of deleted points; it is the finite part of \(A\) we promise never to delete. Representations may collide there freely. Outside \(T\), collisions matter because a single deleted element can kill every representation that uses it.

The conjecture therefore separates two kinds of dependence:

1. **finite-core dependence**, which may be unavoidable and harmless for the deletion problem; and
2. **distributed dependence**, which would have to remain bounded across infinitely many targets in order to obstruct sparse deletion.

The second kind is where a counterexample must live.

## 6. Blockers: an equivalent finite obstruction up to a constant

The matching number has a dual language that is often better for computation.

Fix a sufficiently large \(n\) for which no \(r\)-term representation of \(n\) is supported entirely inside \(T\). For nonempty \(T\), the simple condition \(n>r\max T\) is enough; for \(T=\varnothing\), every positive \(n\) qualifies. Form the finite hypergraph

\[
\mathcal H_{r,T}(A;n)
\]

whose vertices are elements of \(A\setminus T\) and whose edges are the distinct nonempty free supports of \(r\)-term representations of \(n\).

Define the **anchored blocker number**

\[
\tau_{r,T}^A(n)
\]

to be the minimum size of a set \(B\subseteq A\setminus T\) meeting every edge of \(\mathcal H_{r,T}(A;n)\). Equivalently, deleting \(B\) destroys every \(r\)-term representation of \(n\).

### Proposition 6.1 — Matching/blocker comparison

For every sufficiently large \(n\),

\[
\nu_{r,T}^A(n)
\le
\tau_{r,T}^A(n)
\le
r\,\nu_{r,T}^A(n).
\]

### Proof

Let \(\nu=\nu_{r,T}^A(n)\) and \(\tau=\tau_{r,T}^A(n)\).

A blocker must meet every edge in a family of \(\nu\) pairwise disjoint edges. Since those edges are disjoint, it needs at least one distinct vertex for each. Hence \(\tau\ge\nu\).

Conversely, take a maximal matching of size \(\nu\). The union of its edges contains at most \(r\nu\) vertices. That union is a blocker: if some edge were disjoint from it, the matching would not be maximal. Therefore \(\tau\le r\nu\). ∎

### Corollary 6.2

For fixed finite \(T\),

\[
\nu_{r,T}^A(n)\to\infty
\quad\Longleftrightarrow\quad
\tau_{r,T}^A(n)\to\infty.
\]

Thus \(\mathrm{ARM}_h\) has an equivalent blocker form:

> Every infinite-deletion-minimal basis of order \(h\) has a finite anchor set \(T\) such that the minimum number of non-anchor elements needed to kill all \((h+1)\)-term representations of \(n\) tends to infinity with \(n\).

The same language makes the hypothesis itself finite-certifiable along subsequences.

### Corollary 6.3 — Mobile blockers at the minimal order

If \(A\) is infinite-deletion minimal of order \(h\), then for every finite \(T\subseteq A\) there is a constant \(K_T\) and infinitely many sufficiently large \(n\) for which

\[
\tau_{h,T}^A(n)\le K_T.
\]

### Proof

By Corollary 3.2, \(\nu_{h,T}^A(n)\) does not tend to infinity. Hence there is an integer \(L_T\) and an infinite sequence of sufficiently large \(n\) for which \(\nu_{h,T}^A(n)\le L_T\). Proposition 6.1 gives

\[
\tau_{h,T}^A(n)\le hL_T
\]

along that sequence. Take \(K_T=hL_T\). ∎

This is the obstruction theory behind the conjecture. At the minimal order, small hitting sets are unavoidable infinitely often after every fixed finite core has been protected. The conjecture says there is a finite core after which the hitting number at order \(h+1\) must instead diverge.

## 7. What a counterexample would have to look like

Suppose \(A\) is an infinite-deletion-minimal basis of order \(h\) and \(\mathrm{ARM}_h\) fails. Then for **every** finite \(T\subseteq A\), the anchored matching number at order \(h+1\) fails to diverge. Therefore there is a finite constant \(K_T\) and an infinite set of target integers \(N_T\subseteq\mathbb N\) such that

\[
\nu_{h+1,T}^A(n)\le K_T
\qquad(n\in N_T).
\]

By Proposition 6.1, for each sufficiently large \(n\in N_T\) there is a blocker \(B_n\subseteq A\setminus T\) with

\[
|B_n|\le (h+1)K_T
\]

that meets every \((h+1)\)-term representation of \(n\) outside the protected core.

So a counterexample cannot merely have occasional low representation multiplicity. It must exhibit **mobile bounded blockers at two consecutive orders**. Order \(h\) blockers are forced by minimality. To refute \(\mathrm{ARM}_h\), bounded blockers must also regenerate at order \(h+1\) after any finite collection of persistent troublemakers has been promoted into the anchor set.

That is a severe requirement. It is also an actionable one. Any construction proposed as a counterexample can be attacked by repeatedly enlarging \(T\) to swallow the visible blocker and asking whether a new bounded blocker is forced to emerge.

The original deletion problem does not expose that structure. The anchored hypergraph does.

## 8. A verified case: \(h=1\)

The first case is elementary but useful because it verifies that the conjecture has the right normalization.

### Proposition 8.1

\(\mathrm{ARM}_1\) is true.

### Proof

If \(A\) is an asymptotic basis of order \(1\), then \(A\) is cofinite. Choose \(M\) such that every integer at least \(M\) belongs to \(A\).

Take \(T=\varnothing\). For sufficiently large \(n\), every integer \(a\) satisfying

\[
M\le a<\frac n2
\]

gives a two-term representation

\[
n=a+(n-a)
\]

with both summands in \(A\). Distinct choices of \(a<n/2\) produce pairwise disjoint unordered pairs: if

\[
\{a,n-a\}\cap\{b,n-b\}\ne\varnothing
\]

with \(a,b<n/2\), then \(a=b\).

Hence

\[
\nu_{2,\varnothing}^A(n)
\ge
\left\lfloor\frac{n-1}{2}\right\rfloor-M+1,
\]

which tends to infinity linearly. ∎

Every cofinite \(A\) is automatically minimal under infinite deletions at order \(1\): deleting infinitely many elements leaves infinitely many holes. The proposition therefore settles the conjecture exactly in the first case corresponding to the trivial positive case of Problem #881.

## 9. A codegree criterion

Matching numbers are exact but can be expensive. A simpler sufficient statistic comes from the local concentration of representations.

For fixed \(r,T,A,n\), let

\[
E_{r,T}^A(n)
\]

be the number of distinct nonempty free-support edges in \(\mathcal H_{r,T}(A;n)\), and let

\[
\Delta_{r,T}^A(n)
=
\max_{x\in A\setminus T}
\#\{e\in\mathcal H_{r,T}(A;n):x\in e\}
\]

be its maximum vertex degree.

### Proposition 9.1 — Greedy matching bound

For every sufficiently large \(n\),

\[
\nu_{r,T}^A(n)
\ge
\frac{E_{r,T}^A(n)}{r\,\Delta_{r,T}^A(n)}.
\]

### Proof

Greedily choose an edge and delete all edges meeting it. Since each chosen edge has at most \(r\) vertices and each vertex belongs to at most \(\Delta_{r,T}^A(n)\) edges, one choice removes at most \(r\Delta_{r,T}^A(n)\) edges. Repeating until no edges remain yields a matching of size at least the stated ratio. ∎

### Corollary 9.2

If, for some finite \(T\subseteq A\),

\[
\frac{E_{r,T}^A(n)}{\Delta_{r,T}^A(n)}
\longrightarrow\infty,
\]

then every infinite \(S\subseteq A\setminus T\) contains an infinite \(D\) such that \(A\setminus D\) is an asymptotic basis of order \(r\).

This criterion says exactly what raw multiplicity fails to say. A large representation family is useful only to the extent that it is not concentrated on a bounded set of free vertices.

For computational work, the ratio is cheap to estimate. It is also adversarially informative: a candidate counterexample must keep edge count and free-vertex concentration locked together along infinitely many target integers, after every finite core has been anchored away.

## 10. Relation to the 1988 disjoint-representation theorem

The closest classical antecedent is Erdős and Nathanson, *Partitions of Bases into Disjoint Unions of Bases* (1988). They let \(f(n)\) be the maximum number of pairwise disjoint \(h\)-term representations of \(n\), with no anchors. They proved, among other statements, that a sufficiently large logarithmic lower bound on \(f(n)\) allows a basis to be partitioned into finitely many disjoint asymptotic bases of the same order, and that stronger growth permits countably many such parts.

The present statement should not be advertised as replacing that theorem. It asks for much less and uses the slack.

The comparison is:

- Erdős–Nathanson: no shared vertices, same additive order, partition into multiple bases;
- Theorem 3.1 here: a finite shared core is allowed, the deletion can be drawn from any prescribed infinite free subset, one surviving basis is enough, and only divergence of matching width is required;
- Conjecture 4.1: minimality is assumed at order \(h\), where divergence is impossible, while matching divergence is predicted at order \(h+1\).

That last cross-order move is the substantive research hypothesis. It is where Problem #881 enters.

The finite-anchor modification also handles a defect that an unanchored criterion cannot: an essential element can force every representation in a residue class to intersect one fixed vertex, driving the ordinary matching number down to \(1\) even when the rest of each representation varies freely.

## 11. Relation to Erdős–Turán and to bases in \(\mathbb Z\)

The Erdős–Turán conjecture says that an additive basis of order \(2\) in the positive integers must have unbounded representation function. It remains open. The corresponding intuition fails badly over the full integers: Nathanson proved that essentially arbitrary representation functions can occur for additive bases of \(\mathbb Z\), including unique-representation bases.

That contrast is useful here because it discourages a vague “many representations must eventually appear” argument. Even on \(\mathbb N\), raw multiplicity is not the invariant this deletion problem asks for. The anchored matching number measures something more structural: how many independently destructible representation channels exist after a finite core is protected.

The conjecture also sits beside recent 2026 work separating robustness properties of order-\(2\) bases. Daniel Larsen and Daniel–Michael Larsen show that logarithmic or divergent representation behavior need not force other forms of robustness one might have expected. That makes a finite-hypergraph invariant more, not less, attractive. It asks *where* the representations live, not only how many there are.

## 12. Finite computation that can hurt the conjecture

The right computation is not a parade of positive examples. It should be designed to expose bounded blockers.

For a finite truncation \(A_N=A\cap[0,N]\), an anchor budget \(t\), an order \(r\), and a target window \(I=[L,U]\), define a finite vulnerability score by declaring a target \(n\) **protected** if it already has an \(r\)-term representation supported entirely in \(T\). Such a target cannot be destroyed by deleting free vertices and receives score \(+\infty\). Otherwise its score is \(\nu_{r,T}^{A_N}(n)\). Write this score as \(q_{r,T}^{A_N}(n)\), and set

\[
\Gamma_r(A_N;I,t)
=
\max_{\substack{T\subseteq A_N\\|T|\le t}}
\ \min_{n\in I}
q_{r,T}^{A_N}(n).
\]

Interpretation: we choose the best small protected core; an adversary then chooses the weakest unprotected target in the window. If a proposed infinite construction is going to support Conjecture 4.1 with a small finite core, \(\Gamma_r\) should begin to rise across late windows once the correct anchor budget is reached. A hostile construction will try to keep it bounded.

This statistic does **not** turn the infinite conjecture into a finite one. It is a pressure test. Its virtue is that it fails in the right direction.

### 12.1 Exact matching program

For fixed \(A_N,T,n\), list the distinct free-support edges \(e\) of \(\mathcal H_{r,T}(A_N;n)\). The usual integer program

\[
\max \sum_e y_e
\]

subject to

\[
\sum_{e\ni v} y_e\le 1
\qquad(v\in A_N\setminus T),
\qquad
y_e\in\{0,1\},
\]

computes the matching number exactly.

The companion program in

`papers/code/anchored_matching_search.py`

implements the same finite set-packing problem by exact branch-and-bound using only the Python standard library. It also reports an explicit maximum matching rather than just its size.

### 12.2 Exact blocker program

The dual finite program is

\[
\min \sum_v z_v
\]

subject to

\[
\sum_{v\in e} z_v\ge 1
\qquad(e\in\mathcal H_{r,T}(A_N;n)),
\qquad
z_v\in\{0,1\}.
\]

It computes \(\tau_{r,T}^{A_N}(n)\) exactly. The companion code solves this hitting-set problem directly and returns the blocker itself. A small optimum is therefore a finite obstruction certificate that can be inspected, saved, and compared across target windows.

### 12.3 Counterexample mining loop

A useful search loop is:

1. generate or import a staged additive-basis construction;
2. choose a late target window rather than testing only initial integers;
3. optimize anchors under a small budget;
4. compute exact matching and blocker numbers for every target in the window;
5. record the smallest blockers and their overlap pattern;
6. enlarge the anchor set by the most persistent blocker elements;
7. repeat and ask whether bounded blockers migrate indefinitely.

The script has an `enumerate` mode that goes one step further: for small \(N\), it enumerates subsets of \([0,N]\) satisfying a specified finite basis window and ranks them by *small* anchored width at the next tested order. This is deliberately hostile search. The preferred output is a construction that makes the conjecture look bad.

The signature of a serious counterexample candidate is not “small matching number once.” It is repeated regeneration of bounded blockers after the obvious finite core has been absorbed.

## 13. A compact research program

The conjecture breaks into four questions, each useful even if the full statement fails.

### 13.1 Prove anchored divergence under a natural structural hypothesis

The codegree criterion suggests the first target. Find conditions on an infinite-deletion-minimal order-\(h\) basis forcing

\[
\frac{E_{h+1,T}^A(n)}{\Delta_{h+1,T}^A(n)}\to\infty
\]

for some finite \(T\).

Possible hypotheses include bounded free codegree, controlled essential structure, or a quantitative restriction on how often one free element can occur across \((h+1)\)-representations.

### 13.2 Classify bounded anchored blockers

Suppose \(\tau_{h+1,T}^A(n)\le K\) for infinitely many \(n\). What arithmetic structure is forced on the corresponding blockers? Do repeated bounded blockers imply eventual congruence concentration, a finite essentiality, or a lower-order representation defect?

A theorem of the form “persistent bounded blockers can be absorbed into a finite anchor set” would prove the conjecture in one stroke.

### 13.3 Attack \(h=2\) first

For order \(2\), the target hypergraphs come from three-term representations. They are still rich enough to see genuine cross-order behavior, while their edges have rank at most \(3\). Hypergraph matching and blocker structure are correspondingly tractable.

A credible first paper-level theorem would be:

> If \(A\) is infinite-deletion-minimal of order \(2\) and satisfies condition \(P\), then there is a finite \(T\subset A\) with \(\nu_{3,T}^A(n)\to\infty\).

The content of the project is finding the weakest useful \(P\), not disguising \(P\) as the conclusion.

### 13.4 Formalize the finite core first

The current formalization of Erdős #881 gives a natural endpoint. Before formalizing the conjecture itself, the finite lemmas can be made machine-checkable:

- definitions of free support and \(T\)-disjoint representation families;
- monotonicity under anchor enlargement;
- \(\nu\le\tau\le r\nu\);
- the greedy codegree bound;
- the finite statement used in Theorem 3.1: deleting fewer than \(\nu_{r,T}^A(n)\) free vertices cannot destroy every representation of \(n\).

The infinitary step is then a short diagonal construction over \(\mathbb N\), with an arbitrary prescribed infinite reservoir \(S\) and arbitrary divergent sparsity envelope \(g\).

## 14. Falsifiability checklist

A conjecture this close to an old problem should be easy to kill if it is wrong. \(\mathrm{ARM}_h\) has several independent failure modes that can be searched for directly.

A proposed counterexample must provide:

- an explicit or rigorously defined \(A\subseteq\mathbb N_0\);
- a proof that \(A\) is an asymptotic basis of order \(h\);
- a proof that every infinite deletion destroys the order-\(h\) basis property;
- for every finite \(T\subseteq A\), a constant \(K_T\) and infinitely many \(n\) with \(\nu_{h+1,T}^A(n)\le K_T\), or equivalently bounded anchored blockers along an infinite subsequence.

The third item already forces bounded blocker subsequences at order \(h\) by Corollary 6.3. The fourth item requires the obstruction to survive an additional summand. It is finite at each target \(n\), exact, and independently checkable.

Conversely, a proof of the conjecture does not need to construct the deletion directly. It only needs to show anchored matching divergence. The deletion then follows from Theorem 3.1 by a transparent diagonal schedule, and can be chosen inside any prescribed infinite free subset.

That separation is useful. It prevents an infinitary construction from hiding the local combinatorics, and it prevents finite computation from pretending to settle the infinite statement.

## 15. Novelty audit

The following is the result of a targeted literature search, not a guarantee of priority.

### Clearly prior

**Pairwise disjoint representation functions are not new.** Erdős and Nathanson used the maximum number of pairwise disjoint representations explicitly in their 1988 partition theorem.

**Minimal and essential subsets of additive bases are a developed subject.** Work of Erdős, Nathanson, Deschamps, Farhi, Hegarty, Plagne, and others gives substantial structural information that any serious treatment of finite anchors must respect.

**Representation multiplicity alone is known to have limited structural force.** The 2026 Larsen papers provide particularly relevant modern examples.

### Not located in the searched literature

I did not locate a prior formulation of the following package:

1. \(T\)-disjoint additive representations, where intersections inside a fixed finite anchor set are ignored;
2. the hereditary deterministic deletion theorem from the sole hypothesis \(\nu_{r,T}^A(n)\to\infty\), including the ability to choose the deletion inside any prescribed infinite free subset and below any divergent sparsity envelope;
3. the cross-order conjecture that infinite-deletion minimality at order \(h\) forces finite-anchor matching divergence at order \(h+1\), despite forbidding such divergence at order \(h\);
4. the resulting two-order mobile-blocker obstruction theory for Erdős Problem #881.

Searches included combinations of “disjoint representations,” “additive basis,” “minimal basis,” “infinite deletion,” “finite anchor,” “shared anchor,” “representation hypergraph,” “essential elements,” and “pairwise disjoint representations,” together with direct inspection of the classical Erdős–Nathanson partition paper and recent work on robust additive bases.

The safe publication claim is therefore:

> We introduce a finite-anchor variant of disjoint representation width and formulate a cross-order divergence conjecture for Erdős Problem #881. We prove that anchored divergence yields hereditary arbitrarily sparse infinite deletion by a deterministic diagonal argument, while the minimality hypothesis forces anchored divergence to fail at the original order.

The unsafe claim would be that pairwise disjoint representation width itself is new. It is not.

Before journal submission, the finite-anchor terminology and the sparse-deletion lemma should be checked in MathSciNet and zbMATH, and the manuscript should be circulated to specialists in additive bases. If an equivalent lemma is found, the paper still retains a potentially distinct contribution in the cross-order anchored conjecture and its blocker formulation, but the priority language should be narrowed accordingly.

## 16. What would count as a resolution

There are three legitimate outcomes.

### Outcome A: prove \(\mathrm{ARM}_h\)

Then Problem #881 is affirmative for that \(h\) by Theorem 3.1. A proof for every \(h\ge 1\) resolves #881 affirmatively.

### Outcome B: disprove \(\mathrm{ARM}_h\) but preserve #881

A set may fail anchored matching divergence yet still admit an infinite safe deletion by a more correlated mechanism. Such a counterexample would identify the exact limitation of matching-based obstruction theory.

### Outcome C: use bounded mobile blockers to build a counterexample to #881

This is the negative route made concrete. Corollary 6.3 says bounded blockers already occur at order \(h\). To refute #881, one would engineer a basis in which, after every finite core is protected, bounded blockers continue to migrate through the free part at order \(h+1\) in a way that defeats every proposed infinite deletion.

All three outcomes produce information. That is a desirable property of a conjecture: it should organize the search even when it loses.

## 17. Conclusion

The original deletion question is infinitary, but the obstruction need not be.

For each target integer \(n\), the \((h+1)\)-term representations of \(n\) form a finite hypergraph. Once a finite anchor set is protected, a small transversal of that hypergraph is a finite certificate of fragility; a large matching is a finite certificate of redundancy. The elementary inequality

\[
\nu\le\tau\le(h+1)\nu
\]

shows that the two certificates differ only by a constant factor.

At order \(h\), infinite-deletion minimality itself forces the matching certificate to remain bounded along infinite subsequences after every finite anchoring. The proposed conjecture says that this phenomenon has a hard edge: at order \(h+1\), some finite anchor makes the matching certificate diverge.

The sparse-deletion theorem then supplies the infinitary step without a probabilistic black box. If the matching certificate eventually outruns every fixed integer, elements can be deleted from any prescribed infinite free reservoir on a schedule that grows even more slowly.

That leaves one mathematical question with nowhere to hide:

\[
\boxed{
\text{Does infinite-deletion minimality at order }h
\text{ force finite-anchor matching divergence at order }h+1?
}
\]

If yes, Erdős #881 falls. If no, the failure comes with bounded moving blockers at two consecutive orders that can be searched for, enumerated at finite scales, and subjected to structural classification.

That is the research program.

## References

1. T. F. Bloom, **Erdős Problem #881**, Erdős Problems, current open-problem page: https://www.erdosproblems.com/881

2. Google DeepMind, **Formal Conjectures: Erdős Problem 881**, Lean formalization: https://github.com/google-deepmind/formal-conjectures/blob/main/FormalConjectures/ErdosProblems/881.lean

3. P. Erdős and M. B. Nathanson, **Partitions of Bases into Disjoint Unions of Bases**, *Journal of Number Theory* 29 (1988), 1–9. Public PDF: https://combinatorica.hu/~p_erdos/1988-25.pdf

4. P. Erdős and M. B. Nathanson, **Minimal Asymptotic Bases for the Natural Numbers**, *Journal of Number Theory* 12 (1980), 154–159. Public PDF: https://users.renyi.hu/~p_erdos/1980-16.pdf

5. P. Hegarty, **Essentialities in Additive Bases**, *Proceedings of the American Mathematical Society* 137 (2009), 1657–1661. arXiv: https://arxiv.org/abs/0802.2928

6. B. Deschamps and B. Farhi, **Essentialité dans les bases additives**, *Journal of Number Theory* 123 (2007), 170–192. arXiv: https://arxiv.org/abs/0802.1205

7. M. B. Nathanson, **Every Function is the Representation Function of an Additive Basis for the Integers**, arXiv:math/0302091: https://arxiv.org/abs/math/0302091

8. D. Larsen and M. Larsen, **Robust Additive Bases Without Minimal Subbases**, arXiv:2601.18507 (2026): https://arxiv.org/abs/2601.18507

9. D. Larsen, **Three Questions of Erdős–Nathanson on Asymptotic Bases of Order 2**, arXiv:2603.03472 (2026): https://arxiv.org/abs/2603.03472

10. Yong-Gao Chen and Jin-Hui Fang, **Bounded Unique Representation Bases for the Integers**, *European Journal of Combinatorics* 124 (2025), 104080: https://doi.org/10.1016/j.ejc.2024.104080

## Authorship and assistance disclosure

This research note is published under the name Sven Hardy Benson. The formulation and exposition were developed with AI-assisted literature search, adversarial proof checking, finite-search design, and drafting. The mathematical claims stated as theorems in this note are accompanied by complete proofs or reductions in the text; the Anchored Representation Matching Conjecture is explicitly conjectural. Responsibility for the final claims, citations, and publication belongs to the author.
