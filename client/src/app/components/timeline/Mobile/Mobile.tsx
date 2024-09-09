import React from "react";
import TimelineCard from "./TimelineCard";
import { timelineEvents } from "@/app/config/Timeline/timeline";

export default function Mobile() {
    let count = 0;
    return (
        <div className="max-w-6xl mx-auto my-16 relative">
            <div className="absolute left-1/2 top-0 h-full w-[4px] bg-[#F12727] -translate-x-1/2"></div>

            {timelineEvents.map((event) => {
                if (event.title) {
                    count++;
                    return (
                        <TimelineCard
                            key={event.title}
                            index={count}
                            date={event.date!}
                            image={event.image!}
                            title={event.title!}
                            status={event.status!}
                        />
                    );
                }
            })}
        </div>
    );
}
