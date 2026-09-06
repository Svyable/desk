# A Nation in Their Wake

**Title:** A Nation in Their Wake: Twenty-Six Ships, 250 Years, and the Stories That Made America  
**Author:** Sven Hardy Benson  
**Series:** Standalone  
**Status:** Drafting · publication preparation  
**Chapters:** 26 of 26 drafted  
**Canonical Reader:** https://svyable.github.io/desk/reader/#/b/a-nation-in-their-wake/  
**Formats:** Markdown manuscript · canonical Desk web reader  
**Last major refresh:** 2026-09-06  
**Notes:** Twenty-six-decade American history told through consequential ships, from *Bonhomme Richard* to MV *Dali*. The numbered manuscript is complete, but Shelf release remains gated on chapter-length validation, source/evidence ledgers, repository checks, and a clean publication snapshot.

## The book

America is usually drawn from the land inward. *A Nation in Their Wake* tells the first 250 years of the United States from the water in.

One ship anchors each named decade touched by 1776–2026. The choices are deliberately argumentative rather than a ranking of the twenty-six “greatest” vessels. A ship earns its decade when its story exposes a transition America could not avoid: independence, global trade, federal capacity, technological replacement, slavery and law, continental integration, Pacific power, immigration, industrial production, mass politics, logistics, environmental liability, terrorism, safety culture, or infrastructure dependence.

The governing image is the wake. The hull passes. The disturbance keeps traveling.

## Manuscript

- [x] [Front matter](manuscript/front-matter.md)
- [x] **1770s — *Bonhomme Richard***: [The Ship That Sank Into a Nation](manuscript/ch01-the-ship-that-sank-into-a-nation.md)
- [x] **1780s — *Empress of China***: [The First American Road to China](manuscript/ch02-the-first-american-road-to-china.md)
- [x] **1790s — USS *Constitution***: [A Navy Made of Oak](manuscript/ch03-a-navy-made-of-oak.md)
- [x] **1800s — USS *Chesapeake***: [The Broadside Before the War](manuscript/ch04-the-broadside-before-the-war.md)
- [x] **1810s — *Savannah***: [Steam Before Anyone Trusted It](manuscript/ch05-steam-before-anyone-trusted-it.md)
- [x] **1820s — USS *Vincennes***: [Around the World Under Orders](manuscript/ch06-around-the-world-under-orders.md)
- [x] **1830s — *La Amistad***: [The Cargo That Spoke](manuscript/ch07-the-cargo-that-spoke.md)
- [x] **1840s — SS *California***: [California Arrives by Sea](manuscript/ch08-california-arrives-by-sea.md)
- [x] **1850s — USS *Susquehanna***: [The Black Ship at the Door](manuscript/ch09-the-black-ship-at-the-door.md)
- [x] **1860s — USS *Monitor***: [Iron Meets Iron](manuscript/ch10-iron-meets-iron.md)
- [x] **1870s — SS *City of Peking***: [The Pacific Becomes a Route](manuscript/ch11-the-pacific-becomes-a-route.md)
- [x] **1880s — USS *Dolphin***: [The Old Navy Ends](manuscript/ch12-the-old-navy-ends.md)
- [x] **1890s — USS *Maine***: [The Explosion That Enlarged America](manuscript/ch13-the-explosion-that-enlarged-america.md)
- [x] **1900s — USS *Connecticut***: [Around the World in White](manuscript/ch14-around-the-world-in-white.md)
- [x] **1910s — RMS *Lusitania***: [Neutrality Goes Down](manuscript/ch15-neutrality-goes-down.md)
- [x] **1920s — USS *Lexington***: [The Runway at Sea](manuscript/ch16-the-runway-at-sea.md)
- [x] **1930s — MS *St. Louis***: [The Voyage America Refused](manuscript/ch17-the-voyage-america-refused.md)
- [x] **1940s — SS *Patrick Henry***: [The Shipyard Becomes a Weapon](manuscript/ch18-the-shipyard-becomes-a-weapon.md)
- [x] **1950s — *Ideal X***: [The Box That Moved the World](manuscript/ch19-the-box-that-moved-the-world.md)
- [x] **1960s — USS *Hornet***: [The Runway Beneath the Moon](manuscript/ch20-the-runway-beneath-the-moon.md)
- [x] **1970s — SS *Mayaguez***: [The War After the War](manuscript/ch21-the-war-after-the-war.md)
- [x] **1980s — *Exxon Valdez***: [The Spill That Changed the Rules](manuscript/ch22-the-spill-that-changed-the-rules.md)
- [x] **1990s — *Golden Venture***: [The Ship That Ran Aground in Queens](manuscript/ch23-golden-venture.md)
- [x] **2000s — USS *Cole***: [The Warning in Aden](manuscript/ch24-uss-cole.md)
- [x] **2010s — SS *El Faro***: [The Weather Information Was on Board](manuscript/ch25-the-weather-information-was-on-board.md)
- [x] **2020s — MV *Dali***: [The Loose Wire and the Bridge](manuscript/ch26-the-loose-wire-and-the-bridge.md)
- [x] [Back matter](manuscript/back-matter.md)

## Research and audit trail

- [Selection and research brief](research/README.md)
- [Canonical book brief](research/book-brief.md)
- Chapter evidence ledger — required before release; not yet committed
- Structured source ledger — required before release; not yet committed

The manuscript treats each selection as falsifiable. Each decade has at least one serious rival, and the research trail distinguishes the chosen ship's explanatory value from claims that it single-handedly caused the transition around it.

## Rights

- [Rights and permissions](RIGHTS.md)
- [Machine-readable rights record](rights.json)

Copyright © 2026 Sven Hardy Benson. All rights reserved except as explicitly granted in the rights files above.

## Publication gate

Before release to Sven Hardy Benson’s Shelf:

1. Run `python3 scripts/check-book-length.py a-nation-in-their-wake` on a frozen Desk checkout and resolve every sub-3,000-word chapter.
2. Commit the chapter evidence ledger and structured source ledger with checkable support for every chapter’s central claims.
3. Remove manuscript-format residue such as automation comments or noncanonical headings.
4. Run `python3 scripts/check-desk.py` and resolve catalog/Reader mismatches.
5. Commit the final Desk publication snapshot before using the local `scripts/release-book.sh` flow.

Desk status remains Drafting until those gates pass. Shelf publication is a separate explicit release action.