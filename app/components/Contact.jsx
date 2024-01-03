"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { fadeIn } from "@/utils/motion";
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send("service_6p2qorf", "template_xpmjy7j", data, "hfiF5fVej3ITkNuKZ")
      .then(() => {
        alert("Message sent successfully");
        setLoading(false);

        reset();
      })
      .catch(() => {
        alert("Message failed to send");
        setLoading(false);
      });
  };
  return (
    <section className="  min-h-screen px-6 lg:px-28 py-8  w-full" id="Contact">
      <h1 className="md:text-4xl text-2xl font-bold text-text-800 pb-2">
        Contact.
      </h1>
      <div className="flex md:flex-row flex-col gap-x-12 gap-y-16  mt-4 md:mt-12">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 0.4)}
          className="md:w-1/2 w-full flex flex-col gap-3">
          <Link
            target="_blank"
            className="hover:text-text-400 text-text-600 text-xl"
            href="mailto:www.gamil.com">
            Email: www.gamil.com
          </Link>

          <Link
            className="hover:text-text-400 text-xl text-text-600 "
            href="tel:+91-6398287452"
            target="_blank">
            Phone: 6398287452
          </Link>
        </motion.div>
        <div className="md:w-1/2 w-full">
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 0.4)}
            className="bg-background-200/80 z-30 backdrop-blur-[8px]  shadow-xl rounded-xl h-[26rem]  flex items-center justify-center sm:w-[75%]  w-[99%]">
            <form
              className="px-3 sm:w-[75%]  w-[99%]"
              onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <h1 className="text-text-800 text-2xl font-bold">
                  Get in touch
                </h1>
                <input
                  className="border border-text-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                  type="text"
                  placeholder="Name"
                  {...register("name", { required: true })}
                />
                <input
                  className="border border-text-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
                <textarea
                  className="border border-text-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                  placeholder="Message"
                  {...register("message", { required: true })}
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 text-text-50 px-8 py-3 rounded-md">
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact);
