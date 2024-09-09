import React from "react";
import { timelineEvents } from "@/app/config/Timeline/timeline";
import TimelineCard from "./TimelineCard";
import Image from "next/image";
import { line } from "@/app/config/Timeline/timeline";
export default function Timeline() {
    return (
        <div className="p-[4rem] lg:p-[4.5rem] xl:p-20 overflow-clip">
            <h1 className="font-jost font-500 text-[48px] text-[#F12727] ">
                Timeline
            </h1>
            <div className="grid grid-cols-3 gap-y-20 gap-x-5 xl:gap-20 max-w-6xl mx-auto mt-20">
                {timelineEvents.map((event, index) =>
                    event.date ? (
                        <TimelineCard key={index} {...event} />
                    ) : (
                        <div
                            key={index}
                            className="flex flex-col justify-end relative"
                        >
                            <Image
                                src={line}
                                alt="1"
                                width={1000}
                                height={200}
                                className={`z-10 -bottom-[36.8px] absolute scale-x-[1.5] ${
                                    event.midEnd === "right"
                                        ? "-left-[7rem] scale-x-[1.25] scale-y-[1.5]"
                                        : event.midEnd === "left"
                                        ? "-right-[7rem] 2xl:-right-[4.5rem] scale-y-[1.5]"
                                        : "scale-y-[1.5]"
                                }`}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
