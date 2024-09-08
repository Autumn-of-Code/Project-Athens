import { Button } from "@/components/ui/button";

export const HeroSectionButton = () => {
  return (
    <>
      <div className="flex gap-10">
        <Button variant={"secondary"}>Read More</Button>
        <Button variant={"default"}>Join Now</Button>
      </div>
    </>
  );
};
