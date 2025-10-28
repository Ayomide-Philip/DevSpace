import { NextResponse } from "next/server";
import { auth } from "@/auth";
import ConnectToDatabase from "@/libs/database";

export default async function Proxy(req) {
  if (req.url.includes("/api/auth")) {
    await ConnectToDatabase();
    return NextResponse.next();
  }
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if(!session.user) {
      return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
