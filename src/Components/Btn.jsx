import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import BtnIcon from 'public/images/webdesign/btn-ico.png'


export default function Btn(props) {

    return (
        <>
            <Link href="#" className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#000] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-black py-[15px] px-6 rounded-[3px]
                                text-[#45E2A1] text-[14px] lg:text-[15px]
                               overflow-hidden font-medium flex items-center justify-center">
                {props.BtnTxt}
                <Image quality={80} src={BtnIcon} alt='live-chat' className='w-5 ml-2' />
            </Link>
        </>
    )
}
