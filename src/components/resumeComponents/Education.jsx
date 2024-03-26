import React, { useState } from "react";
import { LuGraduationCap } from "react-icons/lu";

const education = [
  {
    school: "Western Governors University",
    degree: "B.S in Software Engineering",
    year: "2023 - Present",
    description:
      "Degree track specializing in C# development, software engineering principles, web and desktop application development, database management, and software security.",
  },

  {
    school: "North Idaho College",
    degree: "A.A.S in Graphic & Web Design",
    year: "2020 - 2022",
    description:
      "Acquired hands-on, practical skills in digital design, web development, and multimedia communication integrating visual creativity and technical proficiency through real-life client engagement.",
  },
];

const Education = () => {
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  return (
    <div className='rounded-md mt-5 md:mt-0'>
      <h2 className='text-xl font-light mb-5'>Education</h2>
      <div className='flex flex-col items-center'>
        {education.map((edu, index) => (
          <div
            key={index}
            className='cursor-pointer shadow-md group relative flex flex-col items-start w-full mb-7 rounded-md bg-charcoal px-3 py-3 overflow-hidden'
            onClick={() => handleToggleDescription(index)}
          >
            <div className='flex flex-row'>
              <div>
                <LuGraduationCap className='text-lg mt-1 text-drap' />
              </div>
              <div className='flex flex-col ml-2'>
                <h3 className='text-md font-medium'>{edu.school}</h3>
                <p className='text-darkputty'>{edu.degree}</p>
                <p className='text-darkputty'>{edu.year}</p>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    visibleDescriptionIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className='text-sm text-darkputty'>{edu.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
