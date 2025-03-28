import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import otpRoutes from "./routes/otpRoutes.js";
import flightRoutes from "./routes/flightRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import next from "next";

export const app = express();

dotenv.config();
connectDB();

// ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Next.js
const nextApp = next({ dev: process.env.NODE_ENV === "development", dir: path.join(__dirname, "../frontend") });
const handle = nextApp.getRequestHandler();



// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// API routing
app.use("/api/v1/flights", flightRoutes);
app.use("/api/v1/hotels", hotelRoutes);
app.use("/api/v1/otp", otpRoutes);
app.use("/api/v1/auth", authRoutes);

// Next.js integration
nextApp.prepare().then(() => {
  // Handle all other routes with Next.js
  app.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`.bgCyan.white);
  });
});