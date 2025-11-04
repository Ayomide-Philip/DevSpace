"use server";

import { NEXT_URL } from "@/libs/env.config";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SettingsAction(formData) {
  const category = formData.get("category");
  const bio = formData.get("bio");
  const instagram = formData.get("instagram");
  const github = formData.get("github");
  const twitter = formData.get("twitter");
  const linkedin = formData.get("linkedin");
  const portfolio = formData.get("portfolio");
  const skills = formData.getAll("skills[]");
  const tools = formData.getAll("tools[]");

  const request = await fetch(`${NEXT_URL}/api/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
    body: JSON.stringify({
      bio,
      instagram,
      github,
      twitter,
      linkedin,
      portfolio,
      skills,
      category,
      tools,
    }),
  });

  const response = await request.json();
  if (request.ok) {
    redirect("/profile");
  }


}
