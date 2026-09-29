# Impact-flash closure audit

This note tests Chapter 1's strongest modern example: the 17 March 2013 lunar impact flash and the later LRO crater. The example is unusually good, but the current prose makes the closure look cleaner and faster than the record actually was.

## What the primary/authoritative record supports

NASA's Meteoroid Environment Office says its current lunar-impact program uses two telescopes with astronomical video cameras and that the second telescope is used to rule out cosmic rays and noise. That is a useful coincidence test, not a generic proof that every coincident flash is an impact.

NASA's 2013 conference record for the 17 March event is stronger and event-specific: the flash was observed in two 0.35 m telescopes at Marshall, lasted more than a second, and was the brightest event in the routine program to that date. NASA's later technical summary says the program had recorded nearly 300 impacts since 2006 at that point.

The orbital follow-up did not simply point LRO at the telescope coordinate and find a crater. NASA's 17 March 2015 account says the first post-flash LROC images, acquired 21 May 2013 at the Marshall-reported coordinates, found surface disturbances but no new crater. A second set on 1 July found ray-like features and splotches converging west of the reported coordinates. A third targeted pair on 28 July revealed the new crater by comparison with pre-existing imagery. NASA gives the crater diameter as 18.8 m (61.7 ft).

A later NASA/NTRS summary makes the localization mismatch explicit: the fresh crater was found about 3 km from the location predicted by a newly developed geolocation technique. This is not a failure of the case. It is the part that makes the case scientifically useful. Optical detection, coincidence, geolocation, orbital search, before/after imaging and impact modeling each had different error structures.

Primary/authoritative sources checked:

- NASA Meteoroid Environment Office, **Lunar Impact Monitoring**: https://www.nasa.gov/meteoroid-environment-office/lunar-impact-monitoring/
- Suggs et al., **Large Meteoroid Impact on the Moon 17 March 2013**, NASA NTRS 20140003002: https://ntrs.nasa.gov/citations/20140003002
- NASA, **NASA's LRO Spacecraft Finds March 17, 2013 Impact Crater and More**, 17 March 2015: https://www.nasa.gov/solar-system/nasas-lro-spacecraft-finds-march-17-2013-impact-crater-and-more/
- Suggs et al., **A Bright Lunar Impact Flash Linked to the Virginid Meteor Complex**, NASA NTRS 20150016509: https://ntrs.nasa.gov/citations/20150016509

## Revision burden

Before Chapter 1 calls this `closure`, preserve the search chronology and the localization error. The clean reader-facing sequence is not `two telescopes saw a flash → LRO found the crater at that location`. It is closer to:

1. two telescopes independently recorded the same bright flash;
2. the first orbital search at the reported coordinates did not find the crater;
3. later images exposed ejecta/surface-change geometry that redirected the search;
4. a subsequent before/after image pair revealed a fresh ~18.8 m crater;
5. the crater was kilometers from the first predicted location, allowing the event to constrain geolocation and impact models rather than merely confirm them.

Extract the exact observing timestamp, reported/predicted coordinates under each geolocation method, uncertainty ellipse if available, LROC image IDs/dates, crater dimensions, flash photometry and model-predicted crater size before publishing tighter quantitative prose.

## Strongest counterargument

A fresh crater appearing after a recorded flash is exceptionally strong event-level evidence, but `closure` should not be allowed to smuggle in claims the evidence does not establish. It does not prove that historical transient lunar phenomena were impact flashes, nor that dual-telescope coincidence alone uniquely identifies impacts. The March 2013 case works because several partly independent measurements converge: simultaneous optical records, later surface change, before/after orbital imaging, plausible impact energetics and a crater in the relevant search region.

The 3 km localization miss is especially valuable counterevidence against an over-neat `instrumental translation` story. Better instruments did not make every variable exact. The measurement regime became more constraining while retaining errors large enough to complicate the search. That is a stronger version of the book's argument: translation works when uncertainties are carried forward, not when the new instrument is treated as omniscient.

## Editorial consequence

The eventual manuscript should let the failed first crater search stay in the story. It supplies narrative pressure without invention, gives the reader a concrete example of why coordinates and uncertainty matter, and prevents the modern impact case from becoming a polished parable in which every instrument immediately agrees. The satisfying part is that the instruments disagreed in a measurable way and the case still converged.
