import express from "express";
import collegeRoutes from "./routes/collegeRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

// Routes
app.use("/api/colleges", collegeRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Campus Gate API");
});

// Start server
app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`));