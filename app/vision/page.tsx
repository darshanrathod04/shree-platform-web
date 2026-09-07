import Link from "next/link";

const evolutionStages = [
  {
    number: "01",
    stage: "PLATFORM",
    title: "Build the foundation.",
    description:
      "Establish the runtime, platform contracts, and reusable infrastructure required for intelligent software.",
  },
  {
    number: "02",
    stage: "INTELLIGENCE",
    title: "Expand the capabilities.",
    description:
      "Grow memory, reasoning, planning, knowledge, and other intelligence primitives that applications can share.",
  },
  {
    number: "03",
    stage: "AUTONOMY",
    title: "Enable systems to act.",
    description:
      "Move beyond passive intelligence toward controlled systems capable of pursuing goals and coordinating actions.",
  },
  {
    number: "04",
    stage: "ECOSYSTEM",
    title: "Connect intelligent software.",
    description:
      "Create an ecosystem where applications, agents, developers, and platform services can operate together.",
  },
];

const futureDirections = [
  {
    number: "01",
    title: "Intelligent Applications",
    description:
      "Applications that use shared intelligence infrastructure instead of rebuilding core capabilities independently.",
  },
  {
    number: "02",
    title: "Autonomous Systems",
    description:
      "Systems capable of planning, executing, observing outcomes, and adapting within defined boundaries.",
  },
  {
    number: "03",
    title: "Multi-Agent Intelligence",
    description:
      "Specialized intelligent systems collaborating through shared context, communication, and coordination primitives.",
  },
  {
    number: "04",
    title: "Developer Ecosystem",
    description:
      "A platform where developers can create new intelligent software on top of reusable Shree AI OS foundations.",
  },
];

export default function VisionPage() {
  return (
    <main className="vision-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="vision-hero">
        <div className="vision-container">

          <Link href="/" className="vision-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="vision-hero-label">
            <span />
            SHREE AI OS · VISION
          </div>

          <div className="vision-hero-grid">

            <div>
              <span className="vision-hero-number">
                01
              </span>

              <h1>
                A new
                <br />
                <span>foundation for</span>
                <br />
                intelligent
                <br />
                software.
              </h1>
            </div>

            <div className="vision-hero-description">

              <p>
                Shree AI OS envisions a future where intelligence becomes a
                reusable layer of software infrastructure — enabling
                applications and systems to become increasingly capable.
              </p>

              <div className="vision-status">
                <span />
                LONG-TERM VISION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          THE VISION
          ===================================================== */}

      <section className="vision-statement">
        <div className="vision-container">

          <div className="vision-section-label">
            02 · THE VISION
          </div>

          <div className="vision-statement-grid">

            <h2>
              Intelligence
              <br />
              becomes a
              <br />
              <span>platform layer.</span>
            </h2>

            <div className="vision-statement-copy">

              <p>
                The long-term vision for Shree AI OS is not simply to build
                another intelligent application. It is to create a platform
                on which many kinds of intelligent software can exist.
              </p>

              <p>
                As the platform evolves, reusable intelligence can move
                from isolated implementations into shared infrastructure
                that applications, agents, and developers can build upon.
              </p>

              <div className="vision-statement-principle">
                <span />
                INTELLIGENCE AS INFRASTRUCTURE
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EVOLUTION
          ===================================================== */}

      <section className="vision-evolution">
        <div className="vision-container">

          <div className="vision-section-heading">

            <div>
              <span className="vision-section-label">
                03 · THE EVOLUTION
              </span>

              <h2>
                From foundation
                <br />
                <span>to ecosystem.</span>
              </h2>
            </div>

            <p>
              The vision follows a progressive path. Each stage builds on the
              capabilities established by the previous one.
            </p>

          </div>


          <div className="vision-evolution-stack">

            {evolutionStages.map((stage, index) => (
              <article
                className={`vision-evolution-card ${
                  index === 0 ? "vision-evolution-card-current" : ""
                }`}
                key={stage.number}
              >

                <div className="vision-evolution-number">
                  {stage.number}
                </div>

                <div className="vision-evolution-content">

                  <span>
                    {stage.stage}
                  </span>

                  <h3>
                    {stage.title}
                  </h3>

                  <p>
                    {stage.description}
                  </p>

                </div>

                <div className="vision-evolution-marker">
                  <span />
                </div>

                {index < evolutionStages.length - 1 && (
                  <div className="vision-evolution-arrow">
                    ↓
                  </div>
                )}

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          LONG-TERM DIRECTION
          ===================================================== */}

      <section className="vision-direction">
        <div className="vision-container">

          <div className="vision-direction-card">

            <div className="vision-direction-label">
              04 · LONG-TERM DIRECTION
            </div>

            <div className="vision-direction-grid">

              <h2>
                Software that
                <br />
                can understand,
                <br />
                <span>reason, and act.</span>
              </h2>

              <div className="vision-direction-copy">

                <p>
                  The future of intelligent software should extend beyond
                  generating responses. Systems should be able to understand
                  context, reason over information, plan actions, and execute
                  meaningful goals.
                </p>

                <p>
                  Shree AI OS aims to provide the infrastructure required for
                  that progression while keeping applications and developers
                  in control of how those capabilities are used.
                </p>

                <div className="vision-direction-flow">
                  <span>UNDERSTAND</span>
                  <b>→</b>
                  <span>REASON</span>
                  <b>→</b>
                  <span>PLAN</span>
                  <b>→</b>
                  <span>ACT</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FUTURE
          ===================================================== */}

      <section className="vision-future">
        <div className="vision-container">

          <div className="vision-section-heading">

            <div>
              <span className="vision-section-label">
                05 · THE FUTURE
              </span>

              <h2>
                A growing
                <br />
                <span>intelligence ecosystem.</span>
              </h2>
            </div>

            <p>
              The future vision extends beyond a single product toward an
              ecosystem of intelligent applications, autonomous systems, and
              developers.
            </p>

          </div>


          <div className="vision-future-grid">

            {futureDirections.map((direction) => (
              <article
                className="vision-future-card"
                key={direction.number}
              >

                <div className="vision-future-top">

                  <span>
                    {direction.number}
                  </span>

                  <i />

                </div>

                <h3>
                  {direction.title}
                </h3>

                <p>
                  {direction.description}
                </p>

                <span className="vision-future-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          FUTURE PRINCIPLE
          ===================================================== */}

      <section className="vision-principle">
        <div className="vision-container">

          <div className="vision-principle-grid">

            <div>

              <span className="vision-section-label">
                06 · THE PRINCIPLE
              </span>

              <h2>
                Build what
                <br />
                <span>comes next.</span>
              </h2>

            </div>

            <div className="vision-principle-copy">

              <p>
                The vision is intentionally larger than any single release.
                Shree AI OS should provide foundations that remain useful as
                intelligence systems become more capable.
              </p>

              <p>
                The platform evolves, applications evolve, and intelligence
                evolves — but the direction remains focused on making
                intelligent software easier to build and more capable to use.
              </p>

              <div className="vision-principle-line">
                <span />
                <strong>
                  FOUNDATION → INTELLIGENCE → AUTONOMY → ECOSYSTEM
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="vision-cta">
        <div className="vision-container">

          <div className="vision-cta-card">

            <span>
              SHREE AI OS
            </span>

            <h2>
              The vision is
              <br />
              <span>still being built.</span>
            </h2>

            <p>
              Follow the evolution of Shree AI OS from platform foundation to
              intelligent software ecosystem.
            </p>

            <div className="vision-cta-actions">

              <Link href="/roadmap">
                Explore Roadmap
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