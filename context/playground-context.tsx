'use client';

import { createContext, useContext, useState } from 'react';

export interface HistoryEntry {
  id: string;
  module: string;
  request: any;
  response: any;
  duration: number;
  createdAt: string;
}

interface PlaygroundState {
  sessionId: string;
  history: HistoryEntry[];
  runtimeEvents: RuntimeEvent[];
  newSession: () => void;
  addHistory: (item: Omit<HistoryEntry, 'id' | 'createdAt'>) => void;
  addRuntimeEvent: (event: RuntimeEvent) => void;
}

interface RuntimeEvent {
  type: string;
  requestId: string;
  stage: string;
  timestamp: string;
  metadata?: unknown;
}

const Context = createContext<PlaygroundState | null>(null);

export function PlaygroundProvider({ children }: { children: React.ReactNode }) {
  const [sessionId, setSessionId] = useState(crypto.randomUUID());
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  const [runtimeEvents, setRuntimeEvents] = useState<RuntimeEvent[]>([]);

  function addRuntimeEvent(event: RuntimeEvent) {
    setRuntimeEvents(prev => [event, ...prev].slice(0, 200));
  }

  function newSession() {
    setSessionId(crypto.randomUUID());
    setHistory([]);
  }

  function addHistory(item: Omit<HistoryEntry, 'id' | 'createdAt'>) {
    setHistory(prev => [
      {
        ...item,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString()
      },
      ...prev
    ]);
  }

  return (
    <Context.Provider
      value={{
        sessionId,
        history,
        runtimeEvents,
        newSession,
        addHistory,
        addRuntimeEvent
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function usePlayground() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error('PlaygroundProvider missing');
  return ctx;
}