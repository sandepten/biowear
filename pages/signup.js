import Link from "next/link";

const signup = () => {
  return (
    <div>
      <div>
        <section className="fixed right-0 left-0">
          <p className="mx-auto mt-4 mb-8 w-4/5 text-4xl font-bold">Sign Up</p>
          <div className="mx-auto mb-6 flex w-4/5 cursor-pointer items-center justify-center space-x-3 rounded-xl border border-black py-2">
            <img src="facebook-logo.svg" alt="" width={20} />
            <p>Sign up with Facebook</p>
          </div>
          <div className="mx-auto mb-8 flex w-4/5 cursor-pointer items-center justify-center space-x-2 rounded-xl border border-black py-1">
            <img src="google-logo.svg" alt="" width={32} />
            <p>Sign up with Google</p>
          </div>
          <form action="" method="post">
            <div className="mx-auto w-4/5">
              <label
                htmlFor="firstName"
                className="mb-1 block text-sm font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id=""
                className="mb-3 w-full rounded-xl border bg-blue-50 py-1.5 pl-3"
              />
              <label
                htmlFor="lastName"
                className="mb-1 block text-sm font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id=""
                className="mb-3 w-full rounded-xl border bg-blue-50 py-1.5 pl-3"
              />
              <label htmlFor="email" className="mb-1 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                className="mb-3 w-full rounded-xl border bg-blue-50 py-1.5 pl-3"
              />
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                className="mb-5 w-full rounded-xl border bg-blue-50 py-1.5 pl-3"
              />
              <div className="flex items-center">
                <input type="checkbox" name="terms" id="" className="h-5 w-5" />
                <label htmlFor="checkbox" className="ml-3 text-xs">
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
          <div className="mx-auto w-4/5">
            <p className="inline">Already have an account?</p>
            <Link href="/signin">
              <span className="ml-1.5 font-medium text-blue-600 underline">
                Sign in
              </span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default signup;
