import FeedsCard from "@/componets/dashboard/feeds/feedcard";
import { cookies } from "next/headers";
import { BiError } from "react-icons/bi";

export default async function Page() {
  const posts = await fetch("http://localhost:3000/api/posts/all", {
    headers: {
      Cookie: (await cookies()).toString(),
    },
    cache: "no-store",
  });
  const data = await posts.json();
  const post = data.posts;

  return (
    <div className="p-3 flex flex-col gap-4 w-full">
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
        {!post || post.length <= 0 ? (
          <div className="flex flex-col items-center justify-center w-full">
            <span>
              <BiError className="h-10 w-10" />
            </span>
            <h1 className="text-xl">No Post</h1>
          </div>
        ) : (
          post.map((posts, idx) => {
            return <FeedsCard key={idx} post={posts} />;
          })
        )}
      </div>
    </div>
  );
}
