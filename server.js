import express from "express";
import collegeRoutes from "./routes/collegeRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());

connectDB();

// Routes
app.use("/api/colleges", collegeRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/users", userRoutes);

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));