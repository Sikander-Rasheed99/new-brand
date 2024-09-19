import Image from 'next/image'
import React from 'react'

////
import CheckImage from 'public/images/websiteimage/checkImage.png'
import Particle1 from 'public/images/digitalmarketing/budgetfriendlypart1.png'
import Particle2 from 'public/images/digitalmarketing/budgetfriendlypart2.png'


export const BudgetFriendly = (props) => {
    const { subtitle, title, content, bg, css } = props.Budgetcont
    return (
        <>
            <section className={`lg:py-[100px] ${bg}`}>
                <div className="px-[10px] sm:px-[30px] mb-[30px]">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 mb-7 lg:mb-20">
                            {/* <p className='text-[12px] sm:text-[15px] font-light text-center mb-2 sm:mb-0'>Digital Marketing Packages</p>
                            <h2 className='text-[25px] sm:text-[40px] font-light leading-[1.2] text-center mb-2'>Budget-<span className='gilroy-b'>Friendly </span>Digital Brilliance</h2>
                            <p className='text-[12px] sm:text-[15px] font-light text-center'>Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.</p> */}
                            <p className='text-[12px] sm:text-[15px] font-light text-center mb-2 sm:mb-0'>{subtitle}</p>
                            <div dangerouslySetInnerHTML={{
                                __html: `<h2 class='text-[25px] sm:text-[40px] font-light leading-[1.2] text-center mb-2'>
                                    ${title}
                                </h2>`}} />
                            <p className='text-[12px] sm:text-[15px] font-light text-center'>{content}</p>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="card bg-[#1A1A1A] rounded-xl py-4 px-4">
                                <div className="">
                                    <h5 className="text-[35px] gilroy-b text-white text-center border-b-2 border-b-[#707070] w-10/12 mx-auto pb-2">Startup</h5>
                                    <div className="mb-2">
                                        <h5 className="font-sans text-center font-bold text-5xl text-[#45E2A1] my-10">
                                            $99<sup className="font-light text-4xl text-white"><del>$198</del></sup>
                                        </h5>
                                        <div className="bg-[#212121] py-7 px-5 rounded-[15px] mt-6 md:mt-10">
                                            <ul className="overflow-y-auto h-64 mb-5 custom-scrollbar">
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Cover Photo Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Profile Picture Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Welcome Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Unlimited Revisions</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>100% Satisfaction Guarantee</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>100% Money Back Guarantee *</span>
                                                </li>
                                            </ul>
                                            <div className="flex flex-wrap gap-y-6 items-center justify-between lg:mt-10">
                                                <div className="btnOne">
                                                    <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 md:px-10 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                                        Order Now
                                                    </a>
                                                </div>
                                                <div className="btnTwo">
                                                    <a href="tel:;" className='ml-1 inline-flex items-center justify-center px-5 py-2 border-2 border-white text-base font-medium rounded-[3px] text-white'>
                                                        (855) 888-8399
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="card bg-[#1A1A1A] rounded-xl py-4 px-4">
                                <div className="">
                                    <h5 className="text-[35px] gilroy-b text-white text-center border-b-2 border-b-[#707070] w-10/12 mx-auto pb-2">Classic</h5>
                                    <div className="mb-2">
                                        <h5 className="font-sans text-center font-bold text-5xl text-[#45E2A1] my-10">
                                            $149
                                        </h5>
                                        <div className="bg-[#212121] py-7 px-5 rounded-[15px] mt-6 md:mt-10">
                                            <ul className="overflow-y-auto h-64 mb-5 custom-scrollbar">
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Cover Photo Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Profile Picture Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Welcome Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Unlimited Revisions</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>100% Satisfaction Guarantee</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>100% Money Back Guarantee *</span>
                                                </li>
                                            </ul>
                                            <div className="flex flex-wrap gap-y-6 items-center justify-between lg:mt-10">
                                                <div className="btnOne">
                                                    <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 md:px-10 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                                        Order Now
                                                    </a>
                                                </div>
                                                <div className="btnTwo">
                                                    <a href="tel:;" className='ml-1 inline-flex items-center justify-center px-5 py-2 border-2 border-white text-base font-medium rounded-[3px] text-white'>
                                                        (855) 888-8399
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="card bg-[#1A1A1A] rounded-xl py-4 px-4">
                                <div className="">
                                    <h5 className="text-[35px] gilroy-b text-white text-center border-b-2 border-b-[#707070] w-10/12 mx-auto pb-2">Premium</h5>
                                    <div className="mb-2">
                                        <h5 className="font-sans text-center font-bold text-5xl text-[#45E2A1] my-10">
                                            $199<sup className="font-light text-4xl text-white"><del>$398</del></sup>
                                        </h5>
                                        <div className="bg-[#212121] py-7 px-5 rounded-[15px] mt-6 md:mt-10">
                                            <ul className="overflow-y-auto h-64 mb-5 custom-scrollbar">
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>2 Cover Photo Designs</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Profile Picture Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Welcome Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Twitter Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>YouTube Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Google+ Page Design</span>
                                                </li>
                                            </ul>
                                            <div className="flex flex-wrap gap-y-6 items-center justify-between lg:mt-10">
                                                <div className="btnOne">
                                                    <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 md:px-10 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                                        Order Now
                                                    </a>
                                                </div>
                                                <div className="btnTwo">
                                                    <a href="tel:;" className='ml-1 inline-flex items-center justify-center px-5 py-2 border-2 border-white text-base font-medium rounded-[3px] text-white'>
                                                        (855) 888-8399
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="card bg-[#1A1A1A] rounded-xl py-4 px-4">
                                <div className="">
                                    <h5 className="text-[35px] gilroy-b text-white text-center border-b-2 border-b-[#707070] w-10/12 mx-auto pb-2">Unlimited</h5>
                                    <div className="mb-2">
                                        <h5 className="font-sans text-center font-bold text-5xl text-[#45E2A1] my-10">
                                            $999<sup className="font-light text-4xl text-white"><del>$1998</del></sup>
                                        </h5>
                                        <div className="bg-[#212121] py-7 px-5 rounded-[15px] mt-6 md:mt-10">
                                            <ul className="overflow-y-auto h-64 mb-5 custom-scrollbar">
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>2 Cover Photo Designs</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Profile Picture Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Welcome Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Twitter Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>YouTube Page Design</span>
                                                </li>
                                                <li className='flex items-start space-x-2 leading-0 mb-3'>
                                                    <Image quality={80} src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                    <span className='text-white font-light'>Google+ Page Design</span>
                                                </li>
                                            </ul>
                                            <div className="flex flex-wrap gap-y-6 items-center justify-between lg:mt-10">
                                                <div className="btnOne">
                                                    <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 md:px-10 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                                        Order Now
                                                    </a>
                                                </div>
                                                <div className="btnTwo">
                                                    <a href="tel:;" className='ml-1 inline-flex items-center justify-center px-5 py-2 border-2 border-white text-base font-medium rounded-[3px] text-white'>
                                                        (855) 888-8399
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <div className="card bg-[#1A1A1A] rounded-xl py-4 px-4 h-full relative">
                                <Image quality={80} src={Particle2} className='absolute right-0 top-[-11px] md:block hidden' />
                                <Image quality={80} src={Particle1} className='absolute left-0 bottom-[-45px] md:block hidden' />
                                <div className="bg-[#212121] rounded-xl flex flex-col h-full items-center justify-center p-4">
                                    <p className='text-white text-[14px] text-center'>Digital Marketing</p>
                                    <h5 className='text-[35px] sm:text-[55px] gilroy-b text-white text-center leading-[1]'>Custom Package</h5>
                                    <div className="btn mt-8">
                                        <a href="tel:;" className='ml-1 inline-flex items-center justify-center px-5 py-2 border-2 border-white text-base font-medium rounded-[3px] text-white'>
                                            (855) 888-8399
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
