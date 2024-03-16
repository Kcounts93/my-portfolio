import React from "react";
import SoftSkills from "./resumeComponents/SoftSkills";
import HardSkills from "./resumeComponents/HardSkills";
import Experience from "./resumeComponents/Experience";
import Education from "./resumeComponents/Education";
import Certifications from "./resumeComponents/Certifications";

const Resume = () => {
  return (
    <div id="Resume">
      <div className="container mx-auto px-5 md:px-10 lg:px-20 mt-20 mb-10 flex-row">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left Side: Skills */}
          <div className="md:col-span-1">
            <div>
              <HardSkills />
            </div>
            <div>
              <SoftSkills />
            </div>
          </div>

          {/* Middle Side: Experience and Education */}
          <div className="md:col-span-1 justify-center">
            <div>
              <Experience />
            </div>
          </div>

          {/* Right Side: What Can I Do?, Design Skills, Hobbies & Interests */}
          <div className="md:col-span-1">
            {/* Software Skills */}
            <div>
              <h2 className="font-light text-2xl mb-4">Tools</h2>
              {/* SkillBar components */}
            </div>
            {/* Design Skills */}
            <div>
              <h2 className="font-light text-2xl mb-4">Design Skills</h2>
              {/* ... list of design skills ... */}
            </div>

            {/* Hobbies & Interests */}
            <div>
              <h2 className="font-light text-2xl mb-4">Hobbies & Interests</h2>
              {/* ... list of hobbies ... */}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left Side: Skills */}
          <div className="md:col-span-1">
            <Education />
          </div>
          <div className="md:col-span-1">
            <Certifications />
          </div>
          <div className="md:col-span-1"></div>
        </div>
      </div>
      <button className="primary-btn">View resume</button>
    </div>
  );
};

export default Resume;
