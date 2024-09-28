import React, { useState } from "react";

const Chat: React.FC = () => {
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
    ]);

    try {
      const response = await fetch("http://localhost:3001/api/chat", { // TODO: Programmatically determine the correct URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await response.json();

      // Add assistant's response to the conversation
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch (error) {
      console.error("Error:", error);
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
            <strong>{message.role === "user" ? "You" : "Assistant"}:</strong>{" "}
            {message.content}
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
        style={{ width: "18%", padding: "10px" }}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
