import React from "react";
import { Icon } from "@iconify/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export default function WhyInspiratia() {
    return (
        <section className={`bg-gradient-to-b from-[#90C5AA] to-[#B0D8C4] py-16 px-4 ${poppins.className}`}>
            <div className="container mx-auto max-w-6xl">
            {/* Section Title */}
            <h2 className="text-black text-4xl md:text-5xl font-semibold text-center mb-16">
                Kenapa Inspiratia?
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
                {features.map((feature, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-[250px] min-h-[250px] flex flex-col items-center text-center relative transition-transform hover:scale-105">
                        {/* Ikon di Tengah */}
                        <div className="bg-white w-12 h-12 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center shadow-md">
                            <Icon icon={feature.icon} width="32" height="32" className="text-black" />
                        </div>
                        
                        {/* Judul & Deskripsi */}
                        <h3 className="text-black font-bold text-xl mb-2 mt-6">{feature.title}</h3>
                        <p className="text-black">{feature.description}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
}

const features = [
    {
        title: "box-1",
        description: "Mulai membaca di satu perangkat, lanjutkan di perangkat lain.",
        icon: "mdi:sync",
    },
    {
        title: "box-2",
        description: "Dengarkan novel favoritmu dengan narasi yang nyaman.",
        icon: "mdi:waveform",
    },
    {
        title: "Box-3",
        description: "Dari klasik hingga terbaru, semua ada di sini.",
        icon: "mdi:book",
    },
    {
        title: "Box 4",
        description: "Sesuaikan tema, font, dan mode baca agar lebih nyaman.",
        icon: "mdi:tune",
    },
    
    {
        title: "Box 5",
        description: "Sesuaikangar lebih nyaman.",
        icon: "mdi:tune",
    },
    
];
