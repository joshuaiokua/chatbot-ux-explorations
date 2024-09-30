// External Imports
import React, { useState, useEffect, useRef } from "react";
import { Box, Paper, Typography } from "@mui/material";

// Internal Imports
import { Message } from "../../types";
import { sendMessage } from "../utils/messageHandler";
import MessageList from "./MessageList";
import InputBar from "./InputBar";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

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

  // Send the message when the user presses Enter without Shift
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "48rem", // * ChatGPT's max width
        height: "100vh", // Full viewport height
        margin: "0 auto",
        paddingBlock: "1rem",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        beep boop
      </Typography>
      <Paper
        elevation={0}
        sx={{
          display: "flex",
          flexGrow: 1, // Grow to fill the available space
          flexDirection: "column",
          padding: ".625rem .625rem .625rem 0",
          overflowY: "auto", // Scrollable area for messages
        }}
      >
        <MessageList messages={messages} />
        <div ref={messagesEndRef} />
      </Paper>

      <InputBar
        userInput={userInput}
        setUserInput={setUserInput}
        handleSendMessage={handleSendMessage}
        handleKeyDown={handleKeyDown}
      />
    </Box>
  );
};

export default ChatInterface;
