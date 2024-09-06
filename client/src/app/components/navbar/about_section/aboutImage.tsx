import { ImgUrl } from "@/app/config/content/aboutSectionData/imgUrl";
import Image from "next/image";

export const AboutImage = () => {
  return (
    <>
      <Image
        src={ImgUrl}
        alt="Description of image"
        width={386.64}
        height={333.99}
      />
    </>
  );
};
