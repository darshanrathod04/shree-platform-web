"use client";

import Link from "next/link";

const developerLayers = [
  {
    number: "01",
    title: "Your Application",
    description: "Build the product and experience your users actually need.",
    type: "APPLICATION",
  },
  {
    number: "02",
    title: "Shree SDK",
    description: "Interact with platform capabilities through developer interfaces.",
    type: "INTERFACE",
  },
  {
    number: "03",
    title: "Shree Runtime",
    description: "Coordinate execution, lifecycle, context, and platform services.",
    type: "RUNTIME",
  },
  {
    number: "04",
    title: "Intelligence Kernels",
    description: "Reuse capabilities such as memory, knowledge, planning, and reasoning.",
    type: "KERNELS",
  },
];

export default function DeveloperSection() {
  return (
    <section className="developer-section" id="developers">
      <div className="developer-inner">

        {/* Header */}
        <div className="developer-header">

          <div className="developer-label">
            <span className="developer-label-dot" />
            05 — DEVELOPERS
          </div>

          <div className="developer-heading-grid">

            <h2>
              Build on
              <br />
              <span>the platform.</span>
            </h2>

            <div className="developer-intro">
              <p>
                Shree AI OS gives developers reusable infrastructure for
                building intelligent software without coupling applications
                directly to internal platform implementations.
              </p>

              <div className="developer-actions">
                <Link
                  href="/docs"
                  className="developer-primary-button"
                >
                  Start Building
                  <span>↗</span>
                </Link>

                <Link
                  href="/architecture"
                  className="developer-secondary-button"
                >
                  Explore Architecture
                </Link>
              </div>
            </div>

          </div>

        </div>


        {/* Developer Stack */}
        <div className="developer-stack">

          <div className="developer-stack-line" />

          {developerLayers.map((layer, index) => (
            <div
              className="developer-layer"
              key={layer.number}
            >

              <div className="developer-layer-number">
                {layer.number}
              </div>

              <div className="developer-layer-main">

                <div className="developer-layer-top">
                  <span className="developer-layer-type">
                    {layer.type}
                  </span>

                  {index < developerLayers.length - 1 && (
                    <span className="developer-layer-arrow">
                      ↓
                    </span>
                  )}
                </div>

                <h3>{layer.title}</h3>

                <p>{layer.description}</p>

              </div>

              <div className="developer-layer-indicator">
                <span />
              </div>

            </div>
          ))}

        </div>


        {/* Bottom Message */}
        <div className="developer-bottom">

          <div className="developer-bottom-line" />

          <div className="developer-bottom-content">

            <span>THE PLATFORM APPROACH</span>

            <h3>
              Build the application.
              <br />
              Reuse the intelligence.
            </h3>

            <p>
              Applications remain focused on their domain while Shree AI OS
              provides the underlying platform capabilities.
            </p>

          </div>

          <div className="developer-bottom-line" />

        </div>

      </div>
    </section>
  );
}