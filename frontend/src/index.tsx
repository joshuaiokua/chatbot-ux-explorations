import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Styling Imports
import theme from "./styles/theme";
import './styles/main.scss'; 

// Create React root, ensuring that root element is present
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
