import { Achievements } from "@/constants";
import Image from "next/image";

export const AchievementCard = ({ description, icon, index }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4 hover:scale-105 transition-all">
      <div className="flex  items-center justify-center shadow-md w-20 h-20 sm:w-24 overflow-hidden sm:h-24 mb-4 rounded-full bg-gradient-to-br from-[#9f9aff] to-[#39d1bd]">
        <Image src={icon} alt="icon" width={70} height={70} />
      </div>

      <p className="text-center text-sm sm:text-base font-normal text-text-700">
        {description}
      </p>
    </div>
  );
};
