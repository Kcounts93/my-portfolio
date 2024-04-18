import React, { useState } from "react";
import Logo from "../assets/KC.svg";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Projects", "About", "Resume", "Contact"];

const SocialLinks = () => (
  <ul className='flex'>
    <li className=''>
      <a
        href='https://www.linkedin.com/in/kaylacounts/'
        target='_blank'
        rel='noopener noreferrer'
        title='View my LinkedIn'
      >
        <FiLinkedin className='text-xl transition-transform hover:scale-125 duration-300' />
      </a>
    </li>
    <li>
      <a
        href='https://github.com/Kcounts93'
        target='_blank'
        rel='noopener noreferrer'
        title='View my GitHub'
      >
        <FiGithub className='text-xl transition-transform hover:scale-125 duration-300' />
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
  <li className='text-md font-light transition-transform hover:-translate-y-1  duration-300'>
    <a href={`#${link}`}>{link}</a>
  </li>
);

const MobileMenu = ({ navVariants, isMobileMenuOpen, toggleNav }) => (
  <AnimatePresence>
    {isMobileMenuOpen && (
      <motion.div
        className='fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-charcoal z-50'
        initial='hidden'
        animate='visible'
        exit='hidden'
        variants={navVariants}
      >
        <button
          onClick={toggleNav}
          className='absolute top-0 right-0 mt-4 mr-4 text-2xl z-50 ml-3'
        >
          <FiX className='text-white transition-transform hover:rotate-180 hover:scale-125 duration-300' />
        </button>
        <ul className='text-4xl py-4 text-center font-medium'>
          {navLinks.map((link) => (
            <motion.li key={link} className='my-5'>
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
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "ease-in-out", stiffness: 100 },
    },
  };

  return (
    <motion.div
      className='fixed top-0 left-0 z-10 w-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='container mx-auto px-5 md:px-10 lg:px-20 mt-5'>
        <div className='flex justify-between items-center py-3 px-5 md:px-2 bg-charcoal backdrop-filter backdrop-blur-lg bg-opacity-40 rounded-md'>
          <img src={Logo} alt='Logo' className='ml-2' />
          <div className='md:hidden z-30 text-2xl ml-5'>
            <button onClick={toggleNav}>
              {isMobileMenuOpen ? (
                <FiX className='transition-transform hover:rotate-180 hover:scale-125 duration-300' />
              ) : (
                <FiMenu className='text-white' />
              )}
            </button>
          </div>
          <ul className='hidden md:flex md:ml-20'>
            {navLinks.map((link) => (
              <NavLink key={link} link={link} />
            ))}
          </ul>
          <div className='hidden md:flex'>
            <SocialLinks />
          </div>
        </div>
        {isMobileMenuOpen && (
          <MobileMenu
            navVariants={navVariants}
            isMobileMenuOpen={isMobileMenuOpen}
            toggleNav={toggleNav}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;
