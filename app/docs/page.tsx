import Link from "next/link";

const gettingStarted = [
  {
    number: "01",
    title: "Introduction",
    description:
      "Understand what Shree AI OS is, why it exists, and how the platform is structured.",
    href: "/platform",
  },
  {
    number: "02",
    title: "Quickstart Guide",
    description:
      "Prepare your Java 21 environment and add the v1.0.6 Maven dependency.",
    href: "/quickstart",
  },
  {
    number: "03",
    title: "SDK Reference",
    description:
      "Explore the 10 verified SDK facades for memory, knowledge, reasoning, and planning.",
    href: "/sdk",
  },
  {
    number: "04",
    title: "Platform Architecture",
    description:
      "Understand the 5-layer platform model and 11-stage cognitive execution pipeline.",
    href: "/architecture",
  },
];

const coreConcepts = [
  {
    number: "01",
    title: "Platform",
    description:
      "Learn the responsibilities of the Shree AI OS platform and the infrastructure surrounding intelligent applications.",
  },
  {
    number: "02",
    title: "Runtime",
    description:
      "Understand lifecycle, execution, context, and the services that connect applications with platform capabilities.",
  },
  {
    number: "03",
    title: "Intelligence Kernels",
    description:
      "Explore the reusable intelligence foundations that provide capabilities to applications.",
  },
];

const developerResources = [
  {
    number: "01",
    title: "10 Verified SDKs",
    description:
      "Deterministic developer interfaces for interacting with Shree AI OS capabilities.",
    href: "/sdk",
  },
  {
    number: "02",
    title: "Developer Platform",
    description:
      "Explore the 5-layer architecture and application integration patterns.",
    href: "/developers",
  },
  {
    number: "03",
    title: "Interactive Playground",
    description:
      "Practical interactive environment testing platform capabilities across modules.",
    href: "/playground",
  },
];

const advancedTopics = [
  { name: "Architecture", href: "/architecture" },
  { name: "Security", href: "/security" },
  { name: "Constitution", href: "/constitution" },
  { name: "Roadmap", href: "/roadmap" },
];

export default function DocumentationPage() {
  return (
    <main className="docs-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="docs-hero">
        <div className="docs-container">

          <Link href="/" className="docs-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="docs-hero-label">
            <span />
            SHREE AI OS · DOCUMENTATION
          </div>

          <div className="docs-hero-grid">

            <div>
              <span className="docs-hero-number">
                01
              </span>

              <h1>
                Build with
                <br />
                <span>Shree AI OS.</span>
              </h1>
            </div>

            <div className="docs-hero-description">

              <p>
                Explore the platform, understand its architecture, and learn
                how developers can build intelligent software on top of
                Shree AI OS.
              </p>

              <div className="docs-status">
                <span />
                v1.0.6 · DEVELOPER DOCUMENTATION
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DOCS LAYOUT
          ===================================================== */}

      <section className="docs-workspace">
        <div className="docs-container">

          <div className="docs-workspace-grid">

            {/* =================================================
                SIDEBAR
                ================================================= */}

            <aside className="docs-sidebar">

              <div className="docs-sidebar-block">

                <span className="docs-sidebar-title">
                  DOCUMENTATION
                </span>

                <nav>

                  <a href="#getting-started" className="active">
                    Getting Started
                  </a>

                  <a href="#core-concepts">
                    Core Concepts
                  </a>

                  <a href="#developer-resources">
                    Developer Resources
                  </a>

                  <a href="#advanced">
                    Advanced
                  </a>

                </nav>

              </div>

              <div className="docs-sidebar-note">

                <span>
                  v1.0.6
                </span>

                <p>
                  Documentation reflects the current platform foundation.
                  Future capabilities are clearly marked.
                </p>

              </div>

            </aside>


            {/* =================================================
                MAIN CONTENT
                ================================================= */}

            <div className="docs-content">

              {/* Getting Started */}

              <section
                id="getting-started"
                className="docs-content-section"
              >

                <div className="docs-section-label">
                  02 · GETTING STARTED
                </div>

                <div className="docs-section-heading">

                  <h2>
                    Start here.
                    <br />
                    <span>Understand the foundation.</span>
                  </h2>

                  <p>
                    Begin with the core concepts and developer workflow before
                    moving deeper into the platform architecture.
                  </p>

                </div>


                <div className="docs-resource-grid">

                  {gettingStarted.map((item) => (
                    <Link
                      href={item.href}
                      className="docs-resource-card"
                      key={item.number}
                    >

                      <div className="docs-resource-top">

                        <span>
                          {item.number}
                        </span>

                        <b>
                          ↗
                        </b>

                      </div>

                      <h3>
                        {item.title}
                      </h3>

                      <p>
                        {item.description}
                      </p>

                    </Link>
                  ))}

                </div>

              </section>


              {/* Core Concepts */}

              <section
                id="core-concepts"
                className="docs-content-section"
              >

                <div className="docs-section-label">
                  03 · CORE CONCEPTS
                </div>

                <div className="docs-section-heading">

                  <h2>
                    Understand
                    <br />
                    <span>the platform.</span>
                  </h2>

                  <p>
                    Learn how the platform, runtime, and intelligence
                    foundations fit together before working with individual
                    capabilities.
                  </p>

                </div>


                <div className="docs-concept-list">

                  {coreConcepts.map((concept) => (
                    <article
                      className="docs-concept-card"
                      key={concept.number}
                    >

                      <span className="docs-concept-number">
                        {concept.number}
                      </span>

                      <div>

                        <h3>
                          {concept.title}
                        </h3>

                        <p>
                          {concept.description}
                        </p>

                      </div>

                      <span className="docs-concept-arrow">
                        ↗
                      </span>

                    </article>
                  ))}

                </div>

              </section>


              {/* Developer Resources */}

              <section
                id="developer-resources"
                className="docs-content-section"
              >

                <div className="docs-section-label">
                  04 · DEVELOPER RESOURCES
                </div>

                <div className="docs-section-heading">

                  <h2>
                    Build through
                    <br />
                    <span>developer interfaces.</span>
                  </h2>

                  <p>
                    Access the interfaces, examples, and resources that help
                    connect your application with Shree AI OS.
                  </p>

                </div>


                <div className="docs-resource-grid docs-resource-grid-three">

                  {developerResources.map((resource) => (
                    <Link
                      href={resource.href}
                      className="docs-resource-card"
                      key={resource.number}
                    >

                      <div className="docs-resource-top">

                        <span>
                          {resource.number}
                        </span>

                        <b>
                          ↗
                        </b>

                      </div>

                      <h3>
                        {resource.title}
                      </h3>

                      <p>
                        {resource.description}
                      </p>

                    </Link>
                  ))}

                </div>

              </section>


              {/* Advanced */}

              <section
                id="advanced"
                className="docs-content-section docs-advanced-section"
              >

                <div className="docs-section-label">
                  05 · ADVANCED
                </div>

                <div className="docs-section-heading">

                  <h2>
                    Go deeper.
                    <br />
                    <span>Understand the system.</span>
                  </h2>

                  <p>
                    Explore the architectural concepts behind the platform and
                    understand how Shree AI OS is designed to evolve.
                  </p>

                </div>


                <div className="docs-advanced-grid">

                  {advancedTopics.map((topic, index) => (
                    <Link
                      href={topic.href}
                      className="docs-advanced-card"
                      key={topic.name}
                    >

                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <strong>
                        {topic.name}
                      </strong>

                      <b>
                        ↗
                      </b>

                    </Link>
                  ))}

                </div>

              </section>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DOCUMENTATION CTA
          ===================================================== */}

      <section className="docs-cta">

        <div className="docs-container">

          <div className="docs-cta-card">

            <span>
              SHREE AI OS
            </span>

            <h2>
              Understand the system.
              <br />
              <span>Then build on it.</span>
            </h2>

            <p>
              Explore the architecture, developer foundations, and platform
              capabilities behind Shree AI OS.
            </p>

            <div className="docs-cta-actions">

              <Link href="/architecture">
                Explore Architecture
                <span>↗</span>
              </Link>

              <Link href="/developers">
                Developer Platform
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}