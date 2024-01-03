"use client";
import React from "react";
import { AchievementCard } from "./AchievementCard";
import { Achievements } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/utils/motion";
const Achievement = () => {
  return (
    <section
      className="px-6 lg:px-28 min-h-screen flex justify-center items-center py-8"
      id="Achievements">
      <div>
        <motion.h1
          variants={textVariant(0.1)}
          className="md:text-4xl text-2xl font-bold text-text-800 my-8 ">
          Achievements.
        </motion.h1>
        <motion.div
          variants={fadeIn("right", "spring", 0.4, 0.5)}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Achievements.map((achievement, index) => (
            <AchievementCard key={index} index={index} {...achievement} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(Achievement);
