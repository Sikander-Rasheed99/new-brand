import Link from 'next/link'
import React from 'react'

export default function BtnTwo(props) {
    return (
        <div>
            <Link href="#" className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-transparent translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-transparent px-3 md:px-6 xl:px-10 py-[12.5px] border-2 border-black rounded-[3px]
                                text-white text-[14px] lg:text-[15px]
                               overflow-hidden font-medium flex items-center justify-center ml-1" >
                {props.simpleTxt}
            </Link>
        </div>
    )
}
