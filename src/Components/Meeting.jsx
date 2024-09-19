import Image from 'next/image'
import React from 'react'

/////
import FormImage from 'public/images/meetingimages/meetingImage.png'

export const Meeting = () => {
    return (
        <>
            <section className='pt-[40px] mb-[60px] lg:mb-[0px] md:pt-[80px] bg-[#F6F6F6]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 space-y-20 md:space-y-0">
                        <div className="col-span-12 lg:col-span-6 lg:col-span-8">
                            <h3 className='text-[25px] md:text-[40px] font-light mb-3 leading-[1.3]'>Arrange a <span className='gilroy-b'>Meeting Anytime</span> at<br /> Your Convenience</h3>
                            <p className='text-black text-[13px] sm:text-[15px] font-light max-w-[600px]'>We understand the value of time! That’s why we let you set the schedule and arrange the meeting at your convenience with us.</p>
                            <form action="javascript:;" className='mt-10 mb-16'>
                                <div className="grid grid-cols-12 lg:space-x-8">
                                    <div className="col-span-12 lg:col-span-6">
                                        <input type="text" className='bg-[#EAEAEA] px-4 placeholder:text-black placeholder:text-[14px] h-[55px] w-full focus:outline-none mb-2 sm:mb-6' placeholder='Name' required />

                                        <input type="number" className='bg-[#EAEAEA] px-4 placeholder:text-black placeholder:text-[14px] h-[55px] w-full focus:outline-none mb-2 sm:mb-6' placeholder='Telephone Number' required />

                                        <input type="text" className='bg-[#EAEAEA] px-4 placeholder:text-black placeholder:text-[14px] h-[55px] w-full focus:outline-none mb-2 sm:mb-6' placeholder='Email' required />

                                        <input type="text" className='bg-[#EAEAEA] px-4 placeholder:text-black placeholder:text-[14px] h-[55px] w-full focus:outline-none mb-2 sm:mb-6' placeholder="You're Interested in" required />

                                        <button type='submit' className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-2 rounded-[3px]
                                text-white text-[14px] lg:text-[15px]
                               overflow-hidden font-medium poppins mb-3 sm:mb-0 flex items-center justify-center w-5/12 lg:block hidden">
                                            Submit Your Form
                                        </button>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <textarea placeholder='Additional Comments' className='bg-[#EAEAEA] px-4 placeholder:text-black placeholder:text-[14px] h-full w-full resize-none focus:outline-none py-4' required></textarea>

                                        <button type='submit' className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-2 rounded-[3px]
                                text-white text-[14px] lg:text-[15px]
                               overflow-hidden font-medium poppins mb-3 sm:mb-0 flex items-center justify-center w-full mt-3 lg:hidden block">
                                            Submit Your Form
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-5 md:mt-0 lg:block hidden">
                            <Image quality={80} src={FormImage} className='h-full' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
