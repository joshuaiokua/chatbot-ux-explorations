// External imports
import { MemorySaver } from "@langchain/langgraph";
import {
  END,
  START,
  StateGraph,
  CompiledStateGraph,
} from "@langchain/langgraph";
import { ChatGroq } from "@langchain/groq";

// Internal imports
import {
  SimpleStateAnnotation,
  SimpleStateType,
  callModel,
} from "./common/";

/**
 * Creates a simple chatbot graph with a single node that calls a language model.
 *
 * This function creates a simple chatbot graph with a single node that calls a language model.
 * The model is passed as an argument, allowing the function to be used with different models.
 *
 * @param {string} modelName - The name of the language model to be used.
 * @param {number} modelTemperature - The temperature of the language model.
 * @param {boolean} useCheckpointer - Whether to use a checkpointer to save the model's state.
 *
 * @returns {CompiledStateGraph<SimpleStateType> } - The compiled chatbot graph.
 * @throws {Error} - If the model invocation fails.
 */
export const createSimpleChatbot = (
  modelName: string = "llama-3.1-70b-versatile",
  modelTemperature: number = 0,
  useCheckpointer: boolean = true
): CompiledStateGraph<
  SimpleStateType,
  Partial<SimpleStateType>,
  typeof START | "model" // Required node names
> => {
  // Initialize chat model
  const model = new ChatGroq({
    model: modelName,
    temperature: modelTemperature,
  });

  // Construct graph
  const graph = new StateGraph(SimpleStateAnnotation)
    .addNode("model", (state) => callModel(model, state))
    .addEdge(START, "model")
    .addEdge("model", END);

  // Compile and return the graph, including a checkpointer if needed
  return graph.compile({
    checkpointer: useCheckpointer ? new MemorySaver() : undefined,
  });
};
