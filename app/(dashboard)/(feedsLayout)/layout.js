import { auth } from "@/auth";
import LeftSideBar from "@/componets/dashboard/feeds/leftSidebar";
import RightSidebar from "@/componets/dashboard/feeds/rightSideBar";
export default async function Layout({ children }) {
  const session = await auth();
  if (!session || !session?.user) return redirect("/login");
  return (
    <>
      <div className="flex p-3 dark:bg-gray-900 dark:text-white  gap-2">
        <LeftSideBar />
        {children}
        <RightSidebar />
      </div>
    </>
  );
}
