import { AboutDescription } from "./aboutDescription";
import { AboutHeader } from "./aboutHeader";

export const AboutBody = () => {
  return (
    <>
      <div className="flex flex-col gap-medium-gap">
        <AboutHeader />
        <AboutDescription />
      </div>
    </>
  );
};
