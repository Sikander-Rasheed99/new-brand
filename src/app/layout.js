import React from "react";
import { poppins } from "@/configs/fonts";
import "../../styles/globals.css";
import Header from "@/Components/Header";
import { Footer } from "@/Components/Footer";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body className={poppins.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
