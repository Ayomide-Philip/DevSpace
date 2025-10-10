import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config/env.config.js";
import { corsOptions } from "./config/cors.config.js";
import { connectToMongoDB } from "./database/mongoDb.database.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

import authRouter from "./router/auth.router.js";
import projectRouter from "./router/project.router.js";
import profileRouter from "./router/profile.router.js";
import feedRouter from "./router/feed.router.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

// API routes
app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/profile", profileRouter);
app.use("/api/feeds", feedRouter);

// Production frontend serving
if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const frontendDist = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendDist));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

// Root API health check
app.get("/api", (req, res) => {
  res.json({ success: true, message: "Backend is running" });
});

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT || 3000, async () => {
  await connectToMongoDB();
  console.log(`Server running at http://localhost:${PORT || 3000}`);
});
