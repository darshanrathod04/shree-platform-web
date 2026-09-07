import Link from "next/link";

const platformLayers = [
  {
    number: "01",
    label: "INFRASTRUCTURE",
    title: "The foundation underneath.",
    description:
      "Runtime, platform contracts, execution services, and reusable infrastructure provide the base layer for intelligent software.",
  },
  {
    number: "02",
    label: "INTELLIGENCE",
    title: "Capabilities that can be reused.",
    description:
      "Memory, reasoning, planning, knowledge, and other intelligence primitives can be shared across applications.",
  },
  {
    number: "03",
    label: "APPLICATIONS",
    title: "Software built on the foundation.",
    description:
      "Applications use the platform capabilities while remaining focused on their own domain, users, and experiences.",
  },
];

const differentiators = [
  {
    number: "01",
    title: "Platform-first",
    description:
      "The platform is treated as infrastructure rather than an afterthought around a single application.",
  },
  {
    number: "02",
    title: "Reusable intelligence",
    description:
      "Intelligence capabilities are designed as reusable platform primitives instead of isolated application features.",
  },
  {
    number: "03",
    title: "Explicit architecture",
    description:
      "Clear layers, responsibilities, and contracts make the system easier to understand and evolve.",
  },
  {
    number: "04",
    title: "Developer-focused",
    description:
      "The platform is designed so developers can build applications without needing to recreate the underlying intelligence infrastructure.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="about-hero">
        <div className="about-container">

          <Link href="/" className="about-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="about-hero-label">
            <span />
            SHREE AI OS · ABOUT
          </div>

          <div className="about-hero-grid">

            <div>

              <span className="about-hero-number">
                01
              </span>

              <h1>
                Shree AI OS
                <br />
                <span>is a platform.</span>
              </h1>

            </div>

            <div className="about-hero-description">

              <p>
                A platform for building intelligent software through reusable
                infrastructure, intelligence capabilities, and developer
                interfaces.
              </p>

              <div className="about-status">
                <span />
                PLATFORM FOUNDATION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT IS SHREE AI OS?
          ===================================================== */}

      <section className="about-definition">
        <div className="about-container">

          <div className="about-section-label">
            02 · WHAT IS SHREE AI OS?
          </div>

          <div className="about-definition-grid">

            <h2>
              Intelligence
              <br />
              should not
              <br />
              <span>start from zero.</span>
            </h2>

            <div className="about-definition-copy">

              <p>
                Shree AI OS is designed as a foundation for intelligent
                software. Instead of every application rebuilding its own
                memory, reasoning, planning, context, and execution
                infrastructure, the platform provides reusable foundations.
              </p>

              <p>
                Applications can then focus on their domain while consuming
                capabilities provided by the underlying platform.
              </p>

              <div className="about-definition-principle">
                <span />
                BUILD ONCE · REUSE ACROSS APPLICATIONS
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PLATFORM IDEA
          ===================================================== */}

      <section className="about-platform">
        <div className="about-container">

          <div className="about-section-heading">

            <div>

              <span className="about-section-label">
                03 · THE PLATFORM IDEA
              </span>

              <h2>
                Three layers.
                <br />
                <span>One foundation.</span>
              </h2>

            </div>

            <p>
              Shree AI OS connects infrastructure, intelligence, and
              applications through a common platform foundation.
            </p>

          </div>


          <div className="about-platform-grid">

            {platformLayers.map((layer) => (
              <article
                className="about-platform-card"
                key={layer.number}
              >

                <div className="about-platform-top">

                  <span>
                    {layer.number}
                  </span>

                  <i />

                </div>

                <div className="about-platform-body">

                  <span>
                    {layer.label}
                  </span>

                  <h3>
                    {layer.title}
                  </h3>

                  <p>
                    {layer.description}
                  </p>

                </div>

                <div className="about-platform-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT MAKES IT DIFFERENT
          ===================================================== */}

      <section className="about-difference">
        <div className="about-container">

          <div className="about-section-heading">

            <div>

              <span className="about-section-label">
                04 · WHAT MAKES IT DIFFERENT
              </span>

              <h2>
                Built around
                <br />
                <span>the platform.</span>
              </h2>

            </div>

            <p>
              The approach focuses on reusable foundations rather than
              coupling intelligence directly to individual applications.
            </p>

          </div>


          <div className="about-difference-list">

            {differentiators.map((item) => (
              <article
                className="about-difference-card"
                key={item.number}
              >

                <div className="about-difference-number">
                  {item.number}
                </div>

                <div className="about-difference-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                </div>

                <span className="about-difference-arrow">
                  →
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          THE SHREE APPROACH
          ===================================================== */}

      <section className="about-approach">
        <div className="about-container">

          <div className="about-approach-card">

            <span className="about-approach-label">
              05 · THE SHREE APPROACH
            </span>

            <div className="about-approach-grid">

              <h2>
                Build the
                <br />
                system
                <br />
                <span>before the scale.</span>
              </h2>

              <div className="about-approach-copy">

                <p>
                  Shree AI OS follows a platform-first approach: establish
                  reliable foundations, expose reusable capabilities, and
                  allow applications to grow on top of them.
                </p>

                <p>
                  This keeps the architecture focused on long-term
                  extensibility instead of optimizing only for a single
                  application or use case.
                </p>

                <div className="about-approach-flow">

                  <span>FOUNDATION</span>
                  <b>→</b>
                  <span>CAPABILITIES</span>
                  <b>→</b>
                  <span>APPLICATIONS</span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          IDENTITY
          ===================================================== */}

      <section className="about-identity">
        <div className="about-container">

          <div className="about-identity-grid">

            <div>

              <span className="about-section-label">
                06 · IDENTITY
              </span>

              <h2>
                One platform.
                <br />
                <span>Many possibilities.</span>
              </h2>

            </div>

            <div className="about-identity-copy">

              <p>
                Shree AI OS is intended to become a common foundation for
                different kinds of intelligent software.
              </p>

              <p>
                The platform identity remains consistent while applications
                built on top of it can develop their own purpose, experience,
                and identity.
              </p>

              <div className="about-identity-line">
                <span />
                SHREE AI OS → INTELLIGENT SOFTWARE
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="about-cta">
        <div className="about-container">

          <div className="about-cta-card">

            <span>
              SHREE AI OS
            </span>

            <h2>
              Understand the platform.
              <br />
              <span>Then explore what it enables.</span>
            </h2>

            <p>
              Explore the architecture, mission, and applications built
              around the Shree AI OS foundation.
            </p>

            <div className="about-cta-actions">

              <Link href="/architecture">
                Explore Architecture
                <span>↗</span>
              </Link>

              <Link href="/mission">
                Read the Mission
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}