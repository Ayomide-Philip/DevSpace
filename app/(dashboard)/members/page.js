import { NEXT_URL } from "@/libs/env.config";
import { Search } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import MembersCard from "@/componets/dashboard/memberscard";

export default async function Page() {
  const data = await fetch(`${NEXT_URL}//api/profile/all`, {
    method: "GET",
    headers: {
      Cookie: (await cookies()).toString(),
      "Content-Type": "application/json",
    },
  });
  if (!data.ok) redirect("/feeds");

  const { profile } = await data.json();

  return (
    <div className="p-2 flex flex-col gap-3 mb-20 md:mb-30">
      <h1 className="text-center text-2xl font-bold">All Members</h1>
      <div className="flex mb-5 justify-center">
        <div className="flex sm:w-2xl dark:border-white border rounded-full h-10 relative">
          <input
            type="text"
            className="outline-none p-3 w-full"
            placeholder="Search for your friend"
          />
          <button className="absolute right-3 top-1.5 cursor-pointer">
            <Search />
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center px-2 md:px-5">
          {profile.map((profiles, idx) => {
            return <MembersCard profiles={profiles} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}
