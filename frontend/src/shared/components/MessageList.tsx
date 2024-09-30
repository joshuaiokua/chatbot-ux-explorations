// External Imports
import React from "react";
import { Box, Avatar } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

// Internal Imports
import MessageBubble from "./MessageBubble";
import { Message } from "../../types";

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1, // Grow to fill the available space
        flexDirection: "column",
        padding: ".625rem",
        overflowY: "auto", // Scrollable area for messages
      }}
    >
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: message.role === "user" ? "flex-end" : "flex-start",
            alignItems: "flex-start", // ! Align avatar and message text
            margin: ".625rem 0",
          }}
        >
          {message.role === "assistant" && (
            <Avatar
              sx={{
                bgcolor: "#e5e5e5",
                marginRight: "0",
                alignSelf: "flex-start",
              }}
            >
              <SmartToyIcon />
            </Avatar>
          )}
          <MessageBubble
            content={message.content}
            isUser={message.role === "user"}
          />
        </Box>
      ))}
    </Box>
  );
};

export default MessageList;
