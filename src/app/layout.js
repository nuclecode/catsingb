'use client'
import { useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import mixpanel from 'mixpanel-browser';
import { metadata } from './metadata';
import Router from "next/router";
import { usePathname } from "next/navigation";
import Head from "next/head";


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
    const pathname = usePathname();

    useEffect(() => {
        mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_TOKEN);

        const trackPageView = () => {
            if(mixpanel) {
                mixpanel.track("Page Visit", {
                    page: pathname || 'unknown',
                    title: document.title || 'unknown',
                });
            } else {
                console.error("Mixpanel not initialized")
            }
        };

        trackPageView();

        const handleRouteChange = (url) => {
            mixpanel.track("Page Visit", {
                page: url || 'unknown',
                title: document.title || 'unknown',
            });
        };

        Router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            Router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [pathname])
  return (

    <>
      <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header />
      {children}
      </body>
    </>
  );
}
