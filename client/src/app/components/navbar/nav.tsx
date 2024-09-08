import { navLinks } from "@/app/config/content/navData/navBarData";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center pr-[107px] pl-[129px] pt-6">
      <div className="flex flex-row gap-4 items-center">
        <p className="px-9 py-6 bg-[#595959] rounded-[12px] text-4xl text-white">
          Logo
        </p>
        <h1 className="text-[32px] font-jost">Autumn of Code</h1>
      </div>
      <div className="flex flex-row gap-6 text-[#757575] text-2xl">
        {navLinks.map((navLink, index) => (
          <Link href={navLink.id} key={index} className="hover:cursor-pointer">
            {navLink.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
