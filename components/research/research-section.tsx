"use client";

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

export default function ResearchSection() {
  return (
    <section id="research" className="research-section">
      <div className="research-header">
        <div className="research-eyebrow">
          <span className="research-dot" />
          <span>07 — RESEARCH</span>
        </div>

        <div className="research-intro">
          <h2>
            Intelligence
            <span> is still being</span>
            <br />
            <strong>engineered.</strong>
          </h2>

          <p>
            Shree AI OS research explores the systems, architectures, and
            intelligence primitives that will shape the next generation of
            intelligent software.
          </p>
        </div>
      </div>

      <div className="research-divider" />

      <div className="research-content">
        <div className="research-side">
          <span className="research-side-label">THE SHREE RESEARCH</span>

          <p>
            We study intelligence as a system — not simply as a model. Research
            feeds directly into the platform architecture and the applications
            built on top of it.
          </p>

          <div className="research-principle">
            <span className="research-principle-dot" />
            <span>RESEARCH → PLATFORM → APPLICATIONS</span>
          </div>
        </div>

        <div className="research-list">
          {researchAreas.map((area) => (
            <article className="research-card" key={area.number}>
              <div className="research-card-top">
                <span className="research-number">{area.number}</span>

                <span className="research-status">
                  <span />
                  {area.status}
                </span>
              </div>

              <div className="research-card-body">
                <span className="research-label">{area.label}</span>

                <h3>{area.title}</h3>

                <p>{area.description}</p>
              </div>

              <div className="research-card-arrow">↗</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}