import { NextResponse } from "next/server";
import Profile from "@/libs/models/profiles.models";
import ConnectToDatabase from "@/libs/database";

export async function GET(req, { params }) {
  const { id } = await params;
  if (!id)
    return NextResponse.json(
      { message: "Id not found" },
      {
        status: 404,
      }
    );

  try {
    await ConnectToDatabase();
    const profile = await Profile.findOne({ user: id }).populate(
      "user",
      "-password -email"
    );
    if (!profile) {
      return NextResponse.json(
        { message: "User not found" },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      { profile },
      {
        status: 200,
      }
    );
  } catch (err) {
    if (err.message.includes("ObjectId")) {
      return NextResponse.json(
        { message: `User does not exist` },
        {
          status: 404,
        }
      );
    }
    console.error(err);
    return NextResponse.json(
      { message: "An error occurred while getting user" },
      {
        status: 404,
      }
    );
  }
}
