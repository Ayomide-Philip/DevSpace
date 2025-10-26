"use client";
import { Eye, EyeClosed, Github, Lock, Mail, User } from "lucide-react";
import Form from "next/form";
import { use, useActionState, useEffect, useState } from "react";
import RegisterAction from "./action";
import { toast } from "react-toastify";

export default function Page() {
  const [viewPassword, setViewPassword] = useState(false);
  const [state, formAction] = useActionState(RegisterAction, {
    message: "",
  });

  useEffect(() => {
    if (state.message) {
      toast(state.message);
    }
  }, [state]);
  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 py-4 px-4 shadow-xl rounded-xl sm:px-10 sm:py-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Create a DevSpace Account
        </h1>
        <p className="text-md font-light text-gray-600 dark:text-gray-300">
          We are happy to have you onboard
        </p>
      </div>

      <Form className="w-full flex flex-col gap-4" action={formAction}>
        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="name"
            className="text-sm text-gray-900 dark:text-white"
          >
            Fullname:
          </label>
          <div className="mt-1 relative w-full">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Input your Fullname"
              className={`block w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 border-gray-300 dark:border-gray-600`}
              required
            />
          </div>
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="username"
            className="text-sm text-gray-900 dark:text-white"
          >
            Username:
          </label>
          <div className="mt-1 relative w-full">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Input your Favourite Nickname"
              className={`block w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 border-gray-300 dark:border-gray-600`}
              required
            />
          </div>
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="email"
            className="text-sm text-gray-900 dark:text-white"
          >
            Email:
          </label>
          <div className="mt-1 relative w-full">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Input your Email"
              className={`block w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 border-gray-300 dark:border-gray-600`}
              required
            />
          </div>
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="password"
            className="text-sm text-gray-900 dark:text-white"
          >
            Password:
          </label>
          <div className="mt-1 relative w-full">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="password"
              name="password"
              type={viewPassword ? "text" : "password"}
              placeholder="Input your Password"
              className={`block w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 border-gray-300 dark:border-gray-600`}
              required
            />
            <button
              type="button"
              className="absolute right-2 transform top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
              onClick={() => {
                setViewPassword(!viewPassword);
              }}
            >
              {viewPassword ? <EyeClosed /> : <Eye />}
            </button>
          </div>
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-900 dark:text-white"
          >
            Confirm Password:
          </label>
          <div className="mt-1 relative w-full">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your Password"
              className={`block w-full pl-10 pr-3 py-2 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 border-gray-300 dark:border-gray-600`}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          //   disabled={loading}
          className="bg-teal-600  hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-xl shadow-sm hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-teal-500 disabled:bg-teal-400 disabled:cursor-not-allowed disabled:hover:scale-100 flex justify-center items-center cursor-pointer"
        >
          {/* {loading ? (
            <>
              <Loader className="animate-spin mr-2 h-5 w-5" />
              Registering...
            </>
          ) : (
            "Register"
          )} */}
          Register
        </button>
      </Form>

      <span className="mt-3 text-center w-full flex justify-center items-center dark:text-white">
        Or
      </span>
      <div className="flex mt-4 gap-5">
        <button className="bg-white hover:bg-teal-600 border border-teal-600 hover:text-white w-1/2 p-2 text-teal-600 rounded-full flex justify-center gap-2 items-center cursor-pointer">
          <Github />
          <span>Github</span>
        </button>
        <button className="bg-teal-600 hover:bg-white border border-teal-600 hover:text-teal-600 w-1/2 p-2 text-white rounded-full flex justify-center gap-2 items-center cursor-pointer">
          <Github />
          <span>Github</span>
        </button>
      </div>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Already have an account?
        </span>{" "}
        <a
          href="/login"
          className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
        >
          Login
        </a>
      </div>
    </div>
  );
}
