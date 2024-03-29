import {
  MenuIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { userAgent } from "next/server";
import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  hamburgerMenuState,
  loginState,
  userNameState,
} from "../atoms/signAtoms";
import { logout } from "../db/auth";

const Navbar = () => {
  const [hamburger, setHamburger] = useRecoilState(hamburgerMenuState);
  const [login, setLogin] = useRecoilState(loginState);
  const [userName, setUserName] = useRecoilState(userNameState);
  const [cart, setCart] = useState(false);
  // const [login, setLogin] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        {/* This is the navbar for small devices */}
        <div className="mx-3 flex justify-between py-3 md:hidden">
          {hamburger ? (
            <button
              onClick={() => {
                setHamburger(false);
              }}
            >
              <MenuIcon height={35} />
            </button>
          ) : (
            <button
              onClick={() => {
                setHamburger(true);
              }}
            >
              <XIcon height={35} />
            </button>
          )}
          <p className="font-Catalish text-3xl font-semibold">Biowear</p>
          <ShoppingCartIcon
            onClick={() => {
              setCart(true);
            }}
            height={35}
          />
        </div>
        {/* This is the hidden overflow menu/navbar for mobiles */}
        {/* //todo remove the vertical scrollbar from this overflow menu */}
        {!hamburger ? (
          <div className="">
            <ul className="min-h-screen w-full flex-row items-center justify-center space-y-6 overflow-y-hidden pt-10 text-center text-lg">
              <Link href={"/men"}>
                <li>Men</li>
              </Link>
              <hr />
              <Link href={"/women"}>
                <li>Women</li>
              </Link>
              <hr />
              <Link href={"/kids"}>
                <li>Kids</li>
              </Link>
              <hr />
              <Link href={"/signup"}>
                <li
                  onClick={() => {
                    setHamburger(false);
                  }}
                >
                  Sign up
                </li>
              </Link>
              <hr />
              <Link href={"/about"}>
                <li>About</li>
              </Link>
              <hr />
              <Link href={"/contact"}>
                <li>Contact</li>
              </Link>
              <hr />
            </ul>
          </div>
        ) : null}
        {/* //?This is the cart sidebar */}
        {cart ? (
          <div className="absolute top-0 right-0 z-20 min-h-screen w-full bg-white md:w-3/4 lg:w-1/3">
            <button
              onClick={() => {
                setCart(false);
              }}
            >
              <XIcon className="absolute ml-3" height={40} />
            </button>
            <div className="text-center">
              <div className="flex justify-center pb-3">
                <ShoppingCartIcon height={28} />
              </div>
              <hr />
              <p className="py-3 font-medium">Your cart is empty</p>
            </div>
          </div>
        ) : null}

        {/* //?This is the navbar for larger devices */}
        <div className="hidden items-center justify-between py-3 md:flex">
          <ul className="ml-8 flex space-x-6 font-mono text-lg font-semibold lg:space-x-8">
            <Link href={"/men"}>
              <li className="hover:cursor-pointer hover:underline">Men</li>
            </Link>
            <Link href={"/women"}>
              <li className="hover:cursor-pointer hover:underline">Women</li>
            </Link>
            <Link href={"/kids"}>
              <li className="hover:cursor-pointer hover:underline">Kids</li>
            </Link>
          </ul>
          <Link href={"/"}>
            <span className="font-Catalish text-3xl font-semibold hover:cursor-pointer">
              Biowear
            </span>
          </Link>
          <ul className="mr-6 flex items-center space-x-6 font-mono text-lg font-semibold lg:space-x-8">
            <Link href={"/about"}>
              <li className="hover:cursor-pointer hover:underline">About</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:cursor-pointer hover:underline">Contact</li>
            </Link>
            <div className="flex items-center space-x-6 lg:space-x-8">
              <ShoppingCartIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  setCart(true);
                }}
                height={22}
              />
              {login ? (
                <Link href={"/account"}>
                  <div className="flex items-center space-x-3">
                    <UserIcon
                      height={22}
                      className="hover:cursor-pointer"
                      onClick={() => {
                        logout();
                      }}
                    />
                    <span className="hover:cursor-pointer">{userName}</span>
                  </div>
                </Link>
              ) : (
                <Link href={"/signup"}>
                  <span className="text-xl font-semibold text-blue-900 hover:cursor-pointer hover:underline">
                    Sign In
                  </span>
                </Link>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
