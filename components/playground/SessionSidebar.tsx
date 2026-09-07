'use client';

import { useEffect, useState } from 'react';
import { usePlayground } from '@/context/playground-context';
import HistoryItem from './HistoryItem';

interface Props {
  onSelect: (entry: any) => void;
}

export default function SessionSidebar({ onSelect }: Props) {
  const { sessionId, history, newSession } = usePlayground();

  // Prevent SSR/CSR hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <aside className="w-80 border-r border-white/10 bg-[#080B12] p-4 flex flex-col">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-white">
          Playground Session
        </h2>

        <p className="mt-1 break-all text-xs text-gray-400">
          {mounted ? sessionId : 'Initializing...'}
        </p>
      </div>

      {/* New Session */}
      <button
        onClick={newSession}
        className="mb-5 w-full rounded-lg bg-violet-600 py-2 font-medium text-white transition hover:bg-violet-500"
      >
        + New Session
      </button>

      {/* History Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">
          Request History
        </h3>

        <span className="rounded bg-white/5 px-2 py-1 text-xs text-gray-400">
          {history.length}
        </span>
      </div>

      {/* History List */}
      <div className="flex-1 space-y-3 overflow-y-auto pr-1">
        {history.length === 0 ? (
          <div className="rounded-lg border border-dashed border-white/10 p-4 text-center text-sm text-gray-500">
            No requests yet
          </div>
        ) : (
          history.map((item: any) => (
            <HistoryItem
              key={item.id}
              item={item}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </aside>
  );
}