# The Half-Life of Instructions

In 1086, people in England wrote down a survey of land, property, obligations, and wealth on animal skin.

Nine hundred years later, the record was still readable.

In 1986, the BBC set out to create a technological descendant worthy of the anniversary. The new Domesday project would contain maps, photographs, statistics, video, virtual walks, and accounts of ordinary life contributed by schools and communities across the United Kingdom. The material was assembled into an interactive system using laserdiscs and BBC microcomputers.

It looked like the future.

Less than twenty years later, much of that future had become difficult to read.

The data had not necessarily vanished. The normal path to the data had.

The laserdisc format was obsolete. Compatible computers and players became rare. The software environment aged out. Specialist rescue projects eventually had to recover and emulate the system while enough working equipment and expertise still existed.

An International Atomic Energy Agency technical report later used the BBC Domesday project as a case study in digital obsolescence. The contrast is irresistible: the 1086 parchment remained directly readable centuries later, while the 1986 digital project required technical rescue within a generation.

The lazy lesson is that paper is safer than computers.

It is not. Paper burns, ink fades, film decays, optical media delaminate, hard drives fail, cloud companies disappear, libraries flood, stone erodes. No medium wins merely by being old-fashioned.

The more useful lesson is that **information has dependencies**.

A page of writing has relatively few. You need light, vision, language, and enough cultural familiarity to recognize marks as text. A digital object can depend on a chain of carrier, reader, file system, format, decoder, operating system, libraries, hardware, licenses, credentials, network services, schemas, and metadata.

The bits may remain perfect while something higher in the chain breaks.

That is why instructions have a half-life. Not because every instruction decays at one fixed rate, but because each one sits inside a changing system of assumptions.

“Turn the valve clockwise” may remain usable for centuries if the valve is still recognizable. “Run the migration tool with the legacy compatibility flag” can become meaningless when the tool, flag, runtime, repository, and documentation site disappear.

The difference is dependency depth.

A message with few dependencies can survive neglect for a long time. A message with many dependencies can be extraordinarily powerful, but more of its surrounding machinery becomes part of the record.

The BBC Domesday system illustrates the tradeoff well because the interface was part of the achievement. Users could move among maps, images, statistics, and video in ways parchment could never support. But that richness created interpretive dependency. The information was not just on a disc. It was experienced through a stack.

When the stack aged, the content became stranded.

Digital preservation often begins with copying. Keep several copies. Put one elsewhere. Verify integrity with checksums. These are excellent practices because they protect the bits.

They do not guarantee that the bits will remain useful.

The Library of Congress makes the distinction explicit in its work on sustainable digital formats. Long-term usability depends on questions such as whether a format is openly specified, widely adopted, inspectable, self-documenting, burdened by external dependencies, constrained by patents, or blocked by technical protection mechanisms.

Those are properties of recoverability, not merely storage.

A format survives partly because future people can build another interpreter. That is easier when the specification is available. It survives partly because many tools understand it. That is easier when the format is widely adopted. It survives partly because the object carries enough context to be understood outside the original application.

The format's half-life is social as much as technical.

A proprietary format with one vendor can be perfectly engineered and still fragile across decades. An ugly format used everywhere can survive because thousands of tools keep it alive. A standard can outlive the company that popularized it because its meaning has become distributed.

Today's interoperability is often tomorrow's archaeology kit.

This is why preserving the current interpreter is not always enough. Sometimes emulation is the right strategy: recreate enough of the old environment that the original software still runs. Sometimes migration is better: move content into a newer format while preserving the properties that matter. Sometimes both are necessary.

The uncomfortable part is deciding what “the properties that matter” actually means.

A migration cannot preserve everything perfectly. Rendering, compression, timing, metadata, structure, behavior, or appearance may change. The steward therefore has to decide what is essential to the identity and usefulness of the record.

For a photograph, is it the pixel data, visual appearance, metadata, color profile, editing history, legal authenticity, or some combination? For a simulation, is it the source code, exact numerical behavior on old hardware, the inputs and outputs, or the ability to reproduce the scientific result? For a database, are the rows enough, or do the schema, constraints, query behavior, units, and business meaning have to travel too?

There is no universal answer because information does not have one universal kind of value.

A useful way to see the problem is as a ladder.

At the bottom are the **bits**: can future people recover what was stored?

Above that is the **format**: can they determine how the bits are structured?

Then **behavior**: can they render, execute, query, or otherwise interpret the structure?

Then **environment**: can the interpreter run inside a recreated or migrated technical context?

Then **semantics**: do they know what the fields, units, categories, identifiers, and assumptions mean?

Then **provenance**: do they know where the information came from and why it should be trusted?

Finally, **rationale**: do they know why the system was built this way and which properties its creators thought worth preserving?

A handoff can succeed at every lower layer and still fail at the top. The bits are perfect. The program runs. The values appear. Nobody remembers that column seven changed units halfway through the project.

That is successful recovery of an ambiguity, not successful preservation.

This uncertainty creates the temptation to save everything: original files, screenshots, virtual machines, source code, logs, emails, dependencies, documentation, every intermediate version.

At some point preservation becomes hoarding.

The archive grows faster than the ability to interpret it. The successor receives data without hierarchy. A pile can be durable and useless.

The BBC Domesday project was recoverable partly because enough components survived and partly because enough people cared to spend the effort. The second condition matters. Technical recoverability and practical recoverability are not the same thing.

If reading a dataset requires a year of specialist work, a rare machine, reverse engineering, and a grant, many datasets will never be rescued. The information may still exist physically while the cost of interpretation has risen above the value anyone is willing to pay.

That is effective loss.

Future users have budgets too. A preservation strategy that assumes unlimited archaeological effort is not a strategy.

Standards help because common knowledge lowers interpretation cost. Documentation lowers discovery cost. Open-source readers reduce dependence on a vanished vendor. Migration keeps material close to current tools. Emulation can preserve behavior. Metadata keeps meaning near the record. Simple export formats create alternate succession paths.

None guarantees permanence. The point is to avoid a cliff.

Digital systems are full of cliffs. A certificate expires. A license server shuts down. An API is retired. A package disappears. A password manager account belongs to an employee who leaves. A security key is lost. A database version reaches end of life.

One day the system works. The next day the information is still there and the ordinary route to it is not.

Physical decay often announces itself through rust, cracks, fading, or wear. Dependency decay can be discontinuous. The external service exists until it does not.

A future-oriented system therefore has to inventory not only what it stores but what it assumes.

Assumptions are the hidden files of every archive.

The BBC Domesday project assumed a technical ecosystem that looked reasonable in 1986. The mistake was not stupidity. State-of-the-art products simply have a habit of feeling like infrastructure while they are popular.

“Everybody uses this” is a dangerous preservation argument because everybody uses this **now**.

The reverse can happen too. A format can become so widespread that replacing it is harder than continuing to support it. Old protocols accumulate interpreters. Text encodings become infrastructure. The Library of Congress includes adoption among sustainability factors for exactly this reason: broad use creates a preservation community, often accidentally.

Future readability is therefore often improved by present interoperability. A system that can export its state in documented, widely understood forms has more possible successors. A system that can explain itself only through one proprietary application has one succession path.

That does not mean every system should expose every internal detail. Security, privacy, intellectual property, certification, and complexity are real constraints. The durable question is narrower:

What happens if the current interpreter disappears?

If the answer is “then the record disappears too,” the record is not as durable as it looks.

The Domesday rescue also offers a less gloomy lesson. The original access path broke, but people found working equipment, recovered data, emulated behavior, migrated material, and recreated access in newer environments.

The handoff was repaired.

That matters because preservation plans fail in practice. Files are neglected. Migrations are missed. Systems become orphaned. Metadata arrives incomplete. A later steward eventually faces an object whose intended path has broken.

Recoverability is what gives them another route in.

This is the same idea we saw in Cologne Cathedral. A cathedral can survive a long interruption if enough structure, plans, meaning, and motivation remain. A digital archive can survive an obsolete interface if enough bits, specifications, code, metadata, hardware knowledge, and expertise remain.

Different artifacts, same succession problem.

The strongest systems preserve more than one route back to meaning. That is why good preservation practice reaches for multiple copies, different locations, sustainable formats, migration, metadata, export, and sometimes emulation. It assumes the normal route will eventually stop being normal.

Every instruction has a half-life. It may be centuries; it may be five years. The half-life is longer when dependencies are visible, specifications are open, context travels with the artifact, meaning is distributed, and successors can migrate the form while preserving the properties that matter.

It is shorter when interpretation depends on one person, one vendor, one key, one undocumented schema, one proprietary service, or one assumption nobody realized was part of the record.

A digital object that lasts a century will probably not sit untouched for a century. It will be copied, checked, migrated, reindexed, emulated, described again, moved across storage systems, and perhaps translated into forms its creator could not imagine.

The object lasts by moving.

That is the final contrast with the parchment Domesday Book. The medieval record survived with a relatively shallow interpretive stack. The BBC project required active rescue because its stack was deeper and aged faster.

Neither story proves one medium superior for all time. Together they show what the handoff has to preserve.

Not the object alone. The path from object to meaning.