import React, { useState } from "react";
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
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  return (
    <div className='rounded-xl'>
      <h2 className='text-xl font-light mb-5'>Certifications</h2>
      <div className='flex flex-col items-center'>
        {certificates.map((cert, index) => (
          <div
            key={index}
            className='cursor-pointer shadow-md group relative flex flex-col items-start w-full mb-7 rounded-md bg-charcoal px-3 py-3 overflow-hidden'
            onClick={() => handleToggleDescription(index)}
          >
            <div className='flex flex-row'>
              <div>
                <FiAward className='text-lg mt-1 text-drap' />
              </div>
              <div className='flex flex-col ml-2'>
                <h3 className='text-md font-medium'>{cert.school}</h3>
                <p className='text-darkputty'>{cert.degree}</p>
                <p className='text-darkputty'>{cert.year}</p>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    visibleDescriptionIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className='text-sm text-darkputty'>{cert.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Certifications;
