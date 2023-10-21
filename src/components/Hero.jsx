import React from "react";
import Triangle1 from "../assets/scroll1.svg";
import Triangle2 from "../assets/scroll2.svg";
import Triangle3 from "../assets/scroll3.svg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div name="home" className="w-full h-screen px-20">
      <div className="max-w-full h-full flex flex-col justify-center items-start">
        <div className="md:w-3/4 xl:w-3/4 mb-6">
          <h6 className="text-2xl mb-2 font-light">
            Hello, my name is Kayla Counts
          </h6>
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-light">
            I specialize in crafting visually captivating, responsive web
            applications, bringing four years of design and development
            expertise to everything I do.
          </h1>
        </div>
        <a
          href="https://www.linkedin.com/in/kaylacounts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center mt-5 px-5 py-3 border border-putty bg-putty text-charcoal font-bold hover:bg-charcoal hover duration-300">
            Contact me
            <span className="duration-300">
              <FaArrowRight className="ml-2" />
            </span>
          </button>
        </a>
      </div>
      <div className="flex flex-col mt-[-6rem]">
        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeInOut}
          className="h-4"
          src={Triangle1}
          alt="arrow down 1"
        />
        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeInOut}
          className="h-4"
          src={Triangle2}
          alt="arrow down 2"
        />
        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeInOut}
          className="h-4"
          src={Triangle3}
          alt="arrow down 3"
        />
      </div>
    </div>
  );
};

export default Hero;
