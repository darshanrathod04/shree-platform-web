import Link from "next/link";

const developerLayers = [
  {
    number: "01",
    type: "APPLICATION",
    title: "Application Layer",
    description:
      "Build the product, domain logic, and user experience your application actually needs.",
    details: ["Product Experience", "Domain Logic", "User Workflows"],
  },
  {
    number: "02",
    type: "SDK",
    title: "SDK Layer (10 Facades)",
    description:
      "Connect your application to Shree AI OS through 10 verified developer-facing SDK facades instead of internal platform implementations.",
    details: ["Memory & Knowledge", "Planning & Reasoning", "Inference & Execution"],
  },
  {
    number: "03",
    type: "RUNTIME",
    title: "Runtime Orchestration",
    description:
      "11-stage cognitive execution pipeline, Dual-Mode Synthesis, context, and fail-closed security state.",
    details: ["11-Stage Pipeline", "Dual-Mode Synthesis", "Fail-Closed RBAC"],
  },
  {
    number: "04",
    type: "KERNELS",
    title: "Kernel Services",
    description:
      "Reuse platform capabilities such as graph memory, K0.6 domain-isolated knowledge, pgvector RRF, and reflection engines.",
    details: ["Graph Memory", "K0.6 Knowledge", "pgvector RRF", "Reflection"],
  },
  {
    number: "05",
    type: "PROVIDERS",
    title: "LLM & Provider Layer",
    description:
      "LlmRouter with gemini-3.6-flash, exponential backoff retries on HTTP 503/429, and deterministic in-memory fallback.",
    details: ["LlmRouter", "gemini-3.6-flash", "Backoff Retries", "Deterministic Fallback"],
  },
];

const capabilities = [
  {
    number: "01",
    title: "Memory",
    description:
      "Give applications reusable foundations for retaining and retrieving contextual information.",
  },
  {
    number: "02",
    title: "Knowledge",
    description:
      "Connect applications with structured information and knowledge-oriented capabilities.",
  },
  {
    number: "03",
    title: "Reasoning",
    description:
      "Provide reusable reasoning capabilities without embedding intelligence infrastructure directly into the application.",
  },
  {
    number: "04",
    title: "Planning",
    description:
      "Structure complex goals and workflows through reusable planning foundations.",
  },
  {
    number: "05",
    title: "Execution",
    description:
      "Move from decisions and plans toward controlled actions through platform execution capabilities.",
  },
  {
    number: "06",
    title: "Context",
    description:
      "Maintain the information required to connect application requests with platform intelligence.",
  },
];

const principles = [
  {
    number: "01",
    title: "Build Around Interfaces",
    description:
      "Applications should interact with stable developer interfaces rather than coupling directly to internal platform implementations.",
  },
  {
    number: "02",
    title: "Reuse Intelligence",
    description:
      "Common intelligence capabilities belong in the platform so applications do not repeatedly rebuild the same foundations.",
  },
  {
    number: "03",
    title: "Keep Boundaries Clear",
    description:
      "Application logic, runtime responsibilities, intelligence capabilities, and platform infrastructure remain intentionally separated.",
  },
  {
    number: "04",
    title: "Design for Evolution",
    description:
      "Developer experiences should allow the platform to evolve while applications remain focused on their own domain.",
  },
];

export default function DevelopersPage() {
  return (
    <main className="developers-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="developers-hero">
        <div className="developers-container">

          <Link
            href="/"
            className="developers-back"
          >
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="developers-hero-label">
            <span />
            SHREE AI OS · DEVELOPERS
          </div>

          <div className="developers-hero-grid">

            <div>
              <span className="developers-hero-number">
                01
              </span>

              <h1>
                Build on
                <br />
                <span>the platform.</span>
              </h1>
            </div>

            <div className="developers-hero-description">

              <p>
                Shree AI OS gives developers reusable infrastructure for
                building intelligent software without rebuilding intelligence
                foundations inside every application.
              </p>

              <div className="developers-status">
                <span />
                v1.0.6 · DEVELOPER PREVIEW
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DEVELOPER STACK
          ===================================================== */}

      <section className="developers-stack-section">
        <div className="developers-container">

          <div className="developers-section-label">
            02 · DEVELOPER STACK
          </div>

          <div className="developers-heading-grid">

            <h2>
              Build the application.
              <br />
              <span>Reuse the intelligence.</span>
            </h2>

            <p>
              Applications interact with Shree AI OS through defined
              developer interfaces. The platform handles the underlying
              runtime and reusable intelligence foundations.
            </p>

          </div>


          <div className="developers-stack">

            {developerLayers.map((layer, index) => (
              <div
                className="developers-stack-item"
                key={layer.number}
              >

                <div className="developers-stack-number">
                  {layer.number}
                </div>

                <div className="developers-stack-content">

                  <div className="developers-stack-top">
                    <span>
                      {layer.type}
                    </span>

                    {index < developerLayers.length - 1 && (
                      <b>↓</b>
                    )}
                  </div>

                  <h3>
                    {layer.title}
                  </h3>

                  <p>
                    {layer.description}
                  </p>

                  <div className="developers-stack-tags">
                    {layer.details.map((detail) => (
                      <span key={detail}>
                        {detail}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="developers-stack-indicator">
                  <span />
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CAPABILITIES
          ===================================================== */}

      <section className="developers-capabilities">
        <div className="developers-container">

          <div className="developers-section-heading">

            <div>
              <span className="developers-section-label">
                03 · PLATFORM CAPABILITIES
              </span>

              <h2>
                Intelligence
                <br />
                <span>you can build with.</span>
              </h2>
            </div>

            <p>
              Shree AI OS exposes reusable intelligence foundations so
              developers can focus on applications instead of repeatedly
              rebuilding core intelligence infrastructure.
            </p>

          </div>


          <div className="developers-capability-grid">

            {capabilities.map((capability) => (
              <article
                className="developers-capability-card"
                key={capability.number}
              >

                <span className="developers-capability-number">
                  {capability.number}
                </span>

                <h3>
                  {capability.title}
                </h3>

                <p>
                  {capability.description}
                </p>

                <span className="developers-capability-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DEVELOPER PRINCIPLES
          ===================================================== */}

      <section className="developers-principles">
        <div className="developers-container">

          <div className="developers-section-heading">

            <div>
              <span className="developers-section-label">
                04 · DEVELOPER PRINCIPLES
              </span>

              <h2>
                Build with
                <br />
                <span>clear boundaries.</span>
              </h2>
            </div>

            <p>
              The developer experience follows the same architectural
              discipline as the platform itself: explicit interfaces,
              reusable foundations, and clear separation of responsibilities.
            </p>

          </div>


          <div className="developers-principle-grid">

            {principles.map((principle) => (
              <article
                className="developers-principle-card"
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
          DEVELOPER FLOW
          ===================================================== */}

      <section className="developers-flow">
        <div className="developers-container">

          <div className="developers-flow-card">

            <div className="developers-flow-main">

              <span>
                THE PLATFORM APPROACH
              </span>

              <h2>
                Your application.
                <br />
                <span>Shree intelligence.</span>
              </h2>

            </div>

            <div className="developers-flow-path">

              <div>
                <small>01</small>
                <strong>Application</strong>
              </div>

              <b>→</b>

              <div>
                <small>02</small>
                <strong>10 SDKs</strong>
              </div>

              <b>→</b>

              <div>
                <small>03</small>
                <strong>11-Stage Runtime</strong>
              </div>

              <b>→</b>

              <div>
                <small>04</small>
                <strong>Kernel Services</strong>
              </div>

              <b>→</b>

              <div>
                <small>05</small>
                <strong>LLM Providers</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="developers-cta">
        <div className="developers-container">

          <span>
            SHREE AI OS
          </span>

          <h2>
            Start building
            <br />
            <span>with the platform.</span>
          </h2>

          <p>
            Explore the architecture, read the documentation, and build
            intelligent software on top of Shree AI OS.
          </p>

          <div className="developers-cta-actions">

            <Link href="/docs">
              Start Building
              <span>↗</span>
            </Link>

            <Link href="/architecture">
              Explore Architecture
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}