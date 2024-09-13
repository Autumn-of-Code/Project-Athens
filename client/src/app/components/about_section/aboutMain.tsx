import { AboutBody } from "./aboutBody";
import { AboutImage } from "./aboutImage";

export const AboutMain = () => {
  return (
    <>
      <div className="pl-padding-main pr-padding-main mt-margin-large mb-margin-large h-auto flex justify-between items-center">
        <AboutBody />
        <AboutImage />
      </div>
    </>
  );
};
