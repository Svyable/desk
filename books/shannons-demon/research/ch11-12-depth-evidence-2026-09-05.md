# Chapters 11–12 depth evidence — 2026-09-05

This note records evidence and revision boundaries for the next entropy/Theseus depth pass. It supplements the canonical source ledger; it does not replace SD-031 through SD-034.

## Chapter 11 — The Measure of Uncertainty

### Primary publication record

Claude E. Shannon, “A Mathematical Theory of Communication,” *Bell System Technical Journal* 27 (1948), appeared in two parts: July 1948, pp. 379–423, DOI 10.1002/j.1538-7305.1948.tb01338.x; and October 1948, pp. 623–656, DOI 10.1002/j.1538-7305.1948.tb00917.x.

Use Shannon’s paper as the controlling source for entropy, source statistics, redundancy, channel capacity, and coding claims. The chapter should keep three distinctions explicit:

1. Shannon entropy measures uncertainty relative to a specified probability model; it is not a ranking of semantic value, truth, wisdom, or usefulness.
2. A coding theorem establishes an achievable limit under stated assumptions; it is not a promise that every finite implementation reaches the limit without latency, computation, synchronization, model, or estimation costs.
3. The formal relationship between information-theoretic and statistical-mechanical entropy does not license casual substitution between communication uncertainty and thermodynamic disorder.

### Revision opportunity

The current chapter already makes these distinctions correctly. A later prose pass should earn additional length by going deeper into conditional entropy and mutual information as observer-relative quantities, and by using a worked source-distribution example rather than adding more general warnings about metaphor. Avoid expanding the modern-machine-learning section unless a chapter-specific primary ML source is added.

## Chapter 12 — Theseus in the Maze

### Contemporaneous public account

*Time*, “Science: Mouse with a Memory,” May 19, 1952, describes Theseus at Bell Telephone Laboratories as a mechanical mouse whose effective “brains” were outside the mouse, under the maze, in a relay system. It describes movable maze partitions and a mouse body containing a magnet. This is useful contemporaneous evidence for the physical separation between visible agent and control machinery.

Use cautiously: *Time* is journalism, not Shannon’s technical specification. It is valuable because it is contemporaneous and because it supports the chapter’s systems-level point without requiring later AI terminology.

### Shannon’s maze-solving presentation

Claude E. Shannon, “Presentation of a Maze-Solving Machine,” was presented at the Eighth Conference on Cybernetics, March 15–16, 1951, and published in the conference transactions by the Josiah Macy Jr. Foundation. Bibliographic records identify the paper in Shannon’s collected-paper trail. This is the preferred primary target for algorithmic details of the maze solver.

Before asserting exact relay counts, exact search rules, forgetting behavior, or a modern algorithmic equivalence, inspect the primary presentation itself or a reliable facsimile. Do not rely on later hobbyist reconstructions for those details.

### Later technical context

Robert G. Gallager’s IEEE Information Theory Society article “Shannon, Euler, and Mazes” treats Shannon’s maze-solving machine as a deterministic search system and analyzes maze search formally. It is useful for later technical context, but its graph-theoretic analysis is Gallager’s, not a claim that Shannon framed Theseus in exactly those later terms.

### Revision opportunity

The current chapter’s strongest material is the distinction among exploration, memory, and generalization. Deepening should proceed through the actual mechanism and the cost of search, not through stronger ancestry claims about artificial intelligence. Preserve the boundary that Theseus adapted to a bounded maze task and did not thereby instantiate modern statistical learning.

## Falsification / restraint notes

- Do not call Theseus the first machine-learning system as an unqualified historical fact. Institutional and popular accounts use retrospective labels inconsistently.
- Do not say the mouse itself contained the intelligence; contemporaneous descriptions place the controlling relay machinery beneath the maze.
- Do not infer that Shannon intended Theseus as a demonstration of his 1948 entropy formalism merely because both concern uncertainty and stored information.
- Do not convert entropy into a metaphor for disorder, intelligence, knowledge, or meaning unless the text explicitly marks the move as metaphor rather than Shannon’s technical quantity.
- Do not attribute later cross-entropy practice, neural-network training, or modern AI architectures to Shannon beyond the documented mathematical lineage.

## Sources checked in this pass

- Claude E. Shannon, “A Mathematical Theory of Communication,” *Bell System Technical Journal* 27, July and October 1948. Wiley publication records: https://onlinelibrary.wiley.com/doi/10.1002/j.1538-7305.1948.tb01338.x and https://onlinelibrary.wiley.com/doi/10.1002/j.1538-7305.1948.tb00917.x
- “Science: Mouse with a Memory,” *Time*, May 19, 1952: https://content.time.com/time/subscriber/article/0,33009,816454,00.html
- Claude E. Shannon, “Presentation of a Maze-Solving Machine,” Eighth Conference on Cybernetics, 1951; bibliographic record for the 1952 conference-transaction printing: https://www.kuenzigbooks.com/pages/books/28979/claude-e-shannon/presentation-of-a-maze-solving-machine-xerox-copy-of-a-printed-paper
- Robert G. Gallager, “Shannon, Euler, and Mazes,” IEEE Information Theory Society: https://www.itsoc.org/bits/bits-article/shannon-euler-and-mazes
