"use client";
import React from "react";
import { Experience } from "@/constants";
// import { Workexperience } from "./Workexperience";
import { about } from "@/public/assets";
import Image from "next/image";
import Workexperience from "./Workexperience";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const About = () => {
  return (
    <>
      <section id="About" className="px-6 lg:px-28 min-h-screen  py-8 sm:py-10">
        <div className=" flex flex-col md:flex-row gap-x-8 gap-y-12">
          <motion.div
            className=" w-full md:w-1/2"
            variants={fadeIn("right", "tween", 0.2, 0.4)}>
            <h1 className="md:text-4xl text-2xl font-bold text-text-800 pb-2 py-2 sm:py-8">
              About.
            </h1>
            <motion.p
              variants={textVariant(0.3)}
              className="text-text-600 md:text-xl text-base my-2 mb-8">
              I am a dedicated private tutor for IIT JEE Mains and Advanced
              students in Surat. I have been teaching for the past 3 years and
              have helped many students achieve their goals. I am pursuing my
              degree in M.Sc Mathematics from NIT Surat.
            </motion.p>
            <Link
              className="text-text-50 bg-primary-600 py-3 px-6 rounded-md hover:bg-primary-700"
              href="https://drive.google.com/file/d/1PjwntJEPpVpSkCZJhiu5gYdt9DwuEykd/view?usp=sharing"
              target="_blank">
              Resume
            </Link>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 "
            variants={fadeIn("left", "tween", 0.2, 0.4)}>
            <Image
              className=" md:ml-16 sm:h-[300px] h-[200px]"
              src={about}
              alt="Educator"
            />
          </motion.div>
        </div>
        <Workexperience />
      </section>
    </>
  );
};
export default SectionWrapper(About);
