'use client';

import { FC, ReactNode } from "react"
import { exo_2 } from "@/constants/googleFont/exo_2"
import Script from "next/script";
import { onLoad } from "@/script/onLoad";
import { metadata } from "@/constants/metadata";
import { WebVitals } from "@/components/web-vitals";

import "@/scss/main.scss"

interface IProps {
    children: ReactNode;
}

const RootLayout: FC<IProps> = ({ children }): JSX.Element => {
    return (
        <html lang="en">
             <head>
                <meta property="og:title" content="My Next.js Application" />
                <meta property="og:description" content="This web application uses Next.js for my practice and testing various functionalities." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="shortcut icon" href="/ico/favicon.ico" type="image/x-icon" />
                <title>{metadata.title as string}</title>
            </head>
            <body className={`${exo_2.variable}`}>
                <WebVitals />
                {children}
            </body>
            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                onLoad={onLoad}
            />
        </html>
    ) 
}

export default RootLayout
