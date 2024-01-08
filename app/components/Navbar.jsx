"use client";
import Image from "next/image";
import { useState } from "react";
import { NavLinks } from "@/constants";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <motion.nav
      className="fixed px-6 lg:px-28 z-50 backdrop-blur-[8px]  bg-accent-100/40 w-full h-[70px] flex justify-between items-center shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}>
      <Link href={"/"} className="text-text-700 text-xl font-bold uppercase ">
        <p className="hover:scale-105 transition-all duration-[300ms]">
          Tarang &nbsp;
          <span className="md:inline-block p-0 hidden">Bombale</span>
        </p>
      </Link>
      <ul className="hidden lg:flex h-full flex-row gap-x-6 items-center">
        {NavLinks.map((link) => (
          <li
            className="  text-text-700 hover:text-text-800 hover:scale-105 transition-all duration-200 ease-in-out"
            key={link.title}>
            <Link
              scroll={true}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? "text-text-900 font-semibold " : ""
              } text-base font-normal uppercase hover:font-semibold transition-all duration-100 ease-in-out`}
              href={`#${link.title}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="flex md:hidden text-text-700 text-2xl cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <IoMdClose /> : <HiMenuAlt1 />}
      </button>
      {showMenu && (
        <div className="absolute top-[70px] left-0 w-full  backdrop-blur bg-gradient-to-r from-[#efecf9]/90 to-[#e6f3fe]/90  flex flex-col h-screen p-5 items-center md:hidden z-50">
          <ul className="flex flex-col gap-8 items-center">
            {NavLinks.map((link) => (
              <li
                onClick={() => {
                  setActive(link.title), setShowMenu(false);
                }}
                className=" hover:scale-105 text-text-700 hover:text-text-800 transition-all duration-200 "
                key={link.title}>
                <Link
                  scroll={true}
                  className={`${
                    active === link.title ? "text-text-900 font-semibold" : ""
                  } text-base font-normal uppercase hover:font-semibold transition-all duration-200 ease-in-out`}
                  href={`#${link.title}`}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
