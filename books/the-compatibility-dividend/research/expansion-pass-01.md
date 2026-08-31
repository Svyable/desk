# Expansion pass 01 — evidence notes

This file records sources added during the post-merge length-and-depth pass for *The Compatibility Dividend*. It supplements `source-ledger.md`; the original ledger remains the broad research map.

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

Re-verify current versions and dates of Unicode technical specifications before Shelf release. Historical W3C/WHATWG dates above are stable, but live-standard references can move.
