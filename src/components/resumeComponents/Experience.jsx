import React, { useState } from "react";
import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    title: "Front End Developer/Designer",
    company: "Ignitium",
    date: "Jun 2022 - Present",
    description:
      "Responsible for accurately replicating client websites. Building, maintaining, and designing landing pages using HTML, CSS, JavaScript. Responsible for managing our landing page platform.",
  },
  {
    title: "Web Designer/Developer",
    company: "Marketing Beaver",
    date: "Jan 2022 - Jun 2022",
    description:
      "Served as the primary web designer for local clients in the CDA area, specializing in crafting responsive WordPress websites and expanding skills in vanilla HTML, CSS, and JavaScript.",
  },
  {
    title: "Marketing & Social Media Intern",
    company: "The Jacklin Arts Center",
    date: "Jan 2022 - Apr 2022",
    description:
      "Managed Facebook and Instagram marketing and maintained WordPress website for a non-profit cultural arts center, enhancing online presence and community engagement.",
  },
  {
    title: "Web Designer/Video Editor",
    company: "EML Radio - Full time",
    date: "Oct 2019 - Aug 2020",
    description:
      "Leveraged technical skills in WordPress, CSS, HTML, and Javascript to make edits to a custom themed site hosted in WordPress. Used Adobe Premiere to edit podcasts, videos and music.",
  },
];

const ExperienceItem = ({ exp }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility state
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div
      onClick={toggleVisibility}
      className="no-select cursor-pointer group relative flex items-start w-full mb-7 rounded-lg  bg-charcoal px-2 py-4 overflow-hidden md:hover:bg-opacity-60 md:transition md:duration-300 md:ease-in-out"
    >
      <div className="flex flex-col items-start mr-4">
        <FiBriefcase className="text-md text-drap mt-1 text-blue-500" />
      </div>
      <div className="flex-1">
        <h3 className="text-md">{exp.title}</h3>
        <p className="text-darkputty">{exp.company}</p>
        <p className="text-darkputty">{exp.date}</p>
      </div>
      <div className={`absolute left-0 right-0 bottom-0 ${isVisible ? 'translate-y-0' : 'translate-y-full'} md:group-hover:translate-y-0 transition-transform duration-500 ease-in-out bg-charcoal p-2 rounded-b-lg`}>
        <p className="text-sm text-putty">{exp.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="h-full rounded-xl mt-10 md:mt-0">
      <h2 className="text-xl font-light mb-5">Experience</h2>
      <div className="flex flex-col items-center">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} exp={exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;