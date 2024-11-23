"use client";

import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/app/config/content/OrganiserData/OrganiserData";

const Oraganiser = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="w-full text-[#F12727] font-jost text-3xl text-left">
      <p className="pl-12 mb-8">Organisers</p>
      <div className="relative w-full h-[300px] max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex items-center transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map(({ src, name, width, height }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 lg:px-6 mb-9"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col items-center justify-center h-[300px]">
                <div className="h-[150px] w-[150px] flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={width}
                    height={height}
                    className="object-contain"
                  />
                </div>
                <div className="pt-4">
                  <p className="font-semibold text-lg text-center text-black-pri">
                    {name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2"
        >
          &#8249;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Oraganiser;
