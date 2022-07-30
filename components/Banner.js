import Link from "next/link";

const Banner = () => {
  return (
    <div className="">
      <div>
        <p className="text-4xl lg:text-6xl text-center text-white font-bold lg:text-slate-700 lg:w-1/2 mx-2">
          Biowear. For all your Science Cloth needs
        </p>
      </div>
      <div>
        <form className="hidden md:block">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block p-4 pl-10 text-sm text-black w-1/3 placeholder-slate-800 bg-gray-200 mt-10 rounded-lg border border-gray-300 focus:ring-blue-500"
              placeholder="Search your favorite"
              required
            />
            <button
              type="submit"
              className="text-white absolute inline-block top-2.5 right-2/3 mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        <ul className="flex-row space-y-5 mt-8 mx-10 text-center lg:flex lg:justify-around lg:w-1/3 lg:mt-10 text-lg">
          <Link href={"/"}>
            <li className="py-3 lg:px-6 lg:py-2 bg-white hover:bg-slate-100 hover:cursor-pointer rounded-md focus:border-orange-400">
              SHOP MEN
            </li>
          </Link>
          <Link href={"/"}>
            <li className="py-3 lg:px-6 lg:py-2 bg-white hover:bg-slate-100 hover:cursor-pointer rounded-md focus:border-orange-400">
              SHOP WOMEN
            </li>
          </Link>
          <Link href={"/"}>
            <li className="py-3 lg:px-6 lg:py-2 bg-white hover:bg-slate-100 hover:cursor-pointer rounded-md focus:border-orange-400">
              SHOP KIDS
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
