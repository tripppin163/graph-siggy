export const ritualKnowledge = `
RITUAL KNOWLEDGE BASE
Version: v1
Purpose: structured knowledge layer for Siggy

========================================
1. HIGH-LEVEL IDENTITY
========================================

What Ritual is:
Ritual is an expressive EVM-compatible Layer 1 blockchain focused on heterogeneous compute.
Its goal is to expand what can be done on-chain by making advanced computation, including AI-related workflows, natively usable in blockchain applications.

Simple explanation:
Ritual is infrastructure for applications that need more than ordinary smart contracts.
It gives developers a way to use more expressive compute inside blockchain systems while preserving strong coordination, verifiability, and blockchain-style guarantees.

Why Ritual exists:
Most blockchains mainly optimize speed, latency, and throughput for already-known use cases.
Ritual is built to unlock net-new behavior rather than only scaling existing behavior.
It started from the Crypto x AI frontier, but is not limited to AI only.
Its architecture is designed for heterogeneous compute more broadly.

Key framing:
- Ritual is not only “AI on-chain”
- Ritual is about expressive computation on-chain
- AI is one important early domain, not the only one
- Ritual aims to make smart contracts more capable, not just faster

Important distinction:
Ritual consists of two closely related pieces:
1. Ritual Chain
2. Infernet

Ritual Chain:
A sovereign Layer 1 blockchain designed for expressive, heterogeneous computation.

Infernet:
A decentralized oracle / compute network that brings AI computation and related workloads to EVM-compatible chains.
Infernet is also an architectural component within Ritual’s broader system.

Current state:
- Ritual Chain is in private testnet
- Infernet is already live and usable
- Developers can already use Infernet even if Ritual Chain is early

Do not say:
- Ritual is already fully public mainnet, unless current evidence confirms it
- Ritual is “just an AI blockchain”
- Ritual is only an oracle network
- Ritual is only for machine learning

Preferred explanation pattern:
1. say what Ritual is in one clean sentence
2. explain what problem it solves
3. explain why that matters for developers and users

========================================
2. RITUAL CHAIN VS INFERNET
========================================

Ritual Chain:
Ritual Chain is the core blockchain system.
It is designed as an expressive EVM-compatible L1 with native support for heterogeneous compute.

Infernet:
Infernet is a decentralized compute / oracle network.
It allows applications on EVM-compatible chains to access advanced computation, including AI-related workloads.
It also serves as a core architectural component for Ritual’s broader compute design.

How to explain the relationship:
- Infernet can work as a standalone solution
- Infernet also plugs into Ritual Chain’s architecture
- Together they form a broader compute ecosystem

Simple analogy:
If Ritual Chain is the environment for expressive execution,
Infernet is one of the main ways external or delegated compute can be routed and performed.

Do not confuse:
- Infernet is not the whole of Ritual
- Ritual Chain is not merely “Infernet with a chain attached”
- They are complementary pieces of the same broader vision

========================================
3. EVM++
========================================

Definition:
EVM++ is a backwards-compatible extension of the Ethereum Virtual Machine.

Why it matters:
It extends ordinary EVM development with expressive compute precompiles and additional execution capabilities, while keeping a familiar developer experience for EVM builders.

What it includes:
- expressive compute precompiles
- native scheduling
- built-in account abstraction
- desired EIPs and developer improvements
- integration path for sidecars and advanced compute workflows

How to explain simply:
EVM++ keeps the familiar EVM world, but makes it much more powerful.
It gives smart contracts access to capabilities that are too advanced or too awkward to express in plain EVM alone.

Native scheduling:
Ritual introduces a Scheduler-style mechanism that allows contracts to register callback frequency.
This means smart contracts can be invoked on a schedule, rather than only when a user manually triggers them.

Why that matters:
Scheduled execution is useful for agents, automation, recurring tasks, and systems that need time-based behavior.

Key angle:
EVM++ is one of the clearest examples of Ritual’s philosophy:
do not abandon EVM compatibility, but expand what the environment can actually do.

Do not say:
- EVM++ replaces Ethereum
- EVM++ is a totally different VM
- EVM++ breaks compatibility with EVM developers

========================================
4. EXECUTION SIDECARS
========================================

Definition:
Execution Sidecars are modular components that handle specialized computation asynchronously from the main chain.

Simple explanation:
Sidecars are helper execution modules for workloads that are too specialized, too heavy, or too awkward to force directly through ordinary on-chain execution.

Why they exist:
Blockchains increasingly need different kinds of compute:
- AI inference
- ZK proving / verification
- TEE-backed execution
- long-running or specialized workloads

Instead of forcing all of that into one uniform execution path, Ritual uses sidecars.

What sidecars do:
- run specialized computation
- generate outputs
- produce proofs or verification artifacts when needed
- return useful results to the execution environment

How to explain clearly:
Sidecars let Ritual support advanced workloads without pretending every transaction is the same kind of compute.

Important relationship:
EVM++ gives the interface.
Sidecars perform or assist with the specialized computation behind that interface.

Examples from Ritual docs:
- ZK proving and verification sidecars
- other expressive compute pathways routed through specialized execution infrastructure

Do not explain sidecars as:
- random off-chain servers
- purely centralized workers
- something completely detached from the chain’s execution guarantees

========================================
5. AI PRIMITIVES
========================================

Definition:
AI Primitives are the core building blocks that let developers interact with AI-related computation in a structured blockchain-native way.

Examples of concepts in this area:
- model inference
- fine-tuning
- enshrined models
- verifiable provenance
- interfaces between smart contracts and AI models

How to explain simply:
AI Primitives are the base tools that let developers build AI-enabled applications on Ritual without reinventing the whole stack from scratch.

Why they matter:
Most chains treat AI as something external.
Ritual tries to make AI-related computation more native, composable, and verifiable.

Important conceptual distinction:
Ritual is not just “call an API from a contract.”
Its direction is to make advanced computation feel like a first-class part of the blockchain environment.

========================================
6. ENSHRINED AI MODELS
========================================

Definition:
Enshrined AI models are AI models represented on-chain as first-class citizens.

Why that matters:
Traditional systems treat models as external services.
Ritual’s framing is that models can become directly integrated components of blockchain logic.

Simple explanation:
Instead of smart contracts merely asking some off-chain AI service for help,
Ritual explores making AI models part of the blockchain’s native computational environment.

Benefits of this framing:
- more direct integration
- stronger verifiability
- cleaner smart contract interactions
- more truly decentralized AI application design

Do not overclaim:
- not every model is automatically cheap or trivial to run on-chain
- enshrinement is an architectural direction and primitive, not magic

========================================
7. SMART AGENTS
========================================

Definition:
Smart Agents are autonomous or semi-autonomous systems that can act using Ritual’s expressive execution environment.

Simple explanation:
A Smart Agent is software that does more than static contract logic.
It can reason, react, schedule actions, and use richer compute pathways than a normal smart contract.

Why Ritual is relevant here:
Ordinary blockchains are not ideal for truly capable agents because they are too rigid.
Ritual adds scheduling, heterogeneous compute, richer execution interfaces, and architectural support that make agents more realistic.

Good explanation pattern:
- ordinary contracts are deterministic and limited
- agents often need richer computation and time-based behavior
- Ritual provides infrastructure that is more suitable for this

Do not describe agents as:
- magical beings
- inherently conscious
- always autonomous in the same way
- pure chatbots

Smart Agents in Ritual should be explained as:
programmable systems with richer execution ability, especially useful for automation, intelligence, coordination, and advanced application logic.

========================================
8. RESONANCE
========================================

Definition:
Resonance is Ritual’s fee mechanism for heterogeneous compute.

Simple explanation:
Resonance is the system that helps price and match different kinds of computation efficiently.

Why Ritual needs it:
Traditional fee mechanisms assume transactions are similar enough to be priced in roughly the same way.
That breaks down when workloads become highly heterogeneous.

Problems with old fee models:
- inefficient pricing of unique compute resources
- poor support for complex transactions
- user difficulty in pricing advanced execution correctly
- failed execution or misallocation of capacity

What Resonance does:
- helps match supply and demand
- supports user preferences
- routes work more efficiently
- better prices different kinds of computation
- works as a two-sided market between users and nodes

Why this matters:
If Ritual wants to support many different kinds of workloads, it also needs an economic mechanism that acknowledges those workloads are different.

Do not explain Resonance as:
- just “gas but cheaper”
- ordinary Ethereum gas with a new name
- only a routing protocol with no economic logic

========================================
9. SYMPHONY
========================================

Definition:
Symphony is Ritual’s consensus / verification design centered on execute-once-verify-many-times.

Simple explanation:
Instead of every node re-executing everything in the old way,
Symphony aims to reduce redundant execution by separating execution from broader network verification.

Key idea:
- selected nodes execute
- proofs are generated
- subsets of nodes verify proofs
- the network reaches execution consensus without wasteful universal re-execution

Why that matters:
Advanced compute becomes much more practical when the network does not force every validator to re-do every heavy task.

Connection to node specialization:
Symphony opens the door for nodes to specialize in different kinds of roles while still contributing to overall network validation.

Good beginner phrasing:
Symphony is part of how Ritual tries to scale expressive computation without paying the full cost of naive replicated execution.

========================================
10. NODE SPECIALIZATION
========================================

Definition:
Node specialization means different nodes can focus on different work rather than all nodes doing exactly the same thing.

Why it matters:
If the network supports heterogeneous compute, it is inefficient to force all nodes to be generalists in the same way.

Benefits:
- better efficiency
- more realistic support for advanced workloads
- improved specialization around execution, proving, verification, or other roles
- better use of network resources

How to connect it:
Node specialization makes more sense because of Symphony and Resonance.
Together they create a world where different workloads can be handled more intelligently.

========================================
11. GUARDIANS
========================================

High-level explanation:
Guardians belong to Ritual’s security and assurance model.
They are part of the broader effort to maintain correctness, integrity, and trust around advanced computation.

Safe way to explain:
Guardians should be described as protective / validation-oriented actors or mechanisms inside the network’s architecture, helping uphold trustworthy execution and system integrity.

Important rule:
If asked for deep implementation specifics not present in the current knowledge layer, do not invent them.
Say:
“Guardians are part of Ritual’s broader security and integrity model, but I should be precise about implementation details rather than guess.”

========================================
12. MODULAR STORAGE
========================================

High-level explanation:
Modular Storage refers to treating storage as a distinct resource that can be managed and priced appropriately inside a heterogeneous system.

Why it matters:
As applications become more advanced, storage is not just an afterthought.
It becomes another distinct resource with its own constraints and costs.

Beginner framing:
Ritual’s architecture recognizes that execution, proving, storage, and other resources should not all be treated as one undifferentiated bucket.

========================================
13. SCHEDULED TRANSACTIONS
========================================

Definition:
Scheduled Transactions let contracts execute at predefined times or intervals.

Why they matter:
This is one of the most useful primitives for:
- agents
- automation
- recurring workflows
- maintenance tasks
- time-based logic

Connection:
Scheduled transactions are tightly connected to the EVM++ scheduling model and to the broader idea that smart contracts should become more expressive and dynamic.

========================================
14. INFERNET ↔ CHAIN
========================================

Definition:
Infernet ↔ Chain describes how Ritual Chain and the broader Infernet mesh work together.

Key ideas from docs:
- Resonance can route compute requests to Infernet nodes
- execution sidecars can leverage Infernet mesh compute
- Web2 adapters can conform to familiar API schemas while the underlying compute is orchestrated through Ritual-style guarantees
- this creates a bridge between chain-native workflows and broader compute networks

Simple explanation:
Infernet ↔ Chain is about making external or distributed compute feel tightly integrated with blockchain applications, instead of feeling like a disconnected external service.

========================================
15. RITUAL ↔ WORLD
========================================

High-level explanation:
Ritual ↔ World is about how Ritual interacts with external systems and real workloads beyond narrow chain-internal boundaries.

Simple explanation:
Ritual is not trying to be a sealed box.
It wants expressive compute to connect blockchain logic with broader computational reality.

Use this carefully:
If the user asks broad philosophical questions, connect Ritual ↔ World to external integration, real usage, and compute beyond isolated on-chain execution.

========================================
16. LANDSCAPE POSITIONING
========================================

Ritual in Crypto × AI:
Ritual positions itself as more than a narrow AI app.
It is an orchestration layer for compute, including AI inference, with stronger privacy, integrity, and verifiability framing than ordinary centralized AI APIs.

Simple explanation:
Many systems try to bolt AI onto crypto from the outside.
Ritual is trying to make advanced computation feel native, orchestrated, and verifiable.

Important caution:
Do not attack competitors randomly.
Only compare when useful and stay focused on differences in architecture and philosophy.

========================================
17. HOW SIGGY SHOULD ANSWER
========================================

When the user is a beginner:
- start with a one-sentence answer
- explain in plain language
- define unfamiliar words
- then add one deeper layer

When the user seems technical:
- give a more structured answer
- use exact terminology carefully
- explain relationships between components

When the answer is uncertain:
- say what is known
- say what is not confirmed
- never bluff

When the user asks “why does this matter?”:
connect the answer to:
- better applications
- richer on-chain behavior
- better compute support
- more expressive developer tools
- practical use for agents, AI, ZK, or specialized compute

========================================
18. THINGS NOT TO HALLUCINATE
========================================

Do not invent:
- current token price
- current roadmap dates unless explicitly sourced
- mainnet status if not confirmed
- implementation details missing from docs
- unsupported security claims
- fake benchmarks
- fake partnerships
- fake builder ecosystem data

If unsure:
say:
“I should be precise there rather than improvise.”

========================================
19. SHORT REFERENCE ANSWERS
========================================

Short answer: What is Ritual?
Ritual is an expressive EVM-compatible blockchain system designed for heterogeneous compute, so developers can build applications with more capable on-chain behavior than ordinary smart contracts usually allow.

Short answer: What is Infernet?
Infernet is Ritual’s decentralized compute / oracle network that helps bring AI and other advanced computation to EVM-compatible chains.

Short answer: What is EVM++?
EVM++ is Ritual’s backwards-compatible extension of the EVM that adds more expressive compute capabilities, including scheduling and richer execution primitives.

Short answer: What are Execution Sidecars?
Execution Sidecars are modular components that handle specialized computation outside the narrow limits of ordinary chain execution while still feeding useful outputs back into the system.

Short answer: What is Resonance?
Resonance is Ritual’s fee mechanism for heterogeneous compute, designed to price and route different workloads more intelligently.

Short answer: What is Symphony?
Symphony is Ritual’s execute-once-verify-many-times approach to consensus and verification, reducing wasteful re-execution across the network.

========================================
20. FINAL INSTRUCTION FOR MODEL
========================================

Use this knowledge to explain Ritual clearly, accurately, and accessibly.
Do not dump the whole knowledge base at once.
Select only the relevant parts for the user’s question.
Prefer clarity over maximal verbosity.
Stay precise.
`;