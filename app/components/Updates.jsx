import Link from "next/link";
import React from "react";
import { Notifications } from "./Notifications";
import ContactForm from "./ContactForm";
const Updates = () => {
  return (
    <section className="  min-h-screen px-6 lg:px-28 py-8  w-full" id="Updates">
      <h1 className="md:text-4xl text-2xl font-bold text-text-800 pb-2">
        Updates
      </h1>
      <div className="flex md:flex-row flex-col gap-x-12 gap-y-16  mt-4 md:mt-12">
        <div className="md:w-1/2 w-full flex flex-col gap-3">
          <Notifications />
          <Link
            target="_blank"
            className="hover:text-text-400 text-text-600 md:text-lg text-base"
            href="mailto:tarangbombale01@gmail.com">
            Email- www.gamil.com
          </Link>

          <Link
            className="hover:text-text-400 md:text-lg text-base text-text-600 "
            href="tel:+91-766663804"
            target="_blank">
            Phone- 766663804
          </Link>
        </div>
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Updates;
