import React from "react";
import Image from "next/image";
import Link from "next/link";

import LiveChat from "public/images/live-chat.svg";

export default function GredientBtn(props) {
  // bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] lg:text-[15px] py-3 px-5 rounded-[3px] text-black font-medium flex items-center justify-center poppins mb-3 sm:mb-0
  return (
    <>
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
        {props.BtnTxt}
        <Image
          quality={80}
          src={LiveChat}
          alt="live-chat"
          className="w-5 ml-2"
        />
      </Link>
    </>
  );
}
