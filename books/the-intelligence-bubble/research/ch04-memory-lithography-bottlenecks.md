# Chapter 4 research — memory, lithography, and bottleneck migration

Research pass for Chapter 4, “Intelligence Has a Supply Chain.” The purpose is to strengthen the chapter’s central claim that AI infrastructure profits can migrate between complementary bottlenecks rather than remaining permanently attached to the most visible component.

## SK hynix: HBM as a temporary toll booth

Primary source: SK hynix, “SK hynix Announces 3Q25 Financial Results,” October 29, 2025.

https://news.skhynix.com/en/sk-hynix-announces-3q25-financial-results/

The company reported record third-quarter 2025 results driven by AI-server demand for products including HBM, DDR5, and enterprise SSDs. More important for Chapter 4’s argument, SK hynix said discussion of its HBM supply for 2026 had been completed and that demand for its DRAM and NAND products for the next year had been secured. It also said HBM4 shipments would begin in the fourth quarter of 2025 and described continued capacity investment.

Use: This is unusually direct evidence that the binding complement in an AI system can shift from accelerators to memory. A GPU is not economically useful at frontier scale without enough high-bandwidth memory, and memory suppliers can therefore capture scarcity economics even when public attention stays fixed on the accelerator vendor.

Falsification / limitation: A sold or allocated production plan is not evidence of permanent scarcity. It can reflect customer reservation behavior, long lead times, risk management, or a temporary supply-demand imbalance. SK hynix itself was investing to expand capacity and advance HBM4. The investment claim should therefore be framed as “HBM can become the toll booth” rather than “HBM will remain structurally scarce.”

## SK hynix: 2025 annual results and the profitability of the bottleneck

Primary source: SK hynix, “SK hynix Announces FY25 Financial Results,” January 28, 2026.

https://news.skhynix.com/en/sk-hynix-announces-fy25-financial-results/

SK hynix reported 2025 revenue of KRW 97.1467 trillion and operating profit of KRW 47.2063 trillion, both records, and attributed the performance in substantial part to AI memory competitiveness and high-value products including HBM. The company reported a 49 percent full-year operating margin.

Use: The numbers make the chapter’s abstract “temporary toll booth” idea concrete. A complementary component can earn extraordinary economics while it is difficult to substitute and capacity is tight.

Falsification / limitation: These are company-wide results, not HBM-only margins. Do not attribute the full operating margin to HBM. Memory pricing cycles also affect conventional DRAM and NAND, and the company’s mix changed materially during the year.

## TSMC: leading-edge logic and advanced packaging are separate capacity problems

Primary source: Taiwan Semiconductor Manufacturing Company, 2025 Annual Report.

https://investor.tsmc.com/static/annualReports/2025/english/index.html

TSMC said it continued investing in leading-edge and advanced-packaging facilities and described very strong multi-year AI-related demand as one reason for expanding its manufacturing footprint. The company reported 15.0 million 12-inch-equivalent wafer shipments in 2025, up from 12.9 million in 2024, while advanced technologies at 7 nanometers and below accounted for 74 percent of wafer revenue.

Use: Chapter 4 should distinguish “chip fabrication” from “a finished accelerator system.” Leading-edge wafer capacity and advanced packaging are different complements with different construction, equipment, yield, and qualification constraints. Capacity added to one part of the chain does not automatically clear the other.

Falsification / limitation: TSMC’s annual report supports strong AI demand and continued packaging investment but does not by itself quantify a universal packaging shortage or prove that packaging will remain the binding constraint. Keep the language about bottlenecks conditional and time-specific.

## ASML: lithography capacity is not just another interchangeable input

Primary source: ASML, 2025 Annual Report / financials, published February 25, 2026.

https://www.asml.com/en/investors/annual-report/2025/financials

ASML reported 15.6 percent sales growth in 2025, describing AI investment as an important driver. It also highlighted the productivity of its TWINSCAN NXE:3800E EUV system and a significant number of field upgrades that increased customers’ effective EUV capacity.

Use: This sharpens a useful distinction in the chapter. Supply response is not limited to building another factory. A bottleneck can ease through higher tool throughput, field upgrades, yield improvement, redesign, or better utilization. That means analysts who count only announced fabs or installed machines can miss how quickly effective capacity changes.

Falsification / limitation: ASML’s revenue growth is not a clean measure of AI demand because lithography serves many semiconductor end markets. The company itself has emphasized unequal effects across customers and macroeconomic/geopolitical uncertainty. Avoid treating every EUV sale as an AI sale.

## Synthesis for the manuscript

The chapter’s strongest extension is not another inventory of scarce parts. It is the mechanism by which the bottleneck migrates.

A system can move through several regimes:

1. accelerator allocation is the binding constraint;
2. accelerators arrive, but HBM or packaging limits completed systems;
3. packaged systems arrive, but networking, cooling, or power delays utilization;
4. physical delivery catches up, and the economic bottleneck becomes customer demand or workload utilization.

This sequence matters because the company earning scarcity returns can change even while aggregate AI demand keeps rising. The supply chain can therefore create several correct bullish observations at different moments without making all of the corresponding equities good long-duration investments.

The countercase should remain visible. Some constraints are unusually durable because they are protected by accumulated process knowledge, software ecosystems, qualification requirements, intellectual property, trusted execution, or a tiny supplier base. “Bottlenecks migrate” does not imply that every moat disappears quickly. The analytical task is to separate a durable capability from a temporary shortage around that capability.

## Checked

Sources were rechecked against current primary company materials on September 1, 2026. No claim in this note should be read as a forecast of future margins, capacity, or market share. The sources establish observed demand, investment, capacity response, and company-reported economics; the investment interpretation remains analysis.