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
    <div className="w-100% text-[#F12727] font-jost text-3xl text-left">
      <p className="pl-12">Organisers</p>
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden mt-12">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map(({ src, height, width, classname }, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 pr-4 lg:pr-10 mb-9 pl-4 lg:pl-6"
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={width}
                height={height}
                className={classname}
              />
              <p className="font-normal text-sm text-black-pri pt-6 mr-5 text-center">
                {images[index].name}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
        >
          &#8249;
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Oraganiser;
