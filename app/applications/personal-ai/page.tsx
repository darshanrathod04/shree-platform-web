import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shree Personal AI — Personal Intelligence Layer",
  description:
    "A personal intelligence layer built on Shree AI OS for episodic context retention, goal planning, and daily workflow assistance.",
};

const capabilities = [
  {
    number: "01",
    title: "Episodic User Memory",
    description:
      "Retain user preferences, interaction history, and contextual continuity across conversations and workflows.",
  },
  {
    number: "02",
    title: "Goal Planning & Synthesis",
    description:
      "Decompose long-term personal objectives into structured, trackable milestones and daily micro-tasks.",
  },
  {
    number: "03",
    title: "Contextual Reasoning",
    description:
      "Apply deterministic reasoning across personal knowledge, schedule constraints, and active projects.",
  },
  {
    number: "04",
    title: "Autonomous Action Execution",
    description:
      "Safely execute external tool actions with user permission gates and fail-closed privacy boundaries.",
  },
];

export default function PersonalAIPage() {
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
                02
              </div>

              <h1>
                Shree Personal
                <span> AI.</span>
              </h1>
            </div>

            <div className="application-detail-intro">
              <p>
                A personal intelligence layer designed to understand context,
                remember interactions, manage goals, and assist across everyday
                workflows without leaking private context outside the tenant.
              </p>

              <div className="application-detail-status">
                <span />
                IN ACTIVE DEVELOPMENT · v1.0.6
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
                  the user.
                </h2>
              </div>

              <span className="application-system-version">
                v1.0.6 DEVELOPER PREVIEW
              </span>
            </div>

            <div className="application-system-visual">

              <div className="system-orbit orbit-one" />
              <div className="system-orbit orbit-two" />
              <div className="system-orbit orbit-three" />

              <div className="system-core">
                <div className="system-core-inner">
                  P
                </div>

                <span>PERSONAL</span>
              </div>

              <div className="system-node node-memory">
                <span />
                Memory
              </div>

              <div className="system-node node-planning">
                <span />
                Goals
              </div>

              <div className="system-node node-reasoning">
                <span />
                Context
              </div>

              <div className="system-node node-execution">
                <span />
                Assistant
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
              Everyday intelligence.
              <br />
              Deterministic privacy.
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
                Privacy-First
                <br />
                Architecture.
              </h2>
            </div>

            <p>
              Shree Personal AI leverages the 5-layer platform architecture and
              11-stage cognitive execution pipeline. All personal memories and
              goals remain isolated within tenant-scoped vector boundaries with
              zero telemetry leakage.
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
