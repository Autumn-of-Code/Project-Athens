import React from "react";
import { stats, terms_conditions } from "../../config/content/statsData"; // Adjust the path as necessary

const Statistics: React.FC = () => {
  return (
    <div >
      <div className="text-center sm:text-left flex flex-col sm:ml-10 md:ml-20 gap-y-3 pt-20">
        <div className="text-4xl md:text-5xl text-red-600">
          Autumn of Code
        </div>
        <div className="text-4xl md:text-5xl font-light">
          by Numbers...
        </div>
      </div>
      <div className="flex flex-col text-center md:flex-row justify-center items-center md:gap-x-56 gap-y-4 mt-10 sm:mt-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="my-5 flex flex-col items-center justify-center text-center text-3xl sm:text-4xl w-fit  sm:leading-9 md:leading-10"
          >
            {stat.start_label}{" "}
            <span className="text-5xl md:text-8xl text-red-600 my-3 sm:my-6">
              {stat.value}{" "}
            </span>
            <div className="text-3xl md:text-4xl w-fit sm:leading-9 md:leading-10">{stat.end_label}</div>
          </div>
        ))}
        </div>
      <div className="text-xs text-center sm:text-sm md:text-base mt-10 sm:mt-20 text-gray-500 px-4 md:px-0">
        {terms_conditions}
      </div>
    </div>
  );
};

export default Statistics;
