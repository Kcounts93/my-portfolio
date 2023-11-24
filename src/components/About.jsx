import React from "react";
import { motion } from "framer-motion";

import me from "../assets/me.png";
import { MdOutlineArrowForward } from "react-icons/md";

const About = () => {
  return (
    <div id="About" className="section">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10 flex-row">
        <div className="text-heading-section mb-7">
          <h2 className="text-4xl mb-5 font-light">About</h2>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mb-6 md:mb-0"
          >
            <p className="leading-loose font-medium text-darkputty">
              Hello! I'm Kayla Counts! I'm a dedicated and passionate front-end
              developer. I specialize in creating interactive and user-friendly
              web applications. I love exploring new technologies and bringing
              creative ideas to life in my projects. When I'm not coding, I
              enjoy longboarding with my chihuahua, snowboarding, hiking,
              playing videogames.
            </p>
            <div className="flex mt-5">
              <a
                href="https://www.linkedin.com/in/kaylacounts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex rounded items-center mt-5 px-5 py-3 border border-putty text-putty text-bold hover:bg-darkgrey hover:text-putty hover:border-drap hover:scale-105 active:scale-90 duration-500">
                  Connect with me
                  <span className="duration-300">
                    <MdOutlineArrowForward className="ml-2" />
                  </span>
                </button>
              </a>
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
    </div>
  );
};
export default About;
