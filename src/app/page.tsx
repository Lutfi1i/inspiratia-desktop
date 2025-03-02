import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Metadata } from 'next';
import FitureHead from "@/fiture";

export const metadata: Metadata = {
  title: 'Inspiratia'
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <section
        className={`relative min-h-screen bg-[#90C5AA] flex items-center justify-center px-8 overflow-hidden ${poppins.className}`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          
          {/* Gambar Device */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/Frame 46.svg"
              alt="devices"
              width={800}
              height={800}
              className="max-w-full h-auto object-contain"
            />
          </div>

          {/* Teks Hero */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
              <span className="text-[#2A6747]">Where </span>
              <span className="text-white">Stories</span> <br />
              <span className="text-white">Come</span>
              <span className="text-[#2A6747]"> to Life</span>
            </h1>
            <p className="text-white text-lg md:text-xl mt-4 font-bold">
              &quot;Buku Terbaik, Kapan Saja, Di Mana Saja&quot;
            </p>
            <button className="mt-6 bg-[#2A6747] text-white px-8 py-3 rounded-lg font-bold text-lg shadow-md hover:bg-[#1E5035] transition-colors">
              Mulai Membaca!
            </button>
          </div>
        </div>
      </section>
      <div className="relative">
        <FitureHead />
      </div>
    </>
  );
}
