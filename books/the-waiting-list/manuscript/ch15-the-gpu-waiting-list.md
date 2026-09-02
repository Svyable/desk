# The GPU Waiting List

A computer chip can have a price and still be unavailable.

This sounds like a contradiction only if we imagine markets as menus. The item is listed. The price is printed. You choose a quantity, pay, and receive it.

That is roughly how buying a laptop works. It is not how a large artificial-intelligence lab buys the thing it actually needs.

A modern training run may require thousands of accelerators operating together, in the same place, at the same time, connected by high-bandwidth networking, supplied by enough power and cooling, and available for long enough that an interruption does not ruin days of computation. The relevant object is not one graphics processor. It is a temporary machine made from many processors, switches, cables, racks, transformers, cooling systems, schedulers, and contracts.

You can put a price on that machine.

You cannot necessarily have it Tuesday.

Cloud providers make this visible in the language they use with customers. Amazon Web Services sells a product called EC2 Capacity Blocks for ML. The name is almost comically literal. Customers can reserve accelerator capacity for a future window instead of assuming that the capacity will be available whenever they decide to launch a job. Google Cloud likewise separates the posted price of accelerators from project quotas, reservations, zones, machine types, and future capacity arrangements.

The cloud has a calendar.

That calendar is an allocation mechanism.

For most of computing history, the interesting scarcity was the computer itself. Early mainframes were expensive enough that universities and companies rationed access by time. Researchers booked hours. Operators submitted jobs in batches. The machine belonged to the institution; the question was whose program got to run next.

Personal computing appeared to abolish that problem. A processor sat on your desk. Then the internet moved computation into vast data centers, where pooled capacity made scarcity feel invisible. If one server was busy, the cloud could supposedly find another.

Artificial intelligence brought the old problem back at a different scale.

The most capable accelerators became unusually valuable because the largest machine-learning models could use many of them in parallel. Demand did not rise merely for chips. It rose for synchronized fleets of the same generation of chip, with enough memory and interconnect bandwidth to behave like one enormous computer.

This matters because ordinary substitution becomes difficult.

If a restaurant is out of one brand of sparkling water, another bottle will probably do.

If a training job was engineered around a particular accelerator cluster, replacing half the devices with older hardware can alter memory limits, communication patterns, runtime, software support, and cost. Moving the job to another region may require moving data. Splitting it across distant regions may make the network too slow. Running half the desired cluster for twice as long may not be equivalent, because large distributed training systems lose efficiency as the configuration changes and because the people waiting for the result may value time more than linear arithmetic suggests.

The scarce object has several dimensions at once.

Which accelerator?

How many?

In which zone?

Connected how?

Starting when?

For how long?

With what guarantee that the capacity will still be there tomorrow morning?

Once scarcity looks like this, price can no longer do all the work by itself.

AWS Capacity Blocks are a good example because the mechanism is public. The company allows customers to reserve accelerated computing for defined future periods. The customer is not simply buying processor-hours from an infinite pool. The customer is making a claim on a particular slice of future capacity.

This resembles an appointment more than a grocery purchase.

The distinction becomes clearer if we imagine two customers willing to pay the same posted price. One needs a few accelerators for an experiment and can tolerate interruption. The other needs hundreds or thousands of devices to begin together for a scheduled training run. The first can use fragments of spare capacity. The second needs a contiguous block.

The provider wants both customers.

But it cannot satisfy both merely by announcing a price if the underlying fleet is already committed.

So it creates categories.

Reserved capacity.

On-demand capacity.

Interruptible or Spot capacity.

Project quotas.

Future reservation windows.

Committed-use agreements.

Sales-mediated allocations for very large configurations.

These categories are not evidence that cloud computing has escaped the market. Quite the opposite. They are products built around different forms of scarcity.

A guaranteed hour is worth more than an hour the provider may interrupt.

A guaranteed cluster next month is different from whatever happens to be idle tonight.

A customer able to commit early has different options from a customer who discovers an urgent need tomorrow.

In other words, time itself becomes part of the thing being allocated.

This is why calling the problem a “GPU shortage” can be misleading. Shortage suggests one number: demand for chips exceeds supply of chips. But a company may own plenty of accelerators overall and still lack the exact capacity a customer wants in one region during one week. Another customer may have enough quota to request a large cluster but still find no physical capacity available in the desired zone. A third may find capacity but only on an interruptible basis unsuitable for the workload.

There are several lines, and they overlap.

One is physical: how much hardware exists?

One is administrative: how much is this account allowed to request?

One is contractual: what capacity has already been promised to someone else?

One is geographic: where is the hardware?

One is temporal: when is it free?

One is technical: can the available machines form the cluster the workload requires?

The mistake is to collapse all of these into one queue.

A quota is not a queue.

Google Cloud's documentation makes that especially clear. Projects can face GPU quotas that vary by accelerator model, region, and provisioning type. A quota authorizes a project to consume up to some amount of a resource. It does not promise that the hardware will be physically available when the request arrives.

Permission is necessary.

Permission is not capacity.

This distinction sounds bureaucratic until you consider what it means for a small research team.

Suppose the team receives a grant, hires engineers, prepares data, and decides to run a large experiment. The cloud console shows an hourly price for the accelerator they want. The team can afford that price. Yet its account may have a quota too small for the planned cluster. It asks for an increase.

Even if the increase is approved, the right machine type may not be available in the preferred region.

The team can wait.

It can redesign the experiment.

It can try another region.

It can approach another cloud provider.

It can seek a longer commitment.

It can use older hardware.

It can buy its own machines, assuming it can find them and build somewhere to operate them.

None of these choices is free.

Money still matters at every step. But willingness to pay the posted hourly rate has not produced the desired good on demand.

The situation is familiar from the rest of this book.

A patient can be medically eligible for a kidney without a compatible organ existing today.

A family can qualify for subsidized housing without a unit being open.

A parent can rank a school first without a seat existing.

A refugee family can be admissible to a city whose local resettlement office has no remaining capacity.

Eligibility is not allocation.

In cloud computing, the difference is disguised by the interface. Everything appears digital, and digital goods have trained us to expect abundance. A song can be streamed by one person or ten million people without manufacturing ten million new records. A software file can be copied almost without cost.

Compute is not like that.

The instructions are digital. The machine executing them is stubbornly physical.

Someone mined and refined materials. Someone fabricated silicon in an extraordinarily expensive plant. Someone packaged the device. Someone built networking hardware around it. Someone installed racks. Someone secured a grid connection. Someone built substations and cooling systems. Someone obtained land and permits. Someone wrote the software that makes the devices work together. Someone finances inventory that may become obsolete quickly.

The word “cloud” hides a great deal of concrete.

When AI demand surged in the early 2020s, the industry learned how many physical bottlenecks sat underneath the abstraction. Semiconductor fabrication was one. Advanced packaging was another. High-bandwidth memory was another. Networking equipment mattered. Data-center construction mattered. Electrical power mattered.

Each bottleneck had its own suppliers, lead times, contracts, and customers.

A chip company could sell every accelerator it manufactured and still leave a cloud provider unable to deploy them immediately because a data hall was not ready. A data center could be finished but wait for sufficient power. A cluster could be powered but lack the right network fabric. Hardware could exist in one geography while demand arose in another.

This is a useful correction to the idea that market allocation and central planning are opposites.

Large cloud providers are markets on the outside and planners on the inside.

Customers see prices and products.

Inside the provider, someone has to decide where to install the next racks, which regions receive which machines, how much capacity to reserve for existing commitments, how much to leave available for on-demand customers, what portion can be sold as interruptible capacity, and how much headroom to keep for failures and bursts of demand.

These are allocation decisions.

They are made continuously.

The provider may use forecasts, optimization software, contractual obligations, sales commitments, risk limits, and managerial judgment. The exact internal rules are mostly not public. That opacity is important. We should not invent a secret priority ladder simply because one might exist.

What we can see is the public edge of the mechanism.

The existence of a future reservation product tells us that immediate availability cannot be assumed.

The existence of quotas tells us that accounts are not automatically permitted to consume arbitrary amounts of hardware merely because they can pay.

The existence of interruptible capacity tells us that reliability itself is rationed and priced.

The existence of zone-specific reservations tells us that location matters.

The existence of large-cluster sales processes tells us that some requests cannot be satisfied like ordinary retail transactions.

That is enough to make the broader point.

The price is one rule among several.

There is a temptation here to tell a David-and-Goliath story.

The largest technology companies obtain the best accelerators. Smaller laboratories wait outside the gate. Scale compounds. The rich get richer.

Some of that intuition may be right, but it is easy to overstate because the most important contracts are private. Public cloud documentation does not tell us exactly how the largest strategic customers are prioritized. Nor does the existence of quota prove favoritism. Providers use quotas for reasons that include abuse prevention, account risk, operational stability, and capacity planning.

A serious argument has to survive without guessing.

The distributional advantage we can see is simpler.

Organizations that can predict their needs early can reserve.

Organizations that can sign long commitments can make themselves easier to plan around.

Organizations with cloud account teams and procurement departments can negotiate complicated capacity arrangements.

Organizations able to spread workloads across regions or providers have more fallback options.

Organizations with engineers experienced in distributed systems can adapt software to different hardware.

Organizations that can tolerate delay can wait for a favorable window.

Organizations that cannot tolerate delay may pay for assurance.

These differences shape access even before anyone exercises discretion.

The mechanism rewards not only money, but foresight, flexibility, relationships, technical sophistication, and the ability to commit.

That pattern should sound familiar.

First-come-first-served rewards the ability to arrive early.

A housing application process rewards the ability to learn when the list opens and complete the paperwork correctly.

Vaccine appointment systems rewarded people who could refresh websites at the right hour.

Cloud reservations reward organizations that know enough about their future workloads to claim capacity in advance.

No rule is neutral simply because it is legible.

At the same time, advance reservation solves a real problem.

Imagine trying to operate a cloud in which nobody can reserve anything. Every customer arrives at the instant of need and demands whatever quantity it wants. The provider either keeps enormous idle fleets in every region, raising costs dramatically, or routinely disappoints customers whose jobs cannot start.

Reservations convert uncertainty into planning information.

A customer gains confidence that the cluster will exist.

The provider gains confidence that someone will pay for that capacity during the reserved period.

The mechanism can improve utilization and reliability for both sides.

This is why the language of fairness must be used carefully. A reservation system that advantages early planners is not automatically unfair. Its value is precisely that it lets people make commitments across time.

The right question is what costs the mechanism creates and who bears them.

If reservations consume too much of the fleet, spontaneous users may find on-demand access unreliable.

If on-demand inventory is protected too aggressively, reserved capacity may become unnecessarily expensive.

If quotas are too tight, legitimate users spend time petitioning for permission.

If quotas are too loose, a small number of customers can destabilize regional capacity or create fraud and abuse risks.

If interruptible capacity is too cheap relative to guaranteed capacity, customers may build fragile workloads around a resource that can vanish.

If guaranteed capacity is too expensive, only large organizations can afford certainty.

There is no setting that removes tradeoffs.

There is only a better or worse way to expose them.

The most revealing feature of GPU allocation is therefore not scarcity itself. Scarcity is ordinary. The revealing feature is how many mechanisms accumulate around a scarce resource once simple pricing is insufficient to coordinate it.

The cloud provider becomes part auctioneer, part landlord, part airline scheduler, and part electrical utility.

Some capacity is sold now.

Some is promised later.

Some can be reclaimed.

Some is reserved for a particular customer.

Some is unavailable because an administrative ceiling says no.

Some is unavailable because the hardware simply is not there.

The system is a stack of rules.

This also explains why scarcity can persist even as total supply grows.

Suppose the industry doubles the number of accelerators in service. That does not guarantee that every waiting problem disappears. Demand may grow faster. Newer accelerator generations may become the preferred target, making older devices imperfect substitutes. Large models may scale up to use the new capacity. Power and networking constraints may move the bottleneck downstream.

A larger pie does not eliminate allocation when appetites expand with it.

But the opposite error is just as common: assuming that a shortage observed in 2023 remains unchanged forever.

Technology markets move quickly. Manufacturing expands. Customers become more efficient. New chips arrive. Software improves. Workloads split between training and inference. Specialized accelerators compete with general-purpose GPUs. Some forms of scarcity ease while others appear.

The point of this chapter is not that high-end GPUs will always be scarce.

They do not need to be.

The point is that when a particular configuration of compute is scarce, the allocation system is richer than a price tag.

This makes compute an unusually useful bridge between the earlier chapters and the next ones.

In the medical Match, there is no meaningful price that can simply clear the market for residency positions.

In kidney exchange, money is legally excluded from the exchange.

In school choice, public seats are assigned through priorities and preferences rather than bids.

Compute is different. It is openly commercial. The customers are expected to pay. Providers are profit-seeking firms.

And still, the allocation problem survives.

That should make us suspicious of any claim that queues exist only because prices are forbidden.

Sometimes prices are allowed and still cannot specify the good precisely enough.

A price can tell you what an hour costs.

It cannot create the right cluster in the right zone at the right moment.

This is not a failure of economics. It is economics with the physical details restored.

Markets work through institutions. Contracts define what is being purchased. Schedulers decide when resources run. Quotas limit claims. Reservations move capacity across time. Reliability tiers separate customers by willingness to accept interruption. Providers make investment decisions that determine what will be available next year.

All of this is market design, whether or not anyone uses the phrase.

There is another reason the GPU case matters.

Compute increasingly sits upstream of other opportunities.

A laboratory with more reliable accelerator access can run more experiments.

A startup can train and test products faster.

A university group can pursue research that would be impractical on a small local cluster.

A company can turn capital into model development more quickly if it can also turn capital into assured infrastructure.

The allocation of compute therefore influences what gets discovered and by whom.

This does not mean every scientific advantage can be reduced to GPU-hours. Good ideas, data, engineering, talent, and luck still matter. Enormous compute budgets can be wasted. Smaller teams can find better algorithms. Open models can diffuse capabilities. Efficiency improvements can lower the amount of hardware needed for a given task.

But scarce infrastructure shapes the option set.

If two teams have equally promising ideas and only one can run the necessary experiment this month, the allocation mechanism has become part of the research process.

That is where the language of a waiting list becomes useful again, provided we do not take it too literally.

The customer may not receive a numbered ticket.

There may be no public line.

No clerk may say, “You are number 417.”

Instead there is a quota request, a reservation calendar, a sales conversation, a capacity search across regions, a scheduler, and a contract defining whether the machines can be interrupted.

The line has been distributed across software and institutions.

That makes it harder to see, not less real.

The same thing happened in the refugee chapter. There was no single queue for “best city.” There were capacity constraints, family ties, local resources, preferences, predictions, and organizational judgment. The mechanism emerged from how those pieces interacted.

GPU allocation is the commercial version of the same lesson.

Ask who gets what, and the answer is rarely one rule.

It is a sequence of gates.

Can your account request the resource?

Does the provider have it in the region you need?

Has someone else already reserved it?

Can your workload accept interruption?

Can you move the job?

Can you wait?

Can you commit early?

Can you redesign around a different machine?

Can you pay for certainty rather than mere usage?

Each answer changes your place in the system.

The final irony is that the most sophisticated technology industry in the world has rediscovered one of the oldest allocation devices humans have.

An appointment book.

The names are different. Capacity Block. Future reservation. Committed use. Provisioning model.

But the underlying bargain is ancient: I need something scarce later; you promise that a portion of it will be mine then; in return I commit now.

A reservation does not abolish scarcity.

It moves the argument about scarcity earlier in time.

Whoever can plan, commit, and secure the slot gets certainty.

Whoever arrives later receives what remains.

That is not always unjust. It may be the only practical way to coordinate enormous fixed infrastructure with volatile demand.

But it is a design choice, and design choices distribute opportunity.

The next scarcity is much older than the GPU and much less buildable.

If a cloud provider runs short of accelerators, it can order more hardware, construct another data center, negotiate another power connection, and wait for factories to expand. None of that is quick, but the long-run answer can still be more supply.

The Colorado River does not accept a purchase order.

Its allocation system has been distributing a physically limited resource for more than a century, through rights whose priority often depends on who claimed them first.

There, the waiting list is written into law.