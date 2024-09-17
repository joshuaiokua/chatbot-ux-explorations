import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from LLM Interactivity Backend!");
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
