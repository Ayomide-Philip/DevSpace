import { NextResponse } from "next/server";
import Post from "@/libs/models/posts.models";
import { auth } from "@/auth";
import ConnectToDatabase from "@/libs/database";

export async function GET() {
  await ConnectToDatabase();
  const session = await auth();
  console.log(session);

  const posts = await Post.find();
  return new NextResponse(JSON.stringify({ posts }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
