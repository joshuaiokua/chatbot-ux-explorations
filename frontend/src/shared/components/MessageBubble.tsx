import React from "react";
import { Box, Typography } from "@mui/material";

interface MessageBubbleProps {
  content: string;
  isUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ content, isUser }) => {
  return (
    <Box
      sx={{
        maxWidth: isUser ? "70%" : "100%",
        margin: "0 0.625rem",
        padding: ".625rem 1.25rem .625rem 1.25rem",
        borderRadius: "1rem",
        textAlign: "justify",
        textAlignLast: isUser ? "right" : "left",
        color: isUser ? "#fff" : "#333",
        backgroundColor: isUser ? "#333" : "transparent",
      }}
    >
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
};

export default MessageBubble;
