'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FolderOpen,
  MessageSquare,
  Workflow,
  GitCompare,
  Settings,
  BookOpen,
  Cpu,
  Layers,
  Zap,
  ChevronRight,
  X,
  RefreshCw,
  AlertCircle,
} from 'lucide-react';
import { useDeveloper } from '@/context/developer-context';

export default function DeveloperDashboard() {
  const {
    sessions,
    activeSessionId,
    setActiveSessionId,
    summary,
    openWorkspace,
    closeWorkspace,
    refreshSessions,
    error,
    clearError,
    buildResult,
    applyResult,
  } = useDeveloper();

  const [openPath, setOpenPath] = useState('');
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    refreshSessions();
  }, [refreshSessions]);

  const handleOpen = async () => {
    if (!openPath.trim()) return;
    setIsOpening(true);
    try {
      await openWorkspace(openPath.trim());
      setOpenPath('');
    } finally {
      setIsOpening(false);
    }
  };

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  const modules = [
    {
      id: 'workspace',
      label: 'Workspace',
      icon: FolderOpen,
      href: '/developer/workspace',
      description: 'Open project, view structure and statistics',
      color: 'var(--accent)',
    },
    {
      id: 'chat',
      label: 'AI Chat',
      icon: MessageSquare,
      href: '/developer/chat',
      description: 'Natural language engineering assistant',
      color: 'var(--accent-secondary)',
    },
    {
      id: 'workflow',
      label: 'Workflow',
      icon: Workflow,
      href: '/developer/workflow',
      description: 'Autonomous code generation pipeline',
      color: 'var(--accent-tertiary)',
    },
    {
      id: 'review',
      label: 'Diff Review',
      icon: GitCompare,
      href: '/developer/review',
      description: 'Safe apply with rollback',
      color: '#42d98a',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      href: '/developer/settings',
      description: 'LLM provider configuration',
      color: '#98a2b3',
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Top Navigation */}
      <header
        className="glass sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Cpu size={20} style={{ color: 'var(--accent)' }} />
            <span className="font-semibold text-base">Shree Developer Intelligence</span>
            <span
              className="rounded px-1.5 py-0.5 text-xs font-medium"
              style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}
            >
              v1.0
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {modules.map((m) => (
            <Link
              key={m.id}
              href={m.href}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
              style={{ color: 'var(--muted)' }}
            >
              <m.icon size={15} />
              {m.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        {/* Error Banner */}
        {error && (
          <div
            className="mb-6 flex items-center justify-between rounded-xl p-4"
            style={{ background: 'color-mix(in srgb, #ef4444 10%, transparent)', border: '1px solid rgba(239,68,68,0.2)' }}
          >
            <div className="flex items-center gap-3">
              <AlertCircle size={18} className="text-red-400" />
              <span className="text-sm text-red-300">{error}</span>
            </div>
            <button onClick={clearError} className="rounded p-1 hover:bg-white/10">
              <X size={16} className="text-red-400" />
            </button>
          </div>
        )}

        {/* Active Workspace Banner */}
        {activeSession && (
          <div
            className="mb-8 flex items-center justify-between rounded-2xl p-5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)' }}
              >
                <Layers size={22} style={{ color: 'var(--accent)' }} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{activeSession.projectName}</h2>
                <p className="mt-0.5 text-sm" style={{ color: 'var(--muted)' }}>
                  {activeSession.projectPath}
                </p>
                <div className="mt-2 flex items-center gap-4">
                  {activeSession.analyzed && (
                    <>
                      <Stat label="Classes" value={activeSession.classCount} />
                      <Stat label="APIs" value={activeSession.endpointCount} />
                      <Stat label="Modules" value={activeSession.moduleCount} />
                      <Stat label="Build" value={activeSession.buildSystem} />
                      <Stat label="Framework" value={activeSession.framework} />
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => refreshSessions()}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors hover:bg-white/5"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                <RefreshCw size={14} />
                Refresh
              </button>
              <button
                onClick={() => closeWorkspace(activeSession.id)}
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10"
              >
                <X size={14} />
                Close
              </button>
            </div>
          </div>
        )}

        {/* Open Project */}
        <section className="mb-10">
          <h3 className="mb-3 flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--muted-strong)' }}>
            <FolderOpen size={15} />
            Open Project
          </h3>
          <div className="flex gap-3">
            <input
              value={openPath}
              onChange={(e) => setOpenPath(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
              placeholder="Enter absolute path to a project (e.g. /Users/dev/my-spring-app)"
              className="flex-1 rounded-xl px-4 py-3 text-sm"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                outline: 'none',
              }}
            />
            <button
              onClick={handleOpen}
              disabled={isOpening || !openPath.trim()}
              className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors disabled:opacity-50"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              {isOpening ? (
                <RefreshCw size={14} className="animate-spin" />
              ) : (
                <FolderOpen size={14} />
              )}
              {isOpening ? 'Opening…' : 'Open'}
            </button>
          </div>
          <p className="mt-2 text-xs" style={{ color: 'var(--muted)' }}>
            Enter a local repository path to analyze its structure with Project Intelligence.
          </p>
        </section>

        {/* Session Switcher */}
        {sessions.length > 0 && (
          <section className="mb-10">
            <h3 className="mb-3 text-sm font-medium" style={{ color: 'var(--muted-strong)' }}>
              Open Sessions ({sessions.length})
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {sessions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSessionId(s.id)}
                  className="flex items-center justify-between rounded-xl p-4 text-left transition-all"
                  style={{
                    background: s.id === activeSessionId
                      ? 'color-mix(in srgb, var(--accent) 10%, transparent)'
                      : 'var(--surface)',
                    border: s.id === activeSessionId
                      ? '1px solid color-mix(in srgb, var(--accent) 40%, transparent)'
                      : '1px solid var(--border)',
                  }}
                >
                  <div>
                    <p className="font-medium">{s.projectName}</p>
                    <p className="mt-0.5 text-xs" style={{ color: 'var(--muted)' }}>
                      {s.classCount} classes · {s.endpointCount} endpoints
                    </p>
                  </div>
                  <ChevronRight size={16} style={{ color: 'var(--muted)' }} />
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Module Cards */}
        <section>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--muted-strong)' }}>
            <BookOpen size={15} />
            Modules
          </h3>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {modules.map((m) => (
              <Link
                key={m.id}
                href={m.href}
                className="group rounded-2xl p-5 transition-all hover:-translate-y-0.5"
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `color-mix(in srgb, ${m.color} 15%, transparent)` }}>
                  <m.icon size={20} style={{ color: m.color }} />
                </div>
                <h4 className="mb-1 font-semibold">{m.label}</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {m.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        {(buildResult || applyResult) && (
          <section className="mt-10">
            <h3 className="mb-4 flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--muted-strong)' }}>
              <Zap size={15} />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {buildResult && (
                <div
                  className="flex items-center justify-between rounded-xl p-4"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-3">
                    <Workflow size={18} style={{ color: 'var(--accent-tertiary)' }} />
                    <div>
                      <p className="text-sm font-medium">Workflow generated</p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>
                        {buildResult.artifactCount} artifacts · {buildResult.totalSourceLines} lines · {buildResult.confidence.toFixed(1)} confidence
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/developer/workflow"
                    className="flex items-center gap-1 text-xs"
                    style={{ color: 'var(--accent)' }}
                  >
                    View <ChevronRight size={12} />
                  </Link>
                </div>
              )}
              {applyResult && (
                <div
                  className="flex items-center justify-between rounded-xl p-4"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-3">
                    <GitCompare size={18} style={{ color: '#42d98a' }} />
                    <div>
                      <p className="text-sm font-medium">
                        Apply {applyResult.isSuccess ? 'succeeded' : 'failed'} — {applyResult.status}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>
                        {applyResult.appliedCount}/{applyResult.totalPatches} patches · Risk: {applyResult.riskLevel} · {applyResult.confidence.toFixed(1)} confidence
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/developer/review"
                    className="flex items-center gap-1 text-xs"
                    style={{ color: '#42d98a' }}
                  >
                    Review <ChevronRight size={12} />
                  </Link>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-xs" style={{ color: 'var(--muted)' }}>
          Built on Shree AI OS v1.0 · Phase 2 MVP
        </footer>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
        {label}
      </span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}
