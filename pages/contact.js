const contact = () => {
  return (
    <div>
      <div className="lg:flex lg:justify-around">
        <div className="self-center text-center lg:w-1/2">
          <p className="mt-10 mb-12 text-5xl font-bold md:text-6xl">
            Contact us
          </p>
          <p className="mx-auto mb-16 w-4/5 text-xl font-semibold md:w-4/6">
            Need to get in touch with us? You can either fill the form or you
            can directly email to the company email provided. Hopefully we would
            be able to help you...
          </p>
        </div>
        <div className="lg:my-20 lg:w-1/2 lg:self-center">
          <form action="" className="text-center">
            <label htmlFor="firstName" className="md:text-lg">
              First Name*
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="mx-auto mb-5 mt-1 block w-4/6 rounded-md border border-black bg-gray-200 py-2 pl-2 focus:border-2 md:w-1/2 lg:w-4/6 xl:w-1/2"
            />
            <label htmlFor="firstName" className="md:text-lg">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="mx-auto mb-5 mt-1 block w-4/6 rounded-md border border-black bg-gray-200 py-2 pl-2 focus:border-2 md:w-1/2 lg:w-4/6 xl:w-1/2"
            />
            <label htmlFor="email" className="md:text-lg">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mx-auto mb-5 mt-1 block w-4/6 rounded-md border border-black bg-gray-200 py-2 pl-2 focus:border-2 md:w-1/2 lg:w-4/6 xl:w-1/2"
            />
            <label htmlFor="help" className="md:text-lg">
              What can we do to help you?*
            </label>
            <textarea
              type="text"
              name="help"
              id="help"
              rows="5"
              required
              className="mx-auto mb-5 mt-1 block w-4/6 rounded-md border border-black bg-gray-200 pl-2 pt-2 focus:border-2 md:w-1/2 lg:w-4/6 xl:w-1/2"
            />
            <button
              type="submit"
              className="mb-10 rounded-md bg-black px-6 py-2 font-semibold text-white md:px-8 md:py-2.5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
