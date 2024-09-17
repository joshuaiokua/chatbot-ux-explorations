import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";

// Create the root and render the app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
