import React from "react";
import SoftSkills from "./resumeComponents/SoftSkills";
import HardSkills from "./resumeComponents/HardSkills";
import Experience from "./resumeComponents/Experience";
import Education from "./resumeComponents/Education";
import Certifications from "./resumeComponents/Certifications";
import Tools from "./resumeComponents/Tools";
import Hobbies from "./resumeComponents/Hobbies";
import DesignSkills from "./resumeComponents/DesignSkills";

const Resume = () => {
  return (
    <div id="Resume" className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10">
      <h2 className="text-4xl mb-10 font-light">Resume</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {/* Skills, Experience, Tools/Design Skills/Hobbies in the first 3-column grid */}
        <div className="flex flex-col md:order-1">
          <HardSkills />
          <SoftSkills />
        </div>
        <div className="md:order-2 p-0 md:pl-5">
          <Experience />
        </div>
        
        {/* Tools, Design Skills, Hobbies */}
        {/* Ensure it appears below Experience and above Education and Certifications on mobile */}
        <div className="md:order-3 order-4 p-0 md:pl-5">
          <Tools />
          <DesignSkills />
          {/* Design Skills and Hobbies sections */}
        </div>
        
        {/* Education and Certifications with adjusted order for mobile view */}
        <div className="md:order-4 order-2">
          <Education />
        </div>
        <div className="p-0 md:order-5 order-3 md:pl-5">
          <Certifications />
        </div>
        <div className="md:order-6 order-8 p-0 md:pl-5">
          <Hobbies />
        </div>
      </div>
      {/* <button className="primary-btn">View resume</button> */}
    </div>
  );
};

export default Resume;
