import { Share } from "lucide-react";
import Link from "next/link";
export default function MembersCard({ profiles }) {
  console.log(profiles);
  const { id, user, bio, category } = profiles;
  return (
    <div className="flex flex-col bg-gray-200 dark:bg-gray-800 pb-3 rounded-xl">
      <div className="flex relative">
        <img
          src="/images/hero-bg.jpg"
          className="h-[200px] md:h-[250px] w-full object-cover rounded-t-xl"
          alt=""
        />
        <div className="absolute -bottom-13 left-3 md:-bottom-13 md:left-3">
          <img
            src="/images/blank-profile-picture-973460_960_720.webp"
            alt=""
            className="h-17 w-17 md:h-20 md:w-20 rounded-full"
          />
        </div>
      </div>
      <div className="pl-22 md:pl-25 mt-1 flex justify-between items-center pr-3">
        <div className="flex flex-col">
          <h1 className="text-base md:text-xl font-bold">{user?.name}</h1>
          {category && (
            <span className="text-[12px] md:text-[13px] capitalize">
              {category}
            </span>
          )}
        </div>
        <div className="flex">
          <Share className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 mt-2">
        {bio ? (
          <p className="text-sm md:text-base">{bio}</p>
        ) : (
          <div className="h-30"></div>
        )}
        <div className="flex justify-end">
          <Link
            href="#"
            className="bg-blue-600 text-sm text-white hover:bg-blue-800 px-4 py-2 rounded-2xl"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
