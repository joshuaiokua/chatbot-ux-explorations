// External Libraries
import { Request, Response, Router } from "express";
import { HumanMessage } from "@langchain/core/messages";

// Internal Libraries
import { createSimpleChatbot } from "../services/llm/chatService";

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

    // Run the chatbot
    const conversation = await chatbot.invoke(
      { messages: [new HumanMessage(message)] },
      { configurable: { thread_id: "123" } } // TODO: programmatically generate thread_id
    );

    // Get the assistant's reply
    const lastResponse = conversation.messages.at(-1).content;

    res.json({ reply: lastResponse });
  } catch (error) {
    console.error("Error in chat route:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
