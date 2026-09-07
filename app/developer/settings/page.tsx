'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowLeft,
  Settings,
  Key,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Database,
} from 'lucide-react';

const PROVIDERS = [
  { id: 'openai', label: 'OpenAI', placeholder: 'sk-...' },
  { id: 'anthropic', label: 'Anthropic', placeholder: 'sk-ant-...' },
  { id: 'azure', label: 'Azure OpenAI', placeholder: 'Azure API key' },
  { id: 'google', label: 'Google AI', placeholder: 'Google API key' },
  { id: 'ollama', label: 'Ollama (local)', placeholder: 'http://localhost:11434' },
  { id: 'groq', label: 'Groq', placeholder: 'gsk_...' },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'providers' | 'memory'>('providers');
  const [providers, setProviders] = useState<Record<string, { enabled: boolean; key: string; endpoint: string; saved: boolean }>>({});
  const [showKey, setShowKey] = useState<Record<string, boolean>>({});

  const toggleProvider = (id: string) => {
    setProviders((prev) => ({
      ...prev,
      [id]: { ...prev[id], enabled: !prev[id]?.enabled },
    }));
  };

  const saveProvider = (id: string) => {
    setProviders((prev) => ({
      ...prev,
      [id]: { ...prev[id], saved: true },
    }));
  };

  const deleteProvider = (id: string) => {
    setProviders((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const maskKey = (key: string) => {
    if (!key) return '';
    if (key.length <= 8) return '****';
    return '****' + key.slice(-4);
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
          <Settings size={18} style={{ color: '#98a2b3' }} />
          <h1 className="font-semibold text-sm">Settings</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        {/* Tabs */}
        <div className="flex gap-1 rounded-xl p-1" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          {([
            { id: 'providers', label: 'LLM Providers', icon: Key },
            { id: 'memory', label: 'Project Memory', icon: Database },
          ] as const).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all"
              style={{
                background: activeTab === tab.id ? 'var(--accent)' : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--muted)',
              }}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Providers Tab */}
        {activeTab === 'providers' && (
          <div className="space-y-4">
            <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="mb-1 flex items-center gap-2">
                <Key size={16} style={{ color: 'var(--accent)' }} />
                <h2 className="font-semibold text-sm">LLM Provider Configuration</h2>
              </div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                Configure your LLM API keys. Keys are masked — only the last 4 characters are visible.
                All keys are stored in-memory and never persisted to disk.
              </p>
            </div>

            {PROVIDERS.map((p) => {
              const config = providers[p.id];
              const hasConfig = !!config;
              const isEnabled = config?.enabled ?? false;

              return (
                <div key={p.id} className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ background: 'color-mix(in srgb, var(--accent) 12%, transparent)' }}
                      >
                        <Cpu size={16} style={{ color: 'var(--accent)' }} />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">{p.label}</h3>
                        {hasConfig && config.saved && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <CheckCircle2 size={10} className="text-green-400" />
                            <span className="text-[10px]" style={{ color: '#42d98a' }}>Configured</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <label className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: 'var(--muted)' }}>Enable</span>
                      <button
                        onClick={() => toggleProvider(p.id)}
                        className="relative h-6 w-11 rounded-full transition-colors"
                        style={{ background: isEnabled ? 'var(--accent)' : 'var(--border)' }}
                      >
                        <span
                          className="absolute top-1 h-4 w-4 rounded-full bg-white transition-transform"
                          style={{ left: isEnabled ? '22px' : '4px' }}
                        />
                      </button>
                    </label>
                  </div>

                  {isEnabled && (
                    <div className="space-y-3">
                      {/* API Key */}
                      <div>
                        <label className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--muted)' }}>
                          API Key
                        </label>
                        <div className="flex gap-2">
                          <div className="relative flex-1">
                            <input
                              type={showKey[p.id] ? 'text' : 'password'}
                              value={config?.key ?? ''}
                              onChange={(e) => setProviders((prev) => ({ ...prev, [p.id]: { ...prev[p.id], key: e.target.value, enabled: true, endpoint: prev[p.id]?.endpoint ?? '', saved: false } }))}
                              placeholder={p.placeholder}
                              className="w-full rounded-xl px-3 py-2.5 pr-10 text-sm"
                              style={{ background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)', outline: 'none' }}
                            />
                            <button
                              onClick={() => setShowKey((prev) => ({ ...prev, [p.id]: !prev[p.id] }))}
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                              style={{ color: 'var(--muted)' }}
                            >
                              {showKey[p.id] ? <EyeOff size={14} /> : <Eye size={14} />}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Endpoint (for Ollama) */}
                      {p.id === 'ollama' && (
                        <div>
                          <label className="mb-1.5 block text-xs font-medium" style={{ color: 'var(--muted)' }}>
                            Ollama Endpoint
                          </label>
                          <input
                            value={config?.endpoint ?? ''}
                            onChange={(e) => setProviders((prev) => ({ ...prev, [p.id]: { ...prev[p.id], endpoint: e.target.value, enabled: true, key: prev[p.id]?.key ?? '', saved: false } }))}
                            placeholder="http://localhost:11434"
                            className="w-full rounded-xl px-3 py-2.5 text-sm"
                            style={{ background: 'var(--background)', border: '1px solid var(--border)', color: 'var(--foreground)', outline: 'none' }}
                          />
                        </div>
                      )}

                      {/* Saved key preview */}
                      {hasConfig && config.saved && config.key && (
                        <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs" style={{ background: 'rgba(66,217,138,0.08)', border: '1px solid rgba(66,217,138,0.15)' }}>
                          <CheckCircle2 size={12} className="text-green-400" />
                          <span style={{ color: 'var(--muted)' }}>Saved (masked):</span>
                          <span className="font-mono" style={{ color: '#42d98a' }}>{maskKey(config.key)}</span>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <button
                          onClick={() => saveProvider(p.id)}
                          disabled={!config?.key}
                          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium disabled:opacity-50"
                          style={{ background: 'var(--accent)', color: '#fff' }}
                        >
                          <CheckCircle2 size={13} />
                          Save
                        </button>
                        <button
                          onClick={() => deleteProvider(p.id)}
                          className="flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10"
                        >
                          <Trash2 size={13} />
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <button
              onClick={() => {
                // Add custom provider
                const id = 'custom-' + Date.now();
                setProviders((prev) => ({ ...prev, [id]: { enabled: true, key: '', endpoint: '', saved: false } }));
              }}
              className="flex w-full items-center justify-center gap-2 rounded-2xl p-4 text-sm transition-colors hover:bg-white/5"
              style={{ border: '1px dashed var(--border)', color: 'var(--muted)' }}
            >
              <Plus size={16} />
              Add Custom Provider
            </button>
          </div>
        )}

        {/* Memory Tab */}
        {activeTab === 'memory' && (
          <div className="space-y-4">
            <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="mb-1 flex items-center gap-2">
                <Database size={16} style={{ color: 'var(--accent)' }} />
                <h2 className="font-semibold text-sm">Project Memory</h2>
              </div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                Workspace-scoped memory stores project-specific knowledge: coding conventions,
                architecture decisions, naming rules, and team preferences.
                Memories are stored in-memory and available to the AI Chat assistant.
              </p>
            </div>

            <div className="rounded-2xl p-8 text-center" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <Database size={36} style={{ color: 'var(--muted)' }} className="mx-auto mb-3" />
              <h3 className="font-medium">Memory is managed in Chat</h3>
              <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
                Use the "Remember" button in the AI Chat to store project-specific memories.
                They are scoped to the active workspace session.
              </p>
              <Link
                href="/developer/chat"
                className="mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                Go to AI Chat
              </Link>
            </div>
          </div>
        )}

        {/* Platform Info */}
        <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
            Platform
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { label: 'Platform', value: 'Shree AI OS v1.0' },
              { label: 'SDK Version', value: '1.0.0' },
              { label: 'Intelligence', value: 'In-Memory' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl p-3" style={{ background: 'var(--background)' }}>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>{item.label}</p>
                <p className="mt-1 text-sm font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
