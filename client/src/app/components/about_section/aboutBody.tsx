import { AboutDescription } from "./aboutDescription";
import { AboutHeader } from "./aboutHeader";

export const AboutBody = () => {
  return (
    <>
      <div className="flex flex-col gap-6 md:gap-8 p-4 md:p-0">
        <AboutHeader />
        <AboutDescription />
      </div>
    </>
  );
};
