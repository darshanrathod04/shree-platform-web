import Link from "next/link";
import SiteFooter from "@/components/footer/site-footer";

const platformLayers = [
  {
    number: "01",
    title: "Platform Core",
    description:
      "The foundational layer responsible for configuration, lifecycle, discovery, health, events, and platform-level coordination.",
    items: [
      "Configuration",
      "Registry",
      "Discovery",
      "Lifecycle",
      "Events",
      "Health",
    ],
  },
  {
    number: "02",
    title: "Intelligence Kernels",
    description:
      "Reusable intelligence capabilities that applications can consume without rebuilding the underlying systems.",
    items: [
      "Identity",
      "Memory",
      "Knowledge",
      "Reasoning",
      "Planning",
      "Execution",
    ],
  },
  {
    number: "03",
    title: "Runtime",
    description:
      "The execution environment connecting platform services, intelligence capabilities, developer interfaces, and applications.",
    items: [
      "Execution",
      "Context",
      "Lifecycle",
      "Coordination",
    ],
  },
  {
    number: "04",
    title: "Developer Interfaces",
    description:
      "Interfaces that allow developers to build applications on top of Shree AI OS while remaining separated from internal implementations.",
    items: [
      "SDK",
      "REST APIs",
      "CLI",
      "Documentation",
    ],
  },
];

export default function PlatformPage() {
  return (
      <>
    <main className="platform-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="platform-hero">
        <div className="platform-container">

          <Link
            href="/"
            className="platform-back"
          >
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="platform-hero-label">
            <span />
            SHREE AI OS · PLATFORM
          </div>

          <div className="platform-hero-grid">

            <div>
              <span className="platform-hero-number">
                01
              </span>

              <h1>
                An operating
                <br />
                foundation for
                <br />
                <span>intelligent software.</span>
              </h1>
            </div>

            <div className="platform-hero-description">

              <p>
                Shree AI OS is a platform for building intelligent software
                with reusable AI infrastructure, explicit architectural
                boundaries, stable interfaces, and a runtime designed to
                connect intelligence with execution.
              </p>

              <div className="platform-status">
                <span />
                V1 · PLATFORM FOUNDATION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT IS SHREE
      ===================================================== */}

      <section className="platform-introduction">
        <div className="platform-container">

          <div className="platform-section-label">
            01 · THE PLATFORM
          </div>

          <div className="platform-introduction-grid">

            <h2>
              Not an application.
              <br />
              <span>A foundation.</span>
            </h2>

            <div>
              <p>
                Modern intelligent applications repeatedly rebuild many of
                the same foundations — memory, context, reasoning, planning,
                execution, runtime services, and integration infrastructure.
              </p>

              <p>
                Shree AI OS approaches this problem from the platform layer.
                Instead of making every application rebuild intelligence
                infrastructure independently, the platform provides reusable
                foundations that applications can build upon.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PLATFORM PRINCIPLE
      ===================================================== */}

      <section className="platform-principle">
        <div className="platform-container">

          <div className="platform-principle-card">

            <div className="platform-principle-top">
              <span>THE PLATFORM PRINCIPLE</span>

              <span>SHREE / 01</span>
            </div>

            <div className="platform-principle-content">

              <div className="platform-principle-symbol">
                S
              </div>

              <div>
                <h2>
                  Build intelligent systems
                  <br />
                  <span>on reusable foundations.</span>
                </h2>

                <p>
                  The platform separates infrastructure from applications,
                  allowing intelligence capabilities to evolve independently
                  while applications remain focused on their own domains.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PLATFORM ARCHITECTURE
      ===================================================== */}

      <section className="platform-architecture">
        <div className="platform-container">

          <div className="platform-section-heading">

            <div>
              <span className="platform-section-label">
                02 · PLATFORM ARCHITECTURE
              </span>

              <h2>
                Layers designed
                <br />
                <span>to work together.</span>
              </h2>
            </div>

            <p>
              Shree AI OS is structured as a layered platform. Each layer has
              a defined responsibility while remaining connected through
              explicit interfaces and architectural boundaries.
            </p>

          </div>


          <div className="platform-layers">

            {platformLayers.map((layer) => (
              <article
                className="platform-layer-card"
                key={layer.number}
              >

                <div className="platform-layer-number">
                  {layer.number}
                </div>

                <div className="platform-layer-main">

                  <span>
                    PLATFORM LAYER
                  </span>

                  <h3>
                    {layer.title}
                  </h3>

                  <p>
                    {layer.description}
                  </p>

                  <div className="platform-layer-items">
                    {layer.items.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="platform-layer-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PLATFORM FLOW
      ===================================================== */}

      <section className="platform-flow">
        <div className="platform-container">

          <div className="platform-section-label">
            03 · THE FLOW
          </div>

          <div className="platform-flow-heading">
            <h2>
              From application
              <br />
              <span>to intelligence.</span>
            </h2>

            <p>
              Applications interact with Shree AI OS through developer
              interfaces. The platform then connects those requests with
              runtime services and reusable intelligence capabilities.
            </p>
          </div>


          <div className="platform-flow-diagram">

            <div className="platform-flow-node">
              <span>01</span>
              <strong>Your Application</strong>
              <small>Product / Experience</small>
            </div>

            <div className="platform-flow-connector">
              ↓
            </div>

            <div className="platform-flow-node">
              <span>02</span>
              <strong>Developer Interfaces</strong>
              <small>SDK / API / CLI</small>
            </div>

            <div className="platform-flow-connector">
              ↓
            </div>

            <div className="platform-flow-node platform-flow-highlight">
              <span>03</span>
              <strong>Shree Runtime</strong>
              <small>Execution / Context / Coordination</small>
            </div>

            <div className="platform-flow-connector">
              ↓
            </div>

            <div className="platform-flow-node">
              <span>04</span>
              <strong>Intelligence Kernels</strong>
              <small>Memory / Knowledge / Reasoning / Planning</small>
            </div>

            <div className="platform-flow-connector">
              ↓
            </div>

            <div className="platform-flow-node">
              <span>05</span>
              <strong>Platform Core</strong>
              <small>Foundation / Services / Lifecycle</small>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY PLATFORM
      ===================================================== */}

      <section className="platform-why">
        <div className="platform-container">

          <div className="platform-section-label">
            04 · WHY A PLATFORM
          </div>

          <div className="platform-why-heading">
            <h2>
              Stop rebuilding
              <br />
              <span>the same intelligence.</span>
            </h2>

            <p>
              A platform approach creates a shared foundation that can serve
              multiple intelligent applications while keeping application
              concerns separate from infrastructure concerns.
            </p>
          </div>


          <div className="platform-why-grid">

            <article>
              <span>01</span>
              <h3>Reusable</h3>
              <p>
                Intelligence capabilities can be reused across multiple
                applications instead of being rebuilt independently.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Modular</h3>
              <p>
                Platform capabilities remain separated into clear layers and
                components with explicit responsibilities.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Extensible</h3>
              <p>
                The architecture is designed so future capabilities can be
                introduced without redefining the entire platform.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>Developer-focused</h3>
              <p>
                Developers interact with stable interfaces rather than
                depending directly on internal implementations.
              </p>
            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          APPLICATION RELATIONSHIP
      ===================================================== */}

      <section className="platform-applications">
        <div className="platform-container">

          <div className="platform-application-card">

            <div>
              <span>
                PLATFORM → APPLICATION
              </span>

              <h2>
                The platform
                <br />
                <span>comes first.</span>
              </h2>
            </div>

            <div>
              <p>
                Applications are where the platform becomes useful. They
                demonstrate what can be built when intelligence infrastructure
                is available as a reusable foundation.
              </p>

              <Link href="/#applications">
                Explore Applications
                <span>↗</span>
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="platform-cta">
        <div className="platform-container">

          <span>SHREE AI OS</span>

          <h2>
            Understand the platform.
            <br />
            <span>Then build on it.</span>
          </h2>

          <div className="platform-cta-actions">

            <Link href="/architecture">
              Explore Architecture
              <span>↗</span>
            </Link>

            <Link href="/docs">
              Read Documentation
            </Link>

          </div>

        </div>
      </section>

    </main>
    <SiteFooter />
    </>
  );
}