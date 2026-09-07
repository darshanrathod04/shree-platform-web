import Link from "next/link";

const applications = [
  {
    number: "01",
    status: "ACTIVE",
    category: "INTELLIGENCE APPLICATION",
    title: "Shree Project Intelligence",
    description:
      "An intelligent project workspace built on Shree AI OS for planning, reasoning, memory, execution, and project-level intelligence.",
    tags: ["Projects", "Planning", "Memory"],
    href: "/applications/project-intelligence",
  },
  {
    number: "02",
    status: "IN DEVELOPMENT",
    category: "PERSONAL INTELLIGENCE",
    title: "Shree Personal AI",
    description:
      "A personal intelligence layer designed to understand context, remember interactions, manage goals, and assist across everyday workflows.",
    tags: ["Memory", "Goals", "Assistant"],
    href: "/applications/personal-ai",
  },
  {
    number: "03",
    status: "PLANNED",
    category: "INTELLIGENT SOFTWARE",
    title: "More Applications",
    description:
      "Future applications can be built on the same Shree AI OS foundations without rebuilding intelligence infrastructure from scratch.",
    tags: ["Extensible", "Modular", "Future"],
    href: "/applications",
  },
];

const platformCapabilities = [
  {
    number: "01",
    title: "Runtime",
    description:
      "A shared execution foundation for applications running on Shree AI OS.",
  },
  {
    number: "02",
    title: "Memory",
    description:
      "Reusable memory and context capabilities that applications can consume.",
  },
  {
    number: "03",
    title: "Planning",
    description:
      "Planning infrastructure that enables applications to work toward structured goals.",
  },
  {
    number: "04",
    title: "Intelligence Kernels",
    description:
      "Core intelligence capabilities that can be reused across different software experiences.",
  },
];

export default function ApplicationsPage() {
  return (
    <main className="applications-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="applications-hero">
        <div className="applications-container">

          <Link href="/" className="applications-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="applications-hero-label">
            <span />
            SHREE AI OS · APPLICATIONS
          </div>

          <div className="applications-hero-grid">

            <div>
              <span className="applications-hero-number">
                01
              </span>

              <h1>
                Intelligence
                <br />
                <span>becomes</span>
                <br />
                software.
              </h1>
            </div>

            <div className="applications-hero-description">

              <p>
                Shree AI OS provides the foundation for building intelligent
                applications that share the same platform, runtime, memory,
                reasoning, and architectural principles.
              </p>

              <div className="applications-status">
                <span />
                APPLICATION PLATFORM
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          APPLICATION PORTFOLIO
          ===================================================== */}

      <section className="applications-portfolio">
        <div className="applications-container">

          <div className="applications-section-heading">

            <div>
              <span className="applications-section-label">
                02 · APPLICATION PORTFOLIO
              </span>

              <h2>
                Built on
                <br />
                <span>the same foundation.</span>
              </h2>
            </div>

            <p>
              Applications remain focused on their own purpose while Shree AI
              OS provides the underlying intelligence infrastructure.
            </p>

          </div>


          <div className="applications-list">

            {applications.map((application) => (
              <Link
                href={application.href}
                className="applications-page-card"
                key={application.number}
              >

                <div className="applications-page-card-top">

                  <span className="applications-page-number">
                    {application.number}
                  </span>

                  <span className="applications-page-status">
                    <span />
                    {application.status}
                  </span>

                </div>

                <div className="applications-page-card-body">

                  <span className="applications-page-category">
                    {application.category}
                  </span>

                  <h3>
                    {application.title}
                  </h3>

                  <p>
                    {application.description}
                  </p>

                </div>

                <div className="applications-page-card-footer">

                  <div className="applications-page-tags">
                    {application.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="applications-page-arrow">
                    ↗
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SAME FOUNDATION
          ===================================================== */}

      <section className="applications-foundation">
        <div className="applications-container">

          <div className="applications-section-heading">

            <div>
              <span className="applications-section-label">
                03 · SHARED FOUNDATION
              </span>

              <h2>
                Different applications.
                <br />
                <span>Shared intelligence.</span>
              </h2>
            </div>

            <p>
              Applications can use common platform capabilities without
              rebuilding the intelligence infrastructure underneath them.
            </p>

          </div>


          <div className="applications-capabilities">

            {platformCapabilities.map((capability) => (
              <article
                className="applications-capability-card"
                key={capability.number}
              >

                <div className="applications-capability-top">

                  <span>
                    {capability.number}
                  </span>

                  <i />

                </div>

                <h3>
                  {capability.title}
                </h3>

                <p>
                  {capability.description}
                </p>

                <span className="applications-capability-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          APPLICATION ARCHITECTURE
          ===================================================== */}

      <section className="applications-architecture">
        <div className="applications-container">

          <div className="applications-architecture-card">

            <span className="applications-architecture-label">
              04 · APPLICATION ARCHITECTURE
            </span>

            <div className="applications-architecture-grid">

              <h2>
                Build the
                <br />
                application.
                <br />
                <span>Reuse the intelligence.</span>
              </h2>

              <div className="applications-architecture-copy">

                <p>
                  An application built on Shree AI OS does not need to own
                  every intelligence capability internally.
                </p>

                <p>
                  The platform provides reusable foundations while the
                  application defines its own domain logic, user experience,
                  and product behavior.
                </p>

                <div className="applications-architecture-flow">

                  <span>APPLICATION</span>
                  <b>→</b>
                  <span>SHREE SDK</span>
                  <b>→</b>
                  <span>RUNTIME</span>
                  <b>→</b>
                  <span>KERNELS</span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FUTURE
          ===================================================== */}

      <section className="applications-future">
        <div className="applications-container">

          <div className="applications-future-grid">

            <div>

              <span className="applications-section-label">
                05 · FUTURE APPLICATIONS
              </span>

              <h2>
                The platform
                <br />
                <span>can keep growing.</span>
              </h2>

            </div>

            <div className="applications-future-copy">

              <p>
                As Shree AI OS evolves, new applications can be created on
                top of the same platform foundation.
              </p>

              <p>
                The goal is not to define a fixed collection of applications,
                but to provide infrastructure that makes new intelligent
                software possible.
              </p>

              <div className="applications-future-principle">
                <span />
                PLATFORM → APPLICATIONS → NEW POSSIBILITIES
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="applications-cta">
        <div className="applications-container">

          <div className="applications-cta-card">

            <span>
              SHREE AI OS
            </span>

            <h2>
              Build intelligent
              <br />
              <span>software on the platform.</span>
            </h2>

            <p>
              Explore the platform foundations and understand how
              applications connect to Shree AI OS.
            </p>

            <div className="applications-cta-actions">

              <Link href="/platform">
                Explore Platform
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