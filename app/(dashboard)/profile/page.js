import ProfileBanner from "@/componets/dashboard/profile/banner";
import ProfileBio from "@/componets/dashboard/profile/bio";
export default function Page() {
  return (
    <div className="flex w-full flex-col gap-2 pb-5 bg-white dark:bg-slate-800 dark:text-white text-black">
      <ProfileBanner />
      <ProfileBio />
    
    </div>
  );
}
