import express from "express";
import collegeRoutes from "./routes/collegeRoutes.js";
import admissionRoutes from "./routes/admissionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import reviews from "./routes/reviewRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const corsOptions = {
  // origin: "http://localhost:5173",
  origin: "https://campus-gate.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));

connectDB();

// Routes
app.use("/api/colleges", collegeRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviews);

// Test route
app.get("/", (req, res) => {
  const serverStatus = {
    message: "Server is running smoothly",
    timestamp: new Date(),
  };
  res.json(serverStatus);
});

// Export the Express app as a Vercel-compatible handler
export default app;

// Vercel requires a default export of the server handler
export const config = {
  api: {
    bodyParser: false,
  },
};
