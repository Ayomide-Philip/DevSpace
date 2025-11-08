import { Github, Instagram, Link, Linkedin, Twitter } from "lucide-react";
import { NEXT_URL } from "@/libs/env.config";
import { cookies } from "next/headers";
import NotFound from "next/dist/client/components/builtin/not-found";
export default async function Page({ params }) {
  const { id } = await params;
  const data = await fetch(`${NEXT_URL}/api/profile/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: (await cookies()).toString(),
    },
  });
  const response = await data.json();
  if (!data.ok) return NotFound();
  const {
    bio,
    urls: { github, instagram, twitter, portfolio, linkedin },
    user,
    tools,
    skills,
    category,
  } = response.profile;
  return (
    <div className="flex justify-center items-center mb-20">
      <div className="flex w-[500px] bg-gray-200 dark:bg-gray-800 rounded-xl pb-3 flex-col my-10 mx-5">
        <div className="w-fulls relative flex flex-col gap-2">
          <div className="flex">
            <img
              src={"/images/background-image.jpg"}
              alt="background-image"
              className="rounded-xl w-full h-45 object-cover "
            />
          </div>
          <div className="flex absolute left-1/2 transform -translate-x-1/2 sm:translate-0 sm:left-5 top-35 mb-10">
            <img
              src={"/images/blank-profile-picture-973460_960_720.webp"}
              alt="profile picture"
              className="h-25 w-25 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex sm:justify-end-safe justify-center gap-3 p-2 mt-15 sm:mt-0">
          {twitter && (
            <a href={twitter} className="dark-rounded-button">
              <Twitter />
            </a>
          )}
          <a href={github} className="dark-rounded-button">
            <Github />
          </a>
          {linkedin && (
            <a href={linkedin} className="dark-rounded-button">
              <Linkedin />
            </a>
          )}
          {instagram && (
            <a href={instagram} className="dark-rounded-button">
              <Instagram />
            </a>
          )}
          {portfolio && (
            <a href={portfolio} className="dark-rounded-button">
              <Link />
            </a>
          )}
        </div>
        <div className="flex flex-col justify-center items-center sm:items-start px-4 mb-3">
          <div className="flex items-center gap-1 sm:flex-row flex-col">
            <h1 className="text-[20px] md:text-2xl font-semibold">
              {user?.name}
            </h1>
            {category && <p className="text-sm capitalize">({category})</p>}
          </div>
          <div className="flex">
            {user?.username && <p className="font-normal">{user?.username}</p>}
          </div>
        </div>
        <div className="flex flex-col px-4 mb-3">
          <h1 className="font-bold">Bio</h1>
          {bio ? (
            <p className="font-light">{bio}</p>
          ) : (
            <div className="h-15 flex justify-center items-center">
              <p className="text-base font-light">No bio added yet.</p>
            </div>
          )}
        </div>
        <div className="flex flex-col px-4 gap-2 mb-3">
          <h1 className="font-semibold text-xl">Skills</h1>
          {skills.length > 0 ? (
            <div className="flex gap-3 flex-wrap">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="bg-green-500 p-1 px-3 rounded-xl text-sm"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-15 flex justify-center items-center">
              <span className="text-gray-300">No Skills added yet</span>
            </div>
          )}
        </div>
        <div className="flex flex-col px-4 gap-2">
          <h1 className="font-semibold text-xl">Tools</h1>
          {tools.length > 0 ? (
            <div className="flex gap-3 flex-wrap">
              {tools.map((tool, idx) => {
                return (
                  <div
                    key={idx}
                    className="bg-blue-400 p-1 px-3 rounded-xl text-sm"
                  >
                    {tool}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-15 flex justify-center items-center">
              <p className="text-base font-light">No tools added yet</p>
            </div>
          )}
        </div>
        <div className="flex px-4 py-2 justify-between mt-2  w-full flex-wrap gap-3">
          <a className="py-3 w-full md:w-1/3  bg-white text-center text-black cursor-pointer rounded-xl border border-black hover:border-white hover:bg-black hover:text-white font-semibold">
            Get in Touch
          </a>
          <a className="px-15 py-3 md:px-7 w-full md:w-1/3  bg-black text-center text-white cursor-pointer rounded-xl borde border-white hover:border-black hover:bg-white hover:text-black font-semibold">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}
