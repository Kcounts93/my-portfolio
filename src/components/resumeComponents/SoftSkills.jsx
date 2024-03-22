import React from "react";
import {
  MdGroups,
  MdOutlineForum,
  MdOutlineLightbulb,
  MdAutorenew,
  MdFolderOpen,
  MdOutlineBuild,
} from "react-icons/md";

const SoftSkills = () => {
  const softSkills = [
    { skill: "Teamwork", Icon: MdGroups },
    { skill: "Communication", Icon: MdOutlineForum },
    { skill: "Adaptability", Icon: MdAutorenew },
    { skill: "Resourceful", Icon: MdOutlineLightbulb },
    { skill: "Organized", Icon: MdFolderOpen },
    { skill: "Problem Solver", Icon: MdOutlineBuild },

  ];

  return (
    <div className="rounded-xl mt-5">
      <div className="mr-1">
        <h2 className="text-xl font-light mb-5">Soft skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {softSkills.map(({ skill, Icon }) => (
            <div className="flex items-center p-2 bg-charcoal border-drap rounded-lg">
              <Icon className="icon-animation-hover text-[1em] text-drap mr-2" />
              <span className="font-medium text-md">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
