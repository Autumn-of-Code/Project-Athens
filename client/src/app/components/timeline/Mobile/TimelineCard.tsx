import React from "react";

export default function TimelineCard({
    date,
    title,
    status,
    image,
    index,
}: {
    date: string;
    title: string;
    status: string;
    image: string;
    index: number;
}) {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`flex  flex-row items-center my-8 w-full ${
                isEven ? "flex-row-reverse" : "flex-row"
            } relative`}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center my-4 md:my-0">
                <img
                    src={image}
                    alt={title}
                    className="max-w-[100px] xsm:max-w-[120px] sm:max-w-[150px] md:max-w-[200px] h-auto"
                />
            </div>

            {/* Text Content Section */}
            <div className="flex flex-col items-center w-full md:w-1/2 relative">
                <div className="relative font-inter w-full h-auto p-4 sm:p-5 text-center grid place-items-center border-2 border-black-pri rounded-xl py-5 gap-2 sm:gap-3 text-black-pri z-10 max-w-xs xsm:max-w-sm">
                    <p className="font-[500] text-[14px] xsm:text-[16px] sm:text-[18px] md:text-[22px]">
                        {title}
                    </p>
                    <p className="text-[12px] xsm:text-[14px] sm:text-[16px] md:text-[18px] font-[300]">
                        {date}
                    </p>
                    <p className="text-[#F12727] text-[12px] xsm:text-[14px] sm:text-[16px] md:text-[18px] font-[600]">
                        {status}
                    </p>
                    {/* Arrow */}
                    <div
                        className={`absolute top-1/2 ${
                            isEven
                                ? "-right-[1.35rem] -rotate-90"
                                : " -left-[1.35rem] rotate-90"
                        } transform w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px]`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
