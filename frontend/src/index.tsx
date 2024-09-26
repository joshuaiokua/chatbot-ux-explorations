import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";

// Create React root, ensuring that root element is present
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
