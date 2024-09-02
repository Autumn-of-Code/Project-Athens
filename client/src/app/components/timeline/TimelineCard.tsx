import React from "react";
import { TimelineCardType } from "@/app/types/timeline";
import Pill from "./Pill";
import Image from "next/image";

const TimelineCard = ({
    date,
    title,
    status,
    image,
    align,
    curved,
    isLast,
    midEnd,
    corner,
    imgPos,
    imgSize,
}: TimelineCardType) => {
    return (
        <div className="relative w-full h-52 text-center grid place-items-center border-2 border-black-pri rounded-xl py-5 gap-3 text-black-pri">
            <p className="font=[500] text-[22px]">{title}</p>
            <p className="text-[18px] font-[400]">{date}</p>
            <p className="text-[#F12727] text-[18px] font-[600]">{status}</p>
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black-pri"></div>
            <Pill
                align={align!}
                curved={curved!}
                isLast={isLast!}
                midEnd={midEnd!}
                corner={corner!}
            />
            <Image
                src={image}
                alt="image"
                width={imgSize}
                height={imgSize}
                className={`z-20 absolute -bottom-[3.5rem] ${
                    imgPos === "left" ? "-left-16" : "-right-16"
                }`}
            />
        </div>
    );
};

export default TimelineCard;
