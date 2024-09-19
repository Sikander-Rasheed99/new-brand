"use client"

import Banner from '@/Components/Banner'
import { LogoPortfolio } from '@/Components/LogoPortfolio'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import { TimeAndValue } from '@/Components/TimeAndValue'
import React from 'react'

const page = () => {

    let bannerProps = {
        title: "Logo Design Company That's <br class='lg:block hidden'/> Designing <span class='font-extrabold text-[#45E2A1] gilroy-b'>Brand’s </span> Signature",
        content: "At Web Design Hub, we employ the best logo designers and illustrators to make creative logos for big<br class='lg:block hidden'/> companies and small businesses. As an affordable logo design company, we promise to create a logo<br class='lg:block hidden'/> that delivers impressive outcomes for your brand.",
        bg: "bg-[url(../public/images/logoimages/logobanner.png)]",
        css: "mt-[-120px] pt-[160px]"
    }

    let websiteImage = {
        title: "Let us develop a <br class='lg:block hidden'/> <span style='font-weight: 600' class='gilroy-b'>responsive </span> website to help <br class='lg:block hidden'/> you attract <span style='font-weight: 600' class='gilroy-b'>more visitors</span>",
        desc: "Web Design Hub has an In-house team of devoted professional web designers and developers, who are dedicated to delivering top-tier websites for businesses. Our website solutions include:",
        image: "/images/logoimages/design.png",
        // width: "900",
        // height: "900",
        css: "mt-[-77px] w-full h-full object-cover mx-auto"
    }

    let packagescont = {
        subtitle: "Logo Design Packages",
        title: "Gain the Upper Hand with Our <span class='font-extrabold text-[#45E2A1] gilroy-b'>Creative Logo </span> Designs",
        content: "Our top logo design service packages are thoughtfully customized to match your brand's voice and budget, giving you a competitive edge in the market.",
        bg: "bg-[url(../public/images/logoimages/packages-bg.png)]",
        css: "text-white"
    }

    return (
        <>
            <Banner content={bannerProps} />
            <LogoPortfolio />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <Packages packages={packagescont} />
            <TimeAndValue />
        </>
    )
}

export default page
