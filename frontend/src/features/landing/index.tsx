import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const LandingPage: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      minWidth="100vw"
      flexDirection={"column"}
    >
      <Typography
        align="center"
        gutterBottom
        sx={{
          fontFamily: "Bianzhidai Block RGB",
          fontSize: "10vw",
        }}
      >
        Chatbot UX
      </Typography>
      <Button
        variant="outlined" 
        component={Link}
        to="/conversation-tagging"
        sx={{
          border: "0.5px solid #F3D0D7",
          borderRadius: "25px",
          color: "#333",
          padding: "12px 28px",
          textTransform: "lowercase",
          "&:hover": {
            color: "#fff",
            backgroundColor: "#F3D0D7",
            border: "0.5px solid #F3D0D7",
          },
        }}
      >
        🤖 Conversation Tagging 🤖
      </Button>
    </Box>
  );
};

export default LandingPage;
