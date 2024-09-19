import Image from 'next/image';
// import React from 'react'
// import Slider from 'react-slick';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/////
import Logo from 'public/images/clientimages/card_logos.png'
import Particle from 'public/images/clientimages/card_particle.png'
import Person from 'public/images/clientimages/person1.png'
import Link from 'next/link';

export const ClientReview = () => {

    // slider start

    var settings = {
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '470px',
        variableWidth: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1601,
                settings: {
                    centerPadding: '300px',
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    centerPadding: '100px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    centerPadding: '100px',
                    dots: false,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    centerPadding: '0',
                    centerMode: false,
                    dots: true,
                    autoPlay: true,
                    speed: 500,
                    variableWidth: false,
                }
            }
        ]
    };


    // slider end 

    return (
        <section className="bg-[url('/images/clientimages/client-bg.png')] bg-cover bg-center py-[70px] lg:py-[120px] relative">
            <div className="px-[10px] sm:px-[30px] sm:mb-[30px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5">
                        <h3 className='text-[25px] md:text-[40px] text-white'>Our Client`s Review</h3>
                        <p className='text-white text-[15px] font-light'>At Web Design Hub, our designers are committed to excellence in every aspect
                            of design, from logos to web, mobile apps, and illustrations.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:mt-5 w-full">
                    <Slider {...settings} className='settingSlider lg:mt-8'>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] pt-[40px] pb-[20px] sm:py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[20vh] sm:h-[30vh] md:h-[47vh] lg:h-[35vh] xl:h-[52vh] 3xl:h-[40vh] flex items-start flex-col justify-between relative pb-3 sm:pb-0'>
                                    <Image quality={80} src={Logo} />
                                    <div className="txt mt-8">
                                        <Image quality={80} src={Particle} className='absolute 2xl:bottom-[-21%] 3xl:right-[19px] 2xl:right-[35px] bottom-[-12%] right-[35px] max-h-[340px] object-contain md:visible invisible' />
                                        <div className="flex items-center space-x-2">
                                            <Image quality={80} src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <Link href="#" className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-3 px-5 rounded-[3px]
                                text-black text-[14px] lg:text-[15px]
                               overflow-hidden font-medium poppins mb-3 sm:mb-0 flex items-center justify-center w-10/12 xl:w-6/12">
                                            Read Customer Story
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] pt-[40px] pb-[20px] sm:py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[20vh] sm:h-[30vh] md:h-[47vh] lg:h-[35vh] xl:h-[52vh] 3xl:h-[40vh] flex items-start flex-col justify-between relative pb-3 sm:pb-0'>
                                    <Image quality={80} src={Logo} />
                                    <div className="txt mt-8">
                                        <Image quality={80} src={Particle} className='absolute 2xl:bottom-[-21%] 3xl:right-[19px] 2xl:right-[35px] bottom-[-12%] right-[35px] max-h-[340px] object-contain md:visible invisible' />
                                        <div className="flex items-center space-x-2">
                                            <Image quality={80} src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <Link href="#" className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-3 px-5 rounded-[3px]
                                text-black text-[14px] lg:text-[15px]
                               overflow-hidden font-medium poppins mb-3 sm:mb-0 flex items-center justify-center w-10/12 xl:w-6/12">
                                            Read Customer Story
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] pt-[40px] pb-[20px] sm:py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[20vh] sm:h-[30vh] md:h-[47vh] lg:h-[35vh] xl:h-[52vh] 3xl:h-[40vh] flex items-start flex-col justify-between relative pb-3 sm:pb-0'>
                                    <Image quality={80} src={Logo} />
                                    <div className="txt mt-8">
                                        <Image quality={80} src={Particle} className='absolute 2xl:bottom-[-21%] 3xl:right-[19px] 2xl:right-[35px] bottom-[-12%] right-[35px] max-h-[340px] object-contain md:visible invisible' />
                                        <div className="flex items-center space-x-2">
                                            <Image quality={80} src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <Link href="#" className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-3 px-5 rounded-[3px]
                                text-black text-[14px] lg:text-[15px]
                               overflow-hidden font-medium poppins mb-3 sm:mb-0 flex items-center justify-center w-10/12 xl:w-6/12">
                                            Read Customer Story
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] pt-[40px] pb-[20px] sm:py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[20vh] sm:h-[30vh] md:h-[47vh] lg:h-[35vh] xl:h-[52vh] 3xl:h-[40vh] flex items-start flex-col justify-between relative pb-3 sm:pb-0'>
                                    <Image quality={80} src={Logo} />
                                    <div className="txt mt-8">
                                        <Image quality={80} src={Particle} className='absolute 2xl:bottom-[-21%] 3xl:right-[19px] 2xl:right-[35px] bottom-[-12%] right-[35px] max-h-[340px] object-contain md:visible invisible' />
                                        <div className="flex items-center space-x-2">
                                            <Image quality={80} src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <Link href="#" className="relative before:left-[-50%] hover:translate-y-[0px] 
                                hover:bg-[#237456] translate-y-0 ease-in 
                                duration-500 hover:before:opacity-[0.5] hover:before:ease-in hover:before:z-[999] hover:before:duration-500 hover:before:left-[120%]
                                before:bg-[#ffffff] before:content-[''] before:h-[155px] before:opacity-0 before:absolute before:top-[-60%] before:w-[80px]
                                before:rotate-[30deg] before:ease-in before:duration-500 bg-gradient-to-l from-[#45E2A1] to-[#237456] py-3 px-5 rounded-[3px]
                                text-black text-[14px] lg:text-[15px]
                               overflow-hidden font-medium poppins mb-3 sm:mb-0 flex items-center justify-center w-10/12 xl:w-6/12">
                                            Read Customer Story
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <hr class="border-y-2 rounded-full border-white mt-[90px] 3xl:w-[80%]  w-[70%] mx-auto lg:block hidden"></hr>
                </div>
            </div >
        </section >
    )
}
