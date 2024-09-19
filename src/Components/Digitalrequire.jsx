import Image from 'next/image'
import React from 'react'

////
import Reuire1 from 'public/images/digitalmarketing/require1.png'
import Reuire2 from 'public/images/digitalmarketing/require2.png'
import Reuire3 from 'public/images/digitalmarketing/require3.png'
import Reuire4 from 'public/images/digitalmarketing/require4.png'


export const Digitalrequire = () => {
    return (
        <>
            <section className='pt-[90px] pb-[90px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 gap-y-8 lg:gap-y-0">
                        <div className="col-span-12">
                            <p className='text-[15px] font-light mb-1'>Digital Marketing Experts</p>
                            <h3 className='text-[25px] md:text-[40px] text-black leading-[1.3] mb-4 lg:mb-10'><span className='gilroy-b'>We're</span> Here to Acquire Results You <span className='gilroy-b'>Require</span></h3>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <Image quality={80} src={Reuire1} alt='Icon1' className=''/>
                            <div className="txt mt-4">
                                <h4 className='text-[18px] font-semibold mb-1'>Search Engine Optimization</h4>
                                <p className='text-[14px] font-light sm:max-w-[310px]'>Our SEO experts optimize your website to rank higher on search engines, driving organic traffic and ensuring your website is discoverable by your target audience.</p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <Image quality={80} src={Reuire2} alt='Icon1' className=''/>
                            <div className="txt mt-4">
                                <h4 className='text-[18px] font-semibold mb-1'>Content Marketing</h4>
                                <p className='text-[14px] font-light sm:max-w-[310px]'>Our content writers craft compelling narratives that resonate with your audience, driving engagement, trust, and conversions, all while establishing your authority in your industry.</p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <Image quality={80} src={Reuire3} alt='Icon1' className=''/>
                            <div className="txt mt-4">
                                <h4 className='text-[18px] font-semibold mb-1'>Social Media Marketing</h4>
                                <p className='text-[14px] font-light sm:max-w-[310px]'>Through dynamic social strategies, we connect your brand with your audience, boosting engagements, and recognition. We focus on constant growth, from content to community management.</p>
                            </div>
                        </div>
                        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                            <Image quality={80} src={Reuire4} alt='Icon1' className=''/>
                            <div className="txt mt-4">
                                <h4 className='text-[18px] font-semibold mb-1'>Pay Per Click Advertising</h4>
                                <p className='text-[14px] font-light sm:max-w-[310px]'>With precision PPC, we elevate your brand to the search forefront and digital platforms, delivering immediate, cost-effective results. Your success is our priority.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
