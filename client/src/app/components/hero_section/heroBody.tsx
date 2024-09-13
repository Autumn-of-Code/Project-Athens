import { HeroSectionDescription } from "./heroDescription";
import { HeroSectionHeader } from "./heroHeader";

export const HeroBody = () => {
  return (
    <>
      <div className="flex flex-col gap-[24px]">
        <HeroSectionHeader />
        <HeroSectionDescription />
      </div>
    </>
  );
};
