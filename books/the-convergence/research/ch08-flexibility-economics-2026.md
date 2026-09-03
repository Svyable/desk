# Chapter 8 research note — the economics of flexible AI load

## Purpose

Chapter 8 correctly treats workload flexibility as a possible way to reduce the grid impact of large data centers. This note adds an economic constraint that is easy to miss when flexibility is discussed only as an engineering capability: an AI data center may be technically able to curtail and still have strong incentives not to do so because the computing equipment being idled is exceptionally expensive.

## Authoritative evidence

The International Energy Agency’s *Energy and AI* report estimates that an AI-focused data center is roughly ten times more capital-intensive than an aluminium smelter. In its discussion of grid integration, the IEA uses that comparison to explain why curtailing an AI facility can be costly even when the electrical load is technically controllable.

The same analysis also identifies a real countervailing source of flexibility. Many data centers maintain spare server capacity, and operators may be able to use that buffer, onsite storage, backup generation, workload scheduling, or geographic shifting to reduce demand during constrained periods. The IEA therefore does not treat AI load as inherently inflexible; it treats useful flexibility as something whose economic cost and operating constraints must be understood.

Source: International Energy Agency, *Energy and AI* (2025), executive summary and grid-integration analysis: https://www.iea.org/reports/energy-and-ai/executive-summary

## Why this changes the interpretation

A common power-system shortcut is to ask whether a load *can* move. For frontier compute, that is not enough. The relevant question is whether the value of grid relief exceeds the cost of leaving expensive accelerators underused, delaying a workload, violating a service commitment, or moving computation to a less desirable site.

That makes AI flexibility economically different from some familiar demand-response resources. A water heater can often shift consumption with little lost value because the stored hot water still provides the service. A frontier accelerator cluster may lose valuable productive time when curtailed. Both loads are controllable, but the opportunity cost of control can be radically different.

This distinction supports the manuscript’s existing caution that servers are not “magic batteries.” It gives the caution a measurable economic basis rather than leaving it as intuition.

## Strongest counterargument

High capital intensity does not prove that curtailment will be rare or uneconomic. The marginal cost of flexibility depends on the workload and on how the facility is provisioned. A campus with spare compute, batteries, redundant power systems, batch jobs with scheduling slack, or multiple geographic regions may be able to provide meaningful grid flexibility without idling its most valuable hardware for long periods.

Nor does the IEA’s ten-times comparison imply that aluminium smelters and AI data centers have otherwise similar economics. It is a scale comparison used to illuminate capital intensity, not a complete cost-of-curtailment model.

The defensible claim is therefore narrower: **technical controllability is not the same as economically dependable flexibility. The higher the opportunity cost of idle compute, the stronger the price signal, contract, spare-capacity buffer, or operational advantage required to make curtailment rational.**

## Falsification trigger

Revisit this note if operating data show large AI facilities routinely providing dependable demand response at low cost despite high accelerator utilization, or if new architectures make workload shifting nearly costless across the stressed hours that matter most to grid planners. That would weaken the argument that capital intensity materially limits the practical flexibility available from frontier-compute loads.