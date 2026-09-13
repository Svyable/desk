# Chapter 1 — Yesterday's Paper

The report is one day old.

That fact changes how it should be read.

On September 12, 2026, Yifan Zhang published a repository called [Recurrent Looped Transformer](https://github.com/yifanzhang-pro/recurrent-looped-tranformer). The page opens with a phrase engineered, intentionally or not, to travel: **latent reasoning with infinite temporal depth**. By the next day, technology sites had already translated the phrase into the familiar language of AI escalation. One headline called it a transformer with “unbounded temporal depth.” Another said it “claims infinite AI reasoning depth.” The repository itself is calmer than either headline.

There is no giant benchmark table. There is no frontier model running circles around its competitors. There is not yet a released training codebase proving that the architecture scales. The report describes a design, derives its execution semantics, argues for several advantages worth testing, and includes preliminary synthetic experiments contributed independently. It says, in plain language, that reasoning improvements, hardware speedups, and reinforcement-learning scaling are research goals rather than measured results.

This is precisely why it is interesting.

Most technology stories become easy after the result. A model ships. A benchmark moves. A company raises money. A product changes behavior. The narrative then gets written backward from the outcome, and what had been uncertain starts to look inevitable. Yesterday's paper offers no such convenience. It lets us encounter an architectural idea while it is still vulnerable to being wrong.

The proposal begins from something so ordinary in modern language models that it can disappear from view: a token is processed, an output distribution is produced, the next token arrives, and the same fixed-depth network processes again. The sequence grows, but the depth of the network used for each token does not. A seventy-layer model remains a seventy-layer model whether it is generating the first word of an answer or the ten-thousandth.

Of course, later tokens have access to more context. Their attention can reach backward. Their key-value cache contains more history. The model is not in the same informational position. But the amount of learned transformation applied *through depth* to produce each next-token state remains tied to the architecture's fixed stack.

Zhang's proposal changes that relationship.

The Recurrent Looped Transformer, or RLT, uses a causal encoder to construct global key-value memory. Its decoder is recurrent. For each token, the decoder receives not only an encoder representation and a local sliding-window attention cache but also feedback from the decoder's previous final hidden state. That state is merged into the current token's computation and transformed again. The next token receives the result. Then the next.

Suppose, for intuition, the recurrent decoder has forty-eight blocks. The first token's recurrent path can pass through those forty-eight blocks. After two consumed tokens, information carried through the recurrent state may have traversed ninety-six block applications. After one hundred tokens, the temporal path can extend through 4,800 applications. The hardware does not execute 4,800 blocks to produce the hundredth token all at once. It executes forty-eight per token. The depth accumulates because state survives.

That is the “infinite” in the phrase.

It is not infinity in the mathematical sense most readers will hear. No finite machine obtains endless computation. A generation ends. Memory fills. budgets close. hardware fails. The report's own clarification is narrower: temporal computation depth is extensible as the sequence grows. The path does not have a fixed architectural ceiling imposed by the number of distinct decoder layers.

The distinction matters because AI is currently full of ways to spend more computation without adding more stored parameters. A model can generate a longer chain of thought. It can sample several answers and choose among them. It can search a tree of possibilities. It can call tools. It can ask another model. It can run a verifier. It can revise. It can execute an agent loop for an hour. These are all forms of additional computation, and several work extremely well.

RLT points at a different place to put the work: into a persistent latent state that is transformed as ordinary tokens are consumed.

The idea is not without ancestors. It could hardly be otherwise. Recurrent neural networks built their identity around hidden state passed through time. The 2017 Transformer became famous partly because it removed recurrence and allowed sequence positions to be processed in parallel during training. The [Universal Transformer](https://arxiv.org/abs/1807.03819) brought recurrence back across depth a year later. [Transformer-XL](https://arxiv.org/abs/1901.02860) introduced segment-level recurrence to extend dependency beyond fixed context segments. ALBERT shared parameters across layers. Looped Transformers began reusing the same computation to learn iterative algorithms. In 2025, Jonas Geiping and colleagues showed a 3.5-billion-parameter recurrent-depth language model whose performance on some reasoning tasks improved as latent test-time computation increased. In 2026, LOTUS reported that a looped model with explicit supervision of latent positions could close a gap between latent and verbalized reasoning at three billion parameters.

So the interesting claim cannot be “someone invented recurrence.” Nobody did yesterday.

The interesting claim is about where several lines of work might be converging. Recurrence is no longer merely a memory mechanism from before the Transformer. It is being reconsidered as a way to turn *time into effective depth*.

There is a difference between those ideas. An RNN carries a hidden state because sequence order matters. A Universal Transformer repeatedly applies a transition across depth. A recurrent-depth model loops a shared block to spend more latent compute before moving on. Coconut feeds a continuous hidden state back as the next input during latent reasoning. RLT threads a decoder state through ordinary prompt and response tokens while also retaining attention-based global and local memory. Calling all of these “looping” would conceal the architecture choices that may decide whether any one of them works.

The report's most unusual choice is easy to miss if one focuses only on the depth equation: the recurrent decoder does not reset when the prompt ends and the response begins.

That sounds like housekeeping. It is not.

The prompt–response boundary is culturally important to us. We type a question. The machine answers. In the computational graph, however, there is no law of nature saying that a model's internal reasoning state should wake up exactly where the assistant begins speaking. If a recurrent state is supposed to represent useful computation over the history, resetting it at the boundary would discard whatever it had accumulated while reading the prompt.

RLT therefore requires prompt prefill to do more than build an encoder or attention cache. The decoder must recurrently consume the prompt too. Its sliding-window caches must be constructed. Its hidden state must arrive at the first generated token already shaped by the question.

This gives the proposal a pleasing conceptual symmetry and an ugly implementation consequence.

The same state that might make inference more coherent also makes training and replay more demanding. If the model's state depends on its current parameters, then changing those parameters changes the state that should have existed at every prior step. In reinforcement learning, where a policy generates trajectories and is then updated, evaluating old actions under the current policy may require reconstructing the entire recurrent history under the current weights. The report is explicit about this. Exact current-policy replay rebuilds the state, including prompt recurrence and decoder caches. Detaching pieces of that history changes the gradient. Reusing stale caches changes the policy being evaluated.

In other words, the architecture does not merely add a clever tensor. It makes *history* part of the object that training must reproduce correctly.

That is where proposals become expensive.

The hardware story is equally unresolved. The original Transformer did not remove recurrence because researchers found time philosophically offensive. It removed a sequential dependency that made parallel training difficult. Modern accelerators became extraordinarily good at multiplying large matrices because the software and architecture exposed enough work to do at once. A recurrent decoder reintroduces a chain: state at time `t` depends on state at time `t-1`.

Zhang's report argues that this need not be fatal. The causal encoder can process known prompt tokens in parallel. Independent sequences can be batched. Shared memory can be reused. activation checkpointing can trade extra compute for memory. Specialized kernels may exploit the architecture's regularity. These are credible engineering directions. They are not speedups until somebody measures them.

This distinction between *architectural possibility* and *systems result* will recur throughout this book because AI has become unusually good at confusing the two.

A paper can show that an operation count scales better asymptotically while a real kernel runs slower. A model can use fewer parameters while consuming more FLOPs. A method can reduce generated reasoning tokens while spending more hidden computation. A benchmark can improve because a system is allowed to search longer. “Efficient” is never a property in isolation. Efficient with respect to what resource, at what scale, on what hardware, under what latency requirement?

RLT's first experimental evidence is useful partly because it does not resolve those questions.

The reported experiments use a small implementation with roughly 79,000 parameters and three random seeds. Training programs contain thirty-two operations. Evaluation extends to 128 operations, four times the training length. The tasks are deliberately algorithmic state-tracking problems.

On parity, the RLT is reported at roughly perfect final-state accuracy at the training length, about 82 percent at sixty-four operations, and 60.8 percent at 128. The Transformer baseline falls to around chance at longer lengths. On a five-state transition task, RLT again fits the training length nearly perfectly, reaches around 49 percent at sixty-four operations, and falls to 20.7 percent at 128—essentially chance for a five-state problem. The Transformer and token-only-merge baselines are already around chance much earlier.

There are two ways to tell that story badly.

The first is to say RLT generalizes four times beyond its training length. That is technically suggestive on parity and misleading on the five-state task, where the longest result is chance.

The second is to say the experiment disproves the idea because performance eventually collapses. That also misses the point. The interesting fact is that the recurrent architecture appears to carry learned state-update behavior farther than the baselines under matched parameter and data budgets, while still degrading substantially outside the training regime.

The right conclusion is narrower: the synthetic result is evidence that the inductive bias may matter. It is not evidence that a large recurrent model will reason deeply about science, law, code, or strategy.

There is another important limitation. FLOPs were not matched.

This sounds boring enough to be ignored and important enough that it should not be. If one model executes more computation than another, better performance might be purchased by more work rather than by a superior use of the same work. Conversely, if recurrent state produces better generalization at the same parameter count, that can still be valuable even when compute rises. Parameter efficiency and compute efficiency are different claims. A serious benchmark has to say which one it is testing.

The entire architecture sits inside that distinction.

Imagine two models that contain the same number of learned parameters. One applies its parameters once along a fixed path. The other revisits a shared transition repeatedly as state changes. Their storage footprint may be similar. Their effective computation is not. If the second model performs better, “same size” has stopped being a sufficient comparison. If it performs worse but uses less memory, a different deployment might still prefer it. If it can dial recurrence up and down at inference, then the model is no longer one fixed compute point at all. It is a family of execution trajectories sharing weights.

That possibility connects yesterday's paper to a much larger change already underway in AI.

For years, model releases were discussed as objects. This model has so many parameters. It was trained on so many tokens. It scored this number on this benchmark. The object had a weight file and a name.

Reasoning systems made that description less complete. The same model can perform differently when given a larger test-time budget. It can search more. sample more. verify more. use a longer chain of thought. call tools. rerank. revise. The deployed system is partly the weights and partly the procedure wrapped around them.

Recurrent depth pushes the procedure inward.

Instead of only surrounding the model with a loop, the model itself becomes a looped dynamical process. The question shifts from “What does this network compute?” toward “What trajectories can this network sustain?”

That language—trajectory—will matter later. A trajectory can converge. It can oscillate. It can amplify noise. It can forget. It can enter an attractor. It can spend more time on a hard problem. It can waste time on an easy one. Once computation has a temporal state, many questions that belonged to control theory and recurrent systems reappear inside the language model.

The obvious temptation is to compare this to a mind.

Human thought is recurrent in all sorts of loose senses. We reconsider. We maintain working memory. neural activity unfolds through feedback. perception itself is not a single feed-forward pass. Some neuroscience experiments suggest recurrent processing is important for difficult object recognition. It is easy to take those facts and use them as a permission slip: brains are recurrent, therefore recurrent Transformers are more brain-like, therefore they will be more intelligent.

That argument is almost content-free.

Brains are also wet, sparse, asynchronous, metabolically constrained, plastic, embodied, developmental, and organized through structures that do not map neatly onto layers in a neural network. A machine-learning architecture does not become validated because a biological system contains feedback. We will return to the brain later only because biological recurrence provides useful questions about timing and computation—not answers about what code to write.

For now, the more disciplined comparison is with algorithms.

Many algorithms are iterative because the solution is not available in one application of a rule. Gradient descent updates a state repeatedly. Dynamic programming propagates values. numerical solvers refine approximations. search revisits a frontier. constraint propagation updates beliefs until nothing changes. A fixed procedure becomes powerful because it can be applied again to a changed state.

A feed-forward network can learn to approximate such procedures, but a looped architecture offers the iterative structure directly. That is the appeal behind the 2023 paper [“Looped Transformers are Better at Learning Learning Algorithms”](https://arxiv.org/abs/2311.12424): if the target process is iterative, perhaps the learner should be allowed to iterate too.

This raises the question that will carry us through the rest of the book: **is depth something a model should own, or something a computation should accumulate?**

The standard deep network answers: own it. Layer one learns one transformation, layer two another, and so on. More depth means more stacked structure, usually more parameters and more fixed work.

A looped system offers a different bargain. Learn a transition worth using more than once. Apply it to a state that has changed because of the last application. Let time manufacture depth.

There is nothing automatically intelligent about that bargain. A bad transition applied a thousand times is a thousand opportunities to be wrong. A slightly biased state update can drift. A stable recurrence can converge to something useless. Shared weights can limit representational specialization. The sequential path can destroy throughput. Long gradients can become difficult. The architecture can learn to ignore its own state and collapse back toward an ordinary Transformer in spirit if not in code.

The proposal's value is that these failures are testable.

Does performance improve as recurrent depth increases after training? Does it generalize to longer sequences? Does the state carry information that attention alone does not? Do gains survive FLOP matching? Does the model learn stable update rules? Can compute be allocated adaptively? Can exact training semantics be implemented at useful scale? Can kernels make the sequential decoder economically tolerable? Do the advantages survive natural language, where “the algorithm” is rarely clean and the target computation may not even have a known iterative form?

Those are better questions than whether “infinite depth” sounds revolutionary.

The report from yesterday is not a verdict. It is a provocation with equations attached.

That is a good place for a book to begin.
