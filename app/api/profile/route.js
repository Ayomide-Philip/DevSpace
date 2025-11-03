import { NextResponse } from "next/server";
import { auth } from "@/auth";
import Profile from "@/libs/models/profiles.models";

export const GET = auth(async function GET(req) {
  if (!req.auth || !req.auth.user)
    return NextResponse.json(
      { message: "User has an unauthorized access" },
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  const { id } = req.auth.user;
  const profile = await Profile.findOne({ user: id }).populate("user","-password -email");
  return NextResponse.json(
    { profile: profile },
    {
      status: 200,
    }
  );
});
