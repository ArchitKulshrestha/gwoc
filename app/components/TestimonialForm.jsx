"use client";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { TestmonialData } from "./TestmonialData";

const TestimonialForm = () => {
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
    <div className="bg-background-200/80 z-30 backdrop-blur-[8px] hover:scale-[1.01] transition-all duration-300 ease-in-out  shadow-md rounded-xl flex justify-center items-center mt-16 px-4 sm:px-16 h-[23rem]  sm:w-[40%]  w-[99%]">
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="  my-4 w-full">
        <h1 className="text-text-800 text-2xl font-bold py-4 mb-2">
          Your Testimonial
        </h1>
        <div className="mb-6">
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <textarea
            {...register("description", { required: true })}
            id="description"
            className="p-2 border rounded w-full focus:outline-none focus:border-blue-500"
            placeholder="Enter your testimonial"
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
  );
};

export default TestimonialForm;
