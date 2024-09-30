/**
 * @module index.ts
 *
 * @description This module is the entry point for the backend server, initializing the server and setting up the routes.
 */

// External imports and setup
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") }); // load environment variables

// Internal imports
import chatRoutes from "./routes/chatRoutes";

// Initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS and specify allowed origins
app.use(cors({
  origin: 'http://localhost:3000',  // TODO: Make programmatic
  methods: ['GET', 'POST'],  // Allow these HTTP methods
  credentials: true,  // Allow cookies or credentials if necessary
}));
app.use(express.json());

// Routes
app.use("/api/chat", chatRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
