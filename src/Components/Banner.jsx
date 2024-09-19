import React from 'react'
import styles from '../../styles/Banner.module.css'
import Image from 'next/image'
import SelectInp from './SelectInp'



// images 
import logos from 'public/images/banner-image/banner-logos.png'

function Banner(props) {
    const { title, content, bg, css, headingWidth } = props.content;
    return (
        <>
            <section className={`bg-cover  bg-center ${bg ?? "bg-black"} ${css}`}>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 lg:col-span-7">
                            <div className="border-l-[3px] border-[#5CD881]">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<h1 class='text-[30px] md:text-[40px] text-white font-light leading-[1.2] mb-3 pl-[12px] ${headingWidth}'>
                                    ${title}
                                </h1>`}} />
                                <div dangerouslySetInnerHTML={{
                                    __html: `<p class='text-white text-[15px] font-light pb-5 pl-[12px]'>
                                    ${content}
                                </p>`}} />

                                <Image quality={80} src={logos} alt='Logos ' />
                            </div>
                            <form action="javascript:;" className="form max-w-[450px] mt-7 lg:mt-14 border-2 border-white p-3 pb-5 bg-[#34354C]/10  backdrop-blur-lg space-y-3 mb-[-60px]">
                                <input type="text" placeholder='First Name*' className='bg-[#70707070]/40 backdrop-blur-2xl focus:outline-0 h-[50px] rounded-[10px] w-full px-3 text-white placeholder:text-white text-[14px]' required />

                                <input type="email" placeholder='Email*' className='bg-[#70707070]/40 backdrop-blur-2xl  focus:outline-0 h-[50px] rounded-[10px] w-full px-3 text-white placeholder:text-white text-[14px]' required />

                                <input type="tel" minLength={6} maxLength={15} placeholder='Phone*' className='bg-[#70707070]/40 backdrop-blur-2xl  focus:outline-0 h-[50px] rounded-[10px] w-full px-3 text-white placeholder:text-white text-[14px]' required />

                                <SelectInp />

                                <textarea rows={7} placeholder='Additional Comments' className='pt-3 bg-[#70707070]/40 backdrop-blur-2xl  focus:outline-0 rounded-[8px] w-full px-3 text-white placeholder:text-white text-[14px] resize-none' required></textarea>

                                <button type='submit' className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-2 rounded-[3px]
                                text-black text-[14px] lg:text-[15px]
                               overflow-hidden font-medium poppins mb-3 sm:mb-0 flex items-center justify-center w-5/12">
                                    Submit Your Form
                                </button>
                            </form>
                        </div>
                        <div className="lg:col-span-7">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner