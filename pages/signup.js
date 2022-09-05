import Link from "next/link";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { hamburgerMenuState } from "../atoms/signAtoms";

const Signup = () => {
  const [hamburger, setHamburger] = useRecoilState(hamburgerMenuState);
  useEffect(() => {
    setHamburger(true);
  }, []);

  return (
    <div>
      <section className="mt-4 md:mt-10 lg:flex lg:items-center lg:justify-around xl:justify-center 2xl:mt-20">
        <div className="lg:w-2/5 xl:w-1/3">
          <p className="mx-auto mb-8 w-4/5 text-4xl font-bold sm:w-3/4 md:w-2/3 lg:w-auto 2xl:w-4/5">
            Sign Up
          </p>
          <div className="mx-auto mb-6 flex w-4/5 cursor-pointer items-center justify-center space-x-3 rounded-xl border border-black sm:w-3/4 md:w-2/3 md:text-lg md:font-semibold lg:w-auto 2xl:w-4/5">
            <img src="facebook-logo.svg" alt="" className="w-6 md:w-7" />
            <p className="py-2">Sign up with Facebook</p>
          </div>
          <div className="mx-auto mb-8 flex w-4/5 cursor-pointer items-center justify-center space-x-2 rounded-xl border border-black sm:w-3/4 md:w-2/3 md:text-lg md:font-semibold lg:w-auto 2xl:w-4/5">
            <img src="google-logo.svg" alt="" className="w-9 md:w-11" />
            <p className="py-2">Sign up with Google</p>
          </div>
          <form action="" method="post">
            <div className="mx-auto w-4/5 sm:w-3/4 md:w-2/3 lg:w-auto 2xl:w-4/5">
              <label
                htmlFor="firstName"
                className="mb-1 block text-sm font-medium md:text-base lg:text-sm"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id=""
                className="mb-3 w-full rounded-xl border bg-blue-50 py-1.5 pl-3 md:mb-5 lg:mb-3"
              />
              <label
                htmlFor="lastName"
                className="mb-1 block text-sm font-medium md:text-base lg:text-sm"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id=""
                className="mb-3 w-full rounded-xl border bg-blue-50 py-1.5 pl-3 md:mb-5 lg:mb-3"
              />
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium md:text-base lg:text-sm"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="mb-3 w-full rounded-xl border bg-blue-50 py-1.5 pl-3 md:mb-5 lg:mb-3"
              />
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium md:text-base lg:text-sm"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                className="mb-5 w-full rounded-xl border bg-blue-50 py-1.5 pl-3 md:mb-9 lg:mb-3"
              />
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-sm font-medium md:text-base lg:text-sm"
              >
                Confirm password
              </label>
              <input
                type="confirmPassword"
                name="confirmPassword"
                id=""
                className="mb-5 w-full rounded-xl border bg-blue-50 py-1.5 pl-3 md:mb-8"
              />
              <div className="flex items-center">
                <input type="checkbox" name="terms" id="" className="h-5 w-5" />
                <label
                  htmlFor="checkbox"
                  className="ml-3 text-xs md:text-base lg:text-sm"
                >
                  I've read and agree with{" "}
                  <span className="text-blue-600 underline">
                    Terms of Service
                  </span>{" "}
                  and our{" "}
                  <span className="text-blue-600 underline">
                    Privacy Policy
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="my-6 w-full rounded-xl bg-blue-700 py-2 text-lg text-white"
              >
                Create account
              </button>
            </div>
          </form>
          <div className="mx-auto mb-8 w-4/5 sm:w-3/4 md:w-2/3 lg:hidden lg:w-auto">
            <p className="inline">Already have an account?</p>
            <Link href="/signin">
              <span className="ml-1.5 font-medium text-blue-600 underline hover:cursor-pointer hover:no-underline">
                Sign in
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block lg:w-2/5">
          <div className="w-4/5 text-right">
            <p className="inline">Already have an account?</p>
            <Link href="/signin">
              <span className="ml-1.5 font-medium text-blue-600 underline hover:cursor-pointer hover:no-underline">
                Sign in
              </span>
            </Link>
          </div>
          <img
            src="/people-sign.svg"
            className="mx-auto w-full xl:w-5/6 2xl:w-3/4"
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default Signup;
