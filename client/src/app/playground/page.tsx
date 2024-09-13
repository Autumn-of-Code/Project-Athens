import React from "react";
import Induction from "../components/induction/induction";
import Oraganiser from "../components/organiser/organiser";
import NavBar from "../components/navbar/nav";

const Playground: React.FC = () => {
  return (
    <div className="">
      <NavBar/>
      <h1>Playground</h1>
      <Induction/>
      <Oraganiser/>
    </div>
  );
};

export default Playground;
