import React from "react";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

export default function Timeline() {
    return (
        <div className="p-[1rem] smd:p-0 slg:p-[4rem] lg:p-[4.5rem] xl:p-20 overflow-clip">
            <h1 className="font-jost smd:ml-10 smd:mt-5 slg:ml-0 slg:mt-0 font-500 text-[48px] text-[#F12727] ">
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
