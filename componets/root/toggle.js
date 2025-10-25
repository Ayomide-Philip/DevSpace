"use client";
import { LoaderPinwheel, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Toggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [loaded, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, [setLoading]);

  if (!loaded)
    return (
      <button className="p-3 rounded-full dark:bg-gray-800 flex justify-center items-center fixed right-4 bottom-4 border">
        <LoaderPinwheel className="dark:text-white h-7 w-7" />
      </button>
    );

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      className="p-3 rounded-full dark:bg-gray-800 flex justify-center items-center fixed right-4 bottom-7 border cursor-pointer"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="dark:text-white h-7 w-7" />
      ) : (
        <Moon className="dark:text-white h-7 w-7" />
      )}
    </button>
  );
}
