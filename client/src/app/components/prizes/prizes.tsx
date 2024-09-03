import React from "react";
import { prizes } from "../../config/content/prizeData"; 

const Prizes: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="ml-5 sm:ml-10 md:ml-20">
        <div className="text-xl sm:text-3xl md:text-5xl text-red-600">
          WIN Exciting Prizes
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-64 gap-y-4 mt-16 md:ml-20 md:mb-20">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="flex flex-col text-lg sm:text-xl md:text-3xl w-fit text-center leading-tight sm:leading-9 md:leading-10"
          >
            Top{" "}
            <span className="text-4xl sm:text-5xl md:text-9xl text-red-600 my-6">
              {prize.top}
            </span>{" "}
            Contributors
            <div className="mt-10">
              <div className="text-3xl">{prize.prize}</div>
              <a
                href={prize.descriptionLink}
                target="_blank"
                className="text-base text-slate-500 underline"
                rel="noopener noreferrer"
              >
                Description
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;
