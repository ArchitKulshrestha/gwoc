import { getSkills } from "@/sanity/utilsSanity";

const SkillCard = ({ title, description }) => {
  return (
    <div className="  p-6 rounded-xl shadow   hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-[#cde8fe]/40 to-[#9bd1fd]/50">
      <h3 className="text-lg sm:text-xl text-text-800 font-semibold mb-2 sm:mb-4 underline-offset-4 decoration-2 underline">
        {title}
      </h3>
      <p className=" text-sm sm:text-base font-normal  text-text-600">
        {description}
      </p>
    </div>
  );
};

const Skills = async () => {
  const Skills = await getSkills();
  return (
    <section className="  px-6 lg:px-28 py-8" id="Skills">
      <h1 className="md:text-4xl text-2xl font-bold text-text-800 py-2 ">
        Skills
      </h1>
      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Skills.map((item, index) => (
            <SkillCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
