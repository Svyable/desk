# Running On Full

| | |
|---|---|
| **Authors**   | Sven Hardy Benson |
| **Status**    | Revision in progress |
| **Chapters**  | 24 of 24 drafted |

*How to Get the Most of Your AI Compute*

The working thesis is that AI compute is not the hardware you rent or buy. It is the useful work that survives the trip from silicon to a real product: work completed at the required quality, latency, reliability, and cost. An accelerator can look busy while the system wastes money on memory stalls, oversized models, bloated context, bad batching, idle gaps, network waits, repeated prefixes, fragmented capacity, failed work, and work the user never needed in the first place.

*Running On Full* is an operational book about converting nominal AI capacity into useful output. It starts with inference because that is where queueing, context, batching, memory, model choice, and latency collide most visibly, then widens into training, clusters, networking, power, reliability, capacity planning, and the economics of owning versus renting accelerators.

This is deliberately not a second *Allocating Intelligence*, which is about routing cognition through institutions; not *Subsidized Intelligence*, which is about the capital and pricing system making AI cheap to users; not *Scaling Laws*, which is about how systems change as they grow; and not *Energy, Value & Intelligence*, which treats energy and intelligence as civilizational ledgers. This book stays close to the machine room. Its question is practical: given the compute you can actually get, how do you make less of it go to waste?

The complete 24-chapter structural pass is drafted and the manuscript has entered **Revision**. It is not a Complete draft yet. Publication status stays gated on depth, evidence, repetition, continuity, terminology, local Desk validation, and final release review.

## Contents

- [x] [Front Matter](manuscript/front-matter.md)
- [x] [Ch 1 — The Empty Accelerator](manuscript/ch01-the-empty-accelerator.md)
- [x] [Ch 2 — Useful Work per Second](manuscript/ch02-useful-work-per-second.md)
- [x] [Ch 3 — The Memory Wall](manuscript/ch03-the-memory-wall.md)
- [x] [Ch 4 — Batch or Die](manuscript/ch04-batch-or-die.md)
- [x] [Ch 5 — The Long Context Tax](manuscript/ch05-the-long-context-tax.md)
- [x] [Ch 6 — Stop Using the Biggest Model](manuscript/ch06-stop-using-the-biggest-model.md)
- [x] [Ch 7 — Precision Is a Product Decision](manuscript/ch07-precision-is-a-product-decision.md)
- [x] [Ch 8 — Keep the Cache Hot](manuscript/ch08-keep-the-cache-hot.md)
- [x] [Ch 9 — The Scheduler Is the Factory](manuscript/ch09-the-scheduler-is-the-factory.md)
- [x] [Ch 10 — Fragmentation](manuscript/ch10-fragmentation.md)
- [x] [Ch 11 — The Network Is Part of the GPU](manuscript/ch11-the-network-is-part-of-the-gpu.md)
- [x] [Ch 12 — Pipeline Bubbles](manuscript/ch12-pipeline-bubbles.md)
- [x] [Ch 13 — Data Is a Stage of Compute](manuscript/ch13-data-is-a-stage-of-compute.md)
- [x] [Ch 14 — Checkpointing the Clock](manuscript/ch14-checkpointing-the-clock.md)
- [x] [Ch 15 — Power Is Capacity](manuscript/ch15-power-is-capacity.md)
- [x] [Ch 16 — Model Architecture Is Infrastructure](manuscript/ch16-model-architecture-is-infrastructure.md)
- [x] [Ch 17 — Speculate](manuscript/ch17-speculate.md)
- [x] [Ch 18 — Rent, Buy, or Burst](manuscript/ch18-rent-buy-or-burst.md)
- [x] [Ch 19 — Capacity Planning Without Fantasy](manuscript/ch19-capacity-planning-without-fantasy.md)
- [x] [Ch 20 — Measure the Queue, Not the GPU](manuscript/ch20-measure-the-queue-not-the-gpu.md)
- [x] [Ch 21 — Reliability Is Utilization](manuscript/ch21-reliability-is-utilization.md)
- [x] [Ch 22 — The Last Ten Percent](manuscript/ch22-the-last-ten-percent.md)
- [x] [Ch 23 — When Faster Is More Expensive](manuscript/ch23-when-faster-is-more-expensive.md)
- [x] [Ch 24 — Running On Full](manuscript/ch24-running-on-full.md)
- [x] [Back Matter — Operator’s Field Manual](manuscript/back-matter.md)

## Publication path

1. Depth and manuscript-length audit; deepen compressed chapters rather than padding them.
2. Evidence and source-ledger audit for concrete technical claims.
3. Repetition, continuity, economics, and terminology revision passes.
4. Run `python3 scripts/check-desk.py` in a real checkout.
5. Reconcile Desk catalog/Reader/sitemap/feedback registrations against the latest `main` without overwriting concurrent work.
6. Promote from **Revision** to **Complete draft** only after those gates pass.

## Research

- [Research brief, falsification notes, and publication gates](research/README.md)
- [Source ledger](research/source-ledger.csv)

## Rights

- [Rights & permissions](RIGHTS.md)
