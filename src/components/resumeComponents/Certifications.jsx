import React from "react";
import { FiAward } from "react-icons/fi";

const certificates = [
  {
    school: "NuCamp Coding Bootcamp",
    degree: "Full Stack Web & Mobile Dev",
    year: "2022 - 2023",
    description:
      "Focuses on server-side programming and database integration, ensuring a well-rounded mastery of web development. Relevant coursework: Node.js, Express, MongoDB, Firebase, Cloud Firestore",
  },
  {
    school: "NuCamp Coding Bootcamp",
    degree: "Front End Web & Mobile Dev",
    year: "2022 - 2023",
    description:
      "Focuses on building engaging user interfaces responsively with modern technologies including mobile apps. Skills & Technologies developed: Bootstrap, React, React Native, Git, Redux, Google Cloud Platform",
  },
];

const Certifications = () => {
  return (
    <div className="h-full rounded-xl">
      <h2 className="text-2xl font-light mb-5">Certifications</h2>
      <div className="flex flex-col items-center">
        {certificates.map((cert, index) => (
          <div key={index} className="no-select cursor-pointer shadow-md group relative flex items-start w-full mb-7 rounded-lg bg-charcoal px-2 py-3 overflow-hidden">
            <div className="flex flex-col items-start mr-4">
              <FiAward className="text-xl text-drap mt-2 text-blue-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-md font-medium">{cert.school}</h3>
              <p className="text-darkputty">{cert.degree}</p>
              <p className="text-darkputty">{cert.year}</p>
            </div>
            <div className="absolute left-0 right-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-charcoal p-2 rounded-b-lg">
              <p className="text-sm text-putty">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
