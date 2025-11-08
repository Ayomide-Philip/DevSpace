import { NextResponse } from "next/server";
import { auth } from "@/auth";
import Profile from "@/libs/models/profiles.models";

export const GET = auth(async function GET(req) {
  if (!req.auth || !req.auth.user)
    return NextResponse.json(
      { message: "User is unauthorized" },
      {
        status: 404,
      }
    );
  try {
    const profile = await Profile.find().populate("user", "-password -email");
    return new NextResponse(JSON.stringify({ profile }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "An error occurred while fetching users" },
      {
        status: 404,
      }
    );
  }
});
