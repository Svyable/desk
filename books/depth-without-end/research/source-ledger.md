# Source ledger — Depth Without End

This ledger records the sources used to support or challenge the manuscript. Primary papers, official project repositories, and conference records are preferred for technical claims. News coverage is useful only as evidence of reception or framing, not as proof that an architecture works.

## Initiating source

1. **Yifan Zhang, “Recurrent Looped Transformer” (September 12, 2026).** Project repository and report.  
   https://github.com/yifanzhang-pro/recurrent-looped-tranformer  
   Use: architecture definition, complete recurrent state, prompt/response continuity, training/inference execution semantics, proposed 48+48 configuration, current-policy RL replay argument, preliminary synthetic state-tracking results, stated limitations.  
   Caution: proposal-level report. Preliminary experiments are small and independent; large-scale reasoning, hardware, and RL benefits are research goals.

2. **RLT project website.**  
   https://yifanzhang-pro.github.io/recurrent-looped-tranformer/  
   Use: author/date metadata and public project framing.  
   Caution: same underlying work as source 1, not independent corroboration.

## Transformer and recurrence lineage

3. **Ashish Vaswani et al., “Attention Is All You Need” (NeurIPS 2017).**  
   https://arxiv.org/abs/1706.03762  
   Use: original Transformer motivation; removal of recurrence/convolution; parallelization advantage.

4. **Mostafa Dehghani et al., “Universal Transformers” (ICLR 2019).**  
   https://arxiv.org/abs/1807.03819  
   Use: recurrent computation across depth; dynamic per-position halting; algorithmic generalization; historical precedent for recurrent self-attention.

5. **Alex Graves, “Adaptive Computation Time for Recurrent Neural Networks” (2016).**  
   https://arxiv.org/abs/1603.08983  
   Use: learned variable computation; parity, logic, arithmetic, sorting; distinction between fixed and adaptive computational effort.

6. **Zihang Dai et al., “Transformer-XL: Attentive Language Models Beyond a Fixed-Length Context” (ACL 2019).**  
   https://arxiv.org/abs/1901.02860  
   Use: segment-level recurrence and long dependency; distinction between recurrence for memory/context and recurrent depth.

7. **Zhenzhong Lan et al., “ALBERT: A Lite BERT for Self-supervised Learning of Language Representations” (ICLR 2020).**  
   https://arxiv.org/abs/1909.11942  
   Use: cross-layer parameter sharing; evidence that repeated/shared parameters are not intrinsically incompatible with Transformer training.  
   Caution: weight sharing is not the same as RLT's temporal state recurrence.

8. **Aydar Bulatov, Yuri Kuratov, Mikhail Burtsev, “Recurrent Memory Transformer” (2022).**  
   https://arxiv.org/abs/2207.06881  
   Use: memory tokens carried across segments; comparison point for persistent internal memory.

9. **Albert Gu and Tri Dao, “Mamba: Linear-Time Sequence Modeling with Selective State Spaces” (2023).**  
   https://arxiv.org/abs/2312.00752  
   Use: modern state-space/recurrent sequence processing; reminder that recurrence-like state updates survived outside attention-centric language models.

## Looped and recurrent-depth Transformers

10. **Liu Yang, Kangwook Lee, Robert Nowak, Dimitris Papailiopoulos, “Looped Transformers are Better at Learning Learning Algorithms” (2023).**  
    https://arxiv.org/abs/2311.12424  
    Use: iterative inductive bias; in-context data-fitting experiments; parameter efficiency of looped architecture.

11. **Jonas Geiping et al., “Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach” (2025).**  
    https://arxiv.org/abs/2502.05171  
    Use: recurrent block unrolled to arbitrary test-time depth; 3.5B-parameter/800B-token proof of concept; performance scaling with latent compute; comparison to explicit reasoning tokens.

12. **Ying Fan, Anej Svete, Kangwook Lee, “Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers” (2026).**  
    https://arxiv.org/abs/2606.31779  
    Use: LOTUS; 3B-scale looped latent reasoning; parallel supervision; reported 2.5×–6.9× thought-phase latency reductions in studied settings; evidence that projected latents can align with reasoning steps.  
    Caution: mechanism differs from RLT and reported efficiency is task/system specific.

13. **Sajad Movahedi et al., “Fixed-Point Reasoners: Stable and Adaptive Deep Looped Transformers” (2026).**  
    https://arxiv.org/abs/2606.18206  
    Use: signal propagation in deep loops; residual scaling; fixed-point convergence as a halting rule; Sudoku, maze, state tracking, ARC-style reasoning.

14. **Shuzhen Li, Yifan Zhang, Jiacheng Guo, Quanquan Gu, Mengdi Wang, “DeepLoop: Depth Scaling for Looped Transformers” (2026).**  
    https://arxiv.org/abs/2607.13491  
    Use: residual-scaling problem created by repeated visits to tied parameters; GPT-2 small/medium experiments; evidence that nominal depth and tied recurrent depth have different optimization behavior.

15. **Wenlong Wang, Fergal Reid, “Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence?” (2026).**  
    https://arxiv.org/abs/2609.01924  
    Use: mechanistic-interpretability case study on Ouro and Huginn; representations across recurrent depth; evidence that different looped models transport/write latent information differently.  
    Caution: very recent preprint and selected models; not a universal mechanistic account.

## Latent reasoning and delayed output

16. **Shibo Hao et al., “Training Large Language Models to Reason in a Continuous Latent Space” / Coconut (COLM 2025; preprint 2024).**  
    https://arxiv.org/abs/2412.06769  
    Official code: https://github.com/facebookresearch/coconut  
    Use: direct hidden-state feedback as subsequent input embedding; continuous thought; experiments suggesting benefits on tasks requiring backtracking.  
    Caution: Coconut's latent steps are not identical to RLT's token-to-token recurrent decoder state.

17. **Eric Zelikman et al., “Quiet-STaR: Language Models Can Teach Themselves to Think Before Speaking” (2024).**  
    https://arxiv.org/abs/2403.09629  
    Use: hidden/auxiliary reasoning around token prediction; evidence that useful computation can be allocated before ordinary output.

18. **Sachin Goyal et al., “Think before you speak: Training Language Models With Pause Tokens” (2023).**  
    https://arxiv.org/abs/2310.02226  
    Use: extra pre-output computation through pause tokens; comparison between adding tokens to gain compute and recurrent latent compute.

19. **Jason Wei et al., “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models” (NeurIPS 2022).**  
    https://arxiv.org/abs/2201.11903  
    Use: explicit language-space reasoning and the modern practice of turning computation into generated intermediate text.

20. **Shunyu Yao et al., “Tree of Thoughts: Deliberate Problem Solving with Large Language Models” (2023).**  
    https://arxiv.org/abs/2305.10601  
    Use: explicit search over reasoning branches as a competing way to spend test-time compute.

## Optimization, gradients, and fixed points

21. **Yoshua Bengio, Patrice Simard, Paolo Frasconi, “Learning Long-Term Dependencies with Gradient Descent is Difficult” (1994).**  
    https://doi.org/10.1109/72.279181  
    Use: historical gradient difficulty in recurrent networks.

22. **Razvan Pascanu, Tomas Mikolov, Yoshua Bengio, “On the difficulty of training recurrent neural networks” (ICML 2013).**  
    https://arxiv.org/abs/1211.5063  
    Use: vanishing/exploding gradients, clipping, recurrent optimization hazards.

23. **Shaojie Bai, J. Zico Kolter, Vladlen Koltun, “Deep Equilibrium Models” (NeurIPS 2019).**  
    https://arxiv.org/abs/1909.01377  
    Use: computation defined by convergence to a fixed point; conceptual bridge to iterative depth and memory-efficient implicit differentiation.

24. **Tian Qi Chen et al., “Neural Ordinary Differential Equations” (NeurIPS 2018).**  
    https://arxiv.org/abs/1806.07366  
    Use: depth as continuous transformation/time analogy; caution that “depth through time” has multiple mathematical forms.

## Memory and external computation

25. **Alex Graves, Greg Wayne, Ivo Danihelka, “Neural Turing Machines” (2014).**  
    https://arxiv.org/abs/1410.5401  
    Use: separation between controller state and differentiable external memory; historical algorithmic-memory comparison.

26. **Patrick Lewis et al., “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks” (NeurIPS 2020).**  
    https://arxiv.org/abs/2005.11401  
    Use: external retrieved memory as a competing mechanism; distinction between computation depth and factual storage.

## Scaling and compute allocation

27. **Jared Kaplan et al., “Scaling Laws for Neural Language Models” (2020).**  
    https://arxiv.org/abs/2001.08361  
    Use: familiar parameter/data/compute scaling frame that the book later complicates.

28. **Jordan Hoffmann et al., “Training Compute-Optimal Large Language Models” (Chinchilla, 2022).**  
    https://arxiv.org/abs/2203.15556  
    Use: resource allocation and the idea that the same compute budget can be spent in different proportions.

29. **Charlie Snell et al., “Scaling LLM Test-Time Compute Optimally Can Be More Effective than Scaling Model Parameters” (2024).**  
    https://arxiv.org/abs/2408.03314  
    Use: test-time compute as a scaling axis; competing inference-time strategies and compute-optimal allocation.

## Neuroscience guardrails

30. **Kar K. et al., “Evidence that recurrent circuits are critical to the ventral stream's execution of core object recognition behavior” (Nature Neuroscience, 2019).**  
    https://doi.org/10.1038/s41593-019-0392-5  
    Use: evidence that recurrent processing can matter in biological vision.  
    Caution: does not validate a specific machine-learning architecture.

31. **Kietzmann, McClure, Kriegeskorte, “Deep Neural Networks in Computational Neuroscience” / recurrent dynamics discussion (2019).**  
    https://arxiv.org/abs/1812.05336  
    Use: methodological caution when comparing deep nets and cortical computation.

## Reception / contemporary framing

32. **MarkTechPost coverage of RLT (September 13, 2026).**  
    https://www.marktechpost.com/2026/09/13/a-princeton-researcher-proposes-recurrent-looped-transformer-rlt/  
    Use: evidence of immediate public framing around “unbounded temporal depth.”  
    Caution: secondary technology coverage, not validation.

33. **Startup Fortune, “A New Recurrent Looped Transformer Claims Infinite AI Reasoning Depth” (September 13, 2026).**  
    https://startupfortune.com/a-new-recurrent-looped-transformer-claims-infinite-ai-reasoning-depth/  
    Use: reception and the tendency of the headline phrase to outrun the underlying evidence.  
    Caution: secondary coverage.

## Verification priorities before release

- Check for revisions to Zhang's RLT report and repository after September 13, 2026.
- Look for an implementation, independent replication, or larger-scale RLT experiment.
- Revisit the preliminary synthetic figure values if exact tables become available.
- Verify FLOP-matched comparisons before any efficiency claim is strengthened.
- Check whether DeepLoop, Fixed-Point Reasoners, LOTUS, or the Jacobian-lens paper has acquired peer review, revisions, replications, or rebuttals.
- Add hardware measurements only from actual kernels/systems evidence; do not convert architectural possibility into throughput claims.
- Update the manuscript if current-policy RL implementations establish that exact state reconstruction is unnecessary, impractical, or handled differently in practice.
