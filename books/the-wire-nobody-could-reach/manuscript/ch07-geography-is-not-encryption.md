# Geography Is Not Encryption

The sentence sounds obvious now because computer security spent decades teaching us to separate the channel from the protection applied to the channel.

It was not always obvious in practice.

A communication path can be physically inaccessible and logically naked. It can be logically encrypted and physically exposed. It can be both. It can be neither. Operators do not experience those categories as diagrams. They experience systems that usually work, procedures that become habit, and risks that fade into the background because nothing bad happened yesterday.

Ivy Bells matters because the attack appears to have crossed the category boundary.

The Soviet naval cable was not a radio broadcast. It was a physical line under controlled water. That fact changed who could plausibly reach it. The resulting confidence apparently affected how the line was used. Public histories say a large amount of collected traffic was unencrypted or lightly protected. We should be cautious about quantitative embellishment, but the broader lesson is difficult to avoid: physical isolation influenced communications behavior.

This is not a uniquely Soviet error.

The United States made similar assumptions around physically isolated systems, classified networks, secure buildings and proprietary infrastructure. Every technical culture creates phrases that function as mental locks: closed network, secure facility, internal line, trusted zone, air gap, private cloud, restricted area.

The phrase is not false. The problem starts when the adjective becomes transitive.

A secure room does not make every document inside secure against every insider.

A private network does not make every application trustworthy.

A classified system does not make every user loyal.

An undersea cable does not encrypt itself.

The mistake is subtle because security architecture necessarily uses inherited trust. If every component had to distrust every other component absolutely, useful systems would become impossible. Trust reduces overhead. It makes work possible. The question is where the trust boundary sits and how often reality tests it.

Ivy Bells was reality testing the boundary with a submarine.

That is an expensive penetration test.

The modern analogy is not that an attacker will always send divers. It is that security should be evaluated against capabilities rather than intuitions. The Soviet Navy’s likely threat model for the cable may have excluded persistent covert seabed access because such access seemed operationally extreme. The United States possessed exactly the combination of submarine engineering, deep-ocean experience and intelligence appetite required to make the extreme real.

Threat models fail at the edges first.

This is why the phrase “zero trust” became attractive decades later in computer security. The slogan is often oversold, but its central intuition is useful: location alone should not determine whether an access is trusted. A request from inside the network should still be authenticated and authorized. The network boundary can no longer carry the entire security decision.

Ivy Bells is not a direct ancestor of zero trust. That would be the kind of retrospective lineage this book tries to avoid. It is a physical analogy from an earlier system: do not let location do work that should belong to identity and cryptography.

The cable’s geography reduced the attack population dramatically.

It did not reduce it to zero.

That difference is the whole operation.

The lesson has become more important as critical infrastructure spreads across domains that feel physically remote. Offshore wind farms, subsea power interconnectors, pipeline control systems, polar ground stations, remote data centers and satellite ground links often inherit a sense of protection from location. The facilities may indeed be difficult to reach. But difficulty is a price, not a prohibition.

Nation states can pay high prices.

So can large criminal networks when the expected return is high enough.

So can insiders, who may start on the protected side of the distance.

The security of infrastructure therefore has to be compositional. Geography, monitoring, encryption, access control, redundancy, repair capacity and operational discipline have to reinforce one another rather than substitute for one another.

This sounds like a checklist until one asks why each element exists.

Encryption assumes someone may reach the channel.

Monitoring assumes someone may defeat prevention.

Redundancy assumes something may break despite monitoring.

Repair assumes redundancy may not hold forever.

Access control assumes authorized systems can be misused.

Personnel security assumes technical controls do not contain every threat.

No single control is being insulted by the others. They are acknowledging reality together.

The Cold War produced systems with enormous confidence in compartmentation because the alternative was to distribute strategic secrets freely. Compartmentation was essential. It also produced peculiar blind spots. A person cleared into a compartment could become extraordinarily valuable to an adversary precisely because the compartment was otherwise hard to see.

Ronald Pelton is the book’s human version of the cable.

He was inside a boundary others treated as difficult to cross.

When he crossed it, he carried content with him.

This symmetry should not be pushed too far. A person is not a communications line. Motive, memory, ethics and coercion do not map cleanly onto signal leakage. But the structural point survives: access controls are local. Security claims are often global.

Pelton had legitimate access to information as part of his work. That access did not disappear from his memory when he resigned. Years of classification procedure could not encrypt what he remembered once he chose to speak.

The Soviet cable had legitimate users. Its physical route did not prevent a collector from sampling what they sent once the collector reached it.

Both systems confused difficult access with safe use.

The modern infrastructure debate tends to focus on sabotage because sabotage is visible. A cable outage appears on dashboards. A pipeline rupture becomes news. A damaged power interconnector has measurable effects. Interception is quieter and therefore harder to organize politically around.

NATO’s recent undersea-security work emphasizes detection, situational awareness and resilience partly because the seabed cannot be made transparent by decree. The European Union’s 2025 submarine-cable plan spans prevention, detection, response, recovery and deterrence. That architecture implicitly admits a hard fact: the defensive problem begins before attribution and continues after failure.

Ivy Bells adds confidentiality to that list.

A cable can be operational and compromised.

Modern fiber systems complicate the attack. Optical tapping has different technical signatures, and strong end-to-end encryption can make captured traffic far less valuable. Network operators can monitor optical power and faults. But encryption itself depends on key management, endpoints and protocols. The cable is only one layer.

Again, the problem migrates.

If the channel becomes harder to exploit, the landing station may become more attractive.

If the landing station is hardened, credentials may become the seam.

If credentials are well protected, supply chains may matter.

If endpoints are hardened, metadata may retain value.

Security is not a wall. It is adversarial optimization.

That phrase sounds colder than the reality. The adversary is made of people who look for cheaper paths.

Ivy Bells was remarkable because the United States chose an expensive path and still found it worth taking.

That tells us something about the value of the target.

It also tells us why seemingly absurd attacks cannot be dismissed merely by pointing to cost. If the information behind the barrier is strategically valuable enough, the attacker’s budget may surprise you.

The most useful security question is therefore not “is this protected?”

It is “what would an adversary have to believe for this attack to be worth the cost?”

The Americans believed the Soviet line contained information valuable enough to justify submarine penetration and seabed work.

That belief turned geography into a solvable engineering problem.

The Soviets had counted on geography to be the answer.