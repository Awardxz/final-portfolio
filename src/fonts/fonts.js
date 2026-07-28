import { Pixelify_Sans } from "next/font/google";
import { Cascadia_Code } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";

export const PixelifySans = Pixelify_Sans({
    subsets: ["latin"],
    variable: "--font-pixelify",
    display: "swap",
})

export const CascadiaCode = Cascadia_Code({
    subsets: ["latin"],
    variable: "--font-cascadia",
    display: "swap",
})

export const IBMPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    variable : "--font-ibm",
    weight : "500"
})