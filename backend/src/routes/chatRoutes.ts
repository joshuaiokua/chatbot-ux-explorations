/**
 * Routes for Chatbot Service
 * @module chatRoutes.ts
 * @description This module provides routes for interacting with the chatbot service.
 * 
 * TODO: Implement non-streaming version of chatbot service.
*/

// External Imports
import { Request, Response, Router } from "express";
import { HumanMessage } from "@langchain/core/messages";

// Internal Imports
import { createSimpleChatbot } from "../services/llm/chatService";
import { sleep } from "../utils";

// Module Constants
const STREAM_DELAY = 25; // Milliseconds

// Initialize router and chatbot
const router = Router();
const chatbot = createSimpleChatbot();

// Chat Routes
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const message = req.query.message as string;

    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    // Set headers for SSE (Server-Sent Events)
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Construct events stream
    // ? Depending on how tokens are handled it might be better to instead do a simple
    // ? call to the model and return the response in one go and then stream the response (9/29)
    const stream = chatbot.streamEvents(
      { messages: [new HumanMessage(message)] },
      {
        configurable: { thread_id: "123" },
        version: "v2",
      }
    );

    // Send chunks of messages as they come in
    for await (const { event, data } of stream) {
      if (event === "on_chat_model_stream") {
        // Send each chunk of the response
        res.write(`data: ${JSON.stringify({ chunk: data.chunk.content })}\n\n`);
        await sleep(STREAM_DELAY); // slight delay to simulate real-time chat
      }
    }

    res.write("data: Stream completed\n\n"); // final message to close the stream
  } catch (error) {
    console.error("Error in chat route:", error);
    res.status(500).json({ error: "Internal server error" });
  } finally {
    res.write("event: end\n\n");
    res.end();
  }
});

export default router;
