# Private pipeline schema

Store this ledger in a **private** system, not in this public repository.

| Field | Meaning |
| --- | --- |
| organization_id | Stable deduplication key |
| domain | Verified company domain |
| opportunity_id | Distinct problem / paid offer |
| observed_problem_url | Primary public evidence |
| first_qualified_at | Qualification date |
| stage | research, qualified, proposed, replied, call, contracted, won, lost |
| proposed_low_usd / proposed_high_usd | Initial opportunity range |
| follow_on_annual_usd | Optional expansion estimate, not booked revenue |
| asset_reference | Private asset location |
| draft_reference | Private Gmail draft ID if created |
| sent_at | Blank unless authorized and sent |
| replied_at / call_at / contracted_at | Confirmed milestones only |
| booked_revenue_usd | Signed contract value, not hypothetical pipeline |
| realized_revenue_usd | Collected or recognized revenue under chosen policy |
| last_checked_at | Duplicate / freshness audit timestamp |

Do not treat unverified draft creation, prospect interest, or proposed prices as booked revenue.
