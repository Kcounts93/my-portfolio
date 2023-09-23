import React, { useState } from "react";
import Logo from "../assets/KC.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-charcoal text-putty font-normal">
      <div>
        <img src={Logo} alt="my logo" />
      </div>
      {/* Menu */}
     
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-charcoal flex flex-row justify-between items-start pt-4 pl-10'}>
      <div className="flex flex-col">
      <img src={Logo} alt="my logo" />
      </div>
        <div className="flex flex-col mt-5">
        <ul>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Experience</li>
        <li className="py-6 text-4xl">Contact</li>
        </ul>
        </div>
      
      </div>
      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
