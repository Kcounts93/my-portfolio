import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import me from "../assets/me.png";
// import hiking from "../assets/hiking.png";
// import illustration1 from "../assets/dev.png";
// import illustration2 from "../assets/dev2.png";

// const images = [
//   { id: "1", src: me, alt: "Description of Image 1" },
//   { id: "2", src: illustration1, alt: "Description of Image 2" },
//   { id: "3", src: illustration2, alt: "Description of Image 3" },
//   { id: "4", src: hiking, alt: "Description of Image 3" },
// ];

const About = () => {
  return (
    <div id='About' className='section'>
      <div className='container mx-auto mb-10 mt-10 md:mt-20 px-5 md:px-10 md:mb-20 lg:px-20 flex-row'>
        <div className='flex flex-wrap md:flex-row items-center h-auto'>
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full lg:w-1/2 flex flex-col justify-between mb-6 md:mb-0'
          >
            <div className='text-heading-section mb-7'>
              <h2 className='text-4xl mb-5 font-light'>About</h2>
            </div>
            <p className='leading-loose font-medium text-darkputty'>
              Hello, I'm Kayla Counts, a front-end developer with a passion for
              learning and building. I take pride in my ability to bring
              creative ideas to life through coding.
              <br />
              <br />
              Outside of work, I lead an active lifestyle. I enjoy longboarding
              and I'm always up for a good hike to connect with nature. When
              winter comes around, you'll find me hitting the slopes on my
              snowboard. My chihuahua comes with me on all my adventures. Speed
              isn't her biggest strength so she hitches a ride in a backpack.
              <br />
              <br />
              Additionally, I love video games in my downtime. I love exploring
              virtual worlds, my current favorites include Starfield, Stardew
              Valley, and Call of Duty.
            </p>
            <div className='mt-10'>
              <a
                href='https://www.linkedin.com/in/kaylacounts/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button class='shadow-lg group relative inline-flex items-center justify-start overflow-hidden rounded-md bg-charcoal py-3 pl-6 pr-16 font-medium text-putty transition-all duration-150 ease-in-out hover:pl-16 hover:pr-6 border border-drap md:border-none'>
                  {/* bg 2 */}
                  <span class='absolute bottom-0 left-0 h-0.5 w-full bg-darkgrey md:border md:border-drap rounded-md transition-all duration-300 ease-in-out group-hover:h-full'></span>
                  <span class='absolute right-0 pr-7 duration-300 ease-out group-hover:translate-x-12'>
                    <FiArrowRight class='h-4 w-4 text-putty' />
                  </span>
                  <span class='absolute left-0 -translate-x-12 pl-7 duration-200 ease-out group-hover:translate-x-0'>
                    <FiArrowRight class='h-4 w-4 text-putty' />
                  </span>
                  <span class='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-putty'>
                    Connect with me
                  </span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className='w-full lg:w-1/2 flex flex-col justify-center items-center mt-10 md:mt-0'>
            <img
              src={me}
              alt='me'
              className='w-full md:w-[65%] h-auto rounded-md opacity-75'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
