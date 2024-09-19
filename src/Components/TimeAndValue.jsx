import Image from 'next/image'
import React from 'react'

/////
import CheckImage from 'public/images/websiteimage/checkImage.png'
import valueImage from 'public/images/valueimages/valueImage.png'

export const TimeAndValue = () => {
    return (
        <>
            <section className='py-[100px] bg-[url(/images/valueimages/value-bg.png)] bg-center bg-cover'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 gap-y-10 md:gap-y-0">
                        <div className="col-span-12 md:col-span-7">
                            <p className='text-[12px] sm:text-[15px] font-light mb-2 sm:mb-0'>Logo Branding Services All-in-One Package</p>
                            <h3 className='text-[25px] sm:text-[40px] font-light leading-[1.2] mb-2'><span className='gilroy-b'>Complete</span> Solution <span className='gilroy-b'>for Time & Value</span></h3>

                            <div className="grid grid-cols-12 mt-4 lg:mt-8 gap-7">
                                <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                    <h6 className='text-[22px] gilroy-b'>Professional Logo</h6>
                                    <ul>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Unlimited Logo Design Concepts</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>By 8 Dedicated Logo Designers
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Unlimited Revisions</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Branded Document
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Corporate Profile</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Turnaround Time 2 Business Days</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                    <h6 className='text-[22px] gilroy-b'>Video Animation</h6>
                                    <ul>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>30 Seconds 2D Video Animation</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Script Writing
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Story Board</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Voice Over
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Animation with Sound Effect</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-6">
                                    <h6 className='text-[22px] gilroy-b'>Stationery Design</h6>
                                    <ul>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Free Business Card Design</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Free Letterhead Design
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Free Envelope Design</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Free Compliment Slip Design
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Free Corporate Brochure (up-to 6 Pages)</span>
                                        </li>
                                    </ul>

                                    <h6 className='text-[22px] gilroy-b mt-8'>Social Media Designs</h6>
                                    <ul>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Facebook, Twitter, Youtube, Linkedin</span>
                                        </li>
                                    </ul>

                                    <h6 className='text-[22px] gilroy-b mt-8'>Banner Design</h6>
                                    <ul>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>2 Design Concepts</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>2 Stock Photos for Banners
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 sm:col-span-6 lg:col-span-6 2xl:mt-[-30px]">
                                    <h6 className='text-[22px] gilroy-b'>Website Design</h6>
                                    <ul>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Unlimited Packages Website</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>5 Stock Photos
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>1 Year Free Domain Name Registration.</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>1 Year Free Hosting
                                            </span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Content Management System ( CMS )</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Contact Us From</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>Search Engine Submission</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>1 Landing Page SDi</span>
                                        </li>
                                        <li className='flex items-center space-x-2 mt-1'>
                                            <Image quality={80} src={CheckImage} />
                                            <span className='text-[12px] sm:text-[14px] font-light'>1 Blog Theme Design</span>
                                        </li>
                                    </ul>

                                    <h6 className='text-[30px] md:text-[40px] text-black mt-6 mb-4'>
                                        <span className='gilroy-b font-bold'>$3999</span><sup className='font-light text-black'><del>$7999</del></sup>
                                    </h6>

                                    <div class="btnOne"><a href="javascript:;" class="bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 md:px-8 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block">Order Now</a></div>

                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-5">
                            <Image quality={80} src={valueImage} className='sm:block hidden lg:h-full'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
