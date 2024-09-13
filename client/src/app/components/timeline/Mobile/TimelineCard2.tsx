import React from "react";

export default function TimelineCard2({
    date,
    title,
    status,
    image,
}: {
    date: string;
    title: string;
    status: string;
    image: string;
}) {
    return (
        <div className="flex flex-col items-center w-full border-2 border-black-pri rounded-xl">
            <div className="font-inter w-full h-auto p-4 sm:p-5 text-center grid place-items-center py-5 gap-2 sm:gap-3 text-black-pri z-10 max-w-xs xsm:max-w-sm">
                <div className="w-full flex justify-center my-4 md:my-0">
                    <img
                        src={image}
                        alt={title}
                        className="max-w-[100px] xsm:max-w-[120px] sm:max-w-[150px] md:max-w-[200px] h-auto"
                    />
                </div>
                <p className="font-[500]">{title}</p>
                <p className="font-[300]">{date}</p>
                <p className="font-[600] text-[#F12727]">{status}</p>
            </div>
        </div>
    );
}
