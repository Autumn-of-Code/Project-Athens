import { DescriptionData } from "@/app/config/content/aboutSectionData/descriptionData";
import { AboutButton } from "./aboutButton";

export const AboutDescription = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 h-auto w-full max-w-[600px]">
      <div className="text-[16px] md:text-body-lg font-raleway text-text-dark font-medium leading-[1.5] md:leading-line-normal tracking-wide text-left mb-4">
        {DescriptionData}
      </div>
      <AboutButton />
    </div>
  );
};
