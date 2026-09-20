"use client";

import Link from "next/link";
import { useState } from "react";
import { Copy, Check, Terminal, Code2, ShieldCheck, Zap } from "lucide-react";

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

const mavenSnippet = `<!-- Maven Dependency Coordinates -->
<dependency>
    <groupId>io.github.darshanrathod04</groupId>
    <artifactId>shree-ai-os</artifactId>
    <version>1.0.6-developer-preview</version>
</dependency>`;

const javaBootstrapSnippet = `package com.example.demo;

import com.shreeai.os.platform.sdk.ShreeAI;
import com.shreeai.os.platform.sdk.SDKResponse;
import com.shreeai.os.platform.core.RuntimeConfiguration;

public class Application {
    public static void main(String[] args) {
        // 1. Configure runtime with fail-closed security and hybrid RAG
        RuntimeConfiguration config = RuntimeConfiguration.builder()
            .defaultProvider("gemini-3.6-flash")
            .failClosed(true)
            .build();

        // 2. Initialize fluent client on Java 21 LTS
        ShreeAI shree = ShreeAI.builder()
            .apiKey(System.getenv().getOrDefault("GEMINI_API_KEY", "local"))
            .configuration(config)
            .build();

        // 3. Execute grounded chat through the 11-stage cognitive pipeline
        SDKResponse response = shree.chat("Explain hybrid RRF vector retrieval");
        System.out.println("Answer: " + response.answer());
        System.out.println("Confidence: " + response.confidence());

        // 4. Clean shutdown of virtual threads and kernel services
        shree.close();
    }
}`;

const hybridRagSnippet = `// Ingest documentation into pgvector with deduplication
shree.knowledge().ingest("PostgreSQL 16 with pgvector HNSW provides sub-millisecond retrieval.");

// Execute Hybrid RRF search (HNSW KNN + GIN Full-Text Search)
var results = shree.knowledge().search("pgvector HNSW performance");
results.forEach(entry -> System.out.println("Matched chunk: " + entry.getContent()));`;

const memorySnippet = `// Store episodic context scoped strictly to current tenant
shree.memory().store("deployment-target", "Kubernetes 1.30");

// Recall semantically relevant episodic context
var memories = shree.memory().recall("target cluster infrastructure");
memories.forEach(m -> System.out.println("Recalled: " + m.getValue()));`;

export default function QuickstartPage() {
  return (
    <main className="docs-page">
      {/* HERO */}
      <section className="docs-hero">
        <div className="docs-container">
          <Link href="/" className="docs-back">
            <span>←</span>
            Back to Shree AI OS
          </Link>

          <div className="docs-hero-label">
            <span />
            SHREE AI OS · DEVELOPER QUICKSTART
          </div>

          <div className="docs-hero-grid">
            <div>
              <span className="docs-hero-number">01</span>
              <h1>
                Developer
                <br />
                <span>Quickstart.</span>
              </h1>
            </div>

            <div className="docs-hero-description">
              <p>
                Get started with Shree AI OS v1.0.6 Developer Preview in under 5 minutes.
                In-process AI runtime for Java with deterministic behavior, privacy-first
                boundaries, and 10 verified SDK facades on Java 21 LTS.
              </p>

              <div className="docs-status">
                <span />
                v1.0.6 · DEVELOPER PREVIEW
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICKSTART CONTENT */}
      <section className="docs-workspace">
        <div className="docs-container">
          <div className="space-y-12 py-10">

            {/* STEP 1: PREREQUISITES */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                <Terminal size={18} />
                <span>STEP 01 · PREREQUISITES</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold">Java 21 LTS & Maven</h2>
              <p className="mt-2 text-[var(--muted)]">
                Shree AI OS is native to the modern Java virtual machine. Virtual threads, record patterns,
                and sealed interfaces are leveraged for high-throughput cognitive pipelines.
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <span className="text-xs uppercase text-[var(--muted)]">Java Baseline</span>
                  <p className="mt-1 font-semibold">Java 21 LTS (or 24)</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <span className="text-xs uppercase text-[var(--muted)]">Build Tool</span>
                  <p className="mt-1 font-semibold">Maven 3.9+ / Gradle 8+</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <span className="text-xs uppercase text-[var(--muted)]">Vector Store</span>
                  <p className="mt-1 font-semibold">pgvector / In-Memory</p>
                </div>
              </div>
            </div>

            {/* STEP 2: DEPENDENCY */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                <Code2 size={18} />
                <span>STEP 02 · MAVEN DEPENDENCY</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold">Add Dependency Coordinates</h2>
              <p className="mt-2 text-[var(--muted)]">
                Add the official v1.0.6 developer preview coordinates to your <code>pom.xml</code>:
              </p>

              <div className="quickstart-code mt-4">
                <div className="code-header">
                  <span className="code-title">pom.xml</span>
                  <CopyButton text={mavenSnippet} />
                </div>
                <pre className="code-block">
                  <code>{mavenSnippet}</code>
                </pre>
              </div>
            </div>

            {/* STEP 3: BOOTSTRAP */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                <Zap size={18} />
                <span>STEP 03 · RUNTIME BOOTSTRAP</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold">Bootstrap with ShreeAI.builder()</h2>
              <p className="mt-2 text-[var(--muted)]">
                Configure runtime security, default providers, and execute your first request through the 11-stage pipeline:
              </p>

              <div className="quickstart-code mt-4">
                <div className="code-header">
                  <span className="code-title">Application.java</span>
                  <CopyButton text={javaBootstrapSnippet} />
                </div>
                <pre className="code-block">
                  <code>{javaBootstrapSnippet}</code>
                </pre>
              </div>
            </div>

            {/* STEP 4: CAPABILITY EXAMPLES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hybrid RAG */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                  <ShieldCheck size={18} />
                  <span>HYBRID RAG (KnowledgeSDK)</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Vector Ingest & RRF Search</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Combined HNSW vector proximity with GIN full-text keyword ranking:
                </p>

                <div className="quickstart-code mt-4">
                  <div className="code-header">
                    <span className="code-title">KnowledgeExample.java</span>
                    <CopyButton text={hybridRagSnippet} />
                  </div>
                  <pre className="code-block">
                    <code>{hybridRagSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Episodic Memory */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                  <ShieldCheck size={18} />
                  <span>EPISODIC CONTEXT (MemorySDK)</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Tenant-Isolated Context</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Retain and semantically recall context across multi-turn sessions:
                </p>

                <div className="quickstart-code mt-4">
                  <div className="code-header">
                    <span className="code-title">MemoryExample.java</span>
                    <CopyButton text={memorySnippet} />
                  </div>
                  <pre className="code-block">
                    <code>{memorySnippet}</code>
                  </pre>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="docs-cta">
        <div className="docs-container">
          <div className="docs-cta-card">
            <span>SHREE AI OS</span>
            <h2>
              Explore the 10 SDKs.
              <br />
              <span>Or inspect the architecture.</span>
            </h2>
            <p>
              Dive into the full SDK facade documentation or understand the 5-layer platform design.
            </p>

            <div className="docs-cta-actions">
              <Link href="/sdk">
                Explore 10 SDKs
                <span>↗</span>
              </Link>
              <Link href="/architecture">
                Platform Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
