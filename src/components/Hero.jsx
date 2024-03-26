import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Triangle1 from "../assets/scroll1.svg";
import Triangle2 from "../assets/scroll2.svg";
import Triangle3 from "../assets/scroll3.svg";
import { FiArrowRight } from "react-icons/fi";

// Custom Hook for managing the triangle animation
function useTriangleAnimation() {
  const [currentTriangle, setCurrentTriangle] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTriangle((prev) => (prev % 3) + 1);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return currentTriangle;
}

// Triangle Animation Component
const TriangleAnimation = ({ currentTriangle }) => {
  const triangles = [Triangle1, Triangle2, Triangle3];
  return (
    <div className='pointer-container-2 w-8 border rounded-full py-2 px-2'>
      {triangles.map((triangle, index) => (
        <div key={index} className='h-4'>
          <img
            className={`h-4 ${
              currentTriangle === index + 1 ? "fade-in" : "hidden"
            }`}
            src={triangle}
            alt={`arrow down ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};
// Hero Text Component
const HeroText = ({ textAnimation }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={textAnimation}
    className='w-3/4 mb-6 text-center'
  >
    <h2 className='text-sm md:text-xl lg:text-xl mb-2 font-light'>
      Hello, my name is Kayla Counts
    </h2>
    <h1 className='text-xl leading-relaxed md:text-4xl lg:text-4xl md:leading-relaxed lg:leading-relaxed font-light'>
      I specialize in crafting visually pleasing, responsive web applications,
      bringing a combined four years of design and development expertise to my
      work.
    </h1>
  </motion.div>
);

const Hero = () => {
  const textAnimation = useAnimation();
  const currentTriangle = useTriangleAnimation();

  useEffect(() => {
    textAnimation.start({ opacity: 1, x: 0, transition: { duration: 1 } });
  }, [textAnimation]);

  return (
    <div id='Home' className='section'>
      <div className='container mx-auto h-screen px-0 md:px-20'>
        <div className='max-w-full h-full flex flex-col justify-center items-center'>
          <HeroText textAnimation={textAnimation} />
          <a href='#Projects'>
            <button class='mt-2 shadow-lg group relative inline-flex items-center justify-start overflow-hidden rounded-md bg-charcoal py-3 pl-6 pr-16 font-medium text-putty transition-all duration-150 ease-in-out hover:pl-16 hover:pr-6 border border-drap md:border-none'>
              {/* bg 2 */}
              <span class='absolute bottom-0 left-0 h-0.5 w-full bg-darkgrey md:border md:border-drap rounded-md transition-all duration-300 ease-in-out group-hover:h-full'></span>
              <span class='absolute right-0 pr-7 duration-300 ease-out group-hover:translate-x-12'>
                <FiArrowRight class='h-4 w-4 text-putty' />
              </span>
              <span class='absolute left-0 -translate-x-12 pl-7 duration-200 ease-out group-hover:translate-x-0'>
                <FiArrowRight class='h-4 w-4 text-putty' />
              </span>
              <span class='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-putty'>
                View projects
              </span>
            </button>
          </a>
        </div>
        <a href='#Projects'>
          <div className='flex justify-center mt-[-6rem] '>
            <TriangleAnimation currentTriangle={currentTriangle} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
