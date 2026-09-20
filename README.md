<div align="center">

  <img src="public/brand/shree-logo.png" alt="Shree AI OS Logo" width="120" />

  # Shree AI OS Platform Website

  **The official developer portal and documentation website for Shree AI OS.**

  [![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-000000?style=flat-square&logo=vercel)](https://turbo.build/pack)
  [![Release](https://img.shields.io/badge/Target_Release-v1.0.6_Developer_Preview-6d5dfc?style=flat-square)](https://github.com/darshanrathod04/shree-ai-os)

  [Explore Platform](https://shree-ai-os.dev/platform) • [Quickstart Guide](https://shree-ai-os.dev/quickstart) • [10 SDK Facades](https://shree-ai-os.dev/sdk) • [Architecture Deep Dive](https://shree-ai-os.dev/architecture) • [Security & Trust](https://shree-ai-os.dev/security)

</div>

---

## What is this repository?

> [!IMPORTANT]
> **This repository contains the frontend web platform only.**
> It is the public documentation, developer portal, and interactive playground website for **Shree AI OS**.
> The core Java 21 LTS in-process cognitive runtime, multi-kernel services, and Maven library are maintained in the [`shree-ai-os`](https://github.com/darshanrathod04/shree-ai-os) repository.

This project delivers the official web experience for developers adopting **Shree AI OS v1.0.6 Developer Preview**, featuring:
* Interactive developer documentation and fluent Java 21 SDK guides.
* Comprehensive architectural dataflow visualizers for the **5-layer platform architecture** and **11-stage cognitive execution pipeline**.
* An in-browser **Developer Console** and **SDK Playground** for experimenting with cognitive runtime modules.
* Responsible vulnerability disclosure, fail-closed authorization architecture documentation, and release changelog.

---

## Features

* **Landing Page (`/`):** High-impact hero with the Silver Shree emblem, 10 canonical SDK facade cards, copy-pasteable Java 21 Quickstart snippet, empirical trust metrics, and platform dataflow.
* **Platform Overview (`/platform`):** Comprehensive breakdown of the 5-layer platform hierarchy, runtime contracts, and K0.6 Autonomous Knowledge Acquisition domain isolation.
* **Architecture Deep Dive (`/architecture`):** Step-by-step visualizer for the hardened 11-stage cognitive execution pipeline and Dual-Mode Synthesis (Strict RAG with citations vs. General Assistance fallback).
* **Developer Quickstart (`/quickstart`):** Copy-pasteable Maven dependency block (`io.github.darshanrathod04:shree-ai-os:1.0.6-developer-preview`), Java 21 prerequisites, `RuntimeConfiguration`, and executable code snippets.
* **10 Verified SDK Facades Reference (`/sdk`):** Complete reference for all 10 canonical SDK facades: `MemorySDK`, `KnowledgeSDK`, `PlanningSDK`, `ReasoningSDK`, `ReflectionSDK`, `InferenceSDK`, `IdentitySDK`, `ExecutionSDK`, `ProjectSDK`, and `SettingsSDK`.
* **Documentation Hub (`/docs`):** Getting started workflows, core concepts, developer interfaces, and advanced governance topics.
* **Interactive SDK Playground (`/playground`):** Live developer testing environment with modules for Chat, Knowledge Ingestion & RRF Search, Memory Recall, DAG Planning, and Outcome Reflection.
* **Developer Studio Console (`/developer`):** Advanced developer workspace featuring live sessions, JavaParser AST symbol inspection, automated patch review, and workflow execution.
* **Security & Trust (`/security`):** Canonical documentation of the fail-closed authorization gate (`DefaultRuntimeService.graphPermissionManager`), tenant isolation boundaries, in-memory BYOK key masking, supported versions matrix, and responsible disclosure SLA.
* **Roadmap (`/roadmap`):** Phased platform roadmap from v1.0.6 Developer Preview & Cognitive Core through v1.1 Advanced Autonomy and v2.0 Multi-Agent Swarms.
* **Research Publications (`/research`):** Literature and research papers on multi-kernel architectures, deterministic reasoning, and hybrid vector retrieval.
* **Enterprise Applications (`/applications`):** Deep dives into real-world applications built on Shree AI OS, including **Project Intelligence** and **Personal AI**.

---

## Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3.1 (App Router)](https://nextjs.org/) | Hybrid static generation & dynamic server rendering |
| **UI Library** | [React 19.2.8](https://react.dev/) | Component architecture & modern hooks |
| **Styling** | [Tailwind CSS 4.0](https://tailwindcss.com/) | Utility-first CSS with CSS variables design tokens |
| **Animations** | [Motion (Framer Motion 13)](https://motion.dev/) | Smooth layout animations, entrance transitions, and orbs |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, accessible developer icons |
| **Bundler** | [Turbopack](https://turbo.build/pack) | High-speed incremental compilation and build pipeline |
| **Type System** | [TypeScript 5.x](https://www.typescriptlang.org/) | Strict static typing and interface verification |
| **Theming** | `next-themes` | Dark mode and light mode token transitions |

---

## Project Structure

```text
shree-platform-web/
├── app/                                # Next.js App Router routes
│   ├── about/                          # About page (5-layer platform idea)
│   ├── applications/                   # Applications index & details
│   │   ├── personal-ai/                # Personal AI detail page
│   │   └── project-intelligence/       # Project Intelligence workspace detail
│   ├── architecture/                   # 5-Layer & 11-Stage Pipeline architecture
│   ├── constitution/                   # Platform principles & boundaries
│   ├── developer/                      # Developer Console (Sessions, AST, Review)
│   │   ├── chat/                       # Live cognitive chat interface
│   │   ├── review/                     # Automated code review workbench
│   │   ├── settings/                   # Platform & BYOK settings
│   │   ├── workflow/                   # Autonomous DAG workflow runner
│   │   └── workspace/                  # AST symbol tree & patch simulator
│   ├── developers/                     # Developer portal overview
│   ├── docs/                           # Documentation hub
│   ├── mission/                        # Long-term mission statement
│   ├── not-found.tsx                   # Custom on-brand 404 error page
│   ├── page.tsx                        # Homepage (Hero, 10 SDKs, Quickstart)
│   ├── platform/                       # Platform overview & K0.6 isolation
│   ├── playground/                     # Interactive SDK testing console
│   ├── quickstart/                     # 5-Minute Java 21 developer quickstart
│   ├── research/                       # Research papers & cognitive architecture
│   ├── roadmap/                        # Platform evolution milestones
│   ├── sdk/                            # 10 verified SDK facades reference
│   ├── security/                       # Security policy & fail-closed architecture
│   ├── vision/                         # Planetary ecosystem vision
│   ├── globals.css                     # Design tokens & responsive styling
│   └── layout.tsx                      # Root layout, SEO metadata, ThemeProvider
├── components/                         # Shared UI components
│   ├── applications/                   # Application preview components
│   ├── developers/                     # Developer stack section components
│   ├── footer/                         # Global site footer
│   ├── layout/                         # Global navbar & mobile drawer
│   ├── playground/                     # Playground panels (Timeline, Inspector)
│   ├── roadmap/                        # Roadmap timeline cards
│   └── theme/                          # Dark/light theme provider & toggle
├── context/                            # React contexts (Developer console state)
├── lib/                                # API clients & request templates
│   ├── developer-api.ts                # REST client for developer workspace
│   ├── playground-api.ts               # REST client for interactive playground
│   └── request-templates.ts            # Default payloads for module testing
├── public/                             # Static brand assets & SVG icons
│   └── brand/shree-logo.png            # Canonical Silver Shree logo emblem
├── package.json                        # Scripts & dependencies
└── tsconfig.json                       # Strict TypeScript configuration
```

---

## Local Development

### Prerequisites
* **Node.js:** `v20.x` or `v22.x` LTS
* **Package Manager:** `npm` (included with Node)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/darshanrathod04/shree-platform-web.git
   cd shree-platform-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**  
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

---

## Production Build

Compile the optimized static build with Turbopack:

```bash
# Build production bundle and prerender all 27 static routes
npm run build

# Start production preview server
npm start
```

### Build Verification Guarantees
* **Compiler:** Turbopack (Next.js 16.3.1)
* **Status:** 27/27 static routes generated cleanly with **0 errors and 0 warnings**.
* **Responsiveness:** Horizontal viewport containment verified (`overflow-x: clip`).

---

## Route Map

All 27 public routes are prerendered as static HTML/JSON for sub-millisecond response times:

| Path | Component / Page | Description |
| :--- | :--- | :--- |
| `/` | `app/page.tsx` | Home: Hero, 10 SDK cards, Java 21 quickstart, trust metrics |
| `/platform` | `app/platform/page.tsx` | 5-layer platform architecture & K0.6 domain isolation |
| `/architecture` | `app/architecture/page.tsx` | Hardened 11-stage cognitive execution pipeline & synthesis |
| `/quickstart` | `app/quickstart/page.tsx` | 5-Minute developer setup with Maven & `RuntimeConfiguration` |
| `/sdk` | `app/sdk/page.tsx` | 10 verified SDK facades with method signatures |
| `/docs` | `app/docs/page.tsx` | Comprehensive developer documentation index |
| `/playground` | `app/playground/page.tsx` | Live interactive execution environment for SDK modules |
| `/developer` | `app/developer/page.tsx` | Developer Console: Sessions, AST analysis, patch tools |
| `/developer/chat` | `app/developer/chat/page.tsx` | Live multi-turn cognitive chat with token streaming |
| `/developer/workflow` | `app/developer/workflow/page.tsx` | Autonomous workflow runner & DAG execution |
| `/developer/review` | `app/developer/review/page.tsx` | Code reflection, self-critique, and ChiefReview gate |
| `/developer/settings` | `app/developer/settings/page.tsx` | Runtime provider settings & BYOK credential management |
| `/developer/workspace` | `app/developer/workspace/page.tsx` | Workspace file tree, AST symbols, and patch preview |
| `/applications` | `app/applications/page.tsx` | Enterprise applications index & runtime integration |
| `/applications/project-intelligence` | `app/applications/project-intelligence/page.tsx` | Workspace Project Intelligence application details |
| `/applications/personal-ai` | `app/applications/personal-ai/page.tsx` | Personal AI assistant application details |
| `/security` | `app/security/page.tsx` | Fail-closed security architecture & vulnerability reporting |
| `/roadmap` | `app/roadmap/page.tsx` | Evolution roadmap (v1.0.6 Current, v1.1, v2.0, Future) |
| `/research` | `app/research/page.tsx` | Research publications & cognitive architecture papers |
| `/constitution` | `app/constitution/page.tsx` | Platform principles, deterministic contracts, privacy laws |
| `/mission` | `app/mission/page.tsx` | Long-term mission statement & platform philosophy |
| `/vision` | `app/vision/page.tsx` | Planetary-scale AI operating ecosystem vision |
| `/about` | `app/about/page.tsx` | About Shree AI OS: 5 layers & reusable intelligence |
| `/_not-found` | `app/not-found.tsx` | Custom on-brand 404 error page |

*(Note: `/studio` is reserved as a future product route).*

---

## Related Repositories

* [`shree-ai-os`](https://github.com/darshanrathod04/shree-ai-os): The canonical Java 21 LTS in-process cognitive runtime, 11-stage cognitive execution pipeline, pgvector RRF hybrid search, and multi-kernel platform.
* [`shree-platform-web`](https://github.com/darshanrathod04/shree-platform-web): This repository — the official public website, documentation portal, and interactive playground.

---

## License

This project is licensed under the [Shree AI OS Source-Available Evaluation License v1.0](https://github.com/darshanrathod04/shree-ai-os/blob/main/LICENSE).

---

## Developer

Developed and maintained by **[Darshan Rathod](https://github.com/darshanrathod04)**.  
For enterprise inquiries, security disclosures, or collaboration, open an issue or security advisory on GitHub.
