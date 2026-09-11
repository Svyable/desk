# The Right to Repair

A future steward can inherit the machine and still not inherit the ability to fix it.

The screws may be there.

The casing may open.

The failure may be obvious.

And the repair may still be impossible.

The service manual is unavailable.

The diagnostic software requires a vendor login.

The replacement part is no longer made.

The calibration procedure lives in a proprietary tool.

The firmware rejects the component.

The original supplier has been acquired twice.

The only technician who knew the workaround retired.

The interface is undocumented.

The device can physically survive while practical agency disappears.

That is why repairability belongs in the handoff stack.

It is not simply a consumer preference.

It is temporal sovereignty.

Can the successor act without needing permission from a builder who may no longer exist?

The modern right-to-repair debate usually begins with products people own today.

Phones.

Tractors.

Medical equipment.

Appliances.

Cars.

Computers.

The Federal Trade Commission’s 2021 report to Congress, *Nixing the Fix*, examined restrictions that can make repair harder, including limits on parts, manuals, diagnostic tools, software, and independent service. The report also took seriously the arguments manufacturers make for restrictions: safety, cybersecurity, intellectual property, reputational risk, and quality control.

The argument matters far beyond consumer electronics.

Every long-lived system eventually encounters a successor who did not choose the original supplier.

The question is whether that successor can inspect, understand, maintain, replace, or migrate what was inherited.

Repairability is what makes durability usable.

A perfectly durable sealed box can be a worse inheritance than a less durable system with replaceable parts.

The sealed box lasts until the first internal failure.

The repairable system can survive by changing.

This is a recurring pattern in long-lived infrastructure.

The bridge does not remain the same bridge because every piece of material persists untouched.

Decks are replaced.

Bearings are inspected.

Cables are monitored.

Paint is renewed.

Joints wear.

Lighting changes.

Loads change.

Codes change.

A century-scale structure survives because people retain access to its important failure surfaces.

The artifact lasts through repair.

That sentence sounds almost tautological.

It becomes less obvious in software and digitally controlled hardware.

A physical part can be visible while the rules that allow it to function are hidden in code.

A replacement can fit mechanically and fail cryptographically.

A machine can become unusable because the server that authorizes it disappears.

A device can be mechanically healthy and computationally abandoned.

This creates a new kind of decay.

Not corrosion.

Permission decay.

The artifact remains.

The repair relationship expires.

A future steward should therefore ask a different question from the buyer.

The buyer asks, “Does this work?”

The steward asks, “What has to remain true for this to keep working?”

The supplier must remain in business.

The authentication service must remain online.

The file format must remain readable.

The part must remain available.

The tooling must remain compatible.

The key must remain valid.

The license must remain transferable.

The documentation must remain interpretable.

The interface must remain stable enough to replace something behind it.

Each dependency has its own lifetime.

A long-lived system fails when one of the short-lived dependencies becomes essential.

This is why open specifications can matter even when nobody intends to manufacture a replacement today.

The specification is an option.

It tells a future actor enough to re-create an interface if the original part disappears.

The value of the option may remain invisible for years.

Then the vendor exits.

The product line ends.

A geopolitical shock interrupts supply.

The old part becomes unobtainable.

Now the documentation is not paperwork.

It is manufacturing capacity in latent form.

The same principle explains the importance of standard parts.

A bespoke component can optimize performance.

A standard component can optimize succession.

Neither is universally superior.

A spacecraft may need a custom part because mass, radiation, vibration, or reliability constraints make an ordinary component unacceptable.

A medical device may require tightly controlled replacement parts because calibration errors can injure people.

A security appliance may need mechanisms that prevent untrusted firmware from running.

Repairability is not a command to remove every control.

It is a demand to make the tradeoff explicit.

What risk is the restriction preventing?

What happens when the restriction outlives the entity enforcing it?

Can authority be transferred?

Can a safe fallback exist?

Can certified third parties take over?

Can the system enter a degraded but maintainable mode instead of becoming a brick?

These are succession questions.

The strongest argument against unrestricted repair is safety.

It deserves respect.

An aircraft engine should not become a playground for undocumented modifications.

A radiation therapy machine should not accept arbitrary components because openness feels principled.

A power-grid protection system should not expose every operational control to anyone who owns a screwdriver.

The right to repair cannot mean the right to make every system less safe for everyone else.

But safety and monopoly are not the same thing.

A system can require qualification without requiring one immortal supplier.

It can publish service procedures while restricting dangerous operations to trained personnel.

It can support certified replacement parts from multiple manufacturers.

It can separate safety-critical components from ordinary wear items.

It can keep cryptographic controls while designing a legitimate transfer process for keys.

It can allow inspection without allowing unverified modification.

It can preserve a documented path for decommissioning when continued operation is no longer supportable.

The goal is not unrestricted intervention.

The goal is continued legitimate intervention.

Military sustainment makes this problem unavoidable.

Weapons platforms, ships, aircraft, radar systems, and support equipment can remain in service for decades longer than the commercial product cycles of the electronics inside them.

Parts become obsolete.

Suppliers stop production.

Manufacturing processes change.

The original design team disappears.

Organizations that operate such systems develop entire disciplines around obsolescence management, configuration control, reverse engineering, approved substitutes, and lifecycle support.

The existence of those disciplines tells us something important.

Long life is not a property you buy once.

It is a capability you keep rebuilding.

A future maintainer needs more than spare parts.

Spare parts run out.

A warehouse can extend a dependency.

It cannot eliminate the dependency.

The deeper asset is reproducibility.

Can the part be specified?

Can it be fabricated?

Can it be tested?

Can its behavior be verified against the original requirement?

Can the system accept an equivalent component without a full redesign?

Can the successor distinguish a cosmetic difference from a functional one?

This is why interface boundaries matter.

A replaceable module says: this part may die while the larger system lives.

That sentence is a gift to the future.

Modularity is often described as a software architecture preference or a manufacturing technique.

It is also a time strategy.

A modular system creates smaller units of obsolescence.

The successor can replace one layer without replacing everything above and below it.

But modularity has costs.

Interfaces create overhead.

Standardization can limit performance.

Replaceable components can add connectors, seals, tolerances, attack surfaces, and failure points.

A one-piece structure can be stronger than an assembly.

A tightly integrated chip can be more energy-efficient than a set of swappable boards.

A sealed medical device can be easier to validate than a field-modifiable one.

Repairability is not free.

The handoff test does not ask for maximum repairability.

It asks whether the chosen level matches the expected life and consequence of the system.

A disposable novelty can be tightly integrated and short-lived.

A municipal water-control system expected to operate for thirty years should be judged differently.

A device implanted in a human body should have a different maintenance strategy from a toy.

A spacecraft beyond physical reach has to be repairable in software because physical repair is impossible.

The environment defines the useful kind of repair.

There is another mistake builders make.

They confuse repairability with instructions.

A manual can describe a repair that no longer can be performed.

The tool is unavailable.

The part is gone.

The software will not run.

The material specification refers to a discontinued process.

The replacement procedure assumes a jig that was discarded.

The documentation is correct and useless.

This is why the repair layer depends on the artifact and memory layers together.

A future maintainer needs the information and the means.

The means may include tools, test fixtures, interfaces, source files, specifications, permissions, spare capacity, supplier diversity, or legal rights.

Long-term continuity is always embodied somewhere.

Even software needs hardware.

Even an open specification needs someone capable of implementing it.

Even a repairable machine needs a workshop.

This complicates the romantic idea that openness alone guarantees resilience.

A source code repository can be public and practically unmaintainable.

The build toolchain may be extinct.

The dependency graph may be compromised.

The tests may never have existed.

The system may require expertise nobody has practiced for years.

The license may permit modification while the architecture resists understanding.

Open does not automatically mean inheritable.

Repairability has to be exercised.

This is where the concept of a repair rehearsal becomes useful.

Do not ask only whether a future successor could theoretically repair the system.

Make someone who did not build it perform a repair now.

Give the new engineer the documentation.

Remove the founder from the room.

Replace a component.

Restore from a backup.

Rotate the signing key.

Rebuild the software from source.

Migrate a record into a current format.

Recover a system from a dead controller.

Inspect the hidden surfaces.

The test will reveal dependencies nobody thought to document.

The correct screwdriver exists only in one person’s drawer.

The service account is tied to an employee email address.

The calibration file is stored on a laptop nobody backs up.

The build passes only on an old operating system.

The supplier calls a subcontractor whose name is not in the contract.

The physical access panel is blocked by later construction.

The system is repairable in theory.

The rehearsal discovers whether it is repairable in practice.

A good handoff also includes the right to stop repairing.

This is where the chapter must resist nostalgia.

Repair can become a trap.

An institution may spend extraordinary money preserving a system whose function would be better served by replacement.

Operators become proud of keeping ancient machinery alive.

The maintenance team develops heroic expertise.

The heroism can conceal the fact that the system is consuming more risk, labor, and money every year.

Repairability should increase successor choice, not force preservation.

The future steward needs three options.

Repair.

Replace.

Retire.

A system that supports only the first is not flexible.

It is a maintenance cult.

A system that supports only replacement may discard useful continuity too early.

A system that cannot be retired safely has trapped its successor.

The best design leaves evidence for choosing among the three.

What is the remaining life?

What failures are becoming more frequent?

What dependencies have vanished?

What is the cost of another repair cycle?

What function must survive if the artifact does not?

Which safety boundary changes if we substitute a component?

What would migration require?

That is repairability at institutional scale.

The right to repair is ultimately the right to remain a competent steward after the builder is gone.

It does not require worship of old things.

It requires enough access to understand whether the old thing deserves another life.

The competent stranger test becomes concrete here.

A stranger arrives.

The machine fails.

The original supplier does not answer.

Can the stranger diagnose the failure?

Can the stranger obtain or reproduce what is needed?

Can the stranger perform the work safely?

Can the stranger prove the repaired system is trustworthy?

Can the stranger decide that repair is no longer the right answer?

If not, the artifact may have crossed the century.

Agency did not.