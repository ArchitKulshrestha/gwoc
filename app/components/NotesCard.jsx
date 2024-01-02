import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
export const NotesCard = ({ imageUrl, title, description, link, index }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4 hover:scale-105 transition-all">
      <div className="flex items-center justify-center w-20 h-20 sm:w-24 overflow-hidden sm:h-24 mb-4 rounded-full bg-gradient-to-br from-[#9f9aff] to-[#39d1bd]">
        <Image src={imageUrl} alt="icon" width={70} height={70} />
      </div>

      <h3 className="text-center text-lg sm:text-xl font-semibold text-text-800">
        {title}
      </h3>

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center text-base sm:text-lg font-normal  text-text-600 hover:text-text-400">
        {description}
      </Link>
    </div>
  );
};
