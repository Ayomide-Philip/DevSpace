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
  const profile = await Profile.findOne({ user: id }).populate(
    "user",
    "-password"
  );
  return NextResponse.json(
    { profile: profile },
    {
      status: 200,
    }
  );
});

export const PATCH = auth(async function PATCH(req) {
  if (!req.auth || !req.auth.user)
    return NextResponse.json(
      { message: "Unauthorized Access" },
      {
        status: 400,
      }
    );
  try {
    const { id } = req.auth.user;
    const profile = await Profile.findOne({ user: id });
    if (!profile) {
      return NextResponse.json(
        { message: "User not found" },
        {
          status: 400,
        }
      );
    }
    const {
      bio,
      skills,
      tools,
      category,
      instagram,
      github,
      twitter,
      linkedin,
      portfolio,
    } = await req.json();
    let edited = false;

    if (profile.bio.trim() === "" || profile.bio !== bio) {
      profile.bio = bio;
      edited = true;
    }

    if (profile.category.trim() === "" || profile.category !== category) {
      profile.category = category;
      edited = true;
    }

    if (skills && skills.length > 0) {
      profile.skills = skills;
      edited = true;
    }

    if (skills.length <= 0) {
      profile.skills = [];
      edited = true;
    }

    if (tools && tools.length > 0) {
      profile.tools = tools;
      edited = true;
    }

    if (tools.length <= 0) {
      profile.tools = [];
      edited = true;
    }

    if (profile.urls.github.trim() === "" || profile.urls.github !== github) {
      profile.urls.github = github;
      edited = true;
    }

    if (
      profile.urls.twitter.trim() === "" ||
      profile.urls.twitter !== twitter
    ) {
      profile.urls.twitter = twitter;
      edited = true;
    }

    if (
      profile.urls.linkedin.trim() === "" ||
      profile.urls.linkedin !== linkedin
    ) {
      profile.urls.linkedin = linkedin;
      edited = true;
    }

    if (
      profile.urls.portfolio.trim() === "" ||
      profile.urls.portfolio !== portfolio
    ) {
      profile.urls.portfolio = portfolio;
      edited = true;
    }

    if (
      profile.urls.instagram.trim() === "" ||
      profile.urls.instagram !== instagram
    ) {
      profile.urls.instagram = instagram;
      edited = true;
    }

    if (edited) {
      await profile.save();
    }

    return NextResponse.json(
      { profile, message: "User Profile Updated Successful." },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "An error was encountered when updating your profile" },
      {
        status: 400,
      }
    );
  }
});
