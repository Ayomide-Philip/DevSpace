import { MessageCircleDashed } from "lucide-react";
import Link from "next/link";
export default function RightSidebar() {
  return (
    <div className="lg:flex flex-col gap-y-3  justify-center py-3 hidden h-fit w-full">
      <div className="dark:bg-gray-800 bg-gray-200 p-3 rounded-xl w-full">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold">All Members</h1>
          <Link href="/members" className="text-sm hover:underline">
            See More
          </Link>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-800 bg-gray-200 p-3 rounded-xl w-full">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold">Chats</h1>
          <Link href="/chat" className="text-sm hover:underline">
            View All
          </Link>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
            <Link href="#">
              <MessageCircleDashed className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
            <Link href="#">
              <MessageCircleDashed className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
            <Link href="#">
              <MessageCircleDashed className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                alt="profile picture"
                className="h-10 w-10 rounded-full border border-gray-900 dark:border-gray-300"
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Full-stack Developer
                </span>
              </div>
            </div>
            <Link href="#">
              <MessageCircleDashed className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
