"use client";

const roadmapItems = [
  {
    version: "v1.0.6",
    status: "CURRENT",
    title: "Developer Preview & Cognitive Core",
    description:
      "Production-hardened 11-stage cognitive pipeline, Dual-Mode Synthesis, K0.6 domain-isolated knowledge, and 10 verified SDK facades on Java 21 LTS.",
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
    title: "Advanced Autonomous Intelligence",
    description:
      "Dynamic multi-hop reasoning, distributed memory synchronization, pgvector RRF hybrid search expansion, and streaming live agents.",
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
    title: "Autonomous Agent Runtime",
    description:
      "Move toward multi-agent coordination, autonomous goal synthesis, dynamic tool synthesis, and chief review reflection gates.",
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
    title: "Distributed AI Operating System",
    description:
      "Federated cognitive runtime, cluster-wide context distribution, zero-trust cryptographic audit, and heterogeneous LLM orchestration.",
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

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-header">
        <div className="roadmap-eyebrow">
          <span className="roadmap-dot" />
          <span>08 — ROADMAP</span>
        </div>

        <div className="roadmap-intro">
          <h2>
            Build the
            <span> foundation.</span>
            <br />
            Expand the <strong>intelligence.</strong>
          </h2>

          <p>
            Shree AI OS evolves in layers — from platform foundations to
            autonomous intelligence and eventually a complete ecosystem for
            intelligent software.
          </p>
        </div>
      </div>

      <div className="roadmap-line" />

      <div className="roadmap-timeline">
        {roadmapItems.map((item, index) => (
          <article
            className={`roadmap-item ${
              index === 0 ? "roadmap-item-current" : ""
            }`}
            key={item.version}
          >
            <div className="roadmap-marker">
              <span />
            </div>

            <div className="roadmap-version">
              <span>{item.version}</span>
              <small>{item.status}</small>
            </div>

            <div className="roadmap-card">
              <div className="roadmap-card-top">
                <span className="roadmap-card-label">
                  PLATFORM EVOLUTION
                </span>

                <span className="roadmap-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="roadmap-capabilities">
                {item.capabilities.map((capability) => (
                  <span key={capability}>{capability}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="roadmap-footer">
        <span className="roadmap-footer-dot" />

        <span>
          PLATFORM FOUNDATION <b>→</b> INTELLIGENCE <b>→</b> AUTONOMY{" "}
          <b>→</b> ECOSYSTEM
        </span>
      </div>
    </section>
  );
}