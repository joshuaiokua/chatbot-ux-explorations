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
      minWidth="100vw"
      flexDirection={"column"}
    >
      <Typography
        align="left"
        gutterBottom
        sx={{
          fontFamily: "Bianzhidai",
          fontSize: "12.5vw",
        }}
      >
        Chatbot<br />UX
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
