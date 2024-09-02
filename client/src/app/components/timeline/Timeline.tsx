import React from "react";
import { timelineEvents } from "@/app/config/Timeline/timeline";
import TimelineCard from "./TimelineCard";
import Image from "next/image";
export default function Timeline() {
    return (
        <div className="p-20">
            <div className="grid grid-cols-3 gap-20 max-w-6xl mx-auto">
                {timelineEvents.map((event, index) =>
                    event.date ? (
                        <TimelineCard key={index} {...event} />
                    ) : (
                        <div
                            key={index}
                            className="flex flex-col justify-end relative"
                        >
                            <Image
                                src={"/1.png"}
                                alt="1"
                                width={1000}
                                height={200}
                                className={`z-10 -bottom-[36.8px] absolute scale-x-[1.5] ${
                                    event.midEnd === "right"
                                        ? "-left-[7rem] scale-x-[1.25] scale-y-[1.5]"
                                        : event.midEnd === "left"
                                        ? "-right-[4.5rem] scale-y-[1.5]"
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
