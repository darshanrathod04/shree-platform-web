import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Intelligence as Infrastructure",
    description:
      "Intelligence capabilities should be treated as reusable platform infrastructure rather than rebuilt independently inside every application.",
  },
  {
    number: "02",
    title: "Explicit Architecture",
    description:
      "Platform responsibilities, runtime behavior, intelligence capabilities, and application concerns should remain clearly defined and intentionally separated.",
  },
  {
    number: "03",
    title: "Human Control",
    description:
      "Autonomous capabilities should operate within explicit boundaries, with meaningful control remaining with the people and systems using the platform.",
  },
  {
    number: "04",
    title: "Modular Intelligence",
    description:
      "Memory, reasoning, planning, knowledge, execution, and other intelligence capabilities should evolve as composable platform primitives.",
  },
  {
    number: "05",
    title: "Privacy & Ownership",
    description:
      "The platform should be designed around responsible handling of application and user context, with clear ownership and control of information.",
  },
  {
    number: "06",
    title: "Continuous Evolution",
    description:
      "The implementation can evolve over time while the foundational principles provide a stable direction for the platform.",
  },
];

const boundaries = [
  {
    number: "01",
    layer: "APPLICATION",
    title: "What developers build",
    description:
      "Applications own their domain, product experience, workflows, and user-facing behavior.",
  },
  {
    number: "02",
    layer: "RUNTIME",
    title: "What the platform coordinates",
    description:
      "The runtime provides the environment and coordination layer connecting applications with platform capabilities.",
  },
  {
    number: "03",
    layer: "INTELLIGENCE",
    title: "What the platform provides",
    description:
      "Reusable intelligence foundations provide capabilities that applications can consume without rebuilding the underlying infrastructure.",
  },
];

const commitments = [
  "Clear platform boundaries",
  "Reusable intelligence infrastructure",
  "Developer-oriented interfaces",
  "Controlled autonomy",
  "Long-term architectural evolution",
];

export default function ConstitutionPage() {
  return (
    <main className="constitution-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="constitution-hero">
        <div className="constitution-container">

          <Link href="/" className="constitution-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="constitution-hero-label">
            <span />
            SHREE AI OS · CONSTITUTION
          </div>

          <div className="constitution-hero-grid">

            <div>
              <span className="constitution-hero-number">
                01
              </span>

              <h1>
                Principles
                <br />
                <span>before implementation.</span>
              </h1>
            </div>

            <div className="constitution-hero-description">

              <p>
                The Shree AI OS Constitution defines the foundational
                principles that guide the architecture, development, and
                evolution of the platform.
              </p>

              <div className="constitution-status">
                <span />
                PLATFORM FOUNDATION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FOUNDATION
          ===================================================== */}

      <section className="constitution-foundation">
        <div className="constitution-container">

          <div className="constitution-section-label">
            02 · FOUNDATION
          </div>

          <div className="constitution-foundation-grid">

            <h2>
              A platform needs
              <br />
              <span>more than code.</span>
            </h2>

            <div>
              <p>
                Shree AI OS is intended to evolve across multiple layers,
                applications, intelligence systems, and developer
                experiences.
              </p>

              <p>
                The Constitution provides a stable set of principles for
                making architectural and product decisions as those systems
                evolve.
              </p>
            </div>

          </div>

          <div className="constitution-foundation-statement">

            <span>THE PURPOSE</span>

            <h3>
              Preserve the direction
              <br />
              while the system evolves.
            </h3>

            <p>
              Technology, models, runtimes, and implementation details may
              change. The principles guiding the platform should remain
              understandable and deliberate.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORE PRINCIPLES
          ===================================================== */}

      <section className="constitution-principles">
        <div className="constitution-container">

          <div className="constitution-section-heading">

            <div>
              <span className="constitution-section-label">
                03 · CORE PRINCIPLES
              </span>

              <h2>
                The rules
                <br />
                <span>that guide the system.</span>
              </h2>
            </div>

            <p>
              These principles establish the architectural direction of
              Shree AI OS and provide a common reference for future platform
              decisions.
            </p>

          </div>

          <div className="constitution-principle-grid">

            {principles.map((principle) => (
              <article
                className="constitution-principle-card"
                key={principle.number}
              >

                <div className="constitution-principle-top">
                  <span>
                    {principle.number}
                  </span>

                  <i />
                </div>

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
          PLATFORM BOUNDARIES
          ===================================================== */}

      <section className="constitution-boundaries">
        <div className="constitution-container">

          <div className="constitution-section-heading">

            <div>
              <span className="constitution-section-label">
                04 · PLATFORM BOUNDARIES
              </span>

              <h2>
                Clear layers.
                <br />
                <span>Clear responsibilities.</span>
              </h2>
            </div>

            <p>
              The platform separates application concerns from runtime
              coordination and reusable intelligence infrastructure.
            </p>

          </div>

          <div className="constitution-boundary-stack">

            {boundaries.map((boundary, index) => (
              <article
                className="constitution-boundary-card"
                key={boundary.number}
              >

                <div className="constitution-boundary-number">
                  {boundary.number}
                </div>

                <div className="constitution-boundary-content">

                  <span>
                    {boundary.layer}
                  </span>

                  <h3>
                    {boundary.title}
                  </h3>

                  <p>
                    {boundary.description}
                  </p>

                </div>

                <div className="constitution-boundary-marker">
                  <span />
                </div>

                {index < boundaries.length - 1 && (
                  <div className="constitution-boundary-connector">
                    ↓
                  </div>
                )}

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          COMMITMENTS
          ===================================================== */}

      <section className="constitution-commitments">
        <div className="constitution-container">

          <div className="constitution-commitments-card">

            <div className="constitution-commitments-heading">

              <span>
                05 · PLATFORM COMMITMENTS
              </span>

              <h2>
                Build deliberately.
                <br />
                <span>Evolve responsibly.</span>
              </h2>

            </div>

            <div className="constitution-commitment-list">

              {commitments.map((commitment, index) => (
                <div
                  className="constitution-commitment"
                  key={commitment}
                >

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>
                    {commitment}
                  </strong>

                  <b>
                    →
                  </b>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EVOLUTION
          ===================================================== */}

      <section className="constitution-evolution">
        <div className="constitution-container">

          <div className="constitution-evolution-grid">

            <div>
              <span className="constitution-section-label">
                06 · EVOLUTION
              </span>

              <h2>
                Stable principles.
                <br />
                <span>Evolving implementation.</span>
              </h2>
            </div>

            <div className="constitution-evolution-copy">

              <p>
                Shree AI OS will evolve as new intelligence techniques,
                runtimes, developer interfaces, and applications are
                developed.
              </p>

              <p>
                The Constitution does not prevent that evolution. It provides
                the architectural direction against which that evolution can
                be evaluated.
              </p>

              <div className="constitution-evolution-line">
                <span />
                <strong>
                  PRINCIPLES → ARCHITECTURE → IMPLEMENTATION
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="constitution-cta">
        <div className="constitution-container">

          <div className="constitution-cta-card">

            <span>
              SHREE AI OS
            </span>

            <h2>
              Principles define
              <br />
              <span>the foundation.</span>
            </h2>

            <p>
              Explore the architecture and understand how these principles
              translate into the Shree AI OS platform.
            </p>

            <div className="constitution-cta-actions">

              <Link href="/architecture">
                Explore Architecture
                <span>↗</span>
              </Link>

              <Link href="/developers">
                Developer Platform
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}