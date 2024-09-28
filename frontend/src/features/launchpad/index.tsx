import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Launchpad: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection={"column"}
    >
      <Typography variant="h1" align="center" gutterBottom>
        Chatbot UX
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        component={Link}
        to="/conversation-tagging"
        sx={{ borderRadius: 0 }}
      >
        conversation tagging
      </Button>
    </Box>
  );
};

export default Launchpad;
