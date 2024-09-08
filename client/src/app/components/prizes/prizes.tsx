import React from "react";
import { prizes } from "../../config/content/prizeData"; 

const Prizes: React.FC = () => {
  return (
    <div className="mt-20 pb-20">
      <div className="sm:ml-10 md:ml-20">
        <div className="text-center sm:text-left text-4xl md:text-5xl text-red-600">
          WIN Exciting Prizes
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-x-64 gap-y-4 mt-16 md:ml-20">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="flex flex-col text-4xl w-fit text-center leading-10"
          >
            Top{" "}
            <span className="text-6xl md:text-9xl text-red-600 my-4 md:my-5">
              {prize.top}
            </span>{" "}
            Contributors
            <div className="mb-4 mt-2 sm:mt-10">
              <div className="text-xl md:text-3xl leading-6 md:leading-7">{prize.prize}</div>
              <a
                href={prize.descriptionLink}
                target="_blank"
                className="text-xl sm:text-base text-slate-500 underline"
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
