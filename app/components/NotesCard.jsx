"use client";
import { Notes } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export const NotesCard = ({ image, title, description, link, index }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4 hover:scale-105 transition-all">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#FECACA] to-[#FDE68A]">
        <Image src={image} alt={title} width={50} height={50} />
      </div>

      <h3 className="text-center text-lg font-semibold text-text-800">
        {title}
      </h3>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-xs sm:text-sm font-light text-text-700 hover:text-text-500">
        {description}
      </Link>
    </div>
  );
};
