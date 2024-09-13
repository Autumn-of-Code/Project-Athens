"use client";
import React from "react";
import TimelineCard from "./TimelineCard";
import { timelineEvents } from "@/app/config/Timeline/timeline";
import TimelineCard2 from "./TimelineCard2";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Mobile() {
    let count = 0;

    return (
        <div className="max-w-6xl mx-auto my-16 relative px-4">
            {/* <div className="absolute smd:block hidden smd:left-1/2 transform smd:-translate-x-1/2 left-10 h-full w-[2px] bg-[#F12727]"></div> */}

            {/* <div className="smd:block hidden">
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
            </div> */}

            {/* <div className="smd:hidden flex flex-col gap-10">
                
                {timelineEvents.map((event, index) => {
                    if (event.title) {
                        return (
                            <TimelineCard2
                                key={event.title}
                                date={event.date!}
                                image={event.image!}
                                title={event.title!}
                                status={event.status!}
                            />
                        );
                    }
                })}
            </div> */}

            <VerticalTimeline lineColor="#F12727">
                {timelineEvents.map((event, i) => {
                    if (event.title)
                        return (
                            <VerticalTimelineElement
                                key={i}
                                visible={true}
                                iconStyle={{
                                    background: "#F12727",
                                    color: "#fff",
                                }}
                            >
                                <TimelineCard2
                                    key={event.title}
                                    date={event.date!}
                                    image={event.image!}
                                    title={event.title!}
                                    status={event.status!}
                                />
                            </VerticalTimelineElement>
                        );
                })}
            </VerticalTimeline>
        </div>
    );
}
