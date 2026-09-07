'use client';

interface Props {
  response: any;
  loading?: boolean;
  duration?: number;
}

export default function ResponseViewer({
  response,
  loading = false,
  duration = 0
}: Props) {
  if (loading) {
    return (
      <div className="rounded-xl border border-white/10 bg-[#0D1117] p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-5 w-48 rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-5/6 rounded bg-white/5" />
          <div className="h-32 rounded bg-black/30" />
        </div>
      </div>
    );
  }

  if (!response) {
    return (
      <div className="rounded-xl border border-dashed border-white/10 bg-[#0D1117] p-10 text-center text-gray-500">
        Execute any SDK request to see the response.
      </div>
    );
  }

  const payload = response.structuredPayload ?? {};

  const copyJson = () => {
    navigator.clipboard.writeText(
      JSON.stringify(response, null, 2)
    );
  };

  const confidence = Math.round((response.confidence ?? 0) * 100);

  return (
    <div className="space-y-5">

      {/* Header */}

      <div className="rounded-xl border border-white/10 bg-[#0D1117] p-5">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-lg font-semibold">
              SDK Response
            </h3>

            <p className="text-sm text-gray-400">
              Runtime • SDK v1
            </p>
          </div>

          <button
            onClick={copyJson}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
          >
            Copy JSON
          </button>

        </div>

        <div className="mt-5 grid grid-cols-3 gap-4">

          <Metric
            label="Confidence"
            value={`${confidence}%`}
            color="green"
          />

          <Metric
            label="Response Time"
            value={`${duration} ms`}
            color="blue"
          />

          <Metric
            label="Reasoning"
            value={response.reasoningAvailable ? 'YES' : 'NO'}
            color="violet"
          />

        </div>

      </div>

      {/* Answer */}

      <div className="rounded-xl border border-white/10 bg-[#0D1117] p-5">

        <h4 className="mb-3 font-semibold">
          Answer
        </h4>

        <div className="rounded-lg bg-black/30 p-4 whitespace-pre-wrap text-gray-100">
          {response.answer}
        </div>

      </div>

      {/* Structured Payload */}

      <div className="rounded-xl border border-white/10 bg-[#0D1117] p-5">

        <h4 className="mb-3 font-semibold">
          Structured Payload
        </h4>

        {Object.keys(payload).length === 0 ? (
          <div className="text-gray-500">
            No structured payload available.
          </div>
        ) : (
          <div className="space-y-3">

            {payload.intelligenceContext && (
              <Card title="Intelligence Context">
                <Field
                  k="Request ID"
                  v={payload.intelligenceContext.request?.requestId}
                />
                <Field
                  k="User Input"
                  v={payload.intelligenceContext.request?.userInput}
                />
                <Field
                  k="Source"
                  v={payload.intelligenceContext.metadata?.source}
                />
              </Card>
            )}

            {payload.response && (
              <Card title="Synthesized Response">
                <Field
                  k="Style"
                  v={payload.response.style}
                />
                <Field
                  k="Confidence"
                  v={payload.response.confidence}
                />
                <Field
                  k="Generated"
                  v={payload.response.generatedAt}
                />
              </Card>
            )}

          </div>
        )}

      </div>

      {/* Raw JSON */}

      <div className="rounded-xl border border-white/10 bg-[#0D1117] p-5">

        <h4 className="mb-3 font-semibold">
          Raw JSON
        </h4>

        <pre className="overflow-auto rounded-lg bg-black/40 p-4 text-xs text-green-300">
          {JSON.stringify(response, null, 2)}
        </pre>

      </div>

    </div>
  );
}

function Metric({
  label,
  value,
  color
}: {
  label: string;
  value: string;
  color: string;
}) {
  const colors: any = {
    green: 'text-green-400',
    blue: 'text-cyan-400',
    violet: 'text-violet-400'
  };

  return (
    <div className="rounded-lg bg-black/30 p-4">
      <p className="text-xs text-gray-400">{label}</p>
      <p className={`mt-1 text-xl font-bold ${colors[color]}`}>
        {value}
      </p>
    </div>
  );
}

function Field({ k, v }: any) {
  return (
    <div className="flex justify-between border-b border-white/5 py-1 text-sm">
      <span className="text-gray-400">{k}</span>
      <span>{String(v ?? '-')}</span>
    </div>
  );
}

function Card({
  title,
  children
}: any) {
  return (
    <div className="rounded-lg bg-black/30 p-4">
      <h5 className="mb-2 font-medium">{title}</h5>
      {children}
    </div>
  );
}