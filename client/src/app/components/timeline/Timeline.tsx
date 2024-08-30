import React from "react";
import { timelineEvents } from "@/app/config/Timeline/timeline";
import TimelineCard from "./TimelineCard";
export default function Timeline() {
    return (
        <div className="p-20">
            <div className="grid grid-cols-3 gap-10">
                {timelineEvents.map((event, index) => {
                    return event.date ? (
                        <TimelineCard
                            key={index}
                            {...event}
                            align={index % 2 === 0 ? "left" : "right"}
                        />
                    ) : (
                        <div key={index}></div>
                    );
                })}
            </div>
        </div>
    );
}
