'use client'
import localFont from "next/font/local";
import "./globals.css";

import MobileMenu from "@/components/Menu/MobileMenu/MobileMenu";
import { metadata } from './metadata';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {


  return (

    <html lang="en">
      <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description}/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <MobileMenu />
      {children}
      </body>
    </html>
  );
}
