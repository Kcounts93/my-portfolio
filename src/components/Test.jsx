import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPencilRuler, FaLightbulb } from "react-icons/fa";
import me from "../assets/me.png";

const Test = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 my-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="text-lg">
          Front-End Developer with a Passion for Creative Solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-md mb-4">
            Hello! I'm Kayla Counts, a dedicated and passionate front-end
            developer. I specialize in creating interactive and user-friendly
            web applications. I love exploring new technologies and bringing
            creative ideas to life in my projects. When I'm not coding, I enjoy
            snowboarding, playing videogames, cooking and sharing coffee with my
            girlfriend. I grew up on the Oregon Coast, filled with memories of
            going to the beach and exploring tide pools with my family. I
            settled in Coeur d'Alene shortly after graduating high school in
            Spirit Lake to pursue a degree in criminal justice, but my empathy
            and creativity led me to graphic and web design where I was exposed
            to HTML, CSS and Javascript, which I quickly became passionate
            about. When I'm not coding or working, you'll find me playing video
            games, cooking or sharing coffee with my girlfriend. You'll also see
            me take part in the usual PNW adventures like hiking with my
            Chihuahua, golfing and snowboarding.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* Replace with your skills */}
            <div className="flex items-center gap-2">
              <FaCode className="text-xl text-blue-500" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPencilRuler className="text-xl text-green-500" />
              <span>CSS/Design</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLightbulb className="text-xl text-yellow-500" />
              <span>Creative Thinking</span>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={me}
            alt="Your Name"
            className="rounded shadow-lg w-40 md:w-60"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Test;
