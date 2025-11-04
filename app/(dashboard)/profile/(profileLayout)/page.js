import ProfileBio from "@/componets/dashboard/profile/bio";
import { NEXT_URL } from "@/libs/env.config";
import { cookies } from "next/headers";
export default async function Page() {
  const profiles = await fetch(`${NEXT_URL}/api/profile`, {
    headers: {
      Cookie: (await cookies()).toString(),
    },
  });
  const data = await profiles.json();
  const { profile } = data;
  return (
    <ProfileBio profile={profile}>
      <div className="flex flex-col bg-gray-100 p-3 rounded-xl gap-2  dark:bg-slate-700 dark:text-white">
        <h1 className="text-lg font-semibold border-b border-b-gray-600 mb-2 ">
          About Me
        </h1>
        <div className="font-normal px-2">
          {profile?.bio ? (
            `${profile?.bio}`
          ) : (
            <div className="flex w-full h-full justify-center items-center font-[350]">
              You don&apos;t have a bio yet
            </div>
          )}
        </div>
      </div>
    </ProfileBio>
  );
}
