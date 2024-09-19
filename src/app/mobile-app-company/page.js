"use client"

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
        title: "<span class='font-extrabold text-[#45E2A1] gilroy-b'>Experience </span> Building A <span class='font-extrabold text-[#45E2A1] gilroy-b'>Mobile </span> <br class='lg:block hidden'/> App At Its Finest",
        content: "Web Design Hub is leading the way in mobile app design and development innovation. Our <br class='lg:block hidden'/> expertise extends beyond design, and we provide mobile app developers with the essential<br class='lg:block hidden'/> resources, enabling them to build efficient mobile applications for businesses.",
        bg: "bg-[url(../public/images/mobilecompanyimages/banner-bg.png)]",
        css: "mt-[-120px] pt-[160px]",
        headingWidth: "max-w-[700px]",
    }

    let customWebsite = {
        subtitle: "Mobile App Development",
        title: "Agile <span style='font-weight: 600' class='gilroy-b'>Mobile </span> Application Development & <span style='font-weight: 600' class='gilroy-b'>Design </span> Company",
        desc: "At Web Design Hub, our app developers utilize an Agile approach to build mobile apps through close collaboration with our clients, ensuring timely delivery of the mobile app design and prototype, while constantly improving the development process.",
        image: "/images/mobilecompanyimages/customwebsite.png",
        css: "w-5/12 mx-auto mt-12",
        secGap: "lg:pb-[140px]"
    }

    let websiteImage = {
        title: "Let us Develop a <span style='font-weight: 600' class='gilroy-b'>Responsive <br class='lg:block hidden'/> Website </span>to Help you Attract More Visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        image: "/images/mobilecompanyimages/mobile-app.png",
        css: "mt-[-33px] w-9/12 mx-auto",
    }

    let Budgetcont = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your <span class='font-extrabold gilroy-b'>Budget</span>",
        content: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        bg: "bg-[url(../public/images/valueimages/value-bg.png)]",
        css: "text-black"
    }

    let frontSale = {
        title: "Creativity Knows No <span class='font-extrabold gilroy-b'>Bounds </span> At Our <span class='font-extrabold gilroy-b'>Mobile App </span> Agency",
        content: 'At Web Design Hub, our expertise shine through custom layouts and interactive designs, ensuring a superlative user experience with our responsive mobile app designs.',
        imageOne: '/images/mobilecompanyimages/image1.png',
        imageTwo: '/images/mobilecompanyimages/image2.png',
        imageThree: '/images/mobilecompanyimages/image3.png',
        imageFour: '/images/mobilecompanyimages/image4.png',

    }

    return (
        <>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <StoreFront frontSale={frontSale} />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}

export default page
