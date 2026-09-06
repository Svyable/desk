# Chapter 2 — Cheap intelligence, expensive system

Chapter 2, “The Price of Intelligence,” argues that AI becomes economically transformative when useful cognitive capability gets much cheaper at the margin, even if it never becomes free. That claim is directionally supported by recent evidence, but the manuscript should distinguish **unit cost** from **system cost** and avoid treating either as one universal number.

## Evidence checked

Stanford HAI’s 2025 AI Index reports that the price of querying a model at roughly GPT-3.5-level performance on MMLU fell from $20 per million tokens in November 2022 to $0.07 by October 2024, a decline of more than 280-fold. The same report says inference prices across tasks have been falling at widely different rates, roughly nine- to 900-fold per year depending on the benchmark and capability threshold. This is strong evidence for a falling-price story, but not for a claim that “intelligence” as a whole has a single measurable price. The comparison holds performance approximately constant on a benchmark and measures provider inference price, not the full cost of producing a trustworthy outcome.

The International Energy Agency’s April 16, 2026 *Key Questions on Energy and AI* report supplies a useful second curve. It says energy use per individual AI task has fallen by at least an order of magnitude annually in recent years as hardware and software have improved. Yet the same report finds that global data-centre electricity demand grew 17% in 2025 and electricity consumption from AI-focused data centres grew 50%. The reason is precisely the mechanism Chapter 2 is interested in: efficiency lowers the cost of a task while adoption expands and new applications—reasoning, video generation, agentic workloads—can consume hundreds or thousands of times more energy per query than simple text generation.

That combination is better evidence for the chapter than a clean “costs go down” graph. It shows a rebound pattern: the unit gets cheaper while the system gets larger.

## Strongest counterargument

A falling token price does not prove that economically useful cognition is becoming proportionally cheaper. Verification, integration, latency, context preparation, security, liability, human review, and failure costs can dominate the invoice. The chapter already gestures toward this when it separates generation from checking and responsibility; the evidence supports making that distinction central rather than parenthetical.

There is also no guarantee that efficiency gains reduce aggregate resource use. The IEA evidence points in the opposite direction for electricity so far: rapidly improving per-task efficiency is coexisting with sharply rising total demand because usage and workload intensity are expanding faster. Cheap intelligence can therefore mean cheaper *acts of cognition* alongside more expensive grids, data centres, cooling systems, and capacity constraints.

## Manuscript boundary

A future prose pass can safely sharpen Chapter 2 this far:

> The price of an answer can collapse while the cost of the system producing answers rises. That is not a contradiction. It is what happens when efficiency creates demand faster than infrastructure can disappear.

Do not turn the Stanford figure into a universal “280× cheaper AI” claim. It is a benchmark-conditioned inference-price comparison. Do not turn the IEA data into proof that AI necessarily increases total energy use indefinitely; the report explicitly models uncertainty and efficiency-sensitive scenarios. The defensible argument is narrower: marginal cognitive tasks can become dramatically cheaper while verification and physical infrastructure become the next scarce layer.

## Sources

- Stanford Institute for Human-Centered Artificial Intelligence, *The 2025 AI Index Report*, Research and Development chapter, 2025: https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development
- International Energy Agency, *Key Questions on Energy and AI*, published April 16, 2026: https://www.iea.org/reports/key-questions-on-energy-and-ai
- International Energy Agency, “Executive summary — Key Questions on Energy and AI,” 2026: https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary
