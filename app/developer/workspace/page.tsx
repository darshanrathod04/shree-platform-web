'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Layers,
  Package,
  Hash,
  GitBranch,
  AlertTriangle,
  CheckCircle2,
  Search,
  RefreshCw,
  X,
} from 'lucide-react';
import { useDeveloper } from '@/context/developer-context';
import { ProjectSummary, ProjectClass, ProjectImpact } from '@/lib/developer-api';

export default function WorkspacePage() {
  const { sessions, activeSessionId, summary, setActiveSessionId, loadSummary } = useDeveloper();
  const [classSearch, setClassSearch] = useState('');
  const [selectedClass, setSelectedClass] = useState<ProjectClass | null>(null);
  const [impact, setImpact] = useState<ProjectImpact | null>(null);
  const [isLoadingImpact, setIsLoadingImpact] = useState(false);
  const [tab, setTab] = useState<'overview' | 'explorer' | 'risks'>('overview');

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  useEffect(() => {
    if (activeSessionId) {
      loadSummary(activeSessionId);
    }
  }, [activeSessionId, loadSummary]);

  const handleSelectClass = async (name: string) => {
    setSelectedClass(null);
    setImpact(null);
    setIsLoadingImpact(true);
    try {
      const cls = await import('@/lib/developer-api').then(m => m.developerApi.workspace.findClass(activeSessionId!, name));
      setSelectedClass(cls);
      setImpact(null);
      // Also load impact
      try {
        const imp = await import('@/lib/developer-api').then(m => m.developerApi.workspace.impact(activeSessionId!, name));
        setImpact(imp);
      } catch {}
    } catch (e) {
      console.error('Failed to load class:', e);
    } finally {
      setIsLoadingImpact(false);
    }
  };

  if (!activeSession) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: 'var(--background)' }}>
        <Layers size={40} style={{ color: 'var(--muted)' }} />
        <h2 className="text-xl font-semibold">No Active Workspace</h2>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Open a project from the dashboard to start analyzing.
        </p>
        <Link
          href="/developer"
          className="mt-2 flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
          style={{ background: 'var(--accent)', color: '#fff' }}
        >
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex items-center gap-4">
          <Link href="/developer" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5" style={{ color: 'var(--muted)' }}>
            <ArrowLeft size={16} />
            Dashboard
          </Link>
          <div className="h-5 w-px" style={{ background: 'var(--border)' }} />
          <Layers size={18} style={{ color: 'var(--accent)' }} />
          <div>
            <h1 className="font-semibold text-sm">{activeSession.projectName}</h1>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>{activeSession.projectPath}</p>
          </div>
          {activeSession.analyzed && (
            <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium" style={{ background: 'color-mix(in srgb, #42d98a 15%, transparent)', color: '#42d98a' }}>
              <CheckCircle2 size={12} />
              Analyzed
            </span>
          )}
        </div>
        <button onClick={() => loadSummary(activeSessionId!)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5" style={{ color: 'var(--muted)' }}>
          <RefreshCw size={14} />
          Refresh
        </button>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-xl p-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          {(['overview', 'explorer', 'risks'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 rounded-lg px-4 py-2 text-sm font-medium capitalize transition-all"
              style={{
                background: tab === t ? 'var(--accent)' : 'transparent',
                color: tab === t ? '#fff' : 'var(--muted)',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {tab === 'overview' && summary && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <StatCard label="Total Classes" value={summary.statistics.classes} icon={Package} color="var(--accent)" />
              <StatCard label="Controllers" value={summary.statistics.controllers} icon={Layers} color="var(--accent-secondary)" />
              <StatCard label="Services" value={summary.statistics.services} icon={Hash} color="var(--accent-tertiary)" />
              <StatCard label="REST Endpoints" value={summary.statistics.restApis} icon={GitBranch} color="#42d98a" />
            </div>

            {/* Metadata */}
            <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <h3 className="mb-4 text-sm font-semibold" style={{ color: 'var(--muted-strong)' }}>Project Metadata</h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                <MetaRow label="Project Name" value={summary.projectName} />
                <MetaRow label="Build System" value={summary.buildSystem} />
                <MetaRow label="Framework" value={summary.framework} />
                <MetaRow label="Modules" value={summary.modules.join(', ') || '—'} />
                <MetaRow label="Repositories" value={summary.statistics.repositories} />
                <MetaRow label="Entities" value={summary.statistics.entities} />
                <MetaRow label="Configuration Beans" value={summary.statistics.beans} />
                <MetaRow label="Java Methods" value={summary.statistics.classes > 0 ? '~' + (summary.statistics.classes * 3) : 0} />
              </div>
            </div>

            {/* Risk Summary */}
            {summary.risks.length > 0 && (
              <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', border: '1px solid rgba(255,189,88,0.2)' }}>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-yellow-400">
                  <AlertTriangle size={15} />
                  Detected Risks
                </h3>
                <ul className="space-y-2">
                  {summary.risks.map((r, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      <span style={{ color: 'var(--muted)' }}>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Explorer Tab */}
        {tab === 'explorer' && (
          <div className="grid grid-cols-3 gap-6">
            {/* Class Search */}
            <div className="col-span-1">
              <div className="mb-4">
                <div className="flex items-center gap-2 rounded-xl px-3 py-2.5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <Search size={14} style={{ color: 'var(--muted)' }} />
                  <input
                    value={classSearch}
                    onChange={(e) => setClassSearch(e.target.value)}
                    placeholder="Search classes…"
                    className="flex-1 bg-transparent text-sm outline-none"
                    style={{ color: 'var(--foreground)' }}
                  />
                </div>
                <p className="mt-2 text-xs" style={{ color: 'var(--muted)' }}>
                  Search by class name. Type to filter the list.
                </p>
              </div>
              <ClassList
                summary={summary}
                search={classSearch}
                onSelect={handleSelectClass}
                isLoading={isLoadingImpact}
              />
            </div>

            {/* Class Detail */}
            <div className="col-span-2">
              {isLoadingImpact ? (
                <ClassSkeleton />
              ) : selectedClass ? (
                <ClassDetail cls={selectedClass} impact={impact} />
              ) : (
                <div
                  className="flex h-96 flex-col items-center justify-center rounded-2xl p-8"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <Search size={32} style={{ color: 'var(--muted)' }} />
                  <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
                    Select a class to view its details and impact analysis.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Risks Tab */}
        {tab === 'risks' && (
          <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <h3 className="mb-4 text-sm font-semibold" style={{ color: 'var(--muted-strong)' }}>
              Architecture Risk Assessment
            </h3>
            {summary?.risks && summary.risks.length > 0 ? (
              <div className="space-y-3">
                {summary.risks.map((r, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl p-4" style={{ background: 'rgba(255,189,88,0.05)', border: '1px solid rgba(255,189,88,0.15)' }}>
                    <AlertTriangle size={16} className="mt-0.5 shrink-0 text-yellow-400" />
                    <span className="text-sm">{r}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--muted)' }}>
                <CheckCircle2 size={16} className="text-green-400" />
                No architectural risks detected in this project.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: { label: string; value: number; icon: any; color: string }) {
  return (
    <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `color-mix(in srgb, ${color} 15%, transparent)` }}>
        <Icon size={18} style={{ color }} />
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>{label}</p>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string | number }) {
  return (
    <>
      <span style={{ color: 'var(--muted)' }}>{label}</span>
      <span className="font-medium">{value}</span>
    </>
  );
}

function ClassList({ summary, search, onSelect, isLoading }: {
  summary: ProjectSummary | null;
  search: string;
  onSelect: (name: string) => void;
  isLoading: boolean;
}) {
  // Heuristic: show class counts by role as clickable items
  const roles = [
    { label: 'Controllers', count: summary?.statistics.controllers ?? 0, role: 'CONTROLLER' },
    { label: 'Services', count: summary?.statistics.services ?? 0, role: 'SERVICE' },
    { label: 'Repositories', count: summary?.statistics.repositories ?? 0, role: 'REPOSITORY' },
    { label: 'Entities', count: summary?.statistics.entities ?? 0, role: 'ENTITY' },
  ];

  return (
    <div className="space-y-2">
      {isLoading && (
        <div className="rounded-xl p-4 text-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)' }}>
          Loading…
        </div>
      )}
      {!isLoading && roles.map((r) => (
        <button
          key={r.role}
          onClick={() => onSelect(r.label)}
          className="w-full flex items-center justify-between rounded-xl p-3 text-left transition-colors hover:bg-white/5"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <span className="text-sm font-medium">{r.label}</span>
          <span className="text-xs" style={{ color: 'var(--muted)' }}>{r.count} classes</span>
        </button>
      ))}
    </div>
  );
}

function ClassDetail({ cls, impact }: { cls: ProjectClass; impact: ProjectImpact | null }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <div className="mb-1 text-xs" style={{ color: 'var(--muted)' }}>{cls.packageName}</div>
        <h3 className="text-lg font-bold">{cls.name}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Tag label={cls.kind} />
          {cls.role !== 'NONE' && <Tag label={cls.role} color="var(--accent)" />}
          {cls.modifiers.map((m) => <Tag key={m} label={m} color="var(--muted)" />)}
        </div>
        {cls.superClass && (
          <p className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>
            Extends: <span className="font-medium" style={{ color: 'var(--foreground)' }}>{cls.superClass}</span>
          </p>
        )}
      </div>

      {/* Fields */}
      {cls.fields.length > 0 && (
        <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            Fields ({cls.fields.length})
          </h4>
          <div className="space-y-1.5">
            {cls.fields.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-xs" style={{ color: 'var(--muted)' }}>{f.modifiers.join(' ')}</span>
                <span className="font-mono text-xs" style={{ color: 'var(--accent-secondary)' }}>{f.type}</span>
                <span className="font-mono text-xs">{f.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Methods */}
      {cls.methods.length > 0 && (
        <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            Methods ({cls.methods.length})
          </h4>
          <div className="space-y-1.5">
            {cls.methods.slice(0, 15).map((m, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                {m.httpMethod && <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase" style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}>{m.httpMethod}</span>}
                <span className="font-mono text-xs" style={{ color: 'var(--accent-tertiary)' }}>{m.returnType}</span>
                <span className="font-mono text-xs">{m.name}()</span>
              </div>
            ))}
            {cls.methods.length > 15 && (
              <p className="text-xs" style={{ color: 'var(--muted)' }}>+{cls.methods.length - 15} more methods</p>
            )}
          </div>
        </div>
      )}

      {/* Impact */}
      {impact && (
        <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            Impact Analysis — Depth: {impact.dependencyDepth}
          </h4>
          {impact.affectedClasses.length > 0 && (
            <div className="mb-3">
              <p className="mb-1.5 text-xs" style={{ color: 'var(--muted)' }}>Affected Classes:</p>
              <div className="flex flex-wrap gap-1.5">
                {impact.affectedClasses.map((c, i) => (
                  <span key={i} className="rounded px-2 py-0.5 text-xs" style={{ background: 'rgba(255,189,88,0.1)', color: '#ffbd58' }}>{c}</span>
                ))}
              </div>
            </div>
          )}
          {impact.affectedEndpoints.length > 0 && (
            <div>
              <p className="mb-1.5 text-xs" style={{ color: 'var(--muted)' }}>Affected APIs:</p>
              <div className="space-y-1">
                {impact.affectedEndpoints.slice(0, 10).map((e, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="font-bold uppercase" style={{ color: 'var(--accent)' }}>{e.httpMethod}</span>
                    <span>{e.path}</span>
                    <span style={{ color: 'var(--muted)' }}>· {e.className}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ClassSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="h-4 w-32 rounded bg-white/10" />
          <div className="mt-2 h-6 w-48 rounded bg-white/10" />
        </div>
      ))}
    </div>
  );
}

function Tag({ label, color = 'var(--muted)' }: { label: string; color?: string }) {
  return (
    <span className="rounded px-2 py-0.5 text-xs font-medium" style={{ background: `color-mix(in srgb, ${color} 15%, transparent)`, color }}>
      {label}
    </span>
  );
}
