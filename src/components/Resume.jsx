import React from "react";
import SoftSkills from "./resumeComponents/SoftSkills";
import HardSkills from "./resumeComponents/HardSkills";
import Experience from "./resumeComponents/Experience";
import Education from "./resumeComponents/Education";
import Certifications from "./resumeComponents/Certifications";
import Tools from "./resumeComponents/Tools";

const Resume = () => {
  return (
    <div id="Resume" className="container mx-auto mb-10 mt-10 md:mt-20 px-5 md:px-10 md:mb-20 lg:px-20">
      <h2 className="text-4xl mb-10 font-light mx-0">Resume</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {/* Skills, Experience, Tools/Design Skills/Hobbies in the first 3-column grid */}
        <div className="flex flex-col md:order-1">
          <Tools /> 
          <HardSkills />
          <SoftSkills />
        </div>
        <div className="md:order-2 p-0 md:pl-5">
          <Experience />
        </div>
        
        {/* Tools, Design Skills, Hobbies */}
        {/* Ensure it appears below Experience and above Education and Certifications on mobile */}
        <div className="md:order-3 p-0 md:pl-5">
          <Education />
          <Certifications />
        </div>
        
      </div>
      {/* <button className="primary-btn">View resume</button> */}
    </div>
  );
};

export default Resume;
