"use client";
import Link from "next/link";
import { useState } from "react";
import { signOut } from "next-auth/react";
export default function ProfileIcon() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="relative">
      <img
        src="/images/blank-profile-picture-973460_960_720.webp"
        alt="Profile Picture"
        className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer transition-transform transform hover:scale-110"
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      />
      {isDropdownOpen && (
        <div
          className="absolute top-14 right-0 w-48 bg-white rounded shadow-lg border border-gray-200 z-5"
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <ul className="text-black">
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
              <Link href="/profile" className="block">
                Profile
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
              <Link href="/settings" className="block">
                Settings
              </Link>
            </li>
            <li className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition-all">
              <a
                onClick={() => {
                   signOut({callbackUrl:"/login"});
                }}
              >
                Logout
              </a>

            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
