import { auth } from "@/auth";
import DashbaordHeader from "@/componets/dashboard/header";
import Toggle from "@/componets/root/toggle";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
  const session = await auth();
  if (!session) return redirect("/login");

  return (
    <>
      <DashbaordHeader />
      {children}
      <Toggle />
    </>
  );
}
