import React from "react";
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
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "740px",
        alignItems: "flex-end",
        padding: "5px 10px 5px",
        borderRadius: "26px", // Emulating ChatGPT
        backgroundColor: "#f5f5f5",
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
          height: "30px", // * 75% of the TextField height; can't use 75% directly
          width: "30px",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        <IconArrowUp stroke="3" height={"16px"} />
      </IconButton>
    </Box>
  );
};

export default InputBar;
