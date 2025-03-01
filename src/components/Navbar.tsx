import Image from "next/image";
import { Icon } from "@iconify/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
});

export default function Navbar() {
  return (
    <header className={`absolute top-0 w-full h-[60px] p-4 z-50 ${poppins.className}`}>
      <div className="w-full flex justify-between items-center p-4 bg-transparent">
        <div className="flex items-center drop-shadow-md">
          <Image src="/inspiratia.png" alt="Inspiratia" width={40} height={40} className="drop-shadow-md" />
          <h1 className="text-white text-2xl
          font-bold ml-2 drop-shadow-md">Inspiratia</h1>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/60 text-[#808080] font-medium  w-[406px] h-[40px] flex items-center justify-start rounded-lg drop-shadow-xl text-left pl-3 "><Icon icon="material-symbols:search-rounded" width="24" height="24" className="mr-2"/>Cari buku atau penulis...</button>
          <div className="ml-5 flex gap-4">
          <button className="bg-[#2D6E50] text-white w-[114px] h-[38px] rounded-lg font-semibold drop-shadow-xl">Login</button>
          </div>
          <button className="bg-white text-black w-[114px] h-[38px] rounded-lg font-semibold drop-shadow-xl">Sign Up</button>
          </div>
      </div>
    </header>
  );
}
