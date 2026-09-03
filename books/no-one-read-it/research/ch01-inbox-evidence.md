# Chapter 1 evidence notes — The Inbox Writes Back

## Chapter job

Open the book with the smallest visible form of machine authorship: a suggested reply beneath an email. Show that reducing composition effort can be genuinely useful, then separate three outcomes that are too often treated as one:

- a message was sent;
- a thread or case was resolved;
- the recipient understood and acted on the underlying obligation.

The chapter should establish a mechanism, not announce that the mechanism has already conquered every workplace. The observed record shows that AI can increase communication speed and reduce time spent on email. It does not yet show that reciprocal generative systems universally increase total message volume or unresolved obligations. That is the chapter's forward inference and should be labeled as such.

## 1. Opening artifact — Smart Reply

**Anjuli Kannan et al., “Smart Reply: Automated Response Suggestion for Email,” KDD 2016**

https://research.google/pubs/smart-reply-automated-response-suggestion-for-email/

Use for:

- Smart Reply generated semantically different short replies that a user could send with one tap.
- The deployed system processed hundreds of millions of messages daily.
- At the time of the paper, it assisted with roughly 10 percent of mobile replies in Inbox by Gmail.
- The engineering problem included determining whether a message was reply-worthy, generating candidate replies, and presenting a small useful set at production scale.

The chapter can describe the interface and the reported adoption. It should not invent a particular user's inbox, commute, or reaction.

**Brian Strope and Ray Kurzweil, Google Research, “Efficient Smart Reply, now for Gmail,” May 17, 2017**

https://research.google/blog/efficient-smart-reply-now-for-gmail/

Use for:

- Google reported that Smart Reply had grown to about 12 percent of replies in Inbox on mobile.
- The feature then expanded to Gmail.
- Google's own account emphasized useful suggestions and computational efficiency.

Guardrail:

These are first-party product and research reports. They establish what Google deployed and reported, not the long-term organizational effect of suggested replies.

## 2. Randomized messaging evidence

**Jess Hohenstein et al., “Artificial intelligence in communication impacts language and social relationships,” Scientific Reports 13, 5487 (2023)**

https://www.nature.com/articles/s41598-023-30938-9

Use for:

- In the first experiment, 219 pairs were randomly assigned so that both, one, or neither participant had access to smart replies while discussing a policy issue.
- Smart replies accounted for 14.3 percent of sent messages on average.
- Availability of smart replies increased communication speed by 10.2 percent as measured by messages per minute.
- Actual use changed emotional language and, in this setting, could improve ratings of cooperation and affiliation.
- Participants who merely suspected a partner of using smart replies evaluated that partner more negatively, a correlational result distinct from the causal effect of actual use.
- A second experiment manipulated the sentiment of suggested replies and found that the system's linguistic choices altered the emotional content of the conversation.

Guardrails:

- This was a short experimental conversation, not a longitudinal workplace inbox.
- Messages per minute are not the same as useful work completed.
- The pro-social findings belong in the chapter. The experiment is not evidence that smart replies merely create empty traffic.
- The study says little about long documents, high-stakes approval, or autonomous agents.

## 3. Customer support — closure can improve

**Erik Brynjolfsson, Danielle Li, and Lindsey R. Raymond, “Generative AI at Work,” Quarterly Journal of Economics 140(2), 2025**

https://academic.oup.com/qje/article/140/2/889/7990658

Use for:

- The field study followed more than 5,000 customer-support agents during a staggered introduction of a generative conversational assistant.
- Access increased issues resolved per hour by roughly 15 percent in the published version.
- Gains were substantially larger for newer and lower-skilled workers than for the most experienced workers.
- The authors found evidence consistent with the tool diffusing patterns associated with more capable workers.
- Customer sentiment and some worker outcomes improved.

Why this matters:

The outcome was issues resolved per hour, not messages sent. That is the cleanest counterexample to the idea that easier replies necessarily enlarge the queue. In a bounded support process with a legible goal, assistance can help close cases faster.

Guardrails:

- One contact-center deployment is not a universal productivity parameter.
- The system advised human agents; it did not establish a workplace of autonomous senders and recipients.
- Different versions of the working paper report slightly different sample and effect figures. Use “more than 5,000” and “roughly 15 percent” unless the published table is being cited directly.
- Evidence consistent with knowledge diffusion is not proof that tacit expertise was fully captured.

## 4. Strong counterevidence from everyday knowledge work

**Eleanor Wiske Dillon, Sonia Jaffe, Nicole Immorlica, and Christopher T. Stanton, “Shifting Work Patterns with Generative AI,” revised August 24, 2026**

https://arxiv.org/abs/2504.11436

Use for:

- Randomized field experiment across 66 firms and 7,137 knowledge workers.
- Firms assigned workers access to Microsoft 365 Copilot for six months between 2023 and 2024.
- In the later treatment period, intention-to-treat estimates showed 1.4 fewer hours per week in Outlook, a 12 percent reduction relative to the pre-period mean.
- The authors' estimate for workers induced to use Copilot was about two fewer hours per week, or 17 percent.
- Treated and control workers replied to the same number of unique email threads on average.
- Treated workers also reduced time in digital applications outside regular hours.
- The researchers did not observe message content or direct measures of work quality and could not see all activity outside Microsoft products.
- Participating firms were large, opted into an early-adopter study, and may not represent all workplaces.

Why this must stay in the prose:

This is unusually strong evidence against a lazy version of the chapter's thesis. Integrated generative assistance reduced email time and did not increase the number of threads workers replied to. The authors also found no sign that close coworkers absorbed a hidden increase in email work. The book's concern therefore cannot be “AI makes inboxes bigger.” It must concern organizational responses, reciprocal adoption, work admitted into the system, and the difference between an individual's saved time and the institution's total obligations.

## 5. Existing scale and skimming

**Microsoft Work Trend Index Special Report, “Breaking down the infinite workday,” June 17, 2025**

https://www.microsoft.com/en-us/worklab/work-trend-index/breaking-down-infinite-workday

Use for:

- Microsoft describes analysis based on aggregated, anonymized Microsoft 365 signals.
- It reported an average of 117 received emails per worker daily, with most skimmed in under 60 seconds.
- It reported mass emails to 20 or more recipients up 7 percent year over year and one-to-one threads down 5 percent.
- It reported 153 Teams messages per weekday on average and increasing message volume in several regions.
- The report provides methodology and states that telemetry ended February 15, 2025, excluding education and European Union tenants.

Guardrails:

- This is a vendor report whose proposed remedy includes Microsoft's own AI products.
- Some interruption statistics in the report describe the top 20 percent of users by ping volume. Do not blur those methods into claims about the average worker.
- Use the figures to establish the existing attention environment, not to prove that AI caused it.
- “Skimmed in under 60 seconds” is Microsoft's behavioral classification, not evidence that every short reading was inadequate.

## 6. Email time, productivity, and stress

**Gloria Mark, Shamsi Iqbal, Mary Czerwinski, Paul Johns, and Akane Sano, “Email Duration, Batching and Self-interruption,” CHI 2016**

https://www.microsoft.com/en-us/research/publication/email-duration-batching-and-self-interruption-patterns-of-email-use-on-productivity-and-stress/

Use for:

- Researchers tracked 40 information workers for 12 workdays using computer logs, biosensors, and daily surveys.
- Longer daily email duration was associated with lower perceived productivity and higher measured stress.
- The study found a more complicated relationship between notifications, self-interruption, duration, batching, and perceived productivity than popular email advice suggests.
- Batching was associated with higher rated productivity at longer email duration, but the study did not find that batching lowered stress.

Guardrails:

- Small observational workplace sample.
- Associations do not establish that email time caused lower productivity or stress.
- The mixed findings are more useful than a simplistic “email is bad” conclusion.

## 7. What the evidence supports

The chapter can state confidently:

1. Suggested replies were deployed at enormous scale years before contemporary generative assistants and quickly accounted for a meaningful share of mobile replies.
2. In a randomized short-form conversation, smart replies increased messages per minute and changed language and interpersonal perceptions.
3. In a customer-support deployment, a generative assistant improved a closure-oriented measure: issues resolved per hour.
4. In a large randomized field experiment, integrated Copilot access reduced time spent in email without increasing unique threads replied to.
5. Knowledge workers were already operating inside a high-volume, interruption-rich communication environment before reciprocal agent communication became ordinary.

## 8. What remains inference

The chapter's broader mechanism is an inference:

- When the sender's cost of producing a plausible request falls more quickly than the recipient's cost of deciding it, more marginal requests may enter the system.
- When both sides can generate replies, a thread can become cheaper to continue without becoming cheaper to resolve.
- Individual time savings can be partly captured by the worker and partly reinvested by the organization in more output. Existing field evidence does not yet establish the long-run split.
- Agent-to-agent communication may move queues faster than human-to-human communication while delivering more unresolved edge cases to humans.

Phrase these as possibilities, incentives, and questions. Do not write them as measured present facts.

## 9. Chapter mechanism

The useful distinction is between transmission and closure.

A message may do one of several things:

- acknowledge receipt;
- transfer information;
- request a decision;
- create an obligation;
- make a commitment;
- move responsibility to another person;
- close an issue.

Cheap replies are unambiguously useful when they close simple loops. Risk grows when a cheap transmission exports expensive interpretation or creates another obligation. The same technology can do both. The institution's metric determines which behavior it rewards.

Avoid turning this list into a named framework in the manuscript. Let examples carry it.

## 10. Drafting guardrails

- Open with the real Smart Reply interface and deployment record, not an invented employee.
- Do not imply that Gmail automatically sent the early replies; users selected them.
- Do not claim that 12 percent of all Gmail messages were machine-written. Google's report concerned replies in Inbox on mobile.
- Preserve the positive communication findings from Hohenstein et al.
- Preserve both strong field countercases: issues resolved faster in customer support and less Outlook time with the same number of replied-to threads in the Copilot experiment.
- Label Microsoft volume figures as Microsoft telemetry and keep the methodology caveat.
- Do not equate a skim with a failure to understand.
- Do not claim that autonomous agents already dominate office email.
- Do not moralize about lazy writers. The problem is institutional incentive and asymmetric cost.
- Do not make the reader nostalgic for manual scheduling, canned acknowledgments, or repetitive support replies.
- End at the unresolved boundary between sending and deciding, which sets up Chapter 2's contract and signature problem.

## 11. Falsification note

If future organization-level evidence shows that broad reciprocal AI adoption consistently reduces total messages, unresolved threads, recipient workload, errors, and after-hours work while improving decision reconstruction, the chapter's system-level concern should be narrowed sharply.

The current evidence already rules out the broad claim that assistance simply creates more inbox work. What remains plausible is conditional: production pressure grows when organizations use saved composition time to admit more requests or artifacts than their decision and review systems can close. The rest of the book must test that condition rather than assuming it.
