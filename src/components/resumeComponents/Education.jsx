import React from "react";
import { LuGraduationCap } from "react-icons/lu";

const education = [
  {
    school: "Western Governors University",
    degree: "Bachelors Science in Software Engineering",
    year: "2023 - Present",
    description:
      "Degree track specializing in C# development, software engineering principles, web and desktop application development, database management, and software security.",
  },

  {
    school: "North Idaho College",
    degree: "A.A.S in Graphic and Web Design",
    year: "2020 - 2022",
    description:
      "Acquired hands-on, practical skills in digital design, web development, and multimedia communication integrating visual creativity and technical proficiency through real-life client engagement.",
  },
];

const Education = () => {
  return (
    <div className="rounded-xl">
      <h2 className="text-xl font-light mb-5">Education</h2>
      <div className="flex flex-col items-center">
        {education.map((edu, index) => (
          <div key={index} className="no-select cursor-pointer group relative flex items-start w-full mb-7 rounded-lg  bg-charcoal px-2 py-4 overflow-hidden">
            <div className="flex flex-col items-start mr-4">
              <LuGraduationCap className="text-lg text-drap mt-1 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-md">{edu.school}</h3>
              <p className="text-darkputty font-medium">{edu.degree}</p>
              <p className="text-gray-400">{edu.year}</p>
            </div>
            <div className="absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-charcoal p-2 rounded-b-lg">
              <p className="text-sm text-gray-200">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
