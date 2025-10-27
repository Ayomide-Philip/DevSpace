"use client";
import { useState } from "react";
import ProfileIcon from "./profileicon";
import DashboardDesktopNavbar from "./desktopnavbar";
import { Menu } from "lucide-react";
import DashboardMobileNavbar from "./dashboardmobilenavbar";
export default function DashbaordHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-500 dark:bg-gray-900 h-20 ">
        <div className="h-full flex items-center justify-between px-3">
          <div className="flex items-center">
            <img src="/images/logo-bg.png" alt="logo" className="h-15 w-15" />
          </div>
          <div className="flex gap-3">
            <div className="flex md:hidden">
              <a className="flex justify-center items-center cursor-pointer">
                <Menu
                  className="dark:text-white text-black"
                  onClick={() => {
                    setIsSidebarOpen(!isSidebarOpen);
                  }}
                />
              </a>
            </div>
            <ProfileIcon />
          </div>
        </div>
      </div>
      <DashboardDesktopNavbar />
      <DashboardMobileNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
}
