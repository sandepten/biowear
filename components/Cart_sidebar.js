import Image from "next/image";
import React from "react";
import { MdDeleteOutline } from 'react-icons/md'

const Cart_sidebar = () => {
  return (
    <div>
      <div className="absolute bg-white p-4 rounded-xl right-5 border-2">
        <div className="flex justify-between">
          <div>
            <span className="font-bold mr-1">2</span>
            <span className="mr-10">items in your cart</span>
          </div>
          <div>
            <span>Cart Subtotal:</span>
            <span className="font-bold block">₹1198</span>
          </div>
        </div>
        <div className="text-center">
          <button className="text-white bg-blue-600 px-12 my-3 rounded-lg font-semibold text-lg py-1">Proceed to Checkout</button>
          <hr />
        </div>
        <div className="flex my-4">
          <div className="px-2 pb-2">
          <Image src="/blue-shirt.jpg" height={96} width={75} alt="pic of blue shirt" />
          </div>
          <div className="flex flex-col">
            <span>Biowear Sea Blue T-Shirt</span>
            <span>₹599</span>
            <span>Size: XL</span>
            <span>Qty: 1</span>
            <span><MdDeleteOutline/></span>
          </div>
        </div>
        <div className="flex my-4">
        <div className="px-2 pb-2">
          <Image src="/black-shirt.jpg" height={96} width={75} alt="pic of blue shirt" />
          </div>
          <div className="flex flex-col">
            <span>Biowear Coal Black T-Shirt</span>
            <span>₹599</span>
            <span>Size: L</span>
            <span>Qty: 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_sidebar;
