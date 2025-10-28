import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();
  if (!session || !session?.user) return redirect("/login");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[22%_50%_22%] justify-center dark:bg-gray-900 dark:text-white h-screen gap-2">
        <div className="md:flex justify-center  flex-col py-3 hidden h-fit w-full">
          <div className="dark:bg-gray-800  bg-gray-200 p-3 rounded-xl">
            <div className="flex flex-col justify-center items-center w-full gap-y-1">
              <img
                alt="profile picture"
                src="/images/blank-profile-picture-973460_960_720.webp"
                className="h-20 w-20 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <h1 className="text-xl text-center font-bold">
                Areo Ayomide Philip
              </h1>
              <p className="text-sm dark:text-gray-300">Front-end Developer</p>
              <Link
                href="/profile"
                className="text-sm text-blue-500 dark:text-blue-400  hover:text-blue-600 hover:underline"
              >
                Edit Profile
              </Link>
            </div>
            <hr className="border-gray-400 mt-2" />
            <div className="flex flex-col mt-2">
              <h1 className="text-sm">Community Contribution:</h1>
              <div className="flex flex-col my-2 gap-2">
                <div className="flex justify justify-between text-sm">
                  <span className="font-bold">Posts:</span>
                  <span>23</span>
                </div>
                <div className="flex justify justify-between text-sm">
                  <span className="font-bold">Projects:</span>
                  <span>15</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <h1>Leaderboard</h1>
        </div>

        <div className="md:flex  justify-center py-3 hidden">
          <h1>Chats</h1>
        </div>
      </div>
    </>
  );
}
