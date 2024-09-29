/**
 * Message Handling Functionality
 *
 * @module shared/utils/messageHandler
 * @description This module provides utilities and functionality for handling client-side message actions and backend communication.
 */

import { Message, MessageSetter } from "../../types";
import { baseURL } from "../constants";

export const handleMessageChunk = async (
  chunk: string,
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
      updatedMessages[lastAIMessageIndex].content += chunk;
    }

    return updatedMessages;
  });
};

export const sendMessage = async (
  userInput: string,
  setMessages: MessageSetter,
  modelRole: string = "assistant",
  chunkHandler: typeof handleMessageChunk = handleMessageChunk
) => {
  if (!userInput.trim()) return;

  try {
    // Send the user's message to the backend and handle the streaming response
    const eventSource = new EventSource(
      `${baseURL}/api/chat?message=${encodeURIComponent(userInput)}`
    );

    eventSource.onmessage = (event) => {
      if (event.data === "Stream completed") {
        eventSource.close();
      } else {
        chunkHandler(event.data.reply, setMessages, modelRole);
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
