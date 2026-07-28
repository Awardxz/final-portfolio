import { PixelifySans } from "@/fonts/fonts";
import RainbowText from "./RainbowEffect";
import logo from "@/images/logo.png";
import Image from "next/image";

export default function Contact() {
  return (
    // Main wrapper handles full height and overall padding
    <div
      className={`${PixelifySans.className} antialiased min-h-screen px-6 py-16 flex flex-col items-center`}
    >
      {/* Top Center: Title */}
      <div className={`text-3xl mb-16`}>
        <RainbowText>[ contact ]</RainbowText>
      </div>

      {/* Two-Column Container (Stacks on mobile, side-by-side on md screens) */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full max-w-4xl mx-auto pt-35">
        {/* Left Side: Image */}
        <div className="flex-1 flex flex-col justify-center md:justify-end w-full">
          <Image
            src={logo}
            width={400}
            height={400}
            alt="contact logo"
            // Changed h-[100px] to h-auto and added object-contain
            // so your 400x400 image doesn't look stretched or squished
            className="bg-white w-80 h-auto object-contain border-3"
          />
          <p>award</p>
        </div>

        {/* Right Side: Text Placeholder */}
        <div className="flex-1 w-full text-white">
          <div className="p-4 border border-white/20 h-full flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-white/70 leading-relaxed">github: Awardxz</p>
            <p className="text-white/70">discord: awardq</p>
            <p className="text-white/70">email: awardxzdeveloper@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
