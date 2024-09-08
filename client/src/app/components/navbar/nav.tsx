"use client";

import { navLinks } from "@/app/config/content/navData/navBarData";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between items-center px-10 md:pr-[107px] md:pl-[129px] pt-6">
        <div className="flex flex-row gap-4 items-center">
          <p className="px-4 py-3 md:px-9 md:py-6 bg-[#595959] rounded-[12px] text-3xl md:text-4xl text-white">
            Logo
          </p>
          <h1 className="text-2xl md:text-[32px] font-jost">Autumn of Code</h1>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-row gap-6 text-[#757575] text-2xl">
            {navLinks.map((navLink, index) => (
              <Link
                href={navLink.id}
                key={index}
                className="hover:cursor-pointer"
              >
                {navLink.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 space-y-1 sm:px-3 h-screen flex flex-col justify-center items-center gap-10">
            {navLinks.map((navLink, index) => (
              <Link
                key={index}
                href={navLink.id}
                className="text-[#757575] hover:text-black block px-3 py-2 rounded-md text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {navLink.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
