import { Github } from "lucide-react";
import { CgGoogle } from "react-icons/cg";

export default function OauthButton() {
  return (
    <div className="flex mt-4 gap-5">
      <button className="bg-white hover:bg-teal-600 border border-teal-600 hover:text-white w-1/2 p-2 text-teal-600 rounded-full flex justify-center gap-2 items-center cursor-pointer">
        <Github />
        <span>Github</span>
      </button>
      <button className="bg-teal-600 hover:bg-white border border-teal-600 hover:text-teal-600 w-1/2 p-2 text-white rounded-full flex justify-center gap-2 items-center cursor-pointer">
        <CgGoogle />
        <span>Google</span>
      </button>
    </div>
  );
}
