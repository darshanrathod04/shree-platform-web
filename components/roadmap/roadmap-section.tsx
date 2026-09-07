"use client";

const roadmapItems = [
  {
    version: "V1",
    status: "CURRENT",
    title: "Platform Foundation",
    description:
      "Establish the core runtime, platform contracts, reusable intelligence infrastructure, and developer foundations of Shree AI OS.",
    capabilities: [
      "Platform Core",
      "Runtime",
      "Intelligence Kernels",
      "Application Interfaces",
    ],
  },
  {
    version: "V1.x",
    status: "NEXT",
    title: "Intelligence Expansion",
    description:
      "Expand the platform with deeper memory, reasoning, knowledge, planning, and intelligence capabilities that applications can consume.",
    capabilities: [
      "Advanced Memory",
      "Reasoning Systems",
      "Knowledge Layer",
      "Planning",
    ],
  },
  {
    version: "V2",
    status: "PLANNED",
    title: "Autonomous Runtime",
    description:
      "Move from intelligent capabilities toward systems that can execute goals, coordinate actions, and operate through controlled autonomy.",
    capabilities: [
      "Goal Execution",
      "Autonomous Workflows",
      "Tool Orchestration",
      "Reflection",
    ],
  },
  {
    version: "V2.x",
    status: "PLANNED",
    title: "Multi-Agent Intelligence",
    description:
      "Enable multiple specialized intelligent systems to collaborate through shared platform primitives, communication contracts, and coordinated execution.",
    capabilities: [
      "Agent Coordination",
      "Multi-Agent Systems",
      "Shared Context",
      "Distributed Reasoning",
    ],
  },
  {
    version: "FUTURE",
    status: "VISION",
    title: "AI Operating Ecosystem",
    description:
      "Evolve Shree AI OS into a broader operating ecosystem where intelligent applications, agents, developers, and platform services work together.",
    capabilities: [
      "Intelligent Applications",
      "Agent Ecosystem",
      "Developer Platform",
      "Intelligence Infrastructure",
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