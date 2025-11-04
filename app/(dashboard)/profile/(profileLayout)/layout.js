import ProfileBanner from "@/componets/dashboard/profile/banner";
import ProfileBio from "@/componets/dashboard/profile/bio";
import { NEXT_URL } from "@/libs/env.config";
import { cookies } from "next/headers";
export default async function Layout({ children }) {
  const profiles = await fetch(`${NEXT_URL}/api/profile`, {
    headers: {
      Cookie: (await cookies()).toString(),
    },
  });
  const data = await profiles.json();
  const { profile } = data;
  return (
    <div className="flex w-full flex-col gap-2 pb-5 bg-white dark:bg-slate-800 dark:text-white text-black">
      <ProfileBanner profile={profile} />
      {children}
    </div>
  );
}
