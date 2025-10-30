export default async function Page() {
  return (
    <div className="p-3 flex flex-col gap-5">
      <div className="text-sm self-center text-gray-900 w-full md:w-lg dark:text-gray-200 bg-gray-200 dark:bg-gray-800 flex p-2 rounded-xl gap-2 items-center">
        <img
          src="/images/blank-profile-picture-973460_960_720.webp"
          alt=""
          className="h-10 w-10 rounded-full border dark:border-gray-100"
        />
        <div className="flex w-full h-full border rounded-full p-1">
          <input
            className="h-full w-full outline-none px-3 placeholder:text-gray-800 dark:placeholder:text-gray-300"
            type="text"
            placeholder="What's are you building today?"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-gray-900 w-full md:w-lg dark:text-gray-200 bg-gray-200 dark:bg-gray-800 flex p-2 rounded-xl gap-2 items-center">
          <div className="flex">
            <img
              src="/images/blank-profile-picture-973460_960_720.webp"
              alt=""
              className="w-10 h-10 rounded-full border border-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
