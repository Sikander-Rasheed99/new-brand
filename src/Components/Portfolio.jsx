import React from 'react'
import { Tabs } from './Tabs'

export const Portfolio = () => {
    return (
        <section className='py-[40px] md:py-[80px] relative'>
            <div className="px-[10px] sm:px-[30px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-7">
                        <h3 className='text-[25px] md:text-[40px] font-light mb-3'>Explore Our <span className='gilroy-b'>Design Portfolio</span></h3>
                        <p className='text-black text-[13px] sm:text-[15px] font-light max-w-[600px]'>At Web Design Hub, our designers are committed to excellence in every aspect
                            of design, from logos to web, mobile apps, and illustrations.</p>
                    </div>
                    <div className="col-span-12">
                        <Tabs />
                    </div>
                </div>
            </div>
        </section>
    )
}
