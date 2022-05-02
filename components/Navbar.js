import { FaTshirt } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go'
// import { Menu } from '@headlessui/react'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [dropdown, setdropdown] = useState(false)
  return (
    <div>
      <nav className="flex justify-between py-3 px-6">
        <div className='flex space-x-2'>
          <p className='mt-1 text-blue-500 text-2xl'><FaTshirt /></p>
          <Link href={'/'} passHref><p className="text-xl font-bold cursor-pointer">BIOWEAR</p></Link>
        </div>
        <div>
          <ul className="flex space-x-7 font-semibold">
            <li className="hover:text-black cursor-pointer text-gray-700">Home</li>
            <li className="hover:text-black cursor-pointer text-gray-700">About</li>
            <li className="hover:text-black cursor-pointer text-gray-700">Contact Us</li>
            <div className='' onClick={()=>{setdropdown(!dropdown)}}>
              <li className="hover:text-black cursor-pointer flex text-gray-700" >Shop <GoTriangleDown className='mt-1 ml-1'/></li>
              {dropdown && (
                <div className='-z-10'>
                  <ul className='border-2 border-solid absolute bg-white rounded-xl top-11'>
                    <Link href={'./items/tshirts'} passHref><li className='border-b-2 px-8 py-2 cursor-pointer hover:bg-slate-100'>Shirts</li></Link>
                    <li className='border-b-2 px-8 py-2 cursor-pointer hover:bg-slate-100'>Pants</li>
                    <li className='border-b-2 px-8 py-2 cursor-pointer hover:bg-slate-100'>Mugs</li>
                    <li className='px-8 py-2 cursor-pointer hover:bg-slate-100'>Stickers</li>
                  </ul>
                </div>
              )}
            </div>
            <li className="hover:text-black cursor-pointer text-gray-700">Cart</li>
          </ul>
        </div>
        <div className="font-semibold">
          <span className="mr-4 hover:text-black cursor-pointer text-gray-700">Sign in</span>
          <span className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-800 cursor-pointer">Sign up</span>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
