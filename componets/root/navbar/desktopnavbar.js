import Link from "next/link";
export default function DesktopNavBar({ navbarLink }) {
  return (
    <div className="dark:bg-gray-800 bg-gray-100 border-gray-600 border fixed bottom-1 left-1/2 transform -translate-1/2 hidden md:flex rounded-2xl">
      <div className="flex gap-2 dark:text-white">
        {navbarLink.map(({ path, name, icon: Icon }, idx) => {
          return (
            <Link
              key={idx}
              className={`dark:text-white transition py-3 px-3 hover:bg-gray-300 dark:hover:bg-gray-700 flex flex-col justify-center items-center ${
                idx === 0 && " rounded-l-2xl"
              } ${idx === navbarLink.length - 1 && " rounded-r-2xl"}`}
              href={path}
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm">{name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
