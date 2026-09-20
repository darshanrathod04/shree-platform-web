"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, GitBranch, BookOpen, Copy, Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import SiteFooter from "@/components/footer/site-footer";

const architectureNodes = [
  { label: "Memory", className: "architecture-node node-memory" },
  { label: "Reasoning", className: "architecture-node node-reasoning" },
  { label: "Planning", className: "architecture-node node-planning" },
  { label: "Knowledge", className: "architecture-node node-knowledge" },
];

const sdkCards = [
  { title: "MemorySDK", description: "client.memory() — Persistent episodic context & recall", icon: "💾" },
  { title: "KnowledgeSDK", description: "client.knowledge() — Hybrid RRF vector search & ingestion", icon: "🗃️" },
  { title: "PlanningSDK", description: "client.planning() — Structured topological DAG planning", icon: "📋" },
  { title: "ReasoningSDK", description: "client.reasoning() — Deterministic thought & evidence graph", icon: "🧠" },
  { title: "ReflectionSDK", description: "client.reflection() — Adaptive calibration & analytics", icon: "🔍" },
  { title: "InferenceSDK", description: "client.inference() — Structured scoring & tradeoff analysis", icon: "⚖️" },
  { title: "IdentitySDK", description: "client.identity() — Tenant boundaries & profile resolution", icon: "👤" },
  { title: "ExecutionSDK", description: "client.execution() — Fail-closed action execution gate", icon: "🛡️" },
  { title: "ProjectSDK", description: "client.project() — JavaParser Java 21 AST intelligence", icon: "📦" },
  { title: "SettingsSDK", description: "client.settings() — Dynamic BYOK credentials & configuration", icon: "⚙️" },
];

const quickstartCode = `<!-- Maven Dependency -->
<dependency>
    <groupId>io.github.darshanrathod04</groupId>
    <artifactId>shree-ai-os</artifactId>
    <version>1.0.6-developer-preview</version>
</dependency>

// Java 21 LTS Quickstart Bootstrap
import com.shreeai.os.platform.sdk.ShreeAI;
import com.shreeai.os.platform.sdk.SDKResponse;
import com.shreeai.os.platform.core.RuntimeConfiguration;

public class Quickstart {
    public static void main(String[] args) {
        // Configure runtime with fail-closed security & multi-kernel settings
        RuntimeConfiguration config = RuntimeConfiguration.builder()
            .defaultProvider("gemini-3.6-flash")
            .failClosed(true)
            .build();

        // Initialize with API key or deterministic in-memory fallback
        ShreeAI shree = ShreeAI.builder()
            .apiKey(System.getenv().getOrDefault("GEMINI_API_KEY", "local"))
            .configuration(config)
            .build();
        
        // Execute grounded chat through the 11-stage cognitive pipeline
        SDKResponse response = shree.chat("Explain hybrid RRF vector retrieval");
        System.out.println(response.answer());
        
        shree.close();
    }
}`;

const trustMetrics = [
  { value: "56+", label: "Test Suites (100% Green)" },
  { value: "Java 21", label: "LTS Native" },
  { value: "Fail-Closed", label: "RBAC Security Gate" },
  { value: "v1.0.6", label: "Developer Preview" },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button className="copy-button" onClick={handleCopy}>
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

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
                In-Process AI Runtime
                <span className="text-gradient"> for Java.</span>
              </h1>

              <p className="hero-description">
                A deterministic, Java 21 native AI runtime platform that brings 
                intelligent capabilities directly into your JVM applications with 
                predictable behavior and full observability.
              </p>

              <div className="hero-actions">
                <Link href="/docs" className="primary-button">
                  Read Docs
                  <BookOpen size={17} />
                </Link>

                <a 
                  href="https://github.com/darshanrathod04/shree-ai-os" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="secondary-button"
                >
                  GitHub
                  <GitBranch size={16} />
                </a>
              </div>

              <div className="hero-status">
                <span className="status-pulse" />
                <span>v1.0.6</span>
                <span className="status-separator">•</span>
                <span>Developer Preview</span>
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
                  <span>5-Layer Architecture</span>
                  <span>→</span>
                  <span>11-Stage Pipeline</span>
                  <span>→</span>
                  <span>Dual-Mode Synthesis</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hero-scroll">
            <span>Explore Shree</span>
            <span className="scroll-line" />
          </div>
        </section>

        {/* SDK SECTION - 10 RESPONSIVE CARDS */}
        <section className="sdk-section section-shell">
          <div className="section-label">02 — SDK COMPONENTS</div>

          <div className="sdk-header">
            <h2>
              Built on 10 Verified
              <span> Intelligence SDKs.</span>
            </h2>
            <p>
              Ten comprehensive client surfaces delivering production-hardened AI capabilities
              with fail-closed security and pgvector hybrid retrieval.
            </p>
          </div>

          <div className="sdk-grid">
            {sdkCards.map((card, index) => (
              <motion.div
                key={card.title}
                className="sdk-card glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="sdk-card-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUICKSTART CODE BLOCK */}
        <section className="quickstart-section section-shell">
          <div className="section-label">03 — QUICKSTART</div>

          <div className="quickstart-grid">
            <div className="quickstart-content">
              <h2>
                Get Started in
                <span> 5 Minutes.</span>
              </h2>
              <p>
                Add the Shree AI OS library to your Java 21+ project and start 
                building deterministic intelligent applications immediately.
              </p>

              <div className="quickstart-steps">
                <div className="step">
                  <span className="step-number">01</span>
                  <div>
                    <strong>Add Dependency</strong>
                    <p>Add io.github.darshanrathod04:shree-ai-os:1.0.6-developer-preview to pom.xml</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">02</span>
                  <div>
                    <strong>Initialize Runtime</strong>
                    <p>Bootstrap via ShreeAI.builder().apiKey(...) with BYOK support</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-number">03</span>
                  <div>
                    <strong>Execute AI Tasks</strong>
                    <p>Run grounded chat, episodic memory recall, and DAG planning</p>
                  </div>
                </div>
              </div>

              <div className="quickstart-cta">
                <Link href="/docs" className="primary-button">
                  View Full Documentation
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>

            <div className="quickstart-code">
              <div className="code-header">
                <span className="code-title">Quickstart.java</span>
                <CopyButton text={quickstartCode} />
              </div>
              <pre className="code-block">
                <code>{quickstartCode}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="trust-section">
          <div className="trust-container">
            <div className="trust-strip">
              {trustMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="trust-metric"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <span className="metric-value">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
