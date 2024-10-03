import React from "react";
import Markdown from "react-markdown";
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
        borderRadius: "1.5rem",
        textAlign: "justify",
        textAlignLast: isUser ? "right" : "left",
        color: isUser ? "#fff" : "#333",
        backgroundColor: isUser ? "#333" : "transparent",
        "& > *:first-of-type": {
          marginTop: 0, // Remove top margin for the first element
          paddingTop: 0, // Remove top padding for the first element
        },
        "& > *:last-of-type": {
          marginBottom: 0, // Remove bottom margin for the last element
          paddingBottom: 0, // Remove bottom padding for the last element
        },
      }}
    >
      {isUser ? content : <Markdown>{content}</Markdown>}
    </Box>
  );
};

export default MessageBubble;
