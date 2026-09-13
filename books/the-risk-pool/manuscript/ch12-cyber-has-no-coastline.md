# Cyber Has No Coastline

A hurricane knows where it is.

On July 19, 2024, millions of Windows machines discovered that software does not.

The machines were running CrowdStrike's Falcon security software. CrowdStrike pushed a routine content update at 04:09 UTC. The update carried bad data into a component with a validation flaw. Windows systems crashed. Airports filled with stranded travelers. Hospitals, banks, broadcasters and government services reported disruptions across countries that did not share weather, power grids or property markets.

There was no attacker.

CrowdStrike said so on the first day, and its later root-cause analysis was more embarrassing than a sophisticated intrusion: a security product designed to stop failures had distributed one. Microsoft estimated that the update affected 8.5 million Windows devices, less than one percent of Windows machines. That small fraction was enough to create a global event because the affected machines were not randomly scattered home computers. They were concentrated inside enterprises that ran important things.

This is the cyber-insurance problem in miniature.

Property catastrophe begins with geography. An insurer can put every insured roof on a map and ask how many sit in the path of the same hurricane, wildfire or earthquake. The map is imperfect, but the organizing variable is visible.

Cyber catastrophe is organized around dependency.

Two companies can sit on opposite sides of the world, sell unrelated products, buy insurance from different carriers and still share the same endpoint-security vendor, identity provider, cloud platform, operating system or software library. Their apparent diversification can disappear because of one node neither insurer treated as a location.

Insurance calls this accumulation: one event reaching many policies at once.

The word sounds actuarial. The thing itself can be physical. Flights stop boarding. Pharmacy systems go dark. A factory cannot authenticate workers. A hotel clerk writes room numbers on paper because the reservation system will not load.

The coastlines are hidden inside the stack.

CrowdStrike is useful because it complicates the easy story. A cyber chapter naturally drifts toward hackers, ransomware and hostile states. But the July outage was not a cyberattack. The initiating failure came from ordinary software operations inside a trusted security vendor. CrowdStrike's own post-incident review said the defective update passed through its content-validation process, reached Windows sensors globally and caused an out-of-bounds memory read. The company later changed its testing, validation and deployment process, including staged rollouts and canary deployments.

That sequence matters for insurance. It says concentration risk is not identical to malicious risk.

A provider can be excellent at defending customers from attackers and still be a source of correlated operational failure. In fact, the reason the failure can travel so far may be the same reason the provider is attractive in the first place: many important organizations trust it enough to install it deeply.

This creates an uncomfortable underwriting question.

A control can reduce individual risk and increase portfolio correlation at the same time.

Insurers are used to rewarding controls. Multifactor authentication can make account takeover harder. Protected backups can reduce ransomware severity. Network segmentation can contain an intrusion. An insurer that sees lower claims among firms using a particular control has a good reason to encourage it.

But suppose thousands of insured firms implement the same control through the same vendor.

The average company may become safer. The portfolio may become more brittle.

That is not a paradox. It is two different levels of analysis.

The building is stronger. The bridge is busier.

Cyber underwriting has spent years getting better at the first question: *Is this company secure?* The harder question is increasingly the second: *How many of our companies fail together if this dependency fails?*

Those questions require different data.

A conventional security questionnaire asks whether the insured uses multifactor authentication, patches critical vulnerabilities, segments networks, protects backups and controls privileged access. These questions matter because ordinary cyber loss is still ordinary loss most of the time. A ransomware crew does not need a civilization-scale dependency if one company has exposed remote access and weak credentials.

Insurance can improve that risk. Premiums, deductibles, exclusions and coverage conditions turn security practice into money. A small company that would never hire a chief information security officer may suddenly discover that an insurer wants to know how its backups are isolated and who can disable endpoint protection.

The insurer also sees something the company does not: claims across many organizations.

Security vendors can say a control works. Insurers can eventually ask whether customers using it actually suffer fewer or smaller losses. That is one of cyber insurance's most valuable functions. A pool of claims can become a rough real-world experiment in which fashionable controls meet expensive reality.

But claims data has a blind spot if the insurer records each incident as though it were local.

One company's loss might be coded as business interruption. Another calls it a vendor outage. A third reports system failure. A fourth submits a cyber claim. If all four depended on the same service, the common cause can disappear inside four administrative labels.

Definitions become a form of sensing.

The insurer needs to know not only what happened to each policyholder but what connected them.

That is why dependency inventories matter. Which cloud provider hosts the critical workload? Which identity system sits in front of it? Which managed-service provider can reach the network? Which payment processor, telecommunications carrier, software vendor or open-source component is difficult to replace? How long can the business function if one of them disappears?

The map begins to look less like geography and more like a graph.

At the center sits the insured. Around it sit nodes it relies on and edges showing how authority, data and operations flow between them. Some nodes can fail quietly. Others can take whole business processes with them.

This is not an argument for decentralization at any price.

The strongest counterargument to the concentration story is that specialist providers often make customers safer. A major cloud platform can spend more on redundancy, security engineering and incident response than a small manufacturer could justify on its own. A widely used security vendor can detect threats that thousands of customers would miss separately. Centralization can improve ordinary reliability even while enlarging the radius of an unusual failure.

The CrowdStrike event makes both facts visible. Microsoft estimated that fewer than one percent of Windows devices were affected. CrowdStrike reported that roughly 99 percent of its Windows sensors were back online by the evening of July 29. The event was disruptive, but it was not proof that common infrastructure is uninsurable or that centralization is a mistake.

It was evidence that concentration has to be measured rather than assumed away.

That distinction is important because cyber insurance has sometimes discussed catastrophe through imagined events much larger than anything yet observed. Lloyd's *Business Blackout* scenario modeled a cyberattack on the U.S. power grid and showed how one event could generate claims across more than thirty lines of insurance. The scenario was useful precisely as a stress test, not as a prediction.

CrowdStrike gave the industry a different kind of test. No grid was destroyed. No hostile state had to be identified. No data needed to be stolen. A routine update from a trusted vendor was enough to interrupt real economic activity across sectors.

The lesson is smaller and therefore harder to dismiss.

Cyber catastrophe does not require an apocalyptic hacker.

It requires a dependency important enough that many firms discover it at once.

This also complicates policy language. Cyber losses do not stay politely inside policies labeled *cyber*. A digital event can produce business interruption, extra expense, professional liability, crime losses, property damage or other claims depending on what happened and how the contracts are written. Insurers spent much of the past decade trying to reduce so-called silent cyber: cyber exposure embedded in policies that were never priced or drafted as affirmative cyber coverage.

From the customer's side, clarification can feel like protection being removed.

From the insurer's side, ambiguity can become an accumulation problem. One disputed clause is a lawsuit. The same disputed clause copied across thousands of policies can become a capital problem.

War exclusions make the boundary even harder.

Traditional war language grew up around armed conflict between states. Cyber operations can involve governments, contractors, criminal groups, proxies and actors whose identity remains disputed. A destructive campaign launched for geopolitical reasons can spread into companies that were never intended targets. The policyholder wants coverage that does not vanish whenever an attacker is sophisticated. The insurer does not want to promise unlimited capital against a state-scale event it cannot diversify.

Attribution becomes part of the contract.

That problem is real, but it should not swallow the rest of cyber insurance. Ordinary breaches, fraud and ransomware are not automatically systemic. Insurers can price them, impose sublimits, demand controls, buy reinsurance and manage portfolio exposure. The existence of a frightening tail does not make the whole peril uninsurable.

The useful question is where the tail changes character.

A breach at one retailer is a claim. A vulnerability shared by ten thousand insureds is an accumulation problem. A failure in infrastructure used across much of the economy begins to look like catastrophe finance.

That is where private capital may eventually need a larger public layer for carefully defined events, much as terrorism and flood use different forms of public participation. Such a backstop would have to be designed cautiously. Government support can crowd out private capacity or encourage weak underwriting if it attaches too early. A credible structure would need substantial private retention, clear triggers and a reason the public is absorbing a risk private balance sheets cannot sensibly diversify.

The worst time to discover those rules is while systems are down.

Yet capital is only half the problem. Duration matters too.

A company can suffer the same initial technical failure as another and produce a radically different insurance loss depending on how quickly it recovers. Can employees authenticate without the primary identity provider? Can backups actually be restored at scale? Is there an alternate communications path? Can a warehouse ship manually for six hours? Can a hospital continue essential care while administrative systems are unavailable? Does somebody have authority to invoke the fallback plan before the executive team assembles on a video call that also will not load?

These questions are less glamorous than intrusion detection.

They are often more useful after prevention fails.

Insurance has always cared about this distinction. A sprinkler does not make fire impossible. It limits how far the fire travels. Fire doors do not prevent ignition. They bound severity.

Cyber needs the same language of containment.

Network segmentation, restore procedures, alternate identity paths, vendor substitution, tested incident authority and staged software deployment are digital fire doors. CrowdStrike's post-incident decision to move toward canary and phased deployment is a particularly clean example. The goal is not to make defective updates metaphysically impossible. It is to keep one defect from reaching the whole eligible population at once.

That is an insurance idea as much as a software idea.

Limit the blast radius.

Artificial intelligence raises the same problem in a newer form. Businesses are beginning to give software agents authority to browse, call APIs, execute code, buy services and connect tools. Each permission may be reasonable in isolation. Shared models, shared orchestration frameworks and shared integrations can also become common dependencies.

The underwriting question will not be only, *Is the model good?*

It will be, *What can it reach, how many insureds rely on the same thing, and what happens if it behaves incorrectly in the same way for all of them?*

A common model can improve security and productivity across thousands of firms. That does not make common use irrational. It makes correlation part of the price.

This is why cyber insurance is such a useful laboratory for the rest of the economy. The industry is being forced to measure a kind of risk that is not arranged neatly by ownership, sector or physical distance. It has to discover the hidden connections before claims discover them first.

EIOPA's late-2025 financial-stability work treated technological interdependence as a channel through which cyber events could become macrofinancial. Its July 2026 insurance risk dashboard rated digitalisation and cyber risk high. Those assessments do not establish that a systemic insured loss is imminent. Regulators are describing a topology problem, not announcing a forecast.

The topology keeps changing.

A company migrates to a new cloud. A vendor acquires another vendor. An identity layer becomes standard. An open-source library is embedded three levels down inside products nobody thinks of as software infrastructure. An AI agent discovers and begins using a service that never appeared on last year's questionnaire.

The exposure graph moves while the policy is in force.

This makes inventory a financial function rather than an IT housekeeping exercise.

The insurer wants to know which controls reduce ordinary loss. It also wants to know which controls, vendors and platforms quietly connect risks that appeared separate when the policies were sold. Those are not contradictory goals.

They are the two halves of insurability: make each risk smaller, and keep the pool from becoming one risk.

Property insurance inherited coastlines from the physical world.

Cyber has to draw its own from dependencies.

On July 19, 2024, one of those coastlines became visible because millions of machines crossed it at the same time.