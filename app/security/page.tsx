"use client";

import Link from "next/link";
import { Shield, Lock, Users, Key, AlertTriangle, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function SecurityPage() {
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
            SHREE AI OS · SECURITY & TRUST
          </div>

          <div className="docs-hero-grid">
            <div>
              <span className="docs-hero-number">01</span>
              <h1>
                Security &
                <br />
                <span>Governance.</span>
              </h1>
            </div>

            <div className="docs-hero-description">
              <p>
                In-process runtime safety, fail-closed authorization architecture,
                tenant isolation boundaries, and privacy-first BYOK credential protection
                in Shree AI OS v1.0.6 Developer Preview.
              </p>

              <div className="docs-status">
                <span />
                v1.0.6 · ACTIVE SECURITY POLICY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY CONTENT */}
      <section className="docs-workspace">
        <div className="docs-container">
          <div className="space-y-12 py-10">

            {/* SUPPORTED VERSIONS */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                <CheckCircle2 size={18} />
                <span>SUPPORTED VERSIONS</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold">Release Lifecycle</h2>
              <p className="mt-2 text-[var(--muted)]">
                Security patches, static analysis audits, and vulnerability fixes are actively provided for the active Developer Preview:
              </p>

              <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)]">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[var(--background)] text-xs uppercase text-[var(--muted)]">
                    <tr>
                      <th className="px-6 py-3 font-semibold">Version</th>
                      <th className="px-6 py-3 font-semibold">Supported</th>
                      <th className="px-6 py-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border)] bg-[var(--surface)]">
                    <tr>
                      <td className="px-6 py-4 font-mono font-medium">1.0.6-developer-preview</td>
                      <td className="px-6 py-4 text-emerald-400 font-semibold">✅ Yes</td>
                      <td className="px-6 py-4 font-medium text-[var(--foreground)]">Active (Current Release)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-[var(--muted)]">1.0.5-developer-preview</td>
                      <td className="px-6 py-4 text-[var(--muted)]">❌ No</td>
                      <td className="px-6 py-4 text-[var(--muted)]">Deprecated</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-mono text-[var(--muted)]">Earlier releases</td>
                      <td className="px-6 py-4 text-[var(--muted)]">❌ No</td>
                      <td className="px-6 py-4 text-[var(--muted)]">Discontinued</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4 SECURITY PILLARS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pillar 1: Fail-Closed Gate */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                  <Shield size={18} />
                  <span>PILLAR 01</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Fail-Closed Authorization</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  All tool calls, subprocess invocations, and graph steps pass through <code>graphPermissionManager</code>.
                  If any evaluation encounters an exception, NPE, or unmapped capability, the gate strictly returns <code>PermissionDecision.DENY</code>.
                  The platform never fails open under abnormal conditions.
                </p>
              </div>

              {/* Pillar 2: Tenant Isolation */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                  <Users size={18} />
                  <span>PILLAR 02</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Strict Multi-Tenant Isolation</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  Every runtime request carries an authenticated <code>TenantContext</code>. Memory stores, session caches,
                  reflection records, and pgvector tables enforce strict <code>tenant_id</code> partitioning,
                  preventing cross-tenant data access.
                </p>
              </div>

              {/* Pillar 3: BYOK Protection */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                  <Key size={18} />
                  <span>PILLAR 03</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">BYOK Credential Protection</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  API keys managed through <code>SettingsSDK</code> reside strictly in volatile in-process JVM memory.
                  Credentials are automatically masked before logging, never serialized to disk, and never broadcast over the event bus.
                </p>
              </div>

              {/* Pillar 4: Deterministic Guardrails */}
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
                <div className="flex items-center gap-3 text-sm font-semibold text-[var(--accent)]">
                  <Lock size={18} />
                  <span>PILLAR 04</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">Deterministic Pre-LLM Guardrails</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  LLMs are treated as probabilistic generators, never execution authorities. Goal decomposition,
                  DAG planning, capability validation, and patch safety audits occur deterministically in Java before any model invocation.
                </p>
              </div>
            </div>

            {/* REPORTING A VULNERABILITY */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-amber-400">
                <AlertTriangle size={18} />
                <span>RESPONSIBLE DISCLOSURE</span>
              </div>
              <h2 className="mt-3 text-2xl font-bold">Reporting a Vulnerability</h2>
              <p className="mt-2 text-[var(--muted)] leading-relaxed">
                If you discover a potential vulnerability or boundary bypass in Shree AI OS, please do NOT disclose it publicly.
                Submit all reports via <strong>GitHub Private Vulnerability Reporting</strong> under the Security tab of the repository.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <span className="text-xs uppercase text-[var(--muted)]">Acknowledgement</span>
                  <p className="mt-1 text-base font-semibold text-[var(--accent)]">&lt; 48 Hours</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <span className="text-xs uppercase text-[var(--muted)]">Assessment</span>
                  <p className="mt-1 text-base font-semibold text-[var(--accent)]">&lt; 5 Days</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <span className="text-xs uppercase text-[var(--muted)]">P0 Critical Patch</span>
                  <p className="mt-1 text-base font-semibold text-rose-400">&lt; 72 Hours</p>
                </div>
                <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <span className="text-xs uppercase text-[var(--muted)]">Disclosure</span>
                  <p className="mt-1 text-base font-semibold text-emerald-400">Coordinated</p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-start">
                <a
                  href="https://github.com/darshanrathod04/shree-ai-os/security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  Open GitHub Security Center
                  <ArrowUpRight size={15} />
                </a>
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
              Zero-Trust Architecture.
              <br />
              <span>Production-Hardened JVM.</span>
            </h2>
            <p>
              Review the complete platform architecture, 10 SDK facades, or run the test verification suites.
            </p>

            <div className="docs-cta-actions">
              <Link href="/quickstart">
                Developer Quickstart
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
