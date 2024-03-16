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
      "Acquired practical skills in digital design, web development, and multimedia communication.",
  },
];

const Education = () => {
  return (
    <div className="h-full rounded-xl">
      <h2 className="text-2xl font-light mb-5">Education</h2>
      <div className="flex flex-col items-center">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start w-full mb-8 rounded-lg bg-charcoal backdrop-filter backdrop-blur-sm bg-opacity-40 pl-4 py-2">
            <div className="flex flex-col items-start mr-4">
              <LuGraduationCap className="text-xl text-drap mt-1 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg">{edu.school}</h3>
              <p className="text-darkputty font-medium">{edu.degree}</p>
              <p className="text-gray-400">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
