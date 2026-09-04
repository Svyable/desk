# Runway — research trail

This research trail supports *Runway: The Roadmap to the AI Takeoff* as drafted in September 2026.

The manuscript's thesis is a systems claim rather than a date forecast: AI takeoff becomes materially more plausible when artificial intelligence is used throughout the production system that creates future intelligence, causing important cycle times to fall and newly binding constraints to be removed more quickly. The trail therefore records not only evidence for capability growth but evidence about compute, power, capital, verification, institutional permission, science, robotics, and physical lead times.

Concrete numbers in the manuscript should be read as dated observations. Prefer a later authoritative measurement when one exists. Company sources are used primarily for company-specific deployment, product, capacity, and engineering claims and should not be mistaken for independent estimates of broad economic impact.

The source IDs below correspond to `source-ledger.csv`.

## Chapter evidence and falsification notes

### Chapter 1 — The Runway Is Already Under Us

**Primary evidence:** `stanford-ai-index-2026`, `epoch-global-compute-2026`, `iea-energy-ai-2026`, `metr-time-horizons-2026`.

The chapter's opening claim is that the relevant system already includes rapidly growing model capability, compute infrastructure, electricity demand and longer-horizon agentic work. Stanford provides the broad capability/adoption snapshot; Epoch estimates rapid growth in AI compute supply; IEA documents the physical energy footprint; METR provides a method for measuring autonomous task duration.

**What would falsify or weaken it:** frontier capability and price-performance flatten for several years; AI compute supply stops expanding; autonomous task horizons stop extending; infrastructure investment proves mostly stranded and utilization remains low.

### Chapter 2 — Takeoff Is a Supply Chain

**Primary evidence:** `tsmc-annual-2025`, `asml-annual-2025`, `micron-hbm4-2026`, `skhynix-hbm4-2025`, `nvidia-nvl72-2026`, `iea-energy-ai-2026`.

The chapter treats AI capacity as a chain of complements: leading-edge fabrication, lithography, memory, packaging, networking, rack power, cooling and electricity. These sources document the dependence of frontier systems on specialized industrial inputs and show that constraints can migrate between layers.

**What would falsify or weaken it:** frontier systems become largely independent of specialized hardware supply through a sustained discontinuity in algorithmic efficiency, or industrial inputs cease to constrain deployment even during rapid demand growth.

### Chapter 3 — The Moving Bottleneck

**Primary evidence:** `iea-energy-ai-2026`, `lbl-queues-2026`, `tsmc-annual-2025`, `micron-hbm4-2026`, `stanford-ai-index-2026`.

The chapter's systems claim is that loosening one scarce complement reveals another. IEA explicitly describes tightening physical bottlenecks in energy equipment, chips and approvals; semiconductor sources show continuing capacity expansion around AI demand.

**What would falsify or weaken it:** a single durable constraint dominates for a long period without meaningful substitution, investment response or efficiency improvement; alternatively, AI capacity becomes so overbuilt that complements remain persistently slack.

### Chapter 4 — The Price of Acceleration

**Primary evidence:** `stanford-ai-index-2026`, `stanford-economy-2026`, `epoch-global-compute-2026`, `iea-energy-ai-2026`.

The chapter distinguishes falling marginal cognitive cost from rising fixed infrastructure cost. Stanford documents rapidly scaling investment and consumer value; Epoch tracks compute supply; IEA documents capital and electricity requirements.

**What would falsify or weaken it:** fixed infrastructure spending ceases producing meaningful reductions in accepted-work cost; inference prices stop falling for fixed capability; demand fails to expand as cognitive work becomes cheaper.

### Chapter 5 — Intelligence Needs Factories

**Primary evidence:** `tsmc-annual-2025`, `asml-annual-2025`, `micron-hbm4-2026`, `skhynix-hbm4-2025`.

The chapter argues that frontier intelligence rests on a manufacturing stack whose expansion is slower than software copying. TSMC documents fab and packaging expansion; ASML documents lithography production and AI-driven demand; Micron and SK hynix document high-bandwidth memory development and production.

**What would falsify or weaken it:** semiconductor manufacturing lead times cease to matter to AI capacity because useful intelligence becomes mostly insensitive to leading-edge hardware, or hardware demand contracts despite continued capability adoption.

### Chapter 6 — The Power Line

**Primary evidence:** `iea-energy-ai-2025`, `iea-energy-ai-2026`, `iea-electricity-2026`, `doe-datacenter-energy-2024`, `doe-ai-energy-hub-2026`, `lbl-queues-2026`.

IEA and DOE/LBNL document rapid growth in data-center electricity demand and the local importance of grid capacity. Berkeley Lab's queue data provides evidence that interconnection is an industrial process with large project queues and long-lived constraints.

**What would falsify or weaken it:** AI electricity demand decouples sharply from useful AI output through sustained efficiency gains; data centers secure marginal power quickly and cheaply enough that energy stops affecting location or schedule.

### Chapter 7 — The Machine Behind the Machine

**Primary evidence:** `nvidia-nvl72-2026`, `nvidia-blackwell-2024`, `iea-energy-ai-2026`, `asml-annual-2025`.

The chapter follows the supporting systems behind accelerator chips: high-density racks, networking, power delivery, cooling, lithography, operations and maintenance. NVIDIA documents rack-scale physical requirements; IEA documents the wider electricity and equipment bottlenecks.

**What would falsify or weaken it:** deployed AI performance becomes almost entirely model-limited rather than system-limited, with networking, cooling, power density and supporting equipment contributing negligible constraints.

### Chapter 8 — Financing the Wait

**Primary evidence:** `stanford-economy-2026`, `iea-energy-ai-2026`, `epoch-hyperscaler-capex-2026`, `tsmc-annual-2025`.

The chapter argues that runway construction is financed before future demand is known. Stanford and IEA describe record AI/data-center investment; Epoch tracks hyperscaler capital intensity; TSMC documents multi-year capacity decisions based on anticipated demand.

**What would falsify or weaken it:** AI infrastructure can expand primarily from low-fixed-cost assets, or long-duration capital ceases being material to capability growth; alternatively, AI returns disappoint persistently enough to cause a durable collapse in buildout.

### Chapter 9 — From Demo to Delegate

**Primary evidence:** `metr-time-horizons-2026`, `stanford-technical-2026`, `nist-ai-rmf-2024`.

The chapter distinguishes a system that can produce a successful demonstration from one that can own an objective under real permissions. METR provides task-horizon measurement; Stanford documents agent benchmark progress; NIST provides risk-management context for deployment.

**What would falsify or weaken it:** benchmark progress continues but real-world autonomous task ownership does not expand; human intervention remains nearly continuous even for low-risk digital work.

### Chapter 10 — Staying With the Task

**Primary evidence:** `metr-time-horizons-2026`, `stanford-technical-2026`, `metr-uplift-update-2026`.

The chapter uses duration as a core dimension of agency. METR's horizon work directly measures task duration at specified reliability; Stanford documents progress on structured agent tasks; METR's later productivity update shows that real-world measurement remains difficult and evolving.

**What would falsify or weaken it:** measured task horizons plateau or fail to translate into economically useful long-running delegation; supervision overhead grows as quickly as autonomous duration.

### Chapter 11 — The Verification Tax

**Primary evidence:** `metr-dev-productivity-2025`, `metr-uplift-update-2026`, `nist-ai-rmf-2024`, `stanford-technical-2026`.

METR's early-2025 randomized trial is preserved as important counterevidence: experienced developers in the studied setting took longer with AI despite expecting speedups. NIST's risk framework supports the need for evaluation and monitoring. Stanford documents benchmark reliability concerns.

**What would falsify or weaken the chapter's proposed transition:** verification cost does not fall as systems improve; accepted-work productivity remains flat or negative even while generated output rises; automated evaluators prove too easy to game for consequential work.

### Chapter 12 — Permissioned Intelligence

**Primary evidence:** `nist-ai-rmf-2024`, `stanford-technical-2026`, `stanford-economy-2026`.

The chapter argues that capability becomes capacity only when systems receive operational permission. NIST provides a structured trustworthiness and monitoring framework; Stanford documents uneven performance in professional domains and increasing organizational adoption.

**What would falsify or weaken it:** organizations grant consequential autonomy without needing structured permissions or controls, or permission remains permanently disconnected from evidence of reliability and auditability.

### Chapter 13 — The Organizational Runway

**Primary evidence:** `stanford-economy-2026`, `metr-dev-productivity-2025`, `metr-uplift-update-2026`, `nist-ai-rmf-2024`.

The chapter argues that the same model creates different value in organizations with different data, interfaces, evaluators and workflows. Stanford provides adoption/productivity evidence; METR provides a concrete case where integration did not automatically improve throughput; NIST supports formalized monitoring and human-AI configuration.

**What would falsify or weaken it:** organizational process design has little effect on measured AI productivity; off-the-shelf model access produces roughly uniform gains regardless of workflow, data quality or permissions.

### Chapter 14 — Science Starts to Loop

**Primary evidence:** `alphafold-protein-universe-2022`, `gnome-materials-2023`, `alphaevolve-2025`, `alphaevolve-impact-2026`, `stanford-ai-index-2026`.

AlphaFold demonstrates massive expansion of predicted structural information; GNoME demonstrates large-scale candidate generation plus the need for experimental synthesis; AlphaEvolve demonstrates generate-evaluate-iterate loops in domains with automatic scoring.

**What would falsify or weaken it:** AI increases hypothesis and candidate volume without improving validated discoveries, experimental selection or scientific cycle time; automated laboratories fail to raise trustworthy experimental throughput.

### Chapter 15 — When Intelligence Gets Hands

**Primary evidence:** `gemini-robotics-2025`, `gemini-robotics-2026`, `stanford-technical-2026`, `stanford-economy-2026`.

DeepMind's robotics work documents transfer across embodiments, longer multi-step physical tasks, success detection and layered safety, while Stanford's 2026 Index emphasizes the large gap between controlled robotics benchmarks and real household performance and tracks industrial robot deployment.

**What would falsify or weaken it:** robot intervention rates remain high, generalization does not survive deployment, hardware cost fails to fall and physical automation remains dominated by custom integration with little fleet-level learning.

### Chapter 16 — Software Begins to Improve Software

**Primary evidence:** `alphaevolve-2025`, `alphaevolve-impact-2026`, `metr-time-horizons-2026`, `metr-dev-productivity-2025`, `metr-uplift-update-2026`.

AlphaEvolve is the strongest concrete evidence in this edition of AI-generated software/algorithm improvements feeding back into computing infrastructure and hardware design. METR provides both autonomous-duration evidence and important counterevidence on developer productivity.

**What would falsify or weaken it:** AI-generated code volume grows without accepted engineering improvements; automatic evaluators fail to prevent regressions; AI-assisted AI R&D shows no material shortening of research or infrastructure cycles.

### Chapter 17 — The Machines That Design the Machines

**Primary evidence:** `alphaevolve-2025`, `alphaevolve-impact-2026`, `tsmc-annual-2025`, `asml-annual-2025`, `nvidia-nvl72-2026`.

DeepMind reports AI-generated optimizations entering TPU and computing design; TSMC and ASML document the much slower physical production cycle that follows digital design; NVIDIA documents the system-level hardware around accelerators.

**What would falsify or weaken it:** AI assistance in chip and systems design remains anecdotal and does not improve time-to-design, verification, performance-per-watt, yield, utilization or generation interval.

### Chapter 18 — The Economy Learns to Run in Parallel

**Primary evidence:** `stanford-economy-2026`, `stanford-ai-index-2026`, `metr-time-horizons-2026`, `nist-ai-rmf-2024`.

The chapter argues that the economically important transition is from making one worker faster to allowing many machine processes to progress concurrently under one person's supervision. Stanford documents broad adoption and productivity evidence; METR measures longer autonomous work; NIST supports bounded deployment.

**What would falsify or weaken it:** supervisory attention scales nearly one-for-one with machine work; firms do not increase concurrent experimentation or throughput; economy-wide productivity remains weak after a long period of deep process integration.

### Chapter 19 — The Brakes Are Part of the Machine

**Primary evidence:** `nist-ai-rmf-2024`, `metr-dev-productivity-2025`, `stanford-technical-2026`, `gemini-robotics-2026`.

The chapter treats risk controls as throughput infrastructure. NIST emphasizes governance, measurement and monitoring; METR shows that apparent speed can fail end-to-end productivity; DeepMind's robotics update explicitly combines advanced autonomy with layered physical and agentic safety.

**What would falsify or weaken it:** controls fail to scale with autonomy, incident rates rise proportionally or superlinearly with deployment, and consequential permissions contract rather than expand.

### Chapter 20 — The Instrument Panel

**Primary evidence:** all sources in the ledger, especially `metr-time-horizons-2026`, `epoch-global-compute-2026`, `epoch-largest-datacenter-2026`, `iea-energy-ai-2026`, `lbl-queues-2026`, `stanford-economy-2026`, `alphaevolve-impact-2026`, `gemini-robotics-2026`.

This chapter intentionally proposes a measurement agenda rather than asserting a single takeoff index. Several metrics—accepted-work cost, human-attention leverage, bottleneck half-life and whole-system generation interval—are analytical proposals rather than established statistical series.

**What would falsify or weaken the panel:** the proposed operational measures fail to predict or explain meaningful capacity growth better than simpler capability benchmarks; bottlenecks prove impossible to identify or compare over time.

### Chapter 21 — Liftoff

**Primary evidence:** synthesis of the ledger; no unique empirical claim depends on one additional source.

Liftoff is defined as a systems condition: AI materially participates in expanding AI-producing capacity, and enough feedback loops close that the rate of removing important constraints increases.

**What would falsify or weaken it:** model capability grows but research, infrastructure, permission and physical capacity cycles do not shorten; AI remains mostly downstream from the processes that expand compute and physical throughput.

### Chapter 22 — The Runway Builds Itself

**Primary evidence:** synthesis of `alphaevolve-impact-2026`, `epoch-global-compute-2026`, `iea-energy-ai-2026`, `tsmc-annual-2025`, `gemini-robotics-2026`, `nist-ai-rmf-2024` and the rest of the ledger.

The closing claim is deliberately conditional. A self-extending runway exists only if intelligence increasingly improves forecasting, software, hardware, operations, science, physical automation and institutional controls in ways that shorten the arrival time of the next useful unit of capacity.

**What would falsify or weaken it:** bottleneck half-life rises; infrastructure lead times remain fixed or worsen; AI-assisted upstream work fails to change end-to-end throughput; social and institutional constraints permanently prevent the feedback from becoming economically consequential.

## Research cautions

1. **Company evidence is not neutral evidence.** DeepMind, NVIDIA, TSMC, ASML, Micron and SK hynix are authoritative about their announced products and internal deployments, but they have commercial incentives. Company-specific claims are phrased accordingly.
2. **Benchmarks age.** Stanford's 2026 AI Index explicitly documents benchmark saturation and reliability problems. No benchmark in the manuscript should be treated as timeless.
3. **Task horizon is not economic productivity.** METR's horizon evaluations and its developer RCT measure different things. The book preserves both because the gap between capability and throughput is central to the thesis.
4. **Forecasts are conditional.** IEA and DOE electricity scenarios are planning tools based on explicit assumptions, not guarantees.
5. **Physical capacity is local.** Global electricity or chip totals can hide local grid, packaging, memory, cooling and construction constraints.
6. **Generation is not validation.** AlphaFold, GNoME and agentic scientific systems can expand candidate spaces without eliminating experimental bottlenecks.
7. **Published September 2026.** Later evidence should supersede dated numerical snapshots without being forced into this edition's conclusions.
