import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSectionButton = () => {
  return (
    <>
      <div className="flex flex-wrap gap-4 md:gap-10">
        <Button variant={"secondary"}>Read More</Button>
        <Button variant={"default"}>
          <Link href="https://discord.gg/Aa6qnZRhXP">
            Join Now
          </Link>
        </Button>
      </div>
    </>
  );
};
