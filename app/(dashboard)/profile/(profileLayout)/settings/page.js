import ProfileBio from "@/componets/dashboard/profile/bio";
import ProfileForm from "@/componets/dashboard/profile/form";
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-semibold text-2xl">Edit Details</h1>
        <div className="mx-auto w-full max-w-[550px] mb-20">
          <ProfileForm profile={profile} />
        </div>
      </div>
    </ProfileBio>
  );
}
