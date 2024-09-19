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
        title: "5-Star <span class='font-extrabold text-[#45E2A1] gilroy-b'>Rated </span>Top <br class='lg:block hidden'/><span class='font-extrabold text-[#45E2A1] gilroy-b'>Illustration</span> Design Company",
        content: "When you hire Web Design Hub, you gain access to the best character illustrators, and <br class='lg:block hidden'/> gaming artwork. Our skill in illustration design combines unique qualities that make us a <br class='lg:block hidden'/> your business with success.",
        bg: "bg-[url(../public/images/illustrationdesignimages/banner-bg.png)]",
        css: "mt-[-120px] pt-[160px]",
        headingWidth: "max-w-[700px]",
    }

    let customWebsite = {
        subtitle: "Custom Illustration Agency",
        title: "High-Quality Illustration Designs by Our <span style='font-weight: 600' class='gilroy-b'>Professional Illustrators </span>",
        desc: "Hire illustrators to breathe life into your products, services, and any other offerings. We create visuals that capture attention and convey your message uniquely.",
        image: "/images/illustrationdesignimages/customwebsite.png",
        css: "w-9/12 mx-auto mt-12",
        secGap: "lg:pb-[140px]"
    }

    let websiteImage = {
        title: "Let us Develop a <br class='lg:block hidden'/><span style='font-weight: 600' class='gilroy-b'>Responsive Website</span> to Help<br class='lg:block hidden'/> you Attract More Visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        image: "/images/illustrationdesignimages/illustration-graphic.png",
        css: "mt-[-36px] w-full h-full mx-auto ml-[29px] min-h-[530px] object-cover",
    }

    let frontSale = {
        title: "Our Illustration Agency’s <span class='font-extrabold gilroy-b'>Artwork Creation </span> ",
        content: "Our illustration artists work closely with clients to capture a design's personality, conveying emotions, and brand identity. We create character designs with depth and meaning.",
        imageOne: '/images/illustrationdesignimages/image1.png',
        imageTwo: '/images/illustrationdesignimages/image2.png',
        imageThree: '/images/illustrationdesignimages/image3.png',
        imageFour: '/images/illustrationdesignimages/image4.png',

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
