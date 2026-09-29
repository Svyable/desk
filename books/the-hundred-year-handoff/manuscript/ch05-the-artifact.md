# The Artifact

Every twenty years, the building becomes new again.

At Ise Jingu in Japan, a new sanctuary is constructed beside the old one. The dimensions are repeated. Sacred furnishings and treasures are remade. Craftspeople cut, fit, carve, weave, lacquer, and forge objects whose predecessors were made by other hands twenty years earlier. Then the central sacred symbol is transferred, and the newly built sanctuary becomes the active one.

The recorded practice reaches back more than thirteen centuries. The first recorded Shikinen Sengu at the Inner Shrine took place in 690; the sixty-second was conducted in 2013. The current cycle is expected to culminate in 2033.

From one modern idea of preservation, the strange thing is obvious: continuity at Ise is produced partly by replacing the artifact.

The timbers do not have to remain the same timbers. The roof does not have to remain the same roof. The structure persists because people keep making it again.

This is not a generic maintenance prescription disguised as religion. Shikinen Sengu has meanings and obligations far beyond engineering. But the practice exposes something useful about any system expected to outlive its components: a long-lived artifact is often a relationship among replaceable parts, practiced skills, materials, dimensions, and institutions rather than one untouched bundle of matter.

A bridge cable corrodes. A pump wears out. A server fails. A valve reaches the end of its qualified life. A city replaces the water main beneath a street older than the crew digging it up. Long-lived artifacts are often made of short-lived parts.

The first layer of the handoff stack is therefore less obvious than it sounds.

What, exactly, is the artifact?

If the answer is “the original material,” many useful systems cannot survive. If the answer is “whatever still has the same name,” almost anything can be called continuous after everything important changes.

A successor needs a better distinction. They need to know what may change, what must remain equivalent, and what would destroy the identity or value of the thing.

Ise is unusually clear because replacement is not a reluctant response to failure. Remaking is built into the institution. That repeated act renews more than wood. It renews supply relationships, craft practice, organizational coordination, and familiarity with how the whole comes together.

It also reveals a paradox of durability: the longer a component survives without demanding attention, the easier it can be for the capability to replace it to disappear unnoticed.

Imagine a machine that runs for fifty years without a major repair. On year fifty-one, a critical part fails. The drawings assume a supplier that disappeared thirty years ago. The tooling was scrapped. The alloy specification refers to an obsolete process. The only engineer who understood the tolerances retired before the newest maintainer was born.

The machine lasted. The maintenance system did not.

Its durability postponed the handoff until the handoff became harder.

Ise solves that problem in an extreme way: do the work again before the knowledge becomes archaeology.

Most systems should not literally rebuild themselves every twenty years. The point is not the interval. It is the recognition that continuity belongs partly to repeatable production, not only to resistant material.

A future steward needs a path from failure to replacement. That path can live in drawings, tolerances, samples, test procedures, tools, suppliers, training, standards, reference implementations, spare parts, software, and practiced skill. The mix changes by domain; the question stays recognizable:

If this part disappeared tomorrow, could we make another one that preserves what matters?

“What matters” is where the chapter becomes difficult.

Function is not the only value an artifact can carry. A medieval manuscript is not interchangeable with a perfect modern reprint. The handwriting is evidence. The parchment is evidence. The binding, stains, and sequence of repairs may all be evidence. A historic building can lose something essential if it is demolished and replaced by a visually exact replica. A painting is not the same object merely because new pigment occupies the same positions as the old.

The 1994 Nara Document on Authenticity is useful here because it resists a single universal test. Authenticity can involve form and design, materials and substance, use and function, traditions and techniques, location and setting, spirit and feeling, and other sources of information. Different cultures and different artifacts place weight on different things.

That makes the handoff problem more precise.

An artifact is a bundle of invariants and variables. Sometimes the invariant is material. Sometimes it is geometry, function, provenance, interface behavior, ritual sequence, or the ability to reproduce a result. Sometimes the important continuity is not inside the object at all but in the relationship between the object and a community that knows how to use it.

The handoff fails when successors cannot tell which is which.

Every maintainer eventually becomes an interpreter. “Replace worn parts” does not explain what counts as worn. “Preserve the original design” does not explain which deviations are harmless. “Do not alter” may become impossible under changed conditions. “Upgrade as needed” can erase the very property the system was meant to preserve.

This is why long-lived artifacts accumulate arguments.

A church debates whether damaged stone should be stabilized or replaced. A transit agency tries to preserve century-old tilework while adding ventilation and accessibility. A software maintainer has to decide whether compatibility with an old interface remains part of the product's identity or has become a tax on every new release. A laboratory asks whether replacing an instrument will break comparability in a long time series.

These are identity questions with operational consequences.

Civilization already makes such distinctions constantly. Serial numbers tie a component to a history. Configuration baselines say which version of a system exists. Chain-of-custody records establish whether evidence is the same evidence. Conservation records document intervention. Software versioning distinguishes patches from breaking changes. Standards define which deviations remain conformant.

We build these small identity machines because obligations attach to things.

The problem becomes dangerous when the hierarchy of importance disappears.

A successor encounters an old pipe, library, beam, enclosure, rule, or interface and hears only: do not touch it. Nobody remembers why.

Maybe the warning is essential. Maybe it is obsolete. The uncertainty becomes a constraint of its own.

This is context debt made physical. The present team knows that one dimension is critical and another incidental; one bracket moved because of a test failure while a nearby hole exists because an abandoned prototype once needed it. The artifact does not label the difference.

Without a handoff, accidental history hardens into apparent design intent. Or real design intent gets mistaken for accidental history.

Both errors are expensive.

Ise offers a useful counterpoint because remaking forces distinctions into the open. A repeated craft has to be specified somehow, even when part of the specification lives in apprenticeship rather than drawings. Materials must be sourced. Dimensions must be recreated. Sequences must be remembered. People have to agree that the successor artifact belongs to the same continuing institution.

Repetition turns a static inheritance into a tested inheritance.

That suggests a general practice: do not wait for catastrophic failure to discover whether the artifact is reproducible.

The test does not require rebuilding everything. A factory can qualify alternate suppliers before the incumbent disappears. A software project can perform clean builds in new environments instead of treating one developer's laptop as the preservation system. A laboratory can calibrate replacement instruments against old ones before the old device fails. A library can migrate representative files while the old readers still work. An infrastructure operator can inspect hidden components and exercise emergency equipment rather than infer health from the visible surface.

The common pattern is rehearsal of succession.

Can another steward make, obtain, restore, or replace what matters? Can they recognize an acceptable successor? Can they explain the deviations?

Modern systems make this harder because the visible artifact often has a shadow artifact made of dependencies. A connector comes from one company, a resin from another, a test fixture depends on licensed software, and a certified component relies on a process no second supplier has ever reproduced. A future steward may possess the object while losing the industrial ecosystem that made its critical properties possible.

This is why “keep the thing safe” is too shallow a preservation strategy. Keeping every original part can make a system unsafe if worn material is treated as sacred. Replacing too freely can erase provenance and meaning. Standardizing everything can destroy useful local adaptation; refusing standards can make future replacement impossible.

There is no universal balance because artifacts carry different kinds of value. The design task is to make the value legible.

A useful handoff therefore distinguishes at least four categories.

Some things must remain physically original because material itself is evidence, heritage, calibration reference, legal original, or unique fabric.

Some things must remain functionally equivalent. A pump may be replaced by a different pump if the required pressure, flow, reliability, and interfaces survive.

Some things must remain reproducible. Their specific components may change repeatedly as long as the capability to make a valid successor remains alive.

And some things may change freely. A future team should not spend a week preserving the color of a fastener because an engineer happened to choose blue in 1998.

These categories sound obvious until you inherit a real system and discover that nobody wrote them down.

People receive drawings with no hierarchy, source code with no statement of invariants, buildings with no clear distinction between heritage fabric and replaceable services, policies with no separation between purpose and implementation. Then every proposed change can be made to sound either reckless or impossible.

The artifact layer asks for a more useful humility. You are not handing the future an object whose identity is self-evident. You are handing them a problem of identity.

They need to know what they have, which parts are allowed to die, which parts can be remade, and which distinctions the present generation may itself have misunderstood.

A successful handoff does not require a successor to reproduce the artifact forever. That would turn maintainability into obedience.

Ise offers something narrower and more useful. Continuity can survive the disappearance of original material. What appears permanent may actually be a repeated act.

The identity of a long-lived artifact is not simply whatever never changes.

It is the pattern of change the handoff knows how to survive.