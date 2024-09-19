"use client"

import Banner from '@/Components/Banner'
import { ClientReview } from '@/Components/ClientReview'
import { Customwebsite } from '@/Components/Customwebsite'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import React from 'react'

const page = () => {

    let bannerProps = {
        title: "<span class='font-extrabold text-[#45E2A1] gilroy-b'>100%</span> Custom Websites By Top Website Development Company",
        content: "Tired of generic websites that don't make an impact? Experience the difference with <br /> our top design and website development company where we uniquely represent <br /> your brand and drive results.",
        bg: "bg-[url(../public/images/websiteimage/websitebanner-bg.png)]",
        css: "mt-[-120px] pt-[160px]",
        headingWidth: "max-w-[670px]"
    }

    let customWebsite = {
        subtitle: "Custom Website Development",
        title: "Building Custom <span style='font-weight: 600' class='gilroy-b'>Websites</span> from Scratch.",
        desc: "In the digital age, your website is your brand's front door. At Web Design Hub, we're the architects of that door. We design and develop websites that don't just look good; they're SEO optimized, responsive and have the best user experience, all in one package.",
        image: "/images/websiteimage/customwebsite2.png",
        css: "w-6/12 mx-auto mt-12"
    }

    let websiteImage = {
        title: "Let us develop a <span style='font-weight: 600' class='gilroy-b'>responsive <br class='lg:block hidden'/> website </span> to help you attract<br class='lg:block hidden'/> more visitors",
        desc: "Our professional web development team is at your service, dedicated to design and develop dynamic websites that urges visitors to take your desired action on the website.",
        image: "/images/websiteimage/responsiveImage.png",
        css: "ml-[30px]",
    }

    let packagescont = {
        subtitle: "Web Development Packages",
        title: "Budget-Friendly <span class='font-extrabold gilroy-b'>Website Development</span> Company",
        content: "Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.",
        bg: "bg-[url(../public/images/valueimages/value-bg.png)]",
        css: "text-black"
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