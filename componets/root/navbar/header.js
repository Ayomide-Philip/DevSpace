"use client";
import { Menu } from "lucide-react";
import {
  Contact2,
  Grid,
  HomeIcon,
  Info,
  MessageCircle,
  Users2,
} from "lucide-react";
import MobileNavBar from "./mobilenavbar";
import { useState } from "react";

export default function RootHeader() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navbarLink = [
    { path: "/", name: "Home", icon: HomeIcon },
    { path: "/about", name: "About", icon: Info },
    { path: "/projects", name: "Projects", icon: Grid },
    { path: "/team", name: "Teams", icon: Users2 },
    { path: "/contact", name: "Contact", icon: Contact2 },
    { path: "/blog", name: "Blog", icon: MessageCircle },
  ];
  return (
    <>
      <div className="bg-gray-950 text-white h-20 flex items-center justify-between">
        <div className="flex">
          <img
            alt="logo"
            src="/images/logo-bg.png"
            className="h-12 w-12 rounded-full"
          />
        </div>
        <div className="flex mx-3 justify-center items-center gap-3">
          <div className="sm:flex sm:gap-4">
            <a
              className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
              href="/login"
            >
              Login
            </a>
            <a
              className="hidden sm:block rounded-md bg-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/30"
              href="/register"
            >
              Register
            </a>
          </div>
          <div className="flex">
            <button
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
              className="block md:hidden rounded-sm bg-white/20 p-2.5 text-white transition hover:text-white/75"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <MobileNavBar
        navbarLink={navbarLink}
        openNavbar={openNavbar}
        setOpenNavbar={setOpenNavbar}
      />
    </>
  );
}
