import { X } from "lucide-react";
import Link from "next/link";

export default function MobileNavBar({
  navbarLink,
  openNavbar,
  setOpenNavbar,
}) {
  return (
    <>
      {openNavbar && (
        <div className="fixed inset-0 z-50 bg-black/90 p-6 text-white md:hidden">
          <div className="flex justify-between items-center mb-6">
            <a className="text-teal-300 font-bold text-lg" href="./#">
              <img
                src="/images/logo-bg.png"
                alt="Logo"
                className="h-20 w-auto"
              />
            </a>
            <button
              onClick={() => {
                setOpenNavbar(false);
              }}
            >
              <X />
            </button>
          </div>

          <nav className="space-y-4">
            {navbarLink.map(({ path, name }, idx) => (
              <Link
                key={idx}
                href={path}
                className="block text-lg font-medium hover:text-teal-400 transition"
              >
                {name}
              </Link>
            ))}
            <div className="mt-6 space-y-2">
              <Link
                href="/login"
                className="block w-full text-center rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-500"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block w-full text-center rounded-md bg-white/10 px-4 py-2 font-medium hover:bg-white/20"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
