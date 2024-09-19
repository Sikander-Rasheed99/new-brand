"use client";
import React, { useEffect, useState } from "react";

import Banner from "@/Components/Banner";
import { ClientReview } from "@/Components/ClientReview";
import Header from "@/Components/Header";
import { Inovative } from "@/Components/Inovative"; 
import { Meeting } from "@/Components/Meeting";
import { Portfolio } from "@/Components/Portfolio";
import { ResponsiveWebsite } from "@/Components/ResponsiveWebsite";
import WebDesign from "@/Components/WebDesignAgency";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    setIsloggedIn(true);
    // router.push("/");
  }, [router.pathname]);

  let bannerProps = {
    title:
      "Creating <span class='font-extrabold text-[#45E2A1] gilroy-b'>100%</span> Original <br class='lg:block hidden'/> Custom Website Designs",
    content:
      "Frustrated by underperforming web designs? It's time for a change and we can help. Website Design<br class='lg:block hidden' /> Hub is trusted by businesses nationwide. We are a top-rated and affordable web design company,<br class='lg:block hidden' /> known for creating websites that are:",
    bg: "bg-[url(../public/images/banner-image/banner-bg.png)]",
    css: "mt-[-120px] pt-[160px]",
  };
  return (
    <>
      <Header header={isloggedIn} />
      <Banner content={bannerProps} />
      <WebDesign />
      <ResponsiveWebsite />
      <Portfolio />
      <ClientReview />
      <Inovative />
      <Meeting />
    </>
  );
};
export default page;
