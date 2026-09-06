#!/usr/bin/env python3
from pathlib import Path

ROOT = Path("books/a-nation-in-their-wake/manuscript")
MARKER = "<!-- PUB-AUGMENT-ROUND3-2026-09-06 -->"

ADDITIONS = {
"ch11-the-pacific-becomes-a-route.md": r'''

One last consequence of regular steamship traffic was demographic memory. A route creates communities at both ends. Letters, remittances, employers, family ties, and return voyages make later migration easier because the next traveler does not begin with the same uncertainty as the first. Restrictionists understood this intuitively even when they described immigration only as a current labor problem. They were trying to shape the future population by controlling the network in the present.

That is why the liner is more than a carrier. Repetition turns movement into relationship. Once the relationship exists, exclusion requires a permanent administrative effort to interrupt something the transport economy continually makes easier.
''',
"ch15-neutrality-goes-down.md": r'''

The final selection test is memory. Americans remember *Lusitania* partly because a passenger liner gives the civilian cost of maritime strategy a name. Blockade statistics and submarine tonnage can become abstractions. A ship manifest restores particular lives, destinations, and families to the calculation.

That mnemonic power has strategic consequences of its own. Democracies fight through public interpretation as well as military capability. A policy that repeatedly generates memorable civilian losses can change what neutral publics believe about the belligerent using it. The U-boat did not only attack shipping capacity. It attacked the political sustainability of German strategy among people Germany still needed to remain outside the war.
''',
"ch17-the-voyage-america-refused.md": r'''

The voyage also exposes how much a country's reputation depends on decisions that look small compared with later wartime mobilization. The United States would soon spend sums and organize capacities almost beyond 1939 imagination. That contrast makes the refugee refusal harder, not because wartime resources were available in advance, but because it proves political systems can redefine what is administratively possible when priorities change.

Capacity is partly hardware and money. It is also permission.

The passengers aboard *St. Louis* encountered a powerful country whose rules defined their emergency as insufficient reason to alter the queue. The failure was not that America lacked a coastline large enough to receive them. It was that the political system did not convert danger into authority to act.
''',
"ch20-the-runway-beneath-the-moon.md": r'''

There is a final institutional elegance in the recovery. The Navy did not need the public to understand every layer for the layers to work. Sailors, swimmers, meteorologists, aviators, doctors, communications specialists, engineers, and NASA managers operated inside different professional languages while sharing one deadline: place three astronauts and one spacecraft safely inside the recovery system.

That is coordination at its most mature. Success does not require one genius to understand the entire machine. It requires interfaces clear enough that specialists can trust the next specialist.

Apollo's most famous photograph shows one human alone on another world. The recovery reveals the opposite truth.

He came home through a crowd.
''',
"ch21-the-war-after-the-war.md": r'''

The incident also shows why endings are strategically dangerous. Institutions want a war to conclude at a recognizable moment, but adversaries, allies, crews, bases, intelligence networks, and political habits do not reset when a capital falls. The fall of Saigon ended one political order. It did not erase American forces from the region or American expectations about protecting citizens and shipping.

*Mayaguez* arrived in that gap between formal ending and institutional afterlife.

The lesson is broader than Southeast Asia. A state leaving a conflict needs an explicit theory for which commitments survive the exit. Otherwise the next small crisis can reactivate the old war's fears without the old war's strategy.
''',
"ch22-the-spill-that-changed-the-rules.md": r'''

The regulatory legacy is strongest when stated as a design principle: prevention, response, and liability belong to the same system. Engineering without response planning assumes prevention will be perfect. Response planning without liability can socialize the cost of private risk. Liability without technical standards may compensate harm after the fact while doing too little to reduce its probability.

The post-*Valdez* framework tried to bind those layers together.

No statute can eliminate maritime oil risk. The historical change was an insistence that the ordinary price of transporting oil include more of the cost of preparing for the day transport stops being ordinary.
''',
"ch24-uss-cole.md": r'''

The ship's return to service is an important coda because it separates resilience from invulnerability. A resilient system is not one that cannot be hurt. It is one that can absorb damage, preserve life and function where possible, learn, repair, and return without pretending the vulnerability never existed.

That is a more demanding standard than deterrence rhetoric often allows. Global power will always create contact points. The objective is not to eliminate contact. It is to understand which contacts can become catastrophic, build layers around them, and train people for the moment the layers fail anyway.

*Cole* survived the blast.

The harder task was making the institution remember why.
''',
}

for name, addition in ADDITIONS.items():
    path = ROOT / name
    text = path.read_text(encoding="utf-8")
    if MARKER in text:
        continue
    path.write_text(text.rstrip() + addition.rstrip() + "\n\n" + MARKER + "\n", encoding="utf-8")

print(f"Round-three augmented {len(ADDITIONS)} chapters idempotently.")
