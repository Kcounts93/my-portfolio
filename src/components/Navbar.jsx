import React, { useState } from "react";
import Logo from "../assets/KC.svg";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Define navLinks array
const navLinks = ["Home", "Projects", "About", "Skills", "Contact"];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  // Function to close the nav menu
  const closeNav = () => setNav(false);

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

  return (
    <motion.div
      className="fixed z-10 w-full h-50 bg-darkgrey shadow-xl"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div className="container mx-auto flex justify-between items-center px-5 lg:px-20 ">
        <div>
          <img src={Logo} alt="my logo" />
        </div>
        {/* Hamburger */}
        <div onClick={toggleNav} className="md:hidden z-10 text-2xl">
          {nav ? (
            <FiX className="transition-transform hover:rotate-180 hover:scale-125 text-drap duration-300" />
          ) : (
            <FiMenu />
          )}
        </div>
        <AnimatePresence>
          {nav && (
            // mobile
            <motion.div
              className="fixed top-0 right-0 w-full md:w-1/4 h-full flex flex-col items-center justify-center bg-charcoal"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={navVariants}
            >
              <ul className="text-4xl py-4 text-center font-medium">
                {navLinks.map((link) => (
                  <motion.li
                    key={link}
                    className="text-md transition-transform my-5 hover:-translate-y-1 hover:scale-125 duration-300"
                  >
                    <a href={`#${link}`} onClick={closeNav}>
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
              {/* Social Media Links */}
              <ul className="flex">
                <li>
                  <a
                    href="https://www.linkedin.com/in/kaylacounts/"
                    target="blank"
                  >
                    <FiLinkedin className="text-2xl transition-transform hover:scale-150 duration-300" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Kcounts93" target="blank">
                    <FiGithub className="text-2xl transition-transform hover:scale-150 duration-300" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kaylaranae.psd/">
                    <FiInstagram className="text-2xl transition-transform hover:scale-150 duration-300" />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Non Mobile Menu */}
        <ul className="hidden md:flex">
          {navLinks.map((link) => (
            <li
              key={link}
              className="text-md transition-transform hover:-translate-y-1 hover:scale-125 duration-300"
            >
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
