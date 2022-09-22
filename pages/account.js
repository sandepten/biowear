import React, { useState } from "react";

const Account = () => {
  const [details, setDetails] = useState(true);
  const [address, setAddress] = useState(false);
  const [orders, setOrders] = useState(false);
  const [settings, setSettings] = useState(false);

  const handleOnSubmit = () => {};
  return (
    <div className="mx-5 lg:mx-20">
      <div>
        <p className="my-5 text-3xl font-semibold">My Account</p>
      </div>
      <div>
        <div className="mb-6 flex justify-between border-y-2 py-1.5 font-medium">
          <p
            className={`ml-1 ${
              details ? "font-bold underline" : "font-normal"
            }`}
          >
            Details
          </p>
          <p className="border-r-2"></p>
          <p className={`${address ? "font-bold underline" : "font-normal"}`}>
            Addresses
          </p>
          <p className="border-r-2"></p>
          <p className={`${orders ? "font-bold underline" : "font-normal"}`}>
            Orders
          </p>
          <p className="border-r-2"></p>
          <p
            className={`mr-1 ${
              settings ? "font-bold underline" : "font-normal"
            }`}
          >
            Settings
          </p>
        </div>
        <div className="hidden flex-col space-y-5 lg:flex">
          <p>My details</p>
          <p>My addresses</p>
          <p>My orders</p>
          <p>Account settings</p>
        </div>
        <div>
          {details ? (
            <div>
              <form onSubmit={handleOnSubmit} className="space-y-4">
                <div>
                  <label className="text-sm" htmlFor="fullName">
                    Your name
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Full name"
                    className="mt-1.5 w-3/4 rounded-lg border border-black px-2 py-0.5"
                    name="fullName"
                    defaultValue=""
                  />
                </div>
                <div>
                  <label className="text-sm" htmlFor="email">
                    Your email
                  </label>
                  <br />
                  <input
                    placeholder="Email"
                    className="mt-1.5 w-3/4 rounded-lg border border-black px-2 py-0.5"
                    type="email"
                    name="email"
                    defaultValue=""
                  />
                </div>
                <p>
                  Email verification:{" "}
                  <span className="ml-1 text-red-600">False</span>
                </p>
                <button
                  className="my-6 rounded-lg bg-blue-700 py-1.5 px-3 text-center text-white"
                  type="submit"
                >
                  Submit changes
                </button>
              </form>
            </div>
          ) : null}
          {address ? <div></div> : null}
          {orders ? <div></div> : null}
          {settings ? <div></div> : null}
        </div>
      </div>
    </div>
  );
};

export default Account;
