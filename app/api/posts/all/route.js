import { NextResponse } from "next/server";
import Post from "@/libs/models/posts.models";
import { auth } from "@/auth";
import ConnectToDatabase from "@/libs/database";

export const GET = auth(async function GET(req) {
  if (!req.auth || !req.auth.user)
    return new NextResponse(JSON.stringify({ message: "User unauthorized" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  await ConnectToDatabase();
  const posts = await Post.find().populate("userId","-password -email");
  return new NextResponse(JSON.stringify({ posts }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
});
