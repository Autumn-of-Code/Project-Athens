import { HeroBody } from "./heroBody";
import { HeroImage } from "./heroImage";

export const HeroMain = () => {
  return (
    <>
      <div className="pl-[107px] pr-[107px] pt-[240px] flex justify-between items-center">
        <HeroBody />
        <HeroImage />
      </div>
    </>
  );
};
