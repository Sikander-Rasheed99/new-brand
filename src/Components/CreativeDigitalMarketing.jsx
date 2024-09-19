import React from 'react'
import Btn from './Btn'
import BtnTwo from './BtnTwo'
import Image from 'next/image'

/////
import ResponsiveImage from 'public/images/digitalmarketing/digitalmarketing1.png'

export const CreativeDigitalMarketing = () => {
    return (
        <>
            <section className="bg-[url('/images/webdesign/responsivewebsite-bg.png')] bg-cover bg-center">
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 md:col-span-7 lg:col-span-5">
                            <div className="py-5 lg:py-20">
                                <h3 className='text-[25px] md:text-[40px] text-white leading-[1.3] mb-4'>Let us develop a <br className='lg:block hidden' /> <span className='gilroy-b'>responsive</span> website to help<br className='lg:block hidden' />  you attract <span className='gilroy-b'>more visitors</span></h3>
                                <p className='text-white text-[13px] sm:text-[15px] font-light max-w-[600px]'>Web Design Hub has an In-house team of devoted professional web designers and developers, who are dedicated to delivering top-tier websites for businesses.Our website solutions include:</p>

                                <div className="flex items-center justify-center sm:justify-start flex-wrap sm:space-x-6 mt-10">
                                    <Btn BtnTxt="Start Live Chat" />
                                    <BtnTwo simpleTxt='Book Demo' />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-5 lg:col-span-7 md:block hidden">
                            <Image quality={80} src={ResponsiveImage} className='w-full lg:h-full mt-[-77px]' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
