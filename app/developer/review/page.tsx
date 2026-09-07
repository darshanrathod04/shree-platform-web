'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  GitCompare,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  ChevronDown,
  ChevronUp,
  FileCode,
  Shield,
  FlaskConical,
} from 'lucide-react';
import { useDeveloper } from '@/context/developer-context';
import { WorkflowApplyResult, Diff } from '@/lib/developer-api';

export default function ReviewPage() {
  const { applyResult, setSelectedDiff, selectedDiff } = useDeveloper();
  const [selectedTab, setSelectedTab] = useState<'diffs' | 'rollback' | 'compile'>('diffs');

  const statusColor = (status: string) => {
    if (status === 'SUCCESS') return '#42d98a';
    if (status === 'PARTIAL_SUCCESS') return '#ffbd58';
    if (status === 'FAILED') return '#ef4444';
    return 'var(--muted)';
  };

  const riskColor = (risk: string) => {
    if (risk === 'NONE') return '#42d98a';
    if (risk === 'LOW') return '#35c7ff';
    if (risk === 'MEDIUM') return '#ffbd58';
    return '#ef4444';
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
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
          <GitCompare size={18} style={{ color: '#42d98a' }} />
          <h1 className="font-semibold text-sm">Diff Review</h1>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8 space-y-6">
        {!applyResult ? (
          <div className="flex flex-col items-center justify-center gap-5 py-20">
            <GitCompare size={48} style={{ color: 'var(--muted)' }} />
            <div className="text-center">
              <h2 className="text-xl font-semibold">No Apply Results</h2>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
                Run a developer workflow and apply it to see the diff review.
              </p>
            </div>
            <Link
              href="/developer/workflow"
              className="mt-2 flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              Go to Workflow
            </Link>
          </div>
        ) : (
          <>
            {/* Execution Header */}
            <ExecutionHeader result={applyResult} riskColor={riskColor} statusColor={statusColor} />

            {/* Tabs */}
            <div className="flex gap-1 rounded-xl p-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              {([
                { id: 'diffs', label: 'File Changes', icon: FileCode },
                { id: 'rollback', label: 'Rollback Plan', icon: RotateCcw },
                { id: 'compile', label: 'Compile Validation', icon: Shield },
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all"
                  style={{
                    background: selectedTab === tab.id ? 'var(--accent)' : 'transparent',
                    color: selectedTab === tab.id ? '#fff' : 'var(--muted)',
                  }}
                >
                  <tab.icon size={14} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Diffs Tab */}
            {selectedTab === 'diffs' && (
              <DiffList diffs={applyResult.diffs} onSelect={setSelectedDiff} selected={selectedDiff} statusColor={statusColor} />
            )}

            {/* Rollback Tab */}
            {selectedTab === 'rollback' && (
              <RollbackView result={applyResult} />
            )}

            {/* Compile Tab */}
            {selectedTab === 'compile' && (
              <CompileView result={applyResult} />
            )}

            {/* Selected Diff Detail */}
            {selectedDiff && (
              <DiffDetail diff={selectedDiff} onClose={() => setSelectedDiff(null)} statusColor={statusColor} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

function ExecutionHeader({ result, riskColor, statusColor }: {
  result: WorkflowApplyResult;
  riskColor: (r: string) => string;
  statusColor: (s: string) => string;
}) {
  const StatusIcon = result.isSuccess ? CheckCircle2 : XCircle;

  return (
    <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: `color-mix(in srgb, ${result.isSuccess ? '#42d98a' : '#ef4444'} 15%, transparent)` }}>
            <StatusIcon size={22} style={{ color: result.isSuccess ? '#42d98a' : '#ef4444' }} />
          </div>
          <div>
            <h2 className="text-lg font-bold">
              {result.isSuccess ? 'Apply Succeeded' : 'Apply Failed'} — {result.status}
            </h2>
            <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>
              Execution {result.executionId} · {result.appliedCount}/{result.totalPatches} patches applied · {Math.round(result.confidence * 100)}% confidence
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Risk Level */}
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <p className="text-xl font-bold" style={{ color: riskColor(result.riskLevel) }}>{result.riskLevel}</p>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>Risk Level</p>
          </div>
          {/* Applied */}
          <div className="rounded-xl px-4 py-3 text-center" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
            <p className="text-xl font-bold" style={{ color: statusColor(result.status) }}>{result.appliedCount}/{result.totalPatches}</p>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>Patches Applied</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiffList({ diffs, onSelect, selected, statusColor }: {
  diffs: Diff[];
  onSelect: (d: Diff | null) => void;
  selected: Diff | null;
  statusColor: (s: string) => string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
        {diffs.length} File Changes
      </p>
      {diffs.map((d, i) => {
        const StatusIcon = d.isSuccess ? CheckCircle2 : XCircle;
        return (
          <button
            key={i}
            onClick={() => onSelect(selected?.filePath === d.filePath ? null : d)}
            className="flex w-full items-center justify-between rounded-xl p-4 text-left transition-colors hover:bg-white/5"
            style={{
              background: selected?.filePath === d.filePath ? 'color-mix(in srgb, var(--accent) 8%, transparent)' : 'var(--surface)',
              border: `1px solid ${selected?.filePath === d.filePath ? 'var(--accent)' : 'var(--border)'}`,
            }}
          >
            <div className="flex items-center gap-3">
              <StatusIcon size={14} style={{ color: statusColor(d.status) }} />
              <span className="font-mono text-sm">{d.filePath.split('/').pop()}</span>
              <span className="text-xs" style={{ color: 'var(--muted)' }}>{d.filePath}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: 'var(--muted)' }}>{d.linesChanged} lines</span>
              {d.isSuccess ? (
                <CheckCircle2 size={12} className="text-green-400" />
              ) : (
                <XCircle size={12} className="text-red-400" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function DiffDetail({ diff, onClose, statusColor }: {
  diff: Diff;
  onClose: () => void;
  statusColor: (s: string) => string;
}) {
  const [tab, setTab] = useState<'after' | 'before'>('after');

  return (
    <div className="rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <div className="flex items-center justify-between border-b p-4" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-3">
          <FileCode size={16} style={{ color: statusColor(diff.status) }} />
          <span className="font-mono text-sm">{diff.filePath}</span>
          {diff.isSuccess ? (
            <span className="rounded px-2 py-0.5 text-xs font-medium" style={{ background: 'color-mix(in srgb, #42d98a 15%, transparent)', color: '#42d98a' }}>SUCCESS</span>
          ) : (
            <span className="rounded px-2 py-0.5 text-xs font-medium" style={{ background: 'color-mix(in srgb, #ef4444 15%, transparent)', color: '#ef4444' }}>FAILED</span>
          )}
        </div>
        <button onClick={onClose} className="rounded p-1 hover:bg-white/10">
          <XCircle size={16} style={{ color: 'var(--muted)' }} />
        </button>
      </div>

      <div className="flex border-b" style={{ borderColor: 'var(--border)' }}>
        {(['after', 'before'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="flex-1 px-4 py-2 text-sm font-medium capitalize"
            style={{
              borderBottom: `2px solid ${tab === t ? 'var(--accent)' : 'transparent'}`,
              color: tab === t ? 'var(--accent)' : 'var(--muted)',
            }}
          >
            {t === 'after' ? 'Generated' : 'Original'}
          </button>
        ))}
      </div>

      <pre
        className="max-h-96 overflow-auto p-5 font-mono text-xs leading-relaxed"
        style={{ background: 'var(--background)' }}
      >
        {(tab === 'after' ? diff.after : diff.before) || '(empty)'}
      </pre>
    </div>
  );
}

function RollbackView({ result }: { result: WorkflowApplyResult }) {
  const rollback = result.rollback;

  if (!rollback || rollback.isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl py-16" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <RotateCcw size={36} style={{ color: 'var(--muted)' }} />
        <p className="text-sm" style={{ color: 'var(--muted)' }}>No rollback plan available for this execution.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <p className="text-xl font-bold">{rollback.fileCount}</p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>Files to Rollback</p>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <p className="text-xl font-bold">{rollback.totalActions}</p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>Undo Actions</p>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: 'color-mix(in srgb, #42d98a 8%, transparent)', border: '1px solid rgba(66,217,138,0.2)' }}>
          <Shield size={20} style={{ color: '#42d98a' }} className="mx-auto mb-1" />
          <p className="text-xs" style={{ color: '#42d98a' }}>Rollback Available</p>
        </div>
      </div>

      {/* Entries */}
      <div className="space-y-3">
        {rollback.entries.map((entry, i) => (
          <div key={i} className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
            <div className="mb-3 flex items-center gap-2">
              <RotateCcw size={14} style={{ color: '#ffbd58' }} />
              <span className="font-mono text-sm">{entry.filePath}</span>
              <span className="ml-auto text-xs" style={{ color: 'var(--muted)' }}>{entry.actionCount} actions</span>
            </div>
            <div className="space-y-1.5">
              {entry.actions.map((action, j) => (
                <div key={j} className="flex items-center gap-3 text-xs">
                  <span className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase" style={{ background: 'rgba(255,189,88,0.1)', color: '#ffbd58' }}>{action.type}</span>
                  <span className="font-mono">{action.target}</span>
                  <span style={{ color: 'var(--muted)' }}>— {action.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompileView({ result }: { result: WorkflowApplyResult }) {
  const compile = result.compile;

  if (!compile) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl py-16" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <FlaskConical size={36} style={{ color: 'var(--muted)' }} />
        <p className="text-sm" style={{ color: 'var(--muted)' }}>No compile validation available.</p>
      </div>
    );
  }

  const compileColor = compile.status === 'SUCCESS' ? '#42d98a' : compile.status === 'FAILURE' ? '#ef4444' : 'var(--muted)';
  const CompileIcon = compile.status === 'SUCCESS' ? CheckCircle2 : compile.status === 'FAILURE' ? XCircle : AlertTriangle;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <CompileIcon size={24} style={{ color: compileColor }} />
        <div>
          <h3 className="font-semibold" style={{ color: compileColor }}>
            Compile {compile.status}
          </h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            {compile.filesCompiled} files compiled · {compile.errors} errors · {compile.warnings} warnings
          </p>
        </div>
      </div>

      {compile.diagnostics.length > 0 && (
        <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h4 className="mb-3 text-sm font-medium">Diagnostics</h4>
          <div className="space-y-2">
            {compile.diagnostics.map((d, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                <span className="font-mono" style={{ color: 'var(--muted)' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
