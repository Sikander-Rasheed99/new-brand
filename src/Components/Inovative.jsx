import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

////
import Inovative1 from 'public/images/inovstiveimages/inovative1.png'
import Inovative2 from 'public/images/inovstiveimages/inovative2.png'
import Inovative3 from 'public/images/inovstiveimages/inovative3.png'
import Inovative4 from 'public/images/inovstiveimages/inovative4.png'
import Inovative5 from 'public/images/inovstiveimages/inovative5.png'
import PhoneIco from 'public/images/phone-ico.svg'
import MailIco from 'public/images/mail-ico.svg'
import Slider from 'react-slick'


export const Inovative = () => {

    var settings = {
        dots: false,
        arrows: true,
        slidesToShow: 1,
        autoPlay: true,
        speed: 600,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '300px',
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 567,
                settings: {
                    centerPadding: '0',
                    slidesToShow: 1,
                }
            },
        ]
    };


    return (
        <>
            <section className='py-[40px] sm:pt-[80px] sm:pb-[110px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h3 className='text-[25px] md:text-[40px] font-light sm:mb-3'><span className='gilroy-b'>Innovative</span> Services & Exceptional <span className='gilroy-b'>Results</span></h3>
                            <p className='text-black text-[13px] sm:text-[15px] font-light max-w-[700px]'>Our commitment to delivering innovative solutions and consistently surpassing expectations
                                make Web Design Hub an exclusive choice</p>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <div className="grid grid-cols-12 md:grid-cols-5 gap-y-5 md:gap-y-0 sm:gap-x-4 mt-10 lg:mt-14 flex justify-between">
                            <div className="col-span-12 sm:col-span-6 md:col-span-1">
                                <div className=''>
                                    <Image quality={80} src={Inovative1} className='mx-auto xl:w-full xl:h-full' />
                                    <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Creative Excellence</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-1">
                                <div>
                                    <Image quality={80} src={Inovative2} className='mx-auto xl:w-full xl:h-full' />
                                    <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Customized Solutions</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-1">
                                <div>
                                    <Image quality={80} src={Inovative3} className='mx-auto xl:w-full xl:h-full' />
                                    <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Responsive Design</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-1">
                                <div>
                                    <Image quality={80} src={Inovative4} className='mx-auto xl:w-full xl:h-full' />
                                    <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>On-Time Delivery</p>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-6 md:col-span-1">
                                <div>
                                    <Image quality={80} src={Inovative5} className='mx-auto xl:w-full xl:h-full' />
                                    <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Affordable Pricing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 lg:hidden block mt-10">
                        <div className="col-span-12">
                            <Slider {...settings}>
                                <div className="">
                                    <div className=''>
                                        <Image quality={80} src={Inovative1} className='mx-auto xl:w-full xl:h-full' />
                                        <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Creative Excellence</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <Image quality={80} src={Inovative2} className='mx-auto xl:w-full xl:h-full' />
                                        <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Customized Solutions</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <Image quality={80} src={Inovative3} className='mx-auto xl:w-full xl:h-full' />
                                        <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Responsive Design</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <Image quality={80} src={Inovative4} className='mx-auto xl:w-full xl:h-full' />
                                        <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>On-Time Delivery</p>
                                    </div>
                                </div>
                                <div className="">
                                    <div>
                                        <Image quality={80} src={Inovative5} className='mx-auto xl:w-full xl:h-full' />
                                        <p className='text-[20px] gilroy text-center lg:mt-5 mt-3 font-light'>Affordable Pricing</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="bg-black flex flex-col lg:flex-row items-center sm:justify-center sm:space-x-4 lg:space-x-0 space-y-7 lg:space-y-0 lg:justify-between rounded-2xl md:rounded-full px-[30px] pb-[25px] pt-[15px] lg:py-[10px] mt-16 xl:mt-20">
                                <div className='mt-6 lg:mt-0'>
                                    <p className='text-white text-[17px] md:text-[20px] gilroy font-light leading-[1.3]'>you are just a call away from <br className='sm:block hidden' />
                                        securing a spectacular design</p>
                                </div>
                                <div>
                                    <a href="tel:;" className='flex items-center space-x-2'>
                                        <div className="icon">
                                            <Image quality={80} src={PhoneIco} className='w-10' />
                                        </div>
                                        <div className="telTxt">
                                            <p className='text-white text-[19px] gilroy font-light'>call us (toll free) <br />
                                                <span className='text-[#45E2A1]'> (855) 888-8399</span>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="mailto:;" className='flex items-center space-x-2'>
                                        <div className="icon">
                                            <Image quality={80} src={MailIco} className='w-10' />
                                        </div>
                                        <div className="telTxt">
                                            <p className='text-white text-[19px] gilroy font-light leading-[1]'>discuss your ideas <br />
                                                info@brandname.co
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
