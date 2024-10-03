// External Imports
import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Avatar } from "@mui/material";
import { IconRobot, IconHeart } from "@tabler/icons-react";

// Internal Imports
import MessageBubble from "./MessageBubble";
import { Message } from "../../types";

interface MessageListProps {
  messages: Message[];
  streamCompleted: boolean;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  streamCompleted,
}) => {
  const theme = useTheme();
  const colors = theme.palette;

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
                bgcolor: colors.gray.main,
                marginRight: "0",
                alignSelf: "flex-start",
              }}
            >
              <IconRobot color={colors.charcoal.main} />
            </Avatar>
          )}
          <MessageBubble
            content={message.content}
            isUser={message.role === "user"}
            showFooterIcons={streamCompleted && index === messages.length - 1}
          />
        </Box>
      ))}
    </Box>
  );
};

export default MessageList;
