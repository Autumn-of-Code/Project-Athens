import React from "react";
import Image from "next/image";
import { groups } from "@/app/config/content/InductionData/InductionData";

const Induction = () => {
  return (
    <div className="w-100% text-[#F12727] font-jost text-3xl text-center pt-2">
      We are Inducting...!!!
      <div className="w-full  min-[200px]:w-90% sm:w-11/12 lg:w-full mx-auto flex min-[200px]:flex-col sm:flex-row lg:flex-row sm:flex-wrap lg:flex-nowrap justify-center sm:justify-evenly items-center pt-12 pb-5">
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
      <div className="text-center w-500px">
        <button className="bg-[#F12727] text-[#fffbd9] text-sm sm:text-base font-light p-3 sm:px-6 rounded-[12px] m-3 sm:m-6">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Induction;
