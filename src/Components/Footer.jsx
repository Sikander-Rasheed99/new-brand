import Image from 'next/image'
import React from 'react'

////// 
import Location from 'public/images/location-ico.svg'
import Tel from 'public/images/tel-ico.svg'
import Mail from 'public/images/fmail-ico.svg'

export const Footer = () => {
    return (
        <>
            <section className="py-[40px] md:py-[80px] bg-[url('/images/clientimages/client-bg.png')] bg-cover bg-center">
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 gap-y-8 lg:gap-y-0">
                        <div className="col-span-12 lg:col-span-5">
                            <p className='text-[25px] text-white font-bold mb-6'>logo</p>
                            <p className='text-white font-light max-w-[420px] text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a suscipit odio. Etiam nunc nisl, fermentum quis sagittis non, posuere sit amet diam. Maecenas porttitor, felis vel iaculis volutpat, nibh dolor vulputate ex, nec consectetur dui felis id nisl. </p>
                        </div>
                        <div className="col-span-12 lg:col-span-7">
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 md:col-span-4">
                                    <h6 className='text-white font-light text-[20px] mb-6'>Quick Links</h6>
                                    <ul>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Home
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                About
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Services
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Reviews
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <h6 className='text-white font-light text-[20px] mb-6'>Services</h6>
                                    <ul>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                SEO Services
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Website Services
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Social Media Marketing
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Content Writing
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Pay per Click
                                            </a>
                                        </li>
                                        <li className='mb-3'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light'>
                                                Reputation Services
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-span-12 md:col-span-4">
                                    <h6 className='text-white font-light text-[20px] mb-6'>Contact</h6>
                                    <ul>
                                        <li className='mb-8'>
                                            <a href="javascript:;" className='text-white text-[15px] font-light flex items-center space-x-2'>
                                                <Image quality={80} src={Location} className='w-7 h-7' />
                                                <span className='text-white text-[15px] font-light leading-[1.5]'>Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.</span>
                                            </a>
                                        </li>
                                        <li className='mb-8'>
                                            <a href="tel:;" className='text-white text-[15px] font-light flex items-center space-x-2'>
                                                <Image quality={80} src={Tel} className='w-7 h-7' />
                                                <span className='text-white text-[15px] font-light leading-[1.4]'>(123)-000-0000
                                                </span>
                                            </a>
                                        </li>
                                        <li className='mb-8'>
                                            <a href="tel:;" className='text-white text-[15px] font-light flex items-center space-x-2'>
                                                <Image quality={80} src={Mail} className='w-7 h-7' />
                                                <span className='text-white text-[15px] font-light leading-[1.4]'>info@gmail.com
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
