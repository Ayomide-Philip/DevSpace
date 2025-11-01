import { Search } from "lucide-react";

export default function Page() {
  return (
    <div className="p-2 flex flex-col gap-3">
      <div className="flex mt-3 justify-center">
        <div className="flex md:w-2xl dark:border-white border rounded-full h-10 relative">
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
        <h1 className="text-center text-2xl font-bold mb-5">All Members</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center px-2 md:px-5">
          {[...Array(6)].map((data, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col bg-gray-200 dark:bg-gray-800 pb-3 rounded-xl"
              >
                <div className="flex relative">
                  <img
                    src="/images/hero-bg.jpg"
                    className="h-[200px] md:h-[250px] w-full object-cover rounded-t-xl"
                    alt=""
                  />
                  <div className="absolute -bottom-7 left-3 md:-bottom-9 md:left-3">
                    <img
                      src="/images/blank-profile-picture-973460_960_720.webp"
                      alt=""
                      className="h-17 w-17 md:h-20 md:w-20 rounded-full"
                    />
                  </div>
                </div>
                <div className="pl-22 md:pl-25 flex flex-col">
                  <h1 className="text-base md:text-xl">Areo Ayomide Philip</h1>
                  <span className="text-[12px] md:text-[13px]">
                    Full-Stack Developer
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
