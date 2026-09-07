# Chapter 15 counterevidence — managed AI data protections, 2026

Checked September 6, 2026.

## Why this note exists

Chapter 15, “The Data Shadow,” is strongest when it argues that educational AI creates governance questions around retention, access, inference, reuse, and function creep. It should not imply that model training on student conversations is the default behavior of institutionally managed AI products. Current first-party product documentation supplies important counterevidence.

## Current product evidence

### OpenAI — ChatGPT Edu

OpenAI’s current business-data policy states that data from ChatGPT Edu, ChatGPT Enterprise, ChatGPT Business, ChatGPT for Teachers, ChatGPT for Healthcare, and the API platform is not used to train or improve OpenAI models by default. The policy explicitly includes inputs and outputs. Organizations may opt in separately where supported.

Primary source: OpenAI, “Business data privacy, security, and compliance,” current September 2026.

https://openai.com/business-data/

Supporting help-center source:

https://help.openai.com/en/articles/8983130-how-does-chatgpt-use-my-data

### Google — Gemini for Education

Google’s current Gemini for Education materials state that managed education data is not human-reviewed or used to train AI models, and that the service operates under Google Workspace for Education protections. Google also says the data is not used for ad targeting.

Primary source: Google for Education, “Generative AI Tool for Teachers & Students.”

https://edu.google.com/ai-gemini-notebook/

### Microsoft — Copilot in Education

Microsoft’s current education materials say data in managed Copilot education experiences remains within the Microsoft 365 tenant and is not used to train foundation models. Microsoft separately documents enterprise data protection for users signed in with work or school accounts, including that prompts and responses are not used to train foundation models.

Primary sources:

https://www.microsoft.com/en-us/education/products/copilot-in-education

https://support.microsoft.com/en-US/Privacy/data-protection-when-using-microsoft-365-copilot-chat-for-work-or-school

## What this changes in the argument

These protections do not eliminate the chapter’s privacy concern. They narrow it.

A school can deploy a product whose vendor does not train foundation models on student conversations and still face consequential questions about:

- how long conversational histories are retained;
- which teachers, administrators, vendors, or subprocessors can access them;
- which derived inferences or summaries persist after raw text is deleted;
- whether institutional logging, safety review, legal compliance, or support processes create additional copies;
- whether data collected for tutoring later becomes disciplinary, evaluative, research, or admissions evidence;
- whether students can inspect, correct, export, or delete records;
- whether a product or contract change alters these terms over time.

The strongest formulation is therefore not “schools are feeding student conversations into model training.” For major managed offerings, current first-party policies directly contradict that as a default claim. The more durable concern is that conversational tutoring can create an unusually intimate institutional record even when training reuse is prohibited.

## Strongest counterargument

Managed AI products can materially reduce privacy risk compared with unmanaged consumer use. Tenant isolation, contractual data protections, no-training defaults, administrator controls, and regulated education-product terms are substantive safeguards rather than marketing details. Schools can also obtain personalization benefits without turning every interaction into an unrestricted vendor training asset.

That counterevidence should remain visible because it improves the book’s institutional thesis: procurement choices matter. Privacy risk is partly designed, contracted, and governed rather than an unavoidable property of AI tutoring.

## Editorial implication

Chapter 15 already uses the phrase “model-training terms where relevant,” which is appropriately cautious. A future prose pass should preserve that qualification and resist upgrading model training into the chapter’s central threat. The sharper center is purpose limitation: what gets remembered, who can see it, what is inferred from it, what later uses become possible, and what can be allowed to expire.
