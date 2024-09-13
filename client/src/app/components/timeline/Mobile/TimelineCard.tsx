import React from "react";
import Image from "next/image";
import { TimelineCardType } from "@/app/types/timeline";
export default function TimelineCard({
    date,
    title,
    status,
    image,
}: TimelineCardType) {
    return (
        <div className="flex flex-col items-center w-full border-2 border-black rounded-xl">
            <div className="font-inter w-full h-auto p-4 sm:p-5 text-center grid place-items-center py-5 gap-2 sm:gap-3 text-black z-10 max-w-xs xsm:max-w-sm">
                <div className="w-full flex justify-center my-4 md:my-0">
                    <Image
                        src={image}
                        alt={title}
                        width={1000}
                        height={1000}
                        className="max-w-[100px] xsm:max-w-[120px] sm:max-w-[150px] md:max-w-[200px] h-auto"
                    />
                </div>
                <p className="font-[500]">{date}</p>
                <p className="font-[300]">{title}</p>
                <p className="font-[600] text-[#F12727]">{status}</p>
            </div>
        </div>
    );
}
