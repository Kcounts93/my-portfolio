import React, { useState } from "react";
import Logo from "../assets/KC.svg";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] px-20 flex justify-between items-center bg-charcoal text-putty font-normal">
      <div>
        <img src={Logo} alt="my logo" />
      </div>
      {/* Menu */}

      <ul className="hidden md:flex">
        <li className="text-xl">Home</li>
        <li className="text-xl">Projects</li>
        <li className="text-xl">Skills</li>
        <li className="text-xl">Experience</li>
        <li className="text-xl">Contact</li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 text-[2rem]">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-25 flex flex-row justify-end mt-5 px-5 ml-10 bg-charcoal"
        }
      >
        <div className="flex flex-col mt-5">
          <ul>
            <li className="py-4 text-3xl">Home</li>
            <li className="py-4 text-3xl">Projects</li>
            <li className="py-4 text-3xl">Skills</li>
            <li className="py-4 text-3xl">Experience</li>
            <li className="py-4 text-3xl">Contact</li>
          </ul>
          <ul className="flex">
            <li className="py-2">
              <a href="https://www.linkedin.com/in/kaylacounts/" target="blank">
                <FaLinkedinIn className="text-[2rem]" />
              </a>
            </li>
            <li className="py-2">
              <a href="https://github.com/Kcounts93" target="blank">
                <FaGithub className="text-[2rem]" />
              </a>
            </li>
            <li className="py-2">
              <a href="https://www.instagram.com/kaylaranae.psd/">
                <FaInstagram className="text-[2rem]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[50%] right-0 pr-5">
        <ul>
          <li className="py-2">
            <a href="https://www.linkedin.com/in/kaylacounts/" target="blank">
              <FaLinkedinIn className="text-[2rem]" />
            </a>
          </li>
          <li className="py-2">
            <a href="https://github.com/Kcounts93" target="blank">
              <FaGithub className="text-[2rem]" />
            </a>
          </li>
          <li className="py-2">
            <a href="https://www.instagram.com/kaylaranae.psd/">
              <FaInstagram className="text-[2rem]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
