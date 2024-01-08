import { Experience } from "@/constants";
import { aboutImage } from "@/public/assets";
import Image from "next/image";
import { Workexperience } from "./Workexperience";
import Link from "next/link";
import { getAbout } from "@/sanity/utilsSanity";

const About = async () => {
  const about = await getAbout();
  const abouts = about[0].about;

  return (
    <>
      <section id="About" className="px-6 lg:px-28 min-h-screen  py-1 sm:py-4">
        <div className=" flex  flex-col md:flex-row gap-x-8 gap-y-16">
          <div className=" w-full md:w-1/2">
            <h1 className="md:text-4xl text-2xl font-bold text-text-800 pb-2 py-2 sm:py-4">
              About
            </h1>
            <p className="text-text-600 md:text-xl text-base my-2 mb-8">
              {abouts}
            </p>
            <Link
              className="text-text-50 bg-primary-600 py-3 px-6 rounded-md hover:bg-primary-700"
              href="https://drive.google.com/file/d/1PjwntJEPpVpSkCZJhiu5gYdt9DwuEykd/view?usp=sharing"
              target="_blank">
              Resume
            </Link>
          </div>
          <div className="w-full md:w-1/2 ">
            <Image
              className=" md:ml-16 sm:h-[300px] h-[200px] drop-shadow"
              src={aboutImage}
              alt="Educator"
            />
          </div>
        </div>
        <Workexperience />
      </section>
    </>
  );
};
export default About;
