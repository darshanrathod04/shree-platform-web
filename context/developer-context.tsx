'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {
  developerApi,
  WorkspaceSession,
  ProjectSummary,
  ChatResponse,
  WorkflowBuildResult,
  WorkflowApplyResult,
  Diff,
} from '@/lib/developer-api';

interface DeveloperState {
  // Active workspace
  sessions: WorkspaceSession[];
  activeSessionId: string | null;
  setActiveSessionId: (id: string | null) => void;
  refreshSessions: () => Promise<void>;
  openWorkspace: (path: string) => Promise<WorkspaceSession>;
  closeWorkspace: (id: string) => Promise<void>;

  // Project summary cache
  summary: ProjectSummary | null;
  loadSummary: (id: string) => Promise<void>;

  // Chat history
  chatHistory: ChatResponse[];
  ask: (question: string) => Promise<ChatResponse | null>;
  remember: (title: string, content: string) => Promise<void>;
  isChatLoading: boolean;

  // Workflow state
  buildResult: WorkflowBuildResult | null;
  applyResult: WorkflowApplyResult | null;
  isWorkflowLoading: boolean;
  build: (instruction: string) => Promise<WorkflowBuildResult | null>;
  apply: (instruction: string) => Promise<WorkflowApplyResult | null>;
  selectedDiff: Diff | null;
  setSelectedDiff: (d: Diff | null) => void;

  // Errors
  error: string | null;
  clearError: () => void;
}

const Ctx = createContext<DeveloperState | null>(null);

export function DeveloperProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<WorkspaceSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [summary, setSummary] = useState<ProjectSummary | null>(null);
  const [chatHistory, setChatHistory] = useState<ChatResponse[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [buildResult, setBuildResult] = useState<WorkflowBuildResult | null>(null);
  const [applyResult, setApplyResult] = useState<WorkflowApplyResult | null>(null);
  const [isWorkflowLoading, setIsWorkflowLoading] = useState(false);
  const [selectedDiff, setSelectedDiff] = useState<Diff | null>(null);
  const [error, setError] = useState<string | null>(null);

  const refreshSessions = useCallback(async () => {
    try {
      const list = await developerApi.workspace.sessions();
      setSessions(list);
    } catch (e: any) {
      setError(e.message ?? 'Failed to load sessions');
    }
  }, []);

  const openWorkspace = useCallback(async (path: string): Promise<WorkspaceSession> => {
    try {
      const session = await developerApi.workspace.open(path);
      await refreshSessions();
      setActiveSessionId(session.id);
      return session;
    } catch (e: any) {
      setError(e.message ?? 'Failed to open workspace');
      throw e;
    }
  }, [refreshSessions]);

  const closeWorkspace = useCallback(async (id: string) => {
    try {
      await developerApi.workspace.close(id);
      if (activeSessionId === id) {
        setActiveSessionId(null);
        setSummary(null);
        setChatHistory([]);
      }
      await refreshSessions();
    } catch (e: any) {
      setError(e.message ?? 'Failed to close workspace');
    }
  }, [activeSessionId, refreshSessions]);

  const loadSummary = useCallback(async (id: string) => {
    try {
      const s = await developerApi.workspace.summary(id);
      setSummary(s);
    } catch (e: any) {
      setError(e.message ?? 'Failed to load summary');
    }
  }, []);

  const ask = useCallback(async (question: string): Promise<ChatResponse | null> => {
    if (!activeSessionId) {
      setError('No active workspace session');
      return null;
    }
    setIsChatLoading(true);
    setError(null);
    try {
      const response = await developerApi.chat.ask(activeSessionId, question);
      setChatHistory((prev) => [response, ...prev].slice(0, 100));
      return response;
    } catch (e: any) {
      setError(e.message ?? 'Chat failed');
      return null;
    } finally {
      setIsChatLoading(false);
    }
  }, [activeSessionId]);

  const remember = useCallback(async (title: string, content: string) => {
    if (!activeSessionId) {
      setError('No active workspace session');
      return;
    }
    try {
      await developerApi.chat.remember(activeSessionId, title, content);
    } catch (e: any) {
      setError(e.message ?? 'Failed to store memory');
    }
  }, [activeSessionId]);

  const build = useCallback(async (instruction: string): Promise<WorkflowBuildResult | null> => {
    if (!activeSessionId) {
      setError('No active workspace session');
      return null;
    }
    const session = sessions.find((s) => s.id === activeSessionId);
    if (!session) {
      setError('Workspace session not found');
      return null;
    }
    setIsWorkflowLoading(true);
    setError(null);
    try {
      const result = await developerApi.workflow.build(
        activeSessionId,
        session.projectPath,
        instruction
      );
      setBuildResult(result);
      return result;
    } catch (e: any) {
      setError(e.message ?? 'Build failed');
      return null;
    } finally {
      setIsWorkflowLoading(false);
    }
  }, [activeSessionId, sessions]);

  const apply = useCallback(async (instruction: string): Promise<WorkflowApplyResult | null> => {
    if (!activeSessionId) {
      setError('No active workspace session');
      return null;
    }
    const session = sessions.find((s) => s.id === activeSessionId);
    if (!session) {
      setError('Workspace session not found');
      return null;
    }
    setIsWorkflowLoading(true);
    setError(null);
    try {
      const result = await developerApi.workflow.apply(
        activeSessionId,
        session.projectPath,
        instruction
      );
      setApplyResult(result);
      return result;
    } catch (e: any) {
      setError(e.message ?? 'Apply failed');
      return null;
    } finally {
      setIsWorkflowLoading(false);
    }
  }, [activeSessionId, sessions]);

  const clearError = useCallback(() => setError(null), []);

  // Auto-load summary when session changes
  useEffect(() => {
    if (activeSessionId) {
      loadSummary(activeSessionId);
    } else {
      setSummary(null);
    }
  }, [activeSessionId, loadSummary]);

  return (
    <Ctx.Provider
      value={{
        sessions,
        activeSessionId,
        setActiveSessionId,
        refreshSessions,
        openWorkspace,
        closeWorkspace,
        summary,
        loadSummary,
        chatHistory,
        ask,
        remember,
        isChatLoading,
        buildResult,
        applyResult,
        isWorkflowLoading,
        build,
        apply,
        selectedDiff,
        setSelectedDiff,
        error,
        clearError,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useDeveloper() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('DeveloperProvider missing');
  return ctx;
}
