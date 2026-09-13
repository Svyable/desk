# Depth Without End

*How Recurrent AI Turns Time Into a New Dimension of Intelligence*

**Sven Hardy Benson**

September 2026

There is a sentence in a technical report dated September 12, 2026 that deserves to be read slowly: *latent reasoning with infinite temporal depth*.

It is an extravagant phrase attached to a surprisingly restrained document.

Yifan Zhang's Recurrent Looped Transformer does not claim that a computer can think forever inside a single token. It does not arrive with a leaderboard of giant-model victories. The first public evidence is a small synthetic experiment. The report says so. Its more interesting move is architectural. A recurrent decoder carries hidden computation from one token into the next, while also reading global encoder memory and a local attention window. If the decoder contains a fixed number of blocks, the amount of machinery executed for each token remains fixed. But the path through which information can have been transformed grows with the sequence. One token later, another trip through the decoder. Then another. Then another.

The machine gets deeper because time passes.

That idea lands in an industry that has spent most of the last decade learning to worship a different kind of depth. We counted layers. Then parameters. Then tokens. Then FLOPs. Then context windows. Then reasoning tokens. Each count became, for a while, a proxy for ambition.

Recurrence suggests another count: how many times can a useful internal state be changed before the answer is over?

This book is about that question. RLT is the occasion, not the only evidence. The story begins before the Transformer, passes through the 2017 architecture that famously removed recurrence, then returns through Universal Transformers, Transformer-XL, weight sharing, adaptive computation, looped Transformers, continuous latent reasoning, recurrent-depth language models, fixed-point reasoners, and current work that tries to make hidden computation both deeper and cheaper than spelling every intermediate thought into English.

There is an obvious temptation to tell this as a triumphal story. The field abandoned recurrence, discovered its mistake, and came home wiser. That story is too neat. The Transformer removed recurrence for good reasons. Parallelism mattered. Long sequential dependencies made training difficult. Recurrent state can forget, drift, explode, collapse, and become opaque. Modern GPUs like wide batches and dense matrix multiplication; they are less enthusiastic about waiting for yesterday's hidden state before beginning today's. A recurrent architecture may solve one computational problem by making a different one expensive.

The other temptation is to take the phrase *infinite depth* literally. I will not. In RLT, “infinite” means extensible with sequence length. Actual sequences end. Memory is finite. hardware budgets are finite. numerical precision is finite. patience is finite. A path that can keep growing is not the same thing as a computation that can run without limit.

The live question is smaller and, to me, more interesting: whether useful reasoning depth can be made a property of *process* rather than only a property of *stored structure*.

If the answer is no, we will learn something about why large language models need the architecture they already have. If the answer is yes, parameter count becomes a less complete description of what a model can do. Two copies of the same weights, allowed to travel different computational trajectories, may no longer be the same practical machine.

That is the bet on time.
