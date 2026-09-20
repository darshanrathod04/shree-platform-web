# Shree AI OS Website — Page & Route Inventory

**Target Repository:** `shree-ai-os-web` (Next.js 16.3.1 / React 19 / Turbopack / Tailwind CSS 4)  
**Target Release:** Shree AI OS `v1.0.6-developer-preview` (Java 21 LTS Native)  
**Audit Date:** September 20, 2026  
**Total Routes Prerendered:** 27 Static Pages (100% Green Turbopack Build)

---

## 1. Route Map & Component Ownership

| Route Path | Source File | Layout Scope | Purpose & Core Capabilities | Canonical Version & Alignment | Inbound Links |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | RootLayout | Home landing page: Hero, 10 SDK cards, Java 21 quickstart bootstrap snippet, trust metrics, and architecture overview. | `v1.0.6` Developer Preview, Java 21 LTS, In-Process AI Runtime for Java. | Navbar, Footer, All back-links |
| `/_not-found` | `app/not-found.tsx` | RootLayout | On-brand 404 handler with Silver Shree logo emblem, diagnostic message, and redirect buttons. | `v1.0.6` | Automatic Next.js fallback |
| `/about` | `app/about/page.tsx` | RootLayout | About page: Platform-first philosophy, 5-layer architecture breakdown, reusable intelligence model. | `v1.0.6` · 5 Layers · Reusable Intelligence | Footer |
| `/applications` | `app/applications/page.tsx` | RootLayout | Enterprise Applications index: Project Intelligence, Personal AI, runtime infrastructure relationship. | `v1.0.6` Active Applications | Navbar, Footer, Platform |
| `/applications/personal-ai` | `app/applications/personal-ai/page.tsx` | RootLayout | Personal intelligence application detail: Episodic user context, goal decomposition, deterministic privacy. | `v1.0.6` Developer Preview (In Active Development) | Applications index, Applications section |
| `/applications/project-intelligence` | `app/applications/project-intelligence/page.tsx` | RootLayout | Project workspace application detail: Project memory, DAG planning, reasoning, JavaParser AST integration. | `v1.0.6` Developer Preview | Applications index, Applications section |
| `/architecture` | `app/architecture/page.tsx` | RootLayout | Technical deep dive: 5-layer platform hierarchy, 11-stage cognitive execution pipeline dataflow, Dual-Mode Synthesis. | `v1.0.6` Architecture Foundation | Navbar, Home, Docs, Developers, Platform, Quickstart |
| `/constitution` | `app/constitution/page.tsx` | RootLayout | Architectural principles, deterministic boundaries, fail-closed access guarantees, privacy commitments. | `v1.0.6` Platform Principles | Footer, Docs advanced topics |
| `/developer` | `app/developer/page.tsx` | `developer/layout.tsx` | Developer Console: Workspace sessions, project statistics, AST class inspector, patch preview, build runners. | `v1.0.6-developer-preview` | Developer sub-routes, Review, Settings |
| `/developer/chat` | `app/developer/chat/page.tsx` | `developer/layout.tsx` | Interactive streaming chat interface connected to the 11-stage cognitive pipeline with token streaming. | `v1.0.6` Cognitive Pipeline | Developer Console, Settings |
| `/developer/review` | `app/developer/review/page.tsx` | `developer/layout.tsx` | Code review and reflection workbench: Automated self-critique, AST structural diffs, test impact reports. | `v1.0.6` ChiefReview Gate | Developer Console, Workflow |
| `/developer/settings` | `app/developer/settings/page.tsx` | `developer/layout.tsx` | Platform and provider configuration: BYOK API keys, provider routing thresholds, fail-closed switches. | Platform `v1.0.6`, SDK `1.0.6-developer-preview`, Dual-Mode Synthesis | Developer Console |
| `/developer/workflow` | `app/developer/workflow/page.tsx` | `developer/layout.tsx` | Autonomous workflow runner: Goal decomposition, task DAG execution, automated test generation. | `v1.0.6` Autonomous Runtime | Developer Console, Review |
| `/developer/workspace` | `app/developer/workspace/page.tsx` | `developer/layout.tsx` | Local workspace file tree viewer, AST symbol extraction, and real-time patch simulator. | `v1.0.6` Workspace Intelligence | Developer Console |
| `/developers` | `app/developers/page.tsx` | RootLayout | Developer portal overview: 5-layer stack, 10 SDK capabilities, architectural boundaries, developer flow. | `v1.0.6` Developer Preview | Navbar, Home, Docs, Footer |
| `/docs` | `app/docs/page.tsx` | RootLayout | Comprehensive documentation hub: Getting Started, 10 SDK references, core concepts, advanced guides. | `v1.0.6` Developer Documentation | Navbar, Home, Footer, Platform, Architecture |
| `/mission` | `app/mission/page.tsx` | RootLayout | Long-term mission statement: Reusable intelligence foundations, deterministic JVM autonomy, ecosystem vision. | `v1.0.6` Platform Mission | Footer, Vision, About |
| `/platform` | `app/platform/page.tsx` | RootLayout | Platform overview: 5 layers, 11-stage pipeline, K0.6 Autonomous Knowledge Acquisition, query domain isolation. | `v1.0.6` Developer Preview | Navbar, Home, Architecture, Footer |
| `/playground` | `app/playground/page.tsx` | `playground/layout.tsx` | Interactive SDK Playground: Live execution console for Chat, Knowledge, Memory, Planning, and Reflection. | SDK `1.0.6-developer-preview` | Docs, Developer resources |
| `/quickstart` | `app/quickstart/page.tsx` | RootLayout | 5-Minute Quickstart: Maven coordinates, Java 21 LTS baseline, `RuntimeConfiguration`, `ShreeAI.builder()` bootstrap. | `1.0.6-developer-preview` (Java 21 LTS Native) | Docs, Footer, Security, Architecture |
| `/research` | `app/research/page.tsx` | RootLayout | Research publications & papers: Multi-kernel architectures, deterministic reasoning, hybrid vector retrieval. | `v1.0.6` Cognitive Research | Navbar, Footer |
| `/roadmap` | `app/roadmap/page.tsx` | RootLayout | Platform roadmap: Stage 1 (v1.0.6 Developer Preview), Stage 2 (v1.1 Advanced Autonomy), Stage 3 (v2.0 Agent Swarms). | `v1.0.6` Current Release | Navbar, Footer, Docs |
| `/sdk` | `app/sdk/page.tsx` | RootLayout | SDK Reference Index: All 10 verified SDK facades (`Memory`, `Knowledge`, `Planning`, `Reasoning`, `Reflection`, `Inference`, `Identity`, `Execution`, `Project`, `Settings`). | `v1.0.6` · 10 Verified SDKs | Navbar, Home, Docs, Quickstart, Footer |
| `/security` | `app/security/page.tsx` | RootLayout | Security & Governance: Fail-closed authorization gate, tenant isolation, BYOK masking, vulnerability disclosure SLA. | `1.0.6-developer-preview` (Active Supported Version) | Docs, Footer, Quickstart |
| `/vision` | `app/vision/page.tsx` | RootLayout | Planetary ecosystem vision: Autonomous cognitive swarms, hardware intelligence mesh, developer empowerment. | `v1.0.6` Platform Vision | Mission, About, Footer |

*(Note: `/studio` is preserved as an untouched future product route per explicit user exception).*

---

## 2. Shared Component Inventory

| Component Path | Hierarchy / Usage | Synchronization Highlights |
| :--- | :--- | :--- |
| `components/layout/navbar.tsx` | Global Header (all pages) | Brand emblem, desktop/mobile navigation links, theme toggle, GitHub CTA, untouched `/studio` route preservation. |
| `components/footer/site-footer.tsx` | Global Footer (all pages) | Synchronized to `v1.0.6 · DEVELOPER PREVIEW`; links updated to `/quickstart`, `/security`, `/sdk`, and official GitHub repository. |
| `components/developers/developer-section.tsx` | Homepage (`#developers`) | Standardized `developerLayers` to the 5 canonical layers (`Application`, `10 SDKs`, `Runtime Orchestration`, `Kernel Services`, `LLM Providers`). |
| `components/roadmap/roadmap-section.tsx` | Homepage (`#roadmap`) | Synchronized Stage 1 to `v1.0.6 Developer Preview & Cognitive Core` (11-stage pipeline, pgvector RRF, fail-closed security). |
| `components/applications/applications-section.tsx` | Homepage (`#applications`) | Linked `01 Shree Project Intelligence` and `02 Shree Personal AI` to dedicated live application pages. |
| `components/playground/*` | Playground Route (`/playground`) | Interactive developer panels for `ExecutionTimeline`, `ErrorInspector`, `IdentityPanel`, `ReflectionPanel`, `ResponseViewer`, `DeveloperTools`. |

---

## 3. Link Integrity & Health Audit

* **Total Internal Hyperlinks Inspected:** 84
* **Dead Links (404s) Detected:** 0
* **Orphaned Pages:** 0
* **Build Verification:** 27/27 static routes generated successfully with 0 compilation errors.
