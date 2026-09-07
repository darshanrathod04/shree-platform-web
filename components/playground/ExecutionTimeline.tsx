'use client';

interface RuntimeEvent {
  type: string;
  requestId: string;
  stage: string;
  timestamp: string;
  metadata?: any;
}

interface Props {
  events?: RuntimeEvent[];
}

const defaultStages = [
  { name: 'Identity', completed: false },
  { name: 'Context', completed: false },
  { name: 'Memory', completed: false },
  { name: 'Knowledge', completed: false },
  { name: 'Reasoning', completed: false },
  { name: 'Planning', completed: false },
  { name: 'Execution', completed: false },
  { name: 'Reflection', completed: false }
];

export default function ExecutionTimeline({
  events = []
}: Props) {

  const stages = defaultStages.map(s => ({ ...s }));

  const stageMap: Record<string, number> = {
    IDENTITY_COMPLETED: 0,
    CONTEXT_COMPLETED: 1,
    MEMORY_RECALL_COMPLETED: 2,
    KNOWLEDGE_COMPLETED: 3,
    REASONING_COMPLETED: 4,
    PLANNING_COMPLETED: 5,
    ACTION_EXECUTION_COMPLETED: 6,
    EXECUTION_COMPLETED: 6,
    REFLECTION_COMPLETED: 7
  };

  events.forEach(event => {
    const index = stageMap[event.type];
    if (index !== undefined) {
      stages[index].completed = true;
    }
  });

  return (
    <div className="rounded-xl border border-white/10 bg-[#0D1117] p-5">

      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Pipeline Timeline</h3>
          <p className="text-xs text-gray-400">
            Live Runtime Pipeline
          </p>
        </div>

        <span className="rounded bg-violet-500/20 px-2 py-1 text-xs text-violet-300">
          {events.length} events
        </span>
      </div>

      <div className="flex items-center justify-between gap-2">

        {stages.map((stage, index) => (
          <div key={stage.name} className="flex flex-1 items-center">

            <div className="flex flex-col items-center">

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition-all ${
                  stage.completed
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : 'border-gray-700 bg-[#161B22] text-gray-500'
                }`}
              >
                {index + 1}
              </div>

              <span className="mt-2 text-center text-[11px] text-gray-300">
                {stage.name}
              </span>

            </div>

            {index < stages.length - 1 && (
              <div
                className={`mx-2 h-1 flex-1 rounded ${
                  stage.completed
                    ? 'bg-emerald-500'
                    : 'bg-gray-700'
                }`}
              />
            )}

          </div>
        ))}

      </div>

    </div>
  );
}