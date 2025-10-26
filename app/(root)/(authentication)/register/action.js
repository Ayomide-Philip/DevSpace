"use server";
import { redirect } from "next/navigation";

export default async function RegisterAction(prev, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  const request = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password, username }),
  });

  const response = await request.json();

  if (!request.ok) {
    return { message: response.message };
  }

  return redirect("/login");
}
