const BACKEND = "http://localhost:7070";
const BASE_URL = `${BACKEND}/api/playground`;

export const PLAYGROUND_BACKEND = BACKEND;


export interface SDKResponse {
  answer: string;
  confidence: number;
  reasoningAvailable: boolean;
  metadata: string;
  structuredPayload: any;
  timestamp: string;
}

class PlaygroundApi {
  private async post<T>(url: string, body: any): Promise<T> {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "Request failed");
    }

    return response.json();
  }

  // =========================
  // Chat SDK
  // =========================

  chat(message: string) {
    return this.post<SDKResponse>("/chat", { message });
  }

  // =========================
  // Identity SDK
  // =========================

  getIdentity(identityId: string) {
    return this.post<SDKResponse>("/identity/get", { identityId });
  }

  createIdentity(data: {
    identityId: string;
    identityType: string;
    profile: any;
  }) {
    return this.post<SDKResponse>("/identity/create", data);
  }

  // =========================
  // Memory SDK
  // =========================

  memoryStore(title: string, content: string) {
    return this.post<SDKResponse>("/memory/store", {
      title,
      content,
    });
  }

  memorySearch(query: string) {
    return this.post<SDKResponse>("/memory/search", {
      query,
    });
  }

  memoryRecall(query: string) {
    return this.post<SDKResponse>("/memory/recall", {
      query,
    });
  }

  // =========================
  // Knowledge SDK
  // =========================

  knowledgeSearch(query: string) {
    return this.post<SDKResponse>("/knowledge/search", {
      query,
    });
  }

  knowledgeQuery(query: string) {
    return this.post<SDKResponse>("/knowledge/query", {
      query,
    });
  }

  knowledgeIngest(title: string, content: string) {
    return this.post<SDKResponse>("/knowledge/ingest", {
      title,
      content,
    });
  }

  // =========================
  // Planning SDK
  // =========================

  createPlan(data: {
    objectiveId: string;
    objective: string;
    scope: string;
  }) {
    return this.post<SDKResponse>("/planning/create", data);
  }

  refinePlan(planId: string, refinement: string) {
    return this.post<SDKResponse>("/planning/refine", {
      planId,
      refinement,
    });
  }

  validatePlan(planId: string) {
    return this.post<SDKResponse>("/planning/validate", {
      planId,
    });
  }

  // =========================
  // Execution SDK
  // =========================

  execute(capability: string, input: string) {
    return this.post<SDKResponse>("/execution", {
      capability,
      input,
    });
  }

  verifyExecution(executionId: string) {
    return this.post<SDKResponse>("/execution/verify", {
      executionId,
    });
  }

  // =========================
  // Reflection SDK
  // =========================

  reflect(executionId: string) {
    return this.post<SDKResponse>("/reflection/run", {
      executionId,
    });
  }

  reflectionHistory(tenantId: string, limit: number) {
    return this.post<SDKResponse>("/reflection/history", {
      tenantId,
      limit,
    });
  }

  reflectionAnalytics(tenantId: string, window: number) {
    return this.post<SDKResponse>("/reflection/analytics", {
      tenantId,
      window,
    });
  }
}

export const playgroundApi = new PlaygroundApi();