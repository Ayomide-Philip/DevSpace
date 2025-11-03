import { NextResponse } from "next/server";
import User from "@/libs/models/user.models";
import { HashPassword } from "@/libs/utility/hashpassword";
import ConnectToDatabase from "@/libs/database";
import Profile from "@/libs/models/profiles.models";

export async function POST(request) {
  const { email, password, username, name } = await request.json();

  if (!name || !name.trim()) {
    return NextResponse.json(
      { message: "Please enter a your name" },
      {
        status: 400,
      }
    );
  }

  if (name.length < 5) {
    return NextResponse.json(
      { message: "Please enter at least 5 characters for your name" },
      {
        status: 400,
      }
    );
  }

  if (!email || !email.trim() || !email.includes("@")) {
    return NextResponse.json(
      { message: "Please enter a valid email address" },
      {
        status: 400,
      }
    );
  }

  if (email.length < 5) {
    return NextResponse.json(
      { message: "Please enter at least 5 characters for your email" },
      {
        status: 400,
      }
    );
  }

  try {
    await ConnectToDatabase();
    const existingEmail = await User.findOne({ email: email });

    if (existingEmail) {
      return NextResponse.json(
        { message: "Email already exists" },
        {
          status: 400,
        }
      );
    }

    const existingUsername = await User.findOne({ username });

    if (existingUsername) {
      return NextResponse.json(
        { message: "Username already exists" },
        {
          status: 400,
        }
      );
    }

    const user = await User.create({
      name,
      username,
      email,
      password: await HashPassword(password),
    });

    const profile = await Profile.create({ user: user._id });

    return NextResponse.json(
      {
        message: "User created Successfully",
        user: { id: user._id },
        profile: { id: profile._id },
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Something went wrong while creating an account for you" },
      {
        status: 400,
      }
    );
  }
}
