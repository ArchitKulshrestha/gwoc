"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
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
    <div className="bg-gradient-to-tl from-[#dfd8f3] to-[#c0b2e6]/80 z-30 backdrop-blur-[8px] hover:scale-[1.01] transition-all duration-300 ease-in-out  shadow-md rounded-xl h-[26rem]  flex items-center justify-center sm:w-[75%]  w-[99%]">
      <form
        className="px-3 sm:w-[75%]  w-[99%] "
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <h1 className="text-text-800 text-2xl font-bold">Contact Me</h1>
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
    </div>
  );
};

export default ContactForm;
