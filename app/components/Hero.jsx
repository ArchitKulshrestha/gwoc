import { educator } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="mt-[70px]   min-h-screen px-6 lg:px-28 py-8 flex justify-center  w-full">
        <div className="flex sm:flex-row flex-col gap-10 mt-2 md:mt-8">
          <div className="md:w-1/2 w-full">
            <div>
              <h1 className="md:text-6xl text-4xl font-bold text-text-800 my-1">
                Tarang Bombale
              </h1>
              <p className="md:text-3xl text-2xl font-light text-text-600">
                Dedicated private tutor for IIT JEE Mains and Advanced students
                in Surat
              </p>
            </div>
            <div>
              <Link href="#Demo">
                <button className="mt-6 bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md">
                  Demo
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 w-full ">
            <div className="relative w-full h-[200px] md:h-[500px] lg:h-[600px]">
              <Image src={educator} fill alt="Educator" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
