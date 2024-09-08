import React from "react";
import Induction from "../components/induction/induction";
import Oraganiser from "../components/organiser/organiser";

const Playground: React.FC = () => {
  return (
    <div className="">
      <h1>Playground</h1>
      <Induction/>
      <Oraganiser/>
    </div>
  );
};

export default Playground;
