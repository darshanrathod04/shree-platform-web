'use client';

import { PLAYGROUND_BACKEND } from "@/lib/playground-api";

import { useEffect, useState } from 'react';

interface RuntimeEvent {
  type: string;
  requestId: string;
  stage: string;
  timestamp: string;
  metadata: Record<string, unknown>;
}

export default function EventStream() {
  const [events, setEvents] = useState<RuntimeEvent[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const eventSource = new EventSource(
      `${PLAYGROUND_BACKEND}/api/playground/stream`
    );

    eventSource.onopen = () => {
      console.log('SSE connected');
      setConnected(true);
    };

    eventSource.onmessage = (event) => {
      const data: RuntimeEvent = JSON.parse(event.data);

      setEvents((prev) => [data, ...prev].slice(0, 100));
    };

    eventSource.onerror = () => {
      console.warn('SSE disconnected');
      setConnected(false);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="flex h-[520px] flex-col rounded-xl border border-white/10 bg-[#0D1117]">
      <div className="border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-white">Live Runtime Events</h3>
            <p className="text-xs text-gray-400">
              RuntimeEventBus • Real-time
            </p>
          </div>

          <div
            className={`h-2 w-2 rounded-full ${
              connected ? 'bg-emerald-400' : 'bg-red-400'
            }`}
          />
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-3">
        {events.length === 0 ? (
          <p className="text-sm text-gray-500">
            {connected
              ? 'Waiting for runtime events...'
              : 'Connecting to runtime...'}
          </p>
        ) : (
          events.map((event, index) => (
            <div
              key={`${event.requestId}-${index}`}
              className="rounded-lg border border-white/5 bg-black/30 p-3"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-semibold text-violet-400">
                  {event.type}
                </span>

                <span className="text-[10px] text-gray-500">
                  {new Date(event.timestamp).toLocaleTimeString()}
                </span>
              </div>

              <p className="text-xs text-cyan-300">{event.stage}</p>

              <p className="mt-1 truncate text-[10px] text-gray-500">
                {event.requestId}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}