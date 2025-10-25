import {
  Contact2,
  Grid,
  HomeIcon,
  Info,
  MessageCircle,
  Users2,
} from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="dark:bg-gray-800 bg-gray-100 border-gray-600 border fixed bottom-2 left-1/2 transform -translate-1/2 flex rounded-2xl">
      <div className="flex gap-2 dark:text-white">
        <Link
          className="dark:text-white transition py-2 px-2 hover:bg-gray-700 flex flex-col justify-center items-center rounded-l-2xl"
          href={"#"}
        >
          <HomeIcon className="h-5 w-5" />
          <span className="text-sm">Home</span>
        </Link>
        <Link
          className="dark:text-white transition py-2 px-2 hover:bg-gray-700 flex flex-col justify-center items-center"
          href={"#"}
        >
          <Info className="h-5 w-5" />
          <span className="text-sm">About</span>
        </Link>
        <Link
          className="dark:text-white transition py-2 px-2 hover:bg-gray-700 flex flex-col justify-center items-center"
          href={"#"}
        >
          <Grid className="h-5 w-5" />
          <span className="text-sm">Projects</span>
        </Link>
        <Link
          className="dark:text-white transition py-2 px-2 hover:bg-gray-700 flex flex-col justify-center items-center"
          href={"#"}
        >
          <Users2 className="h-5 w-5" />
          <span className="text-sm">Team</span>
        </Link>
        <Link
          className="dark:text-white transition py-2 px-2 hover:bg-gray-700 flex flex-col justify-center items-center"
          href={"#"}
        >
          <Contact2 className="h-5 w-5" />
          <span className="text-sm">Contact</span>
        </Link>
        <Link
          className="dark:text-white transition py-2 px-2 hover:bg-gray-700 flex flex-col justify-center items-center"
          href={"#"}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm">Blog</span>
        </Link>
      </div>
    </div>
  );
}
