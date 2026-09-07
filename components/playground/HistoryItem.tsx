'use client';

import { HistoryEntry } from '@/context/playground-context';

export default function HistoryItem({
  item,
  onSelect
}: {
  item: HistoryEntry;
  onSelect: (entry: HistoryEntry) => void;
}) {
  return (
    <button
      onClick={() => onSelect(item)}
      className="w-full rounded-lg border border-white/5 bg-white/5 p-3 text-left hover:bg-white/10"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">
          {item.module}
        </span>

        <span className="text-xs text-cyan-400">
          {item.duration} ms
        </span>
      </div>

      <p className="mt-1 line-clamp-2 text-xs text-gray-400">
        {JSON.stringify(item.request)}
      </p>

      <p className="mt-2 text-[11px] text-gray-500">
        {new Date(item.createdAt).toLocaleTimeString()}
      </p>
    </button>
  );
}