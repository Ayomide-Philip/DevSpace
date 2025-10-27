import { signIn } from "next-auth/react";

export async function LoginAction(formData) {
  const email = formData.get("emailAddress");
  const password = formData.get("password");
  console.log(email, password);
  const res = await signIn("credentials", {
    email,
    password,
    redirect: true,
    redirectTo: "/feeds",
  });
  console.log(res);
}
