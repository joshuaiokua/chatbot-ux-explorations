/**
 * @module index.ts
 *
 * @description This module is the entry point for the backend server, initializing the server and setting up the routes.
 */

// External Libraries
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Internal Libraries
import chatRoutes from "./routes/chatRoutes";

// Initialize the server
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/chat", chatRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
