import Link from "next/link";
import Image from "next/image";

export const LectureCard = ({ imageUrl, title, description, link }) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div className="flex flex-col items-center justify-start w-full h-full p-4 hover:scale-105 transition-all">
        <div className=" shadow-md flex items-center justify-center w-20 h-20 sm:w-24 overflow-hidden sm:h-24 mb-4 rounded-full bg-gradient-to-br from-[#9f9aff] to-[#39d1bd]">
          <Image src={imageUrl} alt="icon" height={70} width={70} />
        </div>

        <h3 className="text-center text-lg sm:text-xl font-semibold text-text-800">
          {title}
        </h3>

        <p className="text-center text-base sm:text-lg font-normal  text-text-600">
          {description}
        </p>
      </div>
    </Link>
  );
};
