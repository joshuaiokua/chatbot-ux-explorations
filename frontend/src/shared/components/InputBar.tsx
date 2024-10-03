import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, TextField, IconButton } from "@mui/material";
import { IconArrowUp } from "@tabler/icons-react";

interface InputBarProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const InputBar: React.FC<InputBarProps> = ({
  userInput,
  setUserInput,
  handleSendMessage,
  handleKeyDown,
}) => {
  const theme = useTheme();
  const colors = theme.palette;

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "740px",
        alignItems: "flex-end",
        padding: "5px 10px 5px",
        borderRadius: "26px", // Emulating ChatGPT
        backgroundColor: colors.lightGray.main,
        position: "relative", // Enable absolute positioning for the IconButton
      }}
    >
      <TextField
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        variant="outlined"
        size="small"
        multiline
        minRows={1}
        maxRows={4}
        sx={{
          minHeight: "40px",
          flexGrow: 1,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
      />
      <IconButton
        onClick={handleSendMessage}
        sx={{
          position: "absolute",
          right: "10px",
          bottom: "10px",
          size: "30px", // * 75% of the parent's height; can't use 75% directly
          backgroundColor: colors.charcoal.main,
          color: "white",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: colors.charcoal.light,
          },
        }}
      >
        <IconArrowUp stroke="2.5" size={"16px"} />
      </IconButton>
    </Box>
  );
};

export default InputBar;
