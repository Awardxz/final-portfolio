"use client";
import { PixelifySans } from "@/fonts/fonts";
import RainbowText from "@/components/RainbowEffect";

const navItems = ["home", "projects", "contact"];

export default function Navbar() {
  return (
    <div
      className={`${PixelifySans.className} antialiased text-[28px] flex justify-between pl-40 pt-12`}
    >
      <RainbowText>[ award ]</RainbowText>

      <div className="flex gap-30 pr-25">
        {navItems.map((item) => (
          <RainbowText key={item}>[ {item} ]</RainbowText>
        ))}
      </div>
    </div>
  );
}
