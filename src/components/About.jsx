import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import me from "../assets/me.png";

const About = () => {
  return (
    <div
      name="about"
      className="container mx-auto px-5 md:px-10 lg:px-20 mt-10 mb-5"
    >
      <div className="text-heading-section mb-5">
        <h2 className="text-4xl mb-5 font-light">About me</h2>
      </div>
      <div className="flex flex-wrap flex-col-reverse md:flex-row">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 mb-6 md:mb-0 px-4"
        >
          <p className="my-6 leading-loose font-medium text-darkputty">
            I grew up on the Oregon Coast, filled with memories of going to the
            beach and exploring tide pools with my family. I settled in Coeur
            d'Alene shortly after graduating high school in Spirit Lake to
            pursue a degree in criminal justice, but my empathy and creativity
            led me to graphic and web design where I was exposed to HTML, CSS
            and Javascript, which I quickly became passionate about. When I'm
            not coding or working, you'll find me playing video games, cooking
            or sharing coffee with my girlfriend. You'll also see me take part
            in the usual PNW adventures like hiking with my Chihuahua, golfing
            and snowboarding.
          </p>
        </motion.div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 lg:flex flex-col-reverse justify-center items-center px-10">
          <img
            className="rounded w-40 md:w-80 opacity-90"
            src={me}
            alt="portfolio me"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
