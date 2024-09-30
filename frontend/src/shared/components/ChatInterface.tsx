// External Imports
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy"; // AI Icon

// Internal Imports
import { Message } from "../../types";
import { sendMessage } from "../utils/messageHandler";

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

  // Scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "48rem", // 768px
        height: "100vh", // Full viewport height
        margin: "0 auto",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        beep boop
      </Typography>
      <Paper
        elevation={0}
        sx={{
          flexGrow: 1, // Expand to fill available space
          overflowY: "auto", // Scrollable area for messages
          padding: "10px 10px 10px 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent:
                message.role === "user" ? "flex-end" : "flex-start", // Align based on role
              alignItems: "center", // Align avatar and message text
              margin: "10px 0",
            }}
          >
            {message.role === "assistant" && (
              // AI Avatar for assistant messages
              <Avatar sx={{ bgcolor: "#e5e5e5", marginRight: "0", alignSelf: "flex-start" }}>
                <SmartToyIcon />
              </Avatar>
            )}
            <Box
              sx={{
                backgroundColor:
                  message.role === "user" ? "#333" : "transparent",
                color: message.role === "user" ? "#fff" : "#333",
                padding: ".625rem 1.25rem .625rem 1.25rem",
                margin: "0 10px",
                borderRadius: "15px",
                maxWidth: message.role === "user" ? "70%" : "100%",
                textAlign: "justify",
                textAlignLast: message.role === "user" ? "right" : "left",
              }}
            >
              <Typography variant="body1">{message.content}</Typography>
            </Box>
          </Box>
        ))}
        <div ref={messagesEndRef} />
      </Paper>
      <Box
        sx={{
          display: "flex",
          padding: "20px",
          borderTop: "1px solid #ccc",
          alignItems: "center",
        }}
      >
        <TextField
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type a message..."
          variant="outlined"
          sx={{ flexGrow: 1 }}
        />
        <Button variant="contained" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatInterface;
