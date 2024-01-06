"use client";
import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Testimonialsdata } from "@/constants";

const Testimonialcard = ({ Name, description }) => {
  return (
    <>
      <div className="  p-6 rounded-md shadow-md hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-lg sm:text-xl text-text-800 font-semibold mb-2 sm:mb-4 underline-offset-4 decoration-2 underline">
          {Name}
        </h3>
        <p className=" text-sm sm:text-base font-normal  text-text-600">
          {description}
        </p>
      </div>
    </>
  );
};

const Testimonials = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, control } = useForm();
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
    <>
      <section
        id="Testimonials"
        className="min-h-screen px-6 lg:px-28 py-8  w-full">
        <h1 className="md:text-4xl text-2xl font-bold text-text-800 py-2">
          Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {Testimonialsdata.map((item, index) => {
            return <Testimonialcard key={index} {...item} />;
          })}
        </div>
        <div className="bg-background-200/80 z-30 backdrop-blur-[8px] hover:scale-[1.01] transition-all duration-300 ease-in-out  shadow-md rounded-xl flex justify-center items-center mt-12 px-4 sm:px-16 h-[23rem]  sm:w-[50%]  w-[99%]">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)} className="  my-4 w-full">
            <h1 className="text-text-800 text-2xl font-bold py-4">
              Your Testimonial
            </h1>
            <div className="mb-6">
              <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="name"
                    className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                )}
              />
            </div>

            <div className="mb-6">
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="description"
                    className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
                    placeholder="Enter your testimonial"
                  />
                )}
              />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-text-50 px-8 py-3 rounded-md">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
