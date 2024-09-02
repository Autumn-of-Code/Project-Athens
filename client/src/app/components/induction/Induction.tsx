import React from "react";
import Image from "next/image";

const Induction = () => {
  return (
    <div className="w-100% bg-[#fffbd9] text-primary font-semibold text-3xl text-center fontFamily-jost pt-2">
      We are Inducting...!!!
      <div className="w-90% flex justify-evenly items-center pt-12 pb-5 ">
        <div>
          <Image
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Open_Source_lb5i4d.png"
            alt="Open Source"
            width={150}
            height={150}
          />
          <p className="font-normal text-black ">
            Open source <br />
            projects team
          </p>
        </div>

        <div>
          <Image
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Technical_s7yt1i.png"
            alt="Technical"
            width={200}
            height={200}
            className="mb-9"
          />
          <p className="font-normal text-black ">
            Technical <br />
            team
          </p>
        </div>

        <div>
          <Image
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Design_Video_gg3tum.png"
            alt="Design & Video Team"
            width={200}
            height={200}
          />
          <p className="font-normal text-black ">
            Design & Video <br />
            team
          </p>
        </div>

        <div>
          <Image
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291335/Img_Content_ldfzcz.png"
            alt="Content"
            width={100}
            height={50}
            className="ml-12"
          />
          <p className="font-normal text-black ">
            Content & Creative <br />
            team
          </p>
        </div>

        <div>
          <Image
            src="https://res.cloudinary.com/dqqyuvg1v/image/upload/v1725291334/Img_Finance_kxa26b.png"
            alt="Finance"
            width={200}
            height={220}
            className="mb-16 mt-5"
          />
          <p className="font-normal text-black ">
            Finance <br />
            team
          </p>
        </div>
      </div>
    </div>
  );
};

export default Induction;
