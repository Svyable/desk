# Subsidized Intelligence — Research Brief

## Thesis under test

*Subsidized Intelligence* asks what it means that frontier AI reaches an ordinary consumer through a subscription priced like a streaming service while the supply side is being built with industrial-scale capital, power, chips, data centers, cloud commitments, and investor financing.

The title is intentionally provocative, but the accounting claim must remain narrow enough to defend. The book must **not** say that OpenAI necessarily loses money on every ChatGPT Plus subscriber. OpenAI does not publish per-subscriber unit economics, and the marginal cost of one user varies with model, tool use, cached context, utilization, product limits, inference efficiency, and infrastructure contracts.

The durable claim is different:

> The retail price of consumer AI radically under-describes the capital stack required to make frontier capability cheaply and continuously available. Competition, investor capital, hyperscaler buildouts, hardware learning curves, software optimization, utilization gains, custom silicon, and product bundling are compressing the price a user sees while the industry spends extraordinary sums to move the capability frontier outward.

The book should be able to survive several possible futures. If frontier AI subscriptions become much more expensive, that would weaken the strongest version of the “too cheap to meter” thesis but not erase the history of the subsidy race. If model companies become highly profitable at current retail prices, the word subsidized should be understood as infrastructure and capital subsidy rather than an assertion of operating loss. If open models or on-device systems collapse inference prices, the book should explain why the subsidy phase helped finance the transition to abundance.

## Current factual anchors — August 2026

### The twenty-dollar product

OpenAI’s Help Center states that ChatGPT Plus costs $20 per month. It includes higher model limits, advanced reasoning access, voice conversations, image generation, file uploads and analysis, and Deep Research where available. API usage is separate.

Primary source:
- OpenAI Help Center, “What is ChatGPT Plus?” https://help.openai.com/en/articles/6950777

The argument should use this price as a concrete consumer reference point, not as a permanent law. Subscription features and limits change.

### The price-performance frontier

OpenAI’s July 2026 GPT-5.6 announcement says that GPT-5.6 Luna is priced at $0.20 per million input tokens and $1.20 per million output tokens in the API, while Terra is $2 and $12. The company explicitly frames the release as advancing both capability and efficiency so that more work becomes economical.

Primary sources:
- OpenAI, “Advancing the price-performance frontier with GPT-5.6,” July 2026. https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/
- OpenAI model documentation for GPT-5.6 Sol. https://developers.openai.com/api/docs/models/gpt-5.6-sol

Do not equate token price with the cost of completing a useful task. A cheaper model may need more attempts; a stronger model may consume more reasoning tokens but require less human correction. The relevant economic object is useful work per dollar.

### OpenAI capital and infrastructure

OpenAI announced $110 billion of new investment in February 2026 at a $730 billion pre-money valuation: $30 billion from SoftBank, $30 billion from NVIDIA, and $50 billion from Amazon, with additional investors expected. The company described compute, distribution, and capital as the three requirements for scaling access.

Primary source:
- OpenAI, “Scaling AI for everyone,” February 27, 2026. https://openai.com/index/scaling-ai-for-everyone/

Stargate was announced in January 2025 with an intention to invest $500 billion over four years in U.S. AI infrastructure, beginning with $100 billion. By September 2025 OpenAI said planned Stargate capacity was nearly seven gigawatts and more than $400 billion of investment over the following three years; by October it said the total exceeded eight gigawatts and $450 billion.

Primary sources:
- OpenAI, “Announcing The Stargate Project,” January 21, 2025. https://openai.com/index/announcing-the-stargate-project/
- OpenAI, “OpenAI, Oracle, and SoftBank expand Stargate with five new AI data center sites,” September 23, 2025. https://openai.com/index/five-new-stargate-sites/
- OpenAI, “Expanding Stargate to Michigan,” October 30, 2025. https://openai.com/index/expanding-stargate-to-michigan/

Treat these as announced commitments and planned capacity, not identical to cash already spent or commissioned compute.

### Hyperscaler capital expenditure

The book should resist adding the four headline numbers as though they were a single audited “AI spend” total. Each company defines capital expenditure differently and not every dollar is AI-specific. The scale is still material.

Microsoft said on its FY2026 Q4 earnings call that calendar-year 2026 capex expectations, after a lease-accounting change, were approximately $175 billion. In FY2026 Q4 it spent $41 billion, roughly two thirds on short-lived assets such as CPUs and GPUs, and described customer demand as driving continuing data-center investment.

Primary source:
- Microsoft FY2026 Q4 earnings call. https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q4

Alphabet said in its February 2026 earnings call that it expected 2026 capex of $175–185 billion, with the vast majority directed to technical infrastructure; it described a roughly 60/40 split between servers and data centers/networking and said just over half of ML compute was expected to go to Cloud.

Primary source:
- Alphabet 2025 Q4 / FY2025 earnings call, February 4, 2026. https://abc.xyz/investor/events/event-details/2026/2025-Q4-Earnings-Call-2026-Dr_C033hS6/default.aspx

Meta narrowed its 2026 capex guidance in July 2026 to $130–145 billion, including principal payments on finance leases.

Primary source:
- Meta Q2 2026 results. https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx

Amazon said in February 2026 that it expected to invest about $200 billion in capital expenditures during 2026 across Amazon, citing opportunities including AI, chips, robotics, and low-earth-orbit satellites. Its later shareholder communication said a substantial portion of AWS capex already had customer commitments and cited an OpenAI commitment of more than $100 billion.

Primary sources:
- Amazon Q4 2025 results, February 2026. https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Fourth-Quarter-Results/default.aspx
- Andy Jassy 2025 Letter to Shareholders. https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-2025-letter-to-shareholders

These figures should be presented as evidence of the capital intensity of the race, not proof that the investments are irrational or that the end-user subscription is sold below marginal cost.

## Core economic questions

1. What is the correct unit of AI price: token, query, completed task, hour of expert-equivalent work, or outcome?
2. How rapidly is useful work per dollar improving after accounting for model capability and human correction?
3. Which costs fall with scale and learning, and which grow with capability: training, inference, memory, networking, storage, power, cooling, land, and depreciation?
4. How much of consumer pricing is a customer-acquisition strategy versus an efficient steady-state price?
5. How do subscription limits, model routing, caching, batching, quantization, speculative decoding, and custom silicon change the economics hidden behind a flat monthly fee?
6. Does lower price reduce total compute spend, or does Jevons-style demand expansion cause total consumption to rise faster than unit cost falls?
7. Who captures the gains from cheaper intelligence: model providers, hyperscalers, application companies, employers, workers, consumers, or owners of scarce complementary assets?
8. Which inputs become scarcer when cognition gets cheaper: electricity, verified data, trusted brands, distribution, judgment, legal authority, physical execution, and attention?

## Planned chapter evidence map

1. **The Twenty-Dollar Window** — Plus price and included capabilities; compare with the historical cost of assembling equivalent human services without pretending they are perfect substitutes.
2. **The Product That Ate the Demo** — ChatGPT’s move from research demonstration to persistent product category; use OpenAI launch and product records.
3. **What the Subscription Buys** — Current product capabilities, limits, and routing; keep claims date-stamped.
4. **The Hidden Invoice** — Build the physical and financial stack behind one apparently weightless interaction.
5. **The Hyperscaler Arms Race** — Microsoft, Alphabet, Meta, Amazon capex with accounting caveats.
6. **Stargate** — OpenAI’s announced infrastructure commitments and the physical scale of gigawatts.
7. **Chips, Racks, Megawatts** — accelerators, networking, custom silicon, data centers, grid, cooling, construction.
8. **Capital Before Revenue** — why investors and cloud providers finance capacity ahead of mature monetization; distinguish commitments from realized revenue.
9. **From Sixty Dollars to Cents** — historical API price compression; verify each vintage from archived official pricing before publication.
10. **Intelligence per Dollar** — task-level economics rather than token fetishism.
11. **Jevons for Cognition** — rebound effects and demand expansion; do not claim the Jevons paradox mechanically applies without testing elasticities.
12. **Too Cheap to Meter** — use the phrase as an economic threshold, not literal zero marginal cost.
13. **The Amateur Gets a Staff** — consumer surplus and access to capabilities once purchased through specialists.
14. **The Firm Gets a Thousand Interns** — organizational consequences of abundant low-cost cognitive attempts.
15. **Agents Spend More** — machine-generated demand, recursive tool use, and why automation can increase compute consumption.
16. **The Cost Curve Eats the Org Chart** — where falling cognitive cost changes make/buy/hire decisions.
17. **Electricity Is Not a Metaphor** — the physical constraints beneath digital abundance.
18. **Trust, Taste, and Permission** — complements that do not automatically cheapen with generation.
19. **Who Pays the Rest?** — financing, cloud commitments, advertising/subscription cross-subsidy where documented, and the distinction between subsidy and ordinary capital investment.
20. **After the Meter** — possible steady states: cheap commodity intelligence, differentiated premium cognition, bundled infrastructure, or a mixed market.

## Falsification and counter-evidence

Every chapter should preserve evidence against the strongest version of the thesis.

- Current subscription prices may already be profitable for average users because usage limits and routing constrain expensive workloads.
- Frontier models may remain expensive while smaller models become commodities; there may be no single “price of intelligence.”
- Hyperscaler capex supports existing cloud, advertising, search, devices, and other workloads as well as AI.
- Capital intensity is not proof of bad economics. Electricity, telecom, railroads, and cloud computing also required enormous front-loaded investment.
- AI demand may be sufficiently large to produce strong returns on infrastructure even as per-unit prices fall.
- Model capability gains may raise willingness to pay faster than costs fall.
- Regulation, power scarcity, supply constraints, or safety requirements could keep frontier capability expensive.
- Consumer subscriptions may be loss leaders in some periods and sustainable businesses in others. Do not freeze a temporary strategy into a permanent theory.

## Source discipline

- Prefer official price pages, company filings, earnings transcripts, technical reports, regulatory filings, and government energy/grid data.
- Date-stamp volatile figures.
- Separate cash capex, finance leases, announced commitments, total project value, installed capacity, and operational capacity.
- Separate training from inference and frontier from commodity workloads.
- Never infer per-user profitability from company-wide losses or capital raises.
- When using “subsidy,” identify the mechanism: investor financing, strategic pricing, bundled cloud economics, infrastructure depreciation, free-tier acquisition spending, or public policy. If the mechanism cannot be shown, use a less specific word.
- Distinguish a forecast from a realized result.
- For every numerical comparison, record the source vintage and what would make the comparison misleading.

## What would make the book false?

The book’s strongest claim would fail if consumer frontier-AI pricing turns out to reflect the full sustainable economic cost with little contribution from scale, capital competition, infrastructure investment, or rapid efficiency improvement; if useful-work prices stop falling for a sustained period; and if expanded capability does not materially increase consumption. In that world, AI would remain a valuable but conventionally scarce professional service. The manuscript should be rewritten toward that evidence rather than defend “too cheap to meter” as an article of faith.
