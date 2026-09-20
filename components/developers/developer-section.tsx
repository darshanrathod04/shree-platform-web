"use client";

import Link from "next/link";

const developerLayers = [
  {
    number: "01",
    title: "Application Layer",
    description: "Build enterprise applications, agents, and autonomous workflows using platform capabilities.",
    type: "APPLICATION",
  },
  {
    number: "02",
    title: "SDK Layer (10 Facades)",
    description: "Type-safe interfaces for Memory, Knowledge, Planning, Reasoning, Reflection, Inference, and more.",
    type: "SDK",
  },
  {
    number: "03",
    title: "Runtime Orchestration",
    description: "11-stage cognitive execution pipeline, Dual-Mode Synthesis, lifecycle, and security state.",
    type: "RUNTIME",
  },
  {
    number: "04",
    title: "Kernel Services",
    description: "Graph Memory, K0.6 domain-isolated knowledge, pgvector RRF, and reflection engines.",
    type: "KERNELS",
  },
  {
    number: "05",
    title: "LLM & Provider Layer",
    description: "LlmRouter with gemini-3.6-flash, HTTP 503/429 exponential backoff retries and deterministic fallback.",
    type: "PROVIDERS",
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