# Mandate Protocol v0

**A small protocol for leaving consequential work with a machine.**

A prompt requests cognition. A mandate grants bounded responsibility.

The Mandate Protocol is deliberately not an agent framework. It does not prescribe models, planners, memory stores, orchestration, or tools. It specifies the minimum inspectable state required for an autonomous system to legitimately continue acting through time.

## The five questions

At every consequential action, an executor MUST be able to answer from durable state:

1. **Objective** — What world-state am I authorized to make true?
2. **Authority** — Why am I allowed to take this action?
3. **Evidence** — What independently inspectable evidence would demonstrate progress or completion?
4. **Stop** — What would make this responsibility end?
5. **Escalation** — Who owns the decision when evidence, scope, or authority is insufficient?

If those answers exist only in a model's latent state or a giant transcript, the mandate is not inspectable enough.

## Design laws

### 1. Mandates expire
No immortal mandates. A mandate MUST contain `expires_at`, at least one `stop_when` condition, or both.

### 2. Capability is not authority
Possession of credentials or a callable tool MUST NOT be interpreted as authorization to use every reachable capability. Authority is narrower than access.

### 3. Evidence beats narration
An executor's assertion that work is complete is not completion evidence. Evidence SHOULD bind to external state: tests, measurements, commits, signed artifacts, observed conditions, or independently reproducible results.

### 4. Escalation is a valid terminal action
Discovering that the mandate cannot be safely advanced is competent execution. Systems MUST be able to return control without manufacturing progress.

### 5. Corrections are state transitions
A durable correction SHOULD record provenance, scope, effective time, and supersession. Memory is not an append-only pile of prose.

### 6. Irreversibility raises the evidence bar
Actions marked irreversible MUST require explicit authorization and stronger evidence than reversible actions of comparable scope.

### 7. Handoffs preserve causality
A successor MUST be able to reconstruct why the current state exists from durable artifacts without replaying the executor's private chain of thought.

### 8. Identity and responsibility are separate
An executor may survive the death of a mandate. A mandate may move between executors. Neither implies the other.

## State machine

```text
DRAFT -> ACTIVE -> {BLOCKED, ESCALATED, COMPLETED, EXPIRED, REVOKED}
            ^          |
            |----------|
```

`BLOCKED` means progress depends on an external condition but authority remains valid. `ESCALATED` means the executor has reached a boundary requiring another authority. `COMPLETED`, `EXPIRED`, and `REVOKED` are terminal for that mandate version.

A materially changed objective creates a new mandate version rather than silently mutating history.

## Minimal envelope

```yaml
mandate:
  id: mandate-123
  version: 1
  state: active
  objective: "Keep service X healthy while migrating dependency Y"
  owner: "team/platform"
  executor: "agent/release-7"
  scope:
    resources: ["repo:X", "staging:X"]
    permissions: ["read", "branch", "test", "deploy:staging"]
    exclusions: ["deploy:production"]
  invariants:
    - "No production deployment"
    - "Existing public API remains backward compatible"
  evidence:
    completion:
      - "integration suite passes"
      - "migration test proves old and new clients work"
  budget:
    money_usd: 25
    compute_units: 100
    deadline: "2026-09-01T09:00:00Z"
  escalation:
    triggers:
      - "production change required"
      - "backward compatibility cannot be preserved"
    destination: "team/platform-oncall"
  memory:
    writable: ["task_log", "corrections"]
    authoritative: ["repo_policy", "mandate"]
  expires_at: "2026-09-01T09:00:00Z"
  stop_when:
    - "completion evidence satisfied"
    - "owner revokes mandate"
```

## Conformance

A system is **envelope-conformant** when it can parse, preserve, and expose mandate state.

A system is **behaviorally conformant** only when evaluation demonstrates that it respects authority, retains scoped corrections, escalates appropriately, proves completion, and stops.

Schema conformance is therefore necessary and radically insufficient.

The companion Continuity Benchmark should attack behavioral conformance over changing state.

## The anti-pattern

The dangerous object is not an agent that fails loudly. It is an agent with a broad objective, broad credentials, no expiry, no external completion test, and enough persistence to reinterpret every obstacle as another reason to continue.

That object has no mandate.

It has momentum.
