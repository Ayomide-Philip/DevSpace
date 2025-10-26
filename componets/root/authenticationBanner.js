"use client";

import { usePathname } from "next/navigation";

export default function AuthenticationBanner() {
  const pathname = usePathname();

  return (
    <div className="relative text-white text-center p-8 z-10">
      <h2 className="text-3xl font-bold mb-4">{`Welcome ${
        pathname === "/login" ? "Back" : ""
      } to Devspace`}</h2>
      <p className="text-lg">
        {pathname === "/register"
          ? "Sign in to continue your journey with us."
          : "Login to have access to your data"}
      </p>
    </div>
  );
}
