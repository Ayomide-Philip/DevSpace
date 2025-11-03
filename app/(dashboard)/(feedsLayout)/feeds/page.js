import { MessageCircleIcon, Share, ThumbsUp } from "lucide-react";

export default async function Page() {
  const posts = await fetch("http://localhost:3000/api/profile/all", {
    method: "GET",
    credentials: "include",
  });
  const post = await posts.json();
  console.log(post);
  return (
    <div className="p-3 flex flex-col gap-4">
      <div className="text-sm self-center text-gray-900 w-full md:w-lg dark:text-gray-200 bg-gray-200 dark:bg-gray-800 flex p-2 rounded-xl gap-2 items-center">
        <img
          src="/images/blank-profile-picture-973460_960_720.webp"
          alt=""
          className="h-10 w-10 rounded-full border dark:border-gray-100"
        />
        <div className="flex w-full h-full border rounded-full p-1">
          <input
            className="h-7 w-full outline-none px-3 placeholder:text-gray-800 dark:placeholder:text-gray-300"
            type="text"
            placeholder="What's are you building today?"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center justify-center">
        {[...Array(4)].map((_, idx) => {
          return (
            <div
              key={idx}
              className="text-gray-900 w-full md:w-lg dark:text-gray-200 bg-gray-200 dark:bg-gray-800 flex p-2 rounded-xl gap-2 flex-col"
            >
              <div className="flex gap-2">
                <img
                  src="/images/blank-profile-picture-973460_960_720.webp"
                  alt=""
                  className="w-10 h-10 rounded-full border border-gray-700"
                />
                <div className="flex flex-col">
                  <span className="md:text-[18px]">Areo Ayomide Philip</span>
                  <span className="text-sm">
                    {new Date().toLocaleDateString("en-Us", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="p-1 mb-2 text-sm md:text-base">
                  Lorem ipsum tore Lorem ipsum tore Lorem ipsum tore Lorem ipsum
                  tore Lorem ipsum tore Lorem ipsum tore Lorem ipsum tore Lorem
                  ipsum tore Lorem ipsum tore Lorem ipsum tore Lorem ipsum tore
                  Lorem ipsum tore Lorem ipsum tore Lorem ipsum tore Lorem ipsum
                  tore Lorem ipsum tore
                </p>
                <img
                  src="/images/background-image.jpg"
                  alt=""
                  className="rounded-xl h-[300px] object-cover"
                />
              </div>
              <div className="flex justify-between items-center px-3 py-2">
                <div className="flex gap-1 items-center justify-center">
                  <span className="text-sm">5</span>
                  <ThumbsUp fill="white" />
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <span className="text-sm">5</span>
                  <MessageCircleIcon />
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <Share />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
