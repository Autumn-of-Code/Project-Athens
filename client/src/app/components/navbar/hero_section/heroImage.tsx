import { ImgUrl } from "@/app/config/content/herosectiondata/imageUrl";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <>
      <Image
        src={ImgUrl}
        alt="Description of image"
        width={502}
        height={252.02}
      />
    </>
  );
};
