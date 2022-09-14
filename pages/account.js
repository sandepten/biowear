import React from "react";

const Account = () => {
  return (
    <div className="mx-5 lg:mx-20">
      <div>
        <p className="my-5 text-3xl font-semibold">My Account</p>
      </div>
      <div>
        <div className="flex space-x-2">
          <p>Details</p>
          <p>Addresses</p>
          <p>Orders</p>
          <p>settings</p>
        </div>
        <div className="hidden flex-col space-y-5 lg:flex">
          <p>My details</p>
          <p>My addresses</p>
          <p>My orders</p>
          <p>Account settings</p>
        </div>
        <div>main content</div>
      </div>
    </div>
  );
};

export default Account;
