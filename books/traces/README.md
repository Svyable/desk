# Traces

| | |
|---|---|
| **Author**    | Sven Hardy Benson |
| **Status**    | Drafting |
| **Chapters**  | 8 of 24 drafted |

*Tracking How Machines Learn*

A trained model is usually presented as a finished object: a file of weights, a benchmark score, an API endpoint, a version number. That view hides the most interesting part.

The model has a past.

It encountered examples in an order. Its parameters moved. Some examples mattered more than others. Some patterns appeared early and remained. Others arrived late. Some capabilities emerged abruptly after long periods in which the training loss gave little warning. Fine-tuning strengthened certain behaviors and weakened others. Safety training added new dispositions without necessarily erasing the old ones. Memorized sequences survived in places where broad averages suggested generalization. Checkpoints preserved intermediate states that later models no longer expose.

Those changes leave traces.

*Traces* argues that a machine-learning model should be studied not only as an architecture or an output generator, but as a **historical object**. We can often learn more by comparing what changed across time, data, checkpoints, objectives, and interventions than by inspecting a single finished model in isolation.

The book follows a new scientific habit that is emerging across otherwise separate fields. Training-dynamics researchers watch examples across epochs. Influence methods ask which training items most affected a prediction. Data-attribution systems trace outputs backward toward training data. Mechanistic interpretability researchers reconstruct circuits and information flow. Model-diffing tools compare representations before and after fine-tuning. Memorization studies recover particular training records from model behavior. Unlearning research asks what remains after a model is told, in effect, to forget.

These are often treated as different technical specialties.

The book treats them as parts of one larger idea:

> **Learning is change, and change leaves evidence.**

The claim is not that every influence can be reconstructed exactly. Deep learning is path-dependent, high-dimensional, stochastic, and only partially observable. Modern attribution methods are approximations. Interpretability tools can miss much of the computation they are trying to reveal. A model can generalize from many examples rather than copy one. Removing data after the fact does not always produce a clean reversal of training. The evidence is incomplete.

That incompleteness is part of the story.

A paleontologist does not need every organism that ever lived in order to infer that a world existed. A geologist does not need to watch a mountain rise to learn something from the strata. A software engineer does not reread an entire codebase after every change; the diff narrows attention to what moved. Machine learning is beginning to acquire its own versions of these habits.

*Traces* is about that shift: from asking only **what can the model do now?** to asking **how did the model become this particular thing?**

## Contents

- [x] [Front Matter](manuscript/front-matter.md)
- [x] [Ch 1 — The Model Has a Past](manuscript/ch01-the-model-has-a-past.md)
- [x] [Ch 2 — Every Update Leaves a Mark](manuscript/ch02-every-update-leaves-a-mark.md)
- [x] [Ch 3 — The Example Behind the Answer](manuscript/ch03-the-example-behind-the-answer.md)
- [x] [Ch 4 — Checkpoints Are Fossils](manuscript/ch04-checkpoints-are-fossils.md)
- [x] [Ch 5 — The Data Map](manuscript/ch05-the-data-map.md)
- [x] [Ch 6 — Easy, Hard, Ambiguous](manuscript/ch06-easy-hard-ambiguous.md)
- [x] [Ch 7 — The Moment a Circuit Appears](manuscript/ch07-the-moment-a-circuit-appears.md)
- [x] [Ch 8 — Grokking After the Test Is Already Passed](manuscript/ch08-grokking-after-the-test-is-already-passed.md)

## Planned chapters

9. Memorization Is a Scar
10. Generalization Has Ancestry
11. The Fine-Tuning Layer of History
12. Reward Leaves Residue
13. The Human Feedback Fossil
14. A Diff Between Minds
15. What Unlearning Cannot Erase
16. Catastrophic Forgetting
17. The Trace That Becomes a Privacy Leak
18. Who Owns the Training History?
19. Interpretability Becomes Archaeology
20. The Black Box Gets a Timeline
21. Models as Scientific Instruments
22. The Missing Checkpoint Problem
23. A Chain of Custody for Intelligence
24. The History Inside the Weight

## Working thesis

Machine learning is usually explained spatially. We draw layers, nodes, attention heads, tensors, embedding spaces, and circuits. We inspect the final geometry and ask where a concept lives or how information flows through the network.

That approach is indispensable, but incomplete. Learning is not a static arrangement. It is a process that unfolds through encounters.

A parameter is where it is because training moved it there. A representation exists because some mixture of data, initialization, optimization, regularization, curriculum, objective, and later tuning made it useful. A behavior can look instantaneous at inference time while carrying a long and sometimes recoverable history.

The central thesis of *Traces* is that the next stage of machine understanding will become increasingly **temporal and forensic**. Instead of treating the final model as the only evidence that matters, researchers, auditors, developers, and eventually regulators will care about the record of transformation:

- which examples repeatedly pushed the model in the same direction;
- when a capability first became detectable;
- which internal features appeared or disappeared after tuning;
- how much a particular dataset changed a class of outputs;
- which behaviors survive attempts to remove them;
- where memorization differs from abstraction;
- how model versions diverge;
- what evidence is lost when training histories and checkpoints are discarded.

The analogy to a software diff is useful but limited. Source code changes are discrete and human-readable. Neural learning distributes change across large parameter spaces, and two training runs can reach similar performance through different internal routes. The trace is therefore not a perfect audit log. It is a family of measurements that can narrow causal stories and expose changes that an end-state benchmark misses.

The important reversal is this:

For years, the finished model was treated as the valuable artifact and the training process as a costly means of obtaining it.

*Traces* asks what happens when the training history itself becomes valuable evidence.

## The book's lane

There are already excellent books explaining the mathematics of machine learning and the historical development of neural networks. *Why Machines Learn*, for example, makes the mathematical foundations of modern machine learning accessible to a general audience. *Traces* does not attempt to replace that work. It begins after the reader accepts that gradient-based systems can learn.

Its question is different: **what can we recover from the marks learning leaves behind?**

The manuscript is also distinct from Sven Hardy Benson's *Gradient Ascent*, which studies how optimization and synthetic abundance can make signal harder to recover in information systems. *Traces* stays inside the learning process itself. It is about evidence of transformation: training dynamics, attribution, checkpoints, model differences, memorization, forgetting, circuits, and the emerging possibility of reconstructing a model's developmental history.

It is distinct from *Source Code*, which argues that agents understand software by searching repositories for concrete traces of behavior. That book uses traces as an epistemic method for understanding code. This one asks whether trained models themselves can be understood the same way: not by trusting labels about architecture, but by following the evidence left by change.

## The reversal

A benchmark asks how a model performs after training.

A trace asks what happened during learning that made that performance possible.

A model card describes the artifact.

A trace can compare the artifact to its predecessor.

A training dataset lists what the model could have seen.

An attribution method asks what seems to have mattered for a particular behavior.

An interpretability map shows a mechanism now.

A developmental trace asks when that mechanism appeared and what changed around it.

These are not replacements for one another. They are different views of the same system.

The bet behind the book is that the historical view will matter more as models become harder to understand from outputs alone. When a model can pass thousands of evaluations, speak fluently about its own reasoning, and change behavior after small amounts of fine-tuning, the question of *where the behavior came from* becomes operational rather than philosophical.

## Research

- [Research brief, boundaries, and falsification notes](research/README.md)
- [Source ledger](research/source-ledger.csv)

## Rights

- [Rights & permissions](RIGHTS.md)
