"use client";

import React, { useState } from "react";
import Image from "next/image";

const Oraganiser = () => {
  const images = [
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725299204/GDSC_BBSR_1_lpsskx.png",
      width: 500,
      height: 300,
      name: "GDSC Silicon University",
      classname: "",
    },
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725299204/WTM_1_kcus3p.png",
      width: 200,
      height: 100,
      name: "Women Techmakers",
      classname: "",
    },
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725299204/os_community_logo_1_i1dkn3.png",
      width: 200,
      height: 100,
      name: "S.Dev Community",
      classname: "",
    },
  ];

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
    <div className="w-100% bg-[#fffbd9] text-primary pl-12 font-semibold text-3xl text-left fontFamily-jost">
      Oragnisers
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map(({ src, height, width, classname }, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 pr-10 mb-9 ">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={width}
                height={height}
                className={classname}
              />
              <p className="font-normal text-sm text-black pt-6 mr-5">
                {images[index].name}
              </p>
            </div>
          ))}
          {/* {images.map(({ src, height, width }, index) => (
            <div key={index+1} className="w-full">
              <Image
                src={src}
                alt={`Slide ${index + 2}`}
                width={width}
                height={height}
                // className="w-full h-full object-cover"
              />
            </div>
          ))} */}
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
