# Research — Interlude: Who Pays for the Boom?

**Research cutoff:** September 1, 2026

This note supports the new capital-incidence interlude and Appendix E. The interlude combines a deliberately stylized project model with primary-source examples showing how infrastructure forecast risk is allocated among customers, utilities, private capital, and strategic/public capital.

## The 100-megawatt project model

The project in the interlude is **illustrative, not an estimate of any named company or a claim about a universal data-center cost structure**.

Its assumptions are chosen to expose sensitivity rather than to represent a market median:

- $5.0B total invested capital;
- $3.5B assigned to shorter-lived compute/network equipment;
- $1.5B assigned to longer-lived site, building, electrical and cooling infrastructure;
- $3.0B debt at an assumed 8% cost, producing $240M annual interest;
- a five-year economic replacement allowance on the $3.5B fast-moving equipment layer, producing $700M a year;
- $300M of simplified annual operating, power, networking, maintenance and staffing cost;
- $2.4B maximum annual billings at 100% economically productive utilization in the launch pricing regime;
- variable costs equal to 15% of revenue.

The resulting $1.24B annual burden is not GAAP depreciation and is not intended as a forecast of accounting earnings. The replacement allowance is an internal economic device used to prevent the model from treating the first accelerator fleet as permanent capital.

The arithmetic in the manuscript follows directly from those assumptions:

| Utilization | Realized price | Revenue | Contribution after 15% variable cost | Cash after $1.24B annual burden |
|---:|---:|---:|---:|---:|
| 85% | 100% | $2.040B | $1.734B | +$494M |
| 65% | 100% | $1.560B | $1.326B | +$86M |
| 65% | 80% | $1.248B | $1.061B | -$179M |
| 85% | 65% | $1.326B | $1.127B | -$113M |

The robust claim is the interaction among utilization, realized price and fixed capital burden. All specific dollar assumptions should remain labeled hypothetical unless later replaced by a reported project with attributable economics.

The existing [`source-ledger.md`](source-ledger.md) contains the primary filing evidence used elsewhere in the book for CoreWeave debt, leases, backlog, customer concentration, hardware commitments and the distinction between short-lived compute assets and long-lived physical infrastructure.

## Virginia SCC — allocating large-load forecast risk

### State Corporation Commission — Data Center Initiatives
- https://www.scc.virginia.gov/about-the-scc/scc-facts/
- Current SCC summary of safeguards adopted for large-load customers such as hyperscale data centers.
- Used for:
  - separate GS-5 rate class for large-load customers;
  - minimum 14-year service obligation for qualifying new large-load customers contracting on or after January 1, 2027;
  - minimum payment of 85% of transmission and distribution costs incurred to serve qualifying customers regardless of actual usage;
  - collateral obligations for customers without sufficient credit, potentially covering up to 60% of minimum contract charges;
  - the stated policy objective of minimizing cost shifting to other customer classes.
- Manuscript use: Interlude, section “Virginia Writes the Risk Allocation Into the Tariff.”

### State Corporation Commission — November 25, 2025 biennial review release
- https://www.scc.virginia.gov/about-the-scc/newsreleases/release/scc-issues-order-on-dev-biennial-review-2025/scc-rules-in-dev-biennial-review-case.html
- Used for: confirmation that the new class applies to customers demanding 25 MW or more and that the approved protections include minimum payments tied to contracted transmission/distribution demand and generation demand.
- Editorial caution: tariff details are jurisdiction-specific and should not be generalized to all U.S. utilities.

## European Union — public compute as strategic infrastructure

### European Commission — AI Factories
- https://digital-strategy.ec.europa.eu/en/policies/ai-factories
- Updated August 12, 2026.
- Used for:
  - 19 AI Factories and 13 associated AI Factory Antennas being established;
  - at least nine new AI-optimized supercomputers across the network;
  - planned AI Gigafactories combining more than 100,000 advanced AI processors with power, networking and data-center infrastructure;
  - up to €10B in EU and national support for the Gigafactory initiative, expected to unlock at least €20B in private investment;
  - the explicit policy framing around technological sovereignty and strategic autonomy.
- Manuscript use: Interlude, section “Not All Capital Wants the Same Return.”

### European Commission — AI Gigafactories tender launch, July 30, 2026
- https://digital-strategy.ec.europa.eu/en/news/eu-launches-ai-gigafactories-call-boost-europes-computing-capacity-and-unlock-more-eu30-billion
- Used for: tender for up to seven AI Gigafactories and the public/private financing structure above.
- Editorial use: evidence that a meaningful share of frontier compute investment can be justified by sovereignty, resilience and ecosystem goals as well as project-level financial return.

## Saudi Arabia — sovereign full-stack AI investment

### Public Investment Fund — HUMAIN portfolio page
- https://www.pif.gov.sa/en/our-investments/our-portfolio/humain/
- Used for:
  - HUMAIN as a PIF-backed full-stack AI company spanning data centers, cloud, models and applications;
  - the stated national goals of economic diversification, local innovation, capability building and positioning Saudi Arabia as a globally competitive AI hub;
  - the current PIF description of planned infrastructure incorporating hundreds of thousands of advanced NVIDIA GPUs.
- Manuscript use: Interlude, section “Not All Capital Wants the Same Return.”

### Public Investment Fund — HUMAIN launch, May 12, 2025
- https://www.pif.gov.sa/en/news-and-insights/press-releases/2025/hrh-crown-prince-launches-humain-as-global-ai-powerhouse/
- Used for: confirmation that HUMAIN was launched as a PIF-owned company intended to operate and invest across the AI value chain, including next-generation data centers and cloud infrastructure.

## Analytical boundary

The interlude does **not** claim that government-backed AI projects are economically irrational, that public money necessarily crowds out private capital, or that strategic demand is “fake.”

The mechanism under examination is different: capital with security, resilience, industrial-policy or sovereignty objectives can rationally accept a different financial hurdle rate from ordinary private capital. That can sustain investment through periods when a purely commercial project would slow, while also creating real future capacity that may affect industry pricing.

The correct comparison is therefore not “real demand” versus “fake demand.” It is **different demand with different objective functions**.

## Appendix E — scenario discipline

The three 2030 states are analytical scenarios, not forecasts with assigned probabilities.

They should be scored against observable variables already supported elsewhere in the book and source ledger:

- inference price per fixed capability;
- model substitution and price dispersion;
- delivered versus announced capacity;
- realized utilization and yield;
- renewal pricing and committed volumes;
- expansion versus replacement capex;
- secondary-market hardware values and infrastructure transaction prices;
- refinancing outcomes;
- large-load tariff protections and contract terms;
- the share of incremental compute supported by governments, sovereign funds, national champions or explicitly strategic corporate spending.

A future revision should record misses as well as hits. If price deflation slows materially while utilization, residual values, renewal economics and post-replacement free cash flow remain strong, the capital-cycle thesis should be weakened rather than reinterpreted after the fact.
