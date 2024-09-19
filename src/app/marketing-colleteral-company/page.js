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
        title: "Hire <span class='font-extrabold text-[#45E2A1] gilroy-b'>Marketing Collateral</span> Company For Superior Engagement",
        content: "Looking for experts to enhance your content and reach your audience effectively? At Web Design Hub, our team consists of top-notch content writers and marketers who can create engaging content to grow and retain your customer base with confidence.",
        bg: "bg-[url(../public/images/marketingimages/marketing-bg.png)]",
        css: "mt-[-120px] pt-[160px]",
        headingWidth: "max-w-[700px]"
    }

    let customWebsite = {
        subtitle: "We Provide Content that Converts",
        title: "Engage Your <span style='font-weight: 600' class='gilroy-b'>Audiencet</span> with <span style='font-weight: 600' class='gilroy-b'>Marketing</span> Collateral",
        desc: "We write content that transforms visitors into loyal customers. Our marketing collateral solutions are designed to engage your audience and drive conversions on your website.",
        image: "/images/marketingimages/customwebsite.png",
        css: "mx-auto mt-12",
        secGap: "lg:pb-[140px]"
    }

    let websiteImage = {
        title: "Get Noticed Online Our <br class='lg:block hidden'/> Creative <span style='font-weight: 600' class='gilroy-b'>Digital Marketing</span> Company",
        desc: "Let Web Design Hub be your point of reference as you create and improve your digital presence",
        image: "/images/marketingimages/marketing.png",
        css: "mt-[-77px] w-9/12 mx-auto",
    }

    let Budgetcont = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your <span class='font-extrabold gilroy-b'>Budget</span>",
        content: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        bg: "bg-[url(../public/images/valueimages/value-bg.png)]",
        css: "text-black"
    }

    let frontSale = {
        title: "<span class='font-extrabold gilroy-b'>Boosting </span> Brands with <span class='font-extrabold gilroy-b'>Creative </span> Hands",
        content: 'We empower brands to reach new heights. Our marketing experts design custom marketing collateral solutions that captivates your target and boosts conversions.',
        imageOne: '/images/marketingimages/image1.png',
        imageTwo: '/images/marketingimages/image2.png',
        imageThree: '/images/marketingimages/image3.png',
        imageFour: '/images/marketingimages/image4.png',

    }

    return (
        <>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <StoreFront frontSale={frontSale} />
            <BudgetFriendly Budgetcont={Budgetcont}/>
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}

export default page
