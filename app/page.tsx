"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import ApplicationsSection from "@/components/applications/applications-section";
import DeveloperSection from "@/components/developers/developer-section";
import ResearchSection from "@/components/research/research-section";
import RoadmapSection from "@/components/roadmap/roadmap-section";
import SiteFooter from "@/components/footer/site-footer";

const architectureNodes = [
  {
    label: "Memory",
    className: "architecture-node node-memory",
  },
  {
    label: "Reasoning",
    className: "architecture-node node-reasoning",
  },
  {
    label: "Planning",
    className: "architecture-node node-planning",
  },
  {
    label: "Knowledge",
    className: "architecture-node node-knowledge",
  },
];

export default function Home() {
  return (
      <>
    <main className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-grid" />
        </div>

        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="hero-eyebrow">
              <span className="eyebrow-dot" />
              <span>SHREE AI OS</span>
              <span className="eyebrow-divider" />
              <span>AI OPERATING PLATFORM</span>
            </div>

            <div className="hero-logo">
              <img src="/brand/shree-logo.png" alt="SHREE AI OS" />
            </div>

            <h1>
              Build Intelligent
              <span className="text-gradient"> Software Platforms.</span>
            </h1>

            <p className="hero-description">
              Shree AI OS is a modular AI Operating Platform for engineering
              intelligent software through reusable intelligence, stable
              contracts, and disciplined architecture.
            </p>

            <div className="hero-actions">
              <Link href="/platform" className="primary-button">
                Explore the Platform
                <ArrowRight size={17} />
              </Link>

              <Link href="/docs" className="secondary-button">
                Start Building
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="hero-status">
              <span className="status-pulse" />
              <span>V1</span>
              <span className="status-separator">•</span>
              <span>Platform Foundation</span>
            </div>
          </motion.div>

          {/* ARCHITECTURE VISUAL */}
          <motion.div
            className="hero-architecture"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            <div className="architecture-glow" />

            <div className="architecture-card glass-strong">
              <div className="architecture-header">
                <div>
                  <span className="architecture-kicker">
                    PLATFORM ARCHITECTURE
                  </span>

                  <h2>Intelligence as a System</h2>
                </div>

                <Sparkles size={18} />
              </div>

              <div className="architecture-map">
                <div className="architecture-ring ring-one" />
                <div className="architecture-ring ring-two" />
                <div className="architecture-ring ring-three" />

                <div className="architecture-lines">
                  <span className="line line-one" />
                  <span className="line line-two" />
                  <span className="line line-three" />
                  <span className="line line-four" />
                </div>

                {architectureNodes.map((node, index) => (
                  <motion.div
                    key={node.label}
                    className={node.className}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.7 + index * 0.12,
                      duration: 0.45,
                    }}
                  >
                    <span className="node-dot" />
                    {node.label}
                  </motion.div>
                ))}

                <motion.div
                  className="architecture-core"
                  animate={{
                    boxShadow: [
                      "0 0 25px rgba(139,124,255,.18)",
                      "0 0 55px rgba(53,199,255,.28)",
                      "0 0 25px rgba(139,124,255,.18)",
                    ],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img src="/brand/shree-logo.png" alt="" />
                </motion.div>

                <div className="architecture-runtime">
                  <span>RUNTIME</span>
                </div>
              </div>

              <div className="architecture-footer">
                <span>Platform Core</span>
                <span>→</span>
                <span>Intelligent Kernels</span>
                <span>→</span>
                <span>Applications</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll">
          <span>Explore Shree</span>
          <span className="scroll-line" />
        </div>
      </section>

      {/* INTRO */}
      <section className="home-intro section-shell">
        <div className="section-label">01 — PLATFORM</div>

        <div className="intro-grid">
          <h2>
            An Operating Platform
            <span> for Intelligent Software.</span>
          </h2>

          <div>
            <p>
              Shree AI OS is designed as a platform first — not as a single AI
              application. It provides architectural foundations, runtime
              infrastructure, intelligent capabilities, and developer
              interfaces for building intelligent software systems.
            </p>

            <Link href="/architecture" className="text-link">
              Explore Architecture
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

       {/* WHY A PLATFORM */}
                      <section className="platform-problem-section section-shell">
                        <motion.div
                          className="platform-problem-header"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.25 }}
                          transition={{ duration: 0.7 }}
                        >
                          <div className="section-label">02 — THE PROBLEM</div>

                          <h2>
                            Intelligent software
                            <span> needs infrastructure.</span>
                          </h2>

                          <p>
                            Building intelligent applications should not mean rebuilding the
                            same foundational systems again and again.
                          </p>
                        </motion.div>

                        <div className="platform-problem-grid">
                          <motion.div
                            className="problem-card glass"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div className="problem-number">01</div>

                            <div className="problem-icon">
                              <span />
                              <span />
                              <span />
                            </div>

                            <h3>Repeated Infrastructure</h3>

                            <p>
                              Applications often recreate memory, context, planning, reasoning,
                              execution, and integration layers independently.
                            </p>
                          </motion.div>

                          <motion.div
                            className="problem-card glass"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                          >
                            <div className="problem-number">02</div>

                            <div className="problem-icon problem-icon-flow">
                              <span />
                              <span />
                              <span />
                            </div>

                            <h3>Fragmented Systems</h3>

                            <p>
                              Intelligence becomes harder to evolve when every application
                              builds its own architecture, lifecycle, and internal contracts.
                            </p>
                          </motion.div>

                          <motion.div
                            className="problem-card glass"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                          >
                            <div className="problem-number">03</div>

                            <div className="problem-icon problem-icon-core">
                              <span />
                            </div>

                            <h3>Platform Opportunity</h3>

                            <p>
                              Shree AI OS brings reusable foundations together so intelligent
                              software can be engineered on top of a common platform.
                            </p>
                          </motion.div>
                        </div>

                        <motion.div
                          className="platform-transition"
                          initial={{ opacity: 0, scaleX: 0.7 }}
                          whileInView={{ opacity: 1, scaleX: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.8 }}
                        >
                          <span />
                          <div>APPLICATIONS</div>
                          <span />
                          <div className="transition-arrow">↓</div>
                          <div className="transition-core">SHREE AI OS</div>
                          <span />
                        </motion.div>
                      </section>

                            {/* THE SHREE APPROACH */}
                            <section className="shree-approach-section section-shell">
                              <motion.div
                                className="shree-approach-header"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.7 }}
                              >
                                <div className="section-label">03 — THE SHREE APPROACH</div>

                                <h2>
                                  One platform.
                                  <span> Many intelligent capabilities.</span>
                                </h2>

                                <p>
                                  Shree AI OS brings reusable intelligence infrastructure into a
                                  common platform so applications can build on foundations instead
                                  of rebuilding them.
                                </p>
                              </motion.div>

                              <div className="shree-stack">
                                {/* PLATFORM CORE */}
                                <motion.div
                                  className="approach-layer approach-core glass"
                                  initial={{ opacity: 0, y: 35 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                  transition={{ duration: 0.6 }}
                                >
                                  <div className="approach-layer-number">01</div>

                                  <div className="approach-layer-content">
                                    <div className="approach-layer-heading">
                                      <div className="approach-icon core-icon">
                                        <span />
                                      </div>

                                      <div>
                                        <div className="approach-status">
                                          <i />
                                          FOUNDATION
                                        </div>

                                        <h3>Platform Core</h3>
                                      </div>
                                    </div>

                                    <p>
                                      The foundational layer responsible for platform lifecycle,
                                      configuration, discovery, health, events, and system-level
                                      coordination.
                                    </p>

                                    <div className="approach-tags">
                                      <span>Configuration</span>
                                      <span>Registry</span>
                                      <span>Lifecycle</span>
                                      <span>Events</span>
                                      <span>Health</span>
                                    </div>
                                  </div>
                                </motion.div>

                                {/* INTELLIGENCE KERNELS */}
                                <motion.div
                                  className="approach-layer approach-kernels glass"
                                  initial={{ opacity: 0, y: 35 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                  transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                  <div className="approach-layer-number">02</div>

                                  <div className="approach-layer-content">
                                    <div className="approach-layer-heading">
                                      <div className="approach-icon kernel-icon">
                                        <span />
                                        <span />
                                        <span />
                                      </div>

                                      <div>
                                        <div className="approach-status approach-status-blue">
                                          <i />
                                          INTELLIGENCE
                                        </div>

                                        <h3>Intelligence Kernels</h3>
                                      </div>
                                    </div>

                                    <p>
                                      Reusable intelligence capabilities that provide applications
                                      with structured foundations for understanding, remembering,
                                      reasoning, planning, and acting.
                                    </p>

                                    <div className="kernel-mini-grid">
                                      <span>Identity</span>
                                      <span>Memory</span>
                                      <span>Knowledge</span>
                                      <span>Planning</span>
                                      <span>Reasoning</span>
                                      <span>Execution</span>
                                      <span>Chief</span>
                                      <span>Multi-Agent</span>
                                    </div>
                                  </div>
                                </motion.div>

                                {/* RUNTIME */}
                                <motion.div
                                  className="approach-layer approach-runtime glass"
                                  initial={{ opacity: 0, y: 35 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                  transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                  <div className="approach-layer-number">03</div>

                                  <div className="approach-layer-content">
                                    <div className="approach-layer-heading">
                                      <div className="approach-icon runtime-icon">
                                        <span />
                                        <span />
                                      </div>

                                      <div>
                                        <div className="approach-status approach-status-purple">
                                          <i />
                                          RUNTIME
                                        </div>

                                        <h3>Execution Runtime</h3>
                                      </div>
                                    </div>

                                    <p>
                                      The runtime provides the environment in which platform
                                      capabilities are coordinated, executed, observed, and evolved.
                                    </p>

                                    <div className="approach-tags">
                                      <span>Execution</span>
                                      <span>Lifecycle</span>
                                      <span>Coordination</span>
                                      <span>Observability</span>
                                    </div>
                                  </div>
                                </motion.div>

                                {/* DEVELOPER INTERFACES */}
                                <motion.div
                                  className="approach-layer approach-sdk glass"
                                  initial={{ opacity: 0, y: 35 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                  transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                  <div className="approach-layer-number">04</div>

                                  <div className="approach-layer-content">
                                    <div className="approach-layer-heading">
                                      <div className="approach-icon sdk-icon">
                                        <span>&lt;/&gt;</span>
                                      </div>

                                      <div>
                                        <div className="approach-status approach-status-cyan">
                                          <i />
                                          DEVELOPER LAYER
                                        </div>

                                        <h3>Developer Interfaces</h3>
                                      </div>
                                    </div>

                                    <p>
                                      Developers interact with the platform through stable interfaces
                                      rather than coupling applications directly to internal
                                      implementations.
                                    </p>

                                    <div className="approach-tags">
                                      <span>SDK</span>
                                      <span>REST API</span>
                                      <span>CLI</span>
                                      <span>Extensions</span>
                                    </div>
                                  </div>
                                </motion.div>

                                {/* APPLICATIONS */}
                                <motion.div
                                  className="approach-layer approach-apps glass"
                                  initial={{ opacity: 0, y: 35 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                  transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                  <div className="approach-layer-number">05</div>

                                  <div className="approach-layer-content">
                                    <div className="approach-layer-heading">
                                      <div className="approach-icon app-icon">
                                        <span />
                                      </div>

                                      <div>
                                        <div className="approach-status approach-status-pink">
                                          <i />
                                          BUILT ON SHREE
                                        </div>

                                        <h3>Applications</h3>
                                      </div>
                                    </div>

                                    <p>
                                      Applications use the platform to create specialized intelligent
                                      experiences without becoming the platform itself.
                                    </p>

                                    <div className="approach-tags">
                                      <span>Reference Applications</span>
                                      <span>Future Applications</span>
                                    </div>
                                  </div>
                                </motion.div>
                              </div>

                              <motion.div
                                className="approach-bottom-message"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                              >
                                <span className="approach-line" />

                                <div>
                                  <strong>Platform first.</strong>
                                  <span>Applications built on top.</span>
                                </div>

                                <span className="approach-line" />
                              </motion.div>
                            </section>

                                  {/* PLATFORM ARCHITECTURE */}
                                  <section className="architecture-section section-shell">
                                    <motion.div
                                      className="architecture-header"
                                      initial={{ opacity: 0, y: 30 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true, amount: 0.25 }}
                                      transition={{ duration: 0.7 }}
                                    >
                                      <div className="section-label">04 — ARCHITECTURE</div>

                                      <h2>
                                        Intelligence
                                        <span> as a system.</span>
                                      </h2>

                                      <p>
                                        Shree AI OS separates platform infrastructure, intelligence
                                        capabilities, runtime execution, and applications through explicit
                                        architectural boundaries.
                                      </p>
                                    </motion.div>

                                    <motion.div
                                      className="architecture-visual glass"
                                      initial={{ opacity: 0, y: 40 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true, amount: 0.2 }}
                                      transition={{ duration: 0.8 }}
                                    >
                                      <div className="architecture-topbar">
                                        <div>
                                          <span className="architecture-kicker">
                                            PLATFORM ARCHITECTURE
                                          </span>

                                          <h3>Intelligence as a System</h3>
                                        </div>

                                        <div className="architecture-live">
                                          <i />
                                          V1 FOUNDATION
                                        </div>
                                      </div>

                                      <div className="architecture-system">
                                        {/* APPLICATION LAYER */}
                                        <motion.div
                                          className="architecture-application-layer"
                                          initial={{ opacity: 0, y: -15 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.6, delay: 0.15 }}
                                        >
                                          <span className="architecture-layer-label">
                                            APPLICATIONS
                                          </span>

                                          <div className="architecture-application-card">
                                            <div className="architecture-app-icon">
                                              <span />
                                            </div>

                                            <div>
                                              <strong>Intelligent Applications</strong>
                                              <small>Built on Shree AI OS</small>
                                            </div>
                                          </div>
                                        </motion.div>

                                        {/* CONNECTION */}
                                        <div className="architecture-connector">
                                          <span />
                                          <div className="connector-particle" />
                                          <span />
                                        </div>

                                        {/* SDK */}
                                        <motion.div
                                          className="architecture-sdk-layer"
                                          initial={{ opacity: 0, scale: 0.96 }}
                                          whileInView={{ opacity: 1, scale: 1 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.6, delay: 0.25 }}
                                        >
                                          <div className="architecture-sdk-card">
                                            <div className="sdk-bracket">&lt;/&gt;</div>

                                            <div>
                                              <span>DEVELOPER INTERFACE</span>
                                              <strong>SDK / API</strong>
                                            </div>
                                          </div>
                                        </motion.div>

                                        {/* CONNECTION */}
                                        <div className="architecture-connector">
                                          <span />
                                          <div className="connector-particle connector-particle-two" />
                                          <span />
                                        </div>

                                        {/* SHREE CORE */}
                                        <div className="architecture-core-area">
                                          <div className="architecture-orbit orbit-one" />
                                          <div className="architecture-orbit orbit-two" />
                                          <div className="architecture-orbit orbit-three" />

                                          {/* Memory */}
                                          <motion.div
                                            className="architecture-node node-memory"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.35 }}
                                          >
                                            <i />
                                            <span>Memory</span>
                                          </motion.div>

                                          {/* Reasoning */}
                                          <motion.div
                                            className="architecture-node node-reasoning"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.45 }}
                                          >
                                            <i />
                                            <span>Reasoning</span>
                                          </motion.div>

                                          {/* Planning */}
                                          <motion.div
                                            className="architecture-node node-planning"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.55 }}
                                          >
                                            <i />
                                            <span>Planning</span>
                                          </motion.div>

                                          {/* Knowledge */}
                                          <motion.div
                                            className="architecture-node node-knowledge"
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.65 }}
                                          >
                                            <i />
                                            <span>Knowledge</span>
                                          </motion.div>

                                          {/* CORE */}
                                          <motion.div
                                            className="architecture-center"
                                            initial={{ opacity: 0, scale: 0.7 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                              duration: 0.8,
                                              delay: 0.35,
                                              type: "spring",
                                              stiffness: 120,
                                            }}
                                          >
                                            <div className="architecture-center-glow" />

                                            <div className="architecture-logo-ring">
                                              <img
                                                src="/brand/shree-logo.png"
                                                alt="Shree AI OS"
                                              />
                                            </div>

                                            <div className="architecture-center-label">
                                              <span>PLATFORM</span>
                                              <strong>SHREE AI OS</strong>
                                            </div>
                                          </motion.div>
                                        </div>

                                        {/* RUNTIME */}
                                        <div className="architecture-runtime-connector">
                                          <span />
                                          <div className="connector-particle connector-particle-three" />
                                          <span />
                                        </div>

                                        <motion.div
                                          className="architecture-runtime-layer"
                                          initial={{ opacity: 0, y: 15 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.6, delay: 0.75 }}
                                        >
                                          <div className="architecture-runtime-card">
                                            <div className="runtime-pulse">
                                              <span />
                                            </div>

                                            <div>
                                              <span>EXECUTION FOUNDATION</span>
                                              <strong>Runtime</strong>
                                            </div>

                                            <div className="runtime-status">
                                              <i />
                                              ACTIVE FOUNDATION
                                            </div>
                                          </div>
                                        </motion.div>

                                        {/* PLATFORM CORE */}
                                        <div className="architecture-core-connector">
                                          <span />
                                        </div>

                                        <motion.div
                                          className="architecture-platform-core"
                                          initial={{ opacity: 0, y: 15 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.6, delay: 0.85 }}
                                        >
                                          <div className="platform-core-symbol">
                                            <span />
                                            <span />
                                            <span />
                                          </div>

                                          <div>
                                            <span>FOUNDATIONAL LAYER</span>
                                            <strong>Platform Core</strong>
                                          </div>

                                          <div className="platform-core-items">
                                            <span>Lifecycle</span>
                                            <span>Registry</span>
                                            <span>Events</span>
                                            <span>Health</span>
                                          </div>
                                        </motion.div>
                                      </div>

                                      <div className="architecture-footer">
                                        <span>PLATFORM CORE</span>
                                        <b>→</b>
                                        <span>INTELLIGENCE KERNELS</span>
                                        <b>→</b>
                                        <span>RUNTIME</span>
                                        <b>→</b>
                                        <span>APPLICATIONS</span>
                                      </div>
                                    </motion.div>

                                    <motion.div
                                      className="architecture-note"
                                      initial={{ opacity: 0 }}
                                      whileInView={{ opacity: 1 }}
                                      viewport={{ once: true }}
                                    >
                                      <div className="architecture-note-mark">i</div>

                                      <p>
                                        The architecture is designed so applications consume platform
                                        capabilities through defined interfaces rather than depending
                                        directly on internal implementations.
                                      </p>
                                    </motion.div>
                                  </section>

                                  <DeveloperSection />

                                  <ApplicationsSection />

                                  <ResearchSection />






    </main>
    <SiteFooter />
    </>
  );
}