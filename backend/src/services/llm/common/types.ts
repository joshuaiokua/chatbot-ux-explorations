/**
 * @module services/llm/common/types
 *
 * @description This module holds all custom and alias types used in the LLM service.
 */
import { Annotation, CompiledStateGraph, START } from "@langchain/langgraph";
import { BaseMessage } from "@langchain/core/messages";

export const SimpleStateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
  }),
});
export type SimpleStateType = typeof SimpleStateAnnotation.State;
export type SimpleCompiledStateGraph = CompiledStateGraph<
  SimpleStateType,
  Partial<SimpleStateType>,
  typeof START | "model" // node names
>;
