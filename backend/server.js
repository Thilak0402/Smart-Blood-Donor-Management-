const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const donorRoutes = require("./routes/donorRoutes");
const bloodStockRoutes = require("./routes/bloodStockRoutes");
const app = express();
const bloodRequestRoutes = require("./routes/bloodRequestRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/donors", donorRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blood-stock", bloodStockRoutes);
app.use("/api/blood-requests", bloodRequestRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });

// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Smart Blood Donor Management API is running",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});