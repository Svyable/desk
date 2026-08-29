# Why Two Is Not Twice as Safe

Redundancy invites arithmetic that feels reassuring.

One component fails one percent of the time. Add a second independent component and, in a simple model, the chance that both fail together falls dramatically. The elegance is seductive. Reliability appears purchasable by multiplication.

Then reality adds plumbing.

The two components share a room. The room floods. They share a technician. The technician makes the same maintenance mistake. They share firmware. The firmware update contains a bug. They share a supplier. The supplier changes a material. They share a model. The model misclassifies the same rare condition.

Independence was the assumption doing most of the work.

This is one reason common-cause failure deserves a chapter of its own. Modern systems are full of things that look separate at the level of boxes and converge at the level of dependency.

Airlines may buy aircraft from different fleets but rely on the same airport fuel infrastructure. Banks may use different trading systems but depend on the same market data. Hospitals may stock equivalent drugs made at facilities sharing an active pharmaceutical ingredient supplier. Companies may diversify vendors whose services all depend on one cloud provider. Cities may have several communication networks routed through the same conduit.

The map of ownership is not the map of failure.

This matters because organizations usually budget along ownership lines. Department A owns one system. Department B owns another. Procurement sees separate contracts. Finance sees separate vendors. Risk, however, cuts across the boxes.

The best reliability work is therefore slightly impolite to organizational charts.

It asks where electricity comes from, where credentials are stored, which upstream factories exist, which code library appears in both products, which people know how to restore the system, which assumptions were copied from the same consultant, which roads all emergency routes use.

Sometimes this exercise reveals that supposedly redundant systems are cousins. Sometimes they are twins.

The danger grows as industries standardize.

Standardization is one of civilization's greatest accelerants. Common interfaces let parts interoperate. Shared protocols make networks useful. Standard containers transformed shipping. Standard voltage and frequencies simplify equipment. Common software libraries prevent every programmer from rebuilding the same foundations.

But every standard creates a potential common mode.

If everyone adopts the same secure library, security improves—until that library contains a severe vulnerability. If every hospital buys the same efficient device, maintenance becomes easier—until the device is recalled. If every company adopts the same scheduling algorithm, supply networks become smoother—until the algorithm reacts to the same shock in the same direction.

Diversity is expensive because it sacrifices compatibility and scale.

That is the reliability tax in another form.

A second vendor may have a worse interface. A heterogeneous fleet requires more training and spare parts. Multiple software stacks increase engineering burden. Different crop varieties complicate processing. Diverse investment strategies can underperform the dominant trade for years.

Homogeneity earns an efficiency premium in normal times.

Then the common mode arrives.

Biology provides the cleanest intuition. A genetically uniform crop can be highly productive but vulnerable to a pathogen capable of exploiting that genotype. Ecologists value biodiversity partly because different species respond differently to disturbance. The system does not need every organism to resist the same shock; it needs enough different responses that function continues.

Economic systems often pursue the opposite aesthetic. We reward best practice, convergence, benchmarking and standardized optimization. Under ordinary conditions, this is rational. Why preserve inferior methods once a superior one is known?

Because superiority is conditional on the environment that produced the ranking.

A second-best method can become first-best after the world changes.

This is the logic behind option value. An alternative need not be efficient now to be valuable as a future branch. The difficulty is deciding which alternatives are worth carrying.

No organization can preserve every obsolete technology, supplier and skill. Reliability requires selective heterogeneity.

One useful rule is to diversify failure mechanisms rather than brand names.

If two data systems use different vendors but the same database engine, authentication service and region, vendor diversity may add little. If two power sources use different fuels, locations and transmission paths, the diversity is more meaningful. If two suppliers rely on different logistics corridors and upstream materials, the second contract buys more than negotiation leverage.

Another rule is to search for hidden monocultures.

A monoculture can form around software, finance, professional training, regulation or even language. If every institution recruits from the same narrow talent pool and teaches the same models, they may share conceptual blind spots. The risk does not require conspiracy. Similar inputs naturally produce similar judgments.

This is where AI becomes especially interesting.

Organizations increasingly rely on a small number of foundation models, model providers and machine-learning frameworks. These systems can diversify individual decisions by generating alternatives. They can also homogenize decision-making if millions of users consult the same models trained on similar data.

An AI assistant can make a small company feel cognitively larger. It can also quietly synchronize the assumptions of thousands of companies.

The resulting common-cause failure may not look like a software outage. It could look like everyone making the same reasonable mistake.

Imagine procurement agents trained on similar cost data all reducing inventories in the same category. Imagine trading agents responding to the same signals. Imagine cybersecurity agents sharing the same blind spot. Imagine medical decision-support systems inheriting a common data bias.

The danger is not that the models are bad. It is that they may be good in correlated ways.

Reliability in an age of AI may therefore require deliberate model diversity, independent validation, adversarial tools and human institutions willing to preserve disagreement.

Disagreement looks inefficient when one answer appears dominant.

So did the second generator before the first one stopped.