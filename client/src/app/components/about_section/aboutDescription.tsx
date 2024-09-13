import { DescriptionData } from "@/app/config/content/aboutSectionData/descriptionData";
import { AboutButton } from "./aboutButton";

export const AboutDescription = () => {
  return (
    <div>
      <div className="h-height-section w-width-content flex flex-col gap-small-gap">
        <div className="text-body-lg font-raleway text-text-dark font-medium leading-line-normal tracking-wide text-left mb-4">
          {DescriptionData}
        </div>
        <AboutButton />
      </div>
    </div>
  );
};
