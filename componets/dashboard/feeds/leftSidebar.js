import Link from "next/link";

export default function LeftSideBar() {
  return (
    <div className="md:flex justify-center flex-col py-3 hidden h-fit w-full gap-y-4">
      <div className="dark:bg-gray-800  bg-gray-200 p-3 rounded-xl">
        <div className="flex flex-col justify-center items-center w-full gap-y-1">
          <img
            alt="profile picture"
            src="/images/blank-profile-picture-973460_960_720.webp"
            className="h-20 w-20 rounded-full border border-gray-900 dark:border-gray-300"
          />
          <h1 className="text-xl text-center font-bold">Areo Ayomide Philip</h1>
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
          <h1 className="text-sm font-bold">Community Contribution:</h1>
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
      <div className="dark:bg-gray-800 bg-gray-200 p-3 rounded-xl">
        <div className="flex justify-between items-center">
          <h1 className="font-bold mb-2">Leaderboard</h1>
          <Link href="/leaderboard" className="text-sm hover:underline">
            See More
          </Link>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                className="w-10 h-10 rounded-full border border-gray-600 dark:border-gray-300"
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Front-end Developer
                </span>
              </div>
            </div>
            <span>25</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                className="w-10 h-10 rounded-full border border-gray-600 dark:border-gray-300"
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Front-end Developer
                </span>
              </div>
            </div>
            <span>25</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                className="w-10 h-10 rounded-full border border-gray-600 dark:border-gray-300"
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Front-end Developer
                </span>
              </div>
            </div>
            <span>25</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/images/blank-profile-picture-973460_960_720.webp"
                className="w-10 h-10 rounded-full border border-gray-600 dark:border-gray-300"
                alt=""
              />
              <div className="flex flex-col">
                <span className="text-sm">Areo Ayomide Philip</span>
                <span className="font-light text-[12px]">
                  Front-end Developer
                </span>
              </div>
            </div>
            <span>25</span>
          </div>
        </div>
      </div>
    </div>
  );
}
