/**
 * Message Handling Functionality
 *
 * @module shared/utils/messageHandler
 * @description This module provides utilities and functionality for handling client-side message actions and backend communication.
 */

import { baseURL } from "../constants";
import { MessageSetter } from "../../types";

/**
 * Handle a chunk of a message response.
 * 
 * @param responseBuffer - The current response buffer
 * @param setMessages - The state setter for the messages array
 * @param modelRole - The role of the model in the conversation
 * 
 * TODO: Revisit the implementation of this function to handle message chunks more effectively.
 */
export const handleMessageChunk = async (
  responseBuffer: string,
  setMessages: MessageSetter,
  modelRole: string
) => {
  setMessages((prevMessages) => {
    const updatedMessages = [...prevMessages];
    const lastAIMessageIndex = updatedMessages
      .map((message) => message.role)
      .lastIndexOf(modelRole);

    // Append the chunk to the last AI message
    if (lastAIMessageIndex !== -1) {
      updatedMessages[lastAIMessageIndex].content = responseBuffer;
    }

    return updatedMessages;
  });
};

/**
 * Send a message to the backend and handle the streaming response.
 * 
 * @param userInput - The user's input message
 * @param setMessages - The state setter for the messages array
 * @param endpoint - The API endpoint to send the message to
 * @param endpointKey - The key for the message in the API request
 * @param modelRole - The role of the model in the conversation
 * @param chunkHandler - The function to handle incoming message chunks
 */
export const sendMessage = async (
  userInput: string,
  setMessages: MessageSetter,
  endpoint: string,
  endpointKey: string = "message",
  modelRole: string = "assistant",
  chunkHandler: typeof handleMessageChunk = handleMessageChunk
) => {
  if (!userInput.trim()) return;

  try {
    // Send the message to the backend
    const eventSource = new EventSource(
      `${baseURL}/api/${endpoint}?${endpointKey}=${encodeURIComponent(userInput)}`
    );

    // Keep track of the current response being built
    let responseBuffer = "";

    // Handle the incoming message chunks
    eventSource.onmessage = (event) => {
      if (event.data === "Stream completed") {
        eventSource.close();
      } else {
        const data = JSON.parse(event.data);
        responseBuffer += data.chunk;
        chunkHandler(responseBuffer, setMessages, modelRole);
      }
    };

    eventSource.onerror = (event) => {
      console.error("Error with streaming response:", event);
      eventSource.close();
    };
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
