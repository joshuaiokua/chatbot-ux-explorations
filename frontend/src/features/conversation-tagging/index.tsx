import React from "react";
import ChatInterface from "../../shared/components/ChatInterface";
import Sidebar from "../../shared/components/Sidebar";
import { Box } from "@mui/material";

const ConversationTagging: React.FC = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatInterface />
      </Box>
    </Box>
  );
};

export default ConversationTagging;
