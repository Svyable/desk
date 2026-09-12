# Wandering Blockers in Additive Bases

## A uniform-obstruction conjecture for infinite-deletion minimality

**Sven Hardy Benson**  
12 September 2026

## Abstract

An asymptotic additive basis can be globally fragile without being minimal in the usual element-by-element sense. Erdős Problem #881 isolates exactly that regime: an order-\(h\) basis \(A\) is assumed to lose the basis property after every infinite deletion, while finite deletions may remain harmless. The local obstruction created by a deletion is finite. For a target integer \(n\), call a finite set \(B\subseteq A\) a representation blocker if every \(h\)-term representation of \(n\) meets \(B\).

This note proposes the **Wandering Blocker Conjecture**. If every infinite deletion from an order-\(h\) asymptotic basis destroys the order-\(h\) basis property, then there should exist a constant \(K\), strictly increasing targets \(n_1<n_2<\cdots\), and pairwise disjoint blockers \(B_1,B_2,\ldots\) such that

\[
|B_j|\le K
\]

and \(B_j\) blocks every order-\(h\) representation of \(n_j\).

The point is uniformity. Infinite-deletion minimality already forces a bounded blocker along an infinite subsequence after any *fixed* finite part of \(A\) is protected. The conjecture says the required bound can be chosen independently of the protected finite set.

I prove an exact reformulation in terms of anchored transversal numbers: the least possible wandering-blocker width is

\[
\operatorname{wb}_h(A)
=
\sup_{T\subseteq A\text{ finite}}
\liminf_{n\to\infty}\tau_{h,T}^A(n),
\]

where \(\tau_{h,T}^A(n)\) is the minimum number of non-anchor elements needed to meet every free support of an \(h\)-term representation of \(n\). I then verify the conjecture in several nontrivial regimes. Ordinary minimal bases satisfy \(\operatorname{wb}_h(A)=1\). Every basis with finite \(\liminf\) representation function has finite wandering-blocker width. Consequently every thin basis does. The strongly deletion-minimal order-\(2\) examples constructed by Erdős and Nathanson in 1989 also satisfy the conjecture directly: their construction schedules every \(t\)-element subset as a finite obstruction, giving width at most \(t\).

The obstruction theory is sharp. If the conjecture fails, then the representation function must tend to infinity, and the counting function must satisfy

\[
\frac{A(x)}{x^{1/h}}\longrightarrow\infty.
\]

Thus no thin basis can be a counterexample. Moreover, a counterexample must exhibit unbounded **anchor escalation**: after larger and larger finite cores are protected, the smallest recurring blockers must grow without bound, even though for each fixed core some finite bound still recurs infinitely often.

This uniformization is not a generic compactness theorem. I give an explicit Schreier-family sequence of finite rank-one hypergraphs in which every infinite deletion blocks infinitely many targets but no uniformly bounded pairwise-disjoint blocker sequence exists. Any proof of the conjecture must therefore use the arithmetic geometry of equal-sum representations.

The note ends with an exact finite-window search statistic and dependency-free code designed to mine finite models for anchor escalation. The novelty claim is intentionally narrow and provisional: blockers, transversals, necessary subsets, essential subsets, and the classical 1989 constructions are prior art. What I did not locate in the literature is this uniform wandering-blocker invariant, its anchored equivalence, or the resulting uniformization conjecture for infinite-deletion-minimal additive bases.

## 1. The gap between local and global minimality

Let \(\mathbb N_0=\{0,1,2,\ldots\}\). For \(h\ge1\) and \(A\subseteq\mathbb N_0\), write

\[
hA=\{a_1+\cdots+a_h:a_i\in A\}.
\]

The set \(A\) is an **asymptotic basis of order \(h\)** if every sufficiently large integer belongs to \(hA\).

There are two minimality notions here, and the distinction is the entire reason this paper exists.

An asymptotic basis is **minimal in the ordinary sense** if no proper subset remains an asymptotic basis of the same order. Equivalently, deleting any one element already destroys infinitely many target representations.

Call an order-\(h\) basis **infinite-deletion minimal** if

\[
D\subseteq A,\quad D\text{ infinite}
\quad\Longrightarrow\quad
A\setminus D\text{ is not an asymptotic basis of order }h.
\]

This is the hypothesis in Erdős Problem #881. It is strictly weaker than ordinary minimality. A basis may tolerate every finite deletion while failing after every infinite one. Erdős and Nathanson constructed exactly such order-\(2\) bases in 1989.

The global quantifier over all infinite deletions makes the property look infinitary. But whenever a deletion actually kills a particular target integer, the certificate is finite. The representations of \(n\) use only elements of \(A\cap[0,n]\). If a deletion \(D\) kills all representations of \(n\), then the finite set

\[
D\cap[0,n]
\]

already kills them.

The natural question is therefore not whether finite certificates exist. They always do. The question is whether their size can be kept under one global bound while the certificates move through infinitely many disjoint parts of \(A\).

That is the conjecture below.

## 2. Representation blockers

For an integer \(n\), let

\[
\mathcal R_h(A;n)
=
\{(a_1,\ldots,a_h):
 a_1\le\cdots\le a_h,
 a_i\in A,
 a_1+\cdots+a_h=n\}.
\]

For \(\rho=(a_1,\ldots,a_h)\), define its support by

\[
\operatorname{supp}(\rho)=\{a_1,\ldots,a_h\}.
\]

A finite set

\[
B\subseteq A\cap[0,n]
\]

is an **\(h\)-representation blocker for \(n\)** if

\[
B\cap\operatorname{supp}(\rho)\ne\varnothing
\qquad
\text{for every }\rho\in\mathcal R_h(A;n).
\]

Equivalently,

\[
n\notin h(A\setminus B).
\]

The restriction \(B\subseteq[0,n]\) simply removes irrelevant vertices. Any blocker can be reduced to one with that property.

The ordinary blocker number is

\[
\tau_h^A(n)
=
\min\{|B|:B\text{ blocks }n\}.
\]

For sufficiently large \(n\), \(A\) is a basis and \(\tau_h^A(n)\ge1\).

A blocker is local. It need not be a necessary subset of the basis. A set \(B\) is necessary at order \(h\) only if deleting \(B\) destroys the asymptotic basis property, which means it blocks infinitely many large targets. The conjecture here asks for infinitely many local blockers that are disjoint from one another. None of them individually has to be globally necessary.

## 3. Wandering blocker width

A **\(K\)-wandering blocker system** for \(A\) at order \(h\) consists of

\[
n_1<n_2<\cdots
\]

and pairwise disjoint finite sets

\[
B_1,B_2,\ldots\subseteq A
\]

such that, for every \(j\),

\[
|B_j|\le K
\]

and \(B_j\) blocks all \(h\)-term representations of \(n_j\).

Define the **wandering blocker width**

\[
\operatorname{wb}_h(A)
\]

to be the least positive integer \(K\) for which such a system exists, and set

\[
\operatorname{wb}_h(A)=\infty
\]

if no finite \(K\) works.

The invariant asks for an obstruction that can keep moving. A single essential element may block infinitely many targets, but it cannot by itself form a wandering system because the blocker sets must be pairwise disjoint. Conversely, ordinary minimality supplies infinitely many different necessary elements, so it gives width one immediately.

The proposed statement is short.

### Conjecture 3.1 — Wandering Blocker Conjecture, \(\mathrm{WBC}_h\)

Let \(A\subseteq\mathbb N_0\) be an asymptotic basis of order \(h\) that is minimal under every infinite deletion. Then

\[
\operatorname{wb}_h(A)<\infty.
\]

Equivalently, there is a uniform finite number of deletable elements capable of killing one target at a time along infinitely many pairwise disjoint locations in the basis.

This is not Erdős #881 in disguise. It is a same-order structural conjecture. The earlier paper *Anchored Representation Matchings and Sparse Deletion in Additive Bases* asks for a phase transition one order higher; that conjecture would imply #881. The present conjecture isolates what the order-\(h\) obstruction itself should look like.

## 4. Anchors and exact uniformization

The cleanest formulation of the conjecture uses finite anchors.

Fix a finite set \(T\subseteq A\). For \(\rho\in\mathcal R_h(A;n)\), define the free support

\[
\operatorname{fsupp}_T(\rho)
=
\operatorname{supp}(\rho)\setminus T.
\]

For \(n>h\max T\), no representation of \(n\) can lie entirely inside \(T\), so every free support is nonempty.

Define the **anchored blocker number**

\[
\tau_{h,T}^A(n)
\]

to be the minimum size of a set \(B\subseteq A\setminus T\) such that

\[
B\cap\operatorname{fsupp}_T(\rho)\ne\varnothing
\]

for every \(\rho\in\mathcal R_h(A;n)\). If some representation has empty free support, set \(\tau_{h,T}^A(n)=\infty\); this issue disappears once \(n>h\max T\).

The anchor is the finite part of the basis we promise not to use in the blocker. It asks whether obstruction size stays controlled after all previously discovered troublemakers have been protected.

The next theorem is the finite-to-infinite equivalence that makes the invariant useful.

### Theorem 4.1 — Wandering/anchor equivalence

Let \(A\) be an asymptotic basis of order \(h\), and let \(K\ge1\). The following are equivalent.

1. \(A\) has a \(K\)-wandering blocker system.
2. For every finite \(T\subseteq A\), there are infinitely many integers \(n\) such that
   \[
   \tau_{h,T}^A(n)\le K.
   \]
3. For every finite \(T\subseteq A\),
   \[
   \liminf_{n\to\infty}\tau_{h,T}^A(n)\le K.
   \]

Consequently,

\[
\boxed{
\operatorname{wb}_h(A)
=
\sup_{T\subseteq A\text{ finite}}
\liminf_{n\to\infty}\tau_{h,T}^A(n)
}
\]

with the convention that the supremum may be infinite.

### Proof

The equivalence of statements 2 and 3 is immediate because the blocker numbers are integer-valued for all sufficiently large \(n\).

Assume statement 1. Let \((n_j,B_j)\) be a \(K\)-wandering blocker system and fix finite \(T\subseteq A\). Since the sets \(B_j\) are pairwise disjoint, only finitely many of them meet \(T\). Also \(n_j\to\infty\), so eventually \(n_j>h\max T\).

For every remaining \(j\), \(B_j\cap T=\varnothing\). Because \(B_j\) meets the support of every representation of \(n_j\), and no point of \(B_j\) lies in \(T\), it meets the free support of every representation. Hence

\[
\tau_{h,T}^A(n_j)\le |B_j|\le K.
\]

This happens for infinitely many \(j\), proving statement 2.

Now assume statement 2. We construct a wandering system recursively. Start with \(T_0=\varnothing\). Suppose pairwise disjoint blockers

\[
B_1,\ldots,B_{j-1}
\]

and increasing targets

\[
n_1<\cdots<n_{j-1}
\]

have been chosen. Set

\[
T_{j-1}=B_1\cup\cdots\cup B_{j-1}.
\]

By statement 2, there are infinitely many \(n\) with

\[
\tau_{h,T_{j-1}}^A(n)\le K.
\]

Choose one satisfying

\[
n>n_{j-1}
\qquad\text{and}\qquad
n>h\max T_{j-1}.
\]

Let \(B_j\subseteq A\setminus T_{j-1}\) be an anchored blocker of size at most \(K\). Since every representation has nonempty free support, \(B_j\) is also an ordinary blocker of \(n\). It is disjoint from all previous \(B_i\) by construction. Continue indefinitely.

The displayed formula for \(\operatorname{wb}_h(A)\) follows by taking the least admissible \(K\). ∎

The theorem changes the nature of the conjecture. Infinite-deletion minimality will imply that every term inside the supremum is finite. \(\mathrm{WBC}_h\) asserts that their supremum is finite as well.

That is a genuine uniform boundedness principle.

## 5. What infinite-deletion minimality already gives

The first anchored-matching paper proved a hereditary sparse-deletion theorem. The short argument needed here can be restated in blocker language.

For fixed \(T\) and \(n\), let \(\nu_{h,T}^A(n)\) be the maximum number of \(h\)-term representations of \(n\) whose free supports are pairwise disjoint. The corresponding free-support hypergraph has rank at most \(h\), so the elementary matching/transversal inequality gives

\[
\nu_{h,T}^A(n)
\le
\tau_{h,T}^A(n)
\le
h\,\nu_{h,T}^A(n).
\]

The upper bound follows by taking a maximal matching: the union of its edges is a transversal and contains at most \(h\nu\) vertices.

If

\[
\tau_{h,T}^A(n)\to\infty,
\]

then

\[
\nu_{h,T}^A(n)\to\infty.
\]

Choose deleted elements \(d_1<d_2<\cdots\) outside \(T\) slowly enough that, by the time the \(j\)-th deleted element can occur in a representation of \(n\), there are at least \(j+1\) pairwise free-disjoint representations of \(n\). Each deleted element destroys at most one member of that family. At least one representation survives. The resulting infinite deletion preserves the order-\(h\) basis property.

Therefore:

### Proposition 5.1 — Pointwise bounded obstruction

If \(A\) is infinite-deletion minimal at order \(h\), then for every finite \(T\subseteq A\),

\[
\liminf_{n\to\infty}\tau_{h,T}^A(n)<\infty.
\]

### Proof

If the liminf were infinite, then \(\tau_{h,T}^A(n)\to\infty\), hence the anchored matching number would tend to infinity, and the sparse-deletion construction would produce an infinite deletion preserving order \(h\). This contradicts infinite-deletion minimality. ∎

Combine this with Theorem 4.1. The difference between what is proved and what is conjectured is now exact:

\[
\forall T\text{ finite},\quad
\liminf_n\tau_{h,T}^A(n)<\infty
\]

is forced by minimality, while \(\mathrm{WBC}_h\) asks for

\[
\sup_T\liminf_n\tau_{h,T}^A(n)<\infty.
\]

A counterexample therefore cannot simply lack small blockers. It must make the size of recurring blockers grow as the protected finite core grows.

## 6. Ordinary minimal bases have width one

The conjecture contains the classical notion of minimality as its easiest exact case.

### Proposition 6.1

If \(A\) is an ordinary minimal asymptotic basis of order \(h\), then

\[
\operatorname{wb}_h(A)=1.
\]

### Proof

For every \(a\in A\), ordinary minimality says that

\[
A\setminus\{a\}
\]

is not an asymptotic basis of order \(h\). Hence there are infinitely many integers \(n\) such that every \(h\)-term representation of \(n\) uses \(a\). Thus \(\{a\}\) is a singleton blocker for infinitely many targets.

Choose distinct elements

\[
a_1,a_2,\ldots\in A.
\]

Recursively choose increasing targets \(n_j\) such that \(\{a_j\}\) blocks \(n_j\). The singleton blockers are pairwise disjoint. Therefore \(\operatorname{wb}_h(A)\le1\), and width zero is impossible for represented large targets. ∎

This regime is broader than it may look. Recent constructions show that an ordinary minimal basis can have enormous representation multiplicity on most integers while retaining sparse witness integers with unique or highly constrained representations. Jin-Hui Fang's 2026 order-\(2\) construction is an especially clear example: the representation function is at least a constant multiple of \(\sqrt n\) away from an explicit sparse sequence, yet special targets have a unique representation. Large typical multiplicity does not erase width-one obstruction.

The wandering width records the sparse obstruction skeleton, not the average redundancy.

## 7. The first nontrivial global case: Erdős–Nathanson 1989

The classical paper *Additive bases with many representations* contains a family that sits directly inside the hypothesis of \(\mathrm{WBC}_2\) but is not ordinarily minimal.

Erdős and Nathanson prove that for every positive integer \(t\) there exists an order-\(2\) asymptotic basis \(A\) such that

\[
r_A(n)\ge t
\]

for all sufficiently large \(n\), and

\[
A\setminus S\text{ is an asymptotic basis of order }2
\quad\Longleftrightarrow\quad
S\text{ is finite}.
\]

Thus every infinite deletion destroys the basis, while every finite deletion preserves it. In particular, the basis contains no ordinary minimal subbasis.

Their proof does more than establish the deletion property. The construction schedules finite sets \(F_k\subseteq A\) of cardinality \(t\) so that every \(t\)-element subset of the eventual \(A\) appears exactly once, and the scheduled set \(F_k\) destroys one exceptional target \(N_k\).

That is already a wandering-blocker mechanism.

### Proposition 7.1

For the Erdős–Nathanson basis in Theorem 2 of their 1989 paper,

\[
\operatorname{wb}_2(A)\le t.
\]

### Proof

Because \(A\) is infinite, choose pairwise disjoint \(t\)-element subsets

\[
F^{(1)},F^{(2)},\ldots\subseteq A.
\]

The construction schedules every \(t\)-element subset exactly once. Hence for each \(j\) there is an index \(k_j\) such that

\[
F^{(j)}=F_{k_j},
\]

and deleting \(F_{k_j}\) destroys the target \(N_{k_j}\). Therefore \(F^{(j)}\) is a blocker for \(N_{k_j}\). The indices \(k_j\) are distinct; after reordering, the corresponding targets are strictly increasing. The blockers remain pairwise disjoint and all have size \(t\). ∎

This matters for the conjecture's credibility. The first examples one should test are not friendly ordinary minimal bases. They are the classical examples where finite deletion is harmless and infinite deletion is fatal. Those examples satisfy the proposed uniform obstruction principle for the explicit reason built into their construction.

Theorem 3 in the same paper gives related \(t\)-minimal bases by scheduling each \(t\)-set infinitely often. Those examples also exhibit bounded local obstruction directly.

## 8. Finite liminf representation multiplicity is enough

The wandering-blocker property does not require minimality when low-multiplicity targets recur.

Let

\[
r_{A,h}(n)=|\mathcal R_h(A;n)|
\]

be the usual nondecreasing-tuple representation function.

### Theorem 8.1

If there is an integer \(R\) such that

\[
r_{A,h}(n)\le R
\]

for infinitely many \(n\), then

\[
\operatorname{wb}_h(A)\le R.
\]

In particular, if

\[
\liminf_{n\to\infty}r_{A,h}(n)<\infty,
\]

then \(A\) has finite wandering-blocker width.

### Proof

Fix a finite anchor \(T\subseteq A\). Take a sufficiently large target \(n\) with

\[
r_{A,h}(n)\le R
\]

and

\[
n>h\max T.
\]

Every representation of \(n\) has at least one summand outside \(T\). From each representation choose one such free summand. The set of chosen elements has cardinality at most \(R\) and meets the free support of every representation. Hence

\[
\tau_{h,T}^A(n)\le R.
\]

There are infinitely many such targets. Theorem 4.1 now gives

\[
\operatorname{wb}_h(A)\le R.
\]

∎

The contrapositive is more interesting.

### Corollary 8.2

If

\[
\operatorname{wb}_h(A)=\infty,
\]

then

\[
r_{A,h}(n)\longrightarrow\infty.
\]

### Proof

If the representation function failed to tend to infinity, some finite \(R\) would occur as an upper bound along an infinite subsequence, and Theorem 8.1 would give finite wandering width. ∎

So any counterexample to \(\mathrm{WBC}_h\) must inhabit the high-redundancy regime.

For order two this is a severe requirement. The Erdős–Turán conjecture asks only for unbounded representation function in every order-\(2\) basis. A counterexample to the Wandering Blocker Conjecture would have to do much more: its representation function would have to tend to infinity while the basis remained globally fragile under every infinite deletion.

Recent work by Daniel Larsen shows that divergent representation function, decomposability, and the existence of minimal subbases can separate in subtle ways. That is precisely why the blocker invariant is useful: it records where the local vulnerability sits rather than treating the number of representations as a sufficient statistic.

## 9. Thin bases satisfy the conjecture

The preceding theorem has an immediate density consequence.

Write

\[
A(x)=|A\cap[0,x]|.
\]

An order-\(h\) asymptotic basis is called **thin** if

\[
A(x)=O(x^{1/h}).
\]

This is the optimal counting scale for a basis of order \(h\), up to constants.

### Theorem 9.1

Every thin asymptotic basis of order \(h\) has finite wandering-blocker width.

### Proof

For \(x\ge0\), every representation of a target \(n\le x\) uses elements of \(A\cap[0,x]\). Therefore

\[
\sum_{n\le x}r_{A,h}(n)
\le
\binom{A(x)+h-1}{h}.
\]

If

\[
A(x)\le Cx^{1/h}
\]

for all sufficiently large \(x\), then the right-hand side is \(O(x)\). Hence the average value of \(r_{A,h}(n)\) over \(n\le x\) is bounded along all large \(x\). The representation function cannot tend to infinity. Therefore

\[
\liminf_{n\to\infty}r_{A,h}(n)<\infty.
\]

Apply Theorem 8.1. ∎

This proves \(\mathrm{WBC}_h\) for every thin basis, whether or not it is minimal in either sense.

The converse obstruction is quantitative.

### Theorem 9.2 — Density obstruction to failure

If

\[
\operatorname{wb}_h(A)=\infty,
\]

then

\[
\frac{A(x)}{x^{1/h}}\longrightarrow\infty.
\]

### Proof

By Corollary 8.2,

\[
r_{A,h}(n)\to\infty.
\]

Hence its Cesàro averages also tend to infinity:

\[
\frac1{x+1}\sum_{n\le x}r_{A,h}(n)\to\infty.
\]

But

\[
\sum_{n\le x}r_{A,h}(n)
\le
\binom{A(x)+h-1}{h}
\le
\frac{(A(x)+h)^h}{h!}.
\]

Therefore

\[
\frac{(A(x)+h)^h}{x}\to\infty,
\]

which implies

\[
\frac{A(x)}{x^{1/h}}\to\infty.
\]

∎

A counterexample to the conjecture must therefore be thicker than every thin basis by an unbounded factor. This is not merely a technical side condition. It removes the entire optimal-density regime from the counterexample search.

## 10. The case \(h=1\)

Order one is a useful normalization because ordinary minimality behaves differently there.

If \(A\) is an asymptotic basis of order one, then \(A\) is cofinite. Such a set is not ordinarily minimal: removing one element leaves it cofinite. But it is infinite-deletion minimal, because deleting infinitely many elements creates infinitely many holes.

For every sufficiently large \(n\in A\), the only one-term representation is

\[
n=n.
\]

Thus \(\{n\}\) is a singleton blocker. Choosing increasing \(n_j\in A\) gives pairwise disjoint singleton blockers.

### Proposition 10.1

Every order-\(1\) asymptotic basis satisfies

\[
\operatorname{wb}_1(A)=1.
\]

Hence \(\mathrm{WBC}_1\) is true.

## 11. Why compactness alone cannot prove the conjecture

At this point one might suspect a general combinatorial theorem: perhaps any sequence of finite representation hypergraphs with the property that every infinite deletion kills infinitely many targets must automatically contain bounded disjoint blockers.

That is false, even for rank-one hypergraphs.

The countermodel is a Schreier-type barrier.

Let the vertex set be

\[
V=\{1,2,3,\ldots\}.
\]

Consider the family

\[
\mathcal S
=
\{F\subseteq V:
F\text{ finite nonempty and }|F|=\min F\}.
\]

Enumerate \(\mathcal S\) as

\[
F_1,F_2,\ldots
\]

and for each \(j\) define a rank-one hypergraph

\[
\mathcal H_j
=
\bigl\{\{v\}:v\in F_j\bigr\}.
\]

A set \(D\subseteq V\) is a transversal of \(\mathcal H_j\) exactly when

\[
F_j\subseteq D.
\]

### Proposition 11.1 — Abstract barrier countermodel

The sequence \((\mathcal H_j)\) has the following properties.

1. Every infinite \(D\subseteq V\) is a transversal of infinitely many \(\mathcal H_j\).
2. There is no finite \(K\) and no infinite pairwise disjoint family of blockers \(B_j\) with \(|B_j|\le K\) for distinct targets.
3. For every fixed finite anchor \(T\subseteq V\), the anchored blocker liminf is finite, but these liminf values are unbounded as \(T\) grows.

### Proof

Write an infinite set \(D\) as

\[
D=\{d_1<d_2<\cdots\}.
\]

Start with \(d_1\). Take the block of the first \(d_1\) elements of \(D\). It has cardinality \(d_1\) and minimum \(d_1\), so it lies in \(\mathcal S\). Remove that finite block and repeat on the remaining infinite tail. This constructs infinitely many pairwise disjoint members of \(\mathcal S\) contained in \(D\). Hence \(D\) transverses infinitely many \(\mathcal H_j\).

Now fix \(K\). Any blocker for \(\mathcal H_j\) must contain every vertex of \(F_j\), because the edges are singletons. Therefore a blocker of size at most \(K\) can exist only when

\[
|F_j|=\min F_j\le K.
\]

Every such \(F_j\) contains its minimum, which lies in \(\{1,\ldots,K\}\). A pairwise disjoint family of such sets can therefore contain at most \(K\) members. No infinite bounded disjoint blocker family exists.

Finally, protect the first \(M\) vertices,

\[
T_M=\{1,\ldots,M\}.
\]

Any target whose blocker avoids \(T_M\) has minimum at least \(M+1\), hence blocker size at least \(M+1\). There are infinitely many members of \(\mathcal S\) with minimum exactly \(M+1\) and avoiding \(T_M\), so the corresponding anchored liminf is \(M+1\). Thus every fixed anchor has finite recurring blocker size, but the required size grows without bound with \(M\). ∎

This abstract model reproduces exactly the logical gap between Proposition 5.1 and the Wandering Blocker Conjecture.

So there is no generic compactness argument waiting to be written down. A proof for additive bases must use facts that the Schreier model lacks: all hyperedges come from equal-sum representations of one integer, the vertex labels are ordered nonnegative integers, edge supports have additive geometry, and target size constrains every participating vertex.

The model is also a blueprint for a counterexample. To disprove \(\mathrm{WBC}_h\), one would try to encode a Schreier-like escalating barrier into actual additive representation hypergraphs.

## 12. The exact counterexample profile

Suppose \(A\) is infinite-deletion minimal of order \(h\) but violates \(\mathrm{WBC}_h\). Then all of the following must hold simultaneously.

First, every fixed finite anchor has some bounded obstruction recurring infinitely often:

\[
\forall T\subseteq A\text{ finite},
\qquad
\liminf_n\tau_{h,T}^A(n)<\infty.
\]

Second, there is no uniform bound. For every \(K\), there exists a finite anchor \(T_K\subseteq A\) and a threshold \(N_K\) such that

\[
n\ge N_K
\quad\Longrightarrow\quad
\tau_{h,T_K}^A(n)>K.
\]

Third,

\[
r_{A,h}(n)\to\infty.
\]

Fourth,

\[
A(x)/x^{1/h}\to\infty.
\]

Fifth, \(A\) cannot be ordinarily minimal, because ordinary minimality gives width one.

Sixth, its obstruction family cannot behave like the fixed-\(t\) Erdős–Nathanson construction, where bounded blockers are explicitly scheduled throughout the basis.

This is a much narrower search space than “find a strange minimal basis.” A genuine counterexample requires **escalating finite obstruction**: once a finite collection of low-complexity troublemakers has been protected, every late target must require a larger free hitting set, but another finite bound must reappear if that newly enlarged anchor is held fixed forever.

The blocker size must climb with the anchor without ever diverging for a fixed anchor.

That moving staircase is the phenomenon to search for.

## 13. Relation to the first anchored-matching conjecture

The previous paper proposed the Anchored Representation Matching Conjecture for Erdős #881. Its prediction is cross-order:

- at order \(h\), infinite-deletion minimality prevents anchored matching width from tending to infinity for every fixed finite anchor;
- at order \(h+1\), some finite anchor should make the matching width tend to infinity.

The current conjecture sharpens the first bullet in a different direction. It predicts that the order-\(h\) failures can be witnessed by a **uniformly bounded** sequence of disjoint blockers.

If both conjectures are true, an infinite-deletion-minimal basis has a particularly clean two-level geometry:

\[
\text{order }h:
\quad
\text{bounded local obstructions wander forever},
\]

while

\[
\text{order }h+1:
\quad
\text{after one finite core is protected, obstruction size diverges}.
\]

That would be a genuine blocker phase transition between consecutive additive orders.

The present paper does not claim that \(\mathrm{WBC}_h\) alone resolves #881. Its value is diagnostic. It asks whether the same-order fragility hypothesis has a uniform finite skeleton before one attempts the harder cross-order deletion.

## 14. Finite computation that can falsify the right thing

A finite computation cannot prove an infinitary uniformization conjecture. It can, however, search aggressively for the signature a counterexample would need: anchor escalation.

Let

\[
A_N=A\cap[0,N],
\]

choose a target window

\[
I=[L,U]
\]

with \(U\le N\), and fix an anchor budget \(t\).

Define the **finite anchor-escalation profile**

\[
E_h(A_N;I,t)
=
\max_{\substack{T\subseteq A_N\\|T|\le t}}
\ \min_{\substack{n\in I\\n>h\max T}}
\tau_{h,T}^{A_N}(n).
\]

The condition \(n>h\max T\) prevents a finite anchor from supporting a target representation all by itself.

The statistic asks an adversarial question. We protect the finite anchor that makes future blocking hardest; an adversary then chooses the easiest target in the window. A model hostile to the Wandering Blocker Conjecture should make

\[
E_h(A_N;I,0),
E_h(A_N;I,1),
E_h(A_N;I,2),\ldots
\]

rise as the anchor budget grows, and should reproduce that rise in later windows rather than only near the origin.

A second finite statistic imitates deletion fragility. For a deletion size \(q\), measure the fraction of \(q\)-subsets \(D\subseteq A_N\) for which some target in \(I\) loses every representation after deleting \(D\). This is not a finite equivalent of infinite-deletion minimality. It is a pressure term used to keep the search from finding high-escalation sets that are simply robust under deletion.

The companion program

`papers/code/wandering_blocker_search.py`

computes these quantities exactly for small models. It uses no external packages.

For fixed \(A_N,T,n\), it enumerates the distinct free supports of all nondecreasing \(h\)-term representations. It then solves the finite transversal problem exactly by increasing blocker size until it finds a hitting set. The search mode enumerates finite candidate bases, rejects those that fail to cover the target window, computes the anchor-escalation profile, computes a finite deletion-fragility score, and ranks the surviving models by hostility.

The goal is not to collect positive examples. It is to find a small finite object whose blockers begin to imitate the Schreier barrier.

If one appears, enlarge the window and ask whether the pattern survives.

## 15. What a machine-search loop should do

The useful loop is adversarial and repetitive.

Begin with a finite basis model that covers a late interval. Compute the smallest blockers for every target. Identify the blocker elements that recur most often and promote them into the anchor. Recompute. If blocker size stays bounded, promote the new recurring core and repeat. The interesting models are the ones where the minimum recurring blocker size rises after each promotion.

Then inspect the arithmetic cause. Does the model enforce residue gates? Are blockers concentrated near one scale? Do they come from repeated summands? Are they artifacts of the finite boundary? Does the escalation survive translation to a later target interval?

The machine contribution is not “discover a theorem from data.” It is narrower and more useful: mine exact finite certificates for the obstruction pattern a counterexample is forced to exhibit.

If the search repeatedly fails to produce anchor escalation under increasingly permissive finite constraints, the failed models are also information. Their failure modes suggest lemmas: perhaps every low-rank blocker can be absorbed into a finite congruence core, or perhaps equal-sum geometry forces a new bounded blocker to appear outside the anchor.

Those are statements a proof assistant can eventually formalize.

## 16. A proof program

There are four natural routes.

### 16.1 Uniformize the anchor bound directly

Proposition 5.1 gives, for every finite \(T\), some finite number

\[
K(T)=\liminf_n\tau_{h,T}^A(n).
\]

Prove that additive structure prevents \(K(T)\) from becoming arbitrarily large.

A theorem of the form

\[
K(T)\le F(h)
\]

for all finite \(T\) would prove the conjecture outright. Even a bound depending on a fixed arithmetic invariant of \(A\) would be substantial.

### 16.2 Prove that anchor escalation forces a safe deletion

Assume there are anchors \(T_1\subset T_2\subset\cdots\) with

\[
\liminf_n\tau_{h,T_j}^A(n)\to\infty.
\]

Try to diagonalize across the anchors and construct an infinite deletion that remains safe. The first sparse-deletion theorem handles one anchor whose blocker number tends to infinity. Here the difficulty is that only the *liminf bound after changing anchors* grows.

The Schreier countermodel shows that this diagonal statement is false for arbitrary hypergraphs. The missing input must be arithmetic.

### 16.3 Classify low-rank additive blockers

For fixed \(K\), classify the ways an \(h\)-representation hypergraph can have transversal number at most \(K\) for infinitely many targets.

If every persistent bounded blocker is forced into one of finitely many arithmetic templates, then anchoring those templates may either terminate with a uniform bound or force the matching width to diverge, producing a safe deletion.

### 16.4 Try to build an additive Schreier barrier

A negative result should be explicit. Construct an order-\(h\) asymptotic basis whose target blockers behave like

\[
|B|\approx \min B
\]

or another escalating barrier law, while every infinite deletion still contains blockers for infinitely many targets.

The equal-sum constraint is the difficulty. A finite hypergraph can be prescribed freely; an additive representation hypergraph cannot. Every edge must arise as the support of an \(h\)-tuple with the same sum.

A successful construction would be interesting even apart from this conjecture because it would exhibit a new kind of globally fragile, locally increasingly redundant additive basis.

## 17. Novelty audit

The priority claim here should be kept narrow.

### Clearly prior

Finite transversals and blockers are standard hypergraph notions.

Necessary subsets and ordinary minimal additive bases are classical. Essential subsets, which destroy the basis property at every order and are minimal with that property, have an extensive literature including Deschamps–Farhi and Hegarty.

Erdős and Nathanson's 1989 paper is especially close conceptually. It constructs order-\(2\) bases for which every finite deletion is harmless and every infinite deletion is fatal, and its proof explicitly schedules finite obstruction sets.

Thin bases and their optimal \(x^{1/h}\) counting scale are classical, going back to Raikov and Stöhr and developed extensively afterward.

The relationship between representation growth and robustness remains active. Daniel Larsen's 2026 work separates several natural robustness properties for order-\(2\) bases, while Jin-Hui Fang's 2026 construction shows that an ordinary minimal basis can have very large representation multiplicity away from sparse critical targets.

### Not located in the searched literature

I did not locate a prior formulation of the following package:

1. the wandering blocker width \(\operatorname{wb}_h(A)\);
2. its exact equivalence with
   \[
   \sup_T\liminf_n\tau_{h,T}^A(n);
   \]
3. the conjecture that infinite-deletion minimality forces this supremum to be finite;
4. the observation that failure forces both
   \[
   r_{A,h}(n)\to\infty
   \]
   and
   \[
   A(x)/x^{1/h}\to\infty;
   \]
5. the use of a Schreier-type hypergraph barrier to show that the uniformization cannot be purely compactness-theoretic.

The elementary averaging argument for thin bases is not advertised as a deep new theorem in isolation. Its role is to remove an entire density regime from the conjectural counterexample space.

Searches included combinations of “necessary subset,” “essential subset,” “minimal asymptotic basis,” “infinite deletion,” “blocker,” “transversal,” “pairwise disjoint necessary subsets,” “representation hypergraph,” and recent papers on robust and minimal additive bases. The 1989 Erdős–Nathanson proof and current 2026 work were inspected directly.

Before journal submission, the terminology and invariant should be checked against MathSciNet and zbMATH and circulated to specialists. The safe claim is that this note formulates and develops a uniform finite-obstruction invariant for the infinite-deletion hypothesis; it is not a claim that blockers, transversals, or finite necessary sets themselves are new.

## 18. What would count as a resolution

The conjecture has a clean positive and negative endpoint.

A positive resolution proves that every infinite-deletion-minimal order-\(h\) basis has

\[
\operatorname{wb}_h(A)<\infty.
\]

The strongest version would give a bound depending only on \(h\):

\[
\operatorname{wb}_h(A)\le F(h).
\]

That would turn global deletion fragility into a uniformly finite local obstruction theorem.

A negative resolution constructs an explicit asymptotic basis \(A\) of order \(h\) such that every infinite deletion destroys the basis and yet

\[
\operatorname{wb}_h(A)=\infty.
\]

By the results above, such a construction must have

\[
r_{A,h}(n)\to\infty
\]

and

\[
A(x)/x^{1/h}\to\infty,
\]

must not be ordinarily minimal, and must realize an additive analogue of anchor escalation.

There is also a useful intermediate outcome: prove the conjecture for \(h=2\), for a natural class of bases, or under a structural hypothesis that can later be weakened. The exact anchor formula means every such theorem can be stated as a quantitative uniform bound.

## 19. Conclusion

Infinite-deletion minimality says that every infinite set of removed elements eventually hits all representations of infinitely many targets. That statement alone does not tell us what the finite local obstruction looks like.

The classical examples suggest a simple answer: the obstruction can wander. One finite set kills one target, another disjoint finite set kills another, and the size of those sets never needs to grow.

The Wandering Blocker Conjecture says this is not an accident of known constructions. It predicts that every globally fragile additive basis has a uniformly finite obstruction skeleton:

\[
\boxed{
\text{every infinite deletion is fatal}
\quad\Longrightarrow\quad
\text{bounded blockers wander through infinitely many disjoint locations.}
}
\]

The anchored formula makes the missing step precise. Infinite-deletion minimality already gives finite obstruction after every fixed anchor. The conjecture asks whether additive arithmetic upgrades those pointwise bounds to one uniform bound.

The Schreier barrier shows exactly how this can fail in abstract set systems. The thin-basis theorem, the representation-growth obstruction, ordinary minimal bases, and the Erdős–Nathanson construction show how much arithmetic territory already lies on the positive side.

A counterexample now has a recognizable shape. It must be dense beyond the thin scale, have representation multiplicity tending to infinity, remain fatal under every infinite deletion, and regenerate larger finite blockers whenever the previously visible obstruction is protected.

That is a finite pattern one can search for, and an arithmetic pattern one can try to rule out.

## References

1. T. F. Bloom, **Erdős Problem #881**, Erdős Problems: https://www.erdosproblems.com/881

2. S. H. Benson, **Anchored Representation Matchings and Sparse Deletion in Additive Bases**, working paper in this repository: https://github.com/Svyable/desk/blob/main/papers/anchored-representation-matchings.md

3. P. Erdős and M. B. Nathanson, **Additive bases with many representations**, *Acta Arithmetica* 52 (1989), no. 4, 399–406. DOI: https://doi.org/10.4064/aa-52-4-399-406 . Public PDF: https://www.theoryofnumbers.com/melnathanson/pdfs/nath1989-74.pdf

4. P. Erdős and M. B. Nathanson, **Minimal asymptotic bases for the natural numbers**, *Journal of Number Theory* 12 (1980), 154–159. DOI: https://doi.org/10.1016/0022-314X(80)90048-7

5. M. B. Nathanson, **A new class of minimal asymptotic bases**, arXiv:2006.14562: https://arxiv.org/abs/2006.14562

6. B. Deschamps and B. Farhi, **Essentialité dans les bases additives**, *Journal of Number Theory* 123 (2007), 170–192. arXiv: https://arxiv.org/abs/0802.1205

7. P. Hegarty, **Essentialities in additive bases**, *Proceedings of the American Mathematical Society* 137 (2009), 1657–1661. arXiv: https://arxiv.org/abs/0802.2928

8. M. B. Nathanson, **Thin bases in additive number theory** / exposition of thin-basis constructions and bounds: https://www.theoryofnumbers.com/melnathanson/pdfs/nath2012-145.pdf

9. D. Larsen, **Three Questions of Erdős–Nathanson on Asymptotic Bases of Order 2**, arXiv:2603.03472 (2026): https://arxiv.org/abs/2603.03472

10. D. Larsen and M. Larsen, **Robust Additive Bases Without Minimal Subbases**, arXiv:2601.18507 (2026): https://arxiv.org/abs/2601.18507

11. J.-H. Fang, **On minimal asymptotic bases**, *Journal of Number Theory* 287 (2026), 16–30. DOI: https://doi.org/10.1016/j.jnt.2026.02.012

## Authorship and assistance disclosure

This research note is published under the name Sven Hardy Benson. The formulation and exposition were developed with AI-assisted literature search, adversarial proof checking, finite-model design, and drafting. The mathematical statements labeled as theorems or propositions are accompanied by proofs in the text; the Wandering Blocker Conjecture is explicitly conjectural. Responsibility for the final mathematical claims, priority language, citations, and publication belongs to the author.
