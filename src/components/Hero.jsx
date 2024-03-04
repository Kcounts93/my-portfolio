import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Triangle1 from "../assets/scroll1.svg";
import Triangle2 from "../assets/scroll2.svg";
import Triangle3 from "../assets/scroll3.svg";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  const [currentTriangle, setCurrentTriangle] = useState(1);
  const textAnimation = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTriangle((prevTriangle) => (prevTriangle % 3) + 1);
    }, 350); // Change the duration as needed

    textAnimation.start({ opacity: 1, x: 0, transition: { duration: 1 } }); // Animation for text
    return () => {
      clearInterval(interval);
    };
  }, [textAnimation]);

  return (
    <div id="Home" className="section">
      <div className="container mx-auto h-screen px-10 md:px-20 lg:px-20">
        <div className="max-w-full h-full flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={textAnimation}
            className="md:w-3/4 xl:w-3/4 mb-6 text-center"
          >
            <h2 className="text-md md:text-xl lg:text-xl mb-2 font-light">
              Hello, my name is Kayla Counts
            </h2>
            <h1 className="text-xl leading-relaxed md:text-4xl lg:text-4xl md:leading-relaxed lg:leading-relaxed font-light">
              I specialize in crafting visually pleasing, responsive web
              applications, bringing a combined four years of design and
              development expertise to my work.
            </h1>
          </motion.div>
          <a
            href="#Projects"
          >
            <button className="flex rounded items-center mt-5 px-5 py-3 border border-putty bg-putty text-charcoal text-bold hover:bg-darkgrey hover:text-putty hover:border-drap hover:scale-105 active:scale-90 duration-500">
              View projects
              <FiArrowRight className="ml-2" />
            </button>
          </a>
        </div>
        <div className="flex justify-center mt-[-6rem] ">
          <div className="pointer-container">
            <div className="pointer-container-2 w-8 border rounded-full py-2 px-2">
              <div className="h-4">
                <img
                  className={`h-4 ${
                    currentTriangle === 1 ? "fade-in" : "hidden"
                  }`}
                  src={Triangle1}
                  alt="arrow down 1"
                />
              </div>
              <div className="h-4">
                <img
                  className={`h-4 ${
                    currentTriangle === 2 ? "fade-in" : "hidden"
                  }`}
                  src={Triangle2}
                  alt="arrow down 2"
                />
              </div>
              <div className="h-4">
                <img
                  className={`h-4 ${
                    currentTriangle === 3 ? "fade-in" : "hidden"
                  }`}
                  src={Triangle3}
                  alt="arrow down 3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
