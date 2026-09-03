# Kidneys Without Cash

A willing donor is not the same thing as a usable kidney.

That is the cruel hinge on which kidney exchange turns.

A husband may be willing to donate to his wife and still be unable to do so. A sister may volunteer for her brother and be rejected as a direct donor because their blood types are incompatible or because the recipient’s immune system is likely to attack the organ. The moral part of the problem has already been solved. Somebody has said yes.

Biology says no.

For most of transplant history, that was where the story ended. The patient stayed on the waiting list. The donor went home with both kidneys. A gift existed, but it could not reach the person for whom it was intended.

Then someone noticed that two failed gifts could sometimes rescue each other.

Suppose Alice needs a kidney. Her husband Ben wants to donate, but he is incompatible with Alice.

Across town, Carla needs a kidney. Her sister Dana wants to donate, but Dana is incompatible with Carla.

Now suppose Ben is compatible with Carla, and Dana is compatible with Alice.

Nobody buys anything.

Nobody sells anything.

Ben gives a kidney to Carla. Dana gives a kidney to Alice.

Two incompatible donor-recipient pairs become two successful transplants.

The exchange does not create a kidney.

It creates a path.

This is one of the clearest examples of market design because the scarce resource is already present. The failure lies in the arrangement.

Alvin Roth, Tayfun Sönmez, and M. Utku Ünver began studying kidney exchange in the early 2000s as a matching problem. Their 2004 Quarterly Journal of Economics paper took a practice that had begun in limited form and asked a larger question: what would happen if incompatible donor-patient pairs were pooled and matched systematically rather than solved one hospital at a time?

The intuition is almost embarrassingly simple.

A larger pool creates more possible matches.

But the design problem is not simple at all.

Blood type matters. Tissue compatibility matters. Some patients are highly sensitized, meaning their immune systems are likely to reject kidneys from a large share of donors. Hospitals have different practices. Donors may have medical constraints. Some exchanges can be completed in pairs. Others require cycles of three or more donor-recipient pairs.

And because a donor is a person rather than a fungible object, the mechanism has ethical constraints that ordinary markets do not.

You cannot treat a kidney like a concert ticket.

You cannot simply auction it to the highest bidder.

You cannot tell a donor that the algorithm has assigned them to surgery and therefore they must appear.

Participation has to remain voluntary all the way through.

That makes the system more fragile and more interesting.

The earliest clean version is the two-way exchange.

Pair A contains a patient and an incompatible donor. Pair B contains another patient and another incompatible donor. If the donor in A can give to the patient in B and the donor in B can give to the patient in A, the exchange can proceed.

The surgeries were traditionally arranged simultaneously.

That timing is not ceremonial.

It solves a trust problem.

Imagine Pair A’s donor gives first. The patient in Pair B receives the kidney. Then, before Pair B’s donor goes into surgery, that donor changes their mind.

Pair A’s patient has been harmed in a very specific way. Their donor has already given away the kidney that made the exchange possible, yet the promised return donation never arrives.

That is why simultaneous surgery became a standard protection in direct exchanges. Neither pair has to go first in a way that leaves it exposed.

The requirement also limits the system.

A two-way exchange needs four operating rooms or a carefully coordinated sequence across hospitals. A three-way exchange becomes even harder. Each additional link multiplies the scheduling problem.

This is where the economists and transplant surgeons began to influence one another.

Roth, Sönmez, and Ünver initially explored larger exchanges because larger cycles could produce more transplants. Transplant clinicians pushed back with practical constraints. A mathematically attractive cycle might be impossible to schedule. Hospitals were more comfortable with pairwise exchanges because they were easier to coordinate and because the ethical risk of a donor reneging could be contained through simultaneity.

The theory adjusted.

That is a recurring pattern in market design.

The elegant mechanism meets an operating room.

The operating room wins.

The 2004 and 2005 work on kidney exchange therefore did something more useful than announce an optimal algorithm. It developed mechanisms around the constraints transplant centers were actually willing to accept.

The idea spread.

Regional exchange programs formed. Hospitals began sharing incompatible pairs. National registries emerged. Software searched through pools too large for a coordinator with a spreadsheet to reason through by hand.

Then kidney exchange changed again.

The crucial figure was the nondirected donor.

A nondirected donor is a person willing to donate a kidney without naming a specific intended recipient. That person does not enter the system carrying a paired obligation. There is no loved one waiting for a kidney in return.

That changes the trust structure.

Imagine a nondirected donor gives to the patient in Pair A.

Pair A’s incompatible donor can now give to the patient in Pair B.

Pair B’s donor can give to Pair C.

Pair C’s donor can give to Pair D.

The exchange has become a chain.

Unlike a closed cycle, the chain does not have to return to its starting point.

And because the first donation comes from someone who does not need a kidney in return, the chain can sometimes be performed nonsimultaneously.

This was a profound operational change.

In 2009, Michael Rees and a group of transplant clinicians, economists, and computer scientists reported a ten-transplant chain in the New England Journal of Medicine. It began with an altruistic donor and unfolded over eight months across six transplant centers in five states. Some surgeries were simultaneous. Others were linked by what the authors called bridge donors—people whose intended recipients had already received kidneys and who agreed to donate later so the chain could continue.

That arrangement would have looked reckless in a conventional two-way swap.

In a chain started by a nondirected donor, the risk is different.

If a bridge donor fails to donate, the next pair has not already surrendered its donor’s kidney. The chain ends or pauses, which is bad. But the next patient-donor pair can usually return to the pool with its bargaining chip intact.

The structure absorbs failure differently.

This is the kind of detail that makes market design feel less like economics and more like architecture.

The question is not merely whether two people are compatible.

The question is where failure can occur without collapsing the entire structure.

A good mechanism does not assume perfect behavior.

It places the weak joints where a break is survivable.

Chains also loosen the tyranny of simultaneity.

A ten-way closed cycle would require an extraordinary amount of synchronized surgery. A chain can be divided into segments. A donor at the end of one segment can become the bridge to the next.

That makes longer exchanges feasible.

It also creates new ethical questions.

What obligation does a bridge donor have after their loved one has already received a kidney?

Legally and ethically, living donation must remain voluntary. A donor cannot be compelled to complete the chain.

But socially, the pressure can be enormous. The donor knows that someone else may now be waiting because of a promise attached to the earlier transplant.

This is an important limit to the language of optimization.

An algorithm may identify a chain of ten medically feasible transplants.

It has not created ten machines that will execute instructions.

It has identified ten human decisions that still have to remain voluntary.

The success of kidney exchange comes partly from respecting that fact.

Registries do not merely calculate compatibility. They coordinate testing, surgery, transportation, communication, and contingency plans. Some programs ship kidneys rather than donors. Some use vouchers that allow a donor to give now so an intended recipient can receive priority for a matched living-donor kidney later. National systems can search across many transplant centers instead of trapping each incompatible pair inside one hospital’s local pool.

Each expansion increases possibility.

Each expansion also increases governance.

The operational problem grows in directions the graph does not show.

A computer can identify a medically feasible cycle among four pairs in seconds. It cannot free four surgical teams on the same morning. It cannot make a donor’s employer grant leave, make a recipient’s infection clear on schedule, or make two hospitals use identical testing timelines. A chain that looks clean on a screen can be held together by coordinators making phone calls, laboratories returning results, transport plans, backup dates, and people willing to change their week around somebody they may never meet.

This is not administrative debris around the mechanism.

It is part of the mechanism.

A matching rule that routinely proposes exchanges hospitals cannot execute is not better because its theoretical transplant count is higher. A chain that depends on perfect timing across institutions is not robust merely because every edge in the compatibility graph is valid.

The distinction matters because optimization can hide its own denominator.

Suppose one proposed chain produces more transplants if every link succeeds but is difficult to schedule across several centers. Another produces fewer transplants on paper but can be completed quickly inside two hospitals. Which is better?

The answer depends on probabilities the clean graph does not contain: cancellation risk, donor availability, operating-room capacity, transport reliability, clinical timing, and how costly a break would be for the people already committed.

That does not make mathematical optimization useless. It explains why the successful programs became collaborations among economists, surgeons, coordinators, computer scientists, and ethicists rather than software projects with a medical front end.

The graph finds possibility.

The institution has to make possibility survive contact with Tuesday morning.

The National Kidney Registry, one of the largest U.S. exchange networks, now describes paired donation as one part of a broader living-donation system that includes remote donation, voucher arrangements, donor financial support, and national matching. Its public materials report that more than ninety thousand people in the United States are waiting for kidneys and advertise a typical living-donor matching time through its system that is far shorter than the wait for a deceased-donor kidney.

Those are institutional claims and should be read as such. A registry has every reason to describe the value of its own network.

The broader evidence that paired exchange creates transplants that otherwise would not occur is stronger.

The original Roth-Sönmez-Ünver simulations suggested substantial gains from pooling incompatible pairs. The real-world growth of paired donation then supplied the institutional evidence: exchanges moved from isolated two-way swaps to organized networks capable of producing long chains across hospitals and states.

One of the most useful later findings concerns where chains end.

A nondirected-donor chain does not have to consume every kidney inside the exchange pool. The final donor can give to a patient on the ordinary deceased-donor waiting list.

That means an exchange can create spillover beyond the pairs who arrived with living donors.

A 2021 study of National Kidney Registry data examined hundreds of these chain-ending transplants. Compared with other recipients in the registry, chain-end recipients were more often Black, more often publicly insured, and had spent longer on dialysis. Their outcomes were worse than those of other living-donor recipients but better than recipients of deceased-donor kidneys on measures of graft failure and mortality.

This complicates a common criticism of kidney exchange.

The obvious fairness objection is that paired exchange privileges patients who arrive with a willing living donor. A patient with no spouse, sibling, friend, or other donor cannot enter an ordinary incompatible pair.

That objection is real.

The system begins with an unequal endowment: some patients have somebody willing and medically eligible to donate, others do not.

But chains that terminate in the general waiting list can partly redistribute the benefit. A nondirected donor may unlock several exchanges and still leave one living-donor kidney for someone who did not bring a donor into the network.

“Partly” matters.

Kidney exchange does not solve the organ shortage.

It cannot match a kidney that does not exist.

It cannot eliminate the social inequality in who has access to potential living donors. It cannot make every highly sensitized patient easy to match. It cannot guarantee that small or isolated transplant centers participate in national pools. It cannot erase financial and logistical burdens on donors, though modern programs increasingly try to reduce them.

And it raises distributional questions inside the matching process itself.

Suppose one possible chain produces six transplants and another produces five but includes a highly sensitized patient who has very few other options.

Which chain should the algorithm prefer?

If the goal is simply to maximize the number of transplants, six wins.

If the goal includes giving weight to people who are hardest to match, the answer may change.

If the system values expected graft survival, geography, pediatric status, time waiting, or fairness to blood-type groups, the optimization changes again.

There is no neutral objective function waiting to be discovered.

Someone has to decide what the system is for.

This returns us to the central argument of the book.

When money is prohibited, allocation does not become moral by default.

It becomes designed.

Kidney exchange is morally attractive partly because it avoids the transaction Chapter 1 began with. No donor receives a market price for an organ. The exchange works within the legal and ethical prohibition on organ sales. It converts incompatibility into a matching problem instead of converting kidneys into commodities.

That is a real achievement.

It is also narrower than the rhetoric sometimes attached to it.

Kidney exchange does not prove that markets are unnecessary. It proves that one kind of market can be built without money.

The participants still reveal preferences and constraints. A registry still decides who can enter. An algorithm still searches over feasible allocations. Scarcity still shapes outcomes. Incentives still matter. Trust still matters. The system still has to discourage strategic withholding and coordinate institutions that may have their own local interests.

It is a market in the sense Roth uses the word: a place where participants must be brought together and a rule determines who gets what.

The currency is compatibility.

The contrast with a black market could hardly be sharper.

In an illegal kidney market, scarcity creates a price. Money flows toward someone willing or pressured to sell.

In kidney exchange, scarcity creates a graph.

Each donor is connected to the recipients they can medically help. The design problem is to find cycles and chains through that graph without money changing hands.

One system asks who will pay.

The other asks who can connect.

Neither escapes scarcity.

But they distribute its burdens differently.

There is another reason kidney exchange became so important to economists.

The feedback loop between theory and practice is unusually visible.

Roth, Sönmez, and Ünver did not publish a paper and watch hospitals mechanically implement it. They spoke with surgeons. The surgeons imposed constraints. The theorists redesigned around those constraints. New practices such as nonsimultaneous chains created fresh theoretical questions. Registry operators discovered operational bottlenecks the models had not emphasized. Computer scientists contributed optimization tools. Ethicists examined donor protection. Clinicians tracked graft outcomes.

The market evolved by argument.

That is different from the usual picture of an algorithm descending from above.

The strongest systems in this book tend to be the ones that remain revisable after deployment.

Kidney exchange had to be revised because reality kept supplying new cases.

A highly sensitized patient.

A nondirected donor.

A bridge donor who cannot donate on schedule.

A kidney that can be shipped instead of a donor who must travel.

A patient who has a willing donor today but will need the transplant later.

A chain that can end on the waiting list.

Each case expands the design space.

It also exposes the danger of treating the current mechanism as final.

The waiting list remains.

More than ninety thousand people in the United States are still waiting for kidneys. Living donation supplies only part of the need. Paired exchange increases the number of useful living donations, but the denominator is much larger.

A system can be brilliant and insufficient at the same time.

That may be the right way to understand kidney exchange.

It is not a solution to organ scarcity.

It is a solution to one particularly painful waste inside organ scarcity: a willing donor standing next to a patient they cannot help.

The mechanism asks whether somebody else’s willing donor can help instead.

When the answer is yes, two failed gifts can become two successful ones.

A chain can turn one nondirected donation into several transplants.

A registry can make matches that no single hospital could see.

No price is required.

No seller is required.

The scarce good does not become less scarce.

The allocation becomes less stupid.

That is enough to save lives.

It was also enough to make the economists who worked on these systems famous.

In 2012, the Nobel committee would use the distance between Gale and Shapley’s abstract marriage problem and Roth’s work in places like the residency Match and kidney exchange to explain an unusual prize: one half for theory, one half for the practice of design.