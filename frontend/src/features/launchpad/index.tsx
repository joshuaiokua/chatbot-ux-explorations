import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const Launchpad: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Launchpad
      </Typography>
      <List>
        <ListItemButton component={Link} to="/conversation-tagging">
          <ListItemText primary="Conversation Tagging" />
        </ListItemButton>
        {/* Add other explorations as needed */}
      </List>
    </Container>
  );
};

export default Launchpad;
