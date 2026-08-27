# Figure and Data Plan

This file turns the book’s conceptual claims into reproducible data work. Figures should be prepared from the original dataset when possible, with raw values preserved separately from any transformations used for publication.

## Figure 1 — From metabolism to external power

### Purpose

Open the book with orders of magnitude rather than a fake continuous prehistoric time series.

### Data strategy

- Use human metabolic power only as a physical reference range, not a claim about archaeological population energy budgets.
- Mark archaeological fire evidence as dated events/ranges from Wonderwerk Cave and Gesher Benot Ya‘aqov.
- Do not draw a smooth curve of “human energy use” through deep prehistory unless an explicit reconstruction supports it.

### Source stack

- Berna et al. 2012, Wonderwerk Cave.
- Goren-Inbar et al. 2004, Gesher Benot Ya‘aqov.
- Later historical energy reconstructions only after agriculture/recorded history.

## Figure 2 — Farming: productivity, population, and surplus are different variables

### Purpose

Prevent Chapter 2 from implying that adoption of agriculture must have been driven by higher labor productivity.

### Data strategy

Create a conceptual evidence panel rather than combining incompatible data into one line:

1. Bowles’ estimated caloric returns per labor hour for foraging and early cultivation.
2. Bocquet-Appel’s Neolithic Demographic Transition signal.
3. Kohler et al. house-size Gini measures by adaptation/political scale.

### Warning

These are different samples and methodologies. Do not make a synthetic index from them.

## Figure 3 — The diffusion of steam before 1800

### Purpose

Show that invention, engine building, and economic impact are different timelines.

### Dataset

John Kanefsky, Early Engines Database, 2024 version.

### Fields to extract

- first useful-work date
- engine type
- builder
- location
- industry/application
- horsepower or duty where available

### Pair with

Crafts’ estimates of steam’s later contribution to growth and official UK coal series beginning in 1853.

## Figure 4 — Coal and British industrial power

### Purpose

Show the scale and persistence of the coal system without pretending the official series covers the entire Industrial Revolution.

### Dataset

UK DESNZ historical coal production, availability, and consumption, 1853–2025.

### Required annotations

- official-series start date
- coal peak(s)
- transition toward petroleum, gas, and electricity using Fouquet/Pearson or another compatible long-run series

## Figure 5 — From isolated generation to a networked electricity industry, 1902–1912

### Purpose

Use original Census records to show the rapid growth of central electric stations and connected end-use equipment.

### Datasets

- U.S. Census, *Central Electric Light and Power Stations, 1902*.
- U.S. Census, *Central Electric Light and Power Stations and Street and Electric Railways, 1912*.

### Candidate variables

- stations
- construction/equipment cost
- income
- generator/primary-power horsepower
- incandescent lamps wired for service
- stationary motors served
- meters
- purchased-current stations

### Known historical result to verify from tables

The 1912 report states that incandescent lamps wired for service increased 335.7% from 1902 to 1912. Verify the underlying table before publication.

## Figure 6 — Electricity and manufacturing productivity

### Purpose

Show electricity as organizational technology, not only energy substitution.

### Sources

- Fiszbein et al., NBER Working Paper 28076, revised 2024.
- U.S. Census manufacturing/electrical-industry data used in the study if replicable.

### Candidate display

Electrification exposure versus labor-productivity effects, with the identification strategy explained in the caption rather than implying a simple raw correlation.

## Figure 7 — The price of light across centuries

### Purpose

Make the energy-service thesis concrete.

### Sources

- Fouquet and Pearson 2006.
- Nordhaus 1996/1997.

### Unit discipline

Use a consistent lighting-service unit such as lumen-hours when available. Distinguish the cost of fuel, the efficiency of conversion, and the price of the delivered service.

## Figure 8 — Energy use, income, and saturation

### Purpose

Show both the strong development relationship and diminishing welfare returns.

### Data stack

- Energy Institute 2026 country energy data.
- Maddison Project 2023 for historical income where appropriate.
- World Bank/UN human-development variables or the exact data series used by Mazur for replication.
- Tracking SDG7 2026 for access measures.

### Candidate panels

1. Energy use per capita vs. GDP per capita.
2. Electricity/energy use vs. life expectancy or another welfare outcome, using a nonlinear fit.
3. Highlight low-energy countries where marginal access is most consequential and high-energy countries where welfare indicators saturate.

### Warning

Do not treat a cross-sectional relationship as a causal dose-response curve.

## Figure 9 — Falling energy intensity is not falling capability

### Purpose

Show why GDP can rise faster than primary energy.

### Sources

- Csereklyei, Rubio-Varas, and Stern 2016.
- Energy Institute / IEA modern series.
- Maddison or World Bank GDP series with a consistent price basis.

### Variables

- primary energy per unit GDP
- electricity share of final energy where available
- GDP per capita
- optional useful-work/exergy series for historical case studies

## Figure 10 — The Age of Electricity

### Purpose

Compare total energy-demand growth with electricity-demand growth.

### Sources

- IEA *Global Energy Review 2026* for observed 2025.
- IEA *Electricity 2026* for observed/forecast electricity series through 2030.

### Publication rule

Observed values and forecast values must use visibly different line styles or panels and the forecast boundary must be labeled.

## Figure 11 — What is building the new power system?

### Purpose

Separate installed capacity from generated electricity and from capital spending.

### Sources

- IRENA Renewable Capacity Statistics 2026.
- IRENA Renewable Power Generation Costs in 2025.
- IEA World Energy Investment 2026.
- IAEA PRIS for nuclear.

### Candidate panels

- annual capacity additions by technology
- generation by technology
- investment by category
- levelized cost for newly commissioned renewables, preserving IRENA methodology

## Figure 12 — Solar and batteries as mechanism-driven learning curves

### Purpose

Show that cost decline has causes rather than magic.

### Sources

- Kavlak, McNerney, Trancik 2018 for PV.
- Ziegler & Trancik 2021 and Ziegler, Song & Trancik 2021 for lithium-ion.
- NLR Q1-2025 PV System Cost Benchmark for a current U.S. system snapshot.

### Candidate display

Split historical cost decline into documented contributors such as efficiency/energy density, materials, R&D, scale, and other manufacturing changes where the papers support decomposition.

## Figure 13 — AI’s power envelope

### Purpose

Show why computation is becoming a grid-planning variable.

### Sources

- LBNL 2024 U.S. Data Center Energy Usage Report.
- IEA Energy and AI 2025.
- NERC 2025 Long-Term Reliability Assessment.

### Variables

- U.S. data-center electricity consumption historical estimates, 2014 onward
- scenario range through 2028 from LBNL
- global data-center scenarios from IEA
- regional large-load forecast contribution from NERC

### Warning

Do not combine U.S. and global series on one axis without clear labels. Preserve scenario ranges.

## Figure 14 — The queue is not the grid

### Purpose

Show the difference between proposed resources and completed interconnections.

### Source

LBNL Queued Up 2026 database/report.

### Variables

- active queue capacity by technology
- storage capacity
- time in queue
- withdrawal/completion rates
- completed capacity by cohort

### Required annotation

Gross queued GW must never be described as future installed capacity.

## Figure 15 — The bottleneck moves

### Purpose

Put multiple complementary constraints on one timeline without creating a false common unit.

### Candidate small multiples

- transmission expansion need: DOE National Transmission Needs/Planning Studies
- generator/storage queue: LBNL
- load growth: NERC
- transformer lead times: DOE Office of Electricity

### Warning

Use separate scales. The point is synchronized constraint, not a composite “bottleneck index.”

## Figure 16 — Nuclear: the same physics, different construction systems

### Purpose

Show international variation rather than a universal nuclear cost trend.

### Sources

- IAEA PRIS: reactor dates, capacity, operational status.
- Lovering, Yip, Nordhaus 2016: reactor-specific overnight-cost dataset across seven countries.

### Candidate variables

- overnight construction cost per kW, constant currency
- construction duration
- reactor size
- start/completion date
- country/program
- operating capacity factor from PRIS where comparable

### Warning

Do not compare overnight cost with financed all-in project cost as though they are the same metric.

## Figure 17 — Energy access: where marginal energy still matters most

### Purpose

Put distribution at the center of the thesis.

### Sources

- Tracking SDG7 2026.
- WHO household-air-pollution data.

### Candidate panels

- people without electricity access
- people without clean cooking
- regional distribution
- household-air-pollution health burden

### Framing

This figure should make clear that “less energy” is not a neutral prescription for populations still lacking basic modern services.

## Figure 18 — The carbon cost of the fossil abundance era

### Purpose

Count environmental externality as part of the energy story rather than as an epilogue.

### Source

Global Carbon Budget 2025, DOI 10.5194/essd-18-3211-2026, dataset DOI 10.18160/GCP-2025.

### Variables

- fossil CO2 emissions by fuel
- land-use emissions separately
- atmospheric growth, land sink, and ocean sink when needed

### Warning

Keep carbon emissions and broader climate damages conceptually separate unless a damage model is explicitly sourced.

## Figure 19 — Frontier technologies by evidence level

### Purpose

Prevent Chapter 11 from conflating commercial deployment with laboratory milestones.

### Suggested columns

- technology
- demonstrated physical result
- demonstrated commercial result
- current scale
- cost metric
- main remaining constraint
- source date

### Examples

- solar PV: commercial, globally deployed
- lithium-ion storage: commercial, globally deployed
- fission: commercial, globally deployed
- enhanced geothermal: commercial conventional base plus emerging EGS demonstrations
- inertial fusion: repeated scientific ignition/target gain; not commercial power
- magnetic fusion: high-energy DT experiments; not commercial power

## Data-handling protocol

For every figure:

1. Save the original source URL, dataset title, release date, and download date.
2. Record exact table/sheet/series names.
3. Preserve raw files unchanged outside any chart-transformation step.
4. Record unit conversions explicitly.
5. Mark observed, estimated, reconstructed, forecast, target, and scenario values.
6. Never splice series from different accounting conventions without a documented bridge.
7. Keep capacity (GW), energy (GWh/TWh/EJ), power (GW), cost ($/kW, $/kWh, $/MWh), and efficiency (%) distinct.
8. If a figure is visually persuasive but statistically ambiguous, omit it rather than letting design imply causation.
