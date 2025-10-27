import Link from "next/link";
import { navbarLink } from "./dasboardnavlink";
import { X } from "lucide-react";
export default function DashboardMobileNavbar({
  isSidebarOpen,
  setIsSidebarOpen,
}) {
  return (
    <>
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 bg-gray-500 dark:bg-gray-900 h-full w-[80%] p-6 pt-2 transition-transform transform md:hidden z-10">
          <div className="flex justify-between items-center mb-2">
            <img src="/images/logo-bg.png" className="h-15 w-15" />
            <X
              onClick={() => {
                setIsSidebarOpen(!isSidebarOpen);
              }}
              className="text-white text-2xl cursor-pointer hover:text-gray-300"
            />
          </div>
          <ul className="space-y-6 text-white">
            {navbarLink.map(({ path, name, icon: Icon }, idx) => {
              return (
                <li key={idx}>
                  <Link
                    onClick={() => {
                      setIsSidebarOpen(false);
                    }}
                    href={path}
                    className="flex items-center space-x-3 text-lg font-medium hover:text-gray-300 transition duration-200"
                  >
                    <Icon />
                    <span>{name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
