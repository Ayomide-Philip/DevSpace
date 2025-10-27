"use client";
import { Eye, EyeClosed, Loader, Lock, LogIn, Mail } from "lucide-react";
import Form from "next/form";
import { useEffect, useState } from "react";
import { LoginAction } from "./action";
import { useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import OauthButton from "@/componets/root/oauth";

export default function Page() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("error") === "CredentialsSignin") {
      toast.error("Invalid Credentials. Please try again.");
      return;
    } else if (searchParams.get("error")) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
  }, [searchParams]);

  const [viewPassword, setViewPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 py-4 px-4 shadow-xl rounded-xl sm:px-10 sm:py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
          Please sign in to your account
        </p>
      </div>

      <Form
        className="space-y-6"
        action={LoginAction}
        onSubmit={() => {
          setLoading(true);
        }}
      >
        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email Address
          </label>
          <div className="mt-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="email"
              id="email"
              name="emailAddress"
              placeholder="Input your Email Address"
              className={`block w-full pl-10 pr-3 py-2 sm:px-10 sm:py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none border-gray-300 dark:border-gray-600 `}
              required
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="password"
          >
            Password
          </label>
          <div className="mt-1 relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type={viewPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Input your Password"
              className={`block w-full pl-10 pr-3 py-2 sm:px-10 sm:py-3 border rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none border-gray-300 dark:border-gray-600 `}
              required
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
              onClick={() => {
                setViewPassword(!viewPassword);
              }}
            >
              {viewPassword ? <EyeClosed /> : <Eye />}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center py-2 px-4 sm:py-3 border border-transparent rounded-xl shadow-sm text-sm sm:text-base font-medium text-white bg-teal-600 hover:bg-teal-700 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-teal-400 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader className="animate-spin mr-2 h-5 w-5" />
              Signing in...
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-5 w-5" />
              Login
            </>
          )}
        </button>
      </Form>

      <span className="mt-3 text-center w-full flex justify-center items-center dark:text-white">
        Or
      </span>
      <OauthButton />

      <div className="mt-5 text-center space-y-4 px-4">
        <a
          href="#"
          className="block text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 py-2"
        >
          Forgot password?
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
          >
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}
