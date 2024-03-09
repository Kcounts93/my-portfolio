import React from "react";
import { motion } from "framer-motion";
import { MdOutlineArrowForward } from "react-icons/md";
import BentoGrid from "./BentoGrid";
import hiking from '../assets/hiking.png';
import me from '../assets/me.png';
import illustration1 from '../assets/dev.png';
import illustration2 from '../assets/dev2.png';


const images = [
  { id: '1', src: me, alt: 'Description of Image 1' },
  { id: '2', src: illustration1, alt: 'Description of Image 2' },
  { id: '3', src: illustration2, alt: 'Description of Image 3' },
  { id: '4', src: hiking, alt: 'Description of Image 3' }
];

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
            <div className="flex mt-5">
              <a
                href="https://www.linkedin.com/in/kaylacounts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="primary-btn">
                  Connect with me
                  <span className="duration-300">
                    <MdOutlineArrowForward className="ml-2" />
                  </span>
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <BentoGrid images={images}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
