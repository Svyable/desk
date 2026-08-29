# The Modular Company

There is a managerial fantasy that appears whenever an organization becomes complicated: if only everything were integrated, the company would move as one.

The fantasy is understandable. Interfaces create meetings. Separate teams duplicate work. Suppliers misunderstand specifications. Business units optimize locally. A customer can be passed from department to department like a parcel nobody ordered. Integration promises an end to the friction.

Then integration works.

The company becomes one system.

And one system can become one mistake.

Modularity is the art of deciding where a system is allowed to come apart. It is not merely an engineering technique. It is a theory of organizational reversibility.

A modular system contains components whose relationships are governed by interfaces. If the interface is stable enough, a component can change without forcing every other component to change at the same time. That separation creates local option value. A supplier can be replaced. A product variant can be introduced. A team can experiment behind an API. A business unit can enter a market without redesigning the entire corporation.

The price is the interface itself.

Interfaces require definition, documentation, negotiation, testing, and often duplication. A tightly integrated system can outperform a modular one when the problem is stable and optimization matters more than adaptability. The best racing bicycle is not necessarily built from universally interchangeable parts. A high-performance chip may integrate functions that would be easier to swap if they were separate. A restaurant with a tiny menu can coordinate differently from a food hall.

Modularity is therefore a bet on future change.

Business history is full of companies that prospered because they integrated the layers that mattered and companies that prospered because they opened them.

The IBM System/360, announced in 1964, is a famous case in computing history because it created a family of compatible mainframe computers spanning different performance levels. Customers could move within the family without replacing everything around the machine. The project was enormously expensive and risky for IBM, but compatibility changed the economics of investment in software and peripherals. A customer's past commitment became less of a trap because the next machine could preserve more of it.

Compatibility is a promise about reversibility across generations.

It tells a buyer: your next decision will not require you to destroy all the value created by this one.

That promise can become a moat. Customers may remain because switching is costly, but they may also remain because the vendor has reduced the switching costs within its own ecosystem. The company preserves customer optionality locally while capturing it globally.

Modern cloud platforms often work this way. A developer can choose among many services inside one provider, scaling databases, compute, storage, analytics, and messaging with extraordinary flexibility. The internal option set is large. The external option to move to another provider may become more expensive as the application uses proprietary services.

The architecture gives freedom and creates dependence at different layers.

This is why debates about “lock-in” often go nowhere. Participants are pointing at different boundaries.

A company can be highly modular internally and highly closed externally. A product can be open at the application layer and proprietary at the hardware layer. A franchise can let operators make local decisions while standardizing brand, supply chain, and menu. A military can decentralize tactical choices while centralizing mission and logistics. Modularity is always a question of where the seams go.

The placement of seams is strategic because seams determine where change is cheap.

Consider a diversified corporation. One approach is to integrate functions across business units: one purchasing organization, one technology stack, one brand, one sales force, one human-resources system. The economies can be real. Scale increases bargaining power. Common systems reduce duplication. Talent can move. Customers see one firm.

But common systems also couple businesses that may face different environments.

A procurement policy designed for a stable industrial product may fit poorly in a fast-moving software business. A shared sales incentive may distort a low-margin service. A centralized technology platform may slow an experimental unit. The corporation has gained efficiency by forcing more parts to change together.

When the world shifts, coupling becomes visible.

This resembles a familiar problem in ecology and finance. Correlation is quiet until the shock. Assets that seemed diversified turn out to share an exposure. Species dependent on the same narrow condition fail together. Supply chains with many nominal suppliers discover that those suppliers rely on the same upstream plant.

Organizational modularity is partly about reducing hidden correlation.

A business unit with its own systems and suppliers may look wastefully autonomous until the central system fails. A regional team may seem inconsistent until local regulation changes. A second brand may look duplicative until the first brand becomes politically toxic or culturally stale.

Redundancy and modularity are cousins but not twins. Redundancy provides multiple ways to perform the same function. Modularity provides ways to change one function without changing the rest. Both preserve response paths.

The best companies use them selectively.

Airlines keep spare aircraft capacity in some form but do not duplicate every route with an independent company. Banks maintain disaster-recovery systems but centralize ledgers. Manufacturers qualify second suppliers for some critical parts while single-sourcing others. Software companies isolate risky services while sharing identity, observability, and infrastructure.

The question is not whether to centralize.

It is what failure you are willing to make common.

This question becomes acute in mergers.

The standard merger story is synergy. Two firms combine, eliminate duplication, cross-sell customers, integrate operations, and gain scale. The spreadsheet is full of savings. Integration teams are formed. Systems converge.

The spreadsheet is usually much better at counting the cost of duplicate functions than the option value of separate ones.

Two customer databases look redundant. Yet they may encode different business models. Two brands look expensive. Yet they may give the company the ability to speak to incompatible segments. Two research teams may be exploring different technical paths. Two procurement systems may preserve access to different supplier networks.

Integration destroys some of these options deliberately.

Sometimes that is the right choice. A merger that never integrates can remain a financial holding arrangement with none of the promised economies. The purpose of combining may be to close seams.

But integration should be treated as an irreversible investment, not a housekeeping task.

Once customer accounts are migrated, offices closed, brands retired, people laid off, contracts terminated, and systems decommissioned, “unwinding the merger” is not the inverse operation. The pieces have changed while attached.

A thoughtful integration therefore asks which synergies require immediate coupling and which can wait for evidence. It distinguishes reversible from irreversible integration. Shared purchasing can sometimes begin before systems merge. Cross-selling can be tested before brands disappear. A back-office function can be consolidated while customer-facing operations remain separate.

This slows the story.

It may improve the decision.

Private-equity firms and conglomerates sometimes preserve greater business-unit autonomy for related reasons. A central owner allocates capital and sets performance expectations while operating units retain systems, brands, and management. The model can become financially extractive or strategically shallow, but it illustrates a different seam placement from the integrated corporation. The option to sell a unit is easier when the unit still exists as an operational object.

Separability has value.

Accountants understand this when they ask for segment reporting. Investors want to know what parts of a business are doing because a consolidated number can hide cross-subsidies. Managers understand it when they create profit-and-loss responsibility. Regulators understand it when they require ring-fencing in some industries to prevent risk from moving freely across boundaries.

A boundary makes information clearer and contagion harder.

It can also make cooperation harder.

This is the permanent trade in organizational design. Every boundary blocks something good and something bad.

A team boundary can protect focus and create silos. A subsidiary can contain risk and create bureaucracy. A national border can support political autonomy and impede trade. A firewall can contain an intrusion and complicate access. A watertight compartment can keep a ship afloat and take up space.

Calling boundaries inefficient misses half their purpose.

Boundaries are often designed for abnormal states.

A bulkhead matters when the hull is breached. A legal subsidiary matters when one activity fails. A separate deployment environment matters when bad code ships. A reserve budget matters when forecasts miss.

Organizations optimized only for the normal state can look magnificent until the normal state ends.

This is one reason the language of efficiency can become dangerous. Efficiency is always efficiency relative to a distribution of conditions. Remove slack, standardize variation, consolidate suppliers, centralize decisions, and the system may become cheaper under expected conditions. If the distribution shifts, the same design can have a fat left tail.

The argument is not against efficiency. Waste is real. Managers can defend empires by calling every duplication resilience. Suppliers can use security language to justify bad economics. Bureaucracies can preserve obsolete structures because someone imagines a scenario in which they might be useful.

The discipline is to specify the failure mode the modularity is buying protection against.

What shock does this boundary contain? What change does this interface make cheaper? What option does this duplicate capability preserve? How much are we paying for it? What evidence would justify removing it?

Without answers, resilience becomes an aesthetic.

With answers, modularity becomes a portfolio decision.

Toyota's production system is often caricatured as a war on inventory, but the deeper operating logic includes making problems visible, standardizing work, building quality into processes, and improving through repeated learning. Lean systems can be robust when relationships, information flow, supplier development, equipment maintenance, and problem-solving capability are strong. Simply copying low inventory without the surrounding system removes a buffer while preserving the causes that made the buffer necessary.

This is an important lesson in reversibility: a visible reserve is not the only kind of option.

Capability can be an option.

A skilled maintenance team can restore equipment faster than a warehouse full of spare parts. A supplier relationship can accelerate substitution. A workforce trained across several tasks can reconfigure production. A logistics system with real-time information can reroute around disruption. These are adaptive capacities rather than static buffers.

They are harder to count because they live in people and relationships.

Finance likes inventories because inventories appear on balance sheets. It struggles with trust between a buyer and supplier, the tacit knowledge of an experienced operator, or the credibility of a manager who can ask people for extraordinary effort during a crisis. Yet these intangible assets often determine whether a nominal option can actually be exercised.

A backup plan without the capability to execute it is not an option. It is stationery.

This distinction explains why organizational charts reveal so little about resilience. Two companies can have identical formal structures and radically different response capacity. One has teams that share context, leaders who can delegate, engineers who understand adjacent systems, suppliers who will answer the phone, and customers willing to tolerate a temporary workaround. The other has perfect boxes.

The option is social.

Culture, in this sense, is partly the speed at which an organization can reconfigure without losing trust.

This gives a more practical meaning to the fashionable word agility. Agility is not constant change. Constant change prevents learning. Agility is the ability to change when evidence makes change valuable while preserving enough continuity for coordinated action.

A jazz ensemble is agile because the musicians can respond to one another in real time. They are not agile because everyone ignores the song.

The same balance appears in military doctrine under ideas such as mission command, where higher levels communicate intent while subordinates retain discretion to adapt to local conditions. The aim is not decentralization for its own sake. It is to put decisions close enough to information without dissolving coherence.

Companies repeatedly rediscover this because information and authority travel at different speeds.

A frontline employee may see a customer problem before headquarters. A plant operator may hear a vibration before a dashboard alarms. A local manager may understand a regulator's concern before the global team. If authority is too centralized, the signal travels upward and the decision travels back while the situation changes. If authority is too decentralized, local decisions can create incompatible commitments.

Modularity can align authority with interfaces. A team owns a component and can change it within defined constraints. Cross-boundary changes require coordination because they affect others.

This is how good software organizations often work, and it is how good federal systems aspire to work.

The interface becomes constitutional.

It defines what a part may decide alone and what must be negotiated.

Bad interfaces create two familiar pathologies. One is hidden coupling: teams believe they are independent, but changes cause surprises elsewhere. The other is interface bureaucracy: so many approvals are required that local autonomy becomes fiction.

Both are failures of seam design.

A useful seam should make dependencies explicit enough that local action is safe.

This is why technical architecture and organizational architecture often mirror one another. If every software change requires five teams, the organization will either become meeting-heavy or the architecture will change. If teams are highly autonomous but share one fragile database, the contradiction eventually appears as outages and conflict. Conway's law—the observation that organizations tend to design systems reflecting their communication structures—is less a cute aphorism than a reminder that coordination costs materialize somewhere.

You can move them. You cannot abolish them.

The larger strategic lesson is that optionality should be designed into the unit of change.

If you expect customer preferences to change quickly, make customer-facing components easier to alter. If regulatory rules are unstable, isolate compliance logic. If a supplier is geopolitically exposed, avoid coupling the entire product to a unique component unless the performance gain justifies the risk. If a business unit may be sold, avoid making it inseparable from central systems without acknowledging the effect on saleability.

This sounds like planning, and it is. But it is a particular kind of planning. It does not pretend to know the future state. It chooses where future change should be cheap.

That is the essence of modularity.

The company still has to commit. Interfaces need standards. Teams need ownership. Products need architectures. Customers need promises. A completely modular organization in which every component can be swapped at any moment would spend its life maintaining interfaces instead of creating value.

So mature modularity contains hard centers and soft edges.

Some things are constitutional. Purpose, core safety constraints, accounting integrity, identity, perhaps a few technical standards. Other things remain experimental. Product features, suppliers, campaigns, tooling, local process, organizational forms.

The art is deciding which category a choice belongs to before history decides for you.

A company is not resilient because it can reverse everything.

It is resilient because the things that need to change can change without requiring the things that need to stay stable to come apart.