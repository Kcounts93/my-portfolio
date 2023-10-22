import React, { useState } from "react";
import Logo from "../assets/KC.svg";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  const navVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const listItemVariants = {
    hover: {
      scale: 1.1,
      // Change to your desired color
    },
    rest: {
      scale: 1,
    },
  };

  return (
    <motion.div
      className="fixed z-10 w-full h-20 px-5 lg:px-20 flex justify-between items-center bg-darkgrey text-putty font-normal"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div>
        <img src={Logo} alt="my logo" />
      </div>
      {/* Hamburger */}
      <div onClick={toggleNav} className="md:hidden z-10 text-2xl">
        {nav ? (
          <FaTimes className="transition-transform hover:rotate-180 hover:scale-125 duration-300" />
        ) : (
          <FaBars />
        )}
      </div>
      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed top-0 right-0 w-full md:w-1/4 h-full flex flex-col items-center justify-center bg-charcoal"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
          >
            <ul className="text-5xl py-4 text-center">
              <motion.li
                className="mb-4"
                variants={listItemVariants}
                whileHover="hover"
                whileTap="hover"
              >
                Home
              </motion.li>
              <motion.li
                className="mb-4"
                variants={listItemVariants}
                whileHover="hover"
                whileTap="hover"
              >
                Projects
              </motion.li>
              <motion.li
                className="mb-4"
                variants={listItemVariants}
                whileHover="hover"
                whileTap="hover"
              >
                Skills
              </motion.li>
              <motion.li
                className="mb-4"
                variants={listItemVariants}
                whileHover="hover"
                whileTap="hover"
              >
                Experience
              </motion.li>
              <motion.li
                className="mb-4"
                variants={listItemVariants}
                whileHover="hover"
                whileTap="hover"
              >
                Contact
              </motion.li>
            </ul>
            <ul className="flex">
              <li>
                <a
                  href="https://www.linkedin.com/in/kaylacounts/"
                  target="blank"
                >
                  <FaLinkedinIn className="text-2xl transition-transform hover:scale-150 duration-300" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Kcounts93" target="blank">
                  <FaGithub className="text-2xl transition-transform hover:scale-150 duration-300" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kaylaranae.psd/">
                  <FaInstagram className="text-2xl transition-transform hover:scale-150 duration-300" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="hidden md:flex">
        <li className="text-xl transition-transform hover:-translate-y-1 hover:scale-125 duration-300">
          Home
        </li>
        <li className="text-xl transition-transform hover:-translate-y-1 hover:scale-125 duration-300">
          Projects
        </li>
        <li className="text-xl transition-transform hover:-translate-y-1 hover:scale-125 duration-300">
          Skills
        </li>
        <li className="text-xl transition-transform hover:-translate-y-1 hover:scale-125 duration-300">
          Experience
        </li>
        <li className="text-xl transition-transform hover:-translate-y-1 hover:scale-125 duration-300">
          Contact
        </li>
      </ul>
    </motion.div>
  );
};

export default Navbar;
