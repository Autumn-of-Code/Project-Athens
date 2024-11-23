import { HeroSectionDescription } from "./heroDescription";
import { HeroSectionHeader } from "./heroHeader";

export const HeroBody = () => {
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-0 items-start max-w-full">
        <HeroSectionHeader />
        <HeroSectionDescription />
      </div>
    </>
  );
};
