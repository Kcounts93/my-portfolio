import React, { useState } from "react";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    title: "Front End Developer/Designer",
    company: "Ignitium",
    date: "Jun 2022 - Present",
    description:
      "Responsible for accurately replicating client websites. Building, maintaining, and designing landing pages using HTML, CSS, JavaScript. Responsible for managing our landing page platform.",
  },
  {
    id: 2,
    title: "Web Designer/Developer",
    company: "Marketing Beaver",
    date: "Jan 2022 - Jun 2022",
    description:
      "Served as the primary web designer for local clients in the CDA area, specializing in crafting responsive WordPress websites and expanding skills in vanilla HTML, CSS, and JavaScript.",
  },
  {
    id: 3,
    title: "Marketing & Social Media Intern",
    company: "The Jacklin Arts Center",
    date: "Jan 2022 - Apr 2022",
    description:
      "Managed Facebook and Instagram marketing and maintained WordPress website for a non-profit cultural arts center, enhancing online presence and community engagement.",
  },
  {
    id: 4,
    title: "Web Designer/Video Editor",
    company: "EML Radio - Full time",
    date: "Oct 2019 - Aug 2020",
    description:
      "Leveraged technical skills in WordPress, CSS, HTML, and Javascript to make edits to a custom themed site hosted in WordPress. Used Adobe Premiere to edit podcasts, videos and music.",
  },
];

const Experience = () => {
  const [visibleDescriptionIndex, setVisibleDescriptionIndex] = useState(null);

  const handleToggleDescription = (index) => {
    setVisibleDescriptionIndex(
      visibleDescriptionIndex === index ? null : index
    );
  };

  const mainExperience = experiences.find((exp) => exp.id === 1);
  const internships = experiences.filter((exp) => exp.id >= 2 && exp.id <= 4);

  return (
    <div className='rounded-md mt-10 md:mt-0'>
      <h2 className='text-xl font-light mb-5'>Experience</h2>
      <div className='flex flex-col'>
        <div
          className='cursor-pointer shadow-md group relative flex flex-col items-start w-full mb-7 rounded-md bg-charcoal px-3 py-3 overflow-hidden'
          onClick={() => handleToggleDescription(mainExperience.id)}
        >
          <div className='flex flex-row'>
            <div className=''>
              <FiBriefcase className='text-lg mt-1 text-drap' />
            </div>
            <div className='flex flex-col ml-2'>
              <h3 className='text-md font-medium'>{mainExperience.title}</h3>
              <p className='text-darkputty'>{mainExperience.company}</p>
              <p className='text-darkputty'>{mainExperience.date}</p>
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  visibleDescriptionIndex === mainExperience.id
                    ? "max-h-96"
                    : "max-h-0"
                }`}
              >
                <p className='text-sm text-darkputty mt-1'>
                  {mainExperience.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <h2 className='text-xl font-light mb-5'>Internships</h2>
        {internships.map((exp) => (
          <div
            key={exp.id}
            className='cursor-pointer shadow-md group relative flex flex-col items-start w-full mb-7 rounded-lg bg-charcoal px-3 py-3 overflow-hidden'
            onClick={() => handleToggleDescription(exp.id)}
          >
            <div className='flex flex-row'>
              <div className=''>
                <FiBriefcase className='text-lg mt-1 text-drap' />
              </div>
              <div className='flex flex-col ml-2'>
                <h3 className='text-md font-medium'>{exp.title}</h3>
                <p className='text-darkputty'>{exp.company}</p>
                <p className='text-darkputty'>{exp.date}</p>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    visibleDescriptionIndex === exp.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className='text-sm text-darkputty mt-1'>
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
