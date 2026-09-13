# Chapter 1 visual archive prototype

## Design intent

Chapter 1 is the small-format test for a visual grammar that can scale across *Red Sox Diplomacy* without turning the manuscript into an illustrated magazine.

The governing idea is **evidence as object**. A photograph, transcript, social post, or moving image enters only when it does one of three jobs: establishes identity, supplies primary evidence, or creates a documented temporal echo that the prose has earned.

The layout should feel closer to a museum catalogue from the future than a conventional trade-book photo insert: generous separation, exact object labels, visible provenance, explicit rights, and enough interpretive language to explain why the object is on the page without telling the reader what to feel.

## Chapter 1 objects

### FIG. 01 — official portrait

**Object:** Nicholas Burns, official portrait as U.S. Ambassador to China.  
**Date:** January 25, 2022.  
**Maker:** U.S. Department of State.  
**Rights:** Public domain, U.S. federal government work.  
**Archive page:** https://commons.wikimedia.org/wiki/File:Nicholas_Burns,_U.S._Ambassador.jpg  
**Narrative job:** The image appears immediately after the line about official biographies making a person enter history already wearing a suit. It makes the official image literal before the chapter moves backward into Wellesley.

### ARCHIVE NOTE — 1997 family Red Sox exchange

**Object:** State Department daily press briefing transcript.  
**Date:** June 16, 1997.  
**Speaker:** Nicholas Burns.  
**Primary source:** https://1997-2001.state.gov/www/briefings/9706/970616db.html  
**Narrative job:** Replace paraphrase at the emotional center of the family inheritance with a short, verified first-person quotation. Quoted language is italicized in the chapter.

### FIG. 02 — Beijing baseball clinic

**Object:** Ambassador Burns with young Chinese baseball fans, wearing a Boston Red Sox cap and holding a baseball.  
**Date:** October 22, 2024.  
**Maker/source:** U.S. Department of State / Ambassador Nicholas Burns account.  
**Rights:** Public domain, U.S. federal government work.  
**Archive page:** https://commons.wikimedia.org/wiki/File:Ambassador_Burns_with_Chinese_baseball_fans.png  
**Original social post:** https://x.com/USAmbChina/status/1848646673523728693  
**Narrative job:** A documented late-career echo of the identity established in the chapter. The caption explicitly says it is not evidence about childhood.

### SOCIAL OBJECT 01 — post facsimile

**Local media:** `../media/ch01-social-2024-baseball-clinic.svg`  
**Form:** Text facsimile, intentionally not a screenshot of platform chrome.  
**Reason:** The post itself is the archival object. Reconstructing only the relevant text, date, handle, provenance, and rights makes the book less dependent on a platform UI while preserving the documented source. The card links to the original post.

### MOVING IMAGE 01 — introductory video

**Object:** *Ambassador Nicholas Burns’ Introductory Video*.  
**Date:** April 29, 2022.  
**Duration:** 2:25.  
**Maker/source:** U.S. Embassy & Consulates in China.  
**Rights:** Public domain, U.S. federal government work.  
**Playable archive:** https://commons.wikimedia.org/wiki/File:Ambassador_Nicholas_Burns%E2%80%99_Introductory_Video.webm  
**Local media card:** `../media/ch01-video-intro-2022.svg`  
**Narrative job:** A moving-image after-object. It comes after the prose ending rather than interrupting it.

## Visual grammar to carry forward

1. **The prose remains primary.** Media should punctuate the argument, not decorate every few pages.
2. **Every photograph gets an object label.** Identification, date, maker/source, rights, and narrative relevance should be visible in the reading flow.
3. **Quotes are italicized when quoted as objects.** Use verified language only; quotation marks do not turn paraphrase into evidence.
4. **Social posts should be treated as documents.** Prefer durable facsimiles plus original links over screenshots that inherit disposable platform chrome, unless the interface itself is historically relevant.
5. **Video should be playable without pretending the book is television.** A deliberate card can link to a stable archive copy; future Reader work can promote these to inline playback if the format proves worth keeping.
6. **Late images cannot backfill early biography.** A 2024 Red Sox image can show continuity. It cannot prove what Burns felt in 1967, 1975, 1978, or 1986.
7. **Rights belong in the object label, not in invisible production notes.** Readers should be able to tell what they are looking at and where it came from.

## Prototype caveat

The two photographic figures are currently embedded from Wikimedia Commons stable file-redirect endpoints so the editorial composition can be judged immediately. Before release, vendor the approved image files into `books/red-sox-diplomacy/media/` and switch the chapter to relative paths, consistent with the Desk media rule. The SVG social and video cards are already local.
