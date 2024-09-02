import Image from "next/image";
import React from "react";
import { line, rightCurve, leftCurve } from "@/app/config/Timeline/timeline";

export default function Pill({
    align,
    curved,
    isLast,
    midEnd,
    corner,
}: {
    align: String;
    curved: String;
    isLast: boolean;
    midEnd: String;
    corner: String;
}) {
    return (
        <div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black-pri p-1 rounded-full border border-black-pri z-20">
                <div className="h-5 w-5 bg-[#DDDDDD] rounded-full" />
            </div>
            <div
                className={`absolute -bottom-[38px] z-10 ${
                    isLast
                        ? "right-[9.5rem] scale-y-[1.5]"
                        : corner === "left"
                        ? "-left-[0.2rem]"
                        : align === "left"
                        ? "left-50"
                        : "right-10"
                }`}
            >
                <Image
                    src={line}
                    alt="1"
                    width={1000}
                    height={2000}
                    className={`z-10 ${
                        align === "left" ? " scale-y-[2.5]" : "scale-y-[2]"
                    }`}
                />
                {curved && (
                    <Image
                        src={curved === "left" ? leftCurve : rightCurve}
                        alt="1"
                        width={110}
                        height={100}
                        className={`z-20 absolute ${
                            curved === "right"
                                ? "top-[0.2rem] -right-[6.1rem] scale-y-[1.01]"
                                : "-top-[17.4rem]  -left-[8rem] scale-y-[1.05]"
                        }`}
                    />
                )}
            </div>
        </div>
    );
}
