import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import me from "../assets/me.png";
import { FaCode, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

const About = () => {
  return (
    <div
      name="about"
      className="container mx-auto px-5 md:px-10 lg:px-20 mt-10 mb-5"
    >
      <div className="text-heading-section mb-7">
        <h2 className="text-4xl mb-5 font-light">About me</h2>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mb-6 md:mb-0"
        >
          <p className=" leading-loose font-medium text-darkputty">
            Hello! I'm Kayla Counts! I'm a dedicated and passionate front-end
            developer. I specialize in creating interactive and user-friendly
            web applications. I love exploring new technologies and bringing
            creative ideas to life in my projects. When I'm not coding, I enjoy
            longboarding with my chihuahua, snowboarding, hiking, playing
            videogames.
          </p>
          <div className="flex mt-5">
            <FaCode className="text-2xl text-blue-600 hover:text-blue-800 mr-2 cursor-pointer" />
            <FaLaptopCode className="text-2xl text-green-600 hover:text-green-800 mr-2 cursor-pointer" />
            <FaPaintBrush className="text-2xl text-[#F87217] hover:text-yellow-800 cursor-pointer" />
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            className="rounded w-40 md:w-80 opacity-90 mt-10"
            src={me}
            alt="portfolio me"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
