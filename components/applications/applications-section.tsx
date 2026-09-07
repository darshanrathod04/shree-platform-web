"use client";

import Link from "next/link";

const applications = [
  {
    number: "01",
    status: "ACTIVE",
    category: "INTELLIGENCE APPLICATION",
    title: "Shree Project Intelligence",
    description:
      "An intelligent project workspace built on Shree AI OS for planning, reasoning, memory, execution, and project-level intelligence.",
    tags: ["Projects", "Planning", "Memory"],
    href: "/applications/project-intelligence",
  },
  {
    number: "02",
    status: "IN DEVELOPMENT",
    category: "PERSONAL INTELLIGENCE",
    title: "Shree Personal AI",
    description:
      "A personal intelligence layer designed to understand context, remember interactions, manage goals, and assist across everyday workflows.",
    tags: ["Memory", "Goals", "Assistant"],
    href: "/applications/personal-ai",
  },
  {
    number: "03",
    status: "PLANNED",
    category: "INTELLIGENT SOFTWARE",
    title: "More Applications",
    description:
      "Future applications can be built on the same Shree AI OS foundations without rebuilding intelligence infrastructure from scratch.",
    tags: ["Extensible", "Modular", "Future"],
    href: "/applications",
  },
];

export default function ApplicationsSection() {
  return (
    <section className="applications-section" id="applications">
      <div className="applications-inner">

        {/* Section Header */}
        <div className="applications-header">

          <div className="applications-label">
            <span className="applications-dot" />
            06 — APPLICATIONS
          </div>

          <div className="applications-heading-wrap">
            <h2>
              Intelligence
              <span> becomes</span>
              <br />
              software.
            </h2>

            <p>
              Shree AI OS provides the foundations for building intelligent
              applications that share the same platform, runtime, memory,
              reasoning, and architectural principles.
            </p>
          </div>

        </div>

        {/* Application Cards */}
        <div className="applications-grid">

          {applications.map((application) => (
            <Link
              href={application.href}
              className="application-card"
              key={application.number}
            >
              <div className="application-card-top">

                <span className="application-number">
                  {application.number}
                </span>

                <span className="application-status">
                  <span />
                  {application.status}
                </span>

              </div>

              <div className="application-icon">
                <div className="application-icon-core" />
              </div>

              <div className="application-content">

                <span className="application-category">
                  {application.category}
                </span>

                <h3>{application.title}</h3>

                <p>{application.description}</p>

              </div>

              <div className="application-footer">

                <div className="application-tags">
                  {application.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <span className="application-arrow">
                  ↗
                </span>

              </div>
            </Link>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="applications-bottom">

          <span className="applications-bottom-line" />

          <p>
            Built on Shree AI OS.
            <strong> Designed to grow.</strong>
          </p>

          <span className="applications-bottom-line" />

        </div>

      </div>
    </section>
  );
}