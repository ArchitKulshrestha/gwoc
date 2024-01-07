"use client";
import { educator } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section
        id="Home"
        className="mt-[70px]   min-h-screen px-6 lg:px-28 pt-8 pb-1 flex justify-center  w-full">
        <div className="flex md:flex-row flex-col gap-x-12 gap-y-20  mt-4 md:mt-12">
          <motion.div
            className="md:w-1/2 w-full"
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1, x: 0 }}>
            <div>
              <h1 className="md:text-6xl text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 py-2 my-1 ">
                Tarang Bombale
              </h1>
              <p className="md:text-3xl text-2xl font-light text-text-700 mt-3">
                Dedicated private tutor for IIT JEE Mains and Advanced students
                in Surat
              </p>
            </div>
            <div>
              <Link href="#Demo">
                <button className="mt-6 bg-primary-600 hover:bg-primary-700 text-text-50 px-8 py-3 rounded-md">
                  Demo
                </button>
              </Link>
            </div>
          </motion.div>

          <div className="md:w-1/2 w-full ">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[200px] md:h-[500px] lg:h-[600px]">
              <Image
                className="drop-shadow-md"
                src={educator}
                fill
                alt="Educator"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
