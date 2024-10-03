// External Imports
import React from "react";
import { Box, Avatar } from "@mui/material";
import { IconRobot } from "@tabler/icons-react";

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
        flexGrow: 1,
        flexDirection: "column",
        padding: "2.625rem .625rem .625rem .625rem",
        overflowY: "auto",
        boxSizing: "border-box", // Make sure padding is part of the box model
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
              <IconRobot color="#333" />
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
