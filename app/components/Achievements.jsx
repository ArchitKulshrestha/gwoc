import { AchievementCard } from "./AchievementCard";
import { Achievements } from "@/constants";

const Achievement = () => {
  return (
    <section
      className="px-6 lg:px-28 min-h-screen flex justify-center items-center py-8"
      id="Achievements">
      <div>
        <h1 className="md:text-4xl text-2xl font-bold text-text-800 my-8 ">
          Achievements
        </h1>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {Achievements.map((achievement, index) => (
            <AchievementCard key={index} index={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
