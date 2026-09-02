# Interlude — Who Pays for the Boom?

Every capital boom eventually produces an invoice.

The difficult part is finding out whose name is on it.

During the expansion phase, the answer can look pleasantly diffuse. A model company signs a cloud contract. The cloud signs a data-center lease. The data-center developer signs a power agreement. The utility orders equipment. An infrastructure fund supplies equity. Banks provide debt. Equipment lenders finance servers. A municipality improves roads. A state offers incentives. A customer reserves more capacity than it immediately needs because being short looks dangerous.

Each contract turns one forecast into somebody else's revenue.

That is how a buildout becomes an economy.

It is also how a forecast error can travel.

When people ask whether AI infrastructure is overbuilt, they often imagine a binary outcome: either the machines are needed or they are not. That misses the more interesting possibility. The machines can be needed, busy, strategically important, and still fail to earn the return expected by the capital that bought them.

To see why, it helps to put a fictional project on a spreadsheet.

The numbers that follow are deliberately stylized. They are not an estimate of CoreWeave, a hyperscaler, or any particular data center. There is no universal cost per megawatt, accelerator, or useful token. Hardware generations differ. Financing structures differ. Power prices differ. Some owners buy land and equipment; others lease them. Some customers sign long commitments; others buy capacity on shorter terms.

The purpose of the exercise is narrower: expose the sensitivity hidden by a large revenue number.

**A Hundred-Megawatt Spreadsheet**

Imagine a 100-megawatt AI project with $5 billion of total invested capital.

Suppose $3.5 billion sits in the comparatively fast-moving layer: accelerators, servers, networking, and related equipment whose competitive economic life is much shorter than the concrete surrounding it. The remaining $1.5 billion sits in land, buildings, electrical infrastructure, cooling, and other longer-lived assets.

Assume the project is financed with $3 billion of debt and $2 billion of equity. The debt costs 8 percent, producing $240 million of annual interest.

Now make one additional economic adjustment that ordinary growth discussions often postpone. The short-lived equipment eventually has to be refreshed. If the $3.5 billion compute layer has an average five-year economic replacement cycle, a rough internal capital-recovery allowance is $700 million a year.

This is not GAAP depreciation. It is a way of refusing to pretend that the first hardware purchase is the last one.

Add $300 million a year for the combination of site operations, power, maintenance, networking, staffing, and other recurring costs in this simplified project.

The project now carries about $1.24 billion of annual burden before taxes and before providing the equity holder with any explicit target return:

- $240 million of interest;
- $700 million of economic replacement allowance;
- $300 million of operating and infrastructure cost.

Suppose that at the launch pricing regime, running economically productive work at 100 percent of usable capacity would generate $2.4 billion of annual revenue. Assume that costs varying directly with usage consume 15 percent of that revenue.

At first glance, this is an excellent business.

At 85 percent utilization and the original price, annual revenue is about $2.04 billion. After the 15 percent variable cost, roughly $1.73 billion remains. Subtract the $1.24 billion annual burden and the project has about $494 million left before taxes and any additional claims on cash.

That looks healthy enough to encourage another campus.

Now change the utilization rate without changing the technology.

At 65 percent utilization and the original price, revenue falls to about $1.56 billion. Contribution after variable cost is roughly $1.33 billion. Only about $86 million remains after the same annual burden.

The project is still busy.

Its revenue is still measured in billions.

Its economics have almost disappeared.

Now leave utilization at 65 percent and cut the realized price by 20 percent as new capacity arrives, customers gain bargaining power, newer hardware lowers the market-clearing cost of equivalent work, or routing software shifts routine jobs toward cheaper alternatives.

Revenue becomes roughly $1.25 billion. Contribution after variable cost is about $1.06 billion. Against the same $1.24 billion burden, the project is short about $179 million before taxes and before any equity return.

Nothing in this scenario requires a collapse in AI use.

The campus can be serving enormous workloads.

The customer can be delighted.

The project can still fail its underwriting.

The sensitivity works the other way too. Keep utilization at 85 percent but let realized price fall 35 percent. Revenue is still about $1.33 billion. The machines are still heavily occupied. Yet contribution after variable cost is about $1.13 billion, leaving the project roughly $113 million short of its simplified annual burden.

A high load factor did not save it because yield moved.

This is the arithmetic capacity businesses eventually learn. Utilization and price multiply each other. Fixed obligations do not care which one disappointed.

A project sold during scarcity can therefore cross from attractive to impaired without any dramatic event. It does not require empty buildings, broken models, or customers abandoning AI. A twenty-point utilization miss combined with ordinary price compression can be enough.

This is why a mature AI-infrastructure metric will need to capture both occupancy and yield. A machine that is busy at the wrong price is not economically full.

There is a second lesson in the example. The $700 million replacement allowance matters more than the electricity bill in the simplified project. That will not be true for every workload or site, and power can become extraordinarily important where it is constrained. The point is that technological obsolescence can be a larger financial variable than people trained on ordinary real estate expect.

The shell may last for decades.

The revenue-producing machinery may need to be renewed several times before the mortgage-like infrastructure beneath it reaches middle age.

The building and the compute fleet do not share one duration simply because they appear in the same photograph.

**A Sensitivity Table, Not a Forecast**

The same stylized assumptions can be compressed into four cases:

| Utilization | Realized price vs. launch | Revenue | Contribution after 15% variable cost | Cash after $1.24B annual burden |
|---:|---:|---:|---:|---:|
| 85% | 100% | $2.04B | $1.73B | +$494M |
| 65% | 100% | $1.56B | $1.33B | +$86M |
| 65% | 80% | $1.25B | $1.06B | -$179M |
| 85% | 65% | $1.33B | $1.13B | -$113M |

The table should not be mistaken for a market forecast. Change the financing, customer contract, equipment life, power cost, tax treatment, residual value, or capex structure and every number moves.

The robust feature is the shape.

When a business combines heavy fixed investment with falling unit prices, small errors compound.

This gives us a better way to ask whether the boom is financially safe.

Do not ask whether AI demand will be large.

Ask how much adverse movement the capital structure can survive while demand remains large.

That is a much harder test.

**The Loss Has to Land Somewhere**

Suppose the stylized project does enter the negative case.

The $179 million shortfall does not evaporate. Somebody absorbs it, postpones it, refinances it, renegotiates it, or transfers it.

There is no single universal waterfall because AI projects are financed differently. A hyperscaler using internal cash has a different loss path from a project-financed campus. A long take-or-pay agreement changes the order again. A strong parent guarantee can push risk back toward the customer. A regulated utility can allocate costs differently from a merchant generator.

Still, the economic incidence usually moves through a recognizable set of claims.

Equity is designed to be the first shock absorber. If revenue is below plan or costs are above it, the equity holder earns less. A project can remain fully solvent while the return on equity falls from excellent to mediocre. This is the quietest version of the bubble thesis because nothing defaults. The investment simply disappoints.

If the shortfall becomes large enough, junior creditors and unsecured lenders become more exposed. A refinancing that once looked routine can require a higher coupon, more collateral, an equity injection, or a reduction in principal. The asset can remain useful while the old capital structure becomes untenable.

Equipment lenders and lessors face a different question: what is the hardware worth somewhere else? Repossession is not the same as recovery. If one borrower fails in isolation, there may be a healthy secondary market. If many similar borrowers fail after a new hardware generation changes price-performance, the lenders can discover that resale value was correlated with the same cycle that caused the default.

The landlord or data-center developer can appear protected by a long lease. That protection is valuable, but economic duration is not identical to contractual duration. A distressed tenant can negotiate, reject obligations in bankruptcy where law permits, reduce expansion, or leave the landlord facing a specialized facility whose next user requires additional capital.

Utilities and their customers occupy an even stranger position because part of the infrastructure can be regulated and socialized. A substation or transmission reinforcement built for one giant load may remain useful to the system after the original customer changes plans. Regulators then have to decide whether the cost belongs to the departing customer, the next customer, or the broader rate base.

Municipalities can be in the chain too. Roads, water systems, tax incentives, bond-financed improvements, and promised tax revenues can all depend on a project reaching its expected scale. A private forecast can leave public residue.

Then, after the write-down, another group appears.

The beneficiaries.

A new owner can buy the campus at a lower basis. A startup can rent compute at a price the original owner could not afford to offer. An enterprise can renegotiate capacity after scarcity premiums disappear. A region can inherit grid infrastructure whose first use case underperformed. Application companies can build products on cheap inference supplied by somebody else's impaired capital.

The losses and benefits do not have to belong to the same people.

That is why productive overbuild is so politically and financially confusing. Society can receive a useful asset without rewarding the investor who financed its first price.

**Virginia Writes the Risk Allocation Into the Tariff**

The question of who pays is already moving from theory into utility regulation.

Virginia is one of the largest and most important data-center markets in the United States. Its State Corporation Commission has had to confront a practical problem: if enormous new loads require generation, transmission, and distribution investment, how much of the forecast risk should ordinary customers bear?

In its 2025 Dominion Energy proceeding, the Commission created a separate GS-5 rate class for very large users, including hyperscale data centers. The rules are unusually revealing because they make capital-cycle concerns explicit.

For new qualifying large-load customers contracting from January 1, 2027, the minimum service obligation is fourteen years. Large-load customers must pay at least 85 percent of the transmission and distribution costs incurred to serve them each month regardless of actual electricity use. The Commission also adopted generation-related minimum-demand protections, and customers without sufficient credit can face collateral requirements covering a large share of minimum contractual charges.

The regulator's language is not about whether AI is exciting.

It is about cost shifting.

A utility can build rationally for a creditworthy customer's request and still create stranded-cost risk if the customer uses much less power than forecast. Minimum bills, long commitments, and collateral make the reservation more expensive to abandon. They force more of the forecast risk back toward the party making the forecast.

This is financially healthy precisely because it makes the demand signal less flattering.

A request backed by a fourteen-year obligation and minimum charges is more informative than a request backed mainly by enthusiasm.

The same principle should interest investors outside regulated utilities. Strong contracts do not eliminate risk, but they reveal who has agreed to own it.

A capital-cycle analyst should read the cancellation clause with the same attention normally given to the growth forecast.

**Not All Capital Wants the Same Return**

So far the argument has assumed that capital is trying to maximize a financial return.

That assumption is increasingly incomplete.

Governments and sovereign investment vehicles are becoming direct participants in AI infrastructure because compute has acquired strategic value. They care about economic returns, but they may also care about resilience, national security, industrial capability, language, data sovereignty, domestic employment, supply-chain independence, and the option to train or operate advanced systems without relying entirely on a foreign provider.

Those objectives change the hurdle rate.

Europe provides a clear example. By August 2026, the European Commission described a network of nineteen AI Factories and thirteen associated antennas built around EuroHPC supercomputing resources. The next step is larger: a tender for up to seven AI Gigafactories, each conceived at a scale of more than 100,000 advanced AI processors. The Commission says the program can receive up to €10 billion in EU and national support and is intended to unlock at least €20 billion of private investment.

The stated objective is not merely cloud revenue.

It is technological sovereignty and strategic autonomy.

Saudi Arabia is pursuing a different institutional model. The Public Investment Fund launched HUMAIN in 2025 as a PIF-owned company spanning data centers, cloud infrastructure, models, and applications. PIF describes the project as part of economic diversification and the effort to make Saudi Arabia a globally competitive AI hub; its current portfolio description speaks of infrastructure incorporating hundreds of thousands of advanced GPUs.

These programs should not be dismissed as irrational subsidies. A state may rationally pay for capabilities whose benefits do not appear on the income statement of the compute facility.

A reserve army is not judged by return on assets.

A strategic petroleum reserve does not need to maximize inventory turns.

A domestic semiconductor capability can be valuable even if the cheapest short-run option is importing everything.

Compute can acquire some of the same logic.

The project can fail a narrow private-equity hurdle and still succeed at a national objective.

This is one of the strongest counterarguments to a simple AI-bubble thesis. If enough buyers value strategic capacity rather than only commercial cash flow, demand can persist longer, prices can remain firmer, and infrastructure investment can continue after a conventional financial model would have slowed.

But the counterargument has a second edge.

Strategic capital can prolong the buildout beyond the level private demand alone would support.

Public money can absorb returns that private capital would reject. Sovereign buyers can duplicate capacity for resilience. National champions can build entire stacks partly to create domestic capability. Private partners can interpret those purchases as evidence of a structurally tight market and invest alongside them.

The resulting capacity is real.

Later it may compete in the same world as commercially financed capacity.

Strategic investment can therefore be both rational for the state and deflationary for the industry.

This is not a paradox once the objectives are separated.

A government may be pleased that domestic compute is abundant and cheap.

A private owner of compute scarcity may not be.

**Strategic Return on Invested Capital**

Investors need a vocabulary for this difference.

Ordinary return on invested capital asks what operating profit the project earns relative to the capital committed.

Strategic return is harder to measure. What is the value of knowing that domestic researchers can access compute during a geopolitical rupture? What is the value of developing a local engineering workforce? What is the value of training a nationally important language model on infrastructure subject to domestic law? What is the option value of controlling capacity before anyone knows which future capability becomes strategically essential?

These are real questions.

They are also invitations to self-deception.

Almost any bad investment can be defended by inventing an intangible strategic benefit after the fact. A serious state-capital analysis therefore needs the same discipline as a private one: specify the objective before the money is spent and state what evidence would show that the objective was not achieved.

Did local firms actually gain access?

Did domestic capability improve?

Did researchers use the machines?

Did the program reduce a dependency it was designed to reduce?

Did the country acquire expertise or merely import a finished stack?

Did the capacity remain useful after the first hardware cycle?

The fact that the hurdle rate is different does not mean there is no hurdle.

It means the denominator contains more than cash.

**Four Kinds of Demand**

The AI buildout therefore contains at least four economically different kinds of demand.

There is productive demand: a customer buys compute because the resulting service earns or saves more than it costs.

There is option demand: a company reserves capacity because the cost of being short might exceed the cost of temporary overprovisioning.

There is strategic demand: a government or corporation buys capacity because control, resilience, or competitive position has value beyond the direct workload economics.

And there is financed demand: a customer can buy because another participant in the ecosystem supplied the capital that makes the purchase possible.

All four can produce signed contracts.

They should not receive the same multiple.

Productive demand tends to survive when budgets tighten because it can defend itself with an operating result.

Option demand can disappear when scarcity disappears.

Strategic demand can survive weak financial returns but may depend on politics, policy, or national priorities.

Financed demand is durable only when the system eventually reaches cash generated outside the financing loop.

A backlog number can contain several of these species at once.

The investment problem is to identify the mixture.

**The Invoice Test**

A useful way to end an AI infrastructure pitch is to remove the word AI from it.

A company wants five billion dollars today to build a capacity asset whose highest-value equipment may need replacement within several years. The asset depends on a small number of large customers. The product's unit price is likely to fall. Competitors are expanding. Efficiency improvements can reduce the input required per unit of output. Some customers are buying strategic insurance as much as present consumption. The project may be socially useful even if its original capital structure fails.

What return would you require?

What contract protections would you demand?

How much leverage would you tolerate?

Which part of the asset would you lend against?

What would you assume about residual value?

Who pays if the customer uses only sixty percent of the forecast?

What happens if the market price falls twenty percent before refinancing?

Those questions sound less glamorous than a discussion about machine intelligence.

That is why they are useful.

The intelligence can be extraordinary while the invoice remains ordinary.

The invoice has an amount.

It has a due date.

And eventually it has an owner.
