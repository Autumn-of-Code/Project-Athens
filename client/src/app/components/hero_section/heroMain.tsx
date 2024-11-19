import { HeroBody } from "./heroBody";
import { HeroImage } from "./heroImage";

export const HeroMain = () => {
  return (
    <>
      <div className="md:pl-[107px] md:pr-[107px] md:pt-[120px] flex flex-col md:flex-row justify-between items-center">
        <HeroBody />
        <HeroImage />
      </div>
    </>
  );
};
