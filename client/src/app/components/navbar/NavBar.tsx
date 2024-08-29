import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between py-5 px-24 bg-red-400">
      <a href="/">Home</a>
      <a href="/playground">Playground</a>
    </nav>
  );
};

export default NavBar;
