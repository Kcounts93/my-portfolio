import React from "react";
import { motion } from "framer-motion";
import me from "../assets/me.png";

const About = () => {
  return (
    <div name="about" className="w-full px-5 lg:px-20 mt-10 mb-10">
      <div className="text-heading-section mb-10">
        <h2 className="text-4xl mb-2 font-medium">About me</h2>
      </div>
      <div className="flex flex-wrap">
        {/* Left Section - about */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-3/5 mb-6 md:mb-0"
        >
          <p className="mb-6 leading-loose">
            I grew up on the Oregon Coast, filled with memories of going to the
            beach and exploring tide pools with my family. I settled in Coeur
            d'Alene shortly after graduating high school in Spirit Lake to
            pursue a degree in criminal justice, but my empathy and creativity
            led me to graphic and web design where I was exposed to HTML, CSS
            and Javascript, which I quickly became passionate about. When I'm
            not coding or working, you'll find me playing video games, cooking
            or sharing coffee with my girlfriend. You'll also see me take part
            in the usual PNW adventures hiking with my Chihuahua, golfing and
            snowboarding."
          </p>
        </motion.div>

        {/* Right Section - image */}
        <div className="w-full md:w-2/5 md:px-10">
          <img
            className="rounded w-100 opacity-90"
            src={me}
            alt="portfolio me"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
