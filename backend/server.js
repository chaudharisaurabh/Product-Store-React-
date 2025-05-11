import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start the server
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => {
  // Connect to MongoDB
  connectDB();
  console.log(`Server is listening on port ${PORT}`);
});
