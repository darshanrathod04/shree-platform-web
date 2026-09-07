'use client';

import { useState } from 'react';

import SessionSidebar from '@/components/playground/SessionSidebar';
import ExecutionTimeline from '@/components/playground/ExecutionTimeline';
import ResponseViewer from '@/components/playground/ResponseViewer';
import EventStream from '@/components/playground/EventStream';
import DeveloperTools from '@/components/playground/DeveloperTools';
import ErrorInspector from '@/components/playground/ErrorInspector';

import { playgroundApi } from '@/lib/playground-api';
import { usePlayground } from '@/context/playground-context';

type Module =
  | 'chat'
  | 'knowledge-search'
  | 'knowledge-query'
  | 'knowledge-ingest'
  | 'memory-store'
  | 'memory-search'
  | 'memory-recall'
  | 'planning'
  | 'execution'
  | 'reflection';

export default function PlaygroundPage() {

  const { addHistory, runtimeEvents } = usePlayground();

  const [module, setModule] = useState<Module>('chat');

  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(0);

  const [response, setResponse] = useState<any>(null);
  const [currentRequest, setCurrentRequest] = useState<any>(null);

  // Chat
  const [message, setMessage] = useState('');

  // Knowledge
  const [query, setQuery] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Planning
  const [objectiveId, setObjectiveId] = useState('');
  const [objective, setObjective] = useState('');
  const [scope, setScope] = useState('ENTERPRISE');

  // Execution
  const [capability, setCapability] = useState('project-planning');
  const [input, setInput] = useState('');

  // Reflection
  const [executionId, setExecutionId] = useState('');
  const [tenantId] = useState('default');

  async function execute() {

    setLoading(true);

    const started = performance.now();

    let data: any = null;
    let request: any = {};

    try {

      switch (module) {

        case 'chat':
          request = { message };
          data = await playgroundApi.chat(message);
          break;

        case 'knowledge-search':
          request = { query };
          data = await playgroundApi.knowledgeSearch(query);
          break;

        case 'knowledge-query':
          request = { query };
          data = await playgroundApi.knowledgeQuery(query);
          break;

        case 'knowledge-ingest':
          request = { title, content };
          data = await playgroundApi.knowledgeIngest(title, content);
          break;

        case 'memory-store':
          request = { title, content };
          data = await playgroundApi.memoryStore(title, content);
          break;

        case 'memory-search':
          request = { query };
          data = await playgroundApi.memorySearch(query);
          break;

        case 'memory-recall':
          request = { query };
          data = await playgroundApi.memoryRecall(query);
          break;

        case 'planning':
          request = { objectiveId, objective, scope };
          data = await playgroundApi.createPlan(request);
          break;

        case 'execution':
          request = { capability, input };
          data = await playgroundApi.execute(capability, input);
          break;

        case 'reflection':
          request = { executionId, tenantId };
          data = await playgroundApi.reflect(executionId);
          break;
      }

      const ms = Math.round(performance.now() - started);

      setDuration(ms);
      setCurrentRequest(request);
      setResponse(data);

      addHistory({
        module,
        request,
        response: data,
        duration: ms
      });

    } catch (err: any) {

      setCurrentRequest(request);

      setResponse({
        error: err.message
      });

    } finally {
      setLoading(false);
    }
  }

  return (

  <div className="pt-16 bg-[#05070C] text-white">
    <div className="flex min-h-[calc(100vh-64px)]">

      <SessionSidebar
        onSelect={(entry) => {
          setCurrentRequest(entry.request);
          setResponse(entry.response);
          setDuration(entry.duration);
        }}
      />

      <main className="flex-1 overflow-y-auto p-8">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Shree AI OS Playground
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              Enterprise SDK Testing Environment
            </p>

          </div>

          <div className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-4 py-2">

            <p className="text-xs text-violet-300">
              SDK Version
            </p>

            <p className="font-semibold">
              1.0.0
            </p>

          </div>

        </div>

        {/* Module Selector */}

        <div className="mb-6 grid grid-cols-5 gap-2">

          {[
            ['Chat', 'chat'],
            ['K Search', 'knowledge-search'],
            ['K Query', 'knowledge-query'],
            ['Ingest', 'knowledge-ingest'],
            ['Memory', 'memory-search'],
            ['Recall', 'memory-recall'],
            ['Store', 'memory-store'],
            ['Planning', 'planning'],
            ['Execution', 'execution'],
            ['Reflection', 'reflection']
          ].map(([label, key]) => (

            <button
              key={key}
              onClick={() => setModule(key as Module)}
              className={`rounded-lg px-3 py-2 text-sm transition ${
                module === key
                  ? 'bg-violet-600'
                  : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              {label}
            </button>

          ))}

        </div>

        {/* Timeline */}

        <ExecutionTimeline events={runtimeEvents} />

        <div className="mt-6 grid grid-cols-12 gap-6">

          {/* Form */}

          <div className="col-span-7">

            <div className="rounded-xl border border-white/10 bg-[#0D1117] p-6">

              <h2 className="mb-5 text-lg font-semibold">
                {module.toUpperCase()}
              </h2>

              {/* Chat */}

              {module === 'chat' && (
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask anything..."
                  className="h-40 w-full rounded-lg bg-black/30 p-3 outline-none"
                />
              )}

              {/* Search */}

              {(module === 'knowledge-search' ||
                module === 'knowledge-query' ||
                module === 'memory-search' ||
                module === 'memory-recall') && (
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter query..."
                  className="w-full rounded-lg bg-black/30 p-3 outline-none"
                />
              )}

              {/* Store / Ingest */}

              {(module === 'memory-store' ||
                module === 'knowledge-ingest') && (
                <div className="space-y-3">

                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="w-full rounded-lg bg-black/30 p-3"
                  />

                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content..."
                    className="h-40 w-full rounded-lg bg-black/30 p-3"
                  />

                </div>
              )}

              {/* Planning */}

              {module === 'planning' && (
                <div className="space-y-3">

                  <input
                    value={objectiveId}
                    onChange={(e) => setObjectiveId(e.target.value)}
                    placeholder="Objective ID"
                    className="w-full rounded-lg bg-black/30 p-3"
                  />

                  <textarea
                    value={objective}
                    onChange={(e) => setObjective(e.target.value)}
                    placeholder="Objective..."
                    className="h-32 w-full rounded-lg bg-black/30 p-3"
                  />

                  <select
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full rounded-lg bg-black/30 p-3"
                  >
                    <option>SMALL</option>
                    <option>MEDIUM</option>
                    <option>ENTERPRISE</option>
                  </select>

                </div>
              )}

              {/* Execution */}

              {module === 'execution' && (
                <div className="space-y-3">

                  <input
                    value={capability}
                    onChange={(e) => setCapability(e.target.value)}
                    placeholder="Capability"
                    className="w-full rounded-lg bg-black/30 p-3"
                  />

                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Execution Input..."
                    className="h-32 w-full rounded-lg bg-black/30 p-3"
                  />

                </div>
              )}

              {/* Reflection */}

              {module === 'reflection' && (
                <input
                  value={executionId}
                  onChange={(e) => setExecutionId(e.target.value)}
                  placeholder="Execution ID"
                  className="w-full rounded-lg bg-black/30 p-3"
                />
              )}

              <button
                onClick={execute}
                disabled={loading}
                className="mt-6 rounded-lg bg-violet-600 px-5 py-3 font-medium hover:bg-violet-500 disabled:opacity-50"
              >
                {loading ? 'Executing...' : 'Execute SDK'}
              </button>

            </div>

            <div className="mt-6">

              <ResponseViewer
                response={response}
                loading={loading}
                duration={duration}
              />

              <div className="mt-4">
                <ErrorInspector response={response} />
              </div>

              <div className="mt-5">
                <DeveloperTools
                  endpoint="/api/playground/chat"
                  request={currentRequest ?? {}}
                  response={response ?? {}}
                />
              </div>

            </div>

          </div>

          {/* Live Event Stream */}

          <div className="col-span-5">
            <EventStream />
          </div>

        </div>

      </main>

      </div>

    </div>

  );
}