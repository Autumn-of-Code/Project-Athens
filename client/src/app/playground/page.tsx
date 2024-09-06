import React from "react";

import { HeroMain } from "../components/navbar/hero_section/heroMain";
import { AboutMain } from "../components/navbar/about_section/aboutMain";

const Playground: React.FC = () => {
  return (
    <div className="bg-white">
      Playground
      <HeroMain />
      <AboutMain />
    </div>
  );
};

export default Playground;
