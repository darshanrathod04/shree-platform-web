import Link from "next/link";

const capabilities = [
  {
    number: "01",
    title: "Project Memory",
    description:
      "Maintain project context, decisions, knowledge, and important information across the lifecycle.",
  },
  {
    number: "02",
    title: "Intelligent Planning",
    description:
      "Break complex objectives into structured plans, tasks, milestones, and actionable steps.",
  },
  {
    number: "03",
    title: "Reasoning",
    description:
      "Use platform intelligence to analyze context, evaluate problems, and support better decisions.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Connect planning and intelligence with the runtime capabilities required to move work forward.",
  },
];

export default function ProjectIntelligencePage() {
  return (
    <main className="application-detail-page">

      {/* Back */}
      <div className="application-detail-container">
        <Link
          href="/#applications"
          className="application-back"
        >
          <span>←</span>
          Back to Applications
        </Link>
      </div>

      {/* Hero */}
      <section className="application-detail-hero">
        <div className="application-detail-container">

          <div className="application-detail-label">
            <span />
            SHREE AI OS · APPLICATION
          </div>

          <div className="application-detail-grid">

            <div>
              <div className="application-detail-number">
                01
              </div>

              <h1>
                Shree Project
                <span> Intelligence.</span>
              </h1>
            </div>

            <div className="application-detail-intro">
              <p>
                An intelligent project workspace built on Shree AI OS for
                understanding projects, maintaining context, planning work,
                reasoning through problems, and coordinating execution.
              </p>

              <div className="application-detail-status">
                <span />
                ACTIVE DEVELOPMENT
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Intelligence Visualization */}
      <section className="application-system-section">
        <div className="application-detail-container">

          <div className="application-system-card">

            <div className="application-system-header">
              <div>
                <span>APPLICATION ARCHITECTURE</span>
                <h2>
                  Intelligence around
                  <br />
                  the project.
                </h2>
              </div>

              <span className="application-system-version">
                V1 FOUNDATION
              </span>
            </div>

            <div className="application-system-visual">

              <div className="system-orbit orbit-one" />
              <div className="system-orbit orbit-two" />
              <div className="system-orbit orbit-three" />

              <div className="system-core">
                <div className="system-core-inner">
                  S
                </div>

                <span>PROJECT</span>
              </div>

              <div className="system-node node-memory">
                <span />
                Memory
              </div>

              <div className="system-node node-planning">
                <span />
                Planning
              </div>

              <div className="system-node node-reasoning">
                <span />
                Reasoning
              </div>

              <div className="system-node node-execution">
                <span />
                Execution
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="application-capabilities-section">
        <div className="application-detail-container">

          <div className="application-capabilities-heading">
            <span>CAPABILITIES</span>

            <h2>
              One workspace.
              <br />
              Multiple layers of intelligence.
            </h2>
          </div>

          <div className="application-capabilities-grid">

            {capabilities.map((capability) => (
              <article
                className="application-capability-card"
                key={capability.number}
              >
                <span className="application-capability-number">
                  {capability.number}
                </span>

                <div>
                  <h3>{capability.title}</h3>

                  <p>{capability.description}</p>
                </div>

                <span className="application-capability-arrow">
                  ↗
                </span>
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* Platform relationship */}
      <section className="application-platform-section">
        <div className="application-detail-container">

          <div className="application-platform-card">

            <div>
              <span>BUILT ON SHREE AI OS</span>

              <h2>
                The application uses
                <br />
                the platform.
              </h2>
            </div>

            <p>
              Shree Project Intelligence is not an isolated AI application.
              It consumes platform capabilities through defined interfaces,
              allowing intelligence infrastructure to remain reusable across
              future applications.
            </p>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="application-detail-cta">
        <div className="application-detail-container">

          <span>SHREE AI OS</span>

          <h2>
            Build intelligence
            <br />
            into software.
          </h2>

          <Link href="/#applications">
            Explore Applications
            <span>↗</span>
          </Link>

        </div>
      </section>

    </main>
  );
}