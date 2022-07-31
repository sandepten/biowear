const Emailnews = () => {
  return (
    <div className="bg-slate-100">
      <div className="text-center">
        <p className="mb-6 pt-10 text-3xl font-bold lg:text-4xl">
          Want weekly News & Updates?
        </p>
        <p className="my-8 mx-6 font-semibold md:mx-auto md:w-3/4 lg:w-1/2">
          Join our email list to get all the latest updates, discounts, offers,
          new and updated products and a lot of more amazing information curated
          for you.
        </p>
      </div>
      <div className="mx-10 mt-14">
        <form
          action=""
          className="lg:mb-4 lg:flex lg:items-center lg:justify-center lg:gap-3"
        >
          <input
            type="email"
            name=""
            id=""
            className="mb-3 block w-full rounded-md border-b-2 border-black py-3 pl-3 md:mx-auto md:w-1/2 lg:mx-0 lg:mb-0"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-black py-3 font-semibold text-white hover:border-2 hover:border-black hover:bg-zinc-100 hover:text-black md:mx-auto md:block md:w-1/2 lg:mx-0 lg:w-28"
          >
            SIGN UP
          </button>
        </form>
        <p className="mt-4 pb-10 text-center">
          Note: You can opt-out at any time.
        </p>
      </div>
    </div>
  );
};

export default Emailnews;
