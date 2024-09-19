"use client"

import Banner from '@/Components/Banner'
import { BudgetFriendly } from '@/Components/BudgetFriendly'
import { ClientReview } from '@/Components/ClientReview'
import { CreativeDigitalMarketing } from '@/Components/CreativeDigitalMarketing'
import { Customwebsite } from '@/Components/Customwebsite'
import { DigitalMarketing } from '@/Components/DigitalMarketing'
import { Digitalrequire } from '@/Components/Digitalrequire'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import React from 'react'

const page = () => {
    let bannerProps = {
        title: "Creating <span class='font-extrabold text-[#45E2A1] gilroy-b'>100%</span> Original Custom Website Designs",
        content: "Frustrated by underperforming web designs? It's time for a change and we can help. Website Design Hub is trusted by businesses nationwide. We are a top-rated and affordable web design company, known for creating websites that are:",
        bg: "bg-[url(../public/images/digitalmarketing/banner.png)]",
        css: "mt-[-120px] pt-[160px]"
    }

    let customWebsite = {
        subtitle: "Your Brand, Your Rules",
        title: "Customized <span style='font-weight: 600' class='gilroy-b'>Digital Marketing</span> Services for You",
        desc: "Our marketing team at Web Design Hub creates a digital marketing strategy that is completely unique and customized for your business. If you are ready for the digital revolution, let's kickstart the journey today!",
        image: "/images/digitalmarketing/digitalmarketing.png",
        css: "mx-auto mt-12"
    }

    let Budgetcont = {
        subtitle: "Digital Marketing Packages",
        title: "Budget-<span class='gilroy-b font-extrabold'>Friendly </span>Digital Brilliance",
        content: "Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.",
        bg: "bg-[url(../public/images/valueimages/value-bg.png)]",
        css: "text-black"
    }

    let websiteImage = {
        title: 'Get Noticed Online Our <br class="lg:block hidden"/> Creative <span class="gilroy-b font-semibold"> Digital Marketing</span> Company',
        desc: 'Let Web Design Hub be your point of reference as you create and improve your digital presence',
        image: "/images/digitalmarketing/digitalmarketing1.png",
        css: "mt-[-77px]"
    }


    return (
        <>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <Digitalrequire />
            <BudgetFriendly Budgetcont={Budgetcont} />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}


export default page