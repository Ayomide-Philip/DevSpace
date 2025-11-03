import Form from "next/form";
export default function ProfileForm({ profile }) {
  console.log(profile);
  const { user, bio, urls, skills, tools } = profile;
  return (
    <Form>
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black dark:text-white"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={user?.name}
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          readOnly
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black dark:text-white"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user?.email}
          placeholder="Enter your email"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
          readOnly
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="category"
          className="mb-3 block text-base font-medium text-black dark:text-white"
        >
          Category
        </label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Enter your category"
          //   defaultValue={profile?.role}
          className={`w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-black outline-none focus:shadow-md resize-none border-[#e0e0e0] focus:border-blue-600`}
          required
        />
        {/* {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category}</p>
        )} */}
      </div>

      <div className="mb-5">
        <label
          htmlFor="bio"
          className="mb-3 block text-base font-medium text-black dark:text-white"
        >
          Bio:
        </label>
        <textarea
          name="bio"
          id="bio"
          placeholder="Enter your bio"
          rows={5}
          className={`w-full rounded-md border bg-white py-3 px-6 text-base font-medium text-black outline-none focus:shadow-md resize-none border-[#e0e0e0] focus:border-blue-600`}
          //   defaultValue={profile?.bio}
          required
        />
        {/* {errors.bio && (
          <p className="mt-1 text-sm text-red-600">{errors.bio}</p>
        )} */}
      </div>

      <div>
        <button
          type="submit"
          //   disabled={isSubmitting}
          className="hover:shadow-form w-full rounded-md bg-blue-600 py-3 px-8 text-center text-base font-semibold text-white outline-none cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {/* {isSubmitting ? "Saving..." : "Save Changes"} */}
          Save Changes
        </button>
      </div>
    </Form>
  );
}
