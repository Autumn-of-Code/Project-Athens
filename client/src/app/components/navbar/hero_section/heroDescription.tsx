import { descriptionData } from "@/app/config/content/herosectiondata/descriptionData";
import { HeroSectionButton } from "./heroButton";

export const HeroSectionDescription = () => {
  return (
    <>
      <div className="h-[280px] w-[610px] flex flex-col gap-[10px]">
        <div className="flex flex-col gap-[10px]">
          {descriptionData.map((item, index) => (
            <div
              key={index}
              className="font-raleway font-[500] text-[24px] text-[#323232] leading-[32px] tracking-[0.04em] text-left"
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
