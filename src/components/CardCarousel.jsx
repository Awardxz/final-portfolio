"use client";
import { PixelifySans } from "@/fonts/fonts";
import { useState , useEffect } from "react";
import Image from "next/image";
import img1 from "@/images/k.jpeg" // temporary photos
import img2 from "@/images/s.png"  // temporary photos
import img3 from "@/images/y.png" // temporary photos

export default function CardCarousel() {
  const [pointer,setPointer] = useState(0);

  const imgArr = [
    img1, // temporary photos 
    img2, // temporary photos
    img3 // temporary photos
  ];

  const pointerValIncrement = () => {
    if(pointer == imgArr.length - 1) {
         setPointer(0);
         return;
    }
    setPointer(pointer + 1)
    
  };
  const pointerValDecrement = () => {
    if (pointer == 0) {
         setPointer(imgArr.length - 1);
         return;
    }
    setPointer(pointer - 1)
   
  };

  return (
    <>
      <div
        className={`flex justify-around gap-20  items-center ${PixelifySans.className}`}
      >
        <button
          onClick={pointerValDecrement}
          className="text-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          &lt;
        </button>
        <Image
          src={imgArr[pointer]}
          width={80}
          height={100}
          alt="projects"
          className="bg-white w-80 h-100"
        ></Image>
        <button
          onClick={pointerValIncrement}
          className="text-2xl transition transform hover:scale-105 active:scale-95 cursor-pointer"
        >
          &gt;
        </button>
      </div>
    </>
  );
}
