import Image from 'next/image'
import React from 'react'

export const StoreFront = (props) => {
    const { title, content, imageOne, imageTwo, imageThree, imageFour } = props.frontSale
    return (
        <>
            <section className='py-[50px] sm:py-[100px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 mb-6 md:mb-12">
                            <div dangerouslySetInnerHTML={{
                                __html: `<h1 class='text-[30px] md:text-[40px]  text-black font-light leading-[1.2] mb-3 pl-[12px] text-center'>
                                    ${title}
                                </h1>`}} />

                            {/* <h3 className=''>
                                {title}
                            </h3> */}
                            <p className='text-[12px] sm:text-[15px] font-light text-center max-w-[995px] mx-auto'>{content}</p>
                        </div>
                        <div className="col-span-12 sm:col-span-7">
                            <Image quality={75}className='h-full w-full' width={800} height={900} src={imageOne} />
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                            <Image quality={75}className='h-full w-full' width={800} height={900} src={imageTwo} />
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                            <Image quality={75}className='h-full w-full' width={800} height={900} src={imageThree} />
                        </div>
                        <div className="col-span-12 sm:col-span-7">
                            <Image quality={75}className='h-full w-full' width={800} height={900} src={imageFour} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
