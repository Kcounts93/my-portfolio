import React from "react";
import { MdCode } from "react-icons/md";

const HardSkills = () => {
  const hardSkills = [
    { skill: "React" },
    { skill: "Javascript" },
    { skill: "SASS/SCSS" },
    { skill: "HTML/CSS" },
    { skill: "CSS Frameworks" },
    { skill: "Responsive" },
    { skill: "Google Cloud" },
    { skill: "Wordpress" }
  ];

  return (
    <div className="h-full rounded-xl">
      <div className="mr-1">
        <h2 className="text-2xl font-light mb-5">Hard skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {hardSkills.map(({ skill, Icon }) => (
            <div className="flex items-center px-2 py-2 bg-charcoal rounded-lg">
              <MdCode className="text-xl text-drap mr-2" />
              <span className="text-md">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardSkills;
