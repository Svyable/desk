# After Pretraining

*How Machines Learn From Consequences—and Why Experience Is Becoming the New Training Data*

| | |
|---|---|
| **Authors** | Sven Hardy Benson |
| **Status** | Drafting |
| **Chapters** | 2 of 18 drafted |

For the first act of generative AI, the scarce input was text. Labs scraped, licensed, cleaned, filtered, and synthesized enormous corpora, then trained models to predict what came next.

That recipe produced systems that could write, code, translate, summarize, and answer questions. It also created a problem that more data alone could not solve. Prediction is not action. A model can learn the statistical shape of a good answer without learning how to persist through a long task, recover from failure, use tools, test a hypothesis, or discover a strategy that was not demonstrated in its training set.

*After Pretraining* is about the second education of artificial intelligence: reinforcement learning, verifiable rewards, interactive environments, replay, self-generated experience, and the increasingly aggressive attempt to let machines improve from consequences rather than from imitation alone.

The book begins with a September 2026 technical report whose most important claim is easy to miss inside the notation. KL-Regularized Policy Optimization proposes a critic-free, single-rollout route for training agents from terminal outcomes. It is one contribution in a much larger movement, but it makes the direction unusually visible: researchers are trying to remove the expensive scaffolding between an agent's action and the lesson extracted from what happened next.

The central thesis is not that data stops mattering. Experience is data. The shift is in how the useful data is produced. When a system can act, receive a consequential signal, preserve the trajectory, and update from it, the world itself begins to manufacture training material.

That changes the economics of AI. The bottleneck moves toward environments, verifiers, permissions, simulators, instrumentation, reward design, and access to real tasks whose outcomes can be measured. It also creates a darker problem: a system trained to maximize what can be scored may become very good at what was measurable and strangely bad at what mattered.

This book follows both halves of that story.

## Contents

- [x] [Front Matter](manuscript/front-matter.md)
- [x] [Ch 1 — One Rollout](manuscript/ch01-one-rollout.md)
- [x] [Ch 2 — The Imitation Machine](manuscript/ch02-the-imitation-machine.md)
- [ ] Ch 3 — Reward
- [ ] Ch 4 — The Critic
- [ ] Ch 5 — Games Without Teachers
- [ ] Ch 6 — Human Feedback
- [ ] Ch 7 — Verifiable
- [ ] Ch 8 — The Group Disappears
- [ ] Ch 9 — Experience Factories
- [ ] Ch 10 — Replay
- [ ] Ch 11 — The Environment Is the Dataset
- [ ] Ch 12 — What Cannot Be Scored
- [ ] Ch 13 — Reward Hacking
- [ ] Ch 14 — The Cost of Exploration
- [ ] Ch 15 — Agents in the Wild
- [ ] Ch 16 — Who Owns the Experience?
- [ ] Ch 17 — After Human Demonstrations
- [ ] Ch 18 — The Second Education
- [ ] [Back Matter](manuscript/back-matter.md)

## Research

- [Research trail and source map](research/README.md)
- [Book brief and chapter architecture](research/book-brief.md)
