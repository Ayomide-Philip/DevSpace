import {
  Github,
  Instagram,
  Link,
  Linkedin,
  Share,
  Twitter,
} from "lucide-react";
export default function ProfileBio({ profile, children }) {
  console.log(profile);
  const { user, urls } = profile;
  return (
    <>
      <div className="mt-10 p-2 md:mt-0 md:pl-47">
        <div className="flex w-full px-2 flex-col sm:flex-row">
          <div className="flex flex-col flex-wrap items-center w-full sm:items-start">
            <div className="flex gap-3 justify-center items-center">
              <h1 className="text-2xl font-semibold">{user?.name}</h1>
              {/* <button
                type="button"
                className="dark-rounded-button p-1!"
                target="_blank"
                onClick={async () => {
                  copyToClipboard({
                    path: `share/${profile?._id}`,
                  });
                }}
              >
                <Share className="w-4 h-4" />
              </button> */}
            </div>
            <p className="font-[350]">Full-Stack Developer</p>
          </div>
          <div className="flex justify-center sm:justify-end-safe gap-3 p-2">
            <a href={`${urls?.github}`} className="dark-rounded-button">
              <Twitter />
            </a>
            <a href={`${urls?.twitter}`} className="dark-rounded-button">
              <Github />
            </a>
            <a href={`${urls?.instagram}`} className="dark-rounded-button">
              <Instagram />
            </a>
            <a href={`${urls?.linkedin}`} className="dark-rounded-button">
              <Linkedin />
            </a>
            <a href={`${urls?.portfolio}`} className="dark-rounded-button">
              <Link />
            </a>
          </div>
        </div>
      </div>
      <div className="px-3 sm:px-10">
        <div className="grid grid-cols-1  sm:grid-cols-[30%_70%] gap-4  mb-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2 bg-gray-100 dark:bg-slate-700 dark:text-white p-3 rounded-xl ">
              <h1 className="text-lg font-semibold border-b border-b-gray-600 mb-2">
                Skills
              </h1>
              <div className="flex gap-3 flex-wrap">
                <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                  Full-Stack Developer
                </div>
                {/* {profile?.skills && profile?.skill?.length !== 0 ? (
                  profile?.skills?.map((skill, idx) => {
                    return (
                      <div
                        className="bg-green-500 p-1 px-3 rounded-xl text-sm"
                        key={idx}
                      >
                        {skill}
                      </div>
                    );
                  })
                ) : (
                  <div className="h-10 flex justify-center items-center w-full font-[350]">
                    No Skills yet
                  </div>
                )} */}
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-xl dark:bg-slate-700 dark:text-white">
              <h1 className="text-lg font-semibold border-b border-b-gray-600 mb-2">
                Tools
              </h1>
              <div className="flex gap-3 flex-wrap">
                <div className="bg-green-500 p-1 px-3 rounded-xl text-sm">
                  React
                </div>
                {/* {profile?.tools && profile?.tools?.length !== 0 ? (
                  profile?.tools?.map((tool, idx) => {
                    return (
                      <div
                        className="bg-green-500 p-1 px-3 rounded-xl text-sm"
                        key={idx}
                      >
                        {tool}
                      </div>
                    );
                  })
                ) : (
                  <div className="h-10 flex justify-center items-center w-full font-[350]">
                    No tools yet
                  </div>
                )} */}
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
