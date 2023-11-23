import React from "react";
import { FaCode, FaPaintBrush, FaUsers, FaBullhorn } from "react-icons/fa";

const Skills = () => {
  const softSkills = [
    { skill: "Teamwork", Icon: FaUsers },
    { skill: "Communication", Icon: FaBullhorn },
    { skill: "Adaptability", Icon: FaPaintBrush },
    { skill: "Resourceful", Icon: FaPaintBrush },
    { skill: "Organized", Icon: FaPaintBrush },
    { skill: "Problem Solver", Icon: FaCode },
  ];
  const hardSkills = [
    { skill: "React.js", Icon: FaCode },
    { skill: "Javascript", Icon: FaCode },
    { skill: "SASS", Icon: FaCode },
    { skill: "HTML/CSS", Icon: FaCode },
    { skill: "CSS Frameworks", Icon: FaCode },
    { skill: "Responsive Design", Icon: FaCode },
  ];

  return (
    <div
      name="skills"
      className="container mx-auto px-5 md:px-10 lg:px-20 mt-10 mb-5"
    >
      <div className="text-heading-section mb-5">
        <h2 className="text-4xl mb-10 font-light">Skills</h2>
      </div>
      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className=" h-full rounded-xl bg-gradient-to-br from-putty to-charcoal p-0.5 shadow-xl">
            <div className="p-4 bg-darkgrey rounded-lg">
              <h2 className="text-xl font-light mb-5">Soft Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map(({ skill, Icon }) => (
                  <div className="flex items-center p-2 bg-charcoal rounded-lg">
                    <Icon className="text-xl text-blue-500 mr-2" />
                    <span className="font-medium text-md">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-3 h-full rounded-xl bg-gradient-to-br from-putty to-charcoal p-0.5 shadow-xl">
            <div className="p-4 bg-darkgrey rounded-lg">
              <h2 className="text-xl font-light mb-5">Hard Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {hardSkills.map(({ skill, Icon }) => (
                  <div className="flex items-center p-2 bg-charcoal rounded-lg">
                    <Icon className="text-xl text-green-500 mr-2" />
                    <span className="font-medium text-md">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
