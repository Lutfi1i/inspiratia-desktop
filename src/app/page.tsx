import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Metadata } from 'next';
import FeatureCard from "../components/featurebox";
import features from "../components/featureisi";

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
        className={`relative min-h-screen bg-[#90C5AA] flex items-center justify-center px-4 md:px-8 overflow-hidden ${poppins.className}`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          
          {/* Gambar Device */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
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
            <h1 className="text-[90px] font-extrabold leading-tight">
              <span className="text-[#2A6747]">Where </span>
              <span className="text-white">Stories</span> <br />
              <span className="text-white">Come</span>
              <span className="text-[#2A6747]"> to Life</span>
            </h1>
            <p className="text-white text-base md:text-lg mt-4 font-bold">
              &quot;Buku Terbaik, Kapan Saja, Di Mana Saja&quot;
            </p>
            <button className="mt-6 bg-[#2A6747] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold text-base md:text-lg shadow-md hover:bg-[#1E5035] transition-colors">
              Mulai Membaca!
            </button>
          </div>
        </div>
      </section>
      <div className="relative">
      {/* Features Section */}
      <section className={`bg-[#90C5AA] py-12 md:py-16 px-4 ${poppins.className}`}>
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <h2 className="text-black text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16">
            Kenapa Inspiratia?
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-12 md:gap-y-16">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </div>
      </section>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#90C5AA] p-12">
      {/* Left side - Books */}
      <div className="flex flex-wrap gap-4 max-w-lg mx-10 px-0">
      <div className="mt-20">
          <Image 
        src="/book1c.png" 
        alt="cancer-ward" 
        width={160}
        height={177}
          />
        </div>
        
        <div className="">
          <Image 
            src="/book1a.png" 
            alt="cancer-ward" 
            width={220}
            height={245}
          />
        </div>
        
        
        <div className="">
          <Image 
            src="/book2b.png" 
            alt="laserwriter" 
            width={150}
            height={222}
          />
        </div>
        
        <div className="">
          <Image 
            src="/bokk4d.png" 
            alt="Harry Potter" 
            width={200}
            height={253}
          />
        </div>
      </div>
      
      {/* Right side - Text */}
      <div className={`md:ml-auto text-right mt-12 md:mt-0 ${poppins.className}`}>
        <h1 className="text-white text-6xl md:text-8xl font-bold leading-tight drop-shadow-lg">
          Buku<br />Resmi
        </h1>
        
        <div className="mt-8 space-y-3 text-white text-lg md:text-xl">
          <p className="font-medium">&quot;Baca di Mana Saja, Kapan Saja&quot;</p>
          <p className="font-medium">&quot;Buku Resmi, Legal, dan Terpercaya&quot;</p>
          <p className="font-medium">&quot;Diterjemahkan dengan Akurat dan Profesional&quot;</p>
          <p className="font-medium">&quot;Akses Buku Favorit Anda dengan Mudah&quot;</p>
        </div>

        <div className="mt-8">
        <button className="mt-6 bg-[#2A6747] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-bold text-base md:text-lg shadow-md hover:bg-[#1E5035] transition-colors">
        Lihat Semua buku
            </button>
        </div>
      </div>
    </div>
    </>
  );
}