import React from "react";
import {
  MdCode,
  MdGroups,
  MdOutlineForum,
  MdOutlineLightbulb,
  MdAutorenew,
  MdFolderOpen,
  MdOutlineBuild,
} from "react-icons/md";

const Skills = () => {
  const softSkills = [
    { skill: "Teamwork", Icon: MdGroups },
    { skill: "Communication", Icon: MdOutlineForum },
    { skill: "Adaptability", Icon: MdAutorenew },
    { skill: "Resourceful", Icon: MdOutlineLightbulb },
    { skill: "Organized", Icon: MdFolderOpen },
    { skill: "Problem Solver", Icon: MdOutlineBuild },
  ];
  const hardSkills = [
    { skill: "React.js" },
    { skill: "Javascript" },
    { skill: "SASS" },
    { skill: "HTML/CSS" },
    { skill: "CSS Frameworks" },
    { skill: "Responsive Design" },
  ];

  return (
    <div
      id="Skills"
      className="container mx-auto px-5 md:px-10 lg:px-20 mt-10 mb-5"
    >
      <div className="text-heading-section mb-5">
        <h2 className="text-4xl mb-10 font-light">Skills</h2>
      </div>
      <div className="container py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className=" h-full rounded-xl">
            <div className="p-4 bg-darkgrey rounded-lg">
              <h2 className="text-2xl font-light mb-5">Soft skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map(({ skill, Icon }) => (
                  <div className="flex items-center p-2 bg-charcoal rounded-lg">
                    <Icon className="text-xl text-putty mr-2" />
                    <span className="font-medium text-md">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mx-3 h-full rounded-xl  p-0.5">
            <div className="p-4 bg-darkgrey rounded-lg">
              <h2 className="text-2xl font-light mb-5">Hard skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {hardSkills.map(({ skill, Icon }) => (
                  <div className="flex items-center p-2 bg-charcoal rounded-lg">
                    <MdCode className="text-xl  mr-2" />
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
