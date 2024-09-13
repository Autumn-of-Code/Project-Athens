"use client";
import React from "react";
import { timelineEvents } from "@/app/config/content/Timeline/timeline";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineCard from "./TimelineCard";
export default function Mobile() {
    return (
        <div className="max-w-6xl mx-auto my-16">
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
                                contentStyle={{ background: "#00000000" }}
                            >
                                <TimelineCard
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
