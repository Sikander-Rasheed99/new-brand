"use client"

// import Banner from '@/Components/Banner'
// import { Customwebsite } from '@/Components/Customwebsite'
// import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
// import React from 'react'

// const page = () => {



//     let customWebsite = {
//         subtitle: "We Provide Content that Converts",
//         title: "Engage Your <span style='font-weight: 600' class='gilroy-b'>Audiencet</span> with <span style='font-weight: 600' class='gilroy-b'>Marketing</span> Collateral",
//         desc: "We write content that transforms visitors into loyal customers. Our marketing collateral solutions are designed to engage your audience and drive conversions on your website.",
//         image: "    /images/marketingimages/customwebsite.png",
//         css: "mx-auto mt-12"
//     }

//     let websiteImage = {
//         title: "The Masters of <span style='font-weight: 600' class='gilroy-b'>eCommerce Website</span> Design",
//         desc: "At Web Design Hub,we design ecommerce websites that not only look fantastic but also generate results that distinguish your company in the market.",
//         image: "/images/marketingimages/customwebsite.png",
//         css: "mt-[-77px] w-9/12 mx-auto"
//     }

//     return (
//         <>
//             <Banner content={bannerProps} />
//             <Customwebsite customContent={customWebsite} />
//             <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />

//         </>
//     )
// }

// export default page

import Banner from '@/Components/Banner'
import { BudgetFriendly } from '@/Components/BudgetFriendly'
import { ClientReview } from '@/Components/ClientReview'
import { Customwebsite } from '@/Components/Customwebsite'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import { StoreFront } from '@/Components/StoreFront'
import React from 'react'

////
// import aboutBannerImage from 'public/images/ecommerceimages/banner.png';

const page = () => {

    let bannerProps = {
        title: "<span class='font-extrabold text-[#45E2A1] gilroy-b'>Top Motion </span> <br class='lg:block hidden'/> Graphic Design Company",
        content: "Our creative motion graphics designers, with a strong combination of skills and <br class='lg:block hidden'/> innovative equipment create attractive, profitable 3D animations that will enrich <br class='lg:block hidden'/> your business with success.",
        bg: "bg-[url(../public/images/motiongraphicimages/banner-bg.png)]",
        css: "mt-[-120px] pt-[160px]",
        headingWidth: "max-w-[700px]",
    }

    let customWebsite = {
        subtitle: "Motion Graphic Design Company",
        title: "Converting the <span style='font-weight: 600' class='gilroy-b'>Ordinary </span> into the <span style='font-weight: 600' class='gilroy-b'>Extraordinary </span>",
        desc: "Our motion graphics designers at Web Design Hub fuse animation, music, and multimedia components into striking visuals. They build captivating narratives that grab attention and have an enduring influence on your audience using creativity as their reference point.",
        image: "/images/motiongraphicimages/customwebsite.png",
        css: "w-6/12 mx-auto mt-12",
        secGap: "lg:pb-[140px]"
    }

    let websiteImage = {
        title: "power of Visual by our <br class='lg:block hidden'/><span style='font-weight: 600' class='gilroy-b'>Motion Graphics Designers.</span>",
        desc: "We use animation, 3D modeling, and fascinating effects to give your stories a twist of practical life. Our work captivates the audience by enduring narratives.",
        image: "/images/motiongraphicimages/motion-graphic.png",
        css: "mt-[-60px] w-9/12 mx-auto",
    }

    let frontSale = {
        title: "We Turn Visions into <span class='font-extrabold gilroy-b'>Animation </span> ",
        content: 'Channeling your imagination with our expert motion graphics team, we turn your ideas into mesmerizing animations that captivate and convert.',
        imageOne: '/images/motiongraphicimages/image1.png',
        imageTwo: '/images/motiongraphicimages/image2.png',
        imageThree: '/images/motiongraphicimages/image3.png',
        imageFour: '/images/motiongraphicimages/image4.png',

    }

    let Budgetcont = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your <span class='gilroy-b font-extrabold'>Budget </span>",
        content: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        bg: "bg-[url(../public/images/valueimages/value-bg.png)]",
        css: "text-black"
    }

    return (
        <>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <StoreFront frontSale={frontSale} />
            <BudgetFriendly Budgetcont={Budgetcont} />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}

export default page
