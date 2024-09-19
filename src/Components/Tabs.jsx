import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import Slider from 'react-slick';
import '../../styles/Tabs.module.css'

//
import Tab1 from 'public/images/tabsimages/tab1.png'
import Tab2 from 'public/images/tabsimages/tab2.png'
import Tab3 from 'public/images/tabsimages/tab3.png'
import Tab4 from 'public/images/tabsimages/tab4.png'
import Tab5 from 'public/images/tabsimages/tab5.png'
import Tab6 from 'public/images/tabsimages/tab6.png'

import RightBtn from 'public/images/tabsimages/right-btn.png'
import LeftBtn from 'public/images/tabsimages/left-btn.png'


export const Tabs = () => {
    const [activeTab1, setActiveTab1] = useState('tab1');
    function fun1(tabs1) {
        setActiveTab1(tabs1);
    }

    // slider start

    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        centerMode: false,
        centerPadding: '560px',
        speed: 500,
        slidesToShow: 2.2,
        slidesToScroll: 1,
        rows: 2,
        responsive: [
            {
                breakpoint: 1900,
                settings: {
                    centerMode: true,
                    centerPadding: '560px',
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    centerPadding: '480px',
                }
            },
            {
                breakpoint: 1680,
                settings: {
                    centerPadding: '360px',
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    centerPadding: '400px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    autoPlay: true,
                    speed: 500,
                    dots: true,
                    variableWidth: false,
                    centerPadding: '0px'
                }
            }
        ]
    };

    // slider end 

    return (
        <section className='tabs-sec '>
            <div className="col-12">
                <div className="flex flex-wrap justify-center lg:justify-start gap-y-3 lg:gap-y-0 items-center space-x-3 lg:space-x-5 mt-10 xl:mt-14 mb-10">
                    <div className={`cursor-pointer ${activeTab1 === 'tab1' ? 'border-2 border-transparent bg-gradient-to-l from-[#45E2A1] to-[#237456] py-[10px] text-white' : 'border-2 border-black'} px-5 md:px-7 py-[10px] rounded`} onClick={() => setActiveTab1('tab1')}>
                        Logo Design
                    </div>
                    <div className={`cursor-pointer ${activeTab1 === 'tab2' ? 'border-2 border-transparent bg-gradient-to-l from-[#45E2A1] to-[#237456] py-[10px] text-white' : 'border-2 border-black'} px-5 md:px-7 py-[10px] rounded`} onClick={() => setActiveTab1('tab2')}>
                        Website Design
                    </div>
                    <div className={`cursor-pointer ${activeTab1 === 'tab3' ? 'border-2 border-transparent bg-gradient-to-l from-[#45E2A1] to-[#237456] py-[10px] text-white' : 'border-2 border-black'} px-5 md:px-7 py-[10px] rounded`} onClick={() => setActiveTab1('tab3')}>
                        Illustrations
                    </div>
                    <div className={`cursor-pointer ${activeTab1 === 'tab4' ? 'border-2 border-transparent bg-gradient-to-l from-[#45E2A1] to-[#237456] py-[10px] text-white' : 'border-2 border-black'} px-5 md:px-7 py-[10px] rounded`} onClick={() => setActiveTab1('tab4')}>
                        Application Design
                    </div>
                </div>
            </div>


            <div className="col-12">
                <div className="">
                    {activeTab1 == 'tab1' &&
                        <div className='relative'>
                            <Slider {...settings} className='mb-14'>
                                <div className='mx-[10px]'>
                                    <Image src={Tab1} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                                </div>
                                <div className='mx-[10px]'>
                                    <Image src={Tab2} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                                </div>
                                <div className='mx-[10px]'>
                                    <Image src={Tab3} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                                </div>
                                <div className='mx-[10px]'>
                                    <Image src={Tab1} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                                </div>
                                <div className='mx-[10px]'>
                                    <Image src={Tab2} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                                </div>
                                <div className='mx-[10px]'>
                                    <Image src={Tab3} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                                </div>
                            </Slider>

                            <hr className='border-y-2 rounded-full border-black mt-14 3xl:mt-[75px] w-[90%] xl:w-[88%] 2xl:w-[90%] lg:block hidden' />
                        </div>
                    }
                </div>

                {activeTab1 == 'tab2' &&


                    <div className='relative'>
                        <Slider {...settings} className='mb-14'>
                            <div className='mx-[10px]'>
                                <Image src={Tab3} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab1} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab2} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab3} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab1} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab2} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                        </Slider>

                        <hr className='border-y-2 rounded-full border-black mt-14 3xl:mt-[75px] w-[88%] 2xl:w-[90%] lg:block hidden' />
                    </div>

                }

                {activeTab1 == 'tab3' &&

                    <div className='relative'>
                        <Slider {...settings} className='mb-14'>
                            <div>
                                <Image src={Tab1} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div>
                                <Image src={Tab2} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div>
                                <Image src={Tab3} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div>
                                <Image src={Tab4} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div>
                                <Image src={Tab5} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div>
                                <Image src={Tab6} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                        </Slider>

                        <hr className='border-y-2 rounded-full border-black mt-14 3xl:mt-[75px] w-[88%] 2xl:w-[90%] lg:block hidden' />
                    </div>

                }


                {activeTab1 == 'tab4' &&


                    <div className='relative'>
                        <Slider {...settings} className='mb-14'>
                            <div className='mx-[10px]'>
                                <Image src={Tab3} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab1} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab2} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab3} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab1} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                            <div className='mx-[10px]'>
                                <Image src={Tab2} className='sm:w-[98%] min-h-[200px] max-h-[200px] sm:min-h-[324px] md:max-h-[324px] 3xl:max-h-[440px] 3xl:min-h-[440px] 2xl:max-h-[340px] 2xl:min-h-[340px] xl:max-h-[281px] xl:min-h-[281px] object-cover' />
                            </div>
                        </Slider>

                        <hr className='border-y-2 rounded-full border-black mt-14 3xl:mt-[75px] w-[88%] 2xl:w-[90%] lg:block hidden' />
                    </div>

                }
            </div>
        </section>
    );
};
