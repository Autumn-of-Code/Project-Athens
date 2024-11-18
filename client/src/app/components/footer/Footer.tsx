import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center backdrop-blur-sm bg-[#F5F5DC80] p-6 rounded-lg shadow-lg">
        <div className="flex flex-row gap-4 items-center mb-6">
          <p className="px-4 py-3 md:px-9 md:py-6 bg-[#595959] rounded-[12px] text-3xl md:text-4xl text-white">
            Logo
          </p>
          <h1 className="text-2xl md:text-[32px] font-jost text-[#333333]">Autumn of Code</h1>
        </div>

        <div className="flex flex-row gap-8 text-lg md:text-xl text-[#5F5F5F] mb-6">
          <a href="https://discord.gg/Aa6qnZRhXP" className="hover:text-[#F12727]">Discord</a>
          <a href="https://www.instagram.com/autumn.of.code" className="hover:text-[#F12727]">Instagram</a>
          <a href="https://x.com/Autumn_of_Code" className="hover:text-[#F12727]">Twitter</a>
        </div>

        <hr className="my-6 border-white w-full" />

        <div className="text-center text-[#5F5F5F] text-sm md:text-base">
          <p>Made with ❤️ by AOC Team. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
