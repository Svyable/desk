# Token Intelligence Board

## The ≤10-token frontier: mathematical packets with civilizational reach

**Sven Hardy Benson · Desk working think file · 14 October 2026**  
**Status:** living research notebook; founding leaderboard + testable research programme. Not a proof of global minimality or mathematical priority.

> Find the smallest true packet that changes the largest number of decisions. Then count the information hidden in its decoder.

Euler's identity is the obvious poster child. But it is not a three-token theorem under a fair textual accounting rule. The string is short because `exp`, `i`, `pi`, arithmetic, complex exponentiation, and equality already mean something. The information is distributed across an expression and a learned language. Someone can make *any* theorem one token long by calling it `T`; that is a naming trick, not intelligence compression.

The project is to build a **public, adversarially scored leaderboard** of ultra-compact statements whose consequences are disproportionate to their written size—and to produce new, falsifiable submissions instead of recycling famous formulas.

**Operating distinction:** a mathematical identity can be exact; its historical impact is a judgment; its minimum description length depends on notation and decoder; its novelty is a research claim requiring external priority work.

## 1. The measuring apparatus

**Packet grammar v0.1.** The board counts *lexical mathematics tokens*, not GPT/BPE tokens and not bytes. For each **canonical string**, apply this regex, in order:

```python
r"<=>|->|=>|<=|>=|!=|[A-Za-z_][A-Za-z0-9_]*|[0-9]+|[^\s]"
```

Identifiers (`hbar`, `exp`, `ta`, `va`) count as one each; ASCII compound operators count as one; Unicode math characters count one per character; parentheses, punctuation, arithmetic signs and comparison signs each count. No implicit multiplication in the canonical form. `exp(i*pi)=-1` is the canonical Euler entry; the standard printed form `e^(iπ)+1=0` is a rendering, *not* what is counted.

**Three separate measurements:**

1. **Surface length L:** lexical-token count of the canonical string (the only threshold for the ≤10 wall). Independently record UTF-8 bytes and counts from explicitly named model tokenizer/version when measured. Never confuse them.
2. **Decoder debt D:** a qualitative 0–5 audit of borrowed definitions, assumptions, notation and proof machinery; 0 means familiar elementary symbols, 5 means specialist semantics. A dictionary of a new one-letter alias for a long theorem is not free.
3. **Reach R:** a provisional 1–5 expert judgment about breadth of testable consequences and actual applications—not an objectively known quantity. A catchy slogan with no conditions does not get mathematical credit.

A meaningful *shortest-knowledge* competition ultimately minimizes `L(packet)+L(decoder|shared grammar)+L(conditions)+L(verifier)`. For now we display L and make debt visible. Ties in token count are editorial, not mathematically resolved.

### Leaderboard, version 001

| Rank | Canonical packet | L | Reach / 5* | Debt / 5* | What it buys; indispensable conditions | Provenance |
|---:|---|---:|---:|---:|---|---|
| 1 | `ΔS>=0` | **4** | 5 | 4 | Second law for entropy change of an **isolated** system in appropriate thermodynamic description; not every subsystem | Classical thermodynamics |
| 2 | `F=m*a` | **5** | 5 | 2 | Newton's second law for constant mass in an inertial frame; more general momentum form is `F=dp/dt` | Classical mechanics |
| 3 | `∇·B=0` | **5** | 5 | 4 | Magnetic Gauss law in standard Maxwell electromagnetism; `B` is a vector field | Maxwell |
| 4 | `E=m*c^2` | **7** | 5 | 3 | Rest energy for mass `m`; not the total energy of an arbitrary moving object | Einstein |
| 5 | `a->b=>ta<tb` | **7** | 5 | 4 | Lamport scalar clock condition; converse **false** | Lamport (1978) |
| 6 | `a->b<=>va<vb` | **7** | 5 | 5 | Standard vector clocks characterize happened-before, with componentwise strict partial order and complete event updates | Fidge–Mattern, later than Lamport |
| 7 | `V-E+F=2` | **7** | 4 | 3 | Euler characteristic for connected convex polyhedra / sphere topology; not every surface | Euler |
| 8 | `exp(i*pi)=-1` | **9** | 5 | 3 | Euler's complex-exponential identity, conventionally `e^(iπ)+1=0` | Euler |
| 9 | `H=-Σp*log(p)` | **10** | 5 | 5 | Shannon entropy over a finite discrete probability distribution, with `Σ` over outcomes and consistent log units | Shannon (1948) |
| 10 | `I(H;D|S)=0` | **10** | 5 | 5 | Criterion for a summary `S` to preserve all information in `D` about target `H`; not true of arbitrary summaries | Conditional independence / sufficient statistics |

*Reach and debt are **editorial hypotheses**, not observed scores. The ordering is primarily ascending L. Entries #5, #6, and #10 are **conditional propositions** with surrounding assumptions, not universal identities. This list is not exhaustive: familiar expressions such as `E=h*f`, `PV=nRT`, and `pV=nRT` are contenders. We have not proved that any packet is the minimal expression of its underlying theorem.*

**Notation license:** `a->b` means event `a` happened-before event `b` (Lamport relation), **not** material implication; `ta,tb` are scalar logical timestamps. `va,vb` are the respective **vector** timestamps. In `va<vb`, vector comparison means all coordinates ≤ and at least one strictly <. `H` is a random variable of interest in row 10, whereas `H` denotes entropy in row 9; notation is local to an entry. `I(H;D|S)` uses conditional mutual information. `S` in row 1 is thermodynamic entropy and in row 10 is a compressed summary.

### Why the Lamport pair matters

A scalar timestamp can encode a causality-preserving *linear extension* but not infer all causality: `ta<tb` does **not** imply `a->b`. Two concurrent events may have different timestamps. Vector timestamps, maintained according to their update protocol, admit the biconditional: causal before **if and only if** vector less-than. The packet's seven tokens hide a distributed algorithm and a definition of partial order. That is exactly why counting decoder debt matters.

## 2. A genuinely useful frontier: decision-safe knowledge compression

We can start asking for a better kind of packet—not just a short equality, but a short **verified guarantee about an action**.

Let:
- `H` be a finite-valued unknown target or state of the world;
- `D` be full evidence and `S` a possibly randomized summary produced only from `D`, i.e. the Markov chain `H -> D -> S`;
- `ℓ(a,h)∈[0,1]` be a bounded loss for an action `a`;
- `R_D` be optimal expected Bayes loss when decisions see `D`;
- `R_S` be optimal expected Bayes loss when decisions see only `S`;
- `ΔR := R_S-R_D`, the penalty incurred by compression;
- `I := I(H;D|S)` in **nats** (natural logarithms).

### Candidate C1: nine-token decision-loss bound

```text
ΔR<=sqrt(I/2)       # 9 lexical tokens
```

**Status: PROVEN DERIVED COROLLARY, NOT NOVEL MATHEMATICS.** This follows from known Bayes decision theory, conditional KL divergence, Pinsker's inequality and Jensen's inequality. The potential original contribution is a *packet-based, testable specification for loss-bounded agent memory and handoffs*, not a claim to have invented Pinsker or data processing. The bound is conservative; it is often far from tight. In the zero-information-loss case, it yields the exact guarantee `ΔR=0`.

**Lamport-style structured proof sketch:**

〈1〉1. For any posterior `P` over `H`, define `b(P)=inf_a E_P[ℓ(a,H)]`. Bounded loss gives `|b(P)-b(Q)|<=TV(P,Q)`, where `TV` is total variation.  
〈1〉2. Condition on `(D=d,S=s)`. Because `S` is generated from `D`, the full-information posterior is `p(H|d)`. Therefore `ΔR=E[b(p(H|S))-b(p(H|D))]<=E[TV(p(H|D),p(H|S))]`.  
〈1〉3. Pinsker, with KL in nats, gives `TV(P,Q)<=sqrt(KL(P||Q)/2)`.  
〈1〉4. Concavity of square root (Jensen) gives `ΔR<=sqrt(E[KL(p(H|D)||p(H|S))]/2)`.  
〈1〉5. The expectation in 〈1〉4 equals `I(H;D|S)` for the Markov summary channel. QED.

**Do not quietly weaken these premises:** `S` may not have an additional secret side channel from `H`; the bound is on *Bayes-optimal expected* loss, not the realized regret of a particular incompetent agent; the downstream action model and loss must be specified; loss range is [0,1], not an arbitrary dollar scale.

**Two exact tests:** (a) If `D=(H,N)` and `S=H` for an independent nuisance bit `N`, then `I=0` and `ΔR=0`. The summary discards half the original data with zero task loss. (b) If `H` is one fair bit, `D=H`, `S` is constant and actions guess H under 0–1 loss, then `ΔR=1/2`, `I=ln 2` nats, and the bound is `1/2 <= sqrt(ln 2/2)` (~0.589).

**Operational proposal:** An AI research agent may compress a long dossier to a compact memory only against an explicit target and loss model. It must attach a summary, provenance, applicability conditions, and an empirical test of retained decision quality. Never promise universal semantic preservation from a few attractive tokens.

### Candidate C2: the universal-question obstruction

```text
b>=n                # 3 lexical tokens
```

**Scope:** An encoder takes an arbitrary `n`-bit record `D` into a fixed `b`-bit summary. A downstream decoder must, with zero error, answer **every** Boolean question `q(D)` for every possible `D` using only the summary and q. Then `b>=n`.

**Proof:** If `b<n`, pigeonhole gives distinct records `d,d'` with the same summary. Choose a Boolean question with `q(d)≠q(d')`. A decoder given that same summary cannot answer both correctly. Contradiction.

**Status: elementary counting theorem, not new.** But its placement directly beside C1 is research-useful: **tiny sufficient memory is task-specific; task-universal losslessness is expensive**. Calling `b>=n` a three-token law without printing the premise would be precisely the decoder trick this board is meant to catch.

### Candidate C3: the finite-evidence boundary from Desk

```text
∂P=X                # 4 lexical tokens
```

Under the discrete product topology on `X=A^I` and a **nontrivial property P invariant under every finite coordinate change**, every finite evidence cylinder intersects both P and its complement. Thus the topological boundary of P is all X. This is a compressed **consequence**, not an independently novel identity.

**Scope exception:** The relevant space requires enough unseen coordinates for the splice argument; the hypothesis of nontrivial finite-change invariance itself rules out a nontrivial finite-coordinate product. Original development: [The Finite-Evidence Boundary](finite-evidence-boundary.md).

**Structured proof:** Choose `u∈P`, `v∉P`. Given finite observed coordinates `F` and specified data `d|F`, replace only coordinates of `u` and `v` on `F` with `d|F`. Invariance preserves membership and nonmembership. Every basic open cylinder therefore meets both sets. Both are dense, so `∂P=X`.

**Research question:** Can a practical AI verification benchmark classify *which* claims are immune to finite decisive evidence, and abstain for logical—not merely statistical—reasons? This would connect a four-token statement to a hard operational limit on agent confidence. The underlying topological machinery and finite-modification argument are classical; any claim of priority must target a genuinely new application or theorem.

### Candidate C4: deletion-barycenter identity (above the ten-token wall)

From [Convex Pattern Amplification Under Deletion](convex-pattern-amplification.md):

```text
U(S)=(1/|S|)*Σv U(S-v)
```

The precise mathematical form is `U(S) = (1/|S|) Σ_{v∈S} U(S\{v})` for a multi-order vector of normalized finite-subset U-statistics when `|S|` exceeds the largest kernel order. This yields a convex-potential nondecreasing deletion step via Jensen. The formula is **not** admitted to the ≤10 wall by abbreviation. Calling the right-hand side `avg` would shorten the display and enlarge the decoder debt, not reduce the mathematical content.

**Why it matters:** This is a bridge from exact combinatorial identities to deterministic selection. The next problem is to find a *genuinely lower-total-description-length* representation, not replace ten tokens with one macro.

## 3. Counterexample laboratory (how to keep the board honest)

**Test A — scalar clocks are not vector clocks.** Create two processes with one independent event each. Assign distinct Lamport timestamps. Then `ta<tb` may hold while `a->b` does not. Any submission claiming scalar-clock `<=>` fails.

**Test B — information can be synergistic.** Let independent fair bits `X,Y`, with target `H=X XOR Y`. Then `I(H;X)=I(H;Y)=0` individually, while `I(H;(X,Y))=1` bit. A memory compactor that scores evidence items separately can throw away the entire signal. A claim like “total usefulness equals the sum of token usefulness” fails.

**Test C — no oracle by declaration.** The packet `T` cannot enter as a one-token proof of a complicated theorem unless the cost of defining T is charged.

**Test D — empirical reach is not mathematical truth.** Claiming that `E=m*c^2` transformed technology is not the same as proving a ranking against `F=m*a`; keep impact evidence and mathematical validity in different columns.

**Test E — task shift.** `S=H` is sufficient for H and may be useless for a new target `G`. The packet has a specified prediction target and cannot silently promise universal preservation.

## 4. Research wager: the causal–semantic double lock

The pair

```text
a->b<=>va<vb        # 7 tokens: causal relationship, under vector-clock protocol
I(H;D|S)=0           # 10 tokens: task-relevant informational sufficiency
```

suggests a standard for multi-agent discoveries. An agent handoff should have **two independent audits**:

- **Causal audit:** When did this claim depend on that evidence, and which edits were concurrent? Vector clocks or explicit provenance graph can preserve the ordering of evidence and transformations.
- **Semantic audit:** Did summarizing the evidence discard anything needed for a stated target decision? Conditional independence gives a target-relative mathematical ideal; C1 gives a quantitative bound when exact zero is unavailable.

**Proposed protocol name: Proof-Carrying Packets (PCP, working label; not a claimed new primitive).** Packet fields: canonical formula; shared grammar and decoder reference; conditions and counterexamples; proof obligations; evidence provenance DAG; target decision/loss; dated priority/search status; cost in lexical tokens, bits and verification effort. A human or machine can recompute each score. A packet is not allowed to promote its own novelty status.

**Testable conjectural engineering hypothesis (NOT a mathematical theorem):** Agent teams exchanging proof-carrying, goal-sufficient summaries with explicit causal provenance can achieve lower review cost and fewer unsupported downstream conclusions than teams exchanging unstructured summaries at comparable bandwidth. Competing explanation: any improvement is just more careful human-written documentation. Test by randomizing teams/workflows, keeping task difficulty and bandwidth fixed, and measuring human-verified factual error, decision regret, time and provenance reconstruction fidelity.

## 5. Entry criteria and hostile review

Before adding an entry:

1. Supply the canonical expression and its tokenizer trace; maximum 10 lexical tokens for the main board.
2. Write the smallest **complete** statement of domain, quantifiers, units and assumptions. An isolated slogan is not a theorem.
3. Give a reproducible proof, authoritative theorem reference, or an explicit empirical test. Mark `proved`, `derived`, `conjecture`, `empirical`, or `refuted`.
4. Find the most damaging counterexample. Check edge cases: zero probability, empty sets, finite versus infinite, stochastic versus deterministic, locally versus globally valid.
5. Search for precedent. “I did not find it” is not “I invented it.”
6. List the fewest *necessary* dependencies in the decoder. Audit circular definitions and renaming tricks.
7. Score **reach** based on actual downstream consequences and applications, not elegance.
8. Keep a reproducible test record and a link to the result in a dated changelog.

**Open challenge:** Discover one ≤7-token expression with a nontrivial theorem and a materially useful new consequence **not obtainable by merely inventing a shorthand name**. The mathematical theorem must survive a specialist's review. Even if the theorem is known, a novel operational consequence can enter the **application** track if clearly labeled.

### Active workbench

| ID | Packet | Claim track | Validity | Priority | Next falsifier |
|---|---|---|---|---|---|
| C1 | `ΔR<=sqrt(I/2)` | Decision-safe agent memory | Derived / proved under assumptions | Classical bound; application unreviewed | Non-Bayes agent losses; side-channel violations |
| C2 | `b>=n` | Task-universal lossless compression lower bound | Elementary proved | Classical | Permit bounded errors or restricted query families |
| C3 | `∂P=X` | Finite evidence and undecidable-from-prefix truths | Existing Desk derivation / proved abstractly | Classical core; package priority unresolved | Remove finite-change invariance |
| C4 | Deletion barycenter | Deterministic structure selection | Existing Desk proof / above wall | Classical ingredients; package priority unresolved | Mixed kernel orders and boundary cases |
| C5 | `a->b<=>va<vb` | Causal preservation | Established conditional equivalence | Fidge–Mattern | Truncated vectors / dynamic membership |
| C6 | `I(H;D|S)=0` | Goal-conditioned compression | Established iff criterion | Standard information theory | Target shifts, approximate models |

**What would actually count as breaking ground:** a new lower bound for *joint* causal + decision sufficiency under a clearly specified distributed source model; a tight achievability construction; or a new class of problems where low-cost certificates and summaries can be proved enough for downstream decisions. Do not announce that result until there is a proof, experiments and precedent search.

## 6. Source and priority trail

- Leslie Lamport, [*Time, Clocks, and the Ordering of Events in a Distributed System*](https://www.microsoft.com/en-us/research/publication/time-clocks-ordering-events-distributed-system/), *Communications of the ACM* 21(7), 1978, 558–565, DOI [10.1145/359545.359563](https://doi.org/10.1145/359545.359563). Scalar clock implication; converse invalid.
- Vector-clock formulation and exact happened-before characterization: [Toronto distributed systems lecture notes](https://www.eecg.toronto.edu/~ashvin/courses/ece419/current/lectures/05-time.pdf); trace original Fidge/Mattern publications before making priority claims.
- Claude Shannon, [*A Mathematical Theory of Communication*](https://doi.org/10.1002/j.1538-7305.1948.tb01338.x), 1948. Entropy and information.
- [MIT 6.441 information theory notes](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5d8f16adc3385c9ff2975b121bd620e4_MIT6_441S16_course_notes.pdf), conditional mutual information, Markov chains, data processing.
- [Pinsker inequality lecture notes](https://maxim.ece.illinois.edu/teaching/fall15b/notes/minimax.pdf), KL/TV conversion used for C1; [Canonne's survey](https://github.com/ccanonne/probabilitydistributiontoolbox/blob/master/pinskers-and-beyond.tex).
- [NIST direct test of mass–energy equivalence](https://www.nist.gov/news-events/news/2005/12/einstein-was-right-again-experiments-confirm-e-mc2).
- [MIT Maxwell equations](https://www.mit.edu/~ashrstnv/maxwells-equations.html); [MIT second-law explainer](https://www.mit.edu/~ashrstnv/second-law-thermo.html).
- Desk working papers: [The Finite-Evidence Boundary](finite-evidence-boundary.md); [Sparse Generators and Representation Blockers](generator-blocker-principle.md); [Convex Pattern Amplification](convex-pattern-amplification.md). These are not claims of established novelty.

### Next research actions

**Immediate:** implement a token/decoder scorer with a frozen grammar; create 100+ candidate pool from mechanics, information, logic, biology and distributed computation; record source, counterexample and assumptions for each. Avoid ranking different disciplines by aesthetics alone.

**Priority problem A:** Define `b*(ε,ℋ)`, minimum summary bits needed to guarantee Bayes regret ≤ε for *all tasks in a specified family ℋ*, under a given source distribution. Find tight upper/lower bounds for simple dependent-agent DAGs; compare against known information bottleneck, rate-distortion, Blackwell sufficiency and communication-complexity literature before claiming novelty.

**Priority problem B:** Require causal auditability in addition to decision sufficiency. Determine when the extra provenance constraint forces a strict increase in `b*(ε,ℋ)`, and exhibit a minimal counterexample. Existing vector-clock space lower bounds may already constrain the problem; check them.

**Priority problem C:** Turn C1 into a benchmark: paired decision tasks, full evidence versus summaries, numerical conditional-information estimator (with uncertainty calibration), and post-hoc truth checks. Treat zero measured error as finite evidence, not universal proof.

The board is a challenge to discover more, not permission to call a familiar theorem ours.


---

## Edition 002 — When a few symbols describe hard limits

**14 October 2026 · additional research pass**

The original board collected compact laws and a quantitative regret bound for agent memory. This pass introduces three new collisions: **computation vs verification; task-specific vs task-universal compression; and causal auditability vs bandwidth**. The mathematical claims below are classical or elementary deductions. No priority claim is made for their underlying facts. The packaging into an adversarial knowledge-packet research programme is a proposed application.

### A. More ≤10-token contenders (tested under v0.1 tokenizer)

| Canonical expression | Tokens | Actual proposition, including domain | Status |
|---|---:|---|---|
| `P⊆NP` | **3** | Deterministic polynomial-time decidable languages admit nondeterministic polynomial-time decision procedures. Equality P=NP is **open**. | Established |
| `P⊆NP⊆PSPACE` | **5** | Polynomial-time computation is contained in nondeterministic polynomial-time computation, which is contained in deterministic polynomial space. | Established |
| `∂*∂=0` | **5** | The boundary operator on an oriented simplicial chain complex composed with itself is zero. | Established |
| `R>=1-h(e)` | **8** | For independent unbiased input bits, fixed binary summary rate R, reconstructed average Hamming-error rate e∈[0,½], and binary entropy h, every encoder-decoder satisfies this bound. | Established rate-distortion converse |
| `I(H;S)=0` | **8** | Example, **not universal proposition**: if H is XOR of n≥2 independent fair bits, then a summary of any proper subset of those bits has zero mutual information with H. | Established synergy example |
| `KL(P||Q)>=0` | **9** | Relative entropy is nonnegative for probability distributions P,Q (taking value +∞ if necessary). | Gibbs inequality |
| `∇·J+∂tρ=0` | **9** | In differentiable continuum descriptions, local conservation law for density ρ and current J, with ∂tρ denoting time derivative. | Continuity equation |
| `C(x)<=|x|+c` | **10** | **Plain** Kolmogorov complexity C of binary string x does not exceed its length plus a machine-dependent constant c. **Not the same as prefix-free K.** | Algorithmic information theory |
| `Q>=k*T*ln(2)` | **10** | Landauer lower bound for mean heat expelled to an isothermal reservoir when irreversibly resetting one initially unbiased, uncorrelated memory bit under standard assumptions (k = Boltzmann constant). Correlations, side information, free-energy and protocol details matter. | Thermodynamics of information |

The symbols' shortness is not their proof length. For `P⊆NP` the entire Turing-machine definition is decoder debt. For `∂*∂=0` the topological chain-group construction is decoder debt. The board explicitly rejects shorthand inflation of physical claims.

#### Two proofs that fit on a page

**A1 — Boundary of a boundary vanishes.** For an oriented triangle [a,b,c], its boundary is [b,c]−[a,c]+[a,b]. Apply ∂ again: ([c]−[b])−([c]−[a])+([b]−[a])=0. In any oriented simplex, each codimension-two face appears twice with opposite sign; linearity then gives ∂²=0 on the entire chain group. Its consequences include the possibility of defining homology as cycles modulo boundaries, since all boundaries are cycles. This statement does **not** say arbitrary derivatives of scalar functions square to zero; it is the chain boundary operator.

**A2 — Why KL cannot be negative.** If P is absolutely continuous relative to Q, write KL(P||Q)=E_P[log(P/Q)]. Jensen's inequality applied to −log gives KL(P||Q)≥−log E_P[Q/P]≥0 (the last expectation is ≤1, allowing Q-support outside P-support). Equality iff P=Q almost everywhere. If P has mass where Q is zero, divergence is +∞. Natural logarithms give nats. This is Gibbs inequality, not a novel theorem.

### B. A surprising compression trilemma: zero local evidence, perfect global answer

Let X₁,…,Xₙ be independent uniform bits, n≥2, and H=X₁ XOR ... XOR Xₙ. For every single coordinate i, I(H;Xᵢ)=0. In fact, **every proper subset** of the n bits carries zero information about H: conditioning on those bits leaves at least one independent fair bit to toggle the parity. But I(H;X₁,…,Xₙ)=1 bit.

There are two opposite compressions:

- S=H retains the target answer perfectly in **one bit**, despite forgetting almost all features; I(H;D|S)=0 when D=(X₁,…,Xₙ).
- S=(X₁,…,Xₙ₋₁), the first n−1 features, retains almost the *entire source*, but I(H;S)=0. It is useless for the parity target.

This is standard information synergy / secret-sharing logic, **not a new discovery**. But the operational lesson is unusually sharp: **a summary of n−1 source bits can be worthless for one task while a one-bit summary of all n is perfect**. It is a disproof of any unconditional "more retained features ⇒ more intelligence about every task" claim. It also cautions that unconditional pairwise independence is **not** privacy against someone with n−1 other features as side information.

**Tiny candidate packet:** `I(H;S)=0` — eight tokens; the exact assumptions supply its actual meaning.

**Executable mini-check:** enumerate all 2ⁿ binary inputs (n=2,…,6), compute parity, and verify that conditional parity distribution given any fixed proper subset is always (½,½). This is falsifiable and exhaustively checkable at those sizes; the elementary proof covers all n.

### C. Another wall: preserving *all bits* is categorically different from preserving *one answer*

Let X∈{0,1}ⁿ be independent fair bits. Encode X into a fixed-length b-bit summary and let the decoder produce a reconstruction with average bit error e≤½. Define normalized rate R=b/n and binary entropy h(e)=−e log₂(e)−(1−e)log₂(1−e).

**Eight-token theorem packet: `R>=1-h(e)`.**

〈1〉1. Fixed b bits have entropy at most b: H(S)≤b, hence I(X;S)≤b.

〈1〉2. The source has H(X)=n, thus b≥n−H(X|S).

〈1〉3. If the decoder's coordinate error probabilities are eᵢ, a binary form of Fano's inequality and conditioning give H(X|S)≤Σᵢ h(eᵢ).

〈1〉4. By concavity of binary entropy, Σᵢ h(eᵢ)≤n h(Σᵢ eᵢ/n)=n h(e).

〈1〉5. Combine and divide by n: R≥1−h(e). QED.

This is the classical converse for the fair Bernoulli source under Hamming distortion, not a new rate-distortion theorem. Operational achievability at the threshold is asymptotic, not a promise of finite-block optimal coding. At e=.1 it forces R≥.5310044 bits per source bit. This constraint holds because the goal is approximately to reconstruct **all** coordinates; it does not apply to the parity-only task in section B.

**The packet that matters:** *compression rate is a function of which questions the receiver must still answer*.

### D. New-to-this-notebook derived bound: the quadratic price of universal causal replay

We can prove an exact, sharp-for-the-family counting lower bound with no probabilistic approximation.

**Seven-token packet (k even):**

```text
b>=k^2/4
```

**Ten-token generalization (all integers k):**

```text
b>=floor(k^2/4)
```

**Interpretation:** b is the fixed-length binary description budget for a lossless encoder that must recover **every pairwise order relation** in any labeled, two-layer partial order on k events, where cross-layer relations are unconstrained. k≥2. This does not claim that all real distributed executions require this many bits; the lower bound is **worst-case over the constructed unrestricted family**. A simpler model can have far fewer possibilities and compress much better.

**Lamport-style finite proof:**

〈1〉1. Split the k labeled events into layers A and B of sizes floor(k/2) and ceil(k/2).

〈1〉2. For each ordered cross-layer pair (a,b)∈A×B, independently decide whether a precedes b. No within-layer order is allowed.

〈1〉3. Every selection of cross-layer precedences is a valid strict partial order: it is irreflexive and transitive, since no two nontrivial cross-layer edges concatenate.

〈1〉4. Different selections give different complete answers to pairwise precedence queries. The number of distinct such labeled orders is 2^(|A||B|)=2^floor(k²/4).

〈1〉5. An exactly decodable fixed-length b-bit representation has at most 2^b codewords, so it can represent all of them only when b≥floor(k²/4). QED.

**Checkpoints:** k=4 gives 2^4=16 possible orders, at least 4 bits. k=6 gives 2^9=512 possible orders, at least 9 bits. k=8 gives 2^16=65,536 possible orders, at least 16 bits. These are elementary counts. No claim of mathematical priority: the construction is a standard counting lower-bound argument for bipartite/two-level posets.

**Why this has bite:** If the user asks only "did event a precede b?", **one bit** can answer. If they might later ask *any* pairwise causal question about an unconstrained two-layer order, a worst-case Ω(k²) transcript is unavoidable. Exact auditability carries a query-dependent memory price just as decision accuracy does.

**Scope caution:** arbitrary mathematical two-layer posets are not automatically the exact set of realizable event histories under a fixed process/message protocol. To apply this to Lamport traces, first define the process model, allowed message transmissions, which events are recorded, and whether intermediate send/receive events count; then prove an embedding or derive a model-specific lower bound. Without that bridge, market it as a poset-encoding theorem, **not** a network-vector-clock lower bound.

### E. The actual frontier: causal + semantic sufficiency as a *query-family* problem

The apparent paradox dissolves once we specify the questions. Let D be full evidence. Let ℋ be a family of future decision questions and ℭ a family of causal/provenance queries. A summary S has to be sufficient only for the queries the receiver is required to answer.

Define a provisional research object:

```text
B*(e,ℋ,ℭ)
```

Meaning: the infimum (or minimum for finite encodings) of summary bits b needed for a specified source and encoding protocol to answer every target decision in ℋ with error at most e and every query in ℭ under an explicit causal-error requirement. The notation is a **proposal**, not yet a canonical theorem; as written, its definition still needs source distribution, loss conventions and separate causal error tolerance. A serious paper must refine it before deriving general claims.

The extremal demonstrations now fall into place:

- ℋ={parity}, ℭ=∅: one summary bit can suffice for n independent inputs.
- ℋ={all n coordinate-reconstruction tasks}, ℭ=∅: b/n≥1−h(e).
- ℋ=∅, ℭ={all pairwise precedence queries on two-layer k-event posets}, exact answers: b≥floor(k²/4).
- ℋ includes arbitrary Boolean queries of an unrestricted n-bit record, exact answers: b≥n by injectivity.

There is a **new project hypothesis**, not a novelty-certified theorem, hidden in those four cases: the best knowledge packet is not a universal synopsis of facts. It is a **minimal verified interface for a declared future query family**. This could become an actionable standard for agent memory, scientific provenance, research summaries and compressed audit logs. Compare existing work on sufficient statistics, Blackwell comparison of experiments, information bottleneck, rate-distortion, communication complexity, event structures and poset counting before claiming precedence.

### F. Adversarial tests for the next round

1. **Task flip:** A perfect parity summary S=H should become catastrophically inadequate if the next question is "what was X₁?" for n≥2 independent fair bits. Demonstrates non-universal sufficiency.
2. **Decoder alias trap:** The three-token packet `P⊆NP` cannot be scored as three *total* knowledge tokens when the complexity class definitions are absent from the decoder dictionary.
3. **Finite block:** At n=1, e=.1, R≥.531 is a valid bound but does not supply an actual ~0.531-bit fixed-length code. Asymptotic claims need limits.
4. **Causal model mismatch:** Simulate event histories, not arbitrary posets, before treating section D as a lower bound for a specific distributed protocol.
5. **Independent versus correlated erasure:** Side information, initial memory bias, correlations and thermal work accounting complicate a naive interpretation of `Q>=k*T*ln(2)`.
6. **Classical, not claimed original:** The causal counting proof is elementary. What might be original is a tight joint bound for a rigorously specified task+provenance query family or a measured application to AI agent handoff design.

### Sources and priority

- [Columbia CS theory notes on P and NP](https://www.cs.columbia.edu/~aho/cs3261/Lectures/L19-P_and_NP.html); [MIT algorithms lecture on P, NP, reductions](https://www.ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-16-complexity-p-np-np-completeness-reductions/).
- [Cover and Thomas, *Elements of Information Theory*, rate-distortion chapter](https://doi.org/10.1002/047174882X.ch10); [MIT fair-Bernoulli/Hamming rate-distortion example](https://sia.mit.edu/wp-content/uploads/2015/04/2004-martinian-wornell-allerton.pdf).
- [Information synergy and the XOR example](https://www.mdpi.com/1099-4300/26/8/708).
- [Physics Today, Landauer's eraser](https://physicstoday.aip.org/features/information-from-maxwells-demon-to-landauers-eraser); [Physical Review Research on finite-time erasure](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.023084).
- [Blackwell sufficiency and value of information](https://www.sciencedirect.com/science/article/abs/pii/S0165489603000040).
- [Wolpert & Macready, *No free lunch theorems for optimization*](https://research.ibm.com/publications/no-free-lunch-theorems-for-optimization), important caution about universal compression/optimization promises.

**State of the work:** the founding board and this pass supply known theorems, rigorously derived consequences and falsifiable research questions. The mathematical novelty challenge remains deliberately open. Next substantive result should be a theorem **about a specified query family** rather than an especially clever abbreviation of classical notation.
