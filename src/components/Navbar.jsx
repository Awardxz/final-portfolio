"use client";
import { PixelifySans } from "@/fonts/fonts";
import RainbowText from "@/components/RainbowEffect";

const navItems = ["home", "projects", "contact"];

export default function Navbar({ onNavigate }) {
  return (
    <div
      className={`${PixelifySans.className} antialiased text-[28px] flex justify-between pl-40 pt-12`}
    >
      <RainbowText>[ award ]</RainbowText>

      <div className="flex gap-30 pr-25">
        {navItems.map((item) => {
          // If it's home, we can just let it do nothing or scroll back to top if desired
          const handleClick = () => {
            if (item === "home") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              onNavigate?.(item);
            }
          };

          return (
            <button
              key={item}
              onClick={handleClick}
              className="cursor-pointer bg-transparent border-none p-0"
            >
              <RainbowText>[ {item} ]</RainbowText>
            </button>
          );
        })}
      </div>
    </div>
  );
}
