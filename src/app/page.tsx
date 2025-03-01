import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function HeroSection() {
  return (
  <>
  <Navbar />
  <section className="relative w-full min-h-screen flex items-center justify-center" style={{ backgroundColor: '#90C5AA' }}>
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold text-white">
          Where <span className="text-green-700">Stories</span> Come to Life
        </h1>
        <p className="text-lg text-white mt-4">
          &quot;Buku Terbaik, Kapan Saja, Di Mana Saja&quot;
        </p>
        <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800">
          Mulai Membaca!
        </button>
      </div>
      <div className="absolute bottom-10 flex justify-center w-full">
        <Image src="/laptop-mockup.png" alt="Laptop" width={600} height={400} />
        <Image src="/phone-mockup.png" alt="Phone" width={200} height={400} className="ml-6" />
      </div>
    </section>
    </>
  );
}