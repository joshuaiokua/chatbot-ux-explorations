// External Imports
import React, { useState } from "react";

// Internal Imports
import { baseURL } from "../constants";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [userInput, setUserInput] = useState<string>("");

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    // Add user's message to the conversation
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: userInput },
      { role: "assistant", content: "" },
    ]);

    try {
      // Send the user's message to the backend and handle the streaming response
      const eventSource = new EventSource(
        `${baseURL}/api/chat?message=${encodeURIComponent(userInput)}`
      );

      // Keep track of the current assistant response being built
      let assistantContent = "";

      eventSource.onmessage = (event) => {
        if (event.data === "Stream completed") {
          eventSource.close();
        } else {
          const data = JSON.parse(event.data);

          // Append the chunk to the assistant's message
          assistantContent += data.reply;

          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];

            // Find the last assistant message and update it
            const lastAssistantMessageIndex = updatedMessages
              .map((message) => message.role)
              .lastIndexOf("assistant");

            if (lastAssistantMessageIndex !== -1) {
              updatedMessages[lastAssistantMessageIndex].content =
                assistantContent;
            }

            return updatedMessages;
          });
        }
      };

      eventSource.onerror = (event) => {
        console.error("Error with streaming response:", event);
        eventSource.close();
      };
    } catch (error) {
      console.error(
        "Error occurred while sending the message or handling the stream:",
        error
      );
    }

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
