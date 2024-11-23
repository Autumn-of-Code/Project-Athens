import { AboutBody } from "./aboutBody";
import { AboutImage } from "./aboutImage";

export const AboutMain = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 p-4 md:pl-padding-main md:pr-padding-main md:mt-margin-large md:mb-margin-large h-auto items-center">
        <AboutBody />
        <AboutImage />
      </div>
    </>
  );
};
