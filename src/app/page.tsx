import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <section
        className={`relative min-h-screen bg-[#90C5AA] overflow-hidden ${poppins.className}`}
      >
        {/* Main Hero Content */}
        <div className="relative flex w-full h-[calc(100vh-72px)]">
          {/* Device Images */}
          <div className="relative w-1/2 h-full">
            <Image
              src="/Frame 46.svg"
              alt="devices"
              width={800}
              height={800}
              className="absolute left-29 top-5 drop-shadow-xl"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-1/2 flex flex-col items-end justify-center pr-16 text-right">
            <h1 className="text-8xl font-extrabold leading-none">
              <span className="text-[#2A6747] ">Where </span>
              <span className="text-white">Stories</span> <br />
              <span className="text-white">Come</span>
              <span className="text-[#2A6747]">to Life</span>
            </h1>
            <p className="text-white text-xl mt-3 font-bold">
              &quot;Buku Terbaik, Kapan Saja, Di Mana Saja&quot;
            </p>
            <button className="mt-6 bg-[#2A6747] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-[#1E5035] transition-colors">
              Mulai Membaca!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
