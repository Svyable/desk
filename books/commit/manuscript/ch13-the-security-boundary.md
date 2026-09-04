# The Security Boundary

For a long time, the comforting mental model of a repository was a box of text.

You cloned it. You read the files. Maybe you compiled them. The dangerous part, in this picture, began when you chose to run the program.

Git made that boundary less tidy.

A repository is not only source files. It contains configuration, object storage, references, attributes, submodule instructions, hooks or hook paths in some environments, and enough metadata for tools to make decisions before a developer has consciously decided to execute the project itself. Around Git sit credential helpers, shell prompts, IDEs, package managers, build systems, CI runners, code generators, and forges. Many of them react automatically to repository state.

The version-control system became part of the execution environment.

That makes trust a design problem.

Git's own security hardening over the past several years is easiest to understand as a gradual recognition that repository discovery is not a neutral act. If software walks into an arbitrary directory, decides it has found a repository, reads configuration, and invokes extension points, the line between inspecting data and trusting a program can become dangerously thin.

The `safe.directory` setting is one example. Git normally refuses to treat a repository owned by another user as trusted merely because the current process can read it. An administrator or user can explicitly mark shared repositories as safe. The setting belongs to protected configuration so an untrusted repository cannot simply declare itself trusted.

This sounds like a small rule about filesystem ownership. It is actually a statement about authority.

The repository is allowed to describe itself, but it is not allowed to decide who should trust it.

Hooks make the reason concrete.

Git hooks are programs triggered at particular points in Git operations. A pre-commit hook can inspect a proposed commit. A commit-msg hook can reject a message. Server-side hooks can enforce policy during pushes. Other hooks can react to checkout, merge, rewrite, or filesystem monitoring. They are powerful precisely because they are executable code attached to events that developers already perform.

That power is useful inside a repository you control.

It is dangerous when repository discovery crosses a trust boundary you did not notice.

The Git project's planned Git 3.0 change to `safe.bareRepository` captures the problem unusually well. Current Git allows bare repositories to be discovered implicitly in broad circumstances. The BreakingChanges document says the default is planned to move from `all` to `explicit`. Under that future default, a bare repository found merely by walking up the directory tree would not automatically be accepted; the user would have to identify it explicitly through mechanisms such as `--git-dir` or `GIT_DIR`.

The motivation in the project's own document is an attack in which a victim clones or receives a directory containing an embedded bare repository with malicious hooks configured. If the user later enters that directory and a Git command discovers the bare repository, a hook can run. The command may not even have been typed by the user. A shell prompt that automatically runs `git status` to display branch information can be enough, and `git status` may in turn invoke a configured filesystem-monitor hook.

The striking part is the absence of an obvious execution gesture.

The user changes directories.

The prompt tries to be helpful.

The repository has already become active.

Security engineering often advances by discovering that a supposedly passive format is not passive. Office documents gained macros. PDFs gained scripting. Web pages gained an application platform. Package manifests gained install scripts. Repositories accumulated enough behavior around them that opening one could no longer be treated as equivalent to opening a text file.

Git did not create all of this behavior. Much of it comes from the ecosystem.

That distinction matters because the phrase Git security can otherwise become hopelessly broad.

A malicious dependency fetched by a build system is not a Git vulnerability merely because its version is recorded in Git. A compromised GitHub Action is not part of Git's object model. A leaked forge token is not a defect in `git fetch`. A poisoned compiler is not repaired by signed commits.

But Git often sits on the path through which these systems acquire identity and state. That makes repository boundaries a useful place to ask what is being trusted next.

Submodules are a classic example.

A superproject can record that a path corresponds to a particular commit in another repository. The `.gitmodules` file supplies configuration such as where that repository may be found. This is powerful because it lets one history refer to another without copying all of its objects into the first repository.

It also means a checkout can describe additional network locations and additional code that a later command may retrieve.

The Git project has repeatedly hardened submodule handling because URLs, local paths, protocols, and recursive operations create opportunities for a repository to influence where Git goes next. The lesson is not that submodules are inherently unsafe. It is that indirection expands the trust graph.

The same is true of credential helpers.

Git can call helper programs to retrieve and store credentials for remote operations. This makes authentication usable. It also means configuration can affect which helper runs and what credentials become available to a process. Protected configuration scopes exist in part because not every repository should be allowed to redefine sensitive behavior.

The design challenge is compatibility.

Git has two decades of scripts, hosting systems, build farms, shared repositories, unusual filesystem layouts, bare repositories, worktrees, and automation built around existing behavior. A security engineer can often imagine a safer default in one sentence. Changing the default without breaking legitimate use can take years.

That is why the Git 3.0 BreakingChanges document is valuable beyond the individual items it lists. It is a public record of a mature project trying to spend compatibility carefully.

A major version creates permission to break some assumptions.

It does not remove the cost of breaking them.

The proposed `safe.bareRepository=explicit` default is narrow by design. Explicitly named bare repositories continue to work. Worktrees and ordinary `.git` directories are unaffected by that particular change. Users who depend on implicit discovery can restore the older behavior in protected configuration.

The project is not declaring bare repositories dangerous.

It is moving one decision from ambient discovery toward explicit intent.

That pattern is likely to become more common as coding agents enter repositories.

A human developer often has contextual suspicion. A directory with an unexpected binary may look odd. A command that asks for credentials may trigger hesitation. A build script downloaded from an unfamiliar repository may receive a glance before execution.

Agents can erase that pause.

An automated coding system may clone a repository, inspect it, run tests, install dependencies, invoke formatters, execute build scripts, and push a branch as one continuous task. Every convenience that made the developer workflow smoother becomes an action the agent may perform without a fresh human decision.

The repository is no longer only an input to a programmer.

It is an instruction surface for another program.

This changes the value of explicit boundaries.

An agent can run inside a sandbox with restricted credentials. It can be denied network access except to approved hosts. It can receive a read-only token until a later stage. It can distinguish commands needed to inspect history from commands allowed to execute project code. It can treat repository-local configuration as untrusted until policy says otherwise.

These controls are outside Git proper, but Git's own boundaries can make them easier or harder to enforce.

Consider hooks again. In a trusted local workflow, hooks are convenient policy. In an untrusted automated environment, silently discovering executable hooks is a different proposition. The safe choice may be to disable or tightly control them until the repository has crossed an explicit trust gate.

Consider submodules. A human may understand that `--recurse-submodules` expands the clone. An agent may treat it as a routine flag unless its execution policy recognizes that the command can cross into additional repositories.

Consider credentials. A developer's laptop may have access to several hosts through helpers and agents. A coding sandbox should rarely inherit that entire ambient identity.

The common theme is capability.

A repository can ask for many things. The environment should decide which things it is allowed to receive.

Version control grew up in a culture where the developer account was often the unit of authority. You ran Git as yourself. Your SSH agent had your keys. Your credential helper knew your tokens. Your shell inherited your environment. Your clone lived among other trusted clones.

Machine authorship pushes toward narrower identities.

An agent assigned to fix one bug does not need every credential its human operator possesses. A test runner does not need permission to push. A reviewer does not need permission to modify protected branches. A repository being inspected for the first time does not need access to secrets merely because the process running `git status` happens to have them.

This is ordinary least privilege applied to a toolchain that historically assumed a fairly powerful interactive user.

The difficult part is that software development is full of legitimate cross-boundary work. Tests need databases. builds need package registries. release jobs need signing keys. deployment systems need cloud credentials. submodules need access to other repositories. private dependencies need authentication.

A system that forbids every crossing is secure in the same way an unplugged computer is secure.

The useful question is whether each crossing is intentional, scoped, and attributable.

Git can contribute to that answer without pretending to solve the whole supply chain.

It can distinguish protected configuration from repository-controlled configuration. It can harden unsafe repository discovery. It can validate ownership assumptions. It can make transport behavior explicit. It can keep dangerous legacy behavior behind deliberate configuration. It can continue publishing security fixes for cases where crafted repositories exploit parser or path-handling mistakes.

The ecosystem has to do the rest.

Forges decide which workflows run automatically. CI systems decide what secrets are exposed to untrusted pull requests. package managers decide whether install scripts execute. IDEs decide whether opening a workspace activates plugins or tasks. Agent platforms decide what a cloned repository is permitted to command.

The security boundary is therefore not one line.

It is a sequence of gates.

Can I read these objects?

Can I trust this configuration?

Can this repository cause a program to execute?

Can that program access the network?

Can it read credentials?

Can it write outside the worktree?

Can it create a commit?

Can it push?

Can it alter the branch other people treat as trusted?

Collapsing those questions into "the agent has repository access" throws away most of the useful distinctions.

Git's own architecture already suggests a better model. Reading an object is different from moving a ref. Creating a commit is different from publishing it. Fetching is different from merging. A local branch is different from a protected remote branch. The operations can be granted separately even if desktop workflows traditionally make them feel continuous.

Security benefits when the system remembers those seams.

The Git 3.0 work is modest compared with the larger supply-chain problem. A safer default for bare repository discovery will not prevent a malicious dependency, compromised maintainer account, or poisoned release process.

It is still important.

Infrastructure becomes safer through accumulated refusals to make trust implicit.

The repository may contain code.

It may contain configuration.

It may point elsewhere.

It may trigger tools.

None of those facts should be allowed to answer the next question automatically:

What is it permitted to do?