import React from "react";
import { stats, terms_conditions } from "../../config/content/statsData"; // Adjust the path as necessary

const Statistics: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col ml-5 sm:ml-10 md:ml-20 gap-y-3">
        <div className="text-xl sm:text-3xl md:text-5xl text-red-600">
          Autumn of Code
        </div>
        <div className="text-xl sm:text-3xl md:text-5xl font-light">
          by Numbers...
        </div>
      </div>
      <div className="flex flex-col text-center md:flex-row justify-center items-center md:gap-x-56 gap-y-4 mt-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center text-lg sm:text-xl md:text-3xl w-fit leading-tight sm:leading-9 md:leading-10"
          >
            {stat.start_label}{" "}
            <span className="text-4xl sm:text-5xl md:text-8xl text-red-600 my-6">
              {stat.value}{" "}
            </span>
            <div className="text-lg sm:text-xl md:text-3xl w-fit leading-tight sm:leading-9 md:leading-10">{stat.end_label}</div>
          </div>
        ))}
        </div>
      <div className="text-xs text-center sm:text-sm md:text-base mt-20 text-gray-500 px-4 md:px-0">
        {terms_conditions}
      </div>
    </div>
  );
};

export default Statistics;
