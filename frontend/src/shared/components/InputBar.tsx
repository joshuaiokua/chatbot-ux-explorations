import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import ArrowUpwardRounded from "@mui/icons-material/ArrowUpwardRounded";

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
        borderRadius: "50px",
        backgroundColor: "#f5f5f5",
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
          alignSelf: "center",
          marginLeft: "10px",
          maxHeight: "36px",
          width: "36px",
          size: "small",
          backgroundColor: "#333",
          color: "#fff",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        <ArrowUpwardRounded fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default InputBar;
