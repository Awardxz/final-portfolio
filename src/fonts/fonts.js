import { Pixelify_Sans } from "next/font/google";
import { Cascadia_Code } from "next/font/google";

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