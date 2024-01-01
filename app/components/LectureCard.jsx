"use client";
import { Lectures } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { NotesCard } from "./NotesCard";
import { motion } from "framer-motion";
export const LectureCard = ({ image, title, description, link, index }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-start w-full h-full p-4"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: index * 0.1 },
        duration: 0.5,
      }}>
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
    </motion.div>
  );
};
