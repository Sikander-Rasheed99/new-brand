"use client"

import Banner from '@/Components/Banner'
import { ClientReview } from '@/Components/ClientReview'
import { Customwebsite } from '@/Components/Customwebsite'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import { SeoPackages } from '@/Components/SeoPackages'
import React from 'react'

const page = () => {

    let bannerProps = {
        title: "Turbocharge Your <span class='font-extrabold text-[#45E2A1] gilroy-b'>Traffic </span>with <br class='lg:block hidden'/>Our <span class='font-extrabold text-[#45E2A1] gilroy-b'>SEO </span> Company!",
        content: "Witness the change as our professional SEO company, Web Design Hub, moves you from search <br class='lg:block hidden'/> engine ranks to higher income. We'll boost website traffic using our tested techniques so you can <br class='lg:block hidden'/> connect with your target market and experience real company success.",
        bg: "bg-[url(../public/images/seoimages/banner-images.png)]",
        css: "mt-[-120px] pt-[160px]",
        headingWidth: "max-w-[700px]",
    }

    let customWebsite = {
        subtitle: "SEO Services Company",
        title: "Hire Our <span class='font-semibold gilroy-b'>SEO </span> Pros & Watch Your <span class='font-semibold gilroy-b'>Rankings</span> Grow",
        desc: "Ready to witness your rankings skyrocket? When you hire our SEO company, you're not just getting results – you're investing in a proven path to online excellence.",
        image: "/images/seoimages/customwebsite.png",
        css: "w-5/12 mx-auto mt-12",
        secGap: "lg:pb-[140px]"
    }

    let websiteImage = {
        title: "<span style='font-weight: 600' class='gilroy-b'>Dominate </span>Search Engine <br class='lg:block hidden'/> Results With Our <span style='font-weight: 600' class='gilroy-b'>SEO </span>Services",
        desc: "Don't delay your digital success, contact us today and schedule an obligation-free SEO Consultation with us!",
        image: "/images/seoimages/seo.png",
        css: "mt-[-36px] mx-auto w-6/12 h-full mb-0",
    }

    let packagescont = {
        subtitle: "SEO Packages",
        title: "Increased Profit on a <span class='font-extrabold gilroy-b'>Budget </span> with Our <span class='font-extrabold gilroy-b'>SEO</span> Agency",
        content: "Our affordable SEO agency will increase your profit margin without overspending – hire us to rank on search results in 30 days.",
        bg: "bg-[url(../public/images/valueimages/value-bg.png)]",
        css: "text-black"
    }

    return (
        <div>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <SeoPackages packages={packagescont} />
            <ClientReview />
            <Inovative />
            <Meeting />
        </div>
    )
}

export default page