/**
 * Chat Interface
 * @description A simple chat interface that allows users to chat with the assistant.
 */

// External Imports
import React, { useState } from "react";

// Internal Imports
import { Message } from "../../types";
import { sendMessage } from "../utils/messageHandler";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user's message to the conversation
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userInput },
      { role: "assistant", content: "" },
    ]);

    // Send the user's message to the backend
    await sendMessage(userInput, setMessages, "chat");

    // Clear user input
    setUserInput("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h1>Chat with Assistant</h1>
      <div
        style={{
          minHeight: "400px",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ margin: "10px 0" }}>
            <strong style={{ display: "block" }}>
              {message.role === "user" ? "You" : "Assistant"}
            </strong>{" "}
            {message.content}{" "}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        style={{ width: "80%", padding: "10px" }}
        placeholder="Type a message..."
      />
      <button
        onClick={handleSendMessage}
        style={{ width: "20%", padding: "10px" }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInterface;
