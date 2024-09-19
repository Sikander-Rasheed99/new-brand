import React from 'react'
// import styles from '../../styles/EcommerceBanner.module.css'
import Image from 'next/image'
import SelectInp from './SelectInp'
// images 
import logos from 'public/images/banner-image/banner-logos.png'

function EcommerceBanner(props) {
    const { title, content, bg, css } = props.content;
    return (
        <>
            <section className={`bg-cover  bg-center ${bg ?? "bg-black"} ${css} `}>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-7">
                            <div className="border-l-[3px] border-[#5CD881]">
                                {/* <h1 className='text-[30px] md:text-[40px] max-w-[530px] text-white font-light leading-[1.2] mb-2 pl-[12px]'>Creating <span className='font-extrabold text-[#45E2A1] gilroy-b'>100%</span> Original Custom Website Designs</h1>
                                <p className='text-white text-[15px] font-light pb-8 pl-[12px]'>Frustrated by underperforming web designs? It's time for a change and we can help. Website Design Hub is trusted by businesses nationwide. We are a top-rated and affordable web design company, known for creating websites that are:</p> */}
                                <div dangerouslySetInnerHTML={{__html: `<h1 class='text-[30px] md:text-[40px] max-w-[530px] text-white font-light leading-[1.2] mb-2 pl-[12px]'>
                                    ${title}
                                </h1>`}} />
                                <p className='text-white text-[15px] font-light pb-8 pl-[12px]'>
                                    {content}
                                </p>
                                <Image quality={80} src={logos} alt='Logos ' />
                            </div>
                            <form action="javascript:;" className="form max-w-[450px] mt-7 border-2 border-white p-3 bg-[#34354C]/10  backdrop-blur-lg space-y-3 mb-[-60px]">
                                <input type="text" placeholder='First Name*' className='bg-[#707070]/50  backdrop-blur-lg focus:outline-0 h-[48px] rounded-[8px] w-full px-3 text-white placeholder:text-white text-[14px]' required />

                                <input type="email" placeholder='Email*' className='bg-[#707070]/50  backdrop-blur-lg  focus:outline-0 h-[48px] rounded-[8px] w-full px-3 text-white placeholder:text-white text-[14px]' required />

                                <input type="number" placeholder='Phone*' className='bg-[#707070]/50  backdrop-blur-lg  focus:outline-0 h-[48px] rounded-[8px] w-full px-3 text-white placeholder:text-white text-[14px]' required />

                                <SelectInp />

                                <textarea rows={7} placeholder='Additional Comments' className='pt-3 bg-[#707070]/50  backdrop-blur-lg  focus:outline-0 rounded-[8px] w-full px-3 text-white placeholder:text-white text-[14px] resize-none' required></textarea>

                                <button type='submit' className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-2 px-5 rounded-[3px] text-black font-medium flex items-center justify-center poppins'>Submit Your Form</button>
                            </form>
                        </div>
                        <div className="col-span-7">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EcommerceBanner