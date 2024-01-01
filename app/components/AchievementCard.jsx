"use client";
import { Achievements } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { use } from "react";

export const AchievementCard = ({ description, icon, index }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#FECACA] to-[#FDE68A]">
        <Image src={icon} alt="icon" width={50} height={50} />
      </div>

      <p className="text-center text-xs sm:text-sm font-light text-text-700">
        {description}
      </p>
    </div>
  );
};
