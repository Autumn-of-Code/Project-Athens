import React from "react";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

export default function Timeline() {
    return (
        <div className="slg:p-[4rem] lg:p-[4.5rem] xl:p-20 overflow-clip">
            <h1 className="font-jost font-500 text-[48px] text-[#F12727] ">
                Timeline
            </h1>
            <div className="slg:block hidden">
                <Desktop />
            </div>
            <div className="block slg:hidden">
                <Mobile />
            </div>
        </div>
    );
}
