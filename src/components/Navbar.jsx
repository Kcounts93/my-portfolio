import React, { useState } from "react";
import Logo from "../assets/KC.svg";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Projects", "About", "Skills", "Contact"];

const SocialLinks = () => (
  <ul className="flex">
    <li className="">
      <a
        href="https://www.linkedin.com/in/kaylacounts/"
        target="_blank"
        rel="noopener noreferrer"
        title="View my LinkedIn"
      >
        <FiLinkedin className="text-2xl transition-transform hover:scale-125 duration-300" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/Kcounts93"
        target="_blank"
        rel="noopener noreferrer"
        title="View my GitHub"
      >
        <FiGithub className="text-2xl transition-transform hover:scale-125 duration-300" />
      </a>
    </li>
    {/* <li>
    <a href="https://github.com/Kcounts93" target="_blank" rel="noopener noreferrer" title="View my resume">
    <FiFileText className="text-2xl transition-transform hover:scale-150 duration-300" />
  </a>
    </li> */}
  </ul>
);

const NavLink = ({ link }) => (
  <li className="text-lg transition-transform hover:-translate-y-1 hover:scale-125 hover:text-drap duration-300">
    <a href={`#${link}`}>{link}</a>
  </li>
);

const MobileMenu = ({ navVariants, isMobileMenuOpen, toggleNav }) => (
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        className="fixed top-0 right-0 w-full md:w-1/4 h-full flex flex-col items-center justify-center bg-charcoal"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navVariants}
      >
        <ul className="text-4xl py-4 text-center font-medium">
          {navLinks.map((link) => (
            <motion.li key={link} className="my-5">
              <a href={`#${link}`} onClick={toggleNav}>
                {link}
              </a>
            </motion.li>
          ))}
        </ul>
        <SocialLinks />
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleNav = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-10 w-full"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
    >
      <div className="container my-5 max-w-xxx mx-auto px-10 md:px-10 lg:px-20">
        <div className="flex justify-between items-center py-3 px-3 bg-charcoal backdrop-filter backdrop-blur-md bg-opacity-40 rounded-xl">
          <img src={Logo} alt="Logo" className="ml-2" />
          <div onClick={toggleNav} className="md:hidden z-10 text-2xl">
            {isMobileMenuOpen ? (
              <FiX className="transition-transform hover:rotate-180 hover:scale-125 text-drap duration-300" />
            ) : (
              <FiMenu />
            )}
          </div>
          <MobileMenu
            navVariants={navVariants}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleNav={toggleNav}
          />
          <ul className="hidden md:flex ml-20">
            {navLinks.map((link) => (
              <NavLink key={link} link={link} />
            ))}
          </ul>
          <div className="hidden md:flex">
            <SocialLinks />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
