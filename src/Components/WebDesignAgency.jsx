import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

///
import logo1 from 'public/images/webdesign/logo1.png'
import logo2 from 'public/images/webdesign/logo2.png'
import logo3 from 'public/images/webdesign/logo3.png'
import logo4 from 'public/images/webdesign/logo4.png'
import logo5 from 'public/images/webdesign/logo5.png'
import GredientBtn from './GredientBtn'
import SimpleBtnTwo from './SimpleBtnTwo'
import Link from 'next/link'


export default function WebDesign() {

    // var settings = {
    //     dots: false,
    //     arrows: true,
    //     slidesToShow: 1,
    //     autoPlay: true,
    //     speed: 600,
    // };

    return (
        <section className='py-[90px] sm:pt-[130px] sm:pb-[80px] bg-[#F1F1F1] group'>
            <div className="px-[10px] sm:px-[30px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 lg:col-span-7">
                                <h3 className='text-[25px] md:text-[40px] font-light leading-[1.3] mb-3'>Our <span className='gilroy-b'>Web Design Agency</span> Takes Center Stage in Every Field of Design</h3>
                                <p className='text-[15px] md:text-[17px] font-light max-w-[825px]'>Web Design Hub has an In-house team of devoted professional web designers and developers,
                                    who are dedicated to delivering top-tier websites for businesses. <br className='lg:block hidden' />
                                    Our website solutions include:</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 md:grid-cols-5 gap-y-5 md:gap-y-0 sm:gap-x-4 mt-10 lg:mt-14">
                    <div className="col-span-12 sm:col-span-6 md:col-span-1 relative lg:left-[100%] group-hover:left-0 transition-all duration-700 hover:scale-90">
                        <Link href="/logo-design-company" className="relative">
                            <Image quality={80} src={logo1} alt='logos' className='w-full mx-auto' />
                            <div className="txt bg-[#000]/40 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full overflow-hidden transition-all ease-in-out duration-1000 opacity-0 group-hover:opacity-100 group-hover:w-full scale-0 group-hover:scale-100">
                                <h6 className='xl:text-[30px] md:text-[16px] text-[25px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all ease-in-out duration-700'>
                                    Logo Design
                                </h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1 relative lg:left-[50%] group-hover:left-0 transition-all duration-700 hover:scale-90">
                        <Link href="/logo-design-company" className="relative">
                            <Image quality={80} src={logo2} alt='logos' className='w-full mx-auto' />
                            <div className="txt bg-[#000]/40 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full overflow-hidden transition-all ease-in-out duration-1000 opacity-0 group-hover:opacity-100 group-hover:w-full scale-0 group-hover:scale-100">
                                <h6 className='xl:text-[30px] md:text-[16px] text-[25px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all ease-in-out duration-700'>Apps</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1  hover:scale-90 transition-all ease-in-out duration-700">
                        <Link href="/website-development-company" className="relative">
                            <Image quality={80} src={logo3} alt='logos' className='w-full mx-auto' />
                            <div className="txt bg-[#000]/40 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full overflow-hidden transition-all ease-in-out duration-1000 opacity-0 group-hover:opacity-100 group-hover:w-full scale-0 group-hover:scale-100">
                                <h6 className='xl:text-[30px] md:text-[16px] text-[25px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all ease-in-out duration-700'>Website</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1 relative lg:left-[-50%] group-hover:left-0 transition-all duration-700 hover:scale-90">
                        <Link href="/seo-company" className="relative">
                            <Image quality={80} src={logo4} alt='logos' className='w-full mx-auto' />
                            <div className="txt bg-[#000]/40 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full overflow-hidden transition-all ease-in-out duration-1000 opacity-0 group-hover:opacity-100 group-hover:w-full scale-0 group-hover:scale-100">
                                <h6 className='xl:text-[30px] md:text-[16px] text-[25px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all ease-in-out duration-700'>SEO</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1 relative lg:left-[-100%] group-hover:left-0 transition-all duration-700 hover:scale-90">
                        <Link href="/logo-design-company" className="relative">
                            <Image quality={80} src={logo5} alt='logos' className='w-full mx-auto' />
                            <div className="txt bg-[#000]/40 absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full overflow-hidden transition-all ease-in-out duration-1000 opacity-0 group-hover:opacity-100 group-hover:w-full scale-0 group-hover:scale-100">
                                <h6 className='xl:text-[30px] md:text-[16px] text-[25px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12] opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all ease-in-out duration-700'>Logo
                                    Design</h6>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 sm:space-x-3 mt-12 xl:mt-16">
                            <GredientBtn BtnTxt="Start Live Chat" />
                            <SimpleBtnTwo simpleTxt="Book Demo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
