# Expansion pass 01 — evidence notes

This file records sources added during the post-merge length-and-depth pass for *The Compatibility Dividend*. It supplements `source-ledger.md`; the original ledger remains the broad research map.

## Chapter 7 — The Barcode at Checkout

### Retail migration to 2D barcodes

- GS1's current retail program sets an ambition that, by the end of 2027, retail point-of-sale systems should be capable of reading and processing a defined set of 2D barcodes using GS1 standards in addition to existing linear barcodes.
- GS1's implementation guidance explicitly describes a transition period in which linear and 2D barcodes coexist because scanning hardware and software will not upgrade simultaneously.
- Sources:
  - GS1, **2D Barcodes at Point of Sale / Ambition 2027**: https://www.gs1.org/industries/retail/solution-provider-2d-readiness
  - GS1, **2D Barcodes at Retail Point-of-Sale Implementation Guideline**: https://ref.gs1.org/guidelines/2d-in-retail/
- Use: supports the chapter's argument that infrastructure migrations often require dual-running and that a stable identity layer can survive a change in data carrier.
- Caution: “Ambition 2027” is an industry goal, not a claim that every retailer worldwide will have completed migration by that date.

### GS1 Digital Link

- GS1 Digital Link defines a standardized way to represent GS1 identification keys, including GTINs, in web URIs and connect those identifiers to online information or services.
- Sources:
  - GS1, **GS1 Digital Link**: https://www.gs1.org/standards/gs1-digital-link
  - GS1 reference specification landing page: https://ref.gs1.org/standards/digital-link/
- Use: supports the distinction among persistent identity, physical carrier, additional encoded attributes and mutable online information.
- Caution: GS1 Digital Link extends the GS1 identification system; it is not a replacement identity system and should not be described as requiring every retail use case to perform a live web lookup.

## Chapter 8 — The Plug Problem

### SAE J3400 and EV connector standardization

- In December 2023, SAE International published the J3400 Technical Information Report based on the Tesla-developed North American Charging Standard connector.
- The U.S. Joint Office of Energy and Transportation describes the standardization effort as making the connector available for use, manufacture and deployment by EV and charging-equipment suppliers across North America.
- In August 2024 the SAE task force voted to establish J3400 as a Recommended Practice, advancing the standardization process.
- Sources:
  - Joint Office of Energy and Transportation, **SAE J3400 Charging Connector**: https://driveelectric.gov/charging-connector
  - Joint Office of Energy and Transportation, **SAE Task Force Votes to Establish J3400 Standard as Recommended Practice**, 12 September 2024: https://driveelectric.gov/news/j3400-standard-practice
  - SAE Mobilus topic material for J3400 and J1772: https://saemobilus.sae.org/topics/electrical-electronics-and-avionics/vehicle-charging/charge-couplers
- Use: supports the chapter's live example of a de facto/proprietary connector lineage moving into a consensus standards process after market adoption has already created an installed base.
- Caution: connector standardization does not by itself guarantee universal charging access; network authorization, communications, payment, software, certification and site availability remain separate layers.

### EV charging standards stack

- The Joint Office describes charging interoperability as spanning connector standards, vehicle-to-charger communication such as ISO 15118, public-key infrastructure, electrical metrology and backend protocols including OCPP and OCPI.
- Source: Joint Office of Energy and Transportation, **Electric Vehicle Charging Infrastructure Standards and Reliability**: https://driveelectric.gov/standards-reliability
- Use: supports the chapter's claim that the visible plug is only one layer in a larger standards stack.

## Chapter 10 — The Web's Small Vocabulary

### Browser fragmentation and the Web Standards Project

- The Web Standards Project's archived history describes its formation in 1998 against the practical cost of materially incompatible browser implementations from Netscape and Microsoft.
- Source: Web Standards Project, **History of the Web Standards Project**: https://www.webstandards.org/about/history/index.html
- Use: supports the chapter's claim that a public specification can still fail economically when implementations disagree at the seam publishers depend on.
- Caution: WaSP was an advocacy organization and participant in the history, not a neutral quantitative source for browser market share or the full causes of browser incompatibility. Avoid importing its rhetoric as settled historical judgment.

### W3C / WHATWG convergence

- On 28 May 2019, W3C and WHATWG announced an agreement to collaborate on a single development stream for HTML and DOM.
- W3C explicitly said that two distinct HTML/DOM specifications both claiming normative status were harmful to the community.
- The agreement placed principal development of HTML and DOM in the WHATWG Living Standard process while defining a collaboration and review mode with W3C.
- Sources:
  - W3C, **W3C and the WHATWG signed an agreement to collaborate on a single version of HTML and DOM**, 28 May 2019: https://www.w3.org/news/2019/w3c-and-the-whatwg-have-just-signed-an-agreement-to-collaborate-on-the-development-of-a-single-version-of-the-html-and-dom-specifications/
  - W3C / WHATWG, **Memorandum of Understanding Between W3C and WHATWG**, 28 May 2019: https://www.w3.org/2019/04/WHATWG-W3C-MOU.html
  - W3C HTML overview pointing to the current WHATWG HTML Living Standard: https://www.w3.org/html/Overview.html
- Use: supports the chapter's argument that standards institutions themselves can impose interoperability costs when their normative outputs diverge.
- Caution: do not reduce the long W3C/WHATWG history to a simple institutional feud or claim that the 2019 agreement ended all disagreement about web-platform governance.

## Chapter 11 — Writing Every Language

### Normalization

- Unicode Standard Annex #15 defines normalization forms so canonically equivalent strings can be transformed into stable comparable representations.
- Source: Unicode Consortium, **UAX #15 — Unicode Normalization Forms**: https://www.unicode.org/reports/tr15/
- Use: supports the claim that universal character representation does not by itself make raw string comparison safe or semantically complete.

### Stability guarantees

- Unicode's character-encoding stability policy says that once a character is encoded, it will not be moved or removed; the policy is explicitly intended to keep text valid across later versions.
- Source: Unicode Consortium, **Unicode Character Encoding Stability Policies**: https://www.unicode.org/policies/stability_policy.html
- Use: supports the discussion of standards representing silent stakeholders in previously stored data.
- Caution: properties and supporting data can evolve within defined constraints; do not paraphrase stability as 'nothing about an encoded character can ever change.'

### Confusable identifiers and security

- Unicode Technical Standard #39 specifies mechanisms for identifying security risks that arise from confusable characters, mixed scripts, and identifier use.
- Source: Unicode Consortium, **UTS #39 — Unicode Security Mechanisms**: https://www.unicode.org/reports/tr39/
- Use: supports the distinction between broad representability and application-specific identifier/security policy.
- Caution: Unicode provides mechanisms and profiles; it does not mandate one universal identifier policy for banks, social systems, archives, programming languages, or agent protocols.

## Release check

Re-verify current versions and dates of GS1, SAE/J3400, Unicode and other live technical specifications before Shelf release. Historical W3C/WHATWG dates above are stable, but living-standard references can move.
