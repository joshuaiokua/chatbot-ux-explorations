/**
 * @module services/llm/common
 *
 * @description This module holds all common functionality and utilities used by the various LLM services.
 */
import { Annotation } from "@langchain/langgraph";
import { BaseMessage } from "@langchain/core/messages";
import { BaseChatModel } from "@langchain/core/language_models/chat_models";

// Define a simple State annotation
export const SimpleStateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x, y) => x.concat(y),
  }),
});

// Define a simple State and Node type
export type SimpleStateType = typeof SimpleStateAnnotation.State;

/**
 * Calls the provided model given the current graph state, invoking it with the state's messages
 * and returning the updated state.
 *
 * @param {BaseChatModel} model - The language model to be called.
 * @param {SimpleStateType} state - The graph's current state.
 *
 * @returns {Promise<SimpleStateType>} - The updated state with the response message.
 * @throws {Error} - If the model invocation fails.
 */
export const callModel = async (
  model: BaseChatModel,
  state: SimpleStateType
): Promise<SimpleStateType> => {
  // Get messages from graph's state
  const { messages } = state;

  // Attempt model invocation with messages and return the updated state
  try {
    const responseMessages = await model.invoke(messages);
    return { messages: [responseMessages] };
  } catch (error) {
    console.error("Model invocation failed:", error);
    throw new Error("Failed to invoke model");
  }
};

// List of supported providers for error messages
const MODEL_PROVIDERS = ["openai", "groq"];

/**
 * Lists the available models from a given provider.
 *
 * @param {string} provider - The LLM provider (e.g. OpenAI, Groq, etc.). Defaults to "groq".
 * @param {boolean} sparse - Whether to return only the model IDs (names). Defaults to true.
 * @returns {Promise<string[] | object[]>} - The list of models (either model names or full model objects).
 * @throws {Error} If the provider is not recognized.
 */
export const listModels = async (
  provider: string = "groq",
  sparse: boolean = true
): Promise<string[] | object[]> => {
  let client;

  // Switch case to handle different providers
  switch (provider.toLowerCase()) {
    case "openai":
      const { OpenAI } = await import("openai"); // Dynamically import OpenAI SDK
      client = new OpenAI();
      break;
    case "groq":
      const { Groq } = await import("groq-sdk"); // Dynamically import Groq SDK
      client = new Groq();
      break;
    default:
      throw new Error(
        `Provider ${provider} not recognized. Must be one of ${MODEL_PROVIDERS.join(", ")}.`
      );
  }

  // Fetch the models from the provider's API
  const models = (await client.models.list()).data;

  // If sparse is true, return only the model IDs (names), otherwise return full model objects
  if (sparse) {
    return models.map((model: any) => model.id);
  }

  return models;
};
