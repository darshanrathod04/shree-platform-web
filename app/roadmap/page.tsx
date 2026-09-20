import Link from "next/link";

const roadmapStages = [
  {
    version: "v1.0.6",
    status: "CURRENT",
    number: "01",
    title: "Developer Preview & Cognitive Core",
    description:
      "Establish the hardened 11-stage cognitive pipeline, Dual-Mode Synthesis, K0.6 domain-isolated knowledge, and 10 verified SDK facades on Java 21 LTS.",
    capabilities: [
      "11-Stage Pipeline",
      "Dual-Mode Synthesis",
      "10 Verified SDKs",
      "Fail-Closed Security",
    ],
  },
  {
    version: "v1.1",
    status: "NEXT",
    number: "02",
    title: "Advanced Autonomous Intelligence",
    description:
      "Expand the platform with dynamic multi-hop reasoning, distributed memory synchronization, pgvector RRF hybrid search, and streaming agents.",
    capabilities: [
      "Multi-Hop Reasoning",
      "Distributed Memory",
      "pgvector RRF Search",
      "Live Streaming Agents",
    ],
  },
  {
    version: "v2.0",
    status: "PLANNED",
    number: "03",
    title: "Autonomous Agent Runtime",
    description:
      "Move toward multi-agent coordination, autonomous goal synthesis, dynamic tool synthesis, and reflection gates.",
    capabilities: [
      "Multi-Agent Swarms",
      "Goal Decomposition",
      "Tool Synthesis",
      "Automated Reflection",
    ],
  },
  {
    version: "v2.x",
    status: "PLANNED",
    number: "04",
    title: "Distributed AI Operating System",
    description:
      "Enable distributed cognitive runtime, cluster-wide context distribution, zero-trust cryptographic audit, and heterogeneous LLM orchestration.",
    capabilities: [
      "Federated Runtime",
      "Cluster Memory Sync",
      "Cryptographic Audits",
      "Model Auto-Sharding",
    ],
  },
  {
    version: "FUTURE",
    status: "VISION",
    number: "05",
    title: "AI Operating Ecosystem",
    description:
      "Evolve Shree AI OS into a planetary-scale operating ecosystem connecting intelligent applications, autonomous swarms, developers, and hardware.",
    capabilities: [
      "Intelligent Applications",
      "Autonomous Swarms",
      "Developer Platform",
      "Cognitive Hardware Mesh",
    ],
  },
];

const expansionAreas = [
  {
    number: "01",
    title: "Intelligence",
    description:
      "Deeper memory, reasoning, knowledge, and planning capabilities become reusable platform primitives.",
  },
  {
    number: "02",
    title: "Autonomy",
    description:
      "The platform progresses from providing intelligence toward executing goals and coordinating controlled workflows.",
  },
  {
    number: "03",
    title: "Coordination",
    description:
      "Specialized agents and intelligent systems gain the infrastructure required to communicate and work together.",
  },
  {
    number: "04",
    title: "Ecosystem",
    description:
      "Applications, developers, agents, and platform services eventually operate together across a shared intelligence foundation.",
  },
];

export default function RoadmapPage() {
  return (
    <main className="roadmap-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="roadmap-hero">
        <div className="roadmap-container">

          <Link href="/" className="roadmap-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="roadmap-hero-label">
            <span />
            SHREE AI OS · ROADMAP
          </div>

          <div className="roadmap-hero-grid">

            <div>
              <span className="roadmap-hero-number">
                01
              </span>

              <h1>
                From
                <br />
                <span>foundation</span>
                <br />
                to
                <br />
                ecosystem.
              </h1>
            </div>

            <div className="roadmap-hero-description">

              <p>
                Shree AI OS evolves progressively — establishing the
                platform foundation first, then expanding intelligence,
                autonomy, coordination, and eventually the broader ecosystem.
              </p>

              <div className="roadmap-status">
                <span />
                v1.0.6 · PLATFORM EVOLUTION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CURRENT STATE
          ===================================================== */}

      <section className="roadmap-current">
        <div className="roadmap-container">

          <div className="roadmap-section-label">
            02 · CURRENT STATE
          </div>

          <div className="roadmap-current-grid">

            <div>

              <span className="roadmap-current-version">
                v1.0.6
              </span>

              <h2>
                Platform
                <br />
                <span>Foundation.</span>
              </h2>

            </div>

            <div className="roadmap-current-copy">

              <div className="roadmap-current-status">
                <span />
                CURRENT
              </div>

              <p>
                The v1.0.6 developer preview establishes the hardened 11-stage cognitive
                execution pipeline, dual-mode synthesis, fail-closed security gate, and 10
                verified SDK facades on Java 21 LTS.
              </p>

              <div className="roadmap-current-line">
                <span />
                v1.0.6 · DEVELOPER PREVIEW
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          EVOLUTION TIMELINE
          ===================================================== */}

      <section className="roadmap-timeline-section">
        <div className="roadmap-container">

          <div className="roadmap-section-heading">

            <div>
              <span className="roadmap-section-label">
                03 · EVOLUTION TIMELINE
              </span>

              <h2>
                One platform.
                <br />
                <span>Multiple stages.</span>
              </h2>
            </div>

            <p>
              Each roadmap stage expands what the platform can provide while
              preserving the underlying architectural direction.
            </p>

          </div>


          <div className="roadmap-stage-list">

            {roadmapStages.map((stage, index) => (
              <article
                className={`roadmap-stage-card ${
                  index === 0 ? "roadmap-stage-current" : ""
                }`}
                key={stage.version}
              >

                <div className="roadmap-stage-marker">
                  <span />
                </div>

                <div className="roadmap-stage-version">
                  <strong>
                    {stage.version}
                  </strong>

                  <small>
                    {stage.status}
                  </small>
                </div>

                <div className="roadmap-stage-main">

                  <div className="roadmap-stage-top">

                    <span>
                      PLATFORM EVOLUTION
                    </span>

                    <b>
                      {stage.number}
                    </b>

                  </div>

                  <h3>
                    {stage.title}
                  </h3>

                  <p>
                    {stage.description}
                  </p>

                  <div className="roadmap-stage-capabilities">

                    {stage.capabilities.map((capability) => (
                      <span key={capability}>
                        {capability}
                      </span>
                    ))}

                  </div>

                </div>

              </article>
            ))}

          </div>


          <div className="roadmap-flow">

            <span>FOUNDATION</span>
            <b>→</b>
            <span>INTELLIGENCE</span>
            <b>→</b>
            <span>AUTONOMY</span>
            <b>→</b>
            <span>ECOSYSTEM</span>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT CHANGES
          ===================================================== */}

      <section className="roadmap-expansion">
        <div className="roadmap-container">

          <div className="roadmap-section-heading">

            <div>
              <span className="roadmap-section-label">
                04 · WHAT CHANGES
              </span>

              <h2>
                The platform
                <br />
                <span>keeps expanding.</span>
              </h2>
            </div>

            <p>
              Roadmap progression is not only about new versions. Each stage
              increases the range of intelligence and coordination the
              platform can support.
            </p>

          </div>


          <div className="roadmap-expansion-grid">

            {expansionAreas.map((area) => (
              <article
                className="roadmap-expansion-card"
                key={area.number}
              >

                <div className="roadmap-expansion-top">

                  <span>
                    {area.number}
                  </span>

                  <i />

                </div>

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.description}
                </p>

                <span className="roadmap-expansion-arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          LONG-TERM DIRECTION
          ===================================================== */}

      <section className="roadmap-direction">
        <div className="roadmap-container">

          <div className="roadmap-direction-card">

            <span className="roadmap-direction-label">
              05 · LONG-TERM DIRECTION
            </span>

            <div className="roadmap-direction-grid">

              <h2>
                Build the
                <br />
                foundation.
                <br />
                <span>Expand the intelligence.</span>
              </h2>

              <div className="roadmap-direction-copy">

                <p>
                  The roadmap is designed as an evolution rather than a
                  collection of disconnected releases.
                </p>

                <p>
                  Every stage should strengthen the platform underneath the
                  applications built on top of it.
                </p>

                <div className="roadmap-direction-principle">
                  <span />
                  PLATFORM FIRST · INTELLIGENCE ALWAYS
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
          ===================================================== */}

      <section className="roadmap-cta">
        <div className="roadmap-container">

          <div className="roadmap-cta-card">

            <span>
              SHREE AI OS
            </span>

            <h2>
              The roadmap
              <br />
              <span>starts with architecture.</span>
            </h2>

            <p>
              Understand the technical foundations that make the evolution
              of Shree AI OS possible.
            </p>

            <div className="roadmap-cta-actions">

              <Link href="/architecture">
                Explore Architecture
                <span>↗</span>
              </Link>

              <Link href="/vision">
                Explore Vision
              </Link>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}