import { HeroSectionDescription } from "./heroDescription";
import { HeroSectionHeader } from "./heroHeader";

export const HeroBody = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] md:gap-[24px] p-4 md:p-0 items-start max-w-full">
        <HeroSectionHeader />
        <HeroSectionDescription />
      </div>
    </>
  );
};
