# Trust by Proxy

A credit card was designed around a simple story.

A person wants to buy something. The person presents a credential. The merchant requests payment. Banks and networks decide whether to authorize the transaction. If fraud or a dispute appears later, the system has rules for deciding who bears the loss.

The story became more complicated online because the merchant could no longer see the customer. Passwords, CVV codes, one-time codes, device signals, fraud models, digital wallets, tokenization, and strong customer authentication all grew around the question of whether a remote transaction was really authorized.

Agentic commerce adds a stranger to the story.

The person wants something.

The person authorizes software to decide exactly what satisfies the request.

The software selects a merchant.

The software pays.

Who, precisely, made the purchase?

Legally, the human or organization remains the principal. Economically, the agent is a delegate. Operationally, payment systems need something more concrete than philosophy. They need to know that the agent is allowed to act, under what conditions, for how much, for which kinds of goods, and whether the person must be present at the moment of payment.

The mid-2020s produced an unusual burst of infrastructure work around this problem.

Google’s Agent Payments Protocol proposed digital mandates linking user intent to agent action. Mastercard developed Verifiable Intent and Agent Pay. Visa worked on agentic payment credentials and authentication. Stripe introduced scoped payment mechanisms for agentic transactions and later a machine-payment protocol for software buying digital services. The FIDO Alliance created work around agentic authentication and accepted contributions intended to make delegated commerce more interoperable.

The names will change.

The problem will not.

Delegated money requires delegated trust.

A human assistant with a corporate card demonstrates the old version. The employee is authorized to spend company money for certain purposes. The company sets limits. Receipts are collected. Some purchases need approval. Misuse can lead to discipline or legal action. The payment card alone does not define the authority; organizational rules surround it.

Consumer agents need a machine-readable version of the rules.

“Buy routine groceries up to four hundred dollars per week.”

“Book travel under company policy.”

“Reorder this prescription only from the approved pharmacy and never change dosage.”

“Purchase replacement parts under two hundred dollars if the model number matches.”

“Never transact with a new merchant without confirmation.”

“Pay for cloud services only from this project budget.”

These are mandates.

The payment system should be able to distinguish them from a general instruction to spend anything anywhere.

This is why scoped credentials are attractive. Instead of handing an agent the digital equivalent of the card number and trusting it forever, the system can issue a token valid for a narrower purpose, merchant, amount, time window, or transaction.

Security engineering has been moving in this direction for years. Least privilege is a basic principle: give a system only the authority it needs.

Agentic commerce turns least privilege into a consumer product requirement.

The temptation will be convenience.

A user will be asked whether the agent can “handle purchases for you.” The easiest setting is broad permission. The most secure setting is constant confirmation. Neither extreme is attractive.

If the person must approve every low-stakes transaction, the agent saves little effort. If the agent has unrestricted authority, one compromised instruction can become a financial disaster.

The practical system needs graduated autonomy.

Low-cost, familiar, reversible transactions can proceed automatically. New categories, unusual merchants, large amounts, regulated goods, sensitive services, or deviations from normal behavior trigger stronger checks.

This resembles the fraud systems card networks already operate. A routine grocery purchase near home looks different from an expensive transaction in another country. The difference is that agentic systems must evaluate not merely whether the transaction resembles the user but whether it satisfies delegated intent.

A strange transaction can be correct.

The user may have told the agent to buy a rare machine part from another country at three in the morning when it becomes available.

The payment network sees anomaly.

The mandate sees purpose.

Combining the two can reduce false declines without reducing security.

This is one reason verifiable intent is conceptually important. A record of authorization can say: the user asked for this class of outcome, the agent selected this transaction within the rule, and the payment was made under that authority.

When something goes wrong, the record helps answer who deviated.

Suppose the user says, “Buy a refundable hotel under three hundred dollars.” The agent purchases a nonrefundable room for two hundred and fifty. The merchant accurately represented the policy. The payment went through.

The transaction is authorized in a broad sense and wrong in a practical sense.

Who bears the loss?

Traditional card disputes are not designed to resolve every agent reasoning error. The merchant delivered exactly what was purchased. The bank authorized the card. The defect lies in representation.

Agent providers will need warranties, liability rules, or insurance for these mistakes.

Without them, “autonomous shopping” can become a legal trick in which the user receives convenience while bearing every error the software makes.

The allocation of liability will shape adoption.

Consumers tolerate imperfect recommendation systems because the human makes the final decision. If a movie suggestion is bad, nothing serious happens. A system that spends money needs stronger assurance.

This creates a market for agent quality beyond model benchmarks.

Transaction accuracy.

Policy compliance.

Fraud resistance.

Dispute resolution.

Auditability.

Merchant authentication.

Ability to recognize manipulated instructions.

Reliable escalation.

These properties can matter more to consumers than whether the agent writes a more elegant paragraph.

Payment networks are well positioned because trust has always been their business. They sit between buyers, banks, and merchants, maintain rules, absorb or allocate fraud risk, and operate global acceptance infrastructure. Agentic commerce gives them a new role: identifying a legitimate machine acting for a legitimate principal.

The network can become the notary of delegated demand.

This is strategically valuable because AI platforms might otherwise try to own the full transaction. The payment layer can assert independence: the consumer can use different agents while retaining trusted payment credentials and dispute rights.

Open standards can support this portability.

A user should not need a separate financial identity for every assistant. The agent can present proof that it is authorized without becoming the owner of the underlying account.

This resembles the way digital wallets tokenized cards. The wallet improved the interface while banks and networks retained the financial relationship.

Agent platforms may want more.

A company that controls both the assistant and the wallet gains an extraordinary view of intention and spending. It can connect what the user asked with what the user bought. That is commercially powerful and sensitive.

Banks face the same temptation. A bank-owned consumer agent can see balances, cash flow, bills, credit, and transaction history. It can give unusually good purchasing advice because it knows what the household can afford.

It can also steer commerce toward the bank’s own products or partners.

The line between financial adviser, shopping agent, and distribution channel blurs.

Fiduciary concepts will enter debates even where formal fiduciary law does not apply. Consumers will ask a basic question: whose interest is this agent supposed to serve?

Payments make the answer unavoidable because incentives become visible in money.

Fraudsters will ask different questions.

Can the agent be tricked into buying something?

Can a malicious merchant manipulate its instructions?

Can an email, product description, webpage, or document contain text that causes the system to ignore the user’s rules?

Can an attacker impersonate a merchant endpoint?

Can stolen agent credentials be replayed?

Can a compromised household device request purchases through the trusted agent?

Can a seller falsely claim that the user approved an upsell?

Agentic commerce inherits the entire cybersecurity problem and adds money.

Prompt injection is particularly relevant because general-purpose agents consume untrusted content. A product page is not merely information; it can become adversarial input. A malicious page could include hidden or visible instructions intended to influence the model.

A payment-capable agent must treat merchant content as data, not authority.

This sounds obvious in security language and remains difficult in systems whose core capability is following language.

The safest architectures separate planning, data retrieval, policy enforcement, and payment authorization. The model can propose an action, but a deterministic policy layer checks whether it fits the user’s mandate before money moves.

The agent should not be able to talk the policy layer out of the policy.

This is another place where boring software can matter more than intelligence.

Budgets. Allowlists. Category restrictions. Transaction ceilings. Merchant identity. Cryptographic signatures. Device approval. Risk scoring. Audit logs.

The 2030s consumer agent may feel conversational on the surface and look like an enterprise security system underneath.

Children and families make the permission structure more complicated.

A parent may give a teenager a monthly spending budget but restrict categories. A caregiver may purchase groceries for an elderly relative without access to unrelated accounts. A household employee may buy supplies but not view full transaction history. A separated couple may share child expenses without sharing personal purchases.

Payment permissions become social boundaries.

Digital wallets already support some family functions. Agents will require richer delegation because they act across contexts.

This can improve financial autonomy when designed well. A teenager can learn budgeting with real constraints. A caregiver can help without gaining excessive access. A small business can delegate purchasing without handing an employee the owner’s card.

Designed badly, the same tools become surveillance.

The person who controls the household agent can monitor every purchase, set hidden restrictions, or use financial permissions coercively. Technology does not resolve power inside relationships.

Consumer-protection design has to account for vulnerable users, not just ideal households.

There is also the question of “human not present” payments.

Google’s 2026 work on AP2 explicitly addressed scenarios where an agent acts based on prior authorization while the user is offline. The example is easy to understand: buy a limited ticket the moment it becomes available under predefined conditions.

Human absence is economically powerful because it lets demand operate continuously.

The agent can book a canceled reservation at 2:13 a.m., buy an item when the price falls, renew a service before a deadline, or acquire compute when needed. The consumer no longer has to be awake at the market’s moment of opportunity.

But human absence changes dispute psychology.

“I did not click buy” becomes true even for legitimate transactions.

Consumers will need a new mental model. Authorization moves from the moment of purchase to the rule that preceded it.

This is similar to automatic payments today. A person authorizes a subscription once and later charges happen without active approval. The difference is that the future agent may choose the merchant and amount dynamically.

The mandate becomes the contract with the machine.

Good interfaces will need to make mandates understandable.

A paragraph of legal text is not enough. The user should know the practical boundary: what can this agent spend, where, how often, for what, and what causes it to ask me?

The system should make broad authority feel broad.

One of the failures of digital consent has been presenting consequential permissions as routine taps. Agentic finance raises the cost of that habit.

Merchants also need confidence.

A seller wants to know that an agentic order will not produce an unusual chargeback simply because the person later forgot authorizing the rule. Trust has to work both ways. Verifiable mandates can protect merchants by proving that a purchase satisfied the consumer’s standing instruction.

This can reduce fraud losses and make merchants more willing to accept autonomous transactions.

The dispute system becomes a three-party inquiry.

Did the user authorize the mandate?

Did the agent obey it?

Did the merchant fulfill the resulting contract?

Each failure belongs to a different actor.

Payment networks and regulators will eventually encode these distinctions.

Insurance may emerge around them. Agent providers can insure execution errors. Merchants can insure fraud. Consumers can receive guarantees for authorized-agent mistakes above a threshold. Premium agents may differentiate by stronger protection rather than better recommendations.

Trust becomes a product feature with a balance sheet behind it.

This is how new technologies mature. Early markets sell capability. Mature markets sell assurance.

The first online stores asked consumers to believe that entering a card number into a browser was safe. Over time, security became infrastructure and buyers stopped thinking about the cryptography.

Agentic commerce will follow the same path if it succeeds.

People will stop marveling that software can pay.

They will assume that the right software can pay the right amount to the right merchant under the right authority and that somebody answerable will fix it when the chain breaks.

That final clause is the real product.

Delegation is easy when nothing goes wrong.

Trust begins at the refund desk.
