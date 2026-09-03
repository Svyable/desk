# Running On Full

| | |
|---|---|
| **Authors**   | Sven Hardy Benson |
| **Status**    | Drafting |
| **Chapters**  | 6 of 24 drafted |

*How to Get the Most of Your AI Compute*

The working thesis is that AI compute is not the hardware you rent or buy. It is the useful work that survives the trip from silicon to a real product: work completed at the required quality, latency, reliability, and cost. An accelerator can look busy while the system wastes money on memory stalls, oversized models, bloated context, bad batching, idle gaps, network waits, repeated prefixes, fragmented capacity, and work the user never needed in the first place.

*Running On Full* is an operational book about converting nominal AI capacity into useful output. It starts with inference because that is where queueing, context, batching, memory, model choice, and latency collide most visibly, then widens into training, clusters, networking, power, reliability, capacity planning, and the economics of owning versus renting accelerators.

This is deliberately not a second *Allocating Intelligence*, which is about routing cognition through institutions; not *Subsidized Intelligence*, which is about the capital and pricing system making AI cheap to users; not *Scaling Laws*, which is about how systems change as they grow; and not *Energy, Value & Intelligence*, which treats energy and intelligence as civilizational ledgers. This book stays close to the machine room. Its question is practical: given the compute you can actually get, how do you make less of it go to waste?

## Contents

- [x] [Front Matter](manuscript/front-matter.md)
- [x] [Ch 1 — The Empty Accelerator](manuscript/ch01-the-empty-accelerator.md)
- [x] [Ch 2 — Useful Work per Second](manuscript/ch02-useful-work-per-second.md)
- [x] [Ch 3 — The Memory Wall](manuscript/ch03-the-memory-wall.md)
- [x] [Ch 4 — Batch or Die](manuscript/ch04-batch-or-die.md)
- [x] [Ch 5 — The Long Context Tax](manuscript/ch05-the-long-context-tax.md)
- [x] [Ch 6 — Stop Using the Biggest Model](manuscript/ch06-stop-using-the-biggest-model.md)

## Planned chapters

7. Precision Is a Product Decision
8. Keep the Cache Hot
9. The Scheduler Is the Factory
10. Fragmentation
11. The Network Is Part of the GPU
12. Pipeline Bubbles
13. Data Is a Stage of Compute
14. Checkpointing the Clock
15. Power Is Capacity
16. Model Architecture Is Infrastructure
17. Speculate
18. Rent, Buy, or Burst
19. Capacity Planning Without Fantasy
20. Measure the Queue, Not the GPU
21. Reliability Is Utilization
22. The Last Ten Percent
23. When Faster Is More Expensive
24. Running On Full

## Research

- [Research brief and falsification notes](research/README.md)
- [Source ledger](research/source-ledger.csv)

## Rights

- [Rights & permissions](RIGHTS.md)
