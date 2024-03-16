import React from "react";

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
    degree: "A.A.S in Graphic/Web Design",
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
          <div key={index} className="flex items-center w-full mb-8">
            <div className="flex-1">
              <h3 className="text-xl font-medium">{edu.school}</h3>
              <p className="text-darkputty">{edu.degree}</p>
              <p className="text-gray-400">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
