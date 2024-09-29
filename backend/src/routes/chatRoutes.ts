// External Libraries
import { Request, Response, Router } from "express";
import { HumanMessage } from "@langchain/core/messages";

// Internal Libraries
import { createSimpleChatbot } from "../services/llm/chatService";
import { getChatResponse } from "../services/llm/common";

// Initialize router and chatbot
const router = Router();
const chatbot = createSimpleChatbot();

// ROUTES
router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    // Construct events stream
    const stream = chatbot.streamEvents(
      { messages: [new HumanMessage(message)] },
      {
        configurable: { thread_id: "123" },
        version: "v2",
      }
    );

    // Stream messages and collect message content chunks
    let responseContent: string | undefined = "";
    for await (const { event, data } of stream) {
      if (event === "on_chat_model_stream") {
        // console.log("Content:", data.chunk.content);
        responseContent += data.chunk.content;
      }
    }

    res.json({ reply: responseContent });
  } catch (error) {
    console.error("Error in chat route:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
