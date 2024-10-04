import React from "react";
import Markdown from "react-markdown";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { IconHeart } from "@tabler/icons-react";

interface MessageBubbleProps {
  content: string;
  isUser: boolean;
  showFooterIcons?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  isUser,
  showFooterIcons,
}) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Box
      sx={{
        maxWidth: isUser ? "70%" : "100%",
        margin: "0 0.625rem",
        padding: ".625rem 1.25rem .625rem 1.25rem",
        borderRadius: "1.5rem",
        textAlign: "justify",
        textAlignLast: isUser ? "right" : "left",
        color: isUser ? colors.background.default : colors.charcoal.main,
        backgroundColor: isUser ? colors.charcoal.main : "transparent",
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

      {showFooterIcons && (
        <Box
        alignItems={"center"}
        gap={"9px"}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <IconHeart size={"18px"} color={colors.gray.main} />
          <IconHeart size={"18px"} color={colors.gray.main} />
        </Box>
      )}
    </Box>
  );
};

export default MessageBubble;
