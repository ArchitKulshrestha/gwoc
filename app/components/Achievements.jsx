import React from "react";
import { Achievements } from "@/constants";
import Image from "next/image";

const AchievementCard = ({ description, icon }) => {
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

const Achievement = () => {
  return (
    <section className="px-6 lg:px-20" id="Achievements">
      <h1 className="md:text-3xl text-2xl font-bold text-text-800 my-8">
        Achievements
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Achievements.map((achievement, index) => (
          <AchievementCard key={index} {...achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievement;
