import React from "react";
import Image from "next/image";

const Induction = () => {
  const groups = [
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Open_Source_lb5i4d.png",
      alt: "Open Source",
      width: 120,
      height: 120,
      content: "Open source projects team",
      classname: "ml-16",
    },
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Technical_s7yt1i.png",
      alt: "Technical",
      width: 200,
      height: 200,
      content: "Technical team",
      classname: "mb-9 mt-6",
    },
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Design_Video_gg3tum.png",
      alt: "Video and Design Team",
      width: 150,
      height: 150,
      content: "Video & Desgin team",
      classname: "ml-12 mt-6",
    },
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Content_ldfzcz.png",
      alt: "Content",
      width: 100,
      height: 50,
      content: "Content & Creative team",
      classname: "ml-12",
    },
    {
      src: "https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291334/Img_Finance_kxa26b.png",
      alt: "Finance",
      width: 200,
      height: 220,
      content: "Finance team",
      classname: "mb-16 mt-5",
    },
  ];

  return (
    <div className="w-100% text-primary font-semibold text-3xl text-center fontFamily-jost pt-2">
      We are Inducting...!!!
      <div className="w-full sm:w-11/12 lg:w-full mx-auto flex sm:flex-wrap lg:flex-nowrap justify-center sm:justify-evenly items-center pt-12 pb-5">
        {groups.map((group, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <Image
              src={group.src}
              alt={group.alt}
              width={group.width}
              height={group.height}
              className={group.classname}
            />
            <p className="font-normal text-black-pri text-sm sm:text-base p-4">
              {group.content}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-primary text-[#fffbd9] text-sm sm:text-base font-light p-3 sm:p-6 rounded-[12px] m-3 sm:m-6">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Induction;
