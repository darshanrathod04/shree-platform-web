import Link from "next/link";

const researchAreas = [
  {
    number: "01",
    label: "COGNITIVE SYSTEMS",
    title: "Reasoning & Decision Intelligence",
    description:
      "Exploring structured reasoning, decision systems, planning, reflection, and the foundations required for reliable intelligent software.",
    status: "ACTIVE RESEARCH",
  },
  {
    number: "02",
    label: "MEMORY SYSTEMS",
    title: "Memory & Context",
    description:
      "Researching how intelligent systems can retain context, form knowledge, recall relevant information, and build persistent understanding.",
    status: "EXPLORING",
  },
  {
    number: "03",
    label: "AGENT SYSTEMS",
    title: "Autonomous Intelligence",
    description:
      "Investigating agents, orchestration, goal execution, tool use, and controlled autonomy across intelligent software systems.",
    status: "IN DEVELOPMENT",
  },
];

export default function ResearchPage() {
  return (
    <main className="research-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="research-page-hero">
        <div className="research-page-container">

          <Link href="/" className="research-page-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="research-page-label">
            <span />
            SHREE AI OS · RESEARCH
          </div>

          <div className="research-page-hero-grid">

            <div>

              <span className="research-page-number">
                01
              </span>

              <h1>
                Intelligence
                <br />
                <span>is still being</span>
                <br />
                engineered.
              </h1>

            </div>

            <div className="research-page-hero-description">

              <p>
                Shree AI OS research explores the systems, architectures,
                and intelligence primitives required to build the next
                generation of intelligent software.
              </p>

              <div className="research-page-status">
                <span />
                ACTIVE RESEARCH DIRECTION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH PHILOSOPHY
          ===================================================== */}

      <section className="research-page-philosophy">
        <div className="research-page-container">

          <span className="research-page-section-label">
            02 · RESEARCH PHILOSOPHY
          </span>

          <div className="research-page-philosophy-grid">

            <h2>
              Intelligence
              <br />
              is a system,
              <br />
              <span>not simply a model.</span>
            </h2>

            <div className="research-page-philosophy-copy">

              <p>
                Shree research focuses on the systems surrounding
                intelligence — memory, reasoning, planning, knowledge,
                context, agents, execution, and reflection.
              </p>

              <p>
                The objective is to understand how these capabilities can
                work together as reliable and reusable platform primitives.
              </p>

              <div className="research-page-principle">
                <span />
                UNDERSTAND → ENGINEER → INTEGRATE
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH AREAS
          ===================================================== */}

      <section className="research-page-areas">
        <div className="research-page-container">

          <div className="research-page-section-heading">

            <div>

              <span className="research-page-section-label">
                03 · RESEARCH AREAS
              </span>

              <h2>
                Explore the
                <br />
                <span>intelligence layer.</span>
              </h2>

            </div>

            <p>
              Research is organized around the core systems required to
              create intelligent software that can understand, remember,
              reason, and act.
            </p>

          </div>


          <div className="research-page-area-list">

            {researchAreas.map((area) => (
              <article
                className="research-page-area-card"
                key={area.number}
              >

                <div className="research-page-area-top">

                  <span className="research-page-area-number">
                    {area.number}
                  </span>

                  <span className="research-page-area-status">
                    <span />
                    {area.status}
                  </span>

                </div>


                <div className="research-page-area-body">

                  <span className="research-page-area-label">
                    {area.label}
                  </span>

                  <h3>
                    {area.title}
                  </h3>

                  <p>
                    {area.description}
                  </p>

                </div>


                <div className="research-page-area-arrow">
                  ↗
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH → PLATFORM
          ===================================================== */}

      <section className="research-page-flow">
        <div className="research-page-container">

          <div className="research-page-flow-card">

            <span className="research-page-flow-label">
              04 · FROM RESEARCH TO PLATFORM
            </span>

            <div className="research-page-flow-grid">

              <h2>
                Research should
                <br />
                become
                <br />
                <span>infrastructure.</span>
              </h2>

              <div className="research-page-flow-copy">

                <p>
                  Research inside Shree AI OS is not isolated from the
                  platform. New ideas and capabilities should eventually
                  become reusable infrastructure.
                </p>

                <p>
                  Those platform capabilities can then power applications
                  built on top of the system.
                </p>

                <div className="research-page-flow-chain">

                  <span>RESEARCH</span>
                  <b>→</b>
                  <span>PLATFORM</span>
                  <b>→</b>
                  <span>APPLICATIONS</span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CURRENT DIRECTION
          ===================================================== */}

      <section className="research-page-direction">
        <div className="research-page-container">

          <div className="research-page-direction-grid">

            <div>

              <span className="research-page-section-label">
                05 · CURRENT DIRECTION
              </span>

              <h2>
                Engineering
                <br />
                <span>the intelligence foundation.</span>
              </h2>

            </div>

            <div className="research-page-direction-copy">

              <p>
                Current research is focused on strengthening the intelligence
                foundations that applications can consume through Shree AI OS.
              </p>

              <p>
                This includes deeper memory and context systems, structured
                reasoning, planning, knowledge, autonomous execution, and
                coordinated intelligent systems.
              </p>

              <div className="research-page-direction-status">
                <span />
                RESEARCH → PLATFORM EVOLUTION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="research-page-cta">
        <div className="research-page-container">

          <div className="research-page-cta-card">

            <span>
              SHREE AI OS RESEARCH
            </span>

            <h2>
              Explore the systems
              <br />
              <span>behind intelligent software.</span>
            </h2>

            <p>
              Understand the platform architecture and explore the
              applications built on top of the Shree AI OS foundation.
            </p>

            <div className="research-page-cta-actions">

              <Link href="/architecture">
                Explore Architecture
                <span>↗</span>
              </Link>

              <Link href="/applications">
                Explore Applications
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}