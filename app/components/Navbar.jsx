"use client";
import Image from "next/image";
import { useState } from "react";
import { NavLinks } from "@/constants";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed px-6 lg:px-20 z-50 backdrop-blur-[2px]   bg-background-100/60 w-full h-[70px] flex justify-between items-center border-b-2 border-background-100 shadow-md">
      <Link href={"/"} className="text-text-700 text-xl font-bold uppercase ">
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}>
          Tarang &nbsp;
          <span className="md:inline-block p-0 hidden">Bombale</span>
        </motion.p>
      </Link>
      <ul className="hidden lg:flex h-full flex-row gap-4 items-center">
        {NavLinks.map((link) => (
          <li
            className=" hover:scale-105 text-text-700 hover:text-text-800"
            key={link.id}
            id={link.id}>
            <Link
              className="text-base font-normal uppercase hover:font-semibold transition-all duration-200 ease-in-out"
              href={`#${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="flex md:hidden text-text-700 text-2xl"
        onClick={() => setShowMenu((prev) => !prev)}>
        {showMenu ? <HiMenuAlt1 /> : <IoMdClose />}
      </div>
      {showMenu && (
        <div className="absolute top-[70px] left-0 w-full backdrop-blur-[2px]  bg-background-50/80  flex flex-col p-5 items-center md:hidden z-50">
          <ul className="flex flex-col gap-8 items-center">
            {NavLinks.map((link) => (
              <li
                className=" hover:scale-105 text-text-700 hover:text-text-800"
                key={link.id}
                id={link.id}>
                <Link
                  className="text-base font-normal uppercase hover:font-semibold transition-all duration-200 ease-in-out"
                  href={`#${link.id}`}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
