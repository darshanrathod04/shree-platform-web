'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  MessageSquare,
  Send,
  Sparkles,
  BookOpen,
  Database,
  Trash2,
  Brain,
  X,
} from 'lucide-react';
import { useDeveloper } from '@/context/developer-context';

const SUGGESTED_QUERIES = [
  'Explain the UserService class',
  'Where is authentication implemented?',
  'Which APIs modify Order?',
  'Find circular dependencies',
  'What services are in the project?',
  'List all REST controllers',
];

export default function ChatPage() {
  const {
    sessions,
    activeSessionId,
    setActiveSessionId,
    chatHistory,
    ask,
    remember,
    isChatLoading,
    error,
    clearError,
  } = useDeveloper();

  const [input, setInput] = useState('');
  const [showMemoryDialog, setShowMemoryDialog] = useState(false);
  const [memoryTitle, setMemoryTitle] = useState('');
  const [memoryContent, setMemoryContent] = useState('');

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !activeSessionId || isChatLoading) return;
    const q = input;
    setInput('');
    await ask(q);
  };

  const handleRemember = async () => {
    if (!memoryTitle.trim() || !memoryContent.trim()) return;
    await remember(memoryTitle, memoryContent);
    setMemoryTitle('');
    setMemoryContent('');
    setShowMemoryDialog(false);
  };

  if (!activeSessionId || !activeSession) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4" style={{ background: 'var(--background)' }}>
        <MessageSquare size={40} style={{ color: 'var(--muted)' }} />
        <h2 className="text-xl font-semibold">No Active Workspace</h2>
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          Open a project to start chatting with the engineering assistant.
        </p>
        <Link href="/developer" className="mt-2 flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium" style={{ background: 'var(--accent)', color: '#fff' }}>
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <header
        className="flex items-center justify-between px-6 py-4"
        style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex items-center gap-4">
          <Link href="/developer" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5" style={{ color: 'var(--muted)' }}>
            <ArrowLeft size={16} />
            Dashboard
          </Link>
          <div className="h-5 w-px" style={{ background: 'var(--border)' }} />
          <MessageSquare size={18} style={{ color: 'var(--accent-secondary)' }} />
          <div>
            <h1 className="font-semibold text-sm">AI Chat</h1>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>
              {activeSession.projectName}
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowMemoryDialog(true)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-white/5"
          style={{ color: 'var(--muted)' }}
        >
          <BookOpen size={14} />
          Remember
        </button>
      </header>

      {/* Error */}
      {error && (
        <div className="mx-6 mt-4 flex items-center justify-between rounded-xl p-3" style={{ background: 'color-mix(in srgb, #ef4444 10%, transparent)', border: '1px solid rgba(239,68,68,0.2)' }}>
          <span className="text-xs text-red-300">{error}</span>
          <button onClick={clearError}><X size={14} className="text-red-400" /></button>
        </div>
      )}

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {chatHistory.length === 0 ? (
            <EmptyState onAsk={(q) => setInput(q)} />
          ) : (
            chatHistory.map((m, i) => (
              <Message key={i} message={m} />
            ))
          )}
          {isChatLoading && (
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--accent-secondary)' }}>
                <Sparkles size={14} className="text-white" />
              </div>
              <div className="rounded-2xl px-4 py-3 text-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full" style={{ background: 'var(--accent-secondary)' }} />
                  <span style={{ color: 'var(--muted)' }}>Thinking…</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div
        className="border-t px-6 py-4"
        style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
      >
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your project (e.g. 'Explain the UserService class')"
            disabled={isChatLoading}
            className="flex-1 rounded-xl px-4 py-3 text-sm"
            style={{
              background: 'var(--background)',
              border: '1px solid var(--border)',
              color: 'var(--foreground)',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isChatLoading}
            className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-colors disabled:opacity-50"
            style={{ background: 'var(--accent-secondary)', color: '#fff' }}
          >
            <Send size={14} />
            Ask
          </button>
        </form>
      </div>

      {/* Memory Dialog */}
      {showMemoryDialog && (
        <Dialog onClose={() => setShowMemoryDialog(false)} title="Add to Project Memory">
          <div className="space-y-3">
            <input
              value={memoryTitle}
              onChange={(e) => setMemoryTitle(e.target.value)}
              placeholder="Title (e.g. 'Naming convention: *Controller suffix')"
              className="w-full rounded-xl px-3 py-2.5 text-sm"
              style={{ background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)' }}
            />
            <textarea
              value={memoryContent}
              onChange={(e) => setMemoryContent(e.target.value)}
              placeholder="Describe the convention, decision, or preference…"
              rows={6}
              className="w-full rounded-xl p-3 text-sm"
              style={{ background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)' }}
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowMemoryDialog(false)}
                className="flex-1 rounded-xl px-3 py-2 text-sm"
                style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                Cancel
              </button>
              <button
                onClick={handleRemember}
                disabled={!memoryTitle.trim() || !memoryContent.trim()}
                className="flex-1 rounded-xl px-3 py-2 text-sm font-medium disabled:opacity-50"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                Store
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

function Message({ message }: { message: any }) {
  return (
    <>
      {/* User */}
      <div className="flex items-start justify-end gap-3">
        <div className="max-w-xl rounded-2xl px-4 py-3 text-sm" style={{ background: 'var(--accent)', color: '#fff' }}>
          {message.question}
        </div>
      </div>
      {/* AI */}
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full" style={{ background: 'var(--accent-secondary)' }}>
          <Sparkles size={14} className="text-white" />
        </div>
        <div className="flex-1 rounded-2xl px-4 py-3 text-sm" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--muted)' }}>Engineering Assistant</span>
            <span className="rounded-full px-1.5 py-0.5 text-[10px] font-medium" style={{ background: 'color-mix(in srgb, #42d98a 15%, transparent)', color: '#42d98a' }}>
              {Math.round(message.confidence * 100)}%
            </span>
            {message.memoryUsed && (
              <span className="flex items-center gap-1 text-[10px]" style={{ color: 'var(--accent)' }}>
                <Database size={9} /> Memory
              </span>
            )}
          </div>
          <div className="whitespace-pre-wrap leading-relaxed">{message.answer}</div>
        </div>
      </div>
    </>
  );
}

function EmptyState({ onAsk }: { onAsk: (q: string) => void }) {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'color-mix(in srgb, var(--accent-secondary) 15%, transparent)' }}>
        <Brain size={20} style={{ color: 'var(--accent-secondary)' }} />
      </div>
      <h3 className="text-lg font-semibold">Ask Your Engineering Assistant</h3>
      <p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>
        Get grounded answers about the analyzed project.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-2">
        {SUGGESTED_QUERIES.map((q) => (
          <button
            key={q}
            onClick={() => onAsk(q)}
            className="rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-white/5"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

function Dialog({ children, title, onClose }: any) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl p-6"
        style={{ background: 'var(--surface-strong)', border: '1px solid var(--border)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose}><X size={16} style={{ color: 'var(--muted)' }} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}
