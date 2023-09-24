import React from "react";
import Triangle1 from "../assets/scroll1.svg";
import Triangle2 from "../assets/scroll2.svg";
import Triangle3 from "../assets/scroll3.svg";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen hero-pattern px-20">
      {/* container */}
      <div className="max-width-[100%] h-full flex flex-col justify-center items-start">
        <div className="md:w-[75%] xl:w-[75%] mb-6">
          <h6 className="text-xl font-regular mb-2">
            Hello, my name is Kayla Counts
          </h6>
          <h1 className="sm:text-[2.2rem] md:text-[3rem] leading-normal text-putty font-light">
            I specialize in crafting visually captivating, responsive web
            applications, bringing four years of design and development
            expertise to everything I do.
          </h1>
        </div>
        <a href="https://www.linkedin.com/in/kaylacounts/" target="blank">
          <button className=" flex justify-center items-center mt-5 bg-putty px-5 py-3 text-charcoal text-bold hover:button-hover">
            Contact me <FaArrowRight className="ml-2" />
          </button>
        </a>
      </div>
      <div className="flex flex-col mt-[-6rem]">
        <img className="h-[1rem]" src={Triangle1} alt="arrow down 1" />
        <img className="h-[1rem]" src={Triangle2} alt="arrow down 2" />
        <img className="h-[1rem]" src={Triangle3} alt="arrow down 3" />
      </div>
    </div>
  );
};

export default Hero;
