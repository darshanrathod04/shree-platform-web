'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  Workflow,
  Zap,
  FileCode,
  CheckCircle2,
  AlertCircle,
  GitBranch,
  FlaskConical,
  ArrowRight,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { useDeveloper } from '@/context/developer-context';
import { WorkflowBuildResult } from '@/lib/developer-api';

export default function WorkflowPage() {
  const {
    sessions,
    activeSessionId,
    build,
    apply,
    buildResult,
    applyResult,
    isWorkflowLoading,
    error,
    clearError,
  } = useDeveloper();

  const [instruction, setInstruction] = useState('');
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [applying, setApplying] = useState(false);

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  const handleBuild = async () => {
    if (!instruction.trim()) return;
    await build(instruction);
  };

  const handleApply = async () => {
    if (!instruction.trim()) return;
    setApplying(true);
    try {
      const result = await apply(instruction);
      if (result) {
        // Navigate to review
        window.location.href = '/developer/review';
      }
    } finally {
      setApplying(false);
    }
  };

  if (!activeSessionId || !activeSession) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: 'var(--background)' }}>
        <Workflow size={40} style={{ color: 'var(--muted)' }} />
        <h2 className="text-xl font-semibold">No Active Workspace</h2>
        <Link href="/developer" className="mt-2 flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium" style={{ background: 'var(--accent)', color: '#fff' }}>
          Go to Dashboard
        </Link>
      </div>
    );
  }

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
          <Workflow size={18} style={{ color: 'var(--accent-tertiary)' }} />
          <h1 className="font-semibold text-sm">Developer Workflow</h1>
          <span className="rounded px-1.5 py-0.5 text-xs" style={{ background: 'color-mix(in srgb, var(--accent-tertiary) 15%, transparent)', color: 'var(--accent-tertiary)' }}>
            {activeSession.projectName}
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8 space-y-6">
        {error && (
          <div className="flex items-center justify-between rounded-xl p-4" style={{ background: 'color-mix(in srgb, #ef4444 10%, transparent)', border: '1px solid rgba(239,68,68,0.2)' }}>
            <div className="flex items-center gap-3">
              <AlertCircle size={18} className="text-red-400" />
              <span className="text-sm text-red-300">{error}</span>
            </div>
            <button onClick={clearError} className="rounded p-1 hover:bg-white/10">
              <AlertCircle size={14} className="text-red-400" />
            </button>
          </div>
        )}

        {/* Instruction Input */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h2 className="mb-1 font-semibold">Developer Instruction</h2>
          <p className="mb-4 text-xs" style={{ color: 'var(--muted)' }}>
            Describe what you want to build. The autonomous workflow will analyze impact,
            generate code, validate, and produce test skeletons.
          </p>
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder={'e.g. "Add JWT authentication with refresh tokens"'}
            rows={4}
            className="mb-4 w-full rounded-xl p-4 text-sm"
            style={{ background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)', outline: 'none', resize: 'vertical' }}
          />
          <div className="flex gap-3">
            <button
              onClick={handleBuild}
              disabled={!instruction.trim() || isWorkflowLoading}
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-50"
              style={{ background: 'var(--accent-tertiary)', color: '#fff' }}
            >
              {isWorkflowLoading && !applying ? <RefreshCw size={14} className="animate-spin" /> : <Zap size={14} />}
              {isWorkflowLoading && !applying ? 'Generating…' : 'Generate Workflow'}
            </button>
            <button
              onClick={handleApply}
              disabled={!buildResult || applying || isWorkflowLoading}
              className="flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors disabled:opacity-50"
              style={{ background: 'var(--accent)', color: '#fff' }}
            >
              {applying ? <RefreshCw size={14} className="animate-spin" /> : <ArrowRight size={14} />}
              {applying ? 'Applying…' : 'Generate + Apply'}
            </button>
          </div>
        </div>

        {/* Pipeline Steps */}
        <PipelineSteps hasBuild={!!buildResult} isLoading={isWorkflowLoading && !applying} />

        {/* Build Result */}
        {buildResult && (
          <BuildResultCard result={buildResult} showMarkdown={showMarkdown} onToggleMarkdown={() => setShowMarkdown(!showMarkdown)} />
        )}
      </main>
    </div>
  );
}

function PipelineSteps({ hasBuild, isLoading }: { hasBuild: boolean; isLoading: boolean }) {
  const steps = [
    { label: 'Intent Analysis', icon: Zap, done: isLoading || hasBuild },
    { label: 'Project Intelligence', icon: Workflow, done: isLoading || hasBuild },
    { label: 'Impact Analysis', icon: GitBranch, done: isLoading || hasBuild },
    { label: 'Code Generation', icon: FileCode, done: isLoading || hasBuild },
    { label: 'Validation', icon: CheckCircle2, done: isLoading || hasBuild },
    { label: 'Test Skeletons', icon: FlaskConical, done: isLoading || hasBuild },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto rounded-2xl p-4" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium" style={{
            background: isLoading ? 'color-mix(in srgb, var(--accent-tertiary) 10%, transparent)'
              : hasBuild ? 'color-mix(in srgb, #42d98a 15%, transparent)'
              : 'var(--surface)',
            border: '1px solid',
            borderColor: isLoading ? 'var(--accent-tertiary)' : hasBuild ? '#42d98a' : 'var(--border)',
            color: isLoading ? 'var(--accent-tertiary)' : hasBuild ? '#42d98a' : 'var(--muted)',
          }}>
            {isLoading ? (
              <RefreshCw size={10} className="animate-spin" />
            ) : hasBuild ? (
              <CheckCircle2 size={10} />
            ) : (
              <s.icon size={10} />
            )}
            {s.label}
          </div>
          {i < steps.length - 1 && <ArrowRight size={12} style={{ color: 'var(--muted)', flexShrink: 0 }} />}
        </div>
      ))}
    </div>
  );
}

function BuildResultCard({ result, showMarkdown, onToggleMarkdown }: { result: WorkflowBuildResult; showMarkdown: boolean; onToggleMarkdown: () => void }) {
  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="grid grid-cols-4 gap-4">
        <MiniStat label="Confidence" value={`${Math.round(result.confidence * 100)}%`} color="var(--accent)" />
        <MiniStat label="Artifacts" value={result.artifactCount} color="var(--accent-secondary)" />
        <MiniStat label="Test Skeletons" value={result.testSkeletonCount} color="var(--accent-tertiary)" />
        <MiniStat label="Source Lines" value={result.totalSourceLines} color="#42d98a" />
      </div>

      {/* Markdown Summary */}
      <div className="rounded-2xl" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <button
          onClick={onToggleMarkdown}
          className="flex w-full items-center justify-between p-4 text-left"
        >
          <span className="text-sm font-medium">Workflow Summary</span>
          {showMarkdown ? <ChevronUp size={14} style={{ color: 'var(--muted)' }} /> : <ChevronDown size={14} style={{ color: 'var(--muted)' }} />}
        </button>
        {showMarkdown && (
          <div
            className="max-h-96 overflow-y-auto rounded-b-2xl border-t p-5 text-sm"
            style={{ borderColor: 'var(--border)', background: 'var(--background)' }}
          >
            <div className="whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--foreground)' }}>
              {result.markdownSummary || 'No summary generated.'}
            </div>
          </div>
        )}
      </div>

      {/* Artifacts */}
      {result.artifacts.length > 0 && (
        <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h3 className="mb-4 text-sm font-medium">Generated Artifacts</h3>
          <div className="space-y-2">
            {result.artifacts.map((a, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl px-4 py-3" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3">
                  <FileCode size={14} style={{ color: 'var(--accent-secondary)' }} />
                  <span className="text-sm font-mono">{a.path}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="rounded px-2 py-0.5 text-xs" style={{ background: 'color-mix(in srgb, var(--accent-tertiary) 10%, transparent)', color: 'var(--accent-tertiary)' }}>
                    {a.type}
                  </span>
                  <span className="text-xs" style={{ color: 'var(--muted)' }}>{a.lines} lines</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Test Skeletons */}
      {result.testSkeletons.length > 0 && (
        <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-medium">
            <FlaskConical size={14} style={{ color: 'var(--accent)' }} />
            Test Skeletons
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {result.testSkeletons.map((t, i) => (
              <div key={i} className="rounded-xl p-3" style={{ background: 'var(--background)', border: '1px solid var(--border)' }}>
                <p className="font-mono text-xs font-medium">{t.className}</p>
                <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>
                  {t.testName} · {t.caseCount} cases
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MiniStat({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
      <p className="text-xl font-bold" style={{ color }}>{value}</p>
      <p className="mt-0.5 text-xs" style={{ color: 'var(--muted)' }}>{label}</p>
    </div>
  );
}
