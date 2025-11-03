import { NextResponse } from "next/server";
import User from "@/libs/models/user.models";
import ConnectToDatabase from "@/libs/database";
import Post from "@/libs/models/posts.models";

export async function POST(req) {
  const { userId, title, content, image } = await req.json();
  if (!title || title.trim().length < 5) {
    return NextResponse.json(
      { error: "Missing title or title is less than 5 characters." },
      {
        status: 404,
      }
    );
  }

  if (!content || content.trim().length < 10) {
    return NextResponse.json(
      { error: "Missing content or content is less than 10 characters." },
      {
        status: 404,
      }
    );
  }
  try {
    await ConnectToDatabase();
    const userExist = await User.findById(userId).select("-password -email");
    if (!userExist) {
      return new NextResponse(
        JSON.stringify({ error: "User does not exist" }),
        {
          status: 401,
          headers: { "content-type": "application/json" },
        }
      );
    }

    const post = await Post.create({ userId, title, content, image });
    return new NextResponse(
      JSON.stringify({ post, message: "Post created successfully." }),
      {
        status: 201,
        headers: { "content-type": "application/json" },
      }
    );
  } catch (err) {
    if (err.code === 11000) {
      return new NextResponse(
        JSON.stringify({ error: "User has created a post with this title" }),
        {
          status: 400,
          headers: { "content-type": "application/json" },
        }
      );
    }
    console.log(err);
  }
}
