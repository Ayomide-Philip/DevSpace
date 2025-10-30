export default async function Page() {
  return (
    <div className="py-3 flex flex-col">
      <div className="text-lg self-center text-gray-900 w-lg dark:text-gray-200 bg-gray-200 dark:bg-gray-800 flex p-2 rounded-xl gap-2 items-center">
        <img
          src="/images/blank-profile-picture-973460_960_720.webp"
          alt=""
          className="h-10 w-10 rounded-full border dark:border-gray-100"
        />
        <div className="flex w-full h-full border rounded-full p-1">
          <input
            className="h-full w-full outline-none px-3"
            type="text"
            placeholder="What's on your mind?"
          />
        </div>
      </div>
    </div>
  );
}
