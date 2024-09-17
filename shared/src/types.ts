export interface LLMRequest {
  prompt: string;
  options?: Record<string, unknown>;
}

export interface LLMResponse {
  result: string;
  tokensUsed: number;
}
