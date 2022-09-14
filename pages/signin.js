import Link from "next/link";
import React, { useState } from "react";
import { signInWithEmail } from "../db/auth";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <section className="mt-4 md:mt-10 lg:flex lg:items-center lg:justify-around xl:justify-center 2xl:mt-20">
        <div className="lg:w-2/5 xl:w-1/3">
          <p className="mx-auto mb-8 w-4/5 text-4xl font-bold sm:w-3/4 md:w-2/3 lg:w-auto 2xl:w-4/5">
            Sign In
          </p>
          <div className="mx-auto mb-6 flex w-4/5 cursor-pointer items-center justify-center space-x-3 rounded-xl border border-black sm:w-3/4 md:w-2/3 md:text-lg md:font-semibold lg:w-auto 2xl:w-4/5">
            <img src="facebook-logo.svg" alt="" className="w-6 md:w-7" />
            <p className="py-2">Sign in with Facebook</p>
          </div>
          <div className="mx-auto mb-8 flex w-4/5 cursor-pointer items-center justify-center space-x-2 rounded-xl border border-black sm:w-3/4 md:w-2/3 md:text-lg md:font-semibold lg:w-auto 2xl:w-4/5">
            <img src="google-logo.svg" alt="" className="w-9 md:w-11" />
            <p className="py-2">Sign in with Google</p>
          </div>
          {/* <p className="mt-6 mb-2 text-center text-xl font-semibold">OR</p> */}
          <form onSubmit={() => signInWithEmail(email, password)}>
            <div className="mx-auto w-4/5 sm:w-3/4 md:w-2/3 lg:w-auto 2xl:w-4/5">
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium md:text-base"
              >
                Email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                name="email"
                id="email"
                className="mb-3 w-full rounded-xl border bg-blue-50 py-1.5 pl-3 md:mb-5"
              />
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium md:text-base"
              >
                Password
              </label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                name="password"
                id="password"
                className="mb-5 w-full rounded-xl border bg-blue-50 py-1.5 pl-3 md:mb-9 lg:mb-4"
              />
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="terms"
                    id="checkbox"
                    className="h-5 w-5"
                  />
                  <label htmlFor="checkbox" className="text-sm font-medium">
                    Remember me
                  </label>
                </div>
                <div className="">
                  <button className="text-sm font-medium hover:underline">
                    Forgot password?
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="my-6 w-full rounded-xl bg-blue-700 py-2 text-lg text-white"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mx-auto mb-8 w-4/5 sm:w-3/4 md:w-2/3 lg:hidden lg:w-auto">
            <p className="inline">Don&apos;t have a account with us?</p>
            <Link href="/signup">
              <span className="ml-1.5 font-medium text-blue-600 underline hover:cursor-pointer hover:no-underline">
                Sign up
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <div className="w-4/5 text-right">
            <p className="inline">Don&apos;t have a account with us?</p>
            <Link href="/signup">
              <span className="ml-1.5 font-medium text-blue-600 underline hover:cursor-pointer hover:no-underline">
                Sign up
              </span>
            </Link>
          </div>
          <img
            src="/people-sign.svg"
            className="mx-auto w-full xl:w-5/6 2xl:w-4/6"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Signin;
