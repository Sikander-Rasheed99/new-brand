import React from 'react'
import { Tabs } from './Tabs'
import { LogoTabs } from './LogoTabs'

export const LogoPortfolio = () => {
    return (
        <section className='py-[40px] md:pb-[80px] lg:pt-[140px] relative'>
            <div className="px-[10px] sm:px-[30px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-7">
                        <h3 className='text-[25px] md:text-[40px] font-light mb-3'>Our <span className='gilroy-b'>Logo Design Agency </span>Shines <br className='lg:block hidden'/>
                            Across All Design Territories</h3>
                        <p className='text-black text-[13px] sm:text-[15px] font-light max-w-[830px]'>Our logo designers offer a diverse range of premium design solutions to enhance your brand's visual identity.
                            We create logos that capture your brand's unique spirit and also grab the attention of your target audience.</p>
                    </div>
                    <div className="col-span-12">
                        <LogoTabs />
                    </div>
                </div>
            </div>
        </section>
    )
}
