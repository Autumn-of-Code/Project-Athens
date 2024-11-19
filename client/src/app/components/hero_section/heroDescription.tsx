import { descriptionData } from "@/app/config/content/herosectiondata/descriptionData";
import { HeroSectionButton } from "./heroButton";

export const HeroSectionDescription = () => {
  return (
    <>
      <div className="flex flex-col gap-[10px] h-auto w-full md:w-[610px] p-4 md:p-0">
        <div className="flex flex-col gap-[10px]">
          {descriptionData.map((item, index) => (
            <div
              key={index}
              className="font-raleway font-[500] text-[16px] md:text-body-lg text-[#323232] leading-[28px] md:leading-[32px] tracking-[0.04em] text-left"
            >
              {item}
            </div>
          ))}
        </div>
        <HeroSectionButton />
      </div>
    </>
  );
};
