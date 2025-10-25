import mongoose from "mongoose";
import { MONGO_DB_URL } from "./env.config";

export default async function ConnectToDatabase() {
  if (!MONGO_DB_URL) {
    throw new Error("MongoDB URL is required");
  }

  if (mongoose.connection.readyState === 1) {
    console.log("Already Connected to Database");
    return;
  }

  if (mongoose.connection.readyState === 2) {
    console.log("Connecting.........");
    return;
  }

  try {
    await mongoose.connect(MONGO_DB_URL, {
      dbName: "DevspaceNextjs",
      bufferCommands: true,
    });
    console.log("Connected to Database");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
