/**
 * Shree Developer Intelligence — API Client
 *
 * Calls the Spring Boot backend at port 8081.
 * All endpoints are REST JSON.
 */

const BACKEND = process.env.NEXT_PUBLIC_DEVELOPER_API_URL ?? 'http://localhost:9090';
const BASE = `${BACKEND}/api/developer`;

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error ?? `Request failed: ${res.status}`);
  }
  return res.json() as T;
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error ?? `Request failed: ${res.status}`);
  }
  return res.json() as T;
}

async function del(path: string): Promise<void> {
  const res = await fetch(`${BASE}${path}`, { method: 'DELETE' });
  if (!res.ok && res.status !== 204) {
    throw new Error(`Delete failed: ${res.status}`);
  }
}

// ── Types ─────────────────────────────────────────────────────────────────────

export interface WorkspaceSession {
  id: string;
  projectPath: string;
  projectName: string;
  analyzed: boolean;
  openedAt: string;
  buildSystem: string;
  framework: string;
  moduleCount: number;
  classCount: number;
  endpointCount: number;
}

export interface ProjectSummary {
  projectName: string;
  projectPath: string;
  buildSystem: string;
  framework: string;
  moduleCount: number;
  modules: string[];
  statistics: {
    classes: number;
    controllers: number;
    services: number;
    repositories: number;
    entities: number;
    restApis: number;
    beans: number;
  };
  risks: string[];
}

export interface ProjectClass {
  name: string;
  fullyQualifiedName: string;
  packageName: string;
  filePath: string;
  kind: 'CLASS' | 'INTERFACE' | 'ENUM' | 'RECORD' | 'ANNOTATION';
  role: string;
  modifiers: string[];
  annotations: string[];
  methods: ProjectMethod[];
  fields: ProjectField[];
  superClass: string | null;
  interfaces: string[];
}

export interface ProjectMethod {
  name: string;
  returnType: string;
  httpMethod?: string;
  path?: string;
}

export interface ProjectField {
  name: string;
  type: string;
  modifiers: string[];
}

export interface ProjectEndpoint {
  path: string;
  httpMethod: string;
  className: string;
}

export interface ProjectImpact {
  target: string;
  affectedClasses: string[];
  affectedEndpoints: ProjectEndpoint[];
  dependencyDepth: number;
}

export interface ChatResponse {
  sessionId: string;
  question: string;
  answer: string;
  confidence: number;
  knowledgeUsed: boolean;
  memoryUsed: boolean;
  timestamp: string;
}

export interface WorkflowBuildResult {
  instruction: string;
  projectPath: string;
  confidence: number;
  markdownSummary: string;
  artifactCount: number;
  testSkeletonCount: number;
  totalSourceLines: number;
  artifacts: Artifact[];
  testSkeletons: TestSkeleton[];
  completedAt: string;
}

export interface Artifact {
  type: string;
  path: string;
  fileName: string;
  lines: number;
  package: string;
  preview: string;
}

export interface TestSkeleton {
  classUnderTest: string;
  testClassName: string;
  testClassFqn: string;
  framework: string;
  category: string;
  methodCount: number;
  methodSignatures: string[];
}

export interface WorkflowApplyResult {
  executionId: string;
  status: 'SUCCESS' | 'PARTIAL_SUCCESS' | 'FAILED' | 'SKIPPED';
  isSuccess: boolean;
  confidence: number;
  appliedCount: number;
  totalPatches: number;
  riskLevel: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
  executedAt: string;
  compile?: {
    status: string;
    filesCompiled: number;
    errors: number;
    warnings: number;
    diagnostics: string[];
  };
  rollback: RollbackInfo;
  diffs: Diff[];
}

export interface RollbackInfo {
  planId: string;
  fileCount: number;
  totalActions: number;
  isEmpty: boolean;
  entries: RollbackEntry[];
}

export interface RollbackEntry {
  filePath: string;
  originalContent: string;
  actionCount: number;
  actions: UndoAction[];
}

export interface UndoAction {
  type: string;
  description: string;
  target: string;
}

export interface Diff {
  filePath: string;
  status: string;
  isSuccess: boolean;
  linesChanged: number;
  message: string;
  appliedAt: string;
  before: string;
  after: string;
}

// ── Workspace API ──────────────────────────────────────────────────────────────

export const developerApi = {
  // Module 1: Workspace
  workspace: {
    open: (path: string) =>
      post<WorkspaceSession>('/workspace/open', { path }),
    sessions: () =>
      get<WorkspaceSession[]>('/workspace/sessions'),
    get: (id: string) =>
      get<WorkspaceSession>(`/workspace/${id}`),
    summary: (id: string) =>
      get<ProjectSummary>(`/workspace/${id}/summary`),
    findClass: (id: string, name: string) =>
      get<ProjectClass>(`/workspace/${id}/class?name=${encodeURIComponent(name)}`),
    findEndpoint: (id: string, path: string) =>
      get<ProjectEndpoint>(`/workspace/${id}/endpoint?p=${encodeURIComponent(path)}`),
    impact: (id: string, name: string) =>
      get<ProjectImpact>(`/workspace/${id}/impact?n=${encodeURIComponent(name)}`),
    close: (id: string) => del(`/workspace/${id}`),
  },

  // Module 2: AI Chat
  chat: {
    ask: (sessionId: string, question: string) =>
      post<ChatResponse>('/chat/ask', { sessionId, question }),
    remember: (sessionId: string, title: string, content: string) =>
      post<{ status: string; sessionId: string; title: string }>(
        '/chat/remember',
        { sessionId, title, content }
      ),
    recall: (sessionId: string, query: string) =>
      post<{ answer: string; confidence: number }>('/chat/recall', { sessionId, query }),
  },

  // Module 3: Developer Workflow
  workflow: {
    build: (sessionId: string, projectPath: string, instruction: string) =>
      post<WorkflowBuildResult>('/workflow/build', { sessionId, projectPath, instruction }),
    apply: (sessionId: string, projectPath: string, instruction: string) =>
      post<WorkflowApplyResult>('/workflow/apply', { sessionId, projectPath, instruction }),
  },

  // Module 4: Safe Apply Review
  review: {
    diffs: (executionId: string) =>
      get<{ executionId: string; totalDiffs: number; diffs: Diff[] }>(
        `/review/${executionId}/diffs`
      ),
    diff: (executionId: string, filePath: string) =>
      get<Diff>(
        `/review/${executionId}/diff/${encodeURIComponent(filePath)}`
      ),
    rollback: (executionId: string) =>
      get<RollbackInfo & { executionId: string; hasRollback: boolean }>(
        `/review/${executionId}/rollback`
      ),
    executions: () =>
      get<Array<{
        executionId: string;
        status: string;
        appliedCount: number;
        totalPatches: number;
        confidence: number;
        executedAt: string;
      }>>('/review/executions'),
  },
};
