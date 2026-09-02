# Chapter 15 research — The GPU Waiting List

## Core claim

Scarce AI compute is not allocated by price alone. Cloud platforms layer prices with quotas, reservations, region/model-specific capacity limits, scheduling windows, and interruption rules. That makes high-end accelerator access a useful modern case of mechanism design: the scarce object is divisible in time but constrained by geography, network topology, power, hardware generation, and the provider's own capacity planning.

## Verified evidence

- **Amazon EC2 Capacity Blocks for ML.** AWS lets customers reserve accelerated-compute capacity for a future start date and fixed window. Current documentation says Capacity Blocks can be scheduled up to eight weeks ahead, can run for extended fixed durations, and are designed to provide assured GPU access for training, fine-tuning, prototyping, and inference surges. Supported offerings include current NVIDIA accelerator families and AWS Trainium. This is a direct example of scarce compute being allocated through advance reservation and provider-defined capacity windows rather than pure spot clearing. Sources: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-blocks.html and https://aws.amazon.com/ec2/capacityblocks/
- **AWS GovCloud expansion, June 12, 2026.** AWS announced Capacity Blocks for ML in GovCloud, allowing government and regulated-industry customers to reserve GPU capacity. The announcement states that customers can reserve capacity in advance and coordinate blocks across accounts, reinforcing that assured access is itself a product layered on top of compute pricing. Source: https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-ec2-capacity-blocks-ml-govcloud/
- **Google Cloud GPU quotas.** Google Compute Engine documentation explicitly requires project and region/model-specific GPU quota. Running instances and reservations consume quota, and separate quota categories can apply to standard, Spot/preemptible, workstation, and committed-use provisioning. A customer can therefore be willing to pay the posted price and still lack authorization/capacity to launch the desired number and type of GPUs. Source: https://docs.cloud.google.com/compute/resource-usage
- **Google future accelerator reservations.** Google Cloud's Cluster Director documentation describes account-team-mediated future reservations for large GPU machine types such as A4X, A4, A3 Ultra, and A3 Mega, with requested zone, quantity, and start time subject to availability. This supports the chapter's distinction between a cloud catalog price and actual guaranteed access to a large contiguous accelerator cluster. Source: https://docs.cloud.google.com/cluster-director/docs/reserve-capacity

All documentation above was rechecked September 2, 2026.

## Mechanism-design distinctions for the chapter

- **Price versus permission.** A posted hourly price is not equivalent to an entitlement to arbitrary capacity. Quota is an administrative ceiling; reservation is an advance claim on future capacity; Spot/preemptible capacity is cheaper partly because the provider can reclaim or interrupt it.
- **Single accelerator versus cluster.** Large training runs need many accelerators simultaneously plus suitable high-bandwidth networking. One available GPU does not substitute cleanly for a missing contiguous cluster. Scarcity therefore includes topology and synchronization, not merely chip count.
- **Now versus later.** Capacity Blocks turn time into an allocation dimension. A customer may trade immediacy for a future guaranteed window. This resembles appointment allocation more than a frictionless commodity market.
- **Guaranteed versus interruptible.** Providers segment demand by reliability requirements. A flexible experiment may use interruptible capacity; a tightly scheduled distributed training run may value assurance more highly.
- **Project quota versus physical capacity.** Do not conflate a quota increase with the existence of hardware. Administrative permission can be necessary without being sufficient for actual launch capacity in a specific zone.

## Counterevidence and limits

- Cloud GPU allocation is still heavily price-mediated. Reservations, commitments, and premium assured-access products do not make the system non-market; they show that price is only one part of the allocation mechanism.
- Do not write as though every AI company literally sits in a first-come waiting list. Different providers use different mixes of quota, sales agreements, reservations, committed use, on-demand capacity, internal scheduling, and Spot/preemptible offerings.
- Do not infer industry-wide shortage quantities from a provider's existence of reservations or quotas. Quotas also serve abuse prevention, account-risk management, and capacity planning.
- Public cloud documentation does not reveal the complete private allocation logic used for hyperscalers' largest strategic customers. Avoid claims about secret priority tiers unless supported by attributable reporting or contractual evidence.
- Hardware scarcity changes quickly by accelerator generation, region, networking configuration, power availability, and customer scale. A statement that H100s were scarce in 2023 does not establish that every H100 configuration is scarce in September 2026.
- A reservation product can improve predictability while advantaging organizations able to forecast demand, commit money early, or maintain cloud-sales relationships. That is a distributional feature worth examining, but it should not be described as favoritism without evidence.

## Falsification notes

Revise any sentence claiming that willingness to pay cannot obtain more compute. Price remains central; the chapter's narrower claim is that providers use additional rationing and commitment mechanisms because immediate physical capacity is finite and heterogeneous.

Revise any sentence equating a quota with a queue. Quota is a ceiling or authorization mechanism. A waiting period may arise when customers seek quota increases or future reservations, but the institutional form differs from chronological FCFS.

Do not use total GPU shipment or vendor revenue figures as a direct measure of usable AI-training capacity. Accelerator count, memory, interconnect, power, data-center readiness, and software stack matter.

Do not imply that a reserved GPU is necessarily physically idle until the customer's window begins; provider fleet management is not observable from the customer reservation contract alone.

## Strong chapter tension

The useful question is not whether AI compute has a market price. It plainly does. The tension is why a market with explicit prices still needs quotas, reservations, future windows, reliability tiers, and provider discretion. High-end compute shows that when the scarce good must arrive in the right quantity, topology, place, and time, a price tag cannot by itself guarantee delivery.

That sets up the chapter as a bridge between earlier human-allocation cases and infrastructure scarcity: a GPU waiting list can look less like people standing in order and more like a calendar, quota ledger, capacity contract, and scheduler deciding whose workload can run where and when.