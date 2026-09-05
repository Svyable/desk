# Source notes — Hypertext: How the Link Changed Everything

These notes are the factual spine for the manuscript. The prose should synthesize rather than reproduce source language, and direct quotations should be rare, short, and checked against the source.

## S01 — Vannevar Bush, “As We May Think” (1945)

W3C historical transcription, especially sections 6–8.

- https://www.w3.org/History/1945/vbush/vbush6.shtml
- https://www.w3.org/History/1945/vbush/vbush7.shtml
- https://www.w3.org/History/1945/vbush/vbush8.shtml

Use for: associative indexing, the memex, permanent joining of items, trails, and Bush's distinction between hierarchical indexing and association. Important limitation: Bush's imagined apparatus was based on microfilm and was not the Web.

## S02 — Ted Nelson, ACM 1965

T. H. Nelson, “Complex information processing: a file structure for the complex, the changing and the indeterminate,” Proceedings of the 1965 20th National Conference, pp. 84–100.

- https://doi.org/10.1145/800197.806036

Use for: the published 1965 hypertext work and Nelson's concern with personal files, changing structures, and nonsequential organization. Do not flatten the later Xanadu vision into the Web; the differences are part of the story.

## S03 — Computer History Museum on Ted Nelson / Andy van Dam

- https://computerhistory.org/blog/meet-2021-chm-fellow-honoree-andy-van-dam/
- https://www.computerhistory.org/revolution/the-web/20/373
- https://www.computerhistory.org/revolution/the-web/20/373/2184

Use for: Hypertext Editing System, Nelson's influence, clickable-link concepts, and the distinct research traditions around hypertext.

## S04 — Douglas Engelbart / NLS / 1968 demonstration

Computer History Museum timeline and retrospective.

- https://www.computerhistory.org/timeline/1968/
- https://computerhistory.org/blog/net-50-did-engelbart-s-mother-of-all-demos-launch-the-connected-world/

Use for: NLS, linked addressable text, collaboration, pointing device, and the 1968 public demonstration. Avoid the simplified myth that Engelbart “invented everything” shown in the demo; the system was a team effort built over time.

## S05 — CERN: birth and short history of the Web

- https://home.cern/science/computing/the-birth-of-the-web/
- https://home.cern/science/computing/the-birth-of-the-web/short-history-web/

Use for: Berners-Lee's 1989 proposal, 1990 browser/server, first site, the aim of information-sharing across institutions, the combination of hypertext, networks, and computers, and CERN's 30 April 1993 public-domain release.

## S06 — CERN retrospective on Web inventors

- https://home.cern/accolade-for-inventors-of-the-world-wide-web/

Use for: the practical CERN information problem, hiding network addresses behind highlighted items, Robert Cailliau's role, and the early spread of the Web through the scientific community.

## S07 — W3C, Architecture of the World Wide Web

- https://www.w3.org/TR/webarch/
- historical working draft used during initial research: https://www.w3.org/TR/WD-webarch-20031001/

Use for: identification, interaction, representation, URI-based naming, and the definition of a link as a relation formed when one resource refers to another using a URI. Especially important for the book's claim that global naming lowers the cost of communication between independent communities.

## S08 — RFC 3986, Uniform Resource Identifier (URI): Generic Syntax

T. Berners-Lee, R. Fielding, L. Masinter, January 2005.

- https://www.rfc-editor.org/rfc/rfc3986.html
- https://www.rfc-editor.org/info/rfc3986/

Use for: URI scope, generic syntax, identification, hierarchy, relative references, late binding, and the separation between identification and interaction. This is a mature specification, not a description of the exact 1990 implementation.

## S09 — Tim Berners-Lee, “Cool URIs don't change”

- https://www.w3.org/Provider/Style/URI.html

Use for: persistence as an institutional obligation, dangling links, and the distinction between a stable public identifier and the file-system or organizational reality behind it.

## S10 — Brin & Page, “The Anatomy of a Large-Scale Hypertextual Web Search Engine” (1998)

- https://research.google/pubs/the-anatomy-of-a-large-scale-hypertextual-web-search-engine/

Use for: Google's explicit use of information contained in hyperlink structure, uncontrolled hypertext collections, crawlers, and the early search-engine framing. Distinguish the broad family of link analysis from later production ranking systems.

## S11 — Google Books history / citation-analysis origin story

- https://books.google.com/googlebooks/about/history.html

Use cautiously for: BackRub, the connection between citation analysis and link analysis, and the digital-library setting around Page and Brin's early work. It is a Google retrospective and should not be the only source for contested priority claims.

## S12 — Google Search spam policy and link-spam updates

- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/blog/2022/12/december-22-link-spam-update
- https://developers.google.com/search/blog/2021/07/link-tagging-and-link-spam-update

Use for: evidence that links became economically valuable ranking signals, the resulting market for unnatural links, qualification mechanisms such as `nofollow` and `sponsored`, and the continuing adversarial work of discounting manufactured edges. Policy pages describe Google's rules, not universal laws of search.

## S13 — Perma.cc / Harvard Law School Library

- https://perma.cc/about

Use for: link rot, the archival response to unstable citations, and the cited finding that in a sample of legal journals roughly 70% of links in citations from 1999–2011 no longer pointed to the same material. Trace the underlying study before using the statistic in publication copy if the chapter relies heavily on it.

## S14 — Apple Universal Links

- https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content

Use for: HTTP(S) URLs opening specific app content, verified association between site and app, and graceful fallback to the browser when an app is absent. This demonstrates the persistence of Web addressing even inside native-app ecosystems.

## S15 — Android App Links

- https://developer.android.com/training/app-links/about

Use for: verified website URLs routed to app content, domain verification, and the operating-system role in deciding what application receives a link. Distinguish Android's mechanism from the open Web's ordinary browser navigation.

## S16 — W3C “Cool URIs for the Semantic Web”

- https://www.w3.org/TR/cooluris/

Use for: using HTTP URIs to identify things as well as documents, redirect and representation patterns, and the broader idea that stable identifiers can support machine-readable relationships.

## S17 — Historical Mosaic material

Computer History Museum and CERN provide the preferred broad historical anchors. Supplemental historical material:

- https://www.computerhistory.org/timeline/networking-the-web/
- https://home.cern/science/computing/the-birth-of-the-web/short-history-web/

Use for: browser adoption context and the movement from research systems toward mass use. Avoid the false claim that Mosaic was the first Web browser.

## S18 — Repository and protocol sources to add during revision

Publication-quality revision should add primary sources for:

- the original 1989 CERN proposal and 1990 proposal with Robert Cailliau;
- HTML anchor semantics and the evolution of `rel` values;
- HTTP redirect semantics;
- legal cases concerning deep linking and inline linking;
- DOI / Handle persistence and scholarly citation infrastructure;
- academic measurements of Web link rot outside legal scholarship;
- contemporary evidence for platform treatment of outbound links;
- contemporary AI answer systems and citation behavior if named products remain in the manuscript.

## Research discipline

The central argument is interpretive. Sources establish the history and technical properties; they do not “prove” that the link changed civilization. The manuscript must keep causal language proportional. Prefer “enabled,” “made cheap,” “made legible,” “made scalable,” or “became a substrate for” when a stronger claim would erase other causes.
