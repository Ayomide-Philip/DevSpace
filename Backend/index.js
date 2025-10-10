// backend/index.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import { PORT } from "./config/env.config.js";
import { corsOptions } from "./config/cors.config.js";
import { connectToMongoDB } from "./database/mongoDb.database.js";
import { errorHandler } from "./middleware/errorHandler.middleware.js";

// ===== Routers =====
import authRouter from "./router/auth.router.js";
import projectRouter from "./router/project.router.js";
import profileRouter from "./router/profile.router.js";
import feedRouter from "./router/feed.router.js";

const app = express();

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

// ===== API Routes =====
app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);
app.use("/api/profile", profileRouter);
app.use("/api/feeds", feedRouter);

// ===== Serve React Frontend (Production Only) =====
if (process.env.NODE_ENV === 'production') {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const frontendDist = path.join(__dirname, "../frontend/dist");

  // Serve static files
  app.use(express.static(frontendDist));

  // ===== Catch-all for React Router =====
  app.get("/*", (req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });
}

// ===== Error Handling =====
app.use(errorHandler);

// ===== Root API check =====
app.get("/api", (req, res) => {
  res.json({ success: true, message: "Hello from backend API" });
});

// ===== Start Server =====
app.listen(PORT, async () => {
  await connectToMongoDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
