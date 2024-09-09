import { TimelineCardType } from "@/app/types/timeline";

export default function TimelineCard({
    date,
    title,
    status,
    image,
    index,
}: {
    date: string;
    title: string;
    status: string;
    image: string;
    index: number;
}) {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`flex flex-col-reverse md:flex-row items-center my-8 w-full ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
            } relative`}
        >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center my-4 md:my-0">
                <img
                    src={image}
                    alt={title}
                    className="max-w-[150px] sm:max-w-[180px] md:max-w-[200px] h-auto"
                />
            </div>

            {/* Text Content Section */}
            <div className="flex flex-col items-center w-full md:w-1/2 relative">
                <div className="relative font-inter w-full h-auto p-5 md:h-52 text-center grid place-items-center border-2 border-black-pri rounded-xl py-5 gap-3 text-black-pri z-10 max-w-xs sm:max-w-sm">
                    <p className="font-[500] text-[18px] sm:text-[20px] md:text-[22px]">
                        {title}
                    </p>
                    <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[300]">
                        {date}
                    </p>
                    <p className="text-[#F12727] text-[14px] sm:text-[16px] md:text-[18px] font-[600]">
                        {status}
                    </p>
                    {/* Arrow */}
                    <div
                        className={`absolute top-1/2 ${
                            isEven
                                ? "-right-[1rem] md:-right-[1.5rem] -rotate-90"
                                : "-left-[1rem] md:-left-[1.5rem] rotate-90"
                        } transform w-0 h-0 border-l-[8px] sm:border-l-[10px] border-l-transparent border-r-[8px] sm:border-r-[10px] border-r-transparent border-t-[8px] sm:border-t-[10px] border-t-black-pri`}
                    ></div>
                </div>
            </div>
        </div>
    );
}
