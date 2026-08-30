# Chapter 6 research note: AI efficiency and demand

## Claim under test

Chapter 6 uses artificial intelligence as a modern version of the efficiency paradox: if chips, models, and software reduce the electricity required for a unit of AI work, lower costs may induce enough additional use that total electricity demand still rises.

The mechanism is plausible, but the manuscript should not imply that rising data-center demand is itself proof of rebound. Demand can rise because the underlying market is growing, because more accelerators are installed, because utilization changes, because models become more computationally intensive, or because a cheaper service induces more use. Those effects are difficult to separate in aggregate data.

## Direct evidence that computing efficiency matters

Latif et al. (2025) measured power demand on an eight-GPU NVIDIA H100 HGX node while training open-source image-classification and language models. Their maximum observed draw was about 8.4 kW, below the node's 10.2 kW manufacturer rating. More importantly for Chapter 6, holding the ResNet model architecture constant while increasing batch size from 512 to 4096 reduced total training energy consumption by a factor of four.

That result is narrow: one node, particular workloads, and training rather than inference. It should not be generalized into a claim about the energy intensity of AI as a whole. But it is useful primary evidence that software and workload choices can materially change energy per task without changing the underlying service objective.

Source: Imran Latif et al., “Single-Node Power Demand During AI Training: Measurements on an 8-GPU NVIDIA H100 System,” IEEE Access 13 (2025), DOI 10.1109/ACCESS.2025.3554728. Lawrence Berkeley National Laboratory publication page: https://eta.lbl.gov/publications/single-node-power-demand-during-ai

## The system-level countercase: efficiency can restrain total demand

The IEA's 2025 *Energy and AI* report is unusually useful because its sensitivity cases vary both adoption and efficiency instead of assuming a single future. In its Base Case, global data-center electricity consumption rises from about 415 TWh in 2024 to roughly 945 TWh in 2030. The report explicitly describes future consumption as highly uncertain.

Its High Efficiency Case assumes stronger improvements in software, hardware, and infrastructure while holding demand for digital services and AI at the same level as the Base Case. Those improvements reduce projected data-center electricity use by more than 15%, to about 970 TWh in 2035. In the Headwinds Case, slower deployment plus efficiency improvements allow electricity demand to plateau around 700 TWh by 2035 even though service demand continues to grow.

This is important counterevidence to a loose “Jevons always wins” reading. Efficiency can survive demand growth and materially reduce aggregate electricity use relative to a less-efficient counterfactual. Rebound is an empirical question about how much of the engineering saving is taken back through additional activity, not a law that efficiency must increase consumption.

Source: International Energy Agency, *Energy and AI* (2025), especially “Energy demand from AI”: https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai

## Current scale and uncertainty

Lawrence Berkeley National Laboratory's June 2026 update estimates U.S. data centers could consume 521–843 TWh in 2030, with a 649 TWh reference case. That corresponds to about 9.5–15.3% of U.S. electricity use, with 11.8% in the reference case. The range is not a rebound estimate. It comes from a bottom-up model whose sensitivities include equipment shipments, specialized-chip installations, AI-chip lifetimes, idle power, and server utilization.

That distinction should survive into any manuscript revision. The forecast supports the claim that AI and data centers are becoming material electricity loads. It does not identify how much of that load growth was caused by falling energy per computation.

Source: Sarah Josephine Smith et al., *United States Data Center Energy Usage Report: 2025 Update*, Lawrence Berkeley National Laboratory (June 2026): https://bies.lbl.gov/publications/united-states-data-center-energy-2025

## Strongest counterargument

The strongest objection to the chapter's AI example is causal: rapid growth in AI electricity demand could have occurred even if computation had not become cheaper, because the technology is new, capital spending is enormous, accelerator supply is expanding, and firms are racing to discover valuable applications. Observing simultaneous efficiency gains and demand growth does not identify rebound.

The manuscript should therefore use AI as a live illustration of the *question* Jevons raises, not as a settled demonstration of the paradox. The strongest formulation is that AI makes both sides observable at once: energy per task can fall sharply while the number and scale of tasks expand, and current evidence does not yet tell us how much of aggregate demand growth is causally induced by efficiency itself.

## Recommended manuscript use

A later surgical edit to the AI passage in Chapter 6 could add one concrete sentence from Latif et al. to establish that energy per workload is genuinely malleable, followed by the IEA sensitivity cases to show that efficiency can still produce substantial system-level savings. The LBNL 2026 forecast is better reserved for Chapter 8 unless Chapter 6 needs one sentence establishing scale.

The point to preserve is deliberately asymmetric: efficiency lowers the resource cost of capability; demand determines how much of that saving remains visible in aggregate energy use. AI is compelling because both variables are moving quickly, not because the final rebound percentage is already known.
