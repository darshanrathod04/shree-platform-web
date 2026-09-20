import Link from "next/link";

const architectureLayers = [
  {
    number: "01",
    name: "APPLICATIONS",
    title: "Application Layer",
    description:
      "Enterprise systems, Spring Boot microservices, APIs, and product experiences consuming deterministic AI capabilities.",
    components: [
      "Spring Boot 3/4",
      "Microservices",
      "REST Endpoints",
      "Domain Logic",
    ],
  },
  {
    number: "02",
    name: "INTERFACES",
    title: "SDK Layer (10 Verified Facades)",
    description:
      "Public Java 21 client interfaces providing typed, deterministic access to memory, planning, code patches, and model routing.",
    components: [
      "client.chat()",
      "client.memory()",
      "client.knowledge()",
      "client.planning()",
      "client.developer()",
    ],
  },
  {
    number: "03",
    name: "RUNTIME",
    title: "Runtime Orchestration Layer",
    description:
      "Deterministic 11-stage cognitive execution pipeline, fail-closed authorization gate, multi-tenant boundaries, and event dispatching.",
    components: [
      "11-Stage Pipeline",
      "Fail-Closed Gate",
      "Intent Router",
      "Tenant Enforcer",
    ],
  },
  {
    number: "04",
    name: "KERNELS",
    title: "Kernel Services Layer",
    description:
      "In-process cognitive kernels for episodic memory, pgvector hybrid RRF search, topological DAG planning, and AST code patch generation.",
    components: [
      "Episodic Memory",
      "pgvector HNSW + GIN",
      "K0.6 Acquisition",
      "JavaParser AST",
    ],
  },
  {
    number: "05",
    name: "PROVIDERS",
    title: "LLM Provider Layer (BYOK)",
    description:
      "Swappable model integration with automatic HTTP 429/503 exponential backoff retries and deterministic in-memory fallback.",
    components: [
      "Google Gemini",
      "OpenAI",
      "Ollama",
      "In-Memory Fallback",
    ],
  },
];

const principles = [
  {
    number: "01",
    title: "Separation",
    description:
      "Applications remain separated from internal platform implementations through explicit architectural boundaries.",
  },
  {
    number: "02",
    title: "Reusability",
    description:
      "Intelligence capabilities are designed as reusable foundations rather than application-specific implementations.",
  },
  {
    number: "03",
    title: "Modularity",
    description:
      "Each architectural layer has a defined responsibility and can evolve without unnecessarily coupling the entire system.",
  },
  {
    number: "04",
    title: "Extensibility",
    description:
      "The architecture provides room for new capabilities, applications, and intelligence systems as the platform evolves.",
  },
];

export default function ArchitecturePage() {
  return (
    <main className="architecture-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="architecture-hero">
        <div className="architecture-container">

          <Link
            href="/"
            className="architecture-back"
          >
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="architecture-hero-label">
            <span />
            SHREE AI OS · ARCHITECTURE
          </div>

          <div className="architecture-hero-grid">

            <div>
              <span className="architecture-hero-number">
                01
              </span>

              <h1>
                The architecture
                <br />
                behind
                <br />
                <span>intelligent software.</span>
              </h1>
            </div>

            <div className="architecture-hero-description">

              <p>
                Shree AI OS is structured as a layered platform where
                applications, runtime services, intelligence capabilities,
                and foundational infrastructure work together through
                explicit boundaries.
              </p>

              <div className="architecture-status">
                <span />
                v1.0.6 · ARCHITECTURE FOUNDATION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SYSTEM OVERVIEW
          ===================================================== */}

      <section className="architecture-overview">
        <div className="architecture-container">

          <div className="architecture-section-label">
            02 · SYSTEM OVERVIEW
          </div>

          <div className="architecture-overview-heading">

            <h2>
              One platform.
              <br />
              <span>Defined layers.</span>
            </h2>

            <p>
              The architecture separates applications from the underlying
              intelligence and infrastructure while keeping the complete
              system connected through explicit interfaces.
            </p>

          </div>


          <div className="architecture-stack">

            {architectureLayers.map((layer, index) => (
              <div
                className={`architecture-stack-layer ${
                  index === 3
                    ? "architecture-stack-highlight"
                    : ""
                }`}
                key={layer.number}
              >

                <div className="architecture-stack-number">
                  {layer.number}
                </div>

                <div className="architecture-stack-main">

                  <span>
                    {layer.name}
                  </span>

                  <strong>
                    {layer.title}
                  </strong>

                </div>

                <div className="architecture-stack-indicator">
                  <span />
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          ARCHITECTURE LAYERS
          ===================================================== */}

      <section className="architecture-layers">
        <div className="architecture-container">

          <div className="architecture-section-heading">

            <div>
              <span className="architecture-section-label">
                03 · ARCHITECTURE LAYERS
              </span>

              <h2>
                Every layer
                <br />
                <span>has a responsibility.</span>
              </h2>
            </div>

            <p>
              The architecture is intentionally layered so that applications
              can evolve independently while the platform continues to
              provide reusable infrastructure and intelligence.
            </p>

          </div>


          <div className="architecture-layer-list">

            {architectureLayers.map((layer) => (
              <article
                className="architecture-layer-card"
                key={layer.number}
              >

                <div className="architecture-layer-top">

                  <span className="architecture-layer-number">
                    {layer.number}
                  </span>

                  <span className="architecture-layer-type">
                    {layer.name}
                  </span>

                </div>


                <div className="architecture-layer-content">

                  <h3>
                    {layer.title}
                  </h3>

                  <p>
                    {layer.description}
                  </p>

                  <div className="architecture-components">

                    {layer.components.map((component) => (
                      <span key={component}>
                        {component}
                      </span>
                    ))}

                  </div>

                </div>


                <div className="architecture-layer-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          INTELLIGENCE FLOW
          ===================================================== */}

      <section className="architecture-flow">
        <div className="architecture-container">

          <div className="architecture-section-label">
            04 · INTELLIGENCE FLOW
          </div>

          <div className="architecture-flow-heading">

            <h2>
              From intent
              <br />
              <span>to execution.</span>
            </h2>

            <p>
              Intelligence becomes useful when it can move through a
              controlled path from application intent to context,
              intelligence capabilities, and execution.
            </p>

          </div>


          <div className="architecture-flow-diagram">

            <div className="architecture-flow-node">
              <span>01</span>
              <strong>Identity & Context</strong>
              <small>Actor Resolution & Tenant Boundaries</small>
            </div>

            <div className="architecture-flow-arrow">
              ↓
            </div>

            <div className="architecture-flow-node">
              <span>02</span>
              <strong>Memory & Knowledge</strong>
              <small>Dual-Channel RRF & K0.6 Acquisition</small>
            </div>

            <div className="architecture-flow-arrow">
              ↓
            </div>

            <div className="architecture-flow-node architecture-flow-highlight">
              <span>03</span>
              <strong>Reasoning & Inference</strong>
              <small>Fact Checking & Hypothesis Scoring</small>
            </div>

            <div className="architecture-flow-arrow">
              ↓
            </div>

            <div className="architecture-flow-node">
              <span>04</span>
              <strong>Planning & Execution</strong>
              <small>Topological DAG & Fail-Closed Gate</small>
            </div>

            <div className="architecture-flow-arrow">
              ↓
            </div>

            <div className="architecture-flow-node">
              <span>05</span>
              <strong>Reflection & Review</strong>
              <small>Adaptive Calibration & Governance</small>
            </div>

            <div className="architecture-flow-arrow">
              ↓
            </div>

            <div className="architecture-flow-node">
              <span>06</span>
              <strong>Dual-Mode Synthesis</strong>
              <small>Strict RAG Citations vs. General Fallback</small>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRINCIPLES
          ===================================================== */}

      <section className="architecture-principles">
        <div className="architecture-container">

          <div className="architecture-section-heading">

            <div>
              <span className="architecture-section-label">
                05 · DESIGN PRINCIPLES
              </span>

              <h2>
                Architecture
                <br />
                <span>before complexity.</span>
              </h2>
            </div>

            <p>
              The architecture is guided by principles intended to keep
              intelligence infrastructure understandable, reusable, and
              capable of evolving over time.
            </p>

          </div>


          <div className="architecture-principle-grid">

            {principles.map((principle) => (
              <article
                className="architecture-principle-card"
                key={principle.number}
              >

                <span>
                  {principle.number}
                </span>

                <h3>
                  {principle.title}
                </h3>

                <p>
                  {principle.description}
                </p>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PLATFORM RELATIONSHIP
          ===================================================== */}

      <section className="architecture-platform">

        <div className="architecture-container">

          <div className="architecture-platform-card">

            <div>

              <span>
                ARCHITECTURE → PLATFORM
              </span>

              <h2>
                Architecture gives
                <br />
                <span>the platform structure.</span>
              </h2>

            </div>

            <div>

              <p>
                The architecture defines how the platform is organized.
                The platform turns those architectural boundaries into
                reusable infrastructure for applications and developers.
              </p>

              <Link href="/platform">
                Explore Platform
                <span>↗</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="architecture-cta">

        <div className="architecture-container">

          <span>
            SHREE AI OS
          </span>

          <h2>
            Understand the architecture.
            <br />
            <span>Build with the platform.</span>
          </h2>

          <div className="architecture-cta-actions">

            <Link href="/platform">
              Explore Platform
              <span>↗</span>
            </Link>

            <Link href="/docs">
              Read Documentation
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}