import React from "react";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaJs,
  FaCss3Alt,
  FaBootstrap,
  FaCloud,
} from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { DiMongodb } from "react-icons/di";
import { SiGreensock } from "react-icons/si";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div className="w-full my-20">
      <div>
        <Marquee direction="right" speed={90} delay={5}>
          <div className="image_wrapper">
            <FaReact className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <FaHtml5 className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <FaNodeJs className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <FaJs className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <FaCss3Alt className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <FaBootstrap className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <FaCloud className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <DiMongodb className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <SiGreensock className="text-putty text-6xl" />
          </div>
          <div className="image_wrapper">
            <FiFramer className="text-putty text-6xl" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LogoMarquee;
