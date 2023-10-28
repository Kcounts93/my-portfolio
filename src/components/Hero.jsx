import React, { useState, useEffect } from "react";
import Triangle1 from "../assets/scroll1.svg";
import Triangle2 from "../assets/scroll2.svg";
import Triangle3 from "../assets/scroll3.svg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [currentTriangle, setCurrentTriangle] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTriangle((prevTriangle) => (prevTriangle % 3) + 1);
    }, 350); // Change the duration as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div name="home" className="w-full h-screen px-20">
      <div className="max-w-full h-full flex flex-col justify-center items-start">
        <div className="md:w-3/4 xl:w-3/4 mb-6">
          <h6 className="md:text-xl lg:text-xl mb-2 font-light">
            Hello, my name is Kayla Counts
          </h6>
          <h1 className="md:text-4xl lg:text-4xl md:leading-relaxed lg:leading-relaxed font-light">
            I specialize in crafting visually pleasing, responsive web
            applications, bringing four years of design and development
            expertise to everything I do.
          </h1>
        </div>
        <a
          href="https://www.linkedin.com/in/kaylacounts/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center mt-5 px-5 py-3 border border-putty bg-putty text-charcoal text-bold hover:bg-charcoal hover:text-putty duration-300">
            Contact me
            <span className="duration-300">
              <FaArrowRight className="ml-2" />
            </span>
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
  );
};

export default Hero;
