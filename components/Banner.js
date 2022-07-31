import Link from "next/link";

const Banner = () => {
  return (
    <div>
      <div className="mx-3 text-center">
        <p className="text-4xl font-bold md:text-5xl lg:text-[2.5rem] xl:text-5xl">
          <span className="lg:text-5xl xl:text-7xl">Biowear.</span> For the
          nerdy you
        </p>
        <p className="mt-4 text-xl font-semibold md:text-2xl lg:text-xl xl:text-3xl">
          Biowear is your first stop to all your science cloth needs
        </p>
      </div>
      <div className="mt-12 flex flex-col items-center space-y-4 text-lg font-medium md:mt-16 xl:mt-20">
        <Link href={"/men"}>
          <button className="w-3/4 max-w-lg rounded-sm bg-white px-4 py-3 lg:w-3/5 lg:hover:bg-gray-200">
            SHOP MEN
          </button>
        </Link>
        <Link href={"/women"}>
          <button className="w-3/4 max-w-lg rounded-sm bg-white px-4 py-3 lg:w-3/5 lg:hover:bg-gray-200">
            SHOP WOMEN
          </button>
        </Link>
        <Link href={"/kids"}>
          <button className="w-3/4 max-w-lg rounded-sm bg-white px-4 py-3 lg:w-3/5 lg:hover:bg-gray-200">
            SHOP KIDS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
