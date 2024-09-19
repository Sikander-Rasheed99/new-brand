"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import GredientBtn from "./GredientBtn";
import SimpleBtn from "./SimpleBtn";
import SimpleBtnTwo from "./SimpleBtnTwo";

import LiveChat from "public/images/live-chat.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Header(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="relative bg-transparent z-40 lg:pt-4">
        <div className="px-[10px] sm:px-[30px] border-b border-[#A2A2A2] mx-[30px]">
          <div className="flex justify-between items-center pt-6 pb-6 lg:pb-8 lg:justify-start">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="text-[30px] font-bold poppins text-white">
                  logo
                </span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <button
                type="button"
                className="bg-transparent border-2 border-white rounded-md p-1 inline-flex items-center justify-center text-white hover:text-gray-50 focus:outline-none"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex items-center space-x-7 xl:space-x-20 display_block">
              <ul className="flex items-center space-x-6 xl:space-x-10">
                <li>
                  <Link
                    href="#"
                    className="relative text-[16px] font-medium text-white font-poppins group"
                  >
                    Home
                    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#45E2A1] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative text-[16px] font-medium text-white font-poppins group"
                  >
                    About
                    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#45E2A1] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative text-[16px] font-medium text-white font-poppins group"
                  >
                    Services
                    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#45E2A1] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative text-[16px] font-medium text-white font-poppins group"
                  >
                    FAQ
                    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#45E2A1] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative text-[16px] font-medium text-white font-poppins group"
                  >
                    Pricing/Packages
                    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#45E2A1] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="relative text-[16px] font-medium text-white font-poppins group"
                  >
                    Contact
                    <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#45E2A1] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
                  </Link>
                </li>
              </ul>
              {props.header ? (
                <ul className="flex itme-center space-x-2 ">
                  <li>
                    <GredientBtn BtnTxt="Start Live Chat" />
                  </li>
                  <li>
                    <SimpleBtn simpleTxt="Book Demo" />
                  </li>
                </ul>
              ) : (
                <ul className="flex itme-center space-x-2 ">
                  <li>
                    <Link
                      href="#"
                      className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-3 px-5 rounded-[3px]
                                text-black text-[14px] lg:text-[15px]
                               overflow-hidden font-medium flex items-center justify-center"
                    >
                      Login
                      <Image
                        quality={80}
                        src={LiveChat}
                        alt="live-chat"
                        className="w-5 ml-2"
                      />
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>

          {/* Mibile Menu */}
          <div
            className={
              open
                ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
                : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 relative z-[9999999]">
                <div className="flex items-center justify-between">
                  <Link href="/">
                    <span className="text-[30px] font-bold poppins text-black">
                      logo
                    </span>
                  </Link>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      onClick={() => setOpen(!open)}
                    >
                      <span className="sr-only">Close menu</span>
                      {/* Heroicon name: outline/x */}
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="">
                    <ul className="space-y-5">
                      <li>
                        <Link
                          href="#"
                          className="text-[16px] font-medium text-black hover:text-[#45E2A1] transition duration-150 ease-in-out poppins"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-[16px] font-medium text-black hover:text-[#45E2A1] transition duration-150 ease-in-out poppins"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-[16px] font-medium text-black hover:text-[#45E2A1] transition duration-150 ease-in-out poppins"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-[16px] font-medium text-black hover:text-[#45E2A1] transition duration-150 ease-in-out poppins"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-[16px] font-medium text-black hover:text-[#45E2A1] transition duration-150 ease-in-out poppins"
                        >
                          Pricing/Packages
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-[16px] font-medium text-black hover:text-[#45E2A1] transition duration-150 ease-in-out poppins"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <ul className="space-y-5 mt-4">
                      <li>
                        <GredientBtn BtnTxt="Start Live Chat" />
                      </li>
                      <li>
                        <SimpleBtnTwo simpleTxt="Book Demo" />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
