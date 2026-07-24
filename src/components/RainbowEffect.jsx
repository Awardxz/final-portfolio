"use client";
import { useState } from "react";

function RainbowText({ children, className = "" }) {
  const [isAnimating, setAnimation] = useState(false);

  return (
    <div
      className={`text-rainbow-swoosh ${isAnimating ? "animate-rainbow-swoosh" : ""} ${className}`}
      onMouseEnter={() => setAnimation(true)}
      onAnimationEnd={() => setAnimation(false)}
    >
      {children}
    </div>
  );
}

export default RainbowText;
