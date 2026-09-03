# Chapter 8 — Maintenance, absorption, and the limits of contribution

## Claim under test

Chapter 8 argues that AI could increase the rate at which private problem-solving becomes reusable public capability, but that generation is not the scarce resource in a mature commons. The harder step is absorption: review, trust, maintenance, provenance, security, governance, and the institutional capacity to accept a contribution without making the shared system worse.

## Sources checked

- Open Source Security Foundation (OpenSSF), “Census II of Free and Open Source Software — Application Libraries.” The project aggregates more than half a million observations of FOSS libraries used in production applications at thousands of companies in order to identify widely depended-on components and prioritize scarce security resources. This supports the chapter’s distinction between abundant code and finite maintenance attention: dependency importance is highly uneven, so useful stewardship requires deciding where review and support matter most. https://openssf.org/resources/census-ii-of-free-and-open-source-software-application-libraries/
- OpenSSF and OpenJS Foundation, “Open Source Security (OpenSSF) and OpenJS Foundations Issue Alert for Social Engineering Takeovers of Open Source Projects” (April 15, 2024). The foundations describe a credible attempted takeover of an OpenJS project that resembled the XZ/liblzma campaign, including persistent requests by relatively unknown contributors for maintainer access. Their practical warning is that accepting contributions and granting administrative authority are trust decisions that cannot be reduced to raw contribution volume. https://openssf.org/blog/2024/04/15/open-source-security-openssf-and-openjs-foundations-issue-alert-for-social-engineering-takeovers-of-open-source-projects/
- OpenSSF, “xz Backdoor CVE-2024-3094” (March 30, 2024). OpenSSF documents that the malicious code was inserted upstream into xz/liblzma versions 5.6.0 and 5.6.1 and was designed to affect particular Linux distribution builds. The episode is useful here not as a generic cyber scare but as counterevidence to any assumption that more technically competent contribution is automatically a public good. https://openssf.org/blog/2024/03/30/xz-backdoor-cve-2024-3094/
- CISA, DARPA, OUSD(R&E), and NSA, “Closing the Software Understanding Gap” (2025). The joint guidance cites the 2024 compromise of a core library as a national-security example and points to CISA’s contemporaneous analysis, “Lessons from XZ Utils: Achieving a More Sustainable Open Source Ecosystem.” This is authoritative evidence that software supply-chain understanding and maintainer sustainability are institutional security concerns, not merely volunteer-community preferences. https://www.cisa.gov/sites/default/files/2025-01/joint-guidance-closing-the-software-understanding-gap-508c.pdf
- Alpha-Omega / OpenSSF, 2024 Annual Report (published January 29, 2025). Alpha-Omega reports nearly $6 million in 2024 grants, including staffing security teams at ten major open-source organizations, hardening projects such as the Linux kernel and Homebrew, and funding security audits. Because this is a program self-report, it should be treated as evidence of the resources the ecosystem is directing toward maintenance rather than independent proof that any particular intervention succeeded. https://openssf.org/blog/2025/01/29/alpha-omega-2024-annual-report/

Sources rechecked September 2, 2026.

## Counterevidence and boundary conditions

The XZ episode should not be used to imply that open contribution is uniquely insecure or that centralized proprietary development would automatically have prevented the attack. Closed systems also suffer insider threats, supply-chain compromise, concentrated failure, and opaque security practices. The narrower lesson is about the chapter’s proposed machine-contribution flywheel: lowering the cost of producing patches, translations, documentation, or data does not lower the cost of deciding which contributions deserve trust at the same rate.

Nor does maintainer scarcity prove that AI-generated contribution will overwhelm commons. Agents may also lower triage costs, improve testing, detect suspicious changes, prepare reproducible evidence, and help maintainers review more work. The thesis becomes stronger only if machine assistance improves the ratio of validated, maintainable contributions to review burden rather than simply increasing submission volume.

The strongest falsification test is therefore operational: if AI-assisted commons experience rising queues, maintainer burnout, security incidents, or verification costs faster than they gain accepted improvements, then the chapter’s proposed altruism flywheel is generating centrifugal force rather than compounding capability.

## Editorial implication

A later prose pass can use XZ as a concrete complication immediately after the chapter says that the bottleneck will be “acceptance into maintained systems.” The memorable point is not that an attacker once hid code in an open-source project. It is that a commons must distinguish a gift from a burden and a contributor from a custodian. The more cheaply machines can manufacture plausible contributions, the more valuable earned trust, review capacity, provenance, and stewardship become.

This also sharpens the chapter’s reciprocity argument. Returning code upstream is not always sufficient reciprocity. Sometimes the scarce contribution is paying for the people and institutions capable of saying no, reviewing carefully, maintaining the result, and remaining accountable years later.
