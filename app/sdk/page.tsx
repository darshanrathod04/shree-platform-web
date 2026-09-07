import Link from "next/link";

const interfaces = [
  {
    number: "01",
    type: "RUNTIME",
    title: "Runtime",
    description:
      "Connect applications with the Shree runtime for lifecycle, context, execution, and platform-level coordination.",
  },
  {
    number: "02",
    type: "MEMORY",
    title: "Memory",
    description:
      "Build applications that can work with persistent context and reusable memory capabilities provided by the platform.",
  },
  {
    number: "03",
    type: "KNOWLEDGE",
    title: "Knowledge",
    description:
      "Connect application workflows with knowledge-oriented platform capabilities and structured information.",
  },
  {
    number: "04",
    type: "REASONING",
    title: "Reasoning",
    description:
      "Use reusable reasoning capabilities while keeping intelligence infrastructure separate from application logic.",
  },
  {
    number: "05",
    type: "PLANNING",
    title: "Planning",
    description:
      "Build goal-oriented workflows using platform planning capabilities without rebuilding planning infrastructure.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Application",
    description:
      "Your product and domain-specific experience.",
  },
  {
    number: "02",
    title: "SDK",
    description:
      "Developer-facing interface to Shree AI OS.",
  },
  {
    number: "03",
    title: "Runtime",
    description:
      "Platform lifecycle, context, and execution.",
  },
  {
    number: "04",
    title: "Intelligence",
    description:
      "Reusable intelligence capabilities and kernels.",
  },
];

const principles = [
  {
    number: "01",
    title: "Stable Interfaces",
    description:
      "Applications should communicate through defined interfaces instead of depending directly on internal implementations.",
  },
  {
    number: "02",
    title: "Reusable Capabilities",
    description:
      "Common intelligence infrastructure belongs to the platform and should be reusable across applications.",
  },
  {
    number: "03",
    title: "Clear Boundaries",
    description:
      "The SDK separates application concerns from runtime and intelligence infrastructure.",
  },
];

export default function SDKPage() {
  return (
    <main className="sdk-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="sdk-hero">
        <div className="sdk-container">

          <Link href="/" className="sdk-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="sdk-hero-label">
            <span />
            SHREE AI OS · SDK
          </div>

          <div className="sdk-hero-grid">

            <div>
              <span className="sdk-hero-number">
                01
              </span>

              <h1>
                Build through
                <br />
                <span>the SDK.</span>
              </h1>
            </div>

            <div className="sdk-hero-description">

              <p>
                The Shree SDK provides the developer-facing layer for
                connecting applications with the platform runtime and
                reusable intelligence capabilities.
              </p>

              <div className="sdk-status">
                <span />
                DEVELOPER INTERFACE
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SDK OVERVIEW
          ===================================================== */}

      <section className="sdk-overview">
        <div className="sdk-container">

          <div className="sdk-section-label">
            02 · SDK OVERVIEW
          </div>

          <div className="sdk-overview-grid">

            <h2>
              One developer
              <br />
              <span>interface.</span>
            </h2>

            <div>
              <p>
                Applications should not need to understand the internal
                implementation of every intelligence capability they use.
              </p>

              <p>
                The SDK acts as the developer-facing boundary between an
                application and the underlying Shree AI OS platform.
              </p>
            </div>

          </div>


          <div className="sdk-overview-card">

            <div className="sdk-overview-card-top">
              <span>APPLICATION → PLATFORM</span>
              <b>SDK</b>
            </div>

            <div className="sdk-overview-diagram">

              <div>
                <small>YOUR PRODUCT</small>
                <strong>Application</strong>
              </div>

              <span>→</span>

              <div className="sdk-diagram-active">
                <small>DEVELOPER LAYER</small>
                <strong>Shree SDK</strong>
              </div>

              <span>→</span>

              <div>
                <small>PLATFORM</small>
                <strong>Shree Runtime</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTERFACES
          ===================================================== */}

      <section className="sdk-interfaces">
        <div className="sdk-container">

          <div className="sdk-section-heading">

            <div>
              <span className="sdk-section-label">
                03 · PLATFORM INTERFACES
              </span>

              <h2>
                Connect to
                <br />
                <span>platform intelligence.</span>
              </h2>
            </div>

            <p>
              The SDK is designed as the developer-facing entry point for
              platform capabilities. Applications can consume reusable
              intelligence without coupling themselves to internal systems.
            </p>

          </div>


          <div className="sdk-interface-list">

            {interfaces.map((item) => (
              <article
                className="sdk-interface-card"
                key={item.number}
              >

                <div className="sdk-interface-number">
                  {item.number}
                </div>

                <div className="sdk-interface-content">

                  <span>
                    {item.type}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <div className="sdk-interface-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          INTEGRATION FLOW
          ===================================================== */}

      <section className="sdk-flow">
        <div className="sdk-container">

          <div className="sdk-section-heading">

            <div>
              <span className="sdk-section-label">
                04 · INTEGRATION FLOW
              </span>

              <h2>
                From application
                <br />
                <span>to intelligence.</span>
              </h2>
            </div>

            <p>
              The developer workflow remains intentionally layered. Each
              component has a clear responsibility while the platform handles
              the underlying intelligence infrastructure.
            </p>

          </div>


          <div className="sdk-flow-grid">

            {workflow.map((item, index) => (
              <div
                className="sdk-flow-item"
                key={item.number}
              >

                <div className="sdk-flow-number">
                  {item.number}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

                {index < workflow.length - 1 && (
                  <span className="sdk-flow-arrow">
                    →
                  </span>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PRINCIPLES
          ===================================================== */}

      <section className="sdk-principles">
        <div className="sdk-container">

          <div className="sdk-section-heading">

            <div>
              <span className="sdk-section-label">
                05 · SDK PRINCIPLES
              </span>

              <h2>
                Simple for
                <br />
                <span>developers.</span>
              </h2>
            </div>

            <p>
              The SDK follows the same architectural principles as the
              platform: clear boundaries, reusable capabilities, and interfaces
              designed for long-term evolution.
            </p>

          </div>


          <div className="sdk-principle-grid">

            {principles.map((principle) => (
              <article
                className="sdk-principle-card"
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
          SDK STATUS
          ===================================================== */}

      <section className="sdk-status-section">
        <div className="sdk-container">

          <div className="sdk-status-card">

            <div>
              <span>
                CURRENT PLATFORM STATE
              </span>

              <h2>
                The interface evolves
                <br />
                <span>with the platform.</span>
              </h2>
            </div>

            <div className="sdk-status-details">

              <div>
                <small>VERSION</small>
                <strong>V1</strong>
              </div>

              <div>
                <small>STATUS</small>
                <strong>FOUNDATION</strong>
              </div>

              <div>
                <small>FOCUS</small>
                <strong>PLATFORM INTERFACES</strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="sdk-cta">
        <div className="sdk-container">

          <div className="sdk-cta-card">

            <span>
              SHREE AI OS · SDK
            </span>

            <h2>
              Build the application.
              <br />
              <span>Reuse the intelligence.</span>
            </h2>

            <p>
              Explore the documentation and architecture behind the Shree
              developer platform.
            </p>

            <div className="sdk-cta-actions">

              <Link href="/docs">
                Read Documentation
                <span>↗</span>
              </Link>

              <Link href="/architecture">
                Explore Architecture
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}