import React from 'react'
import Image from 'next/image'

////
import CustomImage from 'public/images/digitalmarketing/digitalmarketing.png'
import GredientBtn from './GredientBtn'
import SimpleBtnTwo from './SimpleBtnTwo'



export const DigitalMarketing = () => {
    return (
        <>
            <section className='bg-[#F1F1F1] pt-[90px] sm:pt-[140px] pb-[80px] xl:pb-[130px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className='text-[12px] sm:text-[15px] font-light text-center mb-2 sm:mb-0'>Your Brand, Your Rules</p>
                            <h2 className='text-[25px] sm:text-[40px] font-light leading-[1.2] text-center mb-2'>Customized <span className='gilroy-b'>Digital Marketing</span> Services for You</h2>
                            <p className='text-[12px] sm:text-[15px] font-light text-center max-w-[995px] mx-auto'>Our marketing team at Web Design Hub creates a digital marketing strategy that is completely unique and customized for your business. If you are ready for the digital revolution, let's kickstart the journey today!</p>
                            <Image quality={80} src={CustomImage} className='mx-auto mt-12 lg:w-6/12' />

                            <div className="flex flex-wrap items-center justify-center sm:space-x-3 mt-12">
                                <GredientBtn BtnTxt="Start Live Chat" />
                                <SimpleBtnTwo simpleTxt="Book Demo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
