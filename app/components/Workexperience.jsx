import { about } from "@/public/assets";
import Image from "next/image";
import { getExperience } from "@/sanity/utilsSanity";
const WorkexperienceCard = ({ title, imageUrl, description, duration }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full p-4 hover:scale-105 transition-all">
      <div className="shadow-md flex items-center justify-center w-20 h-20 sm:w-24 overflow-hidden sm:h-24 mb-4 rounded-full bg-gradient-to-br from-[#9f9aff] to-[#39d1bd]">
        <Image src={imageUrl} alt="icon" width={70} height={70} />
      </div>

      <h3 className="text-center text-lg sm:text-xl font-semibold text-text-800">
        {title}
      </h3>

      <p className="text-center text-sm sm:text-lg font-normal  text-text-600 ">
        {description}
      </p>
      <p className="text-center text- sm:text-base font-light text-text-600">
        {duration}
      </p>
    </div>
  );
};

export const Workexperience = async () => {
  const Experience = await getExperience();

  return (
    <div>
      <h1 className="md:text-4xl text-2xl font-bold text-text-800 mb-8 mt-20">
        Work Experience
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-4 md:py-8">
        {Experience.map((item, index) => (
          <WorkexperienceCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
