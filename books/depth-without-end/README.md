# Depth Without End

*How Recurrent AI Turns Time Into a New Dimension of Intelligence*

<!-- bookself-reader-links:start -->
**Reader links:** [Working edition · Desk Reader](https://svyable.github.io/desk/reader/#/b/depth-without-end/)
<!-- bookself-reader-links:end -->

| | |
|---|---|
| **Authors** | Sven Hardy Benson |
| **Status** | First complete draft |
| **Chapters** | 22 of 22 drafted |
| **Moment** | September 13, 2026 |

On September 12, 2026, Yifan Zhang posted a technical report with an audacious phrase in its subtitle: **latent reasoning with infinite temporal depth**. The phrase sounds like the sort of thing artificial intelligence is forever promising. The report itself is considerably more careful. Its Recurrent Looped Transformer does not perform infinite computation inside a token, and its preliminary evidence comes from small synthetic state-tracking experiments. What it proposes is stranger and more consequential: let each processed token inherit a recurrent hidden state from the token before it, so the computation path through a fixed decoder becomes deeper as the sequence gets longer.

*Depth Without End* is about that architectural bet and the larger research movement around it. The book follows the Transformer from its famous rejection of recurrence to Universal Transformers, weight sharing, recurrent depth, latent chain-of-thought, continuous thought, adaptive computation, fixed-point reasoning, and the new attempt to make recurrence cross the prompt–response boundary without resetting. It asks what happens if intelligence depends not only on how much a model knows or how many layers it owns, but on how long a useful internal state is allowed to keep changing.

The book does not assume the bet will work. RLT has not yet demonstrated large-scale reasoning gains. Recurrent computation creates sequential bottlenecks, long-gradient problems, state opacity, replay complications for reinforcement learning, and new ways for errors to become self-reinforcing. The strongest version of the competing explanation is simple: perhaps modern models need better data, objectives, search, tools, and test-time scaling—not a new recurrent state threaded through every token.

That uncertainty is the point. This is a book about a live architectural fork while the evidence is still arriving.

## Contents

- [x] [Front Matter](manuscript/front-matter.md)

### Part I — The Architecture That Came Back

- [x] [1. Yesterday's Paper](manuscript/ch01-yesterdays-paper.md)
- [x] [2. The Machine That Escaped Time](manuscript/ch02-the-machine-that-escaped-time.md)
- [x] [3. Recurrence Returns](manuscript/ch03-recurrence-returns.md)
- [x] [4. Time Becomes Depth](manuscript/ch04-time-becomes-depth.md)
- [x] [5. The State That Crosses the Line](manuscript/ch05-the-state-that-crosses-the-line.md)

### Part II — Thinking Where Words Cannot See

- [x] [6. Chain of Thought Is a User Interface](manuscript/ch06-chain-of-thought-is-a-user-interface.md)
- [x] [7. Continuous Thought](manuscript/ch07-continuous-thought.md)
- [x] [8. The Algorithm Learns to Iterate](manuscript/ch08-the-algorithm-learns-to-iterate.md)
- [x] [9. The Four-Times Test](manuscript/ch09-the-four-times-test.md)
- [x] [10. What a Token Knows](manuscript/ch10-what-a-token-knows.md)
- [x] [11. Memory Is Not Context](manuscript/ch11-memory-is-not-context.md)

### Part III — The Cost of a Longer Thought

- [x] [12. Training the Long Path](manuscript/ch12-training-the-long-path.md)
- [x] [13. The Replay Problem](manuscript/ch13-the-replay-problem.md)
- [x] [14. Hardware Hates Serial Things](manuscript/ch14-hardware-hates-serial-things.md)
- [x] [15. The Right Amount of Thought](manuscript/ch15-the-right-amount-of-thought.md)
- [x] [16. When the Loop Lies](manuscript/ch16-when-the-loop-lies.md)
- [x] [17. Looking Inside a Recurrence](manuscript/ch17-looking-inside-a-recurrence.md)

### Part IV — The Bet on Time

- [x] [18. More Depth Is Not More Intelligence](manuscript/ch18-more-depth-is-not-more-intelligence.md)
- [x] [19. The Brain Comparison We Should Resist](manuscript/ch19-the-brain-comparison-we-should-resist.md)
- [x] [20. From Parameters to Trajectories](manuscript/ch20-from-parameters-to-trajectories.md)
- [x] [21. The Benchmark That Could Kill the Idea](manuscript/ch21-the-benchmark-that-could-kill-the-idea.md)
- [x] [22. Depth Without End](manuscript/ch22-depth-without-end.md)
- [x] [Back Matter](manuscript/back-matter.md)

## Research trail

See [research/README.md](research/README.md) for the research brief and chapter map, [research/source-ledger.md](research/source-ledger.md) for primary and secondary sources, [research/falsification-notes.md](research/falsification-notes.md) for claims that could fail, and [research/editorial-review.md](research/editorial-review.md) for the whole-book first-draft review.

The initiating source is Yifan Zhang's September 12, 2026 *Recurrent Looped Transformer* report and project repository. Its stated goals and preliminary synthetic results are treated as proposal-level evidence, not as proof of large-model capability. Related work is separated by mechanism: classic sequence recurrence, recurrence across depth, latent-state feedback, adaptive computation, external memory, explicit chain-of-thought, and test-time search are not collapsed into one category merely because they all spend more computation over time.

## Rights

See [RIGHTS.md](RIGHTS.md) and [rights.json](rights.json). © 2026 Sven Hardy Benson. All Rights Reserved.
