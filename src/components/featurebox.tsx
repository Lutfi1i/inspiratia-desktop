import React from "react";
import { Icon } from "@iconify/react";

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-[250px] min-h-[200px] flex flex-col items-center text-center relative transition-transform hover:scale-105">
        {/* Ikon di Tengah */}
        <div className="bg-white w-12 h-12 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 flex justify-center items-center shadow-md">
          <Icon icon={icon} width="32" height="32" className="text-black" />
        </div>

        {/* Judul & Deskripsi */}
        <h3 className="text-black font-bold text-xl mb-2 mt-6">{title}</h3>
        <p className="text-black text-sm">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
