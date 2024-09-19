"use client"

import React from 'react'
import Banner from '@/Components/Banner'
import { LogoPortfolio } from '@/Components/LogoPortfolio'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import { TimeAndValue } from '@/Components/TimeAndValue'
import { Customwebsite } from '@/Components/Customwebsite'
import { ClientReview } from '@/Components/ClientReview'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'

const page = () => {

    let bannerProps = {
        title: "Your Market with Our Creative <span class='font-extrabold text-[#45E2A1] gilroy-b'>Copywriting </span> Company",
        content: "At Web Design Hub, we employ the best logo designers and illustrators to make creative logos for big companies and small businesses. As an affordable logo design company, we promise to create a logo that delivers impressive outcomes for your brand.",
        bg: "bg-[url(../public/images/creativeimage/creative-bg.png)]",
        css: "mt-[-120px] pt-[160px]"
    }

    let websiteImage = {
        title: "Weave Your <span style='font-weight: 600' class='gilroy-b'> Digital Dreams </span> <br class='lg:block hidden'/> with Our Professional <br class='lg:block hidden'/> <span style='font-weight: 600' class='gilroy-b'>Copywriters</span>",
        desc: "Top copywriters at Web Design Hub write the best content distinguishing your business from others. Our strategic finesse helps create the web presence everyone wishes for.",
        image: "/images/creativeimage/creative.png",
        // width: "900",
        // height: "900",
        css: "mt-[-21px] xl:ml-[30px] w-full h-full object-cover mx-auto"
    }

    let packagescont = {
        subtitle: "Reasonable Prices",
        title: "That Fits Your Budget <span class='font-extrabold gilroy-b'>Fits</span> Your Budget ",
        content: "With affordable prices, we have exclusive digital art and design facilities, customized for your individual needs",
        bg: "bg-[url(../public/images/valueimages/value-bg.png)]",
        css: "text-black"
    }

    let customWebsite = {
        subtitle: "",
        title: "We Write Copy That <span style='font-weight: 600' class='gilroy-b'>Captivates,</span> Persuades, & Converts.",
        desc: "Hiring our copywriting company is your gateway to boosting your brand's visibility with captivating content that delivers real, tangible results. Start benefiting from the magic of compelling storytelling today.",
        image: "/images/creativeimage/creative-img.png",
        fontsize: "text-[35px]",
        css: "w-full mx-auto mt-12 "
    }

    return (
        <>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <Packages packages={packagescont} />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}

export default page
