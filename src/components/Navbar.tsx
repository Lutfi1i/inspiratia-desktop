import Image from "next/image";
import { Icon } from "@iconify/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <header
      className={`absolute top-0 w-full h-auto md:h-[60px] p-2 md:p-4 z-50 ${poppins.className}`}
    >
      <div className="w-full flex flex-wrap justify-between items-center p-2 md:p-4 bg-transparent">
        {/* Logo and Brand */}
        <div className="flex items-center drop-shadow-md">
          <Image
            src="/inspiratia.png"
            alt="Inspiratia"
            width={40}
            height={40}
            className="drop-shadow-md w-8 h-8 md:w-10 md:h-10"
          />
          <h1
            className="text-white text-xl md:text-2xl font-bold ml-2 drop-shadow-md"
          >
            Inspiratia
          </h1>
        </div>

        {/* Checkbox for mobile toggle (hidden) */}
        <label htmlFor="menu-toggle" className="md:hidden cursor-pointer text-white">
          <Icon
            icon="mdi:menu"
            width="28"
            height="28"
          />
        </label>
        <input type="checkbox" id="menu-toggle" className="hidden peer" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4">
          <button className="bg-white/60 text-[#808080] font-medium w-[250px] lg:w-[406px] h-[40px] flex items-center justify-start rounded-lg drop-shadow-xl text-left pl-3">
            <Icon
              icon="material-symbols:search-rounded"
              width="24"
              height="24"
              className="mr-2 text-black"
            />
            Cari buku atau penulis...
          </button>
          <div className="ml-2 lg:ml-5 flex gap-2 lg:gap-4">
            <button className="bg-[#2D6E50] hover:bg-[#1E5035] transition-colors text-white w-[90px] lg:w-[114px] h-[38px] rounded-lg font-semibold drop-shadow-xl">
              Login
            </button>
            <button className="bg-white text-black w-[90px] lg:w-[114px] h-[38px] rounded-lg font-semibold drop-shadow-xl">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu!  */}
        <div className="w-full hidden peer-checked:flex flex-col gap-3 mt-4 md:hidden bg-[#2D6E50]/90 p-4 rounded-lg">
          <button className="bg-white/60 text-[#808080] font-medium w-full h-[40px] flex items-center justify-start rounded-lg drop-shadow-xl text-left pl-3">
            <Icon
              icon="material-symbols:search-rounded"
              width="24"
              height="24"
              className="mr-2 text-black"
            />
            Cari buku atau penulis...
          </button>
          <div className="flex gap-2 mt-2">
            <button className="flex-1 bg-white/90 hover:bg-white transition-colors text-[#2D6E50] h-[38px] rounded-lg font-semibold drop-shadow-xl">
              Login
            </button>
            <button className="flex-1 bg-white text-black h-[38px] rounded-lg font-semibold drop-shadow-xl border border-[#2D6E50]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}