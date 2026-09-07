import Link from "next/link";

const buildingBlocks = [
  {
    number: "01",
    label: "PLATFORM FOUNDATION",
    title: "Build the system underneath.",
    description:
      "Create the runtime, platform contracts, and reusable infrastructure required to support intelligent software.",
  },
  {
    number: "02",
    label: "INTELLIGENCE INFRASTRUCTURE",
    title: "Make intelligence reusable.",
    description:
      "Develop shared foundations for memory, reasoning, planning, knowledge, and other intelligence capabilities.",
  },
  {
    number: "03",
    label: "DEVELOPER PLATFORM",
    title: "Give developers the foundation.",
    description:
      "Provide clear interfaces and reusable capabilities so developers can build intelligent applications without rebuilding the platform.",
  },
  {
    number: "04",
    label: "INTELLIGENT APPLICATIONS",
    title: "Turn infrastructure into software.",
    description:
      "Use the platform foundations to create focused applications that solve real problems through reusable intelligence.",
  },
];

const missionPrinciples = [
  {
    number: "01",
    title: "Build the foundation first.",
    description:
      "Strong intelligent applications require reliable infrastructure underneath them.",
  },
  {
    number: "02",
    title: "Separate intelligence from applications.",
    description:
      "Applications should focus on their domain while the platform provides reusable intelligence capabilities.",
  },
  {
    number: "03",
    title: "Design for evolution.",
    description:
      "The architecture should make it possible to improve the platform without rebuilding everything around it.",
  },
  {
    number: "04",
    title: "Keep intelligence useful.",
    description:
      "The goal is not intelligence for its own sake, but systems that help people and software accomplish meaningful work.",
  },
];

export default function MissionPage() {
  return (
    <main className="mission-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="mission-hero">
        <div className="mission-container">

          <Link href="/" className="mission-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="mission-hero-label">
            <span />
            SHREE AI OS · MISSION
          </div>

          <div className="mission-hero-grid">

            <div>
              <span className="mission-hero-number">
                01
              </span>

              <h1>
                Building
                <br />
                <span>intelligence as</span>
                <br />
                a platform.
              </h1>
            </div>

            <div className="mission-hero-description">

              <p>
                Shree AI OS exists to provide the foundations for building
                intelligent software — from reusable intelligence
                infrastructure to developer-facing platform capabilities.
              </p>

              <div className="mission-status">
                <span />
                PLATFORM MISSION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          THE MISSION
          ===================================================== */}

      <section className="mission-statement">
        <div className="mission-container">

          <div className="mission-section-label">
            02 · THE MISSION
          </div>

          <div className="mission-statement-grid">

            <h2>
              Make intelligent
              <br />
              software
              <br />
              <span>easier to build.</span>
            </h2>

            <div className="mission-statement-copy">

              <p>
                Today, intelligent applications often rebuild similar
                infrastructure independently — memory, reasoning, planning,
                context, execution, and orchestration.
              </p>

              <p>
                Shree AI OS aims to provide these foundations as a reusable
                platform so developers can focus on what their applications
                are actually meant to accomplish.
              </p>

              <div className="mission-statement-principle">
                <span />
                PLATFORM → INTELLIGENCE → APPLICATIONS
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE ARE BUILDING
          ===================================================== */}

      <section className="mission-building">
        <div className="mission-container">

          <div className="mission-section-heading">

            <div>
              <span className="mission-section-label">
                03 · WHAT WE ARE BUILDING
              </span>

              <h2>
                Four layers.
                <br />
                <span>One direction.</span>
              </h2>
            </div>

            <p>
              The mission is expressed through a platform that connects
              infrastructure, intelligence, developers, and applications
              into one evolving system.
            </p>

          </div>


          <div className="mission-building-grid">

            {buildingBlocks.map((block) => (
              <article
                className="mission-building-card"
                key={block.number}
              >

                <div className="mission-building-top">

                  <span>
                    {block.number}
                  </span>

                  <i />

                </div>

                <div className="mission-building-body">

                  <span>
                    {block.label}
                  </span>

                  <h3>
                    {block.title}
                  </h3>

                  <p>
                    {block.description}
                  </p>

                </div>

                <div className="mission-building-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY IT MATTERS
          ===================================================== */}

      <section className="mission-why">
        <div className="mission-container">

          <div className="mission-why-card">

            <div className="mission-why-label">
              04 · WHY IT MATTERS
            </div>

            <div className="mission-why-grid">

              <h2>
                Intelligence should
                <br />
                become
                <br />
                <span>infrastructure.</span>
              </h2>

              <div className="mission-why-copy">

                <p>
                  As intelligent software becomes more capable, the
                  infrastructure supporting it becomes increasingly
                  important.
                </p>

                <p>
                  A platform approach makes intelligence composable,
                  reusable, and easier to evolve across different products
                  and use cases.
                </p>

                <div className="mission-why-flow">

                  <span>FOUNDATION</span>
                  <b>→</b>
                  <span>CAPABILITY</span>
                  <b>→</b>
                  <span>APPLICATION</span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION PRINCIPLES
          ===================================================== */}

      <section className="mission-principles">
        <div className="mission-container">

          <div className="mission-section-heading">

            <div>
              <span className="mission-section-label">
                05 · MISSION PRINCIPLES
              </span>

              <h2>
                How we
                <br />
                <span>build.</span>
              </h2>
            </div>

            <p>
              These principles keep the mission focused while the platform
              grows through new capabilities, applications, and technical
              implementations.
            </p>

          </div>


          <div className="mission-principle-list">

            {missionPrinciples.map((principle) => (
              <article
                className="mission-principle-card"
                key={principle.number}
              >

                <div className="mission-principle-number">
                  {principle.number}
                </div>

                <div className="mission-principle-content">

                  <h3>
                    {principle.title}
                  </h3>

                  <p>
                    {principle.description}
                  </p>

                </div>

                <span className="mission-principle-arrow">
                  →
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION DIRECTION
          ===================================================== */}

      <section className="mission-direction">
        <div className="mission-container">

          <div className="mission-direction-grid">

            <div>

              <span className="mission-section-label">
                06 · DIRECTION
              </span>

              <h2>
                From
                <br />
                infrastructure
                <br />
                <span>to impact.</span>
              </h2>

            </div>

            <div className="mission-direction-copy">

              <p>
                Shree AI OS begins with platform foundations. Those
                foundations become intelligence capabilities, which then
                enable applications designed around real problems.
              </p>

              <p>
                The mission is complete only when the underlying technology
                becomes useful software.
              </p>

              <div className="mission-direction-line">
                <span />
                <strong>
                  PLATFORM → INTELLIGENCE → SOFTWARE → IMPACT
                </strong>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="mission-cta">
        <div className="mission-container">

          <div className="mission-cta-card">

            <span>
              SHREE AI OS
            </span>

            <h2>
              Build the foundation.
              <br />
              <span>Expand the intelligence.</span>
            </h2>

            <p>
              Understand the vision behind Shree AI OS and the direction in
              which the platform is evolving.
            </p>

            <div className="mission-cta-actions">

              <Link href="/vision">
                Explore Vision
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